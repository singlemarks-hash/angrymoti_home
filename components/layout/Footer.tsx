import Link from "next/link";
import { Youtube, Instagram } from "lucide-react";
import { APP_STORE_URL, EXTERNAL, SNS } from "@/lib/constants";
import { getMessages } from "@/lib/i18n";

/* TODO: 교체 → /assets/svg/youtube.svg, /assets/svg/instagram.svg, /assets/svg/moti_logo_white.svg */

export default function Footer({ locale }: { locale: string }) {
  const t = getMessages(locale);

  const columns: { title: string; links: { label: string; href: string; external?: boolean }[] }[] = [
    {
      title: "서비스",
      links: [
        { label: "사용 방법", href: `/${locale}#section_07` },
        { label: "무료 체험", href: `/${locale}/billing` },
        { label: "요금제", href: `/${locale}/billing#section_07` },
        { label: "다운로드", href: APP_STORE_URL, external: true },
      ],
    },
    {
      title: "회사",
      links: [
        { label: "회사소개", href: `/${locale}/about` },
        { label: "채용", href: EXTERNAL.careers, external: true },
        { label: "App Store", href: APP_STORE_URL, external: true },
      ],
    },
    {
      title: "아티클",
      links: [
        { label: "언론보도", href: `/${locale}/blog?category=언론보도` },
        { label: "블로그", href: `/${locale}/blog` },
      ],
    },
    {
      title: "지원 및 문의",
      links: [
        { label: "FAQ", href: `/${locale}/contact#faq` },
        { label: "문의하기", href: `/${locale}/contact#inquiry` },
        { label: "서비스 이용약관", href: EXTERNAL.terms, external: true },
        { label: "개인정보 처리방침", href: EXTERNAL.privacy, external: true },
      ],
    },
  ];

  // SNS 계정 개설 전 — 아이콘은 노출하되 이동하지 않는다.
  const socials = [
    { key: "youtube", label: "유튜브", href: SNS.youtube, Icon: Youtube },
    { key: "instagram", label: "인스타그램", href: SNS.instagram, Icon: Instagram },
  ];

  return (
    <footer className="border-t border-ink-line bg-ink-surface text-cream-muted">
      <div className="container-content py-14 md:py-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="mb-4 text-[15px] font-bold text-cream">{col.title}</h2>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] transition-colors hover:text-cream"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-[14px] transition-colors hover:text-cream">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 border-t border-ink-line pt-8 md:mt-16">
          <p className="text-[15px] font-bold text-cream">{t.footer.company}</p>
          <p className="mt-2 text-[13px] leading-relaxed">
            {t.footer.bizInfo}
            <br />
            {t.footer.mailOrder}
            <br />
            {t.footer.address}
          </p>

          <div className="mt-6 flex items-center gap-3">
            {socials.map(({ key, label, href, Icon }) =>
              href ? (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`앵그리모티 ${label}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink-raised text-cream-muted transition-colors hover:bg-ink-line hover:text-cream"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ) : (
                <button
                  key={key}
                  type="button"
                  aria-label={`앵그리모티 ${label} (준비 중)`}
                  aria-disabled="true"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink-raised text-cream-dim transition-colors hover:text-cream-muted"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </button>
              ),
            )}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <p className="text-[13px] text-cream-dim">{t.footer.copyright}</p>
            {/* TODO: 교체 → 화이트 로고 SVG */}
            <span className="text-[16px] font-extrabold tracking-tight text-cream-dim">selfer.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
