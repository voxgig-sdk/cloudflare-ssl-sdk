# CloudflareSsl Ruby SDK Reference

Complete API reference for the CloudflareSsl Ruby SDK.


## CloudflareSslSDK

### Constructor

```ruby
require_relative 'CloudflareSsl_sdk'

client = CloudflareSslSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareSslSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = CloudflareSslSDK.test
```


### Instance Methods

#### `CacheApiResponseSingleId(data = nil)`

Create a new `CacheApiResponseSingleId` entity instance. Pass `nil` for no initial data.

#### `CacheAutoOriginTlsKex(data = nil)`

Create a new `CacheAutoOriginTlsKex` entity instance. Pass `nil` for no initial data.

#### `CustomHostname(data = nil)`

Create a new `CustomHostname` entity instance. Pass `nil` for no initial data.

#### `CustomHostnameForAZone(data = nil)`

Create a new `CustomHostnameForAZone` entity instance. Pass `nil` for no initial data.

#### `OriginTl(data = nil)`

Create a new `OriginTl` entity instance. Pass `nil` for no initial data.

#### `Recommendation(data = nil)`

Create a new `Recommendation` entity instance. Pass `nil` for no initial data.

#### `SslAutomaticMode(data = nil)`

Create a new `SslAutomaticMode` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesAdvancedCertificatePackResponse(data = nil)`

Create a new `TlsCertificatesAndHostnamesAdvancedCertificatePackResponse` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesAssociationResponseCollection(data = nil)`

Create a new `TlsCertificatesAndHostnamesAssociationResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateAnalyze(data = nil)`

Create a new `TlsCertificatesAndHostnamesCertificateAnalyze` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificatePackQuota(data = nil)`

Create a new `TlsCertificatesAndHostnamesCertificatePackQuota` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificatePackResponseCollection(data = nil)`

Create a new `TlsCertificatesAndHostnamesCertificatePackResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificatePackResponseSingle(data = nil)`

Create a new `TlsCertificatesAndHostnamesCertificatePackResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseCollection(data = nil)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseCollection3(data = nil)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection3` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseCollection4(data = nil)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection4` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseCollection5(data = nil)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection5` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseIdOnly(data = nil)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseIdOnly` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseSingle(data = nil)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseSingle2(data = nil)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle2` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseSingle3(data = nil)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle3` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseSingle4(data = nil)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle4` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseSingle5(data = nil)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle5` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseSinglePost(data = nil)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSinglePost` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateRevoke(data = nil)`

Create a new `TlsCertificatesAndHostnamesCertificateRevoke` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesClientCertificateResponse(data = nil)`

Create a new `TlsCertificatesAndHostnamesClientCertificateResponse` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesClientCertificateResponseSingle(data = nil)`

Create a new `TlsCertificatesAndHostnamesClientCertificateResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse(data = nil)`

Create a new `TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCustomCsrResponseCollection(data = nil)`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCustomCsrResponseCollection2(data = nil)`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseCollection2` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCustomCsrResponseIdOnly(data = nil)`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseIdOnly` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCustomCsrResponseSingle(data = nil)`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCustomCsrResponseSingle2(data = nil)`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseSingle2` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCustomHostnameQuota(data = nil)`

Create a new `TlsCertificatesAndHostnamesCustomHostnameQuota` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCustomHostnameResponseCollection(data = nil)`

Create a new `TlsCertificatesAndHostnamesCustomHostnameResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCustomHostnameResponseSingle(data = nil)`

Create a new `TlsCertificatesAndHostnamesCustomHostnameResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCustomTrustStoreResponse(data = nil)`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponse` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly(data = nil)`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle(data = nil)`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesDcvDelegation(data = nil)`

Create a new `TlsCertificatesAndHostnamesDcvDelegation` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack(data = nil)`

Create a new `TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesEnabled(data = nil)`

Create a new `TlsCertificatesAndHostnamesEnabled` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesFallbackOrigin(data = nil)`

Create a new `TlsCertificatesAndHostnamesFallbackOrigin` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesHostnameAopResponseCollection(data = nil)`

Create a new `TlsCertificatesAndHostnamesHostnameAopResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesHostnameAopSingle(data = nil)`

Create a new `TlsCertificatesAndHostnamesHostnameAopSingle` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesHostnameAssocResponseCollection(data = nil)`

Create a new `TlsCertificatesAndHostnamesHostnameAssocResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesHostnameAssociation(data = nil)`

Create a new `TlsCertificatesAndHostnamesHostnameAssociation` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesKeylessResponseCollection(data = nil)`

Create a new `TlsCertificatesAndHostnamesKeylessResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesKeylessResponseSingle(data = nil)`

Create a new `TlsCertificatesAndHostnamesKeylessResponseSingle` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesKeylessResponseSingleId(data = nil)`

Create a new `TlsCertificatesAndHostnamesKeylessResponseSingleId` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesPerHostnameSetting(data = nil)`

Create a new `TlsCertificatesAndHostnamesPerHostnameSetting` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesPerHostnameSettingsResponse(data = nil)`

Create a new `TlsCertificatesAndHostnamesPerHostnameSettingsResponse` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesPerHostnameSettingsResponse2(data = nil)`

Create a new `TlsCertificatesAndHostnamesPerHostnameSettingsResponse2` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesSslUniversalSetting(data = nil)`

Create a new `TlsCertificatesAndHostnamesSslUniversalSetting` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesSslValidationMethodResponse(data = nil)`

Create a new `TlsCertificatesAndHostnamesSslValidationMethodResponse` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesSslVerificationResponseCollection(data = nil)`

Create a new `TlsCertificatesAndHostnamesSslVerificationResponseCollection` entity instance. Pass `nil` for no initial data.

#### `TlsCertificatesAndHostnamesTotalTlsSetting(data = nil)`

Create a new `TlsCertificatesAndHostnamesTotalTlsSetting` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## CacheApiResponseSingleIdEntity

```ruby
cache_api_response_single_id = client.CacheApiResponseSingleId
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes | Indicates the API call's success or failure. |
| `value` | `String` | Yes | Controls enablement of Automatic SSL/TLS. |

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.CacheApiResponseSingleId.update({
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CacheApiResponseSingleIdEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CacheAutoOriginTlsKexEntity

```ruby
cache_auto_origin_tls_kex = client.CacheAutoOriginTlsKex
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `Boolean` | Yes | Controls enablement of Auto-Origin TLS KEX selection for the zone. |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes | Indicates the API call's success or failure. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.CacheAutoOriginTlsKex.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.CacheAutoOriginTlsKex.update({
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CacheAutoOriginTlsKexEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CustomHostnameEntity

```ruby
custom_hostname = client.CustomHostname
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.CustomHostname.remove({ "id" => "id", "zone_id" => "zone_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CustomHostnameEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CustomHostnameForAZoneEntity

```ruby
custom_hostname_for_a_zone = client.CustomHostnameForAZone
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_certificate` | `String` | Yes | If a custom uploaded certificate is used. |
| `custom_key` | `String` | Yes | The key for a custom uploaded certificate. |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.CustomHostnameForAZone.remove({ "certificate_id" => "certificate_id", "certificate_pack_id" => "certificate_pack_id", "custom_hostname_id" => "custom_hostname_id", "zone_id" => "zone_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.CustomHostnameForAZone.update({
  "certificate_id" => "certificate_id",
  "certificate_pack_id" => "certificate_pack_id",
  "custom_hostname_id" => "custom_hostname_id",
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CustomHostnameForAZoneEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OriginTlEntity

```ruby
origin_tl = client.OriginTl
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | No |  |
| `value` | `Array` | Yes | List of TLS compliance modes that constrain the key-exchange algorithms Cloudflare may use when establishing the TLS connection to the zone's origin. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.OriginTl.load({ "zone_id" => "zone_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.OriginTl.remove({ "zone_id" => "zone_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.OriginTl.update({
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OriginTlEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RecommendationEntity

```ruby
recommendation = client.Recommendation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes | Indicates the API call's success or failure. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Recommendation.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RecommendationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SslAutomaticModeEntity

```ruby
ssl_automatic_mode = client.SslAutomaticMode
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes | Indicates the API call's success or failure. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.SslAutomaticMode.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SslAutomaticModeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity

```ruby
tls_certificates_and_hostnames_advanced_certificate_pack_response = client.TlsCertificatesAndHostnamesAdvancedCertificatePackResponse
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificate_authority` | `String` | Yes | Certificate Authority selected for the order. |
| `cloudflare_branding` | `Boolean` | No | Whether or not to add Cloudflare Branding for the order. |
| `hosts` | `Array` | Yes | Comma separated list of valid host names for the certificate packs. |
| `type` | `String` | Yes | Type of certificate pack. |
| `validation_method` | `String` | Yes | Validation Method selected for the order. |
| `validity_days` | `Integer` | Yes | Validity Days selected for the order. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesAdvancedCertificatePackResponse.create({
  "zone_id" => "example_zone_id", # String
  "certificate_authority" => "example_certificate_authority", # String
  "hosts" => [], # Array
  "type" => "example_type", # String
  "validation_method" => "example_validation_method", # String
  "validity_days" => 1, # Integer
})
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesAdvancedCertificatePackResponse.update({
  "certificate_pack_id" => "certificate_pack_id",
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesAssociationResponseCollectionEntity

```ruby
tls_certificates_and_hostnames_association_response_collection = client.TlsCertificatesAndHostnamesAssociationResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TlsCertificatesAndHostnamesAssociationResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesAssociationResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateAnalyzeEntity

```ruby
tls_certificates_and_hostnames_certificate_analyze = client.TlsCertificatesAndHostnamesCertificateAnalyze
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bundle_method` | `String` | No | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| `certificate` | `String` | No | The zone's SSL certificate or certificate and the intermediate(s). |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesCertificateAnalyze.create({
  "zone_id" => "example_zone_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateAnalyzeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificatePackQuotaEntity

```ruby
tls_certificates_and_hostnames_certificate_pack_quota = client.TlsCertificatesAndHostnamesCertificatePackQuota
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesCertificatePackQuota.load({ "zone_id" => "zone_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificatePackQuotaEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity

```ruby
tls_certificates_and_hostnames_certificate_pack_response_collection = client.TlsCertificatesAndHostnamesCertificatePackResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TlsCertificatesAndHostnamesCertificatePackResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity

```ruby
tls_certificates_and_hostnames_certificate_pack_response_single = client.TlsCertificatesAndHostnamesCertificatePackResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | Yes | A certificate pack with all its properties. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesCertificatePackResponseSingle.load({ "certificate_pack_id" => "certificate_pack_id", "zone_id" => "zone_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseCollectionEntity

```ruby
tls_certificates_and_hostnames_certificate_response_collection = client.TlsCertificatesAndHostnamesCertificateResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificates` | `Array` | Yes | Array of ordered certificates. |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TlsCertificatesAndHostnamesCertificateResponseCollection.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesCertificateResponseCollection.update({
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseCollection3Entity

```ruby
tls_certificates_and_hostnames_certificate_response_collection_3 = client.TlsCertificatesAndHostnamesCertificateResponseCollection3
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TlsCertificatesAndHostnamesCertificateResponseCollection3.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection3Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseCollection4Entity

```ruby
tls_certificates_and_hostnames_certificate_response_collection_4 = client.TlsCertificatesAndHostnamesCertificateResponseCollection4
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TlsCertificatesAndHostnamesCertificateResponseCollection4.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection4Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseCollection5Entity

```ruby
tls_certificates_and_hostnames_certificate_response_collection_5 = client.TlsCertificatesAndHostnamesCertificateResponseCollection5
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |
| `result_info` | `Hash` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TlsCertificatesAndHostnamesCertificateResponseCollection5.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection5Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity

```ruby
tls_certificates_and_hostnames_certificate_response_id_only = client.TlsCertificatesAndHostnamesCertificateResponseIdOnly
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesCertificateResponseIdOnly.remove({ "custom_certificate_id" => "custom_certificate_id", "zone_id" => "zone_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseSingleEntity

```ruby
tls_certificates_and_hostnames_certificate_response_single = client.TlsCertificatesAndHostnamesCertificateResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bundle_method` | `String` | No | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| `certificate` | `String` | Yes | The zone's SSL certificate or certificate and the intermediate(s). |
| `custom_csr_id` | `String` | No | The identifier for the Custom CSR that was used. |
| `deploy` | `String` | No | The environment to deploy the certificate to, defaults to production. |
| `geo_restrictions` | `Hash` | No | Specify the region where your private key can be held locally for optimal TLS performance. |
| `policy` | `String` | No | Specify the policy that determines the region where your private key will be held locally. |
| `private_key` | `String` | No | The zone's private key. |
| `result` | `Hash` | Yes |  |
| `type` | `String` | No | The type 'legacy_custom' enables support for legacy clients which do not include SNI in the TLS handshake. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesCertificateResponseSingle.create({
  "zone_id" => "example_zone_id", # String
  "certificate" => "example_certificate", # String
  "result" => {}, # Hash
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesCertificateResponseSingle.load({ "custom_certificate_id" => "custom_certificate_id", "zone_id" => "zone_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesCertificateResponseSingle.update({
  "custom_certificate_id" => "custom_certificate_id",
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseSingle2Entity

```ruby
tls_certificates_and_hostnames_certificate_response_single_2 = client.TlsCertificatesAndHostnamesCertificateResponseSingle2
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `csr` | `String` | Yes | The Certificate Signing Request (CSR). |
| `hostnames` | `Array` | Yes | Array of hostnames or wildcard names bound to the certificate. |
| `request_type` | `String` | Yes | Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa), or "keyless-certificate" (for Keyless SSL servers). |
| `requested_validity` | `Float` | No | The number of days for which the certificate should be valid. |
| `result` | `Hash` | Yes |  |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `csr` | - | - | - |
| `hostnames` | - | - | - |
| `request_type` | - | - | - |
| `requested_validity` | - | - | - |
| `result` | - | Yes | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesCertificateResponseSingle2.create({
  "csr" => "example_csr", # String
  "hostnames" => [], # Array
  "request_type" => "example_request_type", # String
  "result" => {}, # Hash
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TlsCertificatesAndHostnamesCertificateResponseSingle2.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesCertificateResponseSingle2.load({ "certificate_id" => "certificate_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle2Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseSingle3Entity

```ruby
tls_certificates_and_hostnames_certificate_response_single_3 = client.TlsCertificatesAndHostnamesCertificateResponseSingle3
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificate` | `String` | Yes | The zone's leaf certificate. |
| `private_key` | `String` | Yes | The zone's private key. |
| `result` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesCertificateResponseSingle3.create({
  "zone_id" => "example_zone_id", # String
  "certificate" => "example_certificate", # String
  "private_key" => "example_private_key", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesCertificateResponseSingle3.load({ "certificate_id" => "certificate_id", "zone_id" => "zone_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesCertificateResponseSingle3.remove({ "certificate_id" => "certificate_id", "zone_id" => "zone_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle3Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseSingle4Entity

```ruby
tls_certificates_and_hostnames_certificate_response_single_4 = client.TlsCertificatesAndHostnamesCertificateResponseSingle4
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificate` | `String` | Yes | The hostname certificate. |
| `private_key` | `String` | Yes | The hostname certificate's private key. |
| `result` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesCertificateResponseSingle4.create({
  "zone_id" => "example_zone_id", # String
  "certificate" => "example_certificate", # String
  "private_key" => "example_private_key", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesCertificateResponseSingle4.load({ "certificate_id" => "certificate_id", "zone_id" => "zone_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesCertificateResponseSingle4.remove({ "certificate_id" => "certificate_id", "zone_id" => "zone_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle4Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseSingle5Entity

```ruby
tls_certificates_and_hostnames_certificate_response_single_5 = client.TlsCertificatesAndHostnamesCertificateResponseSingle5
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesCertificateResponseSingle5.load({ "account_id" => "account_id", "mtls_certificate_id" => "mtls_certificate_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesCertificateResponseSingle5.remove({ "account_id" => "account_id", "mtls_certificate_id" => "mtls_certificate_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle5Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity

```ruby
tls_certificates_and_hostnames_certificate_response_single_post = client.TlsCertificatesAndHostnamesCertificateResponseSinglePost
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ca` | `Boolean` | Yes | Indicates whether the certificate is a CA or leaf certificate. |
| `certificates` | `String` | Yes | The uploaded root CA certificate. |
| `name` | `String` | No | Optional unique name for the certificate. |
| `private_key` | `String` | No | The private key for the certificate. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesCertificateResponseSinglePost.create({
  "account_id" => "example_account_id", # String
  "ca" => true, # Boolean
  "certificates" => "example_certificates", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateRevokeEntity

```ruby
tls_certificates_and_hostnames_certificate_revoke = client.TlsCertificatesAndHostnamesCertificateRevoke
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesCertificateRevoke.remove({ "certificate_id" => "certificate_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateRevokeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesClientCertificateResponseEntity

```ruby
tls_certificates_and_hostnames_client_certificate_response = client.TlsCertificatesAndHostnamesClientCertificateResponse
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TlsCertificatesAndHostnamesClientCertificateResponse.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesClientCertificateResponseEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity

```ruby
tls_certificates_and_hostnames_client_certificate_response_single = client.TlsCertificatesAndHostnamesClientCertificateResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `csr` | `String` | Yes | The Certificate Signing Request (CSR). |
| `reactivate` | `Boolean` | No |  |
| `result` | `Hash` | No |  |
| `validity_days` | `Integer` | Yes | The number of days the Client Certificate will be valid after the issued_on date. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesClientCertificateResponseSingle.create({
  "zone_id" => "example_zone_id", # String
  "csr" => "example_csr", # String
  "validity_days" => 1, # Integer
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesClientCertificateResponseSingle.load({ "client_certificate_id" => "client_certificate_id", "zone_id" => "zone_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesClientCertificateResponseSingle.remove({ "client_certificate_id" => "client_certificate_id", "zone_id" => "zone_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesClientCertificateResponseSingle.update({
  "client_certificate_id" => "client_certificate_id",
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseEntity

```ruby
tls_certificates_and_hostnames_ct_alerting_subscription_response = client.TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `emails` | `Array` | No | Email addresses that receive CT alert notifications for the zone. |
| `enabled` | `Boolean` | Yes | Whether CT alerting is enabled for the zone. |
| `result` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse.load({ "zone_id" => "zone_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse.update({
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity

```ruby
tls_certificates_and_hostnames_custom_csr_response_collection = client.TlsCertificatesAndHostnamesCustomCsrResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TlsCertificatesAndHostnamesCustomCsrResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity

```ruby
tls_certificates_and_hostnames_custom_csr_response_collection_2 = client.TlsCertificatesAndHostnamesCustomCsrResponseCollection2
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TlsCertificatesAndHostnamesCustomCsrResponseCollection2.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity

```ruby
tls_certificates_and_hostnames_custom_csr_response_id_only = client.TlsCertificatesAndHostnamesCustomCsrResponseIdOnly
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesCustomCsrResponseIdOnly.remove({ "custom_csr_id" => "custom_csr_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity

```ruby
tls_certificates_and_hostnames_custom_csr_response_single = client.TlsCertificatesAndHostnamesCustomCsrResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `common_name` | `String` | Yes | The common name (domain) for the CSR. |
| `country` | `String` | Yes | Two-letter ISO 3166-1 alpha-2 country code. |
| `key_type` | `String` | No | Key algorithm to use for the CSR. |
| `locality` | `String` | Yes | City or locality name. |
| `organization` | `String` | Yes | Organization name. |
| `organizational_unit` | `String` | No | Organizational unit name. |
| `result` | `Hash` | Yes | A custom Certificate Signing Request (CSR). |
| `sans` | `Array` | Yes | Subject Alternative Names for the CSR. |
| `state` | `String` | Yes | State or province name. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesCustomCsrResponseSingle.create({
  "zone_id" => "example_zone_id", # String
  "common_name" => "example_common_name", # String
  "country" => "example_country", # String
  "locality" => "example_locality", # String
  "organization" => "example_organization", # String
  "result" => {}, # Hash
  "sans" => [], # Array
  "state" => "example_state", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesCustomCsrResponseSingle.load({ "custom_csr_id" => "custom_csr_id", "zone_id" => "zone_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity

```ruby
tls_certificates_and_hostnames_custom_csr_response_single_2 = client.TlsCertificatesAndHostnamesCustomCsrResponseSingle2
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `common_name` | `String` | Yes | The common name (domain) for the CSR. |
| `country` | `String` | Yes | Two-letter ISO 3166-1 alpha-2 country code. |
| `description` | `String` | No | Optional description for the CSR. |
| `key_type` | `String` | No | Key algorithm to use for the CSR. |
| `locality` | `String` | Yes | City or locality name. |
| `name` | `String` | No | Human-readable name for the CSR. |
| `organization` | `String` | Yes | Organization name. |
| `organizational_unit` | `String` | No | Organizational unit name. |
| `result` | `Hash` | Yes | A custom Certificate Signing Request (CSR). |
| `sans` | `Array` | Yes | Subject Alternative Names for the CSR. |
| `state` | `String` | Yes | State or province name. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesCustomCsrResponseSingle2.create({
  "account_id" => "example_account_id", # String
  "common_name" => "example_common_name", # String
  "country" => "example_country", # String
  "locality" => "example_locality", # String
  "organization" => "example_organization", # String
  "result" => {}, # Hash
  "sans" => [], # Array
  "state" => "example_state", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesCustomCsrResponseSingle2.load({ "account_id" => "account_id", "custom_csr_id" => "custom_csr_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomHostnameQuotaEntity

```ruby
tls_certificates_and_hostnames_custom_hostname_quota = client.TlsCertificatesAndHostnamesCustomHostnameQuota
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes | Informational messages returned by the custom hostname API. |
| `result` | `Hash` | Yes |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TlsCertificatesAndHostnamesCustomHostnameQuota.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesCustomHostnameQuotaEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity

```ruby
tls_certificates_and_hostnames_custom_hostname_response_collection = client.TlsCertificatesAndHostnamesCustomHostnameResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes | Informational messages returned by the custom hostname API. |
| `result` | `Array` | No |  |
| `result_info` | `Hash` | No |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TlsCertificatesAndHostnamesCustomHostnameResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity

```ruby
tls_certificates_and_hostnames_custom_hostname_response_single = client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_metadata` | `Hash` | No | Unique key/value metadata for this hostname. |
| `custom_origin_server` | `String` | No | a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record. |
| `custom_origin_sni` | `String` | No | A hostname that will be sent to your custom origin server as SNI for TLS handshake. |
| `errors` | `Array` | Yes |  |
| `hostname` | `String` | Yes | The custom hostname that will point to your hostname via CNAME. |
| `messages` | `Array` | Yes | Informational messages returned by the custom hostname API. |
| `result` | `Hash` | No |  |
| `ssl` | `Hash` | No | SSL properties used when creating the custom hostname. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle.create({
  "zone_id" => "example_zone_id", # String
  "errors" => [], # Array
  "hostname" => "example_hostname", # String
  "messages" => [], # Array
  "success" => true, # Boolean
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle.load({ "custom_hostname_id" => "custom_hostname_id", "zone_id" => "zone_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle.update({
  "custom_hostname_id" => "custom_hostname_id",
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity

```ruby
tls_certificates_and_hostnames_custom_trust_store_response = client.TlsCertificatesAndHostnamesCustomTrustStoreResponse
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TlsCertificatesAndHostnamesCustomTrustStoreResponse.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity

```ruby
tls_certificates_and_hostnames_custom_trust_store_response_id_only = client.TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly.remove({ "custom_origin_trust_store_id" => "custom_origin_trust_store_id", "zone_id" => "zone_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity

```ruby
tls_certificates_and_hostnames_custom_trust_store_response_single = client.TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificate` | `String` | Yes | The root CA certificate in PEM format. |
| `result` | `Hash` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle.create({
  "zone_id" => "example_zone_id", # String
  "certificate" => "example_certificate", # String
  "result" => {}, # Hash
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle.load({ "custom_origin_trust_store_id" => "custom_origin_trust_store_id", "zone_id" => "zone_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesDcvDelegationEntity

```ruby
tls_certificates_and_hostnames_dcv_delegation = client.TlsCertificatesAndHostnamesDcvDelegation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesDcvDelegation.load({ "zone_id" => "zone_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesDcvDelegationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity

```ruby
tls_certificates_and_hostnames_delete_advanced_certificate_pack = client.TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack.remove({ "id" => "id", "zone_id" => "zone_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesEnabledEntity

```ruby
tls_certificates_and_hostnames_enabled = client.TlsCertificatesAndHostnamesEnabled
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `Boolean` | Yes | Indicates whether zone-level authenticated origin pulls is enabled. |
| `result` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesEnabled.load({ "zone_id" => "zone_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesEnabled.update({
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesEnabledEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesFallbackOriginEntity

```ruby
tls_certificates_and_hostnames_fallback_origin = client.TlsCertificatesAndHostnamesFallbackOrigin
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `origin` | `String` | Yes | Your origin hostname that requests to your custom hostnames will be sent to. |
| `result` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesFallbackOrigin.load({ "zone_id" => "zone_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesFallbackOrigin.remove({ "zone_id" => "zone_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesFallbackOrigin.update({
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesFallbackOriginEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity

```ruby
tls_certificates_and_hostnames_hostname_aop_response_collection = client.TlsCertificatesAndHostnamesHostnameAopResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `Array` | Yes |  |

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesHostnameAopResponseCollection.update({
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesHostnameAopSingleEntity

```ruby
tls_certificates_and_hostnames_hostname_aop_single = client.TlsCertificatesAndHostnamesHostnameAopSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesHostnameAopSingle.load({ "hostname" => "hostname", "zone_id" => "zone_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesHostnameAopSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity

```ruby
tls_certificates_and_hostnames_hostname_assoc_response_collection = client.TlsCertificatesAndHostnamesHostnameAssocResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |
| `result_info` | `Hash` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TlsCertificatesAndHostnamesHostnameAssocResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesHostnameAssociationEntity

```ruby
tls_certificates_and_hostnames_hostname_association = client.TlsCertificatesAndHostnamesHostnameAssociation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hostnames` | `Array` | No |  |
| `mtls_certificate_id` | `String` | No | The UUID for a certificate that was uploaded to the mTLS Certificate Management endpoint. |
| `result` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesHostnameAssociation.load({ "zone_id" => "zone_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesHostnameAssociation.update({
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesHostnameAssociationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesKeylessResponseCollectionEntity

```ruby
tls_certificates_and_hostnames_keyless_response_collection = client.TlsCertificatesAndHostnamesKeylessResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TlsCertificatesAndHostnamesKeylessResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesKeylessResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesKeylessResponseSingleEntity

```ruby
tls_certificates_and_hostnames_keyless_response_single = client.TlsCertificatesAndHostnamesKeylessResponseSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bundle_method` | `String` | No | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| `certificate` | `String` | Yes | The zone's SSL certificate or SSL certificate and intermediate(s). |
| `enabled` | `Boolean` | No | Whether or not the Keyless SSL is on or off. |
| `host` | `String` | Yes | The keyless SSL name. |
| `name` | `String` | No | The keyless SSL name. |
| `port` | `Float` | Yes | The keyless SSL port used to communicate between Cloudflare and the client's Keyless SSL server. |
| `result` | `Hash` | No |  |
| `tunnel` | `Hash` | Yes | Configuration for using Keyless SSL through a Cloudflare Tunnel. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesKeylessResponseSingle.create({
  "zone_id" => "example_zone_id", # String
  "certificate" => "example_certificate", # String
  "host" => "example_host", # String
  "port" => 1, # Float
  "tunnel" => {}, # Hash
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesKeylessResponseSingle.load({ "keyless_certificate_id" => "keyless_certificate_id", "zone_id" => "zone_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesKeylessResponseSingle.update({
  "keyless_certificate_id" => "keyless_certificate_id",
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesKeylessResponseSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity

```ruby
tls_certificates_and_hostnames_keyless_response_single_id = client.TlsCertificatesAndHostnamesKeylessResponseSingleId
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesKeylessResponseSingleId.remove({ "keyless_certificate_id" => "keyless_certificate_id", "zone_id" => "zone_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesPerHostnameSettingEntity

```ruby
tls_certificates_and_hostnames_per_hostname_setting = client.TlsCertificatesAndHostnamesPerHostnameSetting
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |
| `result` | `Hash` | No |  |
| `value` | `Object` | Yes | The TLS setting value. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesPerHostnameSetting.load({ "hostname" => "hostname", "setting_id" => "setting_id", "zone_id" => "zone_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesPerHostnameSetting.update({
  "hostname" => "hostname",
  "setting_id" => "setting_id",
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesPerHostnameSettingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity

```ruby
tls_certificates_and_hostnames_per_hostname_settings_response = client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |
| `result_info` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse.load({ "setting_id" => "setting_id", "zone_id" => "zone_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity

```ruby
tls_certificates_and_hostnames_per_hostname_settings_response2 = client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse2
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse2.remove({ "hostname" => "hostname", "setting_id" => "setting_id", "zone_id" => "zone_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesSslUniversalSettingEntity

```ruby
tls_certificates_and_hostnames_ssl_universal_setting = client.TlsCertificatesAndHostnamesSslUniversalSetting
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `Boolean` | No | Disabling Universal SSL removes any currently active Universal SSL certificates for your zone from the edge and prevents any future Universal SSL certificates from being ordered. |
| `result` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesSslUniversalSetting.load({ "zone_id" => "zone_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesSslUniversalSetting.update({
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesSslUniversalSettingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesSslValidationMethodResponseEntity

```ruby
tls_certificates_and_hostnames_ssl_validation_method_response = client.TlsCertificatesAndHostnamesSslValidationMethodResponse
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `validation_method` | `String` | Yes | Desired validation method. |

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesSslValidationMethodResponse.update({
  "certificate_pack_id" => "certificate_pack_id",
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesSslValidationMethodResponseEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity

```ruby
tls_certificates_and_hostnames_ssl_verification_response_collection = client.TlsCertificatesAndHostnamesSslVerificationResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TlsCertificatesAndHostnamesSslVerificationResponseCollection.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TlsCertificatesAndHostnamesTotalTlsSettingEntity

```ruby
tls_certificates_and_hostnames_total_tls_setting = client.TlsCertificatesAndHostnamesTotalTlsSetting
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificate_authority` | `String` | No | The Certificate Authority that Total TLS certificates will be issued through. |
| `enabled` | `Boolean` | Yes | If enabled, Total TLS will order a hostname specific TLS certificate for any proxied A, AAAA, or CNAME record in your zone. |
| `result` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesTotalTlsSetting.create({
  "zone_id" => "example_zone_id", # String
  "enabled" => true, # Boolean
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.TlsCertificatesAndHostnamesTotalTlsSetting.load({ "zone_id" => "zone_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TlsCertificatesAndHostnamesTotalTlsSettingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ruby
client = CloudflareSslSDK.new({
  "feature" => {
    "test" => { "active" => true },
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

