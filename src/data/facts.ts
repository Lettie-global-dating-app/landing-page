/**
 * 제품 사실의 정본 — 홈 통계·구조화 데이터·llms.txt·가이드가 이 값을 읽는다.
 * 앱·서버가 바뀌면 여기부터 고치고, 문장 속 옛 표현은 `npm run check:facts` 가 잡는다(빌드 전에도 돈다).
 *
 * - 언어: 앱 lib/v2/l10n/l.dart 의 kAppLanguageCodes (2.0.10 부터 73개). 편지는 읽는 사람의 앱 언어로 번역된다.
 *   문장에는 스토어 설명과 같은 "70개 넘는 언어 / 70+ languages" 를 쓴다 — 언어가 늘어도 틀리지 않는다.
 * - 발견: 서버 lettie.discover batch-size 3 · batch-hours 24 — 2026-09-21 부터 무료 봉투는 하루 한 번 3장 (그 전엔 8시간 주기).
 * - 배달: 서버 DeliveryTimeService — 가장 짧은 구간이 같은 나라 1~2시간이라 최소 1시간, 최대 24시간.
 * - 띄우기: 무료 하루 1통 (lettie.letters.per-day). 답장은 한도와 무관.
 * - 발견 순서: 2026-09-27 부터 최신순 (그 전엔 작성자 활동·관심사 점수). Plus 작성자 편지만 하루 앞당긴다.
 * - 우표: 2.0.18(2026-10-04) 부터 뽑을 때마다 Gemini 가 새로 그린다(같은 우표 없음). 우표 가게에 나라 우표 103장(서버 CountryStamps.SHOP).
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
