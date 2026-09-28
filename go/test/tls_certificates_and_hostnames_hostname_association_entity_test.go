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

func TestTlsCertificatesAndHostnamesHostnameAssociationEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.TlsCertificatesAndHostnamesHostnameAssociation(nil)
		if ent == nil {
			t.Fatal("expected non-nil TlsCertificatesAndHostnamesHostnameAssociationEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := tls_certificates_and_hostnames_hostname_associationBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "tls_certificates_and_hostnames_hostname_association." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_HOSTNAME_ASSOCIATION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		tlsCertificatesAndHostnamesHostnameAssociationRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.tls_certificates_and_hostnames_hostname_association")))
		var tlsCertificatesAndHostnamesHostnameAssociationRef01Data map[string]any
		if len(tlsCertificatesAndHostnamesHostnameAssociationRef01DataRaw) > 0 {
			tlsCertificatesAndHostnamesHostnameAssociationRef01Data = core.ToMapAny(tlsCertificatesAndHostnamesHostnameAssociationRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = tlsCertificatesAndHostnamesHostnameAssociationRef01Data

		// UPDATE
		tlsCertificatesAndHostnamesHostnameAssociationRef01Ent := client.TlsCertificatesAndHostnamesHostnameAssociation(nil)
		tlsCertificatesAndHostnamesHostnameAssociationRef01DataUp0Up := map[string]any{
		}

		tlsCertificatesAndHostnamesHostnameAssociationRef01MarkdefUp0Name := "mtls_certificate_id"
		tlsCertificatesAndHostnamesHostnameAssociationRef01MarkdefUp0Value := fmt.Sprintf("Mark01-tls_certificates_and_hostnames_hostname_association_ref01_%d", setup.now)
		tlsCertificatesAndHostnamesHostnameAssociationRef01DataUp0Up[tlsCertificatesAndHostnamesHostnameAssociationRef01MarkdefUp0Name] = tlsCertificatesAndHostnamesHostnameAssociationRef01MarkdefUp0Value

		tlsCertificatesAndHostnamesHostnameAssociationRef01ResdataUp0Result, err := tlsCertificatesAndHostnamesHostnameAssociationRef01Ent.Update(tlsCertificatesAndHostnamesHostnameAssociationRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		tlsCertificatesAndHostnamesHostnameAssociationRef01ResdataUp0 := core.ToMapAny(entityData(tlsCertificatesAndHostnamesHostnameAssociationRef01ResdataUp0Result))
		if tlsCertificatesAndHostnamesHostnameAssociationRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if tlsCertificatesAndHostnamesHostnameAssociationRef01ResdataUp0[tlsCertificatesAndHostnamesHostnameAssociationRef01MarkdefUp0Name] != tlsCertificatesAndHostnamesHostnameAssociationRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", tlsCertificatesAndHostnamesHostnameAssociationRef01MarkdefUp0Name, tlsCertificatesAndHostnamesHostnameAssociationRef01ResdataUp0[tlsCertificatesAndHostnamesHostnameAssociationRef01MarkdefUp0Name])
		}

		// LOAD
		tlsCertificatesAndHostnamesHostnameAssociationRef01MatchDt0 := map[string]any{}
		tlsCertificatesAndHostnamesHostnameAssociationRef01DataDt0Loaded, err := tlsCertificatesAndHostnamesHostnameAssociationRef01Ent.Load(tlsCertificatesAndHostnamesHostnameAssociationRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if tlsCertificatesAndHostnamesHostnameAssociationRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func tls_certificates_and_hostnames_hostname_associationBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "tls_certificates_and_hostnames_hostname_association", "TlsCertificatesAndHostnamesHostnameAssociationTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read tls_certificates_and_hostnames_hostname_association test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse tls_certificates_and_hostnames_hostname_association test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"tls_certificates_and_hostnames_hostname_association01", "tls_certificates_and_hostnames_hostname_association02", "tls_certificates_and_hostnames_hostname_association03"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_HOSTNAME_ASSOCIATION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_HOSTNAME_ASSOCIATION_ENTID": idmap,
		"CLOUDFLARE_SSL_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_SSL_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_SSL_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_SSL_TEST_TLS_CERTIFICATES_AND_HOSTNAMES_HOSTNAME_ASSOCIATION_ENTID"])
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
