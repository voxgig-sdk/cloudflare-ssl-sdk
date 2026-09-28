# TlsCertificatesAndHostnamesHostnameAssociation entity test

import json
import os
import time

import pytest

from cloudflaressl_sdk.utility.voxgig_struct import voxgig_struct as vs
from cloudflaressl_sdk import CloudflareSslSDK
from cloudflaressl_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestTlsCertificatesAndHostnamesHostnameAssociationEntity:

    def test_should_create_instance(self):
        testsdk = CloudflareSslSDK.test(None, None)
        ent = testsdk.TlsCertificatesAndHostnamesHostnameAssociation(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _tls_certificates_and_hostnames_hostname_association_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["update", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "tls_certificates_and_hostnames_hostname_association." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_HOSTNAME_ASSOCIATION_ENTID JSON to run live")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        tls_certificates_and_hostnames_hostname_association_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.tls_certificates_and_hostnames_hostname_association")))
        tls_certificates_and_hostnames_hostname_association_ref01_data = None
        if len(tls_certificates_and_hostnames_hostname_association_ref01_data_raw) > 0:
            tls_certificates_and_hostnames_hostname_association_ref01_data = helpers.to_map(tls_certificates_and_hostnames_hostname_association_ref01_data_raw[0][1])

        # UPDATE
        tls_certificates_and_hostnames_hostname_association_ref01_ent = client.TlsCertificatesAndHostnamesHostnameAssociation(None)
        tls_certificates_and_hostnames_hostname_association_ref01_data_up0_up = {
        }

        tls_certificates_and_hostnames_hostname_association_ref01_markdef_up0_name = "mtls_certificate_id"
        tls_certificates_and_hostnames_hostname_association_ref01_markdef_up0_value = "Mark01-tls_certificates_and_hostnames_hostname_association_ref01_" + str(setup["now"])
        tls_certificates_and_hostnames_hostname_association_ref01_data_up0_up[tls_certificates_and_hostnames_hostname_association_ref01_markdef_up0_name] = tls_certificates_and_hostnames_hostname_association_ref01_markdef_up0_value

        tls_certificates_and_hostnames_hostname_association_ref01_resdata_up0 = helpers.to_map(runner.entity_data(tls_certificates_and_hostnames_hostname_association_ref01_ent.update(tls_certificates_and_hostnames_hostname_association_ref01_data_up0_up, None)))
        assert tls_certificates_and_hostnames_hostname_association_ref01_resdata_up0 is not None
        assert tls_certificates_and_hostnames_hostname_association_ref01_resdata_up0[tls_certificates_and_hostnames_hostname_association_ref01_markdef_up0_name] == tls_certificates_and_hostnames_hostname_association_ref01_markdef_up0_value

        # LOAD
        tls_certificates_and_hostnames_hostname_association_ref01_match_dt0 = {}
        tls_certificates_and_hostnames_hostname_association_ref01_data_dt0_loaded = tls_certificates_and_hostnames_hostname_association_ref01_ent.load(tls_certificates_and_hostnames_hostname_association_ref01_match_dt0, None)
        assert tls_certificates_and_hostnames_hostname_association_ref01_data_dt0_loaded is not None



def _tls_certificates_and_hostnames_hostname_association_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/tls_certificates_and_hostnames_hostname_association/TlsCertificatesAndHostnamesHostnameAssociationTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = CloudflareSslSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["tls_certificates_and_hostnames_hostname_association01", "tls_certificates_and_hostnames_hostname_association02", "tls_certificates_and_hostnames_hostname_association03"],
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
        "CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_HOSTNAME_ASSOCIATION_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_HOSTNAME_ASSOCIATION_ENTID": idmap,
        "CLOUDFLARE_SSL_TEST_LIVE": "FALSE",
        "CLOUDFLARE_SSL_TEST_EXPLAIN": "FALSE",
        "CLOUDFLARE_SSL_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_HOSTNAME_ASSOCIATION_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

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
