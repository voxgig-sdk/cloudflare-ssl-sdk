

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


describe('TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_SSL_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_SSL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareSslSDK.test()
    const ent = testsdk.TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_SSL_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tls_certificates_and_hostnames_ct_alerting_subscription_response.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"emails":{"a":true,"h":"Emails","n":"emails","r":false,"sh":"Email addresses that receive CT alert notifications for the zone.","t":"`$ARRAY`","key$":"emails","index$":0},"enabled":{"a":true,"h":"Enabled","n":"enabled","r":true,"sh":"Whether CT alerting is enabled for the zone.","t":"`$BOOLEAN`","key$":"enabled","index$":1},"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$OBJECT`","key$":"result","index$":2}},"name":"tls_certificates_and_hostnames_ct_alerting_subscription_response","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /zones/{zone_id}/ct/alerting","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/zones/{zone_id}/ct/alerting","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"ct"},{"lit":"alerting"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /zones/{zone_id}/ct/alerting","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/zones/{zone_id}/ct/alerting","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"ct"},{"lit":"alerting"}],"t":{"req":{"emails":"`reqdata.email`","enabled":"`reqdata.enabled`"},"res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"tls_certificates_and_hostnames_ct_alerting_subscription_response","name__orig":"tls_certificates_and_hostnames_ct_alerting_subscription_response","Name":"TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse","name_":"tls_certificates_and_hostnames_ct_alerting_subscription_response","name-":"tls-certificates-and-hostnames-ct-alerting-subscription-response","NAME":"TLS_CERTIFICATES_AND_HOSTNAMES_CT_ALERTING_SUBSCRIPTION_RESPONSE","index$":27}, {"active":true,"entity":"tls_certificates_and_hostnames_ct_alerting_subscription_response","key$":"BasicTlsCertificatesAndHostnamesCtAlertingSubscriptionResponseFlow","kind":"basic","name":"BasicTlsCertificatesAndHostnamesCtAlertingSubscriptionResponseFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"tls_certificates_and_hostnames_ct_alerting_subscription_response_ref01","srcdatavar":"tls_certificates_and_hostnames_ct_alerting_subscription_response_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-tls_certificates_and_hostnames_ct_alerting_subscription_response_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"tls_certificates_and_hostnames_ct_alerting_subscription_response_ref01","srcdatavar":"tls_certificates_and_hostnames_ct_alerting_subscription_response_ref01_data","suffix":"_dt0"},"m":{"id":"tls_certificates_and_hostnames_ct_alerting_subscription_response01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-tls_certificates_and_hostnames_ct_alerting_subscription_response_ref01"}}],"index$":1}]}, 'TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse', {"GET /zones/{zone_id}/ct/alerting":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_identifier"},"index$":0}]},"PATCH /zones/{zone_id}/ct/alerting":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"description":"Request body for updating CT alerting subscription settings.","type":"object","properties":{"emails":{"description":"Email addresses that receive CT alert notifications for the zone. A maximum of 100 addresses may be configured. Each address must be a valid RFC 5322 email address and must not contain a comma.\n","type":"array","items":{"format":"email","type":"string"},"example":["security@example.com","admin@example.com"],"maxItems":100,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_ct_alerting_emails","key$":"emails"},"enabled":{"description":"Whether CT alerting is enabled for the zone.","type":"boolean","example":true,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_ct_alerting_enabled","key$":"enabled"}},"additionalProperties":false,"required":["enabled"],"x-ref":"#/components/schemas/tls-certificates-and-hostnames_ct_alerting_subscription_update","index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let tls_certificates_and_hostnames_ct_alerting_subscription_response_ref01_data = Object.values(setup.data.existing.tls_certificates_and_hostnames_ct_alerting_subscription_response)[0] as any

    // UPDATE
    const tls_certificates_and_hostnames_ct_alerting_subscription_response_ref01_ent = client.TlsCertificatesAndHostnamesCtAlertingSubscriptionResponse()
    const tls_certificates_and_hostnames_ct_alerting_subscription_response_ref01_data_up0: any = {}

    const tls_certificates_and_hostnames_ct_alerting_subscription_response_ref01_resdata_up0 = (await tls_certificates_and_hostnames_ct_alerting_subscription_response_ref01_ent.update(tls_certificates_and_hostnames_ct_alerting_subscription_response_ref01_data_up0)).data()
    assert(null != tls_certificates_and_hostnames_ct_alerting_subscription_response_ref01_resdata_up0)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/tls_certificates_and_hostnames_ct_alerting_subscription_response/TlsCertificatesAndHostnamesCtAlertingSubscriptionResponseTestData.json')

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
    ['tls_certificates_and_hostnames_ct_alerting_subscription_response01','tls_certificates_and_hostnames_ct_alerting_subscription_response02','tls_certificates_and_hostnames_ct_alerting_subscription_response03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CT_ALERTING_SUBSCRIPTION_RESPONSE_ENTID': idmap,
    'CLOUDFLARE_SSL_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_SSL_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_SSL_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CT_ALERTING_SUBSCRIPTION_RESPONSE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_SSL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CT_ALERTING_SUBSCRIPTION_RESPONSE_ENTID']
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
  
