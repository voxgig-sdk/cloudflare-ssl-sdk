import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesCustomHostnameResponseCollection, TlsCertificatesAndHostnamesCustomHostnameResponseCollectionListMatch } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesCustomHostnameResponseCollection> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity): TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity;
    list(this: any, reqmatch?: TlsCertificatesAndHostnamesCustomHostnameResponseCollectionListMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity[]>;
}
export { TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity };
