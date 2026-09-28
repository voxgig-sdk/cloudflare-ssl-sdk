"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'CloudflareSsl',
        slug: "cloudflare-ssl",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
    };
    options = {
        base: "https://api.cloudflare.com/client/v4",
        auth: {
            prefix: '',
            name: 'X-Auth-Email',
        },
        headers: {
            "content-type": "application/json"
        },
        entity: {
            cache_api_response_single_id: {},
            cache_auto_origin_tls_kex: {},
            custom_hostname: {},
            custom_hostname_for_a_zone: {},
            origin_tl: {},
            recommendation: {},
            ssl_automatic_mode: {},
            tls_certificates_and_hostnames_advanced_certificate_pack_response: {},
            tls_certificates_and_hostnames_association_response_collection: {},
            tls_certificates_and_hostnames_certificate_analyze: {},
            tls_certificates_and_hostnames_certificate_pack_quota: {},
            tls_certificates_and_hostnames_certificate_pack_response_collection: {},
            tls_certificates_and_hostnames_certificate_pack_response_single: {},
            tls_certificates_and_hostnames_certificate_response_collection: {},
            tls_certificates_and_hostnames_certificate_response_collection_3: {},
            tls_certificates_and_hostnames_certificate_response_collection_4: {},
            tls_certificates_and_hostnames_certificate_response_collection_5: {},
            tls_certificates_and_hostnames_certificate_response_id_only: {},
            tls_certificates_and_hostnames_certificate_response_single: {},
            tls_certificates_and_hostnames_certificate_response_single_2: {},
            tls_certificates_and_hostnames_certificate_response_single_3: {},
            tls_certificates_and_hostnames_certificate_response_single_4: {},
            tls_certificates_and_hostnames_certificate_response_single_5: {},
            tls_certificates_and_hostnames_certificate_response_single_post: {},
            tls_certificates_and_hostnames_certificate_revoke: {},
            tls_certificates_and_hostnames_client_certificate_response: {},
            tls_certificates_and_hostnames_client_certificate_response_single: {},
            tls_certificates_and_hostnames_custom_csr_response_collection: {},
            tls_certificates_and_hostnames_custom_csr_response_collection_2: {},
            tls_certificates_and_hostnames_custom_csr_response_id_only: {},
            tls_certificates_and_hostnames_custom_csr_response_single: {},
            tls_certificates_and_hostnames_custom_csr_response_single_2: {},
            tls_certificates_and_hostnames_custom_hostname_quota: {},
            tls_certificates_and_hostnames_custom_hostname_response_collection: {},
            tls_certificates_and_hostnames_custom_hostname_response_single: {},
            tls_certificates_and_hostnames_custom_trust_store_response: {},
            tls_certificates_and_hostnames_custom_trust_store_response_id_only: {},
            tls_certificates_and_hostnames_custom_trust_store_response_single: {},
            tls_certificates_and_hostnames_delete_advanced_certificate_pack: {},
            tls_certificates_and_hostnames_enabled: {},
            tls_certificates_and_hostnames_fallback_origin: {},
            tls_certificates_and_hostnames_hostname_aop_response_collection: {},
            tls_certificates_and_hostnames_hostname_aop_single: {},
            tls_certificates_and_hostnames_hostname_assoc_response_collection: {},
            tls_certificates_and_hostnames_keyless_response_collection: {},
            tls_certificates_and_hostnames_keyless_response_single: {},
            tls_certificates_and_hostnames_keyless_response_single_id: {},
            tls_certificates_and_hostnames_per_hostname_setting: {},
            tls_certificates_and_hostnames_per_hostname_settings_response: {},
            tls_certificates_and_hostnames_per_hostname_settings_response2: {},
            tls_certificates_and_hostnames_ssl_universal_setting: {},
            tls_certificates_and_hostnames_ssl_validation_method_response: {},
            tls_certificates_and_hostnames_ssl_verification_response_collection: {},
            tls_certificates_and_hostnames_total_tls_setting: {},
        }
    };
    entity = {
        "cache_api_response_single_id": {
            "fields": [
                {
                    "name": "errors",
                    "title": "Errors",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "messages",
                    "title": "Messages",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true,
                    "short": "Indicates the API call's success or failure."
                },
                {
                    "name": "value",
                    "title": "Value",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Controls enablement of Automatic SSL/TLS."
                }
            ],
            "name": "cache_api_response_single_id",
            "op": {
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/zones/{zone_id}/settings/ssl_automatic_mode",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "settings"
                                },
                                {
                                    "lit": "ssl_automatic_mode"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "settings",
                                "ssl_automatic_mode"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "cache_auto_origin_tls_kex": {
            "fields": [
                {
                    "name": "enabled",
                    "title": "Enabled",
                    "type": "`$BOOLEAN`",
                    "req": true,
                    "short": "Controls enablement of Auto-Origin TLS KEX selection for the zone."
                },
                {
                    "name": "errors",
                    "title": "Errors",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "messages",
                    "title": "Messages",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true,
                    "short": "Indicates the API call's success or failure."
                }
            ],
            "name": "cache_auto_origin_tls_kex",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/zones/{zone_id}/settings/auto_origin_tls_kex",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "settings"
                                },
                                {
                                    "lit": "auto_origin_tls_kex"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "settings",
                                "auto_origin_tls_kex"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/zones/{zone_id}/settings/auto_origin_tls_kex",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "settings"
                                },
                                {
                                    "lit": "auto_origin_tls_kex"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "settings",
                                "auto_origin_tls_kex"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "custom_hostname": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "custom_hostname",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/zones/{zone_id}/custom_hostnames/{custom_hostname_id}",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "custom_hostnames"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "custom_hostnames",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "custom_hostname_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "custom_hostname_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "0d89c70d-ad9f-4843-b99f-6cc0252067e9"
                                    },
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "custom_hostname_for_a_zone": {
            "fields": [
                {
                    "name": "custom_certificate",
                    "title": "Custom Certificate",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "If a custom uploaded certificate is used."
                },
                {
                    "name": "custom_key",
                    "title": "Custom Key",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "The key for a custom uploaded certificate."
                }
            ],
            "name": "custom_hostname_for_a_zone",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/zones/{zone_id}/custom_hostnames/{custom_hostname_id}/certificate_pack/{certificate_pack_id}/certificates/{certificate_id}",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "custom_hostnames"
                                },
                                {
                                    "var": "custom_hostname_id"
                                },
                                {
                                    "lit": "certificate_pack"
                                },
                                {
                                    "var": "certificate_pack_id"
                                },
                                {
                                    "lit": "certificates"
                                },
                                {
                                    "var": "certificate_id"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "custom_hostnames",
                                "{custom_hostname_id}",
                                "certificate_pack",
                                "{certificate_pack_id}",
                                "certificates",
                                "{certificate_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "certificate_id",
                                        "orig": "certificate_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "0d89c70d-ad9f-4843-b99f-6cc0252067e9"
                                    },
                                    {
                                        "name": "certificate_pack_id",
                                        "orig": "certificate_pack_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "0d89c70d-ad9f-4843-b99f-6cc0252067e9"
                                    },
                                    {
                                        "name": "custom_hostname_id",
                                        "orig": "custom_hostname_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "0d89c70d-ad9f-4843-b99f-6cc0252067e9"
                                    },
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "certificate_id",
                                    "certificate_pack_id",
                                    "custom_hostname_id",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/zones/{zone_id}/custom_hostnames/{custom_hostname_id}/certificate_pack/{certificate_pack_id}/certificates/{certificate_id}",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "custom_hostnames"
                                },
                                {
                                    "var": "custom_hostname_id"
                                },
                                {
                                    "lit": "certificate_pack"
                                },
                                {
                                    "var": "certificate_pack_id"
                                },
                                {
                                    "lit": "certificates"
                                },
                                {
                                    "var": "certificate_id"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "custom_hostnames",
                                "{custom_hostname_id}",
                                "certificate_pack",
                                "{certificate_pack_id}",
                                "certificates",
                                "{certificate_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "certificate_id",
                                        "orig": "certificate_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "0d89c70d-ad9f-4843-b99f-6cc0252067e9"
                                    },
                                    {
                                        "name": "certificate_pack_id",
                                        "orig": "certificate_pack_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "0d89c70d-ad9f-4843-b99f-6cc0252067e9"
                                    },
                                    {
                                        "name": "custom_hostname_id",
                                        "orig": "custom_hostname_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "0d89c70d-ad9f-4843-b99f-6cc0252067e9"
                                    },
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "certificate_id",
                                    "certificate_pack_id",
                                    "custom_hostname_id",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.custom_hostname"
                    ]
                ]
            }
        },
        "origin_tl": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "value",
                    "title": "Value",
                    "type": "`$ARRAY`",
                    "req": true,
                    "short": "List of TLS compliance modes that constrain the key-exchange algorithms Cloudflare may use when establishing the TLS connection to the zone's origin."
                }
            ],
            "name": "origin_tl",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/zones/{zone_id}/settings/origin_tls_compliance_modes",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "settings"
                                },
                                {
                                    "lit": "origin_tls_compliance_modes"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "settings",
                                "origin_tls_compliance_modes"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                },
                "patch": {
                    "input": "data",
                    "name": "patch",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/zones/{zone_id}/settings/origin_tls_compliance_modes",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "settings"
                                },
                                {
                                    "lit": "origin_tls_compliance_modes"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "settings",
                                "origin_tls_compliance_modes"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/zones/{zone_id}/settings/origin_tls_compliance_modes",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "settings"
                                },
                                {
                                    "lit": "origin_tls_compliance_modes"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "settings",
                                "origin_tls_compliance_modes"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/zones/{zone_id}/settings/origin_tls_compliance_modes",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "settings"
                                },
                                {
                                    "lit": "origin_tls_compliance_modes"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "settings",
                                "origin_tls_compliance_modes"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "recommendation": {
            "fields": [
                {
                    "name": "errors",
                    "title": "Errors",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "messages",
                    "title": "Messages",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true,
                    "short": "Indicates the API call's success or failure."
                }
            ],
            "name": "recommendation",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/zones/{zone_id}/ssl/recommendation",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "ssl"
                                },
                                {
                                    "lit": "recommendation"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "ssl",
                                "recommendation"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "ssl_automatic_mode": {
            "fields": [
                {
                    "name": "errors",
                    "title": "Errors",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "messages",
                    "title": "Messages",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true,
                    "short": "Indicates the API call's success or failure."
                }
            ],
            "name": "ssl_automatic_mode",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/zones/{zone_id}/settings/ssl_automatic_mode",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "settings"
                                },
                                {
                                    "lit": "ssl_automatic_mode"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "settings",
                                "ssl_automatic_mode"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_advanced_certificate_pack_response": {
            "fields": [
                {
                    "name": "certificate_authority",
                    "title": "Certificate Authority",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Certificate Authority selected for the order."
                },
                {
                    "name": "cloudflare_branding",
                    "title": "Cloudflare Branding",
                    "type": "`$BOOLEAN`",
                    "short": "Whether or not to add Cloudflare Branding for the order."
                },
                {
                    "name": "hosts",
                    "title": "Hosts",
                    "type": "`$ARRAY`",
                    "req": true,
                    "short": "Comma separated list of valid host names for the certificate packs."
                },
                {
                    "name": "type",
                    "title": "Type",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Type of certificate pack."
                },
                {
                    "name": "validation_method",
                    "title": "Validation Method",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Validation Method selected for the order."
                },
                {
                    "name": "validity_days",
                    "title": "Validity Days",
                    "type": "`$INTEGER`",
                    "req": true,
                    "short": "Validity Days selected for the order."
                }
            ],
            "name": "tls_certificates_and_hostnames_advanced_certificate_pack_response",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/zones/{zone_id}/ssl/certificate_packs/order",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "ssl"
                                },
                                {
                                    "lit": "certificate_packs"
                                },
                                {
                                    "lit": "order"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "ssl",
                                "certificate_packs",
                                "order"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "ssl"
                                },
                                {
                                    "lit": "certificate_packs"
                                },
                                {
                                    "var": "certificate_pack_id"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "ssl",
                                "certificate_packs",
                                "{certificate_pack_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "certificate_pack_id",
                                        "orig": "certificate_pack_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "3822ff90-ea29-44df-9e55-21300bb9419b"
                                    },
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "certificate_pack_id",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_association_response_collection": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "tls_certificates_and_hostnames_association_response_collection",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/mtls_certificates/{mtls_certificate_id}/associations",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "mtls_certificates"
                                },
                                {
                                    "var": "mtls_certificate_id"
                                },
                                {
                                    "lit": "associations"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "mtls_certificates",
                                "{mtls_certificate_id}",
                                "associations"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    },
                                    {
                                        "name": "mtls_certificate_id",
                                        "orig": "mtls_certificate_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "2458ce5a-0c35-4c7f-82c7-8e9487d3ff60"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "mtls_certificate_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_certificate_analyze": {
            "fields": [
                {
                    "name": "bundle_method",
                    "title": "Bundle Method",
                    "type": "`$STRING`",
                    "short": "A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores."
                },
                {
                    "name": "certificate",
                    "title": "Certificate",
                    "type": "`$STRING`",
                    "short": "The zone's SSL certificate or certificate and the intermediate(s)."
                }
            ],
            "name": "tls_certificates_and_hostnames_certificate_analyze",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/zones/{zone_id}/ssl/analyze",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "ssl"
                                },
                                {
                                    "lit": "analyze"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "ssl",
                                "analyze"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_certificate_pack_quota": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "tls_certificates_and_hostnames_certificate_pack_quota",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/zones/{zone_id}/ssl/certificate_packs/quota",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "ssl"
                                },
                                {
                                    "lit": "certificate_packs"
                                },
                                {
                                    "lit": "quota"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "ssl",
                                "certificate_packs",
                                "quota"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_certificate_pack_response_collection": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "tls_certificates_and_hostnames_certificate_pack_response_collection",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/zones/{zone_id}/ssl/certificate_packs",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "ssl"
                                },
                                {
                                    "lit": "certificate_packs"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "ssl",
                                "certificate_packs"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "deploy",
                                        "orig": "deploy",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 20
                                    },
                                    {
                                        "name": "status",
                                        "orig": "status",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "all"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "deploy",
                                    "page",
                                    "per_page",
                                    "status",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_certificate_pack_response_single": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "A certificate pack with all its properties."
                }
            ],
            "name": "tls_certificates_and_hostnames_certificate_pack_response_single",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "ssl"
                                },
                                {
                                    "lit": "certificate_packs"
                                },
                                {
                                    "var": "certificate_pack_id"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "ssl",
                                "certificate_packs",
                                "{certificate_pack_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "certificate_pack_id",
                                        "orig": "certificate_pack_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "3822ff90-ea29-44df-9e55-21300bb9419b"
                                    },
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "certificate_pack_id",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_certificate_response_collection": {
            "fields": [
                {
                    "name": "certificates",
                    "title": "Certificates",
                    "type": "`$ARRAY`",
                    "req": true,
                    "short": "Array of ordered certificates."
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "tls_certificates_and_hostnames_certificate_response_collection",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/zones/{zone_id}/custom_certificates",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "custom_certificates"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "custom_certificates"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "match",
                                        "orig": "match",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "all"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 20
                                    },
                                    {
                                        "name": "status",
                                        "orig": "status",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "active"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "match",
                                    "page",
                                    "per_page",
                                    "status",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/zones/{zone_id}/custom_certificates/prioritize",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "custom_certificates"
                                },
                                {
                                    "lit": "prioritize"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "custom_certificates",
                                "prioritize"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_certificate_response_collection_3": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "tls_certificates_and_hostnames_certificate_response_collection_3",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/zones/{zone_id}/origin_tls_client_auth",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "origin_tls_client_auth"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "origin_tls_client_auth"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_certificate_response_collection_4": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "tls_certificates_and_hostnames_certificate_response_collection_4",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/zones/{zone_id}/origin_tls_client_auth/hostnames/certificates",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "origin_tls_client_auth"
                                },
                                {
                                    "lit": "hostnames"
                                },
                                {
                                    "lit": "certificates"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "origin_tls_client_auth",
                                "hostnames",
                                "certificates"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_certificate_response_collection_5": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "result_info",
                    "title": "Result Info",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "tls_certificates_and_hostnames_certificate_response_collection_5",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/mtls_certificates",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "mtls_certificates"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "mtls_certificates"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "type",
                                        "orig": "type",
                                        "type": "`$ARRAY`",
                                        "kind": "query",
                                        "example": [
                                            "custom"
                                        ]
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "type"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_certificate_response_id_only": {
            "fields": [],
            "name": "tls_certificates_and_hostnames_certificate_response_id_only",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/zones/{zone_id}/custom_certificates/{custom_certificate_id}",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "custom_certificates"
                                },
                                {
                                    "var": "custom_certificate_id"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "custom_certificates",
                                "{custom_certificate_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "custom_certificate_id",
                                        "orig": "custom_certificate_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "2458ce5a-0c35-4c7f-82c7-8e9487d3ff60"
                                    },
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "custom_certificate_id",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_certificate_response_single": {
            "fields": [
                {
                    "name": "bundle_method",
                    "title": "Bundle Method",
                    "type": "`$STRING`",
                    "short": "A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores."
                },
                {
                    "name": "certificate",
                    "title": "Certificate",
                    "type": "`$STRING`",
                    "req": true,
                    "op": {
                        "update": {
                            "type": "`$STRING`"
                        }
                    },
                    "short": "The zone's SSL certificate or certificate and the intermediate(s)."
                },
                {
                    "name": "custom_csr_id",
                    "title": "Custom Csr Id",
                    "type": "`$STRING`",
                    "short": "The identifier for the Custom CSR that was used."
                },
                {
                    "name": "deploy",
                    "title": "Deploy",
                    "type": "`$STRING`",
                    "short": "The environment to deploy the certificate to, defaults to production."
                },
                {
                    "name": "geo_restrictions",
                    "title": "Geo Restrictions",
                    "type": "`$OBJECT`",
                    "short": "Specify the region where your private key can be held locally for optimal TLS performance."
                },
                {
                    "name": "policy",
                    "title": "Policy",
                    "type": "`$STRING`",
                    "short": "Specify the policy that determines the region where your private key will be held locally."
                },
                {
                    "name": "private_key",
                    "title": "Private Key",
                    "type": "`$STRING`",
                    "short": "The zone's private key."
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "type",
                    "title": "Type",
                    "type": "`$STRING`",
                    "short": "The type 'legacy_custom' enables support for legacy clients which do not include SNI in the TLS handshake."
                }
            ],
            "name": "tls_certificates_and_hostnames_certificate_response_single",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/zones/{zone_id}/custom_certificates",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "custom_certificates"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "custom_certificates"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/zones/{zone_id}/custom_certificates/{custom_certificate_id}",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "custom_certificates"
                                },
                                {
                                    "var": "custom_certificate_id"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "custom_certificates",
                                "{custom_certificate_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "custom_certificate_id",
                                        "orig": "custom_certificate_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "2458ce5a-0c35-4c7f-82c7-8e9487d3ff60"
                                    },
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "custom_certificate_id",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/zones/{zone_id}/custom_certificates/{custom_certificate_id}",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "custom_certificates"
                                },
                                {
                                    "var": "custom_certificate_id"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "custom_certificates",
                                "{custom_certificate_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "custom_certificate_id",
                                        "orig": "custom_certificate_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "2458ce5a-0c35-4c7f-82c7-8e9487d3ff60"
                                    },
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "custom_certificate_id",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_certificate_response_single_2": {
            "fields": [
                {
                    "name": "csr",
                    "title": "Csr",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "The Certificate Signing Request (CSR)."
                },
                {
                    "name": "hostnames",
                    "title": "Hostnames",
                    "type": "`$ARRAY`",
                    "req": true,
                    "short": "Array of hostnames or wildcard names bound to the certificate."
                },
                {
                    "name": "request_type",
                    "title": "Request Type",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Signature type desired on certificate (\"origin-rsa\" (rsa), \"origin-ecc\" (ecdsa), or \"keyless-certificate\" (for Keyless SSL servers)."
                },
                {
                    "name": "requested_validity",
                    "title": "Requested Validity",
                    "type": "`$NUMBER`",
                    "short": "The number of days for which the certificate should be valid."
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`",
                    "req": true,
                    "op": {
                        "list": {
                            "type": "`$ARRAY`"
                        }
                    }
                }
            ],
            "name": "tls_certificates_and_hostnames_certificate_response_single_2",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/certificates",
                            "segments": [
                                {
                                    "lit": "certificates"
                                }
                            ],
                            "parts": [
                                "certificates"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {}
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/certificates",
                            "segments": [
                                {
                                    "lit": "certificates"
                                }
                            ],
                            "parts": [
                                "certificates"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 10
                                    },
                                    {
                                        "name": "offset",
                                        "orig": "offset",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 10
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 20
                                    },
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "limit",
                                    "offset",
                                    "page",
                                    "per_page",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/certificates/{certificate_id}",
                            "segments": [
                                {
                                    "lit": "certificates"
                                },
                                {
                                    "var": "certificate_id"
                                }
                            ],
                            "parts": [
                                "certificates",
                                "{certificate_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "certificate_id",
                                        "orig": "certificate_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "328578533902268680212849205732770752308931942346"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "certificate_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_certificate_response_single_3": {
            "fields": [
                {
                    "name": "certificate",
                    "title": "Certificate",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "The zone's leaf certificate."
                },
                {
                    "name": "private_key",
                    "title": "Private Key",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "The zone's private key."
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "tls_certificates_and_hostnames_certificate_response_single_3",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/zones/{zone_id}/origin_tls_client_auth",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "origin_tls_client_auth"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "origin_tls_client_auth"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/zones/{zone_id}/origin_tls_client_auth/{certificate_id}",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "origin_tls_client_auth"
                                },
                                {
                                    "var": "certificate_id"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "origin_tls_client_auth",
                                "{certificate_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "certificate_id",
                                        "orig": "certificate_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "2458ce5a-0c35-4c7f-82c7-8e9487d3ff60"
                                    },
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "certificate_id",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/zones/{zone_id}/origin_tls_client_auth/{certificate_id}",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "origin_tls_client_auth"
                                },
                                {
                                    "var": "certificate_id"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "origin_tls_client_auth",
                                "{certificate_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "certificate_id",
                                        "orig": "certificate_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "2458ce5a-0c35-4c7f-82c7-8e9487d3ff60"
                                    },
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "certificate_id",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_certificate_response_single_4": {
            "fields": [
                {
                    "name": "certificate",
                    "title": "Certificate",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "The hostname certificate."
                },
                {
                    "name": "private_key",
                    "title": "Private Key",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "The hostname certificate's private key."
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "tls_certificates_and_hostnames_certificate_response_single_4",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/zones/{zone_id}/origin_tls_client_auth/hostnames/certificates",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "origin_tls_client_auth"
                                },
                                {
                                    "lit": "hostnames"
                                },
                                {
                                    "lit": "certificates"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "origin_tls_client_auth",
                                "hostnames",
                                "certificates"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/zones/{zone_id}/origin_tls_client_auth/hostnames/certificates/{certificate_id}",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "origin_tls_client_auth"
                                },
                                {
                                    "lit": "hostnames"
                                },
                                {
                                    "lit": "certificates"
                                },
                                {
                                    "var": "certificate_id"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "origin_tls_client_auth",
                                "hostnames",
                                "certificates",
                                "{certificate_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "certificate_id",
                                        "orig": "certificate_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "2458ce5a-0c35-4c7f-82c7-8e9487d3ff60"
                                    },
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "certificate_id",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/zones/{zone_id}/origin_tls_client_auth/hostnames/certificates/{certificate_id}",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "origin_tls_client_auth"
                                },
                                {
                                    "lit": "hostnames"
                                },
                                {
                                    "lit": "certificates"
                                },
                                {
                                    "var": "certificate_id"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "origin_tls_client_auth",
                                "hostnames",
                                "certificates",
                                "{certificate_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "certificate_id",
                                        "orig": "certificate_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "2458ce5a-0c35-4c7f-82c7-8e9487d3ff60"
                                    },
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "certificate_id",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_certificate_response_single_5": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "tls_certificates_and_hostnames_certificate_response_single_5",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/mtls_certificates/{mtls_certificate_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "mtls_certificates"
                                },
                                {
                                    "var": "mtls_certificate_id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "mtls_certificates",
                                "{mtls_certificate_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    },
                                    {
                                        "name": "mtls_certificate_id",
                                        "orig": "mtls_certificate_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "2458ce5a-0c35-4c7f-82c7-8e9487d3ff60"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "mtls_certificate_id"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/accounts/{account_id}/mtls_certificates/{mtls_certificate_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "mtls_certificates"
                                },
                                {
                                    "var": "mtls_certificate_id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "mtls_certificates",
                                "{mtls_certificate_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    },
                                    {
                                        "name": "mtls_certificate_id",
                                        "orig": "mtls_certificate_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "2458ce5a-0c35-4c7f-82c7-8e9487d3ff60"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "mtls_certificate_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_certificate_response_single_post": {
            "fields": [
                {
                    "name": "ca",
                    "title": "Ca",
                    "type": "`$BOOLEAN`",
                    "req": true,
                    "short": "Indicates whether the certificate is a CA or leaf certificate."
                },
                {
                    "name": "certificates",
                    "title": "Certificates",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "The uploaded root CA certificate."
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "short": "Optional unique name for the certificate."
                },
                {
                    "name": "private_key",
                    "title": "Private Key",
                    "type": "`$STRING`",
                    "short": "The private key for the certificate."
                }
            ],
            "name": "tls_certificates_and_hostnames_certificate_response_single_post",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/accounts/{account_id}/mtls_certificates",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "mtls_certificates"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "mtls_certificates"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_certificate_revoke": {
            "fields": [],
            "name": "tls_certificates_and_hostnames_certificate_revoke",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/certificates/{certificate_id}",
                            "segments": [
                                {
                                    "lit": "certificates"
                                },
                                {
                                    "var": "certificate_id"
                                }
                            ],
                            "parts": [
                                "certificates",
                                "{certificate_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "certificate_id",
                                        "orig": "certificate_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "328578533902268680212849205732770752308931942346"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "certificate_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_client_certificate_response": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "tls_certificates_and_hostnames_client_certificate_response",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/zones/{zone_id}/client_certificates",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "client_certificates"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "client_certificates"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 10
                                    },
                                    {
                                        "name": "offset",
                                        "orig": "offset",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 10
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 20
                                    },
                                    {
                                        "name": "status",
                                        "orig": "status",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "all"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "limit",
                                    "offset",
                                    "page",
                                    "per_page",
                                    "status",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_client_certificate_response_single": {
            "fields": [
                {
                    "name": "csr",
                    "title": "Csr",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "The Certificate Signing Request (CSR)."
                },
                {
                    "name": "reactivate",
                    "title": "Reactivate",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "validity_days",
                    "title": "Validity Days",
                    "type": "`$INTEGER`",
                    "req": true,
                    "short": "The number of days the Client Certificate will be valid after the issued_on date."
                }
            ],
            "name": "tls_certificates_and_hostnames_client_certificate_response_single",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/zones/{zone_id}/client_certificates",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "client_certificates"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "client_certificates"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/zones/{zone_id}/client_certificates/{client_certificate_id}",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "client_certificates"
                                },
                                {
                                    "var": "client_certificate_id"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "client_certificates",
                                "{client_certificate_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "client_certificate_id",
                                        "orig": "client_certificate_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "0d89c70d-ad9f-4843-b99f-6cc0252067e9"
                                    },
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "client_certificate_id",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/zones/{zone_id}/client_certificates/{client_certificate_id}",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "client_certificates"
                                },
                                {
                                    "var": "client_certificate_id"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "client_certificates",
                                "{client_certificate_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "client_certificate_id",
                                        "orig": "client_certificate_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "0d89c70d-ad9f-4843-b99f-6cc0252067e9"
                                    },
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "client_certificate_id",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/zones/{zone_id}/client_certificates/{client_certificate_id}",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "client_certificates"
                                },
                                {
                                    "var": "client_certificate_id"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "client_certificates",
                                "{client_certificate_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "client_certificate_id",
                                        "orig": "client_certificate_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "0d89c70d-ad9f-4843-b99f-6cc0252067e9"
                                    },
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "client_certificate_id",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_custom_csr_response_collection": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "tls_certificates_and_hostnames_custom_csr_response_collection",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/zones/{zone_id}/custom_csrs",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "custom_csrs"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "custom_csrs"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 20
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "page",
                                    "per_page",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_custom_csr_response_collection_2": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "tls_certificates_and_hostnames_custom_csr_response_collection_2",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/custom_csrs",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "custom_csrs"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "custom_csrs"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "asc"
                                    },
                                    {
                                        "name": "order",
                                        "orig": "order",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "created_at"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 50
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "direction",
                                    "order",
                                    "page",
                                    "per_page"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_custom_csr_response_id_only": {
            "fields": [],
            "name": "tls_certificates_and_hostnames_custom_csr_response_id_only",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/accounts/{account_id}/custom_csrs/{custom_csr_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "custom_csrs"
                                },
                                {
                                    "var": "custom_csr_id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "custom_csrs",
                                "{custom_csr_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    },
                                    {
                                        "name": "custom_csr_id",
                                        "orig": "custom_csr_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "7b163417-1d2b-4c84-a38a-2fb7a0cd7752"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "custom_csr_id"
                                ]
                            }
                        },
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/zones/{zone_id}/custom_csrs/{custom_csr_id}",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "custom_csrs"
                                },
                                {
                                    "var": "custom_csr_id"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "custom_csrs",
                                "{custom_csr_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "custom_csr_id",
                                        "orig": "custom_csr_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "7b163417-1d2b-4c84-a38a-2fb7a0cd7752"
                                    },
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "custom_csr_id",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_custom_csr_response_single": {
            "fields": [
                {
                    "name": "common_name",
                    "title": "Common Name",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "The common name (domain) for the CSR."
                },
                {
                    "name": "country",
                    "title": "Country",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Two-letter ISO 3166-1 alpha-2 country code."
                },
                {
                    "name": "key_type",
                    "title": "Key Type",
                    "type": "`$STRING`",
                    "short": "Key algorithm to use for the CSR."
                },
                {
                    "name": "locality",
                    "title": "Locality",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "City or locality name."
                },
                {
                    "name": "organization",
                    "title": "Organization",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Organization name."
                },
                {
                    "name": "organizational_unit",
                    "title": "Organizational Unit",
                    "type": "`$STRING`",
                    "short": "Organizational unit name."
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "A custom Certificate Signing Request (CSR)."
                },
                {
                    "name": "sans",
                    "title": "Sans",
                    "type": "`$ARRAY`",
                    "req": true,
                    "short": "Subject Alternative Names for the CSR."
                },
                {
                    "name": "state",
                    "title": "State",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "State or province name."
                }
            ],
            "name": "tls_certificates_and_hostnames_custom_csr_response_single",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/zones/{zone_id}/custom_csrs",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "custom_csrs"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "custom_csrs"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/zones/{zone_id}/custom_csrs/{custom_csr_id}",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "custom_csrs"
                                },
                                {
                                    "var": "custom_csr_id"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "custom_csrs",
                                "{custom_csr_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "custom_csr_id",
                                        "orig": "custom_csr_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "7b163417-1d2b-4c84-a38a-2fb7a0cd7752"
                                    },
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "custom_csr_id",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_custom_csr_response_single_2": {
            "fields": [
                {
                    "name": "common_name",
                    "title": "Common Name",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "The common name (domain) for the CSR."
                },
                {
                    "name": "country",
                    "title": "Country",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Two-letter ISO 3166-1 alpha-2 country code."
                },
                {
                    "name": "description",
                    "title": "Description",
                    "type": "`$STRING`",
                    "short": "Optional description for the CSR."
                },
                {
                    "name": "key_type",
                    "title": "Key Type",
                    "type": "`$STRING`",
                    "short": "Key algorithm to use for the CSR."
                },
                {
                    "name": "locality",
                    "title": "Locality",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "City or locality name."
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "short": "Human-readable name for the CSR."
                },
                {
                    "name": "organization",
                    "title": "Organization",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Organization name."
                },
                {
                    "name": "organizational_unit",
                    "title": "Organizational Unit",
                    "type": "`$STRING`",
                    "short": "Organizational unit name."
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "A custom Certificate Signing Request (CSR)."
                },
                {
                    "name": "sans",
                    "title": "Sans",
                    "type": "`$ARRAY`",
                    "req": true,
                    "short": "Subject Alternative Names for the CSR."
                },
                {
                    "name": "state",
                    "title": "State",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "State or province name."
                }
            ],
            "name": "tls_certificates_and_hostnames_custom_csr_response_single_2",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/accounts/{account_id}/custom_csrs",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "custom_csrs"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "custom_csrs"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/accounts/{account_id}/custom_csrs/{custom_csr_id}",
                            "segments": [
                                {
                                    "lit": "accounts"
                                },
                                {
                                    "var": "account_id"
                                },
                                {
                                    "lit": "custom_csrs"
                                },
                                {
                                    "var": "custom_csr_id"
                                }
                            ],
                            "parts": [
                                "accounts",
                                "{account_id}",
                                "custom_csrs",
                                "{custom_csr_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "account_id",
                                        "orig": "account_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    },
                                    {
                                        "name": "custom_csr_id",
                                        "orig": "custom_csr_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "7b163417-1d2b-4c84-a38a-2fb7a0cd7752"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "account_id",
                                    "custom_csr_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_custom_hostname_quota": {
            "fields": [
                {
                    "name": "errors",
                    "title": "Errors",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "messages",
                    "title": "Messages",
                    "type": "`$ARRAY`",
                    "req": true,
                    "short": "Informational messages returned by the custom hostname API."
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`",
                    "req": true
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true,
                    "short": "Whether the API call was successful."
                }
            ],
            "name": "tls_certificates_and_hostnames_custom_hostname_quota",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/zones/{zone_id}/custom_hostnames/quota",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "custom_hostnames"
                                },
                                {
                                    "lit": "quota"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "custom_hostnames",
                                "quota"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_custom_hostname_response_collection": {
            "fields": [
                {
                    "name": "errors",
                    "title": "Errors",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "messages",
                    "title": "Messages",
                    "type": "`$ARRAY`",
                    "req": true,
                    "short": "Informational messages returned by the custom hostname API."
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "result_info",
                    "title": "Result Info",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true,
                    "short": "Whether the API call was successful."
                }
            ],
            "name": "tls_certificates_and_hostnames_custom_hostname_response_collection",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/zones/{zone_id}/custom_hostnames",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "custom_hostnames"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "custom_hostnames"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "certificate_authority",
                                        "orig": "certificate_authority",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "google"
                                    },
                                    {
                                        "name": "custom_origin_server",
                                        "orig": "custom_origin_server",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "origin2.example.com"
                                    },
                                    {
                                        "name": "direction",
                                        "orig": "direction",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "desc"
                                    },
                                    {
                                        "name": "hostname",
                                        "orig": "hostname",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "app.example.com"
                                    },
                                    {
                                        "name": "hostname_contain",
                                        "orig": "hostname_contain",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "example.com"
                                    },
                                    {
                                        "name": "hostname_exact",
                                        "orig": "hostname_exact",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "app.example.com"
                                    },
                                    {
                                        "name": "hostname_starts_with",
                                        "orig": "hostname_starts_with",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "app"
                                    },
                                    {
                                        "name": "hostname_status",
                                        "orig": "hostname_status",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "provisioned"
                                    },
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "0d89c70d-ad9f-4843-b99f-6cc0252067e9"
                                    },
                                    {
                                        "name": "order",
                                        "orig": "order",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "ssl"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 20
                                    },
                                    {
                                        "name": "ssl",
                                        "orig": "ssl",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 0
                                    },
                                    {
                                        "name": "ssl_status",
                                        "orig": "ssl_status",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "active"
                                    },
                                    {
                                        "name": "wildcard",
                                        "orig": "wildcard",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": false
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
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
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_custom_hostname_response_single": {
            "fields": [
                {
                    "name": "custom_metadata",
                    "title": "Custom Metadata",
                    "type": "`$OBJECT`",
                    "short": "Unique key/value metadata for this hostname."
                },
                {
                    "name": "custom_origin_server",
                    "title": "Custom Origin Server",
                    "type": "`$STRING`",
                    "short": "a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record."
                },
                {
                    "name": "custom_origin_sni",
                    "title": "Custom Origin Sni",
                    "type": "`$STRING`",
                    "short": "A hostname that will be sent to your custom origin server as SNI for TLS handshake."
                },
                {
                    "name": "errors",
                    "title": "Errors",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "hostname",
                    "title": "Hostname",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "The custom hostname that will point to your hostname via CNAME."
                },
                {
                    "name": "messages",
                    "title": "Messages",
                    "type": "`$ARRAY`",
                    "req": true,
                    "short": "Informational messages returned by the custom hostname API."
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "ssl",
                    "title": "Ssl",
                    "type": "`$OBJECT`",
                    "short": "SSL properties used when creating the custom hostname."
                },
                {
                    "name": "success",
                    "title": "Success",
                    "type": "`$BOOLEAN`",
                    "req": true,
                    "short": "Whether the API call was successful."
                }
            ],
            "name": "tls_certificates_and_hostnames_custom_hostname_response_single",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/zones/{zone_id}/custom_hostnames",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "custom_hostnames"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "custom_hostnames"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/zones/{zone_id}/custom_hostnames/{custom_hostname_id}",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "custom_hostnames"
                                },
                                {
                                    "var": "custom_hostname_id"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "custom_hostnames",
                                "{custom_hostname_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "custom_hostname_id",
                                        "orig": "custom_hostname_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "0d89c70d-ad9f-4843-b99f-6cc0252067e9"
                                    },
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "custom_hostname_id",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/zones/{zone_id}/custom_hostnames/{custom_hostname_id}",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "custom_hostnames"
                                },
                                {
                                    "var": "custom_hostname_id"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "custom_hostnames",
                                "{custom_hostname_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "custom_hostname_id",
                                        "orig": "custom_hostname_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "0d89c70d-ad9f-4843-b99f-6cc0252067e9"
                                    },
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "custom_hostname_id",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "$.main.kit.entity.custom_hostname"
                    ]
                ]
            }
        },
        "tls_certificates_and_hostnames_custom_trust_store_response": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "tls_certificates_and_hostnames_custom_trust_store_response",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/zones/{zone_id}/acm/custom_trust_store",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "acm"
                                },
                                {
                                    "lit": "custom_trust_store"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "acm",
                                "custom_trust_store"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 10
                                    },
                                    {
                                        "name": "offset",
                                        "orig": "offset",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 10
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 20
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "limit",
                                    "offset",
                                    "page",
                                    "per_page",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_custom_trust_store_response_id_only": {
            "fields": [],
            "name": "tls_certificates_and_hostnames_custom_trust_store_response_id_only",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/zones/{zone_id}/acm/custom_trust_store/{custom_origin_trust_store_id}",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "acm"
                                },
                                {
                                    "lit": "custom_trust_store"
                                },
                                {
                                    "var": "custom_origin_trust_store_id"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "acm",
                                "custom_trust_store",
                                "{custom_origin_trust_store_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "custom_origin_trust_store_id",
                                        "orig": "custom_origin_trust_store_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "2458ce5a-0c35-4c7f-82c7-8e9487d3ff60"
                                    },
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "custom_origin_trust_store_id",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_custom_trust_store_response_single": {
            "fields": [
                {
                    "name": "certificate",
                    "title": "Certificate",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "The root CA certificate in PEM format."
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`",
                    "req": true
                }
            ],
            "name": "tls_certificates_and_hostnames_custom_trust_store_response_single",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/zones/{zone_id}/acm/custom_trust_store",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "acm"
                                },
                                {
                                    "lit": "custom_trust_store"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "acm",
                                "custom_trust_store"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/zones/{zone_id}/acm/custom_trust_store/{custom_origin_trust_store_id}",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "acm"
                                },
                                {
                                    "lit": "custom_trust_store"
                                },
                                {
                                    "var": "custom_origin_trust_store_id"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "acm",
                                "custom_trust_store",
                                "{custom_origin_trust_store_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "custom_origin_trust_store_id",
                                        "orig": "custom_origin_trust_store_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "2458ce5a-0c35-4c7f-82c7-8e9487d3ff60"
                                    },
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "custom_origin_trust_store_id",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_delete_advanced_certificate_pack": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "tls_certificates_and_hostnames_delete_advanced_certificate_pack",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "ssl"
                                },
                                {
                                    "lit": "certificate_packs"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "ssl",
                                "certificate_packs",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "certificate_pack_id": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "certificate_pack_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "3822ff90-ea29-44df-9e55-21300bb9419b"
                                    },
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_enabled": {
            "fields": [
                {
                    "name": "enabled",
                    "title": "Enabled",
                    "type": "`$BOOLEAN`",
                    "req": true,
                    "short": "Indicates whether zone-level authenticated origin pulls is enabled."
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "tls_certificates_and_hostnames_enabled",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/zones/{zone_id}/origin_tls_client_auth/settings",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "origin_tls_client_auth"
                                },
                                {
                                    "lit": "settings"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "origin_tls_client_auth",
                                "settings"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/zones/{zone_id}/origin_tls_client_auth/settings",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "origin_tls_client_auth"
                                },
                                {
                                    "lit": "settings"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "origin_tls_client_auth",
                                "settings"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_fallback_origin": {
            "fields": [
                {
                    "name": "origin",
                    "title": "Origin",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Your origin hostname that requests to your custom hostnames will be sent to."
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "tls_certificates_and_hostnames_fallback_origin",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/zones/{zone_id}/custom_hostnames/fallback_origin",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "custom_hostnames"
                                },
                                {
                                    "lit": "fallback_origin"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "custom_hostnames",
                                "fallback_origin"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/zones/{zone_id}/custom_hostnames/fallback_origin",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "custom_hostnames"
                                },
                                {
                                    "lit": "fallback_origin"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "custom_hostnames",
                                "fallback_origin"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/zones/{zone_id}/custom_hostnames/fallback_origin",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "custom_hostnames"
                                },
                                {
                                    "lit": "fallback_origin"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "custom_hostnames",
                                "fallback_origin"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_hostname_aop_response_collection": {
            "fields": [
                {
                    "name": "config",
                    "title": "Config",
                    "type": "`$ARRAY`",
                    "req": true
                }
            ],
            "name": "tls_certificates_and_hostnames_hostname_aop_response_collection",
            "op": {
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/zones/{zone_id}/origin_tls_client_auth/hostnames",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "origin_tls_client_auth"
                                },
                                {
                                    "lit": "hostnames"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "origin_tls_client_auth",
                                "hostnames"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_hostname_aop_single": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "tls_certificates_and_hostnames_hostname_aop_single",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/zones/{zone_id}/origin_tls_client_auth/hostnames/{hostname}",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "origin_tls_client_auth"
                                },
                                {
                                    "lit": "hostnames"
                                },
                                {
                                    "var": "hostname"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "origin_tls_client_auth",
                                "hostnames",
                                "{hostname}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "hostname",
                                        "orig": "hostname",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "app.example.com"
                                    },
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "hostname",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_hostname_assoc_response_collection": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "result_info",
                    "title": "Result Info",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "tls_certificates_and_hostnames_hostname_assoc_response_collection",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/zones/{zone_id}/origin_tls_client_auth/hostnames",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "origin_tls_client_auth"
                                },
                                {
                                    "lit": "hostnames"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "origin_tls_client_auth",
                                "hostnames"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 50
                                    },
                                    {
                                        "name": "status",
                                        "orig": "status",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "active"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "page",
                                    "per_page",
                                    "status",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_keyless_response_collection": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "tls_certificates_and_hostnames_keyless_response_collection",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/zones/{zone_id}/keyless_certificates",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "keyless_certificates"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "keyless_certificates"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_keyless_response_single": {
            "fields": [
                {
                    "name": "bundle_method",
                    "title": "Bundle Method",
                    "type": "`$STRING`",
                    "short": "A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores."
                },
                {
                    "name": "certificate",
                    "title": "Certificate",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "The zone's SSL certificate or SSL certificate and intermediate(s)."
                },
                {
                    "name": "enabled",
                    "title": "Enabled",
                    "type": "`$BOOLEAN`",
                    "short": "Whether or not the Keyless SSL is on or off.",
                    "deprecated": true
                },
                {
                    "name": "host",
                    "title": "Host",
                    "type": "`$STRING`",
                    "req": true,
                    "op": {
                        "update": {
                            "type": "`$STRING`"
                        }
                    },
                    "short": "The keyless SSL name.",
                    "format": "hostname"
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "short": "The keyless SSL name."
                },
                {
                    "name": "port",
                    "title": "Port",
                    "type": "`$NUMBER`",
                    "req": true,
                    "op": {
                        "update": {
                            "type": "`$NUMBER`"
                        }
                    },
                    "short": "The keyless SSL port used to communicate between Cloudflare and the client's Keyless SSL server."
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "tunnel",
                    "title": "Tunnel",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "Configuration for using Keyless SSL through a Cloudflare Tunnel."
                }
            ],
            "name": "tls_certificates_and_hostnames_keyless_response_single",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/zones/{zone_id}/keyless_certificates",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "keyless_certificates"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "keyless_certificates"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/zones/{zone_id}/keyless_certificates/{keyless_certificate_id}",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "keyless_certificates"
                                },
                                {
                                    "var": "keyless_certificate_id"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "keyless_certificates",
                                "{keyless_certificate_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "keyless_certificate_id",
                                        "orig": "keyless_certificate_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "4d2844d2ce78891c34d0b6c0535a291e"
                                    },
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "keyless_certificate_id",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/zones/{zone_id}/keyless_certificates/{keyless_certificate_id}",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "keyless_certificates"
                                },
                                {
                                    "var": "keyless_certificate_id"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "keyless_certificates",
                                "{keyless_certificate_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "keyless_certificate_id",
                                        "orig": "keyless_certificate_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "4d2844d2ce78891c34d0b6c0535a291e"
                                    },
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "keyless_certificate_id",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_keyless_response_single_id": {
            "fields": [],
            "name": "tls_certificates_and_hostnames_keyless_response_single_id",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/zones/{zone_id}/keyless_certificates/{keyless_certificate_id}",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "keyless_certificates"
                                },
                                {
                                    "var": "keyless_certificate_id"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "keyless_certificates",
                                "{keyless_certificate_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "keyless_certificate_id",
                                        "orig": "keyless_certificate_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "4d2844d2ce78891c34d0b6c0535a291e"
                                    },
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "keyless_certificate_id",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_per_hostname_setting": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "value",
                    "title": "Value",
                    "type": "`$ANY`",
                    "req": true,
                    "short": "The TLS setting value."
                }
            ],
            "id": {
                "field": "id",
                "from": {
                    "hostname": "hostname"
                },
                "name": "id",
                "parts": [
                    "setting_id",
                    "hostname"
                ],
                "sep": "/"
            },
            "name": "tls_certificates_and_hostnames_per_hostname_setting",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "hostnames"
                                },
                                {
                                    "lit": "settings"
                                },
                                {
                                    "var": "setting_id"
                                },
                                {
                                    "var": "hostname"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "hostnames",
                                "settings",
                                "{setting_id}",
                                "{hostname}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "hostname",
                                        "orig": "hostname",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "app.example.com"
                                    },
                                    {
                                        "name": "setting_id",
                                        "orig": "setting_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "hostname",
                                    "setting_id",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "hostnames"
                                },
                                {
                                    "lit": "settings"
                                },
                                {
                                    "var": "setting_id"
                                },
                                {
                                    "var": "hostname"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "hostnames",
                                "settings",
                                "{setting_id}",
                                "{hostname}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "hostname",
                                        "orig": "hostname",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "app.example.com"
                                    },
                                    {
                                        "name": "setting_id",
                                        "orig": "setting_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "hostname",
                                    "setting_id",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_per_hostname_settings_response": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "result_info",
                    "title": "Result Info",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "tls_certificates_and_hostnames_per_hostname_settings_response",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/zones/{zone_id}/hostnames/settings/{setting_id}",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "hostnames"
                                },
                                {
                                    "lit": "settings"
                                },
                                {
                                    "var": "setting_id"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "hostnames",
                                "settings",
                                "{setting_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "setting_id",
                                        "orig": "setting_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "setting_id",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_per_hostname_settings_response2": {
            "fields": [
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id",
                "parts": [
                    "setting_id",
                    "hostname"
                ],
                "sep": "/"
            },
            "name": "tls_certificates_and_hostnames_per_hostname_settings_response2",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "hostnames"
                                },
                                {
                                    "lit": "settings"
                                },
                                {
                                    "var": "setting_id"
                                },
                                {
                                    "var": "hostname"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "hostnames",
                                "settings",
                                "{setting_id}",
                                "{hostname}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "hostname",
                                        "orig": "hostname",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "app.example.com"
                                    },
                                    {
                                        "name": "setting_id",
                                        "orig": "setting_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true
                                    },
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "hostname",
                                    "setting_id",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_ssl_universal_setting": {
            "fields": [
                {
                    "name": "enabled",
                    "title": "Enabled",
                    "type": "`$BOOLEAN`",
                    "short": "Disabling Universal SSL removes any currently active Universal SSL certificates for your zone from the edge and prevents any future Universal SSL certificates from being ordered."
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "tls_certificates_and_hostnames_ssl_universal_setting",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/zones/{zone_id}/ssl/universal/settings",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "ssl"
                                },
                                {
                                    "lit": "universal"
                                },
                                {
                                    "lit": "settings"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "ssl",
                                "universal",
                                "settings"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/zones/{zone_id}/ssl/universal/settings",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "ssl"
                                },
                                {
                                    "lit": "universal"
                                },
                                {
                                    "lit": "settings"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "ssl",
                                "universal",
                                "settings"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_ssl_validation_method_response": {
            "fields": [
                {
                    "name": "validation_method",
                    "title": "Validation Method",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Desired validation method."
                }
            ],
            "name": "tls_certificates_and_hostnames_ssl_validation_method_response",
            "op": {
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/zones/{zone_id}/ssl/verification/{certificate_pack_id}",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "ssl"
                                },
                                {
                                    "lit": "verification"
                                },
                                {
                                    "var": "certificate_pack_id"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "ssl",
                                "verification",
                                "{certificate_pack_id}"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "certificate_pack_id",
                                        "orig": "certificate_pack_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "a77f8bd7-3b47-46b4-a6f1-75cf98109948"
                                    },
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "certificate_pack_id",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_ssl_verification_response_collection": {
            "fields": [
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "tls_certificates_and_hostnames_ssl_verification_response_collection",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/zones/{zone_id}/ssl/verification",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "ssl"
                                },
                                {
                                    "lit": "verification"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "ssl",
                                "verification"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ],
                                "query": [
                                    {
                                        "name": "retry",
                                        "orig": "retry",
                                        "type": "`$BOOLEAN`",
                                        "kind": "query",
                                        "example": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "retry",
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tls_certificates_and_hostnames_total_tls_setting": {
            "fields": [
                {
                    "name": "certificate_authority",
                    "title": "Certificate Authority",
                    "type": "`$STRING`",
                    "short": "The Certificate Authority that Total TLS certificates will be issued through."
                },
                {
                    "name": "enabled",
                    "title": "Enabled",
                    "type": "`$BOOLEAN`",
                    "req": true,
                    "short": "If enabled, Total TLS will order a hostname specific TLS certificate for any proxied A, AAAA, or CNAME record in your zone."
                },
                {
                    "name": "result",
                    "title": "Result",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "tls_certificates_and_hostnames_total_tls_setting",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "kind": "http",
                            "method": "POST",
                            "orig": "/zones/{zone_id}/acm/total_tls",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "acm"
                                },
                                {
                                    "lit": "total_tls"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "acm",
                                "total_tls"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/zones/{zone_id}/acm/total_tls",
                            "segments": [
                                {
                                    "lit": "zones"
                                },
                                {
                                    "var": "zone_id"
                                },
                                {
                                    "lit": "acm"
                                },
                                {
                                    "lit": "total_tls"
                                }
                            ],
                            "parts": [
                                "zones",
                                "{zone_id}",
                                "acm",
                                "total_tls"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "zone_id",
                                        "orig": "zone_id",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "023e105f4ecef8ad9ca31a8372d0c353"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "zone_id"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map