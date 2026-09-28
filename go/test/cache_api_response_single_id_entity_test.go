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

func TestCacheApiResponseSingleIdEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CacheApiResponseSingleId(nil)
		if ent == nil {
			t.Fatal("expected non-nil CacheApiResponseSingleIdEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := cache_api_response_single_idBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "cache_api_response_single_id." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_SSL_TEST_CACHE_API_RESPONSE_SINGLE_ID_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		cacheApiResponseSingleIdRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.cache_api_response_single_id")))
		var cacheApiResponseSingleIdRef01Data map[string]any
		if len(cacheApiResponseSingleIdRef01DataRaw) > 0 {
			cacheApiResponseSingleIdRef01Data = core.ToMapAny(cacheApiResponseSingleIdRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = cacheApiResponseSingleIdRef01Data

		// UPDATE
		cacheApiResponseSingleIdRef01Ent := client.CacheApiResponseSingleId(nil)
		cacheApiResponseSingleIdRef01DataUp0Up := map[string]any{
		}

		cacheApiResponseSingleIdRef01MarkdefUp0Name := "value"
		cacheApiResponseSingleIdRef01MarkdefUp0Value := fmt.Sprintf("Mark01-cache_api_response_single_id_ref01_%d", setup.now)
		cacheApiResponseSingleIdRef01DataUp0Up[cacheApiResponseSingleIdRef01MarkdefUp0Name] = cacheApiResponseSingleIdRef01MarkdefUp0Value

		cacheApiResponseSingleIdRef01ResdataUp0Result, err := cacheApiResponseSingleIdRef01Ent.Update(cacheApiResponseSingleIdRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		cacheApiResponseSingleIdRef01ResdataUp0 := core.ToMapAny(entityData(cacheApiResponseSingleIdRef01ResdataUp0Result))
		if cacheApiResponseSingleIdRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if cacheApiResponseSingleIdRef01ResdataUp0[cacheApiResponseSingleIdRef01MarkdefUp0Name] != cacheApiResponseSingleIdRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", cacheApiResponseSingleIdRef01MarkdefUp0Name, cacheApiResponseSingleIdRef01ResdataUp0[cacheApiResponseSingleIdRef01MarkdefUp0Name])
		}

	})
}

func cache_api_response_single_idBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "cache_api_response_single_id", "CacheApiResponseSingleIdTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read cache_api_response_single_id test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse cache_api_response_single_id test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"cache_api_response_single_id01", "cache_api_response_single_id02", "cache_api_response_single_id03"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_SSL_TEST_CACHE_API_RESPONSE_SINGLE_ID_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_SSL_TEST_CACHE_API_RESPONSE_SINGLE_ID_ENTID": idmap,
		"CLOUDFLARE_SSL_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_SSL_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_SSL_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_SSL_TEST_CACHE_API_RESPONSE_SINGLE_ID_ENTID"])
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
