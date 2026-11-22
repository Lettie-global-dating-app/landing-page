import Image from 'next/image'
import Link from 'next/link'
import { STRINGS, characterSrc, countryName, fill, stampSrc } from '@/lib/letterShare'
import { appStoreLink, playLink } from '@/lib/storeLinks'
import type { SiteLetter } from '@/lib/siteLetters'

/**
 * 동의 편지 모음 (/letters · /en/letters, 2026-11-23 대표 「그 공개 허가한 편지들 랜딩페이지에도 싣으세요」).
 * 쓴 사람이 「레티 인스타그램·홈페이지에 실려도 좋아요」를 고른 편지만, 이름은 빼고 글은 고치지 않고 싣는다.
 * 다른 언어로 쓴 편지에는 레티 번역을 함께 둔다(번역이라고 표시). 목록·거름은 src/lib/siteLetters.ts.
 */
const COPY = {
  ko: {
    eyebrow: '하늘 우편 · 진짜 편지',
    title: '레티 하늘의 진짜 편지',
    intro:
      '레티에서 사람들이 모르는 누군가에게 띄운 편지예요. 쓴 사람이 「레티 인스타그램·홈페이지에 실려도 좋아요」를 골라 둔 편지만, 이름은 빼고 쓴 그대로 실었어요. 다른 언어로 쓴 편지에는 레티 번역을 함께 붙였어요.',
    stats: '편지 %n통 · %c개 나라',
    from: (place: string) => `${place}에서 온 편지`,
    tr: '한국어 번역 · 레티 번역',
    photo: '편지에 붙은 사진',
    read: '읽고 답장하기',
    howTitle: '내 편지도 여기 실리려면',
    how: ['레티를 내려받아요.', '세계 어딘가의 모르는 사람에게 편지를 써요.', '띄우기 전에 「레티 인스타그램·홈페이지에 실려도 좋아요」를 체크해요. 이름은 빼고 실려요.'],
    empty: '지금은 보여 드릴 편지가 없어요. 잠시 뒤에 다시 와 주세요.',
    home: '홈',
    stats2: '편지 통계',
    map: '편지 지도',
    faq: '자주 묻는 질문',
  },
  en: {
    eyebrow: 'AIR MAIL · REAL LETTERS',
    title: "Real letters from Lettie's sky",
    intro:
      "These are letters people on Lettie sent to a stranger somewhere in the world. We only show letters whose writers ticked “OK to feature on Lettie's Instagram & website”, word for word and without their names. Letters written in another language come with Lettie's own translation.",
    stats: '%n letters · %c countries',
    from: (place: string) => `A letter from ${place}`,
    tr: 'English translation · by Lettie',
    photo: 'Photo sent with the letter',
    read: 'Read & write back',
    howTitle: 'How to get your letter here',
    how: ['Download Lettie.', 'Write a letter to a stranger, anywhere in the world.', "Before you send it, tick “OK to feature on Lettie's Instagram & website”. We share it without your name."],
    empty: 'There are no letters to show right now. Please come back a little later.',
    home: 'Home',
    stats2: 'Letter statistics',
    map: 'Letter map',
    faq: 'FAQ',
  },
} as const

// 영어 나라 이름 앞에 the 가 붙는 곳 (Intl 이름에는 없다)
const THE = new Set(['US', 'GB', 'AE', 'PH', 'NL', 'BS', 'GM', 'DO', 'CF', 'CD', 'CG', 'KM', 'MV', 'SC', 'SB', 'MH', 'CZ'])

function placeOf(code: string | null, lang: 'ko' | 'en'): string | null {
  const name = countryName(code, lang)
  if (!name) return null
  return lang === 'en' && code && THE.has(code.toUpperCase()) ? `the ${name}` : name
}

function dateOf(iso: string | null, lang: 'ko' | 'en'): string | null {
  const d = iso?.slice(0, 10)
  if (!d || !/^\d{4}-\d{2}-\d{2}$/.test(d)) return null
  return new Intl.DateTimeFormat(lang === 'ko' ? 'ko-KR' : 'en-US', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(`${d}T00:00:00Z`))
}

export default function LettersPage({ lang, letters }: { lang: 'ko' | 'en'; letters: SiteLetter[] }) {
  const c = COPY[lang]
  const s = STRINGS[lang] ?? STRINGS.en
  const home = lang === 'ko' ? '/' : '/en'
  const base = lang === 'ko' ? '' : '/en'
  const countries = new Set(letters.map((l) => l.countryCode).filter(Boolean)).size

  return (
    // 한국어는 어절 단위로 줄을 바꾼다(「15\n일」처럼 끊기지 않게). 중국어·일본어 편지에는 걸지 않는다 — 띄어쓰기가 없어 줄이 안 바뀐다
    <div className={`night min-h-screen text-paper ${lang === 'ko' ? 'break-keep' : ''}`} lang={lang}>
      <header className="container mx-auto px-4 py-5">
        <nav className="flex items-center justify-between gap-4">
          <Link href={home} className="flex items-center gap-3 shrink-0">
            <Image src="/lettie-icon.png" alt="Lettie" width={40} height={40} className="w-10 h-10 rounded-2xl" priority />
            <span className="text-2xl font-bold tracking-tight">Lettie</span>
          </Link>
          {/* 오른쪽 위는 사이트 공통 언어 버튼(LanguageSwitcher, fixed)이 차지한다 — 스토어 버튼은 아래 안내 칸에 */}
        </nav>
      </header>

      <main className="container mx-auto px-4 pb-20">
        <nav aria-label="Breadcrumb" className="max-w-3xl mx-auto pt-6 text-sm text-ink3">
          <Link href={home} className="hover:text-paper">{c.home}</Link>
          <span aria-hidden className="mx-2">/</span>
          <span className="text-ink2">{c.title}</span>
        </nav>

        <div className="max-w-3xl mx-auto text-center pt-10 pb-14">
          <p className="font-mono text-[11px] tracking-[0.3em] text-sand mb-4">{c.eyebrow}</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance">{c.title}</h1>
          <p className="mt-6 text-lg text-ink2 leading-relaxed text-pretty">{c.intro}</p>
          {letters.length > 0 && (
            <p className="mt-5 font-mono text-sm text-sand">{fill(c.stats, { n: String(letters.length), c: String(countries) })}</p>
          )}
        </div>

        {letters.length === 0 ? (
          <p className="max-w-3xl mx-auto text-center text-ink2">{c.empty}</p>
        ) : (
          <ol className="max-w-3xl mx-auto space-y-10">
            {letters.map((l, i) => {
              const place = placeOf(l.countryCode, lang)
              const who = place ? fill(s.anonName, { place }) : 'Lettie'
              const date = dateOf(l.publishedAt, lang)
              const tr = l.tr[lang]
              return (
                <li key={l.token}>
                  <article className="paper-card relative p-6 sm:p-8 md:p-10">
                    {l.stamp && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={stampSrc(l.stamp)} alt="" width={60} height={75} loading="lazy" className="absolute top-6 right-6 w-[60px] h-auto [image-rendering:pixelated]" style={{ transform: `rotate(${i % 2 ? -4 : 4}deg)` }} />
                    )}
                    <div className="flex items-center gap-3 pr-20">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={characterSrc(l.characterKey ?? 'lettie_f1', l.characterImageUrl)} alt="" width={48} height={48} loading="lazy" className="w-12 h-12 rounded-xl bg-sky2 [image-rendering:pixelated]" />
                      <div>
                        <h2 className="font-bold text-paperInk text-lg leading-tight">{place ? c.from(place) : who}</h2>
                        <p className="text-sm text-paperInk2">{who}{date ? ` · ${date}` : ''}</p>
                      </div>
                    </div>

                    <div lang={l.lang ?? undefined} className={l.lang === 'ko' || (!l.lang && lang === 'ko') ? '' : '[word-break:normal]'}>
                      {l.prompt && <p className="mt-6 font-mono text-[12px] tracking-[0.12em] text-paperInk2">{l.prompt}</p>}
                      <p className="mt-5 text-paperInk text-[17px] leading-relaxed whitespace-pre-line break-words">{l.body}</p>
                    </div>

                    {l.imageUrl && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={l.imageUrl} alt={c.photo} loading="lazy" className="mt-6 w-full max-h-[560px] object-cover rounded-md" />
                    )}

                    {tr && (
                      <div lang={lang} className="mt-7 border-t border-paperInk/15 pt-5">
                        <p className="font-mono text-[11px] tracking-[0.15em] text-paperInk2 mb-3">{c.tr}</p>
                        {tr.prompt && <p className="font-mono text-[12px] text-paperInk2 mb-2">{tr.prompt}</p>}
                        <p className="text-paperInk/85 leading-relaxed whitespace-pre-line break-words">{tr.body}</p>
                      </div>
                    )}

                    <a href={`/open/letter/${l.token}`} className="mt-7 inline-flex items-center gap-1 font-semibold text-coral hover:gap-2 transition-all">
                      {c.read} <span aria-hidden>→</span>
                    </a>
                  </article>
                </li>
              )
            })}
          </ol>
        )}

        <section className="max-w-3xl mx-auto mt-20 rounded-3xl border border-line bg-sky2/40 p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{c.howTitle}</h2>
          <ol className="mt-6 space-y-3 text-ink2 list-decimal ps-5">
            {c.how.map((h) => <li key={h} className="leading-relaxed">{h}</li>)}
          </ol>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href={appStoreLink('landing')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-2xl bg-paper text-sky1 font-semibold px-6 py-3 hover:-translate-y-0.5 transition-transform">App Store</a>
            <a href={playLink('landing')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-2xl border border-line bg-sky2/60 text-paper font-semibold px-6 py-3 hover:bg-sky2 transition-colors">Google Play</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line/60 py-10 text-sm text-ink2">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <Link href={home} className="hover:text-paper">{c.home}</Link>
          <Link href={`${base}/letter-stats`} className="hover:text-paper">{c.stats2}</Link>
          <Link href={`${base}/letter-map`} className="hover:text-paper">{c.map}</Link>
          <Link href={`${base}/faq`} className="hover:text-paper">{c.faq}</Link>
          <span className="text-ink3">© 2026 Lettie</span>
        </div>
      </footer>
    </div>
  )
}
