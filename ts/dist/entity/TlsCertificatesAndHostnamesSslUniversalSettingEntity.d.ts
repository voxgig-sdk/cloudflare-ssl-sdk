import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesSslUniversalSetting, TlsCertificatesAndHostnamesSslUniversalSettingLoadMatch, TlsCertificatesAndHostnamesSslUniversalSettingUpdateData } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesSslUniversalSettingEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesSslUniversalSetting> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesSslUniversalSettingEntity): TlsCertificatesAndHostnamesSslUniversalSettingEntity;
    load(this: any, reqmatch?: TlsCertificatesAndHostnamesSslUniversalSettingLoadMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesSslUniversalSettingEntity>;
    update(this: any, reqdata?: TlsCertificatesAndHostnamesSslUniversalSettingUpdateData, ctrl?: Control): Promise<TlsCertificatesAndHostnamesSslUniversalSettingEntity>;
}
export { TlsCertificatesAndHostnamesSslUniversalSettingEntity };
