"use client";

import { useCallback, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Smartphone, Sprout } from "lucide-react";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { getMessages } from "@/lib/i18n";

/* TODO: 교체 → /assets/svg/arrow_horizonal.svg (슬라이더 화살표), disturb.svg, useful.svg (범례 아이콘) */

/**
 * 섹션 9-1 인터랙티브 비교 슬라이더.
 * 핸들 위치(0~100)에 따라 [방해 앱 사용량 ↔ 도움 앱 사용량] 비중이 바뀌고,
 * 터니 캐릭터의 말풍선과 상태가 함께 변한다. 터치/마우스/키보드 모두 지원.
 */
export default function HabitSlider({ locale }: { locale: string }) {
  const t = getMessages(locale).features.f1;
  const trackRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(30);
  const dragging = useRef(false);

  const good = value >= 50;

  const setFromClientX = useCallback((clientX: number) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const ratio = (clientX - rect.left) / rect.width;
    setValue(Math.round(Math.min(100, Math.max(0, ratio * 100))));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging.current) setFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      setValue((v) => Math.max(0, v - 5));
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      setValue((v) => Math.min(100, v + 5));
    } else if (e.key === "Home") {
      e.preventDefault();
      setValue(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setValue(100);
    }
  };

  return (
    <div className="rounded-3xl bg-white p-6 shadow-[0_6px_32px_rgba(0,0,0,0.07)] md:p-8">
      {/* 캐릭터 + 말풍선 */}
      <div className="flex flex-col items-center">
        {/* TODO: 교체 → /assets/home/section_09_chat_bubble.png (현재는 텍스트 말풍선으로 구현) */}
        <p
          aria-live="polite"
          className={`rounded-2xl rounded-bl-sm px-5 py-3 text-[14px] font-semibold transition-colors duration-300 md:text-[15px] ${
            good ? "bg-brand-soft text-brand-deep" : "bg-accent-orange/10 text-accent-orange"
          }`}
        >
          {good ? t.bubbleGood : t.bubbleBad}
        </p>

        <div
          className={`mt-5 rounded-full p-2 transition-colors duration-500 ${
            good ? "bg-brand-soft" : "bg-accent-orange/10"
          }`}
        >
          <PlaceholderImage
            label="section_09_01_01.png"
            width={180}
            height={180}
            variant="icon"
            alt={good ? "좋은 습관 상태의 터니 캐릭터" : "나쁜 습관 상태의 터니 캐릭터"}
            className="rounded-full"
          />
        </div>
      </div>

      {/* 슬라이더 */}
      <div className="mt-8">
        <p className="mb-3 flex items-center justify-center gap-2 text-[13px] font-semibold text-gray-500">
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          {t.sliderLabel}
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </p>
        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          className="relative h-3 cursor-pointer touch-none rounded-full bg-gradient-to-r from-accent-orange/70 via-gray-200 to-brand"
        >
          <div
            role="slider"
            tabIndex={0}
            aria-label="방해 앱과 도움 앱 사용량 비교 슬라이더"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={value}
            aria-valuetext={`도움 앱 사용량 ${value}%`}
            onKeyDown={onKeyDown}
            className="absolute top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-gray-900 shadow-md transition-shadow hover:shadow-lg"
            style={{ left: `${value}%` }}
          />
        </div>

        {/* 사용량 비중 바 */}
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-3">
            <Smartphone className="h-4 w-4 shrink-0 text-accent-orange" aria-hidden="true" />
            <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full bg-accent-orange transition-[width] duration-300"
                style={{ width: `${100 - value}%` }}
              />
            </div>
            <span className="shrink-0 whitespace-nowrap text-[13px] font-medium text-gray-500">{t.legendDisturb}</span>
          </div>
          <div className="flex items-center gap-3">
            <Sprout className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
            <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full bg-brand transition-[width] duration-300"
                style={{ width: `${value}%` }}
              />
            </div>
            <span className="shrink-0 whitespace-nowrap text-[13px] font-medium text-gray-500">{t.legendUseful}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
