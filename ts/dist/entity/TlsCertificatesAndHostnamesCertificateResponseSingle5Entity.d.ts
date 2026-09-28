import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesCertificateResponseSingle5, TlsCertificatesAndHostnamesCertificateResponseSingle5LoadMatch, TlsCertificatesAndHostnamesCertificateResponseSingle5RemoveMatch } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesCertificateResponseSingle5Entity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesCertificateResponseSingle5> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesCertificateResponseSingle5Entity): TlsCertificatesAndHostnamesCertificateResponseSingle5Entity;
    load(this: any, reqmatch?: TlsCertificatesAndHostnamesCertificateResponseSingle5LoadMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCertificateResponseSingle5Entity>;
    remove(this: any, reqmatch?: TlsCertificatesAndHostnamesCertificateResponseSingle5RemoveMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCertificateResponseSingle5Entity>;
}
export { TlsCertificatesAndHostnamesCertificateResponseSingle5Entity };
