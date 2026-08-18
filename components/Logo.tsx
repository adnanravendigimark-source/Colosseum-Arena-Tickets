import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/Logo.png";

export default function Logo({
  logoImage,
  logoAlt = "Colosseum Arena Tickets",
  line1 = "Colosseum",
  line2 = "Arena Tickets",
  theme = "light",
  className = "",
}: {
  logoImage?: string;
  logoAlt?: string;
  line1?: string;
  line2?: string;
  theme?: "light" | "dark";
  className?: string;
}) {
  const isDark = theme === "dark";
  const customSrc = logoImage?.trim();

  return (
    <Link href="/" className={`group inline-flex items-center gap-3 ${className}`}>
      {/* Sized to the emblem artwork's actual ~1.4:1 aspect ratio so it
          fills its box edge-to-edge instead of leaving pillarbox space. */}
      <span className="relative block h-11 w-[62px] sm:h-12 sm:w-[67px] shrink-0 transition-transform duration-300 group-hover:scale-105">
        <Image
          src={customSrc || logoImg}
          alt={logoAlt}
          fill
          priority
          sizes="67px"
          className="object-contain"
        />
      </span>
      <div className="flex flex-col leading-tight">
        <span
          className={`font-display text-lg sm:text-xl font-bold tracking-tight transition-colors ${
            isDark ? "text-cream-100 group-hover:text-cream-50" : "text-charcoal-800 group-hover:text-olive-700"
          }`}
        >
          {line1}
        </span>
        <span className={`text-[11px] sm:text-xs font-bold uppercase tracking-widest ${isDark ? "text-sage-300" : "text-sage-600"}`}>
          {line2}
        </span>
      </div>
    </Link>
  );
}
