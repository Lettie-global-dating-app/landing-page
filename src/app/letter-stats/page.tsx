import Link from 'next/link';
import { Metadata } from 'next';
import { BarChart3 } from 'lucide-react';
import { koEnAlternates } from '@/i18n/config';
import { ORG_ID } from '@/lib/schema';
import GuideArticle, { GuideSection, GuideTable } from '@/components/GuideArticle';
import { COUNTRY_KO as C, koMonth } from '@/data/letterMap';
import { LETTER_STATS as S, WEEKDAY_KO, busiestDay } from '@/data/letterStats';

/**
 * 레티 편지 통계 (2026-10-11) — 레티 DB 에서만 나오는 숫자를 기준일·표본·정의와 함께 공개한다(1차 소스).
 * 숫자는 전부 src/data/letterStats.ts 에서 읽는다. 손으로 쓴 숫자를 두지 않는다.
 */
const URL = 'https://lettie-dating.com/letter-stats';
const PERIOD = `${koMonth(S.period.from)}부터 ${koMonth(S.period.to)}까지`;
const [BUSY_DAY, BUSY_PCT] = busiestDay();
const hourKo = (h: number) => `${h < 6 ? '새벽' : h < 12 ? '오전' : h < 18 ? '오후' : '밤'} ${h % 12 || 12}시`;

const TITLE = `펜팔 편지 통계: ${S.letters}통으로 본 길이·쓰는 시간·답장 | Lettie`;
const DESC = `${S.countries}개국 ${S.letters}통의 편지로 본 펜팔 편지의 길이, 쓰는 시간대와 요일, 답장까지 걸리는 시간, 첫 편지의 첫 인사말. 레티 앱 데이터 기준(${S.asOf}).`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  keywords: ['펜팔 통계', '편지 길이', '편지 쓰는 시간', '펜팔 답장 시간', '편지 첫 인사', '펜팔 앱 데이터'],
  alternates: { canonical: URL, languages: koEnAlternates('/letter-stats') },
  openGraph: { title: TITLE, description: DESC, url: URL, siteName: 'Lettie', locale: 'ko_KR', type: 'article', images: ['/og/ko.png'] },
};

const FAQS = [
  { q: '펜팔 편지는 보통 얼마나 길게 쓰나요?', a: `레티에서 편지 길이의 중앙값은 ${S.length.median}자로, 짧은 문단 하나 정도입니다. 절반이 ${S.length.p25}자에서 ${S.length.p75}자 사이에 있습니다(${S.letters}통, ${S.asOf} 기준).` },
  { q: '사람들은 편지를 언제 쓰나요?', a: `편지의 ${S.time.night22to2}%가 현지 시각 밤 10시부터 새벽 2시 사이에 쓰였고, 가장 많이 쓰는 시각은 ${hourKo(S.time.peakHour)}대입니다. 요일로는 ${WEEKDAY_KO[BUSY_DAY]}이 ${BUSY_PCT}%로 가장 많습니다(시간대가 하나인 나라의 편지 ${S.time.sample}통 기준).` },
  { q: '펜팔 답장은 얼마나 빨리 오나요?', a: `레티에서 답장이 이어진 경우, 편지가 도착한 뒤 답장을 쓰기까지 중앙값 ${S.reply.medianHours}시간이 걸렸고 ${S.reply.within24h}%가 하루 안에 쓰였습니다(답장 ${S.reply.n}통 기준).` },
  { q: '첫 편지는 보통 어떤 말로 시작하나요?', a: `한글로 쓴 첫 편지 ${S.openers.ko.n}통 중 ${S.openers.ko.annyeonghaseyo}%가 "안녕하세요"로 시작했습니다. 영어 등 라틴 문자 첫 편지 ${S.openers.latin.n}통은 "Hello" ${S.openers.latin.hello}%, "Hi" ${S.openers.latin.hi}%, "Hey" ${S.openers.latin.hey}% 순이고 "Dear"는 ${S.openers.latin.dear}%뿐입니다.` },
];

const datasetLd = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: '레티 펜팔 편지 통계',
  description: DESC,
  url: URL,
  creator: { '@id': ORG_ID },
  publisher: { '@id': ORG_ID },
  datePublished: S.asOf,
  dateModified: S.asOf,
  temporalCoverage: `${S.period.from}/${S.period.to}`,
  isAccessibleForFree: true,
  inLanguage: 'ko',
  measurementTechnique: '레티 앱 데이터베이스 집계. 사람이 쓴 편지만, AI 캐릭터·테스트 계정 제외.',
  variableMeasured: ['편지 길이(글자 수)', '편지를 쓴 현지 시각·요일', '배달 시간(시간)', '답장까지 걸린 시간(시간)', '첫 편지의 첫 단어'],
};

export default function LetterStatsPage() {
  return (
    <GuideArticle
      locale="ko"
      path="/letter-stats"
      parent={null}
      title="펜팔 편지 통계"
      subtitle={`${S.countries}개국 ${S.letters}통의 편지로 본, 사람들이 편지를 쓰는 방식 (${PERIOD}).`}
      answer={
        <>
          <strong>레티 편지 길이의 중앙값은 {S.length.median}자이고, {S.time.night22to2}%는 밤 10시부터 새벽 2시 사이에 쓰이며, 답장은 편지가 도착하고 중앙값 {S.reply.medianHours}시간 뒤에 쓰입니다.</strong>{' '}
          {S.countries}개국 사람이 쓴 편지 {S.letters}통을 {S.asOf}에 집계했습니다.
        </>
      }
      icon={<BarChart3 className="w-8 h-8" />}
      accent="from-amber-500 to-orange-500"
      updated={S.asOf}
      published={S.asOf}
      faqs={FAQS}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetLd) }} />

      <GuideSection title="편지 길이">
        <p>
          편지 길이의 중앙값은 <strong>{S.length.median}자</strong>입니다. 4분의 1은 {S.length.p25}자보다 짧고, 4분의 1은 {S.length.p75}자보다 깁니다. 첫 편지와 답장의 길이는 거의 같습니다.
          20통 이상 쓴 나라만 보면:
        </p>
        <GuideTable head={['보낸 나라', '길이 중앙값(자)', '편지 수']} rows={S.length.byCountry.map(([c, m, n]) => [C[c] ?? c, String(m), String(n)])} />
        <p>글자 수는 문자에 따라 다릅니다. 한글은 한 글자에 담기는 뜻이 영어 알파벳보다 많아서, 한국어 편지가 글자 수로 짧다고 내용이 짧은 것은 아닙니다.</p>
      </GuideSection>

      <GuideSection title="편지를 쓰는 시간">
        <GuideTable
          head={['현지 시각', '편지 비율']}
          rows={[
            ['오전 6시 – 정오', `${S.time.morning6to12}%`],
            ['정오 – 오후 6시', `${S.time.afternoon12to18}%`],
            ['오후 6시 – 밤 10시', `${S.time.evening18to22}%`],
            ['밤 10시 – 새벽 2시', `${S.time.night22to2}%`],
            ['새벽 2시 – 6시', `${S.time.late2to6}%`],
          ]}
        />
        <p>
          가장 많이 쓰는 시각은 <strong>{hourKo(S.time.peakHour)}대</strong>, 가장 많이 쓰는 요일은 <strong>{WEEKDAY_KO[BUSY_DAY]}</strong>({BUSY_PCT}%)입니다.
          평일은 요일마다 {Math.min(...S.time.weekday.slice(0, 5).map(([, p]) => p))}~{Math.max(...S.time.weekday.slice(0, 5).map(([, p]) => p))}%입니다.
        </p>
      </GuideSection>

      <GuideSection title="배달과 답장에 걸리는 시간">
        <GuideTable
          head={['', '중앙값', '범위', '편지 수']}
          rows={[
            ['같은 나라 안 배달', `${S.delivery.domestic.median}시간`, `최대 ${S.delivery.domestic.max}시간`, String(S.delivery.domestic.n)],
            ['나라 사이 배달', `${S.delivery.international.median}시간`, `${S.delivery.international.min}~${S.delivery.international.max}시간`, String(S.delivery.international.n)],
            ['도착부터 답장을 쓰기까지', `${S.reply.medianHours}시간`, `1시간 안 ${S.reply.within1h}% · 하루 안 ${S.reply.within24h}%`, String(S.reply.n)],
          ]}
        />
        <p>
          배달 시간은 일부러 거리에 따라 정해 둡니다(<Link href="/blog/letter-delivery-time-by-distance" className="text-blue-600 underline">도시별 배달 시간</Link>). 답장 시간은 답장이 온 편지만 셉니다.
        </p>
      </GuideSection>

      <GuideSection title="첫 편지의 첫마디">
        <GuideTable
          head={['첫 단어', '첫 편지 중 비율']}
          rows={[
            [`안녕하세요 (한글 ${S.openers.ko.n}통)`, `${S.openers.ko.annyeonghaseyo}%`],
            [`Hello (라틴 문자 ${S.openers.latin.n}통)`, `${S.openers.latin.hello}%`],
            ['Hi', `${S.openers.latin.hi}%`],
            ['Hey', `${S.openers.latin.hey}%`],
            ['Dear', `${S.openers.latin.dear}%`],
          ]}
        />
        <p>
          첫 편지 상당수가 인사말로 시작합니다. 그래서 장면 하나로 시작하는 첫 문장이 눈에 띕니다. 예시는{' '}
          <Link href="/blog/how-to-start-penpal" className="text-blue-600 underline">편지 첫 문장 예시 30개</Link>에 있습니다.
        </p>
      </GuideSection>

      <GuideSection title="어떻게 셌나">
        <p>
          출처: 레티 앱 데이터베이스, {S.asOf} 조회. {PERIOD} 사람이 쓴 편지 {S.letters}통 — 대화 속 편지와 낯선 사람에게 띄운 공개 편지를 함께 셉니다.
          AI 캐릭터·개발·테스트 계정의 편지, 삭제된 편지, 나라가 올바르게 저장되지 않은 계정은 뺐습니다. 첫마디를 세려고 첫 편지의 앞 60자만 스크립트로 읽었고, 편지 내용은 공개하지 않습니다.
        </p>
        <p>
          쓴 시각은 보낸 사람의 현지 시각이라 시간대가 하나인 나라의 편지만 셉니다({S.time.sample}통). 배달 시간은 레티 2.0(2026년 9월 15일) 이후 편지 기준입니다.
          아직 작은 커뮤니티라 표본이 작습니다 — 커질 때마다 고칩니다. 편지가 어느 나라로 오갔는지는 <Link href="/letter-map" className="text-blue-600 underline">편지 지도</Link>에 있습니다.
        </p>
      </GuideSection>
    </GuideArticle>
  );
}
