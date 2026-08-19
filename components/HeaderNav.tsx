"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavLink } from "@/lib/homepage";

export default function HeaderNav({ links }: { links: NavLink[] }) {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-7 md:flex">
      {links.map((link) => {
        const isActive =
          link.href === "/"
            ? pathname === "/"
            : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href + link.label}
            href={link.href}
            className={`relative py-1 text-sm font-semibold transition ${
              isActive
                ? "text-olive-700 font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-olive-700"
                : "text-charcoal-700 hover:text-olive-700"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
