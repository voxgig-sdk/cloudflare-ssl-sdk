import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesCustomCsrResponseSingle2, TlsCertificatesAndHostnamesCustomCsrResponseSingle2LoadMatch, TlsCertificatesAndHostnamesCustomCsrResponseSingle2CreateData } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesCustomCsrResponseSingle2> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity): TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity;
    load(this: any, reqmatch?: TlsCertificatesAndHostnamesCustomCsrResponseSingle2LoadMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity>;
    create(this: any, reqdata?: TlsCertificatesAndHostnamesCustomCsrResponseSingle2CreateData, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity>;
}
export { TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity };
