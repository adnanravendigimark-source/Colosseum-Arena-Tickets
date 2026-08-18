import Link from "next/link";
import SafeImage from "./SafeImage";
import StarRating from "./StarRating";
import { getTours } from "@/lib/data";
import { getRelatedPosts } from "@/lib/posts";
import { getHomepageContent } from "@/lib/homepage";

export default async function BlogSidebar({
  slug,
  recommendedTourId,
}: {
  slug: string;
  recommendedTourId: string;
}) {
  const [tours, related, { header, sections }] = await Promise.all([
    getTours(),
    getRelatedPosts(slug),
    getHomepageContent(),
  ]);
  const tour = tours.find((t) => t.id === recommendedTourId);
  const s = sections.blogPage;

  return (
    <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
      {tour && (
        <div className="overflow-hidden rounded-2xl border border-warmstone-200 bg-cream-50 shadow-sm transition hover:shadow-md">
          <div className="relative aspect-[16/10]">
            <SafeImage src={tour.image} alt={tour.imageAlt} fill sizes="320px" className="object-cover" />
            <span className="absolute left-3 top-3 rounded-lg bg-olive-700 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cream-100 shadow-sm ring-1 ring-sage-400/40">
              {s.sidebarRecommendedBadge}
            </span>
          </div>
          <div className="p-5">
            <p className="font-display text-base font-bold leading-snug text-charcoal-800">
              {tour.title}
            </p>
            <div className="mt-1.5 flex items-center gap-1.5 text-xs text-sage-600 font-medium">
              <StarRating rating={tour.rating} showValue reviewCount={tour.reviews} size="xs" />
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-warmstone-200 pt-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-sage-600">from</p>
                <p className="font-display text-xl font-bold text-charcoal-900">€{tour.price}</p>
              </div>
              <a
                href={tour.href}
                target="_blank"
                rel="noopener nofollow sponsored"
                className="rounded-xl bg-olive-700 px-4 py-2 text-xs font-bold text-cream-100 shadow-sm ring-1 ring-sage-400/30 transition hover:bg-olive-800 hover:scale-[1.02]"
              >
                {header.bookNowText}
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="rounded-2xl border border-warmstone-200 bg-cream-50 p-6 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-widest text-olive-700">
          {s.sidebarRelatedHeading}
        </p>
        <div className="mt-4 space-y-4">
          {related.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex gap-3.5 items-center">
              <div className="relative h-14 w-16 shrink-0 overflow-hidden rounded-xl">
                <SafeImage src={post.image} alt={post.imageAlt} fill sizes="80px" className="object-cover transition group-hover:scale-105" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wide text-olive-700">
                  {post.category}
                </p>
                <p className="mt-0.5 line-clamp-2 text-xs font-bold text-charcoal-800 group-hover:text-olive-700 transition-colors">
                  {post.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <a
        href="/#tours"
        className="block rounded-2xl bg-charcoal-900 p-6 text-center text-sm font-bold text-cream-100 shadow-md border border-charcoal-700 transition hover:scale-[1.01]"
      >
        {s.sidebarCompareLinkText}
      </a>
    </aside>
  );
}
