import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesCustomHostnameQuota, TlsCertificatesAndHostnamesCustomHostnameQuotaListMatch } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesCustomHostnameQuotaEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesCustomHostnameQuota> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesCustomHostnameQuotaEntity): TlsCertificatesAndHostnamesCustomHostnameQuotaEntity;
    list(this: any, reqmatch?: TlsCertificatesAndHostnamesCustomHostnameQuotaListMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCustomHostnameQuotaEntity[]>;
}
export { TlsCertificatesAndHostnamesCustomHostnameQuotaEntity };
