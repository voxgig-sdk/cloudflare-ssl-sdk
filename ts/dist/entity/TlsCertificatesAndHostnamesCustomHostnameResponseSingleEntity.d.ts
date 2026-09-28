import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesCustomHostnameResponseSingle, TlsCertificatesAndHostnamesCustomHostnameResponseSingleLoadMatch, TlsCertificatesAndHostnamesCustomHostnameResponseSingleCreateData, TlsCertificatesAndHostnamesCustomHostnameResponseSingleUpdateData } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesCustomHostnameResponseSingle> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity): TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity;
    load(this: any, reqmatch?: TlsCertificatesAndHostnamesCustomHostnameResponseSingleLoadMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity>;
    create(this: any, reqdata?: TlsCertificatesAndHostnamesCustomHostnameResponseSingleCreateData, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity>;
    update(this: any, reqdata?: TlsCertificatesAndHostnamesCustomHostnameResponseSingleUpdateData, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity>;
}
export { TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity };
