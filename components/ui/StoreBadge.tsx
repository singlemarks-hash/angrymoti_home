"use client";

import { useEffect, useRef, useState } from "react";

/**
 * 앱스토어 다운로드 배지.
 *
 * Apple / Google은 각자 브랜드 가이드에서 "제공된 원본 배지 아트워크를 그대로 사용할 것"을
 * 요구합니다. 이 컴포넌트는 원본 파일이 있으면 그것을 쓰고, 없을 때만 같은 레이아웃의
 * 대체 배지를 그립니다.
 *
 *   public/assets/badges/app_store.svg     ← Apple 마케팅 리소스에서 내려받아 저장
 *   public/assets/badges/google_play.png   ← Google Play 브랜드 페이지에서 내려받아 저장
 *
 * 파일을 넣으면 코드 수정 없이 원본 배지로 교체됩니다.
 */

const APPLE_MARK =
  "M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701";

function AppleMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[25px] w-[25px] shrink-0 fill-black">
      <path d={APPLE_MARK} />
    </svg>
  );
}

/** Google Play 삼각형 — 좌측 스파인(파랑) 기준으로 상(초록)·우(노랑)·하(빨강) 4면 */
function PlayMark() {
  return (
    <svg viewBox="0 0 500 512" aria-hidden="true" className="h-[23px] w-[23px] shrink-0">
      <path d="M30 10 L300 256 L30 502 Z" fill="#00A0FF" />
      <path d="M30 10 L362 196.5 L300 256 Z" fill="#00E676" />
      <path d="M362 196.5 L468 256 L362 315.5 L300 256 Z" fill="#FFCE00" />
      <path d="M30 502 L300 256 L362 315.5 Z" fill="#FF3A44" />
    </svg>
  );
}

const COPY = {
  ios: {
    file: "app_store.svg",
    top: "Download on the",
    bottom: "App Store",
    topClass: "text-[10px] font-normal tracking-[0.01em]",
  },
  android: {
    file: "google_play.png",
    top: "GET IT ON",
    bottom: "Google Play",
    topClass: "text-[9px] font-medium uppercase tracking-[0.14em]",
  },
} as const;

export default function StoreBadge({ kind }: { kind: "ios" | "android" }) {
  const [hasOfficial, setHasOfficial] = useState(false);
  const probeRef = useRef<HTMLImageElement>(null);
  const meta = COPY[kind];
  const src = `/assets/badges/${meta.file}`;

  // 캐시에서 즉시 로드되면 onLoad가 하이드레이션 전에 끝나므로 마운트 시 한 번 더 확인한다
  useEffect(() => {
    const img = probeRef.current;
    if (img?.complete && img.naturalWidth > 0) setHasOfficial(true);
  }, []);

  return (
    <>
      {/* 원본 배지 존재 여부 확인용 프로브 — 있으면 아래에서 그 이미지를 쓴다 */}
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
        <img
          src={src}
          alt=""
          aria-hidden="true"
          className="h-[54px] w-auto transition-opacity group-hover:opacity-90"
        />
      ) : (
        <span className="inline-flex h-[54px] items-center gap-2.5 whitespace-nowrap rounded-xl bg-white px-4 transition-opacity group-hover:opacity-90">
          {kind === "ios" ? <AppleMark /> : <PlayMark />}
          <span className="flex flex-col items-start leading-none">
            <span className={`text-black/75 ${meta.topClass}`}>{meta.top}</span>
            <span className="mt-[3px] text-[18px] font-semibold tracking-[-0.02em] text-black">
              {meta.bottom}
            </span>
          </span>
        </span>
      )}
    </>
  );
}
