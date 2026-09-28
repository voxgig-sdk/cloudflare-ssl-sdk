import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesCertificatePackQuota, TlsCertificatesAndHostnamesCertificatePackQuotaLoadMatch } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesCertificatePackQuotaEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesCertificatePackQuota> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesCertificatePackQuotaEntity): TlsCertificatesAndHostnamesCertificatePackQuotaEntity;
    load(this: any, reqmatch?: TlsCertificatesAndHostnamesCertificatePackQuotaLoadMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCertificatePackQuotaEntity>;
}
export { TlsCertificatesAndHostnamesCertificatePackQuotaEntity };
