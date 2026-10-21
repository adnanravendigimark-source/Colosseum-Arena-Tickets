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

const articleData = {
  slug: "colosseum-gladiator-gate-arena-tunnel-guide",
  title: "Colosseum Gladiator Gate: Entering Through the Ancient Arena Tunnel",
  metaTitle: "Colosseum Gladiator Gate: Entering Through the Ancient Arena Tunnel",
  metaDescription: "Discover what it feels like to enter Rome's Colosseum through the Gladiator Gate (Porta Libitinaria). Learn how Arena Floor tickets grant access to the gladiator tunnel.",
  category: "Visitor Guide",
  excerpt: "Discover what it feels like to enter Rome's Colosseum through the Gladiator Gate (Porta Libitinaria) and step directly onto the gladiator arena floor.",
  quickAnswer: "The Colosseum Gladiator Gate (historically the Porta Libitinaria) is the exclusive eastern entrance reserved for visitors with Arena Floor tickets. It bypasses regular public queues, leading through an ancient vaulted stone corridor straight onto the reconstructed wooden arena stage overlooking the underground hypogeum.",
  readTime: "6 min read",
  date: "2026-10-21",
  updatedAt: "2026-10-21T06:15:00.000Z",
  image: "https://y5x6va83kvp1gowk.public.blob.vercel-storage.com/uploads/colosseum-arena-gladiator-gate-1792563319032-nB15ZdhwkMGawwgl8BltVHN0MegBx2.jpg",
  imageAlt: "The Colosseum arena in Rome illuminated by golden morning sunlight with reconstructed arena floor and underground hypogeum",
  author: "Marco Silvestri / Rome Tour Director",
  recommendedTourId: "colosseum-roman-forum-palatine-guided-tour",
  recommendedTourAfterBlock: 2,
  focusKeyword: "Colosseum Gladiator Gate",
  ctaHeading: "Ready to walk through the Gladiator Gate?",
  ctaBody: "Book skip-the-line Colosseum Arena Floor tickets with instant confirmation and Forum access.",
  ctaButtonText: "Book Arena Floor Tickets →",
  ctaButtonHref: "/#tours",
  noIndex: false,
  noFollow: false,
  canonicalUrl: "https://colosseum-arena-entry.com/blog/colosseum-gladiator-gate-arena-tunnel-guide",
  ogTitle: "Colosseum Gladiator Gate: Entering Through the Ancient Arena Tunnel",
  ogDescription: "Step through the ancient Porta Libitinaria onto Rome's Colosseum arena floor. Discover gladiator history, ticket tiers, and visiting tips.",
  ogImage: "https://y5x6va83kvp1gowk.public.blob.vercel-storage.com/uploads/colosseum-arena-gladiator-gate-1792563319032-nB15ZdhwkMGawwgl8BltVHN0MegBx2.jpg",
  sortOrder: 0,
  content: `<p class="lead-paragraph">Few archaeological landmarks evoke as visceral a response as the Roman Colosseum. While millions of visitors admire its towering travertine arches from the upper spectator tiers each year, only a select group experiences the amphitheater from the ground level where history unfolded. Entering through the historic Colosseum Gladiator Gate transports you straight from modern Rome into the ancient arena, retracing the footsteps of combatants who stood here two millennia ago.</p>

<p>In this guide, we explore the history, mythology, and visitor experience of the Colosseum Gladiator Gate, explaining how Arena Floor tickets grant access through this portal, what you see along the way, and practical booking tips.</p>

<h2>What Is the Colosseum Gladiator Gate?</h2>
<p>The Colosseum featured 80 arched entrances around its perimeter. Seventy-six of these arches were numbered vomitoria designed to move up to 65,000 spectators into their assigned seats quickly. However, the four grand unnumbered arches at the cardinal compass points were reserved for imperial ceremonies, religious processions, and the gladiatorial combatants.</p>

<h3>Porta Libitinaria and Porta Triumphalis: Gates of Life and Death</h3>
<p>The two primary axial portals stood opposite one another across the arena. On the western axis stood the <em>Porta Triumphalis</em> (Gate of Triumph), the entrance used for the lavish opening procession known as the <em>pompa gladiatoria</em>, where combatants entered to thunderous fanfare.</p>

<p>On the eastern axis stood the <em>Porta Libitinaria</em>, or Gate of Death. Named after Libitina, the Roman goddess of funerals, this arch was traditionally used to remove fallen fighters from the arena sands on wooden biers. Today, this restored eastern portal serves as the exclusive entry point for visitors holding Colosseum Arena Floor tickets.</p>

<h3>Why the Gladiator Gate Is Different from General Admission</h3>
<p>Standard general admission tickets direct visitors through crowded turnstiles on the southern arcades, leading up steep stairs to the second spectator tier. In contrast, entering via the Gladiator Gate bypasses standard lines entirely.</p>

<p>Arena ticket holders enter through a dedicated security checkpoint on the eastern facade. Instead of looking down at the monument from high spectator balconies, you cross directly over the threshold onto the arena stage, experiencing the amphitheater from the center of the action.</p>

<figure>
  <img src="https://y5x6va83kvp1gowk.public.blob.vercel-storage.com/uploads/colosseum-gladiator-tunnel-arch-1792563319032-Ct6Q9NDKxQXRHYwtlbBc9gn9bHLQmG.jpg" alt="Colosseum Gladiator Gate vaulted tunnel entrance looking out onto the sunlit timber arena floor stage" />
  <figcaption>Looking through the vaulted stone arch of the Gladiator Gate toward the sunlit arena floor.</figcaption>
</figure>

<h2>What Arena Floor Visitors Experience When Entering Today</h2>
<p>Entering the Colosseum through the Gladiator Gate is an unforgettable sequence of sensory impressions, transitioning from busy Roman streets into an atmospheric ancient passage.</p>

<h3>Walking Through the Vaulted Stone Corridor</h3>
<p>Passing through the outer arch, you enter a vaulted stone corridor paved with basalt blocks and framed by Roman brick masonry. The cool shadows of the corridor provide dramatic relief from the Roman sun outside. Guides often point out the structural pillars and masonry grooves where heavy timber double-doors once swung shut to secure the arena.</p>

<h3>Stepping Onto the Reconstructed Timber Arena Deck</h3>
<p>Emerging from the corridor, the entire interior of the amphitheater unfolds in a 360-degree panorama. You are standing on the modern reconstructed wooden arena deck, which covers a portion of the original performance surface. The ancient floor was framed in heavy timber beams and blanketed with sand (<em>harena</em>) to absorb moisture.</p>

<p>From the wooden deck, you can look directly downward into the hypogeum—the subterranean labyrinth of brick chambers, cages, freight ramps, and counterweighted lifts where gladiators waited and exotic beasts were hoisted into the arena.</p>

<div class="pro-tip-box">
  <div class="pro-tip-icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.493 1.508 1.333 1.508 2.316V18" /></svg>
  </div>
  <div>
    <strong>Pro Tip:</strong> Only a regulated number of visitors are permitted onto the Arena Floor at any time. This strict capacity limit keeps the arena deck far less crowded than the upper spectator rings, creating ideal conditions for unobstructed photography.
  </div>
</div>

<figure>
  <img src="https://y5x6va83kvp1gowk.public.blob.vercel-storage.com/uploads/colosseum-arena-floor-visitors-view-1792563319032-6EMMYEUTCTr2M1qMRO3T7ihjS8YK2E.jpg" alt="Visitors standing on the reconstructed Colosseum arena deck admiring the monumental Roman arches" />
  <figcaption>Visitors on the arena floor enjoy an intimate, unobstructed view of the surrounding monument and underground hypogeum.</figcaption>
</figure>

<h2>Arena Ticket Requirements and Access Rules</h2>
<p>Because the Gladiator Gate opens onto a sensitive archaeological reconstruction, entry is regulated by the Parco Archeologico del Colosseo.</p>

<h3>Booking the Correct Ticket Tier</h3>
<p>Standard general admission tickets do not include entrance through the Gladiator Gate or access to the Arena Floor. To enter via this gate, you must reserve a ticket designated as <em>Colosseum with Arena Floor Access</em> or join an authorized guided arena tour. These passes are released approximately 30 days ahead and sell out quickly.</p>

<h3>Security Checks and ID Verification</h3>
<p>Italian cultural authorities enforce mandatory nominal ticketing across all Colosseum entries. The name printed on each ticket must precisely match your government-issued ID or passport. Security guards verify identity documents prior to metal detection. Timed slots have a 15-minute grace window; late arrivals risk forfeiture.</p>

<h2>Historical Context: What Gladiators Experienced Before Combat</h2>
<p>To appreciate the walk through the Colosseum Gladiator Gate, it helps to understand what ancient fighters experienced. Most gladiators were quartered at the nearby <em>Ludus Magnus</em> training barracks east of the amphitheater.</p>

<h3>From the Ludus Magnus to the Arena Light</h3>
<p>Fighters were led through an underground tunnel connecting the Ludus Magnus directly to the Colosseum hypogeum. They waited in subterranean corridors illuminated by bronze oil lamps, surrounded by roaring caged animals and staging crews.</p>

<p>When summoned, gladiators walked up the inclined corridor toward the sunlit arch of the Gladiator Gate. The shift from darkness to bright sunlight was accompanied by the roar of 50,000 spectators seated on travertine tiers. Standing there today offers a powerful connection to Roman history.</p>

<h2>Practical Tips for Visiting the Colosseum Gladiator Gate</h2>
<ul class="custom-checklist">
  <li>
    <span class="check-circle">✓</span>
    <span><strong>Arrive 15–20 minutes early:</strong> The Gladiator Gate is located on the eastern side opposite Colle Oppio. Arrive early to clear identity checks smoothly.</span>
  </li>
  <li>
    <span class="check-circle">✓</span>
    <span><strong>Carry your physical passport or EU ID:</strong> Digital screenshots and photos of documents are not accepted by gate security.</span>
  </li>
  <li>
    <span class="check-circle">✓</span>
    <span><strong>Pack light:</strong> Large luggage, bulky backpacks, glass bottles, and tripods are strictly prohibited. Small daypacks are permitted.</span>
  </li>
  <li>
    <span class="check-circle">✓</span>
    <span><strong>Visit the Roman Forum and Palatine Hill:</strong> Your Arena Floor ticket includes 24-hour access to the adjacent Roman Forum and Palatine Hill ruins.</span>
  </li>
  <li>
    <span class="check-circle">✓</span>
    <span><strong>Wear comfortable walking shoes:</strong> Exploring the arena deck, Colosseum arcades, and Forum ruins requires walking over uneven Roman cobblestones.</span>
  </li>
</ul>

<h2>Frequently Asked Questions About the Colosseum Gladiator Gate</h2>
<p><strong>Do all Colosseum tickets include entry through the Gladiator Gate?</strong><br />No. Standard tickets enter through the general public gates and only access the first and second tiers. You must specifically book an Arena Floor ticket or arena tour to use the Gladiator Gate.</p>

<p><strong>Where is the Gladiator Gate located on the Colosseum exterior?</strong><br />The Gladiator Gate is located on the eastern side of the Colosseum, facing the Ludus Magnus ruins and Colle Oppio.</p>

<p><strong>Is the Gladiator Gate wheelchair accessible?</strong><br />Yes. The Gladiator Gate features a flat ramp entrance directly onto the timber arena floor, making it fully accessible for visitors with reduced mobility.</p>

<p><strong>How long can you spend on the arena floor?</strong><br />Visitors typically spend 20 to 30 minutes on the arena deck taking photos and viewing the hypogeum, before exploring the upper tiers and museum gallery.</p>`
};

function countWords(str) {
  const plain = str.replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ");
  const words = plain.trim().split(/\s+/).filter(Boolean);
  return words.length;
}

async function seed() {
  console.log("Seeding article:", articleData.title);
  const wordCount = countWords(articleData.content);
  console.log(`Word count: ${wordCount} words (Target: 800-1,200 words)`);
  if (wordCount < 800 || wordCount > 1200) {
    throw new Error(`Word count ${wordCount} outside allowable 800-1,200 range!`);
  }

  // 1. Upsert into database
  await sql`
    INSERT INTO posts (
      slug, title, meta_title, meta_description, category, excerpt,
      quick_answer, read_time, date, updated_at, image, image_alt,
      recommended_tour_id, recommended_tour_after_block, content, sort_order,
      cta_heading, cta_body, cta_button_text, cta_button_href, focus_keyword,
      no_index, no_follow, canonical_url, og_title, og_description, og_image
    ) VALUES (
      ${articleData.slug}, ${articleData.title}, ${articleData.metaTitle}, ${articleData.metaDescription}, ${articleData.category},
      ${articleData.excerpt}, ${articleData.quickAnswer}, ${articleData.readTime}, ${articleData.date}, ${articleData.updatedAt},
      ${articleData.image}, ${articleData.imageAlt},
      ${articleData.recommendedTourId}, ${articleData.recommendedTourAfterBlock},
      ${JSON.stringify(articleData.content)}::jsonb, ${articleData.sortOrder},
      ${articleData.ctaHeading}, ${articleData.ctaBody}, ${articleData.ctaButtonText}, ${articleData.ctaButtonHref}, ${articleData.focusKeyword},
      ${articleData.noIndex}, ${articleData.noFollow}, ${articleData.canonicalUrl}, ${articleData.ogTitle}, ${articleData.ogDescription}, ${articleData.ogImage}
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
  console.log("✓ Successfully upserted into Neon posts table!");

  // 2. Fetch all current DB posts and synchronize data/posts.json
  const allDbPosts = await sql`SELECT * FROM posts ORDER BY date DESC, sort_order ASC`;
  console.log(`Synchronizing ${allDbPosts.length} posts to data/posts.json...`);

  const jsonPosts = allDbPosts.map((p) => {
    let contentVal = p.content;
    if (typeof contentVal !== "string") {
      try {
        contentVal = typeof contentVal === "object" ? JSON.stringify(contentVal) : String(contentVal);
      } catch {
        contentVal = "";
      }
    }
    const dStr = p.date instanceof Date ? p.date.toISOString().slice(0, 10) : String(p.date || "").slice(0, 10);
    const uStr = p.updated_at instanceof Date ? p.updated_at.toISOString() : (p.updated_at ? String(p.updated_at) : dStr);

    return {
      slug: p.slug,
      title: p.title,
      metaTitle: p.meta_title || p.title,
      metaDescription: p.meta_description || p.excerpt,
      category: p.category || "Visitor Guide",
      excerpt: p.excerpt,
      quickAnswer: p.quick_answer || "",
      readTime: p.read_time || "6 min read",
      date: dStr,
      updatedAt: uStr,
      image: p.image || "",
      imageAlt: p.image_alt || "",
      coverImage: p.image || "",
      coverImageAlt: p.image_alt || "",
      publishedAt: dStr ? `${dStr}T09:00:00Z` : "2026-10-21T09:00:00Z",
      author: p.author || "Marco Silvestri / Rome Tour Director",
      recommendedTourId: p.recommended_tour_id || "colosseum-roman-forum-palatine-guided-tour",
      recommendedTourAfterBlock: p.recommended_tour_after_block,
      focusKeyword: p.focus_keyword || "",
      ctaHeading: p.cta_heading || "",
      ctaBody: p.cta_body || "",
      ctaButtonText: p.cta_button_text || "",
      ctaButtonHref: p.cta_button_href || "",
      noIndex: !!p.no_index,
      noFollow: !!p.no_follow,
      canonicalUrl: p.canonical_url || "",
      ogTitle: p.og_title || "",
      ogDescription: p.og_description || "",
      ogImage: p.og_image || "",
      content: p.content
    };
  });

  const postsJsonPath = path.join(process.cwd(), "data", "posts.json");
  fs.writeFileSync(postsJsonPath, JSON.stringify(jsonPosts, null, 2), "utf-8");
  console.log("✓ Synchronized data/posts.json with Neon database posts!");
}

seed().catch((err) => {
  console.error("Seed error:", err);
  process.exit(1);
});
