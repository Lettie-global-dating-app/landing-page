import { FACTS } from '@/data/facts';
import { COMMUNITY } from '@/data/letterMap';

import type { HomeCopy } from '../home';

export const sw: HomeCopy = {
  nav: { how: 'Jinsi inavyofanya kazi', features: 'Mapya katika 2.0', compare: 'vs Slowly', blog: 'Blogu', guide: 'Miongozo', faq: 'Maswali', download: 'Pakua' },
  eyebrow: 'LETTIE 2.0  ·  BARUA ZA TARATIBU',
  h1a: 'Barua unayoandika leo',
  h1b: 'inafika kesho',
  sub: 'Barua yako inaruka kweli juu ya dunia. Inachukua muda kulingana na umbali, na rafiki yako wa kalamu anaisoma kwa lugha yake mwenyewe. Mhusika badala ya selfie, barua badala ya mazungumzo — marafiki wa kalamu kutoka kote duniani.',
  free: 'Bure · iOS · Android',
  videoLabel: 'Video ya utangulizi ya Lettie 2.0',
  stats: [
    [FACTS.languagesRounded, 'lugha, tafsiri kwa mbofyo mmoja'],
    [String(COMMUNITY.countries), 'nchi za marafiki wa kalamu'],
    ['Saa 1–24', 'muda wa kufikisha, kulingana na umbali'],
  ],
  howTitle: 'Jinsi inavyofanya kazi',
  howSub: 'Skrini nne zinatosha. Zote ni za programu halisi.',
  how: [
    { t: 'Peleka barua angani', d: 'Bahasha hupaa kutoka duniani na kuruka kwa muda unaolingana na umbali halisi hadi mji mwingine. Unaposubiri, unaweza kuona iko wapi juu ya dunia.', alt: 'Barua ikiruka juu ya dunia' },
    { t: 'Okota barua ya mtu usiyemfahamu', d: 'Barua zilizotolewa bila kuandikiwa mtu fulani huelea kama bahasha. Fungua uliyoipenda, isome, jibu — na mawasiliano ya kati yenu wawili yanaanza.', alt: 'Skrini ya Gundua ikiwa na bahasha zinazoelea' },
    { t: 'Tafsiri kwa mbofyo mmoja', d: 'Wanaandika kwa lugha yao, wewe unasoma kwa lugha yako. Lugha zaidi ya 70, maandishi asilia yakiwa karibu na tafsiri.', alt: 'Kusoma barua na kitufe cha tafsiri' },
    { t: 'Kusanya stempu kutoka kila nchi', d: 'Nchi zinazofikiwa na barua zako hupakwa rangi juu ya dunia, na stempu zake huingia kwenye albamu yako. Chora stempu na itapakwa rangi kwa ajili yako tu, au chagua kutoka kwa stempu za nchi 103 kwenye duka la stempu.', alt: 'Posta — albamu ya stempu na dunia' },
  ],
  newTitle: 'Mapya katika 2.0',
  newSub: 'Tulijenga programu nzima upya na kubaki na kanuni moja — barua inapaswa kuchukua muda.',
  news: [
    ['Muda wa kufikisha kulingana na umbali', 'Muda wa kufika unatokana na umbali halisi kati ya nchi mbili. Saa moja au mbili ndani ya nchi moja, karibu siku moja kwenda upande mwingine wa dunia. Fuatilia barua yako juu ya dunia unaposubiri.'],
    ['Gundua — kuokota barua zilizotolewa', 'Bahasha tatu mpya zinakaribia mara moja kwa siku. Bure inatosha; tazama tangazo moja kwa siku kupata zaidi.'],
    ['Tafsiri ya AI, lugha zaidi ya 70', 'Ukifungua barua kuna kitufe cha tafsiri, maandishi asilia na tafsiri yakiwa pembeni. Programu yenyewe pia inazungumza lugha zaidi ya 70.'],
    ['Stempu zilizopakwa rangi kwa ajili yako tu', 'Kila stempu unayochora hupakwa rangi upya, kwa hivyo hakuna mwingine aliye na inayofanana nayo. Duka la stempu lina stempu kutoka nchi 103 za kubandika kwenye barua zako.'],
    ['Mhusika badala ya picha', 'Wasifu huanza kama mhusika wa pixel. Kumi na sita ni bure, na kutoka kwenye selfie au maneno machache kuhusu sura yako, mhusika wako mwenyewe huchorwa kwa mtindo huo. Wa kwanza ni bure, na picha haihifadhiwi.'],
    ['Utambulisho wa leo — bila kuteleza', 'Kadi chache za utambulisho kwa siku. Hakuna alama, hakuna kuteleza bila mwisho. Kama mtu anaonekana wa kuvutia, unaanza na barua moja.'],
  ],
  cmpTitle: 'Hii inatofautiana vipi na Slowly?',
  cmpSub: 'Zote mbili ni programu za marafiki wa kalamu ambapo barua inachukua muda kulingana na umbali. Tofauti iko kwenye jinsi barua ya kwanza inavyoanza na jinsi unavyoisoma.',
  cmpHead: ['', 'Lettie', 'Slowly'],
  cmpRows: [
    ['Barua ya kwanza', 'Okota barua zilizotolewa na wengine (Gundua)', 'Ulinganishaji wa maslahi · barua za wazi'],
    ['Tafsiri', 'Ndani ya programu, mbofyo mmoja, lugha zaidi ya 70, bure', 'Vifaa vya nje au huduma ya kulipia'],
    ['Wasifu', 'Mhusika wa pixel; wako kutoka picha au maneno', 'Kijenga avatar'],
    ['Utambulisho', 'Kadi chache za utambulisho kwa siku', 'Hakuna (kutafuta rafiki wa kalamu)'],
    ['Stempu', 'Stempu zilizopakwa rangi upya kwa kila mchoro + stempu za nchi 103, zibandike kwenye barua', 'Mkusanyiko wa stempu kwa nchi'],
  ],
  cmpLink: 'Soma ulinganisho kamili',
  cmpNote: 'Kulingana na taarifa za umma hadi Septemba 2026. Slowly ni programu nzuri — jaribu zote mbili na ubaki na inayokufaa.',
  faqTitle: 'Maswali ya watu',
  faqs: [
    { q: 'Je, Lettie ni bure?', a: 'Ndiyo. Kuandika, kuokota barua, tafsiri, wahusika kumi na sita wa msingi, na mhusika wako wa kwanza binafsi — yote ni bure. Almasi hutumika tu kwa vitu vya ziada kama mazungumzo yasiyo na kikomo, uchoraji wa stempu au mhusika wa pili.' },
    { q: 'Barua inachukua muda gani kufika?', a: 'Inatokana na umbali halisi kati ya nchi mbili. Saa moja hadi mbili ndani ya nchi moja, saa chache hadi nchi jirani, karibu siku moja kwenda upande mwingine wa dunia. Unaposubiri, unaweza kuona bahasha juu ya dunia.' },
    { q: 'Naweza kuwa na rafiki wa kalamu bila kujua lugha yake?', a: 'Ndiyo. Kila barua ina kitufe cha tafsiri, na maandishi asilia hubaki karibu na tafsiri. Kwa lugha zaidi ya 70, unaandika kwa lugha yako na yeye anasoma kwa lugha yake.' },
    { q: 'Nitamfahamu mtu vipi bila picha?', a: 'Wasifu ni mhusika wa pixel, maslahi machache, na barua zenyewe. Kutoka kwenye selfie au maneno machache kuhusu sura yako, mhusika anaweza kuchorwa kwa mtindo huo (picha haihifadhiwi). Unajua jinsi mtu anavyofikiri kabla ya kujua sura yake.' },
  ],
  blogTitle: 'Kusoma',
  blog: [
    ['lettie-vs-slowly', 'Lettie vs Slowly — programu mbili za barua za pole pole, tofauti moja ya kweli', 'Kwa nini wazo moja la "barua za pole pole" linaleta uzoefu tofauti'],
    ['how-to-start-penpal', 'Jinsi ya kuandika barua ya kwanza inayopata jibu', 'Muundo unaofanya kazi'],
    ['language-exchange-tips', 'Kujifunza lugha kupitia barua', 'Kuendelea kukua hata kitufe cha tafsiri kikiwa wazi'],
  ],
  guideTitle: 'Miongozo',
  guides: [
    ['getting-started', 'Kuanza'], ['writing-tips', 'Kuandika barua bora'], ['cultural-exchange', 'Mabadilishano ya kiutamaduni'],
    ['language-learning', 'Kujifunza lugha'], ['building-friendship', 'Kujenga urafiki'], ['safety-privacy', 'Usalama na faragha'],
  ],
  inEnglish: 'Kiingereza',
  ctaTitle: 'Barua moja usiku wa leo',
  ctaSub: 'Mtu upande mwingine wa dunia anaisoma kesho asubuhi.',
  footer: { tag: 'Barua za pole pole, marafiki wa mbali', privacy: 'Sera ya Faragha', terms: 'Masharti ya Huduma', dev: 'Msanidi: junhyeong kim', languages: 'Lugha', letterMap: 'Ramani ya barua', penpalApp: 'Programu ya rafiki wa kalamu' },
};
