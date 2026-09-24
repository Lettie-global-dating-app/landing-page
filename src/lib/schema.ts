import { SITE_URL } from '@/i18n/config';

/**
 * 사이트 전역 구조화 데이터.
 *
 * 페이지마다 Organization 을 새로 선언하면 검색엔진·LLM 안에서 **엔티티가 분열된다**
 * — "Lettie" 가 여러 개의 서로 다른 조직으로 보인다. 그래서 조직은 한 번만 정의하고
 * (`ORG_ID`), 다른 스키마는 전부 `{'@id': ORG_ID}` 로 참조만 한다.
 *
 * sameAs 에는 **실제로 존재하는 공식 표면만** 넣는다. 없는 계정을 적으면
 * 엔티티 연결이 아니라 깨진 주장을 심는 것이다.
 */

export const ORG_ID = `${SITE_URL}/#organization`;
export const SITE_ID = `${SITE_URL}/#website`;
export const APP_ID = `${SITE_URL}/#app`;

const APP_STORE = 'https://apps.apple.com/app/id6746454876';
const PLAY_STORE = 'https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe';

/** 조직 — 사이트 전체에서 이 정의 하나만 쓴다. */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'Lettie',
  alternateName: ['레티', 'Lettie App'],
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/lettie-icon.png`,
  },
  description:
    'Lettie is a penpal app for writing letters to people in other countries, with every letter translated across 28 languages.',
  foundingDate: '2024',
  sameAs: [APP_STORE, PLAY_STORE, 'https://www.instagram.com/lettie_dating/', 'https://www.threads.com/@lettie_dating', 'https://www.producthunt.com/products/lettie-2'],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: 'ggprgrkjh@naver.com',
    availableLanguage: ['Korean', 'English'],
  },
};

/** 웹사이트 — publisher 는 조직을 참조만 한다. */
export function websiteSchema(locale: 'ko' | 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': SITE_ID,
    name: 'Lettie',
    url: SITE_URL,
    description:
      locale === 'ko'
        ? '편지가 지구본 위를 날아가 거리만큼 걸려 도착하는 글로벌 펜팔 앱'
        : 'Penpal app connecting people worldwide through letters translated across 28 languages',
    publisher: { '@id': ORG_ID },
    inLanguage: ['ko', 'en', 'es', 'pt', 'ja', 'fr', 'zh', 'de', 'hi', 'id', 'ru', 'it'],
  };
}

/**
 * 앱.
 *
 * `aggregateRating` 은 넣지 않는다. 실측 설치 수를 반영하지 않은 평점은
 * 구글 리치 결과 스팸 정책 위반이고, AI 인용 신뢰도 함께 잃는다.
 */
export function mobileAppSchema(locale: 'ko' | 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    '@id': APP_ID,
    name: 'Lettie',
    alternateName: ['레티', 'Lettie - Pen Pal App'],
    applicationCategory: 'SocialNetworkingApplication',
    operatingSystem: ['iOS', 'Android'],
    description:
      locale === 'ko'
        ? '편지가 지구본 위를 실제로 날아가 거리만큼 시간이 걸려 도착합니다. 남들이 띄운 편지를 주워 읽고 답장하며, 28개 언어로 번역됩니다. 주고받은 나라마다 우표가 모이고, 사진 대신 픽셀 캐릭터로 시작합니다.'
        : 'Letters fly across a globe and take real time to arrive — hours or a day, depending on distance. Pick up letters other people released, read them translated into any of 28 languages, and collect a stamp for every country you reach. Profiles start as pixel characters instead of photos.',
    url: SITE_URL,
    downloadUrl: [APP_STORE, PLAY_STORE],
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: locale === 'ko' ? 'KRW' : 'USD',
      category: 'Free',
    },
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    screenshot: [
      `${SITE_URL}/v2/app-sky.png`,
      `${SITE_URL}/v2/app-discover.png`,
      `${SITE_URL}/v2/app-letter.png`,
      `${SITE_URL}/v2/app-post-office.png`,
      `${SITE_URL}/v2/app-character.png`,
    ],
    featureList:
      locale === 'ko'
        ? [
            '지구본 위를 날아가는 편지 — 거리만큼 걸려서 도착',
            '남들이 띄운 편지를 주워 읽고 답장하는 발견',
            '28개 언어 자동 번역 (원문과 나란히 보기)',
            '사진 없이 캐릭터로 시작하는 프로필',
            '나라마다 모이는 우표와 지구본 색칠',
            '글로 적으면 그려 주는 나만의 캐릭터',
            '하루 몇 장씩 오는 소개 카드',
            'iOS · Android 지원',
          ]
        : [
            'Letters that fly across a globe and take real time to arrive',
            'Discover — pick up letters other people released',
            'Automatic translation across 28 languages, shown beside the original',
            'Profiles that start with a character instead of a photograph',
            'A stamp for every country you reach, painting the globe',
            'Your own character, drawn from a written description',
            'A few introduction cards a day — no swiping',
            'Available on iOS and Android',
          ],
  };
}

/**
 * JSON-LD 를 하나의 @graph 로 묶어 내보낸다. 엔티티 참조가 한 문서 안에서 해결된다.
 * **루트 레이아웃에서 한 번만** 내보낸다. /en 레이아웃이 한 번 더 내보내 같은 @id 에 설명이 두 벌이던 것을
 * 2026-09-24 정리했다. 다른 페이지는 APP_ID·ORG_ID 를 참조만 한다.
 */
export function siteGraph(locale: 'ko' | 'en') {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { ...organizationSchema, '@context': undefined },
      { ...websiteSchema(locale), '@context': undefined },
      { ...mobileAppSchema(locale), '@context': undefined },
    ],
  };
}
