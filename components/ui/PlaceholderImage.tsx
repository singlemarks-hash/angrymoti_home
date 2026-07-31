"use client";

import { useEffect, useRef, useState } from "react";

type Variant = "photo" | "screenshot" | "icon" | "logo";

interface PlaceholderImageProps {
  /** 교체될 원본 에셋 파일명 (예: "hero_pc.png") — /public/assets/{dir}/ 아래에 두면 자동 표시 */
  label: string;
  /** public/assets 하위 폴더 (기본 "home") */
  dir?: string;
  width?: number;
  height?: number;
  variant?: Variant;
  alt?: string;
  className?: string;
  /** true면 부모 크기를 꽉 채움 (width/height 무시) */
  fill?: boolean;
  /**
   * true면 로드 후 원본 비율을 그대로 따른다 (베젤 없음).
   * 가로 배너든 세로 이미지든 어떤 비율을 넣어도 잘리지 않는다.
   */
  fitOriginal?: boolean;
}

/**
 * 목업 플레이스홀더.
 * public/assets/{dir}/{label} 파일이 실제로 존재하면 그 이미지를 그대로 보여주고,
 * 없으면 점선 목업(에셋 이름 표기)을 보여준다.
 * → 파일만 갈아끼우면 코드 수정 없이 교체 완료. (ASSETS.md 참고)
 */
export default function PlaceholderImage({
  label,
  dir = "home",
  width,
  height,
  variant = "photo",
  alt,
  className = "",
  fill = false,
  fitOriginal = false,
}: PlaceholderImageProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const src = `/assets/${dir}/${label}`;

  // 캐시에서 즉시 로드되면 onLoad가 하이드레이션 전에 끝나므로 마운트 시 한 번 더 확인한다
  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth > 0) setLoaded(true);
  }, []);

  const isScreenshot = variant === "screenshot";
  // screenshot: 로드 전에는 자리를 잡아두고, 로드 후에는 원본 세로 비율을 그대로 따른다
  // (기종을 특정하는 노치·홈버튼 없이 심플한 베젤만 두르므로 어떤 비율의 세로 이미지도 잘리지 않는다)
  const freeRatio = (isScreenshot || fitOriginal) && loaded;

  const sizeStyle = fill
    ? { width: "100%", height: "100%" }
    : {
        width: width ? `${width}px` : "100%",
        height: freeRatio || (width && height) ? undefined : height ? `${height}px` : undefined,
        aspectRatio: !freeRatio && width && height ? `${width} / ${height}` : undefined,
      };

  const placeholder = (roundedClass: string, bgClass: string) =>
    !loaded && (
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-1.5 ${roundedClass} border-2 border-dashed border-ink-line ${bgClass} p-3 text-center`}
      >
        <span className="break-all font-mono text-[12px] text-cream-dim">{label} 자리</span>
      </div>
    );

  const img = (roundedClass: string) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imgRef}
      src={src}
      alt={alt ?? label}
      onLoad={() => setLoaded(true)}
      className={`${roundedClass} block w-full ${freeRatio ? "h-auto" : "h-full object-cover"} ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    />
  );

  // 앱 화면 자리 — 기기를 특정하지 않는 심플한 블랙 베젤 (노치·홈버튼 없음)
  if (isScreenshot) {
    return (
      <div className={`relative mx-auto ${className}`} style={{ ...sizeStyle, maxWidth: "100%" }}>
        <div className="h-full w-full rounded-[30px] bg-[#151212] p-[9px] shadow-[0_18px_46px_rgba(0,0,0,0.45)] ring-1 ring-black/50">
          <div className="relative h-full w-full overflow-hidden rounded-[22px] bg-ink-surface">
            {placeholder("rounded-[22px]", "bg-ink-surface")}
            {img("rounded-[22px]")}
          </div>
        </div>
      </div>
    );
  }

  const variantBg =
    variant === "logo" ? "bg-ink-raised" : variant === "icon" ? "bg-tomato-soft" : "bg-ink-surface";

  return (
    <div
      className={`relative mx-auto overflow-hidden rounded-2xl ${className}`}
      style={{ ...sizeStyle, maxWidth: "100%" }}
    >
      {placeholder("rounded-2xl", variantBg)}
      {img("")}
    </div>
  );
}
