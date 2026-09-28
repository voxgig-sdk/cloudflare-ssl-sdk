package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "CloudflareSsl",
			"slug": "cloudflare-ssl",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://api.cloudflare.com/client/v4",
			"auth": map[string]any{
				"prefix": "",
				"name": "X-Auth-Email",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"cache_api_response_single_id": map[string]any{},
				"cache_auto_origin_tls_kex": map[string]any{},
				"custom_hostname": map[string]any{},
				"custom_hostname_for_a_zone": map[string]any{},
				"origin_tl": map[string]any{},
				"recommendation": map[string]any{},
				"ssl_automatic_mode": map[string]any{},
				"tls_certificates_and_hostnames_advanced_certificate_pack_response": map[string]any{},
				"tls_certificates_and_hostnames_association_response_collection": map[string]any{},
				"tls_certificates_and_hostnames_certificate_analyze": map[string]any{},
				"tls_certificates_and_hostnames_certificate_pack_quota": map[string]any{},
				"tls_certificates_and_hostnames_certificate_pack_response_collection": map[string]any{},
				"tls_certificates_and_hostnames_certificate_pack_response_single": map[string]any{},
				"tls_certificates_and_hostnames_certificate_response_collection": map[string]any{},
				"tls_certificates_and_hostnames_certificate_response_collection_3": map[string]any{},
				"tls_certificates_and_hostnames_certificate_response_collection_4": map[string]any{},
				"tls_certificates_and_hostnames_certificate_response_collection_5": map[string]any{},
				"tls_certificates_and_hostnames_certificate_response_id_only": map[string]any{},
				"tls_certificates_and_hostnames_certificate_response_single": map[string]any{},
				"tls_certificates_and_hostnames_certificate_response_single_2": map[string]any{},
				"tls_certificates_and_hostnames_certificate_response_single_3": map[string]any{},
				"tls_certificates_and_hostnames_certificate_response_single_4": map[string]any{},
				"tls_certificates_and_hostnames_certificate_response_single_5": map[string]any{},
				"tls_certificates_and_hostnames_certificate_response_single_post": map[string]any{},
				"tls_certificates_and_hostnames_certificate_revoke": map[string]any{},
				"tls_certificates_and_hostnames_client_certificate_response": map[string]any{},
				"tls_certificates_and_hostnames_client_certificate_response_single": map[string]any{},
				"tls_certificates_and_hostnames_custom_csr_response_collection": map[string]any{},
				"tls_certificates_and_hostnames_custom_csr_response_collection_2": map[string]any{},
				"tls_certificates_and_hostnames_custom_csr_response_id_only": map[string]any{},
				"tls_certificates_and_hostnames_custom_csr_response_single": map[string]any{},
				"tls_certificates_and_hostnames_custom_csr_response_single_2": map[string]any{},
				"tls_certificates_and_hostnames_custom_hostname_quota": map[string]any{},
				"tls_certificates_and_hostnames_custom_hostname_response_collection": map[string]any{},
				"tls_certificates_and_hostnames_custom_hostname_response_single": map[string]any{},
				"tls_certificates_and_hostnames_custom_trust_store_response": map[string]any{},
				"tls_certificates_and_hostnames_custom_trust_store_response_id_only": map[string]any{},
				"tls_certificates_and_hostnames_custom_trust_store_response_single": map[string]any{},
				"tls_certificates_and_hostnames_delete_advanced_certificate_pack": map[string]any{},
				"tls_certificates_and_hostnames_enabled": map[string]any{},
				"tls_certificates_and_hostnames_fallback_origin": map[string]any{},
				"tls_certificates_and_hostnames_hostname_aop_response_collection": map[string]any{},
				"tls_certificates_and_hostnames_hostname_aop_single": map[string]any{},
				"tls_certificates_and_hostnames_hostname_assoc_response_collection": map[string]any{},
				"tls_certificates_and_hostnames_keyless_response_collection": map[string]any{},
				"tls_certificates_and_hostnames_keyless_response_single": map[string]any{},
				"tls_certificates_and_hostnames_keyless_response_single_id": map[string]any{},
				"tls_certificates_and_hostnames_per_hostname_setting": map[string]any{},
				"tls_certificates_and_hostnames_per_hostname_settings_response": map[string]any{},
				"tls_certificates_and_hostnames_per_hostname_settings_response2": map[string]any{},
				"tls_certificates_and_hostnames_ssl_universal_setting": map[string]any{},
				"tls_certificates_and_hostnames_ssl_validation_method_response": map[string]any{},
				"tls_certificates_and_hostnames_ssl_verification_response_collection": map[string]any{},
				"tls_certificates_and_hostnames_total_tls_setting": map[string]any{},
			},
		},
		"entity": map[string]any{
			"cache_api_response_single_id": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates the API call's success or failure.",
					},
					map[string]any{
						"name": "value",
						"title": "Value",
						"type": "`$STRING`",
						"req": true,
						"short": "Controls enablement of Automatic SSL/TLS.",
					},
				},
				"name": "cache_api_response_single_id",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/settings/ssl_automatic_mode",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "ssl_automatic_mode",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"ssl_automatic_mode",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"cache_auto_origin_tls_kex": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Controls enablement of Auto-Origin TLS KEX selection for the zone.",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates the API call's success or failure.",
					},
				},
				"name": "cache_auto_origin_tls_kex",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/settings/auto_origin_tls_kex",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "auto_origin_tls_kex",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"auto_origin_tls_kex",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/settings/auto_origin_tls_kex",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "auto_origin_tls_kex",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"auto_origin_tls_kex",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"custom_hostname": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "custom_hostname",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/zones/{zone_id}/custom_hostnames/{custom_hostname_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "custom_hostnames",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"custom_hostnames",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"custom_hostname_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "custom_hostname_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "0d89c70d-ad9f-4843-b99f-6cc0252067e9",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"custom_hostname_for_a_zone": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "custom_certificate",
						"title": "Custom Certificate",
						"type": "`$STRING`",
						"req": true,
						"short": "If a custom uploaded certificate is used.",
					},
					map[string]any{
						"name": "custom_key",
						"title": "Custom Key",
						"type": "`$STRING`",
						"req": true,
						"short": "The key for a custom uploaded certificate.",
					},
				},
				"name": "custom_hostname_for_a_zone",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/zones/{zone_id}/custom_hostnames/{custom_hostname_id}/certificate_pack/{certificate_pack_id}/certificates/{certificate_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "custom_hostnames",
									},
									map[string]any{
										"var": "custom_hostname_id",
									},
									map[string]any{
										"lit": "certificate_pack",
									},
									map[string]any{
										"var": "certificate_pack_id",
									},
									map[string]any{
										"lit": "certificates",
									},
									map[string]any{
										"var": "certificate_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"custom_hostnames",
									"{custom_hostname_id}",
									"certificate_pack",
									"{certificate_pack_id}",
									"certificates",
									"{certificate_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "certificate_id",
											"orig": "certificate_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "0d89c70d-ad9f-4843-b99f-6cc0252067e9",
										},
										map[string]any{
											"name": "certificate_pack_id",
											"orig": "certificate_pack_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "0d89c70d-ad9f-4843-b99f-6cc0252067e9",
										},
										map[string]any{
											"name": "custom_hostname_id",
											"orig": "custom_hostname_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "0d89c70d-ad9f-4843-b99f-6cc0252067e9",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"certificate_id",
										"certificate_pack_id",
										"custom_hostname_id",
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/zones/{zone_id}/custom_hostnames/{custom_hostname_id}/certificate_pack/{certificate_pack_id}/certificates/{certificate_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "custom_hostnames",
									},
									map[string]any{
										"var": "custom_hostname_id",
									},
									map[string]any{
										"lit": "certificate_pack",
									},
									map[string]any{
										"var": "certificate_pack_id",
									},
									map[string]any{
										"lit": "certificates",
									},
									map[string]any{
										"var": "certificate_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"custom_hostnames",
									"{custom_hostname_id}",
									"certificate_pack",
									"{certificate_pack_id}",
									"certificates",
									"{certificate_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "certificate_id",
											"orig": "certificate_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "0d89c70d-ad9f-4843-b99f-6cc0252067e9",
										},
										map[string]any{
											"name": "certificate_pack_id",
											"orig": "certificate_pack_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "0d89c70d-ad9f-4843-b99f-6cc0252067e9",
										},
										map[string]any{
											"name": "custom_hostname_id",
											"orig": "custom_hostname_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "0d89c70d-ad9f-4843-b99f-6cc0252067e9",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"certificate_id",
										"certificate_pack_id",
										"custom_hostname_id",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.custom_hostname",
						},
					},
				},
			},
			"origin_tl": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "value",
						"title": "Value",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of TLS compliance modes that constrain the key-exchange algorithms Cloudflare may use when establishing the TLS connection to the zone's origin.",
					},
				},
				"name": "origin_tl",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/settings/origin_tls_compliance_modes",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "origin_tls_compliance_modes",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"origin_tls_compliance_modes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"patch": map[string]any{
						"input": "data",
						"name": "patch",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/settings/origin_tls_compliance_modes",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "origin_tls_compliance_modes",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"origin_tls_compliance_modes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/zones/{zone_id}/settings/origin_tls_compliance_modes",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "origin_tls_compliance_modes",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"origin_tls_compliance_modes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/zones/{zone_id}/settings/origin_tls_compliance_modes",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "origin_tls_compliance_modes",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"origin_tls_compliance_modes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"recommendation": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates the API call's success or failure.",
					},
				},
				"name": "recommendation",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/ssl/recommendation",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "ssl",
									},
									map[string]any{
										"lit": "recommendation",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"ssl",
									"recommendation",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"ssl_automatic_mode": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates the API call's success or failure.",
					},
				},
				"name": "ssl_automatic_mode",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/settings/ssl_automatic_mode",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "ssl_automatic_mode",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"ssl_automatic_mode",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_advanced_certificate_pack_response": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "certificate_authority",
						"title": "Certificate Authority",
						"type": "`$STRING`",
						"req": true,
						"short": "Certificate Authority selected for the order.",
					},
					map[string]any{
						"name": "cloudflare_branding",
						"title": "Cloudflare Branding",
						"type": "`$BOOLEAN`",
						"short": "Whether or not to add Cloudflare Branding for the order.",
					},
					map[string]any{
						"name": "hosts",
						"title": "Hosts",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Comma separated list of valid host names for the certificate packs.",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Type of certificate pack.",
					},
					map[string]any{
						"name": "validation_method",
						"title": "Validation Method",
						"type": "`$STRING`",
						"req": true,
						"short": "Validation Method selected for the order.",
					},
					map[string]any{
						"name": "validity_days",
						"title": "Validity Days",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Validity Days selected for the order.",
					},
				},
				"name": "tls_certificates_and_hostnames_advanced_certificate_pack_response",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/ssl/certificate_packs/order",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "ssl",
									},
									map[string]any{
										"lit": "certificate_packs",
									},
									map[string]any{
										"lit": "order",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"ssl",
									"certificate_packs",
									"order",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "ssl",
									},
									map[string]any{
										"lit": "certificate_packs",
									},
									map[string]any{
										"var": "certificate_pack_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"ssl",
									"certificate_packs",
									"{certificate_pack_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "certificate_pack_id",
											"orig": "certificate_pack_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3822ff90-ea29-44df-9e55-21300bb9419b",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"certificate_pack_id",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_association_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "tls_certificates_and_hostnames_association_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/mtls_certificates/{mtls_certificate_id}/associations",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "mtls_certificates",
									},
									map[string]any{
										"var": "mtls_certificate_id",
									},
									map[string]any{
										"lit": "associations",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"mtls_certificates",
									"{mtls_certificate_id}",
									"associations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "mtls_certificate_id",
											"orig": "mtls_certificate_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "2458ce5a-0c35-4c7f-82c7-8e9487d3ff60",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"mtls_certificate_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_certificate_analyze": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "bundle_method",
						"title": "Bundle Method",
						"type": "`$STRING`",
						"short": "A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores.",
					},
					map[string]any{
						"name": "certificate",
						"title": "Certificate",
						"type": "`$STRING`",
						"short": "The zone's SSL certificate or certificate and the intermediate(s).",
					},
				},
				"name": "tls_certificates_and_hostnames_certificate_analyze",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/ssl/analyze",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "ssl",
									},
									map[string]any{
										"lit": "analyze",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"ssl",
									"analyze",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_certificate_pack_quota": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "tls_certificates_and_hostnames_certificate_pack_quota",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/ssl/certificate_packs/quota",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "ssl",
									},
									map[string]any{
										"lit": "certificate_packs",
									},
									map[string]any{
										"lit": "quota",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"ssl",
									"certificate_packs",
									"quota",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_certificate_pack_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "tls_certificates_and_hostnames_certificate_pack_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/ssl/certificate_packs",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "ssl",
									},
									map[string]any{
										"lit": "certificate_packs",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"ssl",
									"certificate_packs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "deploy",
											"orig": "deploy",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"deploy",
										"page",
										"per_page",
										"status",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_certificate_pack_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"short": "A certificate pack with all its properties.",
					},
				},
				"name": "tls_certificates_and_hostnames_certificate_pack_response_single",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "ssl",
									},
									map[string]any{
										"lit": "certificate_packs",
									},
									map[string]any{
										"var": "certificate_pack_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"ssl",
									"certificate_packs",
									"{certificate_pack_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "certificate_pack_id",
											"orig": "certificate_pack_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3822ff90-ea29-44df-9e55-21300bb9419b",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"certificate_pack_id",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_certificate_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "certificates",
						"title": "Certificates",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Array of ordered certificates.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "tls_certificates_and_hostnames_certificate_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/custom_certificates",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "custom_certificates",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"custom_certificates",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "match",
											"orig": "match",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
											"example": "active",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"match",
										"page",
										"per_page",
										"status",
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/zones/{zone_id}/custom_certificates/prioritize",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "custom_certificates",
									},
									map[string]any{
										"lit": "prioritize",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"custom_certificates",
									"prioritize",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_certificate_response_collection_3": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "tls_certificates_and_hostnames_certificate_response_collection_3",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/origin_tls_client_auth",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "origin_tls_client_auth",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"origin_tls_client_auth",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_certificate_response_collection_4": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "tls_certificates_and_hostnames_certificate_response_collection_4",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/origin_tls_client_auth/hostnames/certificates",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "origin_tls_client_auth",
									},
									map[string]any{
										"lit": "hostnames",
									},
									map[string]any{
										"lit": "certificates",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"origin_tls_client_auth",
									"hostnames",
									"certificates",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_certificate_response_collection_5": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
					},
				},
				"name": "tls_certificates_and_hostnames_certificate_response_collection_5",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/mtls_certificates",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "mtls_certificates",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"mtls_certificates",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": []any{
												"custom",
											},
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"type",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_certificate_response_id_only": map[string]any{
				"fields": []any{},
				"name": "tls_certificates_and_hostnames_certificate_response_id_only",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/zones/{zone_id}/custom_certificates/{custom_certificate_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "custom_certificates",
									},
									map[string]any{
										"var": "custom_certificate_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"custom_certificates",
									"{custom_certificate_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "custom_certificate_id",
											"orig": "custom_certificate_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "2458ce5a-0c35-4c7f-82c7-8e9487d3ff60",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"custom_certificate_id",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_certificate_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "bundle_method",
						"title": "Bundle Method",
						"type": "`$STRING`",
						"short": "A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores.",
					},
					map[string]any{
						"name": "certificate",
						"title": "Certificate",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The zone's SSL certificate or certificate and the intermediate(s).",
					},
					map[string]any{
						"name": "custom_csr_id",
						"title": "Custom Csr Id",
						"type": "`$STRING`",
						"short": "The identifier for the Custom CSR that was used.",
					},
					map[string]any{
						"name": "deploy",
						"title": "Deploy",
						"type": "`$STRING`",
						"short": "The environment to deploy the certificate to, defaults to production.",
					},
					map[string]any{
						"name": "geo_restrictions",
						"title": "Geo Restrictions",
						"type": "`$OBJECT`",
						"short": "Specify the region where your private key can be held locally for optimal TLS performance.",
					},
					map[string]any{
						"name": "policy",
						"title": "Policy",
						"type": "`$STRING`",
						"short": "Specify the policy that determines the region where your private key will be held locally.",
					},
					map[string]any{
						"name": "private_key",
						"title": "Private Key",
						"type": "`$STRING`",
						"short": "The zone's private key.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"short": "The type 'legacy_custom' enables support for legacy clients which do not include SNI in the TLS handshake.",
					},
				},
				"name": "tls_certificates_and_hostnames_certificate_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/custom_certificates",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "custom_certificates",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"custom_certificates",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/custom_certificates/{custom_certificate_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "custom_certificates",
									},
									map[string]any{
										"var": "custom_certificate_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"custom_certificates",
									"{custom_certificate_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "custom_certificate_id",
											"orig": "custom_certificate_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "2458ce5a-0c35-4c7f-82c7-8e9487d3ff60",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"custom_certificate_id",
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/custom_certificates/{custom_certificate_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "custom_certificates",
									},
									map[string]any{
										"var": "custom_certificate_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"custom_certificates",
									"{custom_certificate_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "custom_certificate_id",
											"orig": "custom_certificate_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "2458ce5a-0c35-4c7f-82c7-8e9487d3ff60",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"custom_certificate_id",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_certificate_response_single_2": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "csr",
						"title": "Csr",
						"type": "`$STRING`",
						"req": true,
						"short": "The Certificate Signing Request (CSR).",
					},
					map[string]any{
						"name": "hostnames",
						"title": "Hostnames",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Array of hostnames or wildcard names bound to the certificate.",
					},
					map[string]any{
						"name": "request_type",
						"title": "Request Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Signature type desired on certificate (\"origin-rsa\" (rsa), \"origin-ecc\" (ecdsa), or \"keyless-certificate\" (for Keyless SSL servers).",
					},
					map[string]any{
						"name": "requested_validity",
						"title": "Requested Validity",
						"type": "`$NUMBER`",
						"short": "The number of days for which the certificate should be valid.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
						},
					},
				},
				"name": "tls_certificates_and_hostnames_certificate_response_single_2",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/certificates",
								"segments": []any{
									map[string]any{
										"lit": "certificates",
									},
								},
								"parts": []any{
									"certificates",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/certificates",
								"segments": []any{
									map[string]any{
										"lit": "certificates",
									},
								},
								"parts": []any{
									"certificates",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"offset",
										"page",
										"per_page",
										"zone_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/certificates/{certificate_id}",
								"segments": []any{
									map[string]any{
										"lit": "certificates",
									},
									map[string]any{
										"var": "certificate_id",
									},
								},
								"parts": []any{
									"certificates",
									"{certificate_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "certificate_id",
											"orig": "certificate_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "328578533902268680212849205732770752308931942346",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"certificate_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_certificate_response_single_3": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "certificate",
						"title": "Certificate",
						"type": "`$STRING`",
						"req": true,
						"short": "The zone's leaf certificate.",
					},
					map[string]any{
						"name": "private_key",
						"title": "Private Key",
						"type": "`$STRING`",
						"req": true,
						"short": "The zone's private key.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "tls_certificates_and_hostnames_certificate_response_single_3",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/origin_tls_client_auth",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "origin_tls_client_auth",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"origin_tls_client_auth",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/origin_tls_client_auth/{certificate_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "origin_tls_client_auth",
									},
									map[string]any{
										"var": "certificate_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"origin_tls_client_auth",
									"{certificate_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "certificate_id",
											"orig": "certificate_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "2458ce5a-0c35-4c7f-82c7-8e9487d3ff60",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"certificate_id",
										"zone_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/zones/{zone_id}/origin_tls_client_auth/{certificate_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "origin_tls_client_auth",
									},
									map[string]any{
										"var": "certificate_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"origin_tls_client_auth",
									"{certificate_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "certificate_id",
											"orig": "certificate_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "2458ce5a-0c35-4c7f-82c7-8e9487d3ff60",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"certificate_id",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_certificate_response_single_4": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "certificate",
						"title": "Certificate",
						"type": "`$STRING`",
						"req": true,
						"short": "The hostname certificate.",
					},
					map[string]any{
						"name": "private_key",
						"title": "Private Key",
						"type": "`$STRING`",
						"req": true,
						"short": "The hostname certificate's private key.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "tls_certificates_and_hostnames_certificate_response_single_4",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/origin_tls_client_auth/hostnames/certificates",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "origin_tls_client_auth",
									},
									map[string]any{
										"lit": "hostnames",
									},
									map[string]any{
										"lit": "certificates",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"origin_tls_client_auth",
									"hostnames",
									"certificates",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/origin_tls_client_auth/hostnames/certificates/{certificate_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "origin_tls_client_auth",
									},
									map[string]any{
										"lit": "hostnames",
									},
									map[string]any{
										"lit": "certificates",
									},
									map[string]any{
										"var": "certificate_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"origin_tls_client_auth",
									"hostnames",
									"certificates",
									"{certificate_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "certificate_id",
											"orig": "certificate_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "2458ce5a-0c35-4c7f-82c7-8e9487d3ff60",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"certificate_id",
										"zone_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/zones/{zone_id}/origin_tls_client_auth/hostnames/certificates/{certificate_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "origin_tls_client_auth",
									},
									map[string]any{
										"lit": "hostnames",
									},
									map[string]any{
										"lit": "certificates",
									},
									map[string]any{
										"var": "certificate_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"origin_tls_client_auth",
									"hostnames",
									"certificates",
									"{certificate_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "certificate_id",
											"orig": "certificate_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "2458ce5a-0c35-4c7f-82c7-8e9487d3ff60",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"certificate_id",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_certificate_response_single_5": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "tls_certificates_and_hostnames_certificate_response_single_5",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/mtls_certificates/{mtls_certificate_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "mtls_certificates",
									},
									map[string]any{
										"var": "mtls_certificate_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"mtls_certificates",
									"{mtls_certificate_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "mtls_certificate_id",
											"orig": "mtls_certificate_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "2458ce5a-0c35-4c7f-82c7-8e9487d3ff60",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"mtls_certificate_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/mtls_certificates/{mtls_certificate_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "mtls_certificates",
									},
									map[string]any{
										"var": "mtls_certificate_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"mtls_certificates",
									"{mtls_certificate_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "mtls_certificate_id",
											"orig": "mtls_certificate_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "2458ce5a-0c35-4c7f-82c7-8e9487d3ff60",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"mtls_certificate_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_certificate_response_single_post": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ca",
						"title": "Ca",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether the certificate is a CA or leaf certificate.",
					},
					map[string]any{
						"name": "certificates",
						"title": "Certificates",
						"type": "`$STRING`",
						"req": true,
						"short": "The uploaded root CA certificate.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Optional unique name for the certificate.",
					},
					map[string]any{
						"name": "private_key",
						"title": "Private Key",
						"type": "`$STRING`",
						"short": "The private key for the certificate.",
					},
				},
				"name": "tls_certificates_and_hostnames_certificate_response_single_post",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/mtls_certificates",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "mtls_certificates",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"mtls_certificates",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_certificate_revoke": map[string]any{
				"fields": []any{},
				"name": "tls_certificates_and_hostnames_certificate_revoke",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/certificates/{certificate_id}",
								"segments": []any{
									map[string]any{
										"lit": "certificates",
									},
									map[string]any{
										"var": "certificate_id",
									},
								},
								"parts": []any{
									"certificates",
									"{certificate_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "certificate_id",
											"orig": "certificate_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "328578533902268680212849205732770752308931942346",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"certificate_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_client_certificate_response": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "tls_certificates_and_hostnames_client_certificate_response",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/client_certificates",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "client_certificates",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"client_certificates",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"offset",
										"page",
										"per_page",
										"status",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_client_certificate_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "csr",
						"title": "Csr",
						"type": "`$STRING`",
						"req": true,
						"short": "The Certificate Signing Request (CSR).",
					},
					map[string]any{
						"name": "reactivate",
						"title": "Reactivate",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "validity_days",
						"title": "Validity Days",
						"type": "`$INTEGER`",
						"req": true,
						"short": "The number of days the Client Certificate will be valid after the issued_on date.",
					},
				},
				"name": "tls_certificates_and_hostnames_client_certificate_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/client_certificates",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "client_certificates",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"client_certificates",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/client_certificates/{client_certificate_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "client_certificates",
									},
									map[string]any{
										"var": "client_certificate_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"client_certificates",
									"{client_certificate_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "client_certificate_id",
											"orig": "client_certificate_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "0d89c70d-ad9f-4843-b99f-6cc0252067e9",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"client_certificate_id",
										"zone_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/zones/{zone_id}/client_certificates/{client_certificate_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "client_certificates",
									},
									map[string]any{
										"var": "client_certificate_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"client_certificates",
									"{client_certificate_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "client_certificate_id",
											"orig": "client_certificate_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "0d89c70d-ad9f-4843-b99f-6cc0252067e9",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"client_certificate_id",
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/client_certificates/{client_certificate_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "client_certificates",
									},
									map[string]any{
										"var": "client_certificate_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"client_certificates",
									"{client_certificate_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "client_certificate_id",
											"orig": "client_certificate_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "0d89c70d-ad9f-4843-b99f-6cc0252067e9",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"client_certificate_id",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_custom_csr_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "tls_certificates_and_hostnames_custom_csr_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/custom_csrs",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "custom_csrs",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"custom_csrs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 20,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"per_page",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_custom_csr_response_collection_2": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "tls_certificates_and_hostnames_custom_csr_response_collection_2",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/custom_csrs",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "custom_csrs",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"custom_csrs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
											"kind": "query",
											"example": "asc",
										},
										map[string]any{
											"name": "order",
											"orig": "order",
											"type": "`$STRING`",
											"kind": "query",
											"example": "created_at",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"direction",
										"order",
										"page",
										"per_page",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_custom_csr_response_id_only": map[string]any{
				"fields": []any{},
				"name": "tls_certificates_and_hostnames_custom_csr_response_id_only",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/custom_csrs/{custom_csr_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "custom_csrs",
									},
									map[string]any{
										"var": "custom_csr_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"custom_csrs",
									"{custom_csr_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "custom_csr_id",
											"orig": "custom_csr_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "7b163417-1d2b-4c84-a38a-2fb7a0cd7752",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"custom_csr_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/zones/{zone_id}/custom_csrs/{custom_csr_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "custom_csrs",
									},
									map[string]any{
										"var": "custom_csr_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"custom_csrs",
									"{custom_csr_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "custom_csr_id",
											"orig": "custom_csr_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "7b163417-1d2b-4c84-a38a-2fb7a0cd7752",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"custom_csr_id",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_custom_csr_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "common_name",
						"title": "Common Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The common name (domain) for the CSR.",
					},
					map[string]any{
						"name": "country",
						"title": "Country",
						"type": "`$STRING`",
						"req": true,
						"short": "Two-letter ISO 3166-1 alpha-2 country code.",
					},
					map[string]any{
						"name": "key_type",
						"title": "Key Type",
						"type": "`$STRING`",
						"short": "Key algorithm to use for the CSR.",
					},
					map[string]any{
						"name": "locality",
						"title": "Locality",
						"type": "`$STRING`",
						"req": true,
						"short": "City or locality name.",
					},
					map[string]any{
						"name": "organization",
						"title": "Organization",
						"type": "`$STRING`",
						"req": true,
						"short": "Organization name.",
					},
					map[string]any{
						"name": "organizational_unit",
						"title": "Organizational Unit",
						"type": "`$STRING`",
						"short": "Organizational unit name.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"short": "A custom Certificate Signing Request (CSR).",
					},
					map[string]any{
						"name": "sans",
						"title": "Sans",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Subject Alternative Names for the CSR.",
					},
					map[string]any{
						"name": "state",
						"title": "State",
						"type": "`$STRING`",
						"req": true,
						"short": "State or province name.",
					},
				},
				"name": "tls_certificates_and_hostnames_custom_csr_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/custom_csrs",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "custom_csrs",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"custom_csrs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/custom_csrs/{custom_csr_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "custom_csrs",
									},
									map[string]any{
										"var": "custom_csr_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"custom_csrs",
									"{custom_csr_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "custom_csr_id",
											"orig": "custom_csr_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "7b163417-1d2b-4c84-a38a-2fb7a0cd7752",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"custom_csr_id",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_custom_csr_response_single_2": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "common_name",
						"title": "Common Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The common name (domain) for the CSR.",
					},
					map[string]any{
						"name": "country",
						"title": "Country",
						"type": "`$STRING`",
						"req": true,
						"short": "Two-letter ISO 3166-1 alpha-2 country code.",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "Optional description for the CSR.",
					},
					map[string]any{
						"name": "key_type",
						"title": "Key Type",
						"type": "`$STRING`",
						"short": "Key algorithm to use for the CSR.",
					},
					map[string]any{
						"name": "locality",
						"title": "Locality",
						"type": "`$STRING`",
						"req": true,
						"short": "City or locality name.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Human-readable name for the CSR.",
					},
					map[string]any{
						"name": "organization",
						"title": "Organization",
						"type": "`$STRING`",
						"req": true,
						"short": "Organization name.",
					},
					map[string]any{
						"name": "organizational_unit",
						"title": "Organizational Unit",
						"type": "`$STRING`",
						"short": "Organizational unit name.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"short": "A custom Certificate Signing Request (CSR).",
					},
					map[string]any{
						"name": "sans",
						"title": "Sans",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Subject Alternative Names for the CSR.",
					},
					map[string]any{
						"name": "state",
						"title": "State",
						"type": "`$STRING`",
						"req": true,
						"short": "State or province name.",
					},
				},
				"name": "tls_certificates_and_hostnames_custom_csr_response_single_2",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/custom_csrs",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "custom_csrs",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"custom_csrs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/custom_csrs/{custom_csr_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "custom_csrs",
									},
									map[string]any{
										"var": "custom_csr_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"custom_csrs",
									"{custom_csr_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "custom_csr_id",
											"orig": "custom_csr_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "7b163417-1d2b-4c84-a38a-2fb7a0cd7752",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"custom_csr_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_custom_hostname_quota": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Informational messages returned by the custom hostname API.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"name": "tls_certificates_and_hostnames_custom_hostname_quota",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/custom_hostnames/quota",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "custom_hostnames",
									},
									map[string]any{
										"lit": "quota",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"custom_hostnames",
									"quota",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_custom_hostname_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Informational messages returned by the custom hostname API.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"name": "tls_certificates_and_hostnames_custom_hostname_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/custom_hostnames",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "custom_hostnames",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"custom_hostnames",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "certificate_authority",
											"orig": "certificate_authority",
											"type": "`$STRING`",
											"kind": "query",
											"example": "google",
										},
										map[string]any{
											"name": "custom_origin_server",
											"orig": "custom_origin_server",
											"type": "`$STRING`",
											"kind": "query",
											"example": "origin2.example.com",
										},
										map[string]any{
											"name": "direction",
											"orig": "direction",
											"type": "`$STRING`",
											"kind": "query",
											"example": "desc",
										},
										map[string]any{
											"name": "hostname",
											"orig": "hostname",
											"type": "`$STRING`",
											"kind": "query",
											"example": "app.example.com",
										},
										map[string]any{
											"name": "hostname_contain",
											"orig": "hostname_contain",
											"type": "`$STRING`",
											"kind": "query",
											"example": "example.com",
										},
										map[string]any{
											"name": "hostname_exact",
											"orig": "hostname_exact",
											"type": "`$STRING`",
											"kind": "query",
											"example": "app.example.com",
										},
										map[string]any{
											"name": "hostname_starts_with",
											"orig": "hostname_starts_with",
											"type": "`$STRING`",
											"kind": "query",
											"example": "app",
										},
										map[string]any{
											"name": "hostname_status",
											"orig": "hostname_status",
											"type": "`$STRING`",
											"kind": "query",
											"example": "provisioned",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "0d89c70d-ad9f-4843-b99f-6cc0252067e9",
										},
										map[string]any{
											"name": "order",
											"orig": "order",
											"type": "`$STRING`",
											"kind": "query",
											"example": "ssl",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 20,
										},
										map[string]any{
											"name": "ssl",
											"orig": "ssl",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "ssl_status",
											"orig": "ssl_status",
											"type": "`$STRING`",
											"kind": "query",
											"example": "active",
										},
										map[string]any{
											"name": "wildcard",
											"orig": "wildcard",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"certificate_authority",
										"custom_origin_server",
										"direction",
										"hostname",
										"hostname_contain",
										"hostname_exact",
										"hostname_starts_with",
										"hostname_status",
										"id",
										"order",
										"page",
										"per_page",
										"ssl",
										"ssl_status",
										"wildcard",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_custom_hostname_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "custom_metadata",
						"title": "Custom Metadata",
						"type": "`$OBJECT`",
						"short": "Unique key/value metadata for this hostname.",
					},
					map[string]any{
						"name": "custom_origin_server",
						"title": "Custom Origin Server",
						"type": "`$STRING`",
						"short": "a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record.",
					},
					map[string]any{
						"name": "custom_origin_sni",
						"title": "Custom Origin Sni",
						"type": "`$STRING`",
						"short": "A hostname that will be sent to your custom origin server as SNI for TLS handshake.",
					},
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "hostname",
						"title": "Hostname",
						"type": "`$STRING`",
						"req": true,
						"short": "The custom hostname that will point to your hostname via CNAME.",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Informational messages returned by the custom hostname API.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "ssl",
						"title": "Ssl",
						"type": "`$OBJECT`",
						"short": "SSL properties used when creating the custom hostname.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"name": "tls_certificates_and_hostnames_custom_hostname_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/custom_hostnames",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "custom_hostnames",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"custom_hostnames",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/custom_hostnames/{custom_hostname_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "custom_hostnames",
									},
									map[string]any{
										"var": "custom_hostname_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"custom_hostnames",
									"{custom_hostname_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "custom_hostname_id",
											"orig": "custom_hostname_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "0d89c70d-ad9f-4843-b99f-6cc0252067e9",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"custom_hostname_id",
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/custom_hostnames/{custom_hostname_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "custom_hostnames",
									},
									map[string]any{
										"var": "custom_hostname_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"custom_hostnames",
									"{custom_hostname_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "custom_hostname_id",
											"orig": "custom_hostname_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "0d89c70d-ad9f-4843-b99f-6cc0252067e9",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"custom_hostname_id",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.custom_hostname",
						},
					},
				},
			},
			"tls_certificates_and_hostnames_custom_trust_store_response": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "tls_certificates_and_hostnames_custom_trust_store_response",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/acm/custom_trust_store",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "acm",
									},
									map[string]any{
										"lit": "custom_trust_store",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"acm",
									"custom_trust_store",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 20,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"offset",
										"page",
										"per_page",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_custom_trust_store_response_id_only": map[string]any{
				"fields": []any{},
				"name": "tls_certificates_and_hostnames_custom_trust_store_response_id_only",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/zones/{zone_id}/acm/custom_trust_store/{custom_origin_trust_store_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "acm",
									},
									map[string]any{
										"lit": "custom_trust_store",
									},
									map[string]any{
										"var": "custom_origin_trust_store_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"acm",
									"custom_trust_store",
									"{custom_origin_trust_store_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "custom_origin_trust_store_id",
											"orig": "custom_origin_trust_store_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "2458ce5a-0c35-4c7f-82c7-8e9487d3ff60",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"custom_origin_trust_store_id",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_custom_trust_store_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "certificate",
						"title": "Certificate",
						"type": "`$STRING`",
						"req": true,
						"short": "The root CA certificate in PEM format.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
				},
				"name": "tls_certificates_and_hostnames_custom_trust_store_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/acm/custom_trust_store",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "acm",
									},
									map[string]any{
										"lit": "custom_trust_store",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"acm",
									"custom_trust_store",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/acm/custom_trust_store/{custom_origin_trust_store_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "acm",
									},
									map[string]any{
										"lit": "custom_trust_store",
									},
									map[string]any{
										"var": "custom_origin_trust_store_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"acm",
									"custom_trust_store",
									"{custom_origin_trust_store_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "custom_origin_trust_store_id",
											"orig": "custom_origin_trust_store_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "2458ce5a-0c35-4c7f-82c7-8e9487d3ff60",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"custom_origin_trust_store_id",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_delete_advanced_certificate_pack": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "tls_certificates_and_hostnames_delete_advanced_certificate_pack",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "ssl",
									},
									map[string]any{
										"lit": "certificate_packs",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"ssl",
									"certificate_packs",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"certificate_pack_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "certificate_pack_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "3822ff90-ea29-44df-9e55-21300bb9419b",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_enabled": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Indicates whether zone-level authenticated origin pulls is enabled.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "tls_certificates_and_hostnames_enabled",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/origin_tls_client_auth/settings",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "origin_tls_client_auth",
									},
									map[string]any{
										"lit": "settings",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"origin_tls_client_auth",
									"settings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/zones/{zone_id}/origin_tls_client_auth/settings",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "origin_tls_client_auth",
									},
									map[string]any{
										"lit": "settings",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"origin_tls_client_auth",
									"settings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_fallback_origin": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "origin",
						"title": "Origin",
						"type": "`$STRING`",
						"req": true,
						"short": "Your origin hostname that requests to your custom hostnames will be sent to.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "tls_certificates_and_hostnames_fallback_origin",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/custom_hostnames/fallback_origin",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "custom_hostnames",
									},
									map[string]any{
										"lit": "fallback_origin",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"custom_hostnames",
									"fallback_origin",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/zones/{zone_id}/custom_hostnames/fallback_origin",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "custom_hostnames",
									},
									map[string]any{
										"lit": "fallback_origin",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"custom_hostnames",
									"fallback_origin",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/zones/{zone_id}/custom_hostnames/fallback_origin",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "custom_hostnames",
									},
									map[string]any{
										"lit": "fallback_origin",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"custom_hostnames",
									"fallback_origin",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_hostname_aop_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "config",
						"title": "Config",
						"type": "`$ARRAY`",
						"req": true,
					},
				},
				"name": "tls_certificates_and_hostnames_hostname_aop_response_collection",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/zones/{zone_id}/origin_tls_client_auth/hostnames",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "origin_tls_client_auth",
									},
									map[string]any{
										"lit": "hostnames",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"origin_tls_client_auth",
									"hostnames",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_hostname_aop_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "tls_certificates_and_hostnames_hostname_aop_single",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/origin_tls_client_auth/hostnames/{hostname}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "origin_tls_client_auth",
									},
									map[string]any{
										"lit": "hostnames",
									},
									map[string]any{
										"var": "hostname",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"origin_tls_client_auth",
									"hostnames",
									"{hostname}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "hostname",
											"orig": "hostname",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "app.example.com",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"hostname",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_hostname_assoc_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
					},
				},
				"name": "tls_certificates_and_hostnames_hostname_assoc_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/origin_tls_client_auth/hostnames",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "origin_tls_client_auth",
									},
									map[string]any{
										"lit": "hostnames",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"origin_tls_client_auth",
									"hostnames",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
											"example": "active",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"per_page",
										"status",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_keyless_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "tls_certificates_and_hostnames_keyless_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/keyless_certificates",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "keyless_certificates",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"keyless_certificates",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_keyless_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "bundle_method",
						"title": "Bundle Method",
						"type": "`$STRING`",
						"short": "A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores.",
					},
					map[string]any{
						"name": "certificate",
						"title": "Certificate",
						"type": "`$STRING`",
						"req": true,
						"short": "The zone's SSL certificate or SSL certificate and intermediate(s).",
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"short": "Whether or not the Keyless SSL is on or off.",
						"deprecated": true,
					},
					map[string]any{
						"name": "host",
						"title": "Host",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The keyless SSL name.",
						"format": "hostname",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "The keyless SSL name.",
					},
					map[string]any{
						"name": "port",
						"title": "Port",
						"type": "`$NUMBER`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$NUMBER`",
							},
						},
						"short": "The keyless SSL port used to communicate between Cloudflare and the client's Keyless SSL server.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "tunnel",
						"title": "Tunnel",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Configuration for using Keyless SSL through a Cloudflare Tunnel.",
					},
				},
				"name": "tls_certificates_and_hostnames_keyless_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/keyless_certificates",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "keyless_certificates",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"keyless_certificates",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/keyless_certificates/{keyless_certificate_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "keyless_certificates",
									},
									map[string]any{
										"var": "keyless_certificate_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"keyless_certificates",
									"{keyless_certificate_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "keyless_certificate_id",
											"orig": "keyless_certificate_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "4d2844d2ce78891c34d0b6c0535a291e",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"keyless_certificate_id",
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/keyless_certificates/{keyless_certificate_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "keyless_certificates",
									},
									map[string]any{
										"var": "keyless_certificate_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"keyless_certificates",
									"{keyless_certificate_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "keyless_certificate_id",
											"orig": "keyless_certificate_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "4d2844d2ce78891c34d0b6c0535a291e",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"keyless_certificate_id",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_keyless_response_single_id": map[string]any{
				"fields": []any{},
				"name": "tls_certificates_and_hostnames_keyless_response_single_id",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/zones/{zone_id}/keyless_certificates/{keyless_certificate_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "keyless_certificates",
									},
									map[string]any{
										"var": "keyless_certificate_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"keyless_certificates",
									"{keyless_certificate_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "keyless_certificate_id",
											"orig": "keyless_certificate_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "4d2844d2ce78891c34d0b6c0535a291e",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"keyless_certificate_id",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_per_hostname_setting": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "value",
						"title": "Value",
						"type": "`$ANY`",
						"req": true,
						"short": "The TLS setting value.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"from": map[string]any{
						"hostname": "hostname",
					},
					"name": "id",
					"parts": []any{
						"setting_id",
						"hostname",
					},
					"sep": "/",
				},
				"name": "tls_certificates_and_hostnames_per_hostname_setting",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "hostnames",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"var": "setting_id",
									},
									map[string]any{
										"var": "hostname",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"hostnames",
									"settings",
									"{setting_id}",
									"{hostname}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "hostname",
											"orig": "hostname",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "app.example.com",
										},
										map[string]any{
											"name": "setting_id",
											"orig": "setting_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"hostname",
										"setting_id",
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "hostnames",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"var": "setting_id",
									},
									map[string]any{
										"var": "hostname",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"hostnames",
									"settings",
									"{setting_id}",
									"{hostname}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "hostname",
											"orig": "hostname",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "app.example.com",
										},
										map[string]any{
											"name": "setting_id",
											"orig": "setting_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"hostname",
										"setting_id",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_per_hostname_settings_response": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "result_info",
						"title": "Result Info",
						"type": "`$OBJECT`",
					},
				},
				"name": "tls_certificates_and_hostnames_per_hostname_settings_response",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/hostnames/settings/{setting_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "hostnames",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"var": "setting_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"hostnames",
									"settings",
									"{setting_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "setting_id",
											"orig": "setting_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"setting_id",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_per_hostname_settings_response2": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
					"parts": []any{
						"setting_id",
						"hostname",
					},
					"sep": "/",
				},
				"name": "tls_certificates_and_hostnames_per_hostname_settings_response2",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "hostnames",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"var": "setting_id",
									},
									map[string]any{
										"var": "hostname",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"hostnames",
									"settings",
									"{setting_id}",
									"{hostname}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "hostname",
											"orig": "hostname",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "app.example.com",
										},
										map[string]any{
											"name": "setting_id",
											"orig": "setting_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"hostname",
										"setting_id",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_ssl_universal_setting": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"short": "Disabling Universal SSL removes any currently active Universal SSL certificates for your zone from the edge and prevents any future Universal SSL certificates from being ordered.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "tls_certificates_and_hostnames_ssl_universal_setting",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/ssl/universal/settings",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "ssl",
									},
									map[string]any{
										"lit": "universal",
									},
									map[string]any{
										"lit": "settings",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"ssl",
									"universal",
									"settings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/ssl/universal/settings",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "ssl",
									},
									map[string]any{
										"lit": "universal",
									},
									map[string]any{
										"lit": "settings",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"ssl",
									"universal",
									"settings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_ssl_validation_method_response": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "validation_method",
						"title": "Validation Method",
						"type": "`$STRING`",
						"req": true,
						"short": "Desired validation method.",
					},
				},
				"name": "tls_certificates_and_hostnames_ssl_validation_method_response",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/ssl/verification/{certificate_pack_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "ssl",
									},
									map[string]any{
										"lit": "verification",
									},
									map[string]any{
										"var": "certificate_pack_id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"ssl",
									"verification",
									"{certificate_pack_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "certificate_pack_id",
											"orig": "certificate_pack_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "a77f8bd7-3b47-46b4-a6f1-75cf98109948",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"certificate_pack_id",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_ssl_verification_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
				},
				"name": "tls_certificates_and_hostnames_ssl_verification_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/ssl/verification",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "ssl",
									},
									map[string]any{
										"lit": "verification",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"ssl",
									"verification",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "retry",
											"orig": "retry",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"retry",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tls_certificates_and_hostnames_total_tls_setting": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "certificate_authority",
						"title": "Certificate Authority",
						"type": "`$STRING`",
						"short": "The Certificate Authority that Total TLS certificates will be issued through.",
					},
					map[string]any{
						"name": "enabled",
						"title": "Enabled",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "If enabled, Total TLS will order a hostname specific TLS certificate for any proxied A, AAAA, or CNAME record in your zone.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "tls_certificates_and_hostnames_total_tls_setting",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/acm/total_tls",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "acm",
									},
									map[string]any{
										"lit": "total_tls",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"acm",
									"total_tls",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/acm/total_tls",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "acm",
									},
									map[string]any{
										"lit": "total_tls",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"acm",
									"total_tls",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
