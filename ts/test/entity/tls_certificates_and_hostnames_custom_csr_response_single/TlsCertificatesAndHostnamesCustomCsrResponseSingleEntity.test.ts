

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


describe('TlsCertificatesAndHostnamesCustomCsrResponseSingleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_SSL_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_SSL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareSslSDK.test()
    const ent = testsdk.TlsCertificatesAndHostnamesCustomCsrResponseSingle()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_SSL_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tls_certificates_and_hostnames_custom_csr_response_single.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"common_name":{"a":true,"h":"Common Name","n":"common_name","r":true,"sh":"The common name (domain) for the CSR.","t":"`$STRING`","key$":"common_name","index$":0},"country":{"a":true,"h":"Country","n":"country","r":true,"sh":"Two-letter ISO 3166-1 alpha-2 country code.","t":"`$STRING`","key$":"country","index$":1},"key_type":{"a":true,"h":"Key Type","n":"key_type","r":false,"sh":"Key algorithm to use for the CSR.","t":"`$STRING`","key$":"key_type","index$":2},"locality":{"a":true,"h":"Locality","n":"locality","r":true,"sh":"City or locality name.","t":"`$STRING`","key$":"locality","index$":3},"organization":{"a":true,"h":"Organization","n":"organization","r":true,"sh":"Organization name.","t":"`$STRING`","key$":"organization","index$":4},"organizational_unit":{"a":true,"h":"Organizational Unit","n":"organizational_unit","r":false,"sh":"Organizational unit name.","t":"`$STRING`","key$":"organizational_unit","index$":5},"result":{"a":true,"h":"Result","n":"result","r":true,"sh":"A custom Certificate Signing Request (CSR).","t":"`$OBJECT`","key$":"result","index$":6},"sans":{"a":true,"h":"Sans","n":"sans","r":true,"sh":"Subject Alternative Names for the CSR.","t":"`$ARRAY`","key$":"sans","index$":7},"state":{"a":true,"h":"State","n":"state","r":true,"sh":"State or province name.","t":"`$STRING`","key$":"state","index$":8}},"name":"tls_certificates_and_hostnames_custom_csr_response_single","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /zones/{zone_id}/custom_csrs","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/zones/{zone_id}/custom_csrs","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"custom_csrs"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /zones/{zone_id}/custom_csrs/{custom_csr_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"7b163417-1d2b-4c84-a38a-2fb7a0cd7752","k":"param","n":"custom_csr_id","or":"custom_csr_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/zones/{zone_id}/custom_csrs/{custom_csr_id}","q":{"exist":["custom_csr_id","zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"custom_csrs"},{"var":"custom_csr_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"tls_certificates_and_hostnames_custom_csr_response_single","name__orig":"tls_certificates_and_hostnames_custom_csr_response_single","Name":"TlsCertificatesAndHostnamesCustomCsrResponseSingle","name_":"tls_certificates_and_hostnames_custom_csr_response_single","name-":"tls-certificates-and-hostnames-custom-csr-response-single","NAME":"TLS_CERTIFICATES_AND_HOSTNAMES_CUSTOM_CSR_RESPONSE_SINGLE","index$":31}, {"active":true,"entity":"tls_certificates_and_hostnames_custom_csr_response_single","key$":"BasicTlsCertificatesAndHostnamesCustomCsrResponseSingleFlow","kind":"basic","name":"BasicTlsCertificatesAndHostnamesCustomCsrResponseSingleFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"tls_certificates_and_hostnames_custom_csr_response_single_ref01"},"m":{"zone_id":"zone01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"tls_certificates_and_hostnames_custom_csr_response_single_ref01","srcdatavar":"tls_certificates_and_hostnames_custom_csr_response_single_ref01_data","suffix":"_dt0"},"m":{"id":"tls_certificates_and_hostnames_custom_csr_response_single01","zone_id":"zone01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-tls_certificates_and_hostnames_custom_csr_response_single_ref01"}}],"index$":1}]}, 'TlsCertificatesAndHostnamesCustomCsrResponseSingle', {"POST /zones/{zone_id}/custom_csrs":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"description":"Request body for creating a custom CSR.","type":"object","properties":{"common_name":{"description":"The common name (domain) for the CSR. Must be at most 64 characters.","type":"string","example":"example.com","maxLength":64,"key$":"common_name"},"country":{"description":"Two-letter ISO 3166-1 alpha-2 country code.","type":"string","example":"US","key$":"country"},"key_type":{"description":"Key algorithm to use for the CSR. Defaults to rsa2048 if not specified.","type":"string","example":"rsa2048","default":"rsa2048","enum":["rsa2048","p256v1"],"key$":"key_type"},"locality":{"description":"City or locality name.","type":"string","example":"San Francisco","key$":"locality"},"organization":{"description":"Organization name.","type":"string","example":"Cloudflare, Inc.","key$":"organization"},"organizational_unit":{"description":"Organizational unit name.","type":"string","example":"Engineering","key$":"organizational_unit"},"sans":{"description":"Subject Alternative Names for the CSR. At least one SAN is required. The list should include the common name.","type":"array","items":{"maxLength":256,"type":"string"},"example":["example.com","www.example.com"],"maxItems":150,"minItems":1,"key$":"sans"},"state":{"description":"State or province name.","type":"string","example":"California","key$":"state"}},"required":["country","state","locality","organization","common_name","sans"],"x-ref":"#/components/schemas/tls-certificates-and-hostnames_custom_csr_create_request","index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_identifier"},"index$":0}]},"GET /zones/{zone_id}/custom_csrs/{custom_csr_id}":{"protocol":"http","parameters":[{"name":"custom_csr_id","in":"path","required":true,"schema":{"description":"Custom CSR identifier tag.","type":"string","example":"7b163417-1d2b-4c84-a38a-2fb7a0cd7752","maxLength":36,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_custom_csr_identifier"},"index$":0},{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_identifier"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const tls_certificates_and_hostnames_custom_csr_response_single_ref01_ent = client.TlsCertificatesAndHostnamesCustomCsrResponseSingle()
    let tls_certificates_and_hostnames_custom_csr_response_single_ref01_data = setup.data.new.tls_certificates_and_hostnames_custom_csr_response_single['tls_certificates_and_hostnames_custom_csr_response_single_ref01']
    tls_certificates_and_hostnames_custom_csr_response_single_ref01_data['zone_id'] = setup.idmap['zone01']

    tls_certificates_and_hostnames_custom_csr_response_single_ref01_data = (await tls_certificates_and_hostnames_custom_csr_response_single_ref01_ent.create(tls_certificates_and_hostnames_custom_csr_response_single_ref01_data)).data()
    assert(null != tls_certificates_and_hostnames_custom_csr_response_single_ref01_data)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/tls_certificates_and_hostnames_custom_csr_response_single/TlsCertificatesAndHostnamesCustomCsrResponseSingleTestData.json')

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
    ['tls_certificates_and_hostnames_custom_csr_response_single01','tls_certificates_and_hostnames_custom_csr_response_single02','tls_certificates_and_hostnames_custom_csr_response_single03','zone01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CUSTOM_CSR_RESPONSE_SINGLE_ENTID': idmap,
    'CLOUDFLARE_SSL_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_SSL_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_SSL_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CUSTOM_CSR_RESPONSE_SINGLE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_SSL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CUSTOM_CSR_RESPONSE_SINGLE_ENTID']
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
  
