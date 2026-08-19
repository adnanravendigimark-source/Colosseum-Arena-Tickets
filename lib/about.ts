import { sql } from "./db";

export interface AboutPageContent {
  heroEyebrow: string;
  heroHeading: string;
  heroSubheading: string;
  heroImage: string;
  heroImageAlt: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  noIndex: boolean;
  noFollow: boolean;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

const DEFAULT_CONTENT = `
<h2>Our Mission</h2>
<p><strong>Why We Created Colosseum Arena Tickets.</strong> Visiting the Colosseum is a bucket-list dream for millions of travelers, but the ticket booking process can be confusing and overwhelming. Between general admission sell-outs, strict daily quotas, multiple entrance gates, and restricted underground zones, finding the right ticket shouldn't be difficult.</p>
<p>Colosseum Arena Tickets is an independent travel portal dedicated to providing clear, transparent comparisons of official fast-track tickets, direct Gladiator Arena Floor access passes, and historian-led guided tours in partnership with licensed Italian providers.</p>
<h2>How We Choose Tickets &amp; Tours</h2>
<p>Every ticket and guided experience featured on our site meets rigorous quality, reliability, and security standards. We don&rsquo;t believe the most expensive ticket is automatically the best, or that one experience is right for every traveler. A first-time visitor may prefer straightforward general admission, while a history enthusiast might get more value from Arena Floor or Underground access. Families often prioritize shorter routes and flexible timing, while a guided tour can be worth it for anyone who wants context they won&rsquo;t get from a self-guided visit.</p>
<p>When evaluating tickets and tours, we consider:</p>
<ul>
<li><strong>Guaranteed Skip-The-Line Access.</strong> Every pre-booked ticket comes with an official timed entry slot to bypass the 2-3 hour general admission lines.</li>
<li><strong>Licensed Rome Archaeologist Guides.</strong> Our featured guided tours are led by certified Italian historians and archaeologists with exceptional traveler ratings.</li>
<li><strong>Free 24h Cancellation &amp; Support.</strong> Transparent pricing with flexible 100% free cancellation up to 24 hours before your scheduled entry time.</li>
<li><strong>Exclusive Restricted Access.</strong> Specialized passes providing entry to restricted areas including the Gladiator Arena Floor and Hypogeum Underground.</li>
</ul>
<p>We prioritize established operators with strong customer feedback and clear information about what their tickets and tours include.</p>
<h2>Independent Colosseum Ticket Guide</h2>
<p>Colosseum Arena Tickets is an independent travel website and is not an official Colosseum, Roman Forum, or Parco Archeologico del Colosseo ticketing service.</p>
<p>We independently research and present ticket and tour options to help travelers compare experiences more easily.</p>
<p>When you book a ticket or tour through our website, your reservation is completed through a trusted third-party booking platform, GetYourGuide. Your booking, payment, cancellation terms and customer support are then subject to that platform&rsquo;s conditions and the conditions of the selected experience.</p>
<h2>Our Content</h2>
<p>Our travel guides are written to answer the questions people actually have before booking, from whether Arena Floor access is worth the extra cost to choosing between ticket tiers, tour lengths and departure times.</p>
<p>We aim to provide clear, practical information rather than making every ticket sound like the best option. When a longer guided tour isn&rsquo;t the best fit for someone short on time, or a fully outdoor route isn&rsquo;t ideal in extreme summer heat, we say so.</p>
<p>Information can change, so travelers should always check the latest entry times, inclusions, meeting points, accessibility information and cancellation conditions on the booking page before purchasing.</p>
<h2>Affiliate Disclosure</h2>
<p>When you book Colosseum tickets or tours through links on our site, we may receive an affiliate commission at no extra cost to you. This enables us to maintain up-to-date, independent travel guides and pricing data for global visitors.</p>
<p>Our goal remains the same regardless of commission: to help you compare Colosseum tickets and tours and choose the option that best matches your visit.</p>
<p>Have questions about visiting the Colosseum? Get in touch with our team on our <a href="/contact">contact page</a>.</p>
`.trim();

const DEFAULT_ABOUT: AboutPageContent = {
  heroEyebrow: "About Us",
  heroHeading: "Your Trusted Guide to Colosseum Arena Tickets & Rome Tours",
  heroSubheading:
    "We help travelers navigate Colosseum ticket options, secure exclusive Arena Floor access, bypass multi-hour lines, and experience ancient Rome with licensed archaeologist guides.",
  heroImage: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=2400&auto=format&fit=crop",
  heroImageAlt: "Panoramic view of the Colosseum amphitheater in Rome, Italy",
  content: DEFAULT_CONTENT,
  metaTitle: "About Us | Colosseum Arena Tickets Rome Guide",
  metaDescription:
    "Learn about Colosseum Arena Tickets: our mission, curation standards, and independent guide to the best Colosseum tickets in Rome.",
  canonicalUrl: "",
  noIndex: false,
  noFollow: false,
  ogTitle: "About Us | Colosseum Arena Tickets Rome Guide",
  ogDescription:
    "Learn about Colosseum Arena Tickets: our mission, curation standards, and independent guide to the best Colosseum tickets in Rome.",
  ogImage: "",
};

function rowToAbout(row: any): AboutPageContent {
  return {
    heroEyebrow: row.hero_eyebrow || DEFAULT_ABOUT.heroEyebrow,
    heroHeading: row.hero_heading || DEFAULT_ABOUT.heroHeading,
    heroSubheading: row.hero_subheading || DEFAULT_ABOUT.heroSubheading,
    heroImage: row.hero_image || DEFAULT_ABOUT.heroImage,
    heroImageAlt: row.hero_image_alt || DEFAULT_ABOUT.heroImageAlt,
    content: row.content || DEFAULT_ABOUT.content,
    metaTitle: row.meta_title || DEFAULT_ABOUT.metaTitle,
    metaDescription: row.meta_description || DEFAULT_ABOUT.metaDescription,
    canonicalUrl: row.canonical_url || "",
    noIndex: !!row.no_index,
    noFollow: !!row.no_follow,
    ogTitle: row.og_title || "",
    ogDescription: row.og_description || "",
    ogImage: row.og_image || "",
  };
}

export async function getAboutPage(): Promise<AboutPageContent> {
  try {
    const rows = await sql`SELECT * FROM about_page WHERE id = 1 LIMIT 1`;
    return rows.length ? rowToAbout(rows[0]) : DEFAULT_ABOUT;
  } catch {
    return DEFAULT_ABOUT;
  }
}

export async function setAboutIndexing(noIndex: boolean, noFollow: boolean): Promise<void> {
  await sql`
    INSERT INTO about_page (id, no_index, no_follow)
    VALUES (1, ${!!noIndex}, ${!!noFollow})
    ON CONFLICT (id) DO UPDATE SET
      no_index = EXCLUDED.no_index,
      no_follow = EXCLUDED.no_follow
  `;
}

export async function saveAboutPage(data: AboutPageContent): Promise<void> {
  await sql`
    INSERT INTO about_page (
      id, hero_eyebrow, hero_heading, hero_subheading, hero_image, hero_image_alt,
      content,
      meta_title, meta_description, canonical_url, no_index, no_follow,
      og_title, og_description, og_image
    ) VALUES (
      1, ${data.heroEyebrow}, ${data.heroHeading}, ${data.heroSubheading},
      ${data.heroImage}, ${data.heroImageAlt},
      ${data.content},
      ${data.metaTitle}, ${data.metaDescription}, ${data.canonicalUrl || ""},
      ${!!data.noIndex}, ${!!data.noFollow},
      ${data.ogTitle || ""}, ${data.ogDescription || ""}, ${data.ogImage || ""}
    )
    ON CONFLICT (id) DO UPDATE SET
      hero_eyebrow = EXCLUDED.hero_eyebrow,
      hero_heading = EXCLUDED.hero_heading,
      hero_subheading = EXCLUDED.hero_subheading,
      hero_image = EXCLUDED.hero_image,
      hero_image_alt = EXCLUDED.hero_image_alt,
      content = EXCLUDED.content,
      meta_title = EXCLUDED.meta_title,
      meta_description = EXCLUDED.meta_description,
      canonical_url = EXCLUDED.canonical_url,
      no_index = EXCLUDED.no_index,
      no_follow = EXCLUDED.no_follow,
      og_title = EXCLUDED.og_title,
      og_description = EXCLUDED.og_description,
      og_image = EXCLUDED.og_image
  `;
}
