# SEO 15라운드 — 2026-09-24

## 기준선 (변경 직전)
- GSC 28일(8/25~9/21): 클릭 30 · 노출 1,040 · CTR 2.9% · 평균 순위 10.7
- 노출 상위 페이지: /en/penpal-app 303(순위 13.3, CTR 1%) · /blog/how-to-start-penpal 149(7.9) · /en 147(5.1) · /blog/2025-best-penpal-app 84(8.7) · /en/blog/apps-to-make-friends-online 80(10.4)
- 검색어 로드맵: "편지 시작/첫문장" 변형 노출 ~84·순위 6.5~9.8·클릭 1, "pen pal app download" 56·8.9·0, "best pen pal apps" 묶음 24~30위
- 크롤러 감사(130 URL): h1 두 개 80, 제목 60칸 초과 51, "Lettie | Lettie" 15, 앱 엔티티 210회 선언(페이지당 2회·@id 없는 선언 포함)
- AI 인용(Perplexity, 로그아웃): 1/5 — "best pen pal app with translation" 출처에만 등장(본문 언급 없음). "apps like Slowly", 배달 시간, "펜팔 앱 추천", "how to start a pen pal letter" 0
- Lighthouse 모바일: /en 98(LCP 1.9s) · 비교 글 95(LCP 2.6s), 남은 최대 항목 = 첫 응답 0.7~0.9s

## 15라운드
| # | 레인 | 바꾼 것 | 크롤러 눈 확인 (운영) |
|---|---|---|---|
| 1 | SEO | 블로그 본문 첫 `# 제목` 제거·본문 h1→h2, 다국어 글은 제목 h1 명시 | h1≠1 페이지 80 → 0 |
| 2 | SEO | 제목·설명 폭 규칙(`src/lib/seo.ts`, 한글 2칸), 접미사 통일, 허브 18페이지 질의형 제목 | "Lettie" 중복 15 → 0, 설명 160칸 초과 28 → 1 |
| 3 | SEO/LLMO | @graph 루트 1회(영어), /en 이중 선언·@id 없는 MobileApplication 제거 → WebPage.about, 거짓 기능 "5통 뒤 연락처" 제거, 스크린샷 2.0 | 앱 엔티티 페이지당 정확히 1 |
| 4 | SEO/AEO | /penpal-app ko·en 재작성: "Pen Pal App: Free Download…", 직답·스토어 버튼·기능·배달·무료 범위 표·FAQPage, "150+ countries"·"모든 연령" 제거 | 새 제목·FAQPage·WebPage 확인 |
| 5 | AEO | /blog/how-to-start-penpal → "편지 첫 문장 쓰는 법: 상황별 예시 12개", 직답·예시 표·보이는 FAQ, **화면에 없던 하드코딩 FAQPage 제거**(2글), `updated` 필드 | 새 제목·FAQPage |
| 6 | SEO | 2025 추천 글 → 2026 비교 글로 308 통합, 제목의 지난 연도 제거 | 308 → /blog/best-penpal-apps-2026 |
| 7 | 신뢰 | 없어진 5통 규칙 문장 4곳 정정, **실제 사용자 것이 아닌 후기 6편 /stories 내림**(편지 수 합 316 > 사람 간 편지 전체 208) → 블로그로 308 | /en/stories 308 → /en/blog |
| 8 | GEO | 배달 시간 표를 서버 구간과 일치(도쿄 2~3h→3~6h 등 12곳 정정), 나라 중심점 규칙 표·기준일, 도시 17곳 | 운영 실측(영국→미국 9h, 튀르키예→한국 8.7h)이 6~12h 구간과 일치 |
| 9 | GEO | 1차 소스 /letter-map ko·en: 사람 간 편지 208통·35개국 지도·경로·나라 표·방법·기준일·FAQPage | 200, 사이트맵·홈 푸터 링크 |
| 10 | GEO | llms.txt 배달 규칙 정정, 커뮤니티 수치(기준일)·편지 지도·펜팔앱 페이지, 인용 시 기준일 안내; 비교 글·FAQ의 틀린 배달 시간 정정 | llms.txt 에 "Tokyo 3–6 h"·798명 |
| 11 | SEO | 영어 블로그 목록을 글 데이터에서 생성(18 → 39편) | 내부 링크 0이던 새 글 6편 목록 진입 |
| 12 | 성능 | HTML 에 Netlify-CDN-Cache-Control | **효과 미확인**: Edge 여전히 fwd=miss, 첫 응답 0.62~0.74s(전 0.70~1.04s) |
| 13 | AEO | /en/blog/how-to-start-penpal → "How to Start a Pen Pal Letter: 12 First Lines That Work", 직답·예시 표·보이는 FAQ | 새 제목·FAQPage |
| 14 | SEO | 사이트맵 lastmod 정직화(빌드일 → 소스의 마지막 git 커밋일, 블로그 updated), IndexNow 128건, GSC 색인 요청 10건 | 운영 사이트맵 날짜가 페이지마다 다름 |
| 15 | 측정 | 이 문서 + 재측정 알림(launchd com.lettie.seo-remeasure, 10/8 09:00) | — |

## 재측정
- **2026-10-08** (14일 뒤, 최근 2~3일 제외): GSC 28일 클릭·노출·CTR·순위 + 위 5개 페이지의 URL 별 노출·CTR, "편지 첫 문장"·"pen pal app download" 질의 순위
- 같은 날 AI 인용 5문항 재측정(위 기준선과 같은 질문)
- 기존 일정 2026-10-04(9/20 변경분)도 유지

## 하지 않은 것
- 백링크·품앗이 없음. 레딧은 공개 지정 자리에만 개발자로 밝히고 게시.
- 긴 옛 블로그 제목 26개는 그대로 — 검색 결과에서 잘릴 뿐 틀린 정보는 아니라서, 노출이 붙는 글부터 손본다.
- 네이버 서치어드바이저 소유확인(캡차)·Bing Webmaster 등록 상태 확인은 대표 계정 로그인이 필요.
