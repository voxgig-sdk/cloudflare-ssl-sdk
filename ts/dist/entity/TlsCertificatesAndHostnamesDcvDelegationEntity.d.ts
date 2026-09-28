import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesDcvDelegation, TlsCertificatesAndHostnamesDcvDelegationLoadMatch } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesDcvDelegationEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesDcvDelegation> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesDcvDelegationEntity): TlsCertificatesAndHostnamesDcvDelegationEntity;
    load(this: any, reqmatch?: TlsCertificatesAndHostnamesDcvDelegationLoadMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesDcvDelegationEntity>;
}
export { TlsCertificatesAndHostnamesDcvDelegationEntity };
