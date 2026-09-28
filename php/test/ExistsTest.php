<?php
declare(strict_types=1);

// CloudflareSsl SDK exists test

require_once __DIR__ . '/../cloudflaressl_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = CloudflareSslSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
