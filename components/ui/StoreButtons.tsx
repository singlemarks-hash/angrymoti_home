"use client";

import { useEffect, useRef, useState } from "react";
import { Apple, Play } from "lucide-react";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants";
import { getMessages } from "@/lib/i18n";

/* TODO: 교체 → /assets/svg/symbol_apple.svg, /assets/svg/symbol_play.svg */

interface StoreButtonsProps {
  locale: string;
  /** "solid" = 토마토 배경 / "outline" = 어두운 배경 위 테두리 */
  className?: string;
}

/**
 * App Store / Google Play 버튼.
 * 안드로이드는 아직 출시 전이라 이동 대신 "준비 중" 안내를 띄운다.
 */
export default function StoreButtons({ locale, className = "" }: StoreButtonsProps) {
  const t = getMessages(locale).hero;
  const [showSoon, setShowSoon] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const onAndroidClick = () => {
    if (PLAY_STORE_URL) return;
    setShowSoon(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setShowSoon(false), 3200);
  };

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div className="flex flex-col items-stretch gap-3 sm:flex-row">
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 rounded-full bg-tomato px-7 py-4 text-[16px] font-bold text-white transition-colors hover:bg-tomato-dark md:text-[17px]"
        >
          <Apple aria-hidden="true" className="h-5 w-5 -translate-y-[1px] fill-current" />
          {t.ios}
        </a>

        <button
          type="button"
          onClick={onAndroidClick}
          aria-describedby={showSoon ? "android-soon" : undefined}
          className="inline-flex items-center justify-center gap-2.5 rounded-full border border-ink-line bg-ink-raised px-7 py-4 text-[16px] font-bold text-cream transition-colors hover:border-cream-dim md:text-[17px]"
        >
          <Play aria-hidden="true" className="h-5 w-5 fill-current" />
          {t.android}
        </button>
      </div>

      {/* 준비 중 안내 — 정중한 톤 */}
      <p
        id="android-soon"
        role="status"
        className={`text-[14px] text-cream-muted transition-opacity duration-300 ${
          showSoon ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {showSoon ? t.androidSoon : " "}
      </p>
    </div>
  );
}
