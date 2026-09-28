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
(0, node_test_1.describe)('CacheApiResponseSingleIdEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_SSL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_SSL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareSslSDK.test();
        const ent = testsdk.CacheApiResponseSingleId();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_SSL_TEST_LIVE;
        for (const op of ['update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'cache_api_response_single_id.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 0 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 1 }, "result": { "a": true, "h": "Result", "n": "result", "r": true, "t": "`$OBJECT`", "key$": "result", "index$": 2 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "sh": "Indicates the API call's success or failure.", "t": "`$BOOLEAN`", "key$": "success", "index$": 3 }, "value": { "a": true, "h": "Value", "n": "value", "r": true, "sh": "Controls enablement of Automatic SSL/TLS.", "t": "`$STRING`", "key$": "value", "index$": 4 } }, "name": "cache_api_response_single_id", "op": { "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /zones/{zone_id}/settings/ssl_automatic_mode", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "zone_id", "or": "zone_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/zones/{zone_id}/settings/ssl_automatic_mode", "q": { "exist": ["zone_id"] }, "r": {}, "s": [{ "lit": "zones" }, { "var": "zone_id" }, { "lit": "settings" }, { "lit": "ssl_automatic_mode" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "cache_api_response_single_id", "name__orig": "cache_api_response_single_id", "Name": "CacheApiResponseSingleId", "name_": "cache_api_response_single_id", "name-": "cache-api-response-single-id", "NAME": "CACHE_API_RESPONSE_SINGLE_ID", "index$": 0 }, { "active": true, "entity": "cache_api_response_single_id", "key$": "BasicCacheApiResponseSingleIdFlow", "kind": "basic", "name": "BasicCacheApiResponseSingleIdFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "cache_api_response_single_id_ref01", "srcdatavar": "cache_api_response_single_id_ref01_data", "suffix": "_up0", "textfield": "value" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-cache_api_response_single_id_ref01" } }], "v": [], "index$": 0 }] }, 'CacheApiResponseSingleId', { "PATCH /zones/{zone_id}/settings/ssl_automatic_mode": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "description": "Update enablement of Automatic SSL/TLS.", "type": "object", "properties": { "value": { "description": "Controls enablement of Automatic SSL/TLS.", "type": "string", "example": "auto", "enum": ["auto", "custom"], "x-ref": "#/components/schemas/cache_schemas_value", "key$": "value" } }, "required": ["value"], "x-ref": "#/components/schemas/cache_schemas_patch", "index$": 1 } } } }, "parameters": [{ "name": "zone_id", "in": "path", "required": true, "schema": { "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-ref": "#/components/schemas/cache_identifier" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let cache_api_response_single_id_ref01_data = Object.values(setup.data.existing.cache_api_response_single_id)[0];
        // UPDATE
        const cache_api_response_single_id_ref01_ent = client.CacheApiResponseSingleId();
        const cache_api_response_single_id_ref01_data_up0 = {};
        const cache_api_response_single_id_ref01_markdef_up0 = { name: 'value', value: 'Mark01-cache_api_response_single_id_ref01_' + setup.now };
        cache_api_response_single_id_ref01_data_up0[cache_api_response_single_id_ref01_markdef_up0.name] = cache_api_response_single_id_ref01_markdef_up0.value;
        const cache_api_response_single_id_ref01_resdata_up0 = (await cache_api_response_single_id_ref01_ent.update(cache_api_response_single_id_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != cache_api_response_single_id_ref01_resdata_up0);
        (0, node_assert_1.default)(cache_api_response_single_id_ref01_resdata_up0[cache_api_response_single_id_ref01_markdef_up0.name] === cache_api_response_single_id_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/cache_api_response_single_id/CacheApiResponseSingleIdTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareSslSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['cache_api_response_single_id01', 'cache_api_response_single_id02', 'cache_api_response_single_id03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_SSL_TEST_CACHE_API_RESPONSE_SINGLE_ID_ENTID': idmap,
        'CLOUDFLARE_SSL_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_SSL_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_SSL_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_SSL_TEST_CACHE_API_RESPONSE_SINGLE_ID_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_SSL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_SSL_TEST_CACHE_API_RESPONSE_SINGLE_ID_ENTID'];
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
//# sourceMappingURL=CacheApiResponseSingleIdEntity.test.js.map