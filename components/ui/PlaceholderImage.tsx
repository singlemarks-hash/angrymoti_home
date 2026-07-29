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
}: PlaceholderImageProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const src = `/assets/${dir}/${label}`;

  // 캐시에서 즉시 로드되면 onLoad가 하이드레이션 전에 끝나므로 마운트 시 한 번 더 확인한다
  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth > 0) setLoaded(true);
  }, []);

  // screenshot: 로드 전에는 자리를 잡아두고, 로드 후에는 원본 세로 비율을 그대로 따른다
  // (디바이스 프레임이 없으므로 어떤 비율의 세로 이미지를 넣어도 잘리지 않는다)
  const freeRatio = variant === "screenshot" && loaded;

  const sizeStyle = fill
    ? { width: "100%", height: "100%" }
    : {
        width: width ? `${width}px` : "100%",
        height: freeRatio || (width && height) ? undefined : height ? `${height}px` : undefined,
        aspectRatio: !freeRatio && width && height ? `${width} / ${height}` : undefined,
      };

  const variantBg =
    variant === "logo" ? "bg-ink-raised" : variant === "icon" ? "bg-tomato-soft" : "bg-ink-surface";

  return (
    <div
      className={`relative mx-auto overflow-hidden rounded-2xl ${className}`}
      style={{ ...sizeStyle, maxWidth: "100%" }}
    >
      {!loaded && (
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-1.5 rounded-2xl border-2 border-dashed border-ink-line ${variantBg} p-3 text-center`}
        >
          <span className="break-all font-mono text-[12px] text-cream-dim">{label} 자리</span>
        </div>
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={src}
        alt={alt ?? label}
        onLoad={() => setLoaded(true)}
        className={`w-full ${freeRatio ? "h-auto" : "h-full object-cover"} ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
