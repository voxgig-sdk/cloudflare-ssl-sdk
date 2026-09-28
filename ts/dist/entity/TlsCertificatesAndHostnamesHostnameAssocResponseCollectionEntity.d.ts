import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesHostnameAssocResponseCollection, TlsCertificatesAndHostnamesHostnameAssocResponseCollectionListMatch } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesHostnameAssocResponseCollection> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity): TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity;
    list(this: any, reqmatch?: TlsCertificatesAndHostnamesHostnameAssocResponseCollectionListMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity[]>;
}
export { TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity };
