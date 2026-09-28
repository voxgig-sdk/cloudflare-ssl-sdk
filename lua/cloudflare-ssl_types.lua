-- Typed models for the CloudflareSsl SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class CacheApiResponseSingleId
---@field errors table
---@field messages table
---@field result table
---@field success boolean
---@field value string

---@class CacheApiResponseSingleIdUpdateData
---@field zone_id string
---@field errors? table
---@field messages? table
---@field result? table
---@field success? boolean
---@field value? string

---@class CacheAutoOriginTlsKex
---@field enabled boolean
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class CacheAutoOriginTlsKexListMatch
---@field zone_id string

---@class CacheAutoOriginTlsKexUpdateData
---@field zone_id string
---@field enabled? boolean
---@field errors? table
---@field messages? table
---@field result? table
---@field success? boolean

---@class CustomHostname
---@field id? string

---@class CustomHostnameRemoveMatch
---@field id string
---@field zone_id string

---@class CustomHostnameForAZone
---@field custom_certificate string
---@field custom_key string

---@class CustomHostnameForAZoneUpdateData
---@field certificate_id string
---@field certificate_pack_id string
---@field custom_hostname_id string
---@field zone_id string
---@field custom_certificate? string
---@field custom_key? string

---@class CustomHostnameForAZoneRemoveMatch
---@field certificate_id string
---@field certificate_pack_id string
---@field custom_hostname_id string
---@field zone_id string

---@class OriginTl
---@field result? table
---@field value table

---@class OriginTlLoadMatch
---@field zone_id string

---@class OriginTlUpdateData
---@field zone_id string
---@field result? table
---@field value? table

---@class OriginTlRemoveMatch
---@field zone_id string

---@class Recommendation
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class RecommendationListMatch
---@field zone_id string

---@class SslAutomaticMode
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class SslAutomaticModeListMatch
---@field zone_id string

---@class TlsCertificatesAndHostnamesAdvancedCertificatePackResponse
---@field certificate_authority string
---@field cloudflare_branding? boolean
---@field hosts table
---@field type string
---@field validation_method string
---@field validity_days number

---@class TlsCertificatesAndHostnamesAdvancedCertificatePackResponseCreateData
---@field zone_id string
---@field certificate_authority string
---@field cloudflare_branding? boolean
---@field hosts table
---@field type string
---@field validation_method string
---@field validity_days number

---@class TlsCertificatesAndHostnamesAdvancedCertificatePackResponseUpdateData
---@field certificate_pack_id string
---@field zone_id string
---@field certificate_authority? string
---@field cloudflare_branding? boolean
---@field hosts? table
---@field type? string
---@field validation_method? string
---@field validity_days? number

---@class TlsCertificatesAndHostnamesAssociationResponseCollection
---@field result? table

---@class TlsCertificatesAndHostnamesAssociationResponseCollectionListMatch
---@field account_id string
---@field mtls_certificate_id string

---@class TlsCertificatesAndHostnamesCertificateAnalyze
---@field bundle_method? string
---@field certificate? string

---@class TlsCertificatesAndHostnamesCertificateAnalyzeCreateData
---@field zone_id string
---@field bundle_method? string
---@field certificate? string

---@class TlsCertificatesAndHostnamesCertificatePackQuota
---@field result? table

---@class TlsCertificatesAndHostnamesCertificatePackQuotaLoadMatch
---@field zone_id string

---@class TlsCertificatesAndHostnamesCertificatePackResponseCollection
---@field result? table

---@class TlsCertificatesAndHostnamesCertificatePackResponseCollectionListMatch
---@field zone_id string
---@field deploy? string
---@field page? number
---@field per_page? number
---@field status? string

---@class TlsCertificatesAndHostnamesCertificatePackResponseSingle
---@field result table

---@class TlsCertificatesAndHostnamesCertificatePackResponseSingleLoadMatch
---@field certificate_pack_id string
---@field zone_id string

---@class TlsCertificatesAndHostnamesCertificateResponseCollection
---@field certificates table
---@field result? table

---@class TlsCertificatesAndHostnamesCertificateResponseCollectionListMatch
---@field zone_id string
---@field match? string
---@field page? number
---@field per_page? number
---@field status? string

---@class TlsCertificatesAndHostnamesCertificateResponseCollectionUpdateData
---@field zone_id string
---@field certificates? table
---@field result? table

---@class TlsCertificatesAndHostnamesCertificateResponseCollection3
---@field result? table

---@class TlsCertificatesAndHostnamesCertificateResponseCollection3ListMatch
---@field zone_id string

---@class TlsCertificatesAndHostnamesCertificateResponseCollection4
---@field result? table

---@class TlsCertificatesAndHostnamesCertificateResponseCollection4ListMatch
---@field zone_id string

---@class TlsCertificatesAndHostnamesCertificateResponseCollection5
---@field result? table
---@field result_info? table

---@class TlsCertificatesAndHostnamesCertificateResponseCollection5ListMatch
---@field account_id string
---@field type? table

---@class TlsCertificatesAndHostnamesCertificateResponseIdOnly

---@class TlsCertificatesAndHostnamesCertificateResponseIdOnlyRemoveMatch
---@field custom_certificate_id string
---@field zone_id string

---@class TlsCertificatesAndHostnamesCertificateResponseSingle
---@field bundle_method? string
---@field certificate string
---@field custom_csr_id? string
---@field deploy? string
---@field geo_restrictions? table
---@field policy? string
---@field private_key? string
---@field result table
---@field type? string

---@class TlsCertificatesAndHostnamesCertificateResponseSingleLoadMatch
---@field custom_certificate_id string
---@field zone_id string

---@class TlsCertificatesAndHostnamesCertificateResponseSingleCreateData
---@field zone_id string
---@field bundle_method? string
---@field certificate string
---@field custom_csr_id? string
---@field deploy? string
---@field geo_restrictions? table
---@field policy? string
---@field private_key? string
---@field result table
---@field type? string

---@class TlsCertificatesAndHostnamesCertificateResponseSingleUpdateData
---@field custom_certificate_id string
---@field zone_id string
---@field bundle_method? string
---@field certificate? string
---@field custom_csr_id? string
---@field deploy? string
---@field geo_restrictions? table
---@field policy? string
---@field private_key? string
---@field result? table
---@field type? string

---@class TlsCertificatesAndHostnamesCertificateResponseSingle2
---@field csr string
---@field hostnames table
---@field request_type string
---@field requested_validity? number
---@field result table

---@class TlsCertificatesAndHostnamesCertificateResponseSingle2LoadMatch
---@field certificate_id string

---@class TlsCertificatesAndHostnamesCertificateResponseSingle2ListMatch
---@field limit? number
---@field offset? number
---@field page? number
---@field per_page? number
---@field zone_id string

---@class TlsCertificatesAndHostnamesCertificateResponseSingle2CreateData
---@field csr string
---@field hostnames table
---@field request_type string
---@field requested_validity? number
---@field result table

---@class TlsCertificatesAndHostnamesCertificateResponseSingle3
---@field certificate string
---@field private_key string
---@field result? table

---@class TlsCertificatesAndHostnamesCertificateResponseSingle3LoadMatch
---@field certificate_id string
---@field zone_id string

---@class TlsCertificatesAndHostnamesCertificateResponseSingle3CreateData
---@field zone_id string
---@field certificate string
---@field private_key string
---@field result? table

---@class TlsCertificatesAndHostnamesCertificateResponseSingle3RemoveMatch
---@field certificate_id string
---@field zone_id string

---@class TlsCertificatesAndHostnamesCertificateResponseSingle4
---@field certificate string
---@field private_key string
---@field result? table

---@class TlsCertificatesAndHostnamesCertificateResponseSingle4LoadMatch
---@field certificate_id string
---@field zone_id string

---@class TlsCertificatesAndHostnamesCertificateResponseSingle4CreateData
---@field zone_id string
---@field certificate string
---@field private_key string
---@field result? table

---@class TlsCertificatesAndHostnamesCertificateResponseSingle4RemoveMatch
---@field certificate_id string
---@field zone_id string

---@class TlsCertificatesAndHostnamesCertificateResponseSingle5
---@field result? table

---@class TlsCertificatesAndHostnamesCertificateResponseSingle5LoadMatch
---@field account_id string
---@field mtls_certificate_id string

---@class TlsCertificatesAndHostnamesCertificateResponseSingle5RemoveMatch
---@field account_id string
---@field mtls_certificate_id string

---@class TlsCertificatesAndHostnamesCertificateResponseSinglePost
---@field ca boolean
---@field certificates string
---@field name? string
---@field private_key? string

---@class TlsCertificatesAndHostnamesCertificateResponseSinglePostCreateData
---@field account_id string
---@field ca boolean
---@field certificates string
---@field name? string
---@field private_key? string

---@class TlsCertificatesAndHostnamesCertificateRevoke

---@class TlsCertificatesAndHostnamesCertificateRevokeRemoveMatch
---@field certificate_id string

---@class TlsCertificatesAndHostnamesClientCertificateResponse
---@field result? table

---@class TlsCertificatesAndHostnamesClientCertificateResponseListMatch
---@field zone_id string
---@field limit? number
---@field offset? number
---@field page? number
---@field per_page? number
---@field status? string

---@class TlsCertificatesAndHostnamesClientCertificateResponseSingle
---@field csr string
---@field reactivate? boolean
---@field result? table
---@field validity_days number

---@class TlsCertificatesAndHostnamesClientCertificateResponseSingleLoadMatch
---@field client_certificate_id string
---@field zone_id string

---@class TlsCertificatesAndHostnamesClientCertificateResponseSingleCreateData
---@field zone_id string
---@field csr string
---@field reactivate? boolean
---@field result? table
---@field validity_days number

---@class TlsCertificatesAndHostnamesClientCertificateResponseSingleUpdateData
---@field client_certificate_id string
---@field zone_id string
---@field csr? string
---@field reactivate? boolean
---@field result? table
---@field validity_days? number

---@class TlsCertificatesAndHostnamesClientCertificateResponseSingleRemoveMatch
---@field client_certificate_id string
---@field zone_id string

---@class TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse
---@field emails? table
---@field enabled boolean
---@field result? table

---@class TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseLoadMatch
---@field zone_id string

---@class TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseUpdateData
---@field zone_id string
---@field emails? table
---@field enabled? boolean
---@field result? table

---@class TlsCertificatesAndHostnamesCustomCsrResponseCollection
---@field result? table

---@class TlsCertificatesAndHostnamesCustomCsrResponseCollectionListMatch
---@field zone_id string
---@field page? number
---@field per_page? number

---@class TlsCertificatesAndHostnamesCustomCsrResponseCollection2
---@field result? table

---@class TlsCertificatesAndHostnamesCustomCsrResponseCollection2ListMatch
---@field account_id string
---@field direction? string
---@field order? string
---@field page? number
---@field per_page? number

---@class TlsCertificatesAndHostnamesCustomCsrResponseIdOnly

---@class TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyRemoveMatch
---@field account_id? string
---@field custom_csr_id string
---@field zone_id? string

---@class TlsCertificatesAndHostnamesCustomCsrResponseSingle
---@field common_name string
---@field country string
---@field key_type? string
---@field locality string
---@field organization string
---@field organizational_unit? string
---@field result table
---@field sans table
---@field state string

---@class TlsCertificatesAndHostnamesCustomCsrResponseSingleLoadMatch
---@field custom_csr_id string
---@field zone_id string

---@class TlsCertificatesAndHostnamesCustomCsrResponseSingleCreateData
---@field zone_id string
---@field common_name string
---@field country string
---@field key_type? string
---@field locality string
---@field organization string
---@field organizational_unit? string
---@field result table
---@field sans table
---@field state string

---@class TlsCertificatesAndHostnamesCustomCsrResponseSingle2
---@field common_name string
---@field country string
---@field description? string
---@field key_type? string
---@field locality string
---@field name? string
---@field organization string
---@field organizational_unit? string
---@field result table
---@field sans table
---@field state string

---@class TlsCertificatesAndHostnamesCustomCsrResponseSingle2LoadMatch
---@field account_id string
---@field custom_csr_id string

---@class TlsCertificatesAndHostnamesCustomCsrResponseSingle2CreateData
---@field account_id string
---@field common_name string
---@field country string
---@field description? string
---@field key_type? string
---@field locality string
---@field name? string
---@field organization string
---@field organizational_unit? string
---@field result table
---@field sans table
---@field state string

---@class TlsCertificatesAndHostnamesCustomHostnameQuota
---@field errors table
---@field messages table
---@field result table
---@field success boolean

---@class TlsCertificatesAndHostnamesCustomHostnameQuotaListMatch
---@field zone_id string

---@class TlsCertificatesAndHostnamesCustomHostnameResponseCollection
---@field errors table
---@field messages table
---@field result? table
---@field result_info? table
---@field success boolean

---@class TlsCertificatesAndHostnamesCustomHostnameResponseCollectionListMatch
---@field zone_id string
---@field certificate_authority? string
---@field custom_origin_server? string
---@field direction? string
---@field hostname? string
---@field hostname_contain? string
---@field hostname_exact? string
---@field hostname_starts_with? string
---@field hostname_status? string
---@field id? string
---@field order? string
---@field page? number
---@field per_page? number
---@field ssl? number
---@field ssl_status? string
---@field wildcard? boolean

---@class TlsCertificatesAndHostnamesCustomHostnameResponseSingle
---@field custom_metadata? table
---@field custom_origin_server? string
---@field custom_origin_sni? string
---@field errors table
---@field hostname string
---@field messages table
---@field result? table
---@field ssl? table
---@field success boolean

---@class TlsCertificatesAndHostnamesCustomHostnameResponseSingleLoadMatch
---@field custom_hostname_id string
---@field zone_id string

---@class TlsCertificatesAndHostnamesCustomHostnameResponseSingleCreateData
---@field zone_id string
---@field custom_metadata? table
---@field custom_origin_server? string
---@field custom_origin_sni? string
---@field errors table
---@field hostname string
---@field messages table
---@field result? table
---@field ssl? table
---@field success boolean

---@class TlsCertificatesAndHostnamesCustomHostnameResponseSingleUpdateData
---@field custom_hostname_id string
---@field zone_id string
---@field custom_metadata? table
---@field custom_origin_server? string
---@field custom_origin_sni? string
---@field errors? table
---@field hostname? string
---@field messages? table
---@field result? table
---@field ssl? table
---@field success? boolean

---@class TlsCertificatesAndHostnamesCustomTrustStoreResponse
---@field result? table

---@class TlsCertificatesAndHostnamesCustomTrustStoreResponseListMatch
---@field zone_id string
---@field limit? number
---@field offset? number
---@field page? number
---@field per_page? number

---@class TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly

---@class TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyRemoveMatch
---@field custom_origin_trust_store_id string
---@field zone_id string

---@class TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle
---@field certificate string
---@field result table

---@class TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleLoadMatch
---@field custom_origin_trust_store_id string
---@field zone_id string

---@class TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleCreateData
---@field zone_id string
---@field certificate string
---@field result table

---@class TlsCertificatesAndHostnamesDcvDelegation
---@field result? table

---@class TlsCertificatesAndHostnamesDcvDelegationLoadMatch
---@field zone_id string

---@class TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack
---@field id? string

---@class TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackRemoveMatch
---@field id string
---@field zone_id string

---@class TlsCertificatesAndHostnamesEnabled
---@field enabled boolean
---@field result? table

---@class TlsCertificatesAndHostnamesEnabledLoadMatch
---@field zone_id string

---@class TlsCertificatesAndHostnamesEnabledUpdateData
---@field zone_id string
---@field enabled? boolean
---@field result? table

---@class TlsCertificatesAndHostnamesFallbackOrigin
---@field origin string
---@field result? table

---@class TlsCertificatesAndHostnamesFallbackOriginLoadMatch
---@field zone_id string

---@class TlsCertificatesAndHostnamesFallbackOriginUpdateData
---@field zone_id string
---@field origin? string
---@field result? table

---@class TlsCertificatesAndHostnamesFallbackOriginRemoveMatch
---@field zone_id string

---@class TlsCertificatesAndHostnamesHostnameAopResponseCollection
---@field config table

---@class TlsCertificatesAndHostnamesHostnameAopResponseCollectionUpdateData
---@field zone_id string
---@field config? table

---@class TlsCertificatesAndHostnamesHostnameAopSingle
---@field result? table

---@class TlsCertificatesAndHostnamesHostnameAopSingleLoadMatch
---@field hostname string
---@field zone_id string

---@class TlsCertificatesAndHostnamesHostnameAssocResponseCollection
---@field result? table
---@field result_info? table

---@class TlsCertificatesAndHostnamesHostnameAssocResponseCollectionListMatch
---@field zone_id string
---@field page? number
---@field per_page? number
---@field status? string

---@class TlsCertificatesAndHostnamesHostnameAssociation
---@field hostnames? table
---@field mtls_certificate_id? string
---@field result? table

---@class TlsCertificatesAndHostnamesHostnameAssociationLoadMatch
---@field zone_id string
---@field mtls_certificate_id? string

---@class TlsCertificatesAndHostnamesHostnameAssociationUpdateData
---@field zone_id string
---@field hostnames? table
---@field mtls_certificate_id? string
---@field result? table

---@class TlsCertificatesAndHostnamesKeylessResponseCollection
---@field result? table

---@class TlsCertificatesAndHostnamesKeylessResponseCollectionListMatch
---@field zone_id string

---@class TlsCertificatesAndHostnamesKeylessResponseSingle
---@field bundle_method? string
---@field certificate string
---@field enabled? boolean
---@field host string
---@field name? string
---@field port number
---@field result? table
---@field tunnel table

---@class TlsCertificatesAndHostnamesKeylessResponseSingleLoadMatch
---@field keyless_certificate_id string
---@field zone_id string

---@class TlsCertificatesAndHostnamesKeylessResponseSingleCreateData
---@field zone_id string
---@field bundle_method? string
---@field certificate string
---@field enabled? boolean
---@field host string
---@field name? string
---@field port number
---@field result? table
---@field tunnel table

---@class TlsCertificatesAndHostnamesKeylessResponseSingleUpdateData
---@field keyless_certificate_id string
---@field zone_id string
---@field bundle_method? string
---@field certificate? string
---@field enabled? boolean
---@field host? string
---@field name? string
---@field port? number
---@field result? table
---@field tunnel? table

---@class TlsCertificatesAndHostnamesKeylessResponseSingleId

---@class TlsCertificatesAndHostnamesKeylessResponseSingleIdRemoveMatch
---@field keyless_certificate_id string
---@field zone_id string

---@class TlsCertificatesAndHostnamesPerHostnameSetting
---@field id? string
---@field result? table
---@field value any

---@class TlsCertificatesAndHostnamesPerHostnameSettingLoadMatch
---@field hostname string
---@field setting_id string
---@field zone_id string

---@class TlsCertificatesAndHostnamesPerHostnameSettingUpdateData
---@field hostname string
---@field setting_id string
---@field zone_id string
---@field id? string
---@field result? table
---@field value? any

---@class TlsCertificatesAndHostnamesPerHostnameSettingsResponse
---@field result? table
---@field result_info? table

---@class TlsCertificatesAndHostnamesPerHostnameSettingsResponseLoadMatch
---@field setting_id string
---@field zone_id string

---@class TlsCertificatesAndHostnamesPerHostnameSettingsResponse2
---@field id? string

---@class TlsCertificatesAndHostnamesPerHostnameSettingsResponse2RemoveMatch
---@field hostname string
---@field setting_id string
---@field zone_id string

---@class TlsCertificatesAndHostnamesSslUniversalSetting
---@field enabled? boolean
---@field result? table

---@class TlsCertificatesAndHostnamesSslUniversalSettingLoadMatch
---@field zone_id string

---@class TlsCertificatesAndHostnamesSslUniversalSettingUpdateData
---@field zone_id string
---@field enabled? boolean
---@field result? table

---@class TlsCertificatesAndHostnamesSslValidationMethodResponse
---@field validation_method string

---@class TlsCertificatesAndHostnamesSslValidationMethodResponseUpdateData
---@field certificate_pack_id string
---@field zone_id string
---@field validation_method? string

---@class TlsCertificatesAndHostnamesSslVerificationResponseCollection
---@field result? table

---@class TlsCertificatesAndHostnamesSslVerificationResponseCollectionListMatch
---@field zone_id string
---@field retry? boolean

---@class TlsCertificatesAndHostnamesTotalTlsSetting
---@field certificate_authority? string
---@field enabled boolean
---@field result? table

---@class TlsCertificatesAndHostnamesTotalTlsSettingLoadMatch
---@field zone_id string

---@class TlsCertificatesAndHostnamesTotalTlsSettingCreateData
---@field zone_id string
---@field certificate_authority? string
---@field enabled boolean
---@field result? table

local M = {}

return M
