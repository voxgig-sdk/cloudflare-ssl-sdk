import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesSslVerificationResponseCollection, TlsCertificatesAndHostnamesSslVerificationResponseCollectionListMatch } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesSslVerificationResponseCollection> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity): TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity;
    list(this: any, reqmatch?: TlsCertificatesAndHostnamesSslVerificationResponseCollectionListMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity[]>;
}
export { TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity };
