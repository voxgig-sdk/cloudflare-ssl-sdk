import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesKeylessResponseSingleId, TlsCertificatesAndHostnamesKeylessResponseSingleIdRemoveMatch } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesKeylessResponseSingleId> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity): TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity;
    remove(this: any, reqmatch?: TlsCertificatesAndHostnamesKeylessResponseSingleIdRemoveMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity>;
}
export { TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity };
