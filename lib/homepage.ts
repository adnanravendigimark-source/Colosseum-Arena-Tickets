import { sql } from "./db";

export interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}

export interface TimelineRow {
  time: string;
  step: string;
}

export interface HoursRow {
  range: string;
  time: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface TourSection {
  eyebrow: string;
  heading: string;
  subheading: string;
}

export interface HighlightCard {
  icon: string;
  title: string;
  body: string;
}
export interface HighlightsSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  cards: HighlightCard[];
}

export interface WhySection {
  heading: string;
  intro: string;
  timelineHeading: string;
  timeline: TimelineRow[];
  learnHeading: string;
  learn: string[];
  note: string;
  extraHeading: string;
  extraItems: { name: string; note: string }[];
  ctaText: string;
  ctaButtonText: string;
  ctaHref: string;
}

export interface TowerSection {
  eyebrow: string;
  heading: string;
  body: string;
  bullets: string[];
  ctaButtonText: string;
  ctaHref: string;
  images: GalleryImage[];
}

export interface PracticalSection {
  hoursHeading: string;
  hours: HoursRow[];
  hoursNote: string;
  addressHeading: string;
  address: string;
  metro: string;
  bestTimeHeading: string;
  bestTimeBody: string;
}

export interface PriceSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  note: string;
  itemLabel: string;
  priceLabel: string;
  column1Label: string;
  column2Label: string;
  bestForLabel: string;
  bookLabel: string;
}

export interface FaqSection {
  eyebrow: string;
  heading: string;
}

export interface NotFoundSection {
  heading: string;
  body: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
}

export interface BlogTeaserSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  viewAllText: string;
  readArticleText: string;
}

export interface BlogPageSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  emptyStateText: string;
  featuredLinkText: string;
  ctaHeading: string;
  ctaButtonText: string;
  backToGuidesText: string;
  quickAnswerLabel: string;
  tocLabel: string;
  relatedGuidesHeading: string;
  sidebarRelatedHeading: string;
  sidebarRecommendedBadge: string;
  sidebarCompareLinkText: string;
  promoRecommendedText: string;
}

export interface HomepageSections {
  tours: TourSection;
  highlights: HighlightsSection;
  why: WhySection;
  tower: TowerSection;
  practical: PracticalSection;
  price: PriceSection;
  faq: FaqSection;
  notFound: NotFoundSection;
  blogTeaser: BlogTeaserSection;
  blogPage: BlogPageSection;
}

export interface HeaderContent {
  logoImage: string;
  logoAlt: string;
  logoLine1: string;
  logoLine2: string;
  bookNowText: string;
  navLinks: NavLink[];
  ctaText: string;
  ctaHref: string;
}

export interface FooterContent {
  tagline: string;
  columns: FooterColumn[];
  addressHeading: string;
  addressLine1: string;
  addressLine2: string;
  copyrightText: string;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  dark: string;
  accent: string;
}

export interface HomepageContent {
  heroBadge: string;
  heroHeading: string;
  heroSubheading: string;
  heroImage: string;
  heroImageAlt: string;
  heroVideo: string;
  heroGallery: GalleryImage[];
  heroCtaPrimaryText: string;
  heroCtaPrimaryHref: string;
  heroCtaSecondaryText: string;
  heroCtaSecondaryHref: string;
  ratingValue: string;
  ratingCount: string;
  showFeaturedTour: boolean;
  featuredTourId: string;
  featuredBadgeLabel: string;
  featuredUrgencyText: string;
  featuredReasons: string[];
  sections: HomepageSections;
  header: HeaderContent;
  footer: FooterContent;
  theme: ThemeColors;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  noIndex: boolean;
  noFollow: boolean;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

export const DEFAULT_HEADER: HeaderContent = {
  logoImage: "",
  logoAlt: "Colosseum Arena Tickets",
  logoLine1: "Colosseum",
  logoLine2: "Arena Tickets",
  bookNowText: "Book Tickets",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  ctaText: "Book Skip-The-Line",
  ctaHref: "/#tours",
};

export const DEFAULT_FOOTER: FooterContent = {
  tagline:
    "<strong>Independent Rome Ticket & Guided Tour Resource.</strong> We curate official skip-the-line Colosseum tickets, Arena Floor direct passes, Hypogeum Underground tours, and Roman Forum & Palatine Hill combo packages with verified authorized providers.",
  columns: [
    {
      title: "Colosseum Tickets",
      links: [
        { label: "Arena Floor Tickets", href: "/#tours" },
        { label: "Skip-the-Line Priority", href: "/#tours" },
        { label: "Underground Hypogeum", href: "/#tours" },
        { label: "Ticket Price Comparison", href: "/#prices" },
        { label: "Colosseum FAQs", href: "/#faq" },
      ],
    },
    {
      title: "Information",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Rome Travel Blog", href: "/blog" },
        { label: "Contact Us", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
  ],
  addressHeading: "Colosseum Visitor Entrances",
  addressLine1: "Piazza del Colosseo, 1 (Sperone Valadier & Gladiator Gate)",
  addressLine2: "00184 Roma (RM), Italy · Metro Line B (Colosseo)",
  copyrightText:
    "Colosseum Arena Tickets. All prices in EUR. Official tickets subject to Parco Archeologico del Colosseo quotas and availability.",
};

export const DEFAULT_THEME: ThemeColors = {
  primary: "#34412D",   // Deep Olive
  secondary: "#78816A", // Muted Sage
  dark: "#252522",      // Charcoal
  accent: "#D8D0BE",    // Warm Stone
};

export const DEFAULT_GALLERY: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=2400&auto=format&fit=crop",
    alt: "Colosseum Arena Floor looking out at the ancient amphitheater tiers in Rome",
    label: "Gladiator Arena Floor",
  },
  {
    src: "https://images.unsplash.com/photo-1632851853187-dae5c83372dc?q=80&w=2400&auto=format&fit=crop",
    alt: "Colosseum exterior architecture bathed in golden Roman sunlight",
    label: "Monumental Exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?q=80&w=2400&auto=format&fit=crop",
    alt: "Subterranean chambers and Hypogeum dungeons beneath the Colosseum floor",
    label: "Underground Hypogeum",
  },
  {
    src: "https://images.unsplash.com/photo-1555992828-ca4dbe41d294?q=80&w=2400&auto=format&fit=crop",
    alt: "Roman Forum ruins and temples framed by pine trees in central Rome",
    label: "Roman Forum & Palatine",
  },
];

export const DEFAULT_SECTIONS: HomepageSections = {
  tours: {
    eyebrow: "Handpicked Rome Experiences",
    heading: "Colosseum Tickets, Arena Floor Passes & Guided Tours",
    subheading:
      "Skip the multi-hour lines with verified timed-entry tickets. Step onto the Gladiator Arena Floor, explore underground chambers, and visit the Roman Forum & Palatine Hill.",
  },
  highlights: {
    eyebrow: "The Ultimate Roman Amphitheater",
    heading: "Why Visit the Colosseum Arena Floor",
    subheading:
      "Commissioned by Emperor Vespasian in 72 AD, the Colosseum remains humanity's greatest ancient arena. Here is what makes stepping onto the Arena Floor truly unforgettable.",
    cards: [
      {
        title: "Walk Through the Gladiator's Gate",
        body: "Enter through the exclusive Porta Libitinaria and stand directly on the arena floor where gladiators fought for life and freedom.",
        icon: "⚔️",
      },
      {
        title: "Gaze into the Hypogeum",
        body: "Look down directly between the floor timbers into the maze of underground corridors, elevator shafts, and animal holding pens.",
        icon: "🏛️",
      },
      {
        title: "Skip 3-Hour Ticket Lines",
        body: "All pre-booked passes feature guaranteed fast-track priority entry, saving hours of standing in the hot Italian sun.",
        icon: "⚡",
      },
      {
        title: "Includes Roman Forum & Palatine",
        body: "Every ticket includes combined 24-hour admission to explore Julius Caesar's temple, the Senate House, and Imperial Palaces.",
        icon: "👑",
      },
    ],
  },
  why: {
    heading: "What You Experience on a Colosseum Arena & Forum Tour",
    intro:
      "An extraordinary journey through 2,000 years of imperial history. Walk where emperors sat, gladiators battled, and ancient Romans cheered.",
    timelineHeading: "Sample Tour Itinerary",
    timeline: [
      { time: "0:00", step: "Meet your licensed archaeologist guide at the designated meeting point near Metro Colosseo" },
      { time: "0:15", step: "Bypass the main queue via priority security screening at the Gladiator's Gate" },
      { time: "0:30", step: "Step onto the Arena Floor timber stage with 360-degree views of the 50,000-seat amphitheater" },
      { time: "1:00", step: "Ascend to the 1st and 2nd tier viewing arcades and explore the Colosseum archaeological museum" },
      { time: "1:30", step: "Walk beneath the Arch of Constantine into the sacred precincts of the Roman Forum" },
      { time: "2:15", step: "Climb the Palatine Hill to admire the monumental ruins of Emperor Augustus's palace complex" },
    ],
    learnHeading: "Fascinating History You Will Uncover",
    learn: [
      "How Roman engineers flooded the arena to stage mock naval battles (naumachiae)",
      "The true meaning behind the emperor's thumb gestures and gladiatorial combat rules",
      "Why the outer facade is built from over 100,000 cubic meters of Tivoli travertine stone",
      "How subterranean trapdoors and counterweight wooden elevators hoisted lions into the ring",
    ],
    note: "All tours include live English commentary, personal radio headsets, and guaranteed timed entry slots.",
    extraHeading: "Important Visitor Gate Points",
    extraItems: [
      { name: "Sperone Valadier / Gladiator Gate", note: "Dedicated priority access for Arena Floor and guided tour groups" },
      { name: "Stern Entrance", note: "Fast-track access point for certified individual ticket holders" },
      { name: "Roman Forum (Via Sacra)", note: "Main entry to the Forum directly across from the Arch of Titus" },
    ],
    ctaText: "Ready to walk the Arena Floor? Tickets start at €29 with 100% free cancellation up to 24 hours prior.",
    ctaButtonText: "Book Colosseum Tickets Now →",
    ctaHref: "#tours",
  },
  tower: {
    eyebrow: "Exclusive VIP Experience",
    heading: "Stand on the Arena Floor Where History Happened",
    body:
      "Only a fraction of Colosseum visitors are permitted onto the Arena Floor each day. Standing on the reconstructed timber stage gives you the gladiator's true eye-level perspective of the towering stone tiers, surrounded by monumental history.",
    bullets: [
      "Direct fast-track entrance through the reconstructed Gladiator's Gate",
      "Breathtaking 360-degree panoramic perspective looking up at the spectator tiers",
      "Direct overhead view looking down into the subterranean Hypogeum chambers",
      "Full combined access to the Roman Forum and Palatine Hill valid for 24 hours",
    ],
    ctaButtonText: "See Arena Floor Tickets & Tours",
    ctaHref: "#tours",
    images: [
      {
        src: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=2400&auto=format&fit=crop",
        alt: "View from the wooden Colosseum arena floor stage looking up at the Roman amphitheater",
        label: "Arena Floor Stage",
      },
      {
        src: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?q=80&w=2400&auto=format&fit=crop",
        alt: "Underground brick arches of the Hypogeum beneath the Colosseum",
        label: "Subterranean Hypogeum",
      },
      {
        src: "https://images.unsplash.com/photo-1555992828-ca4dbe41d294?q=80&w=2400&auto=format&fit=crop",
        alt: "Ancient Roman Forum temples bathed in golden afternoon light",
        label: "Roman Forum Temples",
      },
      {
        src: "https://images.unsplash.com/photo-1740606947209-41e48e994048?q=80&w=2400&auto=format&fit=crop",
        alt: "Dramatic night illumination of the Roman Colosseum arches",
        label: "Night Illumination",
      },
    ],
  },
  practical: {
    hoursHeading: "Colosseum Opening Hours & Seasons (2026)",
    hours: [
      { range: "Last Sunday of March – August 31", time: "8:30 AM – 7:15 PM (Last admission 6:15 PM)" },
      { range: "September 1 – September 30", time: "8:30 AM – 7:00 PM (Last admission 6:00 PM)" },
      { range: "October 1 – Last Saturday of October", time: "8:30 AM – 6:30 PM (Last admission 5:30 PM)" },
      { range: "Last Sunday of October – February 15", time: "8:30 AM – 4:30 PM (Last admission 3:30 PM)" },
    ],
    hoursNote: "Open daily all year round except January 1 and December 25. Timed reservations are mandatory for entry.",
    addressHeading: "Location & Getting There",
    address:
      "Piazza del Colosseo, 1, 00184 Roma (RM), Italy.\nLocated in the historic center of Rome between the Esqualine and Caelian hills.",
    metro: "Metro Line B (Blue) directly to 'Colosseo' station (exit faces the monument). Tram lines 3 & 8 stop right outside.",
    bestTimeHeading: "Best Time to Visit",
    bestTimeBody:
      "Early morning (8:30 AM – 10:00 AM) right at opening offers the quietest atmosphere and pleasant morning light. Late afternoon (after 3:30 PM) is ideal for golden-hour photography and cooler temperatures.",
  },
  price: {
    eyebrow: "Transparent Comparison",
    heading: "Compare Colosseum Tickets, Arena Access & Guided Tours",
    subheading:
      "Find the perfect ticket for your Rome trip. Compare inclusions, duration, prices, and cancellation terms side by side.",
    note: "Children and youth discounts available on select tours. Free cancellation up to 24 hours prior on all verified passes.",
    itemLabel: "Ticket Option",
    priceLabel: "Price",
    column1Label: "Duration",
    column2Label: "Special Access",
    bestForLabel: "Best For",
    bookLabel: "Book Ticket",
  },
  faq: {
    eyebrow: "Frequently Asked Questions",
    heading: "Colosseum Tickets & Visiting FAQs",
  },
  notFound: {
    heading: "Looks like this page got lost in the Roman ruins.",
    body: "The page you are looking for doesn't exist or may have moved. Explore our top Colosseum tickets and guided tours instead.",
    primaryButtonText: "Compare Colosseum Tickets & Passes →",
    primaryButtonHref: "/#tours",
    secondaryButtonText: "Read the Rome Travel Guide",
    secondaryButtonHref: "/blog",
  },
  blogTeaser: {
    eyebrow: "Rome Travel Guides",
    heading: "Colosseum & Ancient Rome Insider Guides",
    subheading:
      "Expert visitor advice, skip-the-line strategies, Arena Floor reviews, and comprehensive Rome itineraries.",
    viewAllText: "View All Articles",
    readArticleText: "Read Article",
  },
  blogPage: {
    eyebrow: "Rome Travel & Ticket Guides",
    heading: "Colosseum Travel Tips, History & Guides",
    subheading: "Practical advice to help you choose the right ticket tier, beat the queues, and make the most of your visit to ancient Rome.",
    emptyStateText: "No articles published yet — check back soon.",
    featuredLinkText: "Read the guide",
    ctaHeading: "Ready to explore the Colosseum in Rome?",
    ctaButtonText: "Compare Colosseum Tickets & Tours →",
    backToGuidesText: "← All Rome travel guides",
    quickAnswerLabel: "Quick Answer",
    tocLabel: "In This Guide",
    relatedGuidesHeading: "Related Rome Guides",
    sidebarRelatedHeading: "Related Travel Guides",
    sidebarRecommendedBadge: "Recommended",
    sidebarCompareLinkText: "Compare all tickets & tours →",
    promoRecommendedText: "Recommended Ticket",
  },
};

const DEFAULT_HOMEPAGE_CONTENT: HomepageContent = {
  heroBadge: "⚔️ Direct Arena Floor Access · Skip-The-Line Fast Track · 100% Free Cancellation",
  heroHeading: "Colosseum Arena Floor Tickets & Guided Tours — Skip the Line in Rome",
  heroSubheading:
    "Walk through the Gladiator's Gate onto the legendary Arena Floor. Experience ancient Rome with skip-the-line Colosseum tickets, Roman Forum & Palatine Hill entry, instant mobile vouchers, and flexible 24h cancellation.",
  heroImage:
    "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=2400&auto=format&fit=crop",
  heroImageAlt: "Colosseum Arena Floor wooden stage view looking out at the ancient amphitheater in Rome",
  heroVideo: "",
  heroGallery: DEFAULT_GALLERY,
  heroCtaPrimaryText: "Compare Colosseum Tickets",
  heroCtaPrimaryHref: "#tours",
  heroCtaSecondaryText: "See Ticket Prices",
  heroCtaSecondaryHref: "#prices",
  ratingValue: "4.9 / 5",
  ratingCount: "42,800+ reviews",
  showFeaturedTour: true,
  featuredTourId: "colosseum-arena-floor-skip-the-line-ticket",
  featuredBadgeLabel: "Most Popular",
  featuredUrgencyText: "High Demand for Arena Floor Time Slots · Book in Advance",
  featuredReasons: [
    "42,800+ verified reviews — rated 4.9 / 5 by international travelers",
    "Direct priority access through the Gladiator's Gate onto the Arena Floor",
    "Includes full entry to the Roman Forum & Palatine Hill valid for 24 hours",
  ],
  sections: DEFAULT_SECTIONS,
  header: DEFAULT_HEADER,
  footer: DEFAULT_FOOTER,
  theme: DEFAULT_THEME,
  metaTitle: "Colosseum Arena Tickets | Exclusive Arena Floor Access Rome 2026",
  metaDescription:
    "Book official Colosseum Arena tickets with direct Arena Floor entry. Bypass long lines with guaranteed fast-track admission to ancient Rome's iconic amphitheater.",
  focusKeyword: "Colosseum Arena Tickets",
  noIndex: false,
  noFollow: false,
  canonicalUrl: "",
  ogTitle: "Colosseum Arena Tickets — Skip The Line & Step on the Arena Floor",
  ogDescription:
    "Guaranteed Colosseum Arena tickets with direct access through the Gladiator Gate. Includes Roman Forum & Palatine Hill with free cancellation.",
  ogImage: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=2400&auto=format&fit=crop",
};

function parseReasons(value: unknown): string[] {
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

function parseJsonWithDefault<T extends object>(value: unknown, fallback: T): T {
  let parsed: unknown = value;
  if (typeof value === "string") {
    try {
      parsed = JSON.parse(value);
    } catch {
      parsed = null;
    }
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return fallback;
  return { ...fallback, ...(parsed as Partial<T>) };
}

function rowToHomepage(row: any): HomepageContent {
  const sectionsRaw = parseJsonWithDefault<HomepageSections>(row.sections_json, DEFAULT_SECTIONS);
  return {
    heroBadge: row.hero_badge || "",
    heroHeading: row.hero_heading || "",
    heroSubheading: row.hero_subheading || "",
    heroImage: row.hero_image || "",
    heroImageAlt: row.hero_image_alt || "",
    heroVideo: row.hero_video || "",
    heroGallery: (() => {
      const g = parseReasons(row.hero_gallery);
      return g.length ? (g as unknown as GalleryImage[]) : DEFAULT_GALLERY;
    })(),
    heroCtaPrimaryText: row.hero_cta_primary_text || DEFAULT_HOMEPAGE_CONTENT.heroCtaPrimaryText,
    heroCtaPrimaryHref: row.hero_cta_primary_href || DEFAULT_HOMEPAGE_CONTENT.heroCtaPrimaryHref,
    heroCtaSecondaryText: row.hero_cta_secondary_text || DEFAULT_HOMEPAGE_CONTENT.heroCtaSecondaryHref,
    heroCtaSecondaryHref: row.hero_cta_secondary_href || DEFAULT_HOMEPAGE_CONTENT.heroCtaSecondaryHref,
    ratingValue: row.rating_value || "",
    ratingCount: row.rating_count || "",
    showFeaturedTour: !!row.show_featured_tour,
    featuredTourId: row.featured_tour_id || "",
    featuredBadgeLabel: row.featured_badge_label || "",
    featuredUrgencyText: row.featured_urgency_text || "",
    featuredReasons: parseReasons(row.featured_reasons),
    sections: {
      tours: { ...DEFAULT_SECTIONS.tours, ...sectionsRaw.tours },
      highlights: { ...DEFAULT_SECTIONS.highlights, ...sectionsRaw.highlights },
      why: { ...DEFAULT_SECTIONS.why, ...sectionsRaw.why },
      tower: { ...DEFAULT_SECTIONS.tower, ...sectionsRaw.tower },
      practical: { ...DEFAULT_SECTIONS.practical, ...sectionsRaw.practical },
      price: { ...DEFAULT_SECTIONS.price, ...sectionsRaw.price },
      faq: { ...DEFAULT_SECTIONS.faq, ...sectionsRaw.faq },
      notFound: { ...DEFAULT_SECTIONS.notFound, ...sectionsRaw.notFound },
      blogTeaser: { ...DEFAULT_SECTIONS.blogTeaser, ...sectionsRaw.blogTeaser },
      blogPage: { ...DEFAULT_SECTIONS.blogPage, ...sectionsRaw.blogPage },
    },
    header: parseJsonWithDefault<HeaderContent>(row.header_json, DEFAULT_HEADER),
    footer: parseJsonWithDefault<FooterContent>(row.footer_json, DEFAULT_FOOTER),
    theme: parseJsonWithDefault<ThemeColors>(row.theme_json, DEFAULT_THEME),
    metaTitle: row.meta_title || "",
    metaDescription: row.meta_description || "",
    focusKeyword: row.focus_keyword || "",
    noIndex: !!row.no_index,
    noFollow: !!row.no_follow,
    canonicalUrl: row.canonical_url || "",
    ogTitle: row.og_title || "",
    ogDescription: row.og_description || "",
    ogImage: row.og_image || "",
  };
}

export async function getHomepageContent(): Promise<HomepageContent> {
  try {
    const rows = await sql`SELECT * FROM homepage WHERE id = 1 LIMIT 1`;
    return rows.length ? rowToHomepage(rows[0]) : DEFAULT_HOMEPAGE_CONTENT;
  } catch {
    return DEFAULT_HOMEPAGE_CONTENT;
  }
}

export async function getSiteChrome(): Promise<{ header: HeaderContent; footer: FooterContent; theme: ThemeColors }> {
  try {
    const rows = await sql`SELECT header_json, footer_json, theme_json FROM homepage WHERE id = 1 LIMIT 1`;
    if (!rows.length) return { header: DEFAULT_HEADER, footer: DEFAULT_FOOTER, theme: DEFAULT_THEME };
    const row = rows[0] as any;
    return {
      header: parseJsonWithDefault<HeaderContent>(row.header_json, DEFAULT_HEADER),
      footer: parseJsonWithDefault<FooterContent>(row.footer_json, DEFAULT_FOOTER),
      theme: parseJsonWithDefault<ThemeColors>(row.theme_json, DEFAULT_THEME),
    };
  } catch {
    return { header: DEFAULT_HEADER, footer: DEFAULT_FOOTER, theme: DEFAULT_THEME };
  }
}

export async function saveHomepageCopy(data: {
  heroBadge: string;
  heroHeading: string;
  heroSubheading: string;
  heroImage: string;
  heroImageAlt: string;
  heroVideo: string;
  heroGallery: GalleryImage[];
  heroCtaPrimaryText: string;
  heroCtaPrimaryHref: string;
  heroCtaSecondaryText: string;
  heroCtaSecondaryHref: string;
  ratingValue: string;
  ratingCount: string;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}): Promise<void> {
  await sql`
    INSERT INTO homepage (
      id, hero_badge, hero_heading, hero_subheading, hero_image, hero_image_alt,
      hero_video, hero_gallery, hero_cta_primary_text, hero_cta_primary_href,
      hero_cta_secondary_text, hero_cta_secondary_href,
      rating_value, rating_count, meta_title, meta_description, focus_keyword,
      canonical_url, og_title, og_description, og_image
    ) VALUES (
      1, ${data.heroBadge}, ${data.heroHeading}, ${data.heroSubheading}, ${data.heroImage},
      ${data.heroImageAlt}, ${data.heroVideo || ""}, ${JSON.stringify(data.heroGallery || [])}::jsonb,
      ${data.heroCtaPrimaryText || ""}, ${data.heroCtaPrimaryHref || ""},
      ${data.heroCtaSecondaryText || ""}, ${data.heroCtaSecondaryHref || ""},
      ${data.ratingValue}, ${data.ratingCount},
      ${data.metaTitle || ""}, ${data.metaDescription || ""}, ${data.focusKeyword || ""},
      ${data.canonicalUrl || ""}, ${data.ogTitle || ""}, ${data.ogDescription || ""}, ${data.ogImage || ""}
    )
    ON CONFLICT (id) DO UPDATE SET
      hero_badge = EXCLUDED.hero_badge,
      hero_heading = EXCLUDED.hero_heading,
      hero_subheading = EXCLUDED.hero_subheading,
      hero_image = EXCLUDED.hero_image,
      hero_image_alt = EXCLUDED.hero_image_alt,
      hero_video = EXCLUDED.hero_video,
      hero_gallery = EXCLUDED.hero_gallery,
      hero_cta_primary_text = EXCLUDED.hero_cta_primary_text,
      hero_cta_primary_href = EXCLUDED.hero_cta_primary_href,
      hero_cta_secondary_text = EXCLUDED.hero_cta_secondary_text,
      hero_cta_secondary_href = EXCLUDED.hero_cta_secondary_href,
      rating_value = EXCLUDED.rating_value,
      rating_count = EXCLUDED.rating_count,
      meta_title = EXCLUDED.meta_title,
      meta_description = EXCLUDED.meta_description,
      focus_keyword = EXCLUDED.focus_keyword,
      canonical_url = EXCLUDED.canonical_url,
      og_title = EXCLUDED.og_title,
      og_description = EXCLUDED.og_description,
      og_image = EXCLUDED.og_image
  `;
}

export async function setHomepageIndexing(noIndex: boolean, noFollow: boolean): Promise<void> {
  await sql`
    INSERT INTO homepage (id, no_index, no_follow)
    VALUES (1, ${!!noIndex}, ${!!noFollow})
    ON CONFLICT (id) DO UPDATE SET
      no_index = EXCLUDED.no_index,
      no_follow = EXCLUDED.no_follow
  `;
}

export async function saveRecommendedTour(data: {
  showFeaturedTour: boolean;
  featuredTourId: string;
  featuredBadgeLabel: string;
  featuredUrgencyText: string;
  featuredReasons: string[];
}): Promise<void> {
  await sql`
    INSERT INTO homepage (
      id, show_featured_tour, featured_tour_id, featured_badge_label,
      featured_urgency_text, featured_reasons
    ) VALUES (
      1, ${!!data.showFeaturedTour}, ${data.featuredTourId}, ${data.featuredBadgeLabel},
      ${data.featuredUrgencyText}, ${JSON.stringify(data.featuredReasons || [])}::jsonb
    )
    ON CONFLICT (id) DO UPDATE SET
      show_featured_tour = EXCLUDED.show_featured_tour,
      featured_tour_id = EXCLUDED.featured_tour_id,
      featured_badge_label = EXCLUDED.featured_badge_label,
      featured_urgency_text = EXCLUDED.featured_urgency_text,
      featured_reasons = EXCLUDED.featured_reasons
  `;
}

export async function saveHomepageSections(sections: HomepageSections): Promise<void> {
  await sql`
    INSERT INTO homepage (id, sections_json)
    VALUES (1, ${JSON.stringify(sections)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET sections_json = EXCLUDED.sections_json
  `;
}

export async function saveSiteHeader(header: HeaderContent): Promise<void> {
  await sql`
    INSERT INTO homepage (id, header_json)
    VALUES (1, ${JSON.stringify(header)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET header_json = EXCLUDED.header_json
  `;
}

export async function saveSiteFooter(footer: FooterContent): Promise<void> {
  await sql`
    INSERT INTO homepage (id, footer_json)
    VALUES (1, ${JSON.stringify(footer)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET footer_json = EXCLUDED.footer_json
  `;
}

export async function saveSiteTheme(theme: ThemeColors): Promise<void> {
  await sql`
    INSERT INTO homepage (id, theme_json)
    VALUES (1, ${JSON.stringify(theme)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET theme_json = EXCLUDED.theme_json
  `;
}
