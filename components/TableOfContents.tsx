import type { TocItem } from "@/lib/tableOfContents";

export default function TableOfContents({
  items,
  label = "In This Guide",
}: {
  items: TocItem[];
  label?: string;
}) {
  const sections = items.filter((item) => item.level === 2);
  if (sections.length < 2) return null;

  return (
    <div className="mt-8 rounded-2xl border border-warmstone-300 bg-warmstone-100/50 p-6">
      <p className="text-xs font-bold uppercase tracking-widest text-olive-800">{label}</p>
      <ul className="mt-3.5 space-y-2.5 text-sm">
        {sections.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex items-center gap-2 font-medium text-charcoal-700 transition hover:text-olive-700 hover:translate-x-0.5"
            >
              <span aria-hidden="true" className="text-olive-700 font-bold">
                ›
              </span>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
