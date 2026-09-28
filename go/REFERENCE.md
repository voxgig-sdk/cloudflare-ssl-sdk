# CloudflareSsl Golang SDK Reference

Complete API reference for the CloudflareSsl Golang SDK.


## CloudflareSslSDK

### Constructor

```go
func NewCloudflareSslSDK(options map[string]any) *CloudflareSslSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *CloudflareSslSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *CloudflareSslSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `CacheApiResponseSingleId(data map[string]any) CloudflareSslEntity`

Create a new `CacheApiResponseSingleId` entity instance. Pass `nil` for no initial data.

#### `CacheAutoOriginTlsKex(data map[string]any) CloudflareSslEntity`

Create a new `CacheAutoOriginTlsKex` entity instance. Pass `nil` for no initial data.

#### `CustomHostname(data map[string]any) CloudflareSslEntity`

Create a new `CustomHostname` entity instance. Pass `nil` for no initial data.

#### `CustomHostnameForAZone(data map[string]any) CloudflareSslEntity`

Create a new `CustomHostnameForAZone` entity instance. Pass `nil` for no initial data.

#### `OriginTl(data map[string]any) CloudflareSslEntity`

Create a new `OriginTl` entity instance. Pass `nil` for no initial data.

#### `Recommendation(data map[string]any) CloudflareSslEntity`

Create a new `Recommendation` entity instance. Pass `nil` for no initial data.

#### `SslAutomaticMode(data map[string]any) CloudflareSslEntity`

Create a new `SslAutomaticMode` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesAdvancedCertificatePackResponse(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesAdvancedCertificatePackResponse` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesAssociationResponseCollection(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesAssociationResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateAnalyze(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesCertificateAnalyze` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificatePackQuota(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesCertificatePackQuota` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificatePackResponseCollection(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesCertificatePackResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificatePackResponseSingle(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesCertificatePackResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseCollection(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseCollection3(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection3` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseCollection4(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection4` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseCollection5(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection5` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseIdOnly(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseIdOnly` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseSingle(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseSingle2(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle2` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseSingle3(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle3` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseSingle4(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle4` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseSingle5(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle5` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseSinglePost(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSinglePost` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateRevoke(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesCertificateRevoke` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesClientCertificateResponse(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesClientCertificateResponse` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesClientCertificateResponseSingle(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesClientCertificateResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCustomCsrResponseCollection(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCustomCsrResponseCollection2(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseCollection2` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCustomCsrResponseIdOnly(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseIdOnly` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCustomCsrResponseSingle(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCustomCsrResponseSingle2(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseSingle2` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCustomHostnameQuota(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesCustomHostnameQuota` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCustomHostnameResponseCollection(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesCustomHostnameResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCustomHostnameResponseSingle(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesCustomHostnameResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCustomTrustStoreResponse(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponse` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesEnabled(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesEnabled` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesFallbackOrigin(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesFallbackOrigin` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesHostnameAopResponseCollection(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesHostnameAopResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesHostnameAopSingle(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesHostnameAopSingle` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesHostnameAssocResponseCollection(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesHostnameAssocResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesKeylessResponseCollection(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesKeylessResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesKeylessResponseSingle(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesKeylessResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesKeylessResponseSingleId(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesKeylessResponseSingleId` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesPerHostnameSetting(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesPerHostnameSetting` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesPerHostnameSettingsResponse(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesPerHostnameSettingsResponse` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesPerHostnameSettingsResponse2(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesPerHostnameSettingsResponse2` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesSslUniversalSetting(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesSslUniversalSetting` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesSslValidationMethodResponse(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesSslValidationMethodResponse` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesSslVerificationResponseCollection(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesSslVerificationResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesTotalTlsSetting(data map[string]any) CloudflareSslEntity`

Create a new `TlsCertificatesAndHostnamesTotalTlsSetting` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## CacheApiResponseSingleIdEntity

```go
cacheApiResponseSingleId := client.CacheApiResponseSingleId(nil)
fmt.Println(cacheApiResponseSingleId.GetName()) // "cache_api_response_single_id"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes | Indicates the API call's success or failure. |
| `value` | `string` | Yes | Controls enablement of Automatic SSL/TLS. |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CacheApiResponseSingleId(nil).Update(map[string]any{
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CacheApiResponseSingleIdEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CacheAutoOriginTlsKexEntity

```go
cacheAutoOriginTlsKex := client.CacheAutoOriginTlsKex(nil)
fmt.Println(cacheAutoOriginTlsKex.GetName()) // "cache_auto_origin_tls_kex"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `bool` | Yes | Controls enablement of Auto-Origin TLS KEX selection for the zone. |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes | Indicates the API call's success or failure. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CacheAutoOriginTlsKex(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CacheAutoOriginTlsKex(nil).Update(map[string]any{
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CacheAutoOriginTlsKexEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomHostnameEntity

```go
customHostname := client.CustomHostname(nil)
fmt.Println(customHostname.GetName()) // "custom_hostname"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.CustomHostname(nil).Remove(map[string]any{"id": "id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomHostnameEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomHostnameForAZoneEntity

```go
customHostnameForAZone := client.CustomHostnameForAZone(nil)
fmt.Println(customHostnameForAZone.GetName()) // "custom_hostname_for_a_zone"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_certificate` | `string` | Yes | If a custom uploaded certificate is used. |
| `custom_key` | `string` | Yes | The key for a custom uploaded certificate. |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CustomHostnameForAZone(nil).Update(map[string]any{
    "certificate_id": "certificate_id",
    "certificate_pack_id": "certificate_pack_id",
    "custom_hostname_id": "custom_hostname_id",
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.CustomHostnameForAZone(nil).Remove(map[string]any{"certificate_id": "certificate_id", "certificate_pack_id": "certificate_pack_id", "custom_hostname_id": "custom_hostname_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomHostnameForAZoneEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OriginTlEntity

```go
originTl := client.OriginTl(nil)
fmt.Println(originTl.GetName()) // "origin_tl"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `map[string]any` | No |  |
| `value` | `[]any` | Yes | List of TLS compliance modes that constrain the key-exchange algorithms Cloudflare may use when establishing the TLS connection to the zone's origin. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.OriginTl(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.OriginTl(nil).Update(map[string]any{
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.OriginTl(nil).Remove(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OriginTlEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RecommendationEntity

```go
recommendation := client.Recommendation(nil)
fmt.Println(recommendation.GetName()) // "recommendation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes | Indicates the API call's success or failure. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Recommendation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RecommendationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SslAutomaticModeEntity

```go
sslAutomaticMode := client.SslAutomaticMode(nil)
fmt.Println(sslAutomaticMode.GetName()) // "ssl_automatic_mode"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes | Indicates the API call's success or failure. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SslAutomaticMode(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SslAutomaticModeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity

```go
tlsCertificatesAndHostnamesAdvancedCertificatePackResponse := client.TlsCertificatesAndHostnamesAdvancedCertificatePackResponse(nil)
fmt.Println(tlsCertificatesAndHostnamesAdvancedCertificatePackResponse.GetName()) // "tls_certificates_and_hostnames_advanced_certificate_pack_response"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificate_authority` | `string` | Yes | Certificate Authority selected for the order. |
| `cloudflare_branding` | `bool` | No | Whether or not to add Cloudflare Branding for the order. |
| `hosts` | `[]any` | Yes | Comma separated list of valid host names for the certificate packs. |
| `type` | `string` | Yes | Type of certificate pack. |
| `validation_method` | `string` | Yes | Validation Method selected for the order. |
| `validity_days` | `int` | Yes | Validity Days selected for the order. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TlsCertificatesAndHostnamesAdvancedCertificatePackResponse(nil).Create(map[string]any{
    "zone_id": "example_zone_id",
    "certificate_authority": "example_certificate_authority",
    "hosts": []any{},
    "type": "example_type",
    "validation_method": "example_validation_method",
    "validity_days": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TlsCertificatesAndHostnamesAdvancedCertificatePackResponse(nil).Update(map[string]any{
    "certificate_pack_id": "certificate_pack_id",
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesAssociationResponseCollectionEntity

```go
tlsCertificatesAndHostnamesAssociationResponseCollection := client.TlsCertificatesAndHostnamesAssociationResponseCollection(nil)
fmt.Println(tlsCertificatesAndHostnamesAssociationResponseCollection.GetName()) // "tls_certificates_and_hostnames_association_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TlsCertificatesAndHostnamesAssociationResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesAssociationResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateAnalyzeEntity

```go
tlsCertificatesAndHostnamesCertificateAnalyze := client.TlsCertificatesAndHostnamesCertificateAnalyze(nil)
fmt.Println(tlsCertificatesAndHostnamesCertificateAnalyze.GetName()) // "tls_certificates_and_hostnames_certificate_analyze"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bundle_method` | `string` | No | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| `certificate` | `string` | No | The zone's SSL certificate or certificate and the intermediate(s). |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TlsCertificatesAndHostnamesCertificateAnalyze(nil).Create(map[string]any{
    "zone_id": "example_zone_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesCertificateAnalyzeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificatePackQuotaEntity

```go
tlsCertificatesAndHostnamesCertificatePackQuota := client.TlsCertificatesAndHostnamesCertificatePackQuota(nil)
fmt.Println(tlsCertificatesAndHostnamesCertificatePackQuota.GetName()) // "tls_certificates_and_hostnames_certificate_pack_quota"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TlsCertificatesAndHostnamesCertificatePackQuota(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesCertificatePackQuotaEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity

```go
tlsCertificatesAndHostnamesCertificatePackResponseCollection := client.TlsCertificatesAndHostnamesCertificatePackResponseCollection(nil)
fmt.Println(tlsCertificatesAndHostnamesCertificatePackResponseCollection.GetName()) // "tls_certificates_and_hostnames_certificate_pack_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TlsCertificatesAndHostnamesCertificatePackResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity

```go
tlsCertificatesAndHostnamesCertificatePackResponseSingle := client.TlsCertificatesAndHostnamesCertificatePackResponseSingle(nil)
fmt.Println(tlsCertificatesAndHostnamesCertificatePackResponseSingle.GetName()) // "tls_certificates_and_hostnames_certificate_pack_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `map[string]any` | Yes | A certificate pack with all its properties. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TlsCertificatesAndHostnamesCertificatePackResponseSingle(nil).Load(map[string]any{"certificate_pack_id": "certificate_pack_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseCollectionEntity

```go
tlsCertificatesAndHostnamesCertificateResponseCollection := client.TlsCertificatesAndHostnamesCertificateResponseCollection(nil)
fmt.Println(tlsCertificatesAndHostnamesCertificateResponseCollection.GetName()) // "tls_certificates_and_hostnames_certificate_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificates` | `[]any` | Yes | Array of ordered certificates. |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TlsCertificatesAndHostnamesCertificateResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TlsCertificatesAndHostnamesCertificateResponseCollection(nil).Update(map[string]any{
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseCollection3Entity

```go
tlsCertificatesAndHostnamesCertificateResponseCollection3 := client.TlsCertificatesAndHostnamesCertificateResponseCollection3(nil)
fmt.Println(tlsCertificatesAndHostnamesCertificateResponseCollection3.GetName()) // "tls_certificates_and_hostnames_certificate_response_collection_3"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TlsCertificatesAndHostnamesCertificateResponseCollection3(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection3Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseCollection4Entity

```go
tlsCertificatesAndHostnamesCertificateResponseCollection4 := client.TlsCertificatesAndHostnamesCertificateResponseCollection4(nil)
fmt.Println(tlsCertificatesAndHostnamesCertificateResponseCollection4.GetName()) // "tls_certificates_and_hostnames_certificate_response_collection_4"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TlsCertificatesAndHostnamesCertificateResponseCollection4(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection4Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseCollection5Entity

```go
tlsCertificatesAndHostnamesCertificateResponseCollection5 := client.TlsCertificatesAndHostnamesCertificateResponseCollection5(nil)
fmt.Println(tlsCertificatesAndHostnamesCertificateResponseCollection5.GetName()) // "tls_certificates_and_hostnames_certificate_response_collection_5"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |
| `result_info` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TlsCertificatesAndHostnamesCertificateResponseCollection5(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection5Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity

```go
tlsCertificatesAndHostnamesCertificateResponseIdOnly := client.TlsCertificatesAndHostnamesCertificateResponseIdOnly(nil)
fmt.Println(tlsCertificatesAndHostnamesCertificateResponseIdOnly.GetName()) // "tls_certificates_and_hostnames_certificate_response_id_only"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TlsCertificatesAndHostnamesCertificateResponseIdOnly(nil).Remove(map[string]any{"custom_certificate_id": "custom_certificate_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseSingleEntity

```go
tlsCertificatesAndHostnamesCertificateResponseSingle := client.TlsCertificatesAndHostnamesCertificateResponseSingle(nil)
fmt.Println(tlsCertificatesAndHostnamesCertificateResponseSingle.GetName()) // "tls_certificates_and_hostnames_certificate_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bundle_method` | `string` | No | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| `certificate` | `string` | Yes | The zone's SSL certificate or certificate and the intermediate(s). |
| `custom_csr_id` | `string` | No | The identifier for the Custom CSR that was used. |
| `deploy` | `string` | No | The environment to deploy the certificate to, defaults to production. |
| `geo_restrictions` | `map[string]any` | No | Specify the region where your private key can be held locally for optimal TLS performance. |
| `policy` | `string` | No | Specify the policy that determines the region where your private key will be held locally. |
| `private_key` | `string` | No | The zone's private key. |
| `result` | `map[string]any` | Yes |  |
| `type` | `string` | No | The type 'legacy_custom' enables support for legacy clients which do not include SNI in the TLS handshake. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `bundle_method` | - | - | - |
| `certificate` | - | - | Yes |
| `custom_csr_id` | - | - | - |
| `deploy` | - | - | - |
| `geo_restrictions` | - | - | - |
| `policy` | - | - | - |
| `private_key` | - | - | - |
| `result` | - | - | - |
| `type` | - | - | - |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TlsCertificatesAndHostnamesCertificateResponseSingle(nil).Load(map[string]any{"custom_certificate_id": "custom_certificate_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TlsCertificatesAndHostnamesCertificateResponseSingle(nil).Create(map[string]any{
    "zone_id": "example_zone_id",
    "certificate": "example_certificate",
    "result": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TlsCertificatesAndHostnamesCertificateResponseSingle(nil).Update(map[string]any{
    "custom_certificate_id": "custom_certificate_id",
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseSingle2Entity

```go
tlsCertificatesAndHostnamesCertificateResponseSingle2 := client.TlsCertificatesAndHostnamesCertificateResponseSingle2(nil)
fmt.Println(tlsCertificatesAndHostnamesCertificateResponseSingle2.GetName()) // "tls_certificates_and_hostnames_certificate_response_single_2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `csr` | `string` | Yes | The Certificate Signing Request (CSR). |
| `hostnames` | `[]any` | Yes | Array of hostnames or wildcard names bound to the certificate. |
| `request_type` | `string` | Yes | Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa), or "keyless-certificate" (for Keyless SSL servers). |
| `requested_validity` | `float64` | No | The number of days for which the certificate should be valid. |
| `result` | `map[string]any` | Yes |  |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `csr` | - | - | - |
| `hostnames` | - | - | - |
| `request_type` | - | - | - |
| `requested_validity` | - | - | - |
| `result` | - | Yes | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TlsCertificatesAndHostnamesCertificateResponseSingle2(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TlsCertificatesAndHostnamesCertificateResponseSingle2(nil).Load(map[string]any{"certificate_id": "certificate_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TlsCertificatesAndHostnamesCertificateResponseSingle2(nil).Create(map[string]any{
    "csr": "example_csr",
    "hostnames": []any{},
    "request_type": "example_request_type",
    "result": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle2Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseSingle3Entity

```go
tlsCertificatesAndHostnamesCertificateResponseSingle3 := client.TlsCertificatesAndHostnamesCertificateResponseSingle3(nil)
fmt.Println(tlsCertificatesAndHostnamesCertificateResponseSingle3.GetName()) // "tls_certificates_and_hostnames_certificate_response_single_3"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificate` | `string` | Yes | The zone's leaf certificate. |
| `private_key` | `string` | Yes | The zone's private key. |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TlsCertificatesAndHostnamesCertificateResponseSingle3(nil).Load(map[string]any{"certificate_id": "certificate_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TlsCertificatesAndHostnamesCertificateResponseSingle3(nil).Create(map[string]any{
    "zone_id": "example_zone_id",
    "certificate": "example_certificate",
    "private_key": "example_private_key",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TlsCertificatesAndHostnamesCertificateResponseSingle3(nil).Remove(map[string]any{"certificate_id": "certificate_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle3Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseSingle4Entity

```go
tlsCertificatesAndHostnamesCertificateResponseSingle4 := client.TlsCertificatesAndHostnamesCertificateResponseSingle4(nil)
fmt.Println(tlsCertificatesAndHostnamesCertificateResponseSingle4.GetName()) // "tls_certificates_and_hostnames_certificate_response_single_4"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificate` | `string` | Yes | The hostname certificate. |
| `private_key` | `string` | Yes | The hostname certificate's private key. |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TlsCertificatesAndHostnamesCertificateResponseSingle4(nil).Load(map[string]any{"certificate_id": "certificate_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TlsCertificatesAndHostnamesCertificateResponseSingle4(nil).Create(map[string]any{
    "zone_id": "example_zone_id",
    "certificate": "example_certificate",
    "private_key": "example_private_key",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TlsCertificatesAndHostnamesCertificateResponseSingle4(nil).Remove(map[string]any{"certificate_id": "certificate_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle4Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseSingle5Entity

```go
tlsCertificatesAndHostnamesCertificateResponseSingle5 := client.TlsCertificatesAndHostnamesCertificateResponseSingle5(nil)
fmt.Println(tlsCertificatesAndHostnamesCertificateResponseSingle5.GetName()) // "tls_certificates_and_hostnames_certificate_response_single_5"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TlsCertificatesAndHostnamesCertificateResponseSingle5(nil).Load(map[string]any{"account_id": "account_id", "mtls_certificate_id": "mtls_certificate_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TlsCertificatesAndHostnamesCertificateResponseSingle5(nil).Remove(map[string]any{"account_id": "account_id", "mtls_certificate_id": "mtls_certificate_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle5Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity

```go
tlsCertificatesAndHostnamesCertificateResponseSinglePost := client.TlsCertificatesAndHostnamesCertificateResponseSinglePost(nil)
fmt.Println(tlsCertificatesAndHostnamesCertificateResponseSinglePost.GetName()) // "tls_certificates_and_hostnames_certificate_response_single_post"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ca` | `bool` | Yes | Indicates whether the certificate is a CA or leaf certificate. |
| `certificates` | `string` | Yes | The uploaded root CA certificate. |
| `name` | `string` | No | Optional unique name for the certificate. |
| `private_key` | `string` | No | The private key for the certificate. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TlsCertificatesAndHostnamesCertificateResponseSinglePost(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "ca": true,
    "certificates": "example_certificates",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateRevokeEntity

```go
tlsCertificatesAndHostnamesCertificateRevoke := client.TlsCertificatesAndHostnamesCertificateRevoke(nil)
fmt.Println(tlsCertificatesAndHostnamesCertificateRevoke.GetName()) // "tls_certificates_and_hostnames_certificate_revoke"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TlsCertificatesAndHostnamesCertificateRevoke(nil).Remove(map[string]any{"certificate_id": "certificate_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesCertificateRevokeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesClientCertificateResponseEntity

```go
tlsCertificatesAndHostnamesClientCertificateResponse := client.TlsCertificatesAndHostnamesClientCertificateResponse(nil)
fmt.Println(tlsCertificatesAndHostnamesClientCertificateResponse.GetName()) // "tls_certificates_and_hostnames_client_certificate_response"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TlsCertificatesAndHostnamesClientCertificateResponse(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesClientCertificateResponseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity

```go
tlsCertificatesAndHostnamesClientCertificateResponseSingle := client.TlsCertificatesAndHostnamesClientCertificateResponseSingle(nil)
fmt.Println(tlsCertificatesAndHostnamesClientCertificateResponseSingle.GetName()) // "tls_certificates_and_hostnames_client_certificate_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `csr` | `string` | Yes | The Certificate Signing Request (CSR). |
| `reactivate` | `bool` | No |  |
| `result` | `map[string]any` | No |  |
| `validity_days` | `int` | Yes | The number of days the Client Certificate will be valid after the issued_on date. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TlsCertificatesAndHostnamesClientCertificateResponseSingle(nil).Load(map[string]any{"client_certificate_id": "client_certificate_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TlsCertificatesAndHostnamesClientCertificateResponseSingle(nil).Create(map[string]any{
    "zone_id": "example_zone_id",
    "csr": "example_csr",
    "validity_days": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TlsCertificatesAndHostnamesClientCertificateResponseSingle(nil).Update(map[string]any{
    "client_certificate_id": "client_certificate_id",
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TlsCertificatesAndHostnamesClientCertificateResponseSingle(nil).Remove(map[string]any{"client_certificate_id": "client_certificate_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity

```go
tlsCertificatesAndHostnamesCustomCsrResponseCollection := client.TlsCertificatesAndHostnamesCustomCsrResponseCollection(nil)
fmt.Println(tlsCertificatesAndHostnamesCustomCsrResponseCollection.GetName()) // "tls_certificates_and_hostnames_custom_csr_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TlsCertificatesAndHostnamesCustomCsrResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity

```go
tlsCertificatesAndHostnamesCustomCsrResponseCollection2 := client.TlsCertificatesAndHostnamesCustomCsrResponseCollection2(nil)
fmt.Println(tlsCertificatesAndHostnamesCustomCsrResponseCollection2.GetName()) // "tls_certificates_and_hostnames_custom_csr_response_collection_2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TlsCertificatesAndHostnamesCustomCsrResponseCollection2(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity

```go
tlsCertificatesAndHostnamesCustomCsrResponseIdOnly := client.TlsCertificatesAndHostnamesCustomCsrResponseIdOnly(nil)
fmt.Println(tlsCertificatesAndHostnamesCustomCsrResponseIdOnly.GetName()) // "tls_certificates_and_hostnames_custom_csr_response_id_only"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TlsCertificatesAndHostnamesCustomCsrResponseIdOnly(nil).Remove(map[string]any{"custom_csr_id": "custom_csr_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity

```go
tlsCertificatesAndHostnamesCustomCsrResponseSingle := client.TlsCertificatesAndHostnamesCustomCsrResponseSingle(nil)
fmt.Println(tlsCertificatesAndHostnamesCustomCsrResponseSingle.GetName()) // "tls_certificates_and_hostnames_custom_csr_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `common_name` | `string` | Yes | The common name (domain) for the CSR. |
| `country` | `string` | Yes | Two-letter ISO 3166-1 alpha-2 country code. |
| `key_type` | `string` | No | Key algorithm to use for the CSR. |
| `locality` | `string` | Yes | City or locality name. |
| `organization` | `string` | Yes | Organization name. |
| `organizational_unit` | `string` | No | Organizational unit name. |
| `result` | `map[string]any` | Yes | A custom Certificate Signing Request (CSR). |
| `sans` | `[]any` | Yes | Subject Alternative Names for the CSR. |
| `state` | `string` | Yes | State or province name. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TlsCertificatesAndHostnamesCustomCsrResponseSingle(nil).Load(map[string]any{"custom_csr_id": "custom_csr_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TlsCertificatesAndHostnamesCustomCsrResponseSingle(nil).Create(map[string]any{
    "zone_id": "example_zone_id",
    "common_name": "example_common_name",
    "country": "example_country",
    "locality": "example_locality",
    "organization": "example_organization",
    "result": map[string]any{},
    "sans": []any{},
    "state": "example_state",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity

```go
tlsCertificatesAndHostnamesCustomCsrResponseSingle2 := client.TlsCertificatesAndHostnamesCustomCsrResponseSingle2(nil)
fmt.Println(tlsCertificatesAndHostnamesCustomCsrResponseSingle2.GetName()) // "tls_certificates_and_hostnames_custom_csr_response_single_2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `common_name` | `string` | Yes | The common name (domain) for the CSR. |
| `country` | `string` | Yes | Two-letter ISO 3166-1 alpha-2 country code. |
| `description` | `string` | No | Optional description for the CSR. |
| `key_type` | `string` | No | Key algorithm to use for the CSR. |
| `locality` | `string` | Yes | City or locality name. |
| `name` | `string` | No | Human-readable name for the CSR. |
| `organization` | `string` | Yes | Organization name. |
| `organizational_unit` | `string` | No | Organizational unit name. |
| `result` | `map[string]any` | Yes | A custom Certificate Signing Request (CSR). |
| `sans` | `[]any` | Yes | Subject Alternative Names for the CSR. |
| `state` | `string` | Yes | State or province name. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TlsCertificatesAndHostnamesCustomCsrResponseSingle2(nil).Load(map[string]any{"account_id": "account_id", "custom_csr_id": "custom_csr_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TlsCertificatesAndHostnamesCustomCsrResponseSingle2(nil).Create(map[string]any{
    "account_id": "example_account_id",
    "common_name": "example_common_name",
    "country": "example_country",
    "locality": "example_locality",
    "organization": "example_organization",
    "result": map[string]any{},
    "sans": []any{},
    "state": "example_state",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomHostnameQuotaEntity

```go
tlsCertificatesAndHostnamesCustomHostnameQuota := client.TlsCertificatesAndHostnamesCustomHostnameQuota(nil)
fmt.Println(tlsCertificatesAndHostnamesCustomHostnameQuota.GetName()) // "tls_certificates_and_hostnames_custom_hostname_quota"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes | Informational messages returned by the custom hostname API. |
| `result` | `map[string]any` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TlsCertificatesAndHostnamesCustomHostnameQuota(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesCustomHostnameQuotaEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity

```go
tlsCertificatesAndHostnamesCustomHostnameResponseCollection := client.TlsCertificatesAndHostnamesCustomHostnameResponseCollection(nil)
fmt.Println(tlsCertificatesAndHostnamesCustomHostnameResponseCollection.GetName()) // "tls_certificates_and_hostnames_custom_hostname_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes | Informational messages returned by the custom hostname API. |
| `result` | `[]any` | No |  |
| `result_info` | `map[string]any` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TlsCertificatesAndHostnamesCustomHostnameResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity

```go
tlsCertificatesAndHostnamesCustomHostnameResponseSingle := client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle(nil)
fmt.Println(tlsCertificatesAndHostnamesCustomHostnameResponseSingle.GetName()) // "tls_certificates_and_hostnames_custom_hostname_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_metadata` | `map[string]any` | No | Unique key/value metadata for this hostname. |
| `custom_origin_server` | `string` | No | a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record. |
| `custom_origin_sni` | `string` | No | A hostname that will be sent to your custom origin server as SNI for TLS handshake. |
| `errors` | `[]any` | Yes |  |
| `hostname` | `string` | Yes | The custom hostname that will point to your hostname via CNAME. |
| `messages` | `[]any` | Yes | Informational messages returned by the custom hostname API. |
| `result` | `map[string]any` | No |  |
| `ssl` | `map[string]any` | No | SSL properties used when creating the custom hostname. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle(nil).Load(map[string]any{"custom_hostname_id": "custom_hostname_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle(nil).Create(map[string]any{
    "zone_id": "example_zone_id",
    "errors": []any{},
    "hostname": "example_hostname",
    "messages": []any{},
    "success": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle(nil).Update(map[string]any{
    "custom_hostname_id": "custom_hostname_id",
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity

```go
tlsCertificatesAndHostnamesCustomTrustStoreResponse := client.TlsCertificatesAndHostnamesCustomTrustStoreResponse(nil)
fmt.Println(tlsCertificatesAndHostnamesCustomTrustStoreResponse.GetName()) // "tls_certificates_and_hostnames_custom_trust_store_response"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TlsCertificatesAndHostnamesCustomTrustStoreResponse(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity

```go
tlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly := client.TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly(nil)
fmt.Println(tlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly.GetName()) // "tls_certificates_and_hostnames_custom_trust_store_response_id_only"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly(nil).Remove(map[string]any{"custom_origin_trust_store_id": "custom_origin_trust_store_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity

```go
tlsCertificatesAndHostnamesCustomTrustStoreResponseSingle := client.TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle(nil)
fmt.Println(tlsCertificatesAndHostnamesCustomTrustStoreResponseSingle.GetName()) // "tls_certificates_and_hostnames_custom_trust_store_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificate` | `string` | Yes | The root CA certificate in PEM format. |
| `result` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle(nil).Load(map[string]any{"custom_origin_trust_store_id": "custom_origin_trust_store_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle(nil).Create(map[string]any{
    "zone_id": "example_zone_id",
    "certificate": "example_certificate",
    "result": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity

```go
tlsCertificatesAndHostnamesDeleteAdvancedCertificatePack := client.TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack(nil)
fmt.Println(tlsCertificatesAndHostnamesDeleteAdvancedCertificatePack.GetName()) // "tls_certificates_and_hostnames_delete_advanced_certificate_pack"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack(nil).Remove(map[string]any{"id": "id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesEnabledEntity

```go
tlsCertificatesAndHostnamesEnabled := client.TlsCertificatesAndHostnamesEnabled(nil)
fmt.Println(tlsCertificatesAndHostnamesEnabled.GetName()) // "tls_certificates_and_hostnames_enabled"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `bool` | Yes | Indicates whether zone-level authenticated origin pulls is enabled. |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TlsCertificatesAndHostnamesEnabled(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TlsCertificatesAndHostnamesEnabled(nil).Update(map[string]any{
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesEnabledEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesFallbackOriginEntity

```go
tlsCertificatesAndHostnamesFallbackOrigin := client.TlsCertificatesAndHostnamesFallbackOrigin(nil)
fmt.Println(tlsCertificatesAndHostnamesFallbackOrigin.GetName()) // "tls_certificates_and_hostnames_fallback_origin"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `origin` | `string` | Yes | Your origin hostname that requests to your custom hostnames will be sent to. |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TlsCertificatesAndHostnamesFallbackOrigin(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TlsCertificatesAndHostnamesFallbackOrigin(nil).Update(map[string]any{
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TlsCertificatesAndHostnamesFallbackOrigin(nil).Remove(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesFallbackOriginEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity

```go
tlsCertificatesAndHostnamesHostnameAopResponseCollection := client.TlsCertificatesAndHostnamesHostnameAopResponseCollection(nil)
fmt.Println(tlsCertificatesAndHostnamesHostnameAopResponseCollection.GetName()) // "tls_certificates_and_hostnames_hostname_aop_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `[]any` | Yes |  |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TlsCertificatesAndHostnamesHostnameAopResponseCollection(nil).Update(map[string]any{
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesHostnameAopSingleEntity

```go
tlsCertificatesAndHostnamesHostnameAopSingle := client.TlsCertificatesAndHostnamesHostnameAopSingle(nil)
fmt.Println(tlsCertificatesAndHostnamesHostnameAopSingle.GetName()) // "tls_certificates_and_hostnames_hostname_aop_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TlsCertificatesAndHostnamesHostnameAopSingle(nil).Load(map[string]any{"hostname": "hostname", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesHostnameAopSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity

```go
tlsCertificatesAndHostnamesHostnameAssocResponseCollection := client.TlsCertificatesAndHostnamesHostnameAssocResponseCollection(nil)
fmt.Println(tlsCertificatesAndHostnamesHostnameAssocResponseCollection.GetName()) // "tls_certificates_and_hostnames_hostname_assoc_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |
| `result_info` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TlsCertificatesAndHostnamesHostnameAssocResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesKeylessResponseCollectionEntity

```go
tlsCertificatesAndHostnamesKeylessResponseCollection := client.TlsCertificatesAndHostnamesKeylessResponseCollection(nil)
fmt.Println(tlsCertificatesAndHostnamesKeylessResponseCollection.GetName()) // "tls_certificates_and_hostnames_keyless_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TlsCertificatesAndHostnamesKeylessResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesKeylessResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesKeylessResponseSingleEntity

```go
tlsCertificatesAndHostnamesKeylessResponseSingle := client.TlsCertificatesAndHostnamesKeylessResponseSingle(nil)
fmt.Println(tlsCertificatesAndHostnamesKeylessResponseSingle.GetName()) // "tls_certificates_and_hostnames_keyless_response_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bundle_method` | `string` | No | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| `certificate` | `string` | Yes | The zone's SSL certificate or SSL certificate and intermediate(s). |
| `enabled` | `bool` | No | Whether or not the Keyless SSL is on or off. |
| `host` | `string` | Yes | The keyless SSL name. |
| `name` | `string` | No | The keyless SSL name. |
| `port` | `float64` | Yes | The keyless SSL port used to communicate between Cloudflare and the client's Keyless SSL server. |
| `result` | `map[string]any` | No |  |
| `tunnel` | `map[string]any` | Yes | Configuration for using Keyless SSL through a Cloudflare Tunnel. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `bundle_method` | - | - | - |
| `certificate` | - | - | - |
| `enabled` | - | - | - |
| `host` | - | - | Yes |
| `name` | - | - | - |
| `port` | - | - | Yes |
| `result` | - | - | - |
| `tunnel` | - | - | - |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TlsCertificatesAndHostnamesKeylessResponseSingle(nil).Load(map[string]any{"keyless_certificate_id": "keyless_certificate_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TlsCertificatesAndHostnamesKeylessResponseSingle(nil).Create(map[string]any{
    "zone_id": "example_zone_id",
    "certificate": "example_certificate",
    "host": "example_host",
    "port": 1,
    "tunnel": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TlsCertificatesAndHostnamesKeylessResponseSingle(nil).Update(map[string]any{
    "keyless_certificate_id": "keyless_certificate_id",
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesKeylessResponseSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity

```go
tlsCertificatesAndHostnamesKeylessResponseSingleId := client.TlsCertificatesAndHostnamesKeylessResponseSingleId(nil)
fmt.Println(tlsCertificatesAndHostnamesKeylessResponseSingleId.GetName()) // "tls_certificates_and_hostnames_keyless_response_single_id"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TlsCertificatesAndHostnamesKeylessResponseSingleId(nil).Remove(map[string]any{"keyless_certificate_id": "keyless_certificate_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesPerHostnameSettingEntity

```go
tlsCertificatesAndHostnamesPerHostnameSetting := client.TlsCertificatesAndHostnamesPerHostnameSetting(nil)
fmt.Println(tlsCertificatesAndHostnamesPerHostnameSetting.GetName()) // "tls_certificates_and_hostnames_per_hostname_setting"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `map[string]any` | No |  |
| `value` | `any` | Yes | The TLS setting value. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TlsCertificatesAndHostnamesPerHostnameSetting(nil).Load(map[string]any{"hostname": "hostname", "setting_id": "setting_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TlsCertificatesAndHostnamesPerHostnameSetting(nil).Update(map[string]any{
    "hostname": "hostname",
    "setting_id": "setting_id",
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesPerHostnameSettingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity

```go
tlsCertificatesAndHostnamesPerHostnameSettingsResponse := client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse(nil)
fmt.Println(tlsCertificatesAndHostnamesPerHostnameSettingsResponse.GetName()) // "tls_certificates_and_hostnames_per_hostname_settings_response"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |
| `result_info` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse(nil).Load(map[string]any{"setting_id": "setting_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity

```go
tlsCertificatesAndHostnamesPerHostnameSettingsResponse2 := client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse2(nil)
fmt.Println(tlsCertificatesAndHostnamesPerHostnameSettingsResponse2.GetName()) // "tls_certificates_and_hostnames_per_hostname_settings_response2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse2(nil).Remove(map[string]any{"hostname": "hostname", "setting_id": "setting_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesSslUniversalSettingEntity

```go
tlsCertificatesAndHostnamesSslUniversalSetting := client.TlsCertificatesAndHostnamesSslUniversalSetting(nil)
fmt.Println(tlsCertificatesAndHostnamesSslUniversalSetting.GetName()) // "tls_certificates_and_hostnames_ssl_universal_setting"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `bool` | No | Disabling Universal SSL removes any currently active Universal SSL certificates for your zone from the edge and prevents any future Universal SSL certificates from being ordered. |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TlsCertificatesAndHostnamesSslUniversalSetting(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TlsCertificatesAndHostnamesSslUniversalSetting(nil).Update(map[string]any{
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesSslUniversalSettingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesSslValidationMethodResponseEntity

```go
tlsCertificatesAndHostnamesSslValidationMethodResponse := client.TlsCertificatesAndHostnamesSslValidationMethodResponse(nil)
fmt.Println(tlsCertificatesAndHostnamesSslValidationMethodResponse.GetName()) // "tls_certificates_and_hostnames_ssl_validation_method_response"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `validation_method` | `string` | Yes | Desired validation method. |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.TlsCertificatesAndHostnamesSslValidationMethodResponse(nil).Update(map[string]any{
    "certificate_pack_id": "certificate_pack_id",
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesSslValidationMethodResponseEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity

```go
tlsCertificatesAndHostnamesSslVerificationResponseCollection := client.TlsCertificatesAndHostnamesSslVerificationResponseCollection(nil)
fmt.Println(tlsCertificatesAndHostnamesSslVerificationResponseCollection.GetName()) // "tls_certificates_and_hostnames_ssl_verification_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TlsCertificatesAndHostnamesSslVerificationResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TlsCertificatesAndHostnamesTotalTlsSettingEntity

```go
tlsCertificatesAndHostnamesTotalTlsSetting := client.TlsCertificatesAndHostnamesTotalTlsSetting(nil)
fmt.Println(tlsCertificatesAndHostnamesTotalTlsSetting.GetName()) // "tls_certificates_and_hostnames_total_tls_setting"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificate_authority` | `string` | No | The Certificate Authority that Total TLS certificates will be issued through. |
| `enabled` | `bool` | Yes | If enabled, Total TLS will order a hostname specific TLS certificate for any proxied A, AAAA, or CNAME record in your zone. |
| `result` | `map[string]any` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TlsCertificatesAndHostnamesTotalTlsSetting(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TlsCertificatesAndHostnamesTotalTlsSetting(nil).Create(map[string]any{
    "zone_id": "example_zone_id",
    "enabled": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TlsCertificatesAndHostnamesTotalTlsSettingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```go
client := sdk.NewCloudflareSslSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

