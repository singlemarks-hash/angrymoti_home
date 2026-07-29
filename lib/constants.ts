export const APP_STORE_URL = "https://apps.apple.com/kr/app/id6449270376";

export const SNS = {
  youtube: "https://www.youtube.com/@turning_korea",
  instagram: "https://www.instagram.com/turning_korea",
};

// 추후 실제 링크로 교체
export const EXTERNAL = {
  careers: "#",
  terms: "#",
  privacy: "#",
};

export const LOCALES = ["ko"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "ko";

export function navLinks(locale: string) {
  return [
    { label: "홈", href: `/${locale}` },
    { label: "요금제", href: `/${locale}/billing` },
    { label: "회사소개", href: `/${locale}/about` },
    { label: "블로그", href: `/${locale}/blog` },
    { label: "지원 및 문의", href: `/${locale}/contact` },
  ];
}
