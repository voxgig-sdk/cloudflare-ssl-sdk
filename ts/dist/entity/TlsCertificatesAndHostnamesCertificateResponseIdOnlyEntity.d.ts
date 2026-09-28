import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesCertificateResponseIdOnly, TlsCertificatesAndHostnamesCertificateResponseIdOnlyRemoveMatch } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesCertificateResponseIdOnly> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity): TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity;
    remove(this: any, reqmatch?: TlsCertificatesAndHostnamesCertificateResponseIdOnlyRemoveMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity>;
}
export { TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity };
