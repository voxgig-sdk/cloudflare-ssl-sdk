# CloudflareSsl TypeScript SDK



The TypeScript SDK for the CloudflareSsl API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.CacheApiResponseSingleId()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cloudflare-ssl-sdk/releases](https://github.com/voxgig-sdk/cloudflare-ssl-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { CloudflareSslSDK } from '@voxgig-sdk/cloudflare-ssl-sdk'

const client = new CloudflareSslSDK({
  apikey: process.env.CLOUDFLARE_SSL_APIKEY,
})
```

### 3. Load a tlscertificatesandhostnamescustomhostnameresponsesingle

TlsCertificatesAndHostnamesCustomHostnameResponseSingle is nested under custom_hostname, so provide the `custom_hostname_id`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const tlscertificatesandhostnamescustomhostnameresponsesingle = await client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle().load({
    custom_hostname_id: 'example_custom_hostname_id',
    zone_id: 'example_zone_id',
  })
  console.log(tlscertificatesandhostnamescustomhostnameresponsesingle)
} catch (err) {
  console.error('load failed:', err)
}
```

### 4. Create, update, and remove

```ts
// Update
const updated = await client.CacheApiResponseSingleId().update({
  zone_id: 'example_zone_id',
  errors: [],
})

```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const tlscertificatesandhostnamesperhostnamesettingsresponse = await client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse().load({ setting_id: "example", zone_id: "example" })
  console.log(tlscertificatesandhostnamesperhostnamesettingsresponse)
} catch (err) {
  console.error('load failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = CloudflareSslSDK.test()

const tlscertificatesandhostnamesperhostnamesettingsresponse = await client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse().load({ setting_id: 'example_setting_id', zone_id: 'example_zone_id' })
// tlscertificatesandhostnamesperhostnamesettingsresponse is the entity, populated with mock response data
// — call tlscertificatesandhostnamesperhostnamesettingsresponse.data() for the record itself
console.log(tlscertificatesandhostnamesperhostnamesettingsresponse)
```

You can also use the instance method:

```ts
const client = new CloudflareSslSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse()

// First call runs the operation and stores its result
await entity.load({ setting_id: 'example_setting_id', zone_id: 'example_zone_id' })

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new CloudflareSslSDK({
  apikey: '...',
  extend: [logger],
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
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### CloudflareSslSDK

#### Constructor

```ts
new CloudflareSslSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `CacheApiResponseSingleId(data?)` | `CacheApiResponseSingleIdEntity` | Create a CacheApiResponseSingleId entity instance. |
| `CacheAutoOriginTlsKex(data?)` | `CacheAutoOriginTlsKexEntity` | Create a CacheAutoOriginTlsKex entity instance. |
| `CustomHostname(data?)` | `CustomHostnameEntity` | Create a CustomHostname entity instance. |
| `CustomHostnameForAZone(data?)` | `CustomHostnameForAZoneEntity` | Create a CustomHostnameForAZone entity instance. |
| `OriginTl(data?)` | `OriginTlEntity` | Create an OriginTl entity instance. |
| `Recommendation(data?)` | `RecommendationEntity` | Create a Recommendation entity instance. |
| `SslAutomaticMode(data?)` | `SslAutomaticModeEntity` | Create a SslAutomaticMode entity instance. |
| `TlsCertificatesAndHostnamesAdvancedCertificatePackResponse(data?)` | `TlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntity` | Create a TlsCertificatesAndHostnamesAdvancedCertificatePackResponse entity instance. |
| `TlsCertificatesAndHostnamesAssociationResponseCollection(data?)` | `TlsCertificatesAndHostnamesAssociationResponseCollectionEntity` | Create a TlsCertificatesAndHostnamesAssociationResponseCollection entity instance. |
| `TlsCertificatesAndHostnamesCertificateAnalyze(data?)` | `TlsCertificatesAndHostnamesCertificateAnalyzeEntity` | Create a TlsCertificatesAndHostnamesCertificateAnalyze entity instance. |
| `TlsCertificatesAndHostnamesCertificatePackQuota(data?)` | `TlsCertificatesAndHostnamesCertificatePackQuotaEntity` | Create a TlsCertificatesAndHostnamesCertificatePackQuota entity instance. |
| `TlsCertificatesAndHostnamesCertificatePackResponseCollection(data?)` | `TlsCertificatesAndHostnamesCertificatePackResponseCollectionEntity` | Create a TlsCertificatesAndHostnamesCertificatePackResponseCollection entity instance. |
| `TlsCertificatesAndHostnamesCertificatePackResponseSingle(data?)` | `TlsCertificatesAndHostnamesCertificatePackResponseSingleEntity` | Create a TlsCertificatesAndHostnamesCertificatePackResponseSingle entity instance. |
| `TlsCertificatesAndHostnamesCertificateResponseCollection(data?)` | `TlsCertificatesAndHostnamesCertificateResponseCollectionEntity` | Create a TlsCertificatesAndHostnamesCertificateResponseCollection entity instance. |
| `TlsCertificatesAndHostnamesCertificateResponseCollection3(data?)` | `TlsCertificatesAndHostnamesCertificateResponseCollection3Entity` | Create a TlsCertificatesAndHostnamesCertificateResponseCollection3 entity instance. |
| `TlsCertificatesAndHostnamesCertificateResponseCollection4(data?)` | `TlsCertificatesAndHostnamesCertificateResponseCollection4Entity` | Create a TlsCertificatesAndHostnamesCertificateResponseCollection4 entity instance. |
| `TlsCertificatesAndHostnamesCertificateResponseCollection5(data?)` | `TlsCertificatesAndHostnamesCertificateResponseCollection5Entity` | Create a TlsCertificatesAndHostnamesCertificateResponseCollection5 entity instance. |
| `TlsCertificatesAndHostnamesCertificateResponseIdOnly(data?)` | `TlsCertificatesAndHostnamesCertificateResponseIdOnlyEntity` | Create a TlsCertificatesAndHostnamesCertificateResponseIdOnly entity instance. |
| `TlsCertificatesAndHostnamesCertificateResponseSingle(data?)` | `TlsCertificatesAndHostnamesCertificateResponseSingleEntity` | Create a TlsCertificatesAndHostnamesCertificateResponseSingle entity instance. |
| `TlsCertificatesAndHostnamesCertificateResponseSingle2(data?)` | `TlsCertificatesAndHostnamesCertificateResponseSingle2Entity` | Create a TlsCertificatesAndHostnamesCertificateResponseSingle2 entity instance. |
| `TlsCertificatesAndHostnamesCertificateResponseSingle3(data?)` | `TlsCertificatesAndHostnamesCertificateResponseSingle3Entity` | Create a TlsCertificatesAndHostnamesCertificateResponseSingle3 entity instance. |
| `TlsCertificatesAndHostnamesCertificateResponseSingle4(data?)` | `TlsCertificatesAndHostnamesCertificateResponseSingle4Entity` | Create a TlsCertificatesAndHostnamesCertificateResponseSingle4 entity instance. |
| `TlsCertificatesAndHostnamesCertificateResponseSingle5(data?)` | `TlsCertificatesAndHostnamesCertificateResponseSingle5Entity` | Create a TlsCertificatesAndHostnamesCertificateResponseSingle5 entity instance. |
| `TlsCertificatesAndHostnamesCertificateResponseSinglePost(data?)` | `TlsCertificatesAndHostnamesCertificateResponseSinglePostEntity` | Create a TlsCertificatesAndHostnamesCertificateResponseSinglePost entity instance. |
| `TlsCertificatesAndHostnamesCertificateRevoke(data?)` | `TlsCertificatesAndHostnamesCertificateRevokeEntity` | Create a TlsCertificatesAndHostnamesCertificateRevoke entity instance. |
| `TlsCertificatesAndHostnamesClientCertificateResponse(data?)` | `TlsCertificatesAndHostnamesClientCertificateResponseEntity` | Create a TlsCertificatesAndHostnamesClientCertificateResponse entity instance. |
| `TlsCertificatesAndHostnamesClientCertificateResponseSingle(data?)` | `TlsCertificatesAndHostnamesClientCertificateResponseSingleEntity` | Create a TlsCertificatesAndHostnamesClientCertificateResponseSingle entity instance. |
| `TlsCertificatesAndHostnamesCustomCsrResponseCollection(data?)` | `TlsCertificatesAndHostnamesCustomCsrResponseCollectionEntity` | Create a TlsCertificatesAndHostnamesCustomCsrResponseCollection entity instance. |
| `TlsCertificatesAndHostnamesCustomCsrResponseCollection2(data?)` | `TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity` | Create a TlsCertificatesAndHostnamesCustomCsrResponseCollection2 entity instance. |
| `TlsCertificatesAndHostnamesCustomCsrResponseIdOnly(data?)` | `TlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntity` | Create a TlsCertificatesAndHostnamesCustomCsrResponseIdOnly entity instance. |
| `TlsCertificatesAndHostnamesCustomCsrResponseSingle(data?)` | `TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity` | Create a TlsCertificatesAndHostnamesCustomCsrResponseSingle entity instance. |
| `TlsCertificatesAndHostnamesCustomCsrResponseSingle2(data?)` | `TlsCertificatesAndHostnamesCustomCsrResponseSingle2Entity` | Create a TlsCertificatesAndHostnamesCustomCsrResponseSingle2 entity instance. |
| `TlsCertificatesAndHostnamesCustomHostnameQuota(data?)` | `TlsCertificatesAndHostnamesCustomHostnameQuotaEntity` | Create a TlsCertificatesAndHostnamesCustomHostnameQuota entity instance. |
| `TlsCertificatesAndHostnamesCustomHostnameResponseCollection(data?)` | `TlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntity` | Create a TlsCertificatesAndHostnamesCustomHostnameResponseCollection entity instance. |
| `TlsCertificatesAndHostnamesCustomHostnameResponseSingle(data?)` | `TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity` | Create a TlsCertificatesAndHostnamesCustomHostnameResponseSingle entity instance. |
| `TlsCertificatesAndHostnamesCustomTrustStoreResponse(data?)` | `TlsCertificatesAndHostnamesCustomTrustStoreResponseEntity` | Create a TlsCertificatesAndHostnamesCustomTrustStoreResponse entity instance. |
| `TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly(data?)` | `TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntity` | Create a TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly entity instance. |
| `TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle(data?)` | `TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity` | Create a TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle entity instance. |
| `TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack(data?)` | `TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity` | Create a TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack entity instance. |
| `TlsCertificatesAndHostnamesEnabled(data?)` | `TlsCertificatesAndHostnamesEnabledEntity` | Create a TlsCertificatesAndHostnamesEnabled entity instance. |
| `TlsCertificatesAndHostnamesFallbackOrigin(data?)` | `TlsCertificatesAndHostnamesFallbackOriginEntity` | Create a TlsCertificatesAndHostnamesFallbackOrigin entity instance. |
| `TlsCertificatesAndHostnamesHostnameAopResponseCollection(data?)` | `TlsCertificatesAndHostnamesHostnameAopResponseCollectionEntity` | Create a TlsCertificatesAndHostnamesHostnameAopResponseCollection entity instance. |
| `TlsCertificatesAndHostnamesHostnameAopSingle(data?)` | `TlsCertificatesAndHostnamesHostnameAopSingleEntity` | Create a TlsCertificatesAndHostnamesHostnameAopSingle entity instance. |
| `TlsCertificatesAndHostnamesHostnameAssocResponseCollection(data?)` | `TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity` | Create a TlsCertificatesAndHostnamesHostnameAssocResponseCollection entity instance. |
| `TlsCertificatesAndHostnamesKeylessResponseCollection(data?)` | `TlsCertificatesAndHostnamesKeylessResponseCollectionEntity` | Create a TlsCertificatesAndHostnamesKeylessResponseCollection entity instance. |
| `TlsCertificatesAndHostnamesKeylessResponseSingle(data?)` | `TlsCertificatesAndHostnamesKeylessResponseSingleEntity` | Create a TlsCertificatesAndHostnamesKeylessResponseSingle entity instance. |
| `TlsCertificatesAndHostnamesKeylessResponseSingleId(data?)` | `TlsCertificatesAndHostnamesKeylessResponseSingleIdEntity` | Create a TlsCertificatesAndHostnamesKeylessResponseSingleId entity instance. |
| `TlsCertificatesAndHostnamesPerHostnameSetting(data?)` | `TlsCertificatesAndHostnamesPerHostnameSettingEntity` | Create a TlsCertificatesAndHostnamesPerHostnameSetting entity instance. |
| `TlsCertificatesAndHostnamesPerHostnameSettingsResponse(data?)` | `TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity` | Create a TlsCertificatesAndHostnamesPerHostnameSettingsResponse entity instance. |
| `TlsCertificatesAndHostnamesPerHostnameSettingsResponse2(data?)` | `TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity` | Create a TlsCertificatesAndHostnamesPerHostnameSettingsResponse2 entity instance. |
| `TlsCertificatesAndHostnamesSslUniversalSetting(data?)` | `TlsCertificatesAndHostnamesSslUniversalSettingEntity` | Create a TlsCertificatesAndHostnamesSslUniversalSetting entity instance. |
| `TlsCertificatesAndHostnamesSslValidationMethodResponse(data?)` | `TlsCertificatesAndHostnamesSslValidationMethodResponseEntity` | Create a TlsCertificatesAndHostnamesSslValidationMethodResponse entity instance. |
| `TlsCertificatesAndHostnamesSslVerificationResponseCollection(data?)` | `TlsCertificatesAndHostnamesSslVerificationResponseCollectionEntity` | Create a TlsCertificatesAndHostnamesSslVerificationResponseCollection entity instance. |
| `TlsCertificatesAndHostnamesTotalTlsSetting(data?)` | `TlsCertificatesAndHostnamesTotalTlsSettingEntity` | Create a TlsCertificatesAndHostnamesTotalTlsSetting entity instance. |
| `tester(testopts?, sdkopts?)` | `CloudflareSslSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `CloudflareSslSDK.test(testopts?, sdkopts?)` | `CloudflareSslSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): CloudflareSslSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### CacheApiResponseSingleId

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Indicates the API call's success or failure. |
| `value` | Controls enablement of Automatic SSL/TLS. |

Operations: update.

API path: `/zones/{zone_id}/settings/ssl_automatic_mode`

#### CacheAutoOriginTlsKex

| Field | Description |
| --- | --- |
| `enabled` | Controls enablement of Auto-Origin TLS KEX selection for the zone. |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Indicates the API call's success or failure. |

Operations: list, update.

API path: `/zones/{zone_id}/settings/auto_origin_tls_kex`

#### CustomHostname

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/zones/{zone_id}/custom_hostnames/{custom_hostname_id}`

#### CustomHostnameForAZone

| Field | Description |
| --- | --- |
| `custom_certificate` | If a custom uploaded certificate is used. |
| `custom_key` | The key for a custom uploaded certificate. |

Operations: remove, update.

API path: `/zones/{zone_id}/custom_hostnames/{custom_hostname_id}/certificate_pack/{certificate_pack_id}/certificates/{certificate_id}`

#### OriginTl

| Field | Description |
| --- | --- |
| `result` |  |
| `value` | List of TLS compliance modes that constrain the key-exchange algorithms Cloudflare may use when establishing the TLS connection to the zone's origin. |

Operations: load, patch, remove, update.

API path: `/zones/{zone_id}/settings/origin_tls_compliance_modes`

#### Recommendation

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Indicates the API call's success or failure. |

Operations: list.

API path: `/zones/{zone_id}/ssl/recommendation`

#### SslAutomaticMode

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Indicates the API call's success or failure. |

Operations: list.

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

Operations: create, update.

API path: `/zones/{zone_id}/ssl/certificate_packs/order`

#### TlsCertificatesAndHostnamesAssociationResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/mtls_certificates/{mtls_certificate_id}/associations`

#### TlsCertificatesAndHostnamesCertificateAnalyze

| Field | Description |
| --- | --- |
| `bundle_method` | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| `certificate` | The zone's SSL certificate or certificate and the intermediate(s). |

Operations: create.

API path: `/zones/{zone_id}/ssl/analyze`

#### TlsCertificatesAndHostnamesCertificatePackQuota

| Field | Description |
| --- | --- |
| `result` |  |

Operations: load.

API path: `/zones/{zone_id}/ssl/certificate_packs/quota`

#### TlsCertificatesAndHostnamesCertificatePackResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/zones/{zone_id}/ssl/certificate_packs`

#### TlsCertificatesAndHostnamesCertificatePackResponseSingle

| Field | Description |
| --- | --- |
| `result` | A certificate pack with all its properties. |

Operations: load.

API path: `/zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}`

#### TlsCertificatesAndHostnamesCertificateResponseCollection

| Field | Description |
| --- | --- |
| `certificates` | Array of ordered certificates. |
| `result` |  |

Operations: list, update.

API path: `/zones/{zone_id}/custom_certificates`

#### TlsCertificatesAndHostnamesCertificateResponseCollection3

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/zones/{zone_id}/origin_tls_client_auth`

#### TlsCertificatesAndHostnamesCertificateResponseCollection4

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/zones/{zone_id}/origin_tls_client_auth/hostnames/certificates`

#### TlsCertificatesAndHostnamesCertificateResponseCollection5

| Field | Description |
| --- | --- |
| `result` |  |
| `result_info` |  |

Operations: list.

API path: `/accounts/{account_id}/mtls_certificates`

#### TlsCertificatesAndHostnamesCertificateResponseIdOnly

| Field | Description |
| --- | --- |

Operations: remove.

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

Operations: create, load, update.

API path: `/zones/{zone_id}/custom_certificates`

#### TlsCertificatesAndHostnamesCertificateResponseSingle2

| Field | Description |
| --- | --- |
| `csr` | The Certificate Signing Request (CSR). |
| `hostnames` | Array of hostnames or wildcard names bound to the certificate. |
| `request_type` | Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa), or "keyless-certificate" (for Keyless SSL servers). |
| `requested_validity` | The number of days for which the certificate should be valid. |
| `result` |  |

Operations: create, list, load.

API path: `/certificates`

#### TlsCertificatesAndHostnamesCertificateResponseSingle3

| Field | Description |
| --- | --- |
| `certificate` | The zone's leaf certificate. |
| `private_key` | The zone's private key. |
| `result` |  |

Operations: create, load, remove.

API path: `/zones/{zone_id}/origin_tls_client_auth`

#### TlsCertificatesAndHostnamesCertificateResponseSingle4

| Field | Description |
| --- | --- |
| `certificate` | The hostname certificate. |
| `private_key` | The hostname certificate's private key. |
| `result` |  |

Operations: create, load, remove.

API path: `/zones/{zone_id}/origin_tls_client_auth/hostnames/certificates`

#### TlsCertificatesAndHostnamesCertificateResponseSingle5

| Field | Description |
| --- | --- |
| `result` |  |

Operations: load, remove.

API path: `/accounts/{account_id}/mtls_certificates/{mtls_certificate_id}`

#### TlsCertificatesAndHostnamesCertificateResponseSinglePost

| Field | Description |
| --- | --- |
| `ca` | Indicates whether the certificate is a CA or leaf certificate. |
| `certificates` | The uploaded root CA certificate. |
| `name` | Optional unique name for the certificate. |
| `private_key` | The private key for the certificate. |

Operations: create.

API path: `/accounts/{account_id}/mtls_certificates`

#### TlsCertificatesAndHostnamesCertificateRevoke

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/certificates/{certificate_id}`

#### TlsCertificatesAndHostnamesClientCertificateResponse

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/zones/{zone_id}/client_certificates`

#### TlsCertificatesAndHostnamesClientCertificateResponseSingle

| Field | Description |
| --- | --- |
| `csr` | The Certificate Signing Request (CSR). |
| `reactivate` |  |
| `result` |  |
| `validity_days` | The number of days the Client Certificate will be valid after the issued_on date. |

Operations: create, load, remove, update.

API path: `/zones/{zone_id}/client_certificates`

#### TlsCertificatesAndHostnamesCustomCsrResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/zones/{zone_id}/custom_csrs`

#### TlsCertificatesAndHostnamesCustomCsrResponseCollection2

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/accounts/{account_id}/custom_csrs`

#### TlsCertificatesAndHostnamesCustomCsrResponseIdOnly

| Field | Description |
| --- | --- |

Operations: remove.

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

Operations: create, load.

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

Operations: create, load.

API path: `/accounts/{account_id}/custom_csrs`

#### TlsCertificatesAndHostnamesCustomHostnameQuota

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` | Informational messages returned by the custom hostname API. |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: list.

API path: `/zones/{zone_id}/custom_hostnames/quota`

#### TlsCertificatesAndHostnamesCustomHostnameResponseCollection

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` | Informational messages returned by the custom hostname API. |
| `result` |  |
| `result_info` |  |
| `success` | Whether the API call was successful. |

Operations: list.

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

Operations: create, load, update.

API path: `/zones/{zone_id}/custom_hostnames`

#### TlsCertificatesAndHostnamesCustomTrustStoreResponse

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/zones/{zone_id}/acm/custom_trust_store`

#### TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/zones/{zone_id}/acm/custom_trust_store/{custom_origin_trust_store_id}`

#### TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle

| Field | Description |
| --- | --- |
| `certificate` | The root CA certificate in PEM format. |
| `result` |  |

Operations: create, load.

API path: `/zones/{zone_id}/acm/custom_trust_store`

#### TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}`

#### TlsCertificatesAndHostnamesEnabled

| Field | Description |
| --- | --- |
| `enabled` | Indicates whether zone-level authenticated origin pulls is enabled. |
| `result` |  |

Operations: load, update.

API path: `/zones/{zone_id}/origin_tls_client_auth/settings`

#### TlsCertificatesAndHostnamesFallbackOrigin

| Field | Description |
| --- | --- |
| `origin` | Your origin hostname that requests to your custom hostnames will be sent to. |
| `result` |  |

Operations: load, remove, update.

API path: `/zones/{zone_id}/custom_hostnames/fallback_origin`

#### TlsCertificatesAndHostnamesHostnameAopResponseCollection

| Field | Description |
| --- | --- |
| `config` |  |

Operations: update.

API path: `/zones/{zone_id}/origin_tls_client_auth/hostnames`

#### TlsCertificatesAndHostnamesHostnameAopSingle

| Field | Description |
| --- | --- |
| `result` |  |

Operations: load.

API path: `/zones/{zone_id}/origin_tls_client_auth/hostnames/{hostname}`

#### TlsCertificatesAndHostnamesHostnameAssocResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |
| `result_info` |  |

Operations: list.

API path: `/zones/{zone_id}/origin_tls_client_auth/hostnames`

#### TlsCertificatesAndHostnamesKeylessResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

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

Operations: create, load, update.

API path: `/zones/{zone_id}/keyless_certificates`

#### TlsCertificatesAndHostnamesKeylessResponseSingleId

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/zones/{zone_id}/keyless_certificates/{keyless_certificate_id}`

#### TlsCertificatesAndHostnamesPerHostnameSetting

| Field | Description |
| --- | --- |
| `id` |  |
| `result` |  |
| `value` | The TLS setting value. |

Operations: load, update.

API path: `/zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}`

#### TlsCertificatesAndHostnamesPerHostnameSettingsResponse

| Field | Description |
| --- | --- |
| `result` |  |
| `result_info` |  |

Operations: load.

API path: `/zones/{zone_id}/hostnames/settings/{setting_id}`

#### TlsCertificatesAndHostnamesPerHostnameSettingsResponse2

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}`

#### TlsCertificatesAndHostnamesSslUniversalSetting

| Field | Description |
| --- | --- |
| `enabled` | Disabling Universal SSL removes any currently active Universal SSL certificates for your zone from the edge and prevents any future Universal SSL certificates from being ordered. |
| `result` |  |

Operations: load, update.

API path: `/zones/{zone_id}/ssl/universal/settings`

#### TlsCertificatesAndHostnamesSslValidationMethodResponse

| Field | Description |
| --- | --- |
| `validation_method` | Desired validation method. |

Operations: update.

API path: `/zones/{zone_id}/ssl/verification/{certificate_pack_id}`

#### TlsCertificatesAndHostnamesSslVerificationResponseCollection

| Field | Description |
| --- | --- |
| `result` |  |

Operations: list.

API path: `/zones/{zone_id}/ssl/verification`

#### TlsCertificatesAndHostnamesTotalTlsSetting

| Field | Description |
| --- | --- |
| `certificate_authority` | The Certificate Authority that Total TLS certificates will be issued through. |
| `enabled` | If enabled, Total TLS will order a hostname specific TLS certificate for any proxied A, AAAA, or CNAME record in your zone. |
| `result` |  |

Operations: create, load.

API path: `/zones/{zone_id}/acm/total_tls`



## Entities


### CacheApiResponseSingleId

Create an instance: `const cache_api_response_single_id = client.CacheApiResponseSingleId()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Indicates the API call's success or failure. |
| `value` | `string` | Controls enablement of Automatic SSL/TLS. |


### CacheAutoOriginTlsKex

Create an instance: `const cache_auto_origin_tls_kex = client.CacheAutoOriginTlsKex()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `boolean` | Controls enablement of Auto-Origin TLS KEX selection for the zone. |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Indicates the API call's success or failure. |

#### Example: List

```ts
const cache_auto_origin_tls_kexs = await client.CacheAutoOriginTlsKex().list({ zone_id: "example" })
```


### CustomHostname

Create an instance: `const custom_hostname = client.CustomHostname()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### CustomHostnameForAZone

Create an instance: `const custom_hostname_for_a_zone = client.CustomHostnameForAZone()`

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

Create an instance: `const origin_tl = client.OriginTl()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Record<string, any>` |  |
| `value` | `any[]` | List of TLS compliance modes that constrain the key-exchange algorithms Cloudflare may use when establishing the TLS connection to the zone's origin. |

#### Example: Load

```ts
const origin_tl = await client.OriginTl().load({ zone_id: 'zone_id' })
```


### Recommendation

Create an instance: `const recommendation = client.Recommendation()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Indicates the API call's success or failure. |

#### Example: List

```ts
const recommendations = await client.Recommendation().list({ zone_id: "example" })
```


### SslAutomaticMode

Create an instance: `const ssl_automatic_mode = client.SslAutomaticMode()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Indicates the API call's success or failure. |

#### Example: List

```ts
const ssl_automatic_modes = await client.SslAutomaticMode().list({ zone_id: "example" })
```


### TlsCertificatesAndHostnamesAdvancedCertificatePackResponse

Create an instance: `const tls_certificates_and_hostnames_advanced_certificate_pack_response = client.TlsCertificatesAndHostnamesAdvancedCertificatePackResponse()`

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
| `hosts` | `any[]` | Comma separated list of valid host names for the certificate packs. |
| `type` | `string` | Type of certificate pack. |
| `validation_method` | `string` | Validation Method selected for the order. |
| `validity_days` | `number` | Validity Days selected for the order. |

#### Example: Create

```ts
const tls_certificates_and_hostnames_advanced_certificate_pack_response = await client.TlsCertificatesAndHostnamesAdvancedCertificatePackResponse().create({
  zone_id: 'example_zone_id',
  certificate_authority: 'example_certificate_authority',
  hosts: [],
  type: 'example_type',
  validation_method: 'example_validation_method',
  validity_days: 1,
})
```


### TlsCertificatesAndHostnamesAssociationResponseCollection

Create an instance: `const tls_certificates_and_hostnames_association_response_collection = client.TlsCertificatesAndHostnamesAssociationResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const tls_certificates_and_hostnames_association_response_collections = await client.TlsCertificatesAndHostnamesAssociationResponseCollection().list({ account_id: "example", mtls_certificate_id: "example" })
```


### TlsCertificatesAndHostnamesCertificateAnalyze

Create an instance: `const tls_certificates_and_hostnames_certificate_analyze = client.TlsCertificatesAndHostnamesCertificateAnalyze()`

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

```ts
const tls_certificates_and_hostnames_certificate_analyze = await client.TlsCertificatesAndHostnamesCertificateAnalyze().create({
  zone_id: 'example_zone_id',
})
```


### TlsCertificatesAndHostnamesCertificatePackQuota

Create an instance: `const tls_certificates_and_hostnames_certificate_pack_quota = client.TlsCertificatesAndHostnamesCertificatePackQuota()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const tls_certificates_and_hostnames_certificate_pack_quota = await client.TlsCertificatesAndHostnamesCertificatePackQuota().load({ zone_id: 'zone_id' })
```


### TlsCertificatesAndHostnamesCertificatePackResponseCollection

Create an instance: `const tls_certificates_and_hostnames_certificate_pack_response_collection = client.TlsCertificatesAndHostnamesCertificatePackResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const tls_certificates_and_hostnames_certificate_pack_response_collections = await client.TlsCertificatesAndHostnamesCertificatePackResponseCollection().list({ zone_id: "example" })
```


### TlsCertificatesAndHostnamesCertificatePackResponseSingle

Create an instance: `const tls_certificates_and_hostnames_certificate_pack_response_single = client.TlsCertificatesAndHostnamesCertificatePackResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Record<string, any>` | A certificate pack with all its properties. |

#### Example: Load

```ts
const tls_certificates_and_hostnames_certificate_pack_response_single = await client.TlsCertificatesAndHostnamesCertificatePackResponseSingle().load({ certificate_pack_id: 'certificate_pack_id', zone_id: 'zone_id' })
```


### TlsCertificatesAndHostnamesCertificateResponseCollection

Create an instance: `const tls_certificates_and_hostnames_certificate_response_collection = client.TlsCertificatesAndHostnamesCertificateResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `certificates` | `any[]` | Array of ordered certificates. |
| `result` | `any[]` |  |

#### Example: List

```ts
const tls_certificates_and_hostnames_certificate_response_collections = await client.TlsCertificatesAndHostnamesCertificateResponseCollection().list({ zone_id: "example" })
```


### TlsCertificatesAndHostnamesCertificateResponseCollection3

Create an instance: `const tls_certificates_and_hostnames_certificate_response_collection_3 = client.TlsCertificatesAndHostnamesCertificateResponseCollection3()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const tls_certificates_and_hostnames_certificate_response_collection_3s = await client.TlsCertificatesAndHostnamesCertificateResponseCollection3().list({ zone_id: "example" })
```


### TlsCertificatesAndHostnamesCertificateResponseCollection4

Create an instance: `const tls_certificates_and_hostnames_certificate_response_collection_4 = client.TlsCertificatesAndHostnamesCertificateResponseCollection4()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const tls_certificates_and_hostnames_certificate_response_collection_4s = await client.TlsCertificatesAndHostnamesCertificateResponseCollection4().list({ zone_id: "example" })
```


### TlsCertificatesAndHostnamesCertificateResponseCollection5

Create an instance: `const tls_certificates_and_hostnames_certificate_response_collection_5 = client.TlsCertificatesAndHostnamesCertificateResponseCollection5()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |
| `result_info` | `Record<string, any>` |  |

#### Example: List

```ts
const tls_certificates_and_hostnames_certificate_response_collection_5s = await client.TlsCertificatesAndHostnamesCertificateResponseCollection5().list({ account_id: "example" })
```


### TlsCertificatesAndHostnamesCertificateResponseIdOnly

Create an instance: `const tls_certificates_and_hostnames_certificate_response_id_only = client.TlsCertificatesAndHostnamesCertificateResponseIdOnly()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TlsCertificatesAndHostnamesCertificateResponseSingle

Create an instance: `const tls_certificates_and_hostnames_certificate_response_single = client.TlsCertificatesAndHostnamesCertificateResponseSingle()`

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
| `geo_restrictions` | `Record<string, any>` | Specify the region where your private key can be held locally for optimal TLS performance. |
| `policy` | `string` | Specify the policy that determines the region where your private key will be held locally. |
| `private_key` | `string` | The zone's private key. |
| `result` | `Record<string, any>` |  |
| `type` | `string` | The type 'legacy_custom' enables support for legacy clients which do not include SNI in the TLS handshake. |

#### Example: Load

```ts
const tls_certificates_and_hostnames_certificate_response_single = await client.TlsCertificatesAndHostnamesCertificateResponseSingle().load({ custom_certificate_id: 'custom_certificate_id', zone_id: 'zone_id' })
```

#### Example: Create

```ts
const tls_certificates_and_hostnames_certificate_response_single = await client.TlsCertificatesAndHostnamesCertificateResponseSingle().create({
  zone_id: 'example_zone_id',
  certificate: 'example_certificate',
  result: {},
})
```


### TlsCertificatesAndHostnamesCertificateResponseSingle2

Create an instance: `const tls_certificates_and_hostnames_certificate_response_single_2 = client.TlsCertificatesAndHostnamesCertificateResponseSingle2()`

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
| `hostnames` | `any[]` | Array of hostnames or wildcard names bound to the certificate. |
| `request_type` | `string` | Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa), or "keyless-certificate" (for Keyless SSL servers). |
| `requested_validity` | `number` | The number of days for which the certificate should be valid. |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const tls_certificates_and_hostnames_certificate_response_single_2 = await client.TlsCertificatesAndHostnamesCertificateResponseSingle2().load({ certificate_id: 'certificate_id' })
```

#### Example: List

```ts
const tls_certificates_and_hostnames_certificate_response_single_2s = await client.TlsCertificatesAndHostnamesCertificateResponseSingle2().list({ zone_id: "example" })
```

#### Example: Create

```ts
const tls_certificates_and_hostnames_certificate_response_single_2 = await client.TlsCertificatesAndHostnamesCertificateResponseSingle2().create({
  csr: 'example_csr',
  hostnames: [],
  request_type: 'example_request_type',
  result: {},
})
```


### TlsCertificatesAndHostnamesCertificateResponseSingle3

Create an instance: `const tls_certificates_and_hostnames_certificate_response_single_3 = client.TlsCertificatesAndHostnamesCertificateResponseSingle3()`

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
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const tls_certificates_and_hostnames_certificate_response_single_3 = await client.TlsCertificatesAndHostnamesCertificateResponseSingle3().load({ certificate_id: 'certificate_id', zone_id: 'zone_id' })
```

#### Example: Create

```ts
const tls_certificates_and_hostnames_certificate_response_single_3 = await client.TlsCertificatesAndHostnamesCertificateResponseSingle3().create({
  zone_id: 'example_zone_id',
  certificate: 'example_certificate',
  private_key: 'example_private_key',
})
```


### TlsCertificatesAndHostnamesCertificateResponseSingle4

Create an instance: `const tls_certificates_and_hostnames_certificate_response_single_4 = client.TlsCertificatesAndHostnamesCertificateResponseSingle4()`

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
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const tls_certificates_and_hostnames_certificate_response_single_4 = await client.TlsCertificatesAndHostnamesCertificateResponseSingle4().load({ certificate_id: 'certificate_id', zone_id: 'zone_id' })
```

#### Example: Create

```ts
const tls_certificates_and_hostnames_certificate_response_single_4 = await client.TlsCertificatesAndHostnamesCertificateResponseSingle4().create({
  zone_id: 'example_zone_id',
  certificate: 'example_certificate',
  private_key: 'example_private_key',
})
```


### TlsCertificatesAndHostnamesCertificateResponseSingle5

Create an instance: `const tls_certificates_and_hostnames_certificate_response_single_5 = client.TlsCertificatesAndHostnamesCertificateResponseSingle5()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const tls_certificates_and_hostnames_certificate_response_single_5 = await client.TlsCertificatesAndHostnamesCertificateResponseSingle5().load({ account_id: 'account_id', mtls_certificate_id: 'mtls_certificate_id' })
```


### TlsCertificatesAndHostnamesCertificateResponseSinglePost

Create an instance: `const tls_certificates_and_hostnames_certificate_response_single_post = client.TlsCertificatesAndHostnamesCertificateResponseSinglePost()`

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

```ts
const tls_certificates_and_hostnames_certificate_response_single_post = await client.TlsCertificatesAndHostnamesCertificateResponseSinglePost().create({
  account_id: 'example_account_id',
  ca: true,
  certificates: 'example_certificates',
})
```


### TlsCertificatesAndHostnamesCertificateRevoke

Create an instance: `const tls_certificates_and_hostnames_certificate_revoke = client.TlsCertificatesAndHostnamesCertificateRevoke()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TlsCertificatesAndHostnamesClientCertificateResponse

Create an instance: `const tls_certificates_and_hostnames_client_certificate_response = client.TlsCertificatesAndHostnamesClientCertificateResponse()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const tls_certificates_and_hostnames_client_certificate_responses = await client.TlsCertificatesAndHostnamesClientCertificateResponse().list({ zone_id: "example" })
```


### TlsCertificatesAndHostnamesClientCertificateResponseSingle

Create an instance: `const tls_certificates_and_hostnames_client_certificate_response_single = client.TlsCertificatesAndHostnamesClientCertificateResponseSingle()`

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
| `result` | `Record<string, any>` |  |
| `validity_days` | `number` | The number of days the Client Certificate will be valid after the issued_on date. |

#### Example: Load

```ts
const tls_certificates_and_hostnames_client_certificate_response_single = await client.TlsCertificatesAndHostnamesClientCertificateResponseSingle().load({ client_certificate_id: 'client_certificate_id', zone_id: 'zone_id' })
```

#### Example: Create

```ts
const tls_certificates_and_hostnames_client_certificate_response_single = await client.TlsCertificatesAndHostnamesClientCertificateResponseSingle().create({
  zone_id: 'example_zone_id',
  csr: 'example_csr',
  validity_days: 1,
})
```


### TlsCertificatesAndHostnamesCustomCsrResponseCollection

Create an instance: `const tls_certificates_and_hostnames_custom_csr_response_collection = client.TlsCertificatesAndHostnamesCustomCsrResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const tls_certificates_and_hostnames_custom_csr_response_collections = await client.TlsCertificatesAndHostnamesCustomCsrResponseCollection().list({ zone_id: "example" })
```


### TlsCertificatesAndHostnamesCustomCsrResponseCollection2

Create an instance: `const tls_certificates_and_hostnames_custom_csr_response_collection_2 = client.TlsCertificatesAndHostnamesCustomCsrResponseCollection2()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const tls_certificates_and_hostnames_custom_csr_response_collection_2s = await client.TlsCertificatesAndHostnamesCustomCsrResponseCollection2().list({ account_id: "example" })
```


### TlsCertificatesAndHostnamesCustomCsrResponseIdOnly

Create an instance: `const tls_certificates_and_hostnames_custom_csr_response_id_only = client.TlsCertificatesAndHostnamesCustomCsrResponseIdOnly()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TlsCertificatesAndHostnamesCustomCsrResponseSingle

Create an instance: `const tls_certificates_and_hostnames_custom_csr_response_single = client.TlsCertificatesAndHostnamesCustomCsrResponseSingle()`

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
| `result` | `Record<string, any>` | A custom Certificate Signing Request (CSR). |
| `sans` | `any[]` | Subject Alternative Names for the CSR. |
| `state` | `string` | State or province name. |

#### Example: Load

```ts
const tls_certificates_and_hostnames_custom_csr_response_single = await client.TlsCertificatesAndHostnamesCustomCsrResponseSingle().load({ custom_csr_id: 'custom_csr_id', zone_id: 'zone_id' })
```

#### Example: Create

```ts
const tls_certificates_and_hostnames_custom_csr_response_single = await client.TlsCertificatesAndHostnamesCustomCsrResponseSingle().create({
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


### TlsCertificatesAndHostnamesCustomCsrResponseSingle2

Create an instance: `const tls_certificates_and_hostnames_custom_csr_response_single_2 = client.TlsCertificatesAndHostnamesCustomCsrResponseSingle2()`

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
| `result` | `Record<string, any>` | A custom Certificate Signing Request (CSR). |
| `sans` | `any[]` | Subject Alternative Names for the CSR. |
| `state` | `string` | State or province name. |

#### Example: Load

```ts
const tls_certificates_and_hostnames_custom_csr_response_single_2 = await client.TlsCertificatesAndHostnamesCustomCsrResponseSingle2().load({ account_id: 'account_id', custom_csr_id: 'custom_csr_id' })
```

#### Example: Create

```ts
const tls_certificates_and_hostnames_custom_csr_response_single_2 = await client.TlsCertificatesAndHostnamesCustomCsrResponseSingle2().create({
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


### TlsCertificatesAndHostnamesCustomHostnameQuota

Create an instance: `const tls_certificates_and_hostnames_custom_hostname_quota = client.TlsCertificatesAndHostnamesCustomHostnameQuota()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` | Informational messages returned by the custom hostname API. |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const tls_certificates_and_hostnames_custom_hostname_quotas = await client.TlsCertificatesAndHostnamesCustomHostnameQuota().list({ zone_id: "example" })
```


### TlsCertificatesAndHostnamesCustomHostnameResponseCollection

Create an instance: `const tls_certificates_and_hostnames_custom_hostname_response_collection = client.TlsCertificatesAndHostnamesCustomHostnameResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` | Informational messages returned by the custom hostname API. |
| `result` | `any[]` |  |
| `result_info` | `Record<string, any>` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const tls_certificates_and_hostnames_custom_hostname_response_collections = await client.TlsCertificatesAndHostnamesCustomHostnameResponseCollection().list({ zone_id: "example" })
```


### TlsCertificatesAndHostnamesCustomHostnameResponseSingle

Create an instance: `const tls_certificates_and_hostnames_custom_hostname_response_single = client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `custom_metadata` | `Record<string, any>` | Unique key/value metadata for this hostname. |
| `custom_origin_server` | `string` | a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record. |
| `custom_origin_sni` | `string` | A hostname that will be sent to your custom origin server as SNI for TLS handshake. |
| `errors` | `any[]` |  |
| `hostname` | `string` | The custom hostname that will point to your hostname via CNAME. |
| `messages` | `any[]` | Informational messages returned by the custom hostname API. |
| `result` | `Record<string, any>` |  |
| `ssl` | `Record<string, any>` | SSL properties used when creating the custom hostname. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: Load

```ts
const tls_certificates_and_hostnames_custom_hostname_response_single = await client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle().load({ custom_hostname_id: 'custom_hostname_id', zone_id: 'zone_id' })
```

#### Example: Create

```ts
const tls_certificates_and_hostnames_custom_hostname_response_single = await client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle().create({
  zone_id: 'example_zone_id',
  errors: [],
  hostname: 'example_hostname',
  messages: [],
  success: true,
})
```


### TlsCertificatesAndHostnamesCustomTrustStoreResponse

Create an instance: `const tls_certificates_and_hostnames_custom_trust_store_response = client.TlsCertificatesAndHostnamesCustomTrustStoreResponse()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const tls_certificates_and_hostnames_custom_trust_store_responses = await client.TlsCertificatesAndHostnamesCustomTrustStoreResponse().list({ zone_id: "example" })
```


### TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly

Create an instance: `const tls_certificates_and_hostnames_custom_trust_store_response_id_only = client.TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle

Create an instance: `const tls_certificates_and_hostnames_custom_trust_store_response_single = client.TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `certificate` | `string` | The root CA certificate in PEM format. |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const tls_certificates_and_hostnames_custom_trust_store_response_single = await client.TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle().load({ custom_origin_trust_store_id: 'custom_origin_trust_store_id', zone_id: 'zone_id' })
```

#### Example: Create

```ts
const tls_certificates_and_hostnames_custom_trust_store_response_single = await client.TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle().create({
  zone_id: 'example_zone_id',
  certificate: 'example_certificate',
  result: {},
})
```


### TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack

Create an instance: `const tls_certificates_and_hostnames_delete_advanced_certificate_pack = client.TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### TlsCertificatesAndHostnamesEnabled

Create an instance: `const tls_certificates_and_hostnames_enabled = client.TlsCertificatesAndHostnamesEnabled()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `boolean` | Indicates whether zone-level authenticated origin pulls is enabled. |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const tls_certificates_and_hostnames_enabled = await client.TlsCertificatesAndHostnamesEnabled().load({ zone_id: 'zone_id' })
```


### TlsCertificatesAndHostnamesFallbackOrigin

Create an instance: `const tls_certificates_and_hostnames_fallback_origin = client.TlsCertificatesAndHostnamesFallbackOrigin()`

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
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const tls_certificates_and_hostnames_fallback_origin = await client.TlsCertificatesAndHostnamesFallbackOrigin().load({ zone_id: 'zone_id' })
```


### TlsCertificatesAndHostnamesHostnameAopResponseCollection

Create an instance: `const tls_certificates_and_hostnames_hostname_aop_response_collection = client.TlsCertificatesAndHostnamesHostnameAopResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `any[]` |  |


### TlsCertificatesAndHostnamesHostnameAopSingle

Create an instance: `const tls_certificates_and_hostnames_hostname_aop_single = client.TlsCertificatesAndHostnamesHostnameAopSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const tls_certificates_and_hostnames_hostname_aop_single = await client.TlsCertificatesAndHostnamesHostnameAopSingle().load({ hostname: 'hostname', zone_id: 'zone_id' })
```


### TlsCertificatesAndHostnamesHostnameAssocResponseCollection

Create an instance: `const tls_certificates_and_hostnames_hostname_assoc_response_collection = client.TlsCertificatesAndHostnamesHostnameAssocResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |
| `result_info` | `Record<string, any>` |  |

#### Example: List

```ts
const tls_certificates_and_hostnames_hostname_assoc_response_collections = await client.TlsCertificatesAndHostnamesHostnameAssocResponseCollection().list({ zone_id: "example" })
```


### TlsCertificatesAndHostnamesKeylessResponseCollection

Create an instance: `const tls_certificates_and_hostnames_keyless_response_collection = client.TlsCertificatesAndHostnamesKeylessResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const tls_certificates_and_hostnames_keyless_response_collections = await client.TlsCertificatesAndHostnamesKeylessResponseCollection().list({ zone_id: "example" })
```


### TlsCertificatesAndHostnamesKeylessResponseSingle

Create an instance: `const tls_certificates_and_hostnames_keyless_response_single = client.TlsCertificatesAndHostnamesKeylessResponseSingle()`

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
| `result` | `Record<string, any>` |  |
| `tunnel` | `Record<string, any>` | Configuration for using Keyless SSL through a Cloudflare Tunnel. |

#### Example: Load

```ts
const tls_certificates_and_hostnames_keyless_response_single = await client.TlsCertificatesAndHostnamesKeylessResponseSingle().load({ keyless_certificate_id: 'keyless_certificate_id', zone_id: 'zone_id' })
```

#### Example: Create

```ts
const tls_certificates_and_hostnames_keyless_response_single = await client.TlsCertificatesAndHostnamesKeylessResponseSingle().create({
  zone_id: 'example_zone_id',
  certificate: 'example_certificate',
  host: 'example_host',
  port: 1,
  tunnel: {},
})
```


### TlsCertificatesAndHostnamesKeylessResponseSingleId

Create an instance: `const tls_certificates_and_hostnames_keyless_response_single_id = client.TlsCertificatesAndHostnamesKeylessResponseSingleId()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### TlsCertificatesAndHostnamesPerHostnameSetting

Create an instance: `const tls_certificates_and_hostnames_per_hostname_setting = client.TlsCertificatesAndHostnamesPerHostnameSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `result` | `Record<string, any>` |  |
| `value` | `any` | The TLS setting value. |

#### Example: Load

```ts
const tls_certificates_and_hostnames_per_hostname_setting = await client.TlsCertificatesAndHostnamesPerHostnameSetting().load({ hostname: 'hostname', setting_id: 'setting_id', zone_id: 'zone_id' })
```


### TlsCertificatesAndHostnamesPerHostnameSettingsResponse

Create an instance: `const tls_certificates_and_hostnames_per_hostname_settings_response = client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |
| `result_info` | `Record<string, any>` |  |

#### Example: Load

```ts
const tls_certificates_and_hostnames_per_hostname_settings_response = await client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse().load({ setting_id: 'setting_id', zone_id: 'zone_id' })
```


### TlsCertificatesAndHostnamesPerHostnameSettingsResponse2

Create an instance: `const tls_certificates_and_hostnames_per_hostname_settings_response2 = client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse2()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### TlsCertificatesAndHostnamesSslUniversalSetting

Create an instance: `const tls_certificates_and_hostnames_ssl_universal_setting = client.TlsCertificatesAndHostnamesSslUniversalSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `boolean` | Disabling Universal SSL removes any currently active Universal SSL certificates for your zone from the edge and prevents any future Universal SSL certificates from being ordered. |
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const tls_certificates_and_hostnames_ssl_universal_setting = await client.TlsCertificatesAndHostnamesSslUniversalSetting().load({ zone_id: 'zone_id' })
```


### TlsCertificatesAndHostnamesSslValidationMethodResponse

Create an instance: `const tls_certificates_and_hostnames_ssl_validation_method_response = client.TlsCertificatesAndHostnamesSslValidationMethodResponse()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `validation_method` | `string` | Desired validation method. |


### TlsCertificatesAndHostnamesSslVerificationResponseCollection

Create an instance: `const tls_certificates_and_hostnames_ssl_verification_response_collection = client.TlsCertificatesAndHostnamesSslVerificationResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `result` | `any[]` |  |

#### Example: List

```ts
const tls_certificates_and_hostnames_ssl_verification_response_collections = await client.TlsCertificatesAndHostnamesSslVerificationResponseCollection().list({ zone_id: "example" })
```


### TlsCertificatesAndHostnamesTotalTlsSetting

Create an instance: `const tls_certificates_and_hostnames_total_tls_setting = client.TlsCertificatesAndHostnamesTotalTlsSetting()`

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
| `result` | `Record<string, any>` |  |

#### Example: Load

```ts
const tls_certificates_and_hostnames_total_tls_setting = await client.TlsCertificatesAndHostnamesTotalTlsSetting().load({ zone_id: 'zone_id' })
```

#### Example: Create

```ts
const tls_certificates_and_hostnames_total_tls_setting = await client.TlsCertificatesAndHostnamesTotalTlsSetting().create({
  zone_id: 'example_zone_id',
  enabled: true,
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
cloudflare-ssl/
├── src/
│   ├── CloudflareSslSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { CloudflareSslSDK } from '@voxgig-sdk/cloudflare-ssl-sdk'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const tlscertificatesandhostnamesperhostnamesettingsresponse = client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse()
await tlscertificatesandhostnamesperhostnamesettingsresponse.load({ setting_id: "example", zone_id: "example" })

// tlscertificatesandhostnamesperhostnamesettingsresponse.data() now returns the tlscertificatesandhostnamesperhostnamesettingsresponse data from the last `load`
// tlscertificatesandhostnamesperhostnamesettingsresponse.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
