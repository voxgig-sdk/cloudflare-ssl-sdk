import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesCertificatePackResponseSingle, TlsCertificatesAndHostnamesCertificatePackResponseSingleLoadMatch } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesCertificatePackResponseSingle> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity): TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity;
    load(this: any, reqmatch?: TlsCertificatesAndHostnamesCertificatePackResponseSingleLoadMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity>;
}
export { TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity };
