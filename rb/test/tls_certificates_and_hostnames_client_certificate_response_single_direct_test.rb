# TlsCertificatesAndHostnamesClientCertificateResponseSingle direct test

require "minitest/autorun"
require "json"
require_relative "../CloudflareSsl_sdk"
require_relative "runner"

class TlsCertificatesAndHostnamesClientCertificateResponseSingleDirectTest < Minitest::Test
  def test_direct_load_tls_certificates_and_hostnames_client_certificate_response_single
    setup = tls_certificates_and_hostnames_client_certificate_response_single_direct_setup({ "id" => "direct01" })
    _should_skip, _reason = Runner.is_control_skipped("direct", "direct-load-tls_certificates_and_hostnames_client_certificate_response_single", setup[:live] ? "live" : "unit")
    if _should_skip
      skip(_reason || "skipped via sdk-test-control.json")
      return
    end
    client = setup[:client]

    params = {}
    query = {}
    if setup[:live]
      params["client_certificate_id"] = "0d89c70d-ad9f-4843-b99f-6cc0252067e9"
      params["zone_id"] = "023e105f4ecef8ad9ca31a8372d0c353"
    else
      params["client_certificate_id"] = "direct01"
      params["zone_id"] = "direct02"
    end

    result = client.direct({
      "path" => "zones/{zone_id}/client_certificates/{client_certificate_id}",
      "method" => "GET",
      "params" => params,
      "query" => query,
    })
    if setup[:live]
      # Live mode is lenient: synthetic IDs frequently 4xx. Skip rather
      # than fail when the load endpoint isn't reachable with the IDs
      # we can construct from setup.idmap.
      if !result["err"].nil?
        skip("load call failed (likely synthetic IDs against live API): #{result["err"]}")
        return
      end
      unless result["ok"]
        skip("load call not ok (likely synthetic IDs against live API)")
        return
      end
      status = Helpers.to_int(result["status"])
      if status < 200 || status >= 300
        skip("expected 2xx status, got #{status}")
        return
      end
    else
      assert_nil result["err"]
      assert result["ok"]
      assert_equal 200, Helpers.to_int(result["status"])
      assert !result["data"].nil?
      if result["data"].is_a?(Hash)
        assert_equal "direct01", result["data"]["id"]
      end
      assert_equal 1, setup[:calls].length
    end
  end

end


def tls_certificates_and_hostnames_client_certificate_response_single_direct_setup(mockres)
  Runner.load_env_local

  calls = []

  env = Runner.env_override({
    "CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CLIENT_CERTIFICATE_RESPONSE_SINGLE_ENTID" => {},
    "CLOUDFLARE_SSL_TEST_LIVE" => "FALSE",
    "CLOUDFLARE_SSL_APIKEY" => "",
  })

  live = env["CLOUDFLARE_SSL_TEST_LIVE"] == "TRUE"

  if live
    # Merged so the generated fields win: sdk-test-control.json's
    # test.client.options adds to the live client, it does not redirect it.
    merged_opts = Runner.live_client_options.merge({
      "apikey" => env["CLOUDFLARE_SSL_APIKEY"],
    })
    client = CloudflareSslSDK.new(merged_opts)
    return {
      client: client,
      calls: calls,
      live: true,
      idmap: {},
    }
  end

  mock_fetch = ->(url, init) {
    calls.push({ "url" => url, "init" => init })
    return {
      "status" => 200,
      "statusText" => "OK",
      "headers" => {},
      "json" => ->() {
        if !mockres.nil?
          return mockres
        end
        return { "id" => "direct01" }
      },
      "body" => "mock",
    }, nil
  }

  client = CloudflareSslSDK.new({
    "base" => "http://localhost:8080",
    "system" => {
      "fetch" => mock_fetch,
    },
  })

  {
    client: client,
    calls: calls,
    live: false,
    idmap: {},
  }
end
