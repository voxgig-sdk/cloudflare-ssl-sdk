# CloudflareSsl Python SDK Reference

Complete API reference for the CloudflareSsl Python SDK.


## CloudflareSslSDK

### Constructor

```python
from cloudflaressl_sdk import CloudflareSslSDK

client = CloudflareSslSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareSslSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = CloudflareSslSDK.test()
```


### Instance Methods

#### `CacheApiResponseSingleId(data=None)`

Create a new `CacheApiResponseSingleIdEntity` instance. Pass `None` for no initial data.

#### `CacheAutoOriginTlsKex(data=None)`

Create a new `CacheAutoOriginTlsKexEntity` instance. Pass `None` for no initial data.

#### `CustomHostname(data=None)`

Create a new `CustomHostnameEntity` instance. Pass `None` for no initial data.

#### `CustomHostnameForAZone(data=None)`

Create a new `CustomHostnameForAZoneEntity` instance. Pass `None` for no initial data.

#### `OriginTl(data=None)`

Create a new `OriginTlEntity` instance. Pass `None` for no initial data.

#### `Recommendation(data=None)`

Create a new `RecommendationEntity` instance. Pass `None` for no initial data.

#### `SslAutomaticMode(data=None)`

Create a new `SslAutomaticModeEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesAdvancedCertificatePackResponse(data=None)`

Create a new `TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesAssociationResponseCollection(data=None)`

Create a new `TlsCertificatesAndHostnamesAssociationResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateAnalyze(data=None)`

Create a new `TlsCertificatesAndHostnamesCertificateAnalyzeEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesCertificatePackQuota(data=None)`

Create a new `TlsCertificatesAndHostnamesCertificatePackQuotaEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesCertificatePackResponseCollection(data=None)`

Create a new `TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesCertificatePackResponseSingle(data=None)`

Create a new `TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseCollection(data=None)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseCollection3(data=None)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection3Entity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseCollection4(data=None)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection4Entity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseCollection5(data=None)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection5Entity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseIdOnly(data=None)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseSingle(data=None)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingleEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseSingle2(data=None)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle2Entity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseSingle3(data=None)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle3Entity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseSingle4(data=None)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle4Entity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseSingle5(data=None)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle5Entity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateResponseSinglePost(data=None)`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesCertificateRevoke(data=None)`

Create a new `TlsCertificatesAndHostnamesCertificateRevokeEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesClientCertificateResponse(data=None)`

Create a new `TlsCertificatesAndHostnamesClientCertificateResponseEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesClientCertificateResponseSingle(data=None)`

Create a new `TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse(data=None)`

Create a new `TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesCustomCsrResponseCollection(data=None)`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesCustomCsrResponseCollection2(data=None)`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesCustomCsrResponseIdOnly(data=None)`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesCustomCsrResponseSingle(data=None)`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesCustomCsrResponseSingle2(data=None)`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesCustomHostnameQuota(data=None)`

Create a new `TlsCertificatesAndHostnamesCustomHostnameQuotaEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesCustomHostnameResponseCollection(data=None)`

Create a new `TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesCustomHostnameResponseSingle(data=None)`

Create a new `TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesCustomTrustStoreResponse(data=None)`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly(data=None)`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle(data=None)`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesDcvDelegation(data=None)`

Create a new `TlsCertificatesAndHostnamesDcvDelegationEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack(data=None)`

Create a new `TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesEnabled(data=None)`

Create a new `TlsCertificatesAndHostnamesEnabledEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesFallbackOrigin(data=None)`

Create a new `TlsCertificatesAndHostnamesFallbackOriginEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesHostnameAopResponseCollection(data=None)`

Create a new `TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesHostnameAopSingle(data=None)`

Create a new `TlsCertificatesAndHostnamesHostnameAopSingleEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesHostnameAssocResponseCollection(data=None)`

Create a new `TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesHostnameAssociation(data=None)`

Create a new `TlsCertificatesAndHostnamesHostnameAssociationEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesKeylessResponseCollection(data=None)`

Create a new `TlsCertificatesAndHostnamesKeylessResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesKeylessResponseSingle(data=None)`

Create a new `TlsCertificatesAndHostnamesKeylessResponseSingleEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesKeylessResponseSingleId(data=None)`

Create a new `TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesPerHostnameSetting(data=None)`

Create a new `TlsCertificatesAndHostnamesPerHostnameSettingEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesPerHostnameSettingsResponse(data=None)`

Create a new `TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesPerHostnameSettingsResponse2(data=None)`

Create a new `TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesSslUniversalSetting(data=None)`

Create a new `TlsCertificatesAndHostnamesSslUniversalSettingEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesSslValidationMethodResponse(data=None)`

Create a new `TlsCertificatesAndHostnamesSslValidationMethodResponseEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesSslVerificationResponseCollection(data=None)`

Create a new `TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `TlsCertificatesAndHostnamesTotalTlsSetting(data=None)`

Create a new `TlsCertificatesAndHostnamesTotalTlsSettingEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## CacheApiResponseSingleIdEntity

```python
cache_api_response_single_id = client.CacheApiResponseSingleId()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `success` | `bool` | Yes | Indicates the API call's success or failure. |
| `value` | `str` | Yes | Controls enablement of Automatic SSL/TLS. |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.CacheApiResponseSingleId().update({
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CacheApiResponseSingleIdEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CacheAutoOriginTlsKexEntity

```python
cache_auto_origin_tls_kex = client.CacheAutoOriginTlsKex()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `bool` | Yes | Controls enablement of Auto-Origin TLS KEX selection for the zone. |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `success` | `bool` | Yes | Indicates the API call's success or failure. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CacheAutoOriginTlsKex().list({"zone_id": "example"})
for cache_auto_origin_tls_kex in results:
    print(cache_auto_origin_tls_kex)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.CacheAutoOriginTlsKex().update({
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CacheAutoOriginTlsKexEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomHostnameEntity

```python
custom_hostname = client.CustomHostname()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.CustomHostname().remove({"id": "id", "zone_id": "zone_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomHostnameEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomHostnameForAZoneEntity

```python
custom_hostname_for_a_zone = client.CustomHostnameForAZone()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_certificate` | `str` | Yes | If a custom uploaded certificate is used. |
| `custom_key` | `str` | Yes | The key for a custom uploaded certificate. |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.CustomHostnameForAZone().remove({"certificate_id": "certificate_id", "certificate_pack_id": "certificate_pack_id", "custom_hostname_id": "custom_hostname_id", "zone_id": "zone_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.CustomHostnameForAZone().update({
    "certificate_id": "certificate_id",
    "certificate_pack_id": "certificate_pack_id",
    "custom_hostname_id": "custom_hostname_id",
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomHostnameForAZoneEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OriginTlEntity

```python
origin_tl = client.OriginTl()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | No |  |
| `value` | `list` | Yes | List of TLS compliance modes that constrain the key-exchange algorithms Cloudflare may use when establishing the TLS connection to the zone's origin. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.OriginTl().load({"zone_id": "zone_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.OriginTl().remove({"zone_id": "zone_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.OriginTl().update({
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OriginTlEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RecommendationEntity

```python
recommendation = client.Recommendation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `success` | `bool` | Yes | Indicates the API call's success or failure. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Recommendation().list({"zone_id": "example"})
for recommendation in results:
    print(recommendation)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RecommendationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SslAutomaticModeEntity

```python
ssl_automatic_mode = client.SslAutomaticMode()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes |  |
| `success` | `bool` | Yes | Indicates the API call's success or failure. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SslAutomaticMode().list({"zone_id": "example"})
for ssl_automatic_mode in results:
    print(ssl_automatic_mode)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SslAutomaticModeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity

```python
tls_certificates_and_hostnames_advanced_certificate_pack_response = client.TlsCertificatesAndHostnamesAdvancedCertificatePackResponse()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificate_authority` | `str` | Yes | Certificate Authority selected for the order. |
| `cloudflare_branding` | `bool` | No | Whether or not to add Cloudflare Branding for the order. |
| `hosts` | `list` | Yes | Comma separated list of valid host names for the certificate packs. |
| `type` | `str` | Yes | Type of certificate pack. |
| `validation_method` | `str` | Yes | Validation Method selected for the order. |
| `validity_days` | `int` | Yes | Validity Days selected for the order. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesAdvancedCertificatePackResponse().create({
    "zone_id": "example_zone_id",  # str
    "certificate_authority": "example_certificate_authority",  # str
    "hosts": [],  # list
    "type": "example_type",  # str
    "validation_method": "example_validation_method",  # str
    "validity_days": 1,  # int
})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesAdvancedCertificatePackResponse().update({
    "certificate_pack_id": "certificate_pack_id",
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesAssociationResponseCollectionEntity

```python
tls_certificates_and_hostnames_association_response_collection = client.TlsCertificatesAndHostnamesAssociationResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TlsCertificatesAndHostnamesAssociationResponseCollection().list({"account_id": "example", "mtls_certificate_id": "example"})
for tls_certificates_and_hostnames_association_response_collection in results:
    print(tls_certificates_and_hostnames_association_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesAssociationResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateAnalyzeEntity

```python
tls_certificates_and_hostnames_certificate_analyze = client.TlsCertificatesAndHostnamesCertificateAnalyze()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bundle_method` | `str` | No | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| `certificate` | `str` | No | The zone's SSL certificate or certificate and the intermediate(s). |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesCertificateAnalyze().create({
    "zone_id": "example_zone_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateAnalyzeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificatePackQuotaEntity

```python
tls_certificates_and_hostnames_certificate_pack_quota = client.TlsCertificatesAndHostnamesCertificatePackQuota()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesCertificatePackQuota().load({"zone_id": "zone_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificatePackQuotaEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity

```python
tls_certificates_and_hostnames_certificate_pack_response_collection = client.TlsCertificatesAndHostnamesCertificatePackResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TlsCertificatesAndHostnamesCertificatePackResponseCollection().list({"zone_id": "example"})
for tls_certificates_and_hostnames_certificate_pack_response_collection in results:
    print(tls_certificates_and_hostnames_certificate_pack_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity

```python
tls_certificates_and_hostnames_certificate_pack_response_single = client.TlsCertificatesAndHostnamesCertificatePackResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | Yes | A certificate pack with all its properties. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesCertificatePackResponseSingle().load({"certificate_pack_id": "certificate_pack_id", "zone_id": "zone_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseCollectionEntity

```python
tls_certificates_and_hostnames_certificate_response_collection = client.TlsCertificatesAndHostnamesCertificateResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificates` | `list` | Yes | Array of ordered certificates. |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TlsCertificatesAndHostnamesCertificateResponseCollection().list({"zone_id": "example"})
for tls_certificates_and_hostnames_certificate_response_collection in results:
    print(tls_certificates_and_hostnames_certificate_response_collection)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesCertificateResponseCollection().update({
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseCollection3Entity

```python
tls_certificates_and_hostnames_certificate_response_collection_3 = client.TlsCertificatesAndHostnamesCertificateResponseCollection3()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TlsCertificatesAndHostnamesCertificateResponseCollection3().list({"zone_id": "example"})
for tls_certificates_and_hostnames_certificate_response_collection_3 in results:
    print(tls_certificates_and_hostnames_certificate_response_collection_3)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection3Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseCollection4Entity

```python
tls_certificates_and_hostnames_certificate_response_collection_4 = client.TlsCertificatesAndHostnamesCertificateResponseCollection4()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TlsCertificatesAndHostnamesCertificateResponseCollection4().list({"zone_id": "example"})
for tls_certificates_and_hostnames_certificate_response_collection_4 in results:
    print(tls_certificates_and_hostnames_certificate_response_collection_4)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection4Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseCollection5Entity

```python
tls_certificates_and_hostnames_certificate_response_collection_5 = client.TlsCertificatesAndHostnamesCertificateResponseCollection5()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |
| `result_info` | `dict` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TlsCertificatesAndHostnamesCertificateResponseCollection5().list({"account_id": "example"})
for tls_certificates_and_hostnames_certificate_response_collection_5 in results:
    print(tls_certificates_and_hostnames_certificate_response_collection_5)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseCollection5Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity

```python
tls_certificates_and_hostnames_certificate_response_id_only = client.TlsCertificatesAndHostnamesCertificateResponseIdOnly()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TlsCertificatesAndHostnamesCertificateResponseIdOnly().remove({"custom_certificate_id": "custom_certificate_id", "zone_id": "zone_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseSingleEntity

```python
tls_certificates_and_hostnames_certificate_response_single = client.TlsCertificatesAndHostnamesCertificateResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bundle_method` | `str` | No | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| `certificate` | `str` | Yes | The zone's SSL certificate or certificate and the intermediate(s). |
| `custom_csr_id` | `str` | No | The identifier for the Custom CSR that was used. |
| `deploy` | `str` | No | The environment to deploy the certificate to, defaults to production. |
| `geo_restrictions` | `dict` | No | Specify the region where your private key can be held locally for optimal TLS performance. |
| `policy` | `str` | No | Specify the policy that determines the region where your private key will be held locally. |
| `private_key` | `str` | No | The zone's private key. |
| `result` | `dict` | Yes |  |
| `type` | `str` | No | The type 'legacy_custom' enables support for legacy clients which do not include SNI in the TLS handshake. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesCertificateResponseSingle().create({
    "zone_id": "example_zone_id",  # str
    "certificate": "example_certificate",  # str
    "result": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesCertificateResponseSingle().load({"custom_certificate_id": "custom_certificate_id", "zone_id": "zone_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesCertificateResponseSingle().update({
    "custom_certificate_id": "custom_certificate_id",
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseSingle2Entity

```python
tls_certificates_and_hostnames_certificate_response_single_2 = client.TlsCertificatesAndHostnamesCertificateResponseSingle2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `csr` | `str` | Yes | The Certificate Signing Request (CSR). |
| `hostnames` | `list` | Yes | Array of hostnames or wildcard names bound to the certificate. |
| `request_type` | `str` | Yes | Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa), or "keyless-certificate" (for Keyless SSL servers). |
| `requested_validity` | `float` | No | The number of days for which the certificate should be valid. |
| `result` | `dict` | Yes |  |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `csr` | - | - | - |
| `hostnames` | - | - | - |
| `request_type` | - | - | - |
| `requested_validity` | - | - | - |
| `result` | - | Yes | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesCertificateResponseSingle2().create({
    "csr": "example_csr",  # str
    "hostnames": [],  # list
    "request_type": "example_request_type",  # str
    "result": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TlsCertificatesAndHostnamesCertificateResponseSingle2().list({"zone_id": "example"})
for tls_certificates_and_hostnames_certificate_response_single_2 in results:
    print(tls_certificates_and_hostnames_certificate_response_single_2)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesCertificateResponseSingle2().load({"certificate_id": "certificate_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseSingle3Entity

```python
tls_certificates_and_hostnames_certificate_response_single_3 = client.TlsCertificatesAndHostnamesCertificateResponseSingle3()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificate` | `str` | Yes | The zone's leaf certificate. |
| `private_key` | `str` | Yes | The zone's private key. |
| `result` | `dict` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesCertificateResponseSingle3().create({
    "zone_id": "example_zone_id",  # str
    "certificate": "example_certificate",  # str
    "private_key": "example_private_key",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesCertificateResponseSingle3().load({"certificate_id": "certificate_id", "zone_id": "zone_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TlsCertificatesAndHostnamesCertificateResponseSingle3().remove({"certificate_id": "certificate_id", "zone_id": "zone_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle3Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseSingle4Entity

```python
tls_certificates_and_hostnames_certificate_response_single_4 = client.TlsCertificatesAndHostnamesCertificateResponseSingle4()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificate` | `str` | Yes | The hostname certificate. |
| `private_key` | `str` | Yes | The hostname certificate's private key. |
| `result` | `dict` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesCertificateResponseSingle4().create({
    "zone_id": "example_zone_id",  # str
    "certificate": "example_certificate",  # str
    "private_key": "example_private_key",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesCertificateResponseSingle4().load({"certificate_id": "certificate_id", "zone_id": "zone_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TlsCertificatesAndHostnamesCertificateResponseSingle4().remove({"certificate_id": "certificate_id", "zone_id": "zone_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle4Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseSingle5Entity

```python
tls_certificates_and_hostnames_certificate_response_single_5 = client.TlsCertificatesAndHostnamesCertificateResponseSingle5()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesCertificateResponseSingle5().load({"account_id": "account_id", "mtls_certificate_id": "mtls_certificate_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TlsCertificatesAndHostnamesCertificateResponseSingle5().remove({"account_id": "account_id", "mtls_certificate_id": "mtls_certificate_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSingle5Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity

```python
tls_certificates_and_hostnames_certificate_response_single_post = client.TlsCertificatesAndHostnamesCertificateResponseSinglePost()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ca` | `bool` | Yes | Indicates whether the certificate is a CA or leaf certificate. |
| `certificates` | `str` | Yes | The uploaded root CA certificate. |
| `name` | `str` | No | Optional unique name for the certificate. |
| `private_key` | `str` | No | The private key for the certificate. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesCertificateResponseSinglePost().create({
    "account_id": "example_account_id",  # str
    "ca": True,  # bool
    "certificates": "example_certificates",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesCertificateRevokeEntity

```python
tls_certificates_and_hostnames_certificate_revoke = client.TlsCertificatesAndHostnamesCertificateRevoke()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TlsCertificatesAndHostnamesCertificateRevoke().remove({"certificate_id": "certificate_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCertificateRevokeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesClientCertificateResponseEntity

```python
tls_certificates_and_hostnames_client_certificate_response = client.TlsCertificatesAndHostnamesClientCertificateResponse()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TlsCertificatesAndHostnamesClientCertificateResponse().list({"zone_id": "example"})
for tls_certificates_and_hostnames_client_certificate_response in results:
    print(tls_certificates_and_hostnames_client_certificate_response)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesClientCertificateResponseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity

```python
tls_certificates_and_hostnames_client_certificate_response_single = client.TlsCertificatesAndHostnamesClientCertificateResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `csr` | `str` | Yes | The Certificate Signing Request (CSR). |
| `reactivate` | `bool` | No |  |
| `result` | `dict` | No |  |
| `validity_days` | `int` | Yes | The number of days the Client Certificate will be valid after the issued_on date. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesClientCertificateResponseSingle().create({
    "zone_id": "example_zone_id",  # str
    "csr": "example_csr",  # str
    "validity_days": 1,  # int
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesClientCertificateResponseSingle().load({"client_certificate_id": "client_certificate_id", "zone_id": "zone_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TlsCertificatesAndHostnamesClientCertificateResponseSingle().remove({"client_certificate_id": "client_certificate_id", "zone_id": "zone_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesClientCertificateResponseSingle().update({
    "client_certificate_id": "client_certificate_id",
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseEntity

```python
tls_certificates_and_hostnames_ct_alerting_subscription_response = client.TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `emails` | `list` | No | Email addresses that receive CT alert notifications for the zone. |
| `enabled` | `bool` | Yes | Whether CT alerting is enabled for the zone. |
| `result` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse().load({"zone_id": "zone_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse().update({
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity

```python
tls_certificates_and_hostnames_custom_csr_response_collection = client.TlsCertificatesAndHostnamesCustomCsrResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TlsCertificatesAndHostnamesCustomCsrResponseCollection().list({"zone_id": "example"})
for tls_certificates_and_hostnames_custom_csr_response_collection in results:
    print(tls_certificates_and_hostnames_custom_csr_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity

```python
tls_certificates_and_hostnames_custom_csr_response_collection_2 = client.TlsCertificatesAndHostnamesCustomCsrResponseCollection2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TlsCertificatesAndHostnamesCustomCsrResponseCollection2().list({"account_id": "example"})
for tls_certificates_and_hostnames_custom_csr_response_collection_2 in results:
    print(tls_certificates_and_hostnames_custom_csr_response_collection_2)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity

```python
tls_certificates_and_hostnames_custom_csr_response_id_only = client.TlsCertificatesAndHostnamesCustomCsrResponseIdOnly()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TlsCertificatesAndHostnamesCustomCsrResponseIdOnly().remove({"custom_csr_id": "custom_csr_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity

```python
tls_certificates_and_hostnames_custom_csr_response_single = client.TlsCertificatesAndHostnamesCustomCsrResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `common_name` | `str` | Yes | The common name (domain) for the CSR. |
| `country` | `str` | Yes | Two-letter ISO 3166-1 alpha-2 country code. |
| `key_type` | `str` | No | Key algorithm to use for the CSR. |
| `locality` | `str` | Yes | City or locality name. |
| `organization` | `str` | Yes | Organization name. |
| `organizational_unit` | `str` | No | Organizational unit name. |
| `result` | `dict` | Yes | A custom Certificate Signing Request (CSR). |
| `sans` | `list` | Yes | Subject Alternative Names for the CSR. |
| `state` | `str` | Yes | State or province name. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesCustomCsrResponseSingle().create({
    "zone_id": "example_zone_id",  # str
    "common_name": "example_common_name",  # str
    "country": "example_country",  # str
    "locality": "example_locality",  # str
    "organization": "example_organization",  # str
    "result": {},  # dict
    "sans": [],  # list
    "state": "example_state",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesCustomCsrResponseSingle().load({"custom_csr_id": "custom_csr_id", "zone_id": "zone_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity

```python
tls_certificates_and_hostnames_custom_csr_response_single_2 = client.TlsCertificatesAndHostnamesCustomCsrResponseSingle2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `common_name` | `str` | Yes | The common name (domain) for the CSR. |
| `country` | `str` | Yes | Two-letter ISO 3166-1 alpha-2 country code. |
| `description` | `str` | No | Optional description for the CSR. |
| `key_type` | `str` | No | Key algorithm to use for the CSR. |
| `locality` | `str` | Yes | City or locality name. |
| `name` | `str` | No | Human-readable name for the CSR. |
| `organization` | `str` | Yes | Organization name. |
| `organizational_unit` | `str` | No | Organizational unit name. |
| `result` | `dict` | Yes | A custom Certificate Signing Request (CSR). |
| `sans` | `list` | Yes | Subject Alternative Names for the CSR. |
| `state` | `str` | Yes | State or province name. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesCustomCsrResponseSingle2().create({
    "account_id": "example_account_id",  # str
    "common_name": "example_common_name",  # str
    "country": "example_country",  # str
    "locality": "example_locality",  # str
    "organization": "example_organization",  # str
    "result": {},  # dict
    "sans": [],  # list
    "state": "example_state",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesCustomCsrResponseSingle2().load({"account_id": "account_id", "custom_csr_id": "custom_csr_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomHostnameQuotaEntity

```python
tls_certificates_and_hostnames_custom_hostname_quota = client.TlsCertificatesAndHostnamesCustomHostnameQuota()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes | Informational messages returned by the custom hostname API. |
| `result` | `dict` | Yes |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TlsCertificatesAndHostnamesCustomHostnameQuota().list({"zone_id": "example"})
for tls_certificates_and_hostnames_custom_hostname_quota in results:
    print(tls_certificates_and_hostnames_custom_hostname_quota)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCustomHostnameQuotaEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity

```python
tls_certificates_and_hostnames_custom_hostname_response_collection = client.TlsCertificatesAndHostnamesCustomHostnameResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes | Informational messages returned by the custom hostname API. |
| `result` | `list` | No |  |
| `result_info` | `dict` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TlsCertificatesAndHostnamesCustomHostnameResponseCollection().list({"zone_id": "example"})
for tls_certificates_and_hostnames_custom_hostname_response_collection in results:
    print(tls_certificates_and_hostnames_custom_hostname_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity

```python
tls_certificates_and_hostnames_custom_hostname_response_single = client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_metadata` | `dict` | No | Unique key/value metadata for this hostname. |
| `custom_origin_server` | `str` | No | a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record. |
| `custom_origin_sni` | `str` | No | A hostname that will be sent to your custom origin server as SNI for TLS handshake. |
| `errors` | `list` | Yes |  |
| `hostname` | `str` | Yes | The custom hostname that will point to your hostname via CNAME. |
| `messages` | `list` | Yes | Informational messages returned by the custom hostname API. |
| `result` | `dict` | No |  |
| `ssl` | `dict` | No | SSL properties used when creating the custom hostname. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle().create({
    "zone_id": "example_zone_id",  # str
    "errors": [],  # list
    "hostname": "example_hostname",  # str
    "messages": [],  # list
    "success": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle().load({"custom_hostname_id": "custom_hostname_id", "zone_id": "zone_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle().update({
    "custom_hostname_id": "custom_hostname_id",
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity

```python
tls_certificates_and_hostnames_custom_trust_store_response = client.TlsCertificatesAndHostnamesCustomTrustStoreResponse()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TlsCertificatesAndHostnamesCustomTrustStoreResponse().list({"zone_id": "example"})
for tls_certificates_and_hostnames_custom_trust_store_response in results:
    print(tls_certificates_and_hostnames_custom_trust_store_response)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity

```python
tls_certificates_and_hostnames_custom_trust_store_response_id_only = client.TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly().remove({"custom_origin_trust_store_id": "custom_origin_trust_store_id", "zone_id": "zone_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity

```python
tls_certificates_and_hostnames_custom_trust_store_response_single = client.TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificate` | `str` | Yes | The root CA certificate in PEM format. |
| `result` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle().create({
    "zone_id": "example_zone_id",  # str
    "certificate": "example_certificate",  # str
    "result": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle().load({"custom_origin_trust_store_id": "custom_origin_trust_store_id", "zone_id": "zone_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesDcvDelegationEntity

```python
tls_certificates_and_hostnames_dcv_delegation = client.TlsCertificatesAndHostnamesDcvDelegation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesDcvDelegation().load({"zone_id": "zone_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesDcvDelegationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity

```python
tls_certificates_and_hostnames_delete_advanced_certificate_pack = client.TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack().remove({"id": "id", "zone_id": "zone_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesEnabledEntity

```python
tls_certificates_and_hostnames_enabled = client.TlsCertificatesAndHostnamesEnabled()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `bool` | Yes | Indicates whether zone-level authenticated origin pulls is enabled. |
| `result` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesEnabled().load({"zone_id": "zone_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesEnabled().update({
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesEnabledEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesFallbackOriginEntity

```python
tls_certificates_and_hostnames_fallback_origin = client.TlsCertificatesAndHostnamesFallbackOrigin()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `origin` | `str` | Yes | Your origin hostname that requests to your custom hostnames will be sent to. |
| `result` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesFallbackOrigin().load({"zone_id": "zone_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TlsCertificatesAndHostnamesFallbackOrigin().remove({"zone_id": "zone_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesFallbackOrigin().update({
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesFallbackOriginEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity

```python
tls_certificates_and_hostnames_hostname_aop_response_collection = client.TlsCertificatesAndHostnamesHostnameAopResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `list` | Yes |  |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesHostnameAopResponseCollection().update({
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesHostnameAopSingleEntity

```python
tls_certificates_and_hostnames_hostname_aop_single = client.TlsCertificatesAndHostnamesHostnameAopSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesHostnameAopSingle().load({"hostname": "hostname", "zone_id": "zone_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesHostnameAopSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity

```python
tls_certificates_and_hostnames_hostname_assoc_response_collection = client.TlsCertificatesAndHostnamesHostnameAssocResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |
| `result_info` | `dict` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TlsCertificatesAndHostnamesHostnameAssocResponseCollection().list({"zone_id": "example"})
for tls_certificates_and_hostnames_hostname_assoc_response_collection in results:
    print(tls_certificates_and_hostnames_hostname_assoc_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesHostnameAssociationEntity

```python
tls_certificates_and_hostnames_hostname_association = client.TlsCertificatesAndHostnamesHostnameAssociation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `hostnames` | `list` | No |  |
| `mtls_certificate_id` | `str` | No | The UUID for a certificate that was uploaded to the mTLS Certificate Management endpoint. |
| `result` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesHostnameAssociation().load({"zone_id": "zone_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesHostnameAssociation().update({
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesHostnameAssociationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesKeylessResponseCollectionEntity

```python
tls_certificates_and_hostnames_keyless_response_collection = client.TlsCertificatesAndHostnamesKeylessResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TlsCertificatesAndHostnamesKeylessResponseCollection().list({"zone_id": "example"})
for tls_certificates_and_hostnames_keyless_response_collection in results:
    print(tls_certificates_and_hostnames_keyless_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesKeylessResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesKeylessResponseSingleEntity

```python
tls_certificates_and_hostnames_keyless_response_single = client.TlsCertificatesAndHostnamesKeylessResponseSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bundle_method` | `str` | No | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| `certificate` | `str` | Yes | The zone's SSL certificate or SSL certificate and intermediate(s). |
| `enabled` | `bool` | No | Whether or not the Keyless SSL is on or off. |
| `host` | `str` | Yes | The keyless SSL name. |
| `name` | `str` | No | The keyless SSL name. |
| `port` | `float` | Yes | The keyless SSL port used to communicate between Cloudflare and the client's Keyless SSL server. |
| `result` | `dict` | No |  |
| `tunnel` | `dict` | Yes | Configuration for using Keyless SSL through a Cloudflare Tunnel. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesKeylessResponseSingle().create({
    "zone_id": "example_zone_id",  # str
    "certificate": "example_certificate",  # str
    "host": "example_host",  # str
    "port": 1,  # float
    "tunnel": {},  # dict
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesKeylessResponseSingle().load({"keyless_certificate_id": "keyless_certificate_id", "zone_id": "zone_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesKeylessResponseSingle().update({
    "keyless_certificate_id": "keyless_certificate_id",
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesKeylessResponseSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity

```python
tls_certificates_and_hostnames_keyless_response_single_id = client.TlsCertificatesAndHostnamesKeylessResponseSingleId()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TlsCertificatesAndHostnamesKeylessResponseSingleId().remove({"keyless_certificate_id": "keyless_certificate_id", "zone_id": "zone_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesPerHostnameSettingEntity

```python
tls_certificates_and_hostnames_per_hostname_setting = client.TlsCertificatesAndHostnamesPerHostnameSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `result` | `dict` | No |  |
| `value` | `Any` | Yes | The TLS setting value. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesPerHostnameSetting().load({"hostname": "hostname", "setting_id": "setting_id", "zone_id": "zone_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesPerHostnameSetting().update({
    "hostname": "hostname",
    "setting_id": "setting_id",
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesPerHostnameSettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity

```python
tls_certificates_and_hostnames_per_hostname_settings_response = client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |
| `result_info` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse().load({"setting_id": "setting_id", "zone_id": "zone_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity

```python
tls_certificates_and_hostnames_per_hostname_settings_response2 = client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse2().remove({"hostname": "hostname", "setting_id": "setting_id", "zone_id": "zone_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesSslUniversalSettingEntity

```python
tls_certificates_and_hostnames_ssl_universal_setting = client.TlsCertificatesAndHostnamesSslUniversalSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `bool` | No | Disabling Universal SSL removes any currently active Universal SSL certificates for your zone from the edge and prevents any future Universal SSL certificates from being ordered. |
| `result` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesSslUniversalSetting().load({"zone_id": "zone_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesSslUniversalSetting().update({
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesSslUniversalSettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesSslValidationMethodResponseEntity

```python
tls_certificates_and_hostnames_ssl_validation_method_response = client.TlsCertificatesAndHostnamesSslValidationMethodResponse()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `validation_method` | `str` | Yes | Desired validation method. |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesSslValidationMethodResponse().update({
    "certificate_pack_id": "certificate_pack_id",
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesSslValidationMethodResponseEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity

```python
tls_certificates_and_hostnames_ssl_verification_response_collection = client.TlsCertificatesAndHostnamesSslVerificationResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TlsCertificatesAndHostnamesSslVerificationResponseCollection().list({"zone_id": "example"})
for tls_certificates_and_hostnames_ssl_verification_response_collection in results:
    print(tls_certificates_and_hostnames_ssl_verification_response_collection)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TlsCertificatesAndHostnamesTotalTlsSettingEntity

```python
tls_certificates_and_hostnames_total_tls_setting = client.TlsCertificatesAndHostnamesTotalTlsSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `certificate_authority` | `str` | No | The Certificate Authority that Total TLS certificates will be issued through. |
| `enabled` | `bool` | Yes | If enabled, Total TLS will order a hostname specific TLS certificate for any proxied A, AAAA, or CNAME record in your zone. |
| `result` | `dict` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesTotalTlsSetting().create({
    "zone_id": "example_zone_id",  # str
    "enabled": True,  # bool
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TlsCertificatesAndHostnamesTotalTlsSetting().load({"zone_id": "zone_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TlsCertificatesAndHostnamesTotalTlsSettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```python
client = CloudflareSslSDK({
    "feature": {
        "test": {"active": True},
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

