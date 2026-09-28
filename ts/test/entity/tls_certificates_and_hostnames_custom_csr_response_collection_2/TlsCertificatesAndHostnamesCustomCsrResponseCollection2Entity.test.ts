

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


describe('TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_SSL_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_SSL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareSslSDK.test()
    const ent = testsdk.TlsCertificatesAndHostnamesCustomCsrResponseCollection2()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_SSL_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tls_certificates_and_hostnames_custom_csr_response_collection_2.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$ARRAY`","key$":"result","index$":0}},"name":"tls_certificates_and_hostnames_custom_csr_response_collection_2","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /accounts/{account_id}/custom_csrs","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"account_id","or":"account_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"asc","k":"query","n":"direction","or":"direction","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"created_at","k":"query","n":"order","or":"order","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$NUMBER`","index$":2},{"a":true,"ex":50,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$NUMBER`","index$":3}]},"k":"http","m":"GET","o":"/accounts/{account_id}/custom_csrs","q":{"exist":["account_id","direction","order","page","per_page"]},"r":{},"s":[{"lit":"accounts"},{"var":"account_id"},{"lit":"custom_csrs"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"tls_certificates_and_hostnames_custom_csr_response_collection_2","name__orig":"tls_certificates_and_hostnames_custom_csr_response_collection_2","Name":"TlsCertificatesAndHostnamesCustomCsrResponseCollection2","name_":"tls_certificates_and_hostnames_custom_csr_response_collection_2","name-":"tls-certificates-and-hostnames-custom-csr-response-collection-2","NAME":"TLS_CERTIFICATES_AND_HOSTNAMES_CUSTOM_CSR_RESPONSE_COLLECTION_2","index$":28}, {"active":true,"entity":"tls_certificates_and_hostnames_custom_csr_response_collection_2","key$":"BasicTlsCertificatesAndHostnamesCustomCsrResponseCollection2Flow","kind":"basic","name":"BasicTlsCertificatesAndHostnamesCustomCsrResponseCollection2Flow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"account_id":"account01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"tls_certificates_and_hostnames_custom_csr_response_collection_2_ref01"}}],"index$":0}]}, 'TlsCertificatesAndHostnamesCustomCsrResponseCollection2', {"GET /accounts/{account_id}/custom_csrs":{"protocol":"http","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_identifier"},"index$":0},{"name":"page","in":"query","schema":{"description":"Page number of paginated results.","type":"number","default":1,"minimum":1},"index$":1},{"name":"per_page","in":"query","schema":{"description":"Number of custom CSRs per page.","type":"number","default":50,"maximum":50,"minimum":5},"index$":2},{"name":"order","in":"query","schema":{"description":"The field to sort the returned custom CSRs by.","type":"string","default":"created_at","enum":["name","account_tag","created_at"]},"index$":3},{"name":"direction","in":"query","schema":{"description":"The direction to sort by.","type":"string","default":"asc","enum":["asc","desc"]},"index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let tls_certificates_and_hostnames_custom_csr_response_collection_2_ref01_data = Object.values(setup.data.existing.tls_certificates_and_hostnames_custom_csr_response_collection_2)[0] as any

    // LIST
    const tls_certificates_and_hostnames_custom_csr_response_collection_2_ref01_ent = client.TlsCertificatesAndHostnamesCustomCsrResponseCollection2()
    const tls_certificates_and_hostnames_custom_csr_response_collection_2_ref01_match: any = {}
    tls_certificates_and_hostnames_custom_csr_response_collection_2_ref01_match['account_id'] = setup.idmap['account01']

    const tls_certificates_and_hostnames_custom_csr_response_collection_2_ref01_list = (await tls_certificates_and_hostnames_custom_csr_response_collection_2_ref01_ent.list(tls_certificates_and_hostnames_custom_csr_response_collection_2_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/tls_certificates_and_hostnames_custom_csr_response_collection_2/TlsCertificatesAndHostnamesCustomCsrResponseCollection2TestData.json')

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
    ['tls_certificates_and_hostnames_custom_csr_response_collection_201','tls_certificates_and_hostnames_custom_csr_response_collection_202','tls_certificates_and_hostnames_custom_csr_response_collection_203','account01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CUSTOM_CSR_RESPONSE_COLLECTION_2_ENTID': idmap,
    'CLOUDFLARE_SSL_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_SSL_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_SSL_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CUSTOM_CSR_RESPONSE_COLLECTION_2_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_SSL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CUSTOM_CSR_RESPONSE_COLLECTION_2_ENTID']
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
  
