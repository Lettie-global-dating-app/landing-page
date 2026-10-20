# SEO 라운드 2026-10-18 — 우표·여권·기념일·번역

대표: "새로 생긴 스탬프·번역·여권 같은 내용 다 SEO 추가, 콘텐츠 발행" (/fire-your-seo-agency).

## 진단 (크롤러 눈, 운영)
| 레인 | 상태 | 근거 |
|---|---|---|
| SEO | ⚠️ | 기본은 건강(SSR h1·index,follow·사이트맵 284·404 정상). 우표·여권·기념일 주제 쪽이 0 |
| AEO | ⚠️ | FAQ 에 여권·기념일 질문 없음, 우표 답이 옛 규칙("편지 주고받은 나라마다 우표") |
| GEO/LLMO | ❌ | llms.txt 에 우표·여권·기념일 없음, 번역 "원문과 나란히"(2.0.31 부터 그 자리 전환), 발견 "최신순"(10/16 부터 답 없는 편지 먼저), "젬으로 무제한 대화"(없어진 기능) |
| NEO | ✅ | 서치어드바이저 등록됨 — 새 쪽 수집 요청만 |

## 바꾼 것
- **사실 정본** `src/data/facts.ts`: 우표(뽑기 젬 10·하루 30·소재 158, 가게 103개국 젬 15), 여권(5통·각자 2통·칭호 20·대륙 6), 편지 10만 자, `HOLIDAY_STAMPS`(13개 창, UTC — 서버 EventStampScheduler 와 같은 값), `PASSPORT_TITLES`(20), `PASSPORT_STATS`(1차 데이터).
- **새 글 3편 × ko/en** (표·FAQ 는 facts 에서 생성):
  - `/blog/lettie-stamps-guide` — 우표 6가지와 얻는 법
  - `/blog/lettie-passport-guide` — 도장 규칙·칭호 20개·도장 많은 나라(1차 데이터)
  - `/blog/lettie-holiday-stamps-2026` — 13개 기념일 우표 날짜·그림·받는 법 (ko 한국 시간, en UTC)
- **고친 것**: 번역 글(그 자리 전환·쓰면서 번역·10만 자 끝까지), 제품 소개 ko/en(우표·여권 줄, 무제한 대화 → Plus 이어 쓰기, 새 글 링크), FAQ ko/en(우표 답 정정 + 여권·기념일 질문), 홈 ko/en(우표·무료 줄), schema.ts featureList, llms.txt(우표·여권·기념일 항목 + 키 페이지 3, 발견 순서, 한 번 더 보내기), 27개 언어 홈·사전·FAQ·다국어 글의 "나란히"(227곳)·"나라마다 우표"(51곳)·"무제한 대화"(84곳).
- **재발 방지** `scripts/seo/check-facts.mjs`: 번역 나란히 · 나라마다 우표 · 젬으로 무제한 대화 (ko/en 패턴).
- **이미지**: `public/v2/stamps-hero.jpg`·`holiday-stamps-hero.jpg`(실제 우표 그림 합성), `app-passport-ko/en.jpg`(앱 여권 화면).
- 내부 링크: `readNext.ts` 새 주제 묶음(여권·우표·달력·번역), 제품 소개 → 새 글 3편.

## 1차 데이터 (운영 DB, 운영자·QA·시험 계정 제외, 2026-10-18)
- 여권 도장 41개 · 21명 · 17개 나라 (중국·미국 7, 인도 4, 튀르키예·덴마크 3)
- 2026 세계 우편의 날 기념 우표 76명

## 측정
- 기준선: 새 6쪽 색인 0·노출 0 (10/18 신규).
- 재측정 **2026-11-01** (launchd `com.lettie.seo-remeasure-1101`): 새 6쪽 GSC 색인·노출·클릭, Perplexity "How do you get a Lettie passport stamp?" / "When is the Lettie Halloween stamp?" 인용 여부, 번역 질문 답이 "side by side" 를 버렸는지.

## 하지 않은 것
- 다국어(26개 언어) 새 글은 이번엔 안 씀 — ko/en 반응을 보고 11/1 뒤 결정.
- AI 편지 관련 문구는 손대지 않음(대표 결정: 사이트에 공개하지 않음). 단 llms.txt 지역 통계 줄의 "(AI-character letters … excluded)" 는 이전부터 있던 표현 — 대표 확인 필요.

## 2차 (같은 날, 대표 "새 글 더 써도 되지 않아?")
- 원칙: 양은 벌점이 아니다. 문제는 찍어 낸 글·겹치는 글·색인 속도. → 주 3~5편, 검색 의도가 서로 다른 글만.
- 새 글 5편(ko/en, 커밋 296379d·머지 da2c656):
  - `/blog/halloween-letter-to-pen-pal` — 나라별 할로윈 표, 쓸거리 7, 예시(한·영), 우표 기간 `holiday('p_ee103126')`
  - `/blog/diwali-wishes-for-friends` — 2026-11-08, 인사말 표, "쇠니?" 먼저, 인도까지 6~12시간
  - `/blog/thanksgiving-letter-to-a-friend` — 2026-11-26(캐나다 10/12), 세 줄 구조, 추석과 함께
  - `/blog/christmas-letter-to-a-pen-pal` — 영어 문구 20, 호주·필리핀·일본·한국, 23~24일에 보내기
  - `/blog/pen-pal-not-replying` — LETTER_STATS(답장 중앙값 4.8h·87% 24h 안·국제 배달 중앙값 10h), 3일 뒤 한 번 더 보내기, 발견은 답 없는 편지 먼저
- 연결: 기념일 우표 달력 → 네 편, readNext 「기념일 편지」 묶음, 답장 글은 「시작하기」 묶음.
- 운영 확인: 10쪽 200·h1 1·FAQPage 1·index,follow, 사이트맵 10건, IndexNow 300건 200.
- GSC: en/pen-pal-not-replying 1건 요청 후 하루 한도 → 나머지 9건을 `scripts/.gsc-pending.txt` 맨 앞에(10/19 10:20 gsc-drain).
- 다음 주: 새해 편지(p_ee010127), 설날 편지 후보.

## 3차 (2026-10-20, 대표 "이어서")
- 새 글 4편(ko/en, 0991cec·머지 0911d68):
  - `/blog/new-year-letter-to-a-pen-pal` — 20개 언어 새해 인사, 일본 연하장·스페인 포도·필리핀 둥근 과일·한국 해돋이, 시차(서울은 런던보다 9h·뉴욕보다 14h 먼저)
  - `/blog/world-hello-day-letter` — 11/21 유래(1973 매코맥 형제), 20개 언어 인사(존댓말·반말), 레티 첫 편지 인사말 통계(Hello 20%·Hi 19%·Dear 2%)
  - `/blog/lunar-new-year-letter` — 2027-02-06 양의 해, 한국·중국·홍콩·베트남·싱가포르/말레이시아, "상대가 부르는 이름으로"
  - `/blog/how-to-end-a-letter-to-a-pen-pal` — **1차 데이터 LETTER_ENDINGS**(letterStats.ts, scripts/seo/letter-endings.*): 영어 편지 532통 중 61% 끝인사 없음·16% 질문·7% 이름 / 한글 102통 54%·17%·좋은 하루 15%. 답장률과는 엮지 않음.
- 운영 확인: 8쪽 200·h1 1·FAQPage 1·index,follow, 사이트맵 8건, IndexNow 308건 200. GSC 는 오늘 한도를 대기열이 써서 8건을 `.gsc-pending.txt` 맨 앞(10/21 10:20).
- **노출 9 문의(대표)**: GSC 「최근 24시간」(10/19 16시~10/20 14시 KST)은 잠정치. 날짜별 확정치는 10/17 까지이고 하루 노출 주평균 26~44(8~9월) → 79 → 97 → 182 → **251(10/12 주)**. 수동 조치·보안 문제 없음, 구글봇 UA 로 주요 쪽 200·index. `scripts/seo/gsc-days.mjs` 추가, 10/22 11:00 launchd `com.lettie.seo-gsc-check-1022` 가 10/18~19 확정치를 알림.
