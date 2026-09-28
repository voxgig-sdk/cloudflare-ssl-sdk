# CloudflareSsl SDK utility: make_context
require_relative '../core/context'
module CloudflareSslUtilities
  MakeContext = ->(ctxmap, basectx) {
    CloudflareSslContext.new(ctxmap, basectx)
  }
end
