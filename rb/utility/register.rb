# CloudflareSsl SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

CloudflareSslUtility.registrar = ->(u) {
  u.clean = CloudflareSslUtilities::Clean
  u.done = CloudflareSslUtilities::Done
  u.make_error = CloudflareSslUtilities::MakeError
  u.feature_add = CloudflareSslUtilities::FeatureAdd
  u.feature_hook = CloudflareSslUtilities::FeatureHook
  u.feature_init = CloudflareSslUtilities::FeatureInit
  u.fetcher = CloudflareSslUtilities::Fetcher
  u.make_fetch_def = CloudflareSslUtilities::MakeFetchDef
  u.make_context = CloudflareSslUtilities::MakeContext
  u.make_options = CloudflareSslUtilities::MakeOptions
  u.make_request = CloudflareSslUtilities::MakeRequest
  u.make_response = CloudflareSslUtilities::MakeResponse
  u.make_result = CloudflareSslUtilities::MakeResult
  u.make_point = CloudflareSslUtilities::MakePoint
  u.make_spec = CloudflareSslUtilities::MakeSpec
  u.make_url = CloudflareSslUtilities::MakeUrl
  u.param = CloudflareSslUtilities::Param
  u.prepare_auth = CloudflareSslUtilities::PrepareAuth
  u.prepare_body = CloudflareSslUtilities::PrepareBody
  u.prepare_headers = CloudflareSslUtilities::PrepareHeaders
  u.prepare_method = CloudflareSslUtilities::PrepareMethod
  u.prepare_params = CloudflareSslUtilities::PrepareParams
  u.prepare_path = CloudflareSslUtilities::PreparePath
  u.prepare_query = CloudflareSslUtilities::PrepareQuery
  u.graphql_body = CloudflareSslUtilities::GraphqlBody
  u.graphql_errors = CloudflareSslUtilities::GraphqlErrors
  u.result_basic = CloudflareSslUtilities::ResultBasic
  u.result_body = CloudflareSslUtilities::ResultBody
  u.result_headers = CloudflareSslUtilities::ResultHeaders
  u.transform_request = CloudflareSslUtilities::TransformRequest
  u.transform_response = CloudflareSslUtilities::TransformResponse
}
