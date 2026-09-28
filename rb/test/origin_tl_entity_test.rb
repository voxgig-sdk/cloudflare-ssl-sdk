# OriginTl entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareSsl_sdk"
require_relative "runner"

class OriginTlEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareSslSDK.test(nil, nil)
    ent = testsdk.OriginTl(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = origin_tl_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "origin_tl." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_SSL_TEST_ORIGIN_TL_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    origin_tl_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.origin_tl")))
    origin_tl_ref01_data = nil
    if origin_tl_ref01_data_raw.length > 0
      origin_tl_ref01_data = Helpers.to_map(origin_tl_ref01_data_raw[0][1])
    end

    # UPDATE
    origin_tl_ref01_ent = client.OriginTl(nil)
    origin_tl_ref01_data_up0_up = {
    }

    origin_tl_ref01_resdata_up0_result = origin_tl_ref01_ent.update(origin_tl_ref01_data_up0_up, nil)
    origin_tl_ref01_resdata_up0 = Helpers.to_map(origin_tl_ref01_resdata_up0_result.respond_to?(:data_get) ? origin_tl_ref01_resdata_up0_result.data_get : origin_tl_ref01_resdata_up0_result)
    assert !origin_tl_ref01_resdata_up0.nil?

    # LOAD
    origin_tl_ref01_match_dt0 = {}
    origin_tl_ref01_data_dt0_loaded = origin_tl_ref01_ent.load(origin_tl_ref01_match_dt0, nil)
    assert !origin_tl_ref01_data_dt0_loaded.nil?

  end
end

def origin_tl_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "origin_tl", "OriginTlTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareSslSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["origin_tl01", "origin_tl02", "origin_tl03"],
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
  entid_env_raw = ENV["CLOUDFLARE_SSL_TEST_ORIGIN_TL_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_SSL_TEST_ORIGIN_TL_ENTID" => idmap,
    "CLOUDFLARE_SSL_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_SSL_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_SSL_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_SSL_TEST_ORIGIN_TL_ENTID"])
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
