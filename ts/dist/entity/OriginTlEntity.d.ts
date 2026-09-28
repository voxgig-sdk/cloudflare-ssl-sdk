import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { OriginTl, OriginTlLoadMatch, OriginTlUpdateData, OriginTlRemoveMatch } from '../CloudflareSslTypes';
declare class OriginTlEntity extends CloudflareSslEntityBase<OriginTl> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: OriginTlEntity): OriginTlEntity;
    load(this: any, reqmatch?: OriginTlLoadMatch, ctrl?: Control): Promise<OriginTlEntity>;
    update(this: any, reqdata?: OriginTlUpdateData, ctrl?: Control): Promise<OriginTlEntity>;
    remove(this: any, reqmatch?: OriginTlRemoveMatch, ctrl?: Control): Promise<OriginTlEntity>;
}
export { OriginTlEntity };
