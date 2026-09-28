-- CloudflareSsl SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("cloudflare-ssl_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local CloudflareSslSDK = {}
CloudflareSslSDK.__index = CloudflareSslSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

CloudflareSslSDK._make_feature = _make_feature


function CloudflareSslSDK.new(options)
  local self = setmetatable({}, CloudflareSslSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: test


  return self
end


function CloudflareSslSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function CloudflareSslSDK:get_utility()
  return Utility.copy(self._utility)
end


function CloudflareSslSDK:get_root_ctx()
  return self._rootctx
end


function CloudflareSslSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function CloudflareSslSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function CloudflareSslSDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function CloudflareSslSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "CloudflareSslSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function CloudflareSslSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function CloudflareSslSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "CloudflareSslSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:CacheApiResponseSingleId():list() / client:CacheApiResponseSingleId():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:CacheApiResponseSingleId(data)
  local EntityMod = require("entity.cache_api_response_single_id_entity")
  if data == nil then
    if self._cache_api_response_single_id == nil then
      self._cache_api_response_single_id = EntityMod.new(self, nil)
    end
    return self._cache_api_response_single_id
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CacheAutoOriginTlsKex():list() / client:CacheAutoOriginTlsKex():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:CacheAutoOriginTlsKex(data)
  local EntityMod = require("entity.cache_auto_origin_tls_kex_entity")
  if data == nil then
    if self._cache_auto_origin_tls_kex == nil then
      self._cache_auto_origin_tls_kex = EntityMod.new(self, nil)
    end
    return self._cache_auto_origin_tls_kex
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CustomHostname():list() / client:CustomHostname():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:CustomHostname(data)
  local EntityMod = require("entity.custom_hostname_entity")
  if data == nil then
    if self._custom_hostname == nil then
      self._custom_hostname = EntityMod.new(self, nil)
    end
    return self._custom_hostname
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CustomHostnameForAZone():list() / client:CustomHostnameForAZone():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:CustomHostnameForAZone(data)
  local EntityMod = require("entity.custom_hostname_for_a_zone_entity")
  if data == nil then
    if self._custom_hostname_for_a_zone == nil then
      self._custom_hostname_for_a_zone = EntityMod.new(self, nil)
    end
    return self._custom_hostname_for_a_zone
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OriginTl():list() / client:OriginTl():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:OriginTl(data)
  local EntityMod = require("entity.origin_tl_entity")
  if data == nil then
    if self._origin_tl == nil then
      self._origin_tl = EntityMod.new(self, nil)
    end
    return self._origin_tl
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Recommendation():list() / client:Recommendation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:Recommendation(data)
  local EntityMod = require("entity.recommendation_entity")
  if data == nil then
    if self._recommendation == nil then
      self._recommendation = EntityMod.new(self, nil)
    end
    return self._recommendation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SslAutomaticMode():list() / client:SslAutomaticMode():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:SslAutomaticMode(data)
  local EntityMod = require("entity.ssl_automatic_mode_entity")
  if data == nil then
    if self._ssl_automatic_mode == nil then
      self._ssl_automatic_mode = EntityMod.new(self, nil)
    end
    return self._ssl_automatic_mode
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesAdvancedCertificatePackResponse():list() / client:TlsCertificatesAndHostnamesAdvancedCertificatePackResponse():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesAdvancedCertificatePackResponse(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_advanced_certificate_pack_response_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_advanced_certificate_pack_response == nil then
      self._tls_certificates_and_hostnames_advanced_certificate_pack_response = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_advanced_certificate_pack_response
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesAssociationResponseCollection():list() / client:TlsCertificatesAndHostnamesAssociationResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesAssociationResponseCollection(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_association_response_collection_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_association_response_collection == nil then
      self._tls_certificates_and_hostnames_association_response_collection = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_association_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesCertificateAnalyze():list() / client:TlsCertificatesAndHostnamesCertificateAnalyze():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesCertificateAnalyze(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_certificate_analyze_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_certificate_analyze == nil then
      self._tls_certificates_and_hostnames_certificate_analyze = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_certificate_analyze
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesCertificatePackQuota():list() / client:TlsCertificatesAndHostnamesCertificatePackQuota():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesCertificatePackQuota(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_certificate_pack_quota_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_certificate_pack_quota == nil then
      self._tls_certificates_and_hostnames_certificate_pack_quota = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_certificate_pack_quota
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesCertificatePackResponseCollection():list() / client:TlsCertificatesAndHostnamesCertificatePackResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesCertificatePackResponseCollection(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_certificate_pack_response_collection_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_certificate_pack_response_collection == nil then
      self._tls_certificates_and_hostnames_certificate_pack_response_collection = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_certificate_pack_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesCertificatePackResponseSingle():list() / client:TlsCertificatesAndHostnamesCertificatePackResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesCertificatePackResponseSingle(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_certificate_pack_response_single_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_certificate_pack_response_single == nil then
      self._tls_certificates_and_hostnames_certificate_pack_response_single = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_certificate_pack_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesCertificateResponseCollection():list() / client:TlsCertificatesAndHostnamesCertificateResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesCertificateResponseCollection(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_certificate_response_collection_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_certificate_response_collection == nil then
      self._tls_certificates_and_hostnames_certificate_response_collection = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_certificate_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesCertificateResponseCollection3():list() / client:TlsCertificatesAndHostnamesCertificateResponseCollection3():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesCertificateResponseCollection3(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_certificate_response_collection_3_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_certificate_response_collection_3 == nil then
      self._tls_certificates_and_hostnames_certificate_response_collection_3 = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_certificate_response_collection_3
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesCertificateResponseCollection4():list() / client:TlsCertificatesAndHostnamesCertificateResponseCollection4():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesCertificateResponseCollection4(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_certificate_response_collection_4_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_certificate_response_collection_4 == nil then
      self._tls_certificates_and_hostnames_certificate_response_collection_4 = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_certificate_response_collection_4
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesCertificateResponseCollection5():list() / client:TlsCertificatesAndHostnamesCertificateResponseCollection5():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesCertificateResponseCollection5(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_certificate_response_collection_5_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_certificate_response_collection_5 == nil then
      self._tls_certificates_and_hostnames_certificate_response_collection_5 = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_certificate_response_collection_5
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesCertificateResponseIdOnly():list() / client:TlsCertificatesAndHostnamesCertificateResponseIdOnly():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesCertificateResponseIdOnly(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_certificate_response_id_only_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_certificate_response_id_only == nil then
      self._tls_certificates_and_hostnames_certificate_response_id_only = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_certificate_response_id_only
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesCertificateResponseSingle():list() / client:TlsCertificatesAndHostnamesCertificateResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesCertificateResponseSingle(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_certificate_response_single_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_certificate_response_single == nil then
      self._tls_certificates_and_hostnames_certificate_response_single = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_certificate_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesCertificateResponseSingle2():list() / client:TlsCertificatesAndHostnamesCertificateResponseSingle2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesCertificateResponseSingle2(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_certificate_response_single_2_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_certificate_response_single_2 == nil then
      self._tls_certificates_and_hostnames_certificate_response_single_2 = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_certificate_response_single_2
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesCertificateResponseSingle3():list() / client:TlsCertificatesAndHostnamesCertificateResponseSingle3():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesCertificateResponseSingle3(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_certificate_response_single_3_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_certificate_response_single_3 == nil then
      self._tls_certificates_and_hostnames_certificate_response_single_3 = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_certificate_response_single_3
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesCertificateResponseSingle4():list() / client:TlsCertificatesAndHostnamesCertificateResponseSingle4():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesCertificateResponseSingle4(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_certificate_response_single_4_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_certificate_response_single_4 == nil then
      self._tls_certificates_and_hostnames_certificate_response_single_4 = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_certificate_response_single_4
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesCertificateResponseSingle5():list() / client:TlsCertificatesAndHostnamesCertificateResponseSingle5():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesCertificateResponseSingle5(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_certificate_response_single_5_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_certificate_response_single_5 == nil then
      self._tls_certificates_and_hostnames_certificate_response_single_5 = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_certificate_response_single_5
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesCertificateResponseSinglePost():list() / client:TlsCertificatesAndHostnamesCertificateResponseSinglePost():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesCertificateResponseSinglePost(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_certificate_response_single_post_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_certificate_response_single_post == nil then
      self._tls_certificates_and_hostnames_certificate_response_single_post = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_certificate_response_single_post
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesCertificateRevoke():list() / client:TlsCertificatesAndHostnamesCertificateRevoke():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesCertificateRevoke(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_certificate_revoke_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_certificate_revoke == nil then
      self._tls_certificates_and_hostnames_certificate_revoke = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_certificate_revoke
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesClientCertificateResponse():list() / client:TlsCertificatesAndHostnamesClientCertificateResponse():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesClientCertificateResponse(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_client_certificate_response_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_client_certificate_response == nil then
      self._tls_certificates_and_hostnames_client_certificate_response = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_client_certificate_response
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesClientCertificateResponseSingle():list() / client:TlsCertificatesAndHostnamesClientCertificateResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesClientCertificateResponseSingle(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_client_certificate_response_single_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_client_certificate_response_single == nil then
      self._tls_certificates_and_hostnames_client_certificate_response_single = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_client_certificate_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesCustomCsrResponseCollection():list() / client:TlsCertificatesAndHostnamesCustomCsrResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesCustomCsrResponseCollection(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_custom_csr_response_collection_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_custom_csr_response_collection == nil then
      self._tls_certificates_and_hostnames_custom_csr_response_collection = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_custom_csr_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesCustomCsrResponseCollection2():list() / client:TlsCertificatesAndHostnamesCustomCsrResponseCollection2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesCustomCsrResponseCollection2(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_custom_csr_response_collection_2_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_custom_csr_response_collection_2 == nil then
      self._tls_certificates_and_hostnames_custom_csr_response_collection_2 = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_custom_csr_response_collection_2
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesCustomCsrResponseIdOnly():list() / client:TlsCertificatesAndHostnamesCustomCsrResponseIdOnly():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesCustomCsrResponseIdOnly(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_custom_csr_response_id_only_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_custom_csr_response_id_only == nil then
      self._tls_certificates_and_hostnames_custom_csr_response_id_only = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_custom_csr_response_id_only
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesCustomCsrResponseSingle():list() / client:TlsCertificatesAndHostnamesCustomCsrResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesCustomCsrResponseSingle(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_custom_csr_response_single_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_custom_csr_response_single == nil then
      self._tls_certificates_and_hostnames_custom_csr_response_single = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_custom_csr_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesCustomCsrResponseSingle2():list() / client:TlsCertificatesAndHostnamesCustomCsrResponseSingle2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesCustomCsrResponseSingle2(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_custom_csr_response_single_2_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_custom_csr_response_single_2 == nil then
      self._tls_certificates_and_hostnames_custom_csr_response_single_2 = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_custom_csr_response_single_2
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesCustomHostnameQuota():list() / client:TlsCertificatesAndHostnamesCustomHostnameQuota():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesCustomHostnameQuota(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_custom_hostname_quota_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_custom_hostname_quota == nil then
      self._tls_certificates_and_hostnames_custom_hostname_quota = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_custom_hostname_quota
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesCustomHostnameResponseCollection():list() / client:TlsCertificatesAndHostnamesCustomHostnameResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesCustomHostnameResponseCollection(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_custom_hostname_response_collection_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_custom_hostname_response_collection == nil then
      self._tls_certificates_and_hostnames_custom_hostname_response_collection = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_custom_hostname_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesCustomHostnameResponseSingle():list() / client:TlsCertificatesAndHostnamesCustomHostnameResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesCustomHostnameResponseSingle(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_custom_hostname_response_single_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_custom_hostname_response_single == nil then
      self._tls_certificates_and_hostnames_custom_hostname_response_single = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_custom_hostname_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesCustomTrustStoreResponse():list() / client:TlsCertificatesAndHostnamesCustomTrustStoreResponse():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesCustomTrustStoreResponse(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_custom_trust_store_response_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_custom_trust_store_response == nil then
      self._tls_certificates_and_hostnames_custom_trust_store_response = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_custom_trust_store_response
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly():list() / client:TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesCustomTrustStoreResponseIdOnly(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_custom_trust_store_response_id_only_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_custom_trust_store_response_id_only == nil then
      self._tls_certificates_and_hostnames_custom_trust_store_response_id_only = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_custom_trust_store_response_id_only
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle():list() / client:TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesCustomTrustStoreResponseSingle(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_custom_trust_store_response_single_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_custom_trust_store_response_single == nil then
      self._tls_certificates_and_hostnames_custom_trust_store_response_single = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_custom_trust_store_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack():list() / client:TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesDeleteAdvancedCertificatePack(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_delete_advanced_certificate_pack_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_delete_advanced_certificate_pack == nil then
      self._tls_certificates_and_hostnames_delete_advanced_certificate_pack = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_delete_advanced_certificate_pack
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesEnabled():list() / client:TlsCertificatesAndHostnamesEnabled():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesEnabled(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_enabled_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_enabled == nil then
      self._tls_certificates_and_hostnames_enabled = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_enabled
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesFallbackOrigin():list() / client:TlsCertificatesAndHostnamesFallbackOrigin():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesFallbackOrigin(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_fallback_origin_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_fallback_origin == nil then
      self._tls_certificates_and_hostnames_fallback_origin = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_fallback_origin
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesHostnameAopResponseCollection():list() / client:TlsCertificatesAndHostnamesHostnameAopResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesHostnameAopResponseCollection(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_hostname_aop_response_collection_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_hostname_aop_response_collection == nil then
      self._tls_certificates_and_hostnames_hostname_aop_response_collection = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_hostname_aop_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesHostnameAopSingle():list() / client:TlsCertificatesAndHostnamesHostnameAopSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesHostnameAopSingle(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_hostname_aop_single_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_hostname_aop_single == nil then
      self._tls_certificates_and_hostnames_hostname_aop_single = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_hostname_aop_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesHostnameAssocResponseCollection():list() / client:TlsCertificatesAndHostnamesHostnameAssocResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesHostnameAssocResponseCollection(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_hostname_assoc_response_collection_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_hostname_assoc_response_collection == nil then
      self._tls_certificates_and_hostnames_hostname_assoc_response_collection = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_hostname_assoc_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesKeylessResponseCollection():list() / client:TlsCertificatesAndHostnamesKeylessResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesKeylessResponseCollection(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_keyless_response_collection_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_keyless_response_collection == nil then
      self._tls_certificates_and_hostnames_keyless_response_collection = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_keyless_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesKeylessResponseSingle():list() / client:TlsCertificatesAndHostnamesKeylessResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesKeylessResponseSingle(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_keyless_response_single_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_keyless_response_single == nil then
      self._tls_certificates_and_hostnames_keyless_response_single = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_keyless_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesKeylessResponseSingleId():list() / client:TlsCertificatesAndHostnamesKeylessResponseSingleId():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesKeylessResponseSingleId(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_keyless_response_single_id_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_keyless_response_single_id == nil then
      self._tls_certificates_and_hostnames_keyless_response_single_id = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_keyless_response_single_id
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesPerHostnameSetting():list() / client:TlsCertificatesAndHostnamesPerHostnameSetting():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesPerHostnameSetting(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_per_hostname_setting_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_per_hostname_setting == nil then
      self._tls_certificates_and_hostnames_per_hostname_setting = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_per_hostname_setting
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesPerHostnameSettingsResponse():list() / client:TlsCertificatesAndHostnamesPerHostnameSettingsResponse():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesPerHostnameSettingsResponse(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_per_hostname_settings_response_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_per_hostname_settings_response == nil then
      self._tls_certificates_and_hostnames_per_hostname_settings_response = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_per_hostname_settings_response
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesPerHostnameSettingsResponse2():list() / client:TlsCertificatesAndHostnamesPerHostnameSettingsResponse2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesPerHostnameSettingsResponse2(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_per_hostname_settings_response2_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_per_hostname_settings_response2 == nil then
      self._tls_certificates_and_hostnames_per_hostname_settings_response2 = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_per_hostname_settings_response2
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesSslUniversalSetting():list() / client:TlsCertificatesAndHostnamesSslUniversalSetting():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesSslUniversalSetting(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_ssl_universal_setting_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_ssl_universal_setting == nil then
      self._tls_certificates_and_hostnames_ssl_universal_setting = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_ssl_universal_setting
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesSslValidationMethodResponse():list() / client:TlsCertificatesAndHostnamesSslValidationMethodResponse():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesSslValidationMethodResponse(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_ssl_validation_method_response_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_ssl_validation_method_response == nil then
      self._tls_certificates_and_hostnames_ssl_validation_method_response = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_ssl_validation_method_response
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesSslVerificationResponseCollection():list() / client:TlsCertificatesAndHostnamesSslVerificationResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesSslVerificationResponseCollection(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_ssl_verification_response_collection_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_ssl_verification_response_collection == nil then
      self._tls_certificates_and_hostnames_ssl_verification_response_collection = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_ssl_verification_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TlsCertificatesAndHostnamesTotalTlsSetting():list() / client:TlsCertificatesAndHostnamesTotalTlsSetting():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareSslSDK:TlsCertificatesAndHostnamesTotalTlsSetting(data)
  local EntityMod = require("entity.tls_certificates_and_hostnames_total_tls_setting_entity")
  if data == nil then
    if self._tls_certificates_and_hostnames_total_tls_setting == nil then
      self._tls_certificates_and_hostnames_total_tls_setting = EntityMod.new(self, nil)
    end
    return self._tls_certificates_and_hostnames_total_tls_setting
  end
  return EntityMod.new(self, data)
end




function CloudflareSslSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = CloudflareSslSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return CloudflareSslSDK
