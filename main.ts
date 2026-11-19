// Hands in the GTA VI trophy guide: copies app/ and screenshots/ from this
// repository to the output directory and writes dossier.json with
// buildDossier from vendor/makefun-frontend.ts.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The output directory is created first if missing, and only its CONTENTS
// are cleared — never the directory itself (the grader mounts it read-only
// and runs as an unprivileged user, so deleting the directory fails).
// The trophy file is checked before anything is written: all 55 official
// names, each with a non-blank guide, or the program exits non-zero.

import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildDossier } from "./vendor/makefun-frontend.ts";

const here = fileURLToPath(new URL(".", import.meta.url));

// The gate's caps (competition.yaml reference/gate.json): dossier text at
// most 163,840 bytes, 3–4 screenshots of at most 256 KiB, app/ at most 993
// files and 48 MiB, paths at most 1,000 bytes, dossier at most 1.5 MiB.
const CAPS = {
  text_max_bytes: 163840,
  screenshots: { max: 4, max_bytes: 262144 },
  app_max_files: 993,
  app_max_bytes: 50331648,
  app_path_max_bytes: 1000,
};

// The 55 official trophy names, as PlayStation publishes them (frozen
// 2026-11-18). The trophy file must name every one of them, exactly.
const OFFICIAL_NAMES = [
  "Vice Got a Price!",
  "Just Like Paradise",
  "Paradise Lost",
  "T**s Ass Drug Money",
  "Vice City, Baby!",
  "Top Of The World, Ma",
  "You Gotta Know When to Get Off",
  "Trust",
  "Break the Bank",
  "Family Matters",
  "DWNFALL",
  "Hi-Jacked",
  "Snow Storm",
  "A Long Road",
  "Cunning Stunts",
  "Master of None",
  "The Shootist",
  "Top Fun",
  "Earn Cash, Not Kudos",
  "Baited My Tackle",
  "Stick Fiddler",
  "Road to Rehabilitation",
  "This Was No Boat Accident",
  "The Lone Rider",
  "Strangers & Freaks",
  "Supply & Demand",
  "Spin On This!",
  "Positive Mental Attitude",
  "Fair Game",
  "Don't Touch My Deck",
  "You WAiNKer!",
  "One Last Thing",
  "Hot Together",
  "Retail Therapy",
  "Whip It Good",
  "Gunslinger",
  "Catch Me If You Can",
  "Challenging Tank",
  "Sneakthief",
  "Maximum Withdrawal",
  "A Classic Blitz Play",
  "The Goodtime State",
  "Pest Control",
  "In The Beginning…",
  "Capital Offense",
  "Let’s Go Bowling",
  "Personal Best",
  "Actions Speak Louder",
  "Bad Luck, I Guess",
  "The Truth Is Out There",
  "Ten Pin",
  "Dime on the Dollar",
  "Treat Yo Self",
  "Little Boxes",
  "On the Spot",
];

function fail(message: string): never {
  process.stderr.write(`trophy guide: ${message}\n`);
  process.exit(1);
}

function arg(name: string, fallback: string): string {
  const at = process.argv.indexOf(`--${name}`);
  if (at >= 0 && at + 1 < process.argv.length) return process.argv[at + 1]!;
  const withEquals = process.argv.find((a) => a.startsWith(`--${name}=`));
  return withEquals === undefined ? fallback : withEquals.slice(name.length + 3);
}

/** Check app/data/trophies.json against the official list before writing. */
function checkTrophies(appDir: string): void {
  const file = join(appDir, "data", "trophies.json");
  if (!existsSync(file)) fail(`no trophy file at ${file}`);
  let data: unknown;
  try {
    data = JSON.parse(readFileSync(file, "utf8"));
  } catch (e) {
    fail(`trophy file does not parse: ${String(e)}`);
  }
  const list = (data as { trophies?: unknown[] }).trophies;
  if (!Array.isArray(list)) fail("trophy file has no trophies array");
  if (list.length !== 55) fail(`trophy file names ${list.length} trophies, not 55`);
  const seen = new Set<string>();
  for (const item of list) {
    const t = item as { name?: unknown; guide?: unknown };
    if (typeof t.name !== "string" || !OFFICIAL_NAMES.includes(t.name)) {
      fail(`trophy file names an unknown trophy: ${JSON.stringify(t.name)}`);
    }
    if (seen.has(t.name)) fail(`trophy file names ${JSON.stringify(t.name)} twice`);
    seen.add(t.name);
    if (typeof t.guide !== "string" || t.guide.trim() === "") {
      fail(`trophy ${JSON.stringify(t.name)} has a blank guide`);
    }
  }
  for (const name of OFFICIAL_NAMES) {
    if (!seen.has(name)) fail(`trophy file is missing ${JSON.stringify(name)}`);
  }
}

/** Remove only the contents of a directory, never the directory itself. */
function clearContents(dir: string): void {
  for (const entry of readdirSync(dir)) {
    rmSync(join(dir, entry), { recursive: true, force: true });
  }
}

function copyTree(src: string, dst: string): void {
  mkdirSync(dst, { recursive: true });
  for (const entry of readdirSync(src, { withFileTypes: true })) {
    const from = join(src, entry.name);
    const to = join(dst, entry.name);
    if (entry.isDirectory()) copyTree(from, to);
    else if (entry.isFile()) copyFileSync(from, to);
  }
}

const out = arg("output", process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
const appDir = join(here, "app");
const shotsDir = join(here, "screenshots");

checkTrophies(appDir);
if (!existsSync(join(appDir, "index.html"))) fail("app/index.html is missing");
if (!existsSync(shotsDir)) fail("screenshots/ is missing");
const shots = readdirSync(shotsDir).filter((f) => !f.startsWith(".") && statSync(join(shotsDir, f)).isFile());
if (shots.length < 3 || shots.length > 4) fail(`screenshots/ holds ${shots.length} images, not 3 or 4`);

mkdirSync(out, { recursive: true });
clearContents(out);
copyTree(appDir, join(out, "app"));
copyTree(shotsDir, join(out, "screenshots"));

let dossier: Uint8Array;
try {
  dossier = buildDossier(out, CAPS);
} catch (e) {
  fail(`dossier refused: ${e instanceof Error ? e.message : String(e)}`);
}
writeFileSync(join(out, "dossier.json"), dossier);
console.log(`trophy guide: 55 trophies, ${shots.length} screenshots, dossier ${dossier.length} bytes -> ${out}`);
