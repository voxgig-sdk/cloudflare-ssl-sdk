# CloudflareSsl Lua SDK Reference

Complete API reference for the CloudflareSsl Lua SDK.


## CloudflareSslSDK

### Constructor

```lua
local sdk = require("cloudflare-ssl_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `CacheApiResponseSingleId(data)`

Create a new `CacheApiResponseSingleId` entity instance. Pass `nil` for no initial data.

#### `CacheAutoOriginTlsKex(data)`

Create a new `CacheAutoOriginTlsKex` entity instance. Pass `nil` for no initial data.

#### `CustomHostname(data)`

Create a new `CustomHostname` entity instance. Pass `nil` for no initial data.

#### `CustomHostnameForAZone(data)`

Create a new `CustomHostnameForAZone` entity instance. Pass `nil` for no initial data.

#### `OriginTl(data)`

Create a new `OriginTl` entity instance. Pass `nil` for no initial data.

#### `Recommendation(data)`

Create a new `Recommendation` entity instance. Pass `nil` for no initial data.

#### `SslAutomaticMode(data)`

Create a new `SslAutomaticMode` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesAdvancedCertificatePackResponse(data)`

Create a new `TlsCertificatesAndHostnamesAdvancedCertificatePackResponse` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesAssociationResponseCollection(data)`

Create a new `TlsCertificatesAndHostnamesAssociationResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateAnalyze(data)`

Create a new `TlsCertificatesAndHostnamesCertificateAnalyze` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificatePackQuota(data)`

Create a new `TlsCertificatesAndHostnamesCertificatePackQuota` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificatePackResponseCollection(data)`

Create a new `TlsCertificatesAndHostnamesCertificatePackResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificatePackResponseSingle(data)`

Create a new `TlsCertificatesAndHostnamesCertificatePackResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseCollection(data)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseCollection3(data)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection3` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseCollection4(data)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection4` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseCollection5(data)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection5` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseIdOnly(data)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseIdOnly` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseSingle(data)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseSingle2(data)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle2` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseSingle3(data)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle3` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseSingle4(data)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle4` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseSingle5(data)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle5` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseSinglePost(data)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSinglePost` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateRevoke(data)`

Create a new `TlsCertificatesAndHostnamesCertificateRevoke` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesClientCertificateResponse(data)`

Create a new `TlsCertificatesAndHostnamesClientCertificateResponse` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesClientCertificateResponseSingle(data)`

Create a new `TlsCertificatesAndHostnamesClientCertificateResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse(data)`

Create a new `TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCustomCsrResponseCollection(data)`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCustomCsrResponseCollection2(data)`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseCollection2` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCustomCsrResponseIdOnly(data)`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseIdOnly` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCustomCsrResponseSingle(data)`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCustomCsrResponseSingle2(data)`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseSingle2` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCustomHostnameQuota(data)`

Create a new `TlsCertificatesAndHostnamesCustomHostnameQuota` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCustomHostnameResponseCollection(data)`

Create a new `TlsCertificatesAndHostnamesCustomHostnameResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCustomHostnameResponseSingle(data)`

Create a new `TlsCertificatesAndHostnamesCustomHostnameResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCustomTrustStoreResponse(data)`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponse` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly(data)`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle(data)`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesDcvDelegation(data)`

Create a new `TlsCertificatesAndHostnamesDcvDelegation` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack(data)`

Create a new `TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesEnabled(data)`

Create a new `TlsCertificatesAndHostnamesEnabled` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesFallbackOrigin(data)`

Create a new `TlsCertificatesAndHostnamesFallbackOrigin` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesHostnameAopResponseCollection(data)`

Create a new `TlsCertificatesAndHostnamesHostnameAopResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesHostnameAopSingle(data)`

Create a new `TlsCertificatesAndHostnamesHostnameAopSingle` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesHostnameAssocResponseCollection(data)`

Create a new `TlsCertificatesAndHostnamesHostnameAssocResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesHostnameAssociation(data)`

Create a new `TlsCertificatesAndHostnamesHostnameAssociation` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesKeylessResponseCollection(data)`

Create a new `TlsCertificatesAndHostnamesKeylessResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesKeylessResponseSingle(data)`

Create a new `TlsCertificatesAndHostnamesKeylessResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesKeylessResponseSingleId(data)`

Create a new `TlsCertificatesAndHostnamesKeylessResponseSingleId` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesPerHostnameSetting(data)`

Create a new `TlsCertificatesAndHostnamesPerHostnameSetting` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesPerHostnameSettingsResponse(data)`

Create a new `TlsCertificatesAndHostnamesPerHostnameSettingsResponse` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesPerHostnameSettingsResponse2(data)`

Create a new `TlsCertificatesAndHostnamesPerHostnameSettingsResponse2` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesSslUniversalSetting(data)`

Create a new `TlsCertificatesAndHostnamesSslUniversalSetting` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesSslValidationMethodResponse(data)`

Create a new `TlsCertificatesAndHostnamesSslValidationMethodResponse` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesSslVerificationResponseCollection(data)`

Create a new `TlsCertificatesAndHostnamesSslVerificationResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesTotalTlsSetting(data)`

Create a new `TlsCertificatesAndHostnamesTotalTlsSetting` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## CacheApiResponseSingleIdEntity

```lua
local cache_api_response_single_id = client:CacheApiResponseSingleId(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes | Indicates the API call's success or failure. |
| `value` | `string` | Yes | Controls enablement of Automatic SSL/TLS. |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CacheApiResponseSingleId():update({
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CacheApiResponseSingleIdEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CacheAutoOriginTlsKexEntity

```lua
local cache_auto_origin_tls_kex = client:CacheAutoOriginTlsKex(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | Yes | Controls enablement of Auto-Origin TLS KEX selection for the zone. |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes | Indicates the API call's success or failure. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CacheAutoOriginTlsKex():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CacheAutoOriginTlsKex():update({
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CacheAutoOriginTlsKexEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomHostnameEntity

```lua
local custom_hostname = client:CustomHostname(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:CustomHostname():remove({ id = "id", zone_id = "zone_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomHostnameEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomHostnameForAZoneEntity

```lua
local custom_hostname_for_a_zone = client:CustomHostnameForAZone(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_certificate` | `string` | Yes | If a custom uploaded certificate is used. |
| `custom_key` | `string` | Yes | The key for a custom uploaded certificate. |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:CustomHostnameForAZone():remove({ certificate_id = "certificate_id", certificate_pack_id = "certificate_pack_id", custom_hostname_id = "custom_hostname_id", zone_id = "zone_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CustomHostnameForAZone():update({
  certificate_id = "certificate_id",
  certificate_pack_id = "certificate_pack_id",
  custom_hostname_id = "custom_hostname_id",
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomHostnameForAZoneEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OriginTlEntity

```lua
local origin_tl = client:OriginTl(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |
| `value` | `table` | Yes | List of TLS compliance modes that constrain the key-exchange algorithms Cloudflare may use when establishing the TLS connection to the zone's origin. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:OriginTl():load({ zone_id = "zone_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:OriginTl():remove({ zone_id = "zone_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:OriginTl():update({
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OriginTlEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RecommendationEntity

```lua
local recommendation = client:Recommendation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes | Indicates the API call's success or failure. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Recommendation():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RecommendationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SslAutomaticModeEntity

```lua
local ssl_automatic_mode = client:SslAutomaticMode(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes | Indicates the API call's success or failure. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SslAutomaticMode():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SslAutomaticModeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity

```lua
local tls_certificates_and_hostnames_advanced_certificate_pack_response = client:TlsCertificatesAndHostnamesAdvancedCertificatePackResponse(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificate_authority` | `string` | Yes | Certificate Authority selected for the order. |
| `cloudflare_branding` | `boolean` | No | Whether or not to add Cloudflare Branding for the order. |
| `hosts` | `table` | Yes | Comma separated list of valid host names for the certificate packs. |
| `type` | `string` | Yes | Type of certificate pack. |
| `validation_method` | `string` | Yes | Validation Method selected for the order. |
| `validity_days` | `number` | Yes | Validity Days selected for the order. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TlsCertificatesAndHostnamesAdvancedCertificatePackResponse():create({
  zone_id = --[[ string ]],
  certificate_authority = --[[ string ]],
  hosts = --[[ table ]],
  type = --[[ string ]],
  validation_method = --[[ string ]],
  validity_days = --[[ number ]],
})
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TlsCertificatesAndHostnamesAdvancedCertificatePackResponse():update({
  certificate_pack_id = "certificate_pack_id",
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesAssociationResponseCollectionEntity

```lua
local tls_certificates_and_hostnames_association_response_collection = client:TlsCertificatesAndHostnamesAssociationResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TlsCertificatesAndHostnamesAssociationResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesAssociationResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateAnalyzeEntity

```lua
local tls_certificates_and_hostnames_certificate_analyze = client:TlsCertificatesAndHostnamesCertificateAnalyze(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bundle_method` | `string` | No | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| `certificate` | `string` | No | The zone's SSL certificate or certificate and the intermediate(s). |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TlsCertificatesAndHostnamesCertificateAnalyze():create({
  zone_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateAnalyzeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificatePackQuotaEntity

```lua
local tls_certificates_and_hostnames_certificate_pack_quota = client:TlsCertificatesAndHostnamesCertificatePackQuota(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesCertificatePackQuota():load({ zone_id = "zone_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificatePackQuotaEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity

```lua
local tls_certificates_and_hostnames_certificate_pack_response_collection = client:TlsCertificatesAndHostnamesCertificatePackResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TlsCertificatesAndHostnamesCertificatePackResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity

```lua
local tls_certificates_and_hostnames_certificate_pack_response_single = client:TlsCertificatesAndHostnamesCertificatePackResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | Yes | A certificate pack with all its properties. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesCertificatePackResponseSingle():load({ certificate_pack_id = "certificate_pack_id", zone_id = "zone_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseCollectionEntity

```lua
local tls_certificates_and_hostnames_certificate_response_collection = client:TlsCertificatesAndHostnamesCertificateResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificates` | `table` | Yes | Array of ordered certificates. |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TlsCertificatesAndHostnamesCertificateResponseCollection():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TlsCertificatesAndHostnamesCertificateResponseCollection():update({
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseCollection3Entity

```lua
local tls_certificates_and_hostnames_certificate_response_collection_3 = client:TlsCertificatesAndHostnamesCertificateResponseCollection3(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TlsCertificatesAndHostnamesCertificateResponseCollection3():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection3Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseCollection4Entity

```lua
local tls_certificates_and_hostnames_certificate_response_collection_4 = client:TlsCertificatesAndHostnamesCertificateResponseCollection4(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TlsCertificatesAndHostnamesCertificateResponseCollection4():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection4Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseCollection5Entity

```lua
local tls_certificates_and_hostnames_certificate_response_collection_5 = client:TlsCertificatesAndHostnamesCertificateResponseCollection5(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |
| `result_info` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TlsCertificatesAndHostnamesCertificateResponseCollection5():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection5Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity

```lua
local tls_certificates_and_hostnames_certificate_response_id_only = client:TlsCertificatesAndHostnamesCertificateResponseIdOnly(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesCertificateResponseIdOnly():remove({ custom_certificate_id = "custom_certificate_id", zone_id = "zone_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseSingleEntity

```lua
local tls_certificates_and_hostnames_certificate_response_single = client:TlsCertificatesAndHostnamesCertificateResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bundle_method` | `string` | No | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| `certificate` | `string` | Yes | The zone's SSL certificate or certificate and the intermediate(s). |
| `custom_csr_id` | `string` | No | The identifier for the Custom CSR that was used. |
| `deploy` | `string` | No | The environment to deploy the certificate to, defaults to production. |
| `geo_restrictions` | `table` | No | Specify the region where your private key can be held locally for optimal TLS performance. |
| `policy` | `string` | No | Specify the policy that determines the region where your private key will be held locally. |
| `private_key` | `string` | No | The zone's private key. |
| `result` | `table` | Yes |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TlsCertificatesAndHostnamesCertificateResponseSingle():create({
  zone_id = --[[ string ]],
  certificate = --[[ string ]],
  result = --[[ table ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesCertificateResponseSingle():load({ custom_certificate_id = "custom_certificate_id", zone_id = "zone_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TlsCertificatesAndHostnamesCertificateResponseSingle():update({
  custom_certificate_id = "custom_certificate_id",
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseSingle2Entity

```lua
local tls_certificates_and_hostnames_certificate_response_single_2 = client:TlsCertificatesAndHostnamesCertificateResponseSingle2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `csr` | `string` | Yes | The Certificate Signing Request (CSR). |
| `hostnames` | `table` | Yes | Array of hostnames or wildcard names bound to the certificate. |
| `request_type` | `string` | Yes | Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa), or "keyless-certificate" (for Keyless SSL servers). |
| `requested_validity` | `number` | No | The number of days for which the certificate should be valid. |
| `result` | `table` | Yes |  |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `csr` | - | - | - |
| `hostnames` | - | - | - |
| `request_type` | - | - | - |
| `requested_validity` | - | - | - |
| `result` | - | Yes | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TlsCertificatesAndHostnamesCertificateResponseSingle2():create({
  csr = --[[ string ]],
  hostnames = --[[ table ]],
  request_type = --[[ string ]],
  result = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TlsCertificatesAndHostnamesCertificateResponseSingle2():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesCertificateResponseSingle2():load({ certificate_id = "certificate_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseSingle3Entity

```lua
local tls_certificates_and_hostnames_certificate_response_single_3 = client:TlsCertificatesAndHostnamesCertificateResponseSingle3(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificate` | `string` | Yes | The zone's leaf certificate. |
| `private_key` | `string` | Yes | The zone's private key. |
| `result` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TlsCertificatesAndHostnamesCertificateResponseSingle3():create({
  zone_id = --[[ string ]],
  certificate = --[[ string ]],
  private_key = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesCertificateResponseSingle3():load({ certificate_id = "certificate_id", zone_id = "zone_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesCertificateResponseSingle3():remove({ certificate_id = "certificate_id", zone_id = "zone_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle3Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseSingle4Entity

```lua
local tls_certificates_and_hostnames_certificate_response_single_4 = client:TlsCertificatesAndHostnamesCertificateResponseSingle4(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificate` | `string` | Yes | The hostname certificate. |
| `private_key` | `string` | Yes | The hostname certificate's private key. |
| `result` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TlsCertificatesAndHostnamesCertificateResponseSingle4():create({
  zone_id = --[[ string ]],
  certificate = --[[ string ]],
  private_key = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesCertificateResponseSingle4():load({ certificate_id = "certificate_id", zone_id = "zone_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesCertificateResponseSingle4():remove({ certificate_id = "certificate_id", zone_id = "zone_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle4Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseSingle5Entity

```lua
local tls_certificates_and_hostnames_certificate_response_single_5 = client:TlsCertificatesAndHostnamesCertificateResponseSingle5(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesCertificateResponseSingle5():load({ account_id = "account_id", mtls_certificate_id = "mtls_certificate_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesCertificateResponseSingle5():remove({ account_id = "account_id", mtls_certificate_id = "mtls_certificate_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle5Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity

```lua
local tls_certificates_and_hostnames_certificate_response_single_post = client:TlsCertificatesAndHostnamesCertificateResponseSinglePost(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ca` | `boolean` | Yes | Indicates whether the certificate is a CA or leaf certificate. |
| `certificates` | `string` | Yes | The uploaded root CA certificate. |
| `name` | `string` | No | Optional unique name for the certificate. |
| `private_key` | `string` | No | The private key for the certificate. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TlsCertificatesAndHostnamesCertificateResponseSinglePost():create({
  account_id = --[[ string ]],
  ca = --[[ boolean ]],
  certificates = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateRevokeEntity

```lua
local tls_certificates_and_hostnames_certificate_revoke = client:TlsCertificatesAndHostnamesCertificateRevoke(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesCertificateRevoke():remove({ certificate_id = "certificate_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateRevokeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesClientCertificateResponseEntity

```lua
local tls_certificates_and_hostnames_client_certificate_response = client:TlsCertificatesAndHostnamesClientCertificateResponse(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TlsCertificatesAndHostnamesClientCertificateResponse():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesClientCertificateResponseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity

```lua
local tls_certificates_and_hostnames_client_certificate_response_single = client:TlsCertificatesAndHostnamesClientCertificateResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `csr` | `string` | Yes | The Certificate Signing Request (CSR). |
| `reactivate` | `boolean` | No |  |
| `result` | `table` | No |  |
| `validity_days` | `number` | Yes | The number of days the Client Certificate will be valid after the issued_on date. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TlsCertificatesAndHostnamesClientCertificateResponseSingle():create({
  zone_id = --[[ string ]],
  csr = --[[ string ]],
  validity_days = --[[ number ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesClientCertificateResponseSingle():load({ client_certificate_id = "client_certificate_id", zone_id = "zone_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesClientCertificateResponseSingle():remove({ client_certificate_id = "client_certificate_id", zone_id = "zone_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TlsCertificatesAndHostnamesClientCertificateResponseSingle():update({
  client_certificate_id = "client_certificate_id",
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseEntity

```lua
local tls_certificates_and_hostnames_ct_alerting_subscription_response = client:TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `emails` | `table` | No | Email addresses that receive CT alert notifications for the zone. |
| `enabled` | `boolean` | Yes | Whether CT alerting is enabled for the zone. |
| `result` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse():load({ zone_id = "zone_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse():update({
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity

```lua
local tls_certificates_and_hostnames_custom_csr_response_collection = client:TlsCertificatesAndHostnamesCustomCsrResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TlsCertificatesAndHostnamesCustomCsrResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity

```lua
local tls_certificates_and_hostnames_custom_csr_response_collection_2 = client:TlsCertificatesAndHostnamesCustomCsrResponseCollection2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TlsCertificatesAndHostnamesCustomCsrResponseCollection2():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity

```lua
local tls_certificates_and_hostnames_custom_csr_response_id_only = client:TlsCertificatesAndHostnamesCustomCsrResponseIdOnly(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesCustomCsrResponseIdOnly():remove({ custom_csr_id = "custom_csr_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity

```lua
local tls_certificates_and_hostnames_custom_csr_response_single = client:TlsCertificatesAndHostnamesCustomCsrResponseSingle(nil)
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
| `result` | `table` | Yes | A custom Certificate Signing Request (CSR). |
| `sans` | `table` | Yes | Subject Alternative Names for the CSR. |
| `state` | `string` | Yes | State or province name. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TlsCertificatesAndHostnamesCustomCsrResponseSingle():create({
  zone_id = --[[ string ]],
  common_name = --[[ string ]],
  country = --[[ string ]],
  locality = --[[ string ]],
  organization = --[[ string ]],
  result = --[[ table ]],
  sans = --[[ table ]],
  state = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesCustomCsrResponseSingle():load({ custom_csr_id = "custom_csr_id", zone_id = "zone_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity

```lua
local tls_certificates_and_hostnames_custom_csr_response_single_2 = client:TlsCertificatesAndHostnamesCustomCsrResponseSingle2(nil)
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
| `result` | `table` | Yes | A custom Certificate Signing Request (CSR). |
| `sans` | `table` | Yes | Subject Alternative Names for the CSR. |
| `state` | `string` | Yes | State or province name. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TlsCertificatesAndHostnamesCustomCsrResponseSingle2():create({
  account_id = --[[ string ]],
  common_name = --[[ string ]],
  country = --[[ string ]],
  locality = --[[ string ]],
  organization = --[[ string ]],
  result = --[[ table ]],
  sans = --[[ table ]],
  state = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesCustomCsrResponseSingle2():load({ account_id = "account_id", custom_csr_id = "custom_csr_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomHostnameQuotaEntity

```lua
local tls_certificates_and_hostnames_custom_hostname_quota = client:TlsCertificatesAndHostnamesCustomHostnameQuota(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes | Informational messages returned by the custom hostname API. |
| `result` | `table` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TlsCertificatesAndHostnamesCustomHostnameQuota():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCustomHostnameQuotaEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity

```lua
local tls_certificates_and_hostnames_custom_hostname_response_collection = client:TlsCertificatesAndHostnamesCustomHostnameResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes | Informational messages returned by the custom hostname API. |
| `result` | `table` | No |  |
| `result_info` | `table` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TlsCertificatesAndHostnamesCustomHostnameResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity

```lua
local tls_certificates_and_hostnames_custom_hostname_response_single = client:TlsCertificatesAndHostnamesCustomHostnameResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_metadata` | `table` | No | Unique key/value metadata for this hostname. |
| `custom_origin_server` | `string` | No | a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record. |
| `custom_origin_sni` | `string` | No | A hostname that will be sent to your custom origin server as SNI for TLS handshake. |
| `errors` | `table` | Yes |  |
| `hostname` | `string` | Yes | The custom hostname that will point to your hostname via CNAME. |
| `messages` | `table` | Yes | Informational messages returned by the custom hostname API. |
| `result` | `table` | No |  |
| `ssl` | `table` | No | SSL properties used when creating the custom hostname. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TlsCertificatesAndHostnamesCustomHostnameResponseSingle():create({
  zone_id = --[[ string ]],
  errors = --[[ table ]],
  hostname = --[[ string ]],
  messages = --[[ table ]],
  success = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesCustomHostnameResponseSingle():load({ custom_hostname_id = "custom_hostname_id", zone_id = "zone_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TlsCertificatesAndHostnamesCustomHostnameResponseSingle():update({
  custom_hostname_id = "custom_hostname_id",
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity

```lua
local tls_certificates_and_hostnames_custom_trust_store_response = client:TlsCertificatesAndHostnamesCustomTrustStoreResponse(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TlsCertificatesAndHostnamesCustomTrustStoreResponse():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity

```lua
local tls_certificates_and_hostnames_custom_trust_store_response_id_only = client:TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly():remove({ custom_origin_trust_store_id = "custom_origin_trust_store_id", zone_id = "zone_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity

```lua
local tls_certificates_and_hostnames_custom_trust_store_response_single = client:TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificate` | `string` | Yes | The root CA certificate in PEM format. |
| `result` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle():create({
  zone_id = --[[ string ]],
  certificate = --[[ string ]],
  result = --[[ table ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle():load({ custom_origin_trust_store_id = "custom_origin_trust_store_id", zone_id = "zone_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesDcvDelegationEntity

```lua
local tls_certificates_and_hostnames_dcv_delegation = client:TlsCertificatesAndHostnamesDcvDelegation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesDcvDelegation():load({ zone_id = "zone_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesDcvDelegationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity

```lua
local tls_certificates_and_hostnames_delete_advanced_certificate_pack = client:TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack():remove({ id = "id", zone_id = "zone_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesEnabledEntity

```lua
local tls_certificates_and_hostnames_enabled = client:TlsCertificatesAndHostnamesEnabled(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | Yes | Indicates whether zone-level authenticated origin pulls is enabled. |
| `result` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesEnabled():load({ zone_id = "zone_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TlsCertificatesAndHostnamesEnabled():update({
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesEnabledEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesFallbackOriginEntity

```lua
local tls_certificates_and_hostnames_fallback_origin = client:TlsCertificatesAndHostnamesFallbackOrigin(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `origin` | `string` | Yes | Your origin hostname that requests to your custom hostnames will be sent to. |
| `result` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesFallbackOrigin():load({ zone_id = "zone_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesFallbackOrigin():remove({ zone_id = "zone_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TlsCertificatesAndHostnamesFallbackOrigin():update({
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesFallbackOriginEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity

```lua
local tls_certificates_and_hostnames_hostname_aop_response_collection = client:TlsCertificatesAndHostnamesHostnameAopResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `table` | Yes |  |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TlsCertificatesAndHostnamesHostnameAopResponseCollection():update({
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesHostnameAopSingleEntity

```lua
local tls_certificates_and_hostnames_hostname_aop_single = client:TlsCertificatesAndHostnamesHostnameAopSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesHostnameAopSingle():load({ hostname = "hostname", zone_id = "zone_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesHostnameAopSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity

```lua
local tls_certificates_and_hostnames_hostname_assoc_response_collection = client:TlsCertificatesAndHostnamesHostnameAssocResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |
| `result_info` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TlsCertificatesAndHostnamesHostnameAssocResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesHostnameAssociationEntity

```lua
local tls_certificates_and_hostnames_hostname_association = client:TlsCertificatesAndHostnamesHostnameAssociation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hostnames` | `table` | No |  |
| `mtls_certificate_id` | `string` | No | The UUID for a certificate that was uploaded to the mTLS Certificate Management endpoint. |
| `result` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesHostnameAssociation():load({ zone_id = "zone_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TlsCertificatesAndHostnamesHostnameAssociation():update({
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesHostnameAssociationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesKeylessResponseCollectionEntity

```lua
local tls_certificates_and_hostnames_keyless_response_collection = client:TlsCertificatesAndHostnamesKeylessResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TlsCertificatesAndHostnamesKeylessResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesKeylessResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesKeylessResponseSingleEntity

```lua
local tls_certificates_and_hostnames_keyless_response_single = client:TlsCertificatesAndHostnamesKeylessResponseSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bundle_method` | `string` | No | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| `certificate` | `string` | Yes | The zone's SSL certificate or SSL certificate and intermediate(s). |
| `enabled` | `boolean` | No | Whether or not the Keyless SSL is on or off. |
| `host` | `string` | Yes | The keyless SSL name. |
| `name` | `string` | No | The keyless SSL name. |
| `port` | `number` | Yes | The keyless SSL port used to communicate between Cloudflare and the client's Keyless SSL server. |
| `result` | `table` | No |  |
| `tunnel` | `table` | Yes | Configuration for using Keyless SSL through a Cloudflare Tunnel. |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TlsCertificatesAndHostnamesKeylessResponseSingle():create({
  zone_id = --[[ string ]],
  certificate = --[[ string ]],
  host = --[[ string ]],
  port = --[[ number ]],
  tunnel = --[[ table ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesKeylessResponseSingle():load({ keyless_certificate_id = "keyless_certificate_id", zone_id = "zone_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TlsCertificatesAndHostnamesKeylessResponseSingle():update({
  keyless_certificate_id = "keyless_certificate_id",
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesKeylessResponseSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity

```lua
local tls_certificates_and_hostnames_keyless_response_single_id = client:TlsCertificatesAndHostnamesKeylessResponseSingleId(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesKeylessResponseSingleId():remove({ keyless_certificate_id = "keyless_certificate_id", zone_id = "zone_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesPerHostnameSettingEntity

```lua
local tls_certificates_and_hostnames_per_hostname_setting = client:TlsCertificatesAndHostnamesPerHostnameSetting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `table` | No |  |
| `value` | `any` | Yes | The TLS setting value. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesPerHostnameSetting():load({ hostname = "hostname", setting_id = "setting_id", zone_id = "zone_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TlsCertificatesAndHostnamesPerHostnameSetting():update({
  hostname = "hostname",
  setting_id = "setting_id",
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesPerHostnameSettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity

```lua
local tls_certificates_and_hostnames_per_hostname_settings_response = client:TlsCertificatesAndHostnamesPerHostnameSettingsResponse(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |
| `result_info` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesPerHostnameSettingsResponse():load({ setting_id = "setting_id", zone_id = "zone_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity

```lua
local tls_certificates_and_hostnames_per_hostname_settings_response2 = client:TlsCertificatesAndHostnamesPerHostnameSettingsResponse2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesPerHostnameSettingsResponse2():remove({ hostname = "hostname", setting_id = "setting_id", zone_id = "zone_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesSslUniversalSettingEntity

```lua
local tls_certificates_and_hostnames_ssl_universal_setting = client:TlsCertificatesAndHostnamesSslUniversalSetting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | No | Disabling Universal SSL removes any currently active Universal SSL certificates for your zone from the edge and prevents any future Universal SSL certificates from being ordered. |
| `result` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesSslUniversalSetting():load({ zone_id = "zone_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TlsCertificatesAndHostnamesSslUniversalSetting():update({
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesSslUniversalSettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesSslValidationMethodResponseEntity

```lua
local tls_certificates_and_hostnames_ssl_validation_method_response = client:TlsCertificatesAndHostnamesSslValidationMethodResponse(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `validation_method` | `string` | Yes | Desired validation method. |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TlsCertificatesAndHostnamesSslValidationMethodResponse():update({
  certificate_pack_id = "certificate_pack_id",
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesSslValidationMethodResponseEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity

```lua
local tls_certificates_and_hostnames_ssl_verification_response_collection = client:TlsCertificatesAndHostnamesSslVerificationResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TlsCertificatesAndHostnamesSslVerificationResponseCollection():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TlsCertificatesAndHostnamesTotalTlsSettingEntity

```lua
local tls_certificates_and_hostnames_total_tls_setting = client:TlsCertificatesAndHostnamesTotalTlsSetting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificate_authority` | `string` | No | The Certificate Authority that Total TLS certificates will be issued through. |
| `enabled` | `boolean` | Yes | If enabled, Total TLS will order a hostname specific TLS certificate for any proxied A, AAAA, or CNAME record in your zone. |
| `result` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TlsCertificatesAndHostnamesTotalTlsSetting():create({
  zone_id = --[[ string ]],
  enabled = --[[ boolean ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TlsCertificatesAndHostnamesTotalTlsSetting():load({ zone_id = "zone_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesTotalTlsSettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
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

