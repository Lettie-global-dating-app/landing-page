# SEO 라운드 2026-10-11 — 1차 데이터 페이지 · 영어 첫 편지 글 · 펜팔 앱 CTR

대표 승인("네 하세요")으로 10/10 제안 1·3·4번. 커밋 ca1c537, 배포 확인.

## 그 사이 결과 (10/10 확인)

10/8 색인 요청한 12쪽 중 11쪽이 이틀 안에 색인(ja·zh·pt·de·hi·id·ru·it·vi 홈, en 가이드 둘). fr 은 10/11 다시 요청.

## 바꾼 것

1. **펜팔 편지 통계** `/letter-stats` · `/en/letter-stats` (새 페이지, 1차 데이터)
   - 레티 DB, 사람이 쓴 편지 648통·45개국(2025-06 ~ 2026-10), 2026-10-11 집계.
   - 길이 중앙값 179자(사분위 100~397), 나라별(20통 이상) 필리핀 292 … 미국 140.
   - 쓴 시각(시간대 하나인 나라 461통): 밤 10시~새벽 2시 24%, 최다 밤 10시대, 토요일 21%.
   - 2.0 배달 실측: 국내 중앙 1.6h(최대 1.9), 국제 10.0h(3.0~23.8). 답장 중앙 4.8h(1시간 안 26%, 하루 안 87%, 101통).
   - 첫 편지 첫 단어: 라틴 문자 246통 Hello 20·Hi 19·Hey 9·Dear 2%, 한글 36통 "안녕하세요" 36%.
   - Dataset JSON-LD, 정의·표본·기준일·제외 기준 공개. 본문은 앞 60자만 스크립트로 읽고 공개하지 않는다.
   - 다시 뽑기: `scripts/seo/letter-stats.sql` → `python3 scripts/seo/letter-stats.py letters.tsv` → `src/data/letterStats.ts`.
   - llms.txt 에 요약 한 문단·페이지, 사이트맵, 더 읽어 보기, 편지 지도, 첫 편지 글(ko·en)에서 링크.
2. **영어 「How to Start a Pen Pal Letter」** 첫 문장 12 → 30개(상황 8가지), 다시 쓰는 공식(장면·디테일·문), 끝맺음 예시,
   레티 안내를 2.0 사실로(옛 「5-Letter Rule」 제목 제거), FAQ 1개 추가, 통계 한 줄. `updatedEn` 필드 신설(영어 dateModified·사이트맵).
3. **/en/penpal-app** 제목 `Pen Pal App: Free Download for iOS & Android` → `Free Pen Pal App for iPhone & Android: Slow Letters`,
   설명에 다른 점(1~24시간·70+ 언어 번역·사진 대신 캐릭터). GSC 7일 노출 116·CTR 0.9%·순위 8.1 에서 출발.
4. llms.txt 편지 지도 기간이 "September 2026" 로 굳어 있던 것 → 데이터에서.

## 크롤러 눈 검증 (실사이트)

/letter-stats·/en/letter-stats 200, h1·canonical·hreflang(ko·en·x-default), LD: FAQPage·Article·BreadcrumbList·Dataset. 사이트맵 포함.
영어 첫 편지 글 표 30행. /en/penpal-app 새 제목. IndexNow 284건 200. 네이버 수집 요청 /letter-stats. GSC 대기열 맨 앞에 새 페이지 4개(10/12 10:20).

## 재측정

- **10/18**: /letter-stats·/en/letter-stats 색인 여부(URL 검사).
- **10/25**: /en/penpal-app CTR(0.9% →)·순위, /en/blog/how-to-start-penpal 순위(18.2 →), Perplexity "pen pal letter statistics"·"how long should a pen pal letter be" 에 /en/letter-stats 가 출처로 나오는지.
- 통계는 분기마다 다시 뽑는다(다음 2027-01). 숫자를 바꾸면 asOf 도.

## 하지 않은 것과 이유

- 답장률 — 공개하지 않았다. 표본이 작아 오해를 사기 쉽고(받은 쪽이 아직 안 읽은 편지 포함), 페이지가 말하는 질문(어떻게 쓰나)과 다르다. 답장 시간은 "답장이 온 편지 기준"이라고 적었다.
- 26개 언어판 통계 — 한·영만. 노출이 생기면 늘린다.
- Bing Webmaster Tools 등록 — 대표 로그인 필요(10/10 제안 2번).
- 외부 비교 사이트 등록 — 대표 계정 필요(10/10 제안 5번).
