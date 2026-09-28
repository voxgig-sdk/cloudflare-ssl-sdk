import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesCertificatePackResponseCollection, TlsCertificatesAndHostnamesCertificatePackResponseCollectionListMatch } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesCertificatePackResponseCollection> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity): TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity;
    list(this: any, reqmatch?: TlsCertificatesAndHostnamesCertificatePackResponseCollectionListMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity[]>;
}
export { TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity };
