# CloudflareSsl TypeScript SDK Reference

Complete API reference for the CloudflareSsl TypeScript SDK.


## CloudflareSslSDK

### Constructor

```ts
new CloudflareSslSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareSslSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = CloudflareSslSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `CloudflareSslSDK` instance in test mode.


### Instance Methods

#### `CacheApiResponseSingleId(data?: object)`

Create a new `CacheApiResponseSingleId` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CacheApiResponseSingleIdEntity` instance.

#### `CacheAutoOriginTlsKex(data?: object)`

Create a new `CacheAutoOriginTlsKex` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CacheAutoOriginTlsKexEntity` instance.

#### `CustomHostname(data?: object)`

Create a new `CustomHostname` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomHostnameEntity` instance.

#### `CustomHostnameForAZone(data?: object)`

Create a new `CustomHostnameForAZone` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomHostnameForAZoneEntity` instance.

#### `OriginTl(data?: object)`

Create a new `OriginTl` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OriginTlEntity` instance.

#### `Recommendation(data?: object)`

Create a new `Recommendation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RecommendationEntity` instance.

#### `SslAutomaticMode(data?: object)`

Create a new `SslAutomaticMode` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SslAutomaticModeEntity` instance.

#### `TlsCertificatesAndHostnamesAdvancedCertificatePackResponse(data?: object)`

Create a new `TlsCertificatesAndHostnamesAdvancedCertificatePackResponse` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity` instance.

#### `TlsCertificatesAndHostnamesAssociationResponseCollection(data?: object)`

Create a new `TlsCertificatesAndHostnamesAssociationResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesAssociationResponseCollectionEntity` instance.

#### `TlsCertificatesAndHostnamesCertificateAnalyze(data?: object)`

Create a new `TlsCertificatesAndHostnamesCertificateAnalyze` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesCertificateAnalyzeEntity` instance.

#### `TlsCertificatesAndHostnamesCertificatePackQuota(data?: object)`

Create a new `TlsCertificatesAndHostnamesCertificatePackQuota` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesCertificatePackQuotaEntity` instance.

#### `TlsCertificatesAndHostnamesCertificatePackResponseCollection(data?: object)`

Create a new `TlsCertificatesAndHostnamesCertificatePackResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity` instance.

#### `TlsCertificatesAndHostnamesCertificatePackResponseSingle(data?: object)`

Create a new `TlsCertificatesAndHostnamesCertificatePackResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity` instance.

#### `TlsCertificatesAndHostnamesCertificateResponseCollection(data?: object)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesCertificateResponseCollectionEntity` instance.

#### `TlsCertificatesAndHostnamesCertificateResponseCollection3(data?: object)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection3` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesCertificateResponseCollection3Entity` instance.

#### `TlsCertificatesAndHostnamesCertificateResponseCollection4(data?: object)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection4` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesCertificateResponseCollection4Entity` instance.

#### `TlsCertificatesAndHostnamesCertificateResponseCollection5(data?: object)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection5` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesCertificateResponseCollection5Entity` instance.

#### `TlsCertificatesAndHostnamesCertificateResponseIdOnly(data?: object)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseIdOnly` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity` instance.

#### `TlsCertificatesAndHostnamesCertificateResponseSingle(data?: object)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesCertificateResponseSingleEntity` instance.

#### `TlsCertificatesAndHostnamesCertificateResponseSingle2(data?: object)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesCertificateResponseSingle2Entity` instance.

#### `TlsCertificatesAndHostnamesCertificateResponseSingle3(data?: object)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle3` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesCertificateResponseSingle3Entity` instance.

#### `TlsCertificatesAndHostnamesCertificateResponseSingle4(data?: object)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle4` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesCertificateResponseSingle4Entity` instance.

#### `TlsCertificatesAndHostnamesCertificateResponseSingle5(data?: object)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle5` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesCertificateResponseSingle5Entity` instance.

#### `TlsCertificatesAndHostnamesCertificateResponseSinglePost(data?: object)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSinglePost` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity` instance.

#### `TlsCertificatesAndHostnamesCertificateRevoke(data?: object)`

Create a new `TlsCertificatesAndHostnamesCertificateRevoke` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesCertificateRevokeEntity` instance.

#### `TlsCertificatesAndHostnamesClientCertificateResponse(data?: object)`

Create a new `TlsCertificatesAndHostnamesClientCertificateResponse` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesClientCertificateResponseEntity` instance.

#### `TlsCertificatesAndHostnamesClientCertificateResponseSingle(data?: object)`

Create a new `TlsCertificatesAndHostnamesClientCertificateResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity` instance.

#### `TlsCertificatesAndHostnamesCustomCsrResponseCollection(data?: object)`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity` instance.

#### `TlsCertificatesAndHostnamesCustomCsrResponseCollection2(data?: object)`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseCollection2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity` instance.

#### `TlsCertificatesAndHostnamesCustomCsrResponseIdOnly(data?: object)`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseIdOnly` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity` instance.

#### `TlsCertificatesAndHostnamesCustomCsrResponseSingle(data?: object)`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity` instance.

#### `TlsCertificatesAndHostnamesCustomCsrResponseSingle2(data?: object)`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseSingle2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity` instance.

#### `TlsCertificatesAndHostnamesCustomHostnameQuota(data?: object)`

Create a new `TlsCertificatesAndHostnamesCustomHostnameQuota` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesCustomHostnameQuotaEntity` instance.

#### `TlsCertificatesAndHostnamesCustomHostnameResponseCollection(data?: object)`

Create a new `TlsCertificatesAndHostnamesCustomHostnameResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity` instance.

#### `TlsCertificatesAndHostnamesCustomHostnameResponseSingle(data?: object)`

Create a new `TlsCertificatesAndHostnamesCustomHostnameResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity` instance.

#### `TlsCertificatesAndHostnamesCustomTrustStoreResponse(data?: object)`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponse` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity` instance.

#### `TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly(data?: object)`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity` instance.

#### `TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle(data?: object)`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity` instance.

#### `TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack(data?: object)`

Create a new `TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity` instance.

#### `TlsCertificatesAndHostnamesEnabled(data?: object)`

Create a new `TlsCertificatesAndHostnamesEnabled` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesEnabledEntity` instance.

#### `TlsCertificatesAndHostnamesFallbackOrigin(data?: object)`

Create a new `TlsCertificatesAndHostnamesFallbackOrigin` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesFallbackOriginEntity` instance.

#### `TlsCertificatesAndHostnamesHostnameAopResponseCollection(data?: object)`

Create a new `TlsCertificatesAndHostnamesHostnameAopResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity` instance.

#### `TlsCertificatesAndHostnamesHostnameAopSingle(data?: object)`

Create a new `TlsCertificatesAndHostnamesHostnameAopSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesHostnameAopSingleEntity` instance.

#### `TlsCertificatesAndHostnamesHostnameAssocResponseCollection(data?: object)`

Create a new `TlsCertificatesAndHostnamesHostnameAssocResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity` instance.

#### `TlsCertificatesAndHostnamesKeylessResponseCollection(data?: object)`

Create a new `TlsCertificatesAndHostnamesKeylessResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesKeylessResponseCollectionEntity` instance.

#### `TlsCertificatesAndHostnamesKeylessResponseSingle(data?: object)`

Create a new `TlsCertificatesAndHostnamesKeylessResponseSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesKeylessResponseSingleEntity` instance.

#### `TlsCertificatesAndHostnamesKeylessResponseSingleId(data?: object)`

Create a new `TlsCertificatesAndHostnamesKeylessResponseSingleId` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity` instance.

#### `TlsCertificatesAndHostnamesPerHostnameSetting(data?: object)`

Create a new `TlsCertificatesAndHostnamesPerHostnameSetting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesPerHostnameSettingEntity` instance.

#### `TlsCertificatesAndHostnamesPerHostnameSettingsResponse(data?: object)`

Create a new `TlsCertificatesAndHostnamesPerHostnameSettingsResponse` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity` instance.

#### `TlsCertificatesAndHostnamesPerHostnameSettingsResponse2(data?: object)`

Create a new `TlsCertificatesAndHostnamesPerHostnameSettingsResponse2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity` instance.

#### `TlsCertificatesAndHostnamesSslUniversalSetting(data?: object)`

Create a new `TlsCertificatesAndHostnamesSslUniversalSetting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesSslUniversalSettingEntity` instance.

#### `TlsCertificatesAndHostnamesSslValidationMethodResponse(data?: object)`

Create a new `TlsCertificatesAndHostnamesSslValidationMethodResponse` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesSslValidationMethodResponseEntity` instance.

#### `TlsCertificatesAndHostnamesSslVerificationResponseCollection(data?: object)`

Create a new `TlsCertificatesAndHostnamesSslVerificationResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity` instance.

#### `TlsCertificatesAndHostnamesTotalTlsSetting(data?: object)`

Create a new `TlsCertificatesAndHostnamesTotalTlsSetting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TlsCertificatesAndHostnamesTotalTlsSettingEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `CloudflareSslSDK.test()`.

**Returns:** `CloudflareSslSDK` instance in test mode.


---

## CacheApiResponseSingleIdEntity

```ts
const cache_api_response_single_id = client.CacheApiResponseSingleId()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes | Indicates the API call's success or failure. |
| `value` | `string` | Yes | Controls enablement of Automatic SSL/TLS. |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CacheApiResponseSingleId().update({
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CacheApiResponseSingleIdEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CacheAutoOriginTlsKexEntity

```ts
const cache_auto_origin_tls_kex = client.CacheAutoOriginTlsKex()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | Yes | Controls enablement of Auto-Origin TLS KEX selection for the zone. |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes | Indicates the API call's success or failure. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CacheAutoOriginTlsKex().list({ zone_id: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CacheAutoOriginTlsKex().update({
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CacheAutoOriginTlsKexEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomHostnameEntity

```ts
const custom_hostname = client.CustomHostname()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.CustomHostname().remove({ id: 'id', zone_id: 'zone_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomHostnameEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomHostnameForAZoneEntity

```ts
const custom_hostname_for_a_zone = client.CustomHostnameForAZone()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_certificate` | `string` | Yes | If a custom uploaded certificate is used. |
| `custom_key` | `string` | Yes | The key for a custom uploaded certificate. |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.CustomHostnameForAZone().remove({ certificate_id: 'certificate_id', certificate_pack_id: 'certificate_pack_id', custom_hostname_id: 'custom_hostname_id', zone_id: 'zone_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CustomHostnameForAZone().update({
  certificate_id: 'certificate_id',
  certificate_pack_id: 'certificate_pack_id',
  custom_hostname_id: 'custom_hostname_id',
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomHostnameForAZoneEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OriginTlEntity

```ts
const origin_tl = client.OriginTl()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Record<string, any>` | No |  |
| `value` | `any[]` | Yes | List of TLS compliance modes that constrain the key-exchange algorithms Cloudflare may use when establishing the TLS connection to the zone's origin. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.OriginTl().load({ zone_id: 'zone_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.OriginTl().remove({ zone_id: 'zone_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.OriginTl().update({
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OriginTlEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RecommendationEntity

```ts
const recommendation = client.Recommendation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes | Indicates the API call's success or failure. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Recommendation().list({ zone_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RecommendationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SslAutomaticModeEntity

```ts
const ssl_automatic_mode = client.SslAutomaticMode()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes | Indicates the API call's success or failure. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SslAutomaticMode().list({ zone_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SslAutomaticModeEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity

```ts
const tls_certificates_and_hostnames_advanced_certificate_pack_response = client.TlsCertificatesAndHostnamesAdvancedCertificatePackResponse()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificate_authority` | `string` | Yes | Certificate Authority selected for the order. |
| `cloudflare_branding` | `boolean` | No | Whether or not to add Cloudflare Branding for the order. |
| `hosts` | `any[]` | Yes | Comma separated list of valid host names for the certificate packs. |
| `type` | `string` | Yes | Type of certificate pack. |
| `validation_method` | `string` | Yes | Validation Method selected for the order. |
| `validity_days` | `number` | Yes | Validity Days selected for the order. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TlsCertificatesAndHostnamesAdvancedCertificatePackResponse().create({
  zone_id: 'example_zone_id',
  certificate_authority: 'example_certificate_authority',
  hosts: [],
  type: 'example_type',
  validation_method: 'example_validation_method',
  validity_days: 1,
})
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TlsCertificatesAndHostnamesAdvancedCertificatePackResponse().update({
  certificate_pack_id: 'certificate_pack_id',
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesAssociationResponseCollectionEntity

```ts
const tls_certificates_and_hostnames_association_response_collection = client.TlsCertificatesAndHostnamesAssociationResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TlsCertificatesAndHostnamesAssociationResponseCollection().list({ account_id: "example", mtls_certificate_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesAssociationResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesCertificateAnalyzeEntity

```ts
const tls_certificates_and_hostnames_certificate_analyze = client.TlsCertificatesAndHostnamesCertificateAnalyze()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bundle_method` | `string` | No | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| `certificate` | `string` | No | The zone's SSL certificate or certificate and the intermediate(s). |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TlsCertificatesAndHostnamesCertificateAnalyze().create({
  zone_id: 'example_zone_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesCertificateAnalyzeEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesCertificatePackQuotaEntity

```ts
const tls_certificates_and_hostnames_certificate_pack_quota = client.TlsCertificatesAndHostnamesCertificatePackQuota()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TlsCertificatesAndHostnamesCertificatePackQuota().load({ zone_id: 'zone_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesCertificatePackQuotaEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity

```ts
const tls_certificates_and_hostnames_certificate_pack_response_collection = client.TlsCertificatesAndHostnamesCertificatePackResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TlsCertificatesAndHostnamesCertificatePackResponseCollection().list({ zone_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity

```ts
const tls_certificates_and_hostnames_certificate_pack_response_single = client.TlsCertificatesAndHostnamesCertificatePackResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Record<string, any>` | Yes | A certificate pack with all its properties. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TlsCertificatesAndHostnamesCertificatePackResponseSingle().load({ certificate_pack_id: 'certificate_pack_id', zone_id: 'zone_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesCertificateResponseCollectionEntity

```ts
const tls_certificates_and_hostnames_certificate_response_collection = client.TlsCertificatesAndHostnamesCertificateResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificates` | `any[]` | Yes | Array of ordered certificates. |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TlsCertificatesAndHostnamesCertificateResponseCollection().list({ zone_id: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TlsCertificatesAndHostnamesCertificateResponseCollection().update({
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesCertificateResponseCollection3Entity

```ts
const tls_certificates_and_hostnames_certificate_response_collection_3 = client.TlsCertificatesAndHostnamesCertificateResponseCollection3()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TlsCertificatesAndHostnamesCertificateResponseCollection3().list({ zone_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection3Entity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesCertificateResponseCollection4Entity

```ts
const tls_certificates_and_hostnames_certificate_response_collection_4 = client.TlsCertificatesAndHostnamesCertificateResponseCollection4()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TlsCertificatesAndHostnamesCertificateResponseCollection4().list({ zone_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection4Entity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesCertificateResponseCollection5Entity

```ts
const tls_certificates_and_hostnames_certificate_response_collection_5 = client.TlsCertificatesAndHostnamesCertificateResponseCollection5()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |
| `result_info` | `Record<string, any>` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TlsCertificatesAndHostnamesCertificateResponseCollection5().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection5Entity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity

```ts
const tls_certificates_and_hostnames_certificate_response_id_only = client.TlsCertificatesAndHostnamesCertificateResponseIdOnly()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TlsCertificatesAndHostnamesCertificateResponseIdOnly().remove({ custom_certificate_id: 'custom_certificate_id', zone_id: 'zone_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesCertificateResponseSingleEntity

```ts
const tls_certificates_and_hostnames_certificate_response_single = client.TlsCertificatesAndHostnamesCertificateResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bundle_method` | `string` | No | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| `certificate` | `string` | Yes | The zone's SSL certificate or certificate and the intermediate(s). |
| `custom_csr_id` | `string` | No | The identifier for the Custom CSR that was used. |
| `deploy` | `string` | No | The environment to deploy the certificate to, defaults to production. |
| `geo_restrictions` | `Record<string, any>` | No | Specify the region where your private key can be held locally for optimal TLS performance. |
| `policy` | `string` | No | Specify the policy that determines the region where your private key will be held locally. |
| `private_key` | `string` | No | The zone's private key. |
| `result` | `Record<string, any>` | Yes |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TlsCertificatesAndHostnamesCertificateResponseSingle().create({
  zone_id: 'example_zone_id',
  certificate: 'example_certificate',
  result: {},
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TlsCertificatesAndHostnamesCertificateResponseSingle().load({ custom_certificate_id: 'custom_certificate_id', zone_id: 'zone_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TlsCertificatesAndHostnamesCertificateResponseSingle().update({
  custom_certificate_id: 'custom_certificate_id',
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesCertificateResponseSingle2Entity

```ts
const tls_certificates_and_hostnames_certificate_response_single_2 = client.TlsCertificatesAndHostnamesCertificateResponseSingle2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `csr` | `string` | Yes | The Certificate Signing Request (CSR). |
| `hostnames` | `any[]` | Yes | Array of hostnames or wildcard names bound to the certificate. |
| `request_type` | `string` | Yes | Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa), or "keyless-certificate" (for Keyless SSL servers). |
| `requested_validity` | `number` | No | The number of days for which the certificate should be valid. |
| `result` | `Record<string, any>` | Yes |  |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `csr` | - | - | - |
| `hostnames` | - | - | - |
| `request_type` | - | - | - |
| `requested_validity` | - | - | - |
| `result` | - | Yes | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TlsCertificatesAndHostnamesCertificateResponseSingle2().create({
  csr: 'example_csr',
  hostnames: [],
  request_type: 'example_request_type',
  result: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TlsCertificatesAndHostnamesCertificateResponseSingle2().list({ zone_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TlsCertificatesAndHostnamesCertificateResponseSingle2().load({ certificate_id: 'certificate_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle2Entity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesCertificateResponseSingle3Entity

```ts
const tls_certificates_and_hostnames_certificate_response_single_3 = client.TlsCertificatesAndHostnamesCertificateResponseSingle3()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificate` | `string` | Yes | The zone's leaf certificate. |
| `private_key` | `string` | Yes | The zone's private key. |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TlsCertificatesAndHostnamesCertificateResponseSingle3().create({
  zone_id: 'example_zone_id',
  certificate: 'example_certificate',
  private_key: 'example_private_key',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TlsCertificatesAndHostnamesCertificateResponseSingle3().load({ certificate_id: 'certificate_id', zone_id: 'zone_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TlsCertificatesAndHostnamesCertificateResponseSingle3().remove({ certificate_id: 'certificate_id', zone_id: 'zone_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle3Entity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesCertificateResponseSingle4Entity

```ts
const tls_certificates_and_hostnames_certificate_response_single_4 = client.TlsCertificatesAndHostnamesCertificateResponseSingle4()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificate` | `string` | Yes | The hostname certificate. |
| `private_key` | `string` | Yes | The hostname certificate's private key. |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TlsCertificatesAndHostnamesCertificateResponseSingle4().create({
  zone_id: 'example_zone_id',
  certificate: 'example_certificate',
  private_key: 'example_private_key',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TlsCertificatesAndHostnamesCertificateResponseSingle4().load({ certificate_id: 'certificate_id', zone_id: 'zone_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TlsCertificatesAndHostnamesCertificateResponseSingle4().remove({ certificate_id: 'certificate_id', zone_id: 'zone_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle4Entity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesCertificateResponseSingle5Entity

```ts
const tls_certificates_and_hostnames_certificate_response_single_5 = client.TlsCertificatesAndHostnamesCertificateResponseSingle5()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TlsCertificatesAndHostnamesCertificateResponseSingle5().load({ account_id: 'account_id', mtls_certificate_id: 'mtls_certificate_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TlsCertificatesAndHostnamesCertificateResponseSingle5().remove({ account_id: 'account_id', mtls_certificate_id: 'mtls_certificate_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle5Entity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity

```ts
const tls_certificates_and_hostnames_certificate_response_single_post = client.TlsCertificatesAndHostnamesCertificateResponseSinglePost()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ca` | `boolean` | Yes | Indicates whether the certificate is a CA or leaf certificate. |
| `certificates` | `string` | Yes | The uploaded root CA certificate. |
| `name` | `string` | No | Optional unique name for the certificate. |
| `private_key` | `string` | No | The private key for the certificate. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TlsCertificatesAndHostnamesCertificateResponseSinglePost().create({
  account_id: 'example_account_id',
  ca: true,
  certificates: 'example_certificates',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesCertificateRevokeEntity

```ts
const tls_certificates_and_hostnames_certificate_revoke = client.TlsCertificatesAndHostnamesCertificateRevoke()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TlsCertificatesAndHostnamesCertificateRevoke().remove({ certificate_id: 'certificate_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesCertificateRevokeEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesClientCertificateResponseEntity

```ts
const tls_certificates_and_hostnames_client_certificate_response = client.TlsCertificatesAndHostnamesClientCertificateResponse()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TlsCertificatesAndHostnamesClientCertificateResponse().list({ zone_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesClientCertificateResponseEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity

```ts
const tls_certificates_and_hostnames_client_certificate_response_single = client.TlsCertificatesAndHostnamesClientCertificateResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `csr` | `string` | Yes | The Certificate Signing Request (CSR). |
| `reactivate` | `boolean` | No |  |
| `result` | `Record<string, any>` | No |  |
| `validity_days` | `number` | Yes | The number of days the Client Certificate will be valid after the issued_on date. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TlsCertificatesAndHostnamesClientCertificateResponseSingle().create({
  zone_id: 'example_zone_id',
  csr: 'example_csr',
  validity_days: 1,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TlsCertificatesAndHostnamesClientCertificateResponseSingle().load({ client_certificate_id: 'client_certificate_id', zone_id: 'zone_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TlsCertificatesAndHostnamesClientCertificateResponseSingle().remove({ client_certificate_id: 'client_certificate_id', zone_id: 'zone_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TlsCertificatesAndHostnamesClientCertificateResponseSingle().update({
  client_certificate_id: 'client_certificate_id',
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity

```ts
const tls_certificates_and_hostnames_custom_csr_response_collection = client.TlsCertificatesAndHostnamesCustomCsrResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TlsCertificatesAndHostnamesCustomCsrResponseCollection().list({ zone_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity

```ts
const tls_certificates_and_hostnames_custom_csr_response_collection_2 = client.TlsCertificatesAndHostnamesCustomCsrResponseCollection2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TlsCertificatesAndHostnamesCustomCsrResponseCollection2().list({ account_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity

```ts
const tls_certificates_and_hostnames_custom_csr_response_id_only = client.TlsCertificatesAndHostnamesCustomCsrResponseIdOnly()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TlsCertificatesAndHostnamesCustomCsrResponseIdOnly().remove({ custom_csr_id: 'custom_csr_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity

```ts
const tls_certificates_and_hostnames_custom_csr_response_single = client.TlsCertificatesAndHostnamesCustomCsrResponseSingle()
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
| `result` | `Record<string, any>` | Yes | A custom Certificate Signing Request (CSR). |
| `sans` | `any[]` | Yes | Subject Alternative Names for the CSR. |
| `state` | `string` | Yes | State or province name. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TlsCertificatesAndHostnamesCustomCsrResponseSingle().create({
  zone_id: 'example_zone_id',
  common_name: 'example_common_name',
  country: 'example_country',
  locality: 'example_locality',
  organization: 'example_organization',
  result: {},
  sans: [],
  state: 'example_state',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TlsCertificatesAndHostnamesCustomCsrResponseSingle().load({ custom_csr_id: 'custom_csr_id', zone_id: 'zone_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity

```ts
const tls_certificates_and_hostnames_custom_csr_response_single_2 = client.TlsCertificatesAndHostnamesCustomCsrResponseSingle2()
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
| `result` | `Record<string, any>` | Yes | A custom Certificate Signing Request (CSR). |
| `sans` | `any[]` | Yes | Subject Alternative Names for the CSR. |
| `state` | `string` | Yes | State or province name. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TlsCertificatesAndHostnamesCustomCsrResponseSingle2().create({
  account_id: 'example_account_id',
  common_name: 'example_common_name',
  country: 'example_country',
  locality: 'example_locality',
  organization: 'example_organization',
  result: {},
  sans: [],
  state: 'example_state',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TlsCertificatesAndHostnamesCustomCsrResponseSingle2().load({ account_id: 'account_id', custom_csr_id: 'custom_csr_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesCustomHostnameQuotaEntity

```ts
const tls_certificates_and_hostnames_custom_hostname_quota = client.TlsCertificatesAndHostnamesCustomHostnameQuota()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes | Informational messages returned by the custom hostname API. |
| `result` | `Record<string, any>` | Yes |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TlsCertificatesAndHostnamesCustomHostnameQuota().list({ zone_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesCustomHostnameQuotaEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity

```ts
const tls_certificates_and_hostnames_custom_hostname_response_collection = client.TlsCertificatesAndHostnamesCustomHostnameResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes | Informational messages returned by the custom hostname API. |
| `result` | `any[]` | No |  |
| `result_info` | `Record<string, any>` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TlsCertificatesAndHostnamesCustomHostnameResponseCollection().list({ zone_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity

```ts
const tls_certificates_and_hostnames_custom_hostname_response_single = client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_metadata` | `Record<string, any>` | No | Unique key/value metadata for this hostname. |
| `custom_origin_server` | `string` | No | a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record. |
| `custom_origin_sni` | `string` | No | A hostname that will be sent to your custom origin server as SNI for TLS handshake. |
| `errors` | `any[]` | Yes |  |
| `hostname` | `string` | Yes | The custom hostname that will point to your hostname via CNAME. |
| `messages` | `any[]` | Yes | Informational messages returned by the custom hostname API. |
| `result` | `Record<string, any>` | No |  |
| `ssl` | `Record<string, any>` | No | SSL properties used when creating the custom hostname. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle().create({
  zone_id: 'example_zone_id',
  errors: [],
  hostname: 'example_hostname',
  messages: [],
  success: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle().load({ custom_hostname_id: 'custom_hostname_id', zone_id: 'zone_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle().update({
  custom_hostname_id: 'custom_hostname_id',
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity

```ts
const tls_certificates_and_hostnames_custom_trust_store_response = client.TlsCertificatesAndHostnamesCustomTrustStoreResponse()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TlsCertificatesAndHostnamesCustomTrustStoreResponse().list({ zone_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity

```ts
const tls_certificates_and_hostnames_custom_trust_store_response_id_only = client.TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly().remove({ custom_origin_trust_store_id: 'custom_origin_trust_store_id', zone_id: 'zone_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity

```ts
const tls_certificates_and_hostnames_custom_trust_store_response_single = client.TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificate` | `string` | Yes | The root CA certificate in PEM format. |
| `result` | `Record<string, any>` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle().create({
  zone_id: 'example_zone_id',
  certificate: 'example_certificate',
  result: {},
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle().load({ custom_origin_trust_store_id: 'custom_origin_trust_store_id', zone_id: 'zone_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity

```ts
const tls_certificates_and_hostnames_delete_advanced_certificate_pack = client.TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack().remove({ id: 'id', zone_id: 'zone_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesEnabledEntity

```ts
const tls_certificates_and_hostnames_enabled = client.TlsCertificatesAndHostnamesEnabled()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | Yes | Indicates whether zone-level authenticated origin pulls is enabled. |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TlsCertificatesAndHostnamesEnabled().load({ zone_id: 'zone_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TlsCertificatesAndHostnamesEnabled().update({
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesEnabledEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesFallbackOriginEntity

```ts
const tls_certificates_and_hostnames_fallback_origin = client.TlsCertificatesAndHostnamesFallbackOrigin()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `origin` | `string` | Yes | Your origin hostname that requests to your custom hostnames will be sent to. |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TlsCertificatesAndHostnamesFallbackOrigin().load({ zone_id: 'zone_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TlsCertificatesAndHostnamesFallbackOrigin().remove({ zone_id: 'zone_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TlsCertificatesAndHostnamesFallbackOrigin().update({
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesFallbackOriginEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity

```ts
const tls_certificates_and_hostnames_hostname_aop_response_collection = client.TlsCertificatesAndHostnamesHostnameAopResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `any[]` | Yes |  |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TlsCertificatesAndHostnamesHostnameAopResponseCollection().update({
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesHostnameAopSingleEntity

```ts
const tls_certificates_and_hostnames_hostname_aop_single = client.TlsCertificatesAndHostnamesHostnameAopSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TlsCertificatesAndHostnamesHostnameAopSingle().load({ hostname: 'hostname', zone_id: 'zone_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesHostnameAopSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity

```ts
const tls_certificates_and_hostnames_hostname_assoc_response_collection = client.TlsCertificatesAndHostnamesHostnameAssocResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |
| `result_info` | `Record<string, any>` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TlsCertificatesAndHostnamesHostnameAssocResponseCollection().list({ zone_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesKeylessResponseCollectionEntity

```ts
const tls_certificates_and_hostnames_keyless_response_collection = client.TlsCertificatesAndHostnamesKeylessResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TlsCertificatesAndHostnamesKeylessResponseCollection().list({ zone_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesKeylessResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesKeylessResponseSingleEntity

```ts
const tls_certificates_and_hostnames_keyless_response_single = client.TlsCertificatesAndHostnamesKeylessResponseSingle()
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
| `result` | `Record<string, any>` | No |  |
| `tunnel` | `Record<string, any>` | Yes | Configuration for using Keyless SSL through a Cloudflare Tunnel. |

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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TlsCertificatesAndHostnamesKeylessResponseSingle().create({
  zone_id: 'example_zone_id',
  certificate: 'example_certificate',
  host: 'example_host',
  port: 1,
  tunnel: {},
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TlsCertificatesAndHostnamesKeylessResponseSingle().load({ keyless_certificate_id: 'keyless_certificate_id', zone_id: 'zone_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TlsCertificatesAndHostnamesKeylessResponseSingle().update({
  keyless_certificate_id: 'keyless_certificate_id',
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesKeylessResponseSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity

```ts
const tls_certificates_and_hostnames_keyless_response_single_id = client.TlsCertificatesAndHostnamesKeylessResponseSingleId()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TlsCertificatesAndHostnamesKeylessResponseSingleId().remove({ keyless_certificate_id: 'keyless_certificate_id', zone_id: 'zone_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesPerHostnameSettingEntity

```ts
const tls_certificates_and_hostnames_per_hostname_setting = client.TlsCertificatesAndHostnamesPerHostnameSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `result` | `Record<string, any>` | No |  |
| `value` | `any` | Yes | The TLS setting value. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TlsCertificatesAndHostnamesPerHostnameSetting().load({ hostname: 'hostname', setting_id: 'setting_id', zone_id: 'zone_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TlsCertificatesAndHostnamesPerHostnameSetting().update({
  hostname: 'hostname',
  setting_id: 'setting_id',
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesPerHostnameSettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity

```ts
const tls_certificates_and_hostnames_per_hostname_settings_response = client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |
| `result_info` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse().load({ setting_id: 'setting_id', zone_id: 'zone_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity

```ts
const tls_certificates_and_hostnames_per_hostname_settings_response2 = client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse2().remove({ hostname: 'hostname', setting_id: 'setting_id', zone_id: 'zone_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesSslUniversalSettingEntity

```ts
const tls_certificates_and_hostnames_ssl_universal_setting = client.TlsCertificatesAndHostnamesSslUniversalSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | No | Disabling Universal SSL removes any currently active Universal SSL certificates for your zone from the edge and prevents any future Universal SSL certificates from being ordered. |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TlsCertificatesAndHostnamesSslUniversalSetting().load({ zone_id: 'zone_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TlsCertificatesAndHostnamesSslUniversalSetting().update({
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesSslUniversalSettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesSslValidationMethodResponseEntity

```ts
const tls_certificates_and_hostnames_ssl_validation_method_response = client.TlsCertificatesAndHostnamesSslValidationMethodResponse()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `validation_method` | `string` | Yes | Desired validation method. |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TlsCertificatesAndHostnamesSslValidationMethodResponse().update({
  certificate_pack_id: 'certificate_pack_id',
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesSslValidationMethodResponseEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity

```ts
const tls_certificates_and_hostnames_ssl_verification_response_collection = client.TlsCertificatesAndHostnamesSslVerificationResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TlsCertificatesAndHostnamesSslVerificationResponseCollection().list({ zone_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TlsCertificatesAndHostnamesTotalTlsSettingEntity

```ts
const tls_certificates_and_hostnames_total_tls_setting = client.TlsCertificatesAndHostnamesTotalTlsSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificate_authority` | `string` | No | The Certificate Authority that Total TLS certificates will be issued through. |
| `enabled` | `boolean` | Yes | If enabled, Total TLS will order a hostname specific TLS certificate for any proxied A, AAAA, or CNAME record in your zone. |
| `result` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TlsCertificatesAndHostnamesTotalTlsSetting().create({
  zone_id: 'example_zone_id',
  enabled: true,
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TlsCertificatesAndHostnamesTotalTlsSetting().load({ zone_id: 'zone_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TlsCertificatesAndHostnamesTotalTlsSettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareSslSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ts
const client = new CloudflareSslSDK({
  feature: {
    test: { active: true },
  }
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

