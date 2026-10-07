# SEO 라운드 2026-10-07 — 색인이 안 되는 이유와 내부 링크

대표 요청 "우리 seo 개선 색인도 등록".

## 진단

| 레인 | 상태 | 근거 |
|---|---|---|
| SEO 기본 | ✅ | 사이트맵 292쪽 전부 200 · h1 1개 · canonical 자기 자신 · noindex/X-Robots 없음 (Googlebot UA, 언어 헤더 셋 다 리디렉션 없음) |
| 색인 | ❌ | GSC 페이지 보고서(10/4 기준): 색인 64 · 미색인 73, 그중 **발견됨 - 현재 색인이 생성되지 않음 68**. 사이트맵은 10/7 다시 읽힘(292) |
| 내부 링크 | ❌→✅ | 블로그 글 하단 관련 글이 **모든 글에서 데이터 맨 앞 세 편**(가을·겨울 수필)이었다. 「2026 추천」 26개 언어판은 **들어오는 링크 0**(고아 26쪽). 292쪽 중 199쪽이 들어오는 링크 1~2개 |
| 메타 | ✅ | 검색 노출 있는 페이지 제목·설명은 이미 검색어에 맞춰져 있다(10/3 라운드) |
| 네이버 | ✅ | 서치어드바이저 소유 확인·사이트맵 완료(10/4 대표 확인 — 10/6 문서의 "미완"은 틀린 기록) |

URL 검사 37쪽(10/7): 색인 21 · 안 됨 14 · 검사 실패 2.
- 색인됨: en 홈·penpal-app·2026 추천·Slowly 대안·Lettie vs Slowly·펜팔이란·FAQ·편지 지도, ko 홈·penpal-app·펜팔이란·첫 편지·FAQ·시작하기, 언어 홈 es·tr·th·ar
  (tr·th·ar 는 10/6 색인 요청한 것 — **요청하면 하루 안에 색인된다**)
- 안 됨: 언어 홈 ja·zh·pt·de·fr·hi·ru·it·vi, en 가이드 시작하기·편지 쓰는 법, ja·es·pt 펜팔 앱

## 바꾼 것 (커밋 1ca337c, 배포 확인)

- `src/data/readNext.ts`: 블로그 40편을 주제 다섯 묶음으로(카테고리가 전부 '감성'이라 못 씀). 관련 글 = 같은 묶음의 다음 글 3편(돌아가며) + 핵심 글 3편.
  핵심 글 = 2026 추천 · Slowly 대안 · 펜팔이란 · 첫 편지 · Lettie vs Slowly · 번역 펜팔 앱 (검색 노출 순).
- 다른 언어 홈 글 카드: 그 언어로 쓴 글(2026 추천·Slowly 대안·펜팔 찾기)을 먼저, 모자라면 영어 글. "(영어)" 표시는 영어 카드가 있을 때만.
- 다국어 글(`LocalizedArticle`) 하단: 같은 언어의 다른 글 + FAQ.
- 가이드 13쪽·펜팔 앱·편지 지도 하단 「더 읽어 보기 / Read next」(`ReadNext`).

크롤러 눈 검증(배포 후 실사이트 292쪽):

| | 전 | 후 |
|---|---|---|
| 들어오는 링크 0 (고아) | 26 | **0** |
| 들어오는 링크 1~2 | 199 | **3** |
| 중앙값 | 1 | **5** |
| /en/blog/best-penpal-apps-2026 | 3 | 48 |
| /en/blog/slowly-alternatives-2026 | 1 | 48 |
| /en/blog/what-is-a-pen-pal | 1 | 48 |
| /en/guide/getting-started | 2 | 9 |
| /ja/blog/best-penpal-apps-2026 | 0 | 5 |
| /en/blog/winter-letter-warmth (수필) | 40 | 4 |

## 색인 등록

- IndexNow 292건 HTTP 200 (Bing·Naver·Yandex).
- 네이버 「웹 페이지 수집」 12건: 홈·펜팔 앱·2026 추천·첫 편지·Slowly 대안·Lettie vs Slowly·번역 펜팔 앱·첫 편지 예시·펜팔이란·시작하기·편지 쓰는 법·FAQ.
  자동화 크롬(9333)에 네이버 로그인이 생겨 CDP 로 된다 — 입력칸은 **전체 URL**(경로만 넣으면 빨간 줄로 거부), 지우기는 `select()` 뒤 Backspace.
- GSC 색인 생성 요청: 오늘 한도는 아침 10:20 자동 작업이 이미 씀. 대기열(`scripts/.gsc-pending.txt`, 163건)을 **색인 안 된 큰 언어 홈 → en 가이드 → 언어별 펜팔 앱·2026 추천·Slowly 대안** 순으로 다시 세웠다.
  10/8 10:20 에 ja·zh·pt·de·fr·hi·id·ru·it·vi 홈부터 나간다.

## 기준선

GSC 28일(10/7 조회): 클릭 63 · 노출 1,630 · CTR 3.9% · 평균 순위 7.6.
상위 페이지: /en/blog/best-penpal-apps-2026 16/317 · /en 12/189 · /blog/how-to-start-penpal 9/210 · /en/blog/slowly-alternatives-2026 5/155 · **/en/penpal-app 3/324 (CTR 0.9%, 순위 10.2)**.
색인 보고서: 색인 64 · 미색인 73 (발견됨 68) — 10/4 기준.

## 재측정 — 2026-10-14, 2026-10-20

1. GSC 페이지 보고서: 색인 수(64 →), "발견됨" 수(68 →). 내부 링크 효과는 1~2주 걸린다.
2. URL 검사 37쪽 다시(`scratchpad` 의 inspect.mjs — 없으면 tools/promo-video/gsc_request.mjs 에서 요청 부분만 빼서 만든다): 언어 홈 ja·zh·de·fr·pt 가 색인됐는지.
3. /en/penpal-app 순위(10.2)·/en/blog/slowly-alternatives-2026 순위(5.9) — 핵심 글로 링크가 모인 효과.
4. 대기열이 줄었는지(`~/Library/Logs/lettie-gsc-drain.log`).

## 하지 않은 것과 이유

- **겹치는 글 합치기(301)** — 대표 결정 필요. 같은 주제가 두세 편씩 있어 서로 깎아 먹는다:
  `slowly-app-alternatives`→`slowly-alternatives-2026`, `safe-penpaling-guide`→`pen-pal-safety-guide`,
  `digital-detox-2025`·`digital-detox-slow-living`→`digital-detox-penpal`, `first-penpal-letter`→`how-to-start-penpal`.
  옛 글은 대부분 "발견됨 - 색인 안 됨"이라 잃을 순위는 거의 없다.
- 오늘 GSC 색인 요청 — 하루 한도가 이미 찼다(대기열로 내일부터).
- 백링크 — 사지 않는다.
