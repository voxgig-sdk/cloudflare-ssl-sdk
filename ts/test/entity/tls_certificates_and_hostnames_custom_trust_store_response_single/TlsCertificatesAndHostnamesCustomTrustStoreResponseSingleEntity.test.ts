

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


describe('TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_SSL_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_SSL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareSslSDK.test()
    const ent = testsdk.TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_SSL_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tls_certificates_and_hostnames_custom_trust_store_response_single.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"certificate":{"a":true,"h":"Certificate","n":"certificate","r":true,"sh":"The root CA certificate in PEM format.","t":"`$STRING`","key$":"certificate","index$":0},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","key$":"result","index$":1}},"name":"tls_certificates_and_hostnames_custom_trust_store_response_single","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /zones/{zone_id}/acm/custom_trust_store","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/zones/{zone_id}/acm/custom_trust_store","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"acm"},{"lit":"custom_trust_store"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /zones/{zone_id}/acm/custom_trust_store/{custom_origin_trust_store_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"2458ce5a-0c35-4c7f-82c7-8e9487d3ff60","k":"param","n":"custom_origin_trust_store_id","or":"custom_origin_trust_store_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/zones/{zone_id}/acm/custom_trust_store/{custom_origin_trust_store_id}","q":{"exist":["custom_origin_trust_store_id","zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"acm"},{"lit":"custom_trust_store"},{"var":"custom_origin_trust_store_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"tls_certificates_and_hostnames_custom_trust_store_response_single","name__orig":"tls_certificates_and_hostnames_custom_trust_store_response_single","Name":"TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle","name_":"tls_certificates_and_hostnames_custom_trust_store_response_single","name-":"tls-certificates-and-hostnames-custom-trust-store-response-single","NAME":"TLS_CERTIFICATES_AND_HOSTNAMES_CUSTOM_TRUST_STORE_RESPONSE_SINGLE","index$":38}, {"active":true,"entity":"tls_certificates_and_hostnames_custom_trust_store_response_single","key$":"BasicTlsCertificatesAndHostnamesCustomTrustStoreResponseSingleFlow","kind":"basic","name":"BasicTlsCertificatesAndHostnamesCustomTrustStoreResponseSingleFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"tls_certificates_and_hostnames_custom_trust_store_response_single_ref01"},"m":{"zone_id":"zone01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"tls_certificates_and_hostnames_custom_trust_store_response_single_ref01","srcdatavar":"tls_certificates_and_hostnames_custom_trust_store_response_single_ref01_data","suffix":"_dt0"},"m":{"id":"tls_certificates_and_hostnames_custom_trust_store_response_single01","zone_id":"zone01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-tls_certificates_and_hostnames_custom_trust_store_response_single_ref01"}}],"index$":1}]}, 'TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle', {"POST /zones/{zone_id}/acm/custom_trust_store":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"certificate":{"description":"The root CA certificate in PEM format. Only root CA certificates are accepted; intermediate and leaf certificates are not supported.","type":"string","example":"-----BEGIN CERTIFICATE-----\nMIIDdjCCAl6gAwIBAgIJAPnMg0Fs+/B0MA0GCSqGSIb3DQEBCwUAMFsx...\n-----END CERTIFICATE-----\n","x-ref":"#/components/schemas/tls-certificates-and-hostnames_certificate-3","key$":"certificate"}},"required":["certificate"],"index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_identifier"},"index$":0}]},"GET /zones/{zone_id}/acm/custom_trust_store/{custom_origin_trust_store_id}":{"protocol":"http","parameters":[{"name":"custom_origin_trust_store_id","in":"path","required":true,"schema":{"description":"Certificate identifier tag.","type":"string","example":"2458ce5a-0c35-4c7f-82c7-8e9487d3ff60","maxLength":36,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_custom_trust_store_identifier"},"index$":0},{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_identifier"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const tls_certificates_and_hostnames_custom_trust_store_response_single_ref01_ent = client.TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle()
    let tls_certificates_and_hostnames_custom_trust_store_response_single_ref01_data = setup.data.new.tls_certificates_and_hostnames_custom_trust_store_response_single['tls_certificates_and_hostnames_custom_trust_store_response_single_ref01']
    tls_certificates_and_hostnames_custom_trust_store_response_single_ref01_data['zone_id'] = setup.idmap['zone01']

    tls_certificates_and_hostnames_custom_trust_store_response_single_ref01_data = (await tls_certificates_and_hostnames_custom_trust_store_response_single_ref01_ent.create(tls_certificates_and_hostnames_custom_trust_store_response_single_ref01_data)).data()
    assert(null != tls_certificates_and_hostnames_custom_trust_store_response_single_ref01_data)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/tls_certificates_and_hostnames_custom_trust_store_response_single/TlsCertificatesAndHostnamesCustomTrustStoreResponseSingleTestData.json')

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
    ['tls_certificates_and_hostnames_custom_trust_store_response_single01','tls_certificates_and_hostnames_custom_trust_store_response_single02','tls_certificates_and_hostnames_custom_trust_store_response_single03','zone01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CUSTOM_TRUST_STORE_RESPONSE_SINGLE_ENTID': idmap,
    'CLOUDFLARE_SSL_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_SSL_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_SSL_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CUSTOM_TRUST_STORE_RESPONSE_SINGLE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_SSL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CUSTOM_TRUST_STORE_RESPONSE_SINGLE_ENTID']
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
  
