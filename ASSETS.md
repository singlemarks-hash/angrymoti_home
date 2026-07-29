# 에셋 교체 가이드

모든 이미지 자리는 `PlaceholderImage` 컴포넌트로 렌더링됩니다.
**`public/assets/` 아래에 같은 파일명으로 원본 파일을 넣기만 하면** 코드 수정 없이 즉시 실제 이미지로 전환됩니다. (파일이 없으면 점선 목업이 표시됨)

## 앱 스크린샷 · 이미지 (public/assets/home/)

| 파일명 | 사용 위치 | 담아야 할 내용 |
|---|---|---|
| `hero_pc.png` | `home/Section01Hero.tsx` | 히어로 — 알람이 울리는 화면 (≥1080px) |
| `hero_tb.png` | `home/Section01Hero.tsx` | 히어로 (태블릿 768–1079px) |
| `hero_mb.png` | `home/Section01Hero.tsx` | 히어로 (모바일 <768px) |
| `section_02_alarm.png` | `home/Section02Screentime.tsx` | 아침 알람이 여러 개 울리는 화면 |
| `tool-1.png` | `home/Section04Apps.tsx` | 끄면 끝, 일반 알람 앱 |
| `tool-2.png` | `home/Section04Apps.tsx` | 체크만 하면 끝, 투두 앱 |
| `tool-3.png` | `home/Section04Apps.tsx` | 나만 아는 거짓말, 습관 앱 |
| `moti-1.png` | `home/Section04Apps.tsx` | 타임랩스 인증 |
| `moti-2.png` | `home/Section04Apps.tsx` | 자리비움 감지 |
| `moti-3.png` | `home/Section04Apps.tsx` | 그룹 챌린지 |
| `step_01.png` | `home/Section07HowToUse.tsx` | STEP 1 — 활동 예약(강도 선택) 화면 |
| `step_02.png` | `home/Section07HowToUse.tsx` | STEP 2 — 알람 울리는 화면 |
| `step_03.png` | `home/Section07HowToUse.tsx` | STEP 3 — 타임랩스 촬영 중 화면 |
| `step_04.png` | `home/Section07HowToUse.tsx` | STEP 4 — 완주 결과·타임랩스 화면 |
| `moti_angry.png` | `home/MotiSlider.tsx` | 화난 표정의 모티 (슬라이더 왼쪽 상태) |
| `moti_happy.png` | `home/MotiSlider.tsx` | 기뻐하는 표정의 모티 (오른쪽 상태) |
| `section_09_group.png` | `home/Section09Features.tsx` | 그룹 챌린지 랭킹 화면 |
| `section_09_record.png` | `home/Section09Features.tsx` | 타임랩스 기록·연속 달성 화면 |
| `press_01.png` ~ `press_08.png` | `home/Section10CTA.tsx` | 언론보도·파트너 로고 8종 |

> 스크린샷 자리(`variant="screenshot"`)는 스마트폰 프레임 안에 들어갑니다. 세로 비율(대략 250×510) 이미지를 넣어주세요.

## 아이콘 SVG (public/assets/svg/)

현재 lucide-react 아이콘으로 임시 대체 중입니다. 원본 SVG로 교체하려면 각 컴포넌트의 `TODO: 교체` 주석 위치에서 lucide 아이콘을 `<img src="/assets/svg/...">` 로 바꿔주세요.

| 파일명 | 임시 아이콘 (lucide) | 사용 위치 |
|---|---|---|
| `menu.svg` | `Menu` | `layout/Header.tsx` |
| `symbol_apple.svg` | `Apple` | `ui/StoreButtons.tsx`, `home/Section10CTA.tsx` |
| `symbol_play.svg` | `Play` | `ui/StoreButtons.tsx` |
| `plus.svg` / `x.svg` | `Plus` / `X` | `home/Section02Screentime.tsx` |
| `stat_01.svg` | `Timer` | `home/Section05Stats.tsx` |
| `stat_02.svg` | `Users` | `home/Section05Stats.tsx` |
| `stat_03.svg` | `Gift` | `home/Section05Stats.tsx` |
| `review_stars.svg` | `Star` ×5 | `home/Section06Reviews.tsx` |
| `check_tomato.svg` | `Check` (토마토) | `home/Section09Features.tsx` |
| `check_amber.svg` | `Check` (앰버) | `home/Section09Features.tsx` |
| `check_jade.svg` | `Check` (제이드) | `home/Section09Features.tsx` |
| `arrow_horizontal.svg` | `ChevronLeft`/`ChevronRight` | `home/MotiSlider.tsx` |
| `penalty.svg` | `TriangleAlert` | `home/MotiSlider.tsx` |
| `score.svg` | `Trophy` | `home/MotiSlider.tsx` |
| `arrow_right.svg` | `ArrowRight` | `home/Section11LinkCards.tsx` |
| `youtube.svg` / `instagram.svg` | `Youtube` / `Instagram` | `layout/Footer.tsx` |
| `moti_logo_white.svg` | 텍스트 "selfer." | `layout/Footer.tsx` |

## 링크 · 값 교체 항목

| 항목 | 위치 | 현재 상태 |
|---|---|---|
| App Store 링크 | `lib/constants.ts` → `APP_STORE_URL` | 실제 링크 연결 완료 |
| Google Play 링크 | `lib/constants.ts` → `PLAY_STORE_URL` | `null` — 버튼 클릭 시 "준비 중" 안내. **URL을 넣으면 자동으로 실제 링크 버튼이 됨** |
| 유튜브 / 인스타그램 | `lib/constants.ts` → `SNS` | `null` — 아이콘만 노출, 클릭해도 이동 안 함. **URL을 넣으면 자동으로 링크가 됨** |
| 채용 공고 링크 | `lib/constants.ts` → `EXTERNAL.careers` | `#` |
| 이용약관 / 개인정보 처리방침 | `lib/constants.ts` → `EXTERNAL.terms/privacy` | `#` |
| 헤더·모바일 메뉴 로고 | `layout/Header.tsx`, `layout/MobileMenu.tsx` | 텍스트 로고 "앵그리모티" |
| 섹션 08 성공률 수치 | `messages/ko.json` → `result.percent` | `87` (임시값 — 실사용 데이터로 교체) |
| 리뷰 5종 | `messages/ko.json` → `reviews.items` | 초안 — 실제 앱스토어 리뷰로 교체 권장 |
