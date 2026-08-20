import Image from "next/image";
import SafeImage from "./SafeImage";
import { getHomepageContent } from "@/lib/homepage";

export default async function Hero() {
  const content = await getHomepageContent();
  const gallery = content.heroGallery;

  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100dvh-4rem)] flex-col justify-center overflow-hidden bg-charcoal-900 text-cream-100"
    >
      <div className="absolute inset-0">
        {content.heroVideo ? (
          // eslint-disable-next-line jsx-a11y/media-has-caption
          <video
            src={content.heroVideo}
            poster={content.heroImage || undefined}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        ) : (
          <SafeImage
            src={content.heroImage}
            alt={content.heroImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105"
          />
        )}
        {/* Uses the brand olive tone (olive-950, a real shade in tailwind.config.ts)
            instead of a neutral black scrim, so the darkening reads as part of
            the site's palette rather than a generic overlay. */}
        <div className="absolute inset-0 bg-gradient-to-t from-olive-950/95 via-olive-900/65 to-olive-900/30" />
        <div className="absolute inset-0 bg-mosaic mix-blend-soft-light opacity-40" aria-hidden="true" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-sage-400/30 bg-charcoal-900/50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-sage-100 backdrop-blur-md sm:text-xs">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sage-400" />
          {content.heroBadge}
        </div>

        <h1 className="mt-6 max-w-3xl font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.08] tracking-tight text-cream-50">
          {content.heroHeading}
        </h1>
        <div
          className="rich-content rich-content-invert mt-5 max-w-2xl text-sm text-cream-200/90 sm:text-base leading-relaxed"
          dangerouslySetInnerHTML={{ __html: content.heroSubheading }}
        />

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href={content.heroCtaPrimaryHref}
            className="group inline-flex items-center gap-2.5 rounded-xl bg-olive-700 px-7 py-3.5 text-sm font-bold text-cream-100 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.6)] ring-1 ring-inset ring-sage-300/25 transition-all duration-200 hover:bg-olive-800 hover:-translate-y-0.5"
          >
            {content.heroCtaPrimaryText}
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
          <a
            href={content.heroCtaSecondaryHref}
            className="inline-flex items-center gap-2 rounded-xl border border-cream-100/25 bg-cream-100/[0.06] px-6 py-3.5 text-sm font-bold text-cream-50 backdrop-blur-md transition-all duration-200 hover:border-cream-100/50 hover:bg-cream-100/[0.12]"
          >
            {content.heroCtaSecondaryText}
          </a>

          {content.ratingValue && (
            <div className="ml-auto flex items-center gap-3.5 rounded-2xl border border-cream-100/15 bg-charcoal-900/45 px-5 py-3 backdrop-blur-md">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-olive-700/60 text-lg text-sage-200">
                ★
              </div>
              <div className="text-left leading-tight">
                <p className="text-base font-bold text-cream-50">{content.ratingValue}</p>
                <p className="text-xs text-cream-200/70">{content.ratingCount}</p>
              </div>
            </div>
          )}
        </div>

        {gallery.length > 0 && (
          <div className="mt-11 grid grid-cols-2 gap-3.5 sm:grid-cols-4 sm:gap-4">
            {gallery.map((img, i) => (
              <div
                key={img.label + i}
                className="group relative h-24 overflow-hidden rounded-2xl ring-1 ring-cream-100/10 shadow-lg sm:h-28 lg:h-32 transition-all duration-300 hover:-translate-y-1 hover:ring-sage-300/40"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/95 via-charcoal-900/25 to-transparent" />
                <span className="absolute bottom-2.5 left-3 right-3 truncate text-xs font-bold text-cream-50">
                  {img.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
