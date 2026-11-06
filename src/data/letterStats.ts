/**
 * 편지 통계 — 레티 운영 DB 집계 (1차 소스, 2026-10-11 처음 · 2026-11-02 갱신). /letter-stats(ko·en)·llms.txt·글 몇 편이 이 한 곳을 읽는다.
 * 다시 뽑기: scripts/seo/letter-stats.sql (운영 DB, 읽기 전용) → letters.tsv → `python3 scripts/seo/letter-stats.py letters.tsv` → 아래 숫자.
 * 정의는 letter-stats.py 맨 위 주석이 정본이다. 숫자를 바꾸면 asOf 도 바꾼다.
 * 편지 지도(letterMap.ts)는 "대화 속 사람→사람 편지"만, 여기는 공개로 띄운 편지까지 센다 — 두 숫자가 다른 이유.
 */
export const LETTER_STATS = {
  asOf: '2026-11-02',
  letters: 2226,
  countries: 59,
  period: { from: '2025-06', to: '2026-11' },
  /** 글자 수. first·reply 는 첫 편지·답장 각각의 중앙값 */
  length: { median: 185, p25: 71, p75: 449, first: 164, reply: 199,
    /** [나라, 중앙값, 표본] — 20통 이상·보낸 사람 5명 이상인 나라만 */
    byCountry: [["NG", 563, 145], ["IN", 316, 267], ["AU", 314, 45], ["PH", 299, 20], ["TR", 242, 87], ["UG", 237, 62], ["TW", 213, 87], ["BR", 192, 47], ["CA", 170, 32], ["IT", 139, 26], ["US", 136, 500], ["ES", 128, 44], ["KR", 127, 210], ["GB", 110, 59], ["CN", 28, 163]] as [string, number, number][] },
  /** 보낸 사람 현지 시각. 시간대가 하나인 나라의 편지만 (미국·브라질 등은 뺀다) */
  time: { sample: 1410, night22to2: 24, late2to6: 8, morning6to12: 22,
    afternoon12to18: 28, evening18to22: 18, peakHour: 22,
    /** [ISO 요일 1=월, %] */
    weekday: [[1, 14], [2, 13], [3, 14], [4, 12], [5, 12], [6, 17], [7, 19]] as [number, number][] },
  /** 2.0(2026-09-15~) 대화 편지의 실제 배달 시간(시간) */
  delivery: { domestic: {"n": 204, "median": 1.6, "max": 2.0}, international: {"n": 1472, "median": 11.9, "min": 3.0, "max": 24.0} },
  /** 상대 편지가 도착한 뒤 답장을 쓰기까지(답장이 이어진 경우만) */
  reply: { n: 959, medianHours: 6.2, within1h: 19, within24h: 85 },
  /** 영어로 쓴 편지의 단어 수 — scripts/seo/letter-words-en.sql·.py. 영어 판별은 대략값(글자 95%↑ ASCII + 영어 기능어). over150 은 150단어 이상 비율(%) */
  wordsEn: { first: { n: 362, median: 39, over150: 10 }, reply: { n: 940, median: 53, over150: 20 }, all: { n: 1302, median: 49, p25: 23, p75: 113 } },
  /** 대화를 여는 편지의 첫 단어 (%) */
  openers: { latin: { n: 466, hello: 21, hi: 19, hey: 7, i: 8, dear: 2 },
    ko: { n: 61, annyeonghaseyo: 31, annyeongAny: 38 } },
};

/**
 * 편지를 어떻게 끝내나 — 40자 이상 편지의 끝 80자 (1차 소스, 2026-10-20). 정의·다시 뽑기는 scripts/seo/letter-endings.py.
 * 갈래는 겹칠 수 있고(%), none 은 어느 끝인사·이름 서명도 없는 편지. 답장률과는 엮지 않는다(답장률은 공개하지 않음).
 */
export const LETTER_ENDINGS = {
  asOf: '2026-10-20',
  en: { n: 532, question: 16, lookingForward: 11, takeCare: 5, niceDay: 3, regards: 3, thanks: 5, nameSign: 7, none: 61 },
  ko: { n: 102, question: 17, niceDay: 15, askReply: 12, thanks: 9, nameSign: 2, none: 54 },
};

/**
 * 편지를 어떤 말로 쓰나 — 편지 앞 100자로 가린 대략값 (1차 소스, 2026-11-04). 다시 뽑기: scripts/seo/letter-langs.sql → letter-langs.py.
 * 라틴 문자가 아니면 문자 체계로, 라틴 문자면 언어별 기능어로 가린다(zh 는 간체·번체 합침, cyr 는 키릴 문자 — 대부분 러시아어).
 * cross = 나라가 다른 두 사람 사이 대화 편지. own = 보낸 사람 나라의 말, theirs = 받는 사람 나라의 말.
 * noEnglishPairs = 두 사람 모두 영어권(영어가 공용어인 나라 포함)이 아니고 서로 다른 말을 쓰는 나라. toNativeEnglish = 영어권이 아닌 나라 → 미국·영국·캐나다·호주·뉴질랜드·아일랜드.
 * byPerson = 사람마다 그 묶음에서 가장 많이 쓴 방식 하나로 센 것(몇 사람이 많이 쓴 탓인지 보려고). 답장률은 내지 않는다.
 */
export const LETTER_LANGS = {
  asOf: '2026-11-04',
  letters: 2447, people: 419, countries: 63, unsure: 3,
  /** [언어 라벨, 편지 %] */
  share: { en: 65, zh: 11, ko: 9, cyr: 3, tr: 3, de: 2, es: 1, pt: 1, arab: 1, it: 1, fr: 1 },
  cross: { n: 1783, people: 295, english: 64, own: 29, theirs: 4, other: 4, byPerson: { english: 68, own: 23, theirs: 3, other: 5 } },
  noEnglishPairs: { n: 345, people: 85, english: 25, own: 61, theirs: 9, other: 5, byPerson: { english: 38, own: 48, theirs: 8, other: 6 } },
  toNativeEnglish: { n: 231, people: 74, english: 48, own: 45, other: 7 },
  /** 공개로 띄운 편지 중 영어권이 아닌 나라 사람이 쓴 것 */
  publicNonEnglish: { n: 190, people: 124, english: 32 },
  /** [나라, 나라 밖으로 보낸 편지 수, 보낸 사람 수, 영어 %, 자기 나라 말 %] — 30통·5명 이상, 영어권 제외 */
  byCountry: [['KR', 131, 31, 12, 85], ['CN', 143, 22, 22, 73], ['TR', 76, 10, 34, 61], ['BR', 30, 5, 47, 33]] as [string, number, number, number, number][],
};

/** 고양이·강아지 이야기와 사진 동봉 (1차 소스, 2026-10-20) — scripts/seo/letter-pets.sql, 여러 언어 낱말로 센 대략값 */
export const LETTER_PETS = { asOf: '2026-10-20', letters: 1099, cat: 35, dog: 10 };
export const LETTER_PHOTOS = { asOf: '2026-10-20', since: '2026-09-15', letters: 844, withPhoto: 51 };

export const WEEKDAY_EN = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
export const WEEKDAY_KO = ['', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];
/** 가장 많이 쓴 요일 */
export const busiestDay = () => LETTER_STATS.time.weekday.reduce((a, b) => (b[1] > a[1] ? b : a));
