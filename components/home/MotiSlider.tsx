"use client";

import { useCallback, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, TriangleAlert, Trophy } from "lucide-react";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { getMessages } from "@/lib/i18n";

/* TODO: 교체 → /assets/svg/arrow_horizontal.svg, penalty.svg, score.svg */

/**
 * 섹션 9-1 인터랙티브 슬라이더.
 * 핸들을 왼쪽(이탈·노쇼)에서 오른쪽(완주)으로 옮기면
 * 모티의 표정과 잔소리, 벌점/점수 비중이 함께 바뀐다. 터치·마우스·키보드 모두 지원.
 */
export default function MotiSlider({ locale }: { locale: string }) {
  const t = getMessages(locale).features.f1;
  const trackRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(25);
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
    <div className="rounded-3xl border border-ink-line bg-ink-raised p-6 md:p-8">
      {/* 모티 + 말풍선 */}
      <div className="flex flex-col items-center">
        <p
          aria-live="polite"
          className={`rounded-2xl rounded-bl-sm px-5 py-3 text-center text-[14px] font-bold transition-colors duration-300 md:text-[15px] ${
            good ? "bg-jade-soft text-jade" : "bg-tomato-soft text-tomato"
          }`}
        >
          {good ? t.bubbleGood : t.bubbleBad}
        </p>

        <div
          className={`mt-5 rounded-full p-2 transition-colors duration-500 ${
            good ? "bg-jade-soft" : "bg-tomato-soft"
          }`}
        >
          {/* 표정이 바뀌므로 두 장을 겹쳐두고 전환한다 */}
          <div className="relative h-[180px] w-[180px]">
            <div
              className={`absolute inset-0 transition-opacity duration-300 ${good ? "opacity-0" : "opacity-100"}`}
            >
              <PlaceholderImage
                label="moti_angry.png"
                width={180}
                height={180}
                variant="icon"
                alt="화가 난 표정의 모티"
                className="rounded-full"
              />
            </div>
            <div
              className={`absolute inset-0 transition-opacity duration-300 ${good ? "opacity-100" : "opacity-0"}`}
            >
              <PlaceholderImage
                label="moti_happy.png"
                width={180}
                height={180}
                variant="icon"
                alt="기뻐하는 표정의 모티"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 슬라이더 */}
      <div className="mt-8">
        <p className="mb-3 flex items-center justify-center gap-2 text-[13px] font-bold text-cream-dim">
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          {t.sliderLabel}
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </p>
        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          className="relative h-3 cursor-pointer touch-none rounded-full bg-gradient-to-r from-tomato via-ink-line to-jade"
        >
          <div
            role="slider"
            tabIndex={0}
            aria-label="이탈과 완주 사이 상태를 바꾸는 슬라이더"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={value}
            aria-valuetext={`완주 ${value}%`}
            onKeyDown={onKeyDown}
            className="absolute top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-ink-raised bg-cream shadow-lg"
            style={{ left: `${value}%` }}
          />
        </div>

        {/* 벌점 / 점수 비중 */}
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-3">
            <TriangleAlert className="h-4 w-4 shrink-0 text-tomato" aria-hidden="true" />
            <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-ink">
              <div
                className="h-full rounded-full bg-tomato transition-[width] duration-300"
                style={{ width: `${100 - value}%` }}
              />
            </div>
            <span className="shrink-0 whitespace-nowrap text-[13px] font-medium text-cream-muted">
              {t.legendPenalty}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Trophy className="h-4 w-4 shrink-0 text-jade" aria-hidden="true" />
            <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-ink">
              <div
                className="h-full rounded-full bg-jade transition-[width] duration-300"
                style={{ width: `${value}%` }}
              />
            </div>
            <span className="shrink-0 whitespace-nowrap text-[13px] font-medium text-cream-muted">
              {t.legendScore}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
