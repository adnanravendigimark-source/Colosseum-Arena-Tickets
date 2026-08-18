import { getTours } from "@/lib/data";
import { getHomepageContent } from "@/lib/homepage";

export default async function PriceComparison() {
  const [tours, { sections }] = await Promise.all([getTours(), getHomepageContent()]);
  const s = sections.price;
  return (
    <section id="prices" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-3xl">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-olive-700">
          {s.eyebrow}
        </span>
        <h2 className="mt-2 font-display text-3xl font-bold text-charcoal-800 sm:text-4xl">{s.heading}</h2>
        <div
          className="rich-content mt-3 text-base text-charcoal-600 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: s.subheading }}
        />
      </div>

      <div className="mt-10 overflow-x-auto rounded-2xl border border-warmstone-300 bg-cream-50 shadow-sm">
        <table className="w-full min-w-[700px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-charcoal-900 text-cream-100">
              <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">{s.itemLabel}</th>
              <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">{s.priceLabel}</th>
              <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">{s.column1Label}</th>
              <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">{s.column2Label}</th>
              <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">{s.bestForLabel}</th>
              <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider text-right"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-warmstone-200">
            {tours.map((tour, i) => (
              <tr
                key={tour.id}
                className={`transition hover:bg-warmstone-100/70 ${
                  tour.ribbon === "Most Popular" || tour.featured ? "bg-warmstone-100/90 font-medium" : i % 2 ? "bg-cream-100/40" : ""
                }`}
              >
                <td className="px-6 py-4 font-semibold text-charcoal-800">{tour.title}</td>
                <td className="px-6 py-4 font-bold text-olive-700">
                  €{tour.price} <span className="font-normal text-xs text-sage-600">/ person</span>
                </td>
                <td className="px-6 py-4 text-charcoal-600">{tour.priceTableColumn1 || tour.duration}</td>
                <td className="px-6 py-4 text-charcoal-600">{tour.priceTableFeature || "Standard Entry"}</td>
                <td className="px-6 py-4 text-charcoal-600">{tour.bestFor}</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href={tour.href}
                    target="_blank"
                    rel="noopener nofollow sponsored"
                    className="inline-flex rounded-xl bg-olive-700 px-4 py-2 text-xs font-bold text-cream-100 shadow-sm ring-1 ring-sage-400/30 transition hover:bg-olive-800 hover:scale-[1.02]"
                  >
                    {s.bookLabel}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3.5 text-xs text-sage-600">{s.note}</p>
    </section>
  );
}
