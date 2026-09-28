# CloudflareSsl SDK exists test

require "minitest/autorun"
require_relative "../CloudflareSsl_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = CloudflareSslSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
