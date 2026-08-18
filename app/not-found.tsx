import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getHomepageContent } from "@/lib/homepage";

export default async function NotFound() {
  const { sections } = await getHomepageContent();
  const s = sections.notFound;

  return (
    <>
      <Header />
      <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
        <p className="font-display text-7xl font-black text-olive-700">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-charcoal-800 sm:text-3xl">
          {s.heading}
        </h1>
        <p className="mt-3 max-w-md text-charcoal-600">{s.body}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={s.primaryButtonHref}
            className="rounded-xl bg-olive-700 px-6 py-3 text-sm font-bold text-cream-100 shadow-md ring-1 ring-sage-400/30 transition hover:bg-olive-800 hover:scale-[1.02]"
          >
            {s.primaryButtonText}
          </Link>
          <Link
            href={s.secondaryButtonHref}
            className="rounded-xl border border-warmstone-300 px-6 py-3 text-sm font-bold text-charcoal-700 transition hover:bg-warmstone-100"
          >
            {s.secondaryButtonText}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
