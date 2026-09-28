# TlsCertificatesAndHostnamesCustomCsrResponseSingle direct test

import json
import pytest

from cloudflaressl_sdk.utility.voxgig_struct import voxgig_struct as vs
from cloudflaressl_sdk import CloudflareSslSDK
from cloudflaressl_sdk.core import helpers
from test import runner


class TestTlsCertificatesAndHostnamesCustomCsrResponseSingleDirect:

    def test_should_direct_load_tls_certificates_and_hostnames_custom_csr_response_single(self):
        setup = _tls_certificates_and_hostnames_custom_csr_response_single_direct_setup({"id": "direct01"})
        _skip, _reason = runner.is_control_skipped("direct", "direct-load-tls_certificates_and_hostnames_custom_csr_response_single", "live" if setup["live"] else "unit")
        if _skip:
            # pytest already imported at module scope
            pytest.skip(_reason or "skipped via sdk-test-control.json")
            return
        client = setup["client"]

        params = {}
        query = {}
        if setup["live"]:
            params["custom_csr_id"] = "7b163417-1d2b-4c84-a38a-2fb7a0cd7752"
            params["zone_id"] = "023e105f4ecef8ad9ca31a8372d0c353"
        else:
            params["custom_csr_id"] = "direct01"
            params["zone_id"] = "direct02"

        result = client.direct({
            "path": "zones/{zone_id}/custom_csrs/{custom_csr_id}",
            "method": "GET",
            "params": params,
            "query": query,
        })
        if setup["live"]:
            # Live mode is lenient: synthetic IDs frequently 4xx. Skip
            # rather than fail when the load endpoint isn't reachable
            # with the IDs we can construct from setup.idmap.
            if result.get("err") is not None:
                pytest.skip(f"load call failed (likely synthetic IDs against live API): {result.get('err')}")
                return
            if not result.get("ok"):
                pytest.skip("load call not ok (likely synthetic IDs against live API)")
                return
            status = helpers.to_int(result["status"])
            if status < 200 or status >= 300:
                pytest.skip(f"expected 2xx status, got {status}")
                return
        else:
            assert result["ok"] is True
            assert helpers.to_int(result["status"]) == 200
            assert result["data"] is not None
            if isinstance(result["data"], dict):
                assert result["data"]["id"] == "direct01"
            assert len(setup["calls"]) == 1



def _tls_certificates_and_hostnames_custom_csr_response_single_direct_setup(mockres):
    runner.load_env_local()

    calls = []

    env = runner.env_override({
        "CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CUSTOM_CSR_RESPONSE_SINGLE_ENTID": {},
        "CLOUDFLARE_SSL_TEST_LIVE": "FALSE",
        "CLOUDFLARE_SSL_APIKEY": "",
    })

    live = env.get("CLOUDFLARE_SSL_TEST_LIVE") == "TRUE"

    if live:
        # sdk-test-control.json's test.client.options seeds the live
        # client; the generated fields below overwrite anything they name.
        merged_opts = dict(runner.live_client_options())
        merged_opts.update({
            "apikey": env.get("CLOUDFLARE_SSL_APIKEY"),
        })
        client = CloudflareSslSDK(merged_opts)
        return {
            "client": client,
            "calls": calls,
            "live": True,
            "idmap": {},
        }

    def mock_fetch(url, init):
        calls.append({"url": url, "init": init})
        return {
            "status": 200,
            "statusText": "OK",
            "headers": {},
            "json": lambda: mockres if mockres is not None else {"id": "direct01"},
            "body": "mock",
        }, None

    client = CloudflareSslSDK({
        "base": "http://localhost:8080",
        "system": {
            "fetch": mock_fetch,
        },
    })

    return {
        "client": client,
        "calls": calls,
        "live": False,
        "idmap": {},
    }
