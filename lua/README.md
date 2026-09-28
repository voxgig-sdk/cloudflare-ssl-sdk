# CloudflareSsl Lua SDK



The Lua SDK for the CloudflareSsl API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:CacheApiResponseSingleId()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/cloudflare-ssl-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("cloudflare-ssl_sdk")

local client = sdk.new({
  apikey = os.getenv("CLOUDFLARE_SSL_APIKEY"),
})
```

### 3. Load a tlscertificatesandhostnamescustomhostnameresponsesingle

TlsCertificatesAndHostnamesCustomHostnameResponseSingle is nested under custom_hostname, so provide the `custom_hostname_id`.

```lua
local tlscertificatesandhostnamescustomhostnameresponsesingle, err = client:TlsCertificatesAndHostnamesCustomHostnameResponseSingle():load({ custom_hostname_id = "example_custom_hostname_id", zone_id = "example_zone_id" })
if err then error(err) end
print(tlscertificatesandhostnamescustomhostnameresponsesingle)
```

### 4. Create, update, and remove

```lua
-- Update
client:CacheApiResponseSingleId():update({ zone_id = "example_zone_id", errors = {} })

```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local tlscertificatesandhostnamesperhostnamesettingsresponse, err = client:TlsCertificatesAndHostnamesPerHostnameSettingsResponse():load({ setting_id = "example", zone_id = "example" })
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:TlsCertificatesAndHostnamesPerHostnameSettingsResponse():load({ setting_id = "example", zone_id = "example" })
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
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
cd lua && busted test/
```


## Reference

### CloudflareSslSDK

```lua
local sdk = require("cloudflare-ssl_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareSslSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
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
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `remove` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local origin_tl, err = client:OriginTl():load()
    if err then error(err) end
    -- origin_tl is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

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

Create an instance: `local cache_api_response_single_id = client:CacheApiResponseSingleId(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Indicates the API call's success or failure. |
| `value` | `string` | Controls enablement of Automatic SSL/TLS. |


### CacheAutoOriginTlsKex

Create an instance: `local cache_auto_origin_tls_kex = client:CacheAutoOriginTlsKex(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `boolean` | Controls enablement of Auto-Origin TLS KEX selection for the zone. |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Indicates the API call's success or failure. |

#### Example: List

```lua
local cache_auto_origin_tls_kexs, err = client:CacheAutoOriginTlsKex():list()
```


### CustomHostname

Create an instance: `local custom_hostname = client:CustomHostname(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### CustomHostnameForAZone

Create an instance: `local custom_hostname_for_a_zone = client:CustomHostnameForAZone(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `custom_certificate` | `string` | If a custom uploaded certificate is used. |
| `custom_key` | `string` | The key for a custom uploaded certificate. |


### OriginTl

Create an instance: `local origin_tl = client:OriginTl(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |
| `value` | `table` | List of TLS compliance modes that constrain the key-exchange algorithms Cloudflare may use when establishing the TLS connection to the zone's origin. |

#### Example: Load

```lua
local origin_tl, err = client:OriginTl():load({ zone_id = "zone_id" })
```


### Recommendation

Create an instance: `local recommendation = client:Recommendation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Indicates the API call's success or failure. |

#### Example: List

```lua
local recommendations, err = client:Recommendation():list()
```


### SslAutomaticMode

Create an instance: `local ssl_automatic_mode = client:SslAutomaticMode(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Indicates the API call's success or failure. |

#### Example: List

```lua
local ssl_automatic_modes, err = client:SslAutomaticMode():list()
```


### TlsCertificatesAndHostnamesAdvancedCertificatePackResponse

Create an instance: `local tls_certificates_and_hostnames_advanced_certificate_pack_response = client:TlsCertificatesAndHostnamesAdvancedCertificatePackResponse(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `certificate_authority` | `string` | Certificate Authority selected for the order. |
| `cloudflare_branding` | `boolean` | Whether or not to add Cloudflare Branding for the order. |
| `hosts` | `table` | Comma separated list of valid host names for the certificate packs. |
| `type` | `string` | Type of certificate pack. |
| `validation_method` | `string` | Validation Method selected for the order. |
| `validity_days` | `number` | Validity Days selected for the order. |

#### Example: Create

```lua
local tls_certificates_and_hostnames_advanced_certificate_pack_response, err = client:TlsCertificatesAndHostnamesAdvancedCertificatePackResponse():create({
  zone_id = "example_zone_id", -- string
  certificate_authority = "example_certificate_authority", -- string
  hosts = {}, -- table
  type = "example_type", -- string
  validation_method = "example_validation_method", -- string
  validity_days = 1, -- number
})
```


### TlsCertificatesAndHostnamesAssociationResponseCollection

Create an instance: `local tls_certificates_and_hostnames_association_response_collection = client:TlsCertificatesAndHostnamesAssociationResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local tls_certificates_and_hostnames_association_response_collections, err = client:TlsCertificatesAndHostnamesAssociationResponseCollection():list()
```


### TlsCertificatesAndHostnamesCertificateAnalyze

Create an instance: `local tls_certificates_and_hostnames_certificate_analyze = client:TlsCertificatesAndHostnamesCertificateAnalyze(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bundle_method` | `string` | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| `certificate` | `string` | The zone's SSL certificate or certificate and the intermediate(s). |

#### Example: Create

```lua
local tls_certificates_and_hostnames_certificate_analyze, err = client:TlsCertificatesAndHostnamesCertificateAnalyze():create({
  zone_id = "example_zone_id", -- string
})
```


### TlsCertificatesAndHostnamesCertificatePackQuota

Create an instance: `local tls_certificates_and_hostnames_certificate_pack_quota = client:TlsCertificatesAndHostnamesCertificatePackQuota(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: Load

```lua
local tls_certificates_and_hostnames_certificate_pack_quota, err = client:TlsCertificatesAndHostnamesCertificatePackQuota():load({ zone_id = "zone_id" })
```


### TlsCertificatesAndHostnamesCertificatePackResponseCollection

Create an instance: `local tls_certificates_and_hostnames_certificate_pack_response_collection = client:TlsCertificatesAndHostnamesCertificatePackResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local tls_certificates_and_hostnames_certificate_pack_response_collections, err = client:TlsCertificatesAndHostnamesCertificatePackResponseCollection():list()
```


### TlsCertificatesAndHostnamesCertificatePackResponseSingle

Create an instance: `local tls_certificates_and_hostnames_certificate_pack_response_single = client:TlsCertificatesAndHostnamesCertificatePackResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` | A certificate pack with all its properties. |

#### Example: Load

```lua
local tls_certificates_and_hostnames_certificate_pack_response_single, err = client:TlsCertificatesAndHostnamesCertificatePackResponseSingle():load({ certificate_pack_id = "certificate_pack_id", zone_id = "zone_id" })
```


### TlsCertificatesAndHostnamesCertificateResponseCollection

Create an instance: `local tls_certificates_and_hostnames_certificate_response_collection = client:TlsCertificatesAndHostnamesCertificateResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `certificates` | `table` | Array of ordered certificates. |
| `result` | `table` |  |

#### Example: List

```lua
local tls_certificates_and_hostnames_certificate_response_collections, err = client:TlsCertificatesAndHostnamesCertificateResponseCollection():list()
```


### TlsCertificatesAndHostnamesCertificateResponseCollection3

Create an instance: `local tls_certificates_and_hostnames_certificate_response_collection_3 = client:TlsCertificatesAndHostnamesCertificateResponseCollection3(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local tls_certificates_and_hostnames_certificate_response_collection_3s, err = client:TlsCertificatesAndHostnamesCertificateResponseCollection3():list()
```


### TlsCertificatesAndHostnamesCertificateResponseCollection4

Create an instance: `local tls_certificates_and_hostnames_certificate_response_collection_4 = client:TlsCertificatesAndHostnamesCertificateResponseCollection4(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local tls_certificates_and_hostnames_certificate_response_collection_4s, err = client:TlsCertificatesAndHostnamesCertificateResponseCollection4():list()
```


### TlsCertificatesAndHostnamesCertificateResponseCollection5

Create an instance: `local tls_certificates_and_hostnames_certificate_response_collection_5 = client:TlsCertificatesAndHostnamesCertificateResponseCollection5(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |
| `result_info` | `table` |  |

#### Example: List

```lua
local tls_certificates_and_hostnames_certificate_response_collection_5s, err = client:TlsCertificatesAndHostnamesCertificateResponseCollection5():list()
```


### TlsCertificatesAndHostnamesCertificateResponseIdOnly

Create an instance: `local tls_certificates_and_hostnames_certificate_response_id_only = client:TlsCertificatesAndHostnamesCertificateResponseIdOnly(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TlsCertificatesAndHostnamesCertificateResponseSingle

Create an instance: `local tls_certificates_and_hostnames_certificate_response_single = client:TlsCertificatesAndHostnamesCertificateResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bundle_method` | `string` | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| `certificate` | `string` | The zone's SSL certificate or certificate and the intermediate(s). |
| `custom_csr_id` | `string` | The identifier for the Custom CSR that was used. |
| `deploy` | `string` | The environment to deploy the certificate to, defaults to production. |
| `geo_restrictions` | `table` | Specify the region where your private key can be held locally for optimal TLS performance. |
| `policy` | `string` | Specify the policy that determines the region where your private key will be held locally. |
| `private_key` | `string` | The zone's private key. |
| `result` | `table` |  |
| `type` | `string` | The type 'legacy_custom' enables support for legacy clients which do not include SNI in the TLS handshake. |

#### Example: Load

```lua
local tls_certificates_and_hostnames_certificate_response_single, err = client:TlsCertificatesAndHostnamesCertificateResponseSingle():load({ custom_certificate_id = "custom_certificate_id", zone_id = "zone_id" })
```

#### Example: Create

```lua
local tls_certificates_and_hostnames_certificate_response_single, err = client:TlsCertificatesAndHostnamesCertificateResponseSingle():create({
  zone_id = "example_zone_id", -- string
  certificate = "example_certificate", -- string
  result = {}, -- table
})
```


### TlsCertificatesAndHostnamesCertificateResponseSingle2

Create an instance: `local tls_certificates_and_hostnames_certificate_response_single_2 = client:TlsCertificatesAndHostnamesCertificateResponseSingle2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `csr` | `string` | The Certificate Signing Request (CSR). |
| `hostnames` | `table` | Array of hostnames or wildcard names bound to the certificate. |
| `request_type` | `string` | Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa), or "keyless-certificate" (for Keyless SSL servers). |
| `requested_validity` | `number` | The number of days for which the certificate should be valid. |
| `result` | `table` |  |

#### Example: Load

```lua
local tls_certificates_and_hostnames_certificate_response_single_2, err = client:TlsCertificatesAndHostnamesCertificateResponseSingle2():load({ certificate_id = "certificate_id" })
```

#### Example: List

```lua
local tls_certificates_and_hostnames_certificate_response_single_2s, err = client:TlsCertificatesAndHostnamesCertificateResponseSingle2():list()
```

#### Example: Create

```lua
local tls_certificates_and_hostnames_certificate_response_single_2, err = client:TlsCertificatesAndHostnamesCertificateResponseSingle2():create({
  csr = "example_csr", -- string
  hostnames = {}, -- table
  request_type = "example_request_type", -- string
  result = {}, -- table
})
```


### TlsCertificatesAndHostnamesCertificateResponseSingle3

Create an instance: `local tls_certificates_and_hostnames_certificate_response_single_3 = client:TlsCertificatesAndHostnamesCertificateResponseSingle3(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `certificate` | `string` | The zone's leaf certificate. |
| `private_key` | `string` | The zone's private key. |
| `result` | `table` |  |

#### Example: Load

```lua
local tls_certificates_and_hostnames_certificate_response_single_3, err = client:TlsCertificatesAndHostnamesCertificateResponseSingle3():load({ certificate_id = "certificate_id", zone_id = "zone_id" })
```

#### Example: Create

```lua
local tls_certificates_and_hostnames_certificate_response_single_3, err = client:TlsCertificatesAndHostnamesCertificateResponseSingle3():create({
  zone_id = "example_zone_id", -- string
  certificate = "example_certificate", -- string
  private_key = "example_private_key", -- string
})
```


### TlsCertificatesAndHostnamesCertificateResponseSingle4

Create an instance: `local tls_certificates_and_hostnames_certificate_response_single_4 = client:TlsCertificatesAndHostnamesCertificateResponseSingle4(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `certificate` | `string` | The hostname certificate. |
| `private_key` | `string` | The hostname certificate's private key. |
| `result` | `table` |  |

#### Example: Load

```lua
local tls_certificates_and_hostnames_certificate_response_single_4, err = client:TlsCertificatesAndHostnamesCertificateResponseSingle4():load({ certificate_id = "certificate_id", zone_id = "zone_id" })
```

#### Example: Create

```lua
local tls_certificates_and_hostnames_certificate_response_single_4, err = client:TlsCertificatesAndHostnamesCertificateResponseSingle4():create({
  zone_id = "example_zone_id", -- string
  certificate = "example_certificate", -- string
  private_key = "example_private_key", -- string
})
```


### TlsCertificatesAndHostnamesCertificateResponseSingle5

Create an instance: `local tls_certificates_and_hostnames_certificate_response_single_5 = client:TlsCertificatesAndHostnamesCertificateResponseSingle5(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: Load

```lua
local tls_certificates_and_hostnames_certificate_response_single_5, err = client:TlsCertificatesAndHostnamesCertificateResponseSingle5():load({ account_id = "account_id", mtls_certificate_id = "mtls_certificate_id" })
```


### TlsCertificatesAndHostnamesCertificateResponseSinglePost

Create an instance: `local tls_certificates_and_hostnames_certificate_response_single_post = client:TlsCertificatesAndHostnamesCertificateResponseSinglePost(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ca` | `boolean` | Indicates whether the certificate is a CA or leaf certificate. |
| `certificates` | `string` | The uploaded root CA certificate. |
| `name` | `string` | Optional unique name for the certificate. |
| `private_key` | `string` | The private key for the certificate. |

#### Example: Create

```lua
local tls_certificates_and_hostnames_certificate_response_single_post, err = client:TlsCertificatesAndHostnamesCertificateResponseSinglePost():create({
  account_id = "example_account_id", -- string
  ca = true, -- boolean
  certificates = "example_certificates", -- string
})
```


### TlsCertificatesAndHostnamesCertificateRevoke

Create an instance: `local tls_certificates_and_hostnames_certificate_revoke = client:TlsCertificatesAndHostnamesCertificateRevoke(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TlsCertificatesAndHostnamesClientCertificateResponse

Create an instance: `local tls_certificates_and_hostnames_client_certificate_response = client:TlsCertificatesAndHostnamesClientCertificateResponse(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local tls_certificates_and_hostnames_client_certificate_responses, err = client:TlsCertificatesAndHostnamesClientCertificateResponse():list()
```


### TlsCertificatesAndHostnamesClientCertificateResponseSingle

Create an instance: `local tls_certificates_and_hostnames_client_certificate_response_single = client:TlsCertificatesAndHostnamesClientCertificateResponseSingle(nil)`

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
| `csr` | `string` | The Certificate Signing Request (CSR). |
| `reactivate` | `boolean` |  |
| `result` | `table` |  |
| `validity_days` | `number` | The number of days the Client Certificate will be valid after the issued_on date. |

#### Example: Load

```lua
local tls_certificates_and_hostnames_client_certificate_response_single, err = client:TlsCertificatesAndHostnamesClientCertificateResponseSingle():load({ client_certificate_id = "client_certificate_id", zone_id = "zone_id" })
```

#### Example: Create

```lua
local tls_certificates_and_hostnames_client_certificate_response_single, err = client:TlsCertificatesAndHostnamesClientCertificateResponseSingle():create({
  zone_id = "example_zone_id", -- string
  csr = "example_csr", -- string
  validity_days = 1, -- number
})
```


### TlsCertificatesAndHostnamesCustomCsrResponseCollection

Create an instance: `local tls_certificates_and_hostnames_custom_csr_response_collection = client:TlsCertificatesAndHostnamesCustomCsrResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local tls_certificates_and_hostnames_custom_csr_response_collections, err = client:TlsCertificatesAndHostnamesCustomCsrResponseCollection():list()
```


### TlsCertificatesAndHostnamesCustomCsrResponseCollection2

Create an instance: `local tls_certificates_and_hostnames_custom_csr_response_collection_2 = client:TlsCertificatesAndHostnamesCustomCsrResponseCollection2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local tls_certificates_and_hostnames_custom_csr_response_collection_2s, err = client:TlsCertificatesAndHostnamesCustomCsrResponseCollection2():list()
```


### TlsCertificatesAndHostnamesCustomCsrResponseIdOnly

Create an instance: `local tls_certificates_and_hostnames_custom_csr_response_id_only = client:TlsCertificatesAndHostnamesCustomCsrResponseIdOnly(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TlsCertificatesAndHostnamesCustomCsrResponseSingle

Create an instance: `local tls_certificates_and_hostnames_custom_csr_response_single = client:TlsCertificatesAndHostnamesCustomCsrResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `common_name` | `string` | The common name (domain) for the CSR. |
| `country` | `string` | Two-letter ISO 3166-1 alpha-2 country code. |
| `key_type` | `string` | Key algorithm to use for the CSR. |
| `locality` | `string` | City or locality name. |
| `organization` | `string` | Organization name. |
| `organizational_unit` | `string` | Organizational unit name. |
| `result` | `table` | A custom Certificate Signing Request (CSR). |
| `sans` | `table` | Subject Alternative Names for the CSR. |
| `state` | `string` | State or province name. |

#### Example: Load

```lua
local tls_certificates_and_hostnames_custom_csr_response_single, err = client:TlsCertificatesAndHostnamesCustomCsrResponseSingle():load({ custom_csr_id = "custom_csr_id", zone_id = "zone_id" })
```

#### Example: Create

```lua
local tls_certificates_and_hostnames_custom_csr_response_single, err = client:TlsCertificatesAndHostnamesCustomCsrResponseSingle():create({
  zone_id = "example_zone_id", -- string
  common_name = "example_common_name", -- string
  country = "example_country", -- string
  locality = "example_locality", -- string
  organization = "example_organization", -- string
  result = {}, -- table
  sans = {}, -- table
  state = "example_state", -- string
})
```


### TlsCertificatesAndHostnamesCustomCsrResponseSingle2

Create an instance: `local tls_certificates_and_hostnames_custom_csr_response_single_2 = client:TlsCertificatesAndHostnamesCustomCsrResponseSingle2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `common_name` | `string` | The common name (domain) for the CSR. |
| `country` | `string` | Two-letter ISO 3166-1 alpha-2 country code. |
| `description` | `string` | Optional description for the CSR. |
| `key_type` | `string` | Key algorithm to use for the CSR. |
| `locality` | `string` | City or locality name. |
| `name` | `string` | Human-readable name for the CSR. |
| `organization` | `string` | Organization name. |
| `organizational_unit` | `string` | Organizational unit name. |
| `result` | `table` | A custom Certificate Signing Request (CSR). |
| `sans` | `table` | Subject Alternative Names for the CSR. |
| `state` | `string` | State or province name. |

#### Example: Load

```lua
local tls_certificates_and_hostnames_custom_csr_response_single_2, err = client:TlsCertificatesAndHostnamesCustomCsrResponseSingle2():load({ account_id = "account_id", custom_csr_id = "custom_csr_id" })
```

#### Example: Create

```lua
local tls_certificates_and_hostnames_custom_csr_response_single_2, err = client:TlsCertificatesAndHostnamesCustomCsrResponseSingle2():create({
  account_id = "example_account_id", -- string
  common_name = "example_common_name", -- string
  country = "example_country", -- string
  locality = "example_locality", -- string
  organization = "example_organization", -- string
  result = {}, -- table
  sans = {}, -- table
  state = "example_state", -- string
})
```


### TlsCertificatesAndHostnamesCustomHostnameQuota

Create an instance: `local tls_certificates_and_hostnames_custom_hostname_quota = client:TlsCertificatesAndHostnamesCustomHostnameQuota(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` | Informational messages returned by the custom hostname API. |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local tls_certificates_and_hostnames_custom_hostname_quotas, err = client:TlsCertificatesAndHostnamesCustomHostnameQuota():list()
```


### TlsCertificatesAndHostnamesCustomHostnameResponseCollection

Create an instance: `local tls_certificates_and_hostnames_custom_hostname_response_collection = client:TlsCertificatesAndHostnamesCustomHostnameResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` | Informational messages returned by the custom hostname API. |
| `result` | `table` |  |
| `result_info` | `table` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local tls_certificates_and_hostnames_custom_hostname_response_collections, err = client:TlsCertificatesAndHostnamesCustomHostnameResponseCollection():list()
```


### TlsCertificatesAndHostnamesCustomHostnameResponseSingle

Create an instance: `local tls_certificates_and_hostnames_custom_hostname_response_single = client:TlsCertificatesAndHostnamesCustomHostnameResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `custom_metadata` | `table` | Unique key/value metadata for this hostname. |
| `custom_origin_server` | `string` | a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record. |
| `custom_origin_sni` | `string` | A hostname that will be sent to your custom origin server as SNI for TLS handshake. |
| `errors` | `table` |  |
| `hostname` | `string` | The custom hostname that will point to your hostname via CNAME. |
| `messages` | `table` | Informational messages returned by the custom hostname API. |
| `result` | `table` |  |
| `ssl` | `table` | SSL properties used when creating the custom hostname. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```lua
local tls_certificates_and_hostnames_custom_hostname_response_single, err = client:TlsCertificatesAndHostnamesCustomHostnameResponseSingle():load({ custom_hostname_id = "custom_hostname_id", zone_id = "zone_id" })
```

#### Example: Create

```lua
local tls_certificates_and_hostnames_custom_hostname_response_single, err = client:TlsCertificatesAndHostnamesCustomHostnameResponseSingle():create({
  zone_id = "example_zone_id", -- string
  errors = {}, -- table
  hostname = "example_hostname", -- string
  messages = {}, -- table
  success = true, -- boolean
})
```


### TlsCertificatesAndHostnamesCustomTrustStoreResponse

Create an instance: `local tls_certificates_and_hostnames_custom_trust_store_response = client:TlsCertificatesAndHostnamesCustomTrustStoreResponse(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local tls_certificates_and_hostnames_custom_trust_store_responses, err = client:TlsCertificatesAndHostnamesCustomTrustStoreResponse():list()
```


### TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly

Create an instance: `local tls_certificates_and_hostnames_custom_trust_store_response_id_only = client:TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle

Create an instance: `local tls_certificates_and_hostnames_custom_trust_store_response_single = client:TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `certificate` | `string` | The root CA certificate in PEM format. |
| `result` | `table` |  |

#### Example: Load

```lua
local tls_certificates_and_hostnames_custom_trust_store_response_single, err = client:TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle():load({ custom_origin_trust_store_id = "custom_origin_trust_store_id", zone_id = "zone_id" })
```

#### Example: Create

```lua
local tls_certificates_and_hostnames_custom_trust_store_response_single, err = client:TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle():create({
  zone_id = "example_zone_id", -- string
  certificate = "example_certificate", -- string
  result = {}, -- table
})
```


### TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack

Create an instance: `local tls_certificates_and_hostnames_delete_advanced_certificate_pack = client:TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### TlsCertificatesAndHostnamesEnabled

Create an instance: `local tls_certificates_and_hostnames_enabled = client:TlsCertificatesAndHostnamesEnabled(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `boolean` | Indicates whether zone-level authenticated origin pulls is enabled. |
| `result` | `table` |  |

#### Example: Load

```lua
local tls_certificates_and_hostnames_enabled, err = client:TlsCertificatesAndHostnamesEnabled():load({ zone_id = "zone_id" })
```


### TlsCertificatesAndHostnamesFallbackOrigin

Create an instance: `local tls_certificates_and_hostnames_fallback_origin = client:TlsCertificatesAndHostnamesFallbackOrigin(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `origin` | `string` | Your origin hostname that requests to your custom hostnames will be sent to. |
| `result` | `table` |  |

#### Example: Load

```lua
local tls_certificates_and_hostnames_fallback_origin, err = client:TlsCertificatesAndHostnamesFallbackOrigin():load({ zone_id = "zone_id" })
```


### TlsCertificatesAndHostnamesHostnameAopResponseCollection

Create an instance: `local tls_certificates_and_hostnames_hostname_aop_response_collection = client:TlsCertificatesAndHostnamesHostnameAopResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `table` |  |


### TlsCertificatesAndHostnamesHostnameAopSingle

Create an instance: `local tls_certificates_and_hostnames_hostname_aop_single = client:TlsCertificatesAndHostnamesHostnameAopSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: Load

```lua
local tls_certificates_and_hostnames_hostname_aop_single, err = client:TlsCertificatesAndHostnamesHostnameAopSingle():load({ hostname = "hostname", zone_id = "zone_id" })
```


### TlsCertificatesAndHostnamesHostnameAssocResponseCollection

Create an instance: `local tls_certificates_and_hostnames_hostname_assoc_response_collection = client:TlsCertificatesAndHostnamesHostnameAssocResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |
| `result_info` | `table` |  |

#### Example: List

```lua
local tls_certificates_and_hostnames_hostname_assoc_response_collections, err = client:TlsCertificatesAndHostnamesHostnameAssocResponseCollection():list()
```


### TlsCertificatesAndHostnamesKeylessResponseCollection

Create an instance: `local tls_certificates_and_hostnames_keyless_response_collection = client:TlsCertificatesAndHostnamesKeylessResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local tls_certificates_and_hostnames_keyless_response_collections, err = client:TlsCertificatesAndHostnamesKeylessResponseCollection():list()
```


### TlsCertificatesAndHostnamesKeylessResponseSingle

Create an instance: `local tls_certificates_and_hostnames_keyless_response_single = client:TlsCertificatesAndHostnamesKeylessResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bundle_method` | `string` | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| `certificate` | `string` | The zone's SSL certificate or SSL certificate and intermediate(s). |
| `enabled` | `boolean` | Whether or not the Keyless SSL is on or off. |
| `host` | `string` | The keyless SSL name. |
| `name` | `string` | The keyless SSL name. |
| `port` | `number` | The keyless SSL port used to communicate between Cloudflare and the client's Keyless SSL server. |
| `result` | `table` |  |
| `tunnel` | `table` | Configuration for using Keyless SSL through a Cloudflare Tunnel. |

#### Example: Load

```lua
local tls_certificates_and_hostnames_keyless_response_single, err = client:TlsCertificatesAndHostnamesKeylessResponseSingle():load({ keyless_certificate_id = "keyless_certificate_id", zone_id = "zone_id" })
```

#### Example: Create

```lua
local tls_certificates_and_hostnames_keyless_response_single, err = client:TlsCertificatesAndHostnamesKeylessResponseSingle():create({
  zone_id = "example_zone_id", -- string
  certificate = "example_certificate", -- string
  host = "example_host", -- string
  port = 1, -- number
  tunnel = {}, -- table
})
```


### TlsCertificatesAndHostnamesKeylessResponseSingleId

Create an instance: `local tls_certificates_and_hostnames_keyless_response_single_id = client:TlsCertificatesAndHostnamesKeylessResponseSingleId(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TlsCertificatesAndHostnamesPerHostnameSetting

Create an instance: `local tls_certificates_and_hostnames_per_hostname_setting = client:TlsCertificatesAndHostnamesPerHostnameSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `table` |  |
| `value` | `any` | The TLS setting value. |

#### Example: Load

```lua
local tls_certificates_and_hostnames_per_hostname_setting, err = client:TlsCertificatesAndHostnamesPerHostnameSetting():load({ hostname = "hostname", setting_id = "setting_id", zone_id = "zone_id" })
```


### TlsCertificatesAndHostnamesPerHostnameSettingsResponse

Create an instance: `local tls_certificates_and_hostnames_per_hostname_settings_response = client:TlsCertificatesAndHostnamesPerHostnameSettingsResponse(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |
| `result_info` | `table` |  |

#### Example: Load

```lua
local tls_certificates_and_hostnames_per_hostname_settings_response, err = client:TlsCertificatesAndHostnamesPerHostnameSettingsResponse():load({ setting_id = "setting_id", zone_id = "zone_id" })
```


### TlsCertificatesAndHostnamesPerHostnameSettingsResponse2

Create an instance: `local tls_certificates_and_hostnames_per_hostname_settings_response2 = client:TlsCertificatesAndHostnamesPerHostnameSettingsResponse2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### TlsCertificatesAndHostnamesSslUniversalSetting

Create an instance: `local tls_certificates_and_hostnames_ssl_universal_setting = client:TlsCertificatesAndHostnamesSslUniversalSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `boolean` | Disabling Universal SSL removes any currently active Universal SSL certificates for your zone from the edge and prevents any future Universal SSL certificates from being ordered. |
| `result` | `table` |  |

#### Example: Load

```lua
local tls_certificates_and_hostnames_ssl_universal_setting, err = client:TlsCertificatesAndHostnamesSslUniversalSetting():load({ zone_id = "zone_id" })
```


### TlsCertificatesAndHostnamesSslValidationMethodResponse

Create an instance: `local tls_certificates_and_hostnames_ssl_validation_method_response = client:TlsCertificatesAndHostnamesSslValidationMethodResponse(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `validation_method` | `string` | Desired validation method. |


### TlsCertificatesAndHostnamesSslVerificationResponseCollection

Create an instance: `local tls_certificates_and_hostnames_ssl_verification_response_collection = client:TlsCertificatesAndHostnamesSslVerificationResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `table` |  |

#### Example: List

```lua
local tls_certificates_and_hostnames_ssl_verification_response_collections, err = client:TlsCertificatesAndHostnamesSslVerificationResponseCollection():list()
```


### TlsCertificatesAndHostnamesTotalTlsSetting

Create an instance: `local tls_certificates_and_hostnames_total_tls_setting = client:TlsCertificatesAndHostnamesTotalTlsSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `certificate_authority` | `string` | The Certificate Authority that Total TLS certificates will be issued through. |
| `enabled` | `boolean` | If enabled, Total TLS will order a hostname specific TLS certificate for any proxied A, AAAA, or CNAME record in your zone. |
| `result` | `table` |  |

#### Example: Load

```lua
local tls_certificates_and_hostnames_total_tls_setting, err = client:TlsCertificatesAndHostnamesTotalTlsSetting():load({ zone_id = "zone_id" })
```

#### Example: Create

```lua
local tls_certificates_and_hostnames_total_tls_setting, err = client:TlsCertificatesAndHostnamesTotalTlsSetting():create({
  zone_id = "example_zone_id", -- string
  enabled = true, -- boolean
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

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── cloudflare-ssl_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── schema.lua               -- Generated option + entity specs
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`cloudflare-ssl_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```lua
local tlscertificatesandhostnamesperhostnamesettingsresponse = client:TlsCertificatesAndHostnamesPerHostnameSettingsResponse()
tlscertificatesandhostnamesperhostnamesettingsresponse:load({ setting_id = "example", zone_id = "example" })

-- tlscertificatesandhostnamesperhostnamesettingsresponse:data_get() now returns the tlscertificatesandhostnamesperhostnamesettingsresponse data from the last load
-- tlscertificatesandhostnamesperhostnamesettingsresponse:match_get() returns the last match criteria
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
