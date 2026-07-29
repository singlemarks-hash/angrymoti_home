# 에셋 교체 가이드

모든 이미지 자리는 `PlaceholderImage` 컴포넌트로 렌더링됩니다.
**`public/assets/` 아래에 같은 파일명으로 원본 파일을 넣기만 하면** 코드 수정 없이 즉시 실제 이미지로 전환됩니다. (파일이 없으면 점선 목업이 표시됨)

## 이미지 (public/assets/home/)

| 파일명 | 사용 위치 (컴포넌트) | 설명 |
|---|---|---|
| `hero_pc.png` | `home/Section01Hero.tsx` | 히어로 이미지 (≥1080px 뷰포트) |
| `hero_tb.png` | `home/Section01Hero.tsx` | 히어로 이미지 (태블릿 768–1079px) |
| `hero_mb.png` | `home/Section01Hero.tsx` | 히어로 이미지 (모바일 <768px) |
| `section_02.png` | `home/Section02Screentime.tsx` | 스크린타임 폰 목업 |
| `disturb-1.png` | `home/Section04Apps.tsx` | 방해 앱 카드 1 (명상 · SNS) |
| `disturb-2.png` | `home/Section04Apps.tsx` | 방해 앱 카드 2 (쇼핑) |
| `disturb-3.png` | `home/Section04Apps.tsx` | 방해 앱 카드 3 (게임) |
| `useful-1.png` | `home/Section04Apps.tsx` | 도움 앱 카드 1 (생산성) |
| `useful-2.png` | `home/Section04Apps.tsx` | 도움 앱 카드 2 (공부) |
| `useful-3.png` | `home/Section04Apps.tsx` | 도움 앱 카드 3 (운동) |
| `section_07_01.png` | `home/Section07HowToUse.tsx` | STEP 1 스크린샷 (앱 진입 시 쉴드) |
| `section_07_03.png` | `home/Section07HowToUse.tsx` | STEP 2 스크린샷 (미션 수행) |
| `section_07_02.png` | `home/Section07HowToUse.tsx` | STEP 3 스크린샷 (사용시간 설정) |
| `section_07_04.png` | `home/Section07HowToUse.tsx` | STEP 4 스크린샷 (자동잠금) |
| `section_09_01_01.png` | `home/HabitSlider.tsx` | 터니 캐릭터 (슬라이더) |
| `section_09_chat_bubble.png` | `home/HabitSlider.tsx` | 말풍선 — 현재는 텍스트 말풍선으로 구현(슬라이더 위치에 따라 문구 변경). 이미지로 교체 시 컴포넌트 수정 필요 |
| `section_09_02.png` | `home/Section09Features.tsx` | 기능 9-2 스크린샷 |
| `section_09_03.png` | `home/Section09Features.tsx` | 기능 9-3 스크린샷 |
| `sponsor_01.png` ~ `sponsor_08.png` | `home/Section10CTA.tsx` | 파트너/스폰서 로고 8종 |

## 아이콘 SVG (public/assets/svg/)

현재 lucide-react 아이콘으로 임시 대체 중입니다. 원본 SVG로 교체하려면 각 컴포넌트의 `TODO: 교체` 주석 위치에서 lucide 아이콘을 `<img src="/assets/svg/...">` 로 바꿔주세요.

| 파일명 | 임시 아이콘 (lucide) | 사용 위치 |
|---|---|---|
| `menu.svg` | `Menu` | `layout/Header.tsx` |
| `symbol_apple.svg` | `Apple` | `ui/AppStoreButton.tsx`, `home/Section10CTA.tsx` |
| `plus_green.svg` | `Plus` | `home/Section02Screentime.tsx` |
| `x_green.svg` | `X` | `home/Section02Screentime.tsx` |
| `home_section_05_01.svg` | `Trophy` | `home/Section05Stats.tsx` |
| `home_section_05_02.svg` | `Users` | `home/Section05Stats.tsx` |
| `home_section_05_03.svg` | `Globe2` | `home/Section05Stats.tsx` |
| `review_stars.svg` | `Star` ×5 | `home/Section06Reviews.tsx` |
| `check_orange.svg` | `Check` (오렌지) | `home/Section09Features.tsx` |
| `check_marine.svg` | `Check` (마린) | `home/Section09Features.tsx` |
| `check_pink.svg` | `Check` (핑크) | `home/Section09Features.tsx` |
| `arrow_horizonal.svg` | `ChevronLeft`/`ChevronRight` | `home/HabitSlider.tsx` |
| `disturb.svg` | `Smartphone` | `home/HabitSlider.tsx` |
| `useful.svg` | `Sprout` | `home/HabitSlider.tsx` |
| `arrow_right.svg` | `ArrowRight` | `home/Section11LinkCards.tsx` |
| `youtube.svg` | `Youtube` | `layout/Footer.tsx` |
| `instagram.svg` | `Instagram` | `layout/Footer.tsx` |
| `turning_logo_true_white_40.svg` | 텍스트 로고 "Turning" | `layout/Footer.tsx` |

## 기타 교체 항목

| 항목 | 위치 | 현재 상태 |
|---|---|---|
| 헤더/모바일메뉴 로고 | `layout/Header.tsx`, `layout/MobileMenu.tsx` | 텍스트 로고 "Turning" |
| 브랜드 그린 컬러 | `tailwind.config.ts` → `brand` | `#00C471` 근사값 |
| 채용 공고 링크 | `lib/constants.ts` → `EXTERNAL.careers` | `#` (외부 채용 링크로 교체) |
| 이용약관 / 개인정보 처리방침 | `lib/constants.ts` → `EXTERNAL.terms/privacy` | `#` (Notion 링크로 교체) |
| 스크린타임 카운트업 목표값 | `messages/ko.json` → `screentime.hours` | 5 (임시) |
