import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesCertificateResponseSinglePost, TlsCertificatesAndHostnamesCertificateResponseSinglePostCreateData } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesCertificateResponseSinglePost> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity): TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity;
    create(this: any, reqdata?: TlsCertificatesAndHostnamesCertificateResponseSinglePostCreateData, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity>;
}
export { TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity };
