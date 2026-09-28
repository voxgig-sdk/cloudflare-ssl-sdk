import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesPerHostnameSetting, TlsCertificatesAndHostnamesPerHostnameSettingLoadMatch, TlsCertificatesAndHostnamesPerHostnameSettingUpdateData } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesPerHostnameSettingEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesPerHostnameSetting> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesPerHostnameSettingEntity): TlsCertificatesAndHostnamesPerHostnameSettingEntity;
    load(this: any, reqmatch?: TlsCertificatesAndHostnamesPerHostnameSettingLoadMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesPerHostnameSettingEntity>;
    update(this: any, reqdata?: TlsCertificatesAndHostnamesPerHostnameSettingUpdateData, ctrl?: Control): Promise<TlsCertificatesAndHostnamesPerHostnameSettingEntity>;
}
export { TlsCertificatesAndHostnamesPerHostnameSettingEntity };
