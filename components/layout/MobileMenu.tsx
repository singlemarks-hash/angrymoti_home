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
      className={`fixed inset-0 z-50 bg-white transition-all duration-300 lg:hidden ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div className="container-content flex h-16 items-center justify-between">
        <Link
          href={`/${locale}`}
          onClick={onClose}
          className="text-[22px] font-extrabold tracking-tight text-brand"
        >
          Turning
        </Link>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-800"
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
            className={`border-b border-gray-100 py-5 text-[20px] font-semibold text-gray-900 transition-all duration-300 hover:text-brand ${
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
          className="inline-flex w-full items-center justify-center rounded-full bg-brand px-6 py-4 text-[17px] font-semibold text-white"
        >
          {t.header.cta}
        </a>
      </div>
    </div>
  );
}
