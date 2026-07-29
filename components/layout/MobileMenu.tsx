"use client";

import Link from "next/link";
import { useEffect } from "react";
import { X } from "lucide-react";
import { APP_STORE_URL, navLinks } from "@/lib/constants";
import { getMessages } from "@/lib/i18n";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  locale: string;
}

export default function MobileMenu({ open, onClose, locale }: MobileMenuProps) {
  const t = getMessages(locale);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="모바일 메뉴"
      aria-hidden={!open}
      className={`fixed inset-0 z-50 bg-ink transition-all duration-300 lg:hidden ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div className="container-content flex h-16 items-center justify-between">
        <Link
          href={`/${locale}`}
          onClick={onClose}
          className="flex items-center gap-2 text-[19px] font-extrabold tracking-tight text-cream"
        >
          <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-tomato" />
          앵그리모티
        </Link>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-cream"
          aria-label="메뉴 닫기"
        >
          <X className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <nav aria-label="모바일 주 메뉴" className="container-content mt-6 flex flex-col">
        {navLinks(locale).map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            tabIndex={open ? 0 : -1}
            className={`border-b border-ink-line py-5 text-[20px] font-semibold text-cream transition-all duration-300 hover:text-tomato ${
              open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
            style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="container-content mt-8">
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={open ? 0 : -1}
          className="inline-flex w-full items-center justify-center rounded-full bg-tomato px-6 py-4 text-[17px] font-bold text-white"
        >
          {t.header.cta}
        </a>
      </div>
    </div>
  );
}
