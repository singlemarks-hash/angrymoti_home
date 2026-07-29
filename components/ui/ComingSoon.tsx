import Link from "next/link";
import { getMessages } from "@/lib/i18n";

interface ComingSoonProps {
  locale: string;
  pageName: string;
  /** 앵커 링크가 깨지지 않도록 미리 만들어 둘 섹션 id 목록 */
  anchorIds?: string[];
}

/** 서브 페이지 1차 플레이스홀더 — "준비 중" 안내 + 홈 복귀 */
export default function ComingSoon({ locale, pageName, anchorIds = [] }: ComingSoonProps) {
  const t = getMessages(locale);

  return (
    <section className="section-pad bg-ink">
      <div className="container-content flex min-h-[48vh] flex-col items-center justify-center text-center">
        <span className="eyebrow">{pageName}</span>
        <h1 className="section-title">{t.placeholder.pageTitle}</h1>
        <p className="section-sub mt-4">{t.placeholder.pageBody}</p>
        <Link
          href={`/${locale}`}
          className="mt-8 inline-flex rounded-full bg-tomato px-6 py-3 text-[15px] font-bold text-white transition-colors hover:bg-tomato-dark"
        >
          {t.placeholder.backHome}
        </Link>
      </div>
      {/* 푸터 앵커 링크 대상 (내용은 추후 채움) */}
      {anchorIds.map((id) => (
        <div key={id} id={id} aria-hidden="true" />
      ))}
    </section>
  );
}
