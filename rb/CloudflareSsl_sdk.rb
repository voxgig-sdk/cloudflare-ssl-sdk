# CloudflareSsl SDK

require_relative 'utility/struct/voxgig_struct'
require_relative 'core/utility_type'
require_relative 'core/spec'
require_relative 'core/helpers'

# Load utility registration
require_relative 'utility/register'

# Load config and features
require_relative 'config'
require_relative 'feature/base_feature'
require_relative 'features'

# Load typed models (Struct value objects).
require_relative 'CloudflareSsl_types'


class CloudflareSslSDK
  attr_accessor :mode, :features, :options

  def initialize(options = {})
    @mode = "live"
    @features = []
    @options = nil

    utility = CloudflareSslUtility.new
    @_utility = utility

    config = CloudflareSslConfig.shared_config

    @_rootctx = utility.make_context.call({
      "client" => self,
      "utility" => utility,
      "config" => config,
      "options" => options || {},
      "shared" => {},
    }, nil)

    @options = utility.make_options.call(@_rootctx)

    if VoxgigStruct.getpath(@options, "feature.test.active") == true
      @mode = "test"
    end

    @_rootctx.options = @options

    # Add features in the resolved order (make_options puts an explicit array
    # order first, else defaults to test-first). Ordering matters: the `test`
    # feature installs the base mock transport and the transport features
    # (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
    # must be added before them to sit at the base of the chain.
    feature_opts = CloudflareSslHelpers.to_map(VoxgigStruct.getprop(@options, "feature"))
    if feature_opts
      featureorder = VoxgigStruct.getpath(@options, "__derived__.featureorder")
      if featureorder.is_a?(Array)
        featureorder.each do |fname|
          fopts = CloudflareSslHelpers.to_map(feature_opts[fname])
          if fopts && fopts["active"] == true
            utility.feature_add.call(@_rootctx, CloudflareSslFeatures.make_feature(fname))
          end
        end
      end
    end

    # Add extension features.
    extend_val = VoxgigStruct.getprop(@options, "extend")
    if extend_val.is_a?(Array)
      extend_val.each do |f|
        if f.respond_to?(:get_name)
          utility.feature_add.call(@_rootctx, f)
        end
      end
    end

    # Initialize features.
    @features.each do |f|
      utility.feature_init.call(@_rootctx, f)
    end

    utility.feature_hook.call(@_rootctx, "PostConstruct")
  end

  def options_map
    out = VoxgigStruct.clone(@options)
    out.is_a?(Hash) ? out : {}
  end

  def get_utility
    CloudflareSslUtility.copy(@_utility)
  end

  def get_root_ctx
    @_rootctx
  end

  def prepare(fetchargs = {})
    utility = @_utility
    fetchargs ||= {}

    ctrl = CloudflareSslHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "prepare",
      "ctrl" => ctrl,
    }, @_rootctx)

    opts = @options
    path = VoxgigStruct.getprop(fetchargs, "path") || ""
    path = "" unless path.is_a?(String)
    method_val = VoxgigStruct.getprop(fetchargs, "method") || "GET"
    method_val = "GET" unless method_val.is_a?(String)
    params = CloudflareSslHelpers.to_map(VoxgigStruct.getprop(fetchargs, "params")) || {}
    query = CloudflareSslHelpers.to_map(VoxgigStruct.getprop(fetchargs, "query")) || {}
    headers = utility.prepare_headers.call(ctx)

    base = VoxgigStruct.getprop(opts, "base") || ""
    base = "" unless base.is_a?(String)
    prefix = VoxgigStruct.getprop(opts, "prefix") || ""
    prefix = "" unless prefix.is_a?(String)
    suffix = VoxgigStruct.getprop(opts, "suffix") || ""
    suffix = "" unless suffix.is_a?(String)

    ctx.spec = CloudflareSslSpec.new({
      "base" => base, "prefix" => prefix, "suffix" => suffix,
      "path" => path, "method" => method_val,
      "params" => params, "query" => query, "headers" => headers,
      "body" => VoxgigStruct.getprop(fetchargs, "body"),
      "step" => "start",
    })

    # Merge user-provided headers.
    uh = VoxgigStruct.getprop(fetchargs, "headers")
    if uh.is_a?(Hash)
      uh.each { |k, v| ctx.spec.headers[k] = v }
    end

    _, err = utility.prepare_auth.call(ctx)
    raise err if err

    # make_fetch_def returns a (fetchdef, err) tuple; destructure it and
    # return just the fetchdef Hash (raising on error) so callers — including
    # direct(), which indexes fetchdef["url"] — receive a Hash, mirroring the
    # ts/py prepare().
    fetchdef, fd_err = utility.make_fetch_def.call(ctx)
    raise fd_err if fd_err

    fetchdef
  end

  # Raw endpoint access is operator-controllable, like every entity op.
  # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  # either one reaches the same endpoint.
  def direct(fetchargs = {})
    return op_denied("direct") unless op_allowed?("direct")

    raw_request(fetchargs)
  end

  # Is this raw-access op permitted by the SDK's allow.op option?
  def op_allowed?(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    allow_op.is_a?(String) && allow_op.include?(op)
  end

  def op_denied(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    {
      "ok" => false,
      "err" => CloudflareSslError.new(
        "#{op}_allow",
        "CloudflareSslSDK: #{op}: operation not allowed by" \
        " SDK option allow.op value: \"#{allow_op}\""),
    }
  end

  # Ungated request path shared by direct and graphql, each of which checks
  # its own allow.op token first. Separate, rather than a flag on fetchargs:
  # a caller-supplied marker would let anyone opt straight back out of the
  # gate by passing it.
  def raw_request(fetchargs = {})
    utility = @_utility

    # direct() is the raw-HTTP escape hatch: it always returns a result hash
    # ({ "ok" => ..., ... }) and never raises. prepare() raises on error, so
    # trap that and surface it in the hash.
    begin
      fetchdef = prepare(fetchargs)
    rescue CloudflareSslError => err
      return { "ok" => false, "err" => err }
    end

    fetchargs ||= {}
    ctrl = CloudflareSslHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "direct",
      "ctrl" => ctrl,
    }, @_rootctx)

    url = fetchdef["url"] || ""
    fetched, fetch_err = utility.fetcher.call(ctx, url, fetchdef)

    return { "ok" => false, "err" => fetch_err } if fetch_err

    if fetched.nil?
      return {
        "ok" => false,
        "err" => ctx.make_error("direct_no_response", "response: undefined"),
      }
    end

    if fetched.is_a?(Hash)
      status = CloudflareSslHelpers.to_int(VoxgigStruct.getprop(fetched, "status"))
      headers = VoxgigStruct.getprop(fetched, "headers") || {}

      # No-body responses (204, 304) and explicit zero content-length must
      # skip JSON parsing — calling json() on an empty body errors.
      content_length = headers.is_a?(Hash) ? headers["content-length"] : nil
      no_body = status == 204 || status == 304 || content_length.to_s == "0"

      json_data = nil
      unless no_body
        jf = VoxgigStruct.getprop(fetched, "json")
        if jf.is_a?(Proc)
          begin
            json_data = jf.call
          rescue StandardError
            # Non-JSON body — leave data nil, keep status/headers.
            json_data = nil
          end
        end
      end

      return {
        "ok" => status >= 200 && status < 300,
        "status" => status,
        "headers" => headers,
        "data" => json_data,
      }
    end

    return {
      "ok" => false,
      "err" => ctx.make_error("direct_invalid", "invalid response type"),
    }
  end

  # Raw GraphQL access: the pressure valve that makes the generated surface's
  # deliberate omissions (per-call selection sets, typed filter builders,
  # batching, subscriptions) livable — the whole schema stays reachable.
  #
  # Thin wrapper over the same prepare/fetch path direct uses, with the one
  # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
  # as a top-level `errors` array, so status alone would report a failed
  # query as ok.
  #
  # NOTE: like direct, this bypasses the feature pipeline — no retry,
  # ratelimit or paging features apply.
  def graphql(query, variables = nil, ctrl = nil)
    return op_denied("graphql") unless op_allowed?("graphql")

    res = raw_request({
      "method" => "POST",
      "headers" => { "content-type" => "application/json" },
      "body" => { "query" => query, "variables" => variables || {} },
      "ctrl" => ctrl || {},
    })

    # Errors are read BEFORE any status check: a GraphQL parse or validation
    # failure comes back as HTTP 400 carrying the standard { errors: [...] }
    # body, and the raw path represents a non-2xx as ok:false with no err —
    # so returning early on status would discard the server's own
    # diagnostics, which are the only useful part of that response.
    errors = VoxgigStruct.getpath(res, "data.errors")

    if errors.is_a?(Array) && !errors.empty?
      first = errors[0].is_a?(Hash) ? errors[0] : {}
      msg = first["message"]
      msg = "graphql error" if msg.nil? || msg.to_s.empty?
      res["ok"] = false
      res["err"] = CloudflareSslError.new(
        "graphql_error", "CloudflareSslSDK: graphql: #{msg}")
      res["graphql"] = errors
    end

    res
  end


  # Canonical facade: client.CacheApiResponseSingleId.list / client.CacheApiResponseSingleId.load({ "id" => ... })
  def CacheApiResponseSingleId(data = nil)
    require_relative 'entity/cache_api_response_single_id_entity'
    CacheApiResponseSingleIdEntity.new(self, data)
  end


  # Canonical facade: client.CacheAutoOriginTlsKex.list / client.CacheAutoOriginTlsKex.load({ "id" => ... })
  def CacheAutoOriginTlsKex(data = nil)
    require_relative 'entity/cache_auto_origin_tls_kex_entity'
    CacheAutoOriginTlsKexEntity.new(self, data)
  end


  # Canonical facade: client.CustomHostname.list / client.CustomHostname.load({ "id" => ... })
  def CustomHostname(data = nil)
    require_relative 'entity/custom_hostname_entity'
    CustomHostnameEntity.new(self, data)
  end


  # Canonical facade: client.CustomHostnameForAZone.list / client.CustomHostnameForAZone.load({ "id" => ... })
  def CustomHostnameForAZone(data = nil)
    require_relative 'entity/custom_hostname_for_a_zone_entity'
    CustomHostnameForAZoneEntity.new(self, data)
  end


  # Canonical facade: client.OriginTl.list / client.OriginTl.load({ "id" => ... })
  def OriginTl(data = nil)
    require_relative 'entity/origin_tl_entity'
    OriginTlEntity.new(self, data)
  end


  # Canonical facade: client.Recommendation.list / client.Recommendation.load({ "id" => ... })
  def Recommendation(data = nil)
    require_relative 'entity/recommendation_entity'
    RecommendationEntity.new(self, data)
  end


  # Canonical facade: client.SslAutomaticMode.list / client.SslAutomaticMode.load({ "id" => ... })
  def SslAutomaticMode(data = nil)
    require_relative 'entity/ssl_automatic_mode_entity'
    SslAutomaticModeEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesAdvancedCertificatePackResponse.list / client.TlsCertificatesAndHostnamesAdvancedCertificatePackResponse.load({ "id" => ... })
  def TlsCertificatesAndHostnamesAdvancedCertificatePackResponse(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_advanced_certificate_pack_response_entity'
    TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesAssociationResponseCollection.list / client.TlsCertificatesAndHostnamesAssociationResponseCollection.load({ "id" => ... })
  def TlsCertificatesAndHostnamesAssociationResponseCollection(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_association_response_collection_entity'
    TlsCertificatesAndHostnamesAssociationResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesCertificateAnalyze.list / client.TlsCertificatesAndHostnamesCertificateAnalyze.load({ "id" => ... })
  def TlsCertificatesAndHostnamesCertificateAnalyze(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_certificate_analyze_entity'
    TlsCertificatesAndHostnamesCertificateAnalyzeEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesCertificatePackQuota.list / client.TlsCertificatesAndHostnamesCertificatePackQuota.load({ "id" => ... })
  def TlsCertificatesAndHostnamesCertificatePackQuota(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_certificate_pack_quota_entity'
    TlsCertificatesAndHostnamesCertificatePackQuotaEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesCertificatePackResponseCollection.list / client.TlsCertificatesAndHostnamesCertificatePackResponseCollection.load({ "id" => ... })
  def TlsCertificatesAndHostnamesCertificatePackResponseCollection(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_certificate_pack_response_collection_entity'
    TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesCertificatePackResponseSingle.list / client.TlsCertificatesAndHostnamesCertificatePackResponseSingle.load({ "id" => ... })
  def TlsCertificatesAndHostnamesCertificatePackResponseSingle(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_certificate_pack_response_single_entity'
    TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesCertificateResponseCollection.list / client.TlsCertificatesAndHostnamesCertificateResponseCollection.load({ "id" => ... })
  def TlsCertificatesAndHostnamesCertificateResponseCollection(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_certificate_response_collection_entity'
    TlsCertificatesAndHostnamesCertificateResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesCertificateResponseCollection3.list / client.TlsCertificatesAndHostnamesCertificateResponseCollection3.load({ "id" => ... })
  def TlsCertificatesAndHostnamesCertificateResponseCollection3(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_certificate_response_collection_3_entity'
    TlsCertificatesAndHostnamesCertificateResponseCollection3Entity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesCertificateResponseCollection4.list / client.TlsCertificatesAndHostnamesCertificateResponseCollection4.load({ "id" => ... })
  def TlsCertificatesAndHostnamesCertificateResponseCollection4(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_certificate_response_collection_4_entity'
    TlsCertificatesAndHostnamesCertificateResponseCollection4Entity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesCertificateResponseCollection5.list / client.TlsCertificatesAndHostnamesCertificateResponseCollection5.load({ "id" => ... })
  def TlsCertificatesAndHostnamesCertificateResponseCollection5(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_certificate_response_collection_5_entity'
    TlsCertificatesAndHostnamesCertificateResponseCollection5Entity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesCertificateResponseIdOnly.list / client.TlsCertificatesAndHostnamesCertificateResponseIdOnly.load({ "id" => ... })
  def TlsCertificatesAndHostnamesCertificateResponseIdOnly(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_certificate_response_id_only_entity'
    TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesCertificateResponseSingle.list / client.TlsCertificatesAndHostnamesCertificateResponseSingle.load({ "id" => ... })
  def TlsCertificatesAndHostnamesCertificateResponseSingle(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_certificate_response_single_entity'
    TlsCertificatesAndHostnamesCertificateResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesCertificateResponseSingle2.list / client.TlsCertificatesAndHostnamesCertificateResponseSingle2.load({ "id" => ... })
  def TlsCertificatesAndHostnamesCertificateResponseSingle2(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_certificate_response_single_2_entity'
    TlsCertificatesAndHostnamesCertificateResponseSingle2Entity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesCertificateResponseSingle3.list / client.TlsCertificatesAndHostnamesCertificateResponseSingle3.load({ "id" => ... })
  def TlsCertificatesAndHostnamesCertificateResponseSingle3(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_certificate_response_single_3_entity'
    TlsCertificatesAndHostnamesCertificateResponseSingle3Entity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesCertificateResponseSingle4.list / client.TlsCertificatesAndHostnamesCertificateResponseSingle4.load({ "id" => ... })
  def TlsCertificatesAndHostnamesCertificateResponseSingle4(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_certificate_response_single_4_entity'
    TlsCertificatesAndHostnamesCertificateResponseSingle4Entity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesCertificateResponseSingle5.list / client.TlsCertificatesAndHostnamesCertificateResponseSingle5.load({ "id" => ... })
  def TlsCertificatesAndHostnamesCertificateResponseSingle5(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_certificate_response_single_5_entity'
    TlsCertificatesAndHostnamesCertificateResponseSingle5Entity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesCertificateResponseSinglePost.list / client.TlsCertificatesAndHostnamesCertificateResponseSinglePost.load({ "id" => ... })
  def TlsCertificatesAndHostnamesCertificateResponseSinglePost(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_certificate_response_single_post_entity'
    TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesCertificateRevoke.list / client.TlsCertificatesAndHostnamesCertificateRevoke.load({ "id" => ... })
  def TlsCertificatesAndHostnamesCertificateRevoke(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_certificate_revoke_entity'
    TlsCertificatesAndHostnamesCertificateRevokeEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesClientCertificateResponse.list / client.TlsCertificatesAndHostnamesClientCertificateResponse.load({ "id" => ... })
  def TlsCertificatesAndHostnamesClientCertificateResponse(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_client_certificate_response_entity'
    TlsCertificatesAndHostnamesClientCertificateResponseEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesClientCertificateResponseSingle.list / client.TlsCertificatesAndHostnamesClientCertificateResponseSingle.load({ "id" => ... })
  def TlsCertificatesAndHostnamesClientCertificateResponseSingle(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_client_certificate_response_single_entity'
    TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesCustomCsrResponseCollection.list / client.TlsCertificatesAndHostnamesCustomCsrResponseCollection.load({ "id" => ... })
  def TlsCertificatesAndHostnamesCustomCsrResponseCollection(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_custom_csr_response_collection_entity'
    TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesCustomCsrResponseCollection2.list / client.TlsCertificatesAndHostnamesCustomCsrResponseCollection2.load({ "id" => ... })
  def TlsCertificatesAndHostnamesCustomCsrResponseCollection2(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_custom_csr_response_collection_2_entity'
    TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesCustomCsrResponseIdOnly.list / client.TlsCertificatesAndHostnamesCustomCsrResponseIdOnly.load({ "id" => ... })
  def TlsCertificatesAndHostnamesCustomCsrResponseIdOnly(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_custom_csr_response_id_only_entity'
    TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesCustomCsrResponseSingle.list / client.TlsCertificatesAndHostnamesCustomCsrResponseSingle.load({ "id" => ... })
  def TlsCertificatesAndHostnamesCustomCsrResponseSingle(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_custom_csr_response_single_entity'
    TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesCustomCsrResponseSingle2.list / client.TlsCertificatesAndHostnamesCustomCsrResponseSingle2.load({ "id" => ... })
  def TlsCertificatesAndHostnamesCustomCsrResponseSingle2(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_custom_csr_response_single_2_entity'
    TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesCustomHostnameQuota.list / client.TlsCertificatesAndHostnamesCustomHostnameQuota.load({ "id" => ... })
  def TlsCertificatesAndHostnamesCustomHostnameQuota(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_custom_hostname_quota_entity'
    TlsCertificatesAndHostnamesCustomHostnameQuotaEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesCustomHostnameResponseCollection.list / client.TlsCertificatesAndHostnamesCustomHostnameResponseCollection.load({ "id" => ... })
  def TlsCertificatesAndHostnamesCustomHostnameResponseCollection(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_custom_hostname_response_collection_entity'
    TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle.list / client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle.load({ "id" => ... })
  def TlsCertificatesAndHostnamesCustomHostnameResponseSingle(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_custom_hostname_response_single_entity'
    TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesCustomTrustStoreResponse.list / client.TlsCertificatesAndHostnamesCustomTrustStoreResponse.load({ "id" => ... })
  def TlsCertificatesAndHostnamesCustomTrustStoreResponse(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_custom_trust_store_response_entity'
    TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly.list / client.TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly.load({ "id" => ... })
  def TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_custom_trust_store_response_id_only_entity'
    TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle.list / client.TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle.load({ "id" => ... })
  def TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_custom_trust_store_response_single_entity'
    TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack.list / client.TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack.load({ "id" => ... })
  def TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_delete_advanced_certificate_pack_entity'
    TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesEnabled.list / client.TlsCertificatesAndHostnamesEnabled.load({ "id" => ... })
  def TlsCertificatesAndHostnamesEnabled(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_enabled_entity'
    TlsCertificatesAndHostnamesEnabledEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesFallbackOrigin.list / client.TlsCertificatesAndHostnamesFallbackOrigin.load({ "id" => ... })
  def TlsCertificatesAndHostnamesFallbackOrigin(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_fallback_origin_entity'
    TlsCertificatesAndHostnamesFallbackOriginEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesHostnameAopResponseCollection.list / client.TlsCertificatesAndHostnamesHostnameAopResponseCollection.load({ "id" => ... })
  def TlsCertificatesAndHostnamesHostnameAopResponseCollection(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_hostname_aop_response_collection_entity'
    TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesHostnameAopSingle.list / client.TlsCertificatesAndHostnamesHostnameAopSingle.load({ "id" => ... })
  def TlsCertificatesAndHostnamesHostnameAopSingle(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_hostname_aop_single_entity'
    TlsCertificatesAndHostnamesHostnameAopSingleEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesHostnameAssocResponseCollection.list / client.TlsCertificatesAndHostnamesHostnameAssocResponseCollection.load({ "id" => ... })
  def TlsCertificatesAndHostnamesHostnameAssocResponseCollection(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_hostname_assoc_response_collection_entity'
    TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesKeylessResponseCollection.list / client.TlsCertificatesAndHostnamesKeylessResponseCollection.load({ "id" => ... })
  def TlsCertificatesAndHostnamesKeylessResponseCollection(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_keyless_response_collection_entity'
    TlsCertificatesAndHostnamesKeylessResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesKeylessResponseSingle.list / client.TlsCertificatesAndHostnamesKeylessResponseSingle.load({ "id" => ... })
  def TlsCertificatesAndHostnamesKeylessResponseSingle(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_keyless_response_single_entity'
    TlsCertificatesAndHostnamesKeylessResponseSingleEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesKeylessResponseSingleId.list / client.TlsCertificatesAndHostnamesKeylessResponseSingleId.load({ "id" => ... })
  def TlsCertificatesAndHostnamesKeylessResponseSingleId(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_keyless_response_single_id_entity'
    TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesPerHostnameSetting.list / client.TlsCertificatesAndHostnamesPerHostnameSetting.load({ "id" => ... })
  def TlsCertificatesAndHostnamesPerHostnameSetting(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_per_hostname_setting_entity'
    TlsCertificatesAndHostnamesPerHostnameSettingEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse.list / client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse.load({ "id" => ... })
  def TlsCertificatesAndHostnamesPerHostnameSettingsResponse(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_per_hostname_settings_response_entity'
    TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse2.list / client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse2.load({ "id" => ... })
  def TlsCertificatesAndHostnamesPerHostnameSettingsResponse2(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_per_hostname_settings_response2_entity'
    TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesSslUniversalSetting.list / client.TlsCertificatesAndHostnamesSslUniversalSetting.load({ "id" => ... })
  def TlsCertificatesAndHostnamesSslUniversalSetting(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_ssl_universal_setting_entity'
    TlsCertificatesAndHostnamesSslUniversalSettingEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesSslValidationMethodResponse.list / client.TlsCertificatesAndHostnamesSslValidationMethodResponse.load({ "id" => ... })
  def TlsCertificatesAndHostnamesSslValidationMethodResponse(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_ssl_validation_method_response_entity'
    TlsCertificatesAndHostnamesSslValidationMethodResponseEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesSslVerificationResponseCollection.list / client.TlsCertificatesAndHostnamesSslVerificationResponseCollection.load({ "id" => ... })
  def TlsCertificatesAndHostnamesSslVerificationResponseCollection(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_ssl_verification_response_collection_entity'
    TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity.new(self, data)
  end


  # Canonical facade: client.TlsCertificatesAndHostnamesTotalTlsSetting.list / client.TlsCertificatesAndHostnamesTotalTlsSetting.load({ "id" => ... })
  def TlsCertificatesAndHostnamesTotalTlsSetting(data = nil)
    require_relative 'entity/tls_certificates_and_hostnames_total_tls_setting_entity'
    TlsCertificatesAndHostnamesTotalTlsSettingEntity.new(self, data)
  end



  def self.test(testopts = nil, sdkopts = nil)
    sdkopts = sdkopts || {}
    sdkopts = VoxgigStruct.clone(sdkopts)
    sdkopts = {} unless sdkopts.is_a?(Hash)

    testopts = testopts || {}
    testopts = VoxgigStruct.clone(testopts)
    testopts = {} unless testopts.is_a?(Hash)
    testopts["active"] = true

    VoxgigStruct.setpath(sdkopts, "feature.test", testopts)

    sdk = CloudflareSslSDK.new(sdkopts)
    sdk.mode = "test"
    sdk
  end
end
