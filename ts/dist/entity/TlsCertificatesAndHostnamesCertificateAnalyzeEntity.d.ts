import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesCertificateAnalyze, TlsCertificatesAndHostnamesCertificateAnalyzeCreateData } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesCertificateAnalyzeEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesCertificateAnalyze> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesCertificateAnalyzeEntity): TlsCertificatesAndHostnamesCertificateAnalyzeEntity;
    create(this: any, reqdata?: TlsCertificatesAndHostnamesCertificateAnalyzeCreateData, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCertificateAnalyzeEntity>;
}
export { TlsCertificatesAndHostnamesCertificateAnalyzeEntity };
