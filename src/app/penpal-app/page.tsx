import Link from 'next/link';
import { Metadata } from 'next';
import { Mail } from 'lucide-react';
import { koEnAlternates } from '@/i18n/config';
import { APP_ID, SITE_ID } from '@/lib/schema';
import GuideArticle, { GuideSection, GuideTable, GuideCallout } from '@/components/GuideArticle';

/**
 * "펜팔 앱 / 펜팔 어플 / 펜팔 어플 추천" 질의의 랜딩 (2026-09-24 재작성).
 * 숫자는 운영 DB 기준일을 붙여서만 쓴다. 배달 시간은 서버 DeliveryTimeService 의 거리 구간 그대로.
 */
const UPDATED = '2026-09-24';
const URL = 'https://lettie-dating.com/penpal-app';
const APP_STORE = 'https://apps.apple.com/app/id6746454876';
const PLAY = 'https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe';

const TITLE = '펜팔 앱 무료 다운로드: iOS·안드로이드 | Lettie';
const DESC = 'Lettie는 무료 펜팔 앱입니다. 편지가 두 도시의 실제 거리만큼 1~24시간 걸려 도착하고, 28개 언어로 번역돼 외국인과도 편지를 주고받습니다.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  keywords: ['펜팔 앱', '펜팔 어플', '펜팔 어플 추천', '펜팔앱', '외국인 펜팔', '번역 펜팔 앱'],
  alternates: { canonical: URL, languages: koEnAlternates('/penpal-app') },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: URL,
    siteName: 'Lettie',
    locale: 'ko_KR',
    type: 'website',
    images: [{ url: 'https://lettie-dating.com/og/ko.png', width: 1200, height: 630 }],
  },
};

const FAQS = [
  {
    q: 'Lettie 펜팔 앱은 무료인가요?',
    a: '네. 편지 쓰기·읽기·답장, 번역, 기본 캐릭터 16종은 iOS와 안드로이드 모두 무료입니다. 젬과 Lettie Plus 구독으로 하루에 띄우는 편지 늘리기, 한 사람과 무제한 대화, 우표 뽑기, 나만의 캐릭터 같은 부가 기능을 쓸 수 있습니다.',
  },
  {
    q: 'Lettie는 어디서 다운로드하나요?',
    a: '아이폰은 앱스토어, 안드로이드는 구글 플레이에서 "Lettie" 또는 "레티"로 검색하거나 이 페이지의 버튼을 누르면 됩니다.',
  },
  {
    q: '편지는 얼마나 걸려 도착하나요?',
    a: '두 나라 사이 실제 거리로 정해집니다. 같은 나라 1~2시간, 3,000km 미만 3~6시간, 8,000km 미만 6~12시간, 그보다 멀면 12~24시간입니다.',
  },
  {
    q: '외국어를 못해도 펜팔을 할 수 있나요?',
    a: '할 수 있습니다. 모든 편지에 번역 버튼이 있고 28개 언어를 지원하며, 원문이 번역 옆에 그대로 남습니다. 한국어로 쓰면 상대는 자기 언어로 읽습니다.',
  },
  {
    q: 'Lettie를 쓰는 사람은 얼마나 되나요?',
    a: '작은 앱입니다. 2026년 9월 24일 기준 77개 나라에서 798명이 가입했고, 서울의 1인 개발자가 만듭니다.',
  },
  {
    q: 'Slowly와 무엇이 다른가요?',
    a: '둘 다 거리만큼 걸려 도착하는 편지 앱입니다. Lettie는 남이 띄운 편지를 주워 답장하는 발견, 앱 안의 무료 번역(28개 언어), 글로 적으면 그려 주는 픽셀 캐릭터가 다릅니다.',
  },
];

function StoreButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a href={APP_STORE} className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white hover:bg-gray-800">
        App Store에서 받기
      </a>
      <a href={PLAY} className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-900 hover:bg-gray-50">
        Google Play에서 받기
      </a>
    </div>
  );
}

export default function PenpalAppPage() {
  // 앱 엔티티는 루트 레이아웃의 @graph 가 한 번만 선언한다. 이 페이지는 그 앱에 관한 페이지다.
  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${URL}#webpage`,
    url: URL,
    inLanguage: 'ko',
    isPartOf: { '@id': SITE_ID },
    about: { '@id': APP_ID },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <GuideArticle
        locale="ko"
        path="/penpal-app"
        parent={null}
        title="Lettie: 아이폰·안드로이드 무료 펜팔 앱"
        subtitle="다른 나라 사람에게 내 말로 편지를 씁니다."
        answer={
          <>
            <strong>Lettie는 아이폰과 안드로이드에서 쓰는 무료 펜팔 앱입니다.</strong> 편지는 두 도시의 실제 거리만큼 걸려 도착하고(같은 나라 1~2시간,
            지구 반대편 최대 하루), 버튼 하나로 28개 언어로 번역됩니다.
          </>
        }
        cta={<StoreButtons />}
        icon={<Mail className="w-8 h-8" />}
        accent="from-blue-500 to-indigo-500"
        updated={UPDATED}
        published="2025-06-11"
        faqs={FAQS}
      >
        <GuideSection title="앱에서 할 수 있는 것">
          <GuideTable
            head={['기능', '하는 일']}
            rows={[
              ['거리만큼 걸리는 편지', '편지가 지구본 위를 날아가 두 도시의 실제 거리만큼 30분~24시간 뒤에 도착합니다.'],
              ['발견', '남이 하늘에 띄운 편지를 주워 읽고, 마음에 드는 편지에 답장합니다.'],
              ['번역', '모든 편지에 번역 버튼, 28개 언어, 무료, 원문과 나란히 보기.'],
              ['프로필', '사진 대신 픽셀 캐릭터(기본 16종 무료)로 시작합니다. 생김새를 글로 적으면 그려 줍니다.'],
              ['우표', '편지가 닿은 나라마다 우표가 모이고 지구본이 칠해집니다.'],
              ['소개', '하루 몇 장의 소개 카드. 스와이프도 점수도 없습니다.'],
            ]}
          />
        </GuideSection>

        <GuideSection title="편지가 도착하는 시간">
          <p>
            배달 시간은 두 나라 사이 거리로 정해집니다. {UPDATED} 기준 앱이 쓰는 구간입니다. 도시별 예시는{' '}
            <Link href="/blog/letter-delivery-time-by-distance" className="text-blue-600 underline">거리별 편지 배달 시간표</Link>에 있습니다.
          </p>
          <GuideTable
            head={['거리', '배달 시간']}
            rows={[
              ['같은 나라', '1~2시간'],
              ['3,000km 미만', '3~6시간'],
              ['3,000~8,000km', '6~12시간'],
              ['8,000km 이상', '12~24시간'],
            ]}
          />
        </GuideSection>

        <GuideSection title="무료와 선택 기능">
          <GuideTable
            head={['무료', '선택 (젬 또는 Lettie Plus)']}
            rows={[
              ['편지 쓰기·읽기·답장', '하루에 띄우는 편지 늘리기'],
              ['모든 편지 28개 언어 번역', '한 사람과 무제한 대화'],
              ['기본 픽셀 캐릭터 16종', '글로 적으면 그려 주는 나만의 캐릭터'],
              ['발견: 8시간마다 새 봉투', '우표 뽑기, 봉투 더 받기'],
            ]}
          />
          <GuideCallout title="규모를 솔직하게">
            Lettie는 작은 커뮤니티입니다. 2026년 9월 24일 기준 77개 나라 798명입니다. 답장이 느릴 수 있는데, 그것도 이 앱의 방식입니다.
          </GuideCallout>
        </GuideSection>

        <GuideSection title="다른 펜팔 앱과 비교">
          <p>
            어떤 앱이 맞을지 고민이라면 <Link href="/blog/lettie-vs-slowly" className="text-blue-600 underline">Lettie와 Slowly 비교</Link>와{' '}
            <Link href="/blog/best-penpal-apps-2026" className="text-blue-600 underline">2026 펜팔 앱 추천</Link>을 보세요. Lettie가 약한 부분도 같이 적었습니다.
          </p>
        </GuideSection>
      </GuideArticle>
    </>
  );
}
