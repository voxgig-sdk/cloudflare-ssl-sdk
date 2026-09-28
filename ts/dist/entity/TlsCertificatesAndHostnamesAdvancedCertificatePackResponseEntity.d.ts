import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesAdvancedCertificatePackResponse, TlsCertificatesAndHostnamesAdvancedCertificatePackResponseCreateData, TlsCertificatesAndHostnamesAdvancedCertificatePackResponseUpdateData } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesAdvancedCertificatePackResponse> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity): TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity;
    create(this: any, reqdata?: TlsCertificatesAndHostnamesAdvancedCertificatePackResponseCreateData, ctrl?: Control): Promise<TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity>;
    update(this: any, reqdata?: TlsCertificatesAndHostnamesAdvancedCertificatePackResponseUpdateData, ctrl?: Control): Promise<TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity>;
}
export { TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity };
