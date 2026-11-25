import { mkdirSync, writeFileSync } from "node:fs";

// One line summing up the week, at most 100 characters.
const line =
  "Broke prod Monday, fixed it Tuesday, shipped nothing all week, still got praised on Friday.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
