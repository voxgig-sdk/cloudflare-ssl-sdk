"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('TlsCertificatesAndHostnamesCertificateResponseSingle2Entity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_SSL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_SSL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareSslSDK.test();
        const ent = testsdk.TlsCertificatesAndHostnamesCertificateResponseSingle2();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_SSL_TEST_LIVE;
        for (const op of ['create', 'list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'tls_certificates_and_hostnames_certificate_response_single_2.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "csr": { "a": true, "h": "Csr", "n": "csr", "r": true, "sh": "The Certificate Signing Request (CSR).", "t": "`$STRING`", "key$": "csr", "index$": 0 }, "hostnames": { "a": true, "h": "Hostnames", "n": "hostnames", "r": true, "sh": "Array of hostnames or wildcard names bound to the certificate.", "t": "`$ARRAY`", "key$": "hostnames", "index$": 1 }, "request_type": { "a": true, "h": "Request Type", "n": "request_type", "r": true, "sh": "Signature type desired on certificate (\"origin-rsa\" (rsa), \"origin-ecc\" (ecdsa), or \"keyless-certificate\" (for Keyless SSL servers).", "t": "`$STRING`", "key$": "request_type", "index$": 2 }, "requested_validity": { "a": true, "h": "Requested Validity", "n": "requested_validity", "r": false, "sh": "The number of days for which the certificate should be valid.", "t": "`$NUMBER`", "key$": "requested_validity", "index$": 3 }, "result": { "a": true, "h": "Result", "n": "result", "op": { "list": { "req": false, "type": "`$ARRAY`" } }, "r": true, "t": "`$OBJECT`", "key$": "result", "index$": 4 } }, "name": "tls_certificates_and_hostnames_certificate_response_single_2", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /certificates", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/certificates", "q": {}, "r": {}, "s": [{ "lit": "certificates" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /certificates", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": 10, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 10, "k": "query", "n": "offset", "or": "offset", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$NUMBER`", "index$": 2 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$NUMBER`", "index$": 3 }, { "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "query", "n": "zone_id", "or": "zone_id", "r": true, "t": "`$STRING`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/certificates", "q": { "exist": ["limit", "offset", "page", "per_page", "zone_id"] }, "r": {}, "s": [{ "lit": "certificates" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /certificates/{certificate_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "328578533902268680212849205732770752308931942346", "k": "param", "n": "certificate_id", "or": "certificate_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/certificates/{certificate_id}", "q": { "exist": ["certificate_id"] }, "r": {}, "s": [{ "lit": "certificates" }, { "var": "certificate_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "tls_certificates_and_hostnames_certificate_response_single_2", "name__orig": "tls_certificates_and_hostnames_certificate_response_single_2", "Name": "TlsCertificatesAndHostnamesCertificateResponseSingle2", "name_": "tls_certificates_and_hostnames_certificate_response_single_2", "name-": "tls-certificates-and-hostnames-certificate-response-single-2", "NAME": "TLS_CERTIFICATES_AND_HOSTNAMES_CERTIFICATE_RESPONSE_SINGLE_2", "index$": 19 }, { "active": true, "entity": "tls_certificates_and_hostnames_certificate_response_single_2", "key$": "BasicTlsCertificatesAndHostnamesCertificateResponseSingle2Flow", "kind": "basic", "name": "BasicTlsCertificatesAndHostnamesCertificateResponseSingle2Flow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "tls_certificates_and_hostnames_certificate_response_single_2_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "tls_certificates_and_hostnames_certificate_response_single_2_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "tls_certificates_and_hostnames_certificate_response_single_2_ref01", "srcdatavar": "tls_certificates_and_hostnames_certificate_response_single_2_ref01_data", "suffix": "_dt0" }, "m": { "id": "tls_certificates_and_hostnames_certificate_response_single_201" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-tls_certificates_and_hostnames_certificate_response_single_2_ref01" } }], "index$": 2 }] }, 'TlsCertificatesAndHostnamesCertificateResponseSingle2', { "POST /certificates": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "csr": { "description": "The Certificate Signing Request (CSR). Must be newline-encoded.", "type": "string", "example": "-----BEGIN CERTIFICATE REQUEST-----\nMIICxzCCAa8CAQAwSDELMAkGA1UEBhMCVVMxFjAUBgNVBAgTDVNhbiBGcmFuY2lz\nY28xCzAJBgNVBAcTAkNBMRQwEgYDVQQDEwtleGFtcGxlLm5ldDCCASIwDQYJKoZI\nhvcNAQEBBQADggEPADCCAQoCggEBALxejtu4b+jPdFeFi6OUsye8TYJQBm3WfCvL\nHu5EvijMO/4Z2TImwASbwUF7Ir8OLgH+mGlQZeqyNvGoSOMEaZVXcYfpR1hlVak8\n4GGVr+04IGfOCqaBokaBFIwzclGZbzKmLGwIQioNxGfqFm6RGYGA3be2Je2iseBc\nN8GV1wYmvYE0RR+yWweJCTJ157exyRzu7sVxaEW9F87zBQLyOnwXc64rflXslRqi\ng7F7w5IaQYOl8yvmk/jEPCAha7fkiUfEpj4N12+oPRiMvleJF98chxjD4MH39c5I\nuOslULhrWunfh7GB1jwWNA9y44H0snrf+xvoy2TcHmxvma9Eln8CAwEAAaA6MDgG\nCSqGSIb3DQEJDjErMCkwJwYDVR0RBCAwHoILZXhhbXBsZS5uZXSCD3d3dy5leGFt\ncGxlLm5ldDANBgkqhkiG9w0BAQsFAAOCAQEAcBaX6dOnI8ncARrI9ZSF2AJX+8mx\npTHY2+Y2C0VvrVDGMtbBRH8R9yMbqWtlxeeNGf//LeMkSKSFa4kbpdx226lfui8/\nauRDBTJGx2R1ccUxmLZXx4my0W5iIMxunu+kez+BDlu7bTT2io0uXMRHue4i6quH\nyc5ibxvbJMjR7dqbcanVE10/34oprzXQsJ/VmSuZNXtjbtSKDlmcpw6To/eeAJ+J\nhXykcUihvHyG4A1m2R6qpANBjnA0pHexfwM/SgfzvpbvUg0T1ubmer8BgTwCKIWs\ndcWYTthM51JIqRBfNqy4QcBnX+GY05yltEEswQI55wdiS3CjTTA67sdbcQ==\n-----END CERTIFICATE REQUEST-----", "x-ref": "#/components/schemas/tls-certificates-and-hostnames_csr", "key$": "csr" }, "hostnames": { "description": "Array of hostnames or wildcard names bound to the certificate.\nHostnames must be fully qualified domain names (FQDNs) belonging to zones on your account (e.g., `example.com` or `sub.example.com`). Wildcards are supported only as a `*.` prefix for a single level (e.g., `*.example.com`). Double wildcards (`*.*.example.com`) and interior wildcards (`foo.*.example.com`) are not allowed. The wildcard suffix must be a multi-label domain (`*.example.com` is valid, but `*.com` is not). Unicode/IDN hostnames are accepted and automatically converted to punycode.", "type": "array", "items": { "minLength": 1, "type": "string", "x-auditable": true }, "example": ["example.com", "*.example.com", "sub.example.com"], "maxItems": 100, "minItems": 1, "x-ref": "#/components/schemas/tls-certificates-and-hostnames_hostnames", "key$": "hostnames" }, "request_type": { "description": "Signature type desired on certificate (\"origin-rsa\" (rsa), \"origin-ecc\" (ecdsa), or \"keyless-certificate\" (for Keyless SSL servers).", "type": "string", "example": "origin-rsa", "enum": ["origin-rsa", "origin-ecc", "keyless-certificate"], "x-auditable": true, "x-ref": "#/components/schemas/tls-certificates-and-hostnames_request_type", "key$": "request_type" }, "requested_validity": { "description": "The number of days for which the certificate should be valid.", "type": "number", "example": 5475, "default": 5475, "enum": [7, 30, 90, 365, 730, 1095, 5475], "x-auditable": true, "x-ref": "#/components/schemas/tls-certificates-and-hostnames_requested_validity", "key$": "requested_validity" } }, "required": ["hostnames", "request_type", "csr"], "index$": 1 } } } }, "parameters": [] }, "GET /certificates": { "protocol": "http", "parameters": [{ "name": "zone_id", "in": "query", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/tls-certificates-and-hostnames_identifier" }, "index$": 0 }, { "name": "page", "in": "query", "schema": { "description": "Page number of paginated results.", "type": "number", "default": 1, "minimum": 1 }, "index$": 1 }, { "name": "per_page", "in": "query", "schema": { "description": "Number of records per page.", "type": "number", "default": 20, "maximum": 50, "minimum": 5 }, "index$": 2 }, { "name": "limit", "in": "query", "schema": { "description": "Limit to the number of records returned.", "type": "integer", "example": 10 }, "index$": 3 }, { "name": "offset", "in": "query", "schema": { "description": "Offset the results.", "type": "integer", "example": 10 }, "index$": 4 }] }, "GET /certificates/{certificate_id}": { "protocol": "http", "parameters": [{ "name": "certificate_id", "in": "path", "required": true, "schema": { "description": "The x509 serial number of the Origin CA certificate.", "type": "string", "example": "328578533902268680212849205732770752308931942346", "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/tls-certificates-and-hostnames_origin_ca_certificate_identifier" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const tls_certificates_and_hostnames_certificate_response_single_2_ref01_ent = client.TlsCertificatesAndHostnamesCertificateResponseSingle2();
        let tls_certificates_and_hostnames_certificate_response_single_2_ref01_data = setup.data.new.tls_certificates_and_hostnames_certificate_response_single_2['tls_certificates_and_hostnames_certificate_response_single_2_ref01'];
        tls_certificates_and_hostnames_certificate_response_single_2_ref01_data = (await tls_certificates_and_hostnames_certificate_response_single_2_ref01_ent.create(tls_certificates_and_hostnames_certificate_response_single_2_ref01_data)).data();
        (0, node_assert_1.default)(null != tls_certificates_and_hostnames_certificate_response_single_2_ref01_data);
        // LIST
        const tls_certificates_and_hostnames_certificate_response_single_2_ref01_match = {};
        const tls_certificates_and_hostnames_certificate_response_single_2_ref01_list = (await tls_certificates_and_hostnames_certificate_response_single_2_ref01_ent.list(tls_certificates_and_hostnames_certificate_response_single_2_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/tls_certificates_and_hostnames_certificate_response_single_2/TlsCertificatesAndHostnamesCertificateResponseSingle2TestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareSslSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['tls_certificates_and_hostnames_certificate_response_single_201', 'tls_certificates_and_hostnames_certificate_response_single_202', 'tls_certificates_and_hostnames_certificate_response_single_203'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CERTIFICATE_RESPONSE_SINGLE_2_ENTID': idmap,
        'CLOUDFLARE_SSL_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_SSL_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_SSL_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CERTIFICATE_RESPONSE_SINGLE_2_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_SSL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CERTIFICATE_RESPONSE_SINGLE_2_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.CloudflareSslSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.CLOUDFLARE_SSL_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.CLOUDFLARE_SSL_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=TlsCertificatesAndHostnamesCertificateResponseSingle2Entity.test.js.map