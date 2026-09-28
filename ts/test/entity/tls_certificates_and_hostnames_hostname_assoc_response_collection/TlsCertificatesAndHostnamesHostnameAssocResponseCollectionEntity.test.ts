

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


describe('TlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_SSL_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_SSL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareSslSDK.test()
    const ent = testsdk.TlsCertificatesAndHostnamesHostnameAssocResponseCollection()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_SSL_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tls_certificates_and_hostnames_hostname_assoc_response_collection.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$ARRAY`","key$":"result","index$":0},"result_info":{"a":true,"h":"Result Info","n":"result_info","r":false,"t":"`$OBJECT`","key$":"result_info","index$":1}},"name":"tls_certificates_and_hostnames_hostname_assoc_response_collection","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /zones/{zone_id}/origin_tls_client_auth/hostnames","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$NUMBER`","index$":0},{"a":true,"ex":50,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$NUMBER`","index$":1},{"a":true,"ex":"active","k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/zones/{zone_id}/origin_tls_client_auth/hostnames","q":{"exist":["page","per_page","status","zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"origin_tls_client_auth"},{"lit":"hostnames"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"tls_certificates_and_hostnames_hostname_assoc_response_collection","name__orig":"tls_certificates_and_hostnames_hostname_assoc_response_collection","Name":"TlsCertificatesAndHostnamesHostnameAssocResponseCollection","name_":"tls_certificates_and_hostnames_hostname_assoc_response_collection","name-":"tls-certificates-and-hostnames-hostname-assoc-response-collection","NAME":"TLS_CERTIFICATES_AND_HOSTNAMES_HOSTNAME_ASSOC_RESPONSE_COLLECTION","index$":43}, {"active":true,"entity":"tls_certificates_and_hostnames_hostname_assoc_response_collection","key$":"BasicTlsCertificatesAndHostnamesHostnameAssocResponseCollectionFlow","kind":"basic","name":"BasicTlsCertificatesAndHostnamesHostnameAssocResponseCollectionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"zone_id":"zone01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"tls_certificates_and_hostnames_hostname_assoc_response_collection_ref01"}}],"index$":0}]}, 'TlsCertificatesAndHostnamesHostnameAssocResponseCollection', {"GET /zones/{zone_id}/origin_tls_client_auth/hostnames":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_identifier"},"index$":0},{"name":"page","in":"query","schema":{"description":"Page number of paginated results.","type":"number","default":1,"minimum":1},"index$":1},{"name":"per_page","in":"query","schema":{"description":"Number of associations per page.","type":"number","default":50,"maximum":1000,"minimum":1},"index$":2},{"name":"status","in":"query","schema":{"description":"Filter associations by status. Use comma-separated values to filter by multiple statuses, or \"all\" to include every status. Defaults to \"active\" if not provided.","type":"string","example":"active","enum":["active","pending_deployment","pending_deletion","deleted","deployment_timed_out","deletion_timed_out","all"]},"index$":3}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let tls_certificates_and_hostnames_hostname_assoc_response_collection_ref01_data = Object.values(setup.data.existing.tls_certificates_and_hostnames_hostname_assoc_response_collection)[0] as any

    // LIST
    const tls_certificates_and_hostnames_hostname_assoc_response_collection_ref01_ent = client.TlsCertificatesAndHostnamesHostnameAssocResponseCollection()
    const tls_certificates_and_hostnames_hostname_assoc_response_collection_ref01_match: any = {}
    tls_certificates_and_hostnames_hostname_assoc_response_collection_ref01_match['zone_id'] = setup.idmap['zone01']

    const tls_certificates_and_hostnames_hostname_assoc_response_collection_ref01_list = (await tls_certificates_and_hostnames_hostname_assoc_response_collection_ref01_ent.list(tls_certificates_and_hostnames_hostname_assoc_response_collection_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/tls_certificates_and_hostnames_hostname_assoc_response_collection/TlsCertificatesAndHostnamesHostnameAssocResponseCollectionTestData.json')

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
    ['tls_certificates_and_hostnames_hostname_assoc_response_collection01','tls_certificates_and_hostnames_hostname_assoc_response_collection02','tls_certificates_and_hostnames_hostname_assoc_response_collection03','zone01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_HOSTNAME_ASSOC_RESPONSE_COLLECTION_ENTID': idmap,
    'CLOUDFLARE_SSL_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_SSL_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_SSL_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_HOSTNAME_ASSOC_RESPONSE_COLLECTION_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_SSL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_HOSTNAME_ASSOC_RESPONSE_COLLECTION_ENTID']
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
  
