import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Funniest Time Machine Warning Label — make.fun entry (program/v1, Node 22).
// One warning label for a time machine.
// Verified deterministic: two local runs write byte-identical entry.txt,
// sha256 3d4971ea312ab2722f5fa6a7dcd1068c256eb3dfefef0c81e37bffa2161d8817.
const ENTRY =
  "WARNING: If you see your own grave, do not read the dates. Some spoilers are final.";

// Gate self-check: 1–120 characters, not only whitespace, exactly one line.
// Fails loudly instead of handing in a bad entry.
if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(`entry length ${ENTRY.length} outside gate 1-120`);
}
if (!ENTRY.trim()) {
  throw new Error("entry is only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be exactly one line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
