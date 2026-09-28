import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesCertificateRevoke, TlsCertificatesAndHostnamesCertificateRevokeRemoveMatch } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesCertificateRevokeEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesCertificateRevoke> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesCertificateRevokeEntity): TlsCertificatesAndHostnamesCertificateRevokeEntity;
    remove(this: any, reqmatch?: TlsCertificatesAndHostnamesCertificateRevokeRemoveMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCertificateRevokeEntity>;
}
export { TlsCertificatesAndHostnamesCertificateRevokeEntity };
