# Typed models for the CloudflareSsl SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class CacheApiResponseSingleId(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool
    value: str


class CacheApiResponseSingleIdUpdateDataRequired(TypedDict):
    zone_id: str


class CacheApiResponseSingleIdUpdateData(CacheApiResponseSingleIdUpdateDataRequired, total=False):
    errors: list
    messages: list
    result: dict
    success: bool
    value: str


class CacheAutoOriginTlsKex(TypedDict):
    enabled: bool
    errors: list
    messages: list
    result: dict
    success: bool


class CacheAutoOriginTlsKexListMatch(TypedDict):
    zone_id: str


class CacheAutoOriginTlsKexUpdateDataRequired(TypedDict):
    zone_id: str


class CacheAutoOriginTlsKexUpdateData(CacheAutoOriginTlsKexUpdateDataRequired, total=False):
    enabled: bool
    errors: list
    messages: list
    result: dict
    success: bool


class CustomHostname(TypedDict, total=False):
    id: str


class CustomHostnameRemoveMatch(TypedDict):
    id: str
    zone_id: str


class CustomHostnameForAZone(TypedDict):
    custom_certificate: str
    custom_key: str


class CustomHostnameForAZoneUpdateDataRequired(TypedDict):
    certificate_id: str
    certificate_pack_id: str
    custom_hostname_id: str
    zone_id: str


class CustomHostnameForAZoneUpdateData(CustomHostnameForAZoneUpdateDataRequired, total=False):
    custom_certificate: str
    custom_key: str


class CustomHostnameForAZoneRemoveMatch(TypedDict):
    certificate_id: str
    certificate_pack_id: str
    custom_hostname_id: str
    zone_id: str


class OriginTlRequired(TypedDict):
    value: list


class OriginTl(OriginTlRequired, total=False):
    result: dict


class OriginTlLoadMatch(TypedDict):
    zone_id: str


class OriginTlUpdateDataRequired(TypedDict):
    zone_id: str


class OriginTlUpdateData(OriginTlUpdateDataRequired, total=False):
    result: dict
    value: list


class OriginTlRemoveMatch(TypedDict):
    zone_id: str


class Recommendation(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class RecommendationListMatch(TypedDict):
    zone_id: str


class SslAutomaticMode(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class SslAutomaticModeListMatch(TypedDict):
    zone_id: str


class TlsCertificatesAndHostnamesAdvancedCertificatePackResponseRequired(TypedDict):
    certificate_authority: str
    hosts: list
    type: str
    validation_method: str
    validity_days: int


class TlsCertificatesAndHostnamesAdvancedCertificatePackResponse(TlsCertificatesAndHostnamesAdvancedCertificatePackResponseRequired, total=False):
    cloudflare_branding: bool


class TlsCertificatesAndHostnamesAdvancedCertificatePackResponseCreateDataRequired(TypedDict):
    zone_id: str
    certificate_authority: str
    hosts: list
    type: str
    validation_method: str
    validity_days: int


class TlsCertificatesAndHostnamesAdvancedCertificatePackResponseCreateData(TlsCertificatesAndHostnamesAdvancedCertificatePackResponseCreateDataRequired, total=False):
    cloudflare_branding: bool


class TlsCertificatesAndHostnamesAdvancedCertificatePackResponseUpdateDataRequired(TypedDict):
    certificate_pack_id: str
    zone_id: str


class TlsCertificatesAndHostnamesAdvancedCertificatePackResponseUpdateData(TlsCertificatesAndHostnamesAdvancedCertificatePackResponseUpdateDataRequired, total=False):
    certificate_authority: str
    cloudflare_branding: bool
    hosts: list
    type: str
    validation_method: str
    validity_days: int


class TlsCertificatesAndHostnamesAssociationResponseCollection(TypedDict, total=False):
    result: list


class TlsCertificatesAndHostnamesAssociationResponseCollectionListMatch(TypedDict):
    account_id: str
    mtls_certificate_id: str


class TlsCertificatesAndHostnamesCertificateAnalyze(TypedDict, total=False):
    bundle_method: str
    certificate: str


class TlsCertificatesAndHostnamesCertificateAnalyzeCreateDataRequired(TypedDict):
    zone_id: str


class TlsCertificatesAndHostnamesCertificateAnalyzeCreateData(TlsCertificatesAndHostnamesCertificateAnalyzeCreateDataRequired, total=False):
    bundle_method: str
    certificate: str


class TlsCertificatesAndHostnamesCertificatePackQuota(TypedDict, total=False):
    result: dict


class TlsCertificatesAndHostnamesCertificatePackQuotaLoadMatch(TypedDict):
    zone_id: str


class TlsCertificatesAndHostnamesCertificatePackResponseCollection(TypedDict, total=False):
    result: list


class TlsCertificatesAndHostnamesCertificatePackResponseCollectionListMatchRequired(TypedDict):
    zone_id: str


class TlsCertificatesAndHostnamesCertificatePackResponseCollectionListMatch(TlsCertificatesAndHostnamesCertificatePackResponseCollectionListMatchRequired, total=False):
    deploy: str
    page: float
    per_page: float
    status: str


class TlsCertificatesAndHostnamesCertificatePackResponseSingle(TypedDict):
    result: dict


class TlsCertificatesAndHostnamesCertificatePackResponseSingleLoadMatch(TypedDict):
    certificate_pack_id: str
    zone_id: str


class TlsCertificatesAndHostnamesCertificateResponseCollectionRequired(TypedDict):
    certificates: list


class TlsCertificatesAndHostnamesCertificateResponseCollection(TlsCertificatesAndHostnamesCertificateResponseCollectionRequired, total=False):
    result: list


class TlsCertificatesAndHostnamesCertificateResponseCollectionListMatchRequired(TypedDict):
    zone_id: str


class TlsCertificatesAndHostnamesCertificateResponseCollectionListMatch(TlsCertificatesAndHostnamesCertificateResponseCollectionListMatchRequired, total=False):
    match: str
    page: float
    per_page: float
    status: str


class TlsCertificatesAndHostnamesCertificateResponseCollectionUpdateDataRequired(TypedDict):
    zone_id: str


class TlsCertificatesAndHostnamesCertificateResponseCollectionUpdateData(TlsCertificatesAndHostnamesCertificateResponseCollectionUpdateDataRequired, total=False):
    certificates: list
    result: list


class TlsCertificatesAndHostnamesCertificateResponseCollection3(TypedDict, total=False):
    result: list


class TlsCertificatesAndHostnamesCertificateResponseCollection3ListMatch(TypedDict):
    zone_id: str


class TlsCertificatesAndHostnamesCertificateResponseCollection4(TypedDict, total=False):
    result: list


class TlsCertificatesAndHostnamesCertificateResponseCollection4ListMatch(TypedDict):
    zone_id: str


class TlsCertificatesAndHostnamesCertificateResponseCollection5(TypedDict, total=False):
    result: list
    result_info: dict


class TlsCertificatesAndHostnamesCertificateResponseCollection5ListMatchRequired(TypedDict):
    account_id: str


class TlsCertificatesAndHostnamesCertificateResponseCollection5ListMatch(TlsCertificatesAndHostnamesCertificateResponseCollection5ListMatchRequired, total=False):
    type: list


class TlsCertificatesAndHostnamesCertificateResponseIdOnly(TypedDict):
    pass


class TlsCertificatesAndHostnamesCertificateResponseIdOnlyRemoveMatch(TypedDict):
    custom_certificate_id: str
    zone_id: str


class TlsCertificatesAndHostnamesCertificateResponseSingleRequired(TypedDict):
    certificate: str
    result: dict


class TlsCertificatesAndHostnamesCertificateResponseSingle(TlsCertificatesAndHostnamesCertificateResponseSingleRequired, total=False):
    bundle_method: str
    custom_csr_id: str
    deploy: str
    geo_restrictions: dict
    policy: str
    private_key: str
    type: str


class TlsCertificatesAndHostnamesCertificateResponseSingleLoadMatch(TypedDict):
    custom_certificate_id: str
    zone_id: str


class TlsCertificatesAndHostnamesCertificateResponseSingleCreateDataRequired(TypedDict):
    zone_id: str
    certificate: str
    result: dict


class TlsCertificatesAndHostnamesCertificateResponseSingleCreateData(TlsCertificatesAndHostnamesCertificateResponseSingleCreateDataRequired, total=False):
    bundle_method: str
    custom_csr_id: str
    deploy: str
    geo_restrictions: dict
    policy: str
    private_key: str
    type: str


class TlsCertificatesAndHostnamesCertificateResponseSingleUpdateDataRequired(TypedDict):
    custom_certificate_id: str
    zone_id: str


class TlsCertificatesAndHostnamesCertificateResponseSingleUpdateData(TlsCertificatesAndHostnamesCertificateResponseSingleUpdateDataRequired, total=False):
    bundle_method: str
    certificate: str
    custom_csr_id: str
    deploy: str
    geo_restrictions: dict
    policy: str
    private_key: str
    result: dict
    type: str


class TlsCertificatesAndHostnamesCertificateResponseSingle2Required(TypedDict):
    csr: str
    hostnames: list
    request_type: str
    result: dict


class TlsCertificatesAndHostnamesCertificateResponseSingle2(TlsCertificatesAndHostnamesCertificateResponseSingle2Required, total=False):
    requested_validity: float


class TlsCertificatesAndHostnamesCertificateResponseSingle2LoadMatch(TypedDict):
    certificate_id: str


class TlsCertificatesAndHostnamesCertificateResponseSingle2ListMatchRequired(TypedDict):
    zone_id: str


class TlsCertificatesAndHostnamesCertificateResponseSingle2ListMatch(TlsCertificatesAndHostnamesCertificateResponseSingle2ListMatchRequired, total=False):
    limit: int
    offset: int
    page: float
    per_page: float


class TlsCertificatesAndHostnamesCertificateResponseSingle2CreateDataRequired(TypedDict):
    csr: str
    hostnames: list
    request_type: str
    result: dict


class TlsCertificatesAndHostnamesCertificateResponseSingle2CreateData(TlsCertificatesAndHostnamesCertificateResponseSingle2CreateDataRequired, total=False):
    requested_validity: float


class TlsCertificatesAndHostnamesCertificateResponseSingle3Required(TypedDict):
    certificate: str
    private_key: str


class TlsCertificatesAndHostnamesCertificateResponseSingle3(TlsCertificatesAndHostnamesCertificateResponseSingle3Required, total=False):
    result: dict


class TlsCertificatesAndHostnamesCertificateResponseSingle3LoadMatch(TypedDict):
    certificate_id: str
    zone_id: str


class TlsCertificatesAndHostnamesCertificateResponseSingle3CreateDataRequired(TypedDict):
    zone_id: str
    certificate: str
    private_key: str


class TlsCertificatesAndHostnamesCertificateResponseSingle3CreateData(TlsCertificatesAndHostnamesCertificateResponseSingle3CreateDataRequired, total=False):
    result: dict


class TlsCertificatesAndHostnamesCertificateResponseSingle3RemoveMatch(TypedDict):
    certificate_id: str
    zone_id: str


class TlsCertificatesAndHostnamesCertificateResponseSingle4Required(TypedDict):
    certificate: str
    private_key: str


class TlsCertificatesAndHostnamesCertificateResponseSingle4(TlsCertificatesAndHostnamesCertificateResponseSingle4Required, total=False):
    result: dict


class TlsCertificatesAndHostnamesCertificateResponseSingle4LoadMatch(TypedDict):
    certificate_id: str
    zone_id: str


class TlsCertificatesAndHostnamesCertificateResponseSingle4CreateDataRequired(TypedDict):
    zone_id: str
    certificate: str
    private_key: str


class TlsCertificatesAndHostnamesCertificateResponseSingle4CreateData(TlsCertificatesAndHostnamesCertificateResponseSingle4CreateDataRequired, total=False):
    result: dict


class TlsCertificatesAndHostnamesCertificateResponseSingle4RemoveMatch(TypedDict):
    certificate_id: str
    zone_id: str


class TlsCertificatesAndHostnamesCertificateResponseSingle5(TypedDict, total=False):
    result: dict


class TlsCertificatesAndHostnamesCertificateResponseSingle5LoadMatch(TypedDict):
    account_id: str
    mtls_certificate_id: str


class TlsCertificatesAndHostnamesCertificateResponseSingle5RemoveMatch(TypedDict):
    account_id: str
    mtls_certificate_id: str


class TlsCertificatesAndHostnamesCertificateResponseSinglePostRequired(TypedDict):
    ca: bool
    certificates: str


class TlsCertificatesAndHostnamesCertificateResponseSinglePost(TlsCertificatesAndHostnamesCertificateResponseSinglePostRequired, total=False):
    name: str
    private_key: str


class TlsCertificatesAndHostnamesCertificateResponseSinglePostCreateDataRequired(TypedDict):
    account_id: str
    ca: bool
    certificates: str


class TlsCertificatesAndHostnamesCertificateResponseSinglePostCreateData(TlsCertificatesAndHostnamesCertificateResponseSinglePostCreateDataRequired, total=False):
    name: str
    private_key: str


class TlsCertificatesAndHostnamesCertificateRevoke(TypedDict):
    pass


class TlsCertificatesAndHostnamesCertificateRevokeRemoveMatch(TypedDict):
    certificate_id: str


class TlsCertificatesAndHostnamesClientCertificateResponse(TypedDict, total=False):
    result: list


class TlsCertificatesAndHostnamesClientCertificateResponseListMatchRequired(TypedDict):
    zone_id: str


class TlsCertificatesAndHostnamesClientCertificateResponseListMatch(TlsCertificatesAndHostnamesClientCertificateResponseListMatchRequired, total=False):
    limit: int
    offset: int
    page: float
    per_page: float
    status: str


class TlsCertificatesAndHostnamesClientCertificateResponseSingleRequired(TypedDict):
    csr: str
    validity_days: int


class TlsCertificatesAndHostnamesClientCertificateResponseSingle(TlsCertificatesAndHostnamesClientCertificateResponseSingleRequired, total=False):
    reactivate: bool
    result: dict


class TlsCertificatesAndHostnamesClientCertificateResponseSingleLoadMatch(TypedDict):
    client_certificate_id: str
    zone_id: str


class TlsCertificatesAndHostnamesClientCertificateResponseSingleCreateDataRequired(TypedDict):
    zone_id: str
    csr: str
    validity_days: int


class TlsCertificatesAndHostnamesClientCertificateResponseSingleCreateData(TlsCertificatesAndHostnamesClientCertificateResponseSingleCreateDataRequired, total=False):
    reactivate: bool
    result: dict


class TlsCertificatesAndHostnamesClientCertificateResponseSingleUpdateDataRequired(TypedDict):
    client_certificate_id: str
    zone_id: str


class TlsCertificatesAndHostnamesClientCertificateResponseSingleUpdateData(TlsCertificatesAndHostnamesClientCertificateResponseSingleUpdateDataRequired, total=False):
    csr: str
    reactivate: bool
    result: dict
    validity_days: int


class TlsCertificatesAndHostnamesClientCertificateResponseSingleRemoveMatch(TypedDict):
    client_certificate_id: str
    zone_id: str


class TlsCertificatesAndHostnamesCustomCsrResponseCollection(TypedDict, total=False):
    result: list


class TlsCertificatesAndHostnamesCustomCsrResponseCollectionListMatchRequired(TypedDict):
    zone_id: str


class TlsCertificatesAndHostnamesCustomCsrResponseCollectionListMatch(TlsCertificatesAndHostnamesCustomCsrResponseCollectionListMatchRequired, total=False):
    page: float
    per_page: float


class TlsCertificatesAndHostnamesCustomCsrResponseCollection2(TypedDict, total=False):
    result: list


class TlsCertificatesAndHostnamesCustomCsrResponseCollection2ListMatchRequired(TypedDict):
    account_id: str


class TlsCertificatesAndHostnamesCustomCsrResponseCollection2ListMatch(TlsCertificatesAndHostnamesCustomCsrResponseCollection2ListMatchRequired, total=False):
    direction: str
    order: str
    page: float
    per_page: float


class TlsCertificatesAndHostnamesCustomCsrResponseIdOnly(TypedDict):
    pass


class TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyRemoveMatchRequired(TypedDict):
    custom_csr_id: str


class TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyRemoveMatch(TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyRemoveMatchRequired, total=False):
    account_id: str
    zone_id: str


class TlsCertificatesAndHostnamesCustomCsrResponseSingleRequired(TypedDict):
    common_name: str
    country: str
    locality: str
    organization: str
    result: dict
    sans: list
    state: str


class TlsCertificatesAndHostnamesCustomCsrResponseSingle(TlsCertificatesAndHostnamesCustomCsrResponseSingleRequired, total=False):
    key_type: str
    organizational_unit: str


class TlsCertificatesAndHostnamesCustomCsrResponseSingleLoadMatch(TypedDict):
    custom_csr_id: str
    zone_id: str


class TlsCertificatesAndHostnamesCustomCsrResponseSingleCreateDataRequired(TypedDict):
    zone_id: str
    common_name: str
    country: str
    locality: str
    organization: str
    result: dict
    sans: list
    state: str


class TlsCertificatesAndHostnamesCustomCsrResponseSingleCreateData(TlsCertificatesAndHostnamesCustomCsrResponseSingleCreateDataRequired, total=False):
    key_type: str
    organizational_unit: str


class TlsCertificatesAndHostnamesCustomCsrResponseSingle2Required(TypedDict):
    common_name: str
    country: str
    locality: str
    organization: str
    result: dict
    sans: list
    state: str


class TlsCertificatesAndHostnamesCustomCsrResponseSingle2(TlsCertificatesAndHostnamesCustomCsrResponseSingle2Required, total=False):
    description: str
    key_type: str
    name: str
    organizational_unit: str


class TlsCertificatesAndHostnamesCustomCsrResponseSingle2LoadMatch(TypedDict):
    account_id: str
    custom_csr_id: str


class TlsCertificatesAndHostnamesCustomCsrResponseSingle2CreateDataRequired(TypedDict):
    account_id: str
    common_name: str
    country: str
    locality: str
    organization: str
    result: dict
    sans: list
    state: str


class TlsCertificatesAndHostnamesCustomCsrResponseSingle2CreateData(TlsCertificatesAndHostnamesCustomCsrResponseSingle2CreateDataRequired, total=False):
    description: str
    key_type: str
    name: str
    organizational_unit: str


class TlsCertificatesAndHostnamesCustomHostnameQuota(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool


class TlsCertificatesAndHostnamesCustomHostnameQuotaListMatch(TypedDict):
    zone_id: str


class TlsCertificatesAndHostnamesCustomHostnameResponseCollectionRequired(TypedDict):
    errors: list
    messages: list
    success: bool


class TlsCertificatesAndHostnamesCustomHostnameResponseCollection(TlsCertificatesAndHostnamesCustomHostnameResponseCollectionRequired, total=False):
    result: list
    result_info: dict


class TlsCertificatesAndHostnamesCustomHostnameResponseCollectionListMatchRequired(TypedDict):
    zone_id: str


class TlsCertificatesAndHostnamesCustomHostnameResponseCollectionListMatch(TlsCertificatesAndHostnamesCustomHostnameResponseCollectionListMatchRequired, total=False):
    certificate_authority: str
    custom_origin_server: str
    direction: str
    hostname: str
    hostname_contain: str
    hostname_exact: str
    hostname_starts_with: str
    hostname_status: str
    id: str
    order: str
    page: float
    per_page: float
    ssl: int
    ssl_status: str
    wildcard: bool


class TlsCertificatesAndHostnamesCustomHostnameResponseSingleRequired(TypedDict):
    errors: list
    hostname: str
    messages: list
    success: bool


class TlsCertificatesAndHostnamesCustomHostnameResponseSingle(TlsCertificatesAndHostnamesCustomHostnameResponseSingleRequired, total=False):
    custom_metadata: dict
    custom_origin_server: str
    custom_origin_sni: str
    result: dict
    ssl: dict


class TlsCertificatesAndHostnamesCustomHostnameResponseSingleLoadMatch(TypedDict):
    custom_hostname_id: str
    zone_id: str


class TlsCertificatesAndHostnamesCustomHostnameResponseSingleCreateDataRequired(TypedDict):
    zone_id: str
    errors: list
    hostname: str
    messages: list
    success: bool


class TlsCertificatesAndHostnamesCustomHostnameResponseSingleCreateData(TlsCertificatesAndHostnamesCustomHostnameResponseSingleCreateDataRequired, total=False):
    custom_metadata: dict
    custom_origin_server: str
    custom_origin_sni: str
    result: dict
    ssl: dict


class TlsCertificatesAndHostnamesCustomHostnameResponseSingleUpdateDataRequired(TypedDict):
    custom_hostname_id: str
    zone_id: str


class TlsCertificatesAndHostnamesCustomHostnameResponseSingleUpdateData(TlsCertificatesAndHostnamesCustomHostnameResponseSingleUpdateDataRequired, total=False):
    custom_metadata: dict
    custom_origin_server: str
    custom_origin_sni: str
    errors: list
    hostname: str
    messages: list
    result: dict
    ssl: dict
    success: bool


class TlsCertificatesAndHostnamesCustomTrustStoreResponse(TypedDict, total=False):
    result: list


class TlsCertificatesAndHostnamesCustomTrustStoreResponseListMatchRequired(TypedDict):
    zone_id: str


class TlsCertificatesAndHostnamesCustomTrustStoreResponseListMatch(TlsCertificatesAndHostnamesCustomTrustStoreResponseListMatchRequired, total=False):
    limit: int
    offset: int
    page: float
    per_page: float


class TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly(TypedDict):
    pass


class TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyRemoveMatch(TypedDict):
    custom_origin_trust_store_id: str
    zone_id: str


class TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle(TypedDict):
    certificate: str
    result: dict


class TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleLoadMatch(TypedDict):
    custom_origin_trust_store_id: str
    zone_id: str


class TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleCreateData(TypedDict):
    zone_id: str
    certificate: str
    result: dict


class TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack(TypedDict, total=False):
    id: str


class TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackRemoveMatch(TypedDict):
    id: str
    zone_id: str


class TlsCertificatesAndHostnamesEnabledRequired(TypedDict):
    enabled: bool


class TlsCertificatesAndHostnamesEnabled(TlsCertificatesAndHostnamesEnabledRequired, total=False):
    result: dict


class TlsCertificatesAndHostnamesEnabledLoadMatch(TypedDict):
    zone_id: str


class TlsCertificatesAndHostnamesEnabledUpdateDataRequired(TypedDict):
    zone_id: str


class TlsCertificatesAndHostnamesEnabledUpdateData(TlsCertificatesAndHostnamesEnabledUpdateDataRequired, total=False):
    enabled: bool
    result: dict


class TlsCertificatesAndHostnamesFallbackOriginRequired(TypedDict):
    origin: str


class TlsCertificatesAndHostnamesFallbackOrigin(TlsCertificatesAndHostnamesFallbackOriginRequired, total=False):
    result: dict


class TlsCertificatesAndHostnamesFallbackOriginLoadMatch(TypedDict):
    zone_id: str


class TlsCertificatesAndHostnamesFallbackOriginUpdateDataRequired(TypedDict):
    zone_id: str


class TlsCertificatesAndHostnamesFallbackOriginUpdateData(TlsCertificatesAndHostnamesFallbackOriginUpdateDataRequired, total=False):
    origin: str
    result: dict


class TlsCertificatesAndHostnamesFallbackOriginRemoveMatch(TypedDict):
    zone_id: str


class TlsCertificatesAndHostnamesHostnameAopResponseCollection(TypedDict):
    config: list


class TlsCertificatesAndHostnamesHostnameAopResponseCollectionUpdateDataRequired(TypedDict):
    zone_id: str


class TlsCertificatesAndHostnamesHostnameAopResponseCollectionUpdateData(TlsCertificatesAndHostnamesHostnameAopResponseCollectionUpdateDataRequired, total=False):
    config: list


class TlsCertificatesAndHostnamesHostnameAopSingle(TypedDict, total=False):
    result: dict


class TlsCertificatesAndHostnamesHostnameAopSingleLoadMatch(TypedDict):
    hostname: str
    zone_id: str


class TlsCertificatesAndHostnamesHostnameAssocResponseCollection(TypedDict, total=False):
    result: list
    result_info: dict


class TlsCertificatesAndHostnamesHostnameAssocResponseCollectionListMatchRequired(TypedDict):
    zone_id: str


class TlsCertificatesAndHostnamesHostnameAssocResponseCollectionListMatch(TlsCertificatesAndHostnamesHostnameAssocResponseCollectionListMatchRequired, total=False):
    page: float
    per_page: float
    status: str


class TlsCertificatesAndHostnamesKeylessResponseCollection(TypedDict, total=False):
    result: list


class TlsCertificatesAndHostnamesKeylessResponseCollectionListMatch(TypedDict):
    zone_id: str


class TlsCertificatesAndHostnamesKeylessResponseSingleRequired(TypedDict):
    certificate: str
    host: str
    port: float
    tunnel: dict


class TlsCertificatesAndHostnamesKeylessResponseSingle(TlsCertificatesAndHostnamesKeylessResponseSingleRequired, total=False):
    bundle_method: str
    enabled: bool
    name: str
    result: dict


class TlsCertificatesAndHostnamesKeylessResponseSingleLoadMatch(TypedDict):
    keyless_certificate_id: str
    zone_id: str


class TlsCertificatesAndHostnamesKeylessResponseSingleCreateDataRequired(TypedDict):
    zone_id: str
    certificate: str
    host: str
    port: float
    tunnel: dict


class TlsCertificatesAndHostnamesKeylessResponseSingleCreateData(TlsCertificatesAndHostnamesKeylessResponseSingleCreateDataRequired, total=False):
    bundle_method: str
    enabled: bool
    name: str
    result: dict


class TlsCertificatesAndHostnamesKeylessResponseSingleUpdateDataRequired(TypedDict):
    keyless_certificate_id: str
    zone_id: str


class TlsCertificatesAndHostnamesKeylessResponseSingleUpdateData(TlsCertificatesAndHostnamesKeylessResponseSingleUpdateDataRequired, total=False):
    bundle_method: str
    certificate: str
    enabled: bool
    host: str
    name: str
    port: float
    result: dict
    tunnel: dict


class TlsCertificatesAndHostnamesKeylessResponseSingleId(TypedDict):
    pass


class TlsCertificatesAndHostnamesKeylessResponseSingleIdRemoveMatch(TypedDict):
    keyless_certificate_id: str
    zone_id: str


class TlsCertificatesAndHostnamesPerHostnameSettingRequired(TypedDict):
    value: Any


class TlsCertificatesAndHostnamesPerHostnameSetting(TlsCertificatesAndHostnamesPerHostnameSettingRequired, total=False):
    id: str
    result: dict


class TlsCertificatesAndHostnamesPerHostnameSettingLoadMatch(TypedDict):
    hostname: str
    setting_id: str
    zone_id: str


class TlsCertificatesAndHostnamesPerHostnameSettingUpdateDataRequired(TypedDict):
    hostname: str
    setting_id: str
    zone_id: str


class TlsCertificatesAndHostnamesPerHostnameSettingUpdateData(TlsCertificatesAndHostnamesPerHostnameSettingUpdateDataRequired, total=False):
    id: str
    result: dict
    value: Any


class TlsCertificatesAndHostnamesPerHostnameSettingsResponse(TypedDict, total=False):
    result: list
    result_info: dict


class TlsCertificatesAndHostnamesPerHostnameSettingsResponseLoadMatch(TypedDict):
    setting_id: str
    zone_id: str


class TlsCertificatesAndHostnamesPerHostnameSettingsResponse2(TypedDict, total=False):
    id: str


class TlsCertificatesAndHostnamesPerHostnameSettingsResponse2RemoveMatch(TypedDict):
    hostname: str
    setting_id: str
    zone_id: str


class TlsCertificatesAndHostnamesSslUniversalSetting(TypedDict, total=False):
    enabled: bool
    result: dict


class TlsCertificatesAndHostnamesSslUniversalSettingLoadMatch(TypedDict):
    zone_id: str


class TlsCertificatesAndHostnamesSslUniversalSettingUpdateDataRequired(TypedDict):
    zone_id: str


class TlsCertificatesAndHostnamesSslUniversalSettingUpdateData(TlsCertificatesAndHostnamesSslUniversalSettingUpdateDataRequired, total=False):
    enabled: bool
    result: dict


class TlsCertificatesAndHostnamesSslValidationMethodResponse(TypedDict):
    validation_method: str


class TlsCertificatesAndHostnamesSslValidationMethodResponseUpdateDataRequired(TypedDict):
    certificate_pack_id: str
    zone_id: str


class TlsCertificatesAndHostnamesSslValidationMethodResponseUpdateData(TlsCertificatesAndHostnamesSslValidationMethodResponseUpdateDataRequired, total=False):
    validation_method: str


class TlsCertificatesAndHostnamesSslVerificationResponseCollection(TypedDict, total=False):
    result: list


class TlsCertificatesAndHostnamesSslVerificationResponseCollectionListMatchRequired(TypedDict):
    zone_id: str


class TlsCertificatesAndHostnamesSslVerificationResponseCollectionListMatch(TlsCertificatesAndHostnamesSslVerificationResponseCollectionListMatchRequired, total=False):
    retry: bool


class TlsCertificatesAndHostnamesTotalTlsSettingRequired(TypedDict):
    enabled: bool


class TlsCertificatesAndHostnamesTotalTlsSetting(TlsCertificatesAndHostnamesTotalTlsSettingRequired, total=False):
    certificate_authority: str
    result: dict


class TlsCertificatesAndHostnamesTotalTlsSettingLoadMatch(TypedDict):
    zone_id: str


class TlsCertificatesAndHostnamesTotalTlsSettingCreateDataRequired(TypedDict):
    zone_id: str
    enabled: bool


class TlsCertificatesAndHostnamesTotalTlsSettingCreateData(TlsCertificatesAndHostnamesTotalTlsSettingCreateDataRequired, total=False):
    certificate_authority: str
    result: dict
