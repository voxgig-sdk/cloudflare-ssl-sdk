import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesCertificateResponseSingle4, TlsCertificatesAndHostnamesCertificateResponseSingle4LoadMatch, TlsCertificatesAndHostnamesCertificateResponseSingle4CreateData, TlsCertificatesAndHostnamesCertificateResponseSingle4RemoveMatch } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesCertificateResponseSingle4Entity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesCertificateResponseSingle4> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesCertificateResponseSingle4Entity): TlsCertificatesAndHostnamesCertificateResponseSingle4Entity;
    load(this: any, reqmatch?: TlsCertificatesAndHostnamesCertificateResponseSingle4LoadMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCertificateResponseSingle4Entity>;
    create(this: any, reqdata?: TlsCertificatesAndHostnamesCertificateResponseSingle4CreateData, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCertificateResponseSingle4Entity>;
    remove(this: any, reqmatch?: TlsCertificatesAndHostnamesCertificateResponseSingle4RemoveMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCertificateResponseSingle4Entity>;
}
export { TlsCertificatesAndHostnamesCertificateResponseSingle4Entity };
