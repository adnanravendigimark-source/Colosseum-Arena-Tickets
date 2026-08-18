import { sql } from "./db";

export interface ContactReason {
  icon: string;
  title: string;
  body: string;
}

export interface ContactPageContent {
  heroEyebrow: string;
  heroHeading: string;
  heroSubheading: string;
  email: string;
  emailLabel: string;
  emailNote: string;
  reasonsHeading: string;
  reasons: ContactReason[];
  footerNote: string;
  ctaHeading: string;
  ctaButtonLabel: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  noIndex: boolean;
  noFollow: boolean;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

const DEFAULT_CONTACT: ContactPageContent = {
  heroEyebrow: "Contact Us",
  heroHeading: "Get in Touch with Our Rome Travel Team",
  heroSubheading:
    "Questions about booking Colosseum tickets, Arena Floor passes, Underground tours, or partnership inquiries? Reach out to our team directly.",
  email: "support@colosseumarenaentry.com",
  emailLabel: "Email Us Directly",
  emailNote: "We typically respond within 1–2 business days.",
  reasonsHeading: "How We Can Help",
  reasons: [
    { icon: "HeadsetIcon", title: "Ticket Selection & Advice", body: "Need help deciding between Arena Floor access, priority fast-track entry, or a full historian guided tour? Ask our Rome specialists." },
    { icon: "BriefcaseIcon", title: "Partnerships & Operators", body: "Licensed Italian tour operators, tourism authorities, and travel publishers — reach out regarding listings and collaborations." },
    { icon: "MailIcon", title: "General Inquiries", body: "Feedback, visitor tips, accessibility questions, or editorial suggestions for our Colosseum guides." },
  ],
  footerNote:
    "Already booked? Please refer to your confirmation voucher to contact your tour provider directly for real-time meeting point directions or schedule changes.",
  ctaHeading: "Ready to reserve your Colosseum tickets?",
  ctaButtonLabel: "Compare Colosseum Tickets & Guided Tours",
  metaTitle: "Contact Us | Colosseum Arena Tickets Rome",
  metaDescription:
    "Questions about Colosseum tickets, Arena Floor passes, or visiting Rome? Contact the Colosseum Arena Tickets team.",
  canonicalUrl: "",
  noIndex: false,
  noFollow: false,
  ogTitle: "",
  ogDescription: "",
  ogImage: "",
};

function parseReasons(value: unknown): ContactReason[] {
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

function rowToContact(row: any): ContactPageContent {
  return {
    heroEyebrow: row.hero_eyebrow || DEFAULT_CONTACT.heroEyebrow,
    heroHeading: row.hero_heading || DEFAULT_CONTACT.heroHeading,
    heroSubheading: row.hero_subheading || DEFAULT_CONTACT.heroSubheading,
    email: row.email || DEFAULT_CONTACT.email,
    emailLabel: row.email_label || DEFAULT_CONTACT.emailLabel,
    emailNote: row.email_note || DEFAULT_CONTACT.emailNote,
    reasonsHeading: row.reasons_heading || DEFAULT_CONTACT.reasonsHeading,
    reasons: parseReasons(row.reasons),
    footerNote: row.footer_note || DEFAULT_CONTACT.footerNote,
    ctaHeading: row.cta_heading || DEFAULT_CONTACT.ctaHeading,
    ctaButtonLabel: row.cta_button_label || DEFAULT_CONTACT.ctaButtonLabel,
    metaTitle: row.meta_title || DEFAULT_CONTACT.metaTitle,
    metaDescription: row.meta_description || DEFAULT_CONTACT.metaDescription,
    canonicalUrl: row.canonical_url || "",
    noIndex: !!row.no_index,
    noFollow: !!row.no_follow,
    ogTitle: row.og_title || "",
    ogDescription: row.og_description || "",
    ogImage: row.og_image || "",
  };
}

export async function getContactPage(): Promise<ContactPageContent> {
  try {
    const rows = await sql`SELECT * FROM contact_page WHERE id = 1 LIMIT 1`;
    return rows.length ? rowToContact(rows[0]) : DEFAULT_CONTACT;
  } catch {
    return DEFAULT_CONTACT;
  }
}

export async function setContactIndexing(noIndex: boolean, noFollow: boolean): Promise<void> {
  await sql`
    INSERT INTO contact_page (id, no_index, no_follow)
    VALUES (1, ${!!noIndex}, ${!!noFollow})
    ON CONFLICT (id) DO UPDATE SET
      no_index = EXCLUDED.no_index,
      no_follow = EXCLUDED.no_follow
  `;
}

export async function saveContactPage(data: ContactPageContent): Promise<void> {
  await sql`
    INSERT INTO contact_page (
      id, hero_eyebrow, hero_heading, hero_subheading, email, email_label, email_note,
      reasons_heading, reasons, footer_note, cta_heading, cta_button_label,
      meta_title, meta_description, canonical_url, no_index, no_follow,
      og_title, og_description, og_image
    ) VALUES (
      1, ${data.heroEyebrow}, ${data.heroHeading}, ${data.heroSubheading},
      ${data.email}, ${data.emailLabel}, ${data.emailNote},
      ${data.reasonsHeading}, ${JSON.stringify(data.reasons || [])}::jsonb,
      ${data.footerNote}, ${data.ctaHeading}, ${data.ctaButtonLabel},
      ${data.metaTitle}, ${data.metaDescription}, ${data.canonicalUrl || ""},
      ${!!data.noIndex}, ${!!data.noFollow},
      ${data.ogTitle || ""}, ${data.ogDescription || ""}, ${data.ogImage || ""}
    )
    ON CONFLICT (id) DO UPDATE SET
      hero_eyebrow = EXCLUDED.hero_eyebrow,
      hero_heading = EXCLUDED.hero_heading,
      hero_subheading = EXCLUDED.hero_subheading,
      email = EXCLUDED.email,
      email_label = EXCLUDED.email_label,
      email_note = EXCLUDED.email_note,
      reasons_heading = EXCLUDED.reasons_heading,
      reasons = EXCLUDED.reasons,
      footer_note = EXCLUDED.footer_note,
      cta_heading = EXCLUDED.cta_heading,
      cta_button_label = EXCLUDED.cta_button_label,
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
