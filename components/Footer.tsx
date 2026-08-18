import Link from "next/link";
import Logo from "./Logo";
import { getHomepageContent } from "@/lib/homepage";

export default async function Footer() {
  const content = await getHomepageContent();
  const f = content.footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-warmstone-300 bg-charcoal-900 text-cream-100">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 lg:col-span-2">
            <Logo
              logoImage={content.header.logoImage}
              logoAlt={content.header.logoAlt}
              line1={content.header.logoLine1}
              line2={content.header.logoLine2}
              theme="dark"
            />
            <div
              className="rich-content rich-content-invert max-w-md text-sm text-cream-200/70 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: f.tagline }}
            />
            <div className="pt-2 text-xs text-cream-200/60 leading-relaxed">
              <p className="font-semibold text-cream-100">{f.addressHeading}</p>
              <p className="mt-1">{f.addressLine1}</p>
              <p>{f.addressLine2}</p>
            </div>
          </div>

          {f.columns.map((col) => (
            <div key={col.title}>
              <p className="font-display text-sm font-bold uppercase tracking-wider text-sage-300">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-cream-200/70 transition hover:text-cream-50"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-charcoal-800 pt-8 text-xs text-cream-200/50 sm:flex-row">
          <p>© {currentYear} {f.copyrightText}</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-cream-50 transition">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-cream-50 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-cream-50 transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
