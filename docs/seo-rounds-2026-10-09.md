# SEO 라운드 2026-10-09 — 지난 두 라운드가 안 본 곳

대표 요청 "seo 개선". 10/6(다국어)·10/7(색인·내부 링크) 뒤 이틀이라 GSC 숫자는 아직 안 움직였다(2~3일 늦다).
그래서 이번엔 지난 라운드가 안 본 레인 — 구조화 데이터 필드, 이미지, 파비콘·속도, 설명 잘림 — 을 봤다.

## 진단 (실사이트 282쪽, 크롤러 눈)

| 레인 | 상태 | 근거 |
|---|---|---|
| 구조화 데이터 | ⚠️→✅ | 282쪽 JSON-LD 전부 파싱됨. **Article 에 image 없음 9쪽**(GuideArticle: 펜팔 앱·편지 지도·영어 가이드) |
| OG | ⚠️→✅ | og:image 없음 3쪽(/blog·/en/blog·/en/guide/getting-started — 페이지 openGraph 가 레이아웃 것을 통째로 덮음) |
| 이미지 | ⚠️→✅ | alt 없는 img 0. 그런데 **영어 블로그 글 히어로가 한국어 앱 화면에 한국어 alt** |
| 속도 | ✅ | Lighthouse 모바일 97(/en: LCP 2.2s·CLS 0·TBT 30ms). 단 **파비콘 칸(16·32)에 512px 151KB** 를 걸어 모든 페이지가 받았다 |
| 설명 | ⚠️→✅ | 「편지 시작 문구」 글(구글 노출 210)이 첫 문장 32자에서 끊겨 상황 목록이 빠졌다 |
| GEO | ✅ | Perplexity "best pen pal apps 2026" — **lettie-dating.com 이 첫 출처**, Lettie 를 추천 목록에 넣음(10/9 00:56). 다른 질문은 로그아웃이라 답이 안 떴다 |

## 바꾼 것 (커밋 b31ce26, 배포 확인)

- GuideArticle Article LD `image` = `/og/{ko|en}.png` (9쪽)
- /blog·/en/blog·/en/guide/getting-started `og:image`
- 영어 블로그: `key-ko-s*` → `key-en-s*`, alt = `titleEn`
- 파비콘: `favicon-48.png`(4KB, 48 배수 — 구글 검색 결과 아이콘 권장), `favicon.ico` 80→7KB(16·32·48). favicon.png(512)는 남김
- `seoDesc`: 첫 문장이 한도의 60% 미만이면 다음 문장을 단어 경계까지(바뀐 쪽 7: ko 편지 시작 문구 64→151폭, ko 2026 추천 85→158, ko 번역 펜팔 앱, ar 홈, en 수필 3)

실사이트 확인: 영어 2026 추천 히어로 alt 영어·key-en-s1, /penpal-app Article image, /blog og:image, favicon.ico 6,873B, 편지 시작 문구 설명. IndexNow 282건 200.

## 재측정

10/14·10/20 (10/7 문서 항목에 더해):
- GSC 「개선사항」에 기사·탐색경로 오류가 없는지, 검색 결과에 파비콘이 뜨는지
- /blog/how-to-start-penpal CTR (10/7 기준 4.3%, 210 노출)·/blog/best-penpal-apps-2026 CTR(11.3%)

## 하지 않은 것과 이유

- PageSpeed API — 익명 일일 한도 초과. Lighthouse 로컬로 대신 쟀다.
- Perplexity 두 번째 질문부터 — 로그아웃 상태라 답이 안 뜬다(측정 한계).
- **1차 데이터 페이지** — 제안만. 레티 DB 에서만 나오는 숫자(나라별 편지 수·평균 길이·첫 편지에 많이 쓰는 말·쓰는 시간대 등)를
  표본 수·기준일과 함께 공개하면 AI 가 인용하는 원출처가 된다. 새 콘텐츠라 대표 결정.
- Bing Webmaster Tools 등록 — 로그인이 필요하다(IndexNow 는 계속 보낸다).
