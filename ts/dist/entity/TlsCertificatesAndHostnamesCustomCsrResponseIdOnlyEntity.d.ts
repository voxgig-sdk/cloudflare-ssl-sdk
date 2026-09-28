import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesCustomCsrResponseIdOnly, TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyRemoveMatch } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesCustomCsrResponseIdOnly> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity): TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity;
    remove(this: any, reqmatch?: TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyRemoveMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity>;
}
export { TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity };
