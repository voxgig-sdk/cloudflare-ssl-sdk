# CloudflareSsl SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module CloudflareSslFeatures
  def self.make_feature(name)
    case name
    when "base"
      CloudflareSslBaseFeature.new
    when "test"
      CloudflareSslTestFeature.new
    else
      CloudflareSslBaseFeature.new
    end
  end
end
