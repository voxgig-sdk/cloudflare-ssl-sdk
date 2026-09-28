package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/cloudflare-ssl-sdk/go"
	"github.com/voxgig-sdk/cloudflare-ssl-sdk/go/core"

	vs "github.com/voxgig-sdk/cloudflare-ssl-sdk/go/utility/struct"
)

func TestTlsCertificatesAndHostnamesCertificateResponseSingle3Entity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.TlsCertificatesAndHostnamesCertificateResponseSingle3(nil)
		if ent == nil {
			t.Fatal("expected non-nil TlsCertificatesAndHostnamesCertificateResponseSingle3Entity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := tls_certificates_and_hostnames_certificate_response_single_3BasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "tls_certificates_and_hostnames_certificate_response_single_3." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CERTIFICATE_RESPONSE_SINGLE_3_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		tlsCertificatesAndHostnamesCertificateResponseSingle3Ref01Ent := client.TlsCertificatesAndHostnamesCertificateResponseSingle3(nil)
		tlsCertificatesAndHostnamesCertificateResponseSingle3Ref01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "tls_certificates_and_hostnames_certificate_response_single_3"}), "tls_certificates_and_hostnames_certificate_response_single_3_ref01"))
		tlsCertificatesAndHostnamesCertificateResponseSingle3Ref01Data["zone_id"] = setup.idmap["zone01"]

		tlsCertificatesAndHostnamesCertificateResponseSingle3Ref01DataResult, err := tlsCertificatesAndHostnamesCertificateResponseSingle3Ref01Ent.Create(tlsCertificatesAndHostnamesCertificateResponseSingle3Ref01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		tlsCertificatesAndHostnamesCertificateResponseSingle3Ref01Data = core.ToMapAny(entityData(tlsCertificatesAndHostnamesCertificateResponseSingle3Ref01DataResult))
		if tlsCertificatesAndHostnamesCertificateResponseSingle3Ref01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LOAD
		tlsCertificatesAndHostnamesCertificateResponseSingle3Ref01MatchDt0 := map[string]any{}
		tlsCertificatesAndHostnamesCertificateResponseSingle3Ref01DataDt0Loaded, err := tlsCertificatesAndHostnamesCertificateResponseSingle3Ref01Ent.Load(tlsCertificatesAndHostnamesCertificateResponseSingle3Ref01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if tlsCertificatesAndHostnamesCertificateResponseSingle3Ref01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}


	})
}

func tls_certificates_and_hostnames_certificate_response_single_3BasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "tls_certificates_and_hostnames_certificate_response_single_3", "TlsCertificatesAndHostnamesCertificateResponseSingle3TestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read tls_certificates_and_hostnames_certificate_response_single_3 test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse tls_certificates_and_hostnames_certificate_response_single_3 test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"tls_certificates_and_hostnames_certificate_response_single_301", "tls_certificates_and_hostnames_certificate_response_single_302", "tls_certificates_and_hostnames_certificate_response_single_303", "zone01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CERTIFICATE_RESPONSE_SINGLE_3_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CERTIFICATE_RESPONSE_SINGLE_3_ENTID": idmap,
		"CLOUDFLARE_SSL_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_SSL_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_SSL_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CERTIFICATE_RESPONSE_SINGLE_3_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["CLOUDFLARE_SSL_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["CLOUDFLARE_SSL_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewCloudflareSslSDK(core.ToMapAny(mergedOpts))
	}

	live := env["CLOUDFLARE_SSL_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["CLOUDFLARE_SSL_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
