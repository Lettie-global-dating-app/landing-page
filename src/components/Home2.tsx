import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import MobileMenu from '@/components/MobileMenu'
import { getHomeCopy } from '@/i18n/home'
import { LOCALES, LOCALE_NAMES, ROOT_LOCALE, urlFor } from '@/i18n/config'
import { FAQ_LOCALES } from '@/data/localizedFaq'
import { listLocalizedPosts } from '@/data/localizedPosts'
import type { Locale } from '@/i18n/config'

/**
 * 2.0 「하늘의 편지」 홈. 12개 언어가 같은 구조를 쓰고 문구만 `src/i18n/home/<lang>.ts` 에서 온다.
 * 앱과 같은 밤하늘·종이·산호색 토큰(globals.css 의 --sky*, --paper*, --coral)으로 그리고,
 * 실제 앱 화면과 언어별 홍보 영상(`/v2/reel-<lang>.mp4`)을 그대로 쓴다.
 *
 * 링크 규칙: 블로그·가이드는 한국어/영어에만 있다. 다른 언어는 영어 페이지로 보내고 "영어" 표시를 붙인다.
 * FAQ 는 언어별 페이지가 있으면 그쪽, 없으면 영어.
 */
const APP_STORE = 'https://apps.apple.com/app/id6746454876'
const PLAY = 'https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe'
const PRIVACY = 'https://lettie.co.kr/privacy'
const TERMS = 'https://relic-baboon-412.notion.site/silverithm-13c766a8bb468082b91ddbd2dd6ce45d'

const SCREENS = ['/v2/app-sky.png', '/v2/app-discover.png', '/v2/app-letter.png', '/v2/app-post-office.png']

function StoreButtons({ size = 'lg' }: { size?: 'lg' | 'sm' }) {
  const pad = size === 'lg' ? 'px-7 py-4 text-lg' : 'px-5 py-3 text-base'
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
      <a href={APP_STORE} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center gap-3 rounded-2xl bg-paper text-sky1 font-semibold ${pad} hover:-translate-y-0.5 transition-transform shadow-[0_18px_50px_-20px_rgba(245,236,216,0.45)]`}>
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
        App Store
      </a>
      <a href={PLAY} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center gap-3 rounded-2xl border border-line bg-sky2/60 text-paper font-semibold ${pad} hover:-translate-y-0.5 hover:bg-sky2 transition-all`}>
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" /></svg>
        Google Play
      </a>
    </div>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.32em] text-sand mb-5">{children}</p>
}

/** 언어 고르기 — 크롤러가 따라갈 수 있는 실제 링크. 헤더에서는 접히고, 푸터에서는 펼쳐진다. */
function LanguageMenu({ current, label }: { current: string; label: string }) {
  const all = [ROOT_LOCALE, ...LOCALES]
  return (
    <details className="relative group">
      <summary className="list-none cursor-pointer inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-sm text-ink2 hover:text-paper hover:border-paper/40 transition-colors [&::-webkit-details-marker]:hidden" aria-label={label}>
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" /></svg>
        {LOCALE_NAMES[current]}
        <ChevronDown className="w-3.5 h-3.5 transition-transform group-open:rotate-180" />
      </summary>
      <ul className="absolute right-0 mt-2 w-48 max-h-80 overflow-auto rounded-2xl border border-line bg-sky1 p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] z-50">
        {all.map((l) => (
          <li key={l}>
            <a href={l === ROOT_LOCALE ? '/' : `/${l}`} hrefLang={l} lang={l} className={`block rounded-xl px-3 py-2 text-sm hover:bg-sky2 ${l === current ? 'text-star font-semibold' : 'text-ink2 hover:text-paper'}`}>
              {LOCALE_NAMES[l]}
            </a>
          </li>
        ))}
      </ul>
    </details>
  )
}

export default function Home2({ lang }: { lang: string }) {
  const t = getHomeCopy(lang)
  const isKo = lang === 'ko'
  const isEn = lang === 'en'
  const home = isKo ? '/' : `/${lang}`
  // 블로그·가이드는 ko/en 에만 있다. 나머지 언어는 영어로 보낸다.
  const contentBase = isKo ? '' : '/en'
  const foreignContent = !isKo && !isEn
  const faqHref = isKo ? '/faq' : isEn ? '/en/faq' : FAQ_LOCALES.includes(lang) ? `/${lang}/faq` : '/en/faq'
  const localizedPosts = foreignContent ? listLocalizedPosts(lang as Locale) : []
  const blogIndexHref = foreignContent && localizedPosts.length ? `/${lang}/blog/${localizedPosts[0].id}` : `${contentBase}/blog`
  const videoLang = lang
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }

  return (
    <div className="night min-h-screen text-paper" lang={lang}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Header */}
      <header className="container mx-auto px-4 py-5">
        <nav className="flex items-center justify-between gap-4">
          <Link href={home} className="flex items-center gap-3 shrink-0">
            <Image src="/lettie-icon.png" alt="Lettie" width={40} height={40} className="w-10 h-10 rounded-2xl" priority />
            <span className="text-2xl font-bold tracking-tight">Lettie</span>
          </Link>
          <div className="hidden lg:flex items-center gap-7 text-ink2 text-[15px]">
            <a href="#how" className="hover:text-paper transition-colors">{t.nav.how}</a>
            <a href="#whats-new" className="hover:text-paper transition-colors">{t.nav.features}</a>
            <a href="#compare" className="hover:text-paper transition-colors">{t.nav.compare}</a>
            <Link href={blogIndexHref} className="hover:text-paper transition-colors">{t.nav.blog}</Link>
            <Link href={faqHref} className="hover:text-paper transition-colors">{t.nav.faq}</Link>
          </div>
          <div className="flex items-center gap-3">
            <LanguageMenu current={lang} label={t.footer.languages} />
            <a href={APP_STORE} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex bg-coral text-paper px-5 py-2 rounded-full font-semibold hover:brightness-110 transition">
              {t.nav.download}
            </a>
            <MobileMenu
              items={[
                { href: '#how', label: t.nav.how },
                { href: '#whats-new', label: t.nav.features },
                { href: '#compare', label: t.nav.compare },
                { href: blogIndexHref, label: t.nav.blog },
                { href: `${contentBase}/guide`, label: t.nav.guide },
                { href: faqHref, label: t.nav.faq },
              ]}
              download={t.nav.download}
            />
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative container mx-auto px-4 pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden">
        <div className="stars pointer-events-none" aria-hidden />
        <div className="relative grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          <div className="text-center lg:text-left">
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h1 className="text-[2.6rem] leading-[1.08] sm:text-5xl md:text-6xl xl:text-7xl font-bold md:leading-[1.05] tracking-tight mb-7 text-balance">
              {t.h1a}
              <br />
              <span className="text-star">{t.h1b}</span>
              <span className="block mt-5 h-1.5 w-24 rounded-full bg-coral mx-auto lg:mx-0" aria-hidden />
            </h1>
            <p className="text-lg md:text-xl text-ink2 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-9 text-pretty">{t.sub}</p>
            <StoreButtons />
            <p className="mt-5 text-sm text-ink3">{t.free}</p>
          </div>

          {/* 홍보 영상 — 앱 그림으로 만든 20초 모션. 언어별로 있고, 소리 없이 반복 재생, 첫 프레임을 포스터로 */}
          <div className="relative mx-auto w-[260px] sm:w-[300px] lg:w-[320px]">
            <div className="absolute -inset-10 rounded-full bg-sea/20 blur-3xl" aria-hidden />
            <div className="phone-float relative rounded-[2.4rem] border border-line bg-sky0 p-2 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]">
              <video
                className="w-full rounded-[2rem] aspect-[9/16] object-cover bg-sky0"
                src={`/v2/reel-${videoLang}.mp4`}
                poster={`/v2/key-${videoLang}-s1.jpg`}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={t.videoLabel}
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <dl className="relative mt-16 md:mt-20 grid grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto text-center">
          {t.stats.map(([n, l]) => (
            <div key={l} className="rounded-2xl border border-line bg-sky2/40 px-2 py-4 md:px-3 md:py-5">
              <dt className="font-mono text-xl sm:text-2xl md:text-4xl font-bold text-star whitespace-nowrap">{n}</dt>
              <dd className="mt-1 text-[11px] sm:text-xs md:text-sm text-ink2 leading-snug">{l}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* How it works — 실제 앱 화면 */}
      <section id="how" className="py-20 md:py-24 border-t border-line/60 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <Eyebrow>{t.nav.how}</Eyebrow>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">{t.howTitle}</h2>
            <p className="text-lg text-ink2">{t.howSub}</p>
          </div>
          <ol className="grid sm:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-8 max-w-7xl mx-auto">
            {t.how.map((s, i) => (
              <li key={s.t} className="group">
                <div className="relative mx-auto w-full max-w-[260px] rounded-[2rem] border border-line bg-sky0 p-1.5 transition-transform duration-500 group-hover:-translate-y-2">
                  <Image src={SCREENS[i]} alt={s.alt} width={720} height={1360} className="w-full aspect-[9/17] object-cover object-top rounded-[1.7rem]" loading="lazy" />
                  <span className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-coral text-paper font-mono text-sm font-bold grid place-items-center shadow-[0_10px_30px_-10px_rgba(249,113,89,0.8)]" aria-hidden>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="mt-6 max-w-[300px] mx-auto">
                  <h3 className="text-xl font-bold text-balance">{s.t}</h3>
                  <p className="mt-2 text-ink2 leading-relaxed text-[15px]">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What's new — 검색·답변엔진이 읽는 본문 */}
      <section id="whats-new" className="py-20 md:py-24 border-t border-line/60 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Eyebrow>2.0</Eyebrow>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">{t.newTitle}</h2>
            <p className="text-lg text-ink2 max-w-2xl mx-auto text-pretty">{t.newSub}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {t.news.map(([h, d], i) => (
              <article key={h} className="paper-card p-6 md:p-7 relative">
                <span className="font-mono text-[11px] tracking-[0.3em] text-sand" aria-hidden>{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 text-xl font-bold text-paperInk mb-2 text-balance">{h}</h3>
                <p className="text-paperInk2 leading-relaxed">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Compare */}
      <section id="compare" className="py-20 md:py-24 border-t border-line/60 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <Eyebrow>{t.nav.compare}</Eyebrow>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">{t.cmpTitle}</h2>
            <p className="text-lg text-ink2 text-pretty">{t.cmpSub}</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-line">
            <table className="w-full text-left text-[15px] min-w-[560px]">
              <thead className="bg-sky2/60 text-ink2">
                <tr>{t.cmpHead.map((h, i) => <th key={i} className={`px-5 py-4 font-semibold ${i === 1 ? 'text-star' : ''}`}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {t.cmpRows.map(([k, a, b]) => (
                  <tr key={k} className="border-t border-line/70">
                    <th scope="row" className="px-5 py-4 font-semibold text-ink2 whitespace-nowrap align-top">{k}</th>
                    <td className="px-5 py-4 text-paper align-top">{a}</td>
                    <td className="px-5 py-4 text-ink2 align-top">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-ink3">{t.cmpNote}</p>
          <div className="mt-6 text-center">
            <Link href={`${contentBase}/blog/lettie-vs-slowly`} className="inline-flex items-center gap-2 text-star font-semibold hover:underline">
              {t.cmpLink}{foreignContent && <span className="text-ink3 font-normal text-sm">({t.inEnglish})</span>} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ — 보이는 글과 FAQPage JSON-LD 가 같은 데이터 */}
      <section id="faq" className="py-20 md:py-24 border-t border-line/60 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">{t.faqTitle}</h2>
          </div>
          <div className="divide-y divide-line/70 rounded-2xl border border-line bg-sky2/30">
            {t.faqs.map((f) => (
              <details key={f.q} className="group px-5 md:px-6">
                <summary className="list-none cursor-pointer py-5 flex items-start justify-between gap-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                  <span className="text-balance">{f.q}</span>
                  <ChevronDown className="w-5 h-5 mt-1 shrink-0 text-ink3 transition-transform group-open:rotate-180" aria-hidden />
                </summary>
                <p className="pb-5 text-ink2 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href={faqHref} className="inline-flex items-center gap-2 text-star font-semibold hover:underline">
              {t.nav.faq} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog + guides */}
      <section className="py-20 md:py-24 border-t border-line/60">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-baseline justify-between gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.blogTitle}</h2>
            {foreignContent && <span className="text-sm text-ink3">{t.inEnglish}</span>}
          </div>
          <div className="grid md:grid-cols-3 gap-5 mb-14">
            {localizedPosts.slice(0, 1).map((p) => (
              <Link key={p.id} href={`/${lang}/blog/${p.id}`} className="rounded-2xl border border-star/40 bg-sky2/40 p-6 hover:bg-sky2/70 transition-colors group">
                <h3 className="text-lg font-bold leading-snug group-hover:text-star text-balance">{p.post.title}</h3>
                <p className="mt-2 text-sm text-ink2">{p.post.description}</p>
              </Link>
            ))}
            {t.blog.slice(0, localizedPosts.length ? 2 : 3).map(([slug, title, sub]) => (
              <Link key={slug} href={`${contentBase}/blog/${slug}`} className="rounded-2xl border border-line bg-sky2/40 p-6 hover:bg-sky2/70 transition-colors group">
                <h3 className="text-lg font-bold leading-snug group-hover:text-star text-balance">{title}</h3>
                <p className="mt-2 text-sm text-ink2">{sub}</p>
              </Link>
            ))}
          </div>
          <h2 className="text-2xl font-bold tracking-tight mb-5">{t.guideTitle}{foreignContent && <span className="ml-2 text-sm font-normal text-ink3">({t.inEnglish})</span>}</h2>
          <div className="flex flex-wrap gap-3">
            {t.guides.map(([slug, label]) => (
              <Link key={slug} href={`${contentBase}/guide/${slug}`} className="rounded-full border border-line px-4 py-2 text-sm text-ink2 hover:text-paper hover:border-paper/40 transition-colors">{label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-28 border-t border-line/60 text-center overflow-hidden">
        <div className="stars pointer-events-none" aria-hidden />
        <div className="relative container mx-auto px-4">
          <Image src="/lettie-icon.png" alt="" width={96} height={96} className="mx-auto w-24 h-24 rounded-[1.6rem] shadow-[0_30px_70px_-20px_rgba(249,113,89,0.55)]" />
          <h2 className="mt-8 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">{t.ctaTitle}</h2>
          <p className="mt-4 text-lg text-ink2 text-pretty">{t.ctaSub}</p>
          <div className="mt-9 flex justify-center"><StoreButtons size="sm" /></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-line/60 py-12 text-sm text-ink2">
        <div className="container mx-auto px-4 text-center space-y-6">
          <p className="text-paper font-semibold">Lettie — {t.footer.tag}</p>
          <div className="flex items-center justify-center gap-x-6 gap-y-2 flex-wrap">
            <Link href={blogIndexHref} className="hover:text-paper">{t.nav.blog}</Link>
            <Link href={`${contentBase}/guide`} className="hover:text-paper">{t.nav.guide}</Link>
            <Link href={faqHref} className="hover:text-paper">{t.nav.faq}</Link>
            <a href={APP_STORE} target="_blank" rel="noopener noreferrer" className="hover:text-paper">App Store</a>
            <a href={PLAY} target="_blank" rel="noopener noreferrer" className="hover:text-paper">Google Play</a>
            <a href={PRIVACY} target="_blank" rel="noopener noreferrer" className="hover:text-paper">{t.footer.privacy}</a>
            <a href={TERMS} target="_blank" rel="noopener noreferrer" className="hover:text-paper">{t.footer.terms}</a>
          </div>
          {/* 언어 — 크롤러가 따라갈 수 있는 실제 링크로 둔다 */}
          <nav aria-label={t.footer.languages} className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-ink3 max-w-2xl mx-auto">
            {[ROOT_LOCALE, ...LOCALES].map((l) => (
              <a key={l} href={urlFor(l)} hrefLang={l} lang={l} className={l === lang ? 'text-paper' : 'hover:text-paper'}>{LOCALE_NAMES[l]}</a>
            ))}
          </nav>
          <p className="text-ink3">© 2026 Lettie · {t.footer.dev}</p>
        </div>
      </footer>
    </div>
  )
}
