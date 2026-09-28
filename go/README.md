# CloudflareSsl Golang SDK



The Golang SDK for the CloudflareSsl API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.CacheApiResponseSingleId(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`, `Patch`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/cloudflare-ssl-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/cloudflare-ssl-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/cloudflare-ssl-sdk/go=../cloudflare-ssl-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/cloudflare-ssl-sdk/go"
)

func main() {
    client := sdk.NewCloudflareSslSDK(map[string]any{
        "apikey": os.Getenv("CLOUDFLARE_SSL_APIKEY"),
    })

    // Update a cacheApiResponseSingleId.
    updated, err := client.CacheApiResponseSingleId(nil).Update(map[string]any{"zone_id": "example_zone_id", "errors": []any{}}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(updated)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
tlscertificatesandhostnamesperhostnamesettingsresponse, err := client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse(nil).Load(map[string]any{"setting_id": "example", "zone_id": "example"}, nil)
if err != nil {
    // handle err
    return
}
_ = tlscertificatesandhostnamesperhostnamesettingsresponse
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

tlsCertificatesAndHostnamesPerHostnameSettingsResponse, err := client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse(nil).Load(
    map[string]any{"setting_id": "example", "zone_id": "example"}, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesPerHostnameSettingsResponse) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewCloudflareSslSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewCloudflareSslSDK

```go
func NewCloudflareSslSDK(options map[string]any) *CloudflareSslSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *CloudflareSslSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareSslSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `CacheApiResponseSingleId` | `(data map[string]any) CloudflareSslEntity` | Create a CacheApiResponseSingleId entity instance. |
| `CacheAutoOriginTlsKex` | `(data map[string]any) CloudflareSslEntity` | Create a CacheAutoOriginTlsKex entity instance. |
| `CustomHostname` | `(data map[string]any) CloudflareSslEntity` | Create a CustomHostname entity instance. |
| `CustomHostnameForAZone` | `(data map[string]any) CloudflareSslEntity` | Create a CustomHostnameForAZone entity instance. |
| `OriginTl` | `(data map[string]any) CloudflareSslEntity` | Create an OriginTl entity instance. |
| `Recommendation` | `(data map[string]any) CloudflareSslEntity` | Create a Recommendation entity instance. |
| `SslAutomaticMode` | `(data map[string]any) CloudflareSslEntity` | Create a SslAutomaticMode entity instance. |
| `TlsCertificatesAndHostnamesAdvancedCertificatePackResponse` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesAdvancedCertificatePackResponse entity instance. |
| `TlsCertificatesAndHostnamesAssociationResponseCollection` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesAssociationResponseCollection entity instance. |
| `TlsCertificatesAndHostnamesCertificateAnalyze` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesCertificateAnalyze entity instance. |
| `TlsCertificatesAndHostnamesCertificatePackQuota` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesCertificatePackQuota entity instance. |
| `TlsCertificatesAndHostnamesCertificatePackResponseCollection` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesCertificatePackResponseCollection entity instance. |
| `TlsCertificatesAndHostnamesCertificatePackResponseSingle` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesCertificatePackResponseSingle entity instance. |
| `TlsCertificatesAndHostnamesCertificateResponseCollection` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesCertificateResponseCollection entity instance. |
| `TlsCertificatesAndHostnamesCertificateResponseCollection3` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesCertificateResponseCollection3 entity instance. |
| `TlsCertificatesAndHostnamesCertificateResponseCollection4` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesCertificateResponseCollection4 entity instance. |
| `TlsCertificatesAndHostnamesCertificateResponseCollection5` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesCertificateResponseCollection5 entity instance. |
| `TlsCertificatesAndHostnamesCertificateResponseIdOnly` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesCertificateResponseIdOnly entity instance. |
| `TlsCertificatesAndHostnamesCertificateResponseSingle` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesCertificateResponseSingle entity instance. |
| `TlsCertificatesAndHostnamesCertificateResponseSingle2` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesCertificateResponseSingle2 entity instance. |
| `TlsCertificatesAndHostnamesCertificateResponseSingle3` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesCertificateResponseSingle3 entity instance. |
| `TlsCertificatesAndHostnamesCertificateResponseSingle4` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesCertificateResponseSingle4 entity instance. |
| `TlsCertificatesAndHostnamesCertificateResponseSingle5` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesCertificateResponseSingle5 entity instance. |
| `TlsCertificatesAndHostnamesCertificateResponseSinglePost` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesCertificateResponseSinglePost entity instance. |
| `TlsCertificatesAndHostnamesCertificateRevoke` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesCertificateRevoke entity instance. |
| `TlsCertificatesAndHostnamesClientCertificateResponse` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesClientCertificateResponse entity instance. |
| `TlsCertificatesAndHostnamesClientCertificateResponseSingle` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesClientCertificateResponseSingle entity instance. |
| `TlsCertificatesAndHostnamesCustomCsrResponseCollection` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesCustomCsrResponseCollection entity instance. |
| `TlsCertificatesAndHostnamesCustomCsrResponseCollection2` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesCustomCsrResponseCollection2 entity instance. |
| `TlsCertificatesAndHostnamesCustomCsrResponseIdOnly` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesCustomCsrResponseIdOnly entity instance. |
| `TlsCertificatesAndHostnamesCustomCsrResponseSingle` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesCustomCsrResponseSingle entity instance. |
| `TlsCertificatesAndHostnamesCustomCsrResponseSingle2` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesCustomCsrResponseSingle2 entity instance. |
| `TlsCertificatesAndHostnamesCustomHostnameQuota` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesCustomHostnameQuota entity instance. |
| `TlsCertificatesAndHostnamesCustomHostnameResponseCollection` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesCustomHostnameResponseCollection entity instance. |
| `TlsCertificatesAndHostnamesCustomHostnameResponseSingle` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesCustomHostnameResponseSingle entity instance. |
| `TlsCertificatesAndHostnamesCustomTrustStoreResponse` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesCustomTrustStoreResponse entity instance. |
| `TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly entity instance. |
| `TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle entity instance. |
| `TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack entity instance. |
| `TlsCertificatesAndHostnamesEnabled` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesEnabled entity instance. |
| `TlsCertificatesAndHostnamesFallbackOrigin` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesFallbackOrigin entity instance. |
| `TlsCertificatesAndHostnamesHostnameAopResponseCollection` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesHostnameAopResponseCollection entity instance. |
| `TlsCertificatesAndHostnamesHostnameAopSingle` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesHostnameAopSingle entity instance. |
| `TlsCertificatesAndHostnamesHostnameAssocResponseCollection` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesHostnameAssocResponseCollection entity instance. |
| `TlsCertificatesAndHostnamesKeylessResponseCollection` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesKeylessResponseCollection entity instance. |
| `TlsCertificatesAndHostnamesKeylessResponseSingle` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesKeylessResponseSingle entity instance. |
| `TlsCertificatesAndHostnamesKeylessResponseSingleId` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesKeylessResponseSingleId entity instance. |
| `TlsCertificatesAndHostnamesPerHostnameSetting` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesPerHostnameSetting entity instance. |
| `TlsCertificatesAndHostnamesPerHostnameSettingsResponse` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesPerHostnameSettingsResponse entity instance. |
| `TlsCertificatesAndHostnamesPerHostnameSettingsResponse2` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesPerHostnameSettingsResponse2 entity instance. |
| `TlsCertificatesAndHostnamesSslUniversalSetting` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesSslUniversalSetting entity instance. |
| `TlsCertificatesAndHostnamesSslValidationMethodResponse` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesSslValidationMethodResponse entity instance. |
| `TlsCertificatesAndHostnamesSslVerificationResponseCollection` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesSslVerificationResponseCollection entity instance. |
| `TlsCertificatesAndHostnamesTotalTlsSetting` | `(data map[string]any) CloudflareSslEntity` | Create a TlsCertificatesAndHostnamesTotalTlsSetting entity instance. |

### Entity interface (CloudflareSslEntity)

All entities implement the `CloudflareSslEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    cacheApiResponseSingleId, err := client.CacheApiResponseSingleId(nil).Update(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // cacheApiResponseSingleId is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### CacheApiResponseSingleId

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Indicates the API call's success or failure. |
| `"value"` | Controls enablement of Automatic SSL/TLS. |

Operations: Update.

API path: `/zones/{zone_id}/settings/ssl_automatic_mode`

#### CacheAutoOriginTlsKex

| Field | Description |
| --- | --- |
| `"enabled"` | Controls enablement of Auto-Origin TLS KEX selection for the zone. |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Indicates the API call's success or failure. |

Operations: List, Update.

API path: `/zones/{zone_id}/settings/auto_origin_tls_kex`

#### CustomHostname

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/zones/{zone_id}/custom_hostnames/{custom_hostname_id}`

#### CustomHostnameForAZone

| Field | Description |
| --- | --- |
| `"custom_certificate"` | If a custom uploaded certificate is used. |
| `"custom_key"` | The key for a custom uploaded certificate. |

Operations: Remove, Update.

API path: `/zones/{zone_id}/custom_hostnames/{custom_hostname_id}/certificate_pack/{certificate_pack_id}/certificates/{certificate_id}`

#### OriginTl

| Field | Description |
| --- | --- |
| `"result"` |  |
| `"value"` | List of TLS compliance modes that constrain the key-exchange algorithms Cloudflare may use when establishing the TLS connection to the zone's origin. |

Operations: Load, Patch, Remove, Update.

API path: `/zones/{zone_id}/settings/origin_tls_compliance_modes`

#### Recommendation

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Indicates the API call's success or failure. |

Operations: List.

API path: `/zones/{zone_id}/ssl/recommendation`

#### SslAutomaticMode

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Indicates the API call's success or failure. |

Operations: List.

API path: `/zones/{zone_id}/settings/ssl_automatic_mode`

#### TlsCertificatesAndHostnamesAdvancedCertificatePackResponse

| Field | Description |
| --- | --- |
| `"certificate_authority"` | Certificate Authority selected for the order. |
| `"cloudflare_branding"` | Whether or not to add Cloudflare Branding for the order. |
| `"hosts"` | Comma separated list of valid host names for the certificate packs. |
| `"type"` | Type of certificate pack. |
| `"validation_method"` | Validation Method selected for the order. |
| `"validity_days"` | Validity Days selected for the order. |

Operations: Create, Update.

API path: `/zones/{zone_id}/ssl/certificate_packs/order`

#### TlsCertificatesAndHostnamesAssociationResponseCollection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/accounts/{account_id}/mtls_certificates/{mtls_certificate_id}/associations`

#### TlsCertificatesAndHostnamesCertificateAnalyze

| Field | Description |
| --- | --- |
| `"bundle_method"` | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| `"certificate"` | The zone's SSL certificate or certificate and the intermediate(s). |

Operations: Create.

API path: `/zones/{zone_id}/ssl/analyze`

#### TlsCertificatesAndHostnamesCertificatePackQuota

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: Load.

API path: `/zones/{zone_id}/ssl/certificate_packs/quota`

#### TlsCertificatesAndHostnamesCertificatePackResponseCollection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/zones/{zone_id}/ssl/certificate_packs`

#### TlsCertificatesAndHostnamesCertificatePackResponseSingle

| Field | Description |
| --- | --- |
| `"result"` | A certificate pack with all its properties. |

Operations: Load.

API path: `/zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}`

#### TlsCertificatesAndHostnamesCertificateResponseCollection

| Field | Description |
| --- | --- |
| `"certificates"` | Array of ordered certificates. |
| `"result"` |  |

Operations: List, Update.

API path: `/zones/{zone_id}/custom_certificates`

#### TlsCertificatesAndHostnamesCertificateResponseCollection3

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/zones/{zone_id}/origin_tls_client_auth`

#### TlsCertificatesAndHostnamesCertificateResponseCollection4

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/zones/{zone_id}/origin_tls_client_auth/hostnames/certificates`

#### TlsCertificatesAndHostnamesCertificateResponseCollection5

| Field | Description |
| --- | --- |
| `"result"` |  |
| `"result_info"` |  |

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
| `"bundle_method"` | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| `"certificate"` | The zone's SSL certificate or certificate and the intermediate(s). |
| `"custom_csr_id"` | The identifier for the Custom CSR that was used. |
| `"deploy"` | The environment to deploy the certificate to, defaults to production. |
| `"geo_restrictions"` | Specify the region where your private key can be held locally for optimal TLS performance. |
| `"policy"` | Specify the policy that determines the region where your private key will be held locally. |
| `"private_key"` | The zone's private key. |
| `"result"` |  |
| `"type"` | The type 'legacy_custom' enables support for legacy clients which do not include SNI in the TLS handshake. |

Operations: Create, Load, Update.

API path: `/zones/{zone_id}/custom_certificates`

#### TlsCertificatesAndHostnamesCertificateResponseSingle2

| Field | Description |
| --- | --- |
| `"csr"` | The Certificate Signing Request (CSR). |
| `"hostnames"` | Array of hostnames or wildcard names bound to the certificate. |
| `"request_type"` | Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa), or "keyless-certificate" (for Keyless SSL servers). |
| `"requested_validity"` | The number of days for which the certificate should be valid. |
| `"result"` |  |

Operations: Create, List, Load.

API path: `/certificates`

#### TlsCertificatesAndHostnamesCertificateResponseSingle3

| Field | Description |
| --- | --- |
| `"certificate"` | The zone's leaf certificate. |
| `"private_key"` | The zone's private key. |
| `"result"` |  |

Operations: Create, Load, Remove.

API path: `/zones/{zone_id}/origin_tls_client_auth`

#### TlsCertificatesAndHostnamesCertificateResponseSingle4

| Field | Description |
| --- | --- |
| `"certificate"` | The hostname certificate. |
| `"private_key"` | The hostname certificate's private key. |
| `"result"` |  |

Operations: Create, Load, Remove.

API path: `/zones/{zone_id}/origin_tls_client_auth/hostnames/certificates`

#### TlsCertificatesAndHostnamesCertificateResponseSingle5

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: Load, Remove.

API path: `/accounts/{account_id}/mtls_certificates/{mtls_certificate_id}`

#### TlsCertificatesAndHostnamesCertificateResponseSinglePost

| Field | Description |
| --- | --- |
| `"ca"` | Indicates whether the certificate is a CA or leaf certificate. |
| `"certificates"` | The uploaded root CA certificate. |
| `"name"` | Optional unique name for the certificate. |
| `"private_key"` | The private key for the certificate. |

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
| `"result"` |  |

Operations: List.

API path: `/zones/{zone_id}/client_certificates`

#### TlsCertificatesAndHostnamesClientCertificateResponseSingle

| Field | Description |
| --- | --- |
| `"csr"` | The Certificate Signing Request (CSR). |
| `"reactivate"` |  |
| `"result"` |  |
| `"validity_days"` | The number of days the Client Certificate will be valid after the issued_on date. |

Operations: Create, Load, Remove, Update.

API path: `/zones/{zone_id}/client_certificates`

#### TlsCertificatesAndHostnamesCustomCsrResponseCollection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/zones/{zone_id}/custom_csrs`

#### TlsCertificatesAndHostnamesCustomCsrResponseCollection2

| Field | Description |
| --- | --- |
| `"result"` |  |

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
| `"common_name"` | The common name (domain) for the CSR. |
| `"country"` | Two-letter ISO 3166-1 alpha-2 country code. |
| `"key_type"` | Key algorithm to use for the CSR. |
| `"locality"` | City or locality name. |
| `"organization"` | Organization name. |
| `"organizational_unit"` | Organizational unit name. |
| `"result"` | A custom Certificate Signing Request (CSR). |
| `"sans"` | Subject Alternative Names for the CSR. |
| `"state"` | State or province name. |

Operations: Create, Load.

API path: `/zones/{zone_id}/custom_csrs`

#### TlsCertificatesAndHostnamesCustomCsrResponseSingle2

| Field | Description |
| --- | --- |
| `"common_name"` | The common name (domain) for the CSR. |
| `"country"` | Two-letter ISO 3166-1 alpha-2 country code. |
| `"description"` | Optional description for the CSR. |
| `"key_type"` | Key algorithm to use for the CSR. |
| `"locality"` | City or locality name. |
| `"name"` | Human-readable name for the CSR. |
| `"organization"` | Organization name. |
| `"organizational_unit"` | Organizational unit name. |
| `"result"` | A custom Certificate Signing Request (CSR). |
| `"sans"` | Subject Alternative Names for the CSR. |
| `"state"` | State or province name. |

Operations: Create, Load.

API path: `/accounts/{account_id}/custom_csrs`

#### TlsCertificatesAndHostnamesCustomHostnameQuota

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` | Informational messages returned by the custom hostname API. |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |

Operations: List.

API path: `/zones/{zone_id}/custom_hostnames/quota`

#### TlsCertificatesAndHostnamesCustomHostnameResponseCollection

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` | Informational messages returned by the custom hostname API. |
| `"result"` |  |
| `"result_info"` |  |
| `"success"` | Whether the API call was successful. |

Operations: List.

API path: `/zones/{zone_id}/custom_hostnames`

#### TlsCertificatesAndHostnamesCustomHostnameResponseSingle

| Field | Description |
| --- | --- |
| `"custom_metadata"` | Unique key/value metadata for this hostname. |
| `"custom_origin_server"` | a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record. |
| `"custom_origin_sni"` | A hostname that will be sent to your custom origin server as SNI for TLS handshake. |
| `"errors"` |  |
| `"hostname"` | The custom hostname that will point to your hostname via CNAME. |
| `"messages"` | Informational messages returned by the custom hostname API. |
| `"result"` |  |
| `"ssl"` | SSL properties used when creating the custom hostname. |
| `"success"` | Whether the API call was successful. |

Operations: Create, Load, Update.

API path: `/zones/{zone_id}/custom_hostnames`

#### TlsCertificatesAndHostnamesCustomTrustStoreResponse

| Field | Description |
| --- | --- |
| `"result"` |  |

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
| `"certificate"` | The root CA certificate in PEM format. |
| `"result"` |  |

Operations: Create, Load.

API path: `/zones/{zone_id}/acm/custom_trust_store`

#### TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}`

#### TlsCertificatesAndHostnamesEnabled

| Field | Description |
| --- | --- |
| `"enabled"` | Indicates whether zone-level authenticated origin pulls is enabled. |
| `"result"` |  |

Operations: Load, Update.

API path: `/zones/{zone_id}/origin_tls_client_auth/settings`

#### TlsCertificatesAndHostnamesFallbackOrigin

| Field | Description |
| --- | --- |
| `"origin"` | Your origin hostname that requests to your custom hostnames will be sent to. |
| `"result"` |  |

Operations: Load, Remove, Update.

API path: `/zones/{zone_id}/custom_hostnames/fallback_origin`

#### TlsCertificatesAndHostnamesHostnameAopResponseCollection

| Field | Description |
| --- | --- |
| `"config"` |  |

Operations: Update.

API path: `/zones/{zone_id}/origin_tls_client_auth/hostnames`

#### TlsCertificatesAndHostnamesHostnameAopSingle

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: Load.

API path: `/zones/{zone_id}/origin_tls_client_auth/hostnames/{hostname}`

#### TlsCertificatesAndHostnamesHostnameAssocResponseCollection

| Field | Description |
| --- | --- |
| `"result"` |  |
| `"result_info"` |  |

Operations: List.

API path: `/zones/{zone_id}/origin_tls_client_auth/hostnames`

#### TlsCertificatesAndHostnamesKeylessResponseCollection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/zones/{zone_id}/keyless_certificates`

#### TlsCertificatesAndHostnamesKeylessResponseSingle

| Field | Description |
| --- | --- |
| `"bundle_method"` | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| `"certificate"` | The zone's SSL certificate or SSL certificate and intermediate(s). |
| `"enabled"` | Whether or not the Keyless SSL is on or off. |
| `"host"` | The keyless SSL name. |
| `"name"` | The keyless SSL name. |
| `"port"` | The keyless SSL port used to communicate between Cloudflare and the client's Keyless SSL server. |
| `"result"` |  |
| `"tunnel"` | Configuration for using Keyless SSL through a Cloudflare Tunnel. |

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
| `"id"` |  |
| `"result"` |  |
| `"value"` | The TLS setting value. |

Operations: Load, Update.

API path: `/zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}`

#### TlsCertificatesAndHostnamesPerHostnameSettingsResponse

| Field | Description |
| --- | --- |
| `"result"` |  |
| `"result_info"` |  |

Operations: Load.

API path: `/zones/{zone_id}/hostnames/settings/{setting_id}`

#### TlsCertificatesAndHostnamesPerHostnameSettingsResponse2

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}`

#### TlsCertificatesAndHostnamesSslUniversalSetting

| Field | Description |
| --- | --- |
| `"enabled"` | Disabling Universal SSL removes any currently active Universal SSL certificates for your zone from the edge and prevents any future Universal SSL certificates from being ordered. |
| `"result"` |  |

Operations: Load, Update.

API path: `/zones/{zone_id}/ssl/universal/settings`

#### TlsCertificatesAndHostnamesSslValidationMethodResponse

| Field | Description |
| --- | --- |
| `"validation_method"` | Desired validation method. |

Operations: Update.

API path: `/zones/{zone_id}/ssl/verification/{certificate_pack_id}`

#### TlsCertificatesAndHostnamesSslVerificationResponseCollection

| Field | Description |
| --- | --- |
| `"result"` |  |

Operations: List.

API path: `/zones/{zone_id}/ssl/verification`

#### TlsCertificatesAndHostnamesTotalTlsSetting

| Field | Description |
| --- | --- |
| `"certificate_authority"` | The Certificate Authority that Total TLS certificates will be issued through. |
| `"enabled"` | If enabled, Total TLS will order a hostname specific TLS certificate for any proxied A, AAAA, or CNAME record in your zone. |
| `"result"` |  |

Operations: Create, Load.

API path: `/zones/{zone_id}/acm/total_tls`



## Entities


### CacheApiResponseSingleId

Create an instance: `cacheApiResponseSingleId := client.CacheApiResponseSingleId(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` | Indicates the API call's success or failure. |
| `value` | `string` | Controls enablement of Automatic SSL/TLS. |


### CacheAutoOriginTlsKex

Create an instance: `cacheAutoOriginTlsKex := client.CacheAutoOriginTlsKex(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `bool` | Controls enablement of Auto-Origin TLS KEX selection for the zone. |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` | Indicates the API call's success or failure. |

#### Example: List

```go
cacheAutoOriginTlsKexs, err := client.CacheAutoOriginTlsKex(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(cacheAutoOriginTlsKexs) // the array of records
```


### CustomHostname

Create an instance: `customHostname := client.CustomHostname(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### CustomHostnameForAZone

Create an instance: `customHostnameForAZone := client.CustomHostnameForAZone(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `custom_certificate` | `string` | If a custom uploaded certificate is used. |
| `custom_key` | `string` | The key for a custom uploaded certificate. |


### OriginTl

Create an instance: `originTl := client.OriginTl(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `map[string]any` |  |
| `value` | `[]any` | List of TLS compliance modes that constrain the key-exchange algorithms Cloudflare may use when establishing the TLS connection to the zone's origin. |

#### Example: Load

```go
originTl, err := client.OriginTl(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(originTl) // the loaded record
```


### Recommendation

Create an instance: `recommendation := client.Recommendation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` | Indicates the API call's success or failure. |

#### Example: List

```go
recommendations, err := client.Recommendation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(recommendations) // the array of records
```


### SslAutomaticMode

Create an instance: `sslAutomaticMode := client.SslAutomaticMode(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` | Indicates the API call's success or failure. |

#### Example: List

```go
sslAutomaticModes, err := client.SslAutomaticMode(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(sslAutomaticModes) // the array of records
```


### TlsCertificatesAndHostnamesAdvancedCertificatePackResponse

Create an instance: `tlsCertificatesAndHostnamesAdvancedCertificatePackResponse := client.TlsCertificatesAndHostnamesAdvancedCertificatePackResponse(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `certificate_authority` | `string` | Certificate Authority selected for the order. |
| `cloudflare_branding` | `bool` | Whether or not to add Cloudflare Branding for the order. |
| `hosts` | `[]any` | Comma separated list of valid host names for the certificate packs. |
| `type` | `string` | Type of certificate pack. |
| `validation_method` | `string` | Validation Method selected for the order. |
| `validity_days` | `int` | Validity Days selected for the order. |

#### Example: Create

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


### TlsCertificatesAndHostnamesAssociationResponseCollection

Create an instance: `tlsCertificatesAndHostnamesAssociationResponseCollection := client.TlsCertificatesAndHostnamesAssociationResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
tlsCertificatesAndHostnamesAssociationResponseCollections, err := client.TlsCertificatesAndHostnamesAssociationResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesAssociationResponseCollections) // the array of records
```


### TlsCertificatesAndHostnamesCertificateAnalyze

Create an instance: `tlsCertificatesAndHostnamesCertificateAnalyze := client.TlsCertificatesAndHostnamesCertificateAnalyze(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bundle_method` | `string` | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| `certificate` | `string` | The zone's SSL certificate or certificate and the intermediate(s). |

#### Example: Create

```go
result, err := client.TlsCertificatesAndHostnamesCertificateAnalyze(nil).Create(map[string]any{
    "zone_id": "example_zone_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### TlsCertificatesAndHostnamesCertificatePackQuota

Create an instance: `tlsCertificatesAndHostnamesCertificatePackQuota := client.TlsCertificatesAndHostnamesCertificatePackQuota(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `map[string]any` |  |

#### Example: Load

```go
tlsCertificatesAndHostnamesCertificatePackQuota, err := client.TlsCertificatesAndHostnamesCertificatePackQuota(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesCertificatePackQuota) // the loaded record
```


### TlsCertificatesAndHostnamesCertificatePackResponseCollection

Create an instance: `tlsCertificatesAndHostnamesCertificatePackResponseCollection := client.TlsCertificatesAndHostnamesCertificatePackResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
tlsCertificatesAndHostnamesCertificatePackResponseCollections, err := client.TlsCertificatesAndHostnamesCertificatePackResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesCertificatePackResponseCollections) // the array of records
```


### TlsCertificatesAndHostnamesCertificatePackResponseSingle

Create an instance: `tlsCertificatesAndHostnamesCertificatePackResponseSingle := client.TlsCertificatesAndHostnamesCertificatePackResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `map[string]any` | A certificate pack with all its properties. |

#### Example: Load

```go
tlsCertificatesAndHostnamesCertificatePackResponseSingle, err := client.TlsCertificatesAndHostnamesCertificatePackResponseSingle(nil).Load(map[string]any{"certificate_pack_id": "certificate_pack_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesCertificatePackResponseSingle) // the loaded record
```


### TlsCertificatesAndHostnamesCertificateResponseCollection

Create an instance: `tlsCertificatesAndHostnamesCertificateResponseCollection := client.TlsCertificatesAndHostnamesCertificateResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `certificates` | `[]any` | Array of ordered certificates. |
| `result` | `[]any` |  |

#### Example: List

```go
tlsCertificatesAndHostnamesCertificateResponseCollections, err := client.TlsCertificatesAndHostnamesCertificateResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesCertificateResponseCollections) // the array of records
```


### TlsCertificatesAndHostnamesCertificateResponseCollection3

Create an instance: `tlsCertificatesAndHostnamesCertificateResponseCollection3 := client.TlsCertificatesAndHostnamesCertificateResponseCollection3(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
tlsCertificatesAndHostnamesCertificateResponseCollection3s, err := client.TlsCertificatesAndHostnamesCertificateResponseCollection3(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesCertificateResponseCollection3s) // the array of records
```


### TlsCertificatesAndHostnamesCertificateResponseCollection4

Create an instance: `tlsCertificatesAndHostnamesCertificateResponseCollection4 := client.TlsCertificatesAndHostnamesCertificateResponseCollection4(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
tlsCertificatesAndHostnamesCertificateResponseCollection4s, err := client.TlsCertificatesAndHostnamesCertificateResponseCollection4(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesCertificateResponseCollection4s) // the array of records
```


### TlsCertificatesAndHostnamesCertificateResponseCollection5

Create an instance: `tlsCertificatesAndHostnamesCertificateResponseCollection5 := client.TlsCertificatesAndHostnamesCertificateResponseCollection5(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |
| `result_info` | `map[string]any` |  |

#### Example: List

```go
tlsCertificatesAndHostnamesCertificateResponseCollection5s, err := client.TlsCertificatesAndHostnamesCertificateResponseCollection5(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesCertificateResponseCollection5s) // the array of records
```


### TlsCertificatesAndHostnamesCertificateResponseIdOnly

Create an instance: `tlsCertificatesAndHostnamesCertificateResponseIdOnly := client.TlsCertificatesAndHostnamesCertificateResponseIdOnly(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### TlsCertificatesAndHostnamesCertificateResponseSingle

Create an instance: `tlsCertificatesAndHostnamesCertificateResponseSingle := client.TlsCertificatesAndHostnamesCertificateResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bundle_method` | `string` | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| `certificate` | `string` | The zone's SSL certificate or certificate and the intermediate(s). |
| `custom_csr_id` | `string` | The identifier for the Custom CSR that was used. |
| `deploy` | `string` | The environment to deploy the certificate to, defaults to production. |
| `geo_restrictions` | `map[string]any` | Specify the region where your private key can be held locally for optimal TLS performance. |
| `policy` | `string` | Specify the policy that determines the region where your private key will be held locally. |
| `private_key` | `string` | The zone's private key. |
| `result` | `map[string]any` |  |
| `type` | `string` | The type 'legacy_custom' enables support for legacy clients which do not include SNI in the TLS handshake. |

#### Example: Load

```go
tlsCertificatesAndHostnamesCertificateResponseSingle, err := client.TlsCertificatesAndHostnamesCertificateResponseSingle(nil).Load(map[string]any{"custom_certificate_id": "custom_certificate_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesCertificateResponseSingle) // the loaded record
```

#### Example: Create

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


### TlsCertificatesAndHostnamesCertificateResponseSingle2

Create an instance: `tlsCertificatesAndHostnamesCertificateResponseSingle2 := client.TlsCertificatesAndHostnamesCertificateResponseSingle2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `csr` | `string` | The Certificate Signing Request (CSR). |
| `hostnames` | `[]any` | Array of hostnames or wildcard names bound to the certificate. |
| `request_type` | `string` | Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa), or "keyless-certificate" (for Keyless SSL servers). |
| `requested_validity` | `float64` | The number of days for which the certificate should be valid. |
| `result` | `map[string]any` |  |

#### Example: Load

```go
tlsCertificatesAndHostnamesCertificateResponseSingle2, err := client.TlsCertificatesAndHostnamesCertificateResponseSingle2(nil).Load(map[string]any{"certificate_id": "certificate_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesCertificateResponseSingle2) // the loaded record
```

#### Example: List

```go
tlsCertificatesAndHostnamesCertificateResponseSingle2s, err := client.TlsCertificatesAndHostnamesCertificateResponseSingle2(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesCertificateResponseSingle2s) // the array of records
```

#### Example: Create

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


### TlsCertificatesAndHostnamesCertificateResponseSingle3

Create an instance: `tlsCertificatesAndHostnamesCertificateResponseSingle3 := client.TlsCertificatesAndHostnamesCertificateResponseSingle3(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `certificate` | `string` | The zone's leaf certificate. |
| `private_key` | `string` | The zone's private key. |
| `result` | `map[string]any` |  |

#### Example: Load

```go
tlsCertificatesAndHostnamesCertificateResponseSingle3, err := client.TlsCertificatesAndHostnamesCertificateResponseSingle3(nil).Load(map[string]any{"certificate_id": "certificate_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesCertificateResponseSingle3) // the loaded record
```

#### Example: Create

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


### TlsCertificatesAndHostnamesCertificateResponseSingle4

Create an instance: `tlsCertificatesAndHostnamesCertificateResponseSingle4 := client.TlsCertificatesAndHostnamesCertificateResponseSingle4(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `certificate` | `string` | The hostname certificate. |
| `private_key` | `string` | The hostname certificate's private key. |
| `result` | `map[string]any` |  |

#### Example: Load

```go
tlsCertificatesAndHostnamesCertificateResponseSingle4, err := client.TlsCertificatesAndHostnamesCertificateResponseSingle4(nil).Load(map[string]any{"certificate_id": "certificate_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesCertificateResponseSingle4) // the loaded record
```

#### Example: Create

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


### TlsCertificatesAndHostnamesCertificateResponseSingle5

Create an instance: `tlsCertificatesAndHostnamesCertificateResponseSingle5 := client.TlsCertificatesAndHostnamesCertificateResponseSingle5(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `map[string]any` |  |

#### Example: Load

```go
tlsCertificatesAndHostnamesCertificateResponseSingle5, err := client.TlsCertificatesAndHostnamesCertificateResponseSingle5(nil).Load(map[string]any{"account_id": "account_id", "mtls_certificate_id": "mtls_certificate_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesCertificateResponseSingle5) // the loaded record
```


### TlsCertificatesAndHostnamesCertificateResponseSinglePost

Create an instance: `tlsCertificatesAndHostnamesCertificateResponseSinglePost := client.TlsCertificatesAndHostnamesCertificateResponseSinglePost(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ca` | `bool` | Indicates whether the certificate is a CA or leaf certificate. |
| `certificates` | `string` | The uploaded root CA certificate. |
| `name` | `string` | Optional unique name for the certificate. |
| `private_key` | `string` | The private key for the certificate. |

#### Example: Create

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


### TlsCertificatesAndHostnamesCertificateRevoke

Create an instance: `tlsCertificatesAndHostnamesCertificateRevoke := client.TlsCertificatesAndHostnamesCertificateRevoke(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### TlsCertificatesAndHostnamesClientCertificateResponse

Create an instance: `tlsCertificatesAndHostnamesClientCertificateResponse := client.TlsCertificatesAndHostnamesClientCertificateResponse(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
tlsCertificatesAndHostnamesClientCertificateResponses, err := client.TlsCertificatesAndHostnamesClientCertificateResponse(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesClientCertificateResponses) // the array of records
```


### TlsCertificatesAndHostnamesClientCertificateResponseSingle

Create an instance: `tlsCertificatesAndHostnamesClientCertificateResponseSingle := client.TlsCertificatesAndHostnamesClientCertificateResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `csr` | `string` | The Certificate Signing Request (CSR). |
| `reactivate` | `bool` |  |
| `result` | `map[string]any` |  |
| `validity_days` | `int` | The number of days the Client Certificate will be valid after the issued_on date. |

#### Example: Load

```go
tlsCertificatesAndHostnamesClientCertificateResponseSingle, err := client.TlsCertificatesAndHostnamesClientCertificateResponseSingle(nil).Load(map[string]any{"client_certificate_id": "client_certificate_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesClientCertificateResponseSingle) // the loaded record
```

#### Example: Create

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


### TlsCertificatesAndHostnamesCustomCsrResponseCollection

Create an instance: `tlsCertificatesAndHostnamesCustomCsrResponseCollection := client.TlsCertificatesAndHostnamesCustomCsrResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
tlsCertificatesAndHostnamesCustomCsrResponseCollections, err := client.TlsCertificatesAndHostnamesCustomCsrResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesCustomCsrResponseCollections) // the array of records
```


### TlsCertificatesAndHostnamesCustomCsrResponseCollection2

Create an instance: `tlsCertificatesAndHostnamesCustomCsrResponseCollection2 := client.TlsCertificatesAndHostnamesCustomCsrResponseCollection2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
tlsCertificatesAndHostnamesCustomCsrResponseCollection2s, err := client.TlsCertificatesAndHostnamesCustomCsrResponseCollection2(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesCustomCsrResponseCollection2s) // the array of records
```


### TlsCertificatesAndHostnamesCustomCsrResponseIdOnly

Create an instance: `tlsCertificatesAndHostnamesCustomCsrResponseIdOnly := client.TlsCertificatesAndHostnamesCustomCsrResponseIdOnly(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### TlsCertificatesAndHostnamesCustomCsrResponseSingle

Create an instance: `tlsCertificatesAndHostnamesCustomCsrResponseSingle := client.TlsCertificatesAndHostnamesCustomCsrResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `common_name` | `string` | The common name (domain) for the CSR. |
| `country` | `string` | Two-letter ISO 3166-1 alpha-2 country code. |
| `key_type` | `string` | Key algorithm to use for the CSR. |
| `locality` | `string` | City or locality name. |
| `organization` | `string` | Organization name. |
| `organizational_unit` | `string` | Organizational unit name. |
| `result` | `map[string]any` | A custom Certificate Signing Request (CSR). |
| `sans` | `[]any` | Subject Alternative Names for the CSR. |
| `state` | `string` | State or province name. |

#### Example: Load

```go
tlsCertificatesAndHostnamesCustomCsrResponseSingle, err := client.TlsCertificatesAndHostnamesCustomCsrResponseSingle(nil).Load(map[string]any{"custom_csr_id": "custom_csr_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesCustomCsrResponseSingle) // the loaded record
```

#### Example: Create

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


### TlsCertificatesAndHostnamesCustomCsrResponseSingle2

Create an instance: `tlsCertificatesAndHostnamesCustomCsrResponseSingle2 := client.TlsCertificatesAndHostnamesCustomCsrResponseSingle2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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
| `result` | `map[string]any` | A custom Certificate Signing Request (CSR). |
| `sans` | `[]any` | Subject Alternative Names for the CSR. |
| `state` | `string` | State or province name. |

#### Example: Load

```go
tlsCertificatesAndHostnamesCustomCsrResponseSingle2, err := client.TlsCertificatesAndHostnamesCustomCsrResponseSingle2(nil).Load(map[string]any{"account_id": "account_id", "custom_csr_id": "custom_csr_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesCustomCsrResponseSingle2) // the loaded record
```

#### Example: Create

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


### TlsCertificatesAndHostnamesCustomHostnameQuota

Create an instance: `tlsCertificatesAndHostnamesCustomHostnameQuota := client.TlsCertificatesAndHostnamesCustomHostnameQuota(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` | Informational messages returned by the custom hostname API. |
| `result` | `map[string]any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
tlsCertificatesAndHostnamesCustomHostnameQuotas, err := client.TlsCertificatesAndHostnamesCustomHostnameQuota(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesCustomHostnameQuotas) // the array of records
```


### TlsCertificatesAndHostnamesCustomHostnameResponseCollection

Create an instance: `tlsCertificatesAndHostnamesCustomHostnameResponseCollection := client.TlsCertificatesAndHostnamesCustomHostnameResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` | Informational messages returned by the custom hostname API. |
| `result` | `[]any` |  |
| `result_info` | `map[string]any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
tlsCertificatesAndHostnamesCustomHostnameResponseCollections, err := client.TlsCertificatesAndHostnamesCustomHostnameResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesCustomHostnameResponseCollections) // the array of records
```


### TlsCertificatesAndHostnamesCustomHostnameResponseSingle

Create an instance: `tlsCertificatesAndHostnamesCustomHostnameResponseSingle := client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `custom_metadata` | `map[string]any` | Unique key/value metadata for this hostname. |
| `custom_origin_server` | `string` | a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record. |
| `custom_origin_sni` | `string` | A hostname that will be sent to your custom origin server as SNI for TLS handshake. |
| `errors` | `[]any` |  |
| `hostname` | `string` | The custom hostname that will point to your hostname via CNAME. |
| `messages` | `[]any` | Informational messages returned by the custom hostname API. |
| `result` | `map[string]any` |  |
| `ssl` | `map[string]any` | SSL properties used when creating the custom hostname. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: Load

```go
tlsCertificatesAndHostnamesCustomHostnameResponseSingle, err := client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle(nil).Load(map[string]any{"custom_hostname_id": "custom_hostname_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesCustomHostnameResponseSingle) // the loaded record
```

#### Example: Create

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


### TlsCertificatesAndHostnamesCustomTrustStoreResponse

Create an instance: `tlsCertificatesAndHostnamesCustomTrustStoreResponse := client.TlsCertificatesAndHostnamesCustomTrustStoreResponse(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
tlsCertificatesAndHostnamesCustomTrustStoreResponses, err := client.TlsCertificatesAndHostnamesCustomTrustStoreResponse(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesCustomTrustStoreResponses) // the array of records
```


### TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly

Create an instance: `tlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly := client.TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle

Create an instance: `tlsCertificatesAndHostnamesCustomTrustStoreResponseSingle := client.TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `certificate` | `string` | The root CA certificate in PEM format. |
| `result` | `map[string]any` |  |

#### Example: Load

```go
tlsCertificatesAndHostnamesCustomTrustStoreResponseSingle, err := client.TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle(nil).Load(map[string]any{"custom_origin_trust_store_id": "custom_origin_trust_store_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesCustomTrustStoreResponseSingle) // the loaded record
```

#### Example: Create

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


### TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack

Create an instance: `tlsCertificatesAndHostnamesDeleteAdvancedCertificatePack := client.TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### TlsCertificatesAndHostnamesEnabled

Create an instance: `tlsCertificatesAndHostnamesEnabled := client.TlsCertificatesAndHostnamesEnabled(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `bool` | Indicates whether zone-level authenticated origin pulls is enabled. |
| `result` | `map[string]any` |  |

#### Example: Load

```go
tlsCertificatesAndHostnamesEnabled, err := client.TlsCertificatesAndHostnamesEnabled(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesEnabled) // the loaded record
```


### TlsCertificatesAndHostnamesFallbackOrigin

Create an instance: `tlsCertificatesAndHostnamesFallbackOrigin := client.TlsCertificatesAndHostnamesFallbackOrigin(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `origin` | `string` | Your origin hostname that requests to your custom hostnames will be sent to. |
| `result` | `map[string]any` |  |

#### Example: Load

```go
tlsCertificatesAndHostnamesFallbackOrigin, err := client.TlsCertificatesAndHostnamesFallbackOrigin(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesFallbackOrigin) // the loaded record
```


### TlsCertificatesAndHostnamesHostnameAopResponseCollection

Create an instance: `tlsCertificatesAndHostnamesHostnameAopResponseCollection := client.TlsCertificatesAndHostnamesHostnameAopResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `[]any` |  |


### TlsCertificatesAndHostnamesHostnameAopSingle

Create an instance: `tlsCertificatesAndHostnamesHostnameAopSingle := client.TlsCertificatesAndHostnamesHostnameAopSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `map[string]any` |  |

#### Example: Load

```go
tlsCertificatesAndHostnamesHostnameAopSingle, err := client.TlsCertificatesAndHostnamesHostnameAopSingle(nil).Load(map[string]any{"hostname": "hostname", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesHostnameAopSingle) // the loaded record
```


### TlsCertificatesAndHostnamesHostnameAssocResponseCollection

Create an instance: `tlsCertificatesAndHostnamesHostnameAssocResponseCollection := client.TlsCertificatesAndHostnamesHostnameAssocResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |
| `result_info` | `map[string]any` |  |

#### Example: List

```go
tlsCertificatesAndHostnamesHostnameAssocResponseCollections, err := client.TlsCertificatesAndHostnamesHostnameAssocResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesHostnameAssocResponseCollections) // the array of records
```


### TlsCertificatesAndHostnamesKeylessResponseCollection

Create an instance: `tlsCertificatesAndHostnamesKeylessResponseCollection := client.TlsCertificatesAndHostnamesKeylessResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
tlsCertificatesAndHostnamesKeylessResponseCollections, err := client.TlsCertificatesAndHostnamesKeylessResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesKeylessResponseCollections) // the array of records
```


### TlsCertificatesAndHostnamesKeylessResponseSingle

Create an instance: `tlsCertificatesAndHostnamesKeylessResponseSingle := client.TlsCertificatesAndHostnamesKeylessResponseSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bundle_method` | `string` | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| `certificate` | `string` | The zone's SSL certificate or SSL certificate and intermediate(s). |
| `enabled` | `bool` | Whether or not the Keyless SSL is on or off. |
| `host` | `string` | The keyless SSL name. |
| `name` | `string` | The keyless SSL name. |
| `port` | `float64` | The keyless SSL port used to communicate between Cloudflare and the client's Keyless SSL server. |
| `result` | `map[string]any` |  |
| `tunnel` | `map[string]any` | Configuration for using Keyless SSL through a Cloudflare Tunnel. |

#### Example: Load

```go
tlsCertificatesAndHostnamesKeylessResponseSingle, err := client.TlsCertificatesAndHostnamesKeylessResponseSingle(nil).Load(map[string]any{"keyless_certificate_id": "keyless_certificate_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesKeylessResponseSingle) // the loaded record
```

#### Example: Create

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


### TlsCertificatesAndHostnamesKeylessResponseSingleId

Create an instance: `tlsCertificatesAndHostnamesKeylessResponseSingleId := client.TlsCertificatesAndHostnamesKeylessResponseSingleId(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### TlsCertificatesAndHostnamesPerHostnameSetting

Create an instance: `tlsCertificatesAndHostnamesPerHostnameSetting := client.TlsCertificatesAndHostnamesPerHostnameSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `map[string]any` |  |
| `value` | `any` | The TLS setting value. |

#### Example: Load

```go
tlsCertificatesAndHostnamesPerHostnameSetting, err := client.TlsCertificatesAndHostnamesPerHostnameSetting(nil).Load(map[string]any{"hostname": "hostname", "setting_id": "setting_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesPerHostnameSetting) // the loaded record
```


### TlsCertificatesAndHostnamesPerHostnameSettingsResponse

Create an instance: `tlsCertificatesAndHostnamesPerHostnameSettingsResponse := client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |
| `result_info` | `map[string]any` |  |

#### Example: Load

```go
tlsCertificatesAndHostnamesPerHostnameSettingsResponse, err := client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse(nil).Load(map[string]any{"setting_id": "setting_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesPerHostnameSettingsResponse) // the loaded record
```


### TlsCertificatesAndHostnamesPerHostnameSettingsResponse2

Create an instance: `tlsCertificatesAndHostnamesPerHostnameSettingsResponse2 := client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### TlsCertificatesAndHostnamesSslUniversalSetting

Create an instance: `tlsCertificatesAndHostnamesSslUniversalSetting := client.TlsCertificatesAndHostnamesSslUniversalSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `bool` | Disabling Universal SSL removes any currently active Universal SSL certificates for your zone from the edge and prevents any future Universal SSL certificates from being ordered. |
| `result` | `map[string]any` |  |

#### Example: Load

```go
tlsCertificatesAndHostnamesSslUniversalSetting, err := client.TlsCertificatesAndHostnamesSslUniversalSetting(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesSslUniversalSetting) // the loaded record
```


### TlsCertificatesAndHostnamesSslValidationMethodResponse

Create an instance: `tlsCertificatesAndHostnamesSslValidationMethodResponse := client.TlsCertificatesAndHostnamesSslValidationMethodResponse(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `validation_method` | `string` | Desired validation method. |


### TlsCertificatesAndHostnamesSslVerificationResponseCollection

Create an instance: `tlsCertificatesAndHostnamesSslVerificationResponseCollection := client.TlsCertificatesAndHostnamesSslVerificationResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `[]any` |  |

#### Example: List

```go
tlsCertificatesAndHostnamesSslVerificationResponseCollections, err := client.TlsCertificatesAndHostnamesSslVerificationResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesSslVerificationResponseCollections) // the array of records
```


### TlsCertificatesAndHostnamesTotalTlsSetting

Create an instance: `tlsCertificatesAndHostnamesTotalTlsSetting := client.TlsCertificatesAndHostnamesTotalTlsSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `certificate_authority` | `string` | The Certificate Authority that Total TLS certificates will be issued through. |
| `enabled` | `bool` | If enabled, Total TLS will order a hostname specific TLS certificate for any proxied A, AAAA, or CNAME record in your zone. |
| `result` | `map[string]any` |  |

#### Example: Load

```go
tlsCertificatesAndHostnamesTotalTlsSetting, err := client.TlsCertificatesAndHostnamesTotalTlsSetting(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(tlsCertificatesAndHostnamesTotalTlsSetting) // the loaded record
```

#### Example: Create

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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/cloudflare-ssl-sdk/go/
├── cloudflare-ssl.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/cloudflare-ssl-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
tlscertificatesandhostnamesperhostnamesettingsresponse := client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse(nil)
tlscertificatesandhostnamesperhostnamesettingsresponse.Load(map[string]any{"setting_id": "example", "zone_id": "example"}, nil)

// tlscertificatesandhostnamesperhostnamesettingsresponse.Data() now returns the tlscertificatesandhostnamesperhostnamesettingsresponse data from the last load
// tlscertificatesandhostnamesperhostnamesettingsresponse.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
