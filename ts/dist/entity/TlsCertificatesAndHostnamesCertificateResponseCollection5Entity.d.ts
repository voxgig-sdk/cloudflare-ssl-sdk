import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesCertificateResponseCollection5, TlsCertificatesAndHostnamesCertificateResponseCollection5ListMatch } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesCertificateResponseCollection5Entity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesCertificateResponseCollection5> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesCertificateResponseCollection5Entity): TlsCertificatesAndHostnamesCertificateResponseCollection5Entity;
    list(this: any, reqmatch?: TlsCertificatesAndHostnamesCertificateResponseCollection5ListMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCertificateResponseCollection5Entity[]>;
}
export { TlsCertificatesAndHostnamesCertificateResponseCollection5Entity };
