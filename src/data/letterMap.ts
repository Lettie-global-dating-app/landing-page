/**
 * 편지 지도 데이터 — 레티 운영 DB 집계 (1차 소스). 페이지 두 개(ko·en)와 llms.txt 가 이 한 곳을 읽는다.
 * 집계: 사람 → 사람 편지만 (AI 캐릭터·운영자·QA 테스트 계정·삭제된 편지 제외, 나라 코드가 잘못 저장된 계정 제외), 보낸 사람·받는 사람 나라별.
 * 다시 뽑기: scripts/seo/letter-map.sql (운영 DB) → flows.tsv → tools/reddit/viz/flows_map.py. 숫자를 바꾸면 asOf 도 바꾼다.
 */
export const LETTER_MAP = {
  asOf: '2026-10-03',
  period: { from: '2025-06', to: '2026-10' },
  letters: 313,
  countries: 42,
  international: 265,
  domestic: 48,
  image: '/data/letter-map-2026-10-03.png',
  routes: [
    ['KR', 'US', 20], ['KR', 'TR', 19], ['AE', 'TR', 19], ['TW', 'US', 14], ['GB', 'US', 10],
    ['JP', 'TW', 10], ['TR', 'US', 8], ['IN', 'US', 7], ['PH', 'US', 7], ['NG', 'US', 6],
  ] as [string, string, number][],
  byCountry: [
    ['US', 139], ['KR', 70], ['TR', 58], ['TW', 37], ['GB', 35], ['IN', 30], ['AE', 29], ['PH', 27], ['NG', 25], ['CI', 19],
  ] as [string, number][],
  within: [['US', 35], ['KR', 4], ['IN', 3], ['NG', 3], ['GB', 2], ['TR', 1]] as [string, number][],
};

/** 집계 기간 'YYYY-MM' → '2025년 6월' / 'June 2025' */
export const koMonth = (ym: string) => { const [y, m] = ym.split('-').map(Number); return `${y}년 ${m}월`; };
export const enMonth = (ym: string) =>
  new Date(`${ym}-01T00:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', timeZone: 'UTC' });

/** 가장 많이 오간 경로들 (공동 1위가 있으면 전부). FAQ 가 손으로 쓴 숫자와 표가 어긋나지 않게 데이터에서 뽑는다. */
export const topRoutes = () => LETTER_MAP.routes.filter(([, , n]) => n === LETTER_MAP.routes[0][2]);

export const COUNTRY_EN: Record<string, string> = {
  US: 'United States', KR: 'South Korea', TR: 'Türkiye', GB: 'United Kingdom', AE: 'United Arab Emirates', NG: 'Nigeria',
  IN: 'India', PH: 'Philippines', GH: 'Ghana', CI: "Côte d'Ivoire", MA: 'Morocco', TW: 'Taiwan', JP: 'Japan', HK: 'Hong Kong',
};
export const COUNTRY_KO: Record<string, string> = {
  US: '미국', KR: '한국', TR: '튀르키예', GB: '영국', AE: '아랍에미리트', NG: '나이지리아', IN: '인도', PH: '필리핀', GH: '가나',
  CI: '코트디부아르', MA: '모로코', TW: '대만', JP: '일본', HK: '홍콩',
};

/** 가입자 규모 — 운영 DB users(탈퇴·AI 계정 제외)·가입 나라 수(두 글자 ISO 코드만 — '+5997' 같은 전화 국가번호가 섞여 있다). 숫자를 바꾸면 asOf 도 바꾼다. */
export const COMMUNITY = { asOf: '2026-10-03', users: 917, countries: 79 };
