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
(0, node_test_1.describe)('TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_SSL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_SSL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareSslSDK.test();
        const ent = testsdk.TlsCertificatesAndHostnamesCustomHostnameResponseCollection();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_SSL_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'tls_certificates_and_hostnames_custom_hostname_response_collection.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 0 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "sh": "Informational messages returned by the custom hostname API.", "t": "`$ARRAY`", "key$": "messages", "index$": 1 }, "result": { "a": true, "h": "Result", "n": "result", "r": false, "t": "`$ARRAY`", "key$": "result", "index$": 2 }, "result_info": { "a": true, "h": "Result Info", "n": "result_info", "r": false, "t": "`$OBJECT`", "key$": "result_info", "index$": 3 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "sh": "Whether the API call was successful.", "t": "`$BOOLEAN`", "key$": "success", "index$": 4 } }, "name": "tls_certificates_and_hostnames_custom_hostname_response_collection", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /zones/{zone_id}/custom_hostnames", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "zone_id", "or": "zone_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "google", "k": "query", "n": "certificate_authority", "or": "certificate_authority", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "origin2.example.com", "k": "query", "n": "custom_origin_server", "or": "custom_origin_server", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "desc", "k": "query", "n": "direction", "or": "direction", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": "app.example.com", "k": "query", "n": "hostname", "or": "hostname", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": "example.com", "k": "query", "n": "hostname_contain", "or": "hostname_contain", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "ex": "app.example.com", "k": "query", "n": "hostname_exact", "or": "hostname_exact", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "ex": "app", "k": "query", "n": "hostname_starts_with", "or": "hostname_starts_with", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "ex": "provisioned", "k": "query", "n": "hostname_status", "or": "hostname_status", "r": false, "t": "`$STRING`", "index$": 7 }, { "a": true, "ex": "0d89c70d-ad9f-4843-b99f-6cc0252067e9", "k": "query", "n": "id", "or": "id", "r": false, "t": "`$STRING`", "index$": 8 }, { "a": true, "ex": "ssl", "k": "query", "n": "order", "or": "order", "r": false, "t": "`$STRING`", "index$": 9 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$NUMBER`", "index$": 10 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$NUMBER`", "index$": 11 }, { "a": true, "ex": 0, "k": "query", "n": "ssl", "or": "ssl", "r": false, "t": "`$INTEGER`", "index$": 12 }, { "a": true, "ex": "active", "k": "query", "n": "ssl_status", "or": "ssl_status", "r": false, "t": "`$STRING`", "index$": 13 }, { "a": true, "ex": false, "k": "query", "n": "wildcard", "or": "wildcard", "r": false, "t": "`$BOOLEAN`", "index$": 14 }] }, "k": "http", "m": "GET", "o": "/zones/{zone_id}/custom_hostnames", "q": { "exist": ["certificate_authority", "custom_origin_server", "direction", "hostname", "hostname_contain", "hostname_exact", "hostname_starts_with", "hostname_status", "id", "order", "page", "per_page", "ssl", "ssl_status", "wildcard", "zone_id"] }, "r": {}, "s": [{ "lit": "zones" }, { "var": "zone_id" }, { "lit": "custom_hostnames" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "tls_certificates_and_hostnames_custom_hostname_response_collection", "name__orig": "tls_certificates_and_hostnames_custom_hostname_response_collection", "Name": "TlsCertificatesAndHostnamesCustomHostnameResponseCollection", "name_": "tls_certificates_and_hostnames_custom_hostname_response_collection", "name-": "tls-certificates-and-hostnames-custom-hostname-response-collection", "NAME": "TLS_CERTIFICATES_AND_HOSTNAMES_CUSTOM_HOSTNAME_RESPONSE_COLLECTION", "index$": 34 }, { "active": true, "entity": "tls_certificates_and_hostnames_custom_hostname_response_collection", "key$": "BasicTlsCertificatesAndHostnamesCustomHostnameResponseCollectionFlow", "kind": "basic", "name": "BasicTlsCertificatesAndHostnamesCustomHostnameResponseCollectionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "zone_id": "zone01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "tls_certificates_and_hostnames_custom_hostname_response_collection_ref01" } }], "index$": 0 }] }, 'TlsCertificatesAndHostnamesCustomHostnameResponseCollection', { "GET /zones/{zone_id}/custom_hostnames": { "protocol": "http", "parameters": [{ "name": "zone_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/tls-certificates-and-hostnames_identifier" }, "index$": 0 }, { "name": "hostname", "in": "query", "schema": { "description": "Fully qualified domain name to match against. This parameter cannot be used with the 'id', 'hostname.exact', 'hostname.contain', or 'hostname.startsWith' parameters.", "type": "string", "example": "app.example.com", "maxLength": 255 }, "index$": 1 }, { "name": "hostname.exact", "in": "query", "schema": { "description": "Fully qualified domain name to match against. This parameter cannot be used with the 'id', 'hostname', 'hostname.contain', or 'hostname.startsWith' parameters.", "type": "string", "example": "app.example.com", "maxLength": 255 }, "index$": 2 }, { "name": "hostname.startsWith", "in": "query", "schema": { "description": "Filters hostnames by a prefix match on the hostname value. This parameter cannot be used with the 'id', 'hostname', 'hostname.exact', or 'hostname.contain' parameters.", "type": "string", "example": "app", "maxLength": 255 }, "index$": 3 }, { "name": "hostname.contain", "in": "query", "schema": { "description": "Filters hostnames by a substring match on the hostname value. This parameter cannot be used with the 'id', 'hostname', 'hostname.exact', or 'hostname.startsWith' parameters.", "type": "string", "example": "example.com", "maxLength": 255 }, "index$": 4 }, { "name": "id", "in": "query", "schema": { "description": "Hostname ID to match against. This ID was generated and returned during the initial custom_hostname creation. This parameter cannot be used with the 'hostname', 'hostname.exact', 'hostname.contain', or 'hostname.startsWith' parameters.", "type": "string", "example": "0d89c70d-ad9f-4843-b99f-6cc0252067e9", "maxLength": 36, "minLength": 36 }, "index$": 5 }, { "name": "page", "in": "query", "schema": { "description": "Page number of paginated results.", "type": "number", "default": 1, "minimum": 1 }, "index$": 6 }, { "name": "per_page", "in": "query", "schema": { "description": "Number of hostnames per page.", "type": "number", "default": 20, "maximum": 1000, "minimum": 5 }, "index$": 7 }, { "name": "order", "in": "query", "schema": { "description": "Field to order hostnames by.", "type": "string", "example": "ssl", "default": "ssl", "enum": ["ssl", "ssl_status"] }, "index$": 8 }, { "name": "direction", "in": "query", "schema": { "description": "Direction to order hostnames.", "type": "string", "example": "desc", "enum": ["asc", "desc"] }, "index$": 9 }, { "name": "ssl_status", "in": "query", "schema": { "description": "Filter by SSL certificate status.", "type": "string", "example": "active", "enum": ["initializing", "pending_validation", "deleted", "pending_issuance", "pending_deployment", "pending_deletion", "pending_expiration", "expired", "active", "initializing_timed_out", "validation_timed_out", "issuance_timed_out", "deployment_timed_out", "deletion_timed_out", "pending_cleanup", "staging_deployment", "staging_active", "deactivating", "inactive", "backup_issued", "holding_deployment"] }, "index$": 10 }, { "name": "hostname_status", "in": "query", "schema": { "description": "Filter by the hostname's activation status.", "type": "string", "example": "provisioned", "enum": ["active", "pending", "active_redeploying", "moved", "pending_deletion", "deleted", "pending_blocked", "pending_migration", "pending_provisioned", "test_pending", "test_active", "test_active_apex", "test_blocked", "test_failed", "provisioned", "blocked"] }, "index$": 11 }, { "name": "certificate_authority", "in": "query", "schema": { "description": "Filter by the certificate authority that issued the SSL certificate.", "type": "string", "example": "google", "enum": ["google", "lets_encrypt", "ssl_com"] }, "index$": 12 }, { "name": "wildcard", "in": "query", "schema": { "description": "Filter by whether the custom hostname is a wildcard hostname.", "type": "boolean", "example": false }, "index$": 13 }, { "name": "custom_origin_server", "in": "query", "schema": { "description": "Filter by custom origin server name.", "type": "string", "example": "origin2.example.com" }, "index$": 14 }, { "name": "ssl", "in": "query", "schema": { "description": "Whether to filter hostnames based on if they have SSL enabled.", "type": "integer", "default": 0, "enum": [0, 1] }, "index$": 15 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let tls_certificates_and_hostnames_custom_hostname_response_collection_ref01_data = Object.values(setup.data.existing.tls_certificates_and_hostnames_custom_hostname_response_collection)[0];
        // LIST
        const tls_certificates_and_hostnames_custom_hostname_response_collection_ref01_ent = client.TlsCertificatesAndHostnamesCustomHostnameResponseCollection();
        const tls_certificates_and_hostnames_custom_hostname_response_collection_ref01_match = {};
        tls_certificates_and_hostnames_custom_hostname_response_collection_ref01_match['zone_id'] = setup.idmap['zone01'];
        const tls_certificates_and_hostnames_custom_hostname_response_collection_ref01_list = (await tls_certificates_and_hostnames_custom_hostname_response_collection_ref01_ent.list(tls_certificates_and_hostnames_custom_hostname_response_collection_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/tls_certificates_and_hostnames_custom_hostname_response_collection/TlsCertificatesAndHostnamesCustomHostnameResponseCollectionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareSslSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['tls_certificates_and_hostnames_custom_hostname_response_collection01', 'tls_certificates_and_hostnames_custom_hostname_response_collection02', 'tls_certificates_and_hostnames_custom_hostname_response_collection03', 'zone01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CUSTOM_HOSTNAME_RESPONSE_COLLECTION_ENTID': idmap,
        'CLOUDFLARE_SSL_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_SSL_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_SSL_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CUSTOM_HOSTNAME_RESPONSE_COLLECTION_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_SSL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CUSTOM_HOSTNAME_RESPONSE_COLLECTION_ENTID'];
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
//# sourceMappingURL=TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity.test.js.map