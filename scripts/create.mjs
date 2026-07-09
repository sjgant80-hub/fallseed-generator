#!/usr/bin/env node
// fallseed-generator · meta-generator for new fallseed-<vertical> tools
// Usage: node create.mjs <vertical>
const [,,vertical] = process.argv;
if (!vertical) { console.error('Usage: create.mjs <vertical>'); process.exit(1); }
console.log(`fallseed-generator · scaffolding fallseed-${vertical} + companion trios`);
console.log(`  · would create: fallseed-${vertical} (root)`);
console.log(`  · would create: fallseed-${vertical}-sdk`);
console.log(`  · would create: fallseed-${vertical}-mcp`);
console.log(`  · would create: fallseed-${vertical}-api`);
console.log('Phase 2 wires actual scaffolding + gh repo create + push · this is the spec + stub');
