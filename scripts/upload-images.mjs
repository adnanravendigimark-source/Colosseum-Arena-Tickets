import fs from "fs";
import path from "path";
import { put } from "@vercel/blob";
import { neon } from "@neondatabase/serverless";

function loadDotEnv() {
  const envPath = path.join(process.cwd(), ".env");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf-8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf("=");
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();
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

const sql = neon(process.env.DATABASE_URL);

async function main() {
  const coverSrc =
    "/Users/adnankhan/.gemini/antigravity-ide/brain/43c42419-95ae-40c3-a109-0ecd02974340/colosseum_arena_best_time_cover_1792733411475.jpg";
  const inlineSrc =
    "/Users/adnankhan/.gemini/antigravity-ide/brain/43c42419-95ae-40c3-a109-0ecd02974340/colosseum_arena_floor_golden_hour_1792733448217.jpg";

  const publicDir = path.join(process.cwd(), "public", "images");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const coverDest = path.join(publicDir, "colosseum-arena-best-time-cover.jpg");
  const inlineDest = path.join(publicDir, "colosseum-arena-floor-golden-hour.jpg");

  fs.copyFileSync(coverSrc, coverDest);
  fs.copyFileSync(inlineSrc, inlineDest);
  console.log("Copied local files to public/images/");

  // Upload to Vercel Blob
  const coverBuf = fs.readFileSync(coverDest);
  const inlineBuf = fs.readFileSync(inlineDest);

  console.log("Uploading cover to Vercel Blob...");
  const coverBlob = await put("blog/colosseum-arena-best-time-cover.jpg", coverBuf, {
    access: "public",
    contentType: "image/jpeg",
  });
  console.log("Cover Blob URL:", coverBlob.url);

  console.log("Uploading inline image to Vercel Blob...");
  const inlineBlob = await put("blog/colosseum-arena-floor-golden-hour.jpg", inlineBuf, {
    access: "public",
    contentType: "image/jpeg",
  });
  console.log("Inline Blob URL:", inlineBlob.url);

  // Record in media_library table
  await sql`
    INSERT INTO media_library (url, filename, content_type, size_bytes)
    VALUES (${coverBlob.url}, 'colosseum-arena-best-time-cover.jpg', 'image/jpeg', ${coverBuf.length})
    ON CONFLICT (url) DO NOTHING
  `;

  await sql`
    INSERT INTO media_library (url, filename, content_type, size_bytes)
    VALUES (${inlineBlob.url}, 'colosseum-arena-floor-golden-hour.jpg', 'image/jpeg', ${inlineBuf.length})
    ON CONFLICT (url) DO NOTHING
  `;

  console.log("Media records successfully inserted into DB!");

  fs.writeFileSync(
    path.join(process.cwd(), "scripts", "uploaded-images.json"),
    JSON.stringify(
      {
        cover: {
          local: "/images/colosseum-arena-best-time-cover.jpg",
          blobUrl: coverBlob.url,
          sizeBytes: coverBuf.length,
        },
        inline: {
          local: "/images/colosseum-arena-floor-golden-hour.jpg",
          blobUrl: inlineBlob.url,
          sizeBytes: inlineBuf.length,
        },
      },
      null,
      2
    )
  );
}

main().catch(console.error);
