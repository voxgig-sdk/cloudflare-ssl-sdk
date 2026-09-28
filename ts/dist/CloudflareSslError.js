"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudflareSslError = void 0;
class CloudflareSslError extends Error {
    isCloudflareSslError = true;
    sdk = 'CloudflareSsl';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.CloudflareSslError = CloudflareSslError;
//# sourceMappingURL=CloudflareSslError.js.map