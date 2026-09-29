/**
 * 편지 지도 데이터 — 레티 운영 DB 집계 (1차 소스). 페이지 두 개(ko·en)와 llms.txt 가 이 한 곳을 읽는다.
 * 집계: 사람 → 사람 편지만 (AI 캐릭터·운영자·QA 테스트 계정·삭제된 편지 제외, 나라 코드가 잘못 저장된 계정 제외), 보낸 사람·받는 사람 나라별.
 * 다시 뽑기: scripts/seo/letter-map.sql (운영 DB) → flows.tsv → tools/reddit/viz/flows_map.py. 숫자를 바꾸면 asOf 도 바꾼다.
 */
export const LETTER_MAP = {
  asOf: '2026-09-30',
  period: { from: '2025-06', to: '2026-09' },
  letters: 271,
  countries: 41,
  international: 224,
  domestic: 47,
  image: '/data/letter-map-2026-09-30.png',
  routes: [
    ['KR', 'US', 20], ['AE', 'TR', 19], ['KR', 'TR', 19], ['GB', 'US', 10], ['IN', 'US', 7],
    ['TR', 'US', 7], ['GH', 'US', 6], ['NG', 'US', 6], ['PH', 'US', 6], ['AE', 'KR', 5],
  ] as [string, string, number][],
  byCountry: [
    ['US', 126], ['KR', 68], ['TR', 57], ['GB', 34], ['AE', 31], ['IN', 28], ['NG', 25], ['PH', 18], ['CI', 12], ['GH', 12],
  ] as [string, number][],
  within: [['US', 34], ['KR', 4], ['IN', 3], ['NG', 3], ['GB', 2], ['TR', 1]] as [string, number][],
};

export const COUNTRY_EN: Record<string, string> = {
  US: 'United States', KR: 'South Korea', TR: 'Türkiye', GB: 'United Kingdom', AE: 'United Arab Emirates', NG: 'Nigeria',
  IN: 'India', PH: 'Philippines', GH: 'Ghana', CI: "Côte d'Ivoire", MA: 'Morocco',
};
export const COUNTRY_KO: Record<string, string> = {
  US: '미국', KR: '한국', TR: '튀르키예', GB: '영국', AE: '아랍에미리트', NG: '나이지리아', IN: '인도', PH: '필리핀', GH: '가나',
  CI: '코트디부아르', MA: '모로코',
};

/** 가입자 규모 — 운영 DB users(탈퇴·AI 계정 제외)·가입 나라 수(두 글자 ISO 코드만 — '+5997' 같은 전화 국가번호가 섞여 있다). 숫자를 바꾸면 asOf 도 바꾼다. */
export const COMMUNITY = { asOf: '2026-09-30', users: 885, countries: 78 };
