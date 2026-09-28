import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesCertificateResponseCollection, TlsCertificatesAndHostnamesCertificateResponseCollectionListMatch, TlsCertificatesAndHostnamesCertificateResponseCollectionUpdateData } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesCertificateResponseCollectionEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesCertificateResponseCollection> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesCertificateResponseCollectionEntity): TlsCertificatesAndHostnamesCertificateResponseCollectionEntity;
    list(this: any, reqmatch?: TlsCertificatesAndHostnamesCertificateResponseCollectionListMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCertificateResponseCollectionEntity[]>;
    update(this: any, reqdata?: TlsCertificatesAndHostnamesCertificateResponseCollectionUpdateData, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCertificateResponseCollectionEntity>;
}
export { TlsCertificatesAndHostnamesCertificateResponseCollectionEntity };
