# cloudflare-ssl-mcp

[MCP](https://modelcontextprotocol.io) server exposing the CloudflareSsl SDK as
two agent tools — `cloudflare-ssl_list` and `cloudflare-ssl_load` — built on the
[official Go MCP SDK](https://github.com/modelcontextprotocol/go-sdk) and the
sibling Go SDK at `../go`. Runs over **stdio** (default, for spawnable installs)
or **streamable HTTP** (one shared server for several agents).

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/cloudflare-ssl-mcp)
make build

# 2. Provide credentials via the environment
export CLOUDFLARE_SSL_APIKEY=sk_live_xxx

# 3a. Install into Claude Code over stdio (most common)
claude mcp add --scope user cloudflare-ssl \
  -- /absolute/path/to/cloudflare-ssl-mcp -transport stdio

# 3b. …or run a shared HTTP server instead
./cloudflare-ssl-mcp -transport http -addr :8080
```

Tool-call arguments (what an agent sends):

```jsonc
// cloudflare-ssl_list: first page of records
{ "entity": "cache_auto_origin_tls_kex" }
{ "entity": "cache_auto_origin_tls_kex", "query": { } }

// cloudflare-ssl_load: one record by id
{ "entity": "origin_tl", "query": { "id": 1 } }
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: install and call a tool

1. **Build** the server from this `go-mcp/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/cloudflare-ssl-mcp
   ```

2. **Set your API key:**

   ```sh
   export CLOUDFLARE_SSL_APIKEY=sk_live_xxx
   ```

3. **Install it into Claude Code** (stdio transport):

   ```sh
   claude mcp add --scope user cloudflare-ssl \
     -- "$PWD"/dist/*/cloudflare-ssl-mcp -transport stdio
   ```

4. **Restart Claude Code.** The `cloudflare-ssl_list` and `cloudflare-ssl_load` tools now appear
   in new sessions. Ask the agent to *"list cache_auto_origin_tls_kex using cloudflare-ssl"*
   and it calls `cloudflare-ssl_list` with `{"entity":"cache_auto_origin_tls_kex"}`.

## How-to guides

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export CLOUDFLARE_SSL_APIKEY=sk_live_xxx            # API key
export CLOUDFLARE_SSL_BASE=https://api.example.com  # optional: override the API base URL
```

Set these in the shell that launches the server (or in the `claude mcp add`
environment) so every tool call is authenticated.

### Run as a shared HTTP server

```sh
./cloudflare-ssl-mcp -transport http -addr :8080
```

Streamable HTTP lets several agents share one running process; stdio (the
default) spawns a fresh process per client.

### Call the `cloudflare-ssl_list` tool

Args: `entity` (required), `query` (optional filter map). Returns the first
page of records as JSON:

```jsonc
{ "entity": "cache_auto_origin_tls_kex" }
```

### Call the `cloudflare-ssl_load` tool

Args: `entity` (required), `query` = `{"id":N}` (required). Returns the single
record as JSON:

```jsonc
{ "entity": "origin_tl", "query": { "id": 1 } }
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

## Reference

### Tools

| Tool | Args | Returns |
|------|------|---------|
| `cloudflare-ssl_list` | `entity` (required), `query` (optional map) | First page of records as JSON |
| `cloudflare-ssl_load` | `entity` (required), `query` = `{id:N}` | Single record as JSON |

On error, a tool returns an MCP error result (`isError: true`) whose text is the
failure message (e.g. unknown entity, or an API error).

### `Args` schema

Both tools take the same argument object:

| Field | Type | Notes |
|-------|------|-------|
| `entity` | string | One of the 57 supported entities (see below). |
| `query` | object | Optional match map. `{"id":N}` for load; omit or `{}` for list. |

JSON schemas are emitted by the SDK from the `Args` struct's `json` /
`jsonschema` tags — no schema is hand-written.

### Transports & flags

| Flag | Default | Purpose |
|------|---------|---------|
| `-transport` | `stdio` | `stdio` (spawnable) or `http` (streamable HTTP). |
| `-addr` | `:8080` | Listen address for the `http` transport. |

### Environment variables

| Variable | Purpose |
|----------|---------|
| `CLOUDFLARE_SSL_APIKEY` | API key sent with every request. |
| `CLOUDFLARE_SSL_BASE` | Optional override of the API base URL. |

### Entities

The 57 entities valid as the `entity` argument:

cache_api_response_single_id | cache_auto_origin_tls_kex | custom_hostname | custom_hostname_for_a_zone | origin_tl | recommendation | ssl_automatic_mode | tls_certificates_and_hostnames_advanced_certificate_pack_response | tls_certificates_and_hostnames_association_response_collection | tls_certificates_and_hostnames_certificate_analyze | tls_certificates_and_hostnames_certificate_pack_quota | tls_certificates_and_hostnames_certificate_pack_response_collection | tls_certificates_and_hostnames_certificate_pack_response_single | tls_certificates_and_hostnames_certificate_response_collection | tls_certificates_and_hostnames_certificate_response_collection_3 | tls_certificates_and_hostnames_certificate_response_collection_4 | tls_certificates_and_hostnames_certificate_response_collection_5 | tls_certificates_and_hostnames_certificate_response_id_only | tls_certificates_and_hostnames_certificate_response_single | tls_certificates_and_hostnames_certificate_response_single_2 | tls_certificates_and_hostnames_certificate_response_single_3 | tls_certificates_and_hostnames_certificate_response_single_4 | tls_certificates_and_hostnames_certificate_response_single_5 | tls_certificates_and_hostnames_certificate_response_single_post | tls_certificates_and_hostnames_certificate_revoke | tls_certificates_and_hostnames_client_certificate_response | tls_certificates_and_hostnames_client_certificate_response_single | tls_certificates_and_hostnames_ct_alerting_subscription_response | tls_certificates_and_hostnames_custom_csr_response_collection | tls_certificates_and_hostnames_custom_csr_response_collection_2 | tls_certificates_and_hostnames_custom_csr_response_id_only | tls_certificates_and_hostnames_custom_csr_response_single | tls_certificates_and_hostnames_custom_csr_response_single_2 | tls_certificates_and_hostnames_custom_hostname_quota | tls_certificates_and_hostnames_custom_hostname_response_collection | tls_certificates_and_hostnames_custom_hostname_response_single | tls_certificates_and_hostnames_custom_trust_store_response | tls_certificates_and_hostnames_custom_trust_store_response_id_only | tls_certificates_and_hostnames_custom_trust_store_response_single | tls_certificates_and_hostnames_dcv_delegation | tls_certificates_and_hostnames_delete_advanced_certificate_pack | tls_certificates_and_hostnames_enabled | tls_certificates_and_hostnames_fallback_origin | tls_certificates_and_hostnames_hostname_aop_response_collection | tls_certificates_and_hostnames_hostname_aop_single | tls_certificates_and_hostnames_hostname_assoc_response_collection | tls_certificates_and_hostnames_hostname_association | tls_certificates_and_hostnames_keyless_response_collection | tls_certificates_and_hostnames_keyless_response_single | tls_certificates_and_hostnames_keyless_response_single_id | tls_certificates_and_hostnames_per_hostname_setting | tls_certificates_and_hostnames_per_hostname_settings_response | tls_certificates_and_hostnames_per_hostname_settings_response2 | tls_certificates_and_hostnames_ssl_universal_setting | tls_certificates_and_hostnames_ssl_validation_method_response | tls_certificates_and_hostnames_ssl_verification_response_collection | tls_certificates_and_hostnames_total_tls_setting

### Smoke test via HTTP (raw JSON-RPC)

```sh
./cloudflare-ssl-mcp -transport http -addr :18080 &

# initialize, grab the session id
curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -D headers \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"smoke","version":"0"}}}'

SESSION=$(awk '/Mcp-Session-Id/ {print $2}' headers | tr -d '\r')

curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -H "Mcp-Session-Id: $SESSION" \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"cloudflare-ssl_load","arguments":{"entity":"origin_tl","query":{"id":1}}}}'
```

## Explanation

### How tools map to the SDK

`main.go` builds the SDK client (configured from the environment) and registers
two tools. Each dispatches on the `entity` argument to the matching entity in
the sibling Go SDK at `../go`, calls `List` or `Load`, unwraps the `Entity`
wrappers to plain data, and returns it as pretty-printed JSON.

### Why two transports

**stdio** is the standard for agent hosts that spawn a server per client
(Claude Code's `claude mcp add`). **streamable HTTP** keeps one process running
that many agents can share — handy for a long-lived deployment.

### Schema generation

The input schema is derived from the `Args` Go struct's `json` / `jsonschema`
tags at registration time, so the advertised tool schema can never drift from
the code that consumes it.

## Generated by

sdkgen `go-mcp` target. See the target source under `.sdk/src/cmp/go-mcp/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-mcp/`.
