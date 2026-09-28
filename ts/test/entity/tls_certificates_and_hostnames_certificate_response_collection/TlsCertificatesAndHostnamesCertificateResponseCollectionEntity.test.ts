

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


describe('TlsCertificatesAndHostnamesCertificateResponseCollectionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_SSL_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_SSL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareSslSDK.test()
    const ent = testsdk.TlsCertificatesAndHostnamesCertificateResponseCollection()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_SSL_TEST_LIVE
    for (const op of ['list', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tls_certificates_and_hostnames_certificate_response_collection.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"certificates":{"a":true,"h":"Certificates","n":"certificates","r":true,"sh":"Array of ordered certificates.","t":"`$ARRAY`","key$":"certificates","index$":0},"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$ARRAY`","key$":"result","index$":1}},"name":"tls_certificates_and_hostnames_certificate_response_collection","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /zones/{zone_id}/custom_certificates","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"all","k":"query","n":"match","or":"match","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$NUMBER`","index$":1},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$NUMBER`","index$":2},{"a":true,"ex":"active","k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/zones/{zone_id}/custom_certificates","q":{"exist":["match","page","per_page","status","zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"custom_certificates"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /zones/{zone_id}/custom_certificates/prioritize","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/zones/{zone_id}/custom_certificates/prioritize","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"custom_certificates"},{"lit":"prioritize"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"tls_certificates_and_hostnames_certificate_response_collection","name__orig":"tls_certificates_and_hostnames_certificate_response_collection","Name":"TlsCertificatesAndHostnamesCertificateResponseCollection","name_":"tls_certificates_and_hostnames_certificate_response_collection","name-":"tls-certificates-and-hostnames-certificate-response-collection","NAME":"TLS_CERTIFICATES_AND_HOSTNAMES_CERTIFICATE_RESPONSE_COLLECTION","index$":13}, {"active":true,"entity":"tls_certificates_and_hostnames_certificate_response_collection","key$":"BasicTlsCertificatesAndHostnamesCertificateResponseCollectionFlow","kind":"basic","name":"BasicTlsCertificatesAndHostnamesCertificateResponseCollectionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"zone_id":"zone01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"tls_certificates_and_hostnames_certificate_response_collection_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"tls_certificates_and_hostnames_certificate_response_collection_ref01","srcdatavar":"tls_certificates_and_hostnames_certificate_response_collection_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-tls_certificates_and_hostnames_certificate_response_collection_ref01"}}],"v":[],"index$":1}]}, 'TlsCertificatesAndHostnamesCertificateResponseCollection', {"GET /zones/{zone_id}/custom_certificates":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_identifier"},"index$":0},{"name":"page","in":"query","schema":{"description":"Page number of paginated results.","type":"number","default":1,"minimum":1},"index$":1},{"name":"per_page","in":"query","schema":{"description":"Number of zones per page.","type":"number","default":20,"maximum":50,"minimum":5},"index$":2},{"name":"match","in":"query","schema":{"description":"Whether to match all search requirements or at least one (any).","type":"string","default":"all","enum":["any","all"]},"index$":3},{"name":"status","in":"query","schema":{"description":"Status of the zone's custom SSL.","type":"string","example":"active","enum":["active","expired","deleted","pending","initializing"],"readOnly":true},"index$":4}]},"PUT /zones/{zone_id}/custom_certificates/prioritize":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"certificates":{"description":"Array of ordered certificates.","type":"array","items":{"properties":{"id":{"description":"Custom certificate identifier tag.","type":"string","example":"2458ce5a-0c35-4c7f-82c7-8e9487d3ff60","maxLength":36,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_custom_certificate_identifier"},"priority":{"description":"The order/priority in which the certificate will be used in a request. The higher priority will break ties across overlapping 'legacy_custom' certificates, but 'legacy_custom' certificates will always supercede 'sni_custom' certificates.","type":"number","example":1,"default":0,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_priority"}},"type":"object"},"example":[{"id":"5a7805061c76ada191ed06f989cc3dac","priority":2},{"id":"9a7806061c88ada191ed06f989cc3dac","priority":1}],"key$":"certificates"}},"required":["certificates"],"index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let tls_certificates_and_hostnames_certificate_response_collection_ref01_data = Object.values(setup.data.existing.tls_certificates_and_hostnames_certificate_response_collection)[0] as any

    // LIST
    const tls_certificates_and_hostnames_certificate_response_collection_ref01_ent = client.TlsCertificatesAndHostnamesCertificateResponseCollection()
    const tls_certificates_and_hostnames_certificate_response_collection_ref01_match: any = {}
    tls_certificates_and_hostnames_certificate_response_collection_ref01_match['zone_id'] = setup.idmap['zone01']

    const tls_certificates_and_hostnames_certificate_response_collection_ref01_list = (await tls_certificates_and_hostnames_certificate_response_collection_ref01_ent.list(tls_certificates_and_hostnames_certificate_response_collection_ref01_match)).map((e: any) => e.data())


    // UPDATE
    const tls_certificates_and_hostnames_certificate_response_collection_ref01_data_up0: any = {}

    const tls_certificates_and_hostnames_certificate_response_collection_ref01_resdata_up0 = (await tls_certificates_and_hostnames_certificate_response_collection_ref01_ent.update(tls_certificates_and_hostnames_certificate_response_collection_ref01_data_up0)).data()
    assert(null != tls_certificates_and_hostnames_certificate_response_collection_ref01_resdata_up0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/tls_certificates_and_hostnames_certificate_response_collection/TlsCertificatesAndHostnamesCertificateResponseCollectionTestData.json')

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
    ['tls_certificates_and_hostnames_certificate_response_collection01','tls_certificates_and_hostnames_certificate_response_collection02','tls_certificates_and_hostnames_certificate_response_collection03','zone01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CERTIFICATE_RESPONSE_COLLECTION_ENTID': idmap,
    'CLOUDFLARE_SSL_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_SSL_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_SSL_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CERTIFICATE_RESPONSE_COLLECTION_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_SSL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CERTIFICATE_RESPONSE_COLLECTION_ENTID']
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
  
