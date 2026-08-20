import type { Metadata } from "next";
import Script from "next/script";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import { resolveRobots } from "@/lib/seo";
import { getSiteChrome } from "@/lib/homepage";
import { hexToRgbTriplet } from "@/lib/color";
import "./globals.css";

export const dynamic = "force-dynamic";

const displayFont = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-display",
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const DEFAULT_OG_IMAGE =
  "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=2400&auto=format&fit=crop";

// Google's Rich Results validator only recognizes aggregateRating on a
// specific list of types (LocalBusiness, Organization, Product, etc.) —
// "TouristAttraction" alone isn't on that list, which is what Search
// Console's "Invalid object type for field" error was flagging. Adding
// "LocalBusiness" as a second @type (valid JSON-LD multi-typing, and an
// accurate description of the business) keeps aggregateRating valid
// without changing what the entity actually is. image is included since
// it's a recommended field for LocalBusiness review-snippet eligibility.
const touristAttractionJsonLd = {
  "@context": "https://schema.org",
  "@type": ["TouristAttraction", "LocalBusiness"],
  name: "Colosseum Arena Tickets",
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
  description:
    "Official & verified Colosseum Arena tickets with exclusive direct Arena Floor access, fast-track admission, and Roman Forum & Palatine Hill entry in Rome, Italy.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Piazza del Colosseo, 1",
    addressLocality: "Roma",
    postalCode: "00184",
    addressCountry: "IT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.8902,
    longitude: 12.4922,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "42800",
    bestRating: "5",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Colosseum Arena Tickets",
  url: SITE_URL,
  logo: `${SITE_URL}/icon`,
  description:
    "Independent Rome travel resource dedicated to Colosseum Arena tickets, Arena Floor direct access passes, and skip-the-line admissions.",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Colosseum Arena Tickets",
  url: SITE_URL,
};

export function generateMetadata(): Metadata {
  const robots = resolveRobots(false);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "Colosseum Arena Tickets | Official Arena Floor Access Rome 2026",
      template: "%s | Colosseum Arena Tickets",
    },
    description:
      "Book official Colosseum Arena tickets with direct Arena Floor entry. Bypass long lines with guaranteed fast-track admission to ancient Rome's iconic amphitheater.",
    keywords: ["Colosseum Arena Tickets"],
    alternates: {
      canonical: "/",
    },
    robots,
    openGraph: {
      title: "Colosseum Arena Tickets | Exclusive Arena Floor Access Rome",
      description:
        "Step onto the Gladiator Arena Floor with official Colosseum Arena tickets. Fast-track entry, Roman Forum access & free 24h cancellation.",
      type: "website",
      url: SITE_URL,
      siteName: "Colosseum Arena Tickets",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 2400,
          height: 1350,
          alt: "Colosseum Arena Floor looking out at ancient amphitheater tiers",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Colosseum Arena Tickets | Exclusive Arena Floor Access Rome",
      description:
        "Step onto the Gladiator Arena Floor with official Colosseum Arena tickets. Fast-track entry, Roman Forum access & free 24h cancellation.",
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

function buildThemeStyle(theme: { primary: string; secondary: string; dark: string; accent: string }) {
  const vars: [string, string | null][] = [
    ["--color-canal-primary", hexToRgbTriplet(theme.primary)],
    ["--color-canal-blue", hexToRgbTriplet(theme.secondary)],
    ["--color-canal-ink", hexToRgbTriplet(theme.dark)],
    ["--color-sage-400", hexToRgbTriplet(theme.accent)],
  ];
  const declarations = vars
    .filter(([, value]) => value !== null)
    .map(([name, value]) => `${name}:${value};`)
    .join("");
  return declarations ? `:root{${declarations}}` : "";
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = await getSiteChrome();
  const themeStyle = buildThemeStyle(theme);

  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="font-body bg-white text-[#252522] antialiased selection:bg-olive-700 selection:text-white">
        {themeStyle && <style dangerouslySetInnerHTML={{ __html: themeStyle }} />}
        {children}
        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-E4YWEPDZ3G" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E4YWEPDZ3G');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
