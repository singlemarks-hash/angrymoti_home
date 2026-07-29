export const APP_STORE_URL =
  "https://apps.apple.com/kr/app/%EC%95%B5%EA%B7%B8%EB%A6%AC%EB%AA%A8%ED%8B%B0/id6792526569";

/** 안드로이드는 아직 출시 전 — 버튼은 노출하되 "준비 중" 안내를 띄운다. */
export const PLAY_STORE_URL: string | null = null;

/** SNS 계정 개설 전 — 아이콘은 노출하되 이동하지 않는다. */
export const SNS: { youtube: string | null; instagram: string | null } = {
  youtube: null,
  instagram: null,
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
