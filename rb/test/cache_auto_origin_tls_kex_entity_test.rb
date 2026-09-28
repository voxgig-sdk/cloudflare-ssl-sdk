# CacheAutoOriginTlsKex entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareSsl_sdk"
require_relative "runner"

class CacheAutoOriginTlsKexEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareSslSDK.test(nil, nil)
    ent = testsdk.CacheAutoOriginTlsKex(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "cache_auto_origin_tls_kex" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = CloudflareSslSDK.test(seed, nil)
    seen = base.CacheAutoOriginTlsKex(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = CloudflareSslConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = CloudflareSslSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.CacheAutoOriginTlsKex(nil).stream("list", nil, nil).each do |item|
        if item.is_a?(Array)
          got.concat(item)
        else
          got << item
        end
      end
      assert_equal 3, got.length
    end
  end

  def test_basic_flow
    setup = cache_auto_origin_tls_kex_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["list", "update"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "cache_auto_origin_tls_kex." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_SSL_TEST_CACHE_AUTO_ORIGIN_TLS_KEX_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    cache_auto_origin_tls_kex_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.cache_auto_origin_tls_kex")))
    cache_auto_origin_tls_kex_ref01_data = nil
    if cache_auto_origin_tls_kex_ref01_data_raw.length > 0
      cache_auto_origin_tls_kex_ref01_data = Helpers.to_map(cache_auto_origin_tls_kex_ref01_data_raw[0][1])
    end

    # LIST
    cache_auto_origin_tls_kex_ref01_ent = client.CacheAutoOriginTlsKex(nil)
    cache_auto_origin_tls_kex_ref01_match = {
      "zone_id" => setup[:idmap]["zone01"],
    }

    cache_auto_origin_tls_kex_ref01_list_result = cache_auto_origin_tls_kex_ref01_ent.list(cache_auto_origin_tls_kex_ref01_match, nil)
    assert cache_auto_origin_tls_kex_ref01_list_result.is_a?(Array)

    # UPDATE
    cache_auto_origin_tls_kex_ref01_data_up0_up = {
    }

    cache_auto_origin_tls_kex_ref01_resdata_up0_result = cache_auto_origin_tls_kex_ref01_ent.update(cache_auto_origin_tls_kex_ref01_data_up0_up, nil)
    cache_auto_origin_tls_kex_ref01_resdata_up0 = Helpers.to_map(cache_auto_origin_tls_kex_ref01_resdata_up0_result.respond_to?(:data_get) ? cache_auto_origin_tls_kex_ref01_resdata_up0_result.data_get : cache_auto_origin_tls_kex_ref01_resdata_up0_result)
    assert !cache_auto_origin_tls_kex_ref01_resdata_up0.nil?

  end
end

def cache_auto_origin_tls_kex_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "cache_auto_origin_tls_kex", "CacheAutoOriginTlsKexTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareSslSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["cache_auto_origin_tls_kex01", "cache_auto_origin_tls_kex02", "cache_auto_origin_tls_kex03", "zone01"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["CLOUDFLARE_SSL_TEST_CACHE_AUTO_ORIGIN_TLS_KEX_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_SSL_TEST_CACHE_AUTO_ORIGIN_TLS_KEX_ENTID" => idmap,
    "CLOUDFLARE_SSL_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_SSL_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_SSL_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_SSL_TEST_CACHE_AUTO_ORIGIN_TLS_KEX_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["CLOUDFLARE_SSL_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
      {
        "apikey" => env["CLOUDFLARE_SSL_APIKEY"],
      },
      extra || {},
    ])
    client = CloudflareSslSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["CLOUDFLARE_SSL_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["CLOUDFLARE_SSL_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
