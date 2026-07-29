# 터닝(Turning) 랜딩페이지

스마트폰 중독 방지 / 디지털 디톡싱 iOS 앱 **터닝**의 마케팅 랜딩페이지.
Next.js 15 (App Router) + TypeScript + Tailwind CSS. 애니메이션은 의존성 없이 CSS + IntersectionObserver로 구현.

## 실행

```bash
npm install
npm run dev    # http://localhost:3000 → /ko 로 리다이렉트
npm run build  # 프로덕션 빌드
```

## 배포 (Vercel)

레포를 Vercel에 연결하면 기본 설정으로 바로 배포됩니다. (프레임워크: Next.js 자동 감지)

## 구조

- `app/[locale]/` — i18n 라우팅 (현재 `ko`, `lib/constants.ts`의 `LOCALES`에 `en` 추가로 확장)
- `components/home/Section01~11` — 홈 섹션. `app/[locale]/page.tsx`에서 조립
- `components/ui/PlaceholderImage.tsx` — 에셋 목업. **`public/assets/`에 파일만 넣으면 자동 교체** → [ASSETS.md](./ASSETS.md)
- `messages/ko.json` — 모든 카피 텍스트
- 서브 페이지(billing/about/blog/contact)는 1차 범위에서 "준비 중" 플레이스홀더

## 품질

- 반응형: 375px / 768px / 1280px 검증
- 접근성: 시맨틱 태그, alt 텍스트, 키보드 포커스 링, 슬라이더 키보드 조작(`role="slider"`)
- `prefers-reduced-motion` 존중 (카운트업·마퀴·리빌 비활성)
- JS 미로드 시에도 콘텐츠 전부 표시 (리빌 숨김은 마운트 후에만 적용)
