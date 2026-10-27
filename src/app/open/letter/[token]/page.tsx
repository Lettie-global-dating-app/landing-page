import type { Metadata } from 'next';
import { headers } from 'next/headers';
import {
  STRINGS,
  countryCenter,
  countryName,
  fetchSharedLetter,
  fill,
  uiLangOf,
  viewerLangFrom,
} from '@/lib/letterShare';
import LetterExperience from './LetterExperience';

/**
 * 웹으로 공유한 편지 (2026-10-27). 앱이 있으면 이 주소(앱 링크)가 앱을 열고, 없으면 여기서 봉투를 열어 읽는다.
 * 화면 언어는 보는 사람의 브라우저 언어, 미리보기(OG)는 공유한 사람의 앱 언어 — 카카오톡·메신저 봇은 언어를 안 보낸다.
 */
type Params = { params: Promise<{ token: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { token } = await params;
  const letter = await fetchSharedLetter(token);
  const lang = uiLangOf(letter?.lang ?? null);
  const s = STRINGS[lang];
  const base: Metadata = {
    robots: { index: false, follow: false },
    // 사파리 위쪽 앱 배너: 앱이 있으면 「열기」가 이 편지 주소를 앱에 넘긴다(같은 도메인 안 링크는 유니버설 링크가 안 열린다)
    itunes: { appId: '6746454876', appArgument: `https://lettie-dating.com/open/letter/${token}` },
  };
  if (!letter) return { ...base, title: { absolute: 'Lettie' } };
  const name = letter.author.nickname || 'Lettie';
  const place = countryName(letter.author.countryCode, lang) ?? letter.author.city ?? '';
  const title = fill(s.ogTitle, { name });
  const description = letter.prompt ? fill(s.ogDesc, { prompt: letter.prompt }) : fill(s.ogDescNoPrompt, { place });
  return {
    ...base,
    title: { absolute: title },
    description,
    openGraph: { type: 'article', title, description, siteName: 'Lettie', url: `https://lettie-dating.com/open/letter/${token}` },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default async function SharedLetterPage({ params }: Params) {
  const { token } = await params;
  const [letter, h] = await Promise.all([fetchSharedLetter(token), headers()]);
  const viewerLang = viewerLangFrom(h.get('accept-language')) ?? letter?.lang ?? 'en';
  const ui = uiLangOf(viewerLang);
  const ua = h.get('user-agent') ?? '';
  const platform = /iPhone|iPad|iPod/i.test(ua) ? 'ios' : /Android/i.test(ua) ? 'android' : 'other';
  return (
    <LetterExperience
      letter={letter}
      token={token}
      viewerLang={viewerLang}
      ui={ui}
      strings={STRINGS[ui]}
      place={letter ? countryName(letter.author.countryCode, viewerLang) ?? letter.author.city : null}
      center={countryCenter(letter?.author.countryCode ?? null)}
      platform={platform}
    />
  );
}
