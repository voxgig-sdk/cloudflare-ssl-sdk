import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { CacheAutoOriginTlsKex, CacheAutoOriginTlsKexListMatch, CacheAutoOriginTlsKexUpdateData } from '../CloudflareSslTypes';
declare class CacheAutoOriginTlsKexEntity extends CloudflareSslEntityBase<CacheAutoOriginTlsKex> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: CacheAutoOriginTlsKexEntity): CacheAutoOriginTlsKexEntity;
    list(this: any, reqmatch?: CacheAutoOriginTlsKexListMatch, ctrl?: Control): Promise<CacheAutoOriginTlsKexEntity[]>;
    update(this: any, reqdata?: CacheAutoOriginTlsKexUpdateData, ctrl?: Control): Promise<CacheAutoOriginTlsKexEntity>;
}
export { CacheAutoOriginTlsKexEntity };
