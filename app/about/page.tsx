import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAboutPage } from "@/lib/about";
import { getIconComponent } from "@/lib/iconMap";
import { resolveRobots, resolveCanonical, resolveOg } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const about = await getAboutPage();
  const og = resolveOg(
    { ogTitle: about.ogTitle, ogDescription: about.ogDescription, ogImage: about.ogImage },
    { title: about.metaTitle, description: about.metaDescription, image: about.heroImage }
  );
  return {
    title: about.metaTitle,
    description: about.metaDescription,
    alternates: { canonical: resolveCanonical("/about", about.canonicalUrl) },
    robots: resolveRobots(about.noIndex, about.noFollow),
    openGraph: {
      title: og.title,
      description: og.description,
      url: "/about",
      images: og.image ? [{ url: og.image, alt: about.heroImageAlt }] : undefined,
    },
    twitter: { card: "summary_large_image", title: og.title, description: og.description, images: og.image ? [og.image] : undefined },
  };
}

export default async function AboutPage() {
  const about = await getAboutPage();

  return (
    <>
      <Header />
      <main>
        {/* Hero banner */}
        <section className="relative overflow-hidden bg-charcoal-900 text-cream-100">
          <div className="absolute inset-0">
            <Image
              src={about.heroImage}
              alt={about.heroImageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-900/80 to-charcoal-900/40" />
          </div>
          <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-28">
            <span className="inline-block rounded-full bg-charcoal-800/80 border border-sage-500/40 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-sage-300 backdrop-blur-md">
              {about.heroEyebrow}
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl text-cream-50">
              {about.heroHeading}
            </h1>
            <div
              className="rich-content rich-content-invert mt-5 text-cream-200 text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: about.heroSubheading }}
            />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-olive-700">Our Mission</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-charcoal-800">{about.introHeading}</h2>
          </div>
          <div className="mt-10 grid gap-x-12 gap-y-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
            <div className="min-w-0 max-w-2xl lg:order-1">
              <div className="rich-content text-charcoal-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: about.introParagraph1 }} />
              <div className="rich-content mt-4 text-charcoal-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: about.introParagraph2 }} />
            </div>
            <div className="lg:sticky lg:top-24 lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-warmstone-300 shadow-xl">
                <Image
                  src={about.introImage}
                  alt={about.introImageAlt}
                  fill
                  sizes="(min-width: 1024px) 22rem, 90vw"
                  className="object-cover"
                />
              </div>
              {about.introImageAlt && (
                <p className="mt-3 text-xs italic leading-snug text-sage-600">{about.introImageAlt}</p>
              )}
            </div>
          </div>
        </section>

        {/* Why us — icon cards */}
        <section className="bg-warmstone-100/60 py-20 border-y border-warmstone-200">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-olive-700">Why Book With Us</span>
              <h2 className="mt-2 font-display text-3xl font-bold text-charcoal-800">{about.reasonsHeading}</h2>
              <div
                className="rich-content mt-3 text-charcoal-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: about.reasonsSubheading }}
              />
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {about.reasons.map(({ icon, title, body }) => {
                const Icon = getIconComponent(icon);
                return (
                  <div key={title} className="rounded-2xl border border-warmstone-200 bg-cream-50 p-6 shadow-sm transition hover:shadow-md hover:border-olive-600/40">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-olive-100 text-olive-700">
                      <Icon className="h-6 w-6" />
                    </span>
                    <p className="mt-4 text-base font-bold text-charcoal-800">{title}</p>
                    <div
                      className="rich-content mt-2 text-xs leading-relaxed text-charcoal-600"
                      dangerouslySetInnerHTML={{ __html: body }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Disclosure + CTA */}
        <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-charcoal-800">{about.disclosureHeading}</h2>
          <div
            className="rich-content mt-4 text-sm leading-relaxed text-charcoal-600"
            dangerouslySetInnerHTML={{ __html: about.disclosureBody }}
          />

          <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl bg-charcoal-900 p-8 text-cream-100 shadow-xl sm:flex-row sm:items-center sm:justify-between border border-charcoal-800">
            <div>
              <p className="text-lg font-bold text-cream-50">{about.ctaText}</p>
              <p className="text-xs text-sage-300 mt-0.5">Instant mobile tickets &amp; skip-the-line entry</p>
            </div>
            <a
              href="/#tours"
              className="shrink-0 rounded-xl bg-olive-700 px-7 py-3 text-sm font-bold text-cream-100 shadow-md ring-1 ring-sage-400/30 transition hover:bg-olive-800 hover:scale-[1.02]"
            >
              {about.ctaButtonLabel} →
            </a>
          </div>

          <div
            className="rich-content mt-8 text-sm text-sage-600 [&_a]:font-bold [&_a]:text-olive-700 [&_a]:underline"
            dangerouslySetInnerHTML={{ __html: about.contactPromptHtml }}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
