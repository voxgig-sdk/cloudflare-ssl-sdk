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
(0, node_test_1.describe)('TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_SSL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_SSL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareSslSDK.test();
        const ent = testsdk.TlsCertificatesAndHostnamesClientCertificateResponseSingle();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_SSL_TEST_LIVE;
        for (const op of ['create', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'tls_certificates_and_hostnames_client_certificate_response_single.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "csr": { "a": true, "h": "Csr", "n": "csr", "r": true, "sh": "The Certificate Signing Request (CSR).", "t": "`$STRING`", "key$": "csr", "index$": 0 }, "reactivate": { "a": true, "h": "Reactivate", "n": "reactivate", "r": false, "t": "`$BOOLEAN`", "key$": "reactivate", "index$": 1 }, "result": { "a": true, "h": "Result", "n": "result", "r": false, "t": "`$OBJECT`", "key$": "result", "index$": 2 }, "validity_days": { "a": true, "h": "Validity Days", "n": "validity_days", "r": true, "sh": "The number of days the Client Certificate will be valid after the issued_on date.", "t": "`$INTEGER`", "key$": "validity_days", "index$": 3 } }, "name": "tls_certificates_and_hostnames_client_certificate_response_single", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /zones/{zone_id}/client_certificates", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "zone_id", "or": "zone_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/zones/{zone_id}/client_certificates", "q": { "exist": ["zone_id"] }, "r": {}, "s": [{ "lit": "zones" }, { "var": "zone_id" }, { "lit": "client_certificates" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /zones/{zone_id}/client_certificates/{client_certificate_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "0d89c70d-ad9f-4843-b99f-6cc0252067e9", "k": "param", "n": "client_certificate_id", "or": "client_certificate_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "zone_id", "or": "zone_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/zones/{zone_id}/client_certificates/{client_certificate_id}", "q": { "exist": ["client_certificate_id", "zone_id"] }, "r": {}, "s": [{ "lit": "zones" }, { "var": "zone_id" }, { "lit": "client_certificates" }, { "var": "client_certificate_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /zones/{zone_id}/client_certificates/{client_certificate_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "0d89c70d-ad9f-4843-b99f-6cc0252067e9", "k": "param", "n": "client_certificate_id", "or": "client_certificate_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "zone_id", "or": "zone_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/zones/{zone_id}/client_certificates/{client_certificate_id}", "q": { "exist": ["client_certificate_id", "zone_id"] }, "r": {}, "s": [{ "lit": "zones" }, { "var": "zone_id" }, { "lit": "client_certificates" }, { "var": "client_certificate_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /zones/{zone_id}/client_certificates/{client_certificate_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "0d89c70d-ad9f-4843-b99f-6cc0252067e9", "k": "param", "n": "client_certificate_id", "or": "client_certificate_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "zone_id", "or": "zone_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PATCH", "o": "/zones/{zone_id}/client_certificates/{client_certificate_id}", "q": { "exist": ["client_certificate_id", "zone_id"] }, "r": {}, "s": [{ "lit": "zones" }, { "var": "zone_id" }, { "lit": "client_certificates" }, { "var": "client_certificate_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "tls_certificates_and_hostnames_client_certificate_response_single", "name__orig": "tls_certificates_and_hostnames_client_certificate_response_single", "Name": "TlsCertificatesAndHostnamesClientCertificateResponseSingle", "name_": "tls_certificates_and_hostnames_client_certificate_response_single", "name-": "tls-certificates-and-hostnames-client-certificate-response-single", "NAME": "TLS_CERTIFICATES_AND_HOSTNAMES_CLIENT_CERTIFICATE_RESPONSE_SINGLE", "index$": 26 }, { "active": true, "entity": "tls_certificates_and_hostnames_client_certificate_response_single", "key$": "BasicTlsCertificatesAndHostnamesClientCertificateResponseSingleFlow", "kind": "basic", "name": "BasicTlsCertificatesAndHostnamesClientCertificateResponseSingleFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "tls_certificates_and_hostnames_client_certificate_response_single_ref01" }, "m": { "zone_id": "zone01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": { "zone_id": "zone01" }, "i": { "ref": "tls_certificates_and_hostnames_client_certificate_response_single_ref01", "srcdatavar": "tls_certificates_and_hostnames_client_certificate_response_single_ref01_data", "suffix": "_up0", "textfield": "csr" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-tls_certificates_and_hostnames_client_certificate_response_single_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "tls_certificates_and_hostnames_client_certificate_response_single_ref01", "srcdatavar": "tls_certificates_and_hostnames_client_certificate_response_single_ref01_data", "suffix": "_dt0" }, "m": { "id": "tls_certificates_and_hostnames_client_certificate_response_single01", "zone_id": "zone01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-tls_certificates_and_hostnames_client_certificate_response_single_ref01" } }], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "tls_certificates_and_hostnames_client_certificate_response_single_ref01", "suffix": "_rm0" }, "m": { "id": "tls_certificates_and_hostnames_client_certificate_response_single01", "zone_id": "zone01" }, "o": "remove", "s": [], "v": [], "index$": 3 }] }, 'TlsCertificatesAndHostnamesClientCertificateResponseSingle', { "POST /zones/{zone_id}/client_certificates": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "csr": { "description": "The Certificate Signing Request (CSR). Must be newline-encoded.", "type": "string", "example": "-----BEGIN CERTIFICATE REQUEST-----\nMIICY....\n-----END CERTIFICATE REQUEST-----", "x-auditable": true, "x-ref": "#/components/schemas/tls-certificates-and-hostnames_csr-2", "key$": "csr" }, "validity_days": { "description": "The number of days the Client Certificate will be valid after the issued_on date.", "type": "integer", "example": 3650, "x-auditable": true, "x-ref": "#/components/schemas/tls-certificates-and-hostnames_validity_days-2", "key$": "validity_days" } }, "required": ["csr", "validity_days"], "index$": 1 } } } }, "parameters": [{ "name": "zone_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/tls-certificates-and-hostnames_identifier" }, "index$": 0 }] }, "GET /zones/{zone_id}/client_certificates/{client_certificate_id}": { "protocol": "http", "parameters": [{ "name": "zone_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/tls-certificates-and-hostnames_identifier" }, "index$": 0 }, { "name": "client_certificate_id", "in": "path", "required": true, "schema": { "description": "Client Certificate Tag", "type": "string", "example": "0d89c70d-ad9f-4843-b99f-6cc0252067e9", "maxLength": 36, "minLength": 36, "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/tls-certificates-and-hostnames_client_certificate_identifier" }, "index$": 1 }] }, "DELETE /zones/{zone_id}/client_certificates/{client_certificate_id}": { "protocol": "http", "parameters": [{ "name": "zone_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/tls-certificates-and-hostnames_identifier" }, "index$": 0 }, { "name": "client_certificate_id", "in": "path", "required": true, "schema": { "description": "Client Certificate Tag", "type": "string", "example": "0d89c70d-ad9f-4843-b99f-6cc0252067e9", "maxLength": 36, "minLength": 36, "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/tls-certificates-and-hostnames_client_certificate_identifier" }, "index$": 1 }] }, "PATCH /zones/{zone_id}/client_certificates/{client_certificate_id}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "reactivate": { "type": "boolean", "example": true, "key$": "reactivate" } }, "index$": 1 } } } }, "parameters": [{ "name": "zone_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/tls-certificates-and-hostnames_identifier" }, "index$": 0 }, { "name": "client_certificate_id", "in": "path", "required": true, "schema": { "description": "Client Certificate Tag", "type": "string", "example": "0d89c70d-ad9f-4843-b99f-6cc0252067e9", "maxLength": 36, "minLength": 36, "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/tls-certificates-and-hostnames_client_certificate_identifier" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const tls_certificates_and_hostnames_client_certificate_response_single_ref01_ent = client.TlsCertificatesAndHostnamesClientCertificateResponseSingle();
        let tls_certificates_and_hostnames_client_certificate_response_single_ref01_data = setup.data.new.tls_certificates_and_hostnames_client_certificate_response_single['tls_certificates_and_hostnames_client_certificate_response_single_ref01'];
        tls_certificates_and_hostnames_client_certificate_response_single_ref01_data['zone_id'] = setup.idmap['zone01'];
        tls_certificates_and_hostnames_client_certificate_response_single_ref01_data = (await tls_certificates_and_hostnames_client_certificate_response_single_ref01_ent.create(tls_certificates_and_hostnames_client_certificate_response_single_ref01_data)).data();
        (0, node_assert_1.default)(null != tls_certificates_and_hostnames_client_certificate_response_single_ref01_data);
        // UPDATE
        const tls_certificates_and_hostnames_client_certificate_response_single_ref01_data_up0 = {};
        tls_certificates_and_hostnames_client_certificate_response_single_ref01_data_up0['zone_id'] = setup.idmap['zone_id'];
        const tls_certificates_and_hostnames_client_certificate_response_single_ref01_markdef_up0 = { name: 'csr', value: 'Mark01-tls_certificates_and_hostnames_client_certificate_response_single_ref01_' + setup.now };
        tls_certificates_and_hostnames_client_certificate_response_single_ref01_data_up0[tls_certificates_and_hostnames_client_certificate_response_single_ref01_markdef_up0.name] = tls_certificates_and_hostnames_client_certificate_response_single_ref01_markdef_up0.value;
        const tls_certificates_and_hostnames_client_certificate_response_single_ref01_resdata_up0 = (await tls_certificates_and_hostnames_client_certificate_response_single_ref01_ent.update(tls_certificates_and_hostnames_client_certificate_response_single_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != tls_certificates_and_hostnames_client_certificate_response_single_ref01_resdata_up0);
        (0, node_assert_1.default)(tls_certificates_and_hostnames_client_certificate_response_single_ref01_resdata_up0[tls_certificates_and_hostnames_client_certificate_response_single_ref01_markdef_up0.name] === tls_certificates_and_hostnames_client_certificate_response_single_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/tls_certificates_and_hostnames_client_certificate_response_single/TlsCertificatesAndHostnamesClientCertificateResponseSingleTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareSslSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['tls_certificates_and_hostnames_client_certificate_response_single01', 'tls_certificates_and_hostnames_client_certificate_response_single02', 'tls_certificates_and_hostnames_client_certificate_response_single03', 'zone01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CLIENT_CERTIFICATE_RESPONSE_SINGLE_ENTID': idmap,
        'CLOUDFLARE_SSL_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_SSL_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_SSL_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CLIENT_CERTIFICATE_RESPONSE_SINGLE_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_SSL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CLIENT_CERTIFICATE_RESPONSE_SINGLE_ENTID'];
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
//# sourceMappingURL=TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity.test.js.map