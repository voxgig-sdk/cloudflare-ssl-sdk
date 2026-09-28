
import { inspect } from 'node:util'

import { CloudflareSslEntityBase } from '../CloudflareSslEntityBase'

import type {
  CloudflareSslSDK,
} from '../CloudflareSslSDK'


import type {
  Operation,
  Context,
  Control,
} from '../types'

import type {
  TlsCertificatesAndHostnamesCertificateResponseSingle5,
  TlsCertificatesAndHostnamesCertificateResponseSingle5LoadMatch,
  TlsCertificatesAndHostnamesCertificateResponseSingle5RemoveMatch,
} from '../CloudflareSslTypes'

class TlsCertificatesAndHostnamesCertificateResponseSingle5Entity extends CloudflareSslEntityBase<TlsCertificatesAndHostnamesCertificateResponseSingle5> {

  constructor(client: CloudflareSslSDK, entopts: any) {
    super(client, entopts)
    this.name = 'tls_certificates_and_hostnames_certificate_response_single_5'
    this.name_ = 'tls_certificates_and_hostnames_certificate_response_single_5'
    this.Name = 'TlsCertificatesAndHostnamesCertificateResponseSingle5'
  }


  make(this: TlsCertificatesAndHostnamesCertificateResponseSingle5Entity) {
    return new TlsCertificatesAndHostnamesCertificateResponseSingle5Entity(this._client, this.entopts())
  }



  async load(this: any, reqmatch?: TlsCertificatesAndHostnamesCertificateResponseSingle5LoadMatch, ctrl?: Control): Promise<TlsCertificatesAndHostnamesCertificateResponseSingle5Entity> {

    const utility = this._utility

    const {
      makeContext,
      done,
      // The registry name is `makeError`; `error` is the local alias.
      makeError: error,
      featureHook,
      makePoint,
      makeRequest,
      makeResponse,
      makeResult,
      makeSpec,
    } = utility

    let fres: Promise<any> | undefined = undefined

    let ctx: Context = makeContext({
      opname: 'load',
      ctrl,
      match: this._match,
      data: this._data,
      reqmatch
    }, this._entctx)

    try {

      fres = featureHook(ctx, 'PrePoint')
      if (fres instanceof Promise) { await fres }

      ctx.out.point = makePoint(ctx)
      if (ctx.out.point instanceof Error) {
        return error(ctx, ctx.out.point)
      }



      fres = featureHook(ctx, 'PreSpec')
      if (fres instanceof Promise) { await fres }

      ctx.out.spec = makeSpec(ctx)
      if (ctx.out.spec instanceof Error) {
        return error(ctx, ctx.out.spec)
      }



      fres = featureHook(ctx, 'PreRequest')
      if (fres instanceof Promise) { await fres }

      ctx.out.request = await makeRequest(ctx)
      if (ctx.out.request instanceof Error) {
        return error(ctx, ctx.out.request)
      }



      fres = featureHook(ctx, 'PreResponse')
      if (fres instanceof Promise) { await fres }

      ctx.out.response = await makeResponse(ctx)
      if (ctx.out.response instanceof Error) {
        return error(ctx, ctx.out.response)
      }



      fres = featureHook(ctx, 'PreResult')
      if (fres instanceof Promise) { await fres }

      ctx.out.result = await makeResult(ctx)
      if (ctx.out.result instanceof Error) {
        return error(ctx, ctx.out.result)
      }



      fres = featureHook(ctx, 'PreDone')
      if (fres instanceof Promise) { await fres }

      if (null != ctx.result) {
        if (null != ctx.result.resmatch) {
          this._match = ctx.result.resmatch
        }

        if (null != ctx.result.resdata) {
          this._data = ctx.result.resdata
        }
      }

      const out = done(ctx)

      return (ctx.result && ctx.result.ok) ? this : out
    }
    catch (err: any) {

      fres = featureHook(ctx, 'PreUnexpected')
      if (fres instanceof Promise) { await fres }

      err = this._unexpected(ctx, err)

      if (err) {
        throw err
      }
      else {
        // Off-happy-path (throw disabled): typed as any so the method's
        // Promise<TlsCertificatesAndHostnamesCertificateResponseSingle5> return stays clean under strict null checks.
        return undefined as any
      }
    }
  }






  async remove(
    this: any, reqmatch?: TlsCertificatesAndHostnamesCertificateResponseSingle5RemoveMatch, ctrl?: Control,
  ): Promise<TlsCertificatesAndHostnamesCertificateResponseSingle5Entity> {

    const utility = this._utility

    const {
      makeContext,
      done,
      // The registry name is `makeError`; `error` is the local alias.
      makeError: error,
      featureHook,
      makePoint,
      makeRequest,
      makeResponse,
      makeResult,
      makeSpec,
    } = utility

    let fres: Promise<any> | undefined = undefined

    let ctx: Context = makeContext({
      opname: 'remove',
      ctrl,
      match: this._match,
      data: this._data,
      reqmatch
    }, this._entctx)

    try {


      fres = featureHook(ctx, 'PrePoint')
      if (fres instanceof Promise) { await fres }

      ctx.out.point = makePoint(ctx)
      if (ctx.out.point instanceof Error) {
        return error(ctx, ctx.out.point)
      }



      fres = featureHook(ctx, 'PreSpec')
      if (fres instanceof Promise) { await fres }

      ctx.out.spec = makeSpec(ctx)
      if (ctx.out.spec instanceof Error) {
        return error(ctx, ctx.out.spec)
      }



      fres = featureHook(ctx, 'PreRequest')
      if (fres instanceof Promise) { await fres }

      ctx.out.request = await makeRequest(ctx)
      if (ctx.out.request instanceof Error) {
        return error(ctx, ctx.out.request)
      }



      fres = featureHook(ctx, 'PreResponse')
      if (fres instanceof Promise) { await fres }

      ctx.out.response = await makeResponse(ctx)
      if (ctx.out.response instanceof Error) {
        return error(ctx, ctx.out.response)
      }



      fres = featureHook(ctx, 'PreResult')
      if (fres instanceof Promise) { await fres }

      ctx.out.result = await makeResult(ctx)
      if (ctx.out.result instanceof Error) {
        return error(ctx, ctx.out.result)
      }



      fres = featureHook(ctx, 'PreDone')
      if (fres instanceof Promise) { await fres }

      if (null != ctx.result) {
        if (null != ctx.result.resmatch) {
          this._match = ctx.result.resmatch
        }

        if (null != ctx.result.resdata) {
          this._data = ctx.result.resdata
        }
      }

      const out = done(ctx)

      if (ctx.result && ctx.result.ok) {
        this.markDeleted()
        return this
      }

      return out
    }
    catch (err: any) {

      fres = featureHook(ctx, 'PreUnexpected')
      if (fres instanceof Promise) { await fres }

      err = this._unexpected(ctx, err)

      if (err) {
        throw err
      }
      else {
        // Off-happy-path (throw disabled): typed as any so the method's
        // Promise<TlsCertificatesAndHostnamesCertificateResponseSingle5Entity> return stays clean under strict null checks.
        return undefined as any
      }
    }
  }


}


export {
  TlsCertificatesAndHostnamesCertificateResponseSingle5Entity
}
