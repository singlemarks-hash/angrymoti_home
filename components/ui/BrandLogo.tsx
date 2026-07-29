"use client";

import { useEffect, useRef, useState } from "react";

/**
 * 앵그리모티 워드마크 로고.
 *
 * public/assets/brand/wordmark.svg 파일이 있으면 그 이미지를 그대로 쓰고,
 * 없으면 같은 분위기(둥근 지오메트릭 산세리프, 옅은 그레이)의 텍스트 워드마크로 대체한다.
 * 파일만 넣으면 코드 수정 없이 실제 로고로 교체된다.
 */

interface BrandLogoProps {
  className?: string;
  /** 이미지 높이 (px) — 텍스트 폴백에는 영향 없음 */
  height?: number;
}

export default function BrandLogo({ className = "", height = 26 }: BrandLogoProps) {
  const [hasOfficial, setHasOfficial] = useState(false);
  const probeRef = useRef<HTMLImageElement>(null);
  const src = "/assets/brand/wordmark.svg";

  // 캐시에서 즉시 로드되면 onLoad가 하이드레이션 전에 끝나므로 마운트 시 한 번 더 확인한다
  useEffect(() => {
    const img = probeRef.current;
    if (img?.complete && img.naturalWidth > 0) setHasOfficial(true);
  }, []);

  return (
    <span className={`inline-flex items-center ${className}`}>
      {!hasOfficial && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={probeRef}
          src={src}
          alt=""
          aria-hidden="true"
          onLoad={() => setHasOfficial(true)}
          className="hidden"
        />
      )}

      {hasOfficial ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="앵그리모티" style={{ height }} className="w-auto" />
      ) : (
        <span
          className="text-[24px] leading-none tracking-[-0.01em] text-cream-muted transition-colors group-hover:text-cream"
          style={{ fontFamily: "var(--font-wordmark)", fontWeight: 500 }}
        >
          Angrymoti
        </span>
      )}
    </span>
  );
}
