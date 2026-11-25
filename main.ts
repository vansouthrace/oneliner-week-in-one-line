import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "Five bounties shipped, one build broke at 2am, and the grill still owes me a patty.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, ENTRY);
