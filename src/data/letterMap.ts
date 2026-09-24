/**
 * 편지 지도 데이터 — 레티 운영 DB 집계 (1차 소스). 페이지 두 개(ko·en)와 llms.txt 가 이 한 곳을 읽는다.
 * 집계: 사람 → 사람 편지만 (AI 캐릭터·운영자 테스트 계정 제외), 보낸 사람·받는 사람 나라별.
 * 다시 뽑기: tools/reddit/viz 의 SQL → flows.tsv → flows_map.py. 숫자를 바꾸면 asOf 도 바꾼다.
 */
export const LETTER_MAP = {
  asOf: '2026-09-24',
  period: { from: '2025-06', to: '2026-09' },
  letters: 208,
  countries: 35,
  international: 172,
  domestic: 36,
  image: '/data/letter-map-2026-09.png',
  routes: [
    ['AE', 'TR', 17], ['KR', 'US', 17], ['GB', 'US', 10], ['KR', 'TR', 10], ['PH', 'US', 6],
    ['GH', 'US', 6], ['AE', 'KR', 5], ['NG', 'US', 5], ['KR', 'MA', 4], ['CI', 'US', 4],
  ] as [string, string, number][],
  byCountry: [
    ['US', 92], ['KR', 53], ['TR', 36], ['GB', 27], ['AE', 24], ['NG', 22], ['IN', 20], ['PH', 18], ['GH', 12], ['CI', 12],
  ] as [string, number][],
  within: [['US', 23], ['KR', 4], ['IN', 3], ['NG', 3], ['GB', 2], ['TR', 1]] as [string, number][],
};

export const COUNTRY_EN: Record<string, string> = {
  US: 'United States', KR: 'South Korea', TR: 'Türkiye', GB: 'United Kingdom', AE: 'United Arab Emirates', NG: 'Nigeria',
  IN: 'India', PH: 'Philippines', GH: 'Ghana', CI: "Côte d'Ivoire", MA: 'Morocco',
};
export const COUNTRY_KO: Record<string, string> = {
  US: '미국', KR: '한국', TR: '튀르키예', GB: '영국', AE: '아랍에미리트', NG: '나이지리아', IN: '인도', PH: '필리핀', GH: '가나',
  CI: '코트디부아르', MA: '모로코',
};
