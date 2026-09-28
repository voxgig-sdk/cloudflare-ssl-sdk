import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesCertificateResponseCollection3, TlsCertificatesAndHostnamesCertificateResponseCollection3ListMatch } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesCertificateResponseCollection3Entity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesCertificateResponseCollection3> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesCertificateResponseCollection3Entity): TlsCertificatesAndHostnamesCertificateResponseCollection3Entity;
    list(this: any, reqmatch?: TlsCertificatesAndHostnamesCertificateResponseCollection3ListMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCertificateResponseCollection3Entity[]>;
}
export { TlsCertificatesAndHostnamesCertificateResponseCollection3Entity };
