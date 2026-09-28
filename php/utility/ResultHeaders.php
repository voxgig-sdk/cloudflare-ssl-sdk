<?php
declare(strict_types=1);

// CloudflareSsl SDK utility: result_headers

class CloudflareSslResultHeaders
{
    public static function call(CloudflareSslContext $ctx): ?CloudflareSslResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
