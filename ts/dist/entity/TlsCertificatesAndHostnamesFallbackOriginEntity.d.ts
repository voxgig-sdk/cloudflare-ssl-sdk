import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesFallbackOrigin, TlsCertificatesAndHostnamesFallbackOriginLoadMatch, TlsCertificatesAndHostnamesFallbackOriginUpdateData, TlsCertificatesAndHostnamesFallbackOriginRemoveMatch } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesFallbackOriginEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesFallbackOrigin> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesFallbackOriginEntity): TlsCertificatesAndHostnamesFallbackOriginEntity;
    load(this: any, reqmatch?: TlsCertificatesAndHostnamesFallbackOriginLoadMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesFallbackOriginEntity>;
    update(this: any, reqdata?: TlsCertificatesAndHostnamesFallbackOriginUpdateData, ctrl?: Control): Promise<TlsCertificatesAndHostnamesFallbackOriginEntity>;
    remove(this: any, reqmatch?: TlsCertificatesAndHostnamesFallbackOriginRemoveMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesFallbackOriginEntity>;
}
export { TlsCertificatesAndHostnamesFallbackOriginEntity };
