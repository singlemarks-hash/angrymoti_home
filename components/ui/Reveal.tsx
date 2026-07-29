"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** 지연 (ms) — 순차 페이드인용 */
  delay?: number;
  className?: string;
}

/**
 * 스크롤 진입 시 페이드업.
 * 숨김 상태(.reveal)는 JS 마운트 후에만 적용하므로, JS가 없거나 로드 전이어도
 * 콘텐츠는 항상 보인다. reduced-motion이면 CSS에서 즉시 표시 처리.
 */
export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add("reveal");

    const show = () => el.classList.add("is-visible");

    // 마운트 시점에 이미 뷰포트 안이거나 위로 지나간 요소는 바로 페이드인
    if (el.getBoundingClientRect().top < window.innerHeight) {
      requestAnimationFrame(() => requestAnimationFrame(show));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          show();
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}
