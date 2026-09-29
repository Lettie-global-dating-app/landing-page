# SEO 라운드 2026-09-30 — 사실 정정 · 편지 지도 갱신 · 서치콘솔 메타

커밋 `2bf6ea6`. 앞 라운드: [seo-rounds-2026-09-24.md](seo-rounds-2026-09-24.md) (재측정 10/8 은 그대로).

## 진단 (크롤러 눈, 배포 전)

기술 SEO 는 사이트맵 128개 URL 전부 통과(200·h1 1개·canonical·JSON-LD, noindex 없음, AI 봇 허용, 404 정상).
문제는 **화면이 사실이 아닌 것을 말하는 것**이었다.

| 랜딩이 말하던 것 | 실제 (정본) | 규모 |
|---|---|---|
| 28개 언어 | 73개 언어 — 앱 `kAppLanguageCodes` (2.0.10) | 38개 파일 200여 곳: 12개 언어 홈, 제목, JSON-LD, llms.txt, FAQ, 블로그 |
| 발견 8시간마다 3장 | 하루 한 번 3장 — 서버 `lettie.discover.batch-hours: 24` (9/21) | 10개 파일 |
| 배달 최소 30분 | 최소 1시간 — `DeliveryTimeService` 가장 짧은 구간이 같은 나라 1~2시간 | 4개 파일 |
| 홈 통계 150+개국 | 가입 78개국 — 운영 DB (두 글자 ISO 코드만) | 12개 언어 홈 |
| 무료 하루 편지 3통 | 띄우기 하루 1통, 답장은 제한 없음 | 블로그 1곳 |
| (언어별 FAQ) 보낼 때 번역된다 · 사진이 점차 드러난다 | 읽는 사람이 버튼으로 자기 언어로 · 2.0 은 픽셀 캐릭터 | 10개 언어 |

**AI 가 이미 틀린 사실을 인용하고 있었다** (Perplexity, 로그아웃, 2026-09-30 00:59 KST):
- "How many languages does the Lettie pen pal app translate letters into?" → **"28 languages."** (출처 lettie-dating)
- "how often do new Discover envelopes arrive…" → **"three times every eight hours"**, 배달 1~24시간 (출처 apps.apple)

## 바꾼 것

- 정본 `src/data/facts.ts` (언어 수·73개 언어 목록·발견·배달·날짜 포맷). 홈 통계, llms.txt, 번역 글의 언어 목록,
  펜팔앱 페이지 규모 문장이 여기와 `COMMUNITY` 를 읽는다.
- 재발 방지 `scripts/seo/check-facts.mjs` — 옛 표현이 있으면 `prebuild` 에서 빌드를 멈춘다(`npm run check:facts`).
- `/letter-map` 갱신: 사람 간 편지 208→**271통**, 35→**41개국**, 가입 798명·77개국 → **885명·78개국**.
  집계 SQL 은 `scripts/seo/letter-map.sql` (9/24 값을 같은 정의로 재현해 검증). 지도 이미지 `public/data/letter-map-2026-09-30.png`.
- 서치콘솔 근거 메타 5곳 (아래 기준선 표의 ★).
- 바뀐 블로그 글 18편 `updated: 2026-09-30` → dateModified · sitemap lastmod.
- 배포 후: IndexNow 128건 HTTP 200, GSC 색인 생성 요청 9건(한도로 `/en/blog/slow-letter-beauty` 는 `.gsc-pending.txt` 로 이월).

## 크롤러 눈 확인 (배포 후 curl)

- 12개 언어 홈 + FAQ·펜팔앱·llms.txt·번역 글 등 20곳에서 옛 표현 0건.
- 홈 통계 `70+` · `78`, JSON-LD "70+ languages", llms.txt "available in 73 languages" + 언어 목록.
- `/en/letter-map` "271 letters between people in 41 countries", 새 지도 PNG 200.
- 사이트맵 번역 글 lastmod 2026-09-30. `audit.py` 128행 문제 0.

## 기준선 (GSC 28일 8/31~9/27 — 9/24 변경도 거의 반영 전)

합계: 클릭 38 · 노출 1,240 · CTR 3.1% · 평균 순위 8.9 (9/24 기준선 30 · 1,040 · 2.9% · 10.7).

| 페이지 | 클릭 | 노출 | CTR | 순위 | 이번 변경 |
|---|---|---|---|---|---|
| /en | 15 | 180 | 8.3% | 4.9 | 설명 70+ |
| / | 5 | 49 | 10.2% | 3.0 | 제목·설명 70개 넘는 언어 |
| /en/penpal-app | 4 | 310 | 1.3% | 11.9 | ★ 설명을 다운로드 의도로 |
| /blog/how-to-start-penpal | 4 | 144 | 2.8% | 7.5 | ★ 검색 제목 "편지 시작하는 법" ("편지 시작" 계열 노출 74·클릭 1) |
| /en/blog/best-penpal-apps-2026 | 4 | 118 | 3.4% | 7.7 | ★ 설명에 앱 7개 이름 (160칸에서 잘리던 것) |
| /en/blog/slowly-alternatives-2026 | 0 | 71 | 0% | 6.7 | ★ "Apps like Slowly in 2026: …" 직답 설명 |
| /en/blog/slow-letter-beauty | 0 | 26 | 0% | 9.8 | ★ 정의 한 문장 + 검색 제목 "What Is a Slow Letter?" |
| /blog/penpal-app-with-translation | 0 | 20 | 0% | 15.2 | 제목 "70개 넘는 언어", 73개 언어 목록 |
| /penpal-app | 0 | 31 | 0% | 27.3 | 규모·발견·배달 사실 |

원본 표: 세션 스크래치패드의 gsc_*.tsv (커밋하지 않음).

## 재측정 — 2026-10-14 (launchd `com.lettie.seo-remeasure-1014` 알림)

1. **AI 인용 (가장 직접적인 지표):** 위 Perplexity 질문 두 개를 로그아웃으로 다시 묻는다. "70+/73 languages", "once a day" 로
   바뀌었는지. ChatGPT 검색·Google AI 개요도 같은 질문으로 한 번씩.
2. **GSC 28일:** ★ 페이지의 CTR·순위를 위 표와 비교. "편지 시작" 계열, "pen pal app download", "slowly alternatives" 질의.
3. **색인:** 번역 글·홈의 새 제목이 검색 결과에 반영됐는지 (site: 검색).

## 하지 않은 것

- "penpal dating app" (노출 52, 4~8위) 최적화 — 레티는 데이팅 앱이 아니다.
- "pen pal app" 23~31위 끌어올리기(내부 링크 재설계·본문 보강) — 규모가 커서 다음 라운드 후보로 남김.
- 옛 URL `/blog/2025-best-penpal-app`(308) 이 아직 노출 44 — 구글이 합칠 때까지 기다린다(이미 308).
- 네이버 서치어드바이저 소유확인·사이트맵 제출 — 자동화 크롬에 네이버 로그인이 없고 캡차가 있어 대표 직접.
  메타 태그(`b9333…`)와 `public/naver02cc….html` 값이 서로 다르다 → 콘솔에서 HTML 파일 방식을 고를 것.
- 스토어 설명의 "최소 30분"·"77 countries"(프로모션 문구) — 랜딩 밖이라 손대지 않음. 실제는 최소 1시간·78개국.
