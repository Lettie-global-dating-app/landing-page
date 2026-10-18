/**
 * 제품 사실의 정본 — 홈 통계·구조화 데이터·llms.txt·가이드가 이 값을 읽는다.
 * 앱·서버가 바뀌면 여기부터 고치고, 문장 속 옛 표현은 `npm run check:facts` 가 잡는다(빌드 전에도 돈다).
 *
 * - 언어: 앱 lib/v2/l10n/l.dart 의 kAppLanguageCodes (2.0.10 부터 73개). 편지는 읽는 사람의 앱 언어로 번역된다.
 *   문장에는 스토어 설명과 같은 "70개 넘는 언어 / 70+ languages" 를 쓴다 — 언어가 늘어도 틀리지 않는다.
 * - 발견: 서버 lettie.discover batch-size 3 · batch-hours 24 — 2026-09-21 부터 무료 봉투는 하루 한 번 3장 (그 전엔 8시간 주기).
 * - 배달: 서버 DeliveryTimeService — 가장 짧은 구간이 같은 나라 1~2시간이라 최소 1시간, 최대 24시간.
 * - 띄우기: 무료 하루 1통 (lettie.letters.per-day). 답장은 한도와 무관.
 * - 발견 순서: 2026-10-16 부터 아직 답장이 없는 편지·덜 보인 편지 먼저(서버 DiscoverService.rankForBatch), 한 사람 1통.
 *   (9/27~10/15 최신순, 그 전엔 작성자 활동·관심사 점수. Plus 작성자 우선은 10/4 없앴다.)
 * - 우표: 2.0.18(2026-10-04) 부터 뽑을 때마다 새로 그린다(158가지 소재). 뽑기 젬 10·하루 30번, 우표 가게 나라 우표 103장 젬 15
 *   (서버 application.yml lettie.stamps.*, CountryStamps.SHOP). 그림 만들기에 실패하면 젬을 쓰지 않는다.
 * - 여권: 한 나라 사람들과 합계 5통 이상·내가 2통·상대가 2통 이상 → 도장 + 그 나라 우표(서버 Passport.kt). 칭호 20개.
 * - 기념일 우표: 기간 안에 편지 한 통이면 무료로 한 사람 한 장(서버 EventStampScheduler). 일정은 아래 HOLIDAY_STAMPS.
 * - 편지 길이: 10만 자까지(2026-10-16 부터, 그 전엔 5천 자). 4,500자가 넘는 번역은 나눠 번역하고 줄바꿈을 지킨다.
 * - 번역: 2.0.31 부터 「번역 보기」를 누르면 그 자리에서 번역으로 바뀌고 「원문만 보기」로 되돌린다(예전엔 원문 아래 상자).
 * - 나만의 캐릭터: 2.0.17(2026-10) 부터 사진 한 장이나 글 몇 줄로. 첫 캐릭터 무료, 사진은 그리는 데만 쓰고 저장하지 않는다.
 *   그다음은 젬(서버 가격표), Plus 는 주 1회 무료. 기본 캐릭터 16종은 계속 무료.
 */
export const FACTS = {
  asOf: '2026-10-07',
  languages: 73,
  languagesRounded: '70+',
  discoverEnvelopesPerDay: 3,
  deliveryHours: { min: 1, max: 24 },
  freeLettersPerDay: 1,
  baseCharacters: 16,
  /** 첫 나만의 캐릭터(사진·글) 무료 — 2.0.17 */
  firstOwnCharacterFree: true,
  ownCharacterFromPhoto: true,
  /** 우표 가게의 나라 우표 수 · 뽑기 우표는 매번 새로 그린다 — 2.0.18 */
  countryStamps: 103,
  drawnStampsUnique: true,
  /** 우표 뽑기 — 젬 10, 하루 30번, 소재 158가지 (2026-10-18 서버 설정) */
  stampDrawGems: 10,
  stampDrawPerDay: 30,
  stampDrawSubjects: 158,
  /** 우표 가게 나라 우표 한 장 */
  countryStampGems: 15,
  /** 여권 도장: 한 나라 사람들과 합계 이만큼·각자 이만큼 */
  passport: { minTotal: 5, minEach: 2, titles: 20, continents: 6 },
  /** 편지 최대 글자 수 (2026-10-16 부터) */
  letterMaxChars: 100_000,
};

/**
 * 기념일 우표 — 서버 EventStampScheduler.EVENTS 와 같은 창(UTC, [start, end)). 기간 안에 편지를 한 통 보내면 무료로 한 장.
 * 안내 알림은 그 나라 현지 오전 10시(EventPushScheduler). 그림 우표(p_ee…)는 앱 2.0.18 이상에서 그림으로 보인다.
 */
export type HolidayStamp = {
  key: string;
  ko: string;
  en: string;
  /** UTC */
  start: string;
  end: string;
  artKo: string;
  artEn: string;
  /** 안내 알림을 받는 나라 — 없으면 전체 */
  countries?: string[];
};

export const HOLIDAY_STAMPS: HolidayStamp[] = [
  { key: 'g_10097a99', ko: '세계 우편의 날', en: 'World Post Day', start: '2026-10-08T12:00Z', end: '2026-10-16T12:00Z', artKo: '남색 바탕의 금빛 봉투', artEn: 'a gold envelope on navy' },
  { key: 'p_ee103126', ko: '할로윈', en: 'Halloween', start: '2026-10-24T12:00Z', end: '2026-11-01T12:00Z', artKo: '주황 달 아래 검은 고양이와 잭오랜턴', artEn: "a black cat beside a jack-o'-lantern under an orange moon" },
  { key: 'p_ee110826', ko: '디왈리', en: 'Diwali', start: '2026-11-03T12:00Z', end: '2026-11-08T12:00Z', artKo: '랑골리 위의 흙 등잔', artEn: 'clay oil lamps on a rangoli', countries: ['IN', 'SG', 'MY'] },
  { key: 'p_ee111126', ko: '빼빼로데이(11.11)', en: '11.11 (Pepero Day)', start: '2026-11-09T00:00Z', end: '2026-11-12T12:00Z', artKo: '리본으로 묶은 막대 과자', artEn: 'a bundle of ribboned biscuit sticks', countries: ['KR'] },
  { key: 'p_ee112126', ko: '세계 인사의 날', en: 'World Hello Day', start: '2026-11-18T12:00Z', end: '2026-11-22T00:00Z', artKo: '창밖으로 날아가는 날개 달린 봉투', artEn: 'a winged envelope flying out of a window' },
  { key: 'p_ee112626', ko: '추수감사절', en: 'Thanksgiving', start: '2026-11-22T12:00Z', end: '2026-11-28T12:00Z', artKo: '가을 수확 바구니', artEn: 'an autumn harvest basket', countries: ['US'] },
  { key: 'g_12255152', ko: '크리스마스', en: 'Christmas', start: '2026-12-17T12:00Z', end: '2026-12-26T12:00Z', artKo: '초록 바탕의 금빛 별', artEn: 'a gold star on green' },
  { key: 'p_ee010127', ko: '새해', en: 'New Year', start: '2026-12-27T12:00Z', end: '2027-01-04T12:00Z', artKo: '바다 위 첫 해돋이', artEn: 'the first sunrise over the sea' },
  { key: 'p_ee012327', ko: '손글씨의 날', en: 'Handwriting Day', start: '2027-01-19T12:00Z', end: '2027-01-25T12:00Z', artKo: '만년필과 잉크, 봉인된 편지', artEn: 'a fountain pen, ink and a sealed envelope' },
  { key: 'p_ee020627', ko: '설날', en: 'Lunar New Year', start: '2027-02-01T12:00Z', end: '2027-02-08T00:00Z', artKo: '매화와 붉은 등롱', artEn: 'plum blossoms and a red lantern', countries: ['KR', 'CN', 'TW', 'HK', 'VN', 'SG', 'MY'] },
  { key: 'g_02145020', ko: '밸런타인데이', en: "Valentine's Day", start: '2027-02-08T12:00Z', end: '2027-02-15T12:00Z', artKo: '분홍 바탕의 흰 하트', artEn: 'a white heart on pink' },
  { key: 'p_ee022227', ko: '고양이의 날', en: 'Cat Day', start: '2027-02-19T12:00Z', end: '2027-02-23T12:00Z', artKo: '창턱에서 잠든 고등어 고양이', artEn: 'a tabby cat asleep on a windowsill' },
  { key: 'p_ee031427', ko: '화이트데이', en: 'White Day', start: '2027-03-11T12:00Z', end: '2027-03-15T12:00Z', artKo: '흰 선물 상자', artEn: 'a white gift box', countries: ['KR', 'JP', 'TW', 'CN'] },
];

/** '2026-10-24T12:00Z' → 한국 시간 '10월 24일 21시' */
export const koKst = (utc: string) => {
  const d = new Date(new Date(utc).getTime() + 9 * 3600_000);
  return `${d.getUTCMonth() + 1}월 ${d.getUTCDate()}일 ${d.getUTCHours()}시`;
};
/** '2026-10-24T12:00Z' → 'Oct 24, 12:00 UTC' */
export const enUtc = (utc: string) => {
  const d = new Date(utc);
  const m = d.toLocaleDateString('en-US', { month: 'short', timeZone: 'UTC' });
  return `${m} ${d.getUTCDate()}, ${String(d.getUTCHours()).padStart(2, '0')}:00 UTC`;
};

/** 여권 칭호 20개 — 서버 Passport.kt TITLES · 앱 passport_bits.dart 이름·조건 (2026-10-18). [키, 한국어, 영어, 조건 한국어, 조건 영어, 분류, 등급] */
export const PASSPORT_TITLES: [string, string, string, string, string, string, string][] = [
  ['traveler', '새내기 여행자', 'Rookie Traveler', '나라 도장 1개', '1 country stamp', '여행', 'Bronze'],
  ['explorer', '편지 탐험가', 'Letter Explorer', '나라 도장 3개', '3 country stamps', '여행', 'Silver'],
  ['globetrotter', '세계의 펜팔', 'World Pen Pal', '나라 도장 5개', '5 country stamps', '여행', 'Silver'],
  ['around_world', '지구 한 바퀴', 'Around the World', '나라 도장 10개', '10 country stamps', '여행', 'Gold'],
  ['world_citizen', '세계 시민', 'World Citizen', '나라 도장 20개', '20 country stamps', '여행', 'Rare'],
  ['continents', '대륙을 잇는 사람', 'Continent Connector', '3개 대륙에서 도장', 'stamps on 3 continents', '여행', 'Silver'],
  ['six_continents', '여섯 대륙의 친구', 'Friend of Six Continents', '6개 대륙 모두에서 도장', 'stamps on all 6 continents', '여행', 'Rare'],
  ['pen_pal', '첫 펜팔', 'First Pen Pal', '서로 한 통 이상 주고받은 대화 1개', '1 conversation where both of you wrote', '우정', 'Bronze'],
  ['many_friends', '친구가 많은 사람', 'Friend to Many', '서로 주고받은 대화 5개', '5 such conversations', '우정', 'Silver'],
  ['old_friend', '오랜 펜팔', 'Old Friend', '한 대화에서 20통', '20 letters in one conversation', '우정', 'Gold'],
  ['lifelong', '평생 펜팔', 'Lifelong Pen Pal', '한 대화에서 50통', '50 letters in one conversation', '우정', 'Rare'],
  ['season_friend', '한 계절 친구', 'Friend for a Season', '한 사람과 30일 이상·6통 이상', 'one pen pal for 30+ days and 6+ letters', '우정', 'Gold'],
  ['busy_writer', '부지런한 편지꾼', 'Busy Letter Writer', '편지 10통 보내기', 'send 10 letters', '편지', 'Bronze'],
  ['master_writer', '편지 장인', 'Letter Master', '편지 50통 보내기', 'send 50 letters', '편지', 'Gold'],
  ['long_letter', '긴 편지 작가', 'Long-Letter Writer', '400자 이상 편지 5통', '5 letters of 400+ characters', '편지', 'Silver'],
  ['reply_fairy', '답장 요정', 'Reply Fairy', '답장 10통', '10 replies', '편지', 'Silver'],
  ['stamp_dandy', '우표 멋쟁이', 'Stamp Stylist', '서로 다른 우표 3종을 붙여 보내기', 'send letters with 3 different stamps', '우표', 'Bronze'],
  ['stamp_collector', '우표 수집가', 'Stamp Collector', '서로 다른 우표 10종 모으기', 'own 10 different stamps', '우표', 'Silver'],
  ['stamp_museum', '작은 우표 박물관', 'Little Stamp Museum', '서로 다른 우표 30종 모으기', 'own 30 different stamps', '우표', 'Gold'],
  ['holiday_collector', '기념일 수집가', 'Holiday Collector', '기념일 우표 3종', '3 different holiday stamps', '우표', 'Silver'],
];

/** 운영 DB 집계(운영자·QA·시험 계정 제외) — 여권·기념 우표 1차 데이터. 다시 뽑을 때 asOf 와 함께 고친다 */
export const PASSPORT_STATS = {
  asOf: '2026-10-18',
  stamps: 41,
  holders: 21,
  countries: 17,
  /** 도장이 가장 많이 찍힌 나라 [영어, 한국어, 개수] */
  top: [['China', '중국', 7], ['United States', '미국', 7], ['India', '인도', 4], ['Türkiye', '튀르키예', 3], ['Denmark', '덴마크', 3]] as [string, string, number][],
  /** 2026 세계 우편의 날(10/8~10/16 UTC) 기념 우표를 받은 사람 */
  worldPostDayStampHolders: 76,
};

/** 앱 화면·편지 번역 언어 — [앱 코드, 영어 이름, 한국어 이름], 앱 kAppLanguageCodes 순서. */
export const APP_LANGUAGES: [string, string, string][] = [
  ['ko', 'Korean', '한국어'], ['en', 'English', '영어'], ['ja', 'Japanese', '일본어'], ['zh', 'Chinese (Simplified)', '중국어(간체)'],
  ['es', 'Spanish', '스페인어'], ['fr', 'French', '프랑스어'], ['de', 'German', '독일어'], ['pt', 'Portuguese', '포르투갈어'],
  ['ar', 'Arabic', '아랍어'], ['hi', 'Hindi', '힌디어'], ['id', 'Indonesian', '인도네시아어'], ['it', 'Italian', '이탈리아어'],
  ['ru', 'Russian', '러시아어'], ['th', 'Thai', '태국어'], ['tr', 'Turkish', '튀르키예어'], ['vi', 'Vietnamese', '베트남어'],
  ['pl', 'Polish', '폴란드어'], ['nl', 'Dutch', '네덜란드어'], ['fil', 'Filipino', '필리핀어'], ['bn', 'Bengali', '벵골어'],
  ['ur', 'Urdu', '우르두어'], ['fa', 'Persian', '페르시아어'], ['uk', 'Ukrainian', '우크라이나어'], ['ms', 'Malay', '말레이어'],
  ['sw', 'Swahili', '스와힐리어'], ['ro', 'Romanian', '루마니아어'], ['el', 'Greek', '그리스어'], ['cs', 'Czech', '체코어'],
  ['ca', 'Catalan', '카탈루냐어'], ['da', 'Danish', '덴마크어'], ['fi', 'Finnish', '핀란드어'], ['sv', 'Swedish', '스웨덴어'],
  ['nb', 'Norwegian', '노르웨이어'], ['hu', 'Hungarian', '헝가리어'], ['hr', 'Croatian', '크로아티아어'], ['sk', 'Slovak', '슬로바키아어'],
  ['sl', 'Slovenian', '슬로베니아어'], ['bg', 'Bulgarian', '불가리아어'], ['sr', 'Serbian', '세르비아어'], ['lt', 'Lithuanian', '리투아니아어'],
  ['lv', 'Latvian', '라트비아어'], ['et', 'Estonian', '에스토니아어'], ['is', 'Icelandic', '아이슬란드어'], ['sq', 'Albanian', '알바니아어'],
  ['mk', 'Macedonian', '마케도니아어'], ['be', 'Belarusian', '벨라루스어'], ['eu', 'Basque', '바스크어'], ['gl', 'Galician', '갈리시아어'],
  ['he', 'Hebrew', '히브리어'], ['zh_TW', 'Chinese (Traditional)', '중국어(번체)'], ['af', 'Afrikaans', '아프리칸스어'], ['zu', 'Zulu', '줄루어'],
  ['ta', 'Tamil', '타밀어'], ['te', 'Telugu', '텔루구어'], ['kn', 'Kannada', '칸나다어'], ['ml', 'Malayalam', '말라얄람어'],
  ['mr', 'Marathi', '마라티어'], ['gu', 'Gujarati', '구자라트어'], ['pa', 'Punjabi', '펀자브어'], ['or', 'Odia', '오리야어'],
  ['ne', 'Nepali', '네팔어'], ['si', 'Sinhala', '싱할라어'], ['am', 'Amharic', '암하라어'], ['my', 'Burmese', '미얀마어'],
  ['km', 'Khmer', '크메르어'], ['lo', 'Lao', '라오어'], ['mn', 'Mongolian', '몽골어'], ['ka', 'Georgian', '조지아어'],
  ['hy', 'Armenian', '아르메니아어'], ['az', 'Azerbaijani', '아제르바이잔어'], ['kk', 'Kazakh', '카자흐어'], ['ky', 'Kyrgyz', '키르기스어'],
  ['uz', 'Uzbek', '우즈베크어'],
];

/** '2026-09-30' → '2026년 9월 30일' */
export const koDate = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return `${y}년 ${m}월 ${d}일`;
};

/** '2026-09-30' → 'September 30, 2026' */
export const enDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
