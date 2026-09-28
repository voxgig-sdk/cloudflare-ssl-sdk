package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/cloudflare-ssl-sdk/go/utility/struct"
)

type CloudflareSslSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewCloudflareSslSDK(options map[string]any) *CloudflareSslSDK {
	sdk := &CloudflareSslSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *CloudflareSslSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *CloudflareSslSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *CloudflareSslSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *CloudflareSslSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *CloudflareSslSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *CloudflareSslSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *CloudflareSslSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("CloudflareSslSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *CloudflareSslSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

func (sdk *CloudflareSslSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("CloudflareSslSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// CacheApiResponseSingleId returns a CacheApiResponseSingleId entity bound to this client.
// Idiomatic usage: client.CacheApiResponseSingleId(nil).List(nil, nil) or
// client.CacheApiResponseSingleId(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) CacheApiResponseSingleId(data map[string]any) CloudflareSslEntity {
	return NewCacheApiResponseSingleIdEntityFunc(sdk, data)
}


// CacheAutoOriginTlsKex returns a CacheAutoOriginTlsKex entity bound to this client.
// Idiomatic usage: client.CacheAutoOriginTlsKex(nil).List(nil, nil) or
// client.CacheAutoOriginTlsKex(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) CacheAutoOriginTlsKex(data map[string]any) CloudflareSslEntity {
	return NewCacheAutoOriginTlsKexEntityFunc(sdk, data)
}


// CustomHostname returns a CustomHostname entity bound to this client.
// Idiomatic usage: client.CustomHostname(nil).List(nil, nil) or
// client.CustomHostname(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) CustomHostname(data map[string]any) CloudflareSslEntity {
	return NewCustomHostnameEntityFunc(sdk, data)
}


// CustomHostnameForAZone returns a CustomHostnameForAZone entity bound to this client.
// Idiomatic usage: client.CustomHostnameForAZone(nil).List(nil, nil) or
// client.CustomHostnameForAZone(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) CustomHostnameForAZone(data map[string]any) CloudflareSslEntity {
	return NewCustomHostnameForAZoneEntityFunc(sdk, data)
}


// OriginTl returns a OriginTl entity bound to this client.
// Idiomatic usage: client.OriginTl(nil).List(nil, nil) or
// client.OriginTl(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) OriginTl(data map[string]any) CloudflareSslEntity {
	return NewOriginTlEntityFunc(sdk, data)
}


// Recommendation returns a Recommendation entity bound to this client.
// Idiomatic usage: client.Recommendation(nil).List(nil, nil) or
// client.Recommendation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) Recommendation(data map[string]any) CloudflareSslEntity {
	return NewRecommendationEntityFunc(sdk, data)
}


// SslAutomaticMode returns a SslAutomaticMode entity bound to this client.
// Idiomatic usage: client.SslAutomaticMode(nil).List(nil, nil) or
// client.SslAutomaticMode(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) SslAutomaticMode(data map[string]any) CloudflareSslEntity {
	return NewSslAutomaticModeEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesAdvancedCertificatePackResponse returns a TlsCertificatesAndHostnamesAdvancedCertificatePackResponse entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesAdvancedCertificatePackResponse(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesAdvancedCertificatePackResponse(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesAdvancedCertificatePackResponse(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesAdvancedCertificatePackResponseEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesAssociationResponseCollection returns a TlsCertificatesAndHostnamesAssociationResponseCollection entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesAssociationResponseCollection(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesAssociationResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesAssociationResponseCollection(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesAssociationResponseCollectionEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesCertificateAnalyze returns a TlsCertificatesAndHostnamesCertificateAnalyze entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesCertificateAnalyze(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesCertificateAnalyze(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesCertificateAnalyze(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesCertificateAnalyzeEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesCertificatePackQuota returns a TlsCertificatesAndHostnamesCertificatePackQuota entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesCertificatePackQuota(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesCertificatePackQuota(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesCertificatePackQuota(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesCertificatePackQuotaEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesCertificatePackResponseCollection returns a TlsCertificatesAndHostnamesCertificatePackResponseCollection entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesCertificatePackResponseCollection(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesCertificatePackResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesCertificatePackResponseCollection(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesCertificatePackResponseCollectionEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesCertificatePackResponseSingle returns a TlsCertificatesAndHostnamesCertificatePackResponseSingle entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesCertificatePackResponseSingle(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesCertificatePackResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesCertificatePackResponseSingle(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesCertificatePackResponseSingleEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesCertificateResponseCollection returns a TlsCertificatesAndHostnamesCertificateResponseCollection entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesCertificateResponseCollection(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesCertificateResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesCertificateResponseCollection(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesCertificateResponseCollectionEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesCertificateResponseCollection3 returns a TlsCertificatesAndHostnamesCertificateResponseCollection3 entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesCertificateResponseCollection3(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesCertificateResponseCollection3(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesCertificateResponseCollection3(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesCertificateResponseCollection3EntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesCertificateResponseCollection4 returns a TlsCertificatesAndHostnamesCertificateResponseCollection4 entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesCertificateResponseCollection4(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesCertificateResponseCollection4(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesCertificateResponseCollection4(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesCertificateResponseCollection4EntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesCertificateResponseCollection5 returns a TlsCertificatesAndHostnamesCertificateResponseCollection5 entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesCertificateResponseCollection5(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesCertificateResponseCollection5(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesCertificateResponseCollection5(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesCertificateResponseCollection5EntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesCertificateResponseIdOnly returns a TlsCertificatesAndHostnamesCertificateResponseIdOnly entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesCertificateResponseIdOnly(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesCertificateResponseIdOnly(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesCertificateResponseIdOnly(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesCertificateResponseIdOnlyEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesCertificateResponseSingle returns a TlsCertificatesAndHostnamesCertificateResponseSingle entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesCertificateResponseSingle(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesCertificateResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesCertificateResponseSingle(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesCertificateResponseSingleEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesCertificateResponseSingle2 returns a TlsCertificatesAndHostnamesCertificateResponseSingle2 entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesCertificateResponseSingle2(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesCertificateResponseSingle2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesCertificateResponseSingle2(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesCertificateResponseSingle2EntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesCertificateResponseSingle3 returns a TlsCertificatesAndHostnamesCertificateResponseSingle3 entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesCertificateResponseSingle3(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesCertificateResponseSingle3(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesCertificateResponseSingle3(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesCertificateResponseSingle3EntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesCertificateResponseSingle4 returns a TlsCertificatesAndHostnamesCertificateResponseSingle4 entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesCertificateResponseSingle4(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesCertificateResponseSingle4(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesCertificateResponseSingle4(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesCertificateResponseSingle4EntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesCertificateResponseSingle5 returns a TlsCertificatesAndHostnamesCertificateResponseSingle5 entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesCertificateResponseSingle5(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesCertificateResponseSingle5(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesCertificateResponseSingle5(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesCertificateResponseSingle5EntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesCertificateResponseSinglePost returns a TlsCertificatesAndHostnamesCertificateResponseSinglePost entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesCertificateResponseSinglePost(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesCertificateResponseSinglePost(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesCertificateResponseSinglePost(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesCertificateResponseSinglePostEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesCertificateRevoke returns a TlsCertificatesAndHostnamesCertificateRevoke entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesCertificateRevoke(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesCertificateRevoke(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesCertificateRevoke(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesCertificateRevokeEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesClientCertificateResponse returns a TlsCertificatesAndHostnamesClientCertificateResponse entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesClientCertificateResponse(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesClientCertificateResponse(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesClientCertificateResponse(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesClientCertificateResponseEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesClientCertificateResponseSingle returns a TlsCertificatesAndHostnamesClientCertificateResponseSingle entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesClientCertificateResponseSingle(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesClientCertificateResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesClientCertificateResponseSingle(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesClientCertificateResponseSingleEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesCustomCsrResponseCollection returns a TlsCertificatesAndHostnamesCustomCsrResponseCollection entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesCustomCsrResponseCollection(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesCustomCsrResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesCustomCsrResponseCollection(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesCustomCsrResponseCollectionEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesCustomCsrResponseCollection2 returns a TlsCertificatesAndHostnamesCustomCsrResponseCollection2 entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesCustomCsrResponseCollection2(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesCustomCsrResponseCollection2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesCustomCsrResponseCollection2(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesCustomCsrResponseCollection2EntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesCustomCsrResponseIdOnly returns a TlsCertificatesAndHostnamesCustomCsrResponseIdOnly entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesCustomCsrResponseIdOnly(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesCustomCsrResponseIdOnly(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesCustomCsrResponseIdOnly(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesCustomCsrResponseIdOnlyEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesCustomCsrResponseSingle returns a TlsCertificatesAndHostnamesCustomCsrResponseSingle entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesCustomCsrResponseSingle(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesCustomCsrResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesCustomCsrResponseSingle(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesCustomCsrResponseSingleEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesCustomCsrResponseSingle2 returns a TlsCertificatesAndHostnamesCustomCsrResponseSingle2 entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesCustomCsrResponseSingle2(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesCustomCsrResponseSingle2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesCustomCsrResponseSingle2(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesCustomCsrResponseSingle2EntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesCustomHostnameQuota returns a TlsCertificatesAndHostnamesCustomHostnameQuota entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesCustomHostnameQuota(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesCustomHostnameQuota(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesCustomHostnameQuota(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesCustomHostnameQuotaEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesCustomHostnameResponseCollection returns a TlsCertificatesAndHostnamesCustomHostnameResponseCollection entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesCustomHostnameResponseCollection(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesCustomHostnameResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesCustomHostnameResponseCollection(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesCustomHostnameResponseCollectionEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesCustomHostnameResponseSingle returns a TlsCertificatesAndHostnamesCustomHostnameResponseSingle entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesCustomHostnameResponseSingle(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesCustomHostnameResponseSingleEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesCustomTrustStoreResponse returns a TlsCertificatesAndHostnamesCustomTrustStoreResponse entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesCustomTrustStoreResponse(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesCustomTrustStoreResponse(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesCustomTrustStoreResponse(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesCustomTrustStoreResponseEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly returns a TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnlyEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle returns a TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesCustomTrustStoreResponseSingleEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack returns a TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesDeleteAdvancedCertificatePackEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesEnabled returns a TlsCertificatesAndHostnamesEnabled entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesEnabled(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesEnabled(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesEnabled(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesEnabledEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesFallbackOrigin returns a TlsCertificatesAndHostnamesFallbackOrigin entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesFallbackOrigin(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesFallbackOrigin(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesFallbackOrigin(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesFallbackOriginEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesHostnameAopResponseCollection returns a TlsCertificatesAndHostnamesHostnameAopResponseCollection entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesHostnameAopResponseCollection(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesHostnameAopResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesHostnameAopResponseCollection(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesHostnameAopResponseCollectionEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesHostnameAopSingle returns a TlsCertificatesAndHostnamesHostnameAopSingle entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesHostnameAopSingle(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesHostnameAopSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesHostnameAopSingle(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesHostnameAopSingleEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesHostnameAssocResponseCollection returns a TlsCertificatesAndHostnamesHostnameAssocResponseCollection entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesHostnameAssocResponseCollection(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesHostnameAssocResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesHostnameAssocResponseCollection(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesHostnameAssocResponseCollectionEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesKeylessResponseCollection returns a TlsCertificatesAndHostnamesKeylessResponseCollection entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesKeylessResponseCollection(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesKeylessResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesKeylessResponseCollection(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesKeylessResponseCollectionEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesKeylessResponseSingle returns a TlsCertificatesAndHostnamesKeylessResponseSingle entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesKeylessResponseSingle(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesKeylessResponseSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesKeylessResponseSingle(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesKeylessResponseSingleEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesKeylessResponseSingleId returns a TlsCertificatesAndHostnamesKeylessResponseSingleId entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesKeylessResponseSingleId(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesKeylessResponseSingleId(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesKeylessResponseSingleId(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesKeylessResponseSingleIdEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesPerHostnameSetting returns a TlsCertificatesAndHostnamesPerHostnameSetting entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesPerHostnameSetting(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesPerHostnameSetting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesPerHostnameSetting(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesPerHostnameSettingEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesPerHostnameSettingsResponse returns a TlsCertificatesAndHostnamesPerHostnameSettingsResponse entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesPerHostnameSettingsResponse(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesPerHostnameSettingsResponseEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesPerHostnameSettingsResponse2 returns a TlsCertificatesAndHostnamesPerHostnameSettingsResponse2 entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse2(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesPerHostnameSettingsResponse2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesPerHostnameSettingsResponse2(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesPerHostnameSettingsResponse2EntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesSslUniversalSetting returns a TlsCertificatesAndHostnamesSslUniversalSetting entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesSslUniversalSetting(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesSslUniversalSetting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesSslUniversalSetting(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesSslUniversalSettingEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesSslValidationMethodResponse returns a TlsCertificatesAndHostnamesSslValidationMethodResponse entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesSslValidationMethodResponse(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesSslValidationMethodResponse(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesSslValidationMethodResponse(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesSslValidationMethodResponseEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesSslVerificationResponseCollection returns a TlsCertificatesAndHostnamesSslVerificationResponseCollection entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesSslVerificationResponseCollection(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesSslVerificationResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesSslVerificationResponseCollection(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesSslVerificationResponseCollectionEntityFunc(sdk, data)
}


// TlsCertificatesAndHostnamesTotalTlsSetting returns a TlsCertificatesAndHostnamesTotalTlsSetting entity bound to this client.
// Idiomatic usage: client.TlsCertificatesAndHostnamesTotalTlsSetting(nil).List(nil, nil) or
// client.TlsCertificatesAndHostnamesTotalTlsSetting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareSslSDK) TlsCertificatesAndHostnamesTotalTlsSetting(data map[string]any) CloudflareSslEntity {
	return NewTlsCertificatesAndHostnamesTotalTlsSettingEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *CloudflareSslSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewCloudflareSslSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
