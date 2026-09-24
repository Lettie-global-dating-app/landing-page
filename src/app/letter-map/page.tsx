import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Globe } from 'lucide-react';
import { koEnAlternates } from '@/i18n/config';
import GuideArticle, { GuideSection, GuideTable } from '@/components/GuideArticle';
import { COUNTRY_KO as C, LETTER_MAP as D } from '@/data/letterMap';

const URL = 'https://lettie-dating.com/letter-map';
const TITLE = `레티 편지 지도: ${D.countries}개국 사이 편지 ${D.letters}통`;
const DESC = `2025년 6월부터 2026년 9월까지 레티에서 사람끼리 주고받은 편지 ${D.letters}통이 ${D.countries}개 나라 사이를 어떻게 오갔는지, 가장 많이 오간 경로와 집계 방법.`;

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Lettie` },
  description: DESC,
  keywords: ['펜팔 통계', '펜팔 나라', '레티 편지 지도', '펜팔 앱 데이터'],
  alternates: { canonical: URL, languages: koEnAlternates('/letter-map') },
  openGraph: { title: TITLE, description: DESC, url: URL, siteName: 'Lettie', locale: 'ko_KR', type: 'article',
    images: [{ url: `https://lettie-dating.com${D.image}`, width: 2400, height: 1500 }] },
};

const FAQS = [
  { q: '레티에서 사람들이 주고받은 편지는 몇 통인가요?', a: `2025년 6월부터 2026년 9월까지 사람끼리 주고받은 편지는 ${D.letters}통입니다(${D.asOf} 집계). 앱의 AI 캐릭터가 쓴 편지와 개발자 테스트 계정은 뺐습니다.` },
  { q: '레티에서 편지를 가장 많이 쓰는 나라는 어디인가요?', a: `${D.asOf} 기준 미국(보내거나 받은 편지 ${D.byCountry[0][1]}통), 한국(${D.byCountry[1][1]}통), 튀르키예(${D.byCountry[2][1]}통) 순입니다.` },
  { q: '가장 많이 오간 경로는 어디인가요?', a: `${D.asOf} 기준 아랍에미리트–튀르키예와 한국–미국이 양방향 합쳐 각각 17통으로 가장 많습니다.` },
];

export default function LetterMapPage() {
  return (
    <GuideArticle
      locale="ko"
      path="/letter-map"
      parent={null}
      title="레티 편지 지도"
      subtitle={`${D.countries}개 나라 사람들이 주고받은 편지 ${D.letters}통, 2025년 6월 ~ 2026년 9월.`}
      answer={<><strong>2025년 6월부터 2026년 9월까지 레티에서 사람끼리 주고받은 편지는 {D.countries}개 나라 사이 {D.letters}통입니다.</strong> 나라와 나라 사이 {D.international}통, 같은 나라 안 {D.domestic}통이며, {D.asOf}에 앱 데이터베이스에서 집계했습니다.</>}
      icon={<Globe className="w-8 h-8" />}
      accent="from-blue-500 to-indigo-500"
      updated={D.asOf}
      published={D.asOf}
      faqs={FAQS}
    >
      <Image src={D.image} alt={`${D.countries}개국 사이 편지 ${D.letters}통의 경로 지도`} width={2400} height={1500} className="w-full h-auto rounded-2xl" />
      <GuideSection title="가장 많이 오간 경로">
        <GuideTable head={['경로', '편지 (양방향 합)']} rows={D.routes.map(([a, b, n]) => [`${C[a] ?? a} – ${C[b] ?? b}`, `${n}통`])} />
      </GuideSection>
      <GuideSection title="나라별 편지">
        <GuideTable head={['나라', '보내거나 받은 편지']} rows={D.byCountry.map(([c, n]) => [C[c] ?? c, `${n}통`])} />
        <p>같은 나라 안에서 오간 편지: {D.within.map(([c, n]) => `${C[c] ?? c} ${n}통`).join(', ')}.</p>
      </GuideSection>
      <GuideSection title="집계 방법">
        <p>
          출처는 레티 데이터베이스이며 {D.asOf}에 조회했습니다. 사람이 사람에게 보낸 편지만 보낸 사람과 받는 사람의 나라별로 셌습니다. 앱의 AI 캐릭터가 쓴 편지와
          개발자 테스트 계정은 뺐기 때문에 숫자가 작습니다. 지도의 선은 나라 중심점 사이의 대권 경로입니다. 커뮤니티가 커지면 이 페이지를 갱신합니다.
        </p>
        <p>
          각 편지가 걸린 시간은 거리에 따라 다릅니다. <Link href="/blog/letter-delivery-time-by-distance" className="text-blue-600 underline">도시별 편지 배달 시간표</Link>를 보세요.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}
