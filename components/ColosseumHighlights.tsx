import { getHomepageContent } from "@/lib/homepage";

export default async function ColosseumHighlights() {
  const { sections } = await getHomepageContent();
  const s = sections.highlights;

  return (
    <section id="highlights" className="bg-charcoal-900 py-16 text-cream-100 border-y border-charcoal-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <span className="text-xs font-bold uppercase tracking-wider text-sage-300">
          {s.eyebrow}
        </span>
        <h2 className="mt-2 font-display text-3xl font-bold text-cream-50">{s.heading}</h2>
        <p className="mt-3 max-w-2xl text-cream-200/80 leading-relaxed">{s.subheading}</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {s.cards.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-charcoal-750 bg-charcoal-800/80 p-6 backdrop-blur-sm transition hover:border-sage-400/40 hover:bg-charcoal-800"
            >
              <span className="text-3xl">{item.icon}</span>
              <h3 className="mt-4 font-display text-lg font-semibold text-cream-50">{item.title}</h3>
              <p className="mt-2 text-sm text-cream-200/70 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
