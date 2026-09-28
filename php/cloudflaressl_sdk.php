<?php
declare(strict_types=1);

// CloudflareSsl SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class CloudflareSslSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new CloudflareSslUtility();
        $this->_utility = $utility;

        $config = CloudflareSslConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = CloudflareSslHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = CloudflareSslHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!CloudflareSslFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, CloudflareSslFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return CloudflareSslUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = CloudflareSslHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = CloudflareSslHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = CloudflareSslHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new CloudflareSslSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new CloudflareSslError($op . "_allow",
                "CloudflareSslSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = CloudflareSslHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = CloudflareSslHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new CloudflareSslError("graphql_error",
                "CloudflareSslSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_cache_api_response_single_id = null;

    // Canonical facade: $client->CacheApiResponseSingleId()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cache_api_response_single_id()
    // resolves here too.
    public function CacheApiResponseSingleId($data = null)
    {
        require_once __DIR__ . '/entity/cache_api_response_single_id_entity.php';
        if ($data === null) {
            if ($this->_cache_api_response_single_id === null) {
                $this->_cache_api_response_single_id = new CacheApiResponseSingleIdEntity($this, null);
            }
            return $this->_cache_api_response_single_id;
        }
        return new CacheApiResponseSingleIdEntity($this, $data);
    }


    private $_cache_auto_origin_tls_kex = null;

    // Canonical facade: $client->CacheAutoOriginTlsKex()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cache_auto_origin_tls_kex()
    // resolves here too.
    public function CacheAutoOriginTlsKex($data = null)
    {
        require_once __DIR__ . '/entity/cache_auto_origin_tls_kex_entity.php';
        if ($data === null) {
            if ($this->_cache_auto_origin_tls_kex === null) {
                $this->_cache_auto_origin_tls_kex = new CacheAutoOriginTlsKexEntity($this, null);
            }
            return $this->_cache_auto_origin_tls_kex;
        }
        return new CacheAutoOriginTlsKexEntity($this, $data);
    }


    private $_custom_hostname = null;

    // Canonical facade: $client->CustomHostname()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->custom_hostname()
    // resolves here too.
    public function CustomHostname($data = null)
    {
        require_once __DIR__ . '/entity/custom_hostname_entity.php';
        if ($data === null) {
            if ($this->_custom_hostname === null) {
                $this->_custom_hostname = new CustomHostnameEntity($this, null);
            }
            return $this->_custom_hostname;
        }
        return new CustomHostnameEntity($this, $data);
    }


    private $_custom_hostname_for_a_zone = null;

    // Canonical facade: $client->CustomHostnameForAZone()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->custom_hostname_for_a_zone()
    // resolves here too.
    public function CustomHostnameForAZone($data = null)
    {
        require_once __DIR__ . '/entity/custom_hostname_for_a_zone_entity.php';
        if ($data === null) {
            if ($this->_custom_hostname_for_a_zone === null) {
                $this->_custom_hostname_for_a_zone = new CustomHostnameForAZoneEntity($this, null);
            }
            return $this->_custom_hostname_for_a_zone;
        }
        return new CustomHostnameForAZoneEntity($this, $data);
    }


    private $_origin_tl = null;

    // Canonical facade: $client->OriginTl()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->origin_tl()
    // resolves here too.
    public function OriginTl($data = null)
    {
        require_once __DIR__ . '/entity/origin_tl_entity.php';
        if ($data === null) {
            if ($this->_origin_tl === null) {
                $this->_origin_tl = new OriginTlEntity($this, null);
            }
            return $this->_origin_tl;
        }
        return new OriginTlEntity($this, $data);
    }


    private $_recommendation = null;

    // Canonical facade: $client->Recommendation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->recommendation()
    // resolves here too.
    public function Recommendation($data = null)
    {
        require_once __DIR__ . '/entity/recommendation_entity.php';
        if ($data === null) {
            if ($this->_recommendation === null) {
                $this->_recommendation = new RecommendationEntity($this, null);
            }
            return $this->_recommendation;
        }
        return new RecommendationEntity($this, $data);
    }


    private $_ssl_automatic_mode = null;

    // Canonical facade: $client->SslAutomaticMode()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ssl_automatic_mode()
    // resolves here too.
    public function SslAutomaticMode($data = null)
    {
        require_once __DIR__ . '/entity/ssl_automatic_mode_entity.php';
        if ($data === null) {
            if ($this->_ssl_automatic_mode === null) {
                $this->_ssl_automatic_mode = new SslAutomaticModeEntity($this, null);
            }
            return $this->_ssl_automatic_mode;
        }
        return new SslAutomaticModeEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_advanced_certificate_pack_response = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesAdvancedCertificatePackResponse()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_advanced_certificate_pack_response()
    // resolves here too.
    public function TlsCertificatesAndHostnamesAdvancedCertificatePackResponse($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_advanced_certificate_pack_response_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_advanced_certificate_pack_response === null) {
                $this->_tls_certificates_and_hostnames_advanced_certificate_pack_response = new TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_advanced_certificate_pack_response;
        }
        return new TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_association_response_collection = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesAssociationResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_association_response_collection()
    // resolves here too.
    public function TlsCertificatesAndHostnamesAssociationResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_association_response_collection_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_association_response_collection === null) {
                $this->_tls_certificates_and_hostnames_association_response_collection = new TlsCertificatesAndHostnamesAssociationResponseCollectionEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_association_response_collection;
        }
        return new TlsCertificatesAndHostnamesAssociationResponseCollectionEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_certificate_analyze = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesCertificateAnalyze()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_certificate_analyze()
    // resolves here too.
    public function TlsCertificatesAndHostnamesCertificateAnalyze($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_certificate_analyze_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_certificate_analyze === null) {
                $this->_tls_certificates_and_hostnames_certificate_analyze = new TlsCertificatesAndHostnamesCertificateAnalyzeEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_certificate_analyze;
        }
        return new TlsCertificatesAndHostnamesCertificateAnalyzeEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_certificate_pack_quota = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesCertificatePackQuota()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_certificate_pack_quota()
    // resolves here too.
    public function TlsCertificatesAndHostnamesCertificatePackQuota($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_certificate_pack_quota_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_certificate_pack_quota === null) {
                $this->_tls_certificates_and_hostnames_certificate_pack_quota = new TlsCertificatesAndHostnamesCertificatePackQuotaEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_certificate_pack_quota;
        }
        return new TlsCertificatesAndHostnamesCertificatePackQuotaEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_certificate_pack_response_collection = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesCertificatePackResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_certificate_pack_response_collection()
    // resolves here too.
    public function TlsCertificatesAndHostnamesCertificatePackResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_certificate_pack_response_collection_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_certificate_pack_response_collection === null) {
                $this->_tls_certificates_and_hostnames_certificate_pack_response_collection = new TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_certificate_pack_response_collection;
        }
        return new TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_certificate_pack_response_single = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesCertificatePackResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_certificate_pack_response_single()
    // resolves here too.
    public function TlsCertificatesAndHostnamesCertificatePackResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_certificate_pack_response_single_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_certificate_pack_response_single === null) {
                $this->_tls_certificates_and_hostnames_certificate_pack_response_single = new TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_certificate_pack_response_single;
        }
        return new TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_certificate_response_collection = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesCertificateResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_certificate_response_collection()
    // resolves here too.
    public function TlsCertificatesAndHostnamesCertificateResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_certificate_response_collection_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_certificate_response_collection === null) {
                $this->_tls_certificates_and_hostnames_certificate_response_collection = new TlsCertificatesAndHostnamesCertificateResponseCollectionEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_certificate_response_collection;
        }
        return new TlsCertificatesAndHostnamesCertificateResponseCollectionEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_certificate_response_collection_3 = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesCertificateResponseCollection3()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_certificate_response_collection_3()
    // resolves here too.
    public function TlsCertificatesAndHostnamesCertificateResponseCollection3($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_certificate_response_collection_3_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_certificate_response_collection_3 === null) {
                $this->_tls_certificates_and_hostnames_certificate_response_collection_3 = new TlsCertificatesAndHostnamesCertificateResponseCollection3Entity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_certificate_response_collection_3;
        }
        return new TlsCertificatesAndHostnamesCertificateResponseCollection3Entity($this, $data);
    }


    private $_tls_certificates_and_hostnames_certificate_response_collection_4 = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesCertificateResponseCollection4()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_certificate_response_collection_4()
    // resolves here too.
    public function TlsCertificatesAndHostnamesCertificateResponseCollection4($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_certificate_response_collection_4_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_certificate_response_collection_4 === null) {
                $this->_tls_certificates_and_hostnames_certificate_response_collection_4 = new TlsCertificatesAndHostnamesCertificateResponseCollection4Entity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_certificate_response_collection_4;
        }
        return new TlsCertificatesAndHostnamesCertificateResponseCollection4Entity($this, $data);
    }


    private $_tls_certificates_and_hostnames_certificate_response_collection_5 = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesCertificateResponseCollection5()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_certificate_response_collection_5()
    // resolves here too.
    public function TlsCertificatesAndHostnamesCertificateResponseCollection5($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_certificate_response_collection_5_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_certificate_response_collection_5 === null) {
                $this->_tls_certificates_and_hostnames_certificate_response_collection_5 = new TlsCertificatesAndHostnamesCertificateResponseCollection5Entity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_certificate_response_collection_5;
        }
        return new TlsCertificatesAndHostnamesCertificateResponseCollection5Entity($this, $data);
    }


    private $_tls_certificates_and_hostnames_certificate_response_id_only = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesCertificateResponseIdOnly()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_certificate_response_id_only()
    // resolves here too.
    public function TlsCertificatesAndHostnamesCertificateResponseIdOnly($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_certificate_response_id_only_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_certificate_response_id_only === null) {
                $this->_tls_certificates_and_hostnames_certificate_response_id_only = new TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_certificate_response_id_only;
        }
        return new TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_certificate_response_single = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesCertificateResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_certificate_response_single()
    // resolves here too.
    public function TlsCertificatesAndHostnamesCertificateResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_certificate_response_single_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_certificate_response_single === null) {
                $this->_tls_certificates_and_hostnames_certificate_response_single = new TlsCertificatesAndHostnamesCertificateResponseSingleEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_certificate_response_single;
        }
        return new TlsCertificatesAndHostnamesCertificateResponseSingleEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_certificate_response_single_2 = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesCertificateResponseSingle2()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_certificate_response_single_2()
    // resolves here too.
    public function TlsCertificatesAndHostnamesCertificateResponseSingle2($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_certificate_response_single_2_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_certificate_response_single_2 === null) {
                $this->_tls_certificates_and_hostnames_certificate_response_single_2 = new TlsCertificatesAndHostnamesCertificateResponseSingle2Entity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_certificate_response_single_2;
        }
        return new TlsCertificatesAndHostnamesCertificateResponseSingle2Entity($this, $data);
    }


    private $_tls_certificates_and_hostnames_certificate_response_single_3 = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesCertificateResponseSingle3()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_certificate_response_single_3()
    // resolves here too.
    public function TlsCertificatesAndHostnamesCertificateResponseSingle3($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_certificate_response_single_3_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_certificate_response_single_3 === null) {
                $this->_tls_certificates_and_hostnames_certificate_response_single_3 = new TlsCertificatesAndHostnamesCertificateResponseSingle3Entity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_certificate_response_single_3;
        }
        return new TlsCertificatesAndHostnamesCertificateResponseSingle3Entity($this, $data);
    }


    private $_tls_certificates_and_hostnames_certificate_response_single_4 = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesCertificateResponseSingle4()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_certificate_response_single_4()
    // resolves here too.
    public function TlsCertificatesAndHostnamesCertificateResponseSingle4($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_certificate_response_single_4_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_certificate_response_single_4 === null) {
                $this->_tls_certificates_and_hostnames_certificate_response_single_4 = new TlsCertificatesAndHostnamesCertificateResponseSingle4Entity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_certificate_response_single_4;
        }
        return new TlsCertificatesAndHostnamesCertificateResponseSingle4Entity($this, $data);
    }


    private $_tls_certificates_and_hostnames_certificate_response_single_5 = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesCertificateResponseSingle5()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_certificate_response_single_5()
    // resolves here too.
    public function TlsCertificatesAndHostnamesCertificateResponseSingle5($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_certificate_response_single_5_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_certificate_response_single_5 === null) {
                $this->_tls_certificates_and_hostnames_certificate_response_single_5 = new TlsCertificatesAndHostnamesCertificateResponseSingle5Entity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_certificate_response_single_5;
        }
        return new TlsCertificatesAndHostnamesCertificateResponseSingle5Entity($this, $data);
    }


    private $_tls_certificates_and_hostnames_certificate_response_single_post = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesCertificateResponseSinglePost()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_certificate_response_single_post()
    // resolves here too.
    public function TlsCertificatesAndHostnamesCertificateResponseSinglePost($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_certificate_response_single_post_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_certificate_response_single_post === null) {
                $this->_tls_certificates_and_hostnames_certificate_response_single_post = new TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_certificate_response_single_post;
        }
        return new TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_certificate_revoke = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesCertificateRevoke()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_certificate_revoke()
    // resolves here too.
    public function TlsCertificatesAndHostnamesCertificateRevoke($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_certificate_revoke_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_certificate_revoke === null) {
                $this->_tls_certificates_and_hostnames_certificate_revoke = new TlsCertificatesAndHostnamesCertificateRevokeEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_certificate_revoke;
        }
        return new TlsCertificatesAndHostnamesCertificateRevokeEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_client_certificate_response = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesClientCertificateResponse()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_client_certificate_response()
    // resolves here too.
    public function TlsCertificatesAndHostnamesClientCertificateResponse($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_client_certificate_response_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_client_certificate_response === null) {
                $this->_tls_certificates_and_hostnames_client_certificate_response = new TlsCertificatesAndHostnamesClientCertificateResponseEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_client_certificate_response;
        }
        return new TlsCertificatesAndHostnamesClientCertificateResponseEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_client_certificate_response_single = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesClientCertificateResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_client_certificate_response_single()
    // resolves here too.
    public function TlsCertificatesAndHostnamesClientCertificateResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_client_certificate_response_single_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_client_certificate_response_single === null) {
                $this->_tls_certificates_and_hostnames_client_certificate_response_single = new TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_client_certificate_response_single;
        }
        return new TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_ct_alerting_subscription_response = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_ct_alerting_subscription_response()
    // resolves here too.
    public function TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_ct_alerting_subscription_response_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_ct_alerting_subscription_response === null) {
                $this->_tls_certificates_and_hostnames_ct_alerting_subscription_response = new TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_ct_alerting_subscription_response;
        }
        return new TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_custom_csr_response_collection = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesCustomCsrResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_custom_csr_response_collection()
    // resolves here too.
    public function TlsCertificatesAndHostnamesCustomCsrResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_custom_csr_response_collection_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_custom_csr_response_collection === null) {
                $this->_tls_certificates_and_hostnames_custom_csr_response_collection = new TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_custom_csr_response_collection;
        }
        return new TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_custom_csr_response_collection_2 = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesCustomCsrResponseCollection2()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_custom_csr_response_collection_2()
    // resolves here too.
    public function TlsCertificatesAndHostnamesCustomCsrResponseCollection2($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_custom_csr_response_collection_2_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_custom_csr_response_collection_2 === null) {
                $this->_tls_certificates_and_hostnames_custom_csr_response_collection_2 = new TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_custom_csr_response_collection_2;
        }
        return new TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity($this, $data);
    }


    private $_tls_certificates_and_hostnames_custom_csr_response_id_only = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesCustomCsrResponseIdOnly()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_custom_csr_response_id_only()
    // resolves here too.
    public function TlsCertificatesAndHostnamesCustomCsrResponseIdOnly($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_custom_csr_response_id_only_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_custom_csr_response_id_only === null) {
                $this->_tls_certificates_and_hostnames_custom_csr_response_id_only = new TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_custom_csr_response_id_only;
        }
        return new TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_custom_csr_response_single = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesCustomCsrResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_custom_csr_response_single()
    // resolves here too.
    public function TlsCertificatesAndHostnamesCustomCsrResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_custom_csr_response_single_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_custom_csr_response_single === null) {
                $this->_tls_certificates_and_hostnames_custom_csr_response_single = new TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_custom_csr_response_single;
        }
        return new TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_custom_csr_response_single_2 = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesCustomCsrResponseSingle2()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_custom_csr_response_single_2()
    // resolves here too.
    public function TlsCertificatesAndHostnamesCustomCsrResponseSingle2($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_custom_csr_response_single_2_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_custom_csr_response_single_2 === null) {
                $this->_tls_certificates_and_hostnames_custom_csr_response_single_2 = new TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_custom_csr_response_single_2;
        }
        return new TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity($this, $data);
    }


    private $_tls_certificates_and_hostnames_custom_hostname_quota = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesCustomHostnameQuota()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_custom_hostname_quota()
    // resolves here too.
    public function TlsCertificatesAndHostnamesCustomHostnameQuota($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_custom_hostname_quota_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_custom_hostname_quota === null) {
                $this->_tls_certificates_and_hostnames_custom_hostname_quota = new TlsCertificatesAndHostnamesCustomHostnameQuotaEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_custom_hostname_quota;
        }
        return new TlsCertificatesAndHostnamesCustomHostnameQuotaEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_custom_hostname_response_collection = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesCustomHostnameResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_custom_hostname_response_collection()
    // resolves here too.
    public function TlsCertificatesAndHostnamesCustomHostnameResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_custom_hostname_response_collection_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_custom_hostname_response_collection === null) {
                $this->_tls_certificates_and_hostnames_custom_hostname_response_collection = new TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_custom_hostname_response_collection;
        }
        return new TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_custom_hostname_response_single = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesCustomHostnameResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_custom_hostname_response_single()
    // resolves here too.
    public function TlsCertificatesAndHostnamesCustomHostnameResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_custom_hostname_response_single_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_custom_hostname_response_single === null) {
                $this->_tls_certificates_and_hostnames_custom_hostname_response_single = new TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_custom_hostname_response_single;
        }
        return new TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_custom_trust_store_response = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesCustomTrustStoreResponse()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_custom_trust_store_response()
    // resolves here too.
    public function TlsCertificatesAndHostnamesCustomTrustStoreResponse($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_custom_trust_store_response_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_custom_trust_store_response === null) {
                $this->_tls_certificates_and_hostnames_custom_trust_store_response = new TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_custom_trust_store_response;
        }
        return new TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_custom_trust_store_response_id_only = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_custom_trust_store_response_id_only()
    // resolves here too.
    public function TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_custom_trust_store_response_id_only_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_custom_trust_store_response_id_only === null) {
                $this->_tls_certificates_and_hostnames_custom_trust_store_response_id_only = new TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_custom_trust_store_response_id_only;
        }
        return new TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_custom_trust_store_response_single = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_custom_trust_store_response_single()
    // resolves here too.
    public function TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_custom_trust_store_response_single_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_custom_trust_store_response_single === null) {
                $this->_tls_certificates_and_hostnames_custom_trust_store_response_single = new TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_custom_trust_store_response_single;
        }
        return new TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_dcv_delegation = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesDcvDelegation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_dcv_delegation()
    // resolves here too.
    public function TlsCertificatesAndHostnamesDcvDelegation($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_dcv_delegation_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_dcv_delegation === null) {
                $this->_tls_certificates_and_hostnames_dcv_delegation = new TlsCertificatesAndHostnamesDcvDelegationEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_dcv_delegation;
        }
        return new TlsCertificatesAndHostnamesDcvDelegationEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_delete_advanced_certificate_pack = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_delete_advanced_certificate_pack()
    // resolves here too.
    public function TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_delete_advanced_certificate_pack_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_delete_advanced_certificate_pack === null) {
                $this->_tls_certificates_and_hostnames_delete_advanced_certificate_pack = new TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_delete_advanced_certificate_pack;
        }
        return new TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_enabled = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesEnabled()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_enabled()
    // resolves here too.
    public function TlsCertificatesAndHostnamesEnabled($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_enabled_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_enabled === null) {
                $this->_tls_certificates_and_hostnames_enabled = new TlsCertificatesAndHostnamesEnabledEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_enabled;
        }
        return new TlsCertificatesAndHostnamesEnabledEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_fallback_origin = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesFallbackOrigin()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_fallback_origin()
    // resolves here too.
    public function TlsCertificatesAndHostnamesFallbackOrigin($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_fallback_origin_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_fallback_origin === null) {
                $this->_tls_certificates_and_hostnames_fallback_origin = new TlsCertificatesAndHostnamesFallbackOriginEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_fallback_origin;
        }
        return new TlsCertificatesAndHostnamesFallbackOriginEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_hostname_aop_response_collection = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesHostnameAopResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_hostname_aop_response_collection()
    // resolves here too.
    public function TlsCertificatesAndHostnamesHostnameAopResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_hostname_aop_response_collection_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_hostname_aop_response_collection === null) {
                $this->_tls_certificates_and_hostnames_hostname_aop_response_collection = new TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_hostname_aop_response_collection;
        }
        return new TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_hostname_aop_single = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesHostnameAopSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_hostname_aop_single()
    // resolves here too.
    public function TlsCertificatesAndHostnamesHostnameAopSingle($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_hostname_aop_single_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_hostname_aop_single === null) {
                $this->_tls_certificates_and_hostnames_hostname_aop_single = new TlsCertificatesAndHostnamesHostnameAopSingleEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_hostname_aop_single;
        }
        return new TlsCertificatesAndHostnamesHostnameAopSingleEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_hostname_assoc_response_collection = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesHostnameAssocResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_hostname_assoc_response_collection()
    // resolves here too.
    public function TlsCertificatesAndHostnamesHostnameAssocResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_hostname_assoc_response_collection_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_hostname_assoc_response_collection === null) {
                $this->_tls_certificates_and_hostnames_hostname_assoc_response_collection = new TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_hostname_assoc_response_collection;
        }
        return new TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_hostname_association = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesHostnameAssociation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_hostname_association()
    // resolves here too.
    public function TlsCertificatesAndHostnamesHostnameAssociation($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_hostname_association_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_hostname_association === null) {
                $this->_tls_certificates_and_hostnames_hostname_association = new TlsCertificatesAndHostnamesHostnameAssociationEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_hostname_association;
        }
        return new TlsCertificatesAndHostnamesHostnameAssociationEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_keyless_response_collection = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesKeylessResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_keyless_response_collection()
    // resolves here too.
    public function TlsCertificatesAndHostnamesKeylessResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_keyless_response_collection_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_keyless_response_collection === null) {
                $this->_tls_certificates_and_hostnames_keyless_response_collection = new TlsCertificatesAndHostnamesKeylessResponseCollectionEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_keyless_response_collection;
        }
        return new TlsCertificatesAndHostnamesKeylessResponseCollectionEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_keyless_response_single = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesKeylessResponseSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_keyless_response_single()
    // resolves here too.
    public function TlsCertificatesAndHostnamesKeylessResponseSingle($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_keyless_response_single_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_keyless_response_single === null) {
                $this->_tls_certificates_and_hostnames_keyless_response_single = new TlsCertificatesAndHostnamesKeylessResponseSingleEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_keyless_response_single;
        }
        return new TlsCertificatesAndHostnamesKeylessResponseSingleEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_keyless_response_single_id = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesKeylessResponseSingleId()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_keyless_response_single_id()
    // resolves here too.
    public function TlsCertificatesAndHostnamesKeylessResponseSingleId($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_keyless_response_single_id_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_keyless_response_single_id === null) {
                $this->_tls_certificates_and_hostnames_keyless_response_single_id = new TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_keyless_response_single_id;
        }
        return new TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_per_hostname_setting = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesPerHostnameSetting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_per_hostname_setting()
    // resolves here too.
    public function TlsCertificatesAndHostnamesPerHostnameSetting($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_per_hostname_setting_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_per_hostname_setting === null) {
                $this->_tls_certificates_and_hostnames_per_hostname_setting = new TlsCertificatesAndHostnamesPerHostnameSettingEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_per_hostname_setting;
        }
        return new TlsCertificatesAndHostnamesPerHostnameSettingEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_per_hostname_settings_response = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesPerHostnameSettingsResponse()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_per_hostname_settings_response()
    // resolves here too.
    public function TlsCertificatesAndHostnamesPerHostnameSettingsResponse($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_per_hostname_settings_response_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_per_hostname_settings_response === null) {
                $this->_tls_certificates_and_hostnames_per_hostname_settings_response = new TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_per_hostname_settings_response;
        }
        return new TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_per_hostname_settings_response2 = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesPerHostnameSettingsResponse2()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_per_hostname_settings_response2()
    // resolves here too.
    public function TlsCertificatesAndHostnamesPerHostnameSettingsResponse2($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_per_hostname_settings_response2_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_per_hostname_settings_response2 === null) {
                $this->_tls_certificates_and_hostnames_per_hostname_settings_response2 = new TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_per_hostname_settings_response2;
        }
        return new TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity($this, $data);
    }


    private $_tls_certificates_and_hostnames_ssl_universal_setting = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesSslUniversalSetting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_ssl_universal_setting()
    // resolves here too.
    public function TlsCertificatesAndHostnamesSslUniversalSetting($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_ssl_universal_setting_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_ssl_universal_setting === null) {
                $this->_tls_certificates_and_hostnames_ssl_universal_setting = new TlsCertificatesAndHostnamesSslUniversalSettingEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_ssl_universal_setting;
        }
        return new TlsCertificatesAndHostnamesSslUniversalSettingEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_ssl_validation_method_response = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesSslValidationMethodResponse()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_ssl_validation_method_response()
    // resolves here too.
    public function TlsCertificatesAndHostnamesSslValidationMethodResponse($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_ssl_validation_method_response_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_ssl_validation_method_response === null) {
                $this->_tls_certificates_and_hostnames_ssl_validation_method_response = new TlsCertificatesAndHostnamesSslValidationMethodResponseEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_ssl_validation_method_response;
        }
        return new TlsCertificatesAndHostnamesSslValidationMethodResponseEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_ssl_verification_response_collection = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesSslVerificationResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_ssl_verification_response_collection()
    // resolves here too.
    public function TlsCertificatesAndHostnamesSslVerificationResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_ssl_verification_response_collection_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_ssl_verification_response_collection === null) {
                $this->_tls_certificates_and_hostnames_ssl_verification_response_collection = new TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_ssl_verification_response_collection;
        }
        return new TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity($this, $data);
    }


    private $_tls_certificates_and_hostnames_total_tls_setting = null;

    // Canonical facade: $client->TlsCertificatesAndHostnamesTotalTlsSetting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tls_certificates_and_hostnames_total_tls_setting()
    // resolves here too.
    public function TlsCertificatesAndHostnamesTotalTlsSetting($data = null)
    {
        require_once __DIR__ . '/entity/tls_certificates_and_hostnames_total_tls_setting_entity.php';
        if ($data === null) {
            if ($this->_tls_certificates_and_hostnames_total_tls_setting === null) {
                $this->_tls_certificates_and_hostnames_total_tls_setting = new TlsCertificatesAndHostnamesTotalTlsSettingEntity($this, null);
            }
            return $this->_tls_certificates_and_hostnames_total_tls_setting;
        }
        return new TlsCertificatesAndHostnamesTotalTlsSettingEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new CloudflareSslSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
