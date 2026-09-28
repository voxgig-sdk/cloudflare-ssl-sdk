-- CustomHostnameForAZone entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("cloudflare-ssl_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("CustomHostnameForAZoneEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:CustomHostnameForAZone(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = custom_hostname_for_a_zone_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"update"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "custom_hostname_for_a_zone." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_SSL_TEST_CUSTOM_HOSTNAME_FOR_A_ZONE_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- Bootstrap entity data from existing test data.
    local custom_hostname_for_a_zone_ref01_data_raw = vs.items(helpers.to_map(
      vs.getpath(setup.data, "existing.custom_hostname_for_a_zone")))
    local custom_hostname_for_a_zone_ref01_data = nil
    if #custom_hostname_for_a_zone_ref01_data_raw > 0 then
      custom_hostname_for_a_zone_ref01_data = helpers.to_map(custom_hostname_for_a_zone_ref01_data_raw[1][2])
    end

    -- UPDATE
    local custom_hostname_for_a_zone_ref01_ent = client:CustomHostnameForAZone(nil)
    local custom_hostname_for_a_zone_ref01_data_up0_up = {
      ["certificate_pack_id"] = setup.idmap["certificate_pack_id"],
      ["custom_hostname_id"] = setup.idmap["custom_hostname_id"],
      ["zone_id"] = setup.idmap["zone_id"],
    }

    local custom_hostname_for_a_zone_ref01_markdef_up0_name = "custom_certificate"
    local custom_hostname_for_a_zone_ref01_markdef_up0_value = "Mark01-custom_hostname_for_a_zone_ref01_" .. tostring(setup.now)
    custom_hostname_for_a_zone_ref01_data_up0_up[custom_hostname_for_a_zone_ref01_markdef_up0_name] = custom_hostname_for_a_zone_ref01_markdef_up0_value

    local custom_hostname_for_a_zone_ref01_resdata_up0_result, err = custom_hostname_for_a_zone_ref01_ent:update(custom_hostname_for_a_zone_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local custom_hostname_for_a_zone_ref01_resdata_up0 = helpers.to_map(type(custom_hostname_for_a_zone_ref01_resdata_up0_result) == 'table' and custom_hostname_for_a_zone_ref01_resdata_up0_result.data_get and custom_hostname_for_a_zone_ref01_resdata_up0_result:data_get() or custom_hostname_for_a_zone_ref01_resdata_up0_result)
    assert.is_not_nil(custom_hostname_for_a_zone_ref01_resdata_up0)
    assert.are.equal(custom_hostname_for_a_zone_ref01_resdata_up0[custom_hostname_for_a_zone_ref01_markdef_up0_name], custom_hostname_for_a_zone_ref01_markdef_up0_value)

  end)
end)

function custom_hostname_for_a_zone_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/custom_hostname_for_a_zone/CustomHostnameForAZoneTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read custom_hostname_for_a_zone test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "custom_hostname_for_a_zone01", "custom_hostname_for_a_zone02", "custom_hostname_for_a_zone03", "custom_hostname01", "custom_hostname02", "custom_hostname03", "certificate_pack01", "zone01" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("CLOUDFLARE_SSL_TEST_CUSTOM_HOSTNAME_FOR_A_ZONE_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["CLOUDFLARE_SSL_TEST_CUSTOM_HOSTNAME_FOR_A_ZONE_ENTID"] = idmap,
    ["CLOUDFLARE_SSL_TEST_LIVE"] = "FALSE",
    ["CLOUDFLARE_SSL_TEST_EXPLAIN"] = "FALSE",
    ["CLOUDFLARE_SSL_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["CLOUDFLARE_SSL_TEST_CUSTOM_HOSTNAME_FOR_A_ZONE_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["certificate_pack_id"] == nil then
    idmap_resolved["certificate_pack_id"] = idmap_resolved["certificate_pack01"]
  end
  if idmap_resolved["custom_hostname_id"] == nil then
    idmap_resolved["custom_hostname_id"] = idmap_resolved["custom_hostname01"]
  end
  if idmap_resolved["zone_id"] == nil then
    idmap_resolved["zone_id"] = idmap_resolved["zone01"]
  end

  if env["CLOUDFLARE_SSL_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      -- FIRST, so the generated fields below win: sdk-test-control.json's
      -- test.client.options adds to the live client, it does not redirect it.
      runner.live_client_options(),
      {
        apikey = env["CLOUDFLARE_SSL_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["CLOUDFLARE_SSL_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["CLOUDFLARE_SSL_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
