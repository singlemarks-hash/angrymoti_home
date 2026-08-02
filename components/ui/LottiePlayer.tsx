"use client";

import { useEffect, useRef, useState } from "react";

interface LottiePlayerProps {
  /** public/assets/lottie/ 아래 파일명 (예: "thinking.json") */
  file: string;
  /** 표시 폭 (px) — 높이는 viewBox 비율로 결정된다 */
  width: number;
  /**
   * 여백을 잘라내기 위한 viewBox 재설정 값 ("x y w h").
   * 원본 캔버스에 빈 공간이 많을 때 실제 콘텐츠 영역만 보이게 한다.
   */
  viewBox?: string;
  /** 스크린리더용 설명 */
  label: string;
  className?: string;
}

/**
 * Lottie 애니메이션 플레이어.
 *
 * - lottie-web의 light 빌드(SVG 렌더러 전용)를 뷰포트 진입 시에만 동적 로드한다.
 *   → 초기 번들·네트워크에 영향 없음
 * - prefers-reduced-motion이면 재생하지 않고 첫 프레임만 정지 상태로 보여준다.
 */
export default function LottiePlayer({
  file,
  width,
  viewBox,
  label,
  className = "",
}: LottiePlayerProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    type Anim = ReturnType<
      Awaited<
        typeof import("lottie-web/build/player/esm/lottie_light.min.js")
      >["default"]["loadAnimation"]
    >;
    let anim: Anim | null = null;
    let cancelled = false;

    const start = async () => {
      const lottie = (await import("lottie-web/build/player/esm/lottie_light.min.js")).default;
      if (cancelled) return;

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      anim = lottie.loadAnimation({
        container: host,
        renderer: "svg",
        loop: !reduced,
        autoplay: !reduced,
        path: `/assets/lottie/${file}`,
        rendererSettings: { progressiveLoad: true },
      });

      anim.addEventListener("DOMLoaded", () => {
        if (cancelled) return;
        // 원본 캔버스의 빈 여백을 잘라낸다
        if (viewBox) host.querySelector("svg")?.setAttribute("viewBox", viewBox);
        if (reduced) anim?.goToAndStop(0, true);
        setReady(true);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
          void start();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(host);

    return () => {
      cancelled = true;
      observer.disconnect();
      anim?.destroy();
    };
  }, [file, viewBox]);

  const [, vbY, vbW, vbH] = (viewBox ?? "0 0 1 1").split(" ").map(Number);
  void vbY;
  const aspect = vbW && vbH ? `${vbW} / ${vbH}` : undefined;

  return (
    <div
      ref={hostRef}
      role="img"
      aria-label={label}
      className={`mx-auto transition-opacity duration-500 ${ready ? "opacity-100" : "opacity-0"} ${className}`}
      style={{ width: `${width}px`, maxWidth: "100%", aspectRatio: aspect }}
    />
  );
}
