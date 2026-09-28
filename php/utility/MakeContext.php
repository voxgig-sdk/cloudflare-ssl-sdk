<?php
declare(strict_types=1);

// CloudflareSsl SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CloudflareSslMakeContext
{
    public static function call(array $ctxmap, ?CloudflareSslContext $basectx): CloudflareSslContext
    {
        return new CloudflareSslContext($ctxmap, $basectx);
    }
}
