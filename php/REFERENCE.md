# CloudflareSsl PHP SDK Reference

Complete API reference for the CloudflareSsl PHP SDK.


## CloudflareSslSDK

### Constructor

```php
require_once __DIR__ . '/cloudflaressl_sdk.php';

$client = new CloudflareSslSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareSslSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = CloudflareSslSDK::test();
```


### Instance Methods

#### `CacheApiResponseSingleId($data = null)`

Create a new `CacheApiResponseSingleIdEntity` instance. Pass `null` for no initial data.

#### `CacheAutoOriginTlsKex($data = null)`

Create a new `CacheAutoOriginTlsKexEntity` instance. Pass `null` for no initial data.

#### `CustomHostname($data = null)`

Create a new `CustomHostnameEntity` instance. Pass `null` for no initial data.

#### `CustomHostnameForAZone($data = null)`

Create a new `CustomHostnameForAZoneEntity` instance. Pass `null` for no initial data.

#### `OriginTl($data = null)`

Create a new `OriginTlEntity` instance. Pass `null` for no initial data.

#### `Recommendation($data = null)`

Create a new `RecommendationEntity` instance. Pass `null` for no initial data.

#### `SslAutomaticMode($data = null)`

Create a new `SslAutomaticModeEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesAdvancedCertificatePackResponse($data = null)`

Create a new `TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesAssociationResponseCollection($data = null)`

Create a new `TlsCertificatesAndHostnamesAssociationResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateAnalyze($data = null)`

Create a new `TlsCertificatesAndHostnamesCertificateAnalyzeEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesCertificatePackQuota($data = null)`

Create a new `TlsCertificatesAndHostnamesCertificatePackQuotaEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesCertificatePackResponseCollection($data = null)`

Create a new `TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesCertificatePackResponseSingle($data = null)`

Create a new `TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseCollection($data = null)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseCollection3($data = null)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection3Entity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseCollection4($data = null)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection4Entity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseCollection5($data = null)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection5Entity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseIdOnly($data = null)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseSingle($data = null)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingleEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseSingle2($data = null)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle2Entity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseSingle3($data = null)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle3Entity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseSingle4($data = null)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle4Entity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseSingle5($data = null)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle5Entity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseSinglePost($data = null)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateRevoke($data = null)`

Create a new `TlsCertificatesAndHostnamesCertificateRevokeEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesClientCertificateResponse($data = null)`

Create a new `TlsCertificatesAndHostnamesClientCertificateResponseEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesClientCertificateResponseSingle($data = null)`

Create a new `TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse($data = null)`

Create a new `TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesCustomCsrResponseCollection($data = null)`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesCustomCsrResponseCollection2($data = null)`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesCustomCsrResponseIdOnly($data = null)`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesCustomCsrResponseSingle($data = null)`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesCustomCsrResponseSingle2($data = null)`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesCustomHostnameQuota($data = null)`

Create a new `TlsCertificatesAndHostnamesCustomHostnameQuotaEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesCustomHostnameResponseCollection($data = null)`

Create a new `TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesCustomHostnameResponseSingle($data = null)`

Create a new `TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesCustomTrustStoreResponse($data = null)`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly($data = null)`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle($data = null)`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesDcvDelegation($data = null)`

Create a new `TlsCertificatesAndHostnamesDcvDelegationEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack($data = null)`

Create a new `TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesEnabled($data = null)`

Create a new `TlsCertificatesAndHostnamesEnabledEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesFallbackOrigin($data = null)`

Create a new `TlsCertificatesAndHostnamesFallbackOriginEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesHostnameAopResponseCollection($data = null)`

Create a new `TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesHostnameAopSingle($data = null)`

Create a new `TlsCertificatesAndHostnamesHostnameAopSingleEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesHostnameAssocResponseCollection($data = null)`

Create a new `TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesHostnameAssociation($data = null)`

Create a new `TlsCertificatesAndHostnamesHostnameAssociationEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesKeylessResponseCollection($data = null)`

Create a new `TlsCertificatesAndHostnamesKeylessResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesKeylessResponseSingle($data = null)`

Create a new `TlsCertificatesAndHostnamesKeylessResponseSingleEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesKeylessResponseSingleId($data = null)`

Create a new `TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesPerHostnameSetting($data = null)`

Create a new `TlsCertificatesAndHostnamesPerHostnameSettingEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesPerHostnameSettingsResponse($data = null)`

Create a new `TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesPerHostnameSettingsResponse2($data = null)`

Create a new `TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesSslUniversalSetting($data = null)`

Create a new `TlsCertificatesAndHostnamesSslUniversalSettingEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesSslValidationMethodResponse($data = null)`

Create a new `TlsCertificatesAndHostnamesSslValidationMethodResponseEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesSslVerificationResponseCollection($data = null)`

Create a new `TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `TlsCertificatesAndHostnamesTotalTlsSetting($data = null)`

Create a new `TlsCertificatesAndHostnamesTotalTlsSettingEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): CloudflareSslUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## CacheApiResponseSingleIdEntity

```php
$cache_api_response_single_id = $client->CacheApiResponseSingleId();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes | Indicates the API call's success or failure. |
| `value` | `string` | Yes | Controls enablement of Automatic SSL/TLS. |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CacheApiResponseSingleId()->update([
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CacheApiResponseSingleIdEntity`

Create a new `CacheApiResponseSingleIdEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CacheAutoOriginTlsKexEntity

```php
$cache_auto_origin_tls_kex = $client->CacheAutoOriginTlsKex();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `bool` | Yes | Controls enablement of Auto-Origin TLS KEX selection for the zone. |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes | Indicates the API call's success or failure. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CacheAutoOriginTlsKex()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CacheAutoOriginTlsKex()->update([
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CacheAutoOriginTlsKexEntity`

Create a new `CacheAutoOriginTlsKexEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomHostnameEntity

```php
$custom_hostname = $client->CustomHostname();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->CustomHostname()->remove(["id" => "id", "zone_id" => "zone_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomHostnameEntity`

Create a new `CustomHostnameEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomHostnameForAZoneEntity

```php
$custom_hostname_for_a_zone = $client->CustomHostnameForAZone();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_certificate` | `string` | Yes | If a custom uploaded certificate is used. |
| `custom_key` | `string` | Yes | The key for a custom uploaded certificate. |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->CustomHostnameForAZone()->remove(["certificate_id" => "certificate_id", "certificate_pack_id" => "certificate_pack_id", "custom_hostname_id" => "custom_hostname_id", "zone_id" => "zone_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CustomHostnameForAZone()->update([
  "certificate_id" => "certificate_id",
  "certificate_pack_id" => "certificate_pack_id",
  "custom_hostname_id" => "custom_hostname_id",
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomHostnameForAZoneEntity`

Create a new `CustomHostnameForAZoneEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OriginTlEntity

```php
$origin_tl = $client->OriginTl();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |
| `value` | `array` | Yes | List of TLS compliance modes that constrain the key-exchange algorithms Cloudflare may use when establishing the TLS connection to the zone's origin. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->OriginTl()->load(["zone_id" => "zone_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->OriginTl()->remove(["zone_id" => "zone_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->OriginTl()->update([
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OriginTlEntity`

Create a new `OriginTlEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RecommendationEntity

```php
$recommendation = $client->Recommendation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes | Indicates the API call's success or failure. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Recommendation()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RecommendationEntity`

Create a new `RecommendationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SslAutomaticModeEntity

```php
$ssl_automatic_mode = $client->SslAutomaticMode();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes | Indicates the API call's success or failure. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SslAutomaticMode()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SslAutomaticModeEntity`

Create a new `SslAutomaticModeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity

```php
$tls_certificates_and_hostnames_advanced_certificate_pack_response = $client->TlsCertificatesAndHostnamesAdvancedCertificatePackResponse();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificate_authority` | `string` | Yes | Certificate Authority selected for the order. |
| `cloudflare_branding` | `bool` | No | Whether or not to add Cloudflare Branding for the order. |
| `hosts` | `array` | Yes | Comma separated list of valid host names for the certificate packs. |
| `type` | `string` | Yes | Type of certificate pack. |
| `validation_method` | `string` | Yes | Validation Method selected for the order. |
| `validity_days` | `int` | Yes | Validity Days selected for the order. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesAdvancedCertificatePackResponse()->create([
  "zone_id" => null, // string
  "certificate_authority" => null, // string
  "hosts" => null, // array
  "type" => null, // string
  "validation_method" => null, // string
  "validity_days" => null, // int
]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesAdvancedCertificatePackResponse()->update([
  "certificate_pack_id" => "certificate_pack_id",
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity`

Create a new `TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesAssociationResponseCollectionEntity

```php
$tls_certificates_and_hostnames_association_response_collection = $client->TlsCertificatesAndHostnamesAssociationResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TlsCertificatesAndHostnamesAssociationResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesAssociationResponseCollectionEntity`

Create a new `TlsCertificatesAndHostnamesAssociationResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateAnalyzeEntity

```php
$tls_certificates_and_hostnames_certificate_analyze = $client->TlsCertificatesAndHostnamesCertificateAnalyze();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bundle_method` | `string` | No | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| `certificate` | `string` | No | The zone's SSL certificate or certificate and the intermediate(s). |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesCertificateAnalyze()->create([
  "zone_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesCertificateAnalyzeEntity`

Create a new `TlsCertificatesAndHostnamesCertificateAnalyzeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificatePackQuotaEntity

```php
$tls_certificates_and_hostnames_certificate_pack_quota = $client->TlsCertificatesAndHostnamesCertificatePackQuota();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesCertificatePackQuota()->load(["zone_id" => "zone_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesCertificatePackQuotaEntity`

Create a new `TlsCertificatesAndHostnamesCertificatePackQuotaEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity

```php
$tls_certificates_and_hostnames_certificate_pack_response_collection = $client->TlsCertificatesAndHostnamesCertificatePackResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TlsCertificatesAndHostnamesCertificatePackResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity`

Create a new `TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity

```php
$tls_certificates_and_hostnames_certificate_pack_response_single = $client->TlsCertificatesAndHostnamesCertificatePackResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | Yes | A certificate pack with all its properties. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesCertificatePackResponseSingle()->load(["certificate_pack_id" => "certificate_pack_id", "zone_id" => "zone_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity`

Create a new `TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseCollectionEntity

```php
$tls_certificates_and_hostnames_certificate_response_collection = $client->TlsCertificatesAndHostnamesCertificateResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificates` | `array` | Yes | Array of ordered certificates. |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TlsCertificatesAndHostnamesCertificateResponseCollection()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesCertificateResponseCollection()->update([
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesCertificateResponseCollectionEntity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseCollection3Entity

```php
$tls_certificates_and_hostnames_certificate_response_collection_3 = $client->TlsCertificatesAndHostnamesCertificateResponseCollection3();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TlsCertificatesAndHostnamesCertificateResponseCollection3()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesCertificateResponseCollection3Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection3Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseCollection4Entity

```php
$tls_certificates_and_hostnames_certificate_response_collection_4 = $client->TlsCertificatesAndHostnamesCertificateResponseCollection4();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TlsCertificatesAndHostnamesCertificateResponseCollection4()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesCertificateResponseCollection4Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection4Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseCollection5Entity

```php
$tls_certificates_and_hostnames_certificate_response_collection_5 = $client->TlsCertificatesAndHostnamesCertificateResponseCollection5();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |
| `result_info` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TlsCertificatesAndHostnamesCertificateResponseCollection5()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesCertificateResponseCollection5Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection5Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity

```php
$tls_certificates_and_hostnames_certificate_response_id_only = $client->TlsCertificatesAndHostnamesCertificateResponseIdOnly();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesCertificateResponseIdOnly()->remove(["custom_certificate_id" => "custom_certificate_id", "zone_id" => "zone_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseSingleEntity

```php
$tls_certificates_and_hostnames_certificate_response_single = $client->TlsCertificatesAndHostnamesCertificateResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bundle_method` | `string` | No | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| `certificate` | `string` | Yes | The zone's SSL certificate or certificate and the intermediate(s). |
| `custom_csr_id` | `string` | No | The identifier for the Custom CSR that was used. |
| `deploy` | `string` | No | The environment to deploy the certificate to, defaults to production. |
| `geo_restrictions` | `array` | No | Specify the region where your private key can be held locally for optimal TLS performance. |
| `policy` | `string` | No | Specify the policy that determines the region where your private key will be held locally. |
| `private_key` | `string` | No | The zone's private key. |
| `result` | `array` | Yes |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesCertificateResponseSingle()->create([
  "zone_id" => null, // string
  "certificate" => null, // string
  "result" => null, // array
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesCertificateResponseSingle()->load(["custom_certificate_id" => "custom_certificate_id", "zone_id" => "zone_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesCertificateResponseSingle()->update([
  "custom_certificate_id" => "custom_certificate_id",
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesCertificateResponseSingleEntity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseSingle2Entity

```php
$tls_certificates_and_hostnames_certificate_response_single_2 = $client->TlsCertificatesAndHostnamesCertificateResponseSingle2();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `csr` | `string` | Yes | The Certificate Signing Request (CSR). |
| `hostnames` | `array` | Yes | Array of hostnames or wildcard names bound to the certificate. |
| `request_type` | `string` | Yes | Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa), or "keyless-certificate" (for Keyless SSL servers). |
| `requested_validity` | `float` | No | The number of days for which the certificate should be valid. |
| `result` | `array` | Yes |  |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `csr` | - | - | - |
| `hostnames` | - | - | - |
| `request_type` | - | - | - |
| `requested_validity` | - | - | - |
| `result` | - | Yes | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesCertificateResponseSingle2()->create([
  "csr" => null, // string
  "hostnames" => null, // array
  "request_type" => null, // string
  "result" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TlsCertificatesAndHostnamesCertificateResponseSingle2()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesCertificateResponseSingle2()->load(["certificate_id" => "certificate_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesCertificateResponseSingle2Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseSingle3Entity

```php
$tls_certificates_and_hostnames_certificate_response_single_3 = $client->TlsCertificatesAndHostnamesCertificateResponseSingle3();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificate` | `string` | Yes | The zone's leaf certificate. |
| `private_key` | `string` | Yes | The zone's private key. |
| `result` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesCertificateResponseSingle3()->create([
  "zone_id" => null, // string
  "certificate" => null, // string
  "private_key" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesCertificateResponseSingle3()->load(["certificate_id" => "certificate_id", "zone_id" => "zone_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesCertificateResponseSingle3()->remove(["certificate_id" => "certificate_id", "zone_id" => "zone_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesCertificateResponseSingle3Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle3Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseSingle4Entity

```php
$tls_certificates_and_hostnames_certificate_response_single_4 = $client->TlsCertificatesAndHostnamesCertificateResponseSingle4();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificate` | `string` | Yes | The hostname certificate. |
| `private_key` | `string` | Yes | The hostname certificate's private key. |
| `result` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesCertificateResponseSingle4()->create([
  "zone_id" => null, // string
  "certificate" => null, // string
  "private_key" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesCertificateResponseSingle4()->load(["certificate_id" => "certificate_id", "zone_id" => "zone_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesCertificateResponseSingle4()->remove(["certificate_id" => "certificate_id", "zone_id" => "zone_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesCertificateResponseSingle4Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle4Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseSingle5Entity

```php
$tls_certificates_and_hostnames_certificate_response_single_5 = $client->TlsCertificatesAndHostnamesCertificateResponseSingle5();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesCertificateResponseSingle5()->load(["account_id" => "account_id", "mtls_certificate_id" => "mtls_certificate_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesCertificateResponseSingle5()->remove(["account_id" => "account_id", "mtls_certificate_id" => "mtls_certificate_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesCertificateResponseSingle5Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle5Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity

```php
$tls_certificates_and_hostnames_certificate_response_single_post = $client->TlsCertificatesAndHostnamesCertificateResponseSinglePost();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ca` | `bool` | Yes | Indicates whether the certificate is a CA or leaf certificate. |
| `certificates` | `string` | Yes | The uploaded root CA certificate. |
| `name` | `string` | No | Optional unique name for the certificate. |
| `private_key` | `string` | No | The private key for the certificate. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesCertificateResponseSinglePost()->create([
  "account_id" => null, // string
  "ca" => null, // bool
  "certificates" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateRevokeEntity

```php
$tls_certificates_and_hostnames_certificate_revoke = $client->TlsCertificatesAndHostnamesCertificateRevoke();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesCertificateRevoke()->remove(["certificate_id" => "certificate_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesCertificateRevokeEntity`

Create a new `TlsCertificatesAndHostnamesCertificateRevokeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesClientCertificateResponseEntity

```php
$tls_certificates_and_hostnames_client_certificate_response = $client->TlsCertificatesAndHostnamesClientCertificateResponse();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TlsCertificatesAndHostnamesClientCertificateResponse()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesClientCertificateResponseEntity`

Create a new `TlsCertificatesAndHostnamesClientCertificateResponseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity

```php
$tls_certificates_and_hostnames_client_certificate_response_single = $client->TlsCertificatesAndHostnamesClientCertificateResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `csr` | `string` | Yes | The Certificate Signing Request (CSR). |
| `reactivate` | `bool` | No |  |
| `result` | `array` | No |  |
| `validity_days` | `int` | Yes | The number of days the Client Certificate will be valid after the issued_on date. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesClientCertificateResponseSingle()->create([
  "zone_id" => null, // string
  "csr" => null, // string
  "validity_days" => null, // int
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesClientCertificateResponseSingle()->load(["client_certificate_id" => "client_certificate_id", "zone_id" => "zone_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesClientCertificateResponseSingle()->remove(["client_certificate_id" => "client_certificate_id", "zone_id" => "zone_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesClientCertificateResponseSingle()->update([
  "client_certificate_id" => "client_certificate_id",
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity`

Create a new `TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseEntity

```php
$tls_certificates_and_hostnames_ct_alerting_subscription_response = $client->TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `emails` | `array` | No | Email addresses that receive CT alert notifications for the zone. |
| `enabled` | `bool` | Yes | Whether CT alerting is enabled for the zone. |
| `result` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse()->load(["zone_id" => "zone_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse()->update([
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseEntity`

Create a new `TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity

```php
$tls_certificates_and_hostnames_custom_csr_response_collection = $client->TlsCertificatesAndHostnamesCustomCsrResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TlsCertificatesAndHostnamesCustomCsrResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity

```php
$tls_certificates_and_hostnames_custom_csr_response_collection_2 = $client->TlsCertificatesAndHostnamesCustomCsrResponseCollection2();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TlsCertificatesAndHostnamesCustomCsrResponseCollection2()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity

```php
$tls_certificates_and_hostnames_custom_csr_response_id_only = $client->TlsCertificatesAndHostnamesCustomCsrResponseIdOnly();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesCustomCsrResponseIdOnly()->remove(["custom_csr_id" => "custom_csr_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity

```php
$tls_certificates_and_hostnames_custom_csr_response_single = $client->TlsCertificatesAndHostnamesCustomCsrResponseSingle();
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
| `result` | `array` | Yes | A custom Certificate Signing Request (CSR). |
| `sans` | `array` | Yes | Subject Alternative Names for the CSR. |
| `state` | `string` | Yes | State or province name. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesCustomCsrResponseSingle()->create([
  "zone_id" => null, // string
  "common_name" => null, // string
  "country" => null, // string
  "locality" => null, // string
  "organization" => null, // string
  "result" => null, // array
  "sans" => null, // array
  "state" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesCustomCsrResponseSingle()->load(["custom_csr_id" => "custom_csr_id", "zone_id" => "zone_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity

```php
$tls_certificates_and_hostnames_custom_csr_response_single_2 = $client->TlsCertificatesAndHostnamesCustomCsrResponseSingle2();
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
| `result` | `array` | Yes | A custom Certificate Signing Request (CSR). |
| `sans` | `array` | Yes | Subject Alternative Names for the CSR. |
| `state` | `string` | Yes | State or province name. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesCustomCsrResponseSingle2()->create([
  "account_id" => null, // string
  "common_name" => null, // string
  "country" => null, // string
  "locality" => null, // string
  "organization" => null, // string
  "result" => null, // array
  "sans" => null, // array
  "state" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesCustomCsrResponseSingle2()->load(["account_id" => "account_id", "custom_csr_id" => "custom_csr_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomHostnameQuotaEntity

```php
$tls_certificates_and_hostnames_custom_hostname_quota = $client->TlsCertificatesAndHostnamesCustomHostnameQuota();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes | Informational messages returned by the custom hostname API. |
| `result` | `array` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TlsCertificatesAndHostnamesCustomHostnameQuota()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesCustomHostnameQuotaEntity`

Create a new `TlsCertificatesAndHostnamesCustomHostnameQuotaEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity

```php
$tls_certificates_and_hostnames_custom_hostname_response_collection = $client->TlsCertificatesAndHostnamesCustomHostnameResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes | Informational messages returned by the custom hostname API. |
| `result` | `array` | No |  |
| `result_info` | `array` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TlsCertificatesAndHostnamesCustomHostnameResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity`

Create a new `TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity

```php
$tls_certificates_and_hostnames_custom_hostname_response_single = $client->TlsCertificatesAndHostnamesCustomHostnameResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_metadata` | `array` | No | Unique key/value metadata for this hostname. |
| `custom_origin_server` | `string` | No | a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record. |
| `custom_origin_sni` | `string` | No | A hostname that will be sent to your custom origin server as SNI for TLS handshake. |
| `errors` | `array` | Yes |  |
| `hostname` | `string` | Yes | The custom hostname that will point to your hostname via CNAME. |
| `messages` | `array` | Yes | Informational messages returned by the custom hostname API. |
| `result` | `array` | No |  |
| `ssl` | `array` | No | SSL properties used when creating the custom hostname. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesCustomHostnameResponseSingle()->create([
  "zone_id" => null, // string
  "errors" => null, // array
  "hostname" => null, // string
  "messages" => null, // array
  "success" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesCustomHostnameResponseSingle()->load(["custom_hostname_id" => "custom_hostname_id", "zone_id" => "zone_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesCustomHostnameResponseSingle()->update([
  "custom_hostname_id" => "custom_hostname_id",
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity`

Create a new `TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity

```php
$tls_certificates_and_hostnames_custom_trust_store_response = $client->TlsCertificatesAndHostnamesCustomTrustStoreResponse();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TlsCertificatesAndHostnamesCustomTrustStoreResponse()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity

```php
$tls_certificates_and_hostnames_custom_trust_store_response_id_only = $client->TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly()->remove(["custom_origin_trust_store_id" => "custom_origin_trust_store_id", "zone_id" => "zone_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity

```php
$tls_certificates_and_hostnames_custom_trust_store_response_single = $client->TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificate` | `string` | Yes | The root CA certificate in PEM format. |
| `result` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle()->create([
  "zone_id" => null, // string
  "certificate" => null, // string
  "result" => null, // array
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle()->load(["custom_origin_trust_store_id" => "custom_origin_trust_store_id", "zone_id" => "zone_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesDcvDelegationEntity

```php
$tls_certificates_and_hostnames_dcv_delegation = $client->TlsCertificatesAndHostnamesDcvDelegation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesDcvDelegation()->load(["zone_id" => "zone_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesDcvDelegationEntity`

Create a new `TlsCertificatesAndHostnamesDcvDelegationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity

```php
$tls_certificates_and_hostnames_delete_advanced_certificate_pack = $client->TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack()->remove(["id" => "id", "zone_id" => "zone_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity`

Create a new `TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesEnabledEntity

```php
$tls_certificates_and_hostnames_enabled = $client->TlsCertificatesAndHostnamesEnabled();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `bool` | Yes | Indicates whether zone-level authenticated origin pulls is enabled. |
| `result` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesEnabled()->load(["zone_id" => "zone_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesEnabled()->update([
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesEnabledEntity`

Create a new `TlsCertificatesAndHostnamesEnabledEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesFallbackOriginEntity

```php
$tls_certificates_and_hostnames_fallback_origin = $client->TlsCertificatesAndHostnamesFallbackOrigin();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `origin` | `string` | Yes | Your origin hostname that requests to your custom hostnames will be sent to. |
| `result` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesFallbackOrigin()->load(["zone_id" => "zone_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesFallbackOrigin()->remove(["zone_id" => "zone_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesFallbackOrigin()->update([
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesFallbackOriginEntity`

Create a new `TlsCertificatesAndHostnamesFallbackOriginEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity

```php
$tls_certificates_and_hostnames_hostname_aop_response_collection = $client->TlsCertificatesAndHostnamesHostnameAopResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `array` | Yes |  |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesHostnameAopResponseCollection()->update([
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity`

Create a new `TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesHostnameAopSingleEntity

```php
$tls_certificates_and_hostnames_hostname_aop_single = $client->TlsCertificatesAndHostnamesHostnameAopSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesHostnameAopSingle()->load(["hostname" => "hostname", "zone_id" => "zone_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesHostnameAopSingleEntity`

Create a new `TlsCertificatesAndHostnamesHostnameAopSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity

```php
$tls_certificates_and_hostnames_hostname_assoc_response_collection = $client->TlsCertificatesAndHostnamesHostnameAssocResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |
| `result_info` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TlsCertificatesAndHostnamesHostnameAssocResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity`

Create a new `TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesHostnameAssociationEntity

```php
$tls_certificates_and_hostnames_hostname_association = $client->TlsCertificatesAndHostnamesHostnameAssociation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hostnames` | `array` | No |  |
| `mtls_certificate_id` | `string` | No | The UUID for a certificate that was uploaded to the mTLS Certificate Management endpoint. |
| `result` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesHostnameAssociation()->load(["zone_id" => "zone_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesHostnameAssociation()->update([
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesHostnameAssociationEntity`

Create a new `TlsCertificatesAndHostnamesHostnameAssociationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesKeylessResponseCollectionEntity

```php
$tls_certificates_and_hostnames_keyless_response_collection = $client->TlsCertificatesAndHostnamesKeylessResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TlsCertificatesAndHostnamesKeylessResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesKeylessResponseCollectionEntity`

Create a new `TlsCertificatesAndHostnamesKeylessResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesKeylessResponseSingleEntity

```php
$tls_certificates_and_hostnames_keyless_response_single = $client->TlsCertificatesAndHostnamesKeylessResponseSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bundle_method` | `string` | No | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| `certificate` | `string` | Yes | The zone's SSL certificate or SSL certificate and intermediate(s). |
| `enabled` | `bool` | No | Whether or not the Keyless SSL is on or off. |
| `host` | `string` | Yes | The keyless SSL name. |
| `name` | `string` | No | The keyless SSL name. |
| `port` | `float` | Yes | The keyless SSL port used to communicate between Cloudflare and the client's Keyless SSL server. |
| `result` | `array` | No |  |
| `tunnel` | `array` | Yes | Configuration for using Keyless SSL through a Cloudflare Tunnel. |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesKeylessResponseSingle()->create([
  "zone_id" => null, // string
  "certificate" => null, // string
  "host" => null, // string
  "port" => null, // float
  "tunnel" => null, // array
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesKeylessResponseSingle()->load(["keyless_certificate_id" => "keyless_certificate_id", "zone_id" => "zone_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesKeylessResponseSingle()->update([
  "keyless_certificate_id" => "keyless_certificate_id",
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesKeylessResponseSingleEntity`

Create a new `TlsCertificatesAndHostnamesKeylessResponseSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity

```php
$tls_certificates_and_hostnames_keyless_response_single_id = $client->TlsCertificatesAndHostnamesKeylessResponseSingleId();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesKeylessResponseSingleId()->remove(["keyless_certificate_id" => "keyless_certificate_id", "zone_id" => "zone_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity`

Create a new `TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesPerHostnameSettingEntity

```php
$tls_certificates_and_hostnames_per_hostname_setting = $client->TlsCertificatesAndHostnamesPerHostnameSetting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `array` | No |  |
| `value` | `mixed` | Yes | The TLS setting value. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesPerHostnameSetting()->load(["hostname" => "hostname", "setting_id" => "setting_id", "zone_id" => "zone_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesPerHostnameSetting()->update([
  "hostname" => "hostname",
  "setting_id" => "setting_id",
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesPerHostnameSettingEntity`

Create a new `TlsCertificatesAndHostnamesPerHostnameSettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity

```php
$tls_certificates_and_hostnames_per_hostname_settings_response = $client->TlsCertificatesAndHostnamesPerHostnameSettingsResponse();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |
| `result_info` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesPerHostnameSettingsResponse()->load(["setting_id" => "setting_id", "zone_id" => "zone_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity`

Create a new `TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity

```php
$tls_certificates_and_hostnames_per_hostname_settings_response2 = $client->TlsCertificatesAndHostnamesPerHostnameSettingsResponse2();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesPerHostnameSettingsResponse2()->remove(["hostname" => "hostname", "setting_id" => "setting_id", "zone_id" => "zone_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity`

Create a new `TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesSslUniversalSettingEntity

```php
$tls_certificates_and_hostnames_ssl_universal_setting = $client->TlsCertificatesAndHostnamesSslUniversalSetting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `bool` | No | Disabling Universal SSL removes any currently active Universal SSL certificates for your zone from the edge and prevents any future Universal SSL certificates from being ordered. |
| `result` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesSslUniversalSetting()->load(["zone_id" => "zone_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesSslUniversalSetting()->update([
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesSslUniversalSettingEntity`

Create a new `TlsCertificatesAndHostnamesSslUniversalSettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesSslValidationMethodResponseEntity

```php
$tls_certificates_and_hostnames_ssl_validation_method_response = $client->TlsCertificatesAndHostnamesSslValidationMethodResponse();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `validation_method` | `string` | Yes | Desired validation method. |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesSslValidationMethodResponse()->update([
  "certificate_pack_id" => "certificate_pack_id",
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesSslValidationMethodResponseEntity`

Create a new `TlsCertificatesAndHostnamesSslValidationMethodResponseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity

```php
$tls_certificates_and_hostnames_ssl_verification_response_collection = $client->TlsCertificatesAndHostnamesSslVerificationResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TlsCertificatesAndHostnamesSslVerificationResponseCollection()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity`

Create a new `TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TlsCertificatesAndHostnamesTotalTlsSettingEntity

```php
$tls_certificates_and_hostnames_total_tls_setting = $client->TlsCertificatesAndHostnamesTotalTlsSetting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificate_authority` | `string` | No | The Certificate Authority that Total TLS certificates will be issued through. |
| `enabled` | `bool` | Yes | If enabled, Total TLS will order a hostname specific TLS certificate for any proxied A, AAAA, or CNAME record in your zone. |
| `result` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesTotalTlsSetting()->create([
  "zone_id" => null, // string
  "enabled" => null, // bool
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TlsCertificatesAndHostnamesTotalTlsSetting()->load(["zone_id" => "zone_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TlsCertificatesAndHostnamesTotalTlsSettingEntity`

Create a new `TlsCertificatesAndHostnamesTotalTlsSettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```php
$client = new CloudflareSslSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
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

