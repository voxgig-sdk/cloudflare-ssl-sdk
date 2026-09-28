
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CloudflareSslSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = CloudflareSslSDK.test()
    equal(testsdk instanceof CloudflareSslSDK, true,
      'CloudflareSslSDK.test() must return a client synchronously')
  })

})
