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
            className="object-cover object-center scale-105 transition-transform duration-1000"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-900/80 to-charcoal-900/40" />
        <div className="absolute inset-0 bg-mosaic mix-blend-soft-light opacity-80" aria-hidden="true" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-sage-500/40 bg-charcoal-900/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-sage-200 backdrop-blur-md shadow-sm">
          <span className="h-2 w-2 rounded-full bg-sage-400 animate-pulse" />
          {content.heroBadge}
        </div>

        <h1 className="mt-5 max-w-3xl font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.12] tracking-tight text-cream-50 drop-shadow-md">
          {content.heroHeading}
        </h1>
        <div
          className="rich-content rich-content-invert mt-4 max-w-2xl text-base text-cream-200 drop-shadow-sm sm:text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: content.heroSubheading }}
        />

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={content.heroCtaPrimaryHref}
            className="group inline-flex items-center gap-2.5 rounded-xl bg-olive-700 px-7 py-3.5 text-sm font-bold text-cream-100 ring-1 ring-sage-400/40 shadow-xl transition-all duration-200 hover:bg-olive-800 hover:scale-[1.02] hover:shadow-olive-900/40"
          >
            {content.heroCtaPrimaryText}
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
          <a
            href={content.heroCtaSecondaryHref}
            className="rounded-xl border border-cream-100/30 bg-charcoal-800/40 px-6 py-3.5 text-sm font-bold text-cream-100 backdrop-blur-md transition hover:bg-charcoal-800/70 hover:border-sage-400"
          >
            {content.heroCtaSecondaryText}
          </a>

          <div className="ml-auto flex items-center gap-3.5 rounded-2xl border border-warmstone-400/30 bg-charcoal-900/60 px-5 py-3 backdrop-blur-md shadow-lg">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-olive-700/50 text-xl text-sage-300">
              ★
            </div>
            <div className="text-left leading-tight">
              <p className="text-base font-bold text-cream-50">{content.ratingValue}</p>
              <p className="text-xs text-cream-200/70">{content.ratingCount}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {gallery.map((img, i) => (
            <div
              key={img.label + i}
              className="group relative h-24 overflow-hidden rounded-2xl border border-charcoal-700 shadow-xl sm:h-28 lg:h-32 transition-transform duration-300 hover:scale-[1.03]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-900/30 to-transparent" />
              <span className="absolute bottom-2.5 left-3 text-xs font-bold text-cream-50 drop-shadow">
                {img.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
