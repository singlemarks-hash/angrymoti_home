# 에셋 교체 가이드

모든 이미지 자리는 `PlaceholderImage` 컴포넌트로 렌더링됩니다.
**`public/assets/` 아래에 같은 파일명으로 원본 파일을 넣기만 하면** 코드 수정 없이 즉시 실제 이미지로 전환됩니다. (파일이 없으면 점선 목업이 표시됨)

## 앱 스크린샷 · 이미지 (public/assets/home/)

| 파일명 | 사용 위치 | 담아야 할 내용 |
|---|---|---|
| `hero_tb.png` ✅ 적용됨 | `home/Section01Hero.tsx` (PC·태블릿·모바일 공통) | 히어로 — 알람 울림·촬영 준비 화면 (step_02.png와 같은 내용의 별도 파일) |
| `section_02_alarm.png` | `home/Section02Screentime.tsx` | 아침 알람이 여러 개 울리는 화면 |
| `tool-1.svg` ✅ 적용됨 | `home/Section04Apps.tsx` | 끄면 끝, 일반 알람 앱 — 알람 끄고 자는 모티 일러스트 |
| `tool-2.svg` ✅ 적용됨 | `home/Section04Apps.tsx` | 체크만 하면 끝, 투두 앱 — 대충 체크하는 모티 일러스트 |
| `tool-3.svg` ✅ 적용됨 | `home/Section04Apps.tsx` | 나만 아는 거짓말, 습관 앱 — 완료 표시뿐인 습관앱과 늘어진 모티 일러스트 |
| `moti-1.svg` ✅ 적용됨 | `home/Section04Apps.tsx` | 타임랩스 인증 — 공부하는 모티를 촬영 중인 벡터 일러스트 |
| `moti-2.svg` ✅ 적용됨 | `home/Section04Apps.tsx` | 자리비움 감지 — 자리를 비운 책상에 경고 삼각형이 뜨는 일러스트 |
| `moti-3.svg` ✅ 적용됨 | `home/Section04Apps.tsx` | 그룹 챌린지 — 시상대에서 트로피 든 모티와 순위 축하 일러스트 |
| `step_01.png` ✅ 적용됨 | `home/Section07HowToUse.tsx` | STEP 1 — 활동 예약(강도 선택) 화면 |
| `step_02.png` ✅ 적용됨 | `home/Section07HowToUse.tsx` | STEP 2 — 알람 울리는 화면 |
| `step_03.png` ✅ 적용됨 | `home/Section07HowToUse.tsx` | STEP 3 — 타임랩스 촬영 중 화면 |
| `step_04.png` ✅ 적용됨 | `home/Section07HowToUse.tsx` | STEP 4 — 완주 결과·타임랩스 화면 |
| `moti_angry.png` | `home/MotiSlider.tsx` | 화난 표정의 모티 (슬라이더 왼쪽 상태) |
| `moti_happy.png` | `home/MotiSlider.tsx` | 기뻐하는 표정의 모티 (오른쪽 상태) |
| `section_09_group.png` | `home/Section09Features.tsx` | 그룹 챌린지 랭킹 화면 |
| `section_09_record.png` | `home/Section09Features.tsx` | 타임랩스 기록·연속 달성 화면 |
| `cta_mockup.png` ✅ 적용됨 | `home/Section10CTA.tsx` | 최종 CTA 그라디언트 위 목업 — 기록 화면 + 화난 모티 v2 (1830×1334, 팔레트 PNG 205KB로 최적화). 이미지 하단이 섹션 하단과 여백 없이 붙도록 섹션 하단 패딩을 제거했으니, 교체 시 하단에 투명 여백이 없는 이미지를 넣을 것 |

> 앱 화면 자리는 **기종을 특정하지 않는 심플한 블랙 베젤**로 감쌉니다 (노치·홈버튼 없음 — 배경과 분리감을 주기 위한 최소한의 프레임). 세로 이미지를 넣으면 베젤 안에서 원본 비율 그대로 표시되고 잘리지 않습니다. iOS·Android 어느 쪽 스크린샷을 쓰든 상관없어요. 가로 폭만 컴포넌트가 맞추고 높이는 이미지가 정합니다.

## 브랜드 로고 (public/assets/brand/)

| 파일명 | 사용 위치 | 비고 |
|---|---|---|
| `wordmark.svg` | `layout/Header.tsx`, `layout/MobileMenu.tsx` (좌측 상단) | 없으면 `Baloo 2` 폰트로 "Angrymoti" 텍스트 워드마크를 대신 그린다. 파일을 넣으면 코드 수정 없이 실제 로고로 교체 |

## 스토어 배지 (public/assets/badges/) — 출시 전 교체 권장

Apple·Google은 브랜드 가이드에서 **각사가 배포하는 원본 배지 아트워크를 그대로 사용**하도록 요구합니다.
현재는 같은 레이아웃의 대체 배지를 그려 넣어 둔 상태이며, 아래 경로에 원본 파일을 저장하면 코드 수정 없이 자동 교체됩니다.

| 파일명 | 받는 곳 | 비고 |
|---|---|---|
| `app_store.svg` | Apple — App Store Marketing Tools (`toolsformarketing.apple.com`)의 배지 다운로드 | 한국어(ko-kr) 배지 선택. 다크 배경이므로 흰색 배지 권장 |
| `google_play.png` | Google Play — Play 브랜드 가이드라인 페이지의 배지 다운로드 | 한국어 배지 선택 |

파일을 넣으면 `components/ui/StoreBadge.tsx`가 원본 이미지를 우선 렌더링합니다. 높이는 54px로 맞춰지고 가로 비율은 원본 그대로 유지됩니다.

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
