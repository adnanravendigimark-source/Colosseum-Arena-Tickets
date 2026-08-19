import SafeImage from "./SafeImage";
import StarRating from "./StarRating";
import type { Tour } from "@/lib/data";
import { LockIcon } from "./icons";

export default function TourCard({
  tour,
  recommended,
  bookNowText = "Book Tickets",
}: {
  tour: Tour;
  recommended?: {
    badgeLabel: string;
    reasons: string[];
    urgencyText: string;
  };
  bookNowText?: string;
}) {
  return (
    <div
      className={`group flex h-full flex-col overflow-hidden rounded-2xl bg-cream-50 transition-all duration-300 hover:-translate-y-1 ${recommended
          ? "border-2 border-olive-700 shadow-xl shadow-olive-900/10 hover:shadow-2xl ring-1 ring-sage-400"
          : "border border-warmstone-200/90 shadow-sm hover:border-olive-600/50 hover:shadow-xl"
        }`}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-warmstone-100">
        <SafeImage
          src={tour.image}
          alt={tour.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-charcoal-900/10" />

        {(recommended || tour.ribbon) && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-lg bg-olive-700 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cream-100 shadow-md ring-1 ring-sage-400/40">
            <span>⚔️</span>
            {recommended ? recommended.badgeLabel : tour.ribbon}
          </span>
        )}

        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-lg bg-cream-50/95 px-2.5 py-1 text-xs font-bold text-charcoal-800 shadow-md backdrop-blur-md">
          <StarRating rating={tour.rating} showValue reviewCount={tour.reviews} size="xs" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="min-h-[3.25rem] font-display text-lg font-bold leading-snug text-charcoal-800 line-clamp-2 group-hover:text-olive-700 transition-colors">
          {tour.title}
        </h3>
        <div
          className="rich-content mt-1 line-clamp-2 min-h-[2.5rem] text-sm text-charcoal-600 [&>p]:m-0 [&>p]:line-clamp-2 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: tour.description }}
        />

        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {tour.includes.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1 rounded-md bg-warmstone-100/70 px-2.5 py-1 text-[11px] font-semibold text-charcoal-700 border border-warmstone-200"
            >
              <span className="text-olive-700 font-bold">✓</span>
              {item}
            </span>
          ))}
        </div>

        <p className="mt-3 text-xs font-medium text-sage-600">⏱ {tour.duration}</p>

        {recommended && recommended.reasons.length > 0 && (
          <div className="mt-3.5 rounded-xl bg-warmstone-100/90 border border-warmstone-200 p-3">
            {recommended.reasons.slice(0, 2).map((reason) => (
              <p key={reason} className="flex items-start gap-1.5 text-[11px] leading-snug text-charcoal-700 font-semibold">
                <span className="mt-0.5 text-olive-700">✓</span>
                {reason}
              </p>
            ))}
          </div>
        )}

        {/* Footer */}
        {recommended ? (
          <div className="mt-auto border-t border-warmstone-200 pt-4">
            <div className="flex items-end justify-between gap-2">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-sage-600">from</p>
                <span className="font-display text-2xl font-bold text-charcoal-900">€{tour.price}</span>
              </div>
              <a
                href={tour.href}
                target="_blank"
                rel="noopener nofollow sponsored"
                className="flex shrink-0 items-center gap-1.5 rounded-xl bg-olive-700 px-5 py-2.5 text-sm font-bold text-cream-100 shadow-md ring-1 ring-sage-400/30 transition hover:bg-olive-800 hover:scale-[1.02]"
              >
                {bookNowText}
              </a>
            </div>
            {recommended.urgencyText && (
              <p className="mt-2.5 flex items-center gap-1 text-[11px] font-semibold text-olive-700">
                <LockIcon className="h-3 w-3" /> {recommended.urgencyText}
              </p>
            )}
          </div>
        ) : (
          <div className="mt-auto flex items-end justify-between border-t border-warmstone-200 pt-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-sage-600">from</p>
              <div className="flex items-baseline gap-2">
                {tour.originalPrice && (
                  <span className="text-sm text-sage-500 line-through">€{tour.originalPrice}</span>
                )}
                <span className="font-display text-2xl font-bold text-charcoal-900">€{tour.price}</span>
                <span className="text-xs text-charcoal-500">/ person</span>
              </div>
            </div>
            <a
              href={tour.href}
              target="_blank"
              rel="noopener nofollow sponsored"
              className="rounded-xl bg-olive-700 px-5 py-2.5 text-sm font-bold text-cream-100 shadow-md ring-1 ring-sage-400/30 transition hover:bg-olive-800 hover:scale-[1.02]"
            >
              {bookNowText}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
