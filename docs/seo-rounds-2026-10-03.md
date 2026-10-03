# SEO 라운드 2026-10-03 — 2.0.17 사실 정정 · 편지 지도 갱신 · 「펜팔이란?」 · 편지 첫 문장 30개

커밋 9fd4a7f. 대표 지시 "레티 seo 개선 작업 진행, 컨텐츠 추가도".

## 진단 (크롤러 눈, 배포 전)

| 레인 | 상태 | 근거 |
|---|---|---|
| SEO | ✅/⚠️ | 사이트맵 128개 전부 200·h1 1·canonical·JSON-LD, noindex 없음, 404 정상. 영어 설명 3편이 문장 단위로 잘려 45~51자만 나감 |
| AEO | ⚠️ | 직답·FAQ 구조는 있음. "펜팔 뜻 / what is a pen pal" 같은 정의 질문의 전용 페이지 없음 |
| GEO | ⚠️ | llms.txt·AI 봇 허용. 1차 소스(편지 지도)가 9/30 값, 그 FAQ 는 "각각 17통" 을 손으로 써서 표(20·19)와 달랐다 |
| LLMO | ❌ | 앱 2.0.14~2.0.17 변화가 사이트에 없음 — Perplexity 가 "사진으로는 못 만들고 젬이 든다" 고 틀리게 답하며 lettie-dating.com 을 출처로 댐 |
| NEO | ❌ | 네이버 서치어드바이저 소유확인 미완 (캡차 — 대표 직접) |

## 바꾼 것

- **사실 정정 (앱 2.0.14~2.0.17)**: 나만의 캐릭터는 사진 한 장이나 글 몇 줄로, 첫 캐릭터 무료, 사진은 그리는 데만 쓰고 저장하지 않음.
  12개 언어 홈(소개·비교표·FAQ 2개), /faq·/en/faq, /penpal-app·/en/penpal-app, Lettie vs Slowly, 사진 없는 펜팔 글, localizedFaq(es), llms.txt.
  llms.txt 에 발견 최신순(9/27) 추가. `facts.ts` asOf 10-03 + 캐릭터 항목.
- **홈 하단 "느린 편지, 진짜 사람" → "느린 편지, 먼 곳의 친구"** (12개 언어). 9/27 부터 발견에 AI 계정 편지가 섞인다. `check-facts.mjs` 가 다시 들어오면 빌드를 멈춘다.
- **근거 없는 사용자 주장 2곳**: "Lettie에서 만난 수많은 사용자들이…" (언어 교환 우정 글 ko/en), "a number of users report…" (언어 학습 글 en) → 사실 서술.
- **편지 지도**: 사람 간 편지 271 → 313통, 41 → 42개국, 가입 885 → 917명·79개국 (운영 DB 10/3, `scripts/seo/letter-map.sql`). 대만 경로 신규(TW–US 14, JP–TW 10).
  지도 그림 `public/data/letter-map-2026-10-03.png` (flows_map.py 에 TW·HK 중심점 추가한 복사본으로 그림). 페이지의 기간·1위 경로 FAQ 를 데이터에서 계산.
- **새 글 `/blog/what-is-a-pen-pal` · `/en/blog/what-is-a-pen-pal`**: "펜팔 뜻"(GSC 12.5위)·"what is a pen pal" 직답, 어원(Etymonline: pen-friend 1919, pen pal 1931 — MW 는 1925, 사전마다 다름을 밝힘),
  채팅·언어 교환·데이팅 비교표, 요즘 방식 표, 레티 수치는 `LETTER_MAP`·`FACTS` 에서 읽음. FAQ 5개 = FAQPage LD.
- **`/blog/how-to-start-penpal`**: 상황별 첫 문장 12 → 30개(연인·군대·선생님·조부모·자녀·송별·생일·졸업·새해·크리스마스·사과·위로·응원·미래의 나·팬레터·롤링페이퍼), 계절별 4개,
  "호칭 → 장면 → 이유" 공식, 인사말과 첫 문장 구분, FAQ 2개. 제목·검색 제목·설명 "30개".
- **영어 설명** 3편(lettie-vs-slowly · first-letter-examples-discover · penpal-app-with-translation)을 160자 안의 완결 문장으로.
- **"pen pal app"(23~31위) 내부 링크**: 영어 본문 → /en/penpal-app 1 → 7, 한국어 본문 → /penpal-app 0 → 3.

## 크롤러 눈 확인 (배포 후 curl, 2026-10-03 21:1x KST)

- 새 글 ko/en: 제목·설명·h1 1·LD 8개(FAQPage 질문 5), noindex 없음, 본문에 313통·42개 나라·1~24시간·1931.
- /letter-map: "레티 편지 지도: 42개국 사이 편지 313통", FAQ "한국–미국이 양방향 합쳐 20통". 지도 PNG 200.
- 홈: "느린 편지, 먼 곳의 친구" / "Slow letters, faraway friends", 영어 FAQ 에 selfie 문장. llms.txt 반영.
- 사이트맵 128 → 130. 로컬 `next start` 감사 130개 URL 전부 200·h1 1·canonical·LD.
- 색인: IndexNow 130건 HTTP 200, GSC 색인 생성 요청 8건(새 글 2, 홈 ko/en, 편지 지도 ko/en, 첫 문장 글, 이월 1).

## 기준선 (GSC 28일 9/2~9/29 — 이번 변경 전)

합계: 클릭 42 · 노출 1,330 · CTR 3.2% · 평균 순위 8.6 (9/30 기준선 38 · 1,240 · 3.1% · 8.9).

| 검색어 묶음 | 노출 | 클릭 | 순위 | 이번 변경 |
|---|---|---|---|---|
| 편지 시작 · 편지 첫문장 · 편지 처음/첫 시작 · 편지 시작 문구 | 80 | 1 | 7.1~8.0 | 첫 문장 글 30개 |
| pen pal app · penpal app(s) · pen pals app | 74 | 0 | 23.7~31.6 | 내부 링크 |
| 펜팔 앱 · 펜팔 어플 · 펜팔앱 | 35 | 0 | 10~30 | 내부 링크 |
| 펜팔 뜻 · 펜팔 | 8 | 0 | 12.5 · 22.5 | 새 글 |
| pen pal app download · penpal app download | 62 | 1 | 8.6~9.5 | (9/30 설명 변경 유지) |

페이지 상위: /en 15클릭·179노출 · /blog/how-to-start-penpal 6·158 (7.2위) · /en/penpal-app 3·310 (11.9위).

**AI 인용** (Perplexity, 로그아웃, 2026-10-03 21:21 KST):
- "Can you make your own character from a photo in the Lettie pen pal app, and is it free?" → **"No — Lettie does not create your character from an uploaded photo… normally costs gems"** (출처 lettie-dating, apps.apple). 틀림 — 이번 정정 대상.
- "How many letters have people exchanged on the Lettie pen pal app…" → 답이 뜨지 않음(로그아웃 제한). 재측정 때 다시.

## 재측정 — 2026-10-17 (launchd `com.lettie.seo-remeasure-1017` 알림)

1. Perplexity 같은 질문: 사진·첫 무료가 반영됐는지, 출처가 lettie-dating 인지.
2. GSC 28일: 위 표의 검색어 묶음 순위·클릭. 특히 "편지 시작 문구" 계열 CTR, "펜팔 뜻" 이 새 글로 잡히는지, "pen pal app" 이 20위 안으로 오는지.
3. 색인: `site:lettie-dating.com/blog/what-is-a-pen-pal`.

## 하지 않은 것

- 발견에 AI 계정 편지가 섞인다는 사실을 사이트에 **공개할지**는 제품 결정이라 대표에게 남김. 대신 "진짜 사람" 이라는 약속을 지웠다.
- 스토어 설명(앱스토어·플레이)의 캐릭터 설명 — Perplexity 가 apps.apple 도 출처로 쓴다. 랜딩 밖이라 손대지 않음(다음 앱 출시 때 메타데이터로).
- 네이버 소유확인 — 캡차라 대표 직접(HTML 파일 방식).
- "penpal dating app" 최적화 — 레티는 데이팅 앱이 아니다. 백링크 구매·품앗이는 하지 않는다.
- 영어판 첫 문장 글은 12개 그대로 (영어 검색어는 아직 GSC 에 거의 없음).
