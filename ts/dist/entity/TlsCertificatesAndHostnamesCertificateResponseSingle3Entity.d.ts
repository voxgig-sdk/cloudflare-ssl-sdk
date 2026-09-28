import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesCertificateResponseSingle3, TlsCertificatesAndHostnamesCertificateResponseSingle3LoadMatch, TlsCertificatesAndHostnamesCertificateResponseSingle3CreateData, TlsCertificatesAndHostnamesCertificateResponseSingle3RemoveMatch } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesCertificateResponseSingle3Entity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesCertificateResponseSingle3> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesCertificateResponseSingle3Entity): TlsCertificatesAndHostnamesCertificateResponseSingle3Entity;
    load(this: any, reqmatch?: TlsCertificatesAndHostnamesCertificateResponseSingle3LoadMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCertificateResponseSingle3Entity>;
    create(this: any, reqdata?: TlsCertificatesAndHostnamesCertificateResponseSingle3CreateData, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCertificateResponseSingle3Entity>;
    remove(this: any, reqmatch?: TlsCertificatesAndHostnamesCertificateResponseSingle3RemoveMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCertificateResponseSingle3Entity>;
}
export { TlsCertificatesAndHostnamesCertificateResponseSingle3Entity };
