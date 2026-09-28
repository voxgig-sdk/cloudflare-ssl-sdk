import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesHostnameAopResponseCollection, TlsCertificatesAndHostnamesHostnameAopResponseCollectionUpdateData } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesHostnameAopResponseCollection> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity): TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity;
    update(this: any, reqdata?: TlsCertificatesAndHostnamesHostnameAopResponseCollectionUpdateData, ctrl?: Control): Promise<TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity>;
}
export { TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity };
