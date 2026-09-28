import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { CustomHostnameForAZone, CustomHostnameForAZoneUpdateData, CustomHostnameForAZoneRemoveMatch } from '../CloudflareSslTypes';
declare class CustomHostnameForAZoneEntity extends CloudflareSslEntityBase<CustomHostnameForAZone> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: CustomHostnameForAZoneEntity): CustomHostnameForAZoneEntity;
    update(this: any, reqdata?: CustomHostnameForAZoneUpdateData, ctrl?: Control): Promise<CustomHostnameForAZoneEntity>;
    remove(this: any, reqmatch?: CustomHostnameForAZoneRemoveMatch, ctrl?: Control): Promise<CustomHostnameForAZoneEntity>;
}
export { CustomHostnameForAZoneEntity };
