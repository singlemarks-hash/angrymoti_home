import Link from "next/link";
import { Youtube, Instagram } from "lucide-react";
import { APP_STORE_URL, EXTERNAL, SNS } from "@/lib/constants";
import { getMessages } from "@/lib/i18n";

/* TODO: 교체 → /assets/svg/youtube.svg, /assets/svg/instagram.svg, /assets/svg/turning_logo_true_white_40.svg */

export default function Footer({ locale }: { locale: string }) {
  const t = getMessages(locale);

  const columns: { title: string; links: { label: string; href: string; external?: boolean }[] }[] = [
    {
      title: "서비스",
      links: [
        { label: "기능", href: `/${locale}#section_07` },
        { label: "무료체험", href: `/${locale}/billing` },
        { label: "요금제", href: `/${locale}/billing#section_07` },
        { label: "다운로드", href: APP_STORE_URL, external: true },
      ],
    },
    {
      title: "회사",
      links: [
        { label: "회사소개", href: `/${locale}/about` },
        { label: "채용", href: EXTERNAL.careers, external: true },
        { label: "스토어", href: APP_STORE_URL, external: true },
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

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container-content py-14 md:py-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="mb-4 text-[15px] font-semibold text-white">{col.title}</h2>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-[14px] transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-700/60 pt-8 md:mt-16">
          <p className="text-[15px] font-semibold text-gray-300">{t.footer.company}</p>
          <p className="mt-2 text-[13px] leading-relaxed">
            {t.footer.bizInfo}
            <br />
            {t.footer.zip}
            <br />
            {t.footer.address}
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={SNS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="터닝 유튜브"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
            >
              <Youtube className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={SNS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="터닝 인스타그램"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <p className="text-[13px]">{t.footer.copyright}</p>
            {/* TODO: 교체 → /assets/svg/turning_logo_true_white_40.svg */}
            <span className="text-[18px] font-extrabold tracking-tight text-white">Turning</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
