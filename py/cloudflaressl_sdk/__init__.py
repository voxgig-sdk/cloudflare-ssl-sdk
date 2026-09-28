# CloudflareSsl SDK

from cloudflaressl_sdk.utility.voxgig_struct import voxgig_struct as vs
from cloudflaressl_sdk.core.utility_type import CloudflareSslUtility
from cloudflaressl_sdk.core.spec import CloudflareSslSpec
from cloudflaressl_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from cloudflaressl_sdk.utility import register

# Load features
from cloudflaressl_sdk.feature.base_feature import CloudflareSslBaseFeature
from cloudflaressl_sdk.features import _has_feature, _make_feature


class CloudflareSslSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = CloudflareSslUtility()
        self._utility = utility

        from cloudflaressl_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return CloudflareSslUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = CloudflareSslSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "CloudflareSslSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("CloudflareSslSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def CacheApiResponseSingleId(self, data=None) -> "CacheApiResponseSingleIdEntity":
        """Entity factory: client.CacheApiResponseSingleId().list() / client.CacheApiResponseSingleId().load({"id": ...})."""
        from cloudflaressl_sdk.entity.cache_api_response_single_id_entity import CacheApiResponseSingleIdEntity
        return CacheApiResponseSingleIdEntity(self, data)


    def CacheAutoOriginTlsKex(self, data=None) -> "CacheAutoOriginTlsKexEntity":
        """Entity factory: client.CacheAutoOriginTlsKex().list() / client.CacheAutoOriginTlsKex().load({"id": ...})."""
        from cloudflaressl_sdk.entity.cache_auto_origin_tls_kex_entity import CacheAutoOriginTlsKexEntity
        return CacheAutoOriginTlsKexEntity(self, data)


    def CustomHostname(self, data=None) -> "CustomHostnameEntity":
        """Entity factory: client.CustomHostname().list() / client.CustomHostname().load({"id": ...})."""
        from cloudflaressl_sdk.entity.custom_hostname_entity import CustomHostnameEntity
        return CustomHostnameEntity(self, data)


    def CustomHostnameForAZone(self, data=None) -> "CustomHostnameForAZoneEntity":
        """Entity factory: client.CustomHostnameForAZone().list() / client.CustomHostnameForAZone().load({"id": ...})."""
        from cloudflaressl_sdk.entity.custom_hostname_for_a_zone_entity import CustomHostnameForAZoneEntity
        return CustomHostnameForAZoneEntity(self, data)


    def OriginTl(self, data=None) -> "OriginTlEntity":
        """Entity factory: client.OriginTl().list() / client.OriginTl().load({"id": ...})."""
        from cloudflaressl_sdk.entity.origin_tl_entity import OriginTlEntity
        return OriginTlEntity(self, data)


    def Recommendation(self, data=None) -> "RecommendationEntity":
        """Entity factory: client.Recommendation().list() / client.Recommendation().load({"id": ...})."""
        from cloudflaressl_sdk.entity.recommendation_entity import RecommendationEntity
        return RecommendationEntity(self, data)


    def SslAutomaticMode(self, data=None) -> "SslAutomaticModeEntity":
        """Entity factory: client.SslAutomaticMode().list() / client.SslAutomaticMode().load({"id": ...})."""
        from cloudflaressl_sdk.entity.ssl_automatic_mode_entity import SslAutomaticModeEntity
        return SslAutomaticModeEntity(self, data)


    def TlsCertificatesAndHostnamesAdvancedCertificatePackResponse(self, data=None) -> "TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesAdvancedCertificatePackResponse().list() / client.TlsCertificatesAndHostnamesAdvancedCertificatePackResponse().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_advanced_certificate_pack_response_entity import TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity
        return TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity(self, data)


    def TlsCertificatesAndHostnamesAssociationResponseCollection(self, data=None) -> "TlsCertificatesAndHostnamesAssociationResponseCollectionEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesAssociationResponseCollection().list() / client.TlsCertificatesAndHostnamesAssociationResponseCollection().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_association_response_collection_entity import TlsCertificatesAndHostnamesAssociationResponseCollectionEntity
        return TlsCertificatesAndHostnamesAssociationResponseCollectionEntity(self, data)


    def TlsCertificatesAndHostnamesCertificateAnalyze(self, data=None) -> "TlsCertificatesAndHostnamesCertificateAnalyzeEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesCertificateAnalyze().list() / client.TlsCertificatesAndHostnamesCertificateAnalyze().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_certificate_analyze_entity import TlsCertificatesAndHostnamesCertificateAnalyzeEntity
        return TlsCertificatesAndHostnamesCertificateAnalyzeEntity(self, data)


    def TlsCertificatesAndHostnamesCertificatePackQuota(self, data=None) -> "TlsCertificatesAndHostnamesCertificatePackQuotaEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesCertificatePackQuota().list() / client.TlsCertificatesAndHostnamesCertificatePackQuota().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_certificate_pack_quota_entity import TlsCertificatesAndHostnamesCertificatePackQuotaEntity
        return TlsCertificatesAndHostnamesCertificatePackQuotaEntity(self, data)


    def TlsCertificatesAndHostnamesCertificatePackResponseCollection(self, data=None) -> "TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesCertificatePackResponseCollection().list() / client.TlsCertificatesAndHostnamesCertificatePackResponseCollection().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_certificate_pack_response_collection_entity import TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity
        return TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity(self, data)


    def TlsCertificatesAndHostnamesCertificatePackResponseSingle(self, data=None) -> "TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesCertificatePackResponseSingle().list() / client.TlsCertificatesAndHostnamesCertificatePackResponseSingle().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_certificate_pack_response_single_entity import TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity
        return TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity(self, data)


    def TlsCertificatesAndHostnamesCertificateResponseCollection(self, data=None) -> "TlsCertificatesAndHostnamesCertificateResponseCollectionEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesCertificateResponseCollection().list() / client.TlsCertificatesAndHostnamesCertificateResponseCollection().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_certificate_response_collection_entity import TlsCertificatesAndHostnamesCertificateResponseCollectionEntity
        return TlsCertificatesAndHostnamesCertificateResponseCollectionEntity(self, data)


    def TlsCertificatesAndHostnamesCertificateResponseCollection3(self, data=None) -> "TlsCertificatesAndHostnamesCertificateResponseCollection3Entity":
        """Entity factory: client.TlsCertificatesAndHostnamesCertificateResponseCollection3().list() / client.TlsCertificatesAndHostnamesCertificateResponseCollection3().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_certificate_response_collection_3_entity import TlsCertificatesAndHostnamesCertificateResponseCollection3Entity
        return TlsCertificatesAndHostnamesCertificateResponseCollection3Entity(self, data)


    def TlsCertificatesAndHostnamesCertificateResponseCollection4(self, data=None) -> "TlsCertificatesAndHostnamesCertificateResponseCollection4Entity":
        """Entity factory: client.TlsCertificatesAndHostnamesCertificateResponseCollection4().list() / client.TlsCertificatesAndHostnamesCertificateResponseCollection4().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_certificate_response_collection_4_entity import TlsCertificatesAndHostnamesCertificateResponseCollection4Entity
        return TlsCertificatesAndHostnamesCertificateResponseCollection4Entity(self, data)


    def TlsCertificatesAndHostnamesCertificateResponseCollection5(self, data=None) -> "TlsCertificatesAndHostnamesCertificateResponseCollection5Entity":
        """Entity factory: client.TlsCertificatesAndHostnamesCertificateResponseCollection5().list() / client.TlsCertificatesAndHostnamesCertificateResponseCollection5().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_certificate_response_collection_5_entity import TlsCertificatesAndHostnamesCertificateResponseCollection5Entity
        return TlsCertificatesAndHostnamesCertificateResponseCollection5Entity(self, data)


    def TlsCertificatesAndHostnamesCertificateResponseIdOnly(self, data=None) -> "TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesCertificateResponseIdOnly().list() / client.TlsCertificatesAndHostnamesCertificateResponseIdOnly().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_certificate_response_id_only_entity import TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity
        return TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity(self, data)


    def TlsCertificatesAndHostnamesCertificateResponseSingle(self, data=None) -> "TlsCertificatesAndHostnamesCertificateResponseSingleEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesCertificateResponseSingle().list() / client.TlsCertificatesAndHostnamesCertificateResponseSingle().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_certificate_response_single_entity import TlsCertificatesAndHostnamesCertificateResponseSingleEntity
        return TlsCertificatesAndHostnamesCertificateResponseSingleEntity(self, data)


    def TlsCertificatesAndHostnamesCertificateResponseSingle2(self, data=None) -> "TlsCertificatesAndHostnamesCertificateResponseSingle2Entity":
        """Entity factory: client.TlsCertificatesAndHostnamesCertificateResponseSingle2().list() / client.TlsCertificatesAndHostnamesCertificateResponseSingle2().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_certificate_response_single_2_entity import TlsCertificatesAndHostnamesCertificateResponseSingle2Entity
        return TlsCertificatesAndHostnamesCertificateResponseSingle2Entity(self, data)


    def TlsCertificatesAndHostnamesCertificateResponseSingle3(self, data=None) -> "TlsCertificatesAndHostnamesCertificateResponseSingle3Entity":
        """Entity factory: client.TlsCertificatesAndHostnamesCertificateResponseSingle3().list() / client.TlsCertificatesAndHostnamesCertificateResponseSingle3().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_certificate_response_single_3_entity import TlsCertificatesAndHostnamesCertificateResponseSingle3Entity
        return TlsCertificatesAndHostnamesCertificateResponseSingle3Entity(self, data)


    def TlsCertificatesAndHostnamesCertificateResponseSingle4(self, data=None) -> "TlsCertificatesAndHostnamesCertificateResponseSingle4Entity":
        """Entity factory: client.TlsCertificatesAndHostnamesCertificateResponseSingle4().list() / client.TlsCertificatesAndHostnamesCertificateResponseSingle4().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_certificate_response_single_4_entity import TlsCertificatesAndHostnamesCertificateResponseSingle4Entity
        return TlsCertificatesAndHostnamesCertificateResponseSingle4Entity(self, data)


    def TlsCertificatesAndHostnamesCertificateResponseSingle5(self, data=None) -> "TlsCertificatesAndHostnamesCertificateResponseSingle5Entity":
        """Entity factory: client.TlsCertificatesAndHostnamesCertificateResponseSingle5().list() / client.TlsCertificatesAndHostnamesCertificateResponseSingle5().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_certificate_response_single_5_entity import TlsCertificatesAndHostnamesCertificateResponseSingle5Entity
        return TlsCertificatesAndHostnamesCertificateResponseSingle5Entity(self, data)


    def TlsCertificatesAndHostnamesCertificateResponseSinglePost(self, data=None) -> "TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesCertificateResponseSinglePost().list() / client.TlsCertificatesAndHostnamesCertificateResponseSinglePost().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_certificate_response_single_post_entity import TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity
        return TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity(self, data)


    def TlsCertificatesAndHostnamesCertificateRevoke(self, data=None) -> "TlsCertificatesAndHostnamesCertificateRevokeEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesCertificateRevoke().list() / client.TlsCertificatesAndHostnamesCertificateRevoke().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_certificate_revoke_entity import TlsCertificatesAndHostnamesCertificateRevokeEntity
        return TlsCertificatesAndHostnamesCertificateRevokeEntity(self, data)


    def TlsCertificatesAndHostnamesClientCertificateResponse(self, data=None) -> "TlsCertificatesAndHostnamesClientCertificateResponseEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesClientCertificateResponse().list() / client.TlsCertificatesAndHostnamesClientCertificateResponse().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_client_certificate_response_entity import TlsCertificatesAndHostnamesClientCertificateResponseEntity
        return TlsCertificatesAndHostnamesClientCertificateResponseEntity(self, data)


    def TlsCertificatesAndHostnamesClientCertificateResponseSingle(self, data=None) -> "TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesClientCertificateResponseSingle().list() / client.TlsCertificatesAndHostnamesClientCertificateResponseSingle().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_client_certificate_response_single_entity import TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity
        return TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity(self, data)


    def TlsCertificatesAndHostnamesCustomCsrResponseCollection(self, data=None) -> "TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesCustomCsrResponseCollection().list() / client.TlsCertificatesAndHostnamesCustomCsrResponseCollection().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_custom_csr_response_collection_entity import TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity
        return TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity(self, data)


    def TlsCertificatesAndHostnamesCustomCsrResponseCollection2(self, data=None) -> "TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity":
        """Entity factory: client.TlsCertificatesAndHostnamesCustomCsrResponseCollection2().list() / client.TlsCertificatesAndHostnamesCustomCsrResponseCollection2().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_custom_csr_response_collection_2_entity import TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity
        return TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity(self, data)


    def TlsCertificatesAndHostnamesCustomCsrResponseIdOnly(self, data=None) -> "TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesCustomCsrResponseIdOnly().list() / client.TlsCertificatesAndHostnamesCustomCsrResponseIdOnly().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_custom_csr_response_id_only_entity import TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity
        return TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity(self, data)


    def TlsCertificatesAndHostnamesCustomCsrResponseSingle(self, data=None) -> "TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesCustomCsrResponseSingle().list() / client.TlsCertificatesAndHostnamesCustomCsrResponseSingle().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_custom_csr_response_single_entity import TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity
        return TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity(self, data)


    def TlsCertificatesAndHostnamesCustomCsrResponseSingle2(self, data=None) -> "TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity":
        """Entity factory: client.TlsCertificatesAndHostnamesCustomCsrResponseSingle2().list() / client.TlsCertificatesAndHostnamesCustomCsrResponseSingle2().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_custom_csr_response_single_2_entity import TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity
        return TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity(self, data)


    def TlsCertificatesAndHostnamesCustomHostnameQuota(self, data=None) -> "TlsCertificatesAndHostnamesCustomHostnameQuotaEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesCustomHostnameQuota().list() / client.TlsCertificatesAndHostnamesCustomHostnameQuota().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_custom_hostname_quota_entity import TlsCertificatesAndHostnamesCustomHostnameQuotaEntity
        return TlsCertificatesAndHostnamesCustomHostnameQuotaEntity(self, data)


    def TlsCertificatesAndHostnamesCustomHostnameResponseCollection(self, data=None) -> "TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesCustomHostnameResponseCollection().list() / client.TlsCertificatesAndHostnamesCustomHostnameResponseCollection().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_custom_hostname_response_collection_entity import TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity
        return TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity(self, data)


    def TlsCertificatesAndHostnamesCustomHostnameResponseSingle(self, data=None) -> "TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle().list() / client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_custom_hostname_response_single_entity import TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity
        return TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity(self, data)


    def TlsCertificatesAndHostnamesCustomTrustStoreResponse(self, data=None) -> "TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesCustomTrustStoreResponse().list() / client.TlsCertificatesAndHostnamesCustomTrustStoreResponse().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_custom_trust_store_response_entity import TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity
        return TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity(self, data)


    def TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly(self, data=None) -> "TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly().list() / client.TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_custom_trust_store_response_id_only_entity import TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity
        return TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity(self, data)


    def TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle(self, data=None) -> "TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle().list() / client.TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_custom_trust_store_response_single_entity import TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity
        return TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity(self, data)


    def TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack(self, data=None) -> "TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack().list() / client.TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_delete_advanced_certificate_pack_entity import TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity
        return TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity(self, data)


    def TlsCertificatesAndHostnamesEnabled(self, data=None) -> "TlsCertificatesAndHostnamesEnabledEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesEnabled().list() / client.TlsCertificatesAndHostnamesEnabled().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_enabled_entity import TlsCertificatesAndHostnamesEnabledEntity
        return TlsCertificatesAndHostnamesEnabledEntity(self, data)


    def TlsCertificatesAndHostnamesFallbackOrigin(self, data=None) -> "TlsCertificatesAndHostnamesFallbackOriginEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesFallbackOrigin().list() / client.TlsCertificatesAndHostnamesFallbackOrigin().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_fallback_origin_entity import TlsCertificatesAndHostnamesFallbackOriginEntity
        return TlsCertificatesAndHostnamesFallbackOriginEntity(self, data)


    def TlsCertificatesAndHostnamesHostnameAopResponseCollection(self, data=None) -> "TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesHostnameAopResponseCollection().list() / client.TlsCertificatesAndHostnamesHostnameAopResponseCollection().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_hostname_aop_response_collection_entity import TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity
        return TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity(self, data)


    def TlsCertificatesAndHostnamesHostnameAopSingle(self, data=None) -> "TlsCertificatesAndHostnamesHostnameAopSingleEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesHostnameAopSingle().list() / client.TlsCertificatesAndHostnamesHostnameAopSingle().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_hostname_aop_single_entity import TlsCertificatesAndHostnamesHostnameAopSingleEntity
        return TlsCertificatesAndHostnamesHostnameAopSingleEntity(self, data)


    def TlsCertificatesAndHostnamesHostnameAssocResponseCollection(self, data=None) -> "TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesHostnameAssocResponseCollection().list() / client.TlsCertificatesAndHostnamesHostnameAssocResponseCollection().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_hostname_assoc_response_collection_entity import TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity
        return TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity(self, data)


    def TlsCertificatesAndHostnamesKeylessResponseCollection(self, data=None) -> "TlsCertificatesAndHostnamesKeylessResponseCollectionEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesKeylessResponseCollection().list() / client.TlsCertificatesAndHostnamesKeylessResponseCollection().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_keyless_response_collection_entity import TlsCertificatesAndHostnamesKeylessResponseCollectionEntity
        return TlsCertificatesAndHostnamesKeylessResponseCollectionEntity(self, data)


    def TlsCertificatesAndHostnamesKeylessResponseSingle(self, data=None) -> "TlsCertificatesAndHostnamesKeylessResponseSingleEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesKeylessResponseSingle().list() / client.TlsCertificatesAndHostnamesKeylessResponseSingle().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_keyless_response_single_entity import TlsCertificatesAndHostnamesKeylessResponseSingleEntity
        return TlsCertificatesAndHostnamesKeylessResponseSingleEntity(self, data)


    def TlsCertificatesAndHostnamesKeylessResponseSingleId(self, data=None) -> "TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesKeylessResponseSingleId().list() / client.TlsCertificatesAndHostnamesKeylessResponseSingleId().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_keyless_response_single_id_entity import TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity
        return TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity(self, data)


    def TlsCertificatesAndHostnamesPerHostnameSetting(self, data=None) -> "TlsCertificatesAndHostnamesPerHostnameSettingEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesPerHostnameSetting().list() / client.TlsCertificatesAndHostnamesPerHostnameSetting().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_per_hostname_setting_entity import TlsCertificatesAndHostnamesPerHostnameSettingEntity
        return TlsCertificatesAndHostnamesPerHostnameSettingEntity(self, data)


    def TlsCertificatesAndHostnamesPerHostnameSettingsResponse(self, data=None) -> "TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse().list() / client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_per_hostname_settings_response_entity import TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity
        return TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity(self, data)


    def TlsCertificatesAndHostnamesPerHostnameSettingsResponse2(self, data=None) -> "TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity":
        """Entity factory: client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse2().list() / client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse2().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_per_hostname_settings_response2_entity import TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity
        return TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity(self, data)


    def TlsCertificatesAndHostnamesSslUniversalSetting(self, data=None) -> "TlsCertificatesAndHostnamesSslUniversalSettingEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesSslUniversalSetting().list() / client.TlsCertificatesAndHostnamesSslUniversalSetting().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_ssl_universal_setting_entity import TlsCertificatesAndHostnamesSslUniversalSettingEntity
        return TlsCertificatesAndHostnamesSslUniversalSettingEntity(self, data)


    def TlsCertificatesAndHostnamesSslValidationMethodResponse(self, data=None) -> "TlsCertificatesAndHostnamesSslValidationMethodResponseEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesSslValidationMethodResponse().list() / client.TlsCertificatesAndHostnamesSslValidationMethodResponse().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_ssl_validation_method_response_entity import TlsCertificatesAndHostnamesSslValidationMethodResponseEntity
        return TlsCertificatesAndHostnamesSslValidationMethodResponseEntity(self, data)


    def TlsCertificatesAndHostnamesSslVerificationResponseCollection(self, data=None) -> "TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesSslVerificationResponseCollection().list() / client.TlsCertificatesAndHostnamesSslVerificationResponseCollection().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_ssl_verification_response_collection_entity import TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity
        return TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity(self, data)


    def TlsCertificatesAndHostnamesTotalTlsSetting(self, data=None) -> "TlsCertificatesAndHostnamesTotalTlsSettingEntity":
        """Entity factory: client.TlsCertificatesAndHostnamesTotalTlsSetting().list() / client.TlsCertificatesAndHostnamesTotalTlsSetting().load({"id": ...})."""
        from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_total_tls_setting_entity import TlsCertificatesAndHostnamesTotalTlsSettingEntity
        return TlsCertificatesAndHostnamesTotalTlsSettingEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "CloudflareSslSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from cloudflaressl_sdk.entity.cache_api_response_single_id_entity import CacheApiResponseSingleIdEntity
    from cloudflaressl_sdk.entity.cache_auto_origin_tls_kex_entity import CacheAutoOriginTlsKexEntity
    from cloudflaressl_sdk.entity.custom_hostname_entity import CustomHostnameEntity
    from cloudflaressl_sdk.entity.custom_hostname_for_a_zone_entity import CustomHostnameForAZoneEntity
    from cloudflaressl_sdk.entity.origin_tl_entity import OriginTlEntity
    from cloudflaressl_sdk.entity.recommendation_entity import RecommendationEntity
    from cloudflaressl_sdk.entity.ssl_automatic_mode_entity import SslAutomaticModeEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_advanced_certificate_pack_response_entity import TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_association_response_collection_entity import TlsCertificatesAndHostnamesAssociationResponseCollectionEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_certificate_analyze_entity import TlsCertificatesAndHostnamesCertificateAnalyzeEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_certificate_pack_quota_entity import TlsCertificatesAndHostnamesCertificatePackQuotaEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_certificate_pack_response_collection_entity import TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_certificate_pack_response_single_entity import TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_certificate_response_collection_entity import TlsCertificatesAndHostnamesCertificateResponseCollectionEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_certificate_response_collection_3_entity import TlsCertificatesAndHostnamesCertificateResponseCollection3Entity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_certificate_response_collection_4_entity import TlsCertificatesAndHostnamesCertificateResponseCollection4Entity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_certificate_response_collection_5_entity import TlsCertificatesAndHostnamesCertificateResponseCollection5Entity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_certificate_response_id_only_entity import TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_certificate_response_single_entity import TlsCertificatesAndHostnamesCertificateResponseSingleEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_certificate_response_single_2_entity import TlsCertificatesAndHostnamesCertificateResponseSingle2Entity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_certificate_response_single_3_entity import TlsCertificatesAndHostnamesCertificateResponseSingle3Entity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_certificate_response_single_4_entity import TlsCertificatesAndHostnamesCertificateResponseSingle4Entity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_certificate_response_single_5_entity import TlsCertificatesAndHostnamesCertificateResponseSingle5Entity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_certificate_response_single_post_entity import TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_certificate_revoke_entity import TlsCertificatesAndHostnamesCertificateRevokeEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_client_certificate_response_entity import TlsCertificatesAndHostnamesClientCertificateResponseEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_client_certificate_response_single_entity import TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_custom_csr_response_collection_entity import TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_custom_csr_response_collection_2_entity import TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_custom_csr_response_id_only_entity import TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_custom_csr_response_single_entity import TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_custom_csr_response_single_2_entity import TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_custom_hostname_quota_entity import TlsCertificatesAndHostnamesCustomHostnameQuotaEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_custom_hostname_response_collection_entity import TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_custom_hostname_response_single_entity import TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_custom_trust_store_response_entity import TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_custom_trust_store_response_id_only_entity import TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_custom_trust_store_response_single_entity import TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_delete_advanced_certificate_pack_entity import TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_enabled_entity import TlsCertificatesAndHostnamesEnabledEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_fallback_origin_entity import TlsCertificatesAndHostnamesFallbackOriginEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_hostname_aop_response_collection_entity import TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_hostname_aop_single_entity import TlsCertificatesAndHostnamesHostnameAopSingleEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_hostname_assoc_response_collection_entity import TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_keyless_response_collection_entity import TlsCertificatesAndHostnamesKeylessResponseCollectionEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_keyless_response_single_entity import TlsCertificatesAndHostnamesKeylessResponseSingleEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_keyless_response_single_id_entity import TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_per_hostname_setting_entity import TlsCertificatesAndHostnamesPerHostnameSettingEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_per_hostname_settings_response_entity import TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_per_hostname_settings_response2_entity import TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_ssl_universal_setting_entity import TlsCertificatesAndHostnamesSslUniversalSettingEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_ssl_validation_method_response_entity import TlsCertificatesAndHostnamesSslValidationMethodResponseEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_ssl_verification_response_collection_entity import TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity
    from cloudflaressl_sdk.entity.tls_certificates_and_hostnames_total_tls_setting_entity import TlsCertificatesAndHostnamesTotalTlsSettingEntity
