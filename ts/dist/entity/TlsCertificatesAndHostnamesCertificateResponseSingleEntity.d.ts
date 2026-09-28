import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesCertificateResponseSingle, TlsCertificatesAndHostnamesCertificateResponseSingleLoadMatch, TlsCertificatesAndHostnamesCertificateResponseSingleCreateData, TlsCertificatesAndHostnamesCertificateResponseSingleUpdateData } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesCertificateResponseSingleEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesCertificateResponseSingle> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesCertificateResponseSingleEntity): TlsCertificatesAndHostnamesCertificateResponseSingleEntity;
    load(this: any, reqmatch?: TlsCertificatesAndHostnamesCertificateResponseSingleLoadMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCertificateResponseSingleEntity>;
    create(this: any, reqdata?: TlsCertificatesAndHostnamesCertificateResponseSingleCreateData, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCertificateResponseSingleEntity>;
    update(this: any, reqdata?: TlsCertificatesAndHostnamesCertificateResponseSingleUpdateData, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCertificateResponseSingleEntity>;
}
export { TlsCertificatesAndHostnamesCertificateResponseSingleEntity };
