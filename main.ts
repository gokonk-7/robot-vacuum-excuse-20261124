// The Robot Vacuum's Best Excuse — make.fun program/v1 entry.
//
// Writes the single funniest one-line excuse to /output/entry.txt
// (or $OUTPUT_DIR/entry.txt when set, for local testing).
// The line is a fixed, hand-written string: the judge compares entries
// two at a time, so the entry is the line itself, not a generator.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, 83 characters. A robot vacuum that mapped a
// crumb as load-bearing furniture and now refuses to touch it —
// deadpan machine voice, rooted in its own world (its map), with the
// joke landing on the turn at the end.
const ENTRY =
  "I mapped that crumb as load-bearing. Remove it and the whole living room collapses.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 140
// characters, not only white space. Fail loudly here rather than
// shipping an entry the sealed scorer would refuse.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  console.error(`Entry invalid: ${ENTRY.length} characters`);
  process.exit(1);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
