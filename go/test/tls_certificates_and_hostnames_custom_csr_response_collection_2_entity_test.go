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

func TestTlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.TlsCertificatesAndHostnamesCustomCsrResponseCollection2(nil)
		if ent == nil {
			t.Fatal("expected non-nil TlsCertificatesAndHostnamesCustomCsrResponseCollection2Entity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"tls_certificates_and_hostnames_custom_csr_response_collection_2": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.TlsCertificatesAndHostnamesCustomCsrResponseCollection2(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.TlsCertificatesAndHostnamesCustomCsrResponseCollection2(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := tls_certificates_and_hostnames_custom_csr_response_collection_2BasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "tls_certificates_and_hostnames_custom_csr_response_collection_2." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CUSTOM_CSR_RESPONSE_COLLECTION_2_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		tlsCertificatesAndHostnamesCustomCsrResponseCollection2Ref01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.tls_certificates_and_hostnames_custom_csr_response_collection_2")))
		var tlsCertificatesAndHostnamesCustomCsrResponseCollection2Ref01Data map[string]any
		if len(tlsCertificatesAndHostnamesCustomCsrResponseCollection2Ref01DataRaw) > 0 {
			tlsCertificatesAndHostnamesCustomCsrResponseCollection2Ref01Data = core.ToMapAny(tlsCertificatesAndHostnamesCustomCsrResponseCollection2Ref01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = tlsCertificatesAndHostnamesCustomCsrResponseCollection2Ref01Data

		// LIST
		tlsCertificatesAndHostnamesCustomCsrResponseCollection2Ref01Ent := client.TlsCertificatesAndHostnamesCustomCsrResponseCollection2(nil)
		tlsCertificatesAndHostnamesCustomCsrResponseCollection2Ref01Match := map[string]any{
			"account_id": setup.idmap["account01"],
		}

		tlsCertificatesAndHostnamesCustomCsrResponseCollection2Ref01ListResult, err := tlsCertificatesAndHostnamesCustomCsrResponseCollection2Ref01Ent.List(tlsCertificatesAndHostnamesCustomCsrResponseCollection2Ref01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, tlsCertificatesAndHostnamesCustomCsrResponseCollection2Ref01ListOk := tlsCertificatesAndHostnamesCustomCsrResponseCollection2Ref01ListResult.([]any)
		if !tlsCertificatesAndHostnamesCustomCsrResponseCollection2Ref01ListOk {
			t.Fatalf("expected list result to be an array, got %T", tlsCertificatesAndHostnamesCustomCsrResponseCollection2Ref01ListResult)
		}

	})
}

func tls_certificates_and_hostnames_custom_csr_response_collection_2BasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "tls_certificates_and_hostnames_custom_csr_response_collection_2", "TlsCertificatesAndHostnamesCustomCsrResponseCollection2TestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read tls_certificates_and_hostnames_custom_csr_response_collection_2 test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse tls_certificates_and_hostnames_custom_csr_response_collection_2 test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"tls_certificates_and_hostnames_custom_csr_response_collection_201", "tls_certificates_and_hostnames_custom_csr_response_collection_202", "tls_certificates_and_hostnames_custom_csr_response_collection_203", "account01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CUSTOM_CSR_RESPONSE_COLLECTION_2_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CUSTOM_CSR_RESPONSE_COLLECTION_2_ENTID": idmap,
		"CLOUDFLARE_SSL_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_SSL_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_SSL_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_CUSTOM_CSR_RESPONSE_COLLECTION_2_ENTID"])
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
