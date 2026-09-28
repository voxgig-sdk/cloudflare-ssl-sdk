package main

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/modelcontextprotocol/go-sdk/mcp"
	sdk "github.com/voxgig-sdk/cloudflare-ssl-sdk/go"
)

// Args is the common argument shape for both tools. `entity` selects
// the SDK entity to operate on; `query` is the optional reqmatch /
// reqdata map passed through to the SDK. For load, `query` should be
// `{"id": <value>}`. For list, omit `query` or pass an empty map.
type Args struct {
	Entity string         `json:"entity" jsonschema:"cache_api_response_single_id | cache_auto_origin_tls_kex | custom_hostname | custom_hostname_for_a_zone | origin_tl | recommendation | ssl_automatic_mode | tls_certificates_and_hostnames_advanced_certificate_pack_response | tls_certificates_and_hostnames_association_response_collection | tls_certificates_and_hostnames_certificate_analyze | tls_certificates_and_hostnames_certificate_pack_quota | tls_certificates_and_hostnames_certificate_pack_response_collection | tls_certificates_and_hostnames_certificate_pack_response_single | tls_certificates_and_hostnames_certificate_response_collection | tls_certificates_and_hostnames_certificate_response_collection_3 | tls_certificates_and_hostnames_certificate_response_collection_4 | tls_certificates_and_hostnames_certificate_response_collection_5 | tls_certificates_and_hostnames_certificate_response_id_only | tls_certificates_and_hostnames_certificate_response_single | tls_certificates_and_hostnames_certificate_response_single_2 | tls_certificates_and_hostnames_certificate_response_single_3 | tls_certificates_and_hostnames_certificate_response_single_4 | tls_certificates_and_hostnames_certificate_response_single_5 | tls_certificates_and_hostnames_certificate_response_single_post | tls_certificates_and_hostnames_certificate_revoke | tls_certificates_and_hostnames_client_certificate_response | tls_certificates_and_hostnames_client_certificate_response_single | tls_certificates_and_hostnames_custom_csr_response_collection | tls_certificates_and_hostnames_custom_csr_response_collection_2 | tls_certificates_and_hostnames_custom_csr_response_id_only | tls_certificates_and_hostnames_custom_csr_response_single | tls_certificates_and_hostnames_custom_csr_response_single_2 | tls_certificates_and_hostnames_custom_hostname_quota | tls_certificates_and_hostnames_custom_hostname_response_collection | tls_certificates_and_hostnames_custom_hostname_response_single | tls_certificates_and_hostnames_custom_trust_store_response | tls_certificates_and_hostnames_custom_trust_store_response_id_only | tls_certificates_and_hostnames_custom_trust_store_response_single | tls_certificates_and_hostnames_delete_advanced_certificate_pack | tls_certificates_and_hostnames_enabled | tls_certificates_and_hostnames_fallback_origin | tls_certificates_and_hostnames_hostname_aop_response_collection | tls_certificates_and_hostnames_hostname_aop_single | tls_certificates_and_hostnames_hostname_assoc_response_collection | tls_certificates_and_hostnames_keyless_response_collection | tls_certificates_and_hostnames_keyless_response_single | tls_certificates_and_hostnames_keyless_response_single_id | tls_certificates_and_hostnames_per_hostname_setting | tls_certificates_and_hostnames_per_hostname_settings_response | tls_certificates_and_hostnames_per_hostname_settings_response2 | tls_certificates_and_hostnames_ssl_universal_setting | tls_certificates_and_hostnames_ssl_validation_method_response | tls_certificates_and_hostnames_ssl_verification_response_collection | tls_certificates_and_hostnames_total_tls_setting"`
	Query  map[string]any `json:"query,omitempty" jsonschema:"optional match map e.g. {\"id\":1} for load, omit for list"`
}

func registerTools(server *mcp.Server, client *sdk.CloudflareSslSDK) {
	mcp.AddTool(server, &mcp.Tool{
		Name: "cloudflare-ssl_list",
		Description: "List records from CloudflareSsl. " +
			"Args: entity (one of the supported SDK entities), query (optional filter map). " +
			"Returns the first page of records as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "list", args)
	})

	mcp.AddTool(server, &mcp.Tool{
		Name: "cloudflare-ssl_load",
		Description: "Load a single record from CloudflareSsl. " +
			"Args: entity, query ({\"id\":N} required). Returns the record as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "load", args)
	})
}

func runOp(client *sdk.CloudflareSslSDK, op string, args Args) (*mcp.CallToolResult, any, error) {
	ent, err := entityFor(client, args.Entity)
	if err != nil {
		return toolError(err.Error())
	}

	var result any
	switch op {
	case "list":
		result, err = ent.List(args.Query, nil)
	case "load":
		result, err = ent.Load(args.Query, nil)
	default:
		return toolError(fmt.Sprintf("unknown op %q", op))
	}
	if err != nil {
		return toolError(err.Error())
	}

	// SDK returns *Entity wrappers; unwrap each via .Data() to get a
	// plain map[string]any (or []any of maps for list) suitable for
	// JSON marshalling.
	data := extractData(result)
	body, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return toolError(fmt.Sprintf("marshal: %v", err))
	}
	return &mcp.CallToolResult{
		Content: []mcp.Content{
			&mcp.TextContent{Text: string(body)},
		},
	}, data, nil
}

// entityFor dispatches on the lowercase entity name. The generator
// emits one `case "<name>":` per entity defined in the SDK model.
func entityFor(client *sdk.CloudflareSslSDK, name string) (sdk.CloudflareSslEntity, error) {
	switch strings.ToLower(name) {
	case "cache_api_response_single_id":
		return client.CacheApiResponseSingleId(nil), nil
	case "cache_auto_origin_tls_kex":
		return client.CacheAutoOriginTlsKex(nil), nil
	case "custom_hostname":
		return client.CustomHostname(nil), nil
	case "custom_hostname_for_a_zone":
		return client.CustomHostnameForAZone(nil), nil
	case "origin_tl":
		return client.OriginTl(nil), nil
	case "recommendation":
		return client.Recommendation(nil), nil
	case "ssl_automatic_mode":
		return client.SslAutomaticMode(nil), nil
	case "tls_certificates_and_hostnames_advanced_certificate_pack_response":
		return client.TlsCertificatesAndHostnamesAdvancedCertificatePackResponse(nil), nil
	case "tls_certificates_and_hostnames_association_response_collection":
		return client.TlsCertificatesAndHostnamesAssociationResponseCollection(nil), nil
	case "tls_certificates_and_hostnames_certificate_analyze":
		return client.TlsCertificatesAndHostnamesCertificateAnalyze(nil), nil
	case "tls_certificates_and_hostnames_certificate_pack_quota":
		return client.TlsCertificatesAndHostnamesCertificatePackQuota(nil), nil
	case "tls_certificates_and_hostnames_certificate_pack_response_collection":
		return client.TlsCertificatesAndHostnamesCertificatePackResponseCollection(nil), nil
	case "tls_certificates_and_hostnames_certificate_pack_response_single":
		return client.TlsCertificatesAndHostnamesCertificatePackResponseSingle(nil), nil
	case "tls_certificates_and_hostnames_certificate_response_collection":
		return client.TlsCertificatesAndHostnamesCertificateResponseCollection(nil), nil
	case "tls_certificates_and_hostnames_certificate_response_collection_3":
		return client.TlsCertificatesAndHostnamesCertificateResponseCollection3(nil), nil
	case "tls_certificates_and_hostnames_certificate_response_collection_4":
		return client.TlsCertificatesAndHostnamesCertificateResponseCollection4(nil), nil
	case "tls_certificates_and_hostnames_certificate_response_collection_5":
		return client.TlsCertificatesAndHostnamesCertificateResponseCollection5(nil), nil
	case "tls_certificates_and_hostnames_certificate_response_id_only":
		return client.TlsCertificatesAndHostnamesCertificateResponseIdOnly(nil), nil
	case "tls_certificates_and_hostnames_certificate_response_single":
		return client.TlsCertificatesAndHostnamesCertificateResponseSingle(nil), nil
	case "tls_certificates_and_hostnames_certificate_response_single_2":
		return client.TlsCertificatesAndHostnamesCertificateResponseSingle2(nil), nil
	case "tls_certificates_and_hostnames_certificate_response_single_3":
		return client.TlsCertificatesAndHostnamesCertificateResponseSingle3(nil), nil
	case "tls_certificates_and_hostnames_certificate_response_single_4":
		return client.TlsCertificatesAndHostnamesCertificateResponseSingle4(nil), nil
	case "tls_certificates_and_hostnames_certificate_response_single_5":
		return client.TlsCertificatesAndHostnamesCertificateResponseSingle5(nil), nil
	case "tls_certificates_and_hostnames_certificate_response_single_post":
		return client.TlsCertificatesAndHostnamesCertificateResponseSinglePost(nil), nil
	case "tls_certificates_and_hostnames_certificate_revoke":
		return client.TlsCertificatesAndHostnamesCertificateRevoke(nil), nil
	case "tls_certificates_and_hostnames_client_certificate_response":
		return client.TlsCertificatesAndHostnamesClientCertificateResponse(nil), nil
	case "tls_certificates_and_hostnames_client_certificate_response_single":
		return client.TlsCertificatesAndHostnamesClientCertificateResponseSingle(nil), nil
	case "tls_certificates_and_hostnames_custom_csr_response_collection":
		return client.TlsCertificatesAndHostnamesCustomCsrResponseCollection(nil), nil
	case "tls_certificates_and_hostnames_custom_csr_response_collection_2":
		return client.TlsCertificatesAndHostnamesCustomCsrResponseCollection2(nil), nil
	case "tls_certificates_and_hostnames_custom_csr_response_id_only":
		return client.TlsCertificatesAndHostnamesCustomCsrResponseIdOnly(nil), nil
	case "tls_certificates_and_hostnames_custom_csr_response_single":
		return client.TlsCertificatesAndHostnamesCustomCsrResponseSingle(nil), nil
	case "tls_certificates_and_hostnames_custom_csr_response_single_2":
		return client.TlsCertificatesAndHostnamesCustomCsrResponseSingle2(nil), nil
	case "tls_certificates_and_hostnames_custom_hostname_quota":
		return client.TlsCertificatesAndHostnamesCustomHostnameQuota(nil), nil
	case "tls_certificates_and_hostnames_custom_hostname_response_collection":
		return client.TlsCertificatesAndHostnamesCustomHostnameResponseCollection(nil), nil
	case "tls_certificates_and_hostnames_custom_hostname_response_single":
		return client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle(nil), nil
	case "tls_certificates_and_hostnames_custom_trust_store_response":
		return client.TlsCertificatesAndHostnamesCustomTrustStoreResponse(nil), nil
	case "tls_certificates_and_hostnames_custom_trust_store_response_id_only":
		return client.TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly(nil), nil
	case "tls_certificates_and_hostnames_custom_trust_store_response_single":
		return client.TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle(nil), nil
	case "tls_certificates_and_hostnames_delete_advanced_certificate_pack":
		return client.TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack(nil), nil
	case "tls_certificates_and_hostnames_enabled":
		return client.TlsCertificatesAndHostnamesEnabled(nil), nil
	case "tls_certificates_and_hostnames_fallback_origin":
		return client.TlsCertificatesAndHostnamesFallbackOrigin(nil), nil
	case "tls_certificates_and_hostnames_hostname_aop_response_collection":
		return client.TlsCertificatesAndHostnamesHostnameAopResponseCollection(nil), nil
	case "tls_certificates_and_hostnames_hostname_aop_single":
		return client.TlsCertificatesAndHostnamesHostnameAopSingle(nil), nil
	case "tls_certificates_and_hostnames_hostname_assoc_response_collection":
		return client.TlsCertificatesAndHostnamesHostnameAssocResponseCollection(nil), nil
	case "tls_certificates_and_hostnames_keyless_response_collection":
		return client.TlsCertificatesAndHostnamesKeylessResponseCollection(nil), nil
	case "tls_certificates_and_hostnames_keyless_response_single":
		return client.TlsCertificatesAndHostnamesKeylessResponseSingle(nil), nil
	case "tls_certificates_and_hostnames_keyless_response_single_id":
		return client.TlsCertificatesAndHostnamesKeylessResponseSingleId(nil), nil
	case "tls_certificates_and_hostnames_per_hostname_setting":
		return client.TlsCertificatesAndHostnamesPerHostnameSetting(nil), nil
	case "tls_certificates_and_hostnames_per_hostname_settings_response":
		return client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse(nil), nil
	case "tls_certificates_and_hostnames_per_hostname_settings_response2":
		return client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse2(nil), nil
	case "tls_certificates_and_hostnames_ssl_universal_setting":
		return client.TlsCertificatesAndHostnamesSslUniversalSetting(nil), nil
	case "tls_certificates_and_hostnames_ssl_validation_method_response":
		return client.TlsCertificatesAndHostnamesSslValidationMethodResponse(nil), nil
	case "tls_certificates_and_hostnames_ssl_verification_response_collection":
		return client.TlsCertificatesAndHostnamesSslVerificationResponseCollection(nil), nil
	case "tls_certificates_and_hostnames_total_tls_setting":
		return client.TlsCertificatesAndHostnamesTotalTlsSetting(nil), nil

	}
	return nil, fmt.Errorf("unknown entity %q", name)
}

func extractData(x any) any {
	switch v := x.(type) {
	case sdk.Entity:
		return extractData(v.Data())
	case []any:
		out := make([]any, len(v))
		for i, e := range v {
			out[i] = extractData(e)
		}
		return out
	case map[string]any:
		out := make(map[string]any, len(v))
		for k, vv := range v {
			out[k] = extractData(vv)
		}
		return out
	}
	return x
}

func toolError(msg string) (*mcp.CallToolResult, any, error) {
	return &mcp.CallToolResult{
		IsError: true,
		Content: []mcp.Content{
			&mcp.TextContent{Text: msg},
		},
	}, nil, nil
}
