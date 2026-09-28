import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { CustomHostname, CustomHostnameRemoveMatch } from '../CloudflareSslTypes';
declare class CustomHostnameEntity extends CloudflareSslEntityBase<CustomHostname> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: CustomHostnameEntity): CustomHostnameEntity;
    remove(this: any, reqmatch?: CustomHostnameRemoveMatch, ctrl?: Control): Promise<CustomHostnameEntity>;
}
export { CustomHostnameEntity };
