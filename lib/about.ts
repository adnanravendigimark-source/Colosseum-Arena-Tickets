import { sql } from "./db";

export interface AboutReason {
  icon: string;
  title: string;
  body: string;
}

export interface AboutPageContent {
  heroEyebrow: string;
  heroHeading: string;
  heroSubheading: string;
  heroImage: string;
  heroImageAlt: string;
  introHeading: string;
  introParagraph1: string;
  introParagraph2: string;
  introImage: string;
  introImageAlt: string;
  reasonsHeading: string;
  reasonsSubheading: string;
  reasons: AboutReason[];
  disclosureHeading: string;
  disclosureBody: string;
  ctaText: string;
  ctaButtonLabel: string;
  contactPromptHtml: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  noIndex: boolean;
  noFollow: boolean;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

const DEFAULT_ABOUT: AboutPageContent = {
  heroEyebrow: "About Us",
  heroHeading: "Your Trusted Guide to Colosseum Arena Tickets & Rome Tours",
  heroSubheading:
    "We help travelers navigate Colosseum ticket options, secure exclusive Arena Floor access, bypass multi-hour lines, and experience ancient Rome with licensed archaeologist guides.",
  heroImage: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=2400&auto=format&fit=crop",
  heroImageAlt: "Panoramic view of the Colosseum amphitheater in Rome, Italy",
  introHeading: "Why We Created Colosseum Arena Tickets",
  introParagraph1:
    "Visiting the Colosseum is a bucket-list dream for millions of travelers, but the ticket booking process can be confusing and overwhelming. Between general admission sell-outs, strict daily quotas, multiple entrance gates, and restricted underground zones, finding the right ticket shouldn't be difficult.",
  introParagraph2:
    "Colosseum Arena Tickets is an independent travel portal dedicated to providing clear, transparent comparisons of official fast-track tickets, direct Gladiator Arena Floor access passes, and historian-led guided tours in partnership with licensed Italian providers.",
  introImage: "https://images.unsplash.com/photo-1603199766980-fdd4ac568a11?q=80&w=2400&auto=format&fit=crop",
  introImageAlt: "Ancient Roman ruins and architecture of the Colosseum in Rome",
  reasonsHeading: "How We Curate Rome Tours & Tickets",
  reasonsSubheading: "Every ticket and guided experience featured on our site meets rigorous quality, reliability, and security standards.",
  reasons: [
    { icon: "ShieldCheckIcon", title: "Guaranteed Skip-The-Line Access", body: "Every pre-booked ticket comes with an official timed entry slot to bypass the 2-3 hour general admission lines." },
    { icon: "StarIcon", title: "Licensed Rome Archaeologist Guides", body: "Our featured guided tours are led by certified Italian historians and archaeologists with exceptional traveler ratings." },
    { icon: "LockIcon", title: "Free 24h Cancellation & Support", body: "Transparent pricing with flexible 100% free cancellation up to 24 hours before your scheduled entry time." },
    { icon: "HeadsetIcon", title: "Exclusive Restricted Access", body: "Specialized passes providing entry to restricted areas including the Gladiator Arena Floor and Hypogeum Underground." },
  ],
  disclosureHeading: "Affiliate Transparency",
  disclosureBody:
    "When you book Colosseum tickets or tours through links on our site, we may receive an affiliate commission at no extra cost to you. This enables us to maintain up-to-date, independent travel guides and pricing data for global visitors.",
  ctaText: "Ready to walk the Arena Floor in Rome?",
  ctaButtonLabel: "Compare Colosseum Tickets & Passes",
  contactPromptHtml:
    "Have questions about visiting the Colosseum? Get in touch with our team on our <a href=\"/contact\">contact page</a>.",
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

function parseReasons(value: unknown): AboutReason[] {
  if (Array.isArray(value)) return value;
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  return [];
}

function rowToAbout(row: any): AboutPageContent {
  return {
    heroEyebrow: row.hero_eyebrow || DEFAULT_ABOUT.heroEyebrow,
    heroHeading: row.hero_heading || DEFAULT_ABOUT.heroHeading,
    heroSubheading: row.hero_subheading || DEFAULT_ABOUT.heroSubheading,
    heroImage: row.hero_image || DEFAULT_ABOUT.heroImage,
    heroImageAlt: row.hero_image_alt || DEFAULT_ABOUT.heroImageAlt,
    introHeading: row.intro_heading || DEFAULT_ABOUT.introHeading,
    introParagraph1: row.intro_paragraph_1 || DEFAULT_ABOUT.introParagraph1,
    introParagraph2: row.intro_paragraph_2 || DEFAULT_ABOUT.introParagraph2,
    introImage: row.intro_image || DEFAULT_ABOUT.introImage,
    introImageAlt: row.intro_image_alt || DEFAULT_ABOUT.introImageAlt,
    reasonsHeading: row.reasons_heading || DEFAULT_ABOUT.reasonsHeading,
    reasonsSubheading: row.reasons_subheading || DEFAULT_ABOUT.reasonsSubheading,
    reasons: parseReasons(row.reasons),
    disclosureHeading: row.disclosure_heading || DEFAULT_ABOUT.disclosureHeading,
    disclosureBody: row.disclosure_body || DEFAULT_ABOUT.disclosureBody,
    ctaText: row.cta_text || DEFAULT_ABOUT.ctaText,
    ctaButtonLabel: row.cta_button_label || DEFAULT_ABOUT.ctaButtonLabel,
    contactPromptHtml: row.contact_prompt_html || DEFAULT_ABOUT.contactPromptHtml,
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
      intro_heading, intro_paragraph_1, intro_paragraph_2, intro_image, intro_image_alt,
      reasons_heading, reasons_subheading, reasons, disclosure_heading, disclosure_body,
      cta_text, cta_button_label, contact_prompt_html,
      meta_title, meta_description, canonical_url, no_index, no_follow,
      og_title, og_description, og_image
    ) VALUES (
      1, ${data.heroEyebrow}, ${data.heroHeading}, ${data.heroSubheading},
      ${data.heroImage}, ${data.heroImageAlt},
      ${data.introHeading}, ${data.introParagraph1}, ${data.introParagraph2},
      ${data.introImage}, ${data.introImageAlt},
      ${data.reasonsHeading}, ${data.reasonsSubheading}, ${JSON.stringify(data.reasons || [])}::jsonb,
      ${data.disclosureHeading}, ${data.disclosureBody},
      ${data.ctaText}, ${data.ctaButtonLabel}, ${data.contactPromptHtml},
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
      intro_heading = EXCLUDED.intro_heading,
      intro_paragraph_1 = EXCLUDED.intro_paragraph_1,
      intro_paragraph_2 = EXCLUDED.intro_paragraph_2,
      intro_image = EXCLUDED.intro_image,
      intro_image_alt = EXCLUDED.intro_image_alt,
      reasons_heading = EXCLUDED.reasons_heading,
      reasons_subheading = EXCLUDED.reasons_subheading,
      reasons = EXCLUDED.reasons,
      disclosure_heading = EXCLUDED.disclosure_heading,
      disclosure_body = EXCLUDED.disclosure_body,
      cta_text = EXCLUDED.cta_text,
      cta_button_label = EXCLUDED.cta_button_label,
      contact_prompt_html = EXCLUDED.contact_prompt_html,
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
