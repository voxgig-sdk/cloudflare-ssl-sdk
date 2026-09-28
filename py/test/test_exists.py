# CloudflareSsl SDK exists test

import pytest
from cloudflaressl_sdk import CloudflareSslSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CloudflareSslSDK.test(None, None)
        assert testsdk is not None
