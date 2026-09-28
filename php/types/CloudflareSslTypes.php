<?php
declare(strict_types=1);

// Typed models for the CloudflareSsl SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** CacheApiResponseSingleId entity data model. */
class CacheApiResponseSingleId
{
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
    public string $value;
}

/** Request payload for CacheApiResponseSingleId#update. */
class CacheApiResponseSingleIdUpdateData
{
    public string $zone_id;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?bool $success = null;
    public ?string $value = null;
}

/** CacheAutoOriginTlsKex entity data model. */
class CacheAutoOriginTlsKex
{
    public bool $enabled;
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for CacheAutoOriginTlsKex#list. */
class CacheAutoOriginTlsKexListMatch
{
    public string $zone_id;
}

/** Request payload for CacheAutoOriginTlsKex#update. */
class CacheAutoOriginTlsKexUpdateData
{
    public string $zone_id;
    public ?bool $enabled = null;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?bool $success = null;
}

/** CustomHostname entity data model. */
class CustomHostname
{
    public ?string $id = null;
}

/** Request payload for CustomHostname#remove. */
class CustomHostnameRemoveMatch
{
    public string $id;
    public string $zone_id;
}

/** CustomHostnameForAZone entity data model. */
class CustomHostnameForAZone
{
    public string $custom_certificate;
    public string $custom_key;
}

/** Request payload for CustomHostnameForAZone#update. */
class CustomHostnameForAZoneUpdateData
{
    public string $certificate_id;
    public string $certificate_pack_id;
    public string $custom_hostname_id;
    public string $zone_id;
    public ?string $custom_certificate = null;
    public ?string $custom_key = null;
}

/** Request payload for CustomHostnameForAZone#remove. */
class CustomHostnameForAZoneRemoveMatch
{
    public string $certificate_id;
    public string $certificate_pack_id;
    public string $custom_hostname_id;
    public string $zone_id;
}

/** OriginTl entity data model. */
class OriginTl
{
    public ?array $result = null;
    public array $value;
}

/** Request payload for OriginTl#load. */
class OriginTlLoadMatch
{
    public string $zone_id;
}

/** Request payload for OriginTl#update. */
class OriginTlUpdateData
{
    public string $zone_id;
    public ?array $result = null;
    public ?array $value = null;
}

/** Request payload for OriginTl#remove. */
class OriginTlRemoveMatch
{
    public string $zone_id;
}

/** Recommendation entity data model. */
class Recommendation
{
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for Recommendation#list. */
class RecommendationListMatch
{
    public string $zone_id;
}

/** SslAutomaticMode entity data model. */
class SslAutomaticMode
{
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for SslAutomaticMode#list. */
class SslAutomaticModeListMatch
{
    public string $zone_id;
}

/** TlsCertificatesAndHostnamesAdvancedCertificatePackResponse entity data model. */
class TlsCertificatesAndHostnamesAdvancedCertificatePackResponse
{
    public string $certificate_authority;
    public ?bool $cloudflare_branding = null;
    public array $hosts;
    public string $type;
    public string $validation_method;
    public int $validity_days;
}

/** Request payload for TlsCertificatesAndHostnamesAdvancedCertificatePackResponse#create. */
class TlsCertificatesAndHostnamesAdvancedCertificatePackResponseCreateData
{
    public string $zone_id;
    public string $certificate_authority;
    public ?bool $cloudflare_branding = null;
    public array $hosts;
    public string $type;
    public string $validation_method;
    public int $validity_days;
}

/** Request payload for TlsCertificatesAndHostnamesAdvancedCertificatePackResponse#update. */
class TlsCertificatesAndHostnamesAdvancedCertificatePackResponseUpdateData
{
    public string $certificate_pack_id;
    public string $zone_id;
    public ?string $certificate_authority = null;
    public ?bool $cloudflare_branding = null;
    public ?array $hosts = null;
    public ?string $type = null;
    public ?string $validation_method = null;
    public ?int $validity_days = null;
}

/** TlsCertificatesAndHostnamesAssociationResponseCollection entity data model. */
class TlsCertificatesAndHostnamesAssociationResponseCollection
{
    public ?array $result = null;
}

/** Request payload for TlsCertificatesAndHostnamesAssociationResponseCollection#list. */
class TlsCertificatesAndHostnamesAssociationResponseCollectionListMatch
{
    public string $account_id;
    public string $mtls_certificate_id;
}

/** TlsCertificatesAndHostnamesCertificateAnalyze entity data model. */
class TlsCertificatesAndHostnamesCertificateAnalyze
{
    public ?string $bundle_method = null;
    public ?string $certificate = null;
}

/** Request payload for TlsCertificatesAndHostnamesCertificateAnalyze#create. */
class TlsCertificatesAndHostnamesCertificateAnalyzeCreateData
{
    public string $zone_id;
    public ?string $bundle_method = null;
    public ?string $certificate = null;
}

/** TlsCertificatesAndHostnamesCertificatePackQuota entity data model. */
class TlsCertificatesAndHostnamesCertificatePackQuota
{
    public ?array $result = null;
}

/** Request payload for TlsCertificatesAndHostnamesCertificatePackQuota#load. */
class TlsCertificatesAndHostnamesCertificatePackQuotaLoadMatch
{
    public string $zone_id;
}

/** TlsCertificatesAndHostnamesCertificatePackResponseCollection entity data model. */
class TlsCertificatesAndHostnamesCertificatePackResponseCollection
{
    public ?array $result = null;
}

/** Request payload for TlsCertificatesAndHostnamesCertificatePackResponseCollection#list. */
class TlsCertificatesAndHostnamesCertificatePackResponseCollectionListMatch
{
    public string $zone_id;
    public ?string $deploy = null;
    public ?float $page = null;
    public ?float $per_page = null;
    public ?string $status = null;
}

/** TlsCertificatesAndHostnamesCertificatePackResponseSingle entity data model. */
class TlsCertificatesAndHostnamesCertificatePackResponseSingle
{
    public array $result;
}

/** Request payload for TlsCertificatesAndHostnamesCertificatePackResponseSingle#load. */
class TlsCertificatesAndHostnamesCertificatePackResponseSingleLoadMatch
{
    public string $certificate_pack_id;
    public string $zone_id;
}

/** TlsCertificatesAndHostnamesCertificateResponseCollection entity data model. */
class TlsCertificatesAndHostnamesCertificateResponseCollection
{
    public array $certificates;
    public ?array $result = null;
}

/** Request payload for TlsCertificatesAndHostnamesCertificateResponseCollection#list. */
class TlsCertificatesAndHostnamesCertificateResponseCollectionListMatch
{
    public string $zone_id;
    public ?string $match = null;
    public ?float $page = null;
    public ?float $per_page = null;
    public ?string $status = null;
}

/** Request payload for TlsCertificatesAndHostnamesCertificateResponseCollection#update. */
class TlsCertificatesAndHostnamesCertificateResponseCollectionUpdateData
{
    public string $zone_id;
    public ?array $certificates = null;
    public ?array $result = null;
}

/** TlsCertificatesAndHostnamesCertificateResponseCollection3 entity data model. */
class TlsCertificatesAndHostnamesCertificateResponseCollection3
{
    public ?array $result = null;
}

/** Request payload for TlsCertificatesAndHostnamesCertificateResponseCollection3#list. */
class TlsCertificatesAndHostnamesCertificateResponseCollection3ListMatch
{
    public string $zone_id;
}

/** TlsCertificatesAndHostnamesCertificateResponseCollection4 entity data model. */
class TlsCertificatesAndHostnamesCertificateResponseCollection4
{
    public ?array $result = null;
}

/** Request payload for TlsCertificatesAndHostnamesCertificateResponseCollection4#list. */
class TlsCertificatesAndHostnamesCertificateResponseCollection4ListMatch
{
    public string $zone_id;
}

/** TlsCertificatesAndHostnamesCertificateResponseCollection5 entity data model. */
class TlsCertificatesAndHostnamesCertificateResponseCollection5
{
    public ?array $result = null;
    public ?array $result_info = null;
}

/** Request payload for TlsCertificatesAndHostnamesCertificateResponseCollection5#list. */
class TlsCertificatesAndHostnamesCertificateResponseCollection5ListMatch
{
    public string $account_id;
    public ?array $type = null;
}

/** TlsCertificatesAndHostnamesCertificateResponseIdOnly entity data model. */
class TlsCertificatesAndHostnamesCertificateResponseIdOnly
{
}

/** Request payload for TlsCertificatesAndHostnamesCertificateResponseIdOnly#remove. */
class TlsCertificatesAndHostnamesCertificateResponseIdOnlyRemoveMatch
{
    public string $custom_certificate_id;
    public string $zone_id;
}

/** TlsCertificatesAndHostnamesCertificateResponseSingle entity data model. */
class TlsCertificatesAndHostnamesCertificateResponseSingle
{
    public ?string $bundle_method = null;
    public string $certificate;
    public ?string $custom_csr_id = null;
    public ?string $deploy = null;
    public ?array $geo_restrictions = null;
    public ?string $policy = null;
    public ?string $private_key = null;
    public array $result;
    public ?string $type = null;
}

/** Request payload for TlsCertificatesAndHostnamesCertificateResponseSingle#load. */
class TlsCertificatesAndHostnamesCertificateResponseSingleLoadMatch
{
    public string $custom_certificate_id;
    public string $zone_id;
}

/** Request payload for TlsCertificatesAndHostnamesCertificateResponseSingle#create. */
class TlsCertificatesAndHostnamesCertificateResponseSingleCreateData
{
    public string $zone_id;
    public ?string $bundle_method = null;
    public string $certificate;
    public ?string $custom_csr_id = null;
    public ?string $deploy = null;
    public ?array $geo_restrictions = null;
    public ?string $policy = null;
    public ?string $private_key = null;
    public array $result;
    public ?string $type = null;
}

/** Request payload for TlsCertificatesAndHostnamesCertificateResponseSingle#update. */
class TlsCertificatesAndHostnamesCertificateResponseSingleUpdateData
{
    public string $custom_certificate_id;
    public string $zone_id;
    public ?string $bundle_method = null;
    public ?string $certificate = null;
    public ?string $custom_csr_id = null;
    public ?string $deploy = null;
    public ?array $geo_restrictions = null;
    public ?string $policy = null;
    public ?string $private_key = null;
    public ?array $result = null;
    public ?string $type = null;
}

/** TlsCertificatesAndHostnamesCertificateResponseSingle2 entity data model. */
class TlsCertificatesAndHostnamesCertificateResponseSingle2
{
    public string $csr;
    public array $hostnames;
    public string $request_type;
    public ?float $requested_validity = null;
    public array $result;
}

/** Request payload for TlsCertificatesAndHostnamesCertificateResponseSingle2#load. */
class TlsCertificatesAndHostnamesCertificateResponseSingle2LoadMatch
{
    public string $certificate_id;
}

/** Request payload for TlsCertificatesAndHostnamesCertificateResponseSingle2#list. */
class TlsCertificatesAndHostnamesCertificateResponseSingle2ListMatch
{
    public ?int $limit = null;
    public ?int $offset = null;
    public ?float $page = null;
    public ?float $per_page = null;
    public string $zone_id;
}

/** Request payload for TlsCertificatesAndHostnamesCertificateResponseSingle2#create. */
class TlsCertificatesAndHostnamesCertificateResponseSingle2CreateData
{
    public string $csr;
    public array $hostnames;
    public string $request_type;
    public ?float $requested_validity = null;
    public array $result;
}

/** TlsCertificatesAndHostnamesCertificateResponseSingle3 entity data model. */
class TlsCertificatesAndHostnamesCertificateResponseSingle3
{
    public string $certificate;
    public string $private_key;
    public ?array $result = null;
}

/** Request payload for TlsCertificatesAndHostnamesCertificateResponseSingle3#load. */
class TlsCertificatesAndHostnamesCertificateResponseSingle3LoadMatch
{
    public string $certificate_id;
    public string $zone_id;
}

/** Request payload for TlsCertificatesAndHostnamesCertificateResponseSingle3#create. */
class TlsCertificatesAndHostnamesCertificateResponseSingle3CreateData
{
    public string $zone_id;
    public string $certificate;
    public string $private_key;
    public ?array $result = null;
}

/** Request payload for TlsCertificatesAndHostnamesCertificateResponseSingle3#remove. */
class TlsCertificatesAndHostnamesCertificateResponseSingle3RemoveMatch
{
    public string $certificate_id;
    public string $zone_id;
}

/** TlsCertificatesAndHostnamesCertificateResponseSingle4 entity data model. */
class TlsCertificatesAndHostnamesCertificateResponseSingle4
{
    public string $certificate;
    public string $private_key;
    public ?array $result = null;
}

/** Request payload for TlsCertificatesAndHostnamesCertificateResponseSingle4#load. */
class TlsCertificatesAndHostnamesCertificateResponseSingle4LoadMatch
{
    public string $certificate_id;
    public string $zone_id;
}

/** Request payload for TlsCertificatesAndHostnamesCertificateResponseSingle4#create. */
class TlsCertificatesAndHostnamesCertificateResponseSingle4CreateData
{
    public string $zone_id;
    public string $certificate;
    public string $private_key;
    public ?array $result = null;
}

/** Request payload for TlsCertificatesAndHostnamesCertificateResponseSingle4#remove. */
class TlsCertificatesAndHostnamesCertificateResponseSingle4RemoveMatch
{
    public string $certificate_id;
    public string $zone_id;
}

/** TlsCertificatesAndHostnamesCertificateResponseSingle5 entity data model. */
class TlsCertificatesAndHostnamesCertificateResponseSingle5
{
    public ?array $result = null;
}

/** Request payload for TlsCertificatesAndHostnamesCertificateResponseSingle5#load. */
class TlsCertificatesAndHostnamesCertificateResponseSingle5LoadMatch
{
    public string $account_id;
    public string $mtls_certificate_id;
}

/** Request payload for TlsCertificatesAndHostnamesCertificateResponseSingle5#remove. */
class TlsCertificatesAndHostnamesCertificateResponseSingle5RemoveMatch
{
    public string $account_id;
    public string $mtls_certificate_id;
}

/** TlsCertificatesAndHostnamesCertificateResponseSinglePost entity data model. */
class TlsCertificatesAndHostnamesCertificateResponseSinglePost
{
    public bool $ca;
    public string $certificates;
    public ?string $name = null;
    public ?string $private_key = null;
}

/** Request payload for TlsCertificatesAndHostnamesCertificateResponseSinglePost#create. */
class TlsCertificatesAndHostnamesCertificateResponseSinglePostCreateData
{
    public string $account_id;
    public bool $ca;
    public string $certificates;
    public ?string $name = null;
    public ?string $private_key = null;
}

/** TlsCertificatesAndHostnamesCertificateRevoke entity data model. */
class TlsCertificatesAndHostnamesCertificateRevoke
{
}

/** Request payload for TlsCertificatesAndHostnamesCertificateRevoke#remove. */
class TlsCertificatesAndHostnamesCertificateRevokeRemoveMatch
{
    public string $certificate_id;
}

/** TlsCertificatesAndHostnamesClientCertificateResponse entity data model. */
class TlsCertificatesAndHostnamesClientCertificateResponse
{
    public ?array $result = null;
}

/** Request payload for TlsCertificatesAndHostnamesClientCertificateResponse#list. */
class TlsCertificatesAndHostnamesClientCertificateResponseListMatch
{
    public string $zone_id;
    public ?int $limit = null;
    public ?int $offset = null;
    public ?float $page = null;
    public ?float $per_page = null;
    public ?string $status = null;
}

/** TlsCertificatesAndHostnamesClientCertificateResponseSingle entity data model. */
class TlsCertificatesAndHostnamesClientCertificateResponseSingle
{
    public string $csr;
    public ?bool $reactivate = null;
    public ?array $result = null;
    public int $validity_days;
}

/** Request payload for TlsCertificatesAndHostnamesClientCertificateResponseSingle#load. */
class TlsCertificatesAndHostnamesClientCertificateResponseSingleLoadMatch
{
    public string $client_certificate_id;
    public string $zone_id;
}

/** Request payload for TlsCertificatesAndHostnamesClientCertificateResponseSingle#create. */
class TlsCertificatesAndHostnamesClientCertificateResponseSingleCreateData
{
    public string $zone_id;
    public string $csr;
    public ?bool $reactivate = null;
    public ?array $result = null;
    public int $validity_days;
}

/** Request payload for TlsCertificatesAndHostnamesClientCertificateResponseSingle#update. */
class TlsCertificatesAndHostnamesClientCertificateResponseSingleUpdateData
{
    public string $client_certificate_id;
    public string $zone_id;
    public ?string $csr = null;
    public ?bool $reactivate = null;
    public ?array $result = null;
    public ?int $validity_days = null;
}

/** Request payload for TlsCertificatesAndHostnamesClientCertificateResponseSingle#remove. */
class TlsCertificatesAndHostnamesClientCertificateResponseSingleRemoveMatch
{
    public string $client_certificate_id;
    public string $zone_id;
}

/** TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse entity data model. */
class TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse
{
    public ?array $emails = null;
    public bool $enabled;
    public ?array $result = null;
}

/** Request payload for TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse#load. */
class TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseLoadMatch
{
    public string $zone_id;
}

/** Request payload for TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse#update. */
class TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseUpdateData
{
    public string $zone_id;
    public ?array $emails = null;
    public ?bool $enabled = null;
    public ?array $result = null;
}

/** TlsCertificatesAndHostnamesCustomCsrResponseCollection entity data model. */
class TlsCertificatesAndHostnamesCustomCsrResponseCollection
{
    public ?array $result = null;
}

/** Request payload for TlsCertificatesAndHostnamesCustomCsrResponseCollection#list. */
class TlsCertificatesAndHostnamesCustomCsrResponseCollectionListMatch
{
    public string $zone_id;
    public ?float $page = null;
    public ?float $per_page = null;
}

/** TlsCertificatesAndHostnamesCustomCsrResponseCollection2 entity data model. */
class TlsCertificatesAndHostnamesCustomCsrResponseCollection2
{
    public ?array $result = null;
}

/** Request payload for TlsCertificatesAndHostnamesCustomCsrResponseCollection2#list. */
class TlsCertificatesAndHostnamesCustomCsrResponseCollection2ListMatch
{
    public string $account_id;
    public ?string $direction = null;
    public ?string $order = null;
    public ?float $page = null;
    public ?float $per_page = null;
}

/** TlsCertificatesAndHostnamesCustomCsrResponseIdOnly entity data model. */
class TlsCertificatesAndHostnamesCustomCsrResponseIdOnly
{
}

/** Request payload for TlsCertificatesAndHostnamesCustomCsrResponseIdOnly#remove. */
class TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyRemoveMatch
{
    public ?string $account_id = null;
    public string $custom_csr_id;
    public ?string $zone_id = null;
}

/** TlsCertificatesAndHostnamesCustomCsrResponseSingle entity data model. */
class TlsCertificatesAndHostnamesCustomCsrResponseSingle
{
    public string $common_name;
    public string $country;
    public ?string $key_type = null;
    public string $locality;
    public string $organization;
    public ?string $organizational_unit = null;
    public array $result;
    public array $sans;
    public string $state;
}

/** Request payload for TlsCertificatesAndHostnamesCustomCsrResponseSingle#load. */
class TlsCertificatesAndHostnamesCustomCsrResponseSingleLoadMatch
{
    public string $custom_csr_id;
    public string $zone_id;
}

/** Request payload for TlsCertificatesAndHostnamesCustomCsrResponseSingle#create. */
class TlsCertificatesAndHostnamesCustomCsrResponseSingleCreateData
{
    public string $zone_id;
    public string $common_name;
    public string $country;
    public ?string $key_type = null;
    public string $locality;
    public string $organization;
    public ?string $organizational_unit = null;
    public array $result;
    public array $sans;
    public string $state;
}

/** TlsCertificatesAndHostnamesCustomCsrResponseSingle2 entity data model. */
class TlsCertificatesAndHostnamesCustomCsrResponseSingle2
{
    public string $common_name;
    public string $country;
    public ?string $description = null;
    public ?string $key_type = null;
    public string $locality;
    public ?string $name = null;
    public string $organization;
    public ?string $organizational_unit = null;
    public array $result;
    public array $sans;
    public string $state;
}

/** Request payload for TlsCertificatesAndHostnamesCustomCsrResponseSingle2#load. */
class TlsCertificatesAndHostnamesCustomCsrResponseSingle2LoadMatch
{
    public string $account_id;
    public string $custom_csr_id;
}

/** Request payload for TlsCertificatesAndHostnamesCustomCsrResponseSingle2#create. */
class TlsCertificatesAndHostnamesCustomCsrResponseSingle2CreateData
{
    public string $account_id;
    public string $common_name;
    public string $country;
    public ?string $description = null;
    public ?string $key_type = null;
    public string $locality;
    public ?string $name = null;
    public string $organization;
    public ?string $organizational_unit = null;
    public array $result;
    public array $sans;
    public string $state;
}

/** TlsCertificatesAndHostnamesCustomHostnameQuota entity data model. */
class TlsCertificatesAndHostnamesCustomHostnameQuota
{
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
}

/** Request payload for TlsCertificatesAndHostnamesCustomHostnameQuota#list. */
class TlsCertificatesAndHostnamesCustomHostnameQuotaListMatch
{
    public string $zone_id;
}

/** TlsCertificatesAndHostnamesCustomHostnameResponseCollection entity data model. */
class TlsCertificatesAndHostnamesCustomHostnameResponseCollection
{
    public array $errors;
    public array $messages;
    public ?array $result = null;
    public ?array $result_info = null;
    public bool $success;
}

/** Request payload for TlsCertificatesAndHostnamesCustomHostnameResponseCollection#list. */
class TlsCertificatesAndHostnamesCustomHostnameResponseCollectionListMatch
{
    public string $zone_id;
    public ?string $certificate_authority = null;
    public ?string $custom_origin_server = null;
    public ?string $direction = null;
    public ?string $hostname = null;
    public ?string $hostname_contain = null;
    public ?string $hostname_exact = null;
    public ?string $hostname_starts_with = null;
    public ?string $hostname_status = null;
    public ?string $id = null;
    public ?string $order = null;
    public ?float $page = null;
    public ?float $per_page = null;
    public ?int $ssl = null;
    public ?string $ssl_status = null;
    public ?bool $wildcard = null;
}

/** TlsCertificatesAndHostnamesCustomHostnameResponseSingle entity data model. */
class TlsCertificatesAndHostnamesCustomHostnameResponseSingle
{
    public ?array $custom_metadata = null;
    public ?string $custom_origin_server = null;
    public ?string $custom_origin_sni = null;
    public array $errors;
    public string $hostname;
    public array $messages;
    public ?array $result = null;
    public ?array $ssl = null;
    public bool $success;
}

/** Request payload for TlsCertificatesAndHostnamesCustomHostnameResponseSingle#load. */
class TlsCertificatesAndHostnamesCustomHostnameResponseSingleLoadMatch
{
    public string $custom_hostname_id;
    public string $zone_id;
}

/** Request payload for TlsCertificatesAndHostnamesCustomHostnameResponseSingle#create. */
class TlsCertificatesAndHostnamesCustomHostnameResponseSingleCreateData
{
    public string $zone_id;
    public ?array $custom_metadata = null;
    public ?string $custom_origin_server = null;
    public ?string $custom_origin_sni = null;
    public array $errors;
    public string $hostname;
    public array $messages;
    public ?array $result = null;
    public ?array $ssl = null;
    public bool $success;
}

/** Request payload for TlsCertificatesAndHostnamesCustomHostnameResponseSingle#update. */
class TlsCertificatesAndHostnamesCustomHostnameResponseSingleUpdateData
{
    public string $custom_hostname_id;
    public string $zone_id;
    public ?array $custom_metadata = null;
    public ?string $custom_origin_server = null;
    public ?string $custom_origin_sni = null;
    public ?array $errors = null;
    public ?string $hostname = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?array $ssl = null;
    public ?bool $success = null;
}

/** TlsCertificatesAndHostnamesCustomTrustStoreResponse entity data model. */
class TlsCertificatesAndHostnamesCustomTrustStoreResponse
{
    public ?array $result = null;
}

/** Request payload for TlsCertificatesAndHostnamesCustomTrustStoreResponse#list. */
class TlsCertificatesAndHostnamesCustomTrustStoreResponseListMatch
{
    public string $zone_id;
    public ?int $limit = null;
    public ?int $offset = null;
    public ?float $page = null;
    public ?float $per_page = null;
}

/** TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly entity data model. */
class TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly
{
}

/** Request payload for TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly#remove. */
class TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyRemoveMatch
{
    public string $custom_origin_trust_store_id;
    public string $zone_id;
}

/** TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle entity data model. */
class TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle
{
    public string $certificate;
    public array $result;
}

/** Request payload for TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle#load. */
class TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleLoadMatch
{
    public string $custom_origin_trust_store_id;
    public string $zone_id;
}

/** Request payload for TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle#create. */
class TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleCreateData
{
    public string $zone_id;
    public string $certificate;
    public array $result;
}

/** TlsCertificatesAndHostnamesDcvDelegation entity data model. */
class TlsCertificatesAndHostnamesDcvDelegation
{
    public ?array $result = null;
}

/** Request payload for TlsCertificatesAndHostnamesDcvDelegation#load. */
class TlsCertificatesAndHostnamesDcvDelegationLoadMatch
{
    public string $zone_id;
}

/** TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack entity data model. */
class TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack
{
    public ?string $id = null;
}

/** Request payload for TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack#remove. */
class TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackRemoveMatch
{
    public string $id;
    public string $zone_id;
}

/** TlsCertificatesAndHostnamesEnabled entity data model. */
class TlsCertificatesAndHostnamesEnabled
{
    public bool $enabled;
    public ?array $result = null;
}

/** Request payload for TlsCertificatesAndHostnamesEnabled#load. */
class TlsCertificatesAndHostnamesEnabledLoadMatch
{
    public string $zone_id;
}

/** Request payload for TlsCertificatesAndHostnamesEnabled#update. */
class TlsCertificatesAndHostnamesEnabledUpdateData
{
    public string $zone_id;
    public ?bool $enabled = null;
    public ?array $result = null;
}

/** TlsCertificatesAndHostnamesFallbackOrigin entity data model. */
class TlsCertificatesAndHostnamesFallbackOrigin
{
    public string $origin;
    public ?array $result = null;
}

/** Request payload for TlsCertificatesAndHostnamesFallbackOrigin#load. */
class TlsCertificatesAndHostnamesFallbackOriginLoadMatch
{
    public string $zone_id;
}

/** Request payload for TlsCertificatesAndHostnamesFallbackOrigin#update. */
class TlsCertificatesAndHostnamesFallbackOriginUpdateData
{
    public string $zone_id;
    public ?string $origin = null;
    public ?array $result = null;
}

/** Request payload for TlsCertificatesAndHostnamesFallbackOrigin#remove. */
class TlsCertificatesAndHostnamesFallbackOriginRemoveMatch
{
    public string $zone_id;
}

/** TlsCertificatesAndHostnamesHostnameAopResponseCollection entity data model. */
class TlsCertificatesAndHostnamesHostnameAopResponseCollection
{
    public array $config;
}

/** Request payload for TlsCertificatesAndHostnamesHostnameAopResponseCollection#update. */
class TlsCertificatesAndHostnamesHostnameAopResponseCollectionUpdateData
{
    public string $zone_id;
    public ?array $config = null;
}

/** TlsCertificatesAndHostnamesHostnameAopSingle entity data model. */
class TlsCertificatesAndHostnamesHostnameAopSingle
{
    public ?array $result = null;
}

/** Request payload for TlsCertificatesAndHostnamesHostnameAopSingle#load. */
class TlsCertificatesAndHostnamesHostnameAopSingleLoadMatch
{
    public string $hostname;
    public string $zone_id;
}

/** TlsCertificatesAndHostnamesHostnameAssocResponseCollection entity data model. */
class TlsCertificatesAndHostnamesHostnameAssocResponseCollection
{
    public ?array $result = null;
    public ?array $result_info = null;
}

/** Request payload for TlsCertificatesAndHostnamesHostnameAssocResponseCollection#list. */
class TlsCertificatesAndHostnamesHostnameAssocResponseCollectionListMatch
{
    public string $zone_id;
    public ?float $page = null;
    public ?float $per_page = null;
    public ?string $status = null;
}

/** TlsCertificatesAndHostnamesHostnameAssociation entity data model. */
class TlsCertificatesAndHostnamesHostnameAssociation
{
    public ?array $hostnames = null;
    public ?string $mtls_certificate_id = null;
    public ?array $result = null;
}

/** Request payload for TlsCertificatesAndHostnamesHostnameAssociation#load. */
class TlsCertificatesAndHostnamesHostnameAssociationLoadMatch
{
    public string $zone_id;
    public ?string $mtls_certificate_id = null;
}

/** Request payload for TlsCertificatesAndHostnamesHostnameAssociation#update. */
class TlsCertificatesAndHostnamesHostnameAssociationUpdateData
{
    public string $zone_id;
    public ?array $hostnames = null;
    public ?string $mtls_certificate_id = null;
    public ?array $result = null;
}

/** TlsCertificatesAndHostnamesKeylessResponseCollection entity data model. */
class TlsCertificatesAndHostnamesKeylessResponseCollection
{
    public ?array $result = null;
}

/** Request payload for TlsCertificatesAndHostnamesKeylessResponseCollection#list. */
class TlsCertificatesAndHostnamesKeylessResponseCollectionListMatch
{
    public string $zone_id;
}

/** TlsCertificatesAndHostnamesKeylessResponseSingle entity data model. */
class TlsCertificatesAndHostnamesKeylessResponseSingle
{
    public ?string $bundle_method = null;
    public string $certificate;
    public ?bool $enabled = null;
    public string $host;
    public ?string $name = null;
    public float $port;
    public ?array $result = null;
    public array $tunnel;
}

/** Request payload for TlsCertificatesAndHostnamesKeylessResponseSingle#load. */
class TlsCertificatesAndHostnamesKeylessResponseSingleLoadMatch
{
    public string $keyless_certificate_id;
    public string $zone_id;
}

/** Request payload for TlsCertificatesAndHostnamesKeylessResponseSingle#create. */
class TlsCertificatesAndHostnamesKeylessResponseSingleCreateData
{
    public string $zone_id;
    public ?string $bundle_method = null;
    public string $certificate;
    public ?bool $enabled = null;
    public string $host;
    public ?string $name = null;
    public float $port;
    public ?array $result = null;
    public array $tunnel;
}

/** Request payload for TlsCertificatesAndHostnamesKeylessResponseSingle#update. */
class TlsCertificatesAndHostnamesKeylessResponseSingleUpdateData
{
    public string $keyless_certificate_id;
    public string $zone_id;
    public ?string $bundle_method = null;
    public ?string $certificate = null;
    public ?bool $enabled = null;
    public ?string $host = null;
    public ?string $name = null;
    public ?float $port = null;
    public ?array $result = null;
    public ?array $tunnel = null;
}

/** TlsCertificatesAndHostnamesKeylessResponseSingleId entity data model. */
class TlsCertificatesAndHostnamesKeylessResponseSingleId
{
}

/** Request payload for TlsCertificatesAndHostnamesKeylessResponseSingleId#remove. */
class TlsCertificatesAndHostnamesKeylessResponseSingleIdRemoveMatch
{
    public string $keyless_certificate_id;
    public string $zone_id;
}

/** TlsCertificatesAndHostnamesPerHostnameSetting entity data model. */
class TlsCertificatesAndHostnamesPerHostnameSetting
{
    public ?string $id = null;
    public ?array $result = null;
    public mixed $value;
}

/** Request payload for TlsCertificatesAndHostnamesPerHostnameSetting#load. */
class TlsCertificatesAndHostnamesPerHostnameSettingLoadMatch
{
    public string $hostname;
    public string $setting_id;
    public string $zone_id;
}

/** Request payload for TlsCertificatesAndHostnamesPerHostnameSetting#update. */
class TlsCertificatesAndHostnamesPerHostnameSettingUpdateData
{
    public string $hostname;
    public string $setting_id;
    public string $zone_id;
    public ?string $id = null;
    public ?array $result = null;
    public mixed $value = null;
}

/** TlsCertificatesAndHostnamesPerHostnameSettingsResponse entity data model. */
class TlsCertificatesAndHostnamesPerHostnameSettingsResponse
{
    public ?array $result = null;
    public ?array $result_info = null;
}

/** Request payload for TlsCertificatesAndHostnamesPerHostnameSettingsResponse#load. */
class TlsCertificatesAndHostnamesPerHostnameSettingsResponseLoadMatch
{
    public string $setting_id;
    public string $zone_id;
}

/** TlsCertificatesAndHostnamesPerHostnameSettingsResponse2 entity data model. */
class TlsCertificatesAndHostnamesPerHostnameSettingsResponse2
{
    public ?string $id = null;
}

/** Request payload for TlsCertificatesAndHostnamesPerHostnameSettingsResponse2#remove. */
class TlsCertificatesAndHostnamesPerHostnameSettingsResponse2RemoveMatch
{
    public string $hostname;
    public string $setting_id;
    public string $zone_id;
}

/** TlsCertificatesAndHostnamesSslUniversalSetting entity data model. */
class TlsCertificatesAndHostnamesSslUniversalSetting
{
    public ?bool $enabled = null;
    public ?array $result = null;
}

/** Request payload for TlsCertificatesAndHostnamesSslUniversalSetting#load. */
class TlsCertificatesAndHostnamesSslUniversalSettingLoadMatch
{
    public string $zone_id;
}

/** Request payload for TlsCertificatesAndHostnamesSslUniversalSetting#update. */
class TlsCertificatesAndHostnamesSslUniversalSettingUpdateData
{
    public string $zone_id;
    public ?bool $enabled = null;
    public ?array $result = null;
}

/** TlsCertificatesAndHostnamesSslValidationMethodResponse entity data model. */
class TlsCertificatesAndHostnamesSslValidationMethodResponse
{
    public string $validation_method;
}

/** Request payload for TlsCertificatesAndHostnamesSslValidationMethodResponse#update. */
class TlsCertificatesAndHostnamesSslValidationMethodResponseUpdateData
{
    public string $certificate_pack_id;
    public string $zone_id;
    public ?string $validation_method = null;
}

/** TlsCertificatesAndHostnamesSslVerificationResponseCollection entity data model. */
class TlsCertificatesAndHostnamesSslVerificationResponseCollection
{
    public ?array $result = null;
}

/** Request payload for TlsCertificatesAndHostnamesSslVerificationResponseCollection#list. */
class TlsCertificatesAndHostnamesSslVerificationResponseCollectionListMatch
{
    public string $zone_id;
    public ?bool $retry = null;
}

/** TlsCertificatesAndHostnamesTotalTlsSetting entity data model. */
class TlsCertificatesAndHostnamesTotalTlsSetting
{
    public ?string $certificate_authority = null;
    public bool $enabled;
    public ?array $result = null;
}

/** Request payload for TlsCertificatesAndHostnamesTotalTlsSetting#load. */
class TlsCertificatesAndHostnamesTotalTlsSettingLoadMatch
{
    public string $zone_id;
}

/** Request payload for TlsCertificatesAndHostnamesTotalTlsSetting#create. */
class TlsCertificatesAndHostnamesTotalTlsSettingCreateData
{
    public string $zone_id;
    public ?string $certificate_authority = null;
    public bool $enabled;
    public ?array $result = null;
}

