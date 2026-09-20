import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import MobileMenu from '@/components/MobileMenu'

/**
 * 2.0 「하늘의 편지」 홈. 앱과 같은 밤하늘·종이·산호색 토큰(globals.css 의 --sky*, --paper*, --coral)으로 그리고,
 * 실제 앱 화면과 홍보 영상을 그대로 쓴다. 한국어/영어는 같은 구조에 문구만 바뀐다.
 */
type Lang = 'ko' | 'en'

const APP_STORE = 'https://apps.apple.com/kr/app/%EB%A0%88%ED%8B%B0/id6746454876'
const PLAY = 'https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe'
const PRIVACY = 'https://relic-baboon-412.notion.site/Lettie-1fc766a8bb4680458932ea6a238e97b9'
const TERMS = 'https://relic-baboon-412.notion.site/silverithm-13c766a8bb468082b91ddbd2dd6ce45d'

const T = {
  ko: {
    nav: { features: '기능', how: '어떻게 쓰나요', compare: 'Slowly와 비교', blog: '블로그', guide: '가이드', faq: 'FAQ', download: '다운로드' },
    eyebrow: 'LETTIE 2.0  ·  하늘의 편지',
    h1a: '오늘 쓴 편지는',
    h1b: '내일 도착합니다',
    sub: '편지가 지구본 위를 진짜로 날아갑니다. 거리만큼 시간이 걸려 닿고, 상대는 자기 말로 읽습니다. 사진 대신 캐릭터로, 스와이프 대신 편지로 시작하는 만남.',
    free: '무료 · iOS · Android',
    stats: [
      ['28', '개 언어로 번역'],
      ['150+', '개국의 사람들'],
      ['1~24h', '거리만큼 걸리는 배달'],
    ],
    howTitle: '이렇게 씁니다',
    howSub: '네 화면이면 충분합니다. 전부 실제 앱 화면입니다.',
    how: [
      { n: '01', t: '하늘에 편지를 띄운다', d: '지구본 위로 봉투가 떠오르고, 상대가 있는 도시까지 실제 거리로 계산된 시간 동안 날아갑니다. 어디쯤 가고 있는지 지구본에서 볼 수 있어요.', img: '/v2/app-sky.png', alt: '지구본 위를 날아가는 편지 화면' },
      { n: '02', t: '남이 띄운 편지를 줍는다', d: '누구에게랄 것 없이 띄운 편지들이 봉투로 떠 있습니다. 마음에 드는 봉투를 열어 읽고 답장하면 그때부터 둘만의 대화가 시작됩니다.', img: '/v2/app-discover.png', alt: '발견 화면 — 떠 있는 봉투들' },
      { n: '03', t: '한 번 눌러 번역해 읽는다', d: '상대는 자기 말로 쓰고, 나는 내 말로 읽습니다. 28개 언어. 원문과 번역을 나란히 두고 볼 수 있어요.', img: '/v2/app-letter.png', alt: '편지 읽기 화면과 번역 버튼' },
      { n: '04', t: '나라마다 우표를 모은다', d: '편지가 닿은 나라는 지구본에 색이 칠해지고 우표첩에 그 나라 우표가 남습니다. 뽑은 픽셀 우표를 내 편지에 붙일 수도 있어요.', img: '/v2/app-post-office.png', alt: '내 우체국 — 우표첩과 지구본' },
    ],
    newTitle: '2.0에서 새로 생긴 것',
    newSub: '1.0을 통째로 다시 만들었습니다. 규칙 하나만 남겼어요 — 편지는 시간이 걸려야 한다.',
    news: [
      ['거리만큼 걸려서 도착하는 편지', '두 도시 사이 실제 거리로 도착 시간을 계산합니다. 가까운 나라는 몇 시간, 지구 반대편은 하루쯤. 기다리는 동안 지구본에서 내 편지 위치를 봅니다.'],
      ['발견 — 남이 띄운 편지 줍기', '8시간마다 새 봉투 세 장이 다가옵니다. 무료로도 충분하고, 하루 한 번 광고를 보면 더 받습니다.'],
      ['28개 언어 AI 번역', '편지를 열면 번역 버튼이 있고 원문과 번역문을 함께 봅니다. 앱 화면도 28개 언어를 지원합니다.'],
      ['나라마다 모이는 우표', '주고받은 나라는 지구본에 칠해지고 우표가 우표첩에 남습니다. 무작위 픽셀 우표 뽑기도 있어요.'],
      ['사진 대신 나만의 캐릭터', '프로필은 픽셀 캐릭터로 시작합니다. 기본 16종은 무료, 생김새를 글로 적으면 같은 그림체로 그려 줍니다.'],
      ['스와이프 없는 매칭', '하루 몇 장의 카드만 옵니다. 점수도 무한 스와이프도 없고, 만날 상대의 성별은 프로필에서 고릅니다.'],
    ],
    cmpTitle: 'Slowly와 무엇이 다른가요',
    cmpSub: '둘 다 편지가 거리만큼 걸려 도착하는 앱입니다. 갈라지는 지점은 "누구를, 어떻게 만나느냐"입니다.',
    cmpHead: ['', 'Lettie', 'Slowly'],
    cmpRows: [
      ['목적', '편지로 시작하는 만남 (데이팅·우정)', '펜팔 우정'],
      ['첫 편지', '남이 띄운 편지를 골라 줍는다 (발견)', '관심사 매칭·공개 편지'],
      ['번역', '앱 안에서 한 번에, 28개 언어', '외부 도구 또는 유료 기능'],
      ['프로필', '픽셀 캐릭터, 글로 적으면 그려 줌', '아바타 조합'],
      ['매칭', '하루 몇 장 카드, 상대 성별 선택', '없음 (펜팔 검색)'],
    ],
    cmpLink: '자세한 비교 글 읽기',
    cmpNote: '비교는 2026년 9월 기준 공개 정보를 바탕으로 했습니다. Slowly는 훌륭한 앱이고, 편지 펜팔만 원한다면 좋은 선택입니다.',
    blogTitle: '읽을거리',
    blog: [
      ['/blog/lettie-vs-slowly', 'Lettie vs Slowly — 느린 편지 앱 두 개, 무엇이 다른가', '같은 "느린 편지"인데 왜 다른 사람을 만나게 되는지'],
      ['/blog/how-to-start-penpal', '첫 편지 작성 가이드', '답장이 오는 첫 편지의 구조'],
      ['/blog/language-exchange-tips', '펜팔로 외국어 늘리기', '번역 버튼을 켜 두고도 실력이 느는 방법'],
    ],
    guideTitle: '가이드',
    guides: [
      ['/guide/getting-started', '펜팔 시작하기'], ['/guide/writing-tips', '편지 작성 마스터'], ['/guide/cultural-exchange', '문화 교류'],
      ['/guide/language-learning', '언어 학습'], ['/guide/building-friendship', '우정 쌓기'], ['/guide/safety-privacy', '안전과 프라이버시'],
    ],
    ctaTitle: '오늘 밤, 편지 한 통',
    ctaSub: '내일 아침 지구 반대편에서 누군가 읽습니다.',
    footer: { tag: '느린 편지, 진짜 사람', privacy: '개인정보 처리방침', terms: '서비스 이용약관', dev: '개발자: junhyeong kim' },
  },
  en: {
    nav: { features: 'Features', how: 'How it works', compare: 'vs Slowly', blog: 'Blog', guide: 'Guides', faq: 'FAQ', download: 'Download' },
    eyebrow: 'LETTIE 2.0  ·  SLOW LETTERS',
    h1a: 'A letter you write today',
    h1b: 'lands tomorrow',
    sub: 'Your letter really flies across a globe. It takes as long as the distance, and the other person reads it in their own language. A character instead of a selfie, a letter instead of a swipe.',
    free: 'Free · iOS · Android',
    stats: [
      ['28', 'languages, translated in a tap'],
      ['150+', 'countries of people'],
      ['1–24h', 'delivery, by distance'],
    ],
    howTitle: 'How it works',
    howSub: 'Four screens are enough. All of them are the real app.',
    how: [
      { n: '01', t: 'Release a letter into the sky', d: 'An envelope lifts off the globe and flies for as long as the real distance to the other city. You can watch where it is on the globe while you wait.', img: '/v2/app-sky.png', alt: 'A letter flying over the globe' },
      { n: '02', t: 'Pick up a stranger’s letter', d: 'Letters released to no one in particular float by as envelopes. Open one you like, read it, reply — and a conversation for two begins.', img: '/v2/app-discover.png', alt: 'Discover screen with floating envelopes' },
      { n: '03', t: 'Translate with one tap', d: 'They write in their language, you read in yours. 28 languages, with the original right next to the translation.', img: '/v2/app-letter.png', alt: 'Reading a letter with the translate button' },
      { n: '04', t: 'Collect a stamp from every country', d: 'Countries your letters reach get painted on the globe, and their stamps land in your album. Draw pixel stamps and stick them on your letters.', img: '/v2/app-post-office.png', alt: 'Post office — stamp album and globe' },
    ],
    newTitle: 'New in 2.0',
    newSub: 'We rebuilt the whole app and kept one rule: a letter should take time.',
    news: [
      ['Delivery time by distance', 'Arrival is computed from the real distance between two cities. Hours for a neighbor, about a day for the other side of the world. Watch your letter on the globe while you wait.'],
      ['Discover — pick up released letters', 'Three new envelopes drift close every eight hours. Free is plenty; watch one ad a day for more.'],
      ['AI translation, 28 languages', 'Open a letter and there’s a translate button, original and translation side by side. The app itself speaks 28 languages too.'],
      ['A stamp from every country', 'Countries you exchange with get painted on the globe and their stamps go in your album. Random pixel stamps too.'],
      ['A character instead of a photo', 'Profiles start as pixel characters. Sixteen are free; describe your look in words and we draw yours in the same style.'],
      ['Matching without swiping', 'A few cards a day. No scores, no endless swiping, and you choose who you meet in your profile.'],
    ],
    cmpTitle: 'How is this different from Slowly?',
    cmpSub: 'Both deliver letters by distance. Where they split is who you meet and how.',
    cmpHead: ['', 'Lettie', 'Slowly'],
    cmpRows: [
      ['Purpose', 'Meeting someone through letters (dating & friendship)', 'Pen-pal friendship'],
      ['First letter', 'Pick up letters strangers released (Discover)', 'Interest matching · open letters'],
      ['Translation', 'In-app, one tap, 28 languages', 'External tools or a paid feature'],
      ['Profile', 'Pixel character; describe it and we draw it', 'Avatar builder'],
      ['Matching', 'A few cards a day, choose who you meet', 'None (pen-pal search)'],
    ],
    cmpLink: 'Read the full comparison',
    cmpNote: 'Based on public information as of September 2026. Slowly is a lovely app — if all you want is a pen pal, it’s a fine choice.',
    blogTitle: 'Reading',
    blog: [
      ['/en/blog/lettie-vs-slowly', 'Lettie vs Slowly — two slow-letter apps, one real difference', 'Why the same “slow letter” idea leads to different people'],
      ['/en/blog/how-to-start-penpal', 'How to write a first letter that gets a reply', 'The structure that works'],
      ['/en/blog/language-exchange-tips', 'Language exchange through letters', 'Getting better even with the translate button on'],
    ],
    guideTitle: 'Guides',
    guides: [
      ['/en/guide/getting-started', 'Getting started'], ['/en/guide/writing-tips', 'Writing better letters'], ['/en/guide/cultural-exchange', 'Cultural exchange'],
      ['/en/guide/language-learning', 'Language learning'], ['/en/guide/building-friendship', 'Building friendships'], ['/en/guide/safety-privacy', 'Safety & privacy'],
    ],
    ctaTitle: 'One letter tonight',
    ctaSub: 'Someone on the other side of the world reads it tomorrow morning.',
    footer: { tag: 'Slow letters, real people', privacy: 'Privacy Policy', terms: 'Terms of Service', dev: 'Developer: junhyeong kim' },
  },
} as const

function StoreButtons({ lang, size = 'lg' }: { lang: Lang; size?: 'lg' | 'sm' }) {
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

export default function Home2({ lang }: { lang: Lang }) {
  const t = T[lang]
  const home = lang === 'ko' ? '/' : '/en'
  const p = (path: string) => (lang === 'ko' ? path : `/en${path}`)

  return (
    <div className="night min-h-screen text-paper">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between md:pr-40">
          <Link href={home} className="flex items-center gap-3">
            <Image src="/lettie-icon.png" alt="Lettie" width={40} height={40} className="w-10 h-10 rounded-2xl" priority />
            <span className="text-2xl font-bold tracking-tight">Lettie</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-ink2">
            <a href="#how" className="hover:text-paper transition-colors">{t.nav.how}</a>
            <a href="#whats-new" className="hover:text-paper transition-colors">{t.nav.features}</a>
            <a href="#compare" className="hover:text-paper transition-colors">{t.nav.compare}</a>
            <Link href={p('/blog')} className="hover:text-paper transition-colors">{t.nav.blog}</Link>
            <Link href={p('/guide')} className="hover:text-paper transition-colors">{t.nav.guide}</Link>
            <Link href={p('/faq')} className="hover:text-paper transition-colors">{t.nav.faq}</Link>
            <a href={APP_STORE} target="_blank" rel="noopener noreferrer" className="bg-coral text-paper px-5 py-2 rounded-full font-semibold hover:brightness-110 transition">
              {t.nav.download}
            </a>
          </div>
          <MobileMenu />
        </nav>
      </header>

      {/* Hero */}
      <section className="relative container mx-auto px-4 pt-10 pb-24 md:pt-16 md:pb-32 overflow-hidden">
        <div className="stars pointer-events-none" aria-hidden />
        <div className="relative grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center max-w-6xl mx-auto">
          <div className="text-center lg:text-left">
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-7">
              {t.h1a}
              <br />
              <span className="text-star">{t.h1b}</span>
              <span className="block mt-5 h-1.5 w-24 rounded-full bg-coral mx-auto lg:mx-0" aria-hidden />
            </h1>
            <p className="text-lg md:text-xl text-ink2 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-9">{t.sub}</p>
            <StoreButtons lang={lang} />
            <p className="mt-5 text-sm text-ink3">{t.free}</p>
          </div>

          {/* 홍보 영상 — 앱 그림으로 만든 20초 모션. 소리 없이 반복 재생, 첫 프레임을 포스터로 */}
          <div className="relative mx-auto w-[280px] sm:w-[320px]">
            <div className="absolute -inset-10 rounded-full bg-sea/20 blur-3xl" aria-hidden />
            <div className="relative rounded-[2.4rem] border border-line bg-sky0 p-2 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]">
              <video
                className="w-full rounded-[2rem] aspect-[9/16] object-cover bg-sky0"
                src={`/v2/reel-${lang}.mp4`}
                poster={`/v2/key-${lang}-s1.png`}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={lang === 'ko' ? 'Lettie 2.0 소개 영상' : 'Lettie 2.0 intro video'}
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <dl className="relative mt-20 grid grid-cols-3 gap-4 max-w-3xl mx-auto text-center">
          {t.stats.map(([n, l]) => (
            <div key={l} className="rounded-2xl border border-line bg-sky2/40 px-3 py-5">
              <dt className="font-mono text-2xl md:text-4xl font-bold text-star">{n}</dt>
              <dd className="mt-1 text-xs md:text-sm text-ink2">{l}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* How it works — 실제 앱 화면 */}
      <section id="how" className="py-24 border-t border-line/60">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Eyebrow>{t.nav.how}</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{t.howTitle}</h2>
            <p className="text-lg text-ink2">{t.howSub}</p>
          </div>
          <ol className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {t.how.map((s) => (
              <li key={s.n} className="group">
                <div className="relative mx-auto w-full max-w-[260px] rounded-[2rem] border border-line bg-sky0 p-1.5 transition-transform duration-500 group-hover:-translate-y-2">
                  <Image src={s.img} alt={s.alt} width={720} height={1600} className="w-full h-auto rounded-[1.7rem]" loading="lazy" />
                </div>
                <div className="mt-6 max-w-[300px] mx-auto">
                  <p className="font-mono text-xs tracking-[0.3em] text-coral">{s.n}</p>
                  <h3 className="mt-2 text-xl font-bold">{s.t}</h3>
                  <p className="mt-2 text-ink2 leading-relaxed text-[15px]">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What's new — 검색·답변엔진이 읽는 본문 */}
      <section id="whats-new" className="py-24 border-t border-line/60">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <Eyebrow>2.0</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{t.newTitle}</h2>
            <p className="text-lg text-ink2 max-w-2xl mx-auto">{t.newSub}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {t.news.map(([h, d]) => (
              <article key={h} className="paper-card p-7">
                <h3 className="text-xl font-bold text-paperInk mb-2">{h}</h3>
                <p className="text-paperInk2 leading-relaxed">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Compare */}
      <section id="compare" className="py-24 border-t border-line/60">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <Eyebrow>{t.nav.compare}</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{t.cmpTitle}</h2>
            <p className="text-lg text-ink2">{t.cmpSub}</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-line">
            <table className="w-full text-left text-[15px]">
              <thead className="bg-sky2/60 text-ink2">
                <tr>{t.cmpHead.map((h, i) => <th key={i} className={`px-5 py-4 font-semibold ${i === 1 ? 'text-star' : ''}`}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {t.cmpRows.map(([k, a, b]) => (
                  <tr key={k} className="border-t border-line/70">
                    <th scope="row" className="px-5 py-4 font-semibold text-ink2 whitespace-nowrap">{k}</th>
                    <td className="px-5 py-4 text-paper">{a}</td>
                    <td className="px-5 py-4 text-ink2">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-ink3">{t.cmpNote}</p>
          <div className="mt-6 text-center">
            <Link href={p('/blog/lettie-vs-slowly')} className="inline-flex items-center gap-2 text-star font-semibold hover:underline">
              {t.cmpLink} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog + guides */}
      <section className="py-24 border-t border-line/60">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">{t.blogTitle}</h2>
          <div className="grid md:grid-cols-3 gap-5 mb-14">
            {t.blog.map(([href, title, sub]) => (
              <Link key={href} href={href} className="rounded-2xl border border-line bg-sky2/40 p-6 hover:bg-sky2/70 transition-colors group">
                <h3 className="text-lg font-bold leading-snug group-hover:text-star">{title}</h3>
                <p className="mt-2 text-sm text-ink2">{sub}</p>
              </Link>
            ))}
          </div>
          <h2 className="text-2xl font-bold tracking-tight mb-5">{t.guideTitle}</h2>
          <div className="flex flex-wrap gap-3">
            {t.guides.map(([href, label]) => (
              <Link key={href} href={href} className="rounded-full border border-line px-4 py-2 text-sm text-ink2 hover:text-paper hover:border-paper/40 transition-colors">{label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 border-t border-line/60 text-center">
        <div className="container mx-auto px-4">
          <Image src="/lettie-icon.png" alt="" width={96} height={96} className="mx-auto w-24 h-24 rounded-[1.6rem] shadow-[0_30px_70px_-20px_rgba(249,113,89,0.55)]" />
          <h2 className="mt-8 text-4xl md:text-5xl font-bold tracking-tight">{t.ctaTitle}</h2>
          <p className="mt-4 text-lg text-ink2">{t.ctaSub}</p>
          <div className="mt-9 flex justify-center"><StoreButtons lang={lang} size="sm" /></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-line/60 py-12 text-sm text-ink2">
        <div className="container mx-auto px-4 text-center space-y-4">
          <p className="text-paper font-semibold">Lettie — {t.footer.tag}</p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <Link href={p('/blog')} className="hover:text-paper">{t.nav.blog}</Link>
            <Link href={p('/guide')} className="hover:text-paper">{t.nav.guide}</Link>
            <Link href={p('/stories')} className="hover:text-paper">Stories</Link>
            <Link href={p('/faq')} className="hover:text-paper">{t.nav.faq}</Link>
            <a href={APP_STORE} target="_blank" rel="noopener noreferrer" className="hover:text-paper">App Store</a>
            <a href={PLAY} target="_blank" rel="noopener noreferrer" className="hover:text-paper">Google Play</a>
            <a href={PRIVACY} target="_blank" rel="noopener noreferrer" className="hover:text-paper">{t.footer.privacy}</a>
            <a href={TERMS} target="_blank" rel="noopener noreferrer" className="hover:text-paper">{t.footer.terms}</a>
          </div>
          <p className="text-ink3">© 2026 Lettie · {t.footer.dev}</p>
        </div>
      </footer>
    </div>
  )
}
