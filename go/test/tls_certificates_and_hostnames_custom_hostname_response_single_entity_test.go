package sdktest

import (
	"encoding/json"
	"fmt"
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

func TestTlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.TlsCertificatesAndHostnamesCustomHostnameResponseSingle(nil)
		if ent == nil {
			t.Fatal("expected non-nil TlsCertificatesAndHostnamesCustomHostnameResponseSingleEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := tls_certificates_and_hostnames_custom_hostname_response_singleBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "tls_certificates_and_hostnames_custom_hostname_response_single." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CUSTOM_HOSTNAME_RESPONSE_SINGLE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		tlsCertificatesAndHostnamesCustomHostnameResponseSingleRef01Ent := client.TlsCertificatesAndHostnamesCustomHostnameResponseSingle(nil)
		tlsCertificatesAndHostnamesCustomHostnameResponseSingleRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "tls_certificates_and_hostnames_custom_hostname_response_single"}), "tls_certificates_and_hostnames_custom_hostname_response_single_ref01"))
		tlsCertificatesAndHostnamesCustomHostnameResponseSingleRef01Data["zone_id"] = setup.idmap["zone01"]

		tlsCertificatesAndHostnamesCustomHostnameResponseSingleRef01DataResult, err := tlsCertificatesAndHostnamesCustomHostnameResponseSingleRef01Ent.Create(tlsCertificatesAndHostnamesCustomHostnameResponseSingleRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		tlsCertificatesAndHostnamesCustomHostnameResponseSingleRef01Data = core.ToMapAny(entityData(tlsCertificatesAndHostnamesCustomHostnameResponseSingleRef01DataResult))
		if tlsCertificatesAndHostnamesCustomHostnameResponseSingleRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// UPDATE
		tlsCertificatesAndHostnamesCustomHostnameResponseSingleRef01DataUp0Up := map[string]any{
			"zone_id": setup.idmap["zone_id"],
		}

		tlsCertificatesAndHostnamesCustomHostnameResponseSingleRef01MarkdefUp0Name := "custom_origin_server"
		tlsCertificatesAndHostnamesCustomHostnameResponseSingleRef01MarkdefUp0Value := fmt.Sprintf("Mark01-tls_certificates_and_hostnames_custom_hostname_response_single_ref01_%d", setup.now)
		tlsCertificatesAndHostnamesCustomHostnameResponseSingleRef01DataUp0Up[tlsCertificatesAndHostnamesCustomHostnameResponseSingleRef01MarkdefUp0Name] = tlsCertificatesAndHostnamesCustomHostnameResponseSingleRef01MarkdefUp0Value

		tlsCertificatesAndHostnamesCustomHostnameResponseSingleRef01ResdataUp0Result, err := tlsCertificatesAndHostnamesCustomHostnameResponseSingleRef01Ent.Update(tlsCertificatesAndHostnamesCustomHostnameResponseSingleRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		tlsCertificatesAndHostnamesCustomHostnameResponseSingleRef01ResdataUp0 := core.ToMapAny(entityData(tlsCertificatesAndHostnamesCustomHostnameResponseSingleRef01ResdataUp0Result))
		if tlsCertificatesAndHostnamesCustomHostnameResponseSingleRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if tlsCertificatesAndHostnamesCustomHostnameResponseSingleRef01ResdataUp0[tlsCertificatesAndHostnamesCustomHostnameResponseSingleRef01MarkdefUp0Name] != tlsCertificatesAndHostnamesCustomHostnameResponseSingleRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", tlsCertificatesAndHostnamesCustomHostnameResponseSingleRef01MarkdefUp0Name, tlsCertificatesAndHostnamesCustomHostnameResponseSingleRef01ResdataUp0[tlsCertificatesAndHostnamesCustomHostnameResponseSingleRef01MarkdefUp0Name])
		}

		// LOAD
		tlsCertificatesAndHostnamesCustomHostnameResponseSingleRef01MatchDt0 := map[string]any{}
		tlsCertificatesAndHostnamesCustomHostnameResponseSingleRef01DataDt0Loaded, err := tlsCertificatesAndHostnamesCustomHostnameResponseSingleRef01Ent.Load(tlsCertificatesAndHostnamesCustomHostnameResponseSingleRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if tlsCertificatesAndHostnamesCustomHostnameResponseSingleRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func tls_certificates_and_hostnames_custom_hostname_response_singleBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "tls_certificates_and_hostnames_custom_hostname_response_single", "TlsCertificatesAndHostnamesCustomHostnameResponseSingleTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read tls_certificates_and_hostnames_custom_hostname_response_single test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse tls_certificates_and_hostnames_custom_hostname_response_single test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"tls_certificates_and_hostnames_custom_hostname_response_single01", "tls_certificates_and_hostnames_custom_hostname_response_single02", "tls_certificates_and_hostnames_custom_hostname_response_single03", "custom_hostname01", "custom_hostname02", "custom_hostname03", "zone01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CUSTOM_HOSTNAME_RESPONSE_SINGLE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CUSTOM_HOSTNAME_RESPONSE_SINGLE_ENTID": idmap,
		"CLOUDFLARE_SSL_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_SSL_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_SSL_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CUSTOM_HOSTNAME_RESPONSE_SINGLE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add zone_id alias for update test.
	if idmapResolved["zone_id"] == nil {
		idmapResolved["zone_id"] = idmapResolved["zone01"]
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
