<?php
declare(strict_types=1);

// CacheApiResponseSingleId entity test

require_once __DIR__ . '/../cloudflaressl_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class CacheApiResponseSingleIdEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = CloudflareSslSDK::test(null, null);
        $ent = $testsdk->CacheApiResponseSingleId(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = cache_api_response_single_id_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["update"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "cache_api_response_single_id." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_SSL_TEST_CACHE_API_RESPONSE_SINGLE_ID_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $cache_api_response_single_id_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.cache_api_response_single_id")));
        $cache_api_response_single_id_ref01_data = null;
        if (count($cache_api_response_single_id_ref01_data_raw) > 0) {
            $cache_api_response_single_id_ref01_data = Helpers::to_map($cache_api_response_single_id_ref01_data_raw[0][1]);
        }

        // UPDATE
        $cache_api_response_single_id_ref01_ent = $client->CacheApiResponseSingleId(null);
        $cache_api_response_single_id_ref01_data_up0_up = [
        ];

        $cache_api_response_single_id_ref01_markdef_up0_name = "value";
        $cache_api_response_single_id_ref01_markdef_up0_value = "Mark01-cache_api_response_single_id_ref01_" . $setup["now"];
        $cache_api_response_single_id_ref01_data_up0_up[$cache_api_response_single_id_ref01_markdef_up0_name] = $cache_api_response_single_id_ref01_markdef_up0_value;

        $cache_api_response_single_id_ref01_resdata_up0_result = $cache_api_response_single_id_ref01_ent->update($cache_api_response_single_id_ref01_data_up0_up, null);
        $cache_api_response_single_id_ref01_resdata_up0 = Helpers::to_map(is_object($cache_api_response_single_id_ref01_resdata_up0_result) && method_exists($cache_api_response_single_id_ref01_resdata_up0_result, 'data_get') ? $cache_api_response_single_id_ref01_resdata_up0_result->data_get() : $cache_api_response_single_id_ref01_resdata_up0_result);
        $this->assertNotNull($cache_api_response_single_id_ref01_resdata_up0);
        $this->assertEquals($cache_api_response_single_id_ref01_resdata_up0[$cache_api_response_single_id_ref01_markdef_up0_name], $cache_api_response_single_id_ref01_markdef_up0_value);

    }
}

function cache_api_response_single_id_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/cache_api_response_single_id/CacheApiResponseSingleIdTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = CloudflareSslSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["cache_api_response_single_id01", "cache_api_response_single_id02", "cache_api_response_single_id03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("CLOUDFLARE_SSL_TEST_CACHE_API_RESPONSE_SINGLE_ID_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "CLOUDFLARE_SSL_TEST_CACHE_API_RESPONSE_SINGLE_ID_ENTID" => $idmap,
        "CLOUDFLARE_SSL_TEST_LIVE" => "FALSE",
        "CLOUDFLARE_SSL_TEST_EXPLAIN" => "FALSE",
        "CLOUDFLARE_SSL_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["CLOUDFLARE_SSL_TEST_CACHE_API_RESPONSE_SINGLE_ID_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["CLOUDFLARE_SSL_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
                "apikey" => $env["CLOUDFLARE_SSL_APIKEY"],
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
        ]);
        // "?? []" because merge legitimately answers with a stdClass when every
        // contributing entry is an EMPTY map - an SDK with no apikey and no
        // server variables generates an empty middle entry, so that is the
        // common case, not the edge one. to_map returns null for a non-array by
        // design, and the constructor takes a non-nullable array, so without the
        // fallback every such SDK died on "must be of type array, null given"
        // the moment live mode was switched on. Offline mode never reaches this
        // branch, which is why the offline suite stayed green.
        $client = new CloudflareSslSDK(Helpers::to_map($merged_opts) ?? []);
    }

    $live = $env["CLOUDFLARE_SSL_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["CLOUDFLARE_SSL_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
