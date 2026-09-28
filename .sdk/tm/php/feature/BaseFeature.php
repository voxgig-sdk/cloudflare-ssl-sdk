<?php
declare(strict_types=1);

// CloudflareSsl SDK base feature

class CloudflareSslBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(CloudflareSslContext $ctx, array $options): void {}
    public function PostConstruct(CloudflareSslContext $ctx): void {}
    public function PostConstructEntity(CloudflareSslContext $ctx): void {}
    public function SetData(CloudflareSslContext $ctx): void {}
    public function GetData(CloudflareSslContext $ctx): void {}
    public function GetMatch(CloudflareSslContext $ctx): void {}
    public function SetMatch(CloudflareSslContext $ctx): void {}
    public function PrePoint(CloudflareSslContext $ctx): void {}
    public function PreSpec(CloudflareSslContext $ctx): void {}
    public function PreRequest(CloudflareSslContext $ctx): void {}
    public function PreResponse(CloudflareSslContext $ctx): void {}
    public function PreResult(CloudflareSslContext $ctx): void {}
    public function PreDone(CloudflareSslContext $ctx): void {}
    public function PreUnexpected(CloudflareSslContext $ctx): void {}
}
