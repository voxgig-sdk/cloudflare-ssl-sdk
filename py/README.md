# CloudflareSsl Python SDK



The Python SDK for the CloudflareSsl API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.CacheApiResponseSingleId()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/cloudflare-ssl-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from cloudflaressl_sdk import CloudflareSslSDK

client = CloudflareSslSDK({
    "apikey": os.environ.get("CLOUDFLARE_SSL_APIKEY"),
})
```

### 3. Load a tlscertificatesandhostnamescustomhostnameresponsesingle

TlsCertificatesAndHostnamesCustomHostnameResponseSingle is nested under custom_hostname, so provide the `custom_hostname_id`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    tlscertificatesandhostnamescustomhostnameresponsesingle = client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle().load({"custom_hostname_id": "example_custom_hostname_id", "zone_id": "example_zone_id"})
    print(tlscertificatesandhostnamescustomhostnameresponsesingle)
except Exception as err:
    print(f"load failed: {err}")
```

### 4. Create, update, and remove

```python
# Update
client.CacheApiResponseSingleId().update({"zone_id": "example_zone_id", "errors": []})

```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    tlscertificatesandhostnamesperhostnamesettingsresponse = client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse().load({"setting_id": "example", "zone_id": "example"})
    print(tlscertificatesandhostnamesperhostnamesettingsresponse)
except Exception as err:
    print(f"load failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = CloudflareSslSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
tlscertificatesandhostnamesperhostnamesettingsresponse = client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse().load({"setting_id": "example", "zone_id": "example"})
# tlscertificatesandhostnamesperhostnamesettingsresponse contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = CloudflareSslSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
CLOUDFLARE_SSL_TEST_LIVE=TRUE
CLOUDFLARE_SSL_APIKEY=<your-key>
```

Then run:

```bash
cd py && pytest test/
```


## Reference

### CloudflareSslSDK

```python
from cloudflaressl_sdk import CloudflareSslSDK

client = CloudflareSslSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = CloudflareSslSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### CloudflareSslSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
| `CacheApiResponseSingleId` | `(data) -> CacheApiResponseSingleIdEntity` | Create a CacheApiResponseSingleId entity instance. |
| `CacheAutoOriginTlsKex` | `(data) -> CacheAutoOriginTlsKexEntity` | Create a CacheAutoOriginTlsKex entity instance. |
| `CustomHostname` | `(data) -> CustomHostnameEntity` | Create a CustomHostname entity instance. |
| `CustomHostnameForAZone` | `(data) -> CustomHostnameForAZoneEntity` | Create a CustomHostnameForAZone entity instance. |
| `OriginTl` | `(data) -> OriginTlEntity` | Create an OriginTl entity instance. |
| `Recommendation` | `(data) -> RecommendationEntity` | Create a Recommendation entity instance. |
| `SslAutomaticMode` | `(data) -> SslAutomaticModeEntity` | Create a SslAutomaticMode entity instance. |
| `TlsCertificatesAndHostnamesAdvancedCertificatePackResponse` | `(data) -> TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity` | Create a TlsCertificatesAndHostnamesAdvancedCertificatePackResponse entity instance. |
| `TlsCertificatesAndHostnamesAssociationResponseCollection` | `(data) -> TlsCertificatesAndHostnamesAssociationResponseCollectionEntity` | Create a TlsCertificatesAndHostnamesAssociationResponseCollection entity instance. |
| `TlsCertificatesAndHostnamesCertificateAnalyze` | `(data) -> TlsCertificatesAndHostnamesCertificateAnalyzeEntity` | Create a TlsCertificatesAndHostnamesCertificateAnalyze entity instance. |
| `TlsCertificatesAndHostnamesCertificatePackQuota` | `(data) -> TlsCertificatesAndHostnamesCertificatePackQuotaEntity` | Create a TlsCertificatesAndHostnamesCertificatePackQuota entity instance. |
| `TlsCertificatesAndHostnamesCertificatePackResponseCollection` | `(data) -> TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity` | Create a TlsCertificatesAndHostnamesCertificatePackResponseCollection entity instance. |
| `TlsCertificatesAndHostnamesCertificatePackResponseSingle` | `(data) -> TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity` | Create a TlsCertificatesAndHostnamesCertificatePackResponseSingle entity instance. |
| `TlsCertificatesAndHostnamesCertificateResponseCollection` | `(data) -> TlsCertificatesAndHostnamesCertificateResponseCollectionEntity` | Create a TlsCertificatesAndHostnamesCertificateResponseCollection entity instance. |
| `TlsCertificatesAndHostnamesCertificateResponseCollection3` | `(data) -> TlsCertificatesAndHostnamesCertificateResponseCollection3Entity` | Create a TlsCertificatesAndHostnamesCertificateResponseCollection3 entity instance. |
| `TlsCertificatesAndHostnamesCertificateResponseCollection4` | `(data) -> TlsCertificatesAndHostnamesCertificateResponseCollection4Entity` | Create a TlsCertificatesAndHostnamesCertificateResponseCollection4 entity instance. |
| `TlsCertificatesAndHostnamesCertificateResponseCollection5` | `(data) -> TlsCertificatesAndHostnamesCertificateResponseCollection5Entity` | Create a TlsCertificatesAndHostnamesCertificateResponseCollection5 entity instance. |
| `TlsCertificatesAndHostnamesCertificateResponseIdOnly` | `(data) -> TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity` | Create a TlsCertificatesAndHostnamesCertificateResponseIdOnly entity instance. |
| `TlsCertificatesAndHostnamesCertificateResponseSingle` | `(data) -> TlsCertificatesAndHostnamesCertificateResponseSingleEntity` | Create a TlsCertificatesAndHostnamesCertificateResponseSingle entity instance. |
| `TlsCertificatesAndHostnamesCertificateResponseSingle2` | `(data) -> TlsCertificatesAndHostnamesCertificateResponseSingle2Entity` | Create a TlsCertificatesAndHostnamesCertificateResponseSingle2 entity instance. |
| `TlsCertificatesAndHostnamesCertificateResponseSingle3` | `(data) -> TlsCertificatesAndHostnamesCertificateResponseSingle3Entity` | Create a TlsCertificatesAndHostnamesCertificateResponseSingle3 entity instance. |
| `TlsCertificatesAndHostnamesCertificateResponseSingle4` | `(data) -> TlsCertificatesAndHostnamesCertificateResponseSingle4Entity` | Create a TlsCertificatesAndHostnamesCertificateResponseSingle4 entity instance. |
| `TlsCertificatesAndHostnamesCertificateResponseSingle5` | `(data) -> TlsCertificatesAndHostnamesCertificateResponseSingle5Entity` | Create a TlsCertificatesAndHostnamesCertificateResponseSingle5 entity instance. |
| `TlsCertificatesAndHostnamesCertificateResponseSinglePost` | `(data) -> TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity` | Create a TlsCertificatesAndHostnamesCertificateResponseSinglePost entity instance. |
| `TlsCertificatesAndHostnamesCertificateRevoke` | `(data) -> TlsCertificatesAndHostnamesCertificateRevokeEntity` | Create a TlsCertificatesAndHostnamesCertificateRevoke entity instance. |
| `TlsCertificatesAndHostnamesClientCertificateResponse` | `(data) -> TlsCertificatesAndHostnamesClientCertificateResponseEntity` | Create a TlsCertificatesAndHostnamesClientCertificateResponse entity instance. |
| `TlsCertificatesAndHostnamesClientCertificateResponseSingle` | `(data) -> TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity` | Create a TlsCertificatesAndHostnamesClientCertificateResponseSingle entity instance. |
| `TlsCertificatesAndHostnamesCustomCsrResponseCollection` | `(data) -> TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity` | Create a TlsCertificatesAndHostnamesCustomCsrResponseCollection entity instance. |
| `TlsCertificatesAndHostnamesCustomCsrResponseCollection2` | `(data) -> TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity` | Create a TlsCertificatesAndHostnamesCustomCsrResponseCollection2 entity instance. |
| `TlsCertificatesAndHostnamesCustomCsrResponseIdOnly` | `(data) -> TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity` | Create a TlsCertificatesAndHostnamesCustomCsrResponseIdOnly entity instance. |
| `TlsCertificatesAndHostnamesCustomCsrResponseSingle` | `(data) -> TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity` | Create a TlsCertificatesAndHostnamesCustomCsrResponseSingle entity instance. |
| `TlsCertificatesAndHostnamesCustomCsrResponseSingle2` | `(data) -> TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity` | Create a TlsCertificatesAndHostnamesCustomCsrResponseSingle2 entity instance. |
| `TlsCertificatesAndHostnamesCustomHostnameQuota` | `(data) -> TlsCertificatesAndHostnamesCustomHostnameQuotaEntity` | Create a TlsCertificatesAndHostnamesCustomHostnameQuota entity instance. |
| `TlsCertificatesAndHostnamesCustomHostnameResponseCollection` | `(data) -> TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity` | Create a TlsCertificatesAndHostnamesCustomHostnameResponseCollection entity instance. |
| `TlsCertificatesAndHostnamesCustomHostnameResponseSingle` | `(data) -> TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity` | Create a TlsCertificatesAndHostnamesCustomHostnameResponseSingle entity instance. |
| `TlsCertificatesAndHostnamesCustomTrustStoreResponse` | `(data) -> TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity` | Create a TlsCertificatesAndHostnamesCustomTrustStoreResponse entity instance. |
| `TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly` | `(data) -> TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity` | Create a TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly entity instance. |
| `TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle` | `(data) -> TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity` | Create a TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle entity instance. |
| `TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack` | `(data) -> TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity` | Create a TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack entity instance. |
| `TlsCertificatesAndHostnamesEnabled` | `(data) -> TlsCertificatesAndHostnamesEnabledEntity` | Create a TlsCertificatesAndHostnamesEnabled entity instance. |
| `TlsCertificatesAndHostnamesFallbackOrigin` | `(data) -> TlsCertificatesAndHostnamesFallbackOriginEntity` | Create a TlsCertificatesAndHostnamesFallbackOrigin entity instance. |
| `TlsCertificatesAndHostnamesHostnameAopResponseCollection` | `(data) -> TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity` | Create a TlsCertificatesAndHostnamesHostnameAopResponseCollection entity instance. |
| `TlsCertificatesAndHostnamesHostnameAopSingle` | `(data) -> TlsCertificatesAndHostnamesHostnameAopSingleEntity` | Create a TlsCertificatesAndHostnamesHostnameAopSingle entity instance. |
| `TlsCertificatesAndHostnamesHostnameAssocResponseCollection` | `(data) -> TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity` | Create a TlsCertificatesAndHostnamesHostnameAssocResponseCollection entity instance. |
| `TlsCertificatesAndHostnamesKeylessResponseCollection` | `(data) -> TlsCertificatesAndHostnamesKeylessResponseCollectionEntity` | Create a TlsCertificatesAndHostnamesKeylessResponseCollection entity instance. |
| `TlsCertificatesAndHostnamesKeylessResponseSingle` | `(data) -> TlsCertificatesAndHostnamesKeylessResponseSingleEntity` | Create a TlsCertificatesAndHostnamesKeylessResponseSingle entity instance. |
| `TlsCertificatesAndHostnamesKeylessResponseSingleId` | `(data) -> TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity` | Create a TlsCertificatesAndHostnamesKeylessResponseSingleId entity instance. |
| `TlsCertificatesAndHostnamesPerHostnameSetting` | `(data) -> TlsCertificatesAndHostnamesPerHostnameSettingEntity` | Create a TlsCertificatesAndHostnamesPerHostnameSetting entity instance. |
| `TlsCertificatesAndHostnamesPerHostnameSettingsResponse` | `(data) -> TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity` | Create a TlsCertificatesAndHostnamesPerHostnameSettingsResponse entity instance. |
| `TlsCertificatesAndHostnamesPerHostnameSettingsResponse2` | `(data) -> TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity` | Create a TlsCertificatesAndHostnamesPerHostnameSettingsResponse2 entity instance. |
| `TlsCertificatesAndHostnamesSslUniversalSetting` | `(data) -> TlsCertificatesAndHostnamesSslUniversalSettingEntity` | Create a TlsCertificatesAndHostnamesSslUniversalSetting entity instance. |
| `TlsCertificatesAndHostnamesSslValidationMethodResponse` | `(data) -> TlsCertificatesAndHostnamesSslValidationMethodResponseEntity` | Create a TlsCertificatesAndHostnamesSslValidationMethodResponse entity instance. |
| `TlsCertificatesAndHostnamesSslVerificationResponseCollection` | `(data) -> TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity` | Create a TlsCertificatesAndHostnamesSslVerificationResponseCollection entity instance. |
| `TlsCertificatesAndHostnamesTotalTlsSetting` | `(data) -> TlsCertificatesAndHostnamesTotalTlsSettingEntity` | Create a TlsCertificatesAndHostnamesTotalTlsSetting entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

### Entities

#### CacheApiResponseSingleId

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Indicates the API call's success or failure. |
| `value` | Controls enablement of Automatic SSL/TLS. |

Operations: Update.

API path: `/zones/{zone_id}/settings/ssl_automatic_mode`

#### CacheAutoOriginTlsKex

| Field | Description |
| --- | --- |
| `enabled` | Controls enablement of Auto-Origin TLS KEX selection for the zone. |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Indicates the API call's success or failure. |

Operations: List, Update.

API path: `/zones/{zone_id}/settings/auto_origin_tls_kex`

#### CustomHostname

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/zones/{zone_id}/custom_hostnames/{custom_hostname_id}`

#### CustomHostnameForAZone

| Field | Description |
| --- | --- |
| `custom_certificate` | If a custom uploaded certificate is used. |
| `custom_key` | The key for a custom uploaded certificate. |

Operations: Remove, Update.

API path: `/zones/{zone_id}/custom_hostnames/{custom_hostname_id}/certificate_pack/{certificate_pack_id}/certificates/{certificate_id}`

#### OriginTl

| Field | Description |
| --- | --- |
| `result` |  |
| `value` | List of TLS compliance modes that constrain the key-exchange algorithms Cloudflare may use when establishing the TLS connection to the zone's origin. |

Operations: Load, Patch, Remove, Update.

API path: `/zones/{zone_id}/settings/origin_tls_compliance_modes`

#### Recommendation

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Indicates the API call's success or failure. |

Operations: List.

API path: `/zones/{zone_id}/ssl/recommendation`

#### SslAutomaticMode

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Indicates the API call's success or failure. |

Operations: List.

API path: `/zones/{zone_id}/settings/ssl_automatic_mode`

#### TlsCertificatesAndHostnamesAdvancedCertificatePackResponse

| Field | Description |
| --- | --- |
| `certificate_authority` | Certificate Authority selected for the order. |
| `cloudflare_branding` | Whether or not to add Cloudflare Branding for the order. |
| `hosts` | Comma separated list of valid host names for the certificate packs. |
| `type` | Type of certificate pack. |
| `validation_method` | Validation Method selected for the order. |
| `validity_days` | Validity Days selected for the order. |

Operations: Create, Update.

API path: `/zones/{zone_id}/ssl/certificate_packs/order`

#### TlsCertificatesAndHostnamesAssociationResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/accounts/{account_id}/mtls_certificates/{mtls_certificate_id}/associations`

#### TlsCertificatesAndHostnamesCertificateAnalyze

| Field | Description |
| --- | --- |
| `bundle_method` | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| `certificate` | The zone's SSL certificate or certificate and the intermediate(s). |

Operations: Create.

API path: `/zones/{zone_id}/ssl/analyze`

#### TlsCertificatesAndHostnamesCertificatePackQuota

| Field | Description |
| --- | --- |
| `result` |  |

Operations: Load.

API path: `/zones/{zone_id}/ssl/certificate_packs/quota`

#### TlsCertificatesAndHostnamesCertificatePackResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/zones/{zone_id}/ssl/certificate_packs`

#### TlsCertificatesAndHostnamesCertificatePackResponseSingle

| Field | Description |
| --- | --- |
| `result` | A certificate pack with all its properties. |

Operations: Load.

API path: `/zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}`

#### TlsCertificatesAndHostnamesCertificateResponseCollection

| Field | Description |
| --- | --- |
| `certificates` | Array of ordered certificates. |
| `result` |  |

Operations: List, Update.

API path: `/zones/{zone_id}/custom_certificates`

#### TlsCertificatesAndHostnamesCertificateResponseCollection3

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/zones/{zone_id}/origin_tls_client_auth`

#### TlsCertificatesAndHostnamesCertificateResponseCollection4

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/zones/{zone_id}/origin_tls_client_auth/hostnames/certificates`

#### TlsCertificatesAndHostnamesCertificateResponseCollection5

| Field | Description |
| --- | --- |
| `result` |  |
| `result_info` |  |

Operations: List.

API path: `/accounts/{account_id}/mtls_certificates`

#### TlsCertificatesAndHostnamesCertificateResponseIdOnly

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/zones/{zone_id}/custom_certificates/{custom_certificate_id}`

#### TlsCertificatesAndHostnamesCertificateResponseSingle

| Field | Description |
| --- | --- |
| `bundle_method` | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| `certificate` | The zone's SSL certificate or certificate and the intermediate(s). |
| `custom_csr_id` | The identifier for the Custom CSR that was used. |
| `deploy` | The environment to deploy the certificate to, defaults to production. |
| `geo_restrictions` | Specify the region where your private key can be held locally for optimal TLS performance. |
| `policy` | Specify the policy that determines the region where your private key will be held locally. |
| `private_key` | The zone's private key. |
| `result` |  |
| `type` | The type 'legacy_custom' enables support for legacy clients which do not include SNI in the TLS handshake. |

Operations: Create, Load, Update.

API path: `/zones/{zone_id}/custom_certificates`

#### TlsCertificatesAndHostnamesCertificateResponseSingle2

| Field | Description |
| --- | --- |
| `csr` | The Certificate Signing Request (CSR). |
| `hostnames` | Array of hostnames or wildcard names bound to the certificate. |
| `request_type` | Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa), or "keyless-certificate" (for Keyless SSL servers). |
| `requested_validity` | The number of days for which the certificate should be valid. |
| `result` |  |

Operations: Create, List, Load.

API path: `/certificates`

#### TlsCertificatesAndHostnamesCertificateResponseSingle3

| Field | Description |
| --- | --- |
| `certificate` | The zone's leaf certificate. |
| `private_key` | The zone's private key. |
| `result` |  |

Operations: Create, Load, Remove.

API path: `/zones/{zone_id}/origin_tls_client_auth`

#### TlsCertificatesAndHostnamesCertificateResponseSingle4

| Field | Description |
| --- | --- |
| `certificate` | The hostname certificate. |
| `private_key` | The hostname certificate's private key. |
| `result` |  |

Operations: Create, Load, Remove.

API path: `/zones/{zone_id}/origin_tls_client_auth/hostnames/certificates`

#### TlsCertificatesAndHostnamesCertificateResponseSingle5

| Field | Description |
| --- | --- |
| `result` |  |

Operations: Load, Remove.

API path: `/accounts/{account_id}/mtls_certificates/{mtls_certificate_id}`

#### TlsCertificatesAndHostnamesCertificateResponseSinglePost

| Field | Description |
| --- | --- |
| `ca` | Indicates whether the certificate is a CA or leaf certificate. |
| `certificates` | The uploaded root CA certificate. |
| `name` | Optional unique name for the certificate. |
| `private_key` | The private key for the certificate. |

Operations: Create.

API path: `/accounts/{account_id}/mtls_certificates`

#### TlsCertificatesAndHostnamesCertificateRevoke

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/certificates/{certificate_id}`

#### TlsCertificatesAndHostnamesClientCertificateResponse

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/zones/{zone_id}/client_certificates`

#### TlsCertificatesAndHostnamesClientCertificateResponseSingle

| Field | Description |
| --- | --- |
| `csr` | The Certificate Signing Request (CSR). |
| `reactivate` |  |
| `result` |  |
| `validity_days` | The number of days the Client Certificate will be valid after the issued_on date. |

Operations: Create, Load, Remove, Update.

API path: `/zones/{zone_id}/client_certificates`

#### TlsCertificatesAndHostnamesCustomCsrResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/zones/{zone_id}/custom_csrs`

#### TlsCertificatesAndHostnamesCustomCsrResponseCollection2

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/accounts/{account_id}/custom_csrs`

#### TlsCertificatesAndHostnamesCustomCsrResponseIdOnly

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/accounts/{account_id}/custom_csrs/{custom_csr_id}`

#### TlsCertificatesAndHostnamesCustomCsrResponseSingle

| Field | Description |
| --- | --- |
| `common_name` | The common name (domain) for the CSR. |
| `country` | Two-letter ISO 3166-1 alpha-2 country code. |
| `key_type` | Key algorithm to use for the CSR. |
| `locality` | City or locality name. |
| `organization` | Organization name. |
| `organizational_unit` | Organizational unit name. |
| `result` | A custom Certificate Signing Request (CSR). |
| `sans` | Subject Alternative Names for the CSR. |
| `state` | State or province name. |

Operations: Create, Load.

API path: `/zones/{zone_id}/custom_csrs`

#### TlsCertificatesAndHostnamesCustomCsrResponseSingle2

| Field | Description |
| --- | --- |
| `common_name` | The common name (domain) for the CSR. |
| `country` | Two-letter ISO 3166-1 alpha-2 country code. |
| `description` | Optional description for the CSR. |
| `key_type` | Key algorithm to use for the CSR. |
| `locality` | City or locality name. |
| `name` | Human-readable name for the CSR. |
| `organization` | Organization name. |
| `organizational_unit` | Organizational unit name. |
| `result` | A custom Certificate Signing Request (CSR). |
| `sans` | Subject Alternative Names for the CSR. |
| `state` | State or province name. |

Operations: Create, Load.

API path: `/accounts/{account_id}/custom_csrs`

#### TlsCertificatesAndHostnamesCustomHostnameQuota

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` | Informational messages returned by the custom hostname API. |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: List.

API path: `/zones/{zone_id}/custom_hostnames/quota`

#### TlsCertificatesAndHostnamesCustomHostnameResponseCollection

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` | Informational messages returned by the custom hostname API. |
| `result` |  |
| `result_info` |  |
| `success` | Whether the API call was successful. |

Operations: List.

API path: `/zones/{zone_id}/custom_hostnames`

#### TlsCertificatesAndHostnamesCustomHostnameResponseSingle

| Field | Description |
| --- | --- |
| `custom_metadata` | Unique key/value metadata for this hostname. |
| `custom_origin_server` | a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record. |
| `custom_origin_sni` | A hostname that will be sent to your custom origin server as SNI for TLS handshake. |
| `errors` |  |
| `hostname` | The custom hostname that will point to your hostname via CNAME. |
| `messages` | Informational messages returned by the custom hostname API. |
| `result` |  |
| `ssl` | SSL properties used when creating the custom hostname. |
| `success` | Whether the API call was successful. |

Operations: Create, Load, Update.

API path: `/zones/{zone_id}/custom_hostnames`

#### TlsCertificatesAndHostnamesCustomTrustStoreResponse

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/zones/{zone_id}/acm/custom_trust_store`

#### TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/zones/{zone_id}/acm/custom_trust_store/{custom_origin_trust_store_id}`

#### TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle

| Field | Description |
| --- | --- |
| `certificate` | The root CA certificate in PEM format. |
| `result` |  |

Operations: Create, Load.

API path: `/zones/{zone_id}/acm/custom_trust_store`

#### TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}`

#### TlsCertificatesAndHostnamesEnabled

| Field | Description |
| --- | --- |
| `enabled` | Indicates whether zone-level authenticated origin pulls is enabled. |
| `result` |  |

Operations: Load, Update.

API path: `/zones/{zone_id}/origin_tls_client_auth/settings`

#### TlsCertificatesAndHostnamesFallbackOrigin

| Field | Description |
| --- | --- |
| `origin` | Your origin hostname that requests to your custom hostnames will be sent to. |
| `result` |  |

Operations: Load, Remove, Update.

API path: `/zones/{zone_id}/custom_hostnames/fallback_origin`

#### TlsCertificatesAndHostnamesHostnameAopResponseCollection

| Field | Description |
| --- | --- |
| `config` |  |

Operations: Update.

API path: `/zones/{zone_id}/origin_tls_client_auth/hostnames`

#### TlsCertificatesAndHostnamesHostnameAopSingle

| Field | Description |
| --- | --- |
| `result` |  |

Operations: Load.

API path: `/zones/{zone_id}/origin_tls_client_auth/hostnames/{hostname}`

#### TlsCertificatesAndHostnamesHostnameAssocResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |
| `result_info` |  |

Operations: List.

API path: `/zones/{zone_id}/origin_tls_client_auth/hostnames`

#### TlsCertificatesAndHostnamesKeylessResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/zones/{zone_id}/keyless_certificates`

#### TlsCertificatesAndHostnamesKeylessResponseSingle

| Field | Description |
| --- | --- |
| `bundle_method` | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| `certificate` | The zone's SSL certificate or SSL certificate and intermediate(s). |
| `enabled` | Whether or not the Keyless SSL is on or off. |
| `host` | The keyless SSL name. |
| `name` | The keyless SSL name. |
| `port` | The keyless SSL port used to communicate between Cloudflare and the client's Keyless SSL server. |
| `result` |  |
| `tunnel` | Configuration for using Keyless SSL through a Cloudflare Tunnel. |

Operations: Create, Load, Update.

API path: `/zones/{zone_id}/keyless_certificates`

#### TlsCertificatesAndHostnamesKeylessResponseSingleId

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/zones/{zone_id}/keyless_certificates/{keyless_certificate_id}`

#### TlsCertificatesAndHostnamesPerHostnameSetting

| Field | Description |
| --- | --- |
| `id` |  |
| `result` |  |
| `value` | The TLS setting value. |

Operations: Load, Update.

API path: `/zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}`

#### TlsCertificatesAndHostnamesPerHostnameSettingsResponse

| Field | Description |
| --- | --- |
| `result` |  |
| `result_info` |  |

Operations: Load.

API path: `/zones/{zone_id}/hostnames/settings/{setting_id}`

#### TlsCertificatesAndHostnamesPerHostnameSettingsResponse2

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}`

#### TlsCertificatesAndHostnamesSslUniversalSetting

| Field | Description |
| --- | --- |
| `enabled` | Disabling Universal SSL removes any currently active Universal SSL certificates for your zone from the edge and prevents any future Universal SSL certificates from being ordered. |
| `result` |  |

Operations: Load, Update.

API path: `/zones/{zone_id}/ssl/universal/settings`

#### TlsCertificatesAndHostnamesSslValidationMethodResponse

| Field | Description |
| --- | --- |
| `validation_method` | Desired validation method. |

Operations: Update.

API path: `/zones/{zone_id}/ssl/verification/{certificate_pack_id}`

#### TlsCertificatesAndHostnamesSslVerificationResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: List.

API path: `/zones/{zone_id}/ssl/verification`

#### TlsCertificatesAndHostnamesTotalTlsSetting

| Field | Description |
| --- | --- |
| `certificate_authority` | The Certificate Authority that Total TLS certificates will be issued through. |
| `enabled` | If enabled, Total TLS will order a hostname specific TLS certificate for any proxied A, AAAA, or CNAME record in your zone. |
| `result` |  |

Operations: Create, Load.

API path: `/zones/{zone_id}/acm/total_tls`



## Entities


### CacheApiResponseSingleId

Create an instance: `cache_api_response_single_id = client.CacheApiResponseSingleId()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `success` | `bool` | Indicates the API call's success or failure. |
| `value` | `str` | Controls enablement of Automatic SSL/TLS. |


### CacheAutoOriginTlsKex

Create an instance: `cache_auto_origin_tls_kex = client.CacheAutoOriginTlsKex()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `bool` | Controls enablement of Auto-Origin TLS KEX selection for the zone. |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `success` | `bool` | Indicates the API call's success or failure. |

#### Example: List

```python
cache_auto_origin_tls_kexs = client.CacheAutoOriginTlsKex().list({"zone_id": "example"})
```


### CustomHostname

Create an instance: `custom_hostname = client.CustomHostname()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### CustomHostnameForAZone

Create an instance: `custom_hostname_for_a_zone = client.CustomHostnameForAZone()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `custom_certificate` | `str` | If a custom uploaded certificate is used. |
| `custom_key` | `str` | The key for a custom uploaded certificate. |


### OriginTl

Create an instance: `origin_tl = client.OriginTl()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `dict` |  |
| `value` | `list` | List of TLS compliance modes that constrain the key-exchange algorithms Cloudflare may use when establishing the TLS connection to the zone's origin. |

#### Example: Load

```python
origin_tl = client.OriginTl().load({"zone_id": "zone_id"})
```


### Recommendation

Create an instance: `recommendation = client.Recommendation()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `success` | `bool` | Indicates the API call's success or failure. |

#### Example: List

```python
recommendations = client.Recommendation().list({"zone_id": "example"})
```


### SslAutomaticMode

Create an instance: `ssl_automatic_mode = client.SslAutomaticMode()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `success` | `bool` | Indicates the API call's success or failure. |

#### Example: List

```python
ssl_automatic_modes = client.SslAutomaticMode().list({"zone_id": "example"})
```


### TlsCertificatesAndHostnamesAdvancedCertificatePackResponse

Create an instance: `tls_certificates_and_hostnames_advanced_certificate_pack_response = client.TlsCertificatesAndHostnamesAdvancedCertificatePackResponse()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `certificate_authority` | `str` | Certificate Authority selected for the order. |
| `cloudflare_branding` | `bool` | Whether or not to add Cloudflare Branding for the order. |
| `hosts` | `list` | Comma separated list of valid host names for the certificate packs. |
| `type` | `str` | Type of certificate pack. |
| `validation_method` | `str` | Validation Method selected for the order. |
| `validity_days` | `int` | Validity Days selected for the order. |

#### Example: Create

```python
tls_certificates_and_hostnames_advanced_certificate_pack_response = client.TlsCertificatesAndHostnamesAdvancedCertificatePackResponse().create({
    "zone_id": "example_zone_id",  # str
    "certificate_authority": "example_certificate_authority",  # str
    "hosts": [],  # list
    "type": "example_type",  # str
    "validation_method": "example_validation_method",  # str
    "validity_days": 1,  # int
})
```


### TlsCertificatesAndHostnamesAssociationResponseCollection

Create an instance: `tls_certificates_and_hostnames_association_response_collection = client.TlsCertificatesAndHostnamesAssociationResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |

#### Example: List

```python
tls_certificates_and_hostnames_association_response_collections = client.TlsCertificatesAndHostnamesAssociationResponseCollection().list({"account_id": "example", "mtls_certificate_id": "example"})
```


### TlsCertificatesAndHostnamesCertificateAnalyze

Create an instance: `tls_certificates_and_hostnames_certificate_analyze = client.TlsCertificatesAndHostnamesCertificateAnalyze()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bundle_method` | `str` | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| `certificate` | `str` | The zone's SSL certificate or certificate and the intermediate(s). |

#### Example: Create

```python
tls_certificates_and_hostnames_certificate_analyze = client.TlsCertificatesAndHostnamesCertificateAnalyze().create({
    "zone_id": "example_zone_id",  # str
})
```


### TlsCertificatesAndHostnamesCertificatePackQuota

Create an instance: `tls_certificates_and_hostnames_certificate_pack_quota = client.TlsCertificatesAndHostnamesCertificatePackQuota()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `dict` |  |

#### Example: Load

```python
tls_certificates_and_hostnames_certificate_pack_quota = client.TlsCertificatesAndHostnamesCertificatePackQuota().load({"zone_id": "zone_id"})
```


### TlsCertificatesAndHostnamesCertificatePackResponseCollection

Create an instance: `tls_certificates_and_hostnames_certificate_pack_response_collection = client.TlsCertificatesAndHostnamesCertificatePackResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |

#### Example: List

```python
tls_certificates_and_hostnames_certificate_pack_response_collections = client.TlsCertificatesAndHostnamesCertificatePackResponseCollection().list({"zone_id": "example"})
```


### TlsCertificatesAndHostnamesCertificatePackResponseSingle

Create an instance: `tls_certificates_and_hostnames_certificate_pack_response_single = client.TlsCertificatesAndHostnamesCertificatePackResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `dict` | A certificate pack with all its properties. |

#### Example: Load

```python
tls_certificates_and_hostnames_certificate_pack_response_single = client.TlsCertificatesAndHostnamesCertificatePackResponseSingle().load({"certificate_pack_id": "certificate_pack_id", "zone_id": "zone_id"})
```


### TlsCertificatesAndHostnamesCertificateResponseCollection

Create an instance: `tls_certificates_and_hostnames_certificate_response_collection = client.TlsCertificatesAndHostnamesCertificateResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `certificates` | `list` | Array of ordered certificates. |
| `result` | `list` |  |

#### Example: List

```python
tls_certificates_and_hostnames_certificate_response_collections = client.TlsCertificatesAndHostnamesCertificateResponseCollection().list({"zone_id": "example"})
```


### TlsCertificatesAndHostnamesCertificateResponseCollection3

Create an instance: `tls_certificates_and_hostnames_certificate_response_collection_3 = client.TlsCertificatesAndHostnamesCertificateResponseCollection3()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |

#### Example: List

```python
tls_certificates_and_hostnames_certificate_response_collection_3s = client.TlsCertificatesAndHostnamesCertificateResponseCollection3().list({"zone_id": "example"})
```


### TlsCertificatesAndHostnamesCertificateResponseCollection4

Create an instance: `tls_certificates_and_hostnames_certificate_response_collection_4 = client.TlsCertificatesAndHostnamesCertificateResponseCollection4()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |

#### Example: List

```python
tls_certificates_and_hostnames_certificate_response_collection_4s = client.TlsCertificatesAndHostnamesCertificateResponseCollection4().list({"zone_id": "example"})
```


### TlsCertificatesAndHostnamesCertificateResponseCollection5

Create an instance: `tls_certificates_and_hostnames_certificate_response_collection_5 = client.TlsCertificatesAndHostnamesCertificateResponseCollection5()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |
| `result_info` | `dict` |  |

#### Example: List

```python
tls_certificates_and_hostnames_certificate_response_collection_5s = client.TlsCertificatesAndHostnamesCertificateResponseCollection5().list({"account_id": "example"})
```


### TlsCertificatesAndHostnamesCertificateResponseIdOnly

Create an instance: `tls_certificates_and_hostnames_certificate_response_id_only = client.TlsCertificatesAndHostnamesCertificateResponseIdOnly()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TlsCertificatesAndHostnamesCertificateResponseSingle

Create an instance: `tls_certificates_and_hostnames_certificate_response_single = client.TlsCertificatesAndHostnamesCertificateResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bundle_method` | `str` | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| `certificate` | `str` | The zone's SSL certificate or certificate and the intermediate(s). |
| `custom_csr_id` | `str` | The identifier for the Custom CSR that was used. |
| `deploy` | `str` | The environment to deploy the certificate to, defaults to production. |
| `geo_restrictions` | `dict` | Specify the region where your private key can be held locally for optimal TLS performance. |
| `policy` | `str` | Specify the policy that determines the region where your private key will be held locally. |
| `private_key` | `str` | The zone's private key. |
| `result` | `dict` |  |
| `type` | `str` | The type 'legacy_custom' enables support for legacy clients which do not include SNI in the TLS handshake. |

#### Example: Load

```python
tls_certificates_and_hostnames_certificate_response_single = client.TlsCertificatesAndHostnamesCertificateResponseSingle().load({"custom_certificate_id": "custom_certificate_id", "zone_id": "zone_id"})
```

#### Example: Create

```python
tls_certificates_and_hostnames_certificate_response_single = client.TlsCertificatesAndHostnamesCertificateResponseSingle().create({
    "zone_id": "example_zone_id",  # str
    "certificate": "example_certificate",  # str
    "result": {},  # dict
})
```


### TlsCertificatesAndHostnamesCertificateResponseSingle2

Create an instance: `tls_certificates_and_hostnames_certificate_response_single_2 = client.TlsCertificatesAndHostnamesCertificateResponseSingle2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `csr` | `str` | The Certificate Signing Request (CSR). |
| `hostnames` | `list` | Array of hostnames or wildcard names bound to the certificate. |
| `request_type` | `str` | Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa), or "keyless-certificate" (for Keyless SSL servers). |
| `requested_validity` | `float` | The number of days for which the certificate should be valid. |
| `result` | `dict` |  |

#### Example: Load

```python
tls_certificates_and_hostnames_certificate_response_single_2 = client.TlsCertificatesAndHostnamesCertificateResponseSingle2().load({"certificate_id": "certificate_id"})
```

#### Example: List

```python
tls_certificates_and_hostnames_certificate_response_single_2s = client.TlsCertificatesAndHostnamesCertificateResponseSingle2().list({"zone_id": "example"})
```

#### Example: Create

```python
tls_certificates_and_hostnames_certificate_response_single_2 = client.TlsCertificatesAndHostnamesCertificateResponseSingle2().create({
    "csr": "example_csr",  # str
    "hostnames": [],  # list
    "request_type": "example_request_type",  # str
    "result": {},  # dict
})
```


### TlsCertificatesAndHostnamesCertificateResponseSingle3

Create an instance: `tls_certificates_and_hostnames_certificate_response_single_3 = client.TlsCertificatesAndHostnamesCertificateResponseSingle3()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `certificate` | `str` | The zone's leaf certificate. |
| `private_key` | `str` | The zone's private key. |
| `result` | `dict` |  |

#### Example: Load

```python
tls_certificates_and_hostnames_certificate_response_single_3 = client.TlsCertificatesAndHostnamesCertificateResponseSingle3().load({"certificate_id": "certificate_id", "zone_id": "zone_id"})
```

#### Example: Create

```python
tls_certificates_and_hostnames_certificate_response_single_3 = client.TlsCertificatesAndHostnamesCertificateResponseSingle3().create({
    "zone_id": "example_zone_id",  # str
    "certificate": "example_certificate",  # str
    "private_key": "example_private_key",  # str
})
```


### TlsCertificatesAndHostnamesCertificateResponseSingle4

Create an instance: `tls_certificates_and_hostnames_certificate_response_single_4 = client.TlsCertificatesAndHostnamesCertificateResponseSingle4()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `certificate` | `str` | The hostname certificate. |
| `private_key` | `str` | The hostname certificate's private key. |
| `result` | `dict` |  |

#### Example: Load

```python
tls_certificates_and_hostnames_certificate_response_single_4 = client.TlsCertificatesAndHostnamesCertificateResponseSingle4().load({"certificate_id": "certificate_id", "zone_id": "zone_id"})
```

#### Example: Create

```python
tls_certificates_and_hostnames_certificate_response_single_4 = client.TlsCertificatesAndHostnamesCertificateResponseSingle4().create({
    "zone_id": "example_zone_id",  # str
    "certificate": "example_certificate",  # str
    "private_key": "example_private_key",  # str
})
```


### TlsCertificatesAndHostnamesCertificateResponseSingle5

Create an instance: `tls_certificates_and_hostnames_certificate_response_single_5 = client.TlsCertificatesAndHostnamesCertificateResponseSingle5()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `dict` |  |

#### Example: Load

```python
tls_certificates_and_hostnames_certificate_response_single_5 = client.TlsCertificatesAndHostnamesCertificateResponseSingle5().load({"account_id": "account_id", "mtls_certificate_id": "mtls_certificate_id"})
```


### TlsCertificatesAndHostnamesCertificateResponseSinglePost

Create an instance: `tls_certificates_and_hostnames_certificate_response_single_post = client.TlsCertificatesAndHostnamesCertificateResponseSinglePost()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ca` | `bool` | Indicates whether the certificate is a CA or leaf certificate. |
| `certificates` | `str` | The uploaded root CA certificate. |
| `name` | `str` | Optional unique name for the certificate. |
| `private_key` | `str` | The private key for the certificate. |

#### Example: Create

```python
tls_certificates_and_hostnames_certificate_response_single_post = client.TlsCertificatesAndHostnamesCertificateResponseSinglePost().create({
    "account_id": "example_account_id",  # str
    "ca": True,  # bool
    "certificates": "example_certificates",  # str
})
```


### TlsCertificatesAndHostnamesCertificateRevoke

Create an instance: `tls_certificates_and_hostnames_certificate_revoke = client.TlsCertificatesAndHostnamesCertificateRevoke()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TlsCertificatesAndHostnamesClientCertificateResponse

Create an instance: `tls_certificates_and_hostnames_client_certificate_response = client.TlsCertificatesAndHostnamesClientCertificateResponse()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |

#### Example: List

```python
tls_certificates_and_hostnames_client_certificate_responses = client.TlsCertificatesAndHostnamesClientCertificateResponse().list({"zone_id": "example"})
```


### TlsCertificatesAndHostnamesClientCertificateResponseSingle

Create an instance: `tls_certificates_and_hostnames_client_certificate_response_single = client.TlsCertificatesAndHostnamesClientCertificateResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `csr` | `str` | The Certificate Signing Request (CSR). |
| `reactivate` | `bool` |  |
| `result` | `dict` |  |
| `validity_days` | `int` | The number of days the Client Certificate will be valid after the issued_on date. |

#### Example: Load

```python
tls_certificates_and_hostnames_client_certificate_response_single = client.TlsCertificatesAndHostnamesClientCertificateResponseSingle().load({"client_certificate_id": "client_certificate_id", "zone_id": "zone_id"})
```

#### Example: Create

```python
tls_certificates_and_hostnames_client_certificate_response_single = client.TlsCertificatesAndHostnamesClientCertificateResponseSingle().create({
    "zone_id": "example_zone_id",  # str
    "csr": "example_csr",  # str
    "validity_days": 1,  # int
})
```


### TlsCertificatesAndHostnamesCustomCsrResponseCollection

Create an instance: `tls_certificates_and_hostnames_custom_csr_response_collection = client.TlsCertificatesAndHostnamesCustomCsrResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |

#### Example: List

```python
tls_certificates_and_hostnames_custom_csr_response_collections = client.TlsCertificatesAndHostnamesCustomCsrResponseCollection().list({"zone_id": "example"})
```


### TlsCertificatesAndHostnamesCustomCsrResponseCollection2

Create an instance: `tls_certificates_and_hostnames_custom_csr_response_collection_2 = client.TlsCertificatesAndHostnamesCustomCsrResponseCollection2()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |

#### Example: List

```python
tls_certificates_and_hostnames_custom_csr_response_collection_2s = client.TlsCertificatesAndHostnamesCustomCsrResponseCollection2().list({"account_id": "example"})
```


### TlsCertificatesAndHostnamesCustomCsrResponseIdOnly

Create an instance: `tls_certificates_and_hostnames_custom_csr_response_id_only = client.TlsCertificatesAndHostnamesCustomCsrResponseIdOnly()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TlsCertificatesAndHostnamesCustomCsrResponseSingle

Create an instance: `tls_certificates_and_hostnames_custom_csr_response_single = client.TlsCertificatesAndHostnamesCustomCsrResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `common_name` | `str` | The common name (domain) for the CSR. |
| `country` | `str` | Two-letter ISO 3166-1 alpha-2 country code. |
| `key_type` | `str` | Key algorithm to use for the CSR. |
| `locality` | `str` | City or locality name. |
| `organization` | `str` | Organization name. |
| `organizational_unit` | `str` | Organizational unit name. |
| `result` | `dict` | A custom Certificate Signing Request (CSR). |
| `sans` | `list` | Subject Alternative Names for the CSR. |
| `state` | `str` | State or province name. |

#### Example: Load

```python
tls_certificates_and_hostnames_custom_csr_response_single = client.TlsCertificatesAndHostnamesCustomCsrResponseSingle().load({"custom_csr_id": "custom_csr_id", "zone_id": "zone_id"})
```

#### Example: Create

```python
tls_certificates_and_hostnames_custom_csr_response_single = client.TlsCertificatesAndHostnamesCustomCsrResponseSingle().create({
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


### TlsCertificatesAndHostnamesCustomCsrResponseSingle2

Create an instance: `tls_certificates_and_hostnames_custom_csr_response_single_2 = client.TlsCertificatesAndHostnamesCustomCsrResponseSingle2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `common_name` | `str` | The common name (domain) for the CSR. |
| `country` | `str` | Two-letter ISO 3166-1 alpha-2 country code. |
| `description` | `str` | Optional description for the CSR. |
| `key_type` | `str` | Key algorithm to use for the CSR. |
| `locality` | `str` | City or locality name. |
| `name` | `str` | Human-readable name for the CSR. |
| `organization` | `str` | Organization name. |
| `organizational_unit` | `str` | Organizational unit name. |
| `result` | `dict` | A custom Certificate Signing Request (CSR). |
| `sans` | `list` | Subject Alternative Names for the CSR. |
| `state` | `str` | State or province name. |

#### Example: Load

```python
tls_certificates_and_hostnames_custom_csr_response_single_2 = client.TlsCertificatesAndHostnamesCustomCsrResponseSingle2().load({"account_id": "account_id", "custom_csr_id": "custom_csr_id"})
```

#### Example: Create

```python
tls_certificates_and_hostnames_custom_csr_response_single_2 = client.TlsCertificatesAndHostnamesCustomCsrResponseSingle2().create({
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


### TlsCertificatesAndHostnamesCustomHostnameQuota

Create an instance: `tls_certificates_and_hostnames_custom_hostname_quota = client.TlsCertificatesAndHostnamesCustomHostnameQuota()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` | Informational messages returned by the custom hostname API. |
| `result` | `dict` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
tls_certificates_and_hostnames_custom_hostname_quotas = client.TlsCertificatesAndHostnamesCustomHostnameQuota().list({"zone_id": "example"})
```


### TlsCertificatesAndHostnamesCustomHostnameResponseCollection

Create an instance: `tls_certificates_and_hostnames_custom_hostname_response_collection = client.TlsCertificatesAndHostnamesCustomHostnameResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` | Informational messages returned by the custom hostname API. |
| `result` | `list` |  |
| `result_info` | `dict` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
tls_certificates_and_hostnames_custom_hostname_response_collections = client.TlsCertificatesAndHostnamesCustomHostnameResponseCollection().list({"zone_id": "example"})
```


### TlsCertificatesAndHostnamesCustomHostnameResponseSingle

Create an instance: `tls_certificates_and_hostnames_custom_hostname_response_single = client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `custom_metadata` | `dict` | Unique key/value metadata for this hostname. |
| `custom_origin_server` | `str` | a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record. |
| `custom_origin_sni` | `str` | A hostname that will be sent to your custom origin server as SNI for TLS handshake. |
| `errors` | `list` |  |
| `hostname` | `str` | The custom hostname that will point to your hostname via CNAME. |
| `messages` | `list` | Informational messages returned by the custom hostname API. |
| `result` | `dict` |  |
| `ssl` | `dict` | SSL properties used when creating the custom hostname. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```python
tls_certificates_and_hostnames_custom_hostname_response_single = client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle().load({"custom_hostname_id": "custom_hostname_id", "zone_id": "zone_id"})
```

#### Example: Create

```python
tls_certificates_and_hostnames_custom_hostname_response_single = client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle().create({
    "zone_id": "example_zone_id",  # str
    "errors": [],  # list
    "hostname": "example_hostname",  # str
    "messages": [],  # list
    "success": True,  # bool
})
```


### TlsCertificatesAndHostnamesCustomTrustStoreResponse

Create an instance: `tls_certificates_and_hostnames_custom_trust_store_response = client.TlsCertificatesAndHostnamesCustomTrustStoreResponse()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |

#### Example: List

```python
tls_certificates_and_hostnames_custom_trust_store_responses = client.TlsCertificatesAndHostnamesCustomTrustStoreResponse().list({"zone_id": "example"})
```


### TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly

Create an instance: `tls_certificates_and_hostnames_custom_trust_store_response_id_only = client.TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle

Create an instance: `tls_certificates_and_hostnames_custom_trust_store_response_single = client.TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `certificate` | `str` | The root CA certificate in PEM format. |
| `result` | `dict` |  |

#### Example: Load

```python
tls_certificates_and_hostnames_custom_trust_store_response_single = client.TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle().load({"custom_origin_trust_store_id": "custom_origin_trust_store_id", "zone_id": "zone_id"})
```

#### Example: Create

```python
tls_certificates_and_hostnames_custom_trust_store_response_single = client.TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle().create({
    "zone_id": "example_zone_id",  # str
    "certificate": "example_certificate",  # str
    "result": {},  # dict
})
```


### TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack

Create an instance: `tls_certificates_and_hostnames_delete_advanced_certificate_pack = client.TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### TlsCertificatesAndHostnamesEnabled

Create an instance: `tls_certificates_and_hostnames_enabled = client.TlsCertificatesAndHostnamesEnabled()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `bool` | Indicates whether zone-level authenticated origin pulls is enabled. |
| `result` | `dict` |  |

#### Example: Load

```python
tls_certificates_and_hostnames_enabled = client.TlsCertificatesAndHostnamesEnabled().load({"zone_id": "zone_id"})
```


### TlsCertificatesAndHostnamesFallbackOrigin

Create an instance: `tls_certificates_and_hostnames_fallback_origin = client.TlsCertificatesAndHostnamesFallbackOrigin()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `origin` | `str` | Your origin hostname that requests to your custom hostnames will be sent to. |
| `result` | `dict` |  |

#### Example: Load

```python
tls_certificates_and_hostnames_fallback_origin = client.TlsCertificatesAndHostnamesFallbackOrigin().load({"zone_id": "zone_id"})
```


### TlsCertificatesAndHostnamesHostnameAopResponseCollection

Create an instance: `tls_certificates_and_hostnames_hostname_aop_response_collection = client.TlsCertificatesAndHostnamesHostnameAopResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `list` |  |


### TlsCertificatesAndHostnamesHostnameAopSingle

Create an instance: `tls_certificates_and_hostnames_hostname_aop_single = client.TlsCertificatesAndHostnamesHostnameAopSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `dict` |  |

#### Example: Load

```python
tls_certificates_and_hostnames_hostname_aop_single = client.TlsCertificatesAndHostnamesHostnameAopSingle().load({"hostname": "hostname", "zone_id": "zone_id"})
```


### TlsCertificatesAndHostnamesHostnameAssocResponseCollection

Create an instance: `tls_certificates_and_hostnames_hostname_assoc_response_collection = client.TlsCertificatesAndHostnamesHostnameAssocResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |
| `result_info` | `dict` |  |

#### Example: List

```python
tls_certificates_and_hostnames_hostname_assoc_response_collections = client.TlsCertificatesAndHostnamesHostnameAssocResponseCollection().list({"zone_id": "example"})
```


### TlsCertificatesAndHostnamesKeylessResponseCollection

Create an instance: `tls_certificates_and_hostnames_keyless_response_collection = client.TlsCertificatesAndHostnamesKeylessResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |

#### Example: List

```python
tls_certificates_and_hostnames_keyless_response_collections = client.TlsCertificatesAndHostnamesKeylessResponseCollection().list({"zone_id": "example"})
```


### TlsCertificatesAndHostnamesKeylessResponseSingle

Create an instance: `tls_certificates_and_hostnames_keyless_response_single = client.TlsCertificatesAndHostnamesKeylessResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bundle_method` | `str` | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| `certificate` | `str` | The zone's SSL certificate or SSL certificate and intermediate(s). |
| `enabled` | `bool` | Whether or not the Keyless SSL is on or off. |
| `host` | `str` | The keyless SSL name. |
| `name` | `str` | The keyless SSL name. |
| `port` | `float` | The keyless SSL port used to communicate between Cloudflare and the client's Keyless SSL server. |
| `result` | `dict` |  |
| `tunnel` | `dict` | Configuration for using Keyless SSL through a Cloudflare Tunnel. |

#### Example: Load

```python
tls_certificates_and_hostnames_keyless_response_single = client.TlsCertificatesAndHostnamesKeylessResponseSingle().load({"keyless_certificate_id": "keyless_certificate_id", "zone_id": "zone_id"})
```

#### Example: Create

```python
tls_certificates_and_hostnames_keyless_response_single = client.TlsCertificatesAndHostnamesKeylessResponseSingle().create({
    "zone_id": "example_zone_id",  # str
    "certificate": "example_certificate",  # str
    "host": "example_host",  # str
    "port": 1,  # float
    "tunnel": {},  # dict
})
```


### TlsCertificatesAndHostnamesKeylessResponseSingleId

Create an instance: `tls_certificates_and_hostnames_keyless_response_single_id = client.TlsCertificatesAndHostnamesKeylessResponseSingleId()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TlsCertificatesAndHostnamesPerHostnameSetting

Create an instance: `tls_certificates_and_hostnames_per_hostname_setting = client.TlsCertificatesAndHostnamesPerHostnameSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `result` | `dict` |  |
| `value` | `Any` | The TLS setting value. |

#### Example: Load

```python
tls_certificates_and_hostnames_per_hostname_setting = client.TlsCertificatesAndHostnamesPerHostnameSetting().load({"hostname": "hostname", "setting_id": "setting_id", "zone_id": "zone_id"})
```


### TlsCertificatesAndHostnamesPerHostnameSettingsResponse

Create an instance: `tls_certificates_and_hostnames_per_hostname_settings_response = client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |
| `result_info` | `dict` |  |

#### Example: Load

```python
tls_certificates_and_hostnames_per_hostname_settings_response = client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse().load({"setting_id": "setting_id", "zone_id": "zone_id"})
```


### TlsCertificatesAndHostnamesPerHostnameSettingsResponse2

Create an instance: `tls_certificates_and_hostnames_per_hostname_settings_response2 = client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse2()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### TlsCertificatesAndHostnamesSslUniversalSetting

Create an instance: `tls_certificates_and_hostnames_ssl_universal_setting = client.TlsCertificatesAndHostnamesSslUniversalSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `bool` | Disabling Universal SSL removes any currently active Universal SSL certificates for your zone from the edge and prevents any future Universal SSL certificates from being ordered. |
| `result` | `dict` |  |

#### Example: Load

```python
tls_certificates_and_hostnames_ssl_universal_setting = client.TlsCertificatesAndHostnamesSslUniversalSetting().load({"zone_id": "zone_id"})
```


### TlsCertificatesAndHostnamesSslValidationMethodResponse

Create an instance: `tls_certificates_and_hostnames_ssl_validation_method_response = client.TlsCertificatesAndHostnamesSslValidationMethodResponse()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `validation_method` | `str` | Desired validation method. |


### TlsCertificatesAndHostnamesSslVerificationResponseCollection

Create an instance: `tls_certificates_and_hostnames_ssl_verification_response_collection = client.TlsCertificatesAndHostnamesSslVerificationResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `list` |  |

#### Example: List

```python
tls_certificates_and_hostnames_ssl_verification_response_collections = client.TlsCertificatesAndHostnamesSslVerificationResponseCollection().list({"zone_id": "example"})
```


### TlsCertificatesAndHostnamesTotalTlsSetting

Create an instance: `tls_certificates_and_hostnames_total_tls_setting = client.TlsCertificatesAndHostnamesTotalTlsSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `certificate_authority` | `str` | The Certificate Authority that Total TLS certificates will be issued through. |
| `enabled` | `bool` | If enabled, Total TLS will order a hostname specific TLS certificate for any proxied A, AAAA, or CNAME record in your zone. |
| `result` | `dict` |  |

#### Example: Load

```python
tls_certificates_and_hostnames_total_tls_setting = client.TlsCertificatesAndHostnamesTotalTlsSetting().load({"zone_id": "zone_id"})
```

#### Example: Create

```python
tls_certificates_and_hostnames_total_tls_setting = client.TlsCertificatesAndHostnamesTotalTlsSetting().create({
    "zone_id": "example_zone_id",  # str
    "enabled": True,  # bool
})
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | Test transport |

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Open types

3 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `tls_certificates_and_hostnames_per_hostname_setting` | `result` | 3 | 4 levels |
| `tls_certificates_and_hostnames_per_hostname_setting` | `value` | 3 | 0 levels |
| `tls_certificates_and_hostnames_per_hostname_settings_response` | `result` | 3 | 3 levels |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── cloudflaressl_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── schema.py                    -- Generated option + entity specs
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`cloudflaressl_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```python
tlscertificatesandhostnamesperhostnamesettingsresponse = client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse()
tlscertificatesandhostnamesperhostnamesettingsresponse.load({"setting_id": "example", "zone_id": "example"})

# tlscertificatesandhostnamesperhostnamesettingsresponse.data_get() now returns the tlscertificatesandhostnamesperhostnamesettingsresponse data from the last load
# tlscertificatesandhostnamesperhostnamesettingsresponse.match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
