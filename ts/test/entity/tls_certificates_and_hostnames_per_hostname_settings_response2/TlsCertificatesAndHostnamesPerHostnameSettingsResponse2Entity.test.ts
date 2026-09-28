

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


describe('TlsCertificatesAndHostnamesPerHostnameSettingsResponse2Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_SSL_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_SSL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareSslSDK.test()
    const ent = testsdk.TlsCertificatesAndHostnamesPerHostnameSettingsResponse2()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_SSL_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tls_certificates_and_hostnames_per_hostname_settings_response2.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id","parts":["setting_id","hostname"],"sep":"/"},"name":"tls_certificates_and_hostnames_per_hostname_settings_response2","op":{"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"app.example.com","k":"param","n":"hostname","or":"hostname","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"setting_id","or":"setting_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"DELETE","o":"/zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}","q":{"exist":["hostname","setting_id","zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"hostnames"},{"lit":"settings"},{"var":"setting_id"},{"var":"hostname"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"tls_certificates_and_hostnames_per_hostname_settings_response2","name__orig":"tls_certificates_and_hostnames_per_hostname_settings_response2","Name":"TlsCertificatesAndHostnamesPerHostnameSettingsResponse2","name_":"tls_certificates_and_hostnames_per_hostname_settings_response2","name-":"tls-certificates-and-hostnames-per-hostname-settings-response2","NAME":"TLS_CERTIFICATES_AND_HOSTNAMES_PER_HOSTNAME_SETTINGS_RESPONSE2","index$":49}, {"active":true,"entity":"tls_certificates_and_hostnames_per_hostname_settings_response2","key$":"BasicTlsCertificatesAndHostnamesPerHostnameSettingsResponse2Flow","kind":"basic","name":"BasicTlsCertificatesAndHostnamesPerHostnameSettingsResponse2Flow","param":{},"step":[]}, 'TlsCertificatesAndHostnamesPerHostnameSettingsResponse2', {"DELETE /zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_identifier"},"index$":0},{"name":"setting_id","in":"path","required":true,"schema":{"description":"The TLS Setting name.\nThe value type depends on the setting:\n- `ciphers`: value is an array of cipher suite strings (e.g., `[\"ECDHE-RSA-AES128-GCM-SHA256\", \"AES128-GCM-SHA256\"]`).\n- `min_tls_version`: value is a TLS version string (`\"1.0\"`, `\"1.1\"`, `\"1.2\"`, or `\"1.3\"`).\n- `http2`: value is `\"on\"` or `\"off\"`.","type":"string","enum":["ciphers","min_tls_version","http2"],"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_setting_id"},"index$":1},{"name":"hostname","in":"path","required":true,"schema":{"description":"The hostname for which the tls settings are set.","type":"string","example":"app.example.com","x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_hostname-3"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let tls_certificates_and_hostnames_per_hostname_settings_response2_ref01_data = Object.values(setup.data.existing.tls_certificates_and_hostnames_per_hostname_settings_response2)[0] as any

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/tls_certificates_and_hostnames_per_hostname_settings_response2/TlsCertificatesAndHostnamesPerHostnameSettingsResponse2TestData.json')

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
    ['tls_certificates_and_hostnames_per_hostname_settings_response201','tls_certificates_and_hostnames_per_hostname_settings_response202','tls_certificates_and_hostnames_per_hostname_settings_response203'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_PER_HOSTNAME_SETTINGS_RESPONSE2_ENTID': idmap,
    'CLOUDFLARE_SSL_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_SSL_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_SSL_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_PER_HOSTNAME_SETTINGS_RESPONSE2_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_SSL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_PER_HOSTNAME_SETTINGS_RESPONSE2_ENTID']
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
  
