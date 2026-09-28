"use strict";
// CloudflareSsl Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.CloudflareSslSDK = exports.CloudflareSslEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const CacheApiResponseSingleIdEntity_1 = require("./entity/CacheApiResponseSingleIdEntity");
const CacheAutoOriginTlsKexEntity_1 = require("./entity/CacheAutoOriginTlsKexEntity");
const CustomHostnameEntity_1 = require("./entity/CustomHostnameEntity");
const CustomHostnameForAZoneEntity_1 = require("./entity/CustomHostnameForAZoneEntity");
const OriginTlEntity_1 = require("./entity/OriginTlEntity");
const RecommendationEntity_1 = require("./entity/RecommendationEntity");
const SslAutomaticModeEntity_1 = require("./entity/SslAutomaticModeEntity");
const TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity_1 = require("./entity/TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity");
const TlsCertificatesAndHostnamesAssociationResponseCollectionEntity_1 = require("./entity/TlsCertificatesAndHostnamesAssociationResponseCollectionEntity");
const TlsCertificatesAndHostnamesCertificateAnalyzeEntity_1 = require("./entity/TlsCertificatesAndHostnamesCertificateAnalyzeEntity");
const TlsCertificatesAndHostnamesCertificatePackQuotaEntity_1 = require("./entity/TlsCertificatesAndHostnamesCertificatePackQuotaEntity");
const TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity_1 = require("./entity/TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity");
const TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity_1 = require("./entity/TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity");
const TlsCertificatesAndHostnamesCertificateResponseCollectionEntity_1 = require("./entity/TlsCertificatesAndHostnamesCertificateResponseCollectionEntity");
const TlsCertificatesAndHostnamesCertificateResponseCollection3Entity_1 = require("./entity/TlsCertificatesAndHostnamesCertificateResponseCollection3Entity");
const TlsCertificatesAndHostnamesCertificateResponseCollection4Entity_1 = require("./entity/TlsCertificatesAndHostnamesCertificateResponseCollection4Entity");
const TlsCertificatesAndHostnamesCertificateResponseCollection5Entity_1 = require("./entity/TlsCertificatesAndHostnamesCertificateResponseCollection5Entity");
const TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity_1 = require("./entity/TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity");
const TlsCertificatesAndHostnamesCertificateResponseSingleEntity_1 = require("./entity/TlsCertificatesAndHostnamesCertificateResponseSingleEntity");
const TlsCertificatesAndHostnamesCertificateResponseSingle2Entity_1 = require("./entity/TlsCertificatesAndHostnamesCertificateResponseSingle2Entity");
const TlsCertificatesAndHostnamesCertificateResponseSingle3Entity_1 = require("./entity/TlsCertificatesAndHostnamesCertificateResponseSingle3Entity");
const TlsCertificatesAndHostnamesCertificateResponseSingle4Entity_1 = require("./entity/TlsCertificatesAndHostnamesCertificateResponseSingle4Entity");
const TlsCertificatesAndHostnamesCertificateResponseSingle5Entity_1 = require("./entity/TlsCertificatesAndHostnamesCertificateResponseSingle5Entity");
const TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity_1 = require("./entity/TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity");
const TlsCertificatesAndHostnamesCertificateRevokeEntity_1 = require("./entity/TlsCertificatesAndHostnamesCertificateRevokeEntity");
const TlsCertificatesAndHostnamesClientCertificateResponseEntity_1 = require("./entity/TlsCertificatesAndHostnamesClientCertificateResponseEntity");
const TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity_1 = require("./entity/TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity");
const TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseEntity_1 = require("./entity/TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseEntity");
const TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity_1 = require("./entity/TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity");
const TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity_1 = require("./entity/TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity");
const TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity_1 = require("./entity/TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity");
const TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity_1 = require("./entity/TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity");
const TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity_1 = require("./entity/TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity");
const TlsCertificatesAndHostnamesCustomHostnameQuotaEntity_1 = require("./entity/TlsCertificatesAndHostnamesCustomHostnameQuotaEntity");
const TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity_1 = require("./entity/TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity");
const TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity_1 = require("./entity/TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity");
const TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity_1 = require("./entity/TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity");
const TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity_1 = require("./entity/TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity");
const TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity_1 = require("./entity/TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity");
const TlsCertificatesAndHostnamesDcvDelegationEntity_1 = require("./entity/TlsCertificatesAndHostnamesDcvDelegationEntity");
const TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity_1 = require("./entity/TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity");
const TlsCertificatesAndHostnamesEnabledEntity_1 = require("./entity/TlsCertificatesAndHostnamesEnabledEntity");
const TlsCertificatesAndHostnamesFallbackOriginEntity_1 = require("./entity/TlsCertificatesAndHostnamesFallbackOriginEntity");
const TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity_1 = require("./entity/TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity");
const TlsCertificatesAndHostnamesHostnameAopSingleEntity_1 = require("./entity/TlsCertificatesAndHostnamesHostnameAopSingleEntity");
const TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity_1 = require("./entity/TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity");
const TlsCertificatesAndHostnamesHostnameAssociationEntity_1 = require("./entity/TlsCertificatesAndHostnamesHostnameAssociationEntity");
const TlsCertificatesAndHostnamesKeylessResponseCollectionEntity_1 = require("./entity/TlsCertificatesAndHostnamesKeylessResponseCollectionEntity");
const TlsCertificatesAndHostnamesKeylessResponseSingleEntity_1 = require("./entity/TlsCertificatesAndHostnamesKeylessResponseSingleEntity");
const TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity_1 = require("./entity/TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity");
const TlsCertificatesAndHostnamesPerHostnameSettingEntity_1 = require("./entity/TlsCertificatesAndHostnamesPerHostnameSettingEntity");
const TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity_1 = require("./entity/TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity");
const TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity_1 = require("./entity/TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity");
const TlsCertificatesAndHostnamesSslUniversalSettingEntity_1 = require("./entity/TlsCertificatesAndHostnamesSslUniversalSettingEntity");
const TlsCertificatesAndHostnamesSslValidationMethodResponseEntity_1 = require("./entity/TlsCertificatesAndHostnamesSslValidationMethodResponseEntity");
const TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity_1 = require("./entity/TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity");
const TlsCertificatesAndHostnamesTotalTlsSettingEntity_1 = require("./entity/TlsCertificatesAndHostnamesTotalTlsSettingEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const CloudflareSslEntityBase_1 = require("./CloudflareSslEntityBase");
Object.defineProperty(exports, "CloudflareSslEntityBase", { enumerable: true, get: function () { return CloudflareSslEntityBase_1.CloudflareSslEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class CloudflareSslSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method: fetchargs.method || 'GET',
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('CloudflareSslSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('CloudflareSslSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('CloudflareSslSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.CacheApiResponseSingleId().list()` / `client.CacheApiResponseSingleId().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CacheApiResponseSingleId(entopts) {
        const self = this;
        return new CacheApiResponseSingleIdEntity_1.CacheApiResponseSingleIdEntity(self, entopts);
    }
    // Entity access: `client.CacheAutoOriginTlsKex().list()` / `client.CacheAutoOriginTlsKex().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CacheAutoOriginTlsKex(entopts) {
        const self = this;
        return new CacheAutoOriginTlsKexEntity_1.CacheAutoOriginTlsKexEntity(self, entopts);
    }
    // Entity access: `client.CustomHostname().list()` / `client.CustomHostname().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CustomHostname(entopts) {
        const self = this;
        return new CustomHostnameEntity_1.CustomHostnameEntity(self, entopts);
    }
    // Entity access: `client.CustomHostnameForAZone().list()` / `client.CustomHostnameForAZone().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CustomHostnameForAZone(entopts) {
        const self = this;
        return new CustomHostnameForAZoneEntity_1.CustomHostnameForAZoneEntity(self, entopts);
    }
    // Entity access: `client.OriginTl().list()` / `client.OriginTl().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OriginTl(entopts) {
        const self = this;
        return new OriginTlEntity_1.OriginTlEntity(self, entopts);
    }
    // Entity access: `client.Recommendation().list()` / `client.Recommendation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Recommendation(entopts) {
        const self = this;
        return new RecommendationEntity_1.RecommendationEntity(self, entopts);
    }
    // Entity access: `client.SslAutomaticMode().list()` / `client.SslAutomaticMode().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SslAutomaticMode(entopts) {
        const self = this;
        return new SslAutomaticModeEntity_1.SslAutomaticModeEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesAdvancedCertificatePackResponse().list()` / `client.TlsCertificatesAndHostnamesAdvancedCertificatePackResponse().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesAdvancedCertificatePackResponse(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity_1.TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesAssociationResponseCollection().list()` / `client.TlsCertificatesAndHostnamesAssociationResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesAssociationResponseCollection(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesAssociationResponseCollectionEntity_1.TlsCertificatesAndHostnamesAssociationResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesCertificateAnalyze().list()` / `client.TlsCertificatesAndHostnamesCertificateAnalyze().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesCertificateAnalyze(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesCertificateAnalyzeEntity_1.TlsCertificatesAndHostnamesCertificateAnalyzeEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesCertificatePackQuota().list()` / `client.TlsCertificatesAndHostnamesCertificatePackQuota().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesCertificatePackQuota(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesCertificatePackQuotaEntity_1.TlsCertificatesAndHostnamesCertificatePackQuotaEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesCertificatePackResponseCollection().list()` / `client.TlsCertificatesAndHostnamesCertificatePackResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesCertificatePackResponseCollection(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity_1.TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesCertificatePackResponseSingle().list()` / `client.TlsCertificatesAndHostnamesCertificatePackResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesCertificatePackResponseSingle(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity_1.TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesCertificateResponseCollection().list()` / `client.TlsCertificatesAndHostnamesCertificateResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesCertificateResponseCollection(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesCertificateResponseCollectionEntity_1.TlsCertificatesAndHostnamesCertificateResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesCertificateResponseCollection3().list()` / `client.TlsCertificatesAndHostnamesCertificateResponseCollection3().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesCertificateResponseCollection3(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesCertificateResponseCollection3Entity_1.TlsCertificatesAndHostnamesCertificateResponseCollection3Entity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesCertificateResponseCollection4().list()` / `client.TlsCertificatesAndHostnamesCertificateResponseCollection4().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesCertificateResponseCollection4(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesCertificateResponseCollection4Entity_1.TlsCertificatesAndHostnamesCertificateResponseCollection4Entity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesCertificateResponseCollection5().list()` / `client.TlsCertificatesAndHostnamesCertificateResponseCollection5().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesCertificateResponseCollection5(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesCertificateResponseCollection5Entity_1.TlsCertificatesAndHostnamesCertificateResponseCollection5Entity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesCertificateResponseIdOnly().list()` / `client.TlsCertificatesAndHostnamesCertificateResponseIdOnly().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesCertificateResponseIdOnly(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity_1.TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesCertificateResponseSingle().list()` / `client.TlsCertificatesAndHostnamesCertificateResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesCertificateResponseSingle(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesCertificateResponseSingleEntity_1.TlsCertificatesAndHostnamesCertificateResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesCertificateResponseSingle2().list()` / `client.TlsCertificatesAndHostnamesCertificateResponseSingle2().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesCertificateResponseSingle2(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesCertificateResponseSingle2Entity_1.TlsCertificatesAndHostnamesCertificateResponseSingle2Entity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesCertificateResponseSingle3().list()` / `client.TlsCertificatesAndHostnamesCertificateResponseSingle3().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesCertificateResponseSingle3(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesCertificateResponseSingle3Entity_1.TlsCertificatesAndHostnamesCertificateResponseSingle3Entity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesCertificateResponseSingle4().list()` / `client.TlsCertificatesAndHostnamesCertificateResponseSingle4().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesCertificateResponseSingle4(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesCertificateResponseSingle4Entity_1.TlsCertificatesAndHostnamesCertificateResponseSingle4Entity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesCertificateResponseSingle5().list()` / `client.TlsCertificatesAndHostnamesCertificateResponseSingle5().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesCertificateResponseSingle5(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesCertificateResponseSingle5Entity_1.TlsCertificatesAndHostnamesCertificateResponseSingle5Entity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesCertificateResponseSinglePost().list()` / `client.TlsCertificatesAndHostnamesCertificateResponseSinglePost().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesCertificateResponseSinglePost(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity_1.TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesCertificateRevoke().list()` / `client.TlsCertificatesAndHostnamesCertificateRevoke().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesCertificateRevoke(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesCertificateRevokeEntity_1.TlsCertificatesAndHostnamesCertificateRevokeEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesClientCertificateResponse().list()` / `client.TlsCertificatesAndHostnamesClientCertificateResponse().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesClientCertificateResponse(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesClientCertificateResponseEntity_1.TlsCertificatesAndHostnamesClientCertificateResponseEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesClientCertificateResponseSingle().list()` / `client.TlsCertificatesAndHostnamesClientCertificateResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesClientCertificateResponseSingle(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity_1.TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse().list()` / `client.TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseEntity_1.TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesCustomCsrResponseCollection().list()` / `client.TlsCertificatesAndHostnamesCustomCsrResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesCustomCsrResponseCollection(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity_1.TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesCustomCsrResponseCollection2().list()` / `client.TlsCertificatesAndHostnamesCustomCsrResponseCollection2().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesCustomCsrResponseCollection2(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity_1.TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesCustomCsrResponseIdOnly().list()` / `client.TlsCertificatesAndHostnamesCustomCsrResponseIdOnly().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesCustomCsrResponseIdOnly(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity_1.TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesCustomCsrResponseSingle().list()` / `client.TlsCertificatesAndHostnamesCustomCsrResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesCustomCsrResponseSingle(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity_1.TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesCustomCsrResponseSingle2().list()` / `client.TlsCertificatesAndHostnamesCustomCsrResponseSingle2().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesCustomCsrResponseSingle2(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity_1.TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesCustomHostnameQuota().list()` / `client.TlsCertificatesAndHostnamesCustomHostnameQuota().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesCustomHostnameQuota(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesCustomHostnameQuotaEntity_1.TlsCertificatesAndHostnamesCustomHostnameQuotaEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesCustomHostnameResponseCollection().list()` / `client.TlsCertificatesAndHostnamesCustomHostnameResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesCustomHostnameResponseCollection(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity_1.TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle().list()` / `client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesCustomHostnameResponseSingle(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity_1.TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesCustomTrustStoreResponse().list()` / `client.TlsCertificatesAndHostnamesCustomTrustStoreResponse().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesCustomTrustStoreResponse(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity_1.TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly().list()` / `client.TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity_1.TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle().list()` / `client.TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity_1.TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesDcvDelegation().list()` / `client.TlsCertificatesAndHostnamesDcvDelegation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesDcvDelegation(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesDcvDelegationEntity_1.TlsCertificatesAndHostnamesDcvDelegationEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack().list()` / `client.TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity_1.TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesEnabled().list()` / `client.TlsCertificatesAndHostnamesEnabled().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesEnabled(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesEnabledEntity_1.TlsCertificatesAndHostnamesEnabledEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesFallbackOrigin().list()` / `client.TlsCertificatesAndHostnamesFallbackOrigin().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesFallbackOrigin(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesFallbackOriginEntity_1.TlsCertificatesAndHostnamesFallbackOriginEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesHostnameAopResponseCollection().list()` / `client.TlsCertificatesAndHostnamesHostnameAopResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesHostnameAopResponseCollection(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity_1.TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesHostnameAopSingle().list()` / `client.TlsCertificatesAndHostnamesHostnameAopSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesHostnameAopSingle(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesHostnameAopSingleEntity_1.TlsCertificatesAndHostnamesHostnameAopSingleEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesHostnameAssocResponseCollection().list()` / `client.TlsCertificatesAndHostnamesHostnameAssocResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesHostnameAssocResponseCollection(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity_1.TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesHostnameAssociation().list()` / `client.TlsCertificatesAndHostnamesHostnameAssociation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesHostnameAssociation(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesHostnameAssociationEntity_1.TlsCertificatesAndHostnamesHostnameAssociationEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesKeylessResponseCollection().list()` / `client.TlsCertificatesAndHostnamesKeylessResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesKeylessResponseCollection(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesKeylessResponseCollectionEntity_1.TlsCertificatesAndHostnamesKeylessResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesKeylessResponseSingle().list()` / `client.TlsCertificatesAndHostnamesKeylessResponseSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesKeylessResponseSingle(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesKeylessResponseSingleEntity_1.TlsCertificatesAndHostnamesKeylessResponseSingleEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesKeylessResponseSingleId().list()` / `client.TlsCertificatesAndHostnamesKeylessResponseSingleId().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesKeylessResponseSingleId(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity_1.TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesPerHostnameSetting().list()` / `client.TlsCertificatesAndHostnamesPerHostnameSetting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesPerHostnameSetting(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesPerHostnameSettingEntity_1.TlsCertificatesAndHostnamesPerHostnameSettingEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse().list()` / `client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesPerHostnameSettingsResponse(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity_1.TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse2().list()` / `client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse2().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesPerHostnameSettingsResponse2(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity_1.TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesSslUniversalSetting().list()` / `client.TlsCertificatesAndHostnamesSslUniversalSetting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesSslUniversalSetting(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesSslUniversalSettingEntity_1.TlsCertificatesAndHostnamesSslUniversalSettingEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesSslValidationMethodResponse().list()` / `client.TlsCertificatesAndHostnamesSslValidationMethodResponse().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesSslValidationMethodResponse(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesSslValidationMethodResponseEntity_1.TlsCertificatesAndHostnamesSslValidationMethodResponseEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesSslVerificationResponseCollection().list()` / `client.TlsCertificatesAndHostnamesSslVerificationResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesSslVerificationResponseCollection(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity_1.TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity(self, entopts);
    }
    // Entity access: `client.TlsCertificatesAndHostnamesTotalTlsSetting().list()` / `client.TlsCertificatesAndHostnamesTotalTlsSetting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TlsCertificatesAndHostnamesTotalTlsSetting(entopts) {
        const self = this;
        return new TlsCertificatesAndHostnamesTotalTlsSettingEntity_1.TlsCertificatesAndHostnamesTotalTlsSettingEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new CloudflareSslSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return CloudflareSslSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'CloudflareSsl' };
    }
    toString() {
        return 'CloudflareSsl ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.CloudflareSslSDK = CloudflareSslSDK;
const SDK = CloudflareSslSDK;
exports.SDK = SDK;
//# sourceMappingURL=CloudflareSslSDK.js.map