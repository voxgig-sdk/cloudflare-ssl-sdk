import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesAssociationResponseCollection, TlsCertificatesAndHostnamesAssociationResponseCollectionListMatch } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesAssociationResponseCollectionEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesAssociationResponseCollection> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesAssociationResponseCollectionEntity): TlsCertificatesAndHostnamesAssociationResponseCollectionEntity;
    list(this: any, reqmatch?: TlsCertificatesAndHostnamesAssociationResponseCollectionListMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesAssociationResponseCollectionEntity[]>;
}
export { TlsCertificatesAndHostnamesAssociationResponseCollectionEntity };
