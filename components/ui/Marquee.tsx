import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
}

/**
 * CSS 무한 마퀴. 콘텐츠를 2회 복제해 -50%까지 이동을 반복한다.
 * hover 시 일시정지, prefers-reduced-motion 시 정지 + 가로 스크롤 허용 (globals.css)
 */
export default function Marquee({ children, className = "" }: MarqueeProps) {
  return (
    <div className={`marquee-viewport overflow-hidden ${className}`}>
      <div className="marquee-track flex w-max animate-marquee gap-5 md:gap-6">
        <div className="flex shrink-0 gap-5 md:gap-6">{children}</div>
        <div className="flex shrink-0 gap-5 md:gap-6" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
