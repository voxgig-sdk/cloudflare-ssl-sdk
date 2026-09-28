import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesPerHostnameSettingsResponse, TlsCertificatesAndHostnamesPerHostnameSettingsResponseLoadMatch } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesPerHostnameSettingsResponse> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity): TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity;
    load(this: any, reqmatch?: TlsCertificatesAndHostnamesPerHostnameSettingsResponseLoadMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity>;
}
export { TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity };
