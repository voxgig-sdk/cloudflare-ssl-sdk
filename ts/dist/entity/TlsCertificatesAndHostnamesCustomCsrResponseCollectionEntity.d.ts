import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesCustomCsrResponseCollection, TlsCertificatesAndHostnamesCustomCsrResponseCollectionListMatch } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesCustomCsrResponseCollection> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity): TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity;
    list(this: any, reqmatch?: TlsCertificatesAndHostnamesCustomCsrResponseCollectionListMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity[]>;
}
export { TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity };
