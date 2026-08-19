import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SafeImage from "@/components/SafeImage";
import BlogIndexContainer from "@/components/BlogIndexContainer";
import { ColosseumIcon } from "@/components/icons";
import { getPosts } from "@/lib/posts";
import { getBlogSeoSettings } from "@/lib/settings";
import { getHomepageContent } from "@/lib/homepage";
import { resolveRobots, resolveCanonical, resolveOg } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getBlogSeoSettings();
  const og = resolveOg(settings, { title: settings.metaTitle, description: settings.metaDescription });
  return {
    title: settings.metaTitle || "Colosseum Blog | Tickets, Guides & Insider Tips",
    description: settings.metaDescription || "Tips, guides and inspiration to help you experience the best of Ancient Rome.",
    alternates: { canonical: resolveCanonical("/blog", settings.canonicalUrl) },
    robots: resolveRobots(settings.noIndex, settings.noFollow),
    openGraph: { title: og.title, description: og.description, url: "/blog", type: "website", images: og.image ? [{ url: og.image }] : undefined },
    twitter: { card: "summary_large_image", title: og.title, description: og.description, images: og.image ? [og.image] : undefined },
  };
}

export default async function BlogIndexPage() {
  const [posts, { sections, heroImage, heroImageAlt }] = await Promise.all([getPosts(), getHomepageContent()]);
  const s = sections.blogPage;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Blog Hero Banner */}
        <section className="relative overflow-hidden bg-[#1E201B] text-cream-100">
          <div className="absolute inset-0">
            <SafeImage
              src={heroImage || "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=2400&auto=format&fit=crop"}
              alt={heroImageAlt || "Colosseum arches illuminated"}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E201B] via-[#1E201B]/80 to-transparent" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 text-center sm:text-left">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="text-xs font-medium text-cream-200/70">
              <ol className="flex items-center justify-center sm:justify-start gap-1.5">
                <li>
                  <Link href="/" className="hover:text-cream-50 transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-cream-200/40">&gt;</li>
                <li className="font-semibold text-cream-50" aria-current="page">
                  Blog
                </li>
              </ol>
            </nav>

            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-cream-50 sm:text-5xl lg:text-6xl">
              {s.heading || "Colosseum Blog"}
            </h1>

            {/* Decorative Divider with Colosseum Icon */}
            <div className="mt-5 flex items-center justify-center sm:justify-start gap-3 max-w-xs mx-auto sm:mx-0">
              <span className="h-px flex-1 bg-cream-100/30" />
              <ColosseumIcon className="h-5 w-5 text-[#B5C4A9]" />
              <span className="h-px flex-1 bg-cream-100/30" />
            </div>

            <p className="mt-4 max-w-lg text-xs leading-relaxed text-cream-200/90 sm:text-sm">
              {s.subheading || "Tips, guides and inspiration to help you experience the best of Ancient Rome."}
            </p>
          </div>
        </section>

        {/* Main Content Area */}
        <BlogIndexContainer
          posts={posts}
          emptyStateText={s.emptyStateText}
          ctaHeading={s.ctaHeading || "Book Your Colosseum Tickets"}
          ctaBody="Best prices, secure booking and instant confirmation."
          ctaButtonText={s.ctaButtonText || "Compare Tickets →"}
        />
      </main>
      <Footer />
    </>
  );
}
