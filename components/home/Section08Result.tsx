"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "@/components/ui/CountUp";
import Reveal from "@/components/ui/Reveal";
import { getMessages } from "@/lib/i18n";

export default function Section08Result({ locale }: { locale: string }) {
  const t = getMessages(locale);
  const chartRef = useRef<HTMLDivElement>(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const el = chartRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setFilled(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-pad bg-ink-surface">
      <div className="container-content grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <h2 className="section-title">
            <span className="numeral text-[44px] text-jade md:text-[64px]">
              <CountUp end={t.result.percent} />%
            </span>
            {t.result.titleSuffix}
          </h2>
          <p className="section-sub mt-6">{t.result.body}</p>
          <p className="mt-4 text-[13px] text-cream-dim">{t.result.caption}</p>
        </Reveal>

        <Reveal delay={150}>
          {/* 시작 성공률 비교 차트 */}
          <div
            ref={chartRef}
            role="img"
            aria-label={`그냥 알람 대비 앵그리모티의 시작 성공률이 ${t.result.percent}%로 높다는 비교 차트`}
            className="flex h-[300px] items-end justify-center gap-12 rounded-3xl border border-ink-line bg-ink px-8 pb-14 pt-8 md:h-[360px] md:gap-20"
          >
            <div className="relative flex h-full w-24 flex-col items-center justify-end md:w-28">
              <div
                className="w-full rounded-t-2xl bg-ink-line transition-[height] duration-1000 ease-out"
                style={{ height: filled ? "34%" : "0%" }}
              />
              <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-[13px] font-medium text-cream-dim md:text-[14px]">
                {t.result.chartBefore}
              </span>
            </div>
            <div className="relative flex h-full w-24 flex-col items-center justify-end md:w-28">
              <span
                className={`mb-2 text-[15px] font-bold text-jade transition-opacity delay-700 duration-500 md:text-[17px] ${
                  filled ? "opacity-100" : "opacity-0"
                }`}
              >
                {t.result.percent}%
              </span>
              <div
                className="w-full rounded-t-2xl bg-jade transition-[height] delay-200 duration-1000 ease-out"
                style={{ height: filled ? "100%" : "0%" }}
              />
              <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-[13px] font-bold text-cream md:text-[14px]">
                {t.result.chartAfter}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
