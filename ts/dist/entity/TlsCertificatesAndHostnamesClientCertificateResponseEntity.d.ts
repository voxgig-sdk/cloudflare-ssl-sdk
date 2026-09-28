import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesClientCertificateResponse, TlsCertificatesAndHostnamesClientCertificateResponseListMatch } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesClientCertificateResponseEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesClientCertificateResponse> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesClientCertificateResponseEntity): TlsCertificatesAndHostnamesClientCertificateResponseEntity;
    list(this: any, reqmatch?: TlsCertificatesAndHostnamesClientCertificateResponseListMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesClientCertificateResponseEntity[]>;
}
export { TlsCertificatesAndHostnamesClientCertificateResponseEntity };
