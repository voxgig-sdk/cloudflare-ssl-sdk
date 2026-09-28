import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesHostnameAopSingle, TlsCertificatesAndHostnamesHostnameAopSingleLoadMatch } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesHostnameAopSingleEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesHostnameAopSingle> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesHostnameAopSingleEntity): TlsCertificatesAndHostnamesHostnameAopSingleEntity;
    load(this: any, reqmatch?: TlsCertificatesAndHostnamesHostnameAopSingleLoadMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesHostnameAopSingleEntity>;
}
export { TlsCertificatesAndHostnamesHostnameAopSingleEntity };
