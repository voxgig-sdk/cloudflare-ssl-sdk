

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


describe('CacheAutoOriginTlsKexEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_SSL_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_SSL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareSslSDK.test()
    const ent = testsdk.CacheAutoOriginTlsKex()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_SSL_TEST_LIVE
    for (const op of ['list', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'cache_auto_origin_tls_kex.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"enabled":{"a":true,"h":"Enabled","n":"enabled","r":true,"sh":"Controls enablement of Auto-Origin TLS KEX selection for the zone.","t":"`$BOOLEAN`","key$":"enabled","index$":0},"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":1},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":2},"result":{"a":true,"h":"Result","n":"result","r":true,"t":"`$OBJECT`","key$":"result","index$":3},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Indicates the API call's success or failure.","t":"`$BOOLEAN`","key$":"success","index$":4}},"name":"cache_auto_origin_tls_kex","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /zones/{zone_id}/settings/auto_origin_tls_kex","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/zones/{zone_id}/settings/auto_origin_tls_kex","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"settings"},{"lit":"auto_origin_tls_kex"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /zones/{zone_id}/settings/auto_origin_tls_kex","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/zones/{zone_id}/settings/auto_origin_tls_kex","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"settings"},{"lit":"auto_origin_tls_kex"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"cache_auto_origin_tls_kex","name__orig":"cache_auto_origin_tls_kex","Name":"CacheAutoOriginTlsKex","name_":"cache_auto_origin_tls_kex","name-":"cache-auto-origin-tls-kex","NAME":"CACHE_AUTO_ORIGIN_TLS_KEX","index$":1}, {"active":true,"entity":"cache_auto_origin_tls_kex","key$":"BasicCacheAutoOriginTlsKexFlow","kind":"basic","name":"BasicCacheAutoOriginTlsKexFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"zone_id":"zone01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"cache_auto_origin_tls_kex_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"cache_auto_origin_tls_kex_ref01","srcdatavar":"cache_auto_origin_tls_kex_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-cache_auto_origin_tls_kex_ref01"}}],"v":[],"index$":1}]}, 'CacheAutoOriginTlsKex', {"GET /zones/{zone_id}/settings/auto_origin_tls_kex":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-ref":"#/components/schemas/cache_identifier"},"index$":0}]},"PATCH /zones/{zone_id}/settings/auto_origin_tls_kex":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"description":"Update enablement of Auto-Origin TLS KEX selection.","type":"object","properties":{"enabled":{"description":"Controls enablement of Auto-Origin TLS KEX selection for the zone.","type":"boolean","example":true,"x-ref":"#/components/schemas/cache_auto_origin_tls_kex_value","key$":"enabled"}},"required":["enabled"],"x-ref":"#/components/schemas/cache_auto_origin_tls_kex_patch","index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-ref":"#/components/schemas/cache_identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let cache_auto_origin_tls_kex_ref01_data = Object.values(setup.data.existing.cache_auto_origin_tls_kex)[0] as any

    // LIST
    const cache_auto_origin_tls_kex_ref01_ent = client.CacheAutoOriginTlsKex()
    const cache_auto_origin_tls_kex_ref01_match: any = {}
    cache_auto_origin_tls_kex_ref01_match['zone_id'] = setup.idmap['zone01']

    const cache_auto_origin_tls_kex_ref01_list = (await cache_auto_origin_tls_kex_ref01_ent.list(cache_auto_origin_tls_kex_ref01_match)).map((e: any) => e.data())


    // UPDATE
    const cache_auto_origin_tls_kex_ref01_data_up0: any = {}

    const cache_auto_origin_tls_kex_ref01_resdata_up0 = (await cache_auto_origin_tls_kex_ref01_ent.update(cache_auto_origin_tls_kex_ref01_data_up0)).data()
    assert(null != cache_auto_origin_tls_kex_ref01_resdata_up0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/cache_auto_origin_tls_kex/CacheAutoOriginTlsKexTestData.json')

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
    ['cache_auto_origin_tls_kex01','cache_auto_origin_tls_kex02','cache_auto_origin_tls_kex03','zone01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_SSL_TEST_CACHE_AUTO_ORIGIN_TLS_KEX_ENTID': idmap,
    'CLOUDFLARE_SSL_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_SSL_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_SSL_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_SSL_TEST_CACHE_AUTO_ORIGIN_TLS_KEX_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_SSL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_SSL_TEST_CACHE_AUTO_ORIGIN_TLS_KEX_ENTID']
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
  
