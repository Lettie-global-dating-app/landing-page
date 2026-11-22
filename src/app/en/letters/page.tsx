import type { Metadata } from 'next';
import { koEnAlternates } from '@/i18n/config';
import LettersPage from '@/components/LettersPage';
import { fetchSiteLetters } from '@/lib/siteLetters';

// Letters shared with the writer's permission (2026-11-23). The list changes daily, so the page is rebuilt every 10 minutes.
export const revalidate = 600;

const URL = 'https://lettie-dating.com/en/letters';
const TITLE = 'Real Pen Pal Letters from Around the World | Lettie';
const DESC = "Real letters people on Lettie wrote to strangers, shared word for word with permission and without names, with Lettie's translation for other languages.";

export async function generateMetadata(): Promise<Metadata> {
  const letters = await fetchSiteLetters();
  return {
    title: { absolute: TITLE },
    description: DESC,
    alternates: { canonical: URL, languages: koEnAlternates('/letters') },
    ...(letters.length ? {} : { robots: { index: false, follow: true } }),
    openGraph: { title: TITLE, description: DESC, url: URL, siteName: 'Lettie', locale: 'en_US', type: 'website', images: ['/og/en.png'] },
  };
}

export default async function Page() {
  return <LettersPage lang="en" letters={await fetchSiteLetters()} />;
}
