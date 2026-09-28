import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesPerHostnameSettingsResponse2, TlsCertificatesAndHostnamesPerHostnameSettingsResponse2RemoveMatch } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesPerHostnameSettingsResponse2> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity): TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity;
    remove(this: any, reqmatch?: TlsCertificatesAndHostnamesPerHostnameSettingsResponse2RemoveMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity>;
}
export { TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity };
