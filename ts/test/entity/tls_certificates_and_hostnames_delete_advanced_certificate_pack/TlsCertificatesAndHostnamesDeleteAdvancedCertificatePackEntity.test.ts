

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


describe('TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_SSL_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_SSL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareSslSDK.test()
    const ent = testsdk.TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_SSL_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tls_certificates_and_hostnames_delete_advanced_certificate_pack.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"tls_certificates_and_hostnames_delete_advanced_certificate_pack","op":{"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"3822ff90-ea29-44df-9e55-21300bb9419b","k":"param","n":"id","or":"certificate_pack_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}","q":{"exist":["id","zone_id"]},"r":{"param":{"certificate_pack_id":"id"}},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"ssl"},{"lit":"certificate_packs"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"tls_certificates_and_hostnames_delete_advanced_certificate_pack","name__orig":"tls_certificates_and_hostnames_delete_advanced_certificate_pack","Name":"TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack","name_":"tls_certificates_and_hostnames_delete_advanced_certificate_pack","name-":"tls-certificates-and-hostnames-delete-advanced-certificate-pack","NAME":"TLS_CERTIFICATES_AND_HOSTNAMES_DELETE_ADVANCED_CERTIFICATE_PACK","index$":40}, {"active":true,"entity":"tls_certificates_and_hostnames_delete_advanced_certificate_pack","key$":"BasicTlsCertificatesAndHostnamesDeleteAdvancedCertificatePackFlow","kind":"basic","name":"BasicTlsCertificatesAndHostnamesDeleteAdvancedCertificatePackFlow","param":{},"step":[]}, 'TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack', {"DELETE /zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}":{"protocol":"http","parameters":[{"name":"certificate_pack_id","in":"path","required":true,"schema":{"description":"The unique identifier for a certificate_pack.","type":"string","example":"3822ff90-ea29-44df-9e55-21300bb9419b","readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_certificate_pack_identifier"},"index$":0},{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_identifier"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let tls_certificates_and_hostnames_delete_advanced_certificate_pack_ref01_data = Object.values(setup.data.existing.tls_certificates_and_hostnames_delete_advanced_certificate_pack)[0] as any

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/tls_certificates_and_hostnames_delete_advanced_certificate_pack/TlsCertificatesAndHostnamesDeleteAdvancedCertificatePackTestData.json')

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
    ['tls_certificates_and_hostnames_delete_advanced_certificate_pack01','tls_certificates_and_hostnames_delete_advanced_certificate_pack02','tls_certificates_and_hostnames_delete_advanced_certificate_pack03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_DELETE_ADVANCED_CERTIFICATE_PACK_ENTID': idmap,
    'CLOUDFLARE_SSL_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_SSL_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_SSL_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_DELETE_ADVANCED_CERTIFICATE_PACK_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_SSL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_DELETE_ADVANCED_CERTIFICATE_PACK_ENTID']
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
  
