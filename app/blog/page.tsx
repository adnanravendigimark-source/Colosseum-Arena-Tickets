import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SafeImage from "@/components/SafeImage";
import { getPosts } from "@/lib/posts";
import { getBlogSeoSettings } from "@/lib/settings";
import { getHomepageContent } from "@/lib/homepage";
import { resolveRobots, resolveCanonical, resolveOg } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getBlogSeoSettings();
  const og = resolveOg(settings, { title: settings.metaTitle, description: settings.metaDescription });
  return {
    title: settings.metaTitle || "Colosseum Arena Tickets Guides & Visitor Tips (2026)",
    description: settings.metaDescription || "Expert visitor guides for Colosseum Arena tickets — Arena Floor direct access, booking advice, and ticket prices in Rome.",
    alternates: { canonical: resolveCanonical("/blog", settings.canonicalUrl) },
    robots: resolveRobots(settings.noIndex, settings.noFollow),
    openGraph: { title: og.title, description: og.description, url: "/blog", type: "website", images: og.image ? [{ url: og.image }] : undefined },
    twitter: { card: "summary_large_image", title: og.title, description: og.description, images: og.image ? [og.image] : undefined },
  };
}

export default async function BlogIndexPage() {
  const [posts, { sections }] = await Promise.all([getPosts(), getHomepageContent()]);
  const s = sections.blogPage;
  const [featured, ...rest] = posts;

  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="text-center">
          <span className="inline-block rounded-md bg-olive-100 border border-olive-200 px-3 py-1 text-xs font-bold uppercase tracking-wider text-olive-800">
            {s.eyebrow}
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold text-charcoal-800 sm:text-5xl">
            {s.heading}
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-charcoal-600 leading-relaxed">{s.subheading}</p>
        </div>

        {!featured && (
          <p className="mt-14 rounded-2xl border border-dashed border-warmstone-300 p-12 text-center text-sm text-charcoal-500">
            {s.emptyStateText}
          </p>
        )}

        {/* Featured post */}
        {featured && (
          <Link
            href={`/blog/${featured.slug}`}
            className="group mt-14 grid gap-0 overflow-hidden rounded-2xl border border-warmstone-200 bg-cream-50 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-olive-600/40 md:grid-cols-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto">
              <SafeImage
                src={featured.image}
                alt={featured.imageAlt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <span className="inline-flex w-fit rounded-md bg-olive-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-olive-800">
                {featured.category}
              </span>
              <h2 className="mt-4 font-display text-2xl font-bold text-charcoal-800 group-hover:text-olive-700 transition-colors">
                {featured.title}
              </h2>
              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-charcoal-600">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-olive-700">
                {s.featuredLinkText} <span className="transition group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        )}

        {/* Remaining posts */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-2xl border border-warmstone-200 bg-cream-50 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-olive-600/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <SafeImage
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(min-width: 640px) 45vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex rounded-md bg-olive-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-olive-800">
                    {post.category}
                  </span>
                  <span className="text-xs text-sage-600 font-medium">{post.readTime}</span>
                </div>
                <h2 className="mt-3 font-display text-xl font-bold text-charcoal-800 group-hover:text-olive-700 transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-charcoal-600">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl bg-charcoal-900 p-10 text-center text-cream-100 shadow-xl border border-charcoal-800">
          <p className="font-display text-2xl font-bold text-cream-50">{s.ctaHeading}</p>
          <a
            href="/#tours"
            className="rounded-xl bg-olive-700 px-7 py-3.5 text-sm font-bold text-cream-100 shadow-md ring-1 ring-sage-400/30 transition hover:bg-olive-800 hover:scale-[1.02]"
          >
            {s.ctaButtonText}
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
