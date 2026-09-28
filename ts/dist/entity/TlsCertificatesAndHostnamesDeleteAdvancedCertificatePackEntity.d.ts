import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack, TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackRemoveMatch } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity): TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity;
    remove(this: any, reqmatch?: TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackRemoveMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity>;
}
export { TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity };
