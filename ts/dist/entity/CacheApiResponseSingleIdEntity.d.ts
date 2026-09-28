import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { CacheApiResponseSingleId, CacheApiResponseSingleIdUpdateData } from '../CloudflareSslTypes';
declare class CacheApiResponseSingleIdEntity extends CloudflareSslEntityBase<CacheApiResponseSingleId> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: CacheApiResponseSingleIdEntity): CacheApiResponseSingleIdEntity;
    update(this: any, reqdata?: CacheApiResponseSingleIdUpdateData, ctrl?: Control): Promise<CacheApiResponseSingleIdEntity>;
}
export { CacheApiResponseSingleIdEntity };
