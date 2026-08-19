"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { ShieldCheckIcon, LockIcon } from "./icons";

function FacebookIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function PinterestIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.357-.053.225-.174.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
    </svg>
  );
}

function EmailEnvelopeIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="border-t border-warmstone-300/80 bg-[#EFE9DC] text-charcoal-800 transition-colors">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info */}
          <div className="space-y-4 lg:col-span-1">
            <Logo
              line1="COLOSSEUM"
              line2="ARENA ENTRY"
            />
            <p className="text-xs leading-relaxed text-charcoal-600">
              We help you experience the best of Ancient Rome with handpicked tickets, tours and travel guides.
            </p>
            <div className="flex items-center gap-2.5 pt-2 text-charcoal-700">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-warmstone-300 bg-cream-50 text-charcoal-700 transition hover:border-olive-700 hover:text-olive-700"
              >
                <FacebookIcon className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-warmstone-300 bg-cream-50 text-charcoal-700 transition hover:border-olive-700 hover:text-olive-700"
              >
                <InstagramIcon className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-warmstone-300 bg-cream-50 text-charcoal-700 transition hover:border-olive-700 hover:text-olive-700"
              >
                <PinterestIcon className="h-3.5 w-3.5" />
              </a>
              <a
                href="/contact"
                aria-label="Contact Email"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-warmstone-300 bg-cream-50 text-charcoal-700 transition hover:border-olive-700 hover:text-olive-700"
              >
                <EmailEnvelopeIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-wider text-charcoal-900">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <Link href="/#tours" className="text-charcoal-600 transition hover:text-olive-700">
                  Tickets
                </Link>
              </li>
              <li>
                <Link href="/#tours" className="text-charcoal-600 transition hover:text-olive-700">
                  Tours
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-charcoal-600 transition hover:text-olive-700">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-charcoal-600 transition hover:text-olive-700">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-charcoal-600 transition hover:text-olive-700">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Tours */}
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-wider text-charcoal-900">
              Top Tours
            </p>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <Link href="/#tours" className="text-charcoal-600 transition hover:text-olive-700">
                  Arena Floor Access
                </Link>
              </li>
              <li>
                <Link href="/#tours" className="text-charcoal-600 transition hover:text-olive-700">
                  Underground Tour
                </Link>
              </li>
              <li>
                <Link href="/#tours" className="text-charcoal-600 transition hover:text-olive-700">
                  Colosseum + Forum
                </Link>
              </li>
              <li>
                <Link href="/#tours" className="text-charcoal-600 transition hover:text-olive-700">
                  Night Tour
                </Link>
              </li>
              <li>
                <Link href="/#tours" className="text-charcoal-600 transition hover:text-olive-700">
                  Private Tours
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-wider text-charcoal-900">
              Help
            </p>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <Link href="/#faq" className="text-charcoal-600 transition hover:text-olive-700">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-charcoal-600 transition hover:text-olive-700">
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-charcoal-600 transition hover:text-olive-700">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-charcoal-600 transition hover:text-olive-700">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-charcoal-600 transition hover:text-olive-700">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-wider text-charcoal-900">
              Stay Updated
            </p>
            <p className="mt-2 text-xs text-charcoal-600 leading-relaxed">
              Get tips, inspiration and exclusive offers for your next trip to Rome.
            </p>
            {subscribed ? (
              <p className="mt-3 text-xs font-semibold text-olive-700">✓ Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-3 space-y-2">
                <div className="flex rounded-lg border border-warmstone-300 bg-cream-50 overflow-hidden focus-within:border-olive-700">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email..."
                    className="w-full bg-transparent px-3 py-2 text-xs text-charcoal-800 placeholder-charcoal-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="flex items-center justify-center bg-olive-700 px-3 text-cream-100 transition hover:bg-olive-800"
                  >
                    →
                  </button>
                </div>
                <label className="flex items-start gap-1.5 text-[11px] text-charcoal-600 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 rounded border-warmstone-300 text-olive-700 focus:ring-olive-700"
                  />
                  <span>I agree to receive emails and updates.</span>
                </label>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-warmstone-300 pt-6 text-[11px] text-charcoal-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Colosseum Arena Entry. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <span className="inline-flex items-center gap-1.5">
              <LockIcon className="h-3.5 w-3.5 text-olive-700" />
              Secure Booking
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheckIcon className="h-3.5 w-3.5 text-olive-700" />
              Best Price Guarantee
            </span>
            <span>Made with ❤️ in Rome</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
