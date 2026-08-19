import Link from "next/link";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import HeaderNav from "./HeaderNav";
import { TicketIcon } from "./icons";
import { getHomepageContent } from "@/lib/homepage";

export default async function Header() {
  const content = await getHomepageContent();
  const header = content.header;

  return (
    <header className="sticky top-0 z-50 border-b border-warmstone-200/80 bg-cream-100/90 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo
          logoImage={header.logoImage}
          logoAlt={header.logoAlt}
          line1={header.logoLine1}
          line2={header.logoLine2}
        />

        <HeaderNav links={header.navLinks} />

        <div className="flex items-center gap-3">
          <a
            href={header.ctaHref}
            className="hidden items-center gap-2 rounded-xl bg-olive-700 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-cream-100 shadow-sm transition hover:bg-olive-800 hover:scale-[1.02] sm:inline-flex"
          >
            <TicketIcon className="h-4 w-4" />
            {header.bookNowText || header.ctaText}
          </a>
          <MobileNav links={header.navLinks} ctaText={header.ctaText} ctaHref={header.ctaHref} />
        </div>
      </div>
    </header>
  );
}

