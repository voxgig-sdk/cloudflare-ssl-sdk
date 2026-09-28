// Typed models for the CloudflareSsl SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface CacheApiResponseSingleId {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  success: boolean
  value: string
}

export interface CacheApiResponseSingleIdUpdateData {
  zone_id: string
  errors?: any[]
  messages?: any[]
  result?: Record<string, any>
  success?: boolean
  value?: string
}

export interface CacheAutoOriginTlsKex {
  enabled: boolean
  errors: any[]
  messages: any[]
  result: Record<string, any>
  success: boolean
}

export interface CacheAutoOriginTlsKexListMatch {
  zone_id: string
}

export interface CacheAutoOriginTlsKexUpdateData {
  zone_id: string
  enabled?: boolean
  errors?: any[]
  messages?: any[]
  result?: Record<string, any>
  success?: boolean
}

export interface CustomHostname {
  id?: string
}

export interface CustomHostnameRemoveMatch {
  id: string
  zone_id: string
}

export interface CustomHostnameForAZone {
  custom_certificate: string
  custom_key: string
}

export interface CustomHostnameForAZoneUpdateData {
  certificate_id: string
  certificate_pack_id: string
  custom_hostname_id: string
  zone_id: string
  custom_certificate?: string
  custom_key?: string
}

export interface CustomHostnameForAZoneRemoveMatch {
  certificate_id: string
  certificate_pack_id: string
  custom_hostname_id: string
  zone_id: string
}

export interface OriginTl {
  result?: Record<string, any>
  value: any[]
}

export interface OriginTlLoadMatch {
  zone_id: string
}

export interface OriginTlUpdateData {
  zone_id: string
  result?: Record<string, any>
  value?: any[]
}

export interface OriginTlRemoveMatch {
  zone_id: string
}

export interface Recommendation {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  success: boolean
}

export interface RecommendationListMatch {
  zone_id: string
}

export interface SslAutomaticMode {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  success: boolean
}

export interface SslAutomaticModeListMatch {
  zone_id: string
}

export interface TlsCertificatesAndHostnamesAdvancedCertificatePackResponse {
  certificate_authority: string
  cloudflare_branding?: boolean
  hosts: any[]
  type: string
  validation_method: string
  validity_days: number
}

export interface TlsCertificatesAndHostnamesAdvancedCertificatePackResponseCreateData {
  zone_id: string
  certificate_authority: string
  cloudflare_branding?: boolean
  hosts: any[]
  type: string
  validation_method: string
  validity_days: number
}

export interface TlsCertificatesAndHostnamesAdvancedCertificatePackResponseUpdateData {
  certificate_pack_id: string
  zone_id: string
  certificate_authority?: string
  cloudflare_branding?: boolean
  hosts?: any[]
  type?: string
  validation_method?: string
  validity_days?: number
}

export interface TlsCertificatesAndHostnamesAssociationResponseCollection {
  result?: any[]
}

export interface TlsCertificatesAndHostnamesAssociationResponseCollectionListMatch {
  account_id: string
  mtls_certificate_id: string
}

export interface TlsCertificatesAndHostnamesCertificateAnalyze {
  bundle_method?: string
  certificate?: string
}

export interface TlsCertificatesAndHostnamesCertificateAnalyzeCreateData {
  zone_id: string
  bundle_method?: string
  certificate?: string
}

export interface TlsCertificatesAndHostnamesCertificatePackQuota {
  result?: Record<string, any>
}

export interface TlsCertificatesAndHostnamesCertificatePackQuotaLoadMatch {
  zone_id: string
}

export interface TlsCertificatesAndHostnamesCertificatePackResponseCollection {
  result?: any[]
}

export interface TlsCertificatesAndHostnamesCertificatePackResponseCollectionListMatch {
  zone_id: string
  deploy?: string
  page?: number
  per_page?: number
  status?: string
}

export interface TlsCertificatesAndHostnamesCertificatePackResponseSingle {
  result: Record<string, any>
}

export interface TlsCertificatesAndHostnamesCertificatePackResponseSingleLoadMatch {
  certificate_pack_id: string
  zone_id: string
}

export interface TlsCertificatesAndHostnamesCertificateResponseCollection {
  certificates: any[]
  result?: any[]
}

export interface TlsCertificatesAndHostnamesCertificateResponseCollectionListMatch {
  zone_id: string
  match?: string
  page?: number
  per_page?: number
  status?: string
}

export interface TlsCertificatesAndHostnamesCertificateResponseCollectionUpdateData {
  zone_id: string
  certificates?: any[]
  result?: any[]
}

export interface TlsCertificatesAndHostnamesCertificateResponseCollection3 {
  result?: any[]
}

export interface TlsCertificatesAndHostnamesCertificateResponseCollection3ListMatch {
  zone_id: string
}

export interface TlsCertificatesAndHostnamesCertificateResponseCollection4 {
  result?: any[]
}

export interface TlsCertificatesAndHostnamesCertificateResponseCollection4ListMatch {
  zone_id: string
}

export interface TlsCertificatesAndHostnamesCertificateResponseCollection5 {
  result?: any[]
  result_info?: Record<string, any>
}

export interface TlsCertificatesAndHostnamesCertificateResponseCollection5ListMatch {
  account_id: string
  type?: any[]
}

export interface TlsCertificatesAndHostnamesCertificateResponseIdOnly {
}

export interface TlsCertificatesAndHostnamesCertificateResponseIdOnlyRemoveMatch {
  custom_certificate_id: string
  zone_id: string
}

export interface TlsCertificatesAndHostnamesCertificateResponseSingle {
  bundle_method?: string
  certificate: string
  custom_csr_id?: string
  deploy?: string
  geo_restrictions?: Record<string, any>
  policy?: string
  private_key?: string
  result: Record<string, any>
  type?: string
}

export interface TlsCertificatesAndHostnamesCertificateResponseSingleLoadMatch {
  custom_certificate_id: string
  zone_id: string
}

export interface TlsCertificatesAndHostnamesCertificateResponseSingleCreateData {
  zone_id: string
  bundle_method?: string
  certificate: string
  custom_csr_id?: string
  deploy?: string
  geo_restrictions?: Record<string, any>
  policy?: string
  private_key?: string
  result: Record<string, any>
  type?: string
}

export interface TlsCertificatesAndHostnamesCertificateResponseSingleUpdateData {
  custom_certificate_id: string
  zone_id: string
  bundle_method?: string
  certificate?: string
  custom_csr_id?: string
  deploy?: string
  geo_restrictions?: Record<string, any>
  policy?: string
  private_key?: string
  result?: Record<string, any>
  type?: string
}

export interface TlsCertificatesAndHostnamesCertificateResponseSingle2 {
  csr: string
  hostnames: any[]
  request_type: string
  requested_validity?: number
  result: Record<string, any>
}

export interface TlsCertificatesAndHostnamesCertificateResponseSingle2LoadMatch {
  certificate_id: string
}

export interface TlsCertificatesAndHostnamesCertificateResponseSingle2ListMatch {
  limit?: number
  offset?: number
  page?: number
  per_page?: number
  zone_id: string
}

export interface TlsCertificatesAndHostnamesCertificateResponseSingle2CreateData {
  csr: string
  hostnames: any[]
  request_type: string
  requested_validity?: number
  result: Record<string, any>
}

export interface TlsCertificatesAndHostnamesCertificateResponseSingle3 {
  certificate: string
  private_key: string
  result?: Record<string, any>
}

export interface TlsCertificatesAndHostnamesCertificateResponseSingle3LoadMatch {
  certificate_id: string
  zone_id: string
}

export interface TlsCertificatesAndHostnamesCertificateResponseSingle3CreateData {
  zone_id: string
  certificate: string
  private_key: string
  result?: Record<string, any>
}

export interface TlsCertificatesAndHostnamesCertificateResponseSingle3RemoveMatch {
  certificate_id: string
  zone_id: string
}

export interface TlsCertificatesAndHostnamesCertificateResponseSingle4 {
  certificate: string
  private_key: string
  result?: Record<string, any>
}

export interface TlsCertificatesAndHostnamesCertificateResponseSingle4LoadMatch {
  certificate_id: string
  zone_id: string
}

export interface TlsCertificatesAndHostnamesCertificateResponseSingle4CreateData {
  zone_id: string
  certificate: string
  private_key: string
  result?: Record<string, any>
}

export interface TlsCertificatesAndHostnamesCertificateResponseSingle4RemoveMatch {
  certificate_id: string
  zone_id: string
}

export interface TlsCertificatesAndHostnamesCertificateResponseSingle5 {
  result?: Record<string, any>
}

export interface TlsCertificatesAndHostnamesCertificateResponseSingle5LoadMatch {
  account_id: string
  mtls_certificate_id: string
}

export interface TlsCertificatesAndHostnamesCertificateResponseSingle5RemoveMatch {
  account_id: string
  mtls_certificate_id: string
}

export interface TlsCertificatesAndHostnamesCertificateResponseSinglePost {
  ca: boolean
  certificates: string
  name?: string
  private_key?: string
}

export interface TlsCertificatesAndHostnamesCertificateResponseSinglePostCreateData {
  account_id: string
  ca: boolean
  certificates: string
  name?: string
  private_key?: string
}

export interface TlsCertificatesAndHostnamesCertificateRevoke {
}

export interface TlsCertificatesAndHostnamesCertificateRevokeRemoveMatch {
  certificate_id: string
}

export interface TlsCertificatesAndHostnamesClientCertificateResponse {
  result?: any[]
}

export interface TlsCertificatesAndHostnamesClientCertificateResponseListMatch {
  zone_id: string
  limit?: number
  offset?: number
  page?: number
  per_page?: number
  status?: string
}

export interface TlsCertificatesAndHostnamesClientCertificateResponseSingle {
  csr: string
  reactivate?: boolean
  result?: Record<string, any>
  validity_days: number
}

export interface TlsCertificatesAndHostnamesClientCertificateResponseSingleLoadMatch {
  client_certificate_id: string
  zone_id: string
}

export interface TlsCertificatesAndHostnamesClientCertificateResponseSingleCreateData {
  zone_id: string
  csr: string
  reactivate?: boolean
  result?: Record<string, any>
  validity_days: number
}

export interface TlsCertificatesAndHostnamesClientCertificateResponseSingleUpdateData {
  client_certificate_id: string
  zone_id: string
  csr?: string
  reactivate?: boolean
  result?: Record<string, any>
  validity_days?: number
}

export interface TlsCertificatesAndHostnamesClientCertificateResponseSingleRemoveMatch {
  client_certificate_id: string
  zone_id: string
}

export interface TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse {
  emails?: any[]
  enabled: boolean
  result?: Record<string, any>
}

export interface TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseLoadMatch {
  zone_id: string
}

export interface TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseUpdateData {
  zone_id: string
  emails?: any[]
  enabled?: boolean
  result?: Record<string, any>
}

export interface TlsCertificatesAndHostnamesCustomCsrResponseCollection {
  result?: any[]
}

export interface TlsCertificatesAndHostnamesCustomCsrResponseCollectionListMatch {
  zone_id: string
  page?: number
  per_page?: number
}

export interface TlsCertificatesAndHostnamesCustomCsrResponseCollection2 {
  result?: any[]
}

export interface TlsCertificatesAndHostnamesCustomCsrResponseCollection2ListMatch {
  account_id: string
  direction?: string
  order?: string
  page?: number
  per_page?: number
}

export interface TlsCertificatesAndHostnamesCustomCsrResponseIdOnly {
}

export interface TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyRemoveMatch {
  account_id?: string
  custom_csr_id: string
  zone_id?: string
}

export interface TlsCertificatesAndHostnamesCustomCsrResponseSingle {
  common_name: string
  country: string
  key_type?: string
  locality: string
  organization: string
  organizational_unit?: string
  result: Record<string, any>
  sans: any[]
  state: string
}

export interface TlsCertificatesAndHostnamesCustomCsrResponseSingleLoadMatch {
  custom_csr_id: string
  zone_id: string
}

export interface TlsCertificatesAndHostnamesCustomCsrResponseSingleCreateData {
  zone_id: string
  common_name: string
  country: string
  key_type?: string
  locality: string
  organization: string
  organizational_unit?: string
  result: Record<string, any>
  sans: any[]
  state: string
}

export interface TlsCertificatesAndHostnamesCustomCsrResponseSingle2 {
  common_name: string
  country: string
  description?: string
  key_type?: string
  locality: string
  name?: string
  organization: string
  organizational_unit?: string
  result: Record<string, any>
  sans: any[]
  state: string
}

export interface TlsCertificatesAndHostnamesCustomCsrResponseSingle2LoadMatch {
  account_id: string
  custom_csr_id: string
}

export interface TlsCertificatesAndHostnamesCustomCsrResponseSingle2CreateData {
  account_id: string
  common_name: string
  country: string
  description?: string
  key_type?: string
  locality: string
  name?: string
  organization: string
  organizational_unit?: string
  result: Record<string, any>
  sans: any[]
  state: string
}

export interface TlsCertificatesAndHostnamesCustomHostnameQuota {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  success: boolean
}

export interface TlsCertificatesAndHostnamesCustomHostnameQuotaListMatch {
  zone_id: string
}

export interface TlsCertificatesAndHostnamesCustomHostnameResponseCollection {
  errors: any[]
  messages: any[]
  result?: any[]
  result_info?: Record<string, any>
  success: boolean
}

export interface TlsCertificatesAndHostnamesCustomHostnameResponseCollectionListMatch {
  zone_id: string
  certificate_authority?: string
  custom_origin_server?: string
  direction?: string
  hostname?: string
  hostname_contain?: string
  hostname_exact?: string
  hostname_starts_with?: string
  hostname_status?: string
  id?: string
  order?: string
  page?: number
  per_page?: number
  ssl?: number
  ssl_status?: string
  wildcard?: boolean
}

export interface TlsCertificatesAndHostnamesCustomHostnameResponseSingle {
  custom_metadata?: Record<string, any>
  custom_origin_server?: string
  custom_origin_sni?: string
  errors: any[]
  hostname: string
  messages: any[]
  result?: Record<string, any>
  ssl?: Record<string, any>
  success: boolean
}

export interface TlsCertificatesAndHostnamesCustomHostnameResponseSingleLoadMatch {
  custom_hostname_id: string
  zone_id: string
}

export interface TlsCertificatesAndHostnamesCustomHostnameResponseSingleCreateData {
  zone_id: string
  custom_metadata?: Record<string, any>
  custom_origin_server?: string
  custom_origin_sni?: string
  errors: any[]
  hostname: string
  messages: any[]
  result?: Record<string, any>
  ssl?: Record<string, any>
  success: boolean
}

export interface TlsCertificatesAndHostnamesCustomHostnameResponseSingleUpdateData {
  custom_hostname_id: string
  zone_id: string
  custom_metadata?: Record<string, any>
  custom_origin_server?: string
  custom_origin_sni?: string
  errors?: any[]
  hostname?: string
  messages?: any[]
  result?: Record<string, any>
  ssl?: Record<string, any>
  success?: boolean
}

export interface TlsCertificatesAndHostnamesCustomTrustStoreResponse {
  result?: any[]
}

export interface TlsCertificatesAndHostnamesCustomTrustStoreResponseListMatch {
  zone_id: string
  limit?: number
  offset?: number
  page?: number
  per_page?: number
}

export interface TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly {
}

export interface TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyRemoveMatch {
  custom_origin_trust_store_id: string
  zone_id: string
}

export interface TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle {
  certificate: string
  result: Record<string, any>
}

export interface TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleLoadMatch {
  custom_origin_trust_store_id: string
  zone_id: string
}

export interface TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleCreateData {
  zone_id: string
  certificate: string
  result: Record<string, any>
}

export interface TlsCertificatesAndHostnamesDcvDelegation {
  result?: Record<string, any>
}

export interface TlsCertificatesAndHostnamesDcvDelegationLoadMatch {
  zone_id: string
}

export interface TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack {
  id?: string
}

export interface TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackRemoveMatch {
  id: string
  zone_id: string
}

export interface TlsCertificatesAndHostnamesEnabled {
  enabled: boolean
  result?: Record<string, any>
}

export interface TlsCertificatesAndHostnamesEnabledLoadMatch {
  zone_id: string
}

export interface TlsCertificatesAndHostnamesEnabledUpdateData {
  zone_id: string
  enabled?: boolean
  result?: Record<string, any>
}

export interface TlsCertificatesAndHostnamesFallbackOrigin {
  origin: string
  result?: Record<string, any>
}

export interface TlsCertificatesAndHostnamesFallbackOriginLoadMatch {
  zone_id: string
}

export interface TlsCertificatesAndHostnamesFallbackOriginUpdateData {
  zone_id: string
  origin?: string
  result?: Record<string, any>
}

export interface TlsCertificatesAndHostnamesFallbackOriginRemoveMatch {
  zone_id: string
}

export interface TlsCertificatesAndHostnamesHostnameAopResponseCollection {
  config: any[]
}

export interface TlsCertificatesAndHostnamesHostnameAopResponseCollectionUpdateData {
  zone_id: string
  config?: any[]
}

export interface TlsCertificatesAndHostnamesHostnameAopSingle {
  result?: Record<string, any>
}

export interface TlsCertificatesAndHostnamesHostnameAopSingleLoadMatch {
  hostname: string
  zone_id: string
}

export interface TlsCertificatesAndHostnamesHostnameAssocResponseCollection {
  result?: any[]
  result_info?: Record<string, any>
}

export interface TlsCertificatesAndHostnamesHostnameAssocResponseCollectionListMatch {
  zone_id: string
  page?: number
  per_page?: number
  status?: string
}

export interface TlsCertificatesAndHostnamesHostnameAssociation {
  hostnames?: any[]
  mtls_certificate_id?: string
  result?: Record<string, any>
}

export interface TlsCertificatesAndHostnamesHostnameAssociationLoadMatch {
  zone_id: string
  mtls_certificate_id?: string
}

export interface TlsCertificatesAndHostnamesHostnameAssociationUpdateData {
  zone_id: string
  hostnames?: any[]
  mtls_certificate_id?: string
  result?: Record<string, any>
}

export interface TlsCertificatesAndHostnamesKeylessResponseCollection {
  result?: any[]
}

export interface TlsCertificatesAndHostnamesKeylessResponseCollectionListMatch {
  zone_id: string
}

export interface TlsCertificatesAndHostnamesKeylessResponseSingle {
  bundle_method?: string
  certificate: string
  enabled?: boolean
  host: string
  name?: string
  port: number
  result?: Record<string, any>
  tunnel: Record<string, any>
}

export interface TlsCertificatesAndHostnamesKeylessResponseSingleLoadMatch {
  keyless_certificate_id: string
  zone_id: string
}

export interface TlsCertificatesAndHostnamesKeylessResponseSingleCreateData {
  zone_id: string
  bundle_method?: string
  certificate: string
  enabled?: boolean
  host: string
  name?: string
  port: number
  result?: Record<string, any>
  tunnel: Record<string, any>
}

export interface TlsCertificatesAndHostnamesKeylessResponseSingleUpdateData {
  keyless_certificate_id: string
  zone_id: string
  bundle_method?: string
  certificate?: string
  enabled?: boolean
  host?: string
  name?: string
  port?: number
  result?: Record<string, any>
  tunnel?: Record<string, any>
}

export interface TlsCertificatesAndHostnamesKeylessResponseSingleId {
}

export interface TlsCertificatesAndHostnamesKeylessResponseSingleIdRemoveMatch {
  keyless_certificate_id: string
  zone_id: string
}

export interface TlsCertificatesAndHostnamesPerHostnameSetting {
  id?: string
  result?: Record<string, any>
  value: any
}

export interface TlsCertificatesAndHostnamesPerHostnameSettingLoadMatch {
  hostname: string
  setting_id: string
  zone_id: string
}

export interface TlsCertificatesAndHostnamesPerHostnameSettingUpdateData {
  hostname: string
  setting_id: string
  zone_id: string
  id?: string
  result?: Record<string, any>
  value?: any
}

export interface TlsCertificatesAndHostnamesPerHostnameSettingsResponse {
  result?: any[]
  result_info?: Record<string, any>
}

export interface TlsCertificatesAndHostnamesPerHostnameSettingsResponseLoadMatch {
  setting_id: string
  zone_id: string
}

export interface TlsCertificatesAndHostnamesPerHostnameSettingsResponse2 {
  id?: string
}

export interface TlsCertificatesAndHostnamesPerHostnameSettingsResponse2RemoveMatch {
  hostname: string
  setting_id: string
  zone_id: string
}

export interface TlsCertificatesAndHostnamesSslUniversalSetting {
  enabled?: boolean
  result?: Record<string, any>
}

export interface TlsCertificatesAndHostnamesSslUniversalSettingLoadMatch {
  zone_id: string
}

export interface TlsCertificatesAndHostnamesSslUniversalSettingUpdateData {
  zone_id: string
  enabled?: boolean
  result?: Record<string, any>
}

export interface TlsCertificatesAndHostnamesSslValidationMethodResponse {
  validation_method: string
}

export interface TlsCertificatesAndHostnamesSslValidationMethodResponseUpdateData {
  certificate_pack_id: string
  zone_id: string
  validation_method?: string
}

export interface TlsCertificatesAndHostnamesSslVerificationResponseCollection {
  result?: any[]
}

export interface TlsCertificatesAndHostnamesSslVerificationResponseCollectionListMatch {
  zone_id: string
  retry?: boolean
}

export interface TlsCertificatesAndHostnamesTotalTlsSetting {
  certificate_authority?: string
  enabled: boolean
  result?: Record<string, any>
}

export interface TlsCertificatesAndHostnamesTotalTlsSettingLoadMatch {
  zone_id: string
}

export interface TlsCertificatesAndHostnamesTotalTlsSettingCreateData {
  zone_id: string
  certificate_authority?: string
  enabled: boolean
  result?: Record<string, any>
}

