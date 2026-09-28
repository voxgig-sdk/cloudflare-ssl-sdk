import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesCertificateResponseSingle2, TlsCertificatesAndHostnamesCertificateResponseSingle2LoadMatch, TlsCertificatesAndHostnamesCertificateResponseSingle2ListMatch, TlsCertificatesAndHostnamesCertificateResponseSingle2CreateData } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesCertificateResponseSingle2Entity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesCertificateResponseSingle2> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesCertificateResponseSingle2Entity): TlsCertificatesAndHostnamesCertificateResponseSingle2Entity;
    load(this: any, reqmatch?: TlsCertificatesAndHostnamesCertificateResponseSingle2LoadMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCertificateResponseSingle2Entity>;
    list(this: any, reqmatch?: TlsCertificatesAndHostnamesCertificateResponseSingle2ListMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCertificateResponseSingle2Entity[]>;
    create(this: any, reqdata?: TlsCertificatesAndHostnamesCertificateResponseSingle2CreateData, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCertificateResponseSingle2Entity>;
}
export { TlsCertificatesAndHostnamesCertificateResponseSingle2Entity };
