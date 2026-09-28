<?php
declare(strict_types=1);

// CloudflareSsl SDK utility: result_body

class CloudflareSslResultBody
{
    public static function call(CloudflareSslContext $ctx): ?CloudflareSslResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
