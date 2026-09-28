import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesKeylessResponseCollection, TlsCertificatesAndHostnamesKeylessResponseCollectionListMatch } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesKeylessResponseCollectionEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesKeylessResponseCollection> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesKeylessResponseCollectionEntity): TlsCertificatesAndHostnamesKeylessResponseCollectionEntity;
    list(this: any, reqmatch?: TlsCertificatesAndHostnamesKeylessResponseCollectionListMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesKeylessResponseCollectionEntity[]>;
}
export { TlsCertificatesAndHostnamesKeylessResponseCollectionEntity };
