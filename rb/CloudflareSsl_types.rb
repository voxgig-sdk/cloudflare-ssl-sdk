# frozen_string_literal: true

# Typed models for the CloudflareSsl SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# CacheApiResponseSingleId entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] value
#   @return [String]
CacheApiResponseSingleId = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  :value,
  keyword_init: true
)

# Request payload for CacheApiResponseSingleId#update.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
CacheApiResponseSingleIdUpdateData = Struct.new(
  :zone_id,
  :errors,
  :messages,
  :result,
  :success,
  :value,
  keyword_init: true
)

# CacheAutoOriginTlsKex entity data model.
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
CacheAutoOriginTlsKex = Struct.new(
  :enabled,
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for CacheAutoOriginTlsKex#list.
#
# @!attribute [rw] zone_id
#   @return [String]
CacheAutoOriginTlsKexListMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# Request payload for CacheAutoOriginTlsKex#update.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
CacheAutoOriginTlsKexUpdateData = Struct.new(
  :zone_id,
  :enabled,
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# CustomHostname entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
CustomHostname = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for CustomHostname#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
CustomHostnameRemoveMatch = Struct.new(
  :id,
  :zone_id,
  keyword_init: true
)

# CustomHostnameForAZone entity data model.
#
# @!attribute [rw] custom_certificate
#   @return [String]
#
# @!attribute [rw] custom_key
#   @return [String]
CustomHostnameForAZone = Struct.new(
  :custom_certificate,
  :custom_key,
  keyword_init: true
)

# Request payload for CustomHostnameForAZone#update.
#
# @!attribute [rw] certificate_id
#   @return [String]
#
# @!attribute [rw] certificate_pack_id
#   @return [String]
#
# @!attribute [rw] custom_hostname_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] custom_certificate
#   @return [String, nil]
#
# @!attribute [rw] custom_key
#   @return [String, nil]
CustomHostnameForAZoneUpdateData = Struct.new(
  :certificate_id,
  :certificate_pack_id,
  :custom_hostname_id,
  :zone_id,
  :custom_certificate,
  :custom_key,
  keyword_init: true
)

# Request payload for CustomHostnameForAZone#remove.
#
# @!attribute [rw] certificate_id
#   @return [String]
#
# @!attribute [rw] certificate_pack_id
#   @return [String]
#
# @!attribute [rw] custom_hostname_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
CustomHostnameForAZoneRemoveMatch = Struct.new(
  :certificate_id,
  :certificate_pack_id,
  :custom_hostname_id,
  :zone_id,
  keyword_init: true
)

# OriginTl entity data model.
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] value
#   @return [Array]
OriginTl = Struct.new(
  :result,
  :value,
  keyword_init: true
)

# Request payload for OriginTl#load.
#
# @!attribute [rw] zone_id
#   @return [String]
OriginTlLoadMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# Request payload for OriginTl#update.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] value
#   @return [Array, nil]
OriginTlUpdateData = Struct.new(
  :zone_id,
  :result,
  :value,
  keyword_init: true
)

# Request payload for OriginTl#remove.
#
# @!attribute [rw] zone_id
#   @return [String]
OriginTlRemoveMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# Recommendation entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
Recommendation = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for Recommendation#list.
#
# @!attribute [rw] zone_id
#   @return [String]
RecommendationListMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# SslAutomaticMode entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
SslAutomaticMode = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for SslAutomaticMode#list.
#
# @!attribute [rw] zone_id
#   @return [String]
SslAutomaticModeListMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# TlsCertificatesAndHostnamesAdvancedCertificatePackResponse entity data model.
#
# @!attribute [rw] certificate_authority
#   @return [String]
#
# @!attribute [rw] cloudflare_branding
#   @return [Boolean, nil]
#
# @!attribute [rw] hosts
#   @return [Array]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] validation_method
#   @return [String]
#
# @!attribute [rw] validity_days
#   @return [Integer]
TlsCertificatesAndHostnamesAdvancedCertificatePackResponse = Struct.new(
  :certificate_authority,
  :cloudflare_branding,
  :hosts,
  :type,
  :validation_method,
  :validity_days,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesAdvancedCertificatePackResponse#create.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] certificate_authority
#   @return [String]
#
# @!attribute [rw] cloudflare_branding
#   @return [Boolean, nil]
#
# @!attribute [rw] hosts
#   @return [Array]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] validation_method
#   @return [String]
#
# @!attribute [rw] validity_days
#   @return [Integer]
TlsCertificatesAndHostnamesAdvancedCertificatePackResponseCreateData = Struct.new(
  :zone_id,
  :certificate_authority,
  :cloudflare_branding,
  :hosts,
  :type,
  :validation_method,
  :validity_days,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesAdvancedCertificatePackResponse#update.
#
# @!attribute [rw] certificate_pack_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] certificate_authority
#   @return [String, nil]
#
# @!attribute [rw] cloudflare_branding
#   @return [Boolean, nil]
#
# @!attribute [rw] hosts
#   @return [Array, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] validation_method
#   @return [String, nil]
#
# @!attribute [rw] validity_days
#   @return [Integer, nil]
TlsCertificatesAndHostnamesAdvancedCertificatePackResponseUpdateData = Struct.new(
  :certificate_pack_id,
  :zone_id,
  :certificate_authority,
  :cloudflare_branding,
  :hosts,
  :type,
  :validation_method,
  :validity_days,
  keyword_init: true
)

# TlsCertificatesAndHostnamesAssociationResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
TlsCertificatesAndHostnamesAssociationResponseCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesAssociationResponseCollection#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] mtls_certificate_id
#   @return [String]
TlsCertificatesAndHostnamesAssociationResponseCollectionListMatch = Struct.new(
  :account_id,
  :mtls_certificate_id,
  keyword_init: true
)

# TlsCertificatesAndHostnamesCertificateAnalyze entity data model.
#
# @!attribute [rw] bundle_method
#   @return [String, nil]
#
# @!attribute [rw] certificate
#   @return [String, nil]
TlsCertificatesAndHostnamesCertificateAnalyze = Struct.new(
  :bundle_method,
  :certificate,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCertificateAnalyze#create.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] bundle_method
#   @return [String, nil]
#
# @!attribute [rw] certificate
#   @return [String, nil]
TlsCertificatesAndHostnamesCertificateAnalyzeCreateData = Struct.new(
  :zone_id,
  :bundle_method,
  :certificate,
  keyword_init: true
)

# TlsCertificatesAndHostnamesCertificatePackQuota entity data model.
#
# @!attribute [rw] result
#   @return [Hash, nil]
TlsCertificatesAndHostnamesCertificatePackQuota = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCertificatePackQuota#load.
#
# @!attribute [rw] zone_id
#   @return [String]
TlsCertificatesAndHostnamesCertificatePackQuotaLoadMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# TlsCertificatesAndHostnamesCertificatePackResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
TlsCertificatesAndHostnamesCertificatePackResponseCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCertificatePackResponseCollection#list.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] deploy
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
TlsCertificatesAndHostnamesCertificatePackResponseCollectionListMatch = Struct.new(
  :zone_id,
  :deploy,
  :page,
  :per_page,
  :status,
  keyword_init: true
)

# TlsCertificatesAndHostnamesCertificatePackResponseSingle entity data model.
#
# @!attribute [rw] result
#   @return [Hash]
TlsCertificatesAndHostnamesCertificatePackResponseSingle = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCertificatePackResponseSingle#load.
#
# @!attribute [rw] certificate_pack_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
TlsCertificatesAndHostnamesCertificatePackResponseSingleLoadMatch = Struct.new(
  :certificate_pack_id,
  :zone_id,
  keyword_init: true
)

# TlsCertificatesAndHostnamesCertificateResponseCollection entity data model.
#
# @!attribute [rw] certificates
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Array, nil]
TlsCertificatesAndHostnamesCertificateResponseCollection = Struct.new(
  :certificates,
  :result,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCertificateResponseCollection#list.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] match
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
TlsCertificatesAndHostnamesCertificateResponseCollectionListMatch = Struct.new(
  :zone_id,
  :match,
  :page,
  :per_page,
  :status,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCertificateResponseCollection#update.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] certificates
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Array, nil]
TlsCertificatesAndHostnamesCertificateResponseCollectionUpdateData = Struct.new(
  :zone_id,
  :certificates,
  :result,
  keyword_init: true
)

# TlsCertificatesAndHostnamesCertificateResponseCollection3 entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
TlsCertificatesAndHostnamesCertificateResponseCollection3 = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCertificateResponseCollection3#list.
#
# @!attribute [rw] zone_id
#   @return [String]
TlsCertificatesAndHostnamesCertificateResponseCollection3ListMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# TlsCertificatesAndHostnamesCertificateResponseCollection4 entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
TlsCertificatesAndHostnamesCertificateResponseCollection4 = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCertificateResponseCollection4#list.
#
# @!attribute [rw] zone_id
#   @return [String]
TlsCertificatesAndHostnamesCertificateResponseCollection4ListMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# TlsCertificatesAndHostnamesCertificateResponseCollection5 entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
TlsCertificatesAndHostnamesCertificateResponseCollection5 = Struct.new(
  :result,
  :result_info,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCertificateResponseCollection5#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] type
#   @return [Array, nil]
TlsCertificatesAndHostnamesCertificateResponseCollection5ListMatch = Struct.new(
  :account_id,
  :type,
  keyword_init: true
)

# TlsCertificatesAndHostnamesCertificateResponseIdOnly entity data model.
class TlsCertificatesAndHostnamesCertificateResponseIdOnly
end

# Request payload for TlsCertificatesAndHostnamesCertificateResponseIdOnly#remove.
#
# @!attribute [rw] custom_certificate_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
TlsCertificatesAndHostnamesCertificateResponseIdOnlyRemoveMatch = Struct.new(
  :custom_certificate_id,
  :zone_id,
  keyword_init: true
)

# TlsCertificatesAndHostnamesCertificateResponseSingle entity data model.
#
# @!attribute [rw] bundle_method
#   @return [String, nil]
#
# @!attribute [rw] certificate
#   @return [String]
#
# @!attribute [rw] custom_csr_id
#   @return [String, nil]
#
# @!attribute [rw] deploy
#   @return [String, nil]
#
# @!attribute [rw] geo_restrictions
#   @return [Hash, nil]
#
# @!attribute [rw] policy
#   @return [String, nil]
#
# @!attribute [rw] private_key
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] type
#   @return [String, nil]
TlsCertificatesAndHostnamesCertificateResponseSingle = Struct.new(
  :bundle_method,
  :certificate,
  :custom_csr_id,
  :deploy,
  :geo_restrictions,
  :policy,
  :private_key,
  :result,
  :type,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCertificateResponseSingle#load.
#
# @!attribute [rw] custom_certificate_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
TlsCertificatesAndHostnamesCertificateResponseSingleLoadMatch = Struct.new(
  :custom_certificate_id,
  :zone_id,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCertificateResponseSingle#create.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] bundle_method
#   @return [String, nil]
#
# @!attribute [rw] certificate
#   @return [String]
#
# @!attribute [rw] custom_csr_id
#   @return [String, nil]
#
# @!attribute [rw] deploy
#   @return [String, nil]
#
# @!attribute [rw] geo_restrictions
#   @return [Hash, nil]
#
# @!attribute [rw] policy
#   @return [String, nil]
#
# @!attribute [rw] private_key
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] type
#   @return [String, nil]
TlsCertificatesAndHostnamesCertificateResponseSingleCreateData = Struct.new(
  :zone_id,
  :bundle_method,
  :certificate,
  :custom_csr_id,
  :deploy,
  :geo_restrictions,
  :policy,
  :private_key,
  :result,
  :type,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCertificateResponseSingle#update.
#
# @!attribute [rw] custom_certificate_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] bundle_method
#   @return [String, nil]
#
# @!attribute [rw] certificate
#   @return [String, nil]
#
# @!attribute [rw] custom_csr_id
#   @return [String, nil]
#
# @!attribute [rw] deploy
#   @return [String, nil]
#
# @!attribute [rw] geo_restrictions
#   @return [Hash, nil]
#
# @!attribute [rw] policy
#   @return [String, nil]
#
# @!attribute [rw] private_key
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
TlsCertificatesAndHostnamesCertificateResponseSingleUpdateData = Struct.new(
  :custom_certificate_id,
  :zone_id,
  :bundle_method,
  :certificate,
  :custom_csr_id,
  :deploy,
  :geo_restrictions,
  :policy,
  :private_key,
  :result,
  :type,
  keyword_init: true
)

# TlsCertificatesAndHostnamesCertificateResponseSingle2 entity data model.
#
# @!attribute [rw] csr
#   @return [String]
#
# @!attribute [rw] hostnames
#   @return [Array]
#
# @!attribute [rw] request_type
#   @return [String]
#
# @!attribute [rw] requested_validity
#   @return [Float, nil]
#
# @!attribute [rw] result
#   @return [Hash]
TlsCertificatesAndHostnamesCertificateResponseSingle2 = Struct.new(
  :csr,
  :hostnames,
  :request_type,
  :requested_validity,
  :result,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCertificateResponseSingle2#load.
#
# @!attribute [rw] certificate_id
#   @return [String]
TlsCertificatesAndHostnamesCertificateResponseSingle2LoadMatch = Struct.new(
  :certificate_id,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCertificateResponseSingle2#list.
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
#
# @!attribute [rw] zone_id
#   @return [String]
TlsCertificatesAndHostnamesCertificateResponseSingle2ListMatch = Struct.new(
  :limit,
  :offset,
  :page,
  :per_page,
  :zone_id,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCertificateResponseSingle2#create.
#
# @!attribute [rw] csr
#   @return [String]
#
# @!attribute [rw] hostnames
#   @return [Array]
#
# @!attribute [rw] request_type
#   @return [String]
#
# @!attribute [rw] requested_validity
#   @return [Float, nil]
#
# @!attribute [rw] result
#   @return [Hash]
TlsCertificatesAndHostnamesCertificateResponseSingle2CreateData = Struct.new(
  :csr,
  :hostnames,
  :request_type,
  :requested_validity,
  :result,
  keyword_init: true
)

# TlsCertificatesAndHostnamesCertificateResponseSingle3 entity data model.
#
# @!attribute [rw] certificate
#   @return [String]
#
# @!attribute [rw] private_key
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
TlsCertificatesAndHostnamesCertificateResponseSingle3 = Struct.new(
  :certificate,
  :private_key,
  :result,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCertificateResponseSingle3#load.
#
# @!attribute [rw] certificate_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
TlsCertificatesAndHostnamesCertificateResponseSingle3LoadMatch = Struct.new(
  :certificate_id,
  :zone_id,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCertificateResponseSingle3#create.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] certificate
#   @return [String]
#
# @!attribute [rw] private_key
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
TlsCertificatesAndHostnamesCertificateResponseSingle3CreateData = Struct.new(
  :zone_id,
  :certificate,
  :private_key,
  :result,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCertificateResponseSingle3#remove.
#
# @!attribute [rw] certificate_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
TlsCertificatesAndHostnamesCertificateResponseSingle3RemoveMatch = Struct.new(
  :certificate_id,
  :zone_id,
  keyword_init: true
)

# TlsCertificatesAndHostnamesCertificateResponseSingle4 entity data model.
#
# @!attribute [rw] certificate
#   @return [String]
#
# @!attribute [rw] private_key
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
TlsCertificatesAndHostnamesCertificateResponseSingle4 = Struct.new(
  :certificate,
  :private_key,
  :result,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCertificateResponseSingle4#load.
#
# @!attribute [rw] certificate_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
TlsCertificatesAndHostnamesCertificateResponseSingle4LoadMatch = Struct.new(
  :certificate_id,
  :zone_id,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCertificateResponseSingle4#create.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] certificate
#   @return [String]
#
# @!attribute [rw] private_key
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
TlsCertificatesAndHostnamesCertificateResponseSingle4CreateData = Struct.new(
  :zone_id,
  :certificate,
  :private_key,
  :result,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCertificateResponseSingle4#remove.
#
# @!attribute [rw] certificate_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
TlsCertificatesAndHostnamesCertificateResponseSingle4RemoveMatch = Struct.new(
  :certificate_id,
  :zone_id,
  keyword_init: true
)

# TlsCertificatesAndHostnamesCertificateResponseSingle5 entity data model.
#
# @!attribute [rw] result
#   @return [Hash, nil]
TlsCertificatesAndHostnamesCertificateResponseSingle5 = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCertificateResponseSingle5#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] mtls_certificate_id
#   @return [String]
TlsCertificatesAndHostnamesCertificateResponseSingle5LoadMatch = Struct.new(
  :account_id,
  :mtls_certificate_id,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCertificateResponseSingle5#remove.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] mtls_certificate_id
#   @return [String]
TlsCertificatesAndHostnamesCertificateResponseSingle5RemoveMatch = Struct.new(
  :account_id,
  :mtls_certificate_id,
  keyword_init: true
)

# TlsCertificatesAndHostnamesCertificateResponseSinglePost entity data model.
#
# @!attribute [rw] ca
#   @return [Boolean]
#
# @!attribute [rw] certificates
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] private_key
#   @return [String, nil]
TlsCertificatesAndHostnamesCertificateResponseSinglePost = Struct.new(
  :ca,
  :certificates,
  :name,
  :private_key,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCertificateResponseSinglePost#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] ca
#   @return [Boolean]
#
# @!attribute [rw] certificates
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] private_key
#   @return [String, nil]
TlsCertificatesAndHostnamesCertificateResponseSinglePostCreateData = Struct.new(
  :account_id,
  :ca,
  :certificates,
  :name,
  :private_key,
  keyword_init: true
)

# TlsCertificatesAndHostnamesCertificateRevoke entity data model.
class TlsCertificatesAndHostnamesCertificateRevoke
end

# Request payload for TlsCertificatesAndHostnamesCertificateRevoke#remove.
#
# @!attribute [rw] certificate_id
#   @return [String]
TlsCertificatesAndHostnamesCertificateRevokeRemoveMatch = Struct.new(
  :certificate_id,
  keyword_init: true
)

# TlsCertificatesAndHostnamesClientCertificateResponse entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
TlsCertificatesAndHostnamesClientCertificateResponse = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesClientCertificateResponse#list.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
TlsCertificatesAndHostnamesClientCertificateResponseListMatch = Struct.new(
  :zone_id,
  :limit,
  :offset,
  :page,
  :per_page,
  :status,
  keyword_init: true
)

# TlsCertificatesAndHostnamesClientCertificateResponseSingle entity data model.
#
# @!attribute [rw] csr
#   @return [String]
#
# @!attribute [rw] reactivate
#   @return [Boolean, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] validity_days
#   @return [Integer]
TlsCertificatesAndHostnamesClientCertificateResponseSingle = Struct.new(
  :csr,
  :reactivate,
  :result,
  :validity_days,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesClientCertificateResponseSingle#load.
#
# @!attribute [rw] client_certificate_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
TlsCertificatesAndHostnamesClientCertificateResponseSingleLoadMatch = Struct.new(
  :client_certificate_id,
  :zone_id,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesClientCertificateResponseSingle#create.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] csr
#   @return [String]
#
# @!attribute [rw] reactivate
#   @return [Boolean, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] validity_days
#   @return [Integer]
TlsCertificatesAndHostnamesClientCertificateResponseSingleCreateData = Struct.new(
  :zone_id,
  :csr,
  :reactivate,
  :result,
  :validity_days,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesClientCertificateResponseSingle#update.
#
# @!attribute [rw] client_certificate_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] csr
#   @return [String, nil]
#
# @!attribute [rw] reactivate
#   @return [Boolean, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] validity_days
#   @return [Integer, nil]
TlsCertificatesAndHostnamesClientCertificateResponseSingleUpdateData = Struct.new(
  :client_certificate_id,
  :zone_id,
  :csr,
  :reactivate,
  :result,
  :validity_days,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesClientCertificateResponseSingle#remove.
#
# @!attribute [rw] client_certificate_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
TlsCertificatesAndHostnamesClientCertificateResponseSingleRemoveMatch = Struct.new(
  :client_certificate_id,
  :zone_id,
  keyword_init: true
)

# TlsCertificatesAndHostnamesCustomCsrResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
TlsCertificatesAndHostnamesCustomCsrResponseCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCustomCsrResponseCollection#list.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
TlsCertificatesAndHostnamesCustomCsrResponseCollectionListMatch = Struct.new(
  :zone_id,
  :page,
  :per_page,
  keyword_init: true
)

# TlsCertificatesAndHostnamesCustomCsrResponseCollection2 entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
TlsCertificatesAndHostnamesCustomCsrResponseCollection2 = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCustomCsrResponseCollection2#list.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
TlsCertificatesAndHostnamesCustomCsrResponseCollection2ListMatch = Struct.new(
  :account_id,
  :direction,
  :order,
  :page,
  :per_page,
  keyword_init: true
)

# TlsCertificatesAndHostnamesCustomCsrResponseIdOnly entity data model.
class TlsCertificatesAndHostnamesCustomCsrResponseIdOnly
end

# Request payload for TlsCertificatesAndHostnamesCustomCsrResponseIdOnly#remove.
#
# @!attribute [rw] account_id
#   @return [String, nil]
#
# @!attribute [rw] custom_csr_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String, nil]
TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyRemoveMatch = Struct.new(
  :account_id,
  :custom_csr_id,
  :zone_id,
  keyword_init: true
)

# TlsCertificatesAndHostnamesCustomCsrResponseSingle entity data model.
#
# @!attribute [rw] common_name
#   @return [String]
#
# @!attribute [rw] country
#   @return [String]
#
# @!attribute [rw] key_type
#   @return [String, nil]
#
# @!attribute [rw] locality
#   @return [String]
#
# @!attribute [rw] organization
#   @return [String]
#
# @!attribute [rw] organizational_unit
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] sans
#   @return [Array]
#
# @!attribute [rw] state
#   @return [String]
TlsCertificatesAndHostnamesCustomCsrResponseSingle = Struct.new(
  :common_name,
  :country,
  :key_type,
  :locality,
  :organization,
  :organizational_unit,
  :result,
  :sans,
  :state,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCustomCsrResponseSingle#load.
#
# @!attribute [rw] custom_csr_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
TlsCertificatesAndHostnamesCustomCsrResponseSingleLoadMatch = Struct.new(
  :custom_csr_id,
  :zone_id,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCustomCsrResponseSingle#create.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] common_name
#   @return [String]
#
# @!attribute [rw] country
#   @return [String]
#
# @!attribute [rw] key_type
#   @return [String, nil]
#
# @!attribute [rw] locality
#   @return [String]
#
# @!attribute [rw] organization
#   @return [String]
#
# @!attribute [rw] organizational_unit
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] sans
#   @return [Array]
#
# @!attribute [rw] state
#   @return [String]
TlsCertificatesAndHostnamesCustomCsrResponseSingleCreateData = Struct.new(
  :zone_id,
  :common_name,
  :country,
  :key_type,
  :locality,
  :organization,
  :organizational_unit,
  :result,
  :sans,
  :state,
  keyword_init: true
)

# TlsCertificatesAndHostnamesCustomCsrResponseSingle2 entity data model.
#
# @!attribute [rw] common_name
#   @return [String]
#
# @!attribute [rw] country
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] key_type
#   @return [String, nil]
#
# @!attribute [rw] locality
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] organization
#   @return [String]
#
# @!attribute [rw] organizational_unit
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] sans
#   @return [Array]
#
# @!attribute [rw] state
#   @return [String]
TlsCertificatesAndHostnamesCustomCsrResponseSingle2 = Struct.new(
  :common_name,
  :country,
  :description,
  :key_type,
  :locality,
  :name,
  :organization,
  :organizational_unit,
  :result,
  :sans,
  :state,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCustomCsrResponseSingle2#load.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] custom_csr_id
#   @return [String]
TlsCertificatesAndHostnamesCustomCsrResponseSingle2LoadMatch = Struct.new(
  :account_id,
  :custom_csr_id,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCustomCsrResponseSingle2#create.
#
# @!attribute [rw] account_id
#   @return [String]
#
# @!attribute [rw] common_name
#   @return [String]
#
# @!attribute [rw] country
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] key_type
#   @return [String, nil]
#
# @!attribute [rw] locality
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] organization
#   @return [String]
#
# @!attribute [rw] organizational_unit
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] sans
#   @return [Array]
#
# @!attribute [rw] state
#   @return [String]
TlsCertificatesAndHostnamesCustomCsrResponseSingle2CreateData = Struct.new(
  :account_id,
  :common_name,
  :country,
  :description,
  :key_type,
  :locality,
  :name,
  :organization,
  :organizational_unit,
  :result,
  :sans,
  :state,
  keyword_init: true
)

# TlsCertificatesAndHostnamesCustomHostnameQuota entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
TlsCertificatesAndHostnamesCustomHostnameQuota = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCustomHostnameQuota#list.
#
# @!attribute [rw] zone_id
#   @return [String]
TlsCertificatesAndHostnamesCustomHostnameQuotaListMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# TlsCertificatesAndHostnamesCustomHostnameResponseCollection entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
TlsCertificatesAndHostnamesCustomHostnameResponseCollection = Struct.new(
  :errors,
  :messages,
  :result,
  :result_info,
  :success,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCustomHostnameResponseCollection#list.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] certificate_authority
#   @return [String, nil]
#
# @!attribute [rw] custom_origin_server
#   @return [String, nil]
#
# @!attribute [rw] direction
#   @return [String, nil]
#
# @!attribute [rw] hostname
#   @return [String, nil]
#
# @!attribute [rw] hostname_contain
#   @return [String, nil]
#
# @!attribute [rw] hostname_exact
#   @return [String, nil]
#
# @!attribute [rw] hostname_starts_with
#   @return [String, nil]
#
# @!attribute [rw] hostname_status
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
#
# @!attribute [rw] ssl
#   @return [Integer, nil]
#
# @!attribute [rw] ssl_status
#   @return [String, nil]
#
# @!attribute [rw] wildcard
#   @return [Boolean, nil]
TlsCertificatesAndHostnamesCustomHostnameResponseCollectionListMatch = Struct.new(
  :zone_id,
  :certificate_authority,
  :custom_origin_server,
  :direction,
  :hostname,
  :hostname_contain,
  :hostname_exact,
  :hostname_starts_with,
  :hostname_status,
  :id,
  :order,
  :page,
  :per_page,
  :ssl,
  :ssl_status,
  :wildcard,
  keyword_init: true
)

# TlsCertificatesAndHostnamesCustomHostnameResponseSingle entity data model.
#
# @!attribute [rw] custom_metadata
#   @return [Hash, nil]
#
# @!attribute [rw] custom_origin_server
#   @return [String, nil]
#
# @!attribute [rw] custom_origin_sni
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] hostname
#   @return [String]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] ssl
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
TlsCertificatesAndHostnamesCustomHostnameResponseSingle = Struct.new(
  :custom_metadata,
  :custom_origin_server,
  :custom_origin_sni,
  :errors,
  :hostname,
  :messages,
  :result,
  :ssl,
  :success,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCustomHostnameResponseSingle#load.
#
# @!attribute [rw] custom_hostname_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
TlsCertificatesAndHostnamesCustomHostnameResponseSingleLoadMatch = Struct.new(
  :custom_hostname_id,
  :zone_id,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCustomHostnameResponseSingle#create.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] custom_metadata
#   @return [Hash, nil]
#
# @!attribute [rw] custom_origin_server
#   @return [String, nil]
#
# @!attribute [rw] custom_origin_sni
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] hostname
#   @return [String]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] ssl
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
TlsCertificatesAndHostnamesCustomHostnameResponseSingleCreateData = Struct.new(
  :zone_id,
  :custom_metadata,
  :custom_origin_server,
  :custom_origin_sni,
  :errors,
  :hostname,
  :messages,
  :result,
  :ssl,
  :success,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCustomHostnameResponseSingle#update.
#
# @!attribute [rw] custom_hostname_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] custom_metadata
#   @return [Hash, nil]
#
# @!attribute [rw] custom_origin_server
#   @return [String, nil]
#
# @!attribute [rw] custom_origin_sni
#   @return [String, nil]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] hostname
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] ssl
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
TlsCertificatesAndHostnamesCustomHostnameResponseSingleUpdateData = Struct.new(
  :custom_hostname_id,
  :zone_id,
  :custom_metadata,
  :custom_origin_server,
  :custom_origin_sni,
  :errors,
  :hostname,
  :messages,
  :result,
  :ssl,
  :success,
  keyword_init: true
)

# TlsCertificatesAndHostnamesCustomTrustStoreResponse entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
TlsCertificatesAndHostnamesCustomTrustStoreResponse = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCustomTrustStoreResponse#list.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Integer, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
TlsCertificatesAndHostnamesCustomTrustStoreResponseListMatch = Struct.new(
  :zone_id,
  :limit,
  :offset,
  :page,
  :per_page,
  keyword_init: true
)

# TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly entity data model.
class TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly
end

# Request payload for TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly#remove.
#
# @!attribute [rw] custom_origin_trust_store_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyRemoveMatch = Struct.new(
  :custom_origin_trust_store_id,
  :zone_id,
  keyword_init: true
)

# TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle entity data model.
#
# @!attribute [rw] certificate
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle = Struct.new(
  :certificate,
  :result,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle#load.
#
# @!attribute [rw] custom_origin_trust_store_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleLoadMatch = Struct.new(
  :custom_origin_trust_store_id,
  :zone_id,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle#create.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] certificate
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash]
TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleCreateData = Struct.new(
  :zone_id,
  :certificate,
  :result,
  keyword_init: true
)

# TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackRemoveMatch = Struct.new(
  :id,
  :zone_id,
  keyword_init: true
)

# TlsCertificatesAndHostnamesEnabled entity data model.
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] result
#   @return [Hash, nil]
TlsCertificatesAndHostnamesEnabled = Struct.new(
  :enabled,
  :result,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesEnabled#load.
#
# @!attribute [rw] zone_id
#   @return [String]
TlsCertificatesAndHostnamesEnabledLoadMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesEnabled#update.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
TlsCertificatesAndHostnamesEnabledUpdateData = Struct.new(
  :zone_id,
  :enabled,
  :result,
  keyword_init: true
)

# TlsCertificatesAndHostnamesFallbackOrigin entity data model.
#
# @!attribute [rw] origin
#   @return [String]
#
# @!attribute [rw] result
#   @return [Hash, nil]
TlsCertificatesAndHostnamesFallbackOrigin = Struct.new(
  :origin,
  :result,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesFallbackOrigin#load.
#
# @!attribute [rw] zone_id
#   @return [String]
TlsCertificatesAndHostnamesFallbackOriginLoadMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesFallbackOrigin#update.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] origin
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
TlsCertificatesAndHostnamesFallbackOriginUpdateData = Struct.new(
  :zone_id,
  :origin,
  :result,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesFallbackOrigin#remove.
#
# @!attribute [rw] zone_id
#   @return [String]
TlsCertificatesAndHostnamesFallbackOriginRemoveMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# TlsCertificatesAndHostnamesHostnameAopResponseCollection entity data model.
#
# @!attribute [rw] config
#   @return [Array]
TlsCertificatesAndHostnamesHostnameAopResponseCollection = Struct.new(
  :config,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesHostnameAopResponseCollection#update.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] config
#   @return [Array, nil]
TlsCertificatesAndHostnamesHostnameAopResponseCollectionUpdateData = Struct.new(
  :zone_id,
  :config,
  keyword_init: true
)

# TlsCertificatesAndHostnamesHostnameAopSingle entity data model.
#
# @!attribute [rw] result
#   @return [Hash, nil]
TlsCertificatesAndHostnamesHostnameAopSingle = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesHostnameAopSingle#load.
#
# @!attribute [rw] hostname
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
TlsCertificatesAndHostnamesHostnameAopSingleLoadMatch = Struct.new(
  :hostname,
  :zone_id,
  keyword_init: true
)

# TlsCertificatesAndHostnamesHostnameAssocResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
TlsCertificatesAndHostnamesHostnameAssocResponseCollection = Struct.new(
  :result,
  :result_info,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesHostnameAssocResponseCollection#list.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] per_page
#   @return [Float, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
TlsCertificatesAndHostnamesHostnameAssocResponseCollectionListMatch = Struct.new(
  :zone_id,
  :page,
  :per_page,
  :status,
  keyword_init: true
)

# TlsCertificatesAndHostnamesKeylessResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
TlsCertificatesAndHostnamesKeylessResponseCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesKeylessResponseCollection#list.
#
# @!attribute [rw] zone_id
#   @return [String]
TlsCertificatesAndHostnamesKeylessResponseCollectionListMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# TlsCertificatesAndHostnamesKeylessResponseSingle entity data model.
#
# @!attribute [rw] bundle_method
#   @return [String, nil]
#
# @!attribute [rw] certificate
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] host
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] port
#   @return [Float]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] tunnel
#   @return [Hash]
TlsCertificatesAndHostnamesKeylessResponseSingle = Struct.new(
  :bundle_method,
  :certificate,
  :enabled,
  :host,
  :name,
  :port,
  :result,
  :tunnel,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesKeylessResponseSingle#load.
#
# @!attribute [rw] keyless_certificate_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
TlsCertificatesAndHostnamesKeylessResponseSingleLoadMatch = Struct.new(
  :keyless_certificate_id,
  :zone_id,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesKeylessResponseSingle#create.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] bundle_method
#   @return [String, nil]
#
# @!attribute [rw] certificate
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] host
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] port
#   @return [Float]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] tunnel
#   @return [Hash]
TlsCertificatesAndHostnamesKeylessResponseSingleCreateData = Struct.new(
  :zone_id,
  :bundle_method,
  :certificate,
  :enabled,
  :host,
  :name,
  :port,
  :result,
  :tunnel,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesKeylessResponseSingle#update.
#
# @!attribute [rw] keyless_certificate_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] bundle_method
#   @return [String, nil]
#
# @!attribute [rw] certificate
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] host
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] port
#   @return [Float, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] tunnel
#   @return [Hash, nil]
TlsCertificatesAndHostnamesKeylessResponseSingleUpdateData = Struct.new(
  :keyless_certificate_id,
  :zone_id,
  :bundle_method,
  :certificate,
  :enabled,
  :host,
  :name,
  :port,
  :result,
  :tunnel,
  keyword_init: true
)

# TlsCertificatesAndHostnamesKeylessResponseSingleId entity data model.
class TlsCertificatesAndHostnamesKeylessResponseSingleId
end

# Request payload for TlsCertificatesAndHostnamesKeylessResponseSingleId#remove.
#
# @!attribute [rw] keyless_certificate_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
TlsCertificatesAndHostnamesKeylessResponseSingleIdRemoveMatch = Struct.new(
  :keyless_certificate_id,
  :zone_id,
  keyword_init: true
)

# TlsCertificatesAndHostnamesPerHostnameSetting entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] value
#   @return [Object]
TlsCertificatesAndHostnamesPerHostnameSetting = Struct.new(
  :id,
  :result,
  :value,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesPerHostnameSetting#load.
#
# @!attribute [rw] hostname
#   @return [String]
#
# @!attribute [rw] setting_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
TlsCertificatesAndHostnamesPerHostnameSettingLoadMatch = Struct.new(
  :hostname,
  :setting_id,
  :zone_id,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesPerHostnameSetting#update.
#
# @!attribute [rw] hostname
#   @return [String]
#
# @!attribute [rw] setting_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] value
#   @return [Object, nil]
TlsCertificatesAndHostnamesPerHostnameSettingUpdateData = Struct.new(
  :hostname,
  :setting_id,
  :zone_id,
  :id,
  :result,
  :value,
  keyword_init: true
)

# TlsCertificatesAndHostnamesPerHostnameSettingsResponse entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] result_info
#   @return [Hash, nil]
TlsCertificatesAndHostnamesPerHostnameSettingsResponse = Struct.new(
  :result,
  :result_info,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesPerHostnameSettingsResponse#load.
#
# @!attribute [rw] setting_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
TlsCertificatesAndHostnamesPerHostnameSettingsResponseLoadMatch = Struct.new(
  :setting_id,
  :zone_id,
  keyword_init: true
)

# TlsCertificatesAndHostnamesPerHostnameSettingsResponse2 entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
TlsCertificatesAndHostnamesPerHostnameSettingsResponse2 = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesPerHostnameSettingsResponse2#remove.
#
# @!attribute [rw] hostname
#   @return [String]
#
# @!attribute [rw] setting_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
TlsCertificatesAndHostnamesPerHostnameSettingsResponse2RemoveMatch = Struct.new(
  :hostname,
  :setting_id,
  :zone_id,
  keyword_init: true
)

# TlsCertificatesAndHostnamesSslUniversalSetting entity data model.
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
TlsCertificatesAndHostnamesSslUniversalSetting = Struct.new(
  :enabled,
  :result,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesSslUniversalSetting#load.
#
# @!attribute [rw] zone_id
#   @return [String]
TlsCertificatesAndHostnamesSslUniversalSettingLoadMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesSslUniversalSetting#update.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
TlsCertificatesAndHostnamesSslUniversalSettingUpdateData = Struct.new(
  :zone_id,
  :enabled,
  :result,
  keyword_init: true
)

# TlsCertificatesAndHostnamesSslValidationMethodResponse entity data model.
#
# @!attribute [rw] validation_method
#   @return [String]
TlsCertificatesAndHostnamesSslValidationMethodResponse = Struct.new(
  :validation_method,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesSslValidationMethodResponse#update.
#
# @!attribute [rw] certificate_pack_id
#   @return [String]
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] validation_method
#   @return [String, nil]
TlsCertificatesAndHostnamesSslValidationMethodResponseUpdateData = Struct.new(
  :certificate_pack_id,
  :zone_id,
  :validation_method,
  keyword_init: true
)

# TlsCertificatesAndHostnamesSslVerificationResponseCollection entity data model.
#
# @!attribute [rw] result
#   @return [Array, nil]
TlsCertificatesAndHostnamesSslVerificationResponseCollection = Struct.new(
  :result,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesSslVerificationResponseCollection#list.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] retry
#   @return [Boolean, nil]
TlsCertificatesAndHostnamesSslVerificationResponseCollectionListMatch = Struct.new(
  :zone_id,
  :retry,
  keyword_init: true
)

# TlsCertificatesAndHostnamesTotalTlsSetting entity data model.
#
# @!attribute [rw] certificate_authority
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] result
#   @return [Hash, nil]
TlsCertificatesAndHostnamesTotalTlsSetting = Struct.new(
  :certificate_authority,
  :enabled,
  :result,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesTotalTlsSetting#load.
#
# @!attribute [rw] zone_id
#   @return [String]
TlsCertificatesAndHostnamesTotalTlsSettingLoadMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# Request payload for TlsCertificatesAndHostnamesTotalTlsSetting#create.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] certificate_authority
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] result
#   @return [Hash, nil]
TlsCertificatesAndHostnamesTotalTlsSettingCreateData = Struct.new(
  :zone_id,
  :certificate_authority,
  :enabled,
  :result,
  keyword_init: true
)

