import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesCustomCsrResponseSingle, TlsCertificatesAndHostnamesCustomCsrResponseSingleLoadMatch, TlsCertificatesAndHostnamesCustomCsrResponseSingleCreateData } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesCustomCsrResponseSingle> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity): TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity;
    load(this: any, reqmatch?: TlsCertificatesAndHostnamesCustomCsrResponseSingleLoadMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity>;
    create(this: any, reqdata?: TlsCertificatesAndHostnamesCustomCsrResponseSingleCreateData, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity>;
}
export { TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity };
