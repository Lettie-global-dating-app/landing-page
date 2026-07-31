export const en = {
  meta: {
    title: 'Lettie - Penpal Dating App | Make Global Friends Through Letters',
    description:
      'Write a letter, not a swipe. Lettie connects you with penpals around the world and translates every letter across 16 languages, so language never decides who you get to meet.',
    keywords: [
      'penpal app',
      'pen pal',
      'international pen pal',
      'penpal with translation',
      'language exchange',
      'global friends',
      'letter app',
      'slow dating',
    ],
  },
  nav: {
    features: 'Features',
    blog: 'Blog',
    guide: 'Guide',
    stories: 'Stories',
    faq: 'FAQ',
    download: 'Download',
  },
  hero: {
    badge: 'True connections start with letters',
    titleLine1: 'Connect with friends',
    titleHighlight: 'through letters',
    titleLine3: 'worldwide',
    subtitleA: 'Not based on photos or looks, but on',
    subtitleHighlight: 'hearts and thoughts',
    subtitleB: 'Experience',
    subtitleHighlight2: 'genuine communication',
    subtitleC: 'with Lettie.',
    appStore: 'App Store',
    googlePlay: 'Google Play',
    badges: {
      free: '✨ Free Download',
      platforms: '📱 iOS & Android',
      global: '🌍 Global Community',
    },
  },
  features: {
    heading: 'Special Features of Lettie',
    subheading:
      'Reinterpreting the analog sensibility of letter writing into a digital experience',
    translation: {
      title: 'Letters That Translate Themselves',
      body: 'Write in your own language. Every letter and reply translates across 16 languages, and you can read the original next to the translation.',
    },
    letters: {
      title: 'Letter Exchange System',
      body: 'Exchange heartfelt letters with people around the world. Deep conversations with the aesthetics of waiting, not instant chats.',
    },
    reveal: {
      title: 'Gradual Profile Reveal',
      body: "As you exchange letters, your friend's photo gradually comes into focus — connections that start with hearts, not looks.",
    },
    contact: {
      title: 'Safe Contact Exchange',
      body: 'Share contacts only after five letters, once you actually know each other.',
    },
  },
  audience: {
    heading: 'Perfect For These People',
    items: [
      'Those seeking global friends',
      'Those learning languages',
      'Those tired of swipe-based apps',
      'Those who prefer writing to small talk',
    ],
  },
  cta: {
    heading: 'Start Today',
    body: 'Your first letter is free. Write to someone on the other side of the world.',
    button: 'Download Lettie',
  },
  footer: {
    product: 'Product',
    resources: 'Resources',
    rights: 'All rights reserved.',
    privacy: 'Privacy Policy',
  },
};

/**
 * 사전의 형태를 정의하는 기준. 영어 사전에서 추론하되 `as const` 를 쓰지 않아
 * 다른 언어가 같은 구조의 다른 문자열을 넣을 수 있게 한다.
 */
export type Dictionary = typeof en;
