/**
 * 편지 통계 — 레티 운영 DB 집계 (1차 소스, 2026-10-11). /letter-stats(ko·en)·llms.txt·글 몇 편이 이 한 곳을 읽는다.
 * 다시 뽑기: scripts/seo/letter-stats.sql (운영 DB, 읽기 전용) → letters.tsv → `python3 scripts/seo/letter-stats.py letters.tsv` → 아래 숫자.
 * 정의는 letter-stats.py 맨 위 주석이 정본이다. 숫자를 바꾸면 asOf 도 바꾼다.
 * 편지 지도(letterMap.ts)는 "대화 속 사람→사람 편지"만, 여기는 공개로 띄운 편지까지 센다 — 두 숫자가 다른 이유.
 */
export const LETTER_STATS = {
  asOf: '2026-10-11',
  letters: 648,
  countries: 45,
  period: { from: '2025-06', to: '2026-10' },
  /** 글자 수 */
  length: { median: 179, p25: 100, p75: 397,
    /** [나라, 중앙값, 표본] — 20통 이상인 나라만 */
    byCountry: [["PH", 292, 21], ["GB", 241, 25], ["NG", 204, 22], ["IN", 196, 83], ["TR", 161, 65], ["KR", 143, 88], ["US", 140, 156]] as [string, number, number][] },
  /** 보낸 사람 현지 시각. 시간대가 하나인 나라의 편지만 (미국·브라질 등은 뺀다) */
  time: { sample: 461, night22to2: 24, late2to6: 8, morning6to12: 25,
    afternoon12to18: 29, evening18to22: 14, peakHour: 22,
    /** [ISO 요일 1=월, %] */
    weekday: [[1, 12], [2, 11], [3, 16], [4, 11], [5, 12], [6, 21], [7, 17]] as [number, number][] },
  /** 2.0(2026-09-15~) 대화 편지의 실제 배달 시간(시간) */
  delivery: { domestic: {"n": 33, "median": 1.6, "max": 1.9}, international: {"n": 266, "median": 10.0, "min": 3.0, "max": 23.8} },
  /** 상대 편지가 도착한 뒤 답장을 쓰기까지(답장이 이어진 경우만) */
  reply: { n: 101, medianHours: 4.8, within1h: 26, within24h: 87 },
  /** 대화를 여는 편지의 첫 단어 (%) */
  openers: { latin: { n: 246, hello: 20, hi: 19, hey: 9, i: 9, dear: 2 },
    ko: { n: 36, annyeonghaseyo: 36, annyeongAny: 44 } },
};

export const WEEKDAY_EN = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
export const WEEKDAY_KO = ['', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];
/** 가장 많이 쓴 요일 */
export const busiestDay = () => LETTER_STATS.time.weekday.reduce((a, b) => (b[1] > a[1] ? b : a));
