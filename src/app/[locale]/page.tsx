import { Mail, Globe, Heart, Shield, Languages, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LOCALES, LOCALE_NAMES, ROOT_LOCALE, isLocale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { listLocalizedPosts } from '@/data/localizedPosts';

const APP_STORE_URL = 'https://apps.apple.com/app/id6746454876';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe';
// 개인정보처리방침은 자체 도메인에서 서빙한다. 예전 Notion 링크는 Google Play 가
// "유효한 개인정보처리방침 페이지가 아니다"라며 반려한 주소라 쓰지 않는다.
const PRIVACY_URL = 'https://lettie.co.kr/privacy';

export default async function LocaleHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === 'en') notFound();

  const t = getDictionary(locale);
  const base = `/${locale}`;
  const localized = listLocalizedPosts(locale);

  const features = [
    { icon: Languages, ...t.features.translation },
    { icon: Mail, ...t.features.letters },
    { icon: Heart, ...t.features.reveal },
    { icon: Shield, ...t.features.contact },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href={base} className="flex items-center space-x-3">
            <Image
              src="/lettie-icon.png"
              alt="Lettie"
              className="w-10 h-10 rounded-2xl"
              width={40}
              height={40}
              priority
            />
            <span className="text-2xl font-bold text-foreground">Lettie</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              {t.nav.features}
            </a>
            {/* 이 언어로 번역된 글이 있으면 그쪽으로, 없으면 영어 블로그로 보낸다. */}
            <Link
              href={localized.length ? `/${locale}/blog/${localized[0].id}` : '/en/blog'}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {t.nav.blog}
            </Link>
            <Link href="/en/guide" className="text-muted-foreground hover:text-primary transition-colors">
              {t.nav.guide}
            </Link>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary-dark transition-colors"
            >
              {t.nav.download}
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative container mx-auto px-4 py-28 md:py-40 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-b from-indigo-100/40 via-purple-100/40 to-transparent rounded-full blur-3xl opacity-60 dark:from-indigo-900/20 dark:via-purple-900/20" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full glass-panel">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground/80 tracking-wide">
              {t.hero.badge}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-8 leading-tight tracking-tight">
            {t.hero.titleLine1}
            <br />
            <span className="inline-block text-gradient pb-2">{t.hero.titleHighlight}</span>
            <br />
            <span className="text-foreground">{t.hero.titleLine3}</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto font-light">
            {/* 요소 사이 개행은 JSX 가 공백 하나로 바꾼다. 문장부호 앞에 공백이
                끼거나(스페인어 "ideas . Vive") 공백을 쓰지 않는 언어에 공백이
                들어가므로(일본어), 연결부는 붙여 쓰고 간격은 사전이 갖는다. */}
            {t.hero.subtitleA}{' '}
            <span className="font-medium text-foreground">{t.hero.subtitleHighlight}</span>{t.hero.subtitleB}{' '}
            <span className="font-medium text-foreground">{t.hero.subtitleHighlight2}</span>{t.hero.subtitleC}
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-10">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto bg-foreground text-background px-10 py-5 rounded-full text-lg font-bold hover:bg-foreground/90 transition-all duration-300 shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span>{t.hero.appStore}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto bg-foreground text-background px-10 py-5 rounded-full text-lg font-bold hover:bg-foreground/90 transition-all duration-300 shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <span>{t.hero.googlePlay}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex flex-wrap gap-3 justify-center text-sm text-muted-foreground">
            <span className="glass-panel px-4 py-2 rounded-full">{t.hero.badges.free}</span>
            <span className="glass-panel px-4 py-2 rounded-full">{t.hero.badges.platforms}</span>
            <span className="glass-panel px-4 py-2 rounded-full">{t.hero.badges.global}</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              {t.features.heading}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.features.subheading}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((f) => (
              <div
                key={f.title}
                className="glass-panel rounded-3xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-14">
            {t.audience.heading}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {t.audience.items.map((item) => (
              <div key={item} className="flex items-center gap-3 glass-panel rounded-2xl px-6 py-5">
                <Globe className="w-5 h-5 text-primary shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            {t.cta.heading}
          </h2>
          <p className="text-lg text-muted-foreground mb-10">{t.cta.body}</p>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-full text-lg font-bold hover:bg-primary-dark transition-colors"
          >
            {t.cta.button}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <footer className="py-12 border-t border-border bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-3">
              <Image
                src="/lettie-icon.png"
                alt="Lettie"
                className="w-8 h-8 rounded-xl"
                width={32}
                height={32}
              />
              <span className="text-lg font-bold text-foreground">Lettie</span>
            </div>

            {/* 다른 언어로 이동 — 크롤러가 따라갈 수 있는 실제 링크로 둔다. */}
            {/* 언어 전환 — 크롤러가 따라갈 수 있는 실제 링크로 둔다. */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground max-w-xl">
              <Link href="/" className="hover:text-primary transition-colors">
                {LOCALE_NAMES[ROOT_LOCALE]}
              </Link>
              {LOCALES.map((l) => (
                <Link key={l} href={`/${l}`} className="hover:text-primary transition-colors">
                  {LOCALE_NAMES[l]}
                </Link>
              ))}
            </div>

            <a
              href={PRIVACY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t.footer.privacy}
            </a>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            © {new Date().getFullYear()} Lettie. {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}

