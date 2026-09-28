import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly, TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyRemoveMatch } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity): TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity;
    remove(this: any, reqmatch?: TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyRemoveMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity>;
}
export { TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity };
