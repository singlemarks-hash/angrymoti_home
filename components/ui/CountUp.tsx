"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;
  durationMs?: number;
  className?: string;
}

/** 뷰포트 진입 시 0 → end 카운트업. reduced-motion이면 즉시 최종값 표시. */
export default function CountUp({ end, durationMs = 1400, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();

        if (reduced) {
          setValue(end);
          return;
        }

        const startTime = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / durationMs, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(end * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, durationMs]);

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString("ko-KR")}
    </span>
  );
}
