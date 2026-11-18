import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SCAN_DIRS = ["app", "components", "content"];
const ERRORS = [];

function walk(dir) {
  const full = path.join(ROOT, dir);
  if (!fs.existsSync(full)) return [];
  const out = [];
  for (const entry of fs.readdirSync(full, { withFileTypes: true })) {
    const rel = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walk(rel));
    } else if (entry.name.endsWith(".ts") || entry.name.endsWith(".tsx")) {
      out.push(rel);
    }
  }
  return out;
}

for (const dir of SCAN_DIRS) {
  for (const rel of walk(dir)) {
    const normalized = rel.replace(/\\/g, "/");
    const content = fs.readFileSync(path.join(ROOT, rel), "utf8");

    // 1. Check for literal {{...}} tokens outside comments
    const nonCommentContent = content
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/^\s*\/\/.*$/gm, "");
    const hasDoubleBraces = /\{\{[A-Z0-9_]+\}\}/.test(nonCommentContent);
    if (hasDoubleBraces) {
      ERRORS.push(`[prebuild] Literal {{...}} placeholder found in ${normalized}`);
    }

    // 2. Check for "worldwide" outside allowed contexts (coverage page, insurance cert, facts/lib/tools data)
    const allowedWorldwideFiles = new Set([
      "app/coverage/page.tsx",
      "content/facts.ts",
      "content/permits.ts",
      "content/faqs.ts",
      "content/services.ts",
      "content/tools-data.ts",
      "content/airports.ts",
      "content/countries.ts",
      "app/tools/airport-code-lookup/page.tsx",
      "app/tools/page.tsx",
      "app/about/page.tsx",
      "app/non-schedule-filing/page.tsx",
    ]);

    if (!allowedWorldwideFiles.has(normalized)) {
      const lines = nonCommentContent.split(/\r?\n/);
      lines.forEach((line, idx) => {
        if (
          /\bworldwide\b/i.test(line) &&
          !/third-party/i.test(line) &&
          !/worldwide insurance/i.test(line) &&
          !/worldwidePhone/i.test(line) &&
          !/worldwide clients/i.test(line) &&
          !/aerodrome codes worldwide/i.test(line) &&
          !/\{\/\*/.test(line)
        ) {
          ERRORS.push(
            `[prebuild] Disallowed "worldwide" claim in ${normalized}:${idx + 1}: ${line.trim()}`
          );
        }
      });
    }
  }
}

if (ERRORS.length > 0) {
  console.error("Prebuild publish gate failed:\n" + ERRORS.join("\n"));
  process.exit(1);
}

console.log("[prebuild] Publish gate passed: 0 placeholder tokens, 0 disallowed claims.");
