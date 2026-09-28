

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


describe('TlsCertificatesAndHostnamesCertificateRevokeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_SSL_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_SSL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareSslSDK.test()
    const ent = testsdk.TlsCertificatesAndHostnamesCertificateRevoke()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_SSL_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tls_certificates_and_hostnames_certificate_revoke.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"tls_certificates_and_hostnames_certificate_revoke","op":{"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /certificates/{certificate_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"328578533902268680212849205732770752308931942346","k":"param","n":"certificate_id","or":"certificate_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/certificates/{certificate_id}","q":{"exist":["certificate_id"]},"r":{},"s":[{"lit":"certificates"},{"var":"certificate_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"tls_certificates_and_hostnames_certificate_revoke","name__orig":"tls_certificates_and_hostnames_certificate_revoke","Name":"TlsCertificatesAndHostnamesCertificateRevoke","name_":"tls_certificates_and_hostnames_certificate_revoke","name-":"tls-certificates-and-hostnames-certificate-revoke","NAME":"TLS_CERTIFICATES_AND_HOSTNAMES_CERTIFICATE_REVOKE","index$":24}, {"active":true,"entity":"tls_certificates_and_hostnames_certificate_revoke","key$":"BasicTlsCertificatesAndHostnamesCertificateRevokeFlow","kind":"basic","name":"BasicTlsCertificatesAndHostnamesCertificateRevokeFlow","param":{},"step":[]}, 'TlsCertificatesAndHostnamesCertificateRevoke', {"DELETE /certificates/{certificate_id}":{"protocol":"http","parameters":[{"name":"certificate_id","in":"path","required":true,"schema":{"description":"The x509 serial number of the Origin CA certificate.","type":"string","example":"328578533902268680212849205732770752308931942346","readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_origin_ca_certificate_identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let tls_certificates_and_hostnames_certificate_revoke_ref01_data = Object.values(setup.data.existing.tls_certificates_and_hostnames_certificate_revoke)[0] as any

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/tls_certificates_and_hostnames_certificate_revoke/TlsCertificatesAndHostnamesCertificateRevokeTestData.json')

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
    ['tls_certificates_and_hostnames_certificate_revoke01','tls_certificates_and_hostnames_certificate_revoke02','tls_certificates_and_hostnames_certificate_revoke03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CERTIFICATE_REVOKE_ENTID': idmap,
    'CLOUDFLARE_SSL_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_SSL_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_SSL_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CERTIFICATE_REVOKE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_SSL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CERTIFICATE_REVOKE_ENTID']
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
  
