// Cat Reviews Its Human — make.fun sealed entry (program/v1).
// Writes a single one-star review, written by a house cat about its
// human, to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "One star. She types on the warmest seat in the house for eight hours straight, then acts shocked when I sit on her hands to file my complaint.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Length gate: the competition requires exactly one line of 1-200
// characters, with no trailing newline. Refuse to write anything else.
if (REVIEW.includes("\n") || REVIEW.includes("\r")) {
  console.error("error: review must be a single line");
  process.exit(1);
}

if (REVIEW.length < 1 || REVIEW.length > 200) {
  console.error(
    `error: review must be 1-200 characters, got ${REVIEW.length}`,
  );
  process.exit(1);
}

if (REVIEW.trim().length === 0) {
  console.error("error: review must not be blank");
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), REVIEW, "utf8");
