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

func TestCustomHostnameForAZoneEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CustomHostnameForAZone(nil)
		if ent == nil {
			t.Fatal("expected non-nil CustomHostnameForAZoneEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := custom_hostname_for_a_zoneBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "custom_hostname_for_a_zone." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_SSL_TEST_CUSTOM_HOSTNAME_FOR_A_ZONE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		customHostnameForAZoneRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.custom_hostname_for_a_zone")))
		var customHostnameForAZoneRef01Data map[string]any
		if len(customHostnameForAZoneRef01DataRaw) > 0 {
			customHostnameForAZoneRef01Data = core.ToMapAny(customHostnameForAZoneRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = customHostnameForAZoneRef01Data

		// UPDATE
		customHostnameForAZoneRef01Ent := client.CustomHostnameForAZone(nil)
		customHostnameForAZoneRef01DataUp0Up := map[string]any{
			"certificate_pack_id": setup.idmap["certificate_pack_id"],
			"custom_hostname_id": setup.idmap["custom_hostname_id"],
			"zone_id": setup.idmap["zone_id"],
		}

		customHostnameForAZoneRef01MarkdefUp0Name := "custom_certificate"
		customHostnameForAZoneRef01MarkdefUp0Value := fmt.Sprintf("Mark01-custom_hostname_for_a_zone_ref01_%d", setup.now)
		customHostnameForAZoneRef01DataUp0Up[customHostnameForAZoneRef01MarkdefUp0Name] = customHostnameForAZoneRef01MarkdefUp0Value

		customHostnameForAZoneRef01ResdataUp0Result, err := customHostnameForAZoneRef01Ent.Update(customHostnameForAZoneRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		customHostnameForAZoneRef01ResdataUp0 := core.ToMapAny(entityData(customHostnameForAZoneRef01ResdataUp0Result))
		if customHostnameForAZoneRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if customHostnameForAZoneRef01ResdataUp0[customHostnameForAZoneRef01MarkdefUp0Name] != customHostnameForAZoneRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", customHostnameForAZoneRef01MarkdefUp0Name, customHostnameForAZoneRef01ResdataUp0[customHostnameForAZoneRef01MarkdefUp0Name])
		}

	})
}

func custom_hostname_for_a_zoneBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "custom_hostname_for_a_zone", "CustomHostnameForAZoneTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read custom_hostname_for_a_zone test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse custom_hostname_for_a_zone test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"custom_hostname_for_a_zone01", "custom_hostname_for_a_zone02", "custom_hostname_for_a_zone03", "custom_hostname01", "custom_hostname02", "custom_hostname03", "certificate_pack01", "zone01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_SSL_TEST_CUSTOM_HOSTNAME_FOR_A_ZONE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_SSL_TEST_CUSTOM_HOSTNAME_FOR_A_ZONE_ENTID": idmap,
		"CLOUDFLARE_SSL_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_SSL_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_SSL_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_SSL_TEST_CUSTOM_HOSTNAME_FOR_A_ZONE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add certificate_pack_id alias for update test.
	if idmapResolved["certificate_pack_id"] == nil {
		idmapResolved["certificate_pack_id"] = idmapResolved["certificate_pack01"]
	}
	// Add custom_hostname_id alias for update test.
	if idmapResolved["custom_hostname_id"] == nil {
		idmapResolved["custom_hostname_id"] = idmapResolved["custom_hostname01"]
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
