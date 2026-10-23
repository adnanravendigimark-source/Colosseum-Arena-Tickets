import fs from "fs";
import path from "path";
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

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is not set.");
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);

const articleSlug = "best-time-to-visit-the-colosseum-arena";
const focusKeyword = "Colosseum Arena Tickets";

const coverImageUrl =
  "https://y5x6va83kvp1gowk.public.blob.vercel-storage.com/blog/colosseum-arena-best-time-cover-ns5MdvJjFvDxyNhZvZV76JIqGKUQiH.jpg";
const inlineImageUrl =
  "https://y5x6va83kvp1gowk.public.blob.vercel-storage.com/blog/colosseum-arena-floor-golden-hour-IRAJPGjM95YCSAKWe5rEADkaqB5RRi.jpg";

const contentHtml = `<p class="lead-paragraph">Standing on the reconstructed wooden arena floor where ancient gladiators once battled is one of Rome’s most extraordinary travel experiences. Because this central platform offers an unobstructed 360-degree amphitheater view and looks directly down into the exposed hypogeum labyrinth, demand for <strong>Colosseum Arena Tickets</strong> remains exceptionally high year-round. Identifying the <strong>best time to visit the Colosseum Arena</strong> allows you to navigate seasonal weather patterns, sidestep peak crowd congestion, and secure your preferred entry slot without unnecessary hassle.</p>
<h2>Best Months and Seasonal Considerations</h2>
<p>Rome exhibits distinct seasonal travel patterns that greatly affect your monument experience:</p>
<ul>
<li><strong>Spring (April to May):</strong> Widely regarded as an optimal window. Daily temperatures hover between 18°C and 23°C (64°F–73°F), creating comfortable walking conditions across the open-air arena deck and nearby Palatine Hill.</li>
<li><strong>Autumn (September to October):</strong> Another premier travel window. The intense summer humidity dissipates, daylight remains generous, and tourist volumes decrease noticeably after European school vacations conclude.</li>
<li><strong>Summer (June to August):</strong> The busiest period across central Rome. Midday temperatures frequently exceed 35°C (95°F), and the uncovered arena floor offers minimal shade. If visiting in summer, early morning reservations are essential.</li>
<li><strong>Winter (November to February):</strong> The quietest months outside Christmas and New Year. While days are cooler and daylight is shorter, crowd levels are at their annual minimum, providing tranquil photographic opportunities.</li>
</ul>
<figure><img src="${inlineImageUrl}" alt="Colosseum reconstructed wooden arena floor framed by the stone arch of the Gladiator Gate during golden hour" /><figcaption>Standing on the reconstructed arena floor reveals the labyrinthine hypogeum corridors beneath.</figcaption></figure>
<h2>The Best Time of Day for Arena Floor Access</h2>
<p>Timing your daily visit correctly makes a dramatic difference inside the Flavian Amphitheater:</p>
<ul>
<li><strong>Early Morning (8:30 AM to 10:00 AM):</strong> Entering during the first opening slots lets you step onto the arena floor before mid-day tour groups gather. The low morning sun casts beautiful illumination through the eastern arches, and temperatures remain pleasantly cool.</li>
<li><strong>Late Afternoon (2 Hours Before Closing):</strong> Golden hour bathes the ancient travertine limestone in warm honey tones. Late afternoon slots also allow you to explore the Colosseum first and finish with a sunset walk through the Roman Forum.</li>
</ul>
<h2>Understanding Arena Floor Access and Ticket Types</h2>
<p>Arena floor access is not included with basic general admission; it depends entirely on your specific ticket type and prevailing availability. While standard entry grants access only to the first and second spectator tiers, dedicated <strong>Colosseum Arena Tickets</strong> provide special passage through the Gladiator Gate (Porta Libitinaria) directly onto the performance stage.</p>
<p>Because the wooden platform has strict safety capacity limits, only a controlled number of visitors are allowed onto the deck simultaneously. Availability sells out quickly, making advanced online booking essential.</p>
<h2>Practical Tips for Planning Your Visit</h2>
<p>Keep these verified guidelines in mind when reserving:</p>
<ul>
<li><strong>Book well in advance:</strong> High seasonal demand means arena-access slots often sell out weeks ahead.</li>
<li><strong>Match names with ID:</strong> Italian monument regulations require personal names on vouchers to match valid passports or government identification at security turnstiles.</li>
<li><strong>Arrive early:</strong> Security screening at the dedicated Gladiator Gate moves swiftly, but arriving 15 minutes ahead ensures smooth check-in.</li>
<li><strong>Wear supportive footwear:</strong> Combining the arena floor with the uneven cobblestones of the Roman Forum and Palatine Hill requires sturdy walking shoes.</li>
</ul>
<h3>Tour Duration and Combined Sites</h3>
<p>Expect to spend approximately 1.5 to 2 hours exploring the arena floor and Colosseum tiers, followed by additional time at the Roman Forum and Palatine Hill.</p>`;

// Calculate exact text word count
const plainText = contentHtml
  .replace(/<[^>]+>/g, " ")
  .replace(/&amp;/g, "&")
  .replace(/&lt;/g, "<")
  .replace(/&gt;/g, ">")
  .replace(/\s+/g, " ")
  .trim();

const words = plainText.split(" ").filter(Boolean);
console.log(`Calculated plain-text word count: ${words.length} words`);

const articleRecord = {
  slug: articleSlug,
  title: "Best Time to Visit the Colosseum Arena",
  metaTitle: "Best Time to Visit the Colosseum Arena (Seasons & Hours)",
  metaDescription:
    "Find the best time to visit the Colosseum Arena in Rome. Compare seasonal weather, crowd levels, early morning vs golden hour slots, and ticket booking tips.",
  category: "Visitor Guide",
  excerpt:
    "When to visit Rome's ancient amphitheater: optimal months, morning vs golden hour lighting, and securing Colosseum Arena tickets.",
  quickAnswer:
    "The best time to visit the Colosseum Arena is during the shoulder seasons of April to May and September to October, when Rome enjoys mild temperatures and moderate crowd levels. For daily visits, reserve the earliest morning time slot (8:30 AM to 9:00 AM) or a late-afternoon entry two hours before closing to experience the arena floor in softer light and cooler conditions.",
  readTime: "4 min read",
  date: "2026-10-23",
  updatedAt: "2026-10-23T05:30:00.000Z",
  image: coverImageUrl,
  imageAlt: "Sunlit wooden arena floor looking across the subterranean hypogeum ruins inside the Roman Colosseum",
  author: "Marco Silvestri / Rome Tour Director",
  recommendedTourId: "colosseum-arena-floor-skip-the-line-ticket",
  recommendedTourAfterBlock: 1,
  content: contentHtml,
  ctaHeading: "Ready to step onto the Arena Floor?",
  ctaBody: "Compare official Colosseum Arena tickets with skip-the-line priority entry and Roman Forum access.",
  ctaButtonText: "Compare Arena Tickets & Passes →",
  ctaButtonHref: "/#prices",
  focusKeyword: focusKeyword,
  noIndex: false,
  noFollow: false,
  canonicalUrl: "https://www.colosseumarenaentry.com/blog/best-time-to-visit-the-colosseum-arena",
  ogTitle: "Best Time to Visit the Colosseum Arena (Seasons & Hours)",
  ogDescription:
    "Find the best time to visit the Colosseum Arena in Rome. Compare seasonal weather, crowd levels, early morning vs golden hour slots, and ticket booking tips.",
  ogImage: coverImageUrl,
};

async function seed() {
  console.log("Seeding article into Neon database...");

  await sql`
    INSERT INTO posts (
      slug, title, meta_title, meta_description, category, excerpt,
      quick_answer, read_time, date, updated_at, image, image_alt,
      recommended_tour_id, recommended_tour_after_block, content, sort_order,
      cta_heading, cta_body, cta_button_text, cta_button_href, focus_keyword,
      no_index, no_follow, canonical_url, og_title, og_description, og_image
    ) VALUES (
      ${articleRecord.slug}, ${articleRecord.title}, ${articleRecord.metaTitle}, ${articleRecord.metaDescription},
      ${articleRecord.category}, ${articleRecord.excerpt}, ${articleRecord.quickAnswer}, ${articleRecord.readTime},
      ${articleRecord.date}, ${articleRecord.updatedAt}, ${articleRecord.image}, ${articleRecord.imageAlt},
      ${articleRecord.recommendedTourId}, ${articleRecord.recommendedTourAfterBlock},
      ${JSON.stringify(articleRecord.content)}::jsonb, 0,
      ${articleRecord.ctaHeading}, ${articleRecord.ctaBody}, ${articleRecord.ctaButtonText}, ${articleRecord.ctaButtonHref},
      ${articleRecord.focusKeyword}, ${articleRecord.noIndex}, ${articleRecord.noFollow}, ${articleRecord.canonicalUrl},
      ${articleRecord.ogTitle}, ${articleRecord.ogDescription}, ${articleRecord.ogImage}
    )
    ON CONFLICT (slug) DO UPDATE SET
      title = EXCLUDED.title,
      meta_title = EXCLUDED.meta_title,
      meta_description = EXCLUDED.meta_description,
      category = EXCLUDED.category,
      excerpt = EXCLUDED.excerpt,
      quick_answer = EXCLUDED.quick_answer,
      read_time = EXCLUDED.read_time,
      date = EXCLUDED.date,
      updated_at = EXCLUDED.updated_at,
      image = EXCLUDED.image,
      image_alt = EXCLUDED.image_alt,
      recommended_tour_id = EXCLUDED.recommended_tour_id,
      recommended_tour_after_block = EXCLUDED.recommended_tour_after_block,
      content = EXCLUDED.content,
      sort_order = EXCLUDED.sort_order,
      cta_heading = EXCLUDED.cta_heading,
      cta_body = EXCLUDED.cta_body,
      cta_button_text = EXCLUDED.cta_button_text,
      cta_button_href = EXCLUDED.cta_button_href,
      focus_keyword = EXCLUDED.focus_keyword,
      no_index = EXCLUDED.no_index,
      no_follow = EXCLUDED.no_follow,
      canonical_url = EXCLUDED.canonical_url,
      og_title = EXCLUDED.og_title,
      og_description = EXCLUDED.og_description,
      og_image = EXCLUDED.og_image
  `;

  console.log("Database upsert successful!");

  // Verify DB state
  const allPosts = await sql`SELECT slug, title, category, date FROM posts ORDER BY date DESC`;
  console.log(`Current DB posts count: ${allPosts.length}`);
  console.log(allPosts);

  // Sync with data/posts.json
  const postsJsonPath = path.join(process.cwd(), "data", "posts.json");
  let existingJsonPosts = [];
  if (fs.existsSync(postsJsonPath)) {
    try {
      existingJsonPosts = JSON.parse(fs.readFileSync(postsJsonPath, "utf-8"));
    } catch (e) {
      existingJsonPosts = [];
    }
  }

  // Remove any older duplicate with the same slug if present, and prepend the new article
  const filteredJson = existingJsonPosts.filter((p) => p.slug !== articleSlug);
  const updatedJson = [articleRecord, ...filteredJson];
  fs.writeFileSync(postsJsonPath, JSON.stringify(updatedJson, null, 2), "utf-8");
  console.log(`Updated data/posts.json with ${updatedJson.length} posts.`);
}

seed().catch(console.error);
