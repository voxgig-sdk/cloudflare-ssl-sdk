# CloudflareSsl SDK utility: make_context

from cloudflaressl_sdk.core.context import CloudflareSslContext


def make_context_util(ctxmap, basectx):
    return CloudflareSslContext(ctxmap, basectx)
