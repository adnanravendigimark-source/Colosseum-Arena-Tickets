import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MailIcon } from "@/components/icons";
import { getContactPage } from "@/lib/contact";
import { getIconComponent } from "@/lib/iconMap";
import { resolveRobots, resolveCanonical, resolveOg } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const contact = await getContactPage();
  const og = resolveOg(
    { ogTitle: contact.ogTitle, ogDescription: contact.ogDescription, ogImage: contact.ogImage },
    { title: contact.metaTitle, description: contact.metaDescription }
  );
  return {
    title: contact.metaTitle,
    description: contact.metaDescription,
    alternates: { canonical: resolveCanonical("/contact", contact.canonicalUrl) },
    robots: resolveRobots(contact.noIndex, contact.noFollow),
    openGraph: { title: og.title, description: og.description, url: "/contact", images: og.image ? [{ url: og.image }] : undefined },
    twitter: { card: "summary_large_image", title: og.title, description: og.description, images: og.image ? [og.image] : undefined },
  };
}

export default async function ContactPage() {
  const contact = await getContactPage();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center">
          <span className="inline-block rounded-md bg-olive-100 border border-olive-200 px-3 py-1 text-xs font-bold uppercase tracking-wider text-olive-800">
            {contact.heroEyebrow}
          </span>
          <h1 className="mt-3 font-display text-3xl font-bold text-charcoal-800 sm:text-4xl">
            {contact.heroHeading}
          </h1>
          <div
            className="rich-content mx-auto mt-3 max-w-md text-charcoal-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: contact.heroSubheading }}
          />
        </div>

        {/* Primary email card */}
        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-warmstone-300 bg-gradient-to-br from-warmstone-100/70 via-cream-50 to-warmstone-100/50 p-10 text-center shadow-md">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-olive-700 text-cream-100 shadow-lg ring-1 ring-sage-400/30">
            <MailIcon className="h-7 w-7" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-sage-600">{contact.emailLabel}</p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-1 block break-all font-display text-2xl font-bold text-olive-700 hover:underline"
            >
              {contact.email}
            </a>
          </div>
          <p className="text-xs text-charcoal-600 max-w-sm">{contact.emailNote}</p>
        </div>

        {/* What we can help with */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {contact.reasons.map(({ icon, title, body }) => {
            const Icon = getIconComponent(icon);
            return (
              <div key={title} className="rounded-2xl border border-warmstone-200 bg-cream-50 p-6 shadow-sm text-center sm:text-left">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-olive-100 text-olive-700 sm:mx-0">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-sm font-bold text-charcoal-800">{title}</p>
                <div
                  className="rich-content mt-1.5 text-xs text-charcoal-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: body }}
                />
              </div>
            );
          })}
        </div>

        <div
          className="rich-content mt-12 border-t border-warmstone-200 pt-8 text-center text-sm text-sage-600"
          dangerouslySetInnerHTML={{ __html: contact.footerNote }}
        />

        <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl bg-charcoal-900 p-8 text-center text-cream-100 shadow-xl border border-charcoal-800">
          <p className="text-base font-bold text-cream-50">{contact.ctaHeading}</p>
          <a
            href="/#tours"
            className="rounded-xl bg-olive-700 px-7 py-3 text-sm font-bold text-cream-100 shadow-md ring-1 ring-sage-400/30 transition hover:bg-olive-800 hover:scale-[1.02]"
          >
            {contact.ctaButtonLabel} →
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
