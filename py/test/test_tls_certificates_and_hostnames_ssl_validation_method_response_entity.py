# TlsCertificatesAndHostnamesSslValidationMethodResponse entity test

import json
import os
import time

import pytest

from cloudflaressl_sdk.utility.voxgig_struct import voxgig_struct as vs
from cloudflaressl_sdk import CloudflareSslSDK
from cloudflaressl_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestTlsCertificatesAndHostnamesSslValidationMethodResponseEntity:

    def test_should_create_instance(self):
        testsdk = CloudflareSslSDK.test(None, None)
        ent = testsdk.TlsCertificatesAndHostnamesSslValidationMethodResponse(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _tls_certificates_and_hostnames_ssl_validation_method_response_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["update"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "tls_certificates_and_hostnames_ssl_validation_method_response." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_SSL_VALIDATION_METHOD_RESPONSE_ENTID JSON to run live")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        tls_certificates_and_hostnames_ssl_validation_method_response_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.tls_certificates_and_hostnames_ssl_validation_method_response")))
        tls_certificates_and_hostnames_ssl_validation_method_response_ref01_data = None
        if len(tls_certificates_and_hostnames_ssl_validation_method_response_ref01_data_raw) > 0:
            tls_certificates_and_hostnames_ssl_validation_method_response_ref01_data = helpers.to_map(tls_certificates_and_hostnames_ssl_validation_method_response_ref01_data_raw[0][1])

        # UPDATE
        tls_certificates_and_hostnames_ssl_validation_method_response_ref01_ent = client.TlsCertificatesAndHostnamesSslValidationMethodResponse(None)
        tls_certificates_and_hostnames_ssl_validation_method_response_ref01_data_up0_up = {
            "zone_id": setup["idmap"]["zone_id"],
        }

        tls_certificates_and_hostnames_ssl_validation_method_response_ref01_markdef_up0_name = "validation_method"
        tls_certificates_and_hostnames_ssl_validation_method_response_ref01_markdef_up0_value = "Mark01-tls_certificates_and_hostnames_ssl_validation_method_response_ref01_" + str(setup["now"])
        tls_certificates_and_hostnames_ssl_validation_method_response_ref01_data_up0_up[tls_certificates_and_hostnames_ssl_validation_method_response_ref01_markdef_up0_name] = tls_certificates_and_hostnames_ssl_validation_method_response_ref01_markdef_up0_value

        tls_certificates_and_hostnames_ssl_validation_method_response_ref01_resdata_up0 = helpers.to_map(runner.entity_data(tls_certificates_and_hostnames_ssl_validation_method_response_ref01_ent.update(tls_certificates_and_hostnames_ssl_validation_method_response_ref01_data_up0_up, None)))
        assert tls_certificates_and_hostnames_ssl_validation_method_response_ref01_resdata_up0 is not None
        assert tls_certificates_and_hostnames_ssl_validation_method_response_ref01_resdata_up0[tls_certificates_and_hostnames_ssl_validation_method_response_ref01_markdef_up0_name] == tls_certificates_and_hostnames_ssl_validation_method_response_ref01_markdef_up0_value



def _tls_certificates_and_hostnames_ssl_validation_method_response_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/tls_certificates_and_hostnames_ssl_validation_method_response/TlsCertificatesAndHostnamesSslValidationMethodResponseTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = CloudflareSslSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["tls_certificates_and_hostnames_ssl_validation_method_response01", "tls_certificates_and_hostnames_ssl_validation_method_response02", "tls_certificates_and_hostnames_ssl_validation_method_response03", "zone01"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_SSL_VALIDATION_METHOD_RESPONSE_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_SSL_VALIDATION_METHOD_RESPONSE_ENTID": idmap,
        "CLOUDFLARE_SSL_TEST_LIVE": "FALSE",
        "CLOUDFLARE_SSL_TEST_EXPLAIN": "FALSE",
        "CLOUDFLARE_SSL_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_SSL_VALIDATION_METHOD_RESPONSE_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("zone_id") is None:
        idmap_resolved["zone_id"] = idmap_resolved.get("zone01")

    if env.get("CLOUDFLARE_SSL_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("CLOUDFLARE_SSL_APIKEY"),
            },
            extra or {},
        ])
        client = CloudflareSslSDK(helpers.to_map(merged_opts))

    _live = env.get("CLOUDFLARE_SSL_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("CLOUDFLARE_SSL_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
