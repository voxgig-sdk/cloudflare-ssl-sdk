

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


describe('TlsCertificatesAndHostnamesKeylessResponseSingleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_SSL_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_SSL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareSslSDK.test()
    const ent = testsdk.TlsCertificatesAndHostnamesKeylessResponseSingle()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_SSL_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tls_certificates_and_hostnames_keyless_response_single.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"bundle_method":{"a":true,"h":"Bundle Method","n":"bundle_method","r":false,"sh":"A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores.","t":"`$STRING`","key$":"bundle_method","index$":0},"certificate":{"a":true,"h":"Certificate","n":"certificate","r":true,"sh":"The zone's SSL certificate or SSL certificate and intermediate(s).","t":"`$STRING`","key$":"certificate","index$":1},"enabled":{"a":true,"de":true,"h":"Enabled","n":"enabled","r":false,"sh":"Whether or not the Keyless SSL is on or off.","t":"`$BOOLEAN`","key$":"enabled","index$":2},"host":{"a":true,"fo":"hostname","h":"Host","n":"host","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The keyless SSL name.","t":"`$STRING`","key$":"host","index$":3},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The keyless SSL name.","t":"`$STRING`","key$":"name","index$":4},"port":{"a":true,"h":"Port","n":"port","op":{"update":{"req":false,"type":"`$NUMBER`"}},"r":true,"sh":"The keyless SSL port used to communicate between Cloudflare and the client's Keyless SSL server.","t":"`$NUMBER`","key$":"port","index$":5},"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$OBJECT`","key$":"result","index$":6},"tunnel":{"a":true,"h":"Tunnel","n":"tunnel","r":true,"sh":"Configuration for using Keyless SSL through a Cloudflare Tunnel.","t":"`$OBJECT`","key$":"tunnel","index$":7}},"name":"tls_certificates_and_hostnames_keyless_response_single","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /zones/{zone_id}/keyless_certificates","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/zones/{zone_id}/keyless_certificates","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"keyless_certificates"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /zones/{zone_id}/keyless_certificates/{keyless_certificate_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"4d2844d2ce78891c34d0b6c0535a291e","k":"param","n":"keyless_certificate_id","or":"keyless_certificate_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/zones/{zone_id}/keyless_certificates/{keyless_certificate_id}","q":{"exist":["keyless_certificate_id","zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"keyless_certificates"},{"var":"keyless_certificate_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /zones/{zone_id}/keyless_certificates/{keyless_certificate_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"4d2844d2ce78891c34d0b6c0535a291e","k":"param","n":"keyless_certificate_id","or":"keyless_certificate_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/zones/{zone_id}/keyless_certificates/{keyless_certificate_id}","q":{"exist":["keyless_certificate_id","zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"keyless_certificates"},{"var":"keyless_certificate_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"tls_certificates_and_hostnames_keyless_response_single","name__orig":"tls_certificates_and_hostnames_keyless_response_single","Name":"TlsCertificatesAndHostnamesKeylessResponseSingle","name_":"tls_certificates_and_hostnames_keyless_response_single","name-":"tls-certificates-and-hostnames-keyless-response-single","NAME":"TLS_CERTIFICATES_AND_HOSTNAMES_KEYLESS_RESPONSE_SINGLE","index$":48}, {"active":true,"entity":"tls_certificates_and_hostnames_keyless_response_single","key$":"BasicTlsCertificatesAndHostnamesKeylessResponseSingleFlow","kind":"basic","name":"BasicTlsCertificatesAndHostnamesKeylessResponseSingleFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"tls_certificates_and_hostnames_keyless_response_single_ref01"},"m":{"zone_id":"zone01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"zone_id":"zone01"},"i":{"ref":"tls_certificates_and_hostnames_keyless_response_single_ref01","srcdatavar":"tls_certificates_and_hostnames_keyless_response_single_ref01_data","suffix":"_up0","textfield":"bundle_method"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-tls_certificates_and_hostnames_keyless_response_single_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"tls_certificates_and_hostnames_keyless_response_single_ref01","srcdatavar":"tls_certificates_and_hostnames_keyless_response_single_ref01_data","suffix":"_dt0"},"m":{"id":"tls_certificates_and_hostnames_keyless_response_single01","zone_id":"zone01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-tls_certificates_and_hostnames_keyless_response_single_ref01"}}],"index$":2}]}, 'TlsCertificatesAndHostnamesKeylessResponseSingle', {"POST /zones/{zone_id}/keyless_certificates":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"bundle_method":{"description":"A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest intermediates. And the force bundle verifies the chain, but does not otherwise modify it.","type":"string","example":"ubiquitous","default":"ubiquitous","enum":["ubiquitous","optimal","force"],"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_bundle_method","key$":"bundle_method"},"certificate":{"description":"The zone's SSL certificate or SSL certificate and intermediate(s).","type":"string","example":"-----BEGIN CERTIFICATE-----\nMIIDtTCCAp2gAwIBAgIJAM15n7fdxhRtMA0GCSqGSIb3DQEBBQUAMEUxCzAJBgNV\nBAYTAlVTMRMwEQYDVQQIEwpTb21lLVN0YXRlMSEwHwYDVQQKExhJbnRlcm5ldCBX\naWRnaXRzIFB0eSBMdGQwHhcNMTQwMzExMTkyMTU5WhcNMTQwNDEwMTkyMTU5WjBF\nMQswCQYDVQQGEwJVUzETMBEGA1UECBMKU29tZS1TdGF0ZTEhMB8GA1UEChMYSW50\nZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIB\nCgKCAQEAvq3sKsHpeduJHimOK+fvQdKsI8z8A05MZyyLp2/R/GE8FjNv+hkVY1WQ\nLIyTNNQH7CJecE1nbTfo8Y56S7x/rhxC6/DJ8MIulapFPnorq46KU6yRxiM0MQ3N\nnTJHlHA2ozZta6YBBfVfhHWl1F0IfNbXCLKvGwWWMbCx43OfW6KTkbRnE6gFWKuO\nfSO5h2u5TaWVuSIzBvYs7Vza6m+gtYAvKAJV2nSZ+eSEFPDo29corOy8+huEOUL8\n5FAw4BFPsr1TlrlGPFitduQUHGrSL7skk1ESGza0to3bOtrodKei2s9bk5MXm7lZ\nqI+WZJX4Zu9+mzZhc9pCVi8r/qlXuQIDAQABo4GnMIGkMB0GA1UdDgQWBBRvavf+\nsWM4IwKiH9X9w1vl6nUVRDB1BgNVHSMEbjBsgBRvavf+sWM4IwKiH9X9w1vl6nUV\nRKFJpEcwRTELMAkGA1UEBhMCVVMxEzARBgNVBAgTClNvbWUtU3RhdGUxITAfBgNV\nBAoTGEludGVybmV0IFdpZGdpdHMgUHR5IEx0ZIIJAM15n7fdxhRtMAwGA1UdEwQF\nMAMBAf8wDQYJKoZIhvcNAQEFBQADggEBABY2ZzBaW0dMsAAT7tPJzrVWVzQx6KU4\nUEBLudIlWPlkAwTnINCWR/8eNjCCmGA4heUdHmazdpPa8RzwOmc0NT1NQqzSyktt\nvTqb4iHD7+8f9MqJ9/FssCfTtqr/Qst/hGH4Wmdf1EJ/6FqYAAb5iRlPgshFZxU8\nuXtA8hWn6fK6eISD9HBdcAFToUvKNZ1BIDPvh9f95Ine8ar6yGd56TUNrHR8eHBs\nESxz5ddVR/oWRysNJ+aGAyYqHS8S/ttmC7r4XCAHqXptkHPCGRqkAhsterYhd4I8\n/cBzejUobNCjjHFbtkAL/SjxZOLW+pNkZwfeYdM8iPkD54Uua1v2tdw=\n-----END CERTIFICATE-----","x-ref":"#/components/schemas/tls-certificates-and-hostnames_certificate-2","key$":"certificate"},"host":{"description":"The keyless SSL name.","type":"string","format":"hostname","example":"example.com","maxLength":253,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_host","key$":"host"},"name":{"description":"The keyless SSL name.","type":"string","example":"example.com Keyless SSL","maxLength":180,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_name_write","key$":"name"},"port":{"description":"The keyless SSL port used to communicate between Cloudflare and the client's Keyless SSL server.","type":"number","example":24008,"default":24008,"maxLength":65535,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_port","key$":"port"},"tunnel":{"description":"Configuration for using Keyless SSL through a Cloudflare Tunnel.","type":"object","properties":{"private_ip":{"description":"Private IP of the Key Server Host.","example":"10.0.0.1","type":"string","x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_keyless_private_ip"},"vnet_id":{"description":"Cloudflare Tunnel Virtual Network ID.","example":"7365377a-85a4-4390-9480-531ef7dc7a3c","type":"string","x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_keyless_vnet_id"}},"required":["private_ip","vnet_id"],"x-ref":"#/components/schemas/tls-certificates-and-hostnames_keyless_tunnel","key$":"tunnel"}},"required":["host","port","certificate"],"index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_identifier"},"index$":0}]},"GET /zones/{zone_id}/keyless_certificates/{keyless_certificate_id}":{"protocol":"http","parameters":[{"name":"keyless_certificate_id","in":"path","required":true,"schema":{"description":"Keyless certificate identifier tag.","type":"string","example":"4d2844d2ce78891c34d0b6c0535a291e","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_keyless_certificate_identifier"},"index$":0},{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_identifier"},"index$":1}]},"PATCH /zones/{zone_id}/keyless_certificates/{keyless_certificate_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"enabled":{"description":"Whether or not the Keyless SSL is on or off.","type":"boolean","example":false,"deprecated":true,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_enabled_write","key$":"enabled"},"host":{"description":"The keyless SSL name.","type":"string","format":"hostname","example":"example.com","maxLength":253,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_host","key$":"host"},"name":{"description":"The keyless SSL name.","type":"string","example":"example.com Keyless SSL","maxLength":180,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_name_write","key$":"name"},"port":{"description":"The keyless SSL port used to communicate between Cloudflare and the client's Keyless SSL server.","type":"number","example":24008,"default":24008,"maxLength":65535,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_port","key$":"port"},"tunnel":{"description":"Configuration for using Keyless SSL through a Cloudflare Tunnel.","type":"object","properties":{"private_ip":{"description":"Private IP of the Key Server Host.","example":"10.0.0.1","type":"string","x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_keyless_private_ip"},"vnet_id":{"description":"Cloudflare Tunnel Virtual Network ID.","example":"7365377a-85a4-4390-9480-531ef7dc7a3c","type":"string","x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_keyless_vnet_id"}},"required":["private_ip","vnet_id"],"x-ref":"#/components/schemas/tls-certificates-and-hostnames_keyless_tunnel","key$":"tunnel"}},"index$":1}}}},"parameters":[{"name":"keyless_certificate_id","in":"path","required":true,"schema":{"description":"Keyless certificate identifier tag.","type":"string","example":"4d2844d2ce78891c34d0b6c0535a291e","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_keyless_certificate_identifier"},"index$":0},{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/tls-certificates-and-hostnames_identifier"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const tls_certificates_and_hostnames_keyless_response_single_ref01_ent = client.TlsCertificatesAndHostnamesKeylessResponseSingle()
    let tls_certificates_and_hostnames_keyless_response_single_ref01_data = setup.data.new.tls_certificates_and_hostnames_keyless_response_single['tls_certificates_and_hostnames_keyless_response_single_ref01']
    tls_certificates_and_hostnames_keyless_response_single_ref01_data['zone_id'] = setup.idmap['zone01']

    tls_certificates_and_hostnames_keyless_response_single_ref01_data = (await tls_certificates_and_hostnames_keyless_response_single_ref01_ent.create(tls_certificates_and_hostnames_keyless_response_single_ref01_data)).data()
    assert(null != tls_certificates_and_hostnames_keyless_response_single_ref01_data)


    // UPDATE
    const tls_certificates_and_hostnames_keyless_response_single_ref01_data_up0: any = {}
    tls_certificates_and_hostnames_keyless_response_single_ref01_data_up0 ['zone_id'] = setup.idmap['zone_id']

    const tls_certificates_and_hostnames_keyless_response_single_ref01_markdef_up0 = { name: 'bundle_method', value: 'Mark01-tls_certificates_and_hostnames_keyless_response_single_ref01_' + setup.now }
    ;(tls_certificates_and_hostnames_keyless_response_single_ref01_data_up0 as any)[tls_certificates_and_hostnames_keyless_response_single_ref01_markdef_up0.name] = tls_certificates_and_hostnames_keyless_response_single_ref01_markdef_up0.value

    const tls_certificates_and_hostnames_keyless_response_single_ref01_resdata_up0 = (await tls_certificates_and_hostnames_keyless_response_single_ref01_ent.update(tls_certificates_and_hostnames_keyless_response_single_ref01_data_up0)).data()
    assert(null != tls_certificates_and_hostnames_keyless_response_single_ref01_resdata_up0)

    assert((tls_certificates_and_hostnames_keyless_response_single_ref01_resdata_up0 as any)[tls_certificates_and_hostnames_keyless_response_single_ref01_markdef_up0.name] === tls_certificates_and_hostnames_keyless_response_single_ref01_markdef_up0.value)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/tls_certificates_and_hostnames_keyless_response_single/TlsCertificatesAndHostnamesKeylessResponseSingleTestData.json')

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
    ['tls_certificates_and_hostnames_keyless_response_single01','tls_certificates_and_hostnames_keyless_response_single02','tls_certificates_and_hostnames_keyless_response_single03','zone01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_KEYLESS_RESPONSE_SINGLE_ENTID': idmap,
    'CLOUDFLARE_SSL_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_SSL_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_SSL_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_KEYLESS_RESPONSE_SINGLE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_SSL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_KEYLESS_RESPONSE_SINGLE_ENTID']
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
  
