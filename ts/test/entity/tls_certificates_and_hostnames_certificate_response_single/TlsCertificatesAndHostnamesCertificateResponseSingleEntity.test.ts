

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CloudflareSslSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('TlsCertificatesAndHostnamesCertificateResponseSingleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_SSL_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_SSL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareSslSDK.test()
    const ent = testsdk.TlsCertificatesAndHostnamesCertificateResponseSingle()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_SSL_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tls_certificates_and_hostnames_certificate_response_single.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"bundle_method":{"a":true,"h":"Bundle Method","n":"bundle_method","r":false,"sh":"A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores.","t":"`$STRING`","key$":"bundle_method","index$":0},"certificate":{"a":true,"h":"Certificate","n":"certificate","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The zone's SSL certificate or certificate and the intermediate(s).","t":"`$STRING`","key$":"certificate","index$":1},"custom_csr_id":{"a":true,"h":"Custom Csr Id","n":"custom_csr_id","r":false,"sh":"The identifier for the Custom CSR that was used.","t":"`$STRING`","key$":"custom_csr_id","index$":2},"deploy":{"a":true,"h":"Deploy","n":"deploy","r":false,"sh":"The environment to deploy the certificate to, defaults to production.","t":"`$STRING`","key$":"deploy","index$":3},"geo_restrictions":{"a":true,"h":"Geo Restrictions","n":"geo_restrictions","r":false,"sh":"Specify the region where your private key can be held locally for optimal TLS performance.","t":"`$OBJECT`","key$":"geo_restrictions","index$":4},"policy":{"a":true,"h":"Policy","n":"policy","r":false,"sh":"Specify the policy that determines the region where your private key will be held locally.","t":"`$STRING`","key$":"policy","index$":5},"private_key":{"a":true,"h":"Private Key","n":"private_key","r":false,"sh":"The zone's private key.","t":"`$STRING`","key$":"private_key","index$":6},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","key$":"result","index$":7},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"The type 'legacy_custom' enables support for legacy clients which do not include SNI in the TLS handshake.","t":"`$STRING`","key$":"type","index$":8}},"name":"tls_certificates_and_hostnames_certificate_response_single","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /zones/{zone_id}/custom_certificates","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/zones/{zone_id}/custom_certificates","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"custom_certificates"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /zones/{zone_id}/custom_certificates/{custom_certificate_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"2458ce5a-0c35-4c7f-82c7-8e9487d3ff60","k":"param","n":"custom_certificate_id","or":"custom_certificate_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/zones/{zone_id}/custom_certificates/{custom_certificate_id}","q":{"exist":["custom_certificate_id","zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"custom_certificates"},{"var":"custom_certificate_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /zones/{zone_id}/custom_certificates/{custom_certificate_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"2458ce5a-0c35-4c7f-82c7-8e9487d3ff60","k":"param","n":"custom_certificate_id","or":"custom_certificate_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/zones/{zone_id}/custom_certificates/{custom_certificate_id}","q":{"exist":["custom_certificate_id","zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"custom_certificates"},{"var":"custom_certificate_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"tls_certificates_and_hostnames_certificate_response_single","name__orig":"tls_certificates_and_hostnames_certificate_response_single","Name":"TlsCertificatesAndHostnamesCertificateResponseSingle","name_":"tls_certificates_and_hostnames_certificate_response_single","name-":"tls-certificates-and-hostnames-certificate-response-single","NAME":"TLS_CERTIFICATES_AND_HOSTNAMES_CERTIFICATE_RESPONSE_SINGLE","index$":18}, {"active":true,"entity":"tls_certificates_and_hostnames_certificate_response_single","key$":"BasicTlsCertificatesAndHostnamesCertificateResponseSingleFlow","kind":"basic","name":"BasicTlsCertificatesAndHostnamesCertificateResponseSingleFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"tls_certificates_and_hostnames_certificate_response_single_ref01"},"m":{"zone_id":"zone01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"zone_id":"zone01"},"i":{"ref":"tls_certificates_and_hostnames_certificate_response_single_ref01","srcdatavar":"tls_certificates_and_hostnames_certificate_response_single_ref01_data","suffix":"_up0","textfield":"bundle_method"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-tls_certificates_and_hostnames_certificate_response_single_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"tls_certificates_and_hostnames_certificate_response_single_ref01","srcdatavar":"tls_certificates_and_hostnames_certificate_response_single_ref01_data","suffix":"_dt0"},"m":{"id":"tls_certificates_and_hostnames_certificate_response_single01","zone_id":"zone01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-tls_certificates_and_hostnames_certificate_response_single_ref01"}}],"index$":2}]}, 'TlsCertificatesAndHostnamesCertificateResponseSingle', {"POST /zones/{zone_id}/custom_certificates":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"bundle_method":{"description":"A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest intermediates. And the force bundle verifies the chain, but does not otherwise modify it.","type":"string","example":"ubiquitous","default":"ubiquitous","enum":["ubiquitous","optimal","force"],"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_bundle_method","key$":"bundle_method"},"certificate":{"description":"The zone's SSL certificate or certificate and the intermediate(s).","type":"string","example":"-----BEGIN CERTIFICATE-----\nMIIDtTCCAp2gAwIBAgIJAMHAwfXZ5/PWMA0GCSqGSIb3DQEBCwUAMEUxCzAJBgNV\nBAYTAkFVMRMwEQYDVQQIEwpTb21lLVN0YXRlMSEwHwYDVQQKExhJbnRlcm5ldCBX\naWRnaXRzIFB0eSBMdGQwHhcNMTYwODI0MTY0MzAxWhcNMTYxMTIyMTY0MzAxWjBF\nMQswCQYDVQQGEwJBVTETMBEGA1UECBMKU29tZS1TdGF0ZTEhMB8GA1UEChMYSW50\nZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIB\nCgKCAQEAwQHoetcl9+5ikGzV6cMzWtWPJHqXT3wpbEkRU9Yz7lgvddmGdtcGbg/1\nCGZu0jJGkMoppoUo4c3dts3iwqRYmBikUP77wwY2QGmDZw2FvkJCJlKnabIRuGvB\nKwzESIXgKk2016aTP6/dAjEHyo6SeoK8lkIySUvK0fyOVlsiEsCmOpidtnKX/a+5\n0GjB79CJH4ER2lLVZnhePFR/zUOyPxZQQ4naHf7yu/b5jhO0f8fwt+pyFxIXjbEI\ndZliWRkRMtzrHOJIhrmJ2A1J7iOrirbbwillwjjNVUWPf3IJ3M12S9pEewooaeO2\nizNTERcG9HzAacbVRn2Y2SWIyT/18QIDAQABo4GnMIGkMB0GA1UdDgQWBBT/LbE4\n9rWf288N6sJA5BRb6FJIGDB1BgNVHSMEbjBsgBT/LbE49rWf288N6sJA5BRb6FJI\nGKFJpEcwRTELMAkGA1UEBhMCQVUxEzARBgNVBAgTClNvbWUtU3RhdGUxITAfBgNV\nBAoTGEludGVybmV0IFdpZGdpdHMgUHR5IEx0ZIIJAMHAwfXZ5/PWMAwGA1UdEwQF\nMAMBAf8wDQYJKoZIhvcNAQELBQADggEBAHHFwl0tH0quUYZYO0dZYt4R7SJ0pCm2\n2satiyzHl4OnXcHDpekAo7/a09c6Lz6AU83cKy/+x3/djYHXWba7HpEu0dR3ugQP\nMlr4zrhd9xKZ0KZKiYmtJH+ak4OM4L3FbT0owUZPyjLSlhMtJVcoRp5CJsjAMBUG\nSvD8RX+T01wzox/Qb+lnnNnOlaWpqu8eoOenybxKp1a9ULzIVvN/LAcc+14vioFq\n2swRWtmocBAs8QR9n4uvbpiYvS8eYueDCWMM4fvFfBhaDZ3N9IbtySh3SpFdQDhw\nYbjM2rxXiyLGxB4Bol7QTv4zHif7Zt89FReT/NBy4rzaskDJY5L6xmY=\n-----END CERTIFICATE-----\n","x-ref":"#/components/schemas/tls-certificates-and-hostnames_certificate","key$":"certificate"},"custom_csr_id":{"description":"The identifier for the Custom CSR that was used.","type":"string","example":"7b163417-1d2b-4c84-a38a-2fb7a0cd7752","x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_custom_csr_id","key$":"custom_csr_id"},"deploy":{"description":"The environment to deploy the certificate to, defaults to production.","type":"string","example":"staging","default":"production","enum":["staging","production"],"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_deploy","key$":"deploy"},"geo_restrictions":{"description":"Specify the region where your private key can be held locally for optimal TLS performance. HTTPS connections to any excluded data center will still be fully encrypted, but will incur some latency while Keyless SSL is used to complete the handshake with the nearest allowed data center. Options allow distribution to only to U.S. data centers, only to E.U. data centers, or only to highest security data centers. Default distribution is to all Cloudflare datacenters, for optimal performance.","type":"object","properties":{"label":{"enum":["us","eu","highest_security"],"example":"us","type":"string","x-auditable":true}},"x-ref":"#/components/schemas/tls-certificates-and-hostnames_geo_restrictions","key$":"geo_restrictions"},"policy":{"description":"Specify the policy that determines the region where your private key will be held locally. HTTPS connections to any excluded data center will still be fully encrypted, but will incur some latency while Keyless SSL is used to complete the handshake with the nearest allowed data center. Any combination of countries, specified by their two letter country code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) can be chosen, such as 'country: IN', as well as 'region: EU' which refers to the EU region. If there are too few data centers satisfying the policy, it will be rejected.\nNote: The API accepts this field as either \"policy\" or \"policy_restrictions\" in requests. Responses return this field as \"policy_restrictions\".","type":"string","example":"(country: US) or (region: EU)","x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_policy","key$":"policy"},"private_key":{"description":"The zone's private key. Not required if custom_csr_id is provided, in which case the private key is retrieved from the CSR record held by Cloudflare.","type":"string","example":"-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEAwQHoetcl9+5ikGzV6cMzWtWPJHqXT3wpbEkRU9Yz7lgvddmG\ndtcGbg/1CGZu0jJGkMoppoUo4c3dts3iwqRYmBikUP77wwY2QGmDZw2FvkJCJlKn\nabIRuGvBKwzESIXgKk2016aTP6/dAjEHyo6SeoK8lkIySUvK0fyOVlsiEsCmOpid\ntnKX/a+50GjB79CJH4ER2lLVZnhePFR/zUOyPxZQQ4naHf7yu/b5jhO0f8fwt+py\nFxIXjbEIdZliWRkRMtzrHOJIhrmJ2A1J7iOrirbbwillwjjNVUWPf3IJ3M12S9pE\newooaeO2izNTERcG9HzAacbVRn2Y2SWIyT/18QIDAQABAoIBACbhTYXBZYKmYPCb\nHBR1IBlCQA2nLGf0qRuJNJZg5iEzXows/6tc8YymZkQE7nolapWsQ+upk2y5Xdp/\naxiuprIs9JzkYK8Ox0r+dlwCG1kSW+UAbX0bQ/qUqlsTvU6muVuMP8vZYHxJ3wmb\n+ufRBKztPTQ/rYWaYQcgC0RWI20HTFBMxlTAyNxYNWzX7RKFkGVVyB9RsAtmcc8g\n+j4OdosbfNoJPS0HeIfNpAznDfHKdxDk2Yc1tV6RHBrC1ynyLE9+TaflIAdo2MVv\nKLMLq51GqYKtgJFIlBRPQqKoyXdz3fGvXrTkf/WY9QNq0J1Vk5ERePZ54mN8iZB7\n9lwy/AkCgYEA6FXzosxswaJ2wQLeoYc7ceaweX/SwTvxHgXzRyJIIT0eJWgx13Wo\n/WA3Iziimsjf6qE+SI/8laxPp2A86VMaIt3Z3mJN/CqSVGw8LK2AQst+OwdPyDMu\niacE8lj/IFGC8mwNUAb9CzGU3JpU4PxxGFjS/eMtGeRXCWkK4NE+G08CgYEA1Kp9\nN2JrVlqUz+gAX+LPmE9OEMAS9WQSQsfCHGogIFDGGcNf7+uwBM7GAaSJIP01zcoe\nVAgWdzXCv3FLhsaZoJ6RyLOLay5phbu1iaTr4UNYm5WtYTzMzqh8l1+MFFDl9xDB\nvULuCIIrglM5MeS/qnSg1uMoH2oVPj9TVst/ir8CgYEAxrI7Ws9Zc4Bt70N1As+U\nlySjaEVZCMkqvHJ6TCuVZFfQoE0r0whdLdRLU2PsLFP+q7qaeZQqgBaNSKeVcDYR\n9B+nY/jOmQoPewPVsp/vQTCnE/R81spu0mp0YI6cIheT1Z9zAy322svcc43JaWB7\nmEbeqyLOP4Z4qSOcmghZBSECgYACvR9Xs0DGn+wCsW4vze/2ei77MD4OQvepPIFX\ndFZtlBy5ADcgE9z0cuVB6CiL8DbdK5kwY9pGNr8HUCI03iHkW6Zs+0L0YmihfEVe\nPG19PSzK9CaDdhD9KFZSbLyVFmWfxOt50H7YRTTiPMgjyFpfi5j2q348yVT0tEQS\nfhRqaQKBgAcWPokmJ7EbYQGeMbS7HC8eWO/RyamlnSffdCdSc7ue3zdVJxpAkQ8W\nqu80pEIF6raIQfAf8MXiiZ7auFOSnHQTXUbhCpvDLKi0Mwq3G8Pl07l+2s6dQG6T\nlv6XTQaMyf6n1yjzL+fzDrH3qXMxHMO/b13EePXpDMpY7HQpoLDi\n-----END RSA PRIVATE KEY-----\n","x-sensitive":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_private_key","key$":"private_key"},"type":{"description":"The type 'legacy_custom' enables support for legacy clients which do not include SNI in the TLS handshake.","type":"string","example":"sni_custom","default":"legacy_custom","enum":["legacy_custom","sni_custom"],"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_type","key$":"type"}},"required":["certificate"],"index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_identifier"},"index$":0}]},"GET /zones/{zone_id}/custom_certificates/{custom_certificate_id}":{"protocol":"http","parameters":[{"name":"custom_certificate_id","in":"path","required":true,"schema":{"description":"Custom certificate identifier tag.","type":"string","example":"2458ce5a-0c35-4c7f-82c7-8e9487d3ff60","maxLength":36,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_custom_certificate_identifier"},"index$":0},{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_identifier"},"index$":1}]},"PATCH /zones/{zone_id}/custom_certificates/{custom_certificate_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"bundle_method":{"description":"A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest intermediates. And the force bundle verifies the chain, but does not otherwise modify it.","type":"string","example":"ubiquitous","default":"ubiquitous","enum":["ubiquitous","optimal","force"],"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_bundle_method","key$":"bundle_method"},"certificate":{"description":"The zone's SSL certificate or certificate and the intermediate(s).","type":"string","example":"-----BEGIN CERTIFICATE-----\nMIIDtTCCAp2gAwIBAgIJAMHAwfXZ5/PWMA0GCSqGSIb3DQEBCwUAMEUxCzAJBgNV\nBAYTAkFVMRMwEQYDVQQIEwpTb21lLVN0YXRlMSEwHwYDVQQKExhJbnRlcm5ldCBX\naWRnaXRzIFB0eSBMdGQwHhcNMTYwODI0MTY0MzAxWhcNMTYxMTIyMTY0MzAxWjBF\nMQswCQYDVQQGEwJBVTETMBEGA1UECBMKU29tZS1TdGF0ZTEhMB8GA1UEChMYSW50\nZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIB\nCgKCAQEAwQHoetcl9+5ikGzV6cMzWtWPJHqXT3wpbEkRU9Yz7lgvddmGdtcGbg/1\nCGZu0jJGkMoppoUo4c3dts3iwqRYmBikUP77wwY2QGmDZw2FvkJCJlKnabIRuGvB\nKwzESIXgKk2016aTP6/dAjEHyo6SeoK8lkIySUvK0fyOVlsiEsCmOpidtnKX/a+5\n0GjB79CJH4ER2lLVZnhePFR/zUOyPxZQQ4naHf7yu/b5jhO0f8fwt+pyFxIXjbEI\ndZliWRkRMtzrHOJIhrmJ2A1J7iOrirbbwillwjjNVUWPf3IJ3M12S9pEewooaeO2\nizNTERcG9HzAacbVRn2Y2SWIyT/18QIDAQABo4GnMIGkMB0GA1UdDgQWBBT/LbE4\n9rWf288N6sJA5BRb6FJIGDB1BgNVHSMEbjBsgBT/LbE49rWf288N6sJA5BRb6FJI\nGKFJpEcwRTELMAkGA1UEBhMCQVUxEzARBgNVBAgTClNvbWUtU3RhdGUxITAfBgNV\nBAoTGEludGVybmV0IFdpZGdpdHMgUHR5IEx0ZIIJAMHAwfXZ5/PWMAwGA1UdEwQF\nMAMBAf8wDQYJKoZIhvcNAQELBQADggEBAHHFwl0tH0quUYZYO0dZYt4R7SJ0pCm2\n2satiyzHl4OnXcHDpekAo7/a09c6Lz6AU83cKy/+x3/djYHXWba7HpEu0dR3ugQP\nMlr4zrhd9xKZ0KZKiYmtJH+ak4OM4L3FbT0owUZPyjLSlhMtJVcoRp5CJsjAMBUG\nSvD8RX+T01wzox/Qb+lnnNnOlaWpqu8eoOenybxKp1a9ULzIVvN/LAcc+14vioFq\n2swRWtmocBAs8QR9n4uvbpiYvS8eYueDCWMM4fvFfBhaDZ3N9IbtySh3SpFdQDhw\nYbjM2rxXiyLGxB4Bol7QTv4zHif7Zt89FReT/NBy4rzaskDJY5L6xmY=\n-----END CERTIFICATE-----\n","x-ref":"#/components/schemas/tls-certificates-and-hostnames_certificate","key$":"certificate"},"custom_csr_id":{"description":"The identifier for the Custom CSR that was used.","type":"string","example":"7b163417-1d2b-4c84-a38a-2fb7a0cd7752","x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_custom_csr_id","key$":"custom_csr_id"},"deploy":{"description":"The environment to deploy the certificate to, defaults to production.","type":"string","example":"staging","default":"production","enum":["staging","production"],"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_deploy","key$":"deploy"},"geo_restrictions":{"description":"Specify the region where your private key can be held locally for optimal TLS performance. HTTPS connections to any excluded data center will still be fully encrypted, but will incur some latency while Keyless SSL is used to complete the handshake with the nearest allowed data center. Options allow distribution to only to U.S. data centers, only to E.U. data centers, or only to highest security data centers. Default distribution is to all Cloudflare datacenters, for optimal performance.","type":"object","properties":{"label":{"enum":["us","eu","highest_security"],"example":"us","type":"string","x-auditable":true}},"x-ref":"#/components/schemas/tls-certificates-and-hostnames_geo_restrictions","key$":"geo_restrictions"},"policy":{"description":"Specify the policy that determines the region where your private key will be held locally. HTTPS connections to any excluded data center will still be fully encrypted, but will incur some latency while Keyless SSL is used to complete the handshake with the nearest allowed data center. Any combination of countries, specified by their two letter country code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) can be chosen, such as 'country: IN', as well as 'region: EU' which refers to the EU region. If there are too few data centers satisfying the policy, it will be rejected.\nNote: The API accepts this field as either \"policy\" or \"policy_restrictions\" in requests. Responses return this field as \"policy_restrictions\".","type":"string","example":"(country: US) or (region: EU)","x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_policy","key$":"policy"},"private_key":{"description":"The zone's private key. Not required if custom_csr_id is provided, in which case the private key is retrieved from the CSR record held by Cloudflare.","type":"string","example":"-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEAwQHoetcl9+5ikGzV6cMzWtWPJHqXT3wpbEkRU9Yz7lgvddmG\ndtcGbg/1CGZu0jJGkMoppoUo4c3dts3iwqRYmBikUP77wwY2QGmDZw2FvkJCJlKn\nabIRuGvBKwzESIXgKk2016aTP6/dAjEHyo6SeoK8lkIySUvK0fyOVlsiEsCmOpid\ntnKX/a+50GjB79CJH4ER2lLVZnhePFR/zUOyPxZQQ4naHf7yu/b5jhO0f8fwt+py\nFxIXjbEIdZliWRkRMtzrHOJIhrmJ2A1J7iOrirbbwillwjjNVUWPf3IJ3M12S9pE\newooaeO2izNTERcG9HzAacbVRn2Y2SWIyT/18QIDAQABAoIBACbhTYXBZYKmYPCb\nHBR1IBlCQA2nLGf0qRuJNJZg5iEzXows/6tc8YymZkQE7nolapWsQ+upk2y5Xdp/\naxiuprIs9JzkYK8Ox0r+dlwCG1kSW+UAbX0bQ/qUqlsTvU6muVuMP8vZYHxJ3wmb\n+ufRBKztPTQ/rYWaYQcgC0RWI20HTFBMxlTAyNxYNWzX7RKFkGVVyB9RsAtmcc8g\n+j4OdosbfNoJPS0HeIfNpAznDfHKdxDk2Yc1tV6RHBrC1ynyLE9+TaflIAdo2MVv\nKLMLq51GqYKtgJFIlBRPQqKoyXdz3fGvXrTkf/WY9QNq0J1Vk5ERePZ54mN8iZB7\n9lwy/AkCgYEA6FXzosxswaJ2wQLeoYc7ceaweX/SwTvxHgXzRyJIIT0eJWgx13Wo\n/WA3Iziimsjf6qE+SI/8laxPp2A86VMaIt3Z3mJN/CqSVGw8LK2AQst+OwdPyDMu\niacE8lj/IFGC8mwNUAb9CzGU3JpU4PxxGFjS/eMtGeRXCWkK4NE+G08CgYEA1Kp9\nN2JrVlqUz+gAX+LPmE9OEMAS9WQSQsfCHGogIFDGGcNf7+uwBM7GAaSJIP01zcoe\nVAgWdzXCv3FLhsaZoJ6RyLOLay5phbu1iaTr4UNYm5WtYTzMzqh8l1+MFFDl9xDB\nvULuCIIrglM5MeS/qnSg1uMoH2oVPj9TVst/ir8CgYEAxrI7Ws9Zc4Bt70N1As+U\nlySjaEVZCMkqvHJ6TCuVZFfQoE0r0whdLdRLU2PsLFP+q7qaeZQqgBaNSKeVcDYR\n9B+nY/jOmQoPewPVsp/vQTCnE/R81spu0mp0YI6cIheT1Z9zAy322svcc43JaWB7\nmEbeqyLOP4Z4qSOcmghZBSECgYACvR9Xs0DGn+wCsW4vze/2ei77MD4OQvepPIFX\ndFZtlBy5ADcgE9z0cuVB6CiL8DbdK5kwY9pGNr8HUCI03iHkW6Zs+0L0YmihfEVe\nPG19PSzK9CaDdhD9KFZSbLyVFmWfxOt50H7YRTTiPMgjyFpfi5j2q348yVT0tEQS\nfhRqaQKBgAcWPokmJ7EbYQGeMbS7HC8eWO/RyamlnSffdCdSc7ue3zdVJxpAkQ8W\nqu80pEIF6raIQfAf8MXiiZ7auFOSnHQTXUbhCpvDLKi0Mwq3G8Pl07l+2s6dQG6T\nlv6XTQaMyf6n1yjzL+fzDrH3qXMxHMO/b13EePXpDMpY7HQpoLDi\n-----END RSA PRIVATE KEY-----\n","x-sensitive":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_private_key","key$":"private_key"}},"index$":1}}}},"parameters":[{"name":"custom_certificate_id","in":"path","required":true,"schema":{"description":"Custom certificate identifier tag.","type":"string","example":"2458ce5a-0c35-4c7f-82c7-8e9487d3ff60","maxLength":36,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_custom_certificate_identifier"},"index$":0},{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_identifier"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const tls_certificates_and_hostnames_certificate_response_single_ref01_ent = client.TlsCertificatesAndHostnamesCertificateResponseSingle()
    let tls_certificates_and_hostnames_certificate_response_single_ref01_data = setup.data.new.tls_certificates_and_hostnames_certificate_response_single['tls_certificates_and_hostnames_certificate_response_single_ref01']
    tls_certificates_and_hostnames_certificate_response_single_ref01_data['zone_id'] = setup.idmap['zone01']

    tls_certificates_and_hostnames_certificate_response_single_ref01_data = (await tls_certificates_and_hostnames_certificate_response_single_ref01_ent.create(tls_certificates_and_hostnames_certificate_response_single_ref01_data)).data()
    assert(null != tls_certificates_and_hostnames_certificate_response_single_ref01_data)


    // UPDATE
    const tls_certificates_and_hostnames_certificate_response_single_ref01_data_up0: any = {}
    tls_certificates_and_hostnames_certificate_response_single_ref01_data_up0 ['zone_id'] = setup.idmap['zone_id']

    const tls_certificates_and_hostnames_certificate_response_single_ref01_markdef_up0 = { name: 'bundle_method', value: 'Mark01-tls_certificates_and_hostnames_certificate_response_single_ref01_' + setup.now }
    ;(tls_certificates_and_hostnames_certificate_response_single_ref01_data_up0 as any)[tls_certificates_and_hostnames_certificate_response_single_ref01_markdef_up0.name] = tls_certificates_and_hostnames_certificate_response_single_ref01_markdef_up0.value

    const tls_certificates_and_hostnames_certificate_response_single_ref01_resdata_up0 = (await tls_certificates_and_hostnames_certificate_response_single_ref01_ent.update(tls_certificates_and_hostnames_certificate_response_single_ref01_data_up0)).data()
    assert(null != tls_certificates_and_hostnames_certificate_response_single_ref01_resdata_up0)

    assert((tls_certificates_and_hostnames_certificate_response_single_ref01_resdata_up0 as any)[tls_certificates_and_hostnames_certificate_response_single_ref01_markdef_up0.name] === tls_certificates_and_hostnames_certificate_response_single_ref01_markdef_up0.value)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/tls_certificates_and_hostnames_certificate_response_single/TlsCertificatesAndHostnamesCertificateResponseSingleTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = CloudflareSslSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['tls_certificates_and_hostnames_certificate_response_single01','tls_certificates_and_hostnames_certificate_response_single02','tls_certificates_and_hostnames_certificate_response_single03','zone01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CERTIFICATE_RESPONSE_SINGLE_ENTID': idmap,
    'CLOUDFLARE_SSL_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_SSL_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_SSL_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CERTIFICATE_RESPONSE_SINGLE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_SSL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CERTIFICATE_RESPONSE_SINGLE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new CloudflareSslSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.CLOUDFLARE_SSL_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.CLOUDFLARE_SSL_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
