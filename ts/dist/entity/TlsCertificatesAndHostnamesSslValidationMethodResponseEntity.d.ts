import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesSslValidationMethodResponse, TlsCertificatesAndHostnamesSslValidationMethodResponseUpdateData } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesSslValidationMethodResponseEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesSslValidationMethodResponse> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesSslValidationMethodResponseEntity): TlsCertificatesAndHostnamesSslValidationMethodResponseEntity;
    update(this: any, reqdata?: TlsCertificatesAndHostnamesSslValidationMethodResponseUpdateData, ctrl?: Control): Promise<TlsCertificatesAndHostnamesSslValidationMethodResponseEntity>;
}
export { TlsCertificatesAndHostnamesSslValidationMethodResponseEntity };
