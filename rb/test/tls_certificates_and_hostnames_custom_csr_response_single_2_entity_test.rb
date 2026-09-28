# TlsCertificatesAndHostnamesCustomCsrResponseSingle2 entity test

require "minitest/autorun"
require "json"
require_relative "../CloudflareSsl_sdk"
require_relative "runner"

class TlsCertificatesAndHostnamesCustomCsrResponseSingle2EntityTest < Minitest::Test
  def test_create_instance
    testsdk = CloudflareSslSDK.test(nil, nil)
    ent = testsdk.TlsCertificatesAndHostnamesCustomCsrResponseSingle2(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = tls_certificates_and_hostnames_custom_csr_response_single_2_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "tls_certificates_and_hostnames_custom_csr_response_single_2." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CUSTOM_CSR_RESPONSE_SINGLE_2_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    tls_certificates_and_hostnames_custom_csr_response_single_2_ref01_ent = client.TlsCertificatesAndHostnamesCustomCsrResponseSingle2(nil)
    tls_certificates_and_hostnames_custom_csr_response_single_2_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.tls_certificates_and_hostnames_custom_csr_response_single_2"), "tls_certificates_and_hostnames_custom_csr_response_single_2_ref01"))
    tls_certificates_and_hostnames_custom_csr_response_single_2_ref01_data["account_id"] = setup[:idmap]["account01"]

    tls_certificates_and_hostnames_custom_csr_response_single_2_ref01_data_result = tls_certificates_and_hostnames_custom_csr_response_single_2_ref01_ent.create(tls_certificates_and_hostnames_custom_csr_response_single_2_ref01_data, nil)
    tls_certificates_and_hostnames_custom_csr_response_single_2_ref01_data = Helpers.to_map(tls_certificates_and_hostnames_custom_csr_response_single_2_ref01_data_result.respond_to?(:data_get) ? tls_certificates_and_hostnames_custom_csr_response_single_2_ref01_data_result.data_get : tls_certificates_and_hostnames_custom_csr_response_single_2_ref01_data_result)
    assert !tls_certificates_and_hostnames_custom_csr_response_single_2_ref01_data.nil?

    # LOAD
    tls_certificates_and_hostnames_custom_csr_response_single_2_ref01_match_dt0 = {}
    tls_certificates_and_hostnames_custom_csr_response_single_2_ref01_data_dt0_loaded = tls_certificates_and_hostnames_custom_csr_response_single_2_ref01_ent.load(tls_certificates_and_hostnames_custom_csr_response_single_2_ref01_match_dt0, nil)
    assert !tls_certificates_and_hostnames_custom_csr_response_single_2_ref01_data_dt0_loaded.nil?

  end
end

def tls_certificates_and_hostnames_custom_csr_response_single_2_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "tls_certificates_and_hostnames_custom_csr_response_single_2", "TlsCertificatesAndHostnamesCustomCsrResponseSingle2TestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CloudflareSslSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["tls_certificates_and_hostnames_custom_csr_response_single_201", "tls_certificates_and_hostnames_custom_csr_response_single_202", "tls_certificates_and_hostnames_custom_csr_response_single_203", "account01"],
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
  entid_env_raw = ENV["CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CUSTOM_CSR_RESPONSE_SINGLE_2_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CUSTOM_CSR_RESPONSE_SINGLE_2_ENTID" => idmap,
    "CLOUDFLARE_SSL_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_SSL_TEST_EXPLAIN" => "FALSE",
    "CLOUDFLARE_SSL_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CUSTOM_CSR_RESPONSE_SINGLE_2_ENTID"])
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
