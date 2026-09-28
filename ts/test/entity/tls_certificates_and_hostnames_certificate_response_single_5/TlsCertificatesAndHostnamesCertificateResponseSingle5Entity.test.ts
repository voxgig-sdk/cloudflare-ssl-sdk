

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


describe('TlsCertificatesAndHostnamesCertificateResponseSingle5Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_SSL_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_SSL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareSslSDK.test()
    const ent = testsdk.TlsCertificatesAndHostnamesCertificateResponseSingle5()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_SSL_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tls_certificates_and_hostnames_certificate_response_single_5.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$OBJECT`","key$":"result","index$":0}},"name":"tls_certificates_and_hostnames_certificate_response_single_5","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/mtls_certificates/{mtls_certificate_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"2458ce5a-0c35-4c7f-82c7-8e9487d3ff60","k":"param","n":"mtls_certificate_id","or":"mtls_certificate_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/accounts/{account_id}/mtls_certificates/{mtls_certificate_id}","q":{"exist":["account_id","mtls_certificate_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"mtls_certificates"},{"var":"mtls_certificate_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /accounts/{account_id}/mtls_certificates/{mtls_certificate_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"2458ce5a-0c35-4c7f-82c7-8e9487d3ff60","k":"param","n":"mtls_certificate_id","or":"mtls_certificate_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/accounts/{account_id}/mtls_certificates/{mtls_certificate_id}","q":{"exist":["account_id","mtls_certificate_id"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"mtls_certificates"},{"var":"mtls_certificate_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"tls_certificates_and_hostnames_certificate_response_single_5","name__orig":"tls_certificates_and_hostnames_certificate_response_single_5","Name":"TlsCertificatesAndHostnamesCertificateResponseSingle5","name_":"tls_certificates_and_hostnames_certificate_response_single_5","name-":"tls-certificates-and-hostnames-certificate-response-single-5","NAME":"TLS_CERTIFICATES_AND_HOSTNAMES_CERTIFICATE_RESPONSE_SINGLE_5","index$":22}, {"active":true,"entity":"tls_certificates_and_hostnames_certificate_response_single_5","key$":"BasicTlsCertificatesAndHostnamesCertificateResponseSingle5Flow","kind":"basic","name":"BasicTlsCertificatesAndHostnamesCertificateResponseSingle5Flow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"tls_certificates_and_hostnames_certificate_response_single_5_ref01","srcdatavar":"tls_certificates_and_hostnames_certificate_response_single_5_ref01_data","suffix":"_dt0"},"m":{"account_id":"account01","id":"tls_certificates_and_hostnames_certificate_response_single_501"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-tls_certificates_and_hostnames_certificate_response_single_5_ref01"}}],"index$":0}]}, 'TlsCertificatesAndHostnamesCertificateResponseSingle5', {"GET /accounts/{account_id}/mtls_certificates/{mtls_certificate_id}":{"protocol":"http","parameters":[{"name":"mtls_certificate_id","in":"path","required":true,"schema":{"description":"Certificate identifier tag.","type":"string","example":"2458ce5a-0c35-4c7f-82c7-8e9487d3ff60","maxLength":36,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_mtls_certificate_identifier"},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_identifier"},"index$":1}]},"DELETE /accounts/{account_id}/mtls_certificates/{mtls_certificate_id}":{"protocol":"http","parameters":[{"name":"mtls_certificate_id","in":"path","required":true,"schema":{"description":"Certificate identifier tag.","type":"string","example":"2458ce5a-0c35-4c7f-82c7-8e9487d3ff60","maxLength":36,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_mtls_certificate_identifier"},"index$":0},{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_identifier"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let tls_certificates_and_hostnames_certificate_response_single_5_ref01_data = Object.values(setup.data.existing.tls_certificates_and_hostnames_certificate_response_single_5)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const tls_certificates_and_hostnames_certificate_response_single_5_ref01_ent = client.TlsCertificatesAndHostnamesCertificateResponseSingle5()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/tls_certificates_and_hostnames_certificate_response_single_5/TlsCertificatesAndHostnamesCertificateResponseSingle5TestData.json')

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
    ['tls_certificates_and_hostnames_certificate_response_single_501','tls_certificates_and_hostnames_certificate_response_single_502','tls_certificates_and_hostnames_certificate_response_single_503','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CERTIFICATE_RESPONSE_SINGLE_5_ENTID': idmap,
    'CLOUDFLARE_SSL_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_SSL_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_SSL_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CERTIFICATE_RESPONSE_SINGLE_5_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_SSL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CERTIFICATE_RESPONSE_SINGLE_5_ENTID']
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
  
