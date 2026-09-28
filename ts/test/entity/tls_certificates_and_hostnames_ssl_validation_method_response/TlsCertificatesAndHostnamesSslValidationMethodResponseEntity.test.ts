

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


describe('TlsCertificatesAndHostnamesSslValidationMethodResponseEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_SSL_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_SSL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareSslSDK.test()
    const ent = testsdk.TlsCertificatesAndHostnamesSslValidationMethodResponse()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_SSL_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tls_certificates_and_hostnames_ssl_validation_method_response.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"validation_method":{"a":true,"h":"Validation Method","n":"validation_method","r":true,"sh":"Desired validation method.","t":"`$STRING`","key$":"validation_method","index$":0}},"name":"tls_certificates_and_hostnames_ssl_validation_method_response","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /zones/{zone_id}/ssl/verification/{certificate_pack_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"a77f8bd7-3b47-46b4-a6f1-75cf98109948","k":"param","n":"certificate_pack_id","or":"certificate_pack_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/zones/{zone_id}/ssl/verification/{certificate_pack_id}","q":{"exist":["certificate_pack_id","zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"ssl"},{"lit":"verification"},{"var":"certificate_pack_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"tls_certificates_and_hostnames_ssl_validation_method_response","name__orig":"tls_certificates_and_hostnames_ssl_validation_method_response","Name":"TlsCertificatesAndHostnamesSslValidationMethodResponse","name_":"tls_certificates_and_hostnames_ssl_validation_method_response","name-":"tls-certificates-and-hostnames-ssl-validation-method-response","NAME":"TLS_CERTIFICATES_AND_HOSTNAMES_SSL_VALIDATION_METHOD_RESPONSE","index$":51}, {"active":true,"entity":"tls_certificates_and_hostnames_ssl_validation_method_response","key$":"BasicTlsCertificatesAndHostnamesSslValidationMethodResponseFlow","kind":"basic","name":"BasicTlsCertificatesAndHostnamesSslValidationMethodResponseFlow","param":{},"step":[{"a":true,"d":{"zone_id":"zone01"},"i":{"ref":"tls_certificates_and_hostnames_ssl_validation_method_response_ref01","srcdatavar":"tls_certificates_and_hostnames_ssl_validation_method_response_ref01_data","suffix":"_up0","textfield":"validation_method"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-tls_certificates_and_hostnames_ssl_validation_method_response_ref01"}}],"v":[],"index$":0}]}, 'TlsCertificatesAndHostnamesSslValidationMethodResponse', {"PATCH /zones/{zone_id}/ssl/verification/{certificate_pack_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"validation_method":{"description":"Desired validation method.","type":"string","example":"txt","enum":["http","cname","txt","email"],"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_validation_method_definition","key$":"validation_method"}},"required":["validation_method"],"x-ref":"#/components/schemas/tls-certificates-and-hostnames_validation_method-3","index$":1}}}},"parameters":[{"name":"certificate_pack_id","in":"path","required":true,"schema":{"description":"Certificate Pack UUID.","type":"string","example":"a77f8bd7-3b47-46b4-a6f1-75cf98109948","x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_cert_pack_uuid"},"index$":0},{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_identifier"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let tls_certificates_and_hostnames_ssl_validation_method_response_ref01_data = Object.values(setup.data.existing.tls_certificates_and_hostnames_ssl_validation_method_response)[0] as any

    // UPDATE
    const tls_certificates_and_hostnames_ssl_validation_method_response_ref01_ent = client.TlsCertificatesAndHostnamesSslValidationMethodResponse()
    const tls_certificates_and_hostnames_ssl_validation_method_response_ref01_data_up0: any = {}
    tls_certificates_and_hostnames_ssl_validation_method_response_ref01_data_up0 ['zone_id'] = setup.idmap['zone_id']

    const tls_certificates_and_hostnames_ssl_validation_method_response_ref01_markdef_up0 = { name: 'validation_method', value: 'Mark01-tls_certificates_and_hostnames_ssl_validation_method_response_ref01_' + setup.now }
    ;(tls_certificates_and_hostnames_ssl_validation_method_response_ref01_data_up0 as any)[tls_certificates_and_hostnames_ssl_validation_method_response_ref01_markdef_up0.name] = tls_certificates_and_hostnames_ssl_validation_method_response_ref01_markdef_up0.value

    const tls_certificates_and_hostnames_ssl_validation_method_response_ref01_resdata_up0 = (await tls_certificates_and_hostnames_ssl_validation_method_response_ref01_ent.update(tls_certificates_and_hostnames_ssl_validation_method_response_ref01_data_up0)).data()
    assert(null != tls_certificates_and_hostnames_ssl_validation_method_response_ref01_resdata_up0)

    assert((tls_certificates_and_hostnames_ssl_validation_method_response_ref01_resdata_up0 as any)[tls_certificates_and_hostnames_ssl_validation_method_response_ref01_markdef_up0.name] === tls_certificates_and_hostnames_ssl_validation_method_response_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/tls_certificates_and_hostnames_ssl_validation_method_response/TlsCertificatesAndHostnamesSslValidationMethodResponseTestData.json')

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
    ['tls_certificates_and_hostnames_ssl_validation_method_response01','tls_certificates_and_hostnames_ssl_validation_method_response02','tls_certificates_and_hostnames_ssl_validation_method_response03','zone01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_SSL_VALIDATION_METHOD_RESPONSE_ENTID': idmap,
    'CLOUDFLARE_SSL_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_SSL_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_SSL_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_SSL_VALIDATION_METHOD_RESPONSE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_SSL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_SSL_VALIDATION_METHOD_RESPONSE_ENTID']
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
  
