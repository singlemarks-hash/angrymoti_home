"use client";

import { useState } from "react";

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
 * → 소유자는 파일만 갈아끼우면 코드 수정 없이 교체 완료. (ASSETS.md 참고)
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
  const src = `/assets/${dir}/${label}`;

  // width+height가 모두 있으면 비율만 고정 (좁은 컨테이너에서 왜곡 방지)
  const sizeStyle = fill
    ? { width: "100%", height: "100%" }
    : {
        width: width ? `${width}px` : "100%",
        height: width && height ? undefined : height ? `${height}px` : undefined,
        aspectRatio: width && height ? `${width} / ${height}` : undefined,
      };

  if (variant === "screenshot") {
    return (
      <div
        className={`relative mx-auto overflow-hidden rounded-[36px] border-[6px] border-gray-800 bg-gray-50 shadow-xl ${className}`}
        style={{ ...sizeStyle, maxWidth: "100%" }}
      >
        {/* 노치 */}
        <div
          aria-hidden="true"
          className={`absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-gray-800 ${loaded ? "opacity-40" : ""}`}
        />
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-300 bg-gray-50 p-4 text-center">
            <span className="text-[13px] font-medium text-gray-400">앱 화면</span>
            <span className="break-all font-mono text-[12px] text-gray-500">{label} 자리</span>
          </div>
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt ?? label}
          onLoad={() => setLoaded(true)}
          className={`h-full w-full object-cover ${loaded ? "opacity-100" : "opacity-0"}`}
        />
      </div>
    );
  }

  const variantBg =
    variant === "logo" ? "bg-gray-100" : variant === "icon" ? "bg-brand-soft" : "bg-gray-50";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{ ...sizeStyle, maxWidth: "100%" }}
    >
      {!loaded && (
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-1.5 rounded-2xl border-2 border-dashed border-gray-300 ${variantBg} p-3 text-center`}
        >
          <span className="break-all font-mono text-[12px] text-gray-500">{label} 자리</span>
        </div>
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt ?? label}
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
