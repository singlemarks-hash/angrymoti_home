"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { getMessages } from "@/lib/i18n";
import MobileMenu from "./MobileMenu";

/* TODO: 교체 → /assets/svg/menu.svg (햄버거 아이콘) */

export default function Header({ locale }: { locale: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = getMessages(locale);
  const links = navLinks(locale);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled ? "bg-white/95 shadow-[0_1px_12px_rgba(0,0,0,0.08)] backdrop-blur" : "bg-white"
        }`}
      >
        <div className="container-content flex h-16 items-center justify-between md:h-[72px]">
          {/* TODO: 교체 → 터닝 로고 이미지 */}
          <Link
            href={`/${locale}`}
            className="text-[22px] font-extrabold tracking-tight text-brand"
            aria-label="터닝 홈"
          >
            Turning
          </Link>

          <nav aria-label="주 메뉴" className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[16px] font-medium text-gray-700 transition-colors hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://apps.apple.com/kr/app/id6449270376"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-brand px-5 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-dark md:inline-flex"
            >
              {t.header.cta}
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-800 lg:hidden"
              aria-label="메뉴 열기"
              aria-expanded={menuOpen}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} locale={locale} />
    </>
  );
}
