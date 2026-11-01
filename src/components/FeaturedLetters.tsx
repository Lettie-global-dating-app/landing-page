import { STRINGS, characterSrc, countryName, fill, stampSrc } from '@/lib/letterShare'
import { FEATURED_COPY, type FeaturedLetter } from '@/lib/featuredLetters'

/**
 * 홈의 「레티 하늘에 떠 있는 편지」 (2026-11-01). 실제로 띄운 편지를 앱과 같은 종이 카드로 — 이름 대신 「나라의 펜팔」,
 * 그 사람이 붙인 우표, 캐릭터, 글 앞부분, 사진. 누르면 웹 편지 페이지에서 봉투를 열어 읽고 앱으로 답장한다.
 * 글은 쓴 사람의 말 그대로 둔다(번역은 편지 페이지에서).
 */
export default function FeaturedLetters({ letters, lang }: { letters: FeaturedLetter[]; lang: string }) {
  if (!letters.length) return null
  const c = FEATURED_COPY[lang] ?? FEATURED_COPY.en
  const s = STRINGS[lang] ?? STRINGS.en
  return (
    <section id="letters" className="py-20 md:py-24 border-t border-line/60 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-mono text-[11px] tracking-[0.3em] text-sand mb-4">{c.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">{c.title}</h2>
          <p className="text-lg text-ink2 max-w-2xl mx-auto text-pretty">{c.sub}</p>
        </div>
        {/* 편지가 몇 통 안 될 때도 가운데로 모이고, 카드는 글 길이만큼만 (밑이 비지 않게) */}
        <ul className="flex flex-wrap justify-center items-start gap-6 max-w-6xl mx-auto">
          {letters.map((l, i) => {
            const place = countryName(l.countryCode, lang)
            const who = place ? fill(s.anonName, { place }) : 'Lettie'
            return (
              <li key={l.token} className="w-full sm:w-[340px]">
                <a
                  href={`/open/letter/${l.token}`}
                  className="paper-card group relative flex flex-col p-6 md:p-7 transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sand"
                >
                  {l.stamp && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={stampSrc(l.stamp)} alt="" width={52} height={65} loading="lazy" className="absolute top-5 right-5 w-[52px] h-auto [image-rendering:pixelated]" style={{ transform: `rotate(${i % 2 ? -4 : 4}deg)` }} />
                  )}
                  <div className="flex items-center gap-3 pr-16">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={characterSrc(l.characterKey ?? 'lettie_f1', l.characterImageUrl)} alt="" width={44} height={44} loading="lazy" className="w-11 h-11 rounded-xl bg-sky2 [image-rendering:pixelated]" />
                    <span className="font-semibold text-paperInk leading-tight">{who}</span>
                  </div>
                  {l.prompt && <p className="mt-5 font-mono text-[11px] tracking-[0.15em] text-paperInk2">{l.prompt}</p>}
                  <p className="mt-4 text-paperInk leading-relaxed whitespace-pre-line line-clamp-[8]">{l.body}</p>
                  {l.imageUrl && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={l.imageUrl} alt="" loading="lazy" className="mt-5 w-full aspect-[4/3] object-cover rounded-md" />
                  )}
                  <span className="pt-6 inline-flex items-center gap-1 font-semibold text-coral group-hover:gap-2 transition-all">
                    {c.read} <span aria-hidden>→</span>
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
