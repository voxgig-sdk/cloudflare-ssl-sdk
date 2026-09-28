# Cloudflare SSL/TLS

Cloudflare SSL/TLS: certificates, custom certificates, keyless SSL, origin CA, client certificates, and TLS settings.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 57 entities and 92 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [CacheApiResponseSingleId](docs/api/cache_api_response_single_id.html)

Results: Patch Automatic SSL/TLS Enrollment status response.

SDK operations: `update`.

Key fields to recognise:

- `success`: Indicates the API call&#39;s success or failure.
- `value`: Current setting of the automatic SSL/TLS.

### [CacheAutoOriginTlsKex](docs/api/cache_auto_origin_tls_kex.html)

Results: Get Auto-Origin TLS KEX enrollment status response.; Patch Auto-Origin TLS KEX enrollment status response.

SDK operations: `list`, `update`.

Key fields to recognise:

- `enabled`: Whether Auto-Origin TLS KEX selection is enabled for the zone.
- `success`: Indicates the API call&#39;s success or failure.

### [CustomHostname](docs/api/custom_hostname.html)

Results: Delete Custom Hostname (and any issued SSL certificates) response.

SDK operations: `remove`.

Key fields to recognise:

- `id`: Custom hostname identifier tag.

### [CustomHostnameForAZone](docs/api/custom_hostname_for_a_zone.html)

Results: Delete Single Certificate and Key In a Custom Hostname response.; Edit Custom Certificate In a Custom Hostname response.

SDK operations: `remove`, `update`.

Key fields to recognise:

- `custom_certificate`: If a custom uploaded certificate is used.
- `custom_key`: The key for a custom uploaded certificate.

### [OriginTl](docs/api/origin_tl.html)

Results: Get Origin TLS Compliance Modes setting response.; Change Origin TLS Compliance Modes setting response.; Delete Origin TLS Compliance Modes setting response.; Replace Origin TLS Compliance Modes setting response.

SDK operations: `load`, `patch`, `remove`, `update`.

Key fields to recognise:

- `result`: Origin TLS Compliance Modes constrains the set of TLS key-exchange algorithms Cloudflare may use when establishing the TLS connection to the zone&#39;s origin. The value is a list of named compliance modes (currently `fips` and `pqh`). Multiple modes are combined as the intersection of their permitted algorithm lists.
- `value`: The value of the setting.

### [Recommendation](docs/api/recommendation.html)

Results: SSL/TLS Recommendation response.

SDK operations: `list`.

Key fields to recognise:

- `success`: Indicates the API call&#39;s success or failure.

### [SslAutomaticMode](docs/api/ssl_automatic_mode.html)

Results: Get Automatic SSL/TLS Enrollment status response.

SDK operations: `list`.

Key fields to recognise:

- `success`: Indicates the API call&#39;s success or failure.

### [TlsCertificatesAndHostnamesAdvancedCertificatePackResponse](docs/api/tls_certificates_and_hostnames_advanced_certificate_pack_response.html)

Results: Order Advanced Certificate Manager Certificate Pack response.; Restart Validation for Advanced Certificate Manager Certificate Pack response.

SDK operations: `create`, `update`.

Key fields to recognise:

- `certificate_authority`: Certificate Authority selected for the order. For information on any certificate authority specific details or restrictions [see this page for more details](https://developers.cloudflare.com/ssl/reference/certificate-authorities).
- `cloudflare_branding`: Whether or not to add Cloudflare Branding for the order. This will add a subdomain of sni.cloudflaressl.com as the Common Name if set to true.
- `hosts`: Comma separated list of valid host names for the certificate packs. Must contain the zone apex, may not contain more than 50 hosts, and may not be empty.
- `type`: Type of certificate pack.
- `validation_method`: Validation Method selected for the order.

### [TlsCertificatesAndHostnamesAssociationResponseCollection](docs/api/tls_certificates_and_hostnames_association_response_collection.html)

Results: List mTLS certificate associations response.

SDK operations: `list`.

### [TlsCertificatesAndHostnamesCertificateAnalyze](docs/api/tls_certificates_and_hostnames_certificate_analyze.html)

Results: Analyze Certificate response.

SDK operations: `create`.

Key fields to recognise:

- `bundle_method`: A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores.
- `certificate`: The zone&#39;s SSL certificate or certificate and the intermediate(s).

### [TlsCertificatesAndHostnamesCertificatePackQuota](docs/api/tls_certificates_and_hostnames_certificate_pack_quota.html)

Results: Get Certificate Pack Quotas response.

SDK operations: `load`.

### [TlsCertificatesAndHostnamesCertificatePackResponseCollection](docs/api/tls_certificates_and_hostnames_certificate_pack_response_collection.html)

Results: List Certificate Packs response.

SDK operations: `list`.

### [TlsCertificatesAndHostnamesCertificatePackResponseSingle](docs/api/tls_certificates_and_hostnames_certificate_pack_response_single.html)

Results: Get Certificate Pack response.

SDK operations: `load`.

Key fields to recognise:

- `result`: A certificate pack with all its properties.

### [TlsCertificatesAndHostnamesCertificateResponseCollection](docs/api/tls_certificates_and_hostnames_certificate_response_collection.html)

Results: List SSL Configurations response.; Re-prioritize SSL Certificates response.

SDK operations: `list`, `update`.

Key fields to recognise:

- `certificates`: Array of ordered certificates.

### [TlsCertificatesAndHostnamesCertificateResponseCollection3](docs/api/tls_certificates_and_hostnames_certificate_response_collection_3.html)

Results: List Certificates response.

SDK operations: `list`.

### [TlsCertificatesAndHostnamesCertificateResponseCollection4](docs/api/tls_certificates_and_hostnames_certificate_response_collection_4.html)

Results: List Certificates response.

SDK operations: `list`.

### [TlsCertificatesAndHostnamesCertificateResponseCollection5](docs/api/tls_certificates_and_hostnames_certificate_response_collection_5.html)

Results: List mTLS certificates response.

SDK operations: `list`.

### [TlsCertificatesAndHostnamesCertificateResponseIdOnly](docs/api/tls_certificates_and_hostnames_certificate_response_id_only.html)

Results: Delete SSL Configuration response.

SDK operations: `remove`.

### [TlsCertificatesAndHostnamesCertificateResponseSingle](docs/api/tls_certificates_and_hostnames_certificate_response_single.html)

Results: Create SSL Configuration response.; SSL Configuration Details response.; Edit SSL Configuration response.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `bundle_method`: A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest intermediates. And the force bundle verifies the chain, but does not otherwise modify it.
- `certificate`: The zone&#39;s SSL certificate or certificate and the intermediate(s).
- `custom_csr_id`: The identifier for the Custom CSR that was used.
- `deploy`: The environment to deploy the certificate to, defaults to production.
- `geo_restrictions`: Specify the region where your private key can be held locally for optimal TLS performance. HTTPS connections to any excluded data center will still be fully encrypted, but will incur some latency while Keyless SSL is used to complete the handshake with the nearest allowed data center. Options allow distribution to only to U.S. data centers, only to E.U. data centers, or only to highest security data centers. Default distribution is to all Cloudflare datacenters, for optimal performance.

### [TlsCertificatesAndHostnamesCertificateResponseSingle2](docs/api/tls_certificates_and_hostnames_certificate_response_single_2.html)

Results: Create Certificate response.; List Certificates response.; Get Certificate response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `csr`: The Certificate Signing Request (CSR). Must be newline-encoded.
- `hostnames`: Array of hostnames or wildcard names bound to the certificate. Hostnames must be fully qualified domain names (FQDNs) belonging to zones on your account (for example, `example.com` or `sub.example.com`). Wildcards are supported only as a `*.` prefix for a single level (for example, `*.example.com`). Double wildcards (`*.*.example.com`) and interior wildcards (`foo.*.example.com`) are not allowed. The wildcard suffix must be a multi-label domain (`*.example.com` is valid, but `*.com` is not). Unicode/IDN hostnames are accepted and automatically converted to punycode.
- `request_type`: Signature type desired on certificate (&quot;origin-rsa&quot; (rsa), &quot;origin-ecc&quot; (ecdsa), or &quot;keyless-certificate&quot; (for Keyless SSL servers).
- `requested_validity`: The number of days for which the certificate should be valid.

### [TlsCertificatesAndHostnamesCertificateResponseSingle3](docs/api/tls_certificates_and_hostnames_certificate_response_single_3.html)

Results: Upload Certificate response.; Get Certificate Details response.; Delete Certificate response.

SDK operations: `create`, `load`, `remove`.

Key fields to recognise:

- `certificate`: The zone&#39;s leaf certificate.
- `private_key`: The zone&#39;s private key.

### [TlsCertificatesAndHostnamesCertificateResponseSingle4](docs/api/tls_certificates_and_hostnames_certificate_response_single_4.html)

Results: Upload a Hostname Client Certificate response.; Get the Hostname Client Certificate response.; Delete Hostname Client Certificate response.

SDK operations: `create`, `load`, `remove`.

Key fields to recognise:

- `certificate`: The hostname certificate.
- `private_key`: The hostname certificate&#39;s private key.

### [TlsCertificatesAndHostnamesCertificateResponseSingle5](docs/api/tls_certificates_and_hostnames_certificate_response_single_5.html)

Results: Get mTLS certificate response.; Delete mTLS certificate response.

SDK operations: `load`, `remove`.

### [TlsCertificatesAndHostnamesCertificateResponseSinglePost](docs/api/tls_certificates_and_hostnames_certificate_response_single_post.html)

Results: Upload mTLS certificate response.

SDK operations: `create`.

Key fields to recognise:

- `ca`: Indicates whether the certificate is a CA or leaf certificate.
- `certificates`: The uploaded root CA certificate.
- `name`: Optional unique name for the certificate. Only used for human readability.
- `private_key`: The private key for the certificate.

### [TlsCertificatesAndHostnamesCertificateRevoke](docs/api/tls_certificates_and_hostnames_certificate_revoke.html)

Results: Revoke Certificate response.

SDK operations: `remove`.

### [TlsCertificatesAndHostnamesClientCertificateResponse](docs/api/tls_certificates_and_hostnames_client_certificate_response.html)

Results: List Client Certificates Response.

SDK operations: `list`.

### [TlsCertificatesAndHostnamesClientCertificateResponseSingle](docs/api/tls_certificates_and_hostnames_client_certificate_response_single.html)

Results: Create Client Certificate Response.; Client Certificate Details Response.; Revoke Client Certificate Response.; Reactivate Client Certificate Response.

SDK operations: `create`, `load`, `remove`, `update`.

Key fields to recognise:

- `csr`: The Certificate Signing Request (CSR). Must be newline-encoded.
- `validity_days`: The number of days the Client Certificate will be valid after the issued_on date.

### [TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse](docs/api/tls_certificates_and_hostnames_ct_alerting_subscription_response.html)

Results: Get CT Alerting Subscription response.; Update CT Alerting Subscription response.

SDK operations: `load`, `update`.

Key fields to recognise:

- `emails`: Email addresses that receive CT alert notifications for the zone. A maximum of 100 addresses may be configured. Each address must be a valid RFC 5322 email address and must not contain a comma.
- `enabled`: Whether CT alerting is enabled for the zone.

### [TlsCertificatesAndHostnamesCustomCsrResponseCollection](docs/api/tls_certificates_and_hostnames_custom_csr_response_collection.html)

Results: List Custom CSRs response.

SDK operations: `list`.

### [TlsCertificatesAndHostnamesCustomCsrResponseCollection2](docs/api/tls_certificates_and_hostnames_custom_csr_response_collection_2.html)

Results: List Custom CSRs response.

SDK operations: `list`.

### [TlsCertificatesAndHostnamesCustomCsrResponseIdOnly](docs/api/tls_certificates_and_hostnames_custom_csr_response_id_only.html)

Results: Delete Custom CSR response.

SDK operations: `remove`.

### [TlsCertificatesAndHostnamesCustomCsrResponseSingle](docs/api/tls_certificates_and_hostnames_custom_csr_response_single.html)

Results: Create Custom CSR response.; Custom CSR Details response.

SDK operations: `create`, `load`.

Key fields to recognise:

- `common_name`: The common name (domain) for the CSR.
- `country`: Two-letter ISO 3166-1 alpha-2 country code.
- `key_type`: The key algorithm used to generate the CSR.
- `locality`: City or locality name.
- `organization`: Organization name.

### [TlsCertificatesAndHostnamesCustomCsrResponseSingle2](docs/api/tls_certificates_and_hostnames_custom_csr_response_single_2.html)

Results: Create Custom CSR response.; Custom CSR Details response.

SDK operations: `create`, `load`.

Key fields to recognise:

- `common_name`: The common name (domain) for the CSR.
- `country`: Two-letter ISO 3166-1 alpha-2 country code.
- `description`: Optional description for the CSR.
- `key_type`: The key algorithm used to generate the CSR.
- `locality`: City or locality name.

### [TlsCertificatesAndHostnamesCustomHostnameQuota](docs/api/tls_certificates_and_hostnames_custom_hostname_quota.html)

Results: Get Custom Hostname Quota response.

SDK operations: `list`.

Key fields to recognise:

- `messages`: Informational messages returned by the custom hostname API.
- `success`: Whether the API call was successful.

### [TlsCertificatesAndHostnamesCustomHostnameResponseCollection](docs/api/tls_certificates_and_hostnames_custom_hostname_response_collection.html)

Results: List Custom Hostnames response.

SDK operations: `list`.

Key fields to recognise:

- `messages`: Informational messages returned by the custom hostname API.
- `success`: Whether the API call was successful.

### [TlsCertificatesAndHostnamesCustomHostnameResponseSingle](docs/api/tls_certificates_and_hostnames_custom_hostname_response_single.html)

Results: Create Custom Hostname response.; Custom Hostname Details response.; Edit Custom Hostname response.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `custom_metadata`: Unique key/value metadata for this hostname. These are per-hostname (customer) settings.
- `custom_origin_server`: a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record.
- `custom_origin_sni`: A hostname that will be sent to your custom origin server as SNI for TLS handshake. This can be a valid subdomain of the zone or custom origin server name or the string &#39;:request_host_header:&#39; which will cause the host header in the request to be used as SNI. Not configurable with default/fallback origin server.
- `hostname`: The custom hostname that will point to your hostname via CNAME.
- `messages`: Informational messages returned by the custom hostname API.

### [TlsCertificatesAndHostnamesCustomTrustStoreResponse](docs/api/tls_certificates_and_hostnames_custom_trust_store_response.html)

Results: Custom Origin Trust Store Details response.

SDK operations: `list`.

### [TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly](docs/api/tls_certificates_and_hostnames_custom_trust_store_response_id_only.html)

Results: Delete Custom Origin Trust Store response.

SDK operations: `remove`.

### [TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle](docs/api/tls_certificates_and_hostnames_custom_trust_store_response_single.html)

Results: Upload Custom Origin Trust Store response.; Custom Origin Trust Store Details response.

SDK operations: `create`, `load`.

Key fields to recognise:

- `certificate`: The root CA certificate in PEM format. Only root CA certificates are accepted; intermediate and leaf certificates are not supported.

### [TlsCertificatesAndHostnamesDcvDelegation](docs/api/tls_certificates_and_hostnames_dcv_delegation.html)

Results: Retrieve the DCV Delegation unique identifier response.

SDK operations: `load`.

### [TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack](docs/api/tls_certificates_and_hostnames_delete_advanced_certificate_pack.html)

Results: Delete Advanced Certificate Manager Certificate Pack response.

SDK operations: `remove`.

Key fields to recognise:

- `id`: The unique identifier for a certificate_pack.

### [TlsCertificatesAndHostnamesEnabled](docs/api/tls_certificates_and_hostnames_enabled.html)

Results: Get Enablement Setting for Zone response.; Set Enablement for Zone response.

SDK operations: `load`, `update`.

Key fields to recognise:

- `enabled`: Indicates whether zone-level authenticated origin pulls is enabled.

### [TlsCertificatesAndHostnamesFallbackOrigin](docs/api/tls_certificates_and_hostnames_fallback_origin.html)

Results: Get Fallback Origin for Custom Hostnames response.; Delete Fallback Origin for Custom Hostnames response.; Update Fallback Origin for Custom Hostnames response.

SDK operations: `load`, `remove`, `update`.

Key fields to recognise:

- `origin`: Your origin hostname that requests to your custom hostnames will be sent to.

### [TlsCertificatesAndHostnamesHostnameAopResponseCollection](docs/api/tls_certificates_and_hostnames_hostname_aop_response_collection.html)

Results: Enable or Disable a Hostname for Client Authentication response.

SDK operations: `update`.

### [TlsCertificatesAndHostnamesHostnameAopSingle](docs/api/tls_certificates_and_hostnames_hostname_aop_single.html)

Results: Get the Hostname Status for Client Authentication response.

SDK operations: `load`.

### [TlsCertificatesAndHostnamesHostnameAssocResponseCollection](docs/api/tls_certificates_and_hostnames_hostname_assoc_response_collection.html)

Results: List Hostname Associations response.

SDK operations: `list`.

### [TlsCertificatesAndHostnamesHostnameAssociation](docs/api/tls_certificates_and_hostnames_hostname_association.html)

Results: List Hostname Associations Response.; Replace Hostname Associations Response.

SDK operations: `load`, `update`.

Key fields to recognise:

- `mtls_certificate_id`: The UUID for a certificate that was uploaded to the mTLS Certificate Management endpoint.

### [TlsCertificatesAndHostnamesKeylessResponseCollection](docs/api/tls_certificates_and_hostnames_keyless_response_collection.html)

Results: List Keyless SSL Configurations response.

SDK operations: `list`.

### [TlsCertificatesAndHostnamesKeylessResponseSingle](docs/api/tls_certificates_and_hostnames_keyless_response_single.html)

Results: Create Keyless SSL Configuration response.; Get Keyless SSL Configuration response.; Edit Keyless SSL Configuration response.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `bundle_method`: A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores.
- `certificate`: The zone&#39;s SSL certificate or SSL certificate and intermediate(s).
- `enabled`: Whether or not the Keyless SSL is on or off.
- `host`: The keyless SSL name.
- `name`: The keyless SSL name.

### [TlsCertificatesAndHostnamesKeylessResponseSingleId](docs/api/tls_certificates_and_hostnames_keyless_response_single_id.html)

Results: Delete Keyless SSL Configuration response.

SDK operations: `remove`.

### [TlsCertificatesAndHostnamesPerHostnameSetting](docs/api/tls_certificates_and_hostnames_per_hostname_setting.html)

Results: Get TLS setting for hostname response.; Edit TLS setting for hostname response.

SDK operations: `load`, `update`.

Key fields to recognise:

- `value`: The TLS setting value. The type depends on the `setting_id` used in the request path: - `ciphers`: an array of allowed cipher suite strings in BoringSSL format (for example, `[&quot;ECDHE-RSA-AES128-GCM-SHA256&quot;, &quot;AES128-GCM-SHA256&quot;]`). - `min_tls_version`: a string indicating the minimum TLS version, one of `&quot;1.0&quot;`, `&quot;1.1&quot;`, `&quot;1.2&quot;`, or `&quot;1.3&quot;` (for example, `&quot;1.2&quot;`). - `http2`: a string indicating whether HTTP/2 is enabled, `&quot;on&quot;` or `&quot;off&quot;` (for example, `&quot;on&quot;`).

### [TlsCertificatesAndHostnamesPerHostnameSettingsResponse](docs/api/tls_certificates_and_hostnames_per_hostname_settings_response.html)

Results: List per-hostname TLS settings response.

SDK operations: `load`.

### [TlsCertificatesAndHostnamesPerHostnameSettingsResponse2](docs/api/tls_certificates_and_hostnames_per_hostname_settings_response2.html)

Results: Delete TLS setting for hostname response.

SDK operations: `remove`.

### [TlsCertificatesAndHostnamesSslUniversalSetting](docs/api/tls_certificates_and_hostnames_ssl_universal_setting.html)

Results: Universal SSL Settings Details response.; Edit Universal SSL Settings response.

SDK operations: `load`, `update`.

Key fields to recognise:

- `enabled`: Disabling Universal SSL removes any currently active Universal SSL certificates for your zone from the edge and prevents any future Universal SSL certificates from being ordered. If there are no advanced certificates or custom certificates uploaded for the domain, visitors will be unable to access the domain over HTTPS. By disabling Universal SSL, you understand that the following Cloudflare settings and preferences will result in visitors being unable to visit your domain unless you have uploaded a custom certificate or purchased an advanced certificate. * HSTS * Always Use HTTPS * Opportunistic Encryption * Onion Routing * Any Page Rules redirecting traffic to HTTPS Similarly, any HTTP redirect to HTTPS at the origin while the Cloudflare proxy is enabled will result in users being unable to visit your site without a valid certificate at Cloudflare&#39;s edge. If you do not have a valid custom or advanced certificate at Cloudflare&#39;s edge and are unsure if any of the above Cloudflare settings are enabled, or if any HTTP redirects exist at your origin, we advise leaving Universal SSL enabled for your domain.

### [TlsCertificatesAndHostnamesSslValidationMethodResponse](docs/api/tls_certificates_and_hostnames_ssl_validation_method_response.html)

Results: Edit SSL Certificate Pack Validation Method response.

SDK operations: `update`.

Key fields to recognise:

- `validation_method`: Desired validation method.

### [TlsCertificatesAndHostnamesSslVerificationResponseCollection](docs/api/tls_certificates_and_hostnames_ssl_verification_response_collection.html)

Results: SSL Verification Details response.

SDK operations: `list`.

### [TlsCertificatesAndHostnamesTotalTlsSetting](docs/api/tls_certificates_and_hostnames_total_tls_setting.html)

Results: Enable or Disable Total TLS response.; Total TLS Settings Details response.

SDK operations: `create`, `load`.

Key fields to recognise:

- `certificate_authority`: The Certificate Authority that Total TLS certificates will be issued through.
- `enabled`: If enabled, Total TLS will order a hostname specific TLS certificate for any proxied A, AAAA, or CNAME record in your zone.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [CacheApiResponseSingleId](docs/api/cache_api_response_single_id.html) | `update` | `PATCH /zones/{zone_id}/settings/ssl_automatic_mode` | Required |
| [CacheAutoOriginTlsKex](docs/api/cache_auto_origin_tls_kex.html) | `list` | `GET /zones/{zone_id}/settings/auto_origin_tls_kex` | Required |
| [CacheAutoOriginTlsKex](docs/api/cache_auto_origin_tls_kex.html) | `update` | `PATCH /zones/{zone_id}/settings/auto_origin_tls_kex` | Required |
| [CustomHostname](docs/api/custom_hostname.html) | `remove` | `DELETE /zones/{zone_id}/custom_hostnames/{custom_hostname_id}` | Required |
| [CustomHostnameForAZone](docs/api/custom_hostname_for_a_zone.html) | `remove` | `DELETE /zones/{zone_id}/custom_hostnames/{custom_hostname_id}/certificate_pack/{certificate_pack_id}/certificates/{certificate_id}` | Required |
| [CustomHostnameForAZone](docs/api/custom_hostname_for_a_zone.html) | `update` | `PUT /zones/{zone_id}/custom_hostnames/{custom_hostname_id}/certificate_pack/{certificate_pack_id}/certificates/{certificate_id}` | Required |
| [OriginTl](docs/api/origin_tl.html) | `load` | `GET /zones/{zone_id}/settings/origin_tls_compliance_modes` | Required |
| [OriginTl](docs/api/origin_tl.html) | `patch` | `PATCH /zones/{zone_id}/settings/origin_tls_compliance_modes` | Required |
| [OriginTl](docs/api/origin_tl.html) | `remove` | `DELETE /zones/{zone_id}/settings/origin_tls_compliance_modes` | Required |
| [OriginTl](docs/api/origin_tl.html) | `update` | `PUT /zones/{zone_id}/settings/origin_tls_compliance_modes` | Required |
| [Recommendation](docs/api/recommendation.html) | `list` | `GET /zones/{zone_id}/ssl/recommendation` | Required |
| [SslAutomaticMode](docs/api/ssl_automatic_mode.html) | `list` | `GET /zones/{zone_id}/settings/ssl_automatic_mode` | Required |
| [TlsCertificatesAndHostnamesAdvancedCertificatePackResponse](docs/api/tls_certificates_and_hostnames_advanced_certificate_pack_response.html) | `create` | `POST /zones/{zone_id}/ssl/certificate_packs/order` | Required |
| [TlsCertificatesAndHostnamesAdvancedCertificatePackResponse](docs/api/tls_certificates_and_hostnames_advanced_certificate_pack_response.html) | `update` | `PATCH /zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}` | Required |
| [TlsCertificatesAndHostnamesAssociationResponseCollection](docs/api/tls_certificates_and_hostnames_association_response_collection.html) | `list` | `GET /accounts/{account_id}/mtls_certificates/{mtls_certificate_id}/associations` | Required |
| [TlsCertificatesAndHostnamesCertificateAnalyze](docs/api/tls_certificates_and_hostnames_certificate_analyze.html) | `create` | `POST /zones/{zone_id}/ssl/analyze` | Required |
| [TlsCertificatesAndHostnamesCertificatePackQuota](docs/api/tls_certificates_and_hostnames_certificate_pack_quota.html) | `load` | `GET /zones/{zone_id}/ssl/certificate_packs/quota` | Required |
| [TlsCertificatesAndHostnamesCertificatePackResponseCollection](docs/api/tls_certificates_and_hostnames_certificate_pack_response_collection.html) | `list` | `GET /zones/{zone_id}/ssl/certificate_packs` | Required |
| [TlsCertificatesAndHostnamesCertificatePackResponseSingle](docs/api/tls_certificates_and_hostnames_certificate_pack_response_single.html) | `load` | `GET /zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}` | Required |
| [TlsCertificatesAndHostnamesCertificateResponseCollection](docs/api/tls_certificates_and_hostnames_certificate_response_collection.html) | `list` | `GET /zones/{zone_id}/custom_certificates` | Required |
| [TlsCertificatesAndHostnamesCertificateResponseCollection](docs/api/tls_certificates_and_hostnames_certificate_response_collection.html) | `update` | `PUT /zones/{zone_id}/custom_certificates/prioritize` | Required |
| [TlsCertificatesAndHostnamesCertificateResponseCollection3](docs/api/tls_certificates_and_hostnames_certificate_response_collection_3.html) | `list` | `GET /zones/{zone_id}/origin_tls_client_auth` | Required |
| [TlsCertificatesAndHostnamesCertificateResponseCollection4](docs/api/tls_certificates_and_hostnames_certificate_response_collection_4.html) | `list` | `GET /zones/{zone_id}/origin_tls_client_auth/hostnames/certificates` | Required |
| [TlsCertificatesAndHostnamesCertificateResponseCollection5](docs/api/tls_certificates_and_hostnames_certificate_response_collection_5.html) | `list` | `GET /accounts/{account_id}/mtls_certificates` | Required |
| [TlsCertificatesAndHostnamesCertificateResponseIdOnly](docs/api/tls_certificates_and_hostnames_certificate_response_id_only.html) | `remove` | `DELETE /zones/{zone_id}/custom_certificates/{custom_certificate_id}` | Required |
| [TlsCertificatesAndHostnamesCertificateResponseSingle](docs/api/tls_certificates_and_hostnames_certificate_response_single.html) | `create` | `POST /zones/{zone_id}/custom_certificates` | Required |
| [TlsCertificatesAndHostnamesCertificateResponseSingle](docs/api/tls_certificates_and_hostnames_certificate_response_single.html) | `load` | `GET /zones/{zone_id}/custom_certificates/{custom_certificate_id}` | Required |
| [TlsCertificatesAndHostnamesCertificateResponseSingle](docs/api/tls_certificates_and_hostnames_certificate_response_single.html) | `update` | `PATCH /zones/{zone_id}/custom_certificates/{custom_certificate_id}` | Required |
| [TlsCertificatesAndHostnamesCertificateResponseSingle2](docs/api/tls_certificates_and_hostnames_certificate_response_single_2.html) | `create` | `POST /certificates` | Required |
| [TlsCertificatesAndHostnamesCertificateResponseSingle2](docs/api/tls_certificates_and_hostnames_certificate_response_single_2.html) | `list` | `GET /certificates` | Required |
| [TlsCertificatesAndHostnamesCertificateResponseSingle2](docs/api/tls_certificates_and_hostnames_certificate_response_single_2.html) | `load` | `GET /certificates/{certificate_id}` | Required |
| [TlsCertificatesAndHostnamesCertificateResponseSingle3](docs/api/tls_certificates_and_hostnames_certificate_response_single_3.html) | `create` | `POST /zones/{zone_id}/origin_tls_client_auth` | Required |
| [TlsCertificatesAndHostnamesCertificateResponseSingle3](docs/api/tls_certificates_and_hostnames_certificate_response_single_3.html) | `load` | `GET /zones/{zone_id}/origin_tls_client_auth/{certificate_id}` | Required |
| [TlsCertificatesAndHostnamesCertificateResponseSingle3](docs/api/tls_certificates_and_hostnames_certificate_response_single_3.html) | `remove` | `DELETE /zones/{zone_id}/origin_tls_client_auth/{certificate_id}` | Required |
| [TlsCertificatesAndHostnamesCertificateResponseSingle4](docs/api/tls_certificates_and_hostnames_certificate_response_single_4.html) | `create` | `POST /zones/{zone_id}/origin_tls_client_auth/hostnames/certificates` | Required |
| [TlsCertificatesAndHostnamesCertificateResponseSingle4](docs/api/tls_certificates_and_hostnames_certificate_response_single_4.html) | `load` | `GET /zones/{zone_id}/origin_tls_client_auth/hostnames/certificates/{certificate_id}` | Required |
| [TlsCertificatesAndHostnamesCertificateResponseSingle4](docs/api/tls_certificates_and_hostnames_certificate_response_single_4.html) | `remove` | `DELETE /zones/{zone_id}/origin_tls_client_auth/hostnames/certificates/{certificate_id}` | Required |
| [TlsCertificatesAndHostnamesCertificateResponseSingle5](docs/api/tls_certificates_and_hostnames_certificate_response_single_5.html) | `load` | `GET /accounts/{account_id}/mtls_certificates/{mtls_certificate_id}` | Required |
| [TlsCertificatesAndHostnamesCertificateResponseSingle5](docs/api/tls_certificates_and_hostnames_certificate_response_single_5.html) | `remove` | `DELETE /accounts/{account_id}/mtls_certificates/{mtls_certificate_id}` | Required |
| [TlsCertificatesAndHostnamesCertificateResponseSinglePost](docs/api/tls_certificates_and_hostnames_certificate_response_single_post.html) | `create` | `POST /accounts/{account_id}/mtls_certificates` | Required |
| [TlsCertificatesAndHostnamesCertificateRevoke](docs/api/tls_certificates_and_hostnames_certificate_revoke.html) | `remove` | `DELETE /certificates/{certificate_id}` | Required |
| [TlsCertificatesAndHostnamesClientCertificateResponse](docs/api/tls_certificates_and_hostnames_client_certificate_response.html) | `list` | `GET /zones/{zone_id}/client_certificates` | Required |
| [TlsCertificatesAndHostnamesClientCertificateResponseSingle](docs/api/tls_certificates_and_hostnames_client_certificate_response_single.html) | `create` | `POST /zones/{zone_id}/client_certificates` | Required |
| [TlsCertificatesAndHostnamesClientCertificateResponseSingle](docs/api/tls_certificates_and_hostnames_client_certificate_response_single.html) | `load` | `GET /zones/{zone_id}/client_certificates/{client_certificate_id}` | Required |
| [TlsCertificatesAndHostnamesClientCertificateResponseSingle](docs/api/tls_certificates_and_hostnames_client_certificate_response_single.html) | `remove` | `DELETE /zones/{zone_id}/client_certificates/{client_certificate_id}` | Required |
| [TlsCertificatesAndHostnamesClientCertificateResponseSingle](docs/api/tls_certificates_and_hostnames_client_certificate_response_single.html) | `update` | `PATCH /zones/{zone_id}/client_certificates/{client_certificate_id}` | Required |
| [TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse](docs/api/tls_certificates_and_hostnames_ct_alerting_subscription_response.html) | `load` | `GET /zones/{zone_id}/ct/alerting` | Required |
| [TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse](docs/api/tls_certificates_and_hostnames_ct_alerting_subscription_response.html) | `update` | `PATCH /zones/{zone_id}/ct/alerting` | Required |
| [TlsCertificatesAndHostnamesCustomCsrResponseCollection](docs/api/tls_certificates_and_hostnames_custom_csr_response_collection.html) | `list` | `GET /zones/{zone_id}/custom_csrs` | Required |
| [TlsCertificatesAndHostnamesCustomCsrResponseCollection2](docs/api/tls_certificates_and_hostnames_custom_csr_response_collection_2.html) | `list` | `GET /accounts/{account_id}/custom_csrs` | Required |
| [TlsCertificatesAndHostnamesCustomCsrResponseIdOnly](docs/api/tls_certificates_and_hostnames_custom_csr_response_id_only.html) | `remove` | `DELETE /accounts/{account_id}/custom_csrs/{custom_csr_id}` | Required |
| [TlsCertificatesAndHostnamesCustomCsrResponseIdOnly](docs/api/tls_certificates_and_hostnames_custom_csr_response_id_only.html) | `remove` | `DELETE /zones/{zone_id}/custom_csrs/{custom_csr_id}` | Required |
| [TlsCertificatesAndHostnamesCustomCsrResponseSingle](docs/api/tls_certificates_and_hostnames_custom_csr_response_single.html) | `create` | `POST /zones/{zone_id}/custom_csrs` | Required |
| [TlsCertificatesAndHostnamesCustomCsrResponseSingle](docs/api/tls_certificates_and_hostnames_custom_csr_response_single.html) | `load` | `GET /zones/{zone_id}/custom_csrs/{custom_csr_id}` | Required |
| [TlsCertificatesAndHostnamesCustomCsrResponseSingle2](docs/api/tls_certificates_and_hostnames_custom_csr_response_single_2.html) | `create` | `POST /accounts/{account_id}/custom_csrs` | Required |
| [TlsCertificatesAndHostnamesCustomCsrResponseSingle2](docs/api/tls_certificates_and_hostnames_custom_csr_response_single_2.html) | `load` | `GET /accounts/{account_id}/custom_csrs/{custom_csr_id}` | Required |
| [TlsCertificatesAndHostnamesCustomHostnameQuota](docs/api/tls_certificates_and_hostnames_custom_hostname_quota.html) | `list` | `GET /zones/{zone_id}/custom_hostnames/quota` | Required |
| [TlsCertificatesAndHostnamesCustomHostnameResponseCollection](docs/api/tls_certificates_and_hostnames_custom_hostname_response_collection.html) | `list` | `GET /zones/{zone_id}/custom_hostnames` | Required |
| [TlsCertificatesAndHostnamesCustomHostnameResponseSingle](docs/api/tls_certificates_and_hostnames_custom_hostname_response_single.html) | `create` | `POST /zones/{zone_id}/custom_hostnames` | Required |
| [TlsCertificatesAndHostnamesCustomHostnameResponseSingle](docs/api/tls_certificates_and_hostnames_custom_hostname_response_single.html) | `load` | `GET /zones/{zone_id}/custom_hostnames/{custom_hostname_id}` | Required |
| [TlsCertificatesAndHostnamesCustomHostnameResponseSingle](docs/api/tls_certificates_and_hostnames_custom_hostname_response_single.html) | `update` | `PATCH /zones/{zone_id}/custom_hostnames/{custom_hostname_id}` | Required |
| [TlsCertificatesAndHostnamesCustomTrustStoreResponse](docs/api/tls_certificates_and_hostnames_custom_trust_store_response.html) | `list` | `GET /zones/{zone_id}/acm/custom_trust_store` | Required |
| [TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly](docs/api/tls_certificates_and_hostnames_custom_trust_store_response_id_only.html) | `remove` | `DELETE /zones/{zone_id}/acm/custom_trust_store/{custom_origin_trust_store_id}` | Required |
| [TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle](docs/api/tls_certificates_and_hostnames_custom_trust_store_response_single.html) | `create` | `POST /zones/{zone_id}/acm/custom_trust_store` | Required |
| [TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle](docs/api/tls_certificates_and_hostnames_custom_trust_store_response_single.html) | `load` | `GET /zones/{zone_id}/acm/custom_trust_store/{custom_origin_trust_store_id}` | Required |
| [TlsCertificatesAndHostnamesDcvDelegation](docs/api/tls_certificates_and_hostnames_dcv_delegation.html) | `load` | `GET /zones/{zone_id}/dcv_delegation/uuid` | Required |
| [TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack](docs/api/tls_certificates_and_hostnames_delete_advanced_certificate_pack.html) | `remove` | `DELETE /zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}` | Required |
| [TlsCertificatesAndHostnamesEnabled](docs/api/tls_certificates_and_hostnames_enabled.html) | `load` | `GET /zones/{zone_id}/origin_tls_client_auth/settings` | Required |
| [TlsCertificatesAndHostnamesEnabled](docs/api/tls_certificates_and_hostnames_enabled.html) | `update` | `PUT /zones/{zone_id}/origin_tls_client_auth/settings` | Required |
| [TlsCertificatesAndHostnamesFallbackOrigin](docs/api/tls_certificates_and_hostnames_fallback_origin.html) | `load` | `GET /zones/{zone_id}/custom_hostnames/fallback_origin` | Required |
| [TlsCertificatesAndHostnamesFallbackOrigin](docs/api/tls_certificates_and_hostnames_fallback_origin.html) | `remove` | `DELETE /zones/{zone_id}/custom_hostnames/fallback_origin` | Required |
| [TlsCertificatesAndHostnamesFallbackOrigin](docs/api/tls_certificates_and_hostnames_fallback_origin.html) | `update` | `PUT /zones/{zone_id}/custom_hostnames/fallback_origin` | Required |
| [TlsCertificatesAndHostnamesHostnameAopResponseCollection](docs/api/tls_certificates_and_hostnames_hostname_aop_response_collection.html) | `update` | `PUT /zones/{zone_id}/origin_tls_client_auth/hostnames` | Required |
| [TlsCertificatesAndHostnamesHostnameAopSingle](docs/api/tls_certificates_and_hostnames_hostname_aop_single.html) | `load` | `GET /zones/{zone_id}/origin_tls_client_auth/hostnames/{hostname}` | Required |
| [TlsCertificatesAndHostnamesHostnameAssocResponseCollection](docs/api/tls_certificates_and_hostnames_hostname_assoc_response_collection.html) | `list` | `GET /zones/{zone_id}/origin_tls_client_auth/hostnames` | Required |
| [TlsCertificatesAndHostnamesHostnameAssociation](docs/api/tls_certificates_and_hostnames_hostname_association.html) | `load` | `GET /zones/{zone_id}/certificate_authorities/hostname_associations` | Required |
| [TlsCertificatesAndHostnamesHostnameAssociation](docs/api/tls_certificates_and_hostnames_hostname_association.html) | `update` | `PUT /zones/{zone_id}/certificate_authorities/hostname_associations` | Required |
| [TlsCertificatesAndHostnamesKeylessResponseCollection](docs/api/tls_certificates_and_hostnames_keyless_response_collection.html) | `list` | `GET /zones/{zone_id}/keyless_certificates` | Required |
| [TlsCertificatesAndHostnamesKeylessResponseSingle](docs/api/tls_certificates_and_hostnames_keyless_response_single.html) | `create` | `POST /zones/{zone_id}/keyless_certificates` | Required |
| [TlsCertificatesAndHostnamesKeylessResponseSingle](docs/api/tls_certificates_and_hostnames_keyless_response_single.html) | `load` | `GET /zones/{zone_id}/keyless_certificates/{keyless_certificate_id}` | Required |
| [TlsCertificatesAndHostnamesKeylessResponseSingle](docs/api/tls_certificates_and_hostnames_keyless_response_single.html) | `update` | `PATCH /zones/{zone_id}/keyless_certificates/{keyless_certificate_id}` | Required |
| [TlsCertificatesAndHostnamesKeylessResponseSingleId](docs/api/tls_certificates_and_hostnames_keyless_response_single_id.html) | `remove` | `DELETE /zones/{zone_id}/keyless_certificates/{keyless_certificate_id}` | Required |
| [TlsCertificatesAndHostnamesPerHostnameSetting](docs/api/tls_certificates_and_hostnames_per_hostname_setting.html) | `load` | `GET /zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}` | Required |
| [TlsCertificatesAndHostnamesPerHostnameSetting](docs/api/tls_certificates_and_hostnames_per_hostname_setting.html) | `update` | `PUT /zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}` | Required |
| [TlsCertificatesAndHostnamesPerHostnameSettingsResponse](docs/api/tls_certificates_and_hostnames_per_hostname_settings_response.html) | `load` | `GET /zones/{zone_id}/hostnames/settings/{setting_id}` | Required |
| [TlsCertificatesAndHostnamesPerHostnameSettingsResponse2](docs/api/tls_certificates_and_hostnames_per_hostname_settings_response2.html) | `remove` | `DELETE /zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}` | Required |
| [TlsCertificatesAndHostnamesSslUniversalSetting](docs/api/tls_certificates_and_hostnames_ssl_universal_setting.html) | `load` | `GET /zones/{zone_id}/ssl/universal/settings` | Required |
| [TlsCertificatesAndHostnamesSslUniversalSetting](docs/api/tls_certificates_and_hostnames_ssl_universal_setting.html) | `update` | `PATCH /zones/{zone_id}/ssl/universal/settings` | Required |
| [TlsCertificatesAndHostnamesSslValidationMethodResponse](docs/api/tls_certificates_and_hostnames_ssl_validation_method_response.html) | `update` | `PATCH /zones/{zone_id}/ssl/verification/{certificate_pack_id}` | Required |
| [TlsCertificatesAndHostnamesSslVerificationResponseCollection](docs/api/tls_certificates_and_hostnames_ssl_verification_response_collection.html) | `list` | `GET /zones/{zone_id}/ssl/verification` | Required |
| [TlsCertificatesAndHostnamesTotalTlsSetting](docs/api/tls_certificates_and_hostnames_total_tls_setting.html) | `create` | `POST /zones/{zone_id}/acm/total_tls` | Required |
| [TlsCertificatesAndHostnamesTotalTlsSetting](docs/api/tls_certificates_and_hostnames_total_tls_setting.html) | `load` | `GET /zones/{zone_id}/acm/total_tls` | Required |

## Connect to the API

- Client API: `https://api.cloudflare.com/client/v4`

The default credential is sent in the `X-Auth-Email` header.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [Ruby](docs/sdks/rb.html) | `rb/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `cloudflare-ssl_list`: List records for an entity. Supported entities: `cache_auto_origin_tls_kex`, `recommendation`, `ssl_automatic_mode`, `tls_certificates_and_hostnames_association_response_collection`, `tls_certificates_and_hostnames_certificate_pack_response_collection`, `tls_certificates_and_hostnames_certificate_response_collection`, `tls_certificates_and_hostnames_certificate_response_collection_3`, `tls_certificates_and_hostnames_certificate_response_collection_4`, `tls_certificates_and_hostnames_certificate_response_collection_5`, `tls_certificates_and_hostnames_certificate_response_single_2`, `tls_certificates_and_hostnames_client_certificate_response`, `tls_certificates_and_hostnames_custom_csr_response_collection`, `tls_certificates_and_hostnames_custom_csr_response_collection_2`, `tls_certificates_and_hostnames_custom_hostname_quota`, `tls_certificates_and_hostnames_custom_hostname_response_collection`, `tls_certificates_and_hostnames_custom_trust_store_response`, `tls_certificates_and_hostnames_hostname_assoc_response_collection`, `tls_certificates_and_hostnames_keyless_response_collection`, `tls_certificates_and_hostnames_ssl_verification_response_collection`.
- `cloudflare-ssl_load`: Load one record for an entity. Supported entities: `origin_tl`, `tls_certificates_and_hostnames_certificate_pack_quota`, `tls_certificates_and_hostnames_certificate_pack_response_single`, `tls_certificates_and_hostnames_certificate_response_single`, `tls_certificates_and_hostnames_certificate_response_single_2`, `tls_certificates_and_hostnames_certificate_response_single_3`, `tls_certificates_and_hostnames_certificate_response_single_4`, `tls_certificates_and_hostnames_certificate_response_single_5`, `tls_certificates_and_hostnames_client_certificate_response_single`, `tls_certificates_and_hostnames_ct_alerting_subscription_response`, `tls_certificates_and_hostnames_custom_csr_response_single`, `tls_certificates_and_hostnames_custom_csr_response_single_2`, `tls_certificates_and_hostnames_custom_hostname_response_single`, `tls_certificates_and_hostnames_custom_trust_store_response_single`, `tls_certificates_and_hostnames_dcv_delegation`, `tls_certificates_and_hostnames_enabled`, `tls_certificates_and_hostnames_fallback_origin`, `tls_certificates_and_hostnames_hostname_aop_single`, `tls_certificates_and_hostnames_hostname_association`, `tls_certificates_and_hostnames_keyless_response_single`, `tls_certificates_and_hostnames_per_hostname_setting`, `tls_certificates_and_hostnames_per_hostname_settings_response`, `tls_certificates_and_hostnames_ssl_universal_setting`, `tls_certificates_and_hostnames_total_tls_setting`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

