# fallseed-generator · the meta-generator

**Ring 0 (ground) flagship** — scaffolds new fallseed-<vertical> tools from a spec. Fills the estate's thin ground-ring gap flagged in DEEP-AUDIT-2026-07-07.

## What it does

Given a vertical name + minimal spec:
1. Creates `fallseed-<vertical>/index.html` (single-file HTML tool)
2. Extracts capabilities → generates `-sdk` + `-mcp` + `-api` companion trios via mint-real pattern
3. Ships all 4 repos to sjgant80-hub with Pages enabled + v1.0.0 tag
4. Auto-registers in FallMarket catalog on next nightly refresh

## Use

```bash
npx @ai-native-solutions/fallseed-generator create <vertical> [--spec spec.md]
# example:
npx @ai-native-solutions/fallseed-generator create dentistry --spec ./dentistry-spec.md
```

Produces:
- `fallseed-dentistry` (root)
- `fallseed-dentistry-sdk`
- `fallseed-dentistry-mcp`
- `fallseed-dentistry-api`

All MIT · Ed25519-signed · FallMarket-catalogued.

## Existing verticals (16 shipped)

accountancy · agents · claims · clinic · compliance · creator-os · estate · hr-v1 · ifa · insurance · law · meta · mortgage · recruit · vet · village

## Queued verticals

dentistry · pharmacy · optometry · therapy · fitness · beauty · consulting · marketing · pr · e-commerce · SaaS · fintech · edtech · foodtech · logistics · construction · manufacturing · agriculture · realestate · nonprofit

MIT · AI-Native Solutions
