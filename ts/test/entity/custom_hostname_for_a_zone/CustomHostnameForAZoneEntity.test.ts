

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


describe('CustomHostnameForAZoneEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_SSL_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_SSL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareSslSDK.test()
    const ent = testsdk.CustomHostnameForAZone()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_SSL_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'custom_hostname_for_a_zone.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"custom_certificate":{"a":true,"h":"Custom Certificate","n":"custom_certificate","r":true,"sh":"If a custom uploaded certificate is used.","t":"`$STRING`","key$":"custom_certificate","index$":0},"custom_key":{"a":true,"h":"Custom Key","n":"custom_key","r":true,"sh":"The key for a custom uploaded certificate.","t":"`$STRING`","key$":"custom_key","index$":1}},"name":"custom_hostname_for_a_zone","op":{"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /zones/{zone_id}/custom_hostnames/{custom_hostname_id}/certificate_pack/{certificate_pack_id}/certificates/{certificate_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"0d89c70d-ad9f-4843-b99f-6cc0252067e9","k":"param","n":"certificate_id","or":"certificate_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"0d89c70d-ad9f-4843-b99f-6cc0252067e9","k":"param","n":"certificate_pack_id","or":"certificate_pack_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"0d89c70d-ad9f-4843-b99f-6cc0252067e9","k":"param","n":"custom_hostname_id","or":"custom_hostname_id","r":true,"t":"`$STRING`","index$":2},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"DELETE","o":"/zones/{zone_id}/custom_hostnames/{custom_hostname_id}/certificate_pack/{certificate_pack_id}/certificates/{certificate_id}","q":{"exist":["certificate_id","certificate_pack_id","custom_hostname_id","zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"custom_hostnames"},{"var":"custom_hostname_id"},{"lit":"certificate_pack"},{"var":"certificate_pack_id"},{"lit":"certificates"},{"var":"certificate_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /zones/{zone_id}/custom_hostnames/{custom_hostname_id}/certificate_pack/{certificate_pack_id}/certificates/{certificate_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"0d89c70d-ad9f-4843-b99f-6cc0252067e9","k":"param","n":"certificate_id","or":"certificate_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"0d89c70d-ad9f-4843-b99f-6cc0252067e9","k":"param","n":"certificate_pack_id","or":"certificate_pack_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"0d89c70d-ad9f-4843-b99f-6cc0252067e9","k":"param","n":"custom_hostname_id","or":"custom_hostname_id","r":true,"t":"`$STRING`","index$":2},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"PUT","o":"/zones/{zone_id}/custom_hostnames/{custom_hostname_id}/certificate_pack/{certificate_pack_id}/certificates/{certificate_id}","q":{"exist":["certificate_id","certificate_pack_id","custom_hostname_id","zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"custom_hostnames"},{"var":"custom_hostname_id"},{"lit":"certificate_pack"},{"var":"certificate_pack_id"},{"lit":"certificates"},{"var":"certificate_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.custom_hostname"]]},"key$":"custom_hostname_for_a_zone","name__orig":"custom_hostname_for_a_zone","Name":"CustomHostnameForAZone","name_":"custom_hostname_for_a_zone","name-":"custom-hostname-for-a-zone","NAME":"CUSTOM_HOSTNAME_FOR_A_ZONE","index$":3}, {"active":true,"entity":"custom_hostname_for_a_zone","key$":"BasicCustomHostnameForAZoneFlow","kind":"basic","name":"BasicCustomHostnameForAZoneFlow","param":{},"step":[{"a":true,"d":{"certificate_pack_id":"certificate_pack01","custom_hostname_id":"custom_hostname01","zone_id":"zone01"},"i":{"ref":"custom_hostname_for_a_zone_ref01","srcdatavar":"custom_hostname_for_a_zone_ref01_data","suffix":"_up0","textfield":"custom_certificate"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-custom_hostname_for_a_zone_ref01"}}],"v":[],"index$":0}]}, 'CustomHostnameForAZone', {"DELETE /zones/{zone_id}/custom_hostnames/{custom_hostname_id}/certificate_pack/{certificate_pack_id}/certificates/{certificate_id}":{"protocol":"http","parameters":[{"name":"custom_hostname_id","in":"path","required":true,"schema":{"description":"Custom hostname identifier tag.","type":"string","example":"0d89c70d-ad9f-4843-b99f-6cc0252067e9","maxLength":36,"minLength":36,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_custom_hostname_identifier"},"index$":0},{"name":"certificate_pack_id","in":"path","required":true,"schema":{"description":"Custom hostname identifier tag.","type":"string","example":"0d89c70d-ad9f-4843-b99f-6cc0252067e9","maxLength":36,"minLength":36,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_custom_hostname_identifier"},"index$":1},{"name":"certificate_id","in":"path","required":true,"schema":{"description":"Custom hostname identifier tag.","type":"string","example":"0d89c70d-ad9f-4843-b99f-6cc0252067e9","maxLength":36,"minLength":36,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_custom_hostname_identifier"},"index$":2},{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_identifier"},"index$":3}]},"PUT /zones/{zone_id}/custom_hostnames/{custom_hostname_id}/certificate_pack/{certificate_pack_id}/certificates/{certificate_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"custom_certificate":{"description":"If a custom uploaded certificate is used.","type":"string","example":"-----BEGIN CERTIFICATE-----\nMIIDdjCCAl6gAwIBAgIJAPnMg0Fs+/B0MA0GCSqGSIb3DQEBCwUAMFsx...\n-----END CERTIFICATE-----\n","key$":"custom_certificate"},"custom_key":{"description":"The key for a custom uploaded certificate.","type":"string","example":"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC/SCB5...\n-----END PRIVATE KEY-----\n","x-sensitive":true,"key$":"custom_key"}},"required":["custom_certificate","custom_key"],"x-ref":"#/components/schemas/tls-certificates-and-hostnames_custom_cert_and_key","index$":1}}}},"parameters":[{"name":"custom_hostname_id","in":"path","required":true,"schema":{"description":"Custom hostname identifier tag.","type":"string","example":"0d89c70d-ad9f-4843-b99f-6cc0252067e9","maxLength":36,"minLength":36,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_custom_hostname_identifier"},"index$":0},{"name":"certificate_pack_id","in":"path","required":true,"schema":{"description":"Custom hostname identifier tag.","type":"string","example":"0d89c70d-ad9f-4843-b99f-6cc0252067e9","maxLength":36,"minLength":36,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_custom_hostname_identifier"},"index$":1},{"name":"certificate_id","in":"path","required":true,"schema":{"description":"Custom hostname identifier tag.","type":"string","example":"0d89c70d-ad9f-4843-b99f-6cc0252067e9","maxLength":36,"minLength":36,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_custom_hostname_identifier"},"index$":2},{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_identifier"},"index$":3}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let custom_hostname_for_a_zone_ref01_data = Object.values(setup.data.existing.custom_hostname_for_a_zone)[0] as any

    // UPDATE
    const custom_hostname_for_a_zone_ref01_ent = client.CustomHostnameForAZone()
    const custom_hostname_for_a_zone_ref01_data_up0: any = {}
    custom_hostname_for_a_zone_ref01_data_up0 ['certificate_pack_id'] = setup.idmap['certificate_pack_id']
    custom_hostname_for_a_zone_ref01_data_up0 ['custom_hostname_id'] = setup.idmap['custom_hostname_id']
    custom_hostname_for_a_zone_ref01_data_up0 ['zone_id'] = setup.idmap['zone_id']

    const custom_hostname_for_a_zone_ref01_markdef_up0 = { name: 'custom_certificate', value: 'Mark01-custom_hostname_for_a_zone_ref01_' + setup.now }
    ;(custom_hostname_for_a_zone_ref01_data_up0 as any)[custom_hostname_for_a_zone_ref01_markdef_up0.name] = custom_hostname_for_a_zone_ref01_markdef_up0.value

    const custom_hostname_for_a_zone_ref01_resdata_up0 = (await custom_hostname_for_a_zone_ref01_ent.update(custom_hostname_for_a_zone_ref01_data_up0)).data()
    assert(null != custom_hostname_for_a_zone_ref01_resdata_up0)

    assert((custom_hostname_for_a_zone_ref01_resdata_up0 as any)[custom_hostname_for_a_zone_ref01_markdef_up0.name] === custom_hostname_for_a_zone_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/custom_hostname_for_a_zone/CustomHostnameForAZoneTestData.json')

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
    ['custom_hostname_for_a_zone01','custom_hostname_for_a_zone02','custom_hostname_for_a_zone03','custom_hostname01','custom_hostname02','custom_hostname03','certificate_pack01','zone01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_SSL_TEST_CUSTOM_HOSTNAME_FOR_A_ZONE_ENTID': idmap,
    'CLOUDFLARE_SSL_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_SSL_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_SSL_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_SSL_TEST_CUSTOM_HOSTNAME_FOR_A_ZONE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_SSL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_SSL_TEST_CUSTOM_HOSTNAME_FOR_A_ZONE_ENTID']
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
  
