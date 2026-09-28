package voxgigcloudflaresslsdk

import (
	"github.com/voxgig-sdk/cloudflare-ssl-sdk/go/core"
	"github.com/voxgig-sdk/cloudflare-ssl-sdk/go/entity"
	"github.com/voxgig-sdk/cloudflare-ssl-sdk/go/feature"
	_ "github.com/voxgig-sdk/cloudflare-ssl-sdk/go/utility"
)

// Type aliases preserve external API.
type CloudflareSslSDK = core.CloudflareSslSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type CloudflareSslEntity = core.CloudflareSslEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type CloudflareSslError = core.CloudflareSslError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCacheApiResponseSingleIdEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewCacheApiResponseSingleIdEntity(client, entopts)
	}
	core.NewCacheAutoOriginTlsKexEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewCacheAutoOriginTlsKexEntity(client, entopts)
	}
	core.NewCustomHostnameEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewCustomHostnameEntity(client, entopts)
	}
	core.NewCustomHostnameForAZoneEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewCustomHostnameForAZoneEntity(client, entopts)
	}
	core.NewOriginTlEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewOriginTlEntity(client, entopts)
	}
	core.NewRecommendationEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewRecommendationEntity(client, entopts)
	}
	core.NewSslAutomaticModeEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewSslAutomaticModeEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesAssociationResponseCollectionEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesAssociationResponseCollectionEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesCertificateAnalyzeEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesCertificateAnalyzeEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesCertificatePackQuotaEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesCertificatePackQuotaEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesCertificatePackResponseCollectionEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesCertificatePackResponseSingleEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesCertificatePackResponseSingleEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesCertificateResponseCollectionEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesCertificateResponseCollectionEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesCertificateResponseCollection3EntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesCertificateResponseCollection3Entity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesCertificateResponseCollection4EntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesCertificateResponseCollection4Entity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesCertificateResponseCollection5EntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesCertificateResponseCollection5Entity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesCertificateResponseIdOnlyEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesCertificateResponseSingleEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesCertificateResponseSingleEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesCertificateResponseSingle2EntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesCertificateResponseSingle2Entity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesCertificateResponseSingle3EntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesCertificateResponseSingle3Entity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesCertificateResponseSingle4EntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesCertificateResponseSingle4Entity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesCertificateResponseSingle5EntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesCertificateResponseSingle5Entity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesCertificateResponseSinglePostEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesCertificateResponseSinglePostEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesCertificateRevokeEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesCertificateRevokeEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesClientCertificateResponseEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesClientCertificateResponseEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesClientCertificateResponseSingleEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesClientCertificateResponseSingleEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesCtAlertingSubscriptionResponseEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesCtAlertingSubscriptionResponseEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesCustomCsrResponseCollectionEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesCustomCsrResponseCollection2EntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesCustomCsrResponseSingleEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesCustomCsrResponseSingleEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesCustomCsrResponseSingle2EntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesCustomHostnameQuotaEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesCustomHostnameQuotaEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesCustomHostnameResponseSingleEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesCustomTrustStoreResponseEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesCustomTrustStoreResponseEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesDcvDelegationEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesDcvDelegationEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesEnabledEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesEnabledEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesFallbackOriginEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesFallbackOriginEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesHostnameAopResponseCollectionEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesHostnameAopSingleEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesHostnameAopSingleEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesHostnameAssociationEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesHostnameAssociationEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesKeylessResponseCollectionEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesKeylessResponseCollectionEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesKeylessResponseSingleEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesKeylessResponseSingleEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesKeylessResponseSingleIdEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesKeylessResponseSingleIdEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesPerHostnameSettingEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesPerHostnameSettingEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesPerHostnameSettingsResponseEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesPerHostnameSettingsResponse2EntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesSslUniversalSettingEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesSslUniversalSettingEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesSslValidationMethodResponseEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesSslValidationMethodResponseEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesSslVerificationResponseCollectionEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity(client, entopts)
	}
	core.NewTlsCertificatesAndHostnamesTotalTlsSettingEntityFunc = func(client *core.CloudflareSslSDK, entopts map[string]any) core.CloudflareSslEntity {
		return entity.NewTlsCertificatesAndHostnamesTotalTlsSettingEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewCloudflareSslSDK = core.NewCloudflareSslSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewCloudflareSslSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *CloudflareSslSDK  { return NewCloudflareSslSDK(nil) }
func Test() *CloudflareSslSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
