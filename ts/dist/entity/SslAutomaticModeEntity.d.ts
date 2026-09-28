import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { SslAutomaticMode, SslAutomaticModeListMatch } from '../CloudflareSslTypes';
declare class SslAutomaticModeEntity extends CloudflareSslEntityBase<SslAutomaticMode> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: SslAutomaticModeEntity): SslAutomaticModeEntity;
    list(this: any, reqmatch?: SslAutomaticModeListMatch, ctrl?: Control): Promise<SslAutomaticModeEntity[]>;
}
export { SslAutomaticModeEntity };
