import type { TocItem } from "@/lib/tableOfContents";

export default function TableOfContents({
  items,
  label = "IN THIS GUIDE",
}: {
  items: TocItem[];
  label?: string;
}) {
  const sections = items.filter((item) => item.level === 2);
  if (sections.length < 2) return null;

  return (
    <div className="rounded-2xl border border-warmstone-200 bg-cream-50 p-5 shadow-sm">
      <p className="font-display text-xs font-bold uppercase tracking-wider text-charcoal-900">
        {label}
      </p>
      <ol className="mt-3.5 space-y-2 border-l-2 border-warmstone-200 pl-3.5 text-xs">
        {sections.map((item, i) => {
          // If the heading already has numbers like "1. Best Time", clean it or display cleanly
          const cleanText = item.text.replace(/^\d+\.\s*/, "");
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="flex items-baseline gap-1.5 font-medium text-charcoal-700 transition hover:text-olive-700"
              >
                <span aria-hidden="true" className="shrink-0 font-bold text-charcoal-900">
                  {i + 1}.
                </span>
                <span className="leading-snug">{cleanText}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
