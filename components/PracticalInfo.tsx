import { getHomepageContent } from "@/lib/homepage";

export default async function PracticalInfo() {
  const { sections } = await getHomepageContent();
  const s = sections.practical;

  return (
    <section className="bg-warmstone-100/60 py-20 border-y border-warmstone-200">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-warmstone-200 bg-cream-50 p-6 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-olive-100 text-olive-800 font-bold text-lg mb-4">
            ⏱
          </div>
          <h3 className="font-display text-xl font-bold text-charcoal-800">{s.hoursHeading}</h3>
          <table className="mt-4 w-full text-sm">
            <tbody>
              {s.hours.map((row, i) => (
                <tr key={row.range + i} className="border-b border-warmstone-200/70">
                  <td className="py-2.5 text-charcoal-600">{row.range}</td>
                  <td className="py-2.5 text-right font-semibold text-charcoal-800">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-xs text-sage-600">{s.hoursNote}</p>
        </div>

        <div className="rounded-2xl border border-warmstone-200 bg-cream-50 p-6 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-100 text-sage-700 font-bold text-lg mb-4">
            📍
          </div>
          <h3 className="font-display text-xl font-bold text-charcoal-800">{s.addressHeading}</h3>
          <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-charcoal-600">{s.address}</p>
          <p className="mt-3 text-xs font-semibold text-olive-700">{s.metro}</p>
        </div>

        <div className="rounded-2xl border border-warmstone-200 bg-cream-50 p-6 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-warmstone-200 text-charcoal-700 font-bold text-lg mb-4">
            💡
          </div>
          <h3 className="font-display text-xl font-bold text-charcoal-800">{s.bestTimeHeading}</h3>
          <div
            className="rich-content mt-4 text-sm text-charcoal-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: s.bestTimeBody }}
          />
        </div>
      </div>
    </section>
  );
}
