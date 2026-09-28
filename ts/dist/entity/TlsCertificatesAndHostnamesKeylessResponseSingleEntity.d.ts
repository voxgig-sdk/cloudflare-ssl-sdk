import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesKeylessResponseSingle, TlsCertificatesAndHostnamesKeylessResponseSingleLoadMatch, TlsCertificatesAndHostnamesKeylessResponseSingleCreateData, TlsCertificatesAndHostnamesKeylessResponseSingleUpdateData } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesKeylessResponseSingleEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesKeylessResponseSingle> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesKeylessResponseSingleEntity): TlsCertificatesAndHostnamesKeylessResponseSingleEntity;
    load(this: any, reqmatch?: TlsCertificatesAndHostnamesKeylessResponseSingleLoadMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesKeylessResponseSingleEntity>;
    create(this: any, reqdata?: TlsCertificatesAndHostnamesKeylessResponseSingleCreateData, ctrl?: Control): Promise<TlsCertificatesAndHostnamesKeylessResponseSingleEntity>;
    update(this: any, reqdata?: TlsCertificatesAndHostnamesKeylessResponseSingleUpdateData, ctrl?: Control): Promise<TlsCertificatesAndHostnamesKeylessResponseSingleEntity>;
}
export { TlsCertificatesAndHostnamesKeylessResponseSingleEntity };
