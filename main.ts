import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A time machine safety notice: the duplicate-self hazard, stated with official calm.
const label = "WARNING: If you meet a past version of yourself, do not argue. You will lose. Twice.";

const limit = 120;
if ([...label].length > limit) throw new Error(`label is ${[...label].length} characters, limit ${limit}`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), label);
