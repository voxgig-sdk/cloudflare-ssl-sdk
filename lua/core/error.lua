-- CloudflareSsl SDK error

local CloudflareSslError = {}
CloudflareSslError.__index = CloudflareSslError


function CloudflareSslError.new(code, msg, ctx)
  local self = setmetatable({}, CloudflareSslError)
  self.is_sdk_error = true
  self.sdk = "CloudflareSsl"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function CloudflareSslError:error()
  return self.msg
end


function CloudflareSslError:__tostring()
  return self.msg
end


return CloudflareSslError
