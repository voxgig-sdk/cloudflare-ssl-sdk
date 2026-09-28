import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesClientCertificateResponseSingle, TlsCertificatesAndHostnamesClientCertificateResponseSingleLoadMatch, TlsCertificatesAndHostnamesClientCertificateResponseSingleCreateData, TlsCertificatesAndHostnamesClientCertificateResponseSingleUpdateData, TlsCertificatesAndHostnamesClientCertificateResponseSingleRemoveMatch } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesClientCertificateResponseSingle> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity): TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity;
    load(this: any, reqmatch?: TlsCertificatesAndHostnamesClientCertificateResponseSingleLoadMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity>;
    create(this: any, reqdata?: TlsCertificatesAndHostnamesClientCertificateResponseSingleCreateData, ctrl?: Control): Promise<TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity>;
    update(this: any, reqdata?: TlsCertificatesAndHostnamesClientCertificateResponseSingleUpdateData, ctrl?: Control): Promise<TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity>;
    remove(this: any, reqmatch?: TlsCertificatesAndHostnamesClientCertificateResponseSingleRemoveMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity>;
}
export { TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity };
