package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewCacheApiResponseSingleIdEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewCacheAutoOriginTlsKexEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewCustomHostnameEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewCustomHostnameForAZoneEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewOriginTlEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewRecommendationEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewSslAutomaticModeEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesAssociationResponseCollectionEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesCertificateAnalyzeEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesCertificatePackQuotaEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesCertificatePackResponseCollectionEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesCertificatePackResponseSingleEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesCertificateResponseCollectionEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesCertificateResponseCollection3EntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesCertificateResponseCollection4EntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesCertificateResponseCollection5EntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesCertificateResponseIdOnlyEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesCertificateResponseSingleEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesCertificateResponseSingle2EntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesCertificateResponseSingle3EntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesCertificateResponseSingle4EntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesCertificateResponseSingle5EntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesCertificateResponseSinglePostEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesCertificateRevokeEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesClientCertificateResponseEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesClientCertificateResponseSingleEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesCustomCsrResponseCollectionEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesCustomCsrResponseCollection2EntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesCustomCsrResponseSingleEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesCustomCsrResponseSingle2EntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesCustomHostnameQuotaEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesCustomHostnameResponseSingleEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesCustomTrustStoreResponseEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesEnabledEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesFallbackOriginEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesHostnameAopResponseCollectionEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesHostnameAopSingleEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesKeylessResponseCollectionEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesKeylessResponseSingleEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesKeylessResponseSingleIdEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesPerHostnameSettingEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesPerHostnameSettingsResponseEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesPerHostnameSettingsResponse2EntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesSslUniversalSettingEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesSslValidationMethodResponseEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesSslVerificationResponseCollectionEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

var NewTlsCertificatesAndHostnamesTotalTlsSettingEntityFunc func(client *CloudflareSslSDK, entopts map[string]any) CloudflareSslEntity

