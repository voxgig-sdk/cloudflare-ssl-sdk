// Typed models for the CloudflareSsl SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/cloudflare-ssl-sdk/go/core"
)

// CacheApiResponseSingleId is the typed data model for the cache_api_response_single_id entity.
type CacheApiResponseSingleId struct {
}

// CacheApiResponseSingleIdUpdateData is the typed request payload for CacheApiResponseSingleId.UpdateTyped.
type CacheApiResponseSingleIdUpdateData struct {
	ZoneId string `json:"zone_id"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
	Value *string `json:"value,omitempty"`
}

// CacheAutoOriginTlsKex is the typed data model for the cache_auto_origin_tls_kex entity.
type CacheAutoOriginTlsKex struct {
}

// CacheAutoOriginTlsKexListMatch is the typed request payload for CacheAutoOriginTlsKex.ListTyped.
type CacheAutoOriginTlsKexListMatch struct {
	ZoneId string `json:"zone_id"`
}

// CacheAutoOriginTlsKexUpdateData is the typed request payload for CacheAutoOriginTlsKex.UpdateTyped.
type CacheAutoOriginTlsKexUpdateData struct {
	ZoneId string `json:"zone_id"`
	Enabled *bool `json:"enabled,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// CustomHostname is the typed data model for the custom_hostname entity.
type CustomHostname struct {
}

// CustomHostnameRemoveMatch is the typed request payload for CustomHostname.RemoveTyped.
type CustomHostnameRemoveMatch struct {
	Id string `json:"id"`
	ZoneId string `json:"zone_id"`
}

// CustomHostnameForAZone is the typed data model for the custom_hostname_for_a_zone entity.
type CustomHostnameForAZone struct {
}

// CustomHostnameForAZoneUpdateData is the typed request payload for CustomHostnameForAZone.UpdateTyped.
type CustomHostnameForAZoneUpdateData struct {
	CertificateId string `json:"certificate_id"`
	CertificatePackId string `json:"certificate_pack_id"`
	CustomHostnameId string `json:"custom_hostname_id"`
	ZoneId string `json:"zone_id"`
	CustomCertificate *string `json:"custom_certificate,omitempty"`
	CustomKey *string `json:"custom_key,omitempty"`
}

// CustomHostnameForAZoneRemoveMatch is the typed request payload for CustomHostnameForAZone.RemoveTyped.
type CustomHostnameForAZoneRemoveMatch struct {
	CertificateId string `json:"certificate_id"`
	CertificatePackId string `json:"certificate_pack_id"`
	CustomHostnameId string `json:"custom_hostname_id"`
	ZoneId string `json:"zone_id"`
}

// OriginTl is the typed data model for the origin_tl entity.
type OriginTl struct {
}

// OriginTlLoadMatch is the typed request payload for OriginTl.LoadTyped.
type OriginTlLoadMatch struct {
	ZoneId string `json:"zone_id"`
}

// OriginTlUpdateData is the typed request payload for OriginTl.UpdateTyped.
type OriginTlUpdateData struct {
	ZoneId string `json:"zone_id"`
	Result *map[string]any `json:"result,omitempty"`
	Value *[]any `json:"value,omitempty"`
}

// OriginTlRemoveMatch is the typed request payload for OriginTl.RemoveTyped.
type OriginTlRemoveMatch struct {
	ZoneId string `json:"zone_id"`
}

// Recommendation is the typed data model for the recommendation entity.
type Recommendation struct {
}

// RecommendationListMatch is the typed request payload for Recommendation.ListTyped.
type RecommendationListMatch struct {
	ZoneId string `json:"zone_id"`
}

// SslAutomaticMode is the typed data model for the ssl_automatic_mode entity.
type SslAutomaticMode struct {
}

// SslAutomaticModeListMatch is the typed request payload for SslAutomaticMode.ListTyped.
type SslAutomaticModeListMatch struct {
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesAdvancedCertificatePackResponse is the typed data model for the tls_certificates_and_hostnames_advanced_certificate_pack_response entity.
type TlsCertificatesAndHostnamesAdvancedCertificatePackResponse struct {
}

// TlsCertificatesAndHostnamesAdvancedCertificatePackResponseCreateData is the typed request payload for TlsCertificatesAndHostnamesAdvancedCertificatePackResponse.CreateTyped.
type TlsCertificatesAndHostnamesAdvancedCertificatePackResponseCreateData struct {
	ZoneId string `json:"zone_id"`
	CertificateAuthority string `json:"certificate_authority"`
	CloudflareBranding *bool `json:"cloudflare_branding,omitempty"`
	Hosts []any `json:"hosts"`
	Type string `json:"type"`
	ValidationMethod string `json:"validation_method"`
	ValidityDays int `json:"validity_days"`
}

// TlsCertificatesAndHostnamesAdvancedCertificatePackResponseUpdateData is the typed request payload for TlsCertificatesAndHostnamesAdvancedCertificatePackResponse.UpdateTyped.
type TlsCertificatesAndHostnamesAdvancedCertificatePackResponseUpdateData struct {
	CertificatePackId string `json:"certificate_pack_id"`
	ZoneId string `json:"zone_id"`
	CertificateAuthority *string `json:"certificate_authority,omitempty"`
	CloudflareBranding *bool `json:"cloudflare_branding,omitempty"`
	Hosts *[]any `json:"hosts,omitempty"`
	Type *string `json:"type,omitempty"`
	ValidationMethod *string `json:"validation_method,omitempty"`
	ValidityDays *int `json:"validity_days,omitempty"`
}

// TlsCertificatesAndHostnamesAssociationResponseCollection is the typed data model for the tls_certificates_and_hostnames_association_response_collection entity.
type TlsCertificatesAndHostnamesAssociationResponseCollection struct {
}

// TlsCertificatesAndHostnamesAssociationResponseCollectionListMatch is the typed request payload for TlsCertificatesAndHostnamesAssociationResponseCollection.ListTyped.
type TlsCertificatesAndHostnamesAssociationResponseCollectionListMatch struct {
	AccountId string `json:"account_id"`
	MtlsCertificateId string `json:"mtls_certificate_id"`
}

// TlsCertificatesAndHostnamesCertificateAnalyze is the typed data model for the tls_certificates_and_hostnames_certificate_analyze entity.
type TlsCertificatesAndHostnamesCertificateAnalyze struct {
}

// TlsCertificatesAndHostnamesCertificateAnalyzeCreateData is the typed request payload for TlsCertificatesAndHostnamesCertificateAnalyze.CreateTyped.
type TlsCertificatesAndHostnamesCertificateAnalyzeCreateData struct {
	ZoneId string `json:"zone_id"`
	BundleMethod *string `json:"bundle_method,omitempty"`
	Certificate *string `json:"certificate,omitempty"`
}

// TlsCertificatesAndHostnamesCertificatePackQuota is the typed data model for the tls_certificates_and_hostnames_certificate_pack_quota entity.
type TlsCertificatesAndHostnamesCertificatePackQuota struct {
}

// TlsCertificatesAndHostnamesCertificatePackQuotaLoadMatch is the typed request payload for TlsCertificatesAndHostnamesCertificatePackQuota.LoadTyped.
type TlsCertificatesAndHostnamesCertificatePackQuotaLoadMatch struct {
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesCertificatePackResponseCollection is the typed data model for the tls_certificates_and_hostnames_certificate_pack_response_collection entity.
type TlsCertificatesAndHostnamesCertificatePackResponseCollection struct {
}

// TlsCertificatesAndHostnamesCertificatePackResponseCollectionListMatch is the typed request payload for TlsCertificatesAndHostnamesCertificatePackResponseCollection.ListTyped.
type TlsCertificatesAndHostnamesCertificatePackResponseCollectionListMatch struct {
	ZoneId string `json:"zone_id"`
	Deploy *string `json:"deploy,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
	Status *string `json:"status,omitempty"`
}

// TlsCertificatesAndHostnamesCertificatePackResponseSingle is the typed data model for the tls_certificates_and_hostnames_certificate_pack_response_single entity.
type TlsCertificatesAndHostnamesCertificatePackResponseSingle struct {
}

// TlsCertificatesAndHostnamesCertificatePackResponseSingleLoadMatch is the typed request payload for TlsCertificatesAndHostnamesCertificatePackResponseSingle.LoadTyped.
type TlsCertificatesAndHostnamesCertificatePackResponseSingleLoadMatch struct {
	CertificatePackId string `json:"certificate_pack_id"`
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesCertificateResponseCollection is the typed data model for the tls_certificates_and_hostnames_certificate_response_collection entity.
type TlsCertificatesAndHostnamesCertificateResponseCollection struct {
}

// TlsCertificatesAndHostnamesCertificateResponseCollectionListMatch is the typed request payload for TlsCertificatesAndHostnamesCertificateResponseCollection.ListTyped.
type TlsCertificatesAndHostnamesCertificateResponseCollectionListMatch struct {
	ZoneId string `json:"zone_id"`
	Match *string `json:"match,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
	Status *string `json:"status,omitempty"`
}

// TlsCertificatesAndHostnamesCertificateResponseCollectionUpdateData is the typed request payload for TlsCertificatesAndHostnamesCertificateResponseCollection.UpdateTyped.
type TlsCertificatesAndHostnamesCertificateResponseCollectionUpdateData struct {
	ZoneId string `json:"zone_id"`
	Certificates *[]any `json:"certificates,omitempty"`
	Result *[]any `json:"result,omitempty"`
}

// TlsCertificatesAndHostnamesCertificateResponseCollection3 is the typed data model for the tls_certificates_and_hostnames_certificate_response_collection_3 entity.
type TlsCertificatesAndHostnamesCertificateResponseCollection3 struct {
}

// TlsCertificatesAndHostnamesCertificateResponseCollection3ListMatch is the typed request payload for TlsCertificatesAndHostnamesCertificateResponseCollection3.ListTyped.
type TlsCertificatesAndHostnamesCertificateResponseCollection3ListMatch struct {
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesCertificateResponseCollection4 is the typed data model for the tls_certificates_and_hostnames_certificate_response_collection_4 entity.
type TlsCertificatesAndHostnamesCertificateResponseCollection4 struct {
}

// TlsCertificatesAndHostnamesCertificateResponseCollection4ListMatch is the typed request payload for TlsCertificatesAndHostnamesCertificateResponseCollection4.ListTyped.
type TlsCertificatesAndHostnamesCertificateResponseCollection4ListMatch struct {
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesCertificateResponseCollection5 is the typed data model for the tls_certificates_and_hostnames_certificate_response_collection_5 entity.
type TlsCertificatesAndHostnamesCertificateResponseCollection5 struct {
}

// TlsCertificatesAndHostnamesCertificateResponseCollection5ListMatch is the typed request payload for TlsCertificatesAndHostnamesCertificateResponseCollection5.ListTyped.
type TlsCertificatesAndHostnamesCertificateResponseCollection5ListMatch struct {
	AccountId string `json:"account_id"`
	Type *[]any `json:"type,omitempty"`
}

// TlsCertificatesAndHostnamesCertificateResponseIdOnly is the typed data model for the tls_certificates_and_hostnames_certificate_response_id_only entity.
type TlsCertificatesAndHostnamesCertificateResponseIdOnly struct {
}

// TlsCertificatesAndHostnamesCertificateResponseIdOnlyRemoveMatch is the typed request payload for TlsCertificatesAndHostnamesCertificateResponseIdOnly.RemoveTyped.
type TlsCertificatesAndHostnamesCertificateResponseIdOnlyRemoveMatch struct {
	CustomCertificateId string `json:"custom_certificate_id"`
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesCertificateResponseSingle is the typed data model for the tls_certificates_and_hostnames_certificate_response_single entity.
type TlsCertificatesAndHostnamesCertificateResponseSingle struct {
}

// TlsCertificatesAndHostnamesCertificateResponseSingleLoadMatch is the typed request payload for TlsCertificatesAndHostnamesCertificateResponseSingle.LoadTyped.
type TlsCertificatesAndHostnamesCertificateResponseSingleLoadMatch struct {
	CustomCertificateId string `json:"custom_certificate_id"`
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesCertificateResponseSingleCreateData is the typed request payload for TlsCertificatesAndHostnamesCertificateResponseSingle.CreateTyped.
type TlsCertificatesAndHostnamesCertificateResponseSingleCreateData struct {
	ZoneId string `json:"zone_id"`
	BundleMethod *string `json:"bundle_method,omitempty"`
	Certificate string `json:"certificate"`
	CustomCsrId *string `json:"custom_csr_id,omitempty"`
	Deploy *string `json:"deploy,omitempty"`
	GeoRestrictions *map[string]any `json:"geo_restrictions,omitempty"`
	Policy *string `json:"policy,omitempty"`
	PrivateKey *string `json:"private_key,omitempty"`
	Result map[string]any `json:"result"`
	Type *string `json:"type,omitempty"`
}

// TlsCertificatesAndHostnamesCertificateResponseSingleUpdateData is the typed request payload for TlsCertificatesAndHostnamesCertificateResponseSingle.UpdateTyped.
type TlsCertificatesAndHostnamesCertificateResponseSingleUpdateData struct {
	CustomCertificateId string `json:"custom_certificate_id"`
	ZoneId string `json:"zone_id"`
	BundleMethod *string `json:"bundle_method,omitempty"`
	Certificate *string `json:"certificate,omitempty"`
	CustomCsrId *string `json:"custom_csr_id,omitempty"`
	Deploy *string `json:"deploy,omitempty"`
	GeoRestrictions *map[string]any `json:"geo_restrictions,omitempty"`
	Policy *string `json:"policy,omitempty"`
	PrivateKey *string `json:"private_key,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Type *string `json:"type,omitempty"`
}

// TlsCertificatesAndHostnamesCertificateResponseSingle2 is the typed data model for the tls_certificates_and_hostnames_certificate_response_single_2 entity.
type TlsCertificatesAndHostnamesCertificateResponseSingle2 struct {
}

// TlsCertificatesAndHostnamesCertificateResponseSingle2LoadMatch is the typed request payload for TlsCertificatesAndHostnamesCertificateResponseSingle2.LoadTyped.
type TlsCertificatesAndHostnamesCertificateResponseSingle2LoadMatch struct {
	CertificateId string `json:"certificate_id"`
}

// TlsCertificatesAndHostnamesCertificateResponseSingle2ListMatch is the typed request payload for TlsCertificatesAndHostnamesCertificateResponseSingle2.ListTyped.
type TlsCertificatesAndHostnamesCertificateResponseSingle2ListMatch struct {
	Limit *int `json:"limit,omitempty"`
	Offset *int `json:"offset,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesCertificateResponseSingle2CreateData is the typed request payload for TlsCertificatesAndHostnamesCertificateResponseSingle2.CreateTyped.
type TlsCertificatesAndHostnamesCertificateResponseSingle2CreateData struct {
	Csr string `json:"csr"`
	Hostnames []any `json:"hostnames"`
	RequestType string `json:"request_type"`
	RequestedValidity *float64 `json:"requested_validity,omitempty"`
	Result map[string]any `json:"result"`
}

// TlsCertificatesAndHostnamesCertificateResponseSingle3 is the typed data model for the tls_certificates_and_hostnames_certificate_response_single_3 entity.
type TlsCertificatesAndHostnamesCertificateResponseSingle3 struct {
}

// TlsCertificatesAndHostnamesCertificateResponseSingle3LoadMatch is the typed request payload for TlsCertificatesAndHostnamesCertificateResponseSingle3.LoadTyped.
type TlsCertificatesAndHostnamesCertificateResponseSingle3LoadMatch struct {
	CertificateId string `json:"certificate_id"`
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesCertificateResponseSingle3CreateData is the typed request payload for TlsCertificatesAndHostnamesCertificateResponseSingle3.CreateTyped.
type TlsCertificatesAndHostnamesCertificateResponseSingle3CreateData struct {
	ZoneId string `json:"zone_id"`
	Certificate string `json:"certificate"`
	PrivateKey string `json:"private_key"`
	Result *map[string]any `json:"result,omitempty"`
}

// TlsCertificatesAndHostnamesCertificateResponseSingle3RemoveMatch is the typed request payload for TlsCertificatesAndHostnamesCertificateResponseSingle3.RemoveTyped.
type TlsCertificatesAndHostnamesCertificateResponseSingle3RemoveMatch struct {
	CertificateId string `json:"certificate_id"`
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesCertificateResponseSingle4 is the typed data model for the tls_certificates_and_hostnames_certificate_response_single_4 entity.
type TlsCertificatesAndHostnamesCertificateResponseSingle4 struct {
}

// TlsCertificatesAndHostnamesCertificateResponseSingle4LoadMatch is the typed request payload for TlsCertificatesAndHostnamesCertificateResponseSingle4.LoadTyped.
type TlsCertificatesAndHostnamesCertificateResponseSingle4LoadMatch struct {
	CertificateId string `json:"certificate_id"`
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesCertificateResponseSingle4CreateData is the typed request payload for TlsCertificatesAndHostnamesCertificateResponseSingle4.CreateTyped.
type TlsCertificatesAndHostnamesCertificateResponseSingle4CreateData struct {
	ZoneId string `json:"zone_id"`
	Certificate string `json:"certificate"`
	PrivateKey string `json:"private_key"`
	Result *map[string]any `json:"result,omitempty"`
}

// TlsCertificatesAndHostnamesCertificateResponseSingle4RemoveMatch is the typed request payload for TlsCertificatesAndHostnamesCertificateResponseSingle4.RemoveTyped.
type TlsCertificatesAndHostnamesCertificateResponseSingle4RemoveMatch struct {
	CertificateId string `json:"certificate_id"`
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesCertificateResponseSingle5 is the typed data model for the tls_certificates_and_hostnames_certificate_response_single_5 entity.
type TlsCertificatesAndHostnamesCertificateResponseSingle5 struct {
}

// TlsCertificatesAndHostnamesCertificateResponseSingle5LoadMatch is the typed request payload for TlsCertificatesAndHostnamesCertificateResponseSingle5.LoadTyped.
type TlsCertificatesAndHostnamesCertificateResponseSingle5LoadMatch struct {
	AccountId string `json:"account_id"`
	MtlsCertificateId string `json:"mtls_certificate_id"`
}

// TlsCertificatesAndHostnamesCertificateResponseSingle5RemoveMatch is the typed request payload for TlsCertificatesAndHostnamesCertificateResponseSingle5.RemoveTyped.
type TlsCertificatesAndHostnamesCertificateResponseSingle5RemoveMatch struct {
	AccountId string `json:"account_id"`
	MtlsCertificateId string `json:"mtls_certificate_id"`
}

// TlsCertificatesAndHostnamesCertificateResponseSinglePost is the typed data model for the tls_certificates_and_hostnames_certificate_response_single_post entity.
type TlsCertificatesAndHostnamesCertificateResponseSinglePost struct {
}

// TlsCertificatesAndHostnamesCertificateResponseSinglePostCreateData is the typed request payload for TlsCertificatesAndHostnamesCertificateResponseSinglePost.CreateTyped.
type TlsCertificatesAndHostnamesCertificateResponseSinglePostCreateData struct {
	AccountId string `json:"account_id"`
	Ca bool `json:"ca"`
	Certificates string `json:"certificates"`
	Name *string `json:"name,omitempty"`
	PrivateKey *string `json:"private_key,omitempty"`
}

// TlsCertificatesAndHostnamesCertificateRevoke is the typed data model for the tls_certificates_and_hostnames_certificate_revoke entity.
type TlsCertificatesAndHostnamesCertificateRevoke struct {
}

// TlsCertificatesAndHostnamesCertificateRevokeRemoveMatch is the typed request payload for TlsCertificatesAndHostnamesCertificateRevoke.RemoveTyped.
type TlsCertificatesAndHostnamesCertificateRevokeRemoveMatch struct {
	CertificateId string `json:"certificate_id"`
}

// TlsCertificatesAndHostnamesClientCertificateResponse is the typed data model for the tls_certificates_and_hostnames_client_certificate_response entity.
type TlsCertificatesAndHostnamesClientCertificateResponse struct {
}

// TlsCertificatesAndHostnamesClientCertificateResponseListMatch is the typed request payload for TlsCertificatesAndHostnamesClientCertificateResponse.ListTyped.
type TlsCertificatesAndHostnamesClientCertificateResponseListMatch struct {
	ZoneId string `json:"zone_id"`
	Limit *int `json:"limit,omitempty"`
	Offset *int `json:"offset,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
	Status *string `json:"status,omitempty"`
}

// TlsCertificatesAndHostnamesClientCertificateResponseSingle is the typed data model for the tls_certificates_and_hostnames_client_certificate_response_single entity.
type TlsCertificatesAndHostnamesClientCertificateResponseSingle struct {
}

// TlsCertificatesAndHostnamesClientCertificateResponseSingleLoadMatch is the typed request payload for TlsCertificatesAndHostnamesClientCertificateResponseSingle.LoadTyped.
type TlsCertificatesAndHostnamesClientCertificateResponseSingleLoadMatch struct {
	ClientCertificateId string `json:"client_certificate_id"`
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesClientCertificateResponseSingleCreateData is the typed request payload for TlsCertificatesAndHostnamesClientCertificateResponseSingle.CreateTyped.
type TlsCertificatesAndHostnamesClientCertificateResponseSingleCreateData struct {
	ZoneId string `json:"zone_id"`
	Csr string `json:"csr"`
	Reactivate *bool `json:"reactivate,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	ValidityDays int `json:"validity_days"`
}

// TlsCertificatesAndHostnamesClientCertificateResponseSingleUpdateData is the typed request payload for TlsCertificatesAndHostnamesClientCertificateResponseSingle.UpdateTyped.
type TlsCertificatesAndHostnamesClientCertificateResponseSingleUpdateData struct {
	ClientCertificateId string `json:"client_certificate_id"`
	ZoneId string `json:"zone_id"`
	Csr *string `json:"csr,omitempty"`
	Reactivate *bool `json:"reactivate,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	ValidityDays *int `json:"validity_days,omitempty"`
}

// TlsCertificatesAndHostnamesClientCertificateResponseSingleRemoveMatch is the typed request payload for TlsCertificatesAndHostnamesClientCertificateResponseSingle.RemoveTyped.
type TlsCertificatesAndHostnamesClientCertificateResponseSingleRemoveMatch struct {
	ClientCertificateId string `json:"client_certificate_id"`
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse is the typed data model for the tls_certificates_and_hostnames_ct_alerting_subscription_response entity.
type TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse struct {
}

// TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseLoadMatch is the typed request payload for TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse.LoadTyped.
type TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseLoadMatch struct {
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseUpdateData is the typed request payload for TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse.UpdateTyped.
type TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseUpdateData struct {
	ZoneId string `json:"zone_id"`
	Emails *[]any `json:"emails,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
}

// TlsCertificatesAndHostnamesCustomCsrResponseCollection is the typed data model for the tls_certificates_and_hostnames_custom_csr_response_collection entity.
type TlsCertificatesAndHostnamesCustomCsrResponseCollection struct {
}

// TlsCertificatesAndHostnamesCustomCsrResponseCollectionListMatch is the typed request payload for TlsCertificatesAndHostnamesCustomCsrResponseCollection.ListTyped.
type TlsCertificatesAndHostnamesCustomCsrResponseCollectionListMatch struct {
	ZoneId string `json:"zone_id"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
}

// TlsCertificatesAndHostnamesCustomCsrResponseCollection2 is the typed data model for the tls_certificates_and_hostnames_custom_csr_response_collection_2 entity.
type TlsCertificatesAndHostnamesCustomCsrResponseCollection2 struct {
}

// TlsCertificatesAndHostnamesCustomCsrResponseCollection2ListMatch is the typed request payload for TlsCertificatesAndHostnamesCustomCsrResponseCollection2.ListTyped.
type TlsCertificatesAndHostnamesCustomCsrResponseCollection2ListMatch struct {
	AccountId string `json:"account_id"`
	Direction *string `json:"direction,omitempty"`
	Order *string `json:"order,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
}

// TlsCertificatesAndHostnamesCustomCsrResponseIdOnly is the typed data model for the tls_certificates_and_hostnames_custom_csr_response_id_only entity.
type TlsCertificatesAndHostnamesCustomCsrResponseIdOnly struct {
}

// TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyRemoveMatch is the typed request payload for TlsCertificatesAndHostnamesCustomCsrResponseIdOnly.RemoveTyped.
type TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyRemoveMatch struct {
	AccountId *string `json:"account_id,omitempty"`
	CustomCsrId string `json:"custom_csr_id"`
	ZoneId *string `json:"zone_id,omitempty"`
}

// TlsCertificatesAndHostnamesCustomCsrResponseSingle is the typed data model for the tls_certificates_and_hostnames_custom_csr_response_single entity.
type TlsCertificatesAndHostnamesCustomCsrResponseSingle struct {
}

// TlsCertificatesAndHostnamesCustomCsrResponseSingleLoadMatch is the typed request payload for TlsCertificatesAndHostnamesCustomCsrResponseSingle.LoadTyped.
type TlsCertificatesAndHostnamesCustomCsrResponseSingleLoadMatch struct {
	CustomCsrId string `json:"custom_csr_id"`
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesCustomCsrResponseSingleCreateData is the typed request payload for TlsCertificatesAndHostnamesCustomCsrResponseSingle.CreateTyped.
type TlsCertificatesAndHostnamesCustomCsrResponseSingleCreateData struct {
	ZoneId string `json:"zone_id"`
	CommonName string `json:"common_name"`
	Country string `json:"country"`
	KeyType *string `json:"key_type,omitempty"`
	Locality string `json:"locality"`
	Organization string `json:"organization"`
	OrganizationalUnit *string `json:"organizational_unit,omitempty"`
	Result map[string]any `json:"result"`
	Sans []any `json:"sans"`
	State string `json:"state"`
}

// TlsCertificatesAndHostnamesCustomCsrResponseSingle2 is the typed data model for the tls_certificates_and_hostnames_custom_csr_response_single_2 entity.
type TlsCertificatesAndHostnamesCustomCsrResponseSingle2 struct {
}

// TlsCertificatesAndHostnamesCustomCsrResponseSingle2LoadMatch is the typed request payload for TlsCertificatesAndHostnamesCustomCsrResponseSingle2.LoadTyped.
type TlsCertificatesAndHostnamesCustomCsrResponseSingle2LoadMatch struct {
	AccountId string `json:"account_id"`
	CustomCsrId string `json:"custom_csr_id"`
}

// TlsCertificatesAndHostnamesCustomCsrResponseSingle2CreateData is the typed request payload for TlsCertificatesAndHostnamesCustomCsrResponseSingle2.CreateTyped.
type TlsCertificatesAndHostnamesCustomCsrResponseSingle2CreateData struct {
	AccountId string `json:"account_id"`
	CommonName string `json:"common_name"`
	Country string `json:"country"`
	Description *string `json:"description,omitempty"`
	KeyType *string `json:"key_type,omitempty"`
	Locality string `json:"locality"`
	Name *string `json:"name,omitempty"`
	Organization string `json:"organization"`
	OrganizationalUnit *string `json:"organizational_unit,omitempty"`
	Result map[string]any `json:"result"`
	Sans []any `json:"sans"`
	State string `json:"state"`
}

// TlsCertificatesAndHostnamesCustomHostnameQuota is the typed data model for the tls_certificates_and_hostnames_custom_hostname_quota entity.
type TlsCertificatesAndHostnamesCustomHostnameQuota struct {
}

// TlsCertificatesAndHostnamesCustomHostnameQuotaListMatch is the typed request payload for TlsCertificatesAndHostnamesCustomHostnameQuota.ListTyped.
type TlsCertificatesAndHostnamesCustomHostnameQuotaListMatch struct {
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesCustomHostnameResponseCollection is the typed data model for the tls_certificates_and_hostnames_custom_hostname_response_collection entity.
type TlsCertificatesAndHostnamesCustomHostnameResponseCollection struct {
}

// TlsCertificatesAndHostnamesCustomHostnameResponseCollectionListMatch is the typed request payload for TlsCertificatesAndHostnamesCustomHostnameResponseCollection.ListTyped.
type TlsCertificatesAndHostnamesCustomHostnameResponseCollectionListMatch struct {
	ZoneId string `json:"zone_id"`
	CertificateAuthority *string `json:"certificate_authority,omitempty"`
	CustomOriginServer *string `json:"custom_origin_server,omitempty"`
	Direction *string `json:"direction,omitempty"`
	Hostname *string `json:"hostname,omitempty"`
	HostnameContain *string `json:"hostname_contain,omitempty"`
	HostnameExact *string `json:"hostname_exact,omitempty"`
	HostnameStartsWith *string `json:"hostname_starts_with,omitempty"`
	HostnameStatus *string `json:"hostname_status,omitempty"`
	Id *string `json:"id,omitempty"`
	Order *string `json:"order,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
	Ssl *int `json:"ssl,omitempty"`
	SslStatus *string `json:"ssl_status,omitempty"`
	Wildcard *bool `json:"wildcard,omitempty"`
}

// TlsCertificatesAndHostnamesCustomHostnameResponseSingle is the typed data model for the tls_certificates_and_hostnames_custom_hostname_response_single entity.
type TlsCertificatesAndHostnamesCustomHostnameResponseSingle struct {
}

// TlsCertificatesAndHostnamesCustomHostnameResponseSingleLoadMatch is the typed request payload for TlsCertificatesAndHostnamesCustomHostnameResponseSingle.LoadTyped.
type TlsCertificatesAndHostnamesCustomHostnameResponseSingleLoadMatch struct {
	CustomHostnameId string `json:"custom_hostname_id"`
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesCustomHostnameResponseSingleCreateData is the typed request payload for TlsCertificatesAndHostnamesCustomHostnameResponseSingle.CreateTyped.
type TlsCertificatesAndHostnamesCustomHostnameResponseSingleCreateData struct {
	ZoneId string `json:"zone_id"`
	CustomMetadata *map[string]any `json:"custom_metadata,omitempty"`
	CustomOriginServer *string `json:"custom_origin_server,omitempty"`
	CustomOriginSni *string `json:"custom_origin_sni,omitempty"`
	Errors []any `json:"errors"`
	Hostname string `json:"hostname"`
	Messages []any `json:"messages"`
	Result *map[string]any `json:"result,omitempty"`
	Ssl *map[string]any `json:"ssl,omitempty"`
	Success bool `json:"success"`
}

// TlsCertificatesAndHostnamesCustomHostnameResponseSingleUpdateData is the typed request payload for TlsCertificatesAndHostnamesCustomHostnameResponseSingle.UpdateTyped.
type TlsCertificatesAndHostnamesCustomHostnameResponseSingleUpdateData struct {
	CustomHostnameId string `json:"custom_hostname_id"`
	ZoneId string `json:"zone_id"`
	CustomMetadata *map[string]any `json:"custom_metadata,omitempty"`
	CustomOriginServer *string `json:"custom_origin_server,omitempty"`
	CustomOriginSni *string `json:"custom_origin_sni,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	Hostname *string `json:"hostname,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Ssl *map[string]any `json:"ssl,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// TlsCertificatesAndHostnamesCustomTrustStoreResponse is the typed data model for the tls_certificates_and_hostnames_custom_trust_store_response entity.
type TlsCertificatesAndHostnamesCustomTrustStoreResponse struct {
}

// TlsCertificatesAndHostnamesCustomTrustStoreResponseListMatch is the typed request payload for TlsCertificatesAndHostnamesCustomTrustStoreResponse.ListTyped.
type TlsCertificatesAndHostnamesCustomTrustStoreResponseListMatch struct {
	ZoneId string `json:"zone_id"`
	Limit *int `json:"limit,omitempty"`
	Offset *int `json:"offset,omitempty"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
}

// TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly is the typed data model for the tls_certificates_and_hostnames_custom_trust_store_response_id_only entity.
type TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly struct {
}

// TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyRemoveMatch is the typed request payload for TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly.RemoveTyped.
type TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyRemoveMatch struct {
	CustomOriginTrustStoreId string `json:"custom_origin_trust_store_id"`
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle is the typed data model for the tls_certificates_and_hostnames_custom_trust_store_response_single entity.
type TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle struct {
}

// TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleLoadMatch is the typed request payload for TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle.LoadTyped.
type TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleLoadMatch struct {
	CustomOriginTrustStoreId string `json:"custom_origin_trust_store_id"`
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleCreateData is the typed request payload for TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle.CreateTyped.
type TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleCreateData struct {
	ZoneId string `json:"zone_id"`
	Certificate string `json:"certificate"`
	Result map[string]any `json:"result"`
}

// TlsCertificatesAndHostnamesDcvDelegation is the typed data model for the tls_certificates_and_hostnames_dcv_delegation entity.
type TlsCertificatesAndHostnamesDcvDelegation struct {
}

// TlsCertificatesAndHostnamesDcvDelegationLoadMatch is the typed request payload for TlsCertificatesAndHostnamesDcvDelegation.LoadTyped.
type TlsCertificatesAndHostnamesDcvDelegationLoadMatch struct {
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack is the typed data model for the tls_certificates_and_hostnames_delete_advanced_certificate_pack entity.
type TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack struct {
}

// TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackRemoveMatch is the typed request payload for TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack.RemoveTyped.
type TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackRemoveMatch struct {
	Id string `json:"id"`
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesEnabled is the typed data model for the tls_certificates_and_hostnames_enabled entity.
type TlsCertificatesAndHostnamesEnabled struct {
}

// TlsCertificatesAndHostnamesEnabledLoadMatch is the typed request payload for TlsCertificatesAndHostnamesEnabled.LoadTyped.
type TlsCertificatesAndHostnamesEnabledLoadMatch struct {
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesEnabledUpdateData is the typed request payload for TlsCertificatesAndHostnamesEnabled.UpdateTyped.
type TlsCertificatesAndHostnamesEnabledUpdateData struct {
	ZoneId string `json:"zone_id"`
	Enabled *bool `json:"enabled,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
}

// TlsCertificatesAndHostnamesFallbackOrigin is the typed data model for the tls_certificates_and_hostnames_fallback_origin entity.
type TlsCertificatesAndHostnamesFallbackOrigin struct {
}

// TlsCertificatesAndHostnamesFallbackOriginLoadMatch is the typed request payload for TlsCertificatesAndHostnamesFallbackOrigin.LoadTyped.
type TlsCertificatesAndHostnamesFallbackOriginLoadMatch struct {
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesFallbackOriginUpdateData is the typed request payload for TlsCertificatesAndHostnamesFallbackOrigin.UpdateTyped.
type TlsCertificatesAndHostnamesFallbackOriginUpdateData struct {
	ZoneId string `json:"zone_id"`
	Origin *string `json:"origin,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
}

// TlsCertificatesAndHostnamesFallbackOriginRemoveMatch is the typed request payload for TlsCertificatesAndHostnamesFallbackOrigin.RemoveTyped.
type TlsCertificatesAndHostnamesFallbackOriginRemoveMatch struct {
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesHostnameAopResponseCollection is the typed data model for the tls_certificates_and_hostnames_hostname_aop_response_collection entity.
type TlsCertificatesAndHostnamesHostnameAopResponseCollection struct {
}

// TlsCertificatesAndHostnamesHostnameAopResponseCollectionUpdateData is the typed request payload for TlsCertificatesAndHostnamesHostnameAopResponseCollection.UpdateTyped.
type TlsCertificatesAndHostnamesHostnameAopResponseCollectionUpdateData struct {
	ZoneId string `json:"zone_id"`
	Config *[]any `json:"config,omitempty"`
}

// TlsCertificatesAndHostnamesHostnameAopSingle is the typed data model for the tls_certificates_and_hostnames_hostname_aop_single entity.
type TlsCertificatesAndHostnamesHostnameAopSingle struct {
}

// TlsCertificatesAndHostnamesHostnameAopSingleLoadMatch is the typed request payload for TlsCertificatesAndHostnamesHostnameAopSingle.LoadTyped.
type TlsCertificatesAndHostnamesHostnameAopSingleLoadMatch struct {
	Hostname string `json:"hostname"`
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesHostnameAssocResponseCollection is the typed data model for the tls_certificates_and_hostnames_hostname_assoc_response_collection entity.
type TlsCertificatesAndHostnamesHostnameAssocResponseCollection struct {
}

// TlsCertificatesAndHostnamesHostnameAssocResponseCollectionListMatch is the typed request payload for TlsCertificatesAndHostnamesHostnameAssocResponseCollection.ListTyped.
type TlsCertificatesAndHostnamesHostnameAssocResponseCollectionListMatch struct {
	ZoneId string `json:"zone_id"`
	Page *float64 `json:"page,omitempty"`
	PerPage *float64 `json:"per_page,omitempty"`
	Status *string `json:"status,omitempty"`
}

// TlsCertificatesAndHostnamesHostnameAssociation is the typed data model for the tls_certificates_and_hostnames_hostname_association entity.
type TlsCertificatesAndHostnamesHostnameAssociation struct {
}

// TlsCertificatesAndHostnamesHostnameAssociationLoadMatch is the typed request payload for TlsCertificatesAndHostnamesHostnameAssociation.LoadTyped.
type TlsCertificatesAndHostnamesHostnameAssociationLoadMatch struct {
	ZoneId string `json:"zone_id"`
	MtlsCertificateId *string `json:"mtls_certificate_id,omitempty"`
}

// TlsCertificatesAndHostnamesHostnameAssociationUpdateData is the typed request payload for TlsCertificatesAndHostnamesHostnameAssociation.UpdateTyped.
type TlsCertificatesAndHostnamesHostnameAssociationUpdateData struct {
	ZoneId string `json:"zone_id"`
	Hostnames *[]any `json:"hostnames,omitempty"`
	MtlsCertificateId *string `json:"mtls_certificate_id,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
}

// TlsCertificatesAndHostnamesKeylessResponseCollection is the typed data model for the tls_certificates_and_hostnames_keyless_response_collection entity.
type TlsCertificatesAndHostnamesKeylessResponseCollection struct {
}

// TlsCertificatesAndHostnamesKeylessResponseCollectionListMatch is the typed request payload for TlsCertificatesAndHostnamesKeylessResponseCollection.ListTyped.
type TlsCertificatesAndHostnamesKeylessResponseCollectionListMatch struct {
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesKeylessResponseSingle is the typed data model for the tls_certificates_and_hostnames_keyless_response_single entity.
type TlsCertificatesAndHostnamesKeylessResponseSingle struct {
}

// TlsCertificatesAndHostnamesKeylessResponseSingleLoadMatch is the typed request payload for TlsCertificatesAndHostnamesKeylessResponseSingle.LoadTyped.
type TlsCertificatesAndHostnamesKeylessResponseSingleLoadMatch struct {
	KeylessCertificateId string `json:"keyless_certificate_id"`
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesKeylessResponseSingleCreateData is the typed request payload for TlsCertificatesAndHostnamesKeylessResponseSingle.CreateTyped.
type TlsCertificatesAndHostnamesKeylessResponseSingleCreateData struct {
	ZoneId string `json:"zone_id"`
	BundleMethod *string `json:"bundle_method,omitempty"`
	Certificate string `json:"certificate"`
	Enabled *bool `json:"enabled,omitempty"`
	Host string `json:"host"`
	Name *string `json:"name,omitempty"`
	Port float64 `json:"port"`
	Result *map[string]any `json:"result,omitempty"`
	Tunnel map[string]any `json:"tunnel"`
}

// TlsCertificatesAndHostnamesKeylessResponseSingleUpdateData is the typed request payload for TlsCertificatesAndHostnamesKeylessResponseSingle.UpdateTyped.
type TlsCertificatesAndHostnamesKeylessResponseSingleUpdateData struct {
	KeylessCertificateId string `json:"keyless_certificate_id"`
	ZoneId string `json:"zone_id"`
	BundleMethod *string `json:"bundle_method,omitempty"`
	Certificate *string `json:"certificate,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Host *string `json:"host,omitempty"`
	Name *string `json:"name,omitempty"`
	Port *float64 `json:"port,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Tunnel *map[string]any `json:"tunnel,omitempty"`
}

// TlsCertificatesAndHostnamesKeylessResponseSingleId is the typed data model for the tls_certificates_and_hostnames_keyless_response_single_id entity.
type TlsCertificatesAndHostnamesKeylessResponseSingleId struct {
}

// TlsCertificatesAndHostnamesKeylessResponseSingleIdRemoveMatch is the typed request payload for TlsCertificatesAndHostnamesKeylessResponseSingleId.RemoveTyped.
type TlsCertificatesAndHostnamesKeylessResponseSingleIdRemoveMatch struct {
	KeylessCertificateId string `json:"keyless_certificate_id"`
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesPerHostnameSetting is the typed data model for the tls_certificates_and_hostnames_per_hostname_setting entity.
type TlsCertificatesAndHostnamesPerHostnameSetting struct {
}

// TlsCertificatesAndHostnamesPerHostnameSettingLoadMatch is the typed request payload for TlsCertificatesAndHostnamesPerHostnameSetting.LoadTyped.
type TlsCertificatesAndHostnamesPerHostnameSettingLoadMatch struct {
	Hostname string `json:"hostname"`
	SettingId string `json:"setting_id"`
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesPerHostnameSettingUpdateData is the typed request payload for TlsCertificatesAndHostnamesPerHostnameSetting.UpdateTyped.
type TlsCertificatesAndHostnamesPerHostnameSettingUpdateData struct {
	Hostname string `json:"hostname"`
	SettingId string `json:"setting_id"`
	ZoneId string `json:"zone_id"`
	Id *string `json:"id,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Value *any `json:"value,omitempty"`
}

// TlsCertificatesAndHostnamesPerHostnameSettingsResponse is the typed data model for the tls_certificates_and_hostnames_per_hostname_settings_response entity.
type TlsCertificatesAndHostnamesPerHostnameSettingsResponse struct {
}

// TlsCertificatesAndHostnamesPerHostnameSettingsResponseLoadMatch is the typed request payload for TlsCertificatesAndHostnamesPerHostnameSettingsResponse.LoadTyped.
type TlsCertificatesAndHostnamesPerHostnameSettingsResponseLoadMatch struct {
	SettingId string `json:"setting_id"`
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesPerHostnameSettingsResponse2 is the typed data model for the tls_certificates_and_hostnames_per_hostname_settings_response2 entity.
type TlsCertificatesAndHostnamesPerHostnameSettingsResponse2 struct {
}

// TlsCertificatesAndHostnamesPerHostnameSettingsResponse2RemoveMatch is the typed request payload for TlsCertificatesAndHostnamesPerHostnameSettingsResponse2.RemoveTyped.
type TlsCertificatesAndHostnamesPerHostnameSettingsResponse2RemoveMatch struct {
	Hostname string `json:"hostname"`
	SettingId string `json:"setting_id"`
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesSslUniversalSetting is the typed data model for the tls_certificates_and_hostnames_ssl_universal_setting entity.
type TlsCertificatesAndHostnamesSslUniversalSetting struct {
}

// TlsCertificatesAndHostnamesSslUniversalSettingLoadMatch is the typed request payload for TlsCertificatesAndHostnamesSslUniversalSetting.LoadTyped.
type TlsCertificatesAndHostnamesSslUniversalSettingLoadMatch struct {
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesSslUniversalSettingUpdateData is the typed request payload for TlsCertificatesAndHostnamesSslUniversalSetting.UpdateTyped.
type TlsCertificatesAndHostnamesSslUniversalSettingUpdateData struct {
	ZoneId string `json:"zone_id"`
	Enabled *bool `json:"enabled,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
}

// TlsCertificatesAndHostnamesSslValidationMethodResponse is the typed data model for the tls_certificates_and_hostnames_ssl_validation_method_response entity.
type TlsCertificatesAndHostnamesSslValidationMethodResponse struct {
}

// TlsCertificatesAndHostnamesSslValidationMethodResponseUpdateData is the typed request payload for TlsCertificatesAndHostnamesSslValidationMethodResponse.UpdateTyped.
type TlsCertificatesAndHostnamesSslValidationMethodResponseUpdateData struct {
	CertificatePackId string `json:"certificate_pack_id"`
	ZoneId string `json:"zone_id"`
	ValidationMethod *string `json:"validation_method,omitempty"`
}

// TlsCertificatesAndHostnamesSslVerificationResponseCollection is the typed data model for the tls_certificates_and_hostnames_ssl_verification_response_collection entity.
type TlsCertificatesAndHostnamesSslVerificationResponseCollection struct {
}

// TlsCertificatesAndHostnamesSslVerificationResponseCollectionListMatch is the typed request payload for TlsCertificatesAndHostnamesSslVerificationResponseCollection.ListTyped.
type TlsCertificatesAndHostnamesSslVerificationResponseCollectionListMatch struct {
	ZoneId string `json:"zone_id"`
	Retry *bool `json:"retry,omitempty"`
}

// TlsCertificatesAndHostnamesTotalTlsSetting is the typed data model for the tls_certificates_and_hostnames_total_tls_setting entity.
type TlsCertificatesAndHostnamesTotalTlsSetting struct {
}

// TlsCertificatesAndHostnamesTotalTlsSettingLoadMatch is the typed request payload for TlsCertificatesAndHostnamesTotalTlsSetting.LoadTyped.
type TlsCertificatesAndHostnamesTotalTlsSettingLoadMatch struct {
	ZoneId string `json:"zone_id"`
}

// TlsCertificatesAndHostnamesTotalTlsSettingCreateData is the typed request payload for TlsCertificatesAndHostnamesTotalTlsSetting.CreateTyped.
type TlsCertificatesAndHostnamesTotalTlsSettingCreateData struct {
	ZoneId string `json:"zone_id"`
	CertificateAuthority *string `json:"certificate_authority,omitempty"`
	Enabled bool `json:"enabled"`
	Result *map[string]any `json:"result,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
