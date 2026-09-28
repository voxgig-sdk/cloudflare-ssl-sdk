import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesEnabled, TlsCertificatesAndHostnamesEnabledLoadMatch, TlsCertificatesAndHostnamesEnabledUpdateData } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesEnabledEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesEnabled> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesEnabledEntity): TlsCertificatesAndHostnamesEnabledEntity;
    load(this: any, reqmatch?: TlsCertificatesAndHostnamesEnabledLoadMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesEnabledEntity>;
    update(this: any, reqdata?: TlsCertificatesAndHostnamesEnabledUpdateData, ctrl?: Control): Promise<TlsCertificatesAndHostnamesEnabledEntity>;
}
export { TlsCertificatesAndHostnamesEnabledEntity };
