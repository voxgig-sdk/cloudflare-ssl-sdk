import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesCertificateResponseCollection4, TlsCertificatesAndHostnamesCertificateResponseCollection4ListMatch } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesCertificateResponseCollection4Entity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesCertificateResponseCollection4> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesCertificateResponseCollection4Entity): TlsCertificatesAndHostnamesCertificateResponseCollection4Entity;
    list(this: any, reqmatch?: TlsCertificatesAndHostnamesCertificateResponseCollection4ListMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCertificateResponseCollection4Entity[]>;
}
export { TlsCertificatesAndHostnamesCertificateResponseCollection4Entity };
