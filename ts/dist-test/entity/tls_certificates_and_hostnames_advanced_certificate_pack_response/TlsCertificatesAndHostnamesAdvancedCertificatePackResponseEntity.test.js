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
(0, node_test_1.describe)('TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_SSL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_SSL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareSslSDK.test();
        const ent = testsdk.TlsCertificatesAndHostnamesAdvancedCertificatePackResponse();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_SSL_TEST_LIVE;
        for (const op of ['create', 'update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'tls_certificates_and_hostnames_advanced_certificate_pack_response.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "certificate_authority": { "a": true, "h": "Certificate Authority", "n": "certificate_authority", "r": true, "sh": "Certificate Authority selected for the order.", "t": "`$STRING`", "key$": "certificate_authority", "index$": 0 }, "cloudflare_branding": { "a": true, "h": "Cloudflare Branding", "n": "cloudflare_branding", "r": false, "sh": "Whether or not to add Cloudflare Branding for the order.", "t": "`$BOOLEAN`", "key$": "cloudflare_branding", "index$": 1 }, "hosts": { "a": true, "h": "Hosts", "n": "hosts", "r": true, "sh": "Comma separated list of valid host names for the certificate packs.", "t": "`$ARRAY`", "key$": "hosts", "index$": 2 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "sh": "Type of certificate pack.", "t": "`$STRING`", "key$": "type", "index$": 3 }, "validation_method": { "a": true, "h": "Validation Method", "n": "validation_method", "r": true, "sh": "Validation Method selected for the order.", "t": "`$STRING`", "key$": "validation_method", "index$": 4 }, "validity_days": { "a": true, "h": "Validity Days", "n": "validity_days", "r": true, "sh": "Validity Days selected for the order.", "t": "`$INTEGER`", "key$": "validity_days", "index$": 5 } }, "name": "tls_certificates_and_hostnames_advanced_certificate_pack_response", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /zones/{zone_id}/ssl/certificate_packs/order", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "zone_id", "or": "zone_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/zones/{zone_id}/ssl/certificate_packs/order", "q": { "exist": ["zone_id"] }, "r": {}, "s": [{ "lit": "zones" }, { "var": "zone_id" }, { "lit": "ssl" }, { "lit": "certificate_packs" }, { "lit": "order" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "3822ff90-ea29-44df-9e55-21300bb9419b", "k": "param", "n": "certificate_pack_id", "or": "certificate_pack_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "zone_id", "or": "zone_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PATCH", "o": "/zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}", "q": { "exist": ["certificate_pack_id", "zone_id"] }, "r": {}, "s": [{ "lit": "zones" }, { "var": "zone_id" }, { "lit": "ssl" }, { "lit": "certificate_packs" }, { "var": "certificate_pack_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "tls_certificates_and_hostnames_advanced_certificate_pack_response", "name__orig": "tls_certificates_and_hostnames_advanced_certificate_pack_response", "Name": "TlsCertificatesAndHostnamesAdvancedCertificatePackResponse", "name_": "tls_certificates_and_hostnames_advanced_certificate_pack_response", "name-": "tls-certificates-and-hostnames-advanced-certificate-pack-response", "NAME": "TLS_CERTIFICATES_AND_HOSTNAMES_ADVANCED_CERTIFICATE_PACK_RESPONSE", "index$": 7 }, { "active": true, "entity": "tls_certificates_and_hostnames_advanced_certificate_pack_response", "key$": "BasicTlsCertificatesAndHostnamesAdvancedCertificatePackResponseFlow", "kind": "basic", "name": "BasicTlsCertificatesAndHostnamesAdvancedCertificatePackResponseFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "tls_certificates_and_hostnames_advanced_certificate_pack_response_ref01" }, "m": { "zone_id": "zone01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": { "zone_id": "zone01" }, "i": { "ref": "tls_certificates_and_hostnames_advanced_certificate_pack_response_ref01", "srcdatavar": "tls_certificates_and_hostnames_advanced_certificate_pack_response_ref01_data", "suffix": "_up0", "textfield": "certificate_authority" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-tls_certificates_and_hostnames_advanced_certificate_pack_response_ref01" } }], "v": [], "index$": 1 }] }, 'TlsCertificatesAndHostnamesAdvancedCertificatePackResponse', { "POST /zones/{zone_id}/ssl/certificate_packs/order": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "certificate_authority": { "description": "Certificate Authority selected for the order.  For information on any certificate authority specific details or restrictions [see this page for more details](https://developers.cloudflare.com/ssl/reference/certificate-authorities).", "type": "string", "example": "lets_encrypt", "enum": ["google", "lets_encrypt", "ssl_com"], "x-auditable": true, "x-ref": "#/components/schemas/tls-certificates-and-hostnames_certificate_authority-2", "key$": "certificate_authority" }, "cloudflare_branding": { "description": "Whether or not to add Cloudflare Branding for the order.  This will add a subdomain of sni.cloudflaressl.com as the Common Name if set to true.", "type": "boolean", "example": false, "x-auditable": true, "x-ref": "#/components/schemas/tls-certificates-and-hostnames_cloudflare_branding", "key$": "cloudflare_branding" }, "hosts": { "description": "Comma separated list of valid host names for the certificate packs. Must contain the zone apex, may not contain more than 50 hosts, and may not be empty.", "type": "array", "items": { "type": "string", "x-auditable": true }, "example": ["example.com", "*.example.com", "www.example.com"], "x-stainless-collection-type": "set", "x-stainless-terraform-configurability": "computed_optional", "x-ref": "#/components/schemas/tls-certificates-and-hostnames_hosts-2", "key$": "hosts" }, "type": { "description": "Type of certificate pack.", "type": "string", "example": "advanced", "enum": ["advanced"], "x-auditable": true, "x-ref": "#/components/schemas/tls-certificates-and-hostnames_advanced_type", "key$": "type" }, "validation_method": { "description": "Validation Method selected for the order.", "type": "string", "example": "txt", "enum": ["txt", "http", "email"], "x-auditable": true, "x-ref": "#/components/schemas/tls-certificates-and-hostnames_validation_method", "key$": "validation_method" }, "validity_days": { "description": "Validity Days selected for the order.", "type": "integer", "enum": [14, 30, 90, 365], "x-auditable": true, "x-ref": "#/components/schemas/tls-certificates-and-hostnames_validity_days", "key$": "validity_days" } }, "required": ["type", "hosts", "validation_method", "validity_days", "certificate_authority"], "index$": 1 } } } }, "parameters": [{ "name": "zone_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/tls-certificates-and-hostnames_identifier" }, "index$": 0 }] }, "PATCH /zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "cloudflare_branding": { "description": "Whether or not to add Cloudflare Branding for the order.  This will add a subdomain of sni.cloudflaressl.com as the Common Name if set to true.", "type": "boolean", "example": false, "x-auditable": true, "x-ref": "#/components/schemas/tls-certificates-and-hostnames_cloudflare_branding", "key$": "cloudflare_branding" } }, "index$": 1 } } } }, "parameters": [{ "name": "certificate_pack_id", "in": "path", "required": true, "schema": { "description": "The unique identifier for a certificate_pack.", "type": "string", "example": "3822ff90-ea29-44df-9e55-21300bb9419b", "readOnly": true, "x-auditable": true, "x-ref": "#/components/schemas/tls-certificates-and-hostnames_certificate_pack_identifier" }, "index$": 0 }, { "name": "zone_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/tls-certificates-and-hostnames_identifier" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const tls_certificates_and_hostnames_advanced_certificate_pack_response_ref01_ent = client.TlsCertificatesAndHostnamesAdvancedCertificatePackResponse();
        let tls_certificates_and_hostnames_advanced_certificate_pack_response_ref01_data = setup.data.new.tls_certificates_and_hostnames_advanced_certificate_pack_response['tls_certificates_and_hostnames_advanced_certificate_pack_response_ref01'];
        tls_certificates_and_hostnames_advanced_certificate_pack_response_ref01_data['zone_id'] = setup.idmap['zone01'];
        tls_certificates_and_hostnames_advanced_certificate_pack_response_ref01_data = (await tls_certificates_and_hostnames_advanced_certificate_pack_response_ref01_ent.create(tls_certificates_and_hostnames_advanced_certificate_pack_response_ref01_data)).data();
        (0, node_assert_1.default)(null != tls_certificates_and_hostnames_advanced_certificate_pack_response_ref01_data);
        // UPDATE
        const tls_certificates_and_hostnames_advanced_certificate_pack_response_ref01_data_up0 = {};
        tls_certificates_and_hostnames_advanced_certificate_pack_response_ref01_data_up0['zone_id'] = setup.idmap['zone_id'];
        const tls_certificates_and_hostnames_advanced_certificate_pack_response_ref01_markdef_up0 = { name: 'certificate_authority', value: 'Mark01-tls_certificates_and_hostnames_advanced_certificate_pack_response_ref01_' + setup.now };
        tls_certificates_and_hostnames_advanced_certificate_pack_response_ref01_data_up0[tls_certificates_and_hostnames_advanced_certificate_pack_response_ref01_markdef_up0.name] = tls_certificates_and_hostnames_advanced_certificate_pack_response_ref01_markdef_up0.value;
        const tls_certificates_and_hostnames_advanced_certificate_pack_response_ref01_resdata_up0 = (await tls_certificates_and_hostnames_advanced_certificate_pack_response_ref01_ent.update(tls_certificates_and_hostnames_advanced_certificate_pack_response_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != tls_certificates_and_hostnames_advanced_certificate_pack_response_ref01_resdata_up0);
        (0, node_assert_1.default)(tls_certificates_and_hostnames_advanced_certificate_pack_response_ref01_resdata_up0[tls_certificates_and_hostnames_advanced_certificate_pack_response_ref01_markdef_up0.name] === tls_certificates_and_hostnames_advanced_certificate_pack_response_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/tls_certificates_and_hostnames_advanced_certificate_pack_response/TlsCertificatesAndHostnamesAdvancedCertificatePackResponseTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareSslSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['tls_certificates_and_hostnames_advanced_certificate_pack_response01', 'tls_certificates_and_hostnames_advanced_certificate_pack_response02', 'tls_certificates_and_hostnames_advanced_certificate_pack_response03', 'zone01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_ADVANCED_CERTIFICATE_PACK_RESPONSE_ENTID': idmap,
        'CLOUDFLARE_SSL_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_SSL_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_SSL_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_ADVANCED_CERTIFICATE_PACK_RESPONSE_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_SSL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_ADVANCED_CERTIFICATE_PACK_RESPONSE_ENTID'];
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
//# sourceMappingURL=TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity.test.js.map