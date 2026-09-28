# CustomHostnameForAZone entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareSsl_sdk"
require_relative "runner"

class CustomHostnameForAZoneEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareSslSDK.test(nil, nil)
    ent = testsdk.CustomHostnameForAZone(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = custom_hostname_for_a_zone_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["update"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "custom_hostname_for_a_zone." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_SSL_TEST_CUSTOM_HOSTNAME_FOR_A_ZONE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    custom_hostname_for_a_zone_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.custom_hostname_for_a_zone")))
    custom_hostname_for_a_zone_ref01_data = nil
    if custom_hostname_for_a_zone_ref01_data_raw.length > 0
      custom_hostname_for_a_zone_ref01_data = Helpers.to_map(custom_hostname_for_a_zone_ref01_data_raw[0][1])
    end

    # UPDATE
    custom_hostname_for_a_zone_ref01_ent = client.CustomHostnameForAZone(nil)
    custom_hostname_for_a_zone_ref01_data_up0_up = {
      "certificate_pack_id" => setup[:idmap]["certificate_pack_id"],
      "custom_hostname_id" => setup[:idmap]["custom_hostname_id"],
      "zone_id" => setup[:idmap]["zone_id"],
    }

    custom_hostname_for_a_zone_ref01_markdef_up0_name = "custom_certificate"
    custom_hostname_for_a_zone_ref01_markdef_up0_value = "Mark01-custom_hostname_for_a_zone_ref01_#{setup[:now]}"
    custom_hostname_for_a_zone_ref01_data_up0_up[custom_hostname_for_a_zone_ref01_markdef_up0_name] = custom_hostname_for_a_zone_ref01_markdef_up0_value

    custom_hostname_for_a_zone_ref01_resdata_up0_result = custom_hostname_for_a_zone_ref01_ent.update(custom_hostname_for_a_zone_ref01_data_up0_up, nil)
    custom_hostname_for_a_zone_ref01_resdata_up0 = Helpers.to_map(custom_hostname_for_a_zone_ref01_resdata_up0_result.respond_to?(:data_get) ? custom_hostname_for_a_zone_ref01_resdata_up0_result.data_get : custom_hostname_for_a_zone_ref01_resdata_up0_result)
    assert !custom_hostname_for_a_zone_ref01_resdata_up0.nil?
    assert_equal custom_hostname_for_a_zone_ref01_resdata_up0[custom_hostname_for_a_zone_ref01_markdef_up0_name], custom_hostname_for_a_zone_ref01_markdef_up0_value

  end
end

def custom_hostname_for_a_zone_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "custom_hostname_for_a_zone", "CustomHostnameForAZoneTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareSslSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["custom_hostname_for_a_zone01", "custom_hostname_for_a_zone02", "custom_hostname_for_a_zone03", "custom_hostname01", "custom_hostname02", "custom_hostname03", "certificate_pack01", "zone01"],
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
  entid_env_raw = ENV["CLOUDFLARE_SSL_TEST_CUSTOM_HOSTNAME_FOR_A_ZONE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_SSL_TEST_CUSTOM_HOSTNAME_FOR_A_ZONE_ENTID" => idmap,
    "CLOUDFLARE_SSL_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_SSL_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_SSL_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_SSL_TEST_CUSTOM_HOSTNAME_FOR_A_ZONE_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["certificate_pack_id"].nil?
    idmap_resolved["certificate_pack_id"] = idmap_resolved["certificate_pack01"]
  end
  if idmap_resolved["custom_hostname_id"].nil?
    idmap_resolved["custom_hostname_id"] = idmap_resolved["custom_hostname01"]
  end
  if idmap_resolved["zone_id"].nil?
    idmap_resolved["zone_id"] = idmap_resolved["zone01"]
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
