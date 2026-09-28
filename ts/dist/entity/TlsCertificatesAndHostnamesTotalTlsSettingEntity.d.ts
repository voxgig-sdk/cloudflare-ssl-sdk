import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesTotalTlsSetting, TlsCertificatesAndHostnamesTotalTlsSettingLoadMatch, TlsCertificatesAndHostnamesTotalTlsSettingCreateData } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesTotalTlsSettingEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesTotalTlsSetting> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesTotalTlsSettingEntity): TlsCertificatesAndHostnamesTotalTlsSettingEntity;
    load(this: any, reqmatch?: TlsCertificatesAndHostnamesTotalTlsSettingLoadMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesTotalTlsSettingEntity>;
    create(this: any, reqdata?: TlsCertificatesAndHostnamesTotalTlsSettingCreateData, ctrl?: Control): Promise<TlsCertificatesAndHostnamesTotalTlsSettingEntity>;
}
export { TlsCertificatesAndHostnamesTotalTlsSettingEntity };
