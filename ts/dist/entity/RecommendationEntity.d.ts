import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { Recommendation, RecommendationListMatch } from '../CloudflareSslTypes';
declare class RecommendationEntity extends CloudflareSslEntityBase<Recommendation> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: RecommendationEntity): RecommendationEntity;
    list(this: any, reqmatch?: RecommendationListMatch, ctrl?: Control): Promise<RecommendationEntity[]>;
}
export { RecommendationEntity };
