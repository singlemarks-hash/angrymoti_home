# 앵그리모티 랜딩페이지

카메라 앞에 앉아야만 꺼지는 알람 — **앵그리모티**의 마케팅 랜딩페이지.
Next.js 15 (App Router) + TypeScript + Tailwind CSS. 애니메이션은 의존성 없이 CSS + IntersectionObserver로 구현.

## 실행

```bash
npm install
npm run dev    # http://localhost:3000 → /ko 로 리다이렉트
npm run build  # 프로덕션 빌드
```

## 배포 (Vercel)

레포를 Vercel에 연결하면 기본 설정으로 바로 배포됩니다. (프레임워크: Next.js 자동 감지)

## 디자인 토큰

다크 기반 UI. `tailwind.config.ts`에 정의되어 있습니다.

| 토큰 | 값 | 역할 |
|---|---|---|
| `ink` / `ink-surface` / `ink-raised` | `#12100F` / `#1B1817` / `#252120` | 배경 3단계 (섹션 교차) |
| `tomato` | `#FF4834` | 시그니처 · CTA · 벌점 |
| `amber` | `#FFB020` | 경고 · 에너지 |
| `jade` | `#2FBF8F` | 성공 · 점수 |
| `cream` / `cream-muted` / `cream-dim` | `#F5F1EF` / `#A39B97` / `#6E6663` | 본문 · 보조 · 캡션 |

시그니처 요소는 히어로의 **울리는 알람** — 폰 목업 뒤로 토마토 링이 계속 퍼져나갑니다.

## 구조

- `app/[locale]/` — i18n 라우팅 (현재 `ko`, `lib/constants.ts`의 `LOCALES`에 `en` 추가로 확장)
- `components/home/Section01~11` — 홈 섹션. `app/[locale]/page.tsx`에서 조립
- `components/ui/PlaceholderImage.tsx` — 에셋 목업. **`public/assets/`에 파일만 넣으면 자동 교체** → [ASSETS.md](./ASSETS.md)
- `messages/ko.json` — 모든 카피 텍스트
- 서브 페이지(billing/about/blog/contact)는 1차 범위에서 "준비 중" 플레이스홀더

## 스토어 · SNS 링크 동작

- **App Store** — 실제 링크 연결 완료
- **Google Play** — 미출시. 버튼은 노출되고, 누르면 "안드로이드 버전은 준비 중이에요" 안내가 뜹니다. `lib/constants.ts`의 `PLAY_STORE_URL`에 URL을 넣으면 자동으로 실제 링크 버튼이 됩니다
- **유튜브 · 인스타그램** — 계정 개설 전. 아이콘만 노출되고 클릭해도 이동하지 않습니다. `SNS`에 URL을 넣으면 자동으로 링크가 됩니다

## 품질

- 반응형: 375px / 768px / 1280px 검증
- 접근성: 시맨틱 태그, alt 텍스트, 키보드 포커스 링, 슬라이더 키보드 조작(`role="slider"`), 안내 문구 `role="status"`
- `prefers-reduced-motion` 존중 (카운트업·마퀴·리빌·알람 링 비활성)
- JS 미로드 시에도 콘텐츠 전부 표시
