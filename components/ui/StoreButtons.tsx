"use client";

import { useEffect, useRef, useState } from "react";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants";
import { getMessages } from "@/lib/i18n";
import StoreBadge from "./StoreBadge";

interface StoreButtonsProps {
  locale: string;
  /** 안내 문구 색 — 어두운 배경(기본) / 토마토 배경 위 */
  tone?: "dark" | "brand";
  className?: string;
}

/**
 * App Store / Google Play 배지 버튼.
 * 안드로이드는 아직 출시 전이라 이동 대신 "준비 중" 안내를 띄운다.
 * (lib/constants.ts의 PLAY_STORE_URL에 URL을 넣으면 자동으로 링크가 된다)
 */
export default function StoreButtons({ locale, tone = "dark", className = "" }: StoreButtonsProps) {
  const t = getMessages(locale).hero;
  const [showSoon, setShowSoon] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const onAndroidClick = () => {
    setShowSoon(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setShowSoon(false), 3200);
  };

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div className="flex flex-row items-center gap-2.5 sm:gap-3">
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="App Store에서 앵그리모티 다운로드"
          className="group rounded-xl"
        >
          <StoreBadge kind="ios" />
        </a>

        {PLAY_STORE_URL ? (
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Play에서 앵그리모티 다운로드"
            className="group rounded-xl"
          >
            <StoreBadge kind="android" />
          </a>
        ) : (
          <button
            type="button"
            onClick={onAndroidClick}
            aria-label="Google Play 다운로드 (준비 중)"
            aria-describedby={showSoon ? "android-soon" : undefined}
            className="group rounded-xl"
          >
            <StoreBadge kind="android" />
          </button>
        )}
      </div>

      {/* 준비 중 안내 — 정중한 톤 */}
      <p
        id="android-soon"
        role="status"
        className={`min-h-[20px] text-[14px] transition-opacity duration-300 ${
          tone === "brand" ? "text-white/90" : "text-cream-muted"
        } ${showSoon ? "opacity-100" : "opacity-0"}`}
      >
        {showSoon ? t.androidSoon : ""}
      </p>
    </div>
  );
}
