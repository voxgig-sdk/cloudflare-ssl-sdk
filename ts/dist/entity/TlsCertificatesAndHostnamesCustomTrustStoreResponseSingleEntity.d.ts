import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle, TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleLoadMatch, TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleCreateData } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity): TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity;
    load(this: any, reqmatch?: TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleLoadMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity>;
    create(this: any, reqdata?: TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleCreateData, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity>;
}
export { TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity };
