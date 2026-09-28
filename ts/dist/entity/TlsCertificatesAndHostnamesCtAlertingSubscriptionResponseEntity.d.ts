import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase';
import type { CloudflareSslSDK } from '../CloudflareSslSDK';
import type { Control } from '../types';
import type { TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse, TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseLoadMatch, TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseUpdateData } from '../CloudflareSslTypes';
declare class TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseEntity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse> {
    constructor(client: CloudflareSslSDK, entopts: any);
    make(this: TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseEntity): TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseEntity;
    load(this: any, reqmatch?: TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseLoadMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseEntity>;
    update(this: any, reqdata?: TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseUpdateData, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseEntity>;
}
export { TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseEntity };
