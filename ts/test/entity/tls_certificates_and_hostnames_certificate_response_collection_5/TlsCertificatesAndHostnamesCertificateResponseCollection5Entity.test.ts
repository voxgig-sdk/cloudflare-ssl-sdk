

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


describe('TlsCertificatesAndHostnamesCertificateResponseCollection5Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_SSL_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_SSL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareSslSDK.test()
    const ent = testsdk.TlsCertificatesAndHostnamesCertificateResponseCollection5()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_SSL_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tls_certificates_and_hostnames_certificate_response_collection_5.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$ARRAY`","key$":"result","index$":0},"result_info":{"a":true,"h":"Result Info","n":"result_info","r":false,"t":"`$OBJECT`","key$":"result_info","index$":1}},"name":"tls_certificates_and_hostnames_certificate_response_collection_5","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/mtls_certificates","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":["custom"],"k":"query","n":"type","or":"type","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/accounts/{account_id}/mtls_certificates","q":{"exist":["account_id","type"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"mtls_certificates"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"tls_certificates_and_hostnames_certificate_response_collection_5","name__orig":"tls_certificates_and_hostnames_certificate_response_collection_5","Name":"TlsCertificatesAndHostnamesCertificateResponseCollection5","name_":"tls_certificates_and_hostnames_certificate_response_collection_5","name-":"tls-certificates-and-hostnames-certificate-response-collection-5","NAME":"TLS_CERTIFICATES_AND_HOSTNAMES_CERTIFICATE_RESPONSE_COLLECTION_5","index$":16}, {"active":true,"entity":"tls_certificates_and_hostnames_certificate_response_collection_5","key$":"BasicTlsCertificatesAndHostnamesCertificateResponseCollection5Flow","kind":"basic","name":"BasicTlsCertificatesAndHostnamesCertificateResponseCollection5Flow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"tls_certificates_and_hostnames_certificate_response_collection_5_ref01"}}],"index$":0}]}, 'TlsCertificatesAndHostnamesCertificateResponseCollection5', {"GET /accounts/{account_id}/mtls_certificates":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_identifier"},"index$":0},{"name":"type","in":"query","description":"Filters results by certificate type. Multiple types can be comma-separated.","schema":{"type":"array","items":{"enum":["custom","gateway_managed","access_managed"],"type":"string"},"example":["custom"]},"explode":false,"style":"form","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let tls_certificates_and_hostnames_certificate_response_collection_5_ref01_data = Object.values(setup.data.existing.tls_certificates_and_hostnames_certificate_response_collection_5)[0] as any

    // LIST
    const tls_certificates_and_hostnames_certificate_response_collection_5_ref01_ent = client.TlsCertificatesAndHostnamesCertificateResponseCollection5()
    const tls_certificates_and_hostnames_certificate_response_collection_5_ref01_match: any = {}
    tls_certificates_and_hostnames_certificate_response_collection_5_ref01_match['account_id'] = setup.idmap['account01']

    const tls_certificates_and_hostnames_certificate_response_collection_5_ref01_list = (await tls_certificates_and_hostnames_certificate_response_collection_5_ref01_ent.list(tls_certificates_and_hostnames_certificate_response_collection_5_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/tls_certificates_and_hostnames_certificate_response_collection_5/TlsCertificatesAndHostnamesCertificateResponseCollection5TestData.json')

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
    ['tls_certificates_and_hostnames_certificate_response_collection_501','tls_certificates_and_hostnames_certificate_response_collection_502','tls_certificates_and_hostnames_certificate_response_collection_503','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CERTIFICATE_RESPONSE_COLLECTION_5_ENTID': idmap,
    'CLOUDFLARE_SSL_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_SSL_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_SSL_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CERTIFICATE_RESPONSE_COLLECTION_5_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_SSL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CERTIFICATE_RESPONSE_COLLECTION_5_ENTID']
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
  
