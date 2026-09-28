

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


describe('TlsCertificatesAndHostnamesPerHostnameSettingsResponseEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_SSL_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_SSL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareSslSDK.test()
    const ent = testsdk.TlsCertificatesAndHostnamesPerHostnameSettingsResponse()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_SSL_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tls_certificates_and_hostnames_per_hostname_settings_response.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$ARRAY`","union":{"branches":3,"count":1,"depth":3},"key$":"result","index$":0},"result_info":{"a":true,"h":"Result Info","n":"result_info","r":false,"t":"`$OBJECT`","key$":"result_info","index$":1}},"name":"tls_certificates_and_hostnames_per_hostname_settings_response","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /zones/{zone_id}/hostnames/settings/{setting_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"setting_id","or":"setting_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/zones/{zone_id}/hostnames/settings/{setting_id}","q":{"exist":["setting_id","zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"hostnames"},{"lit":"settings"},{"var":"setting_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"tls_certificates_and_hostnames_per_hostname_settings_response","name__orig":"tls_certificates_and_hostnames_per_hostname_settings_response","Name":"TlsCertificatesAndHostnamesPerHostnameSettingsResponse","name_":"tls_certificates_and_hostnames_per_hostname_settings_response","name-":"tls-certificates-and-hostnames-per-hostname-settings-response","NAME":"TLS_CERTIFICATES_AND_HOSTNAMES_PER_HOSTNAME_SETTINGS_RESPONSE","index$":51}, {"active":true,"entity":"tls_certificates_and_hostnames_per_hostname_settings_response","key$":"BasicTlsCertificatesAndHostnamesPerHostnameSettingsResponseFlow","kind":"basic","name":"BasicTlsCertificatesAndHostnamesPerHostnameSettingsResponseFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"tls_certificates_and_hostnames_per_hostname_settings_response_ref01","srcdatavar":"tls_certificates_and_hostnames_per_hostname_settings_response_ref01_data","suffix":"_dt0"},"m":{"id":"tls_certificates_and_hostnames_per_hostname_settings_response01","zone_id":"zone01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-tls_certificates_and_hostnames_per_hostname_settings_response_ref01"}}],"index$":0}]}, 'TlsCertificatesAndHostnamesPerHostnameSettingsResponse', {"GET /zones/{zone_id}/hostnames/settings/{setting_id}":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_identifier"},"index$":0},{"name":"setting_id","in":"path","required":true,"schema":{"description":"The TLS Setting name.\nThe value type depends on the setting:\n- `ciphers`: value is an array of cipher suite strings (e.g., `[\"ECDHE-RSA-AES128-GCM-SHA256\", \"AES128-GCM-SHA256\"]`).\n- `min_tls_version`: value is a TLS version string (`\"1.0\"`, `\"1.1\"`, `\"1.2\"`, or `\"1.3\"`).\n- `http2`: value is `\"on\"` or `\"off\"`.","type":"string","enum":["ciphers","min_tls_version","http2"],"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_setting_id"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let tls_certificates_and_hostnames_per_hostname_settings_response_ref01_data = Object.values(setup.data.existing.tls_certificates_and_hostnames_per_hostname_settings_response)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const tls_certificates_and_hostnames_per_hostname_settings_response_ref01_ent = client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/tls_certificates_and_hostnames_per_hostname_settings_response/TlsCertificatesAndHostnamesPerHostnameSettingsResponseTestData.json')

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
    ['tls_certificates_and_hostnames_per_hostname_settings_response01','tls_certificates_and_hostnames_per_hostname_settings_response02','tls_certificates_and_hostnames_per_hostname_settings_response03','zone01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_PER_HOSTNAME_SETTINGS_RESPONSE_ENTID': idmap,
    'CLOUDFLARE_SSL_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_SSL_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_SSL_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_PER_HOSTNAME_SETTINGS_RESPONSE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_SSL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_PER_HOSTNAME_SETTINGS_RESPONSE_ENTID']
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
  
