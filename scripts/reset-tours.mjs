// One-time fix-up script.
//
// Your first run of setup-db.mjs seeded the `tours` table successfully
// (6 rows) BEFORE it crashed on posts, so those 6 tour rows are now
// permanently sitting in your database with the old data — including a
// few images that turned out to be wrong (a Leaning Tower of Pisa photo,
// a Trevi Fountain photo, and a Vatican/St. Peter's Square photo, none of
// which are the Colosseum). setup-db.mjs's seedTours() skips re-seeding
// whenever the tours table already has rows, so simply re-running it will
// NOT pick up the corrected images in data/tours.json.
//
// This script deletes the existing tours rows so the next
// `node scripts/setup-db.mjs` run re-seeds tours fresh from the corrected
// data/tours.json (posts, homepage, faqs, etc. are untouched — they don't
// need this, posts was still empty since it crashed before inserting any
// rows).
//
// How to run it:
//   node scripts/reset-tours.mjs
//   node scripts/setup-db.mjs

import fs from "fs";
import path from "path";
import { neon } from "@neondatabase/serverless";

function loadDotEnv() {
  const envPath = path.join(process.cwd(), ".env");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf-8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

loadDotEnv();

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is not set in .env — nothing to do.");
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);

async function main() {
  const [{ count }] = await sql`SELECT COUNT(*)::int AS count FROM tours`;
  if (count === 0) {
    console.log("tours: table is already empty — nothing to reset.");
    return;
  }
  await sql`DELETE FROM tours`;
  console.log(`tours: deleted ${count} row(s). Now run: node scripts/setup-db.mjs`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("\nReset failed:", err);
    process.exit(1);
  });
