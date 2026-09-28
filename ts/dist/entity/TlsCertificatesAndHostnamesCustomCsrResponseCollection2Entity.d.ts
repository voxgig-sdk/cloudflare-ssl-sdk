import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesCustomCsrResponseCollection2, TlsCertificatesAndHostnamesCustomCsrResponseCollection2ListMatch } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesCustomCsrResponseCollection2> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity): TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity;
    list(this: any, reqmatch?: TlsCertificatesAndHostnamesCustomCsrResponseCollection2ListMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity[]>;
}
export { TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity };
