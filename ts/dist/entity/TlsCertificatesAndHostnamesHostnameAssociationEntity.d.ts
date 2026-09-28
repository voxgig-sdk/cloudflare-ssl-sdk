import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesHostnameAssociation, TlsCertificatesAndHostnamesHostnameAssociationLoadMatch, TlsCertificatesAndHostnamesHostnameAssociationUpdateData } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesHostnameAssociationEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesHostnameAssociation> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesHostnameAssociationEntity): TlsCertificatesAndHostnamesHostnameAssociationEntity;
    load(this: any, reqmatch?: TlsCertificatesAndHostnamesHostnameAssociationLoadMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesHostnameAssociationEntity>;
    update(this: any, reqdata?: TlsCertificatesAndHostnamesHostnameAssociationUpdateData, ctrl?: Control): Promise<TlsCertificatesAndHostnamesHostnameAssociationEntity>;
}
export { TlsCertificatesAndHostnamesHostnameAssociationEntity };
