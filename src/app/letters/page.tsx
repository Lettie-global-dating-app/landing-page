import type { Metadata } from 'next';
import { koEnAlternates } from '@/i18n/config';
import LettersPage from '@/components/LettersPage';
import { fetchSiteLetters } from '@/lib/siteLetters';

// 동의 편지 모음 (2026-11-23). 목록은 매일 바뀌어 10분마다 다시 그린다.
export const revalidate = 600;

const URL = 'https://lettie-dating.com/letters';
const TITLE = '진짜 펜팔 편지 모음: 낯선 사람에게 띄운 편지 | Lettie';
const DESC = '레티에서 모르는 누군가에게 띄운 진짜 편지를, 쓴 사람이 실어도 좋다고 한 것만 이름을 빼고 모았어요. 원문 그대로, 다른 언어 편지는 레티 번역과 함께.';

export async function generateMetadata(): Promise<Metadata> {
  const letters = await fetchSiteLetters();
  return {
    title: { absolute: TITLE },
    description: DESC,
    alternates: { canonical: URL, languages: koEnAlternates('/letters') },
    // 목록을 못 받은 때(빈 쪽)는 검색에 내보내지 않는다
    ...(letters.length ? {} : { robots: { index: false, follow: true } }),
    openGraph: { title: TITLE, description: DESC, url: URL, siteName: 'Lettie', locale: 'ko_KR', type: 'website', images: ['/og/ko.png'] },
  };
}

export default async function Page() {
  return <LettersPage lang="ko" letters={await fetchSiteLetters()} />;
}
