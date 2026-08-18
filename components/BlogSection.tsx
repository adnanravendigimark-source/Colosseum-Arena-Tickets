import Link from "next/link";
import SafeImage from "./SafeImage";
import { getPosts } from "@/lib/posts";
import { getHomepageContent } from "@/lib/homepage";

export default async function BlogSection() {
  const [allPosts, { sections }] = await Promise.all([getPosts(), getHomepageContent()]);
  const posts = allPosts.filter((p) => !p.noIndex).slice(0, 3);
  const s = sections.blogTeaser;

  if (posts.length === 0) return null;

  return (
    <section className="bg-warmstone-100/60 py-16 sm:py-24 border-t border-warmstone-200" id="blog-guides">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-olive-700">
              {s.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-charcoal-800 sm:text-4xl">
              {s.heading}
            </h2>
            <p className="mt-3 max-w-2xl text-base text-charcoal-600 leading-relaxed">{s.subheading}</p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 self-start md:self-auto rounded-full border-2 border-olive-700 bg-cream-50 px-6 py-2.5 text-sm font-bold text-olive-700 transition hover:bg-olive-700 hover:text-cream-100 shadow-sm"
          >
            <span>{s.viewAllText}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-warmstone-200 bg-cream-50 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-olive-600/40"
            >
              <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] overflow-hidden bg-warmstone-100">
                <SafeImage
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="inline-flex rounded-full bg-olive-100 px-2.5 py-0.5 font-bold uppercase tracking-wide text-olive-800">
                    {post.category}
                  </span>
                  {post.readTime && <span className="text-sage-600 font-medium">{post.readTime}</span>}
                </div>
                <h3 className="mt-3 font-display text-xl font-bold leading-snug text-charcoal-800 group-hover:text-olive-700 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                {post.excerpt && (
                  <p className="mt-2 line-clamp-3 text-sm text-charcoal-600 leading-relaxed">{post.excerpt}</p>
                )}
                <div className="mt-auto pt-6">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-olive-700 transition group-hover:gap-2"
                  >
                    <span>{s.readArticleText}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            href="/blog"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-olive-700 px-6 py-3 text-sm font-bold text-cream-100 transition shadow-sm hover:bg-olive-800"
          >
            <span>{s.viewAllText}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
