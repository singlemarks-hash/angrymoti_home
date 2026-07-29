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
    <section className="section-pad bg-white">
      <div className="container-content grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <h2 className="section-title">
            <span className="text-[44px] font-extrabold text-brand md:text-[64px]">
              <CountUp end={t.result.percent} />%
            </span>
            {t.result.titleSuffix}
          </h2>
          <p className="section-sub mt-6">{t.result.body}</p>
          <p className="mt-4 text-[13px] text-gray-400">{t.result.caption}</p>
        </Reveal>

        <Reveal delay={150}>
          {/* 전/후 스크린타임 비교 차트 */}
          <div
            ref={chartRef}
            role="img"
            aria-label="터닝 사용 전 대비 사용 후 스크린타임이 62% 감소한 비교 차트"
            className="flex h-[300px] items-end justify-center gap-12 rounded-3xl bg-gray-50 px-8 pb-14 pt-8 md:h-[360px] md:gap-20"
          >
            <div className="relative flex h-full w-24 flex-col items-center justify-end md:w-28">
              <div
                className="w-full rounded-t-2xl bg-gray-300 transition-[height] duration-1000 ease-out"
                style={{ height: filled ? "100%" : "0%" }}
              />
              <span className="absolute -bottom-9 text-[13px] font-medium text-gray-500 md:text-[14px]">
                {t.result.chartBefore}
              </span>
            </div>
            <div className="relative flex h-full w-24 flex-col items-center justify-end md:w-28">
              <span
                className={`mb-2 text-[15px] font-bold text-brand transition-opacity delay-700 duration-500 md:text-[17px] ${
                  filled ? "opacity-100" : "opacity-0"
                }`}
              >
                -62%
              </span>
              <div
                className="w-full rounded-t-2xl bg-brand transition-[height] delay-200 duration-1000 ease-out"
                style={{ height: filled ? "38%" : "0%" }}
              />
              <span className="absolute -bottom-9 text-[13px] font-semibold text-gray-800 md:text-[14px]">
                {t.result.chartAfter}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
