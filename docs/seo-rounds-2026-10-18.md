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
