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

func TestTlsCertificatesAndHostnamesPerHostnameSettingEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.TlsCertificatesAndHostnamesPerHostnameSetting(nil)
		if ent == nil {
			t.Fatal("expected non-nil TlsCertificatesAndHostnamesPerHostnameSettingEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := tls_certificates_and_hostnames_per_hostname_settingBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "tls_certificates_and_hostnames_per_hostname_setting." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_PER_HOSTNAME_SETTING_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		tlsCertificatesAndHostnamesPerHostnameSettingRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.tls_certificates_and_hostnames_per_hostname_setting")))
		var tlsCertificatesAndHostnamesPerHostnameSettingRef01Data map[string]any
		if len(tlsCertificatesAndHostnamesPerHostnameSettingRef01DataRaw) > 0 {
			tlsCertificatesAndHostnamesPerHostnameSettingRef01Data = core.ToMapAny(tlsCertificatesAndHostnamesPerHostnameSettingRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = tlsCertificatesAndHostnamesPerHostnameSettingRef01Data

		// UPDATE
		tlsCertificatesAndHostnamesPerHostnameSettingRef01Ent := client.TlsCertificatesAndHostnamesPerHostnameSetting(nil)
		tlsCertificatesAndHostnamesPerHostnameSettingRef01DataUp0Up := map[string]any{
			"id": tlsCertificatesAndHostnamesPerHostnameSettingRef01Data["id"],
			"setting_id": setup.idmap["setting_id"],
			"zone_id": setup.idmap["zone_id"],
		}

		tlsCertificatesAndHostnamesPerHostnameSettingRef01ResdataUp0Result, err := tlsCertificatesAndHostnamesPerHostnameSettingRef01Ent.Update(tlsCertificatesAndHostnamesPerHostnameSettingRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		tlsCertificatesAndHostnamesPerHostnameSettingRef01ResdataUp0 := core.ToMapAny(entityData(tlsCertificatesAndHostnamesPerHostnameSettingRef01ResdataUp0Result))
		if tlsCertificatesAndHostnamesPerHostnameSettingRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if tlsCertificatesAndHostnamesPerHostnameSettingRef01ResdataUp0["id"] != tlsCertificatesAndHostnamesPerHostnameSettingRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}

		// LOAD
		tlsCertificatesAndHostnamesPerHostnameSettingRef01MatchDt0 := map[string]any{
			"id": tlsCertificatesAndHostnamesPerHostnameSettingRef01Data["id"],
		}
		tlsCertificatesAndHostnamesPerHostnameSettingRef01DataDt0Loaded, err := tlsCertificatesAndHostnamesPerHostnameSettingRef01Ent.Load(tlsCertificatesAndHostnamesPerHostnameSettingRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		tlsCertificatesAndHostnamesPerHostnameSettingRef01DataDt0LoadResult := core.ToMapAny(entityData(tlsCertificatesAndHostnamesPerHostnameSettingRef01DataDt0Loaded))
		if tlsCertificatesAndHostnamesPerHostnameSettingRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if tlsCertificatesAndHostnamesPerHostnameSettingRef01DataDt0LoadResult["id"] != tlsCertificatesAndHostnamesPerHostnameSettingRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func tls_certificates_and_hostnames_per_hostname_settingBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "tls_certificates_and_hostnames_per_hostname_setting", "TlsCertificatesAndHostnamesPerHostnameSettingTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read tls_certificates_and_hostnames_per_hostname_setting test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse tls_certificates_and_hostnames_per_hostname_setting test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"tls_certificates_and_hostnames_per_hostname_setting01", "tls_certificates_and_hostnames_per_hostname_setting02", "tls_certificates_and_hostnames_per_hostname_setting03", "setting01", "zone01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_PER_HOSTNAME_SETTING_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_PER_HOSTNAME_SETTING_ENTID": idmap,
		"CLOUDFLARE_SSL_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_SSL_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_SSL_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_PER_HOSTNAME_SETTING_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add setting_id alias for update test.
	if idmapResolved["setting_id"] == nil {
		idmapResolved["setting_id"] = idmapResolved["setting01"]
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
