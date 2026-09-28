import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesCustomTrustStoreResponse, TlsCertificatesAndHostnamesCustomTrustStoreResponseListMatch } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesCustomTrustStoreResponse> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity): TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity;
    list(this: any, reqmatch?: TlsCertificatesAndHostnamesCustomTrustStoreResponseListMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity[]>;
}
export { TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity };
