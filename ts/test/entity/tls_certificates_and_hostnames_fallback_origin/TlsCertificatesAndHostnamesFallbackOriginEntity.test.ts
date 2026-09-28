

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


describe('TlsCertificatesAndHostnamesFallbackOriginEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_SSL_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_SSL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareSslSDK.test()
    const ent = testsdk.TlsCertificatesAndHostnamesFallbackOrigin()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_SSL_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tls_certificates_and_hostnames_fallback_origin.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"origin":{"a":true,"h":"Origin","n":"origin","r":true,"sh":"Your origin hostname that requests to your custom hostnames will be sent to.","t":"`$STRING`","key$":"origin","index$":0},"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$OBJECT`","key$":"result","index$":1}},"name":"tls_certificates_and_hostnames_fallback_origin","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /zones/{zone_id}/custom_hostnames/fallback_origin","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/zones/{zone_id}/custom_hostnames/fallback_origin","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"custom_hostnames"},{"lit":"fallback_origin"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /zones/{zone_id}/custom_hostnames/fallback_origin","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/zones/{zone_id}/custom_hostnames/fallback_origin","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"custom_hostnames"},{"lit":"fallback_origin"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /zones/{zone_id}/custom_hostnames/fallback_origin","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/zones/{zone_id}/custom_hostnames/fallback_origin","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"custom_hostnames"},{"lit":"fallback_origin"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"tls_certificates_and_hostnames_fallback_origin","name__orig":"tls_certificates_and_hostnames_fallback_origin","Name":"TlsCertificatesAndHostnamesFallbackOrigin","name_":"tls_certificates_and_hostnames_fallback_origin","name-":"tls-certificates-and-hostnames-fallback-origin","NAME":"TLS_CERTIFICATES_AND_HOSTNAMES_FALLBACK_ORIGIN","index$":40}, {"active":true,"entity":"tls_certificates_and_hostnames_fallback_origin","key$":"BasicTlsCertificatesAndHostnamesFallbackOriginFlow","kind":"basic","name":"BasicTlsCertificatesAndHostnamesFallbackOriginFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"tls_certificates_and_hostnames_fallback_origin_ref01","srcdatavar":"tls_certificates_and_hostnames_fallback_origin_ref01_data","suffix":"_up0","textfield":"origin"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-tls_certificates_and_hostnames_fallback_origin_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"tls_certificates_and_hostnames_fallback_origin_ref01","srcdatavar":"tls_certificates_and_hostnames_fallback_origin_ref01_data","suffix":"_dt0"},"m":{"id":"tls_certificates_and_hostnames_fallback_origin01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-tls_certificates_and_hostnames_fallback_origin_ref01"}}],"index$":1}]}, 'TlsCertificatesAndHostnamesFallbackOrigin', {"GET /zones/{zone_id}/custom_hostnames/fallback_origin":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_identifier"},"index$":0}]},"DELETE /zones/{zone_id}/custom_hostnames/fallback_origin":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_identifier"},"index$":0}]},"PUT /zones/{zone_id}/custom_hostnames/fallback_origin":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"origin":{"description":"Your origin hostname that requests to your custom hostnames will be sent to.","type":"string","example":"fallback.example.com","maxLength":255,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_origin","key$":"origin"}},"required":["origin"],"index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let tls_certificates_and_hostnames_fallback_origin_ref01_data = Object.values(setup.data.existing.tls_certificates_and_hostnames_fallback_origin)[0] as any

    // UPDATE
    const tls_certificates_and_hostnames_fallback_origin_ref01_ent = client.TlsCertificatesAndHostnamesFallbackOrigin()
    const tls_certificates_and_hostnames_fallback_origin_ref01_data_up0: any = {}

    const tls_certificates_and_hostnames_fallback_origin_ref01_markdef_up0 = { name: 'origin', value: 'Mark01-tls_certificates_and_hostnames_fallback_origin_ref01_' + setup.now }
    ;(tls_certificates_and_hostnames_fallback_origin_ref01_data_up0 as any)[tls_certificates_and_hostnames_fallback_origin_ref01_markdef_up0.name] = tls_certificates_and_hostnames_fallback_origin_ref01_markdef_up0.value

    const tls_certificates_and_hostnames_fallback_origin_ref01_resdata_up0 = (await tls_certificates_and_hostnames_fallback_origin_ref01_ent.update(tls_certificates_and_hostnames_fallback_origin_ref01_data_up0)).data()
    assert(null != tls_certificates_and_hostnames_fallback_origin_ref01_resdata_up0)

    assert((tls_certificates_and_hostnames_fallback_origin_ref01_resdata_up0 as any)[tls_certificates_and_hostnames_fallback_origin_ref01_markdef_up0.name] === tls_certificates_and_hostnames_fallback_origin_ref01_markdef_up0.value)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/tls_certificates_and_hostnames_fallback_origin/TlsCertificatesAndHostnamesFallbackOriginTestData.json')

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
    ['tls_certificates_and_hostnames_fallback_origin01','tls_certificates_and_hostnames_fallback_origin02','tls_certificates_and_hostnames_fallback_origin03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_FALLBACK_ORIGIN_ENTID': idmap,
    'CLOUDFLARE_SSL_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_SSL_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_SSL_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_FALLBACK_ORIGIN_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_SSL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_FALLBACK_ORIGIN_ENTID']
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
  
