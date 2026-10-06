import { FACTS } from '@/data/facts';
import { COMMUNITY } from '@/data/letterMap';

import type { HomeCopy } from '../home';

export const cs: HomeCopy = {
  nav: { how: 'Jak to funguje', features: 'Novinky ve 2.0', compare: 'vs Slowly', blog: 'Blog', guide: 'Rádce', faq: 'FAQ', download: 'Stáhnout' },
  eyebrow: 'LETTIE 2.0  ·  POMALÉ DOPISY',
  h1a: 'Dopis, který napíšeš dnes,',
  h1b: 'dorazí zítra',
  sub: 'Váš dopis skutečně letí nad glóbem. Trvá to tak dlouho, jak velká je vzdálenost, a váš dopisovatel ho čte ve své řeči. Postava místo fotky, dopis místo chatu — dopisovatelé z celého světa.',
  free: 'Zdarma · iOS · Android',
  videoLabel: 'Úvodní video k Lettie 2.0',
  stats: [
    [FACTS.languagesRounded, 'jazyků, překlad jedním dotykem'],
    [String(COMMUNITY.countries), 'zemí s dopisovateli'],
    ['1–24 h', 'doručení podle vzdálenosti'],
  ],
  howTitle: 'Jak to funguje',
  howSub: 'Stačí čtyři obrazovky. Všechny jsou ze skutečné aplikace.',
  how: [
    { t: 'Vypusťte dopis do nebe', d: 'Obálka se zvedne z glóbu a letí tak dlouho, jak trvá skutečná vzdálenost do druhého města. Zatímco čekáte, můžete sledovat na glóbu, kde právě je.', alt: 'Dopis letící nad glóbem' },
    { t: 'Zvedněte dopis od cizího člověka', d: 'Dopisy vypuštěné bez konkrétního adresáta se vznášejí jako obálky. Otevřete ten, který vás zaujme, přečtěte ho, odpovězte — a začne dopisování pro dva.', alt: 'Obrazovka Objevit s vznášejícími se obálkami' },
    { t: 'Přeložte jedním dotykem', d: 'Druhá strana píše ve své řeči, vy čtete ve své. Více než 70 jazyků, originál hned vedle překladu.', alt: 'Čtení dopisu s tlačítkem překladu' },
    { t: 'Sbírejte známku z každé země', d: 'Země, kam vaše dopisy dorazí, se na glóbu vybarví a jejich známky skončí v albu. Vylosujte si známku a ta se namaluje jen pro vás, nebo si vyberte ze 103 známek zemí v obchodě se známkami.', alt: 'Poštovní úřad — album známek a glóbus' },
  ],
  newTitle: 'Novinky ve 2.0',
  newSub: 'Celou aplikaci jsme postavili znovu a zachovali jedno pravidlo: dopis musí trvat.',
  news: [
    ['Doba doručení podle vzdálenosti', 'Čas příchodu se počítá ze skutečné vzdálenosti mezi dvěma zeměmi. Hodinu až dvě v rámci země, téměř den na druhý konec světa. Zatímco čekáte, sledujte svůj dopis na glóbu.'],
    ['Objevit — zvedání vypuštěných dopisů', 'Jednou denně se přiblíží tři nové obálky. Zdarma jich je dost; jedna reklama denně vám přidá další.'],
    ['AI překlad, více než 70 jazyků', 'Otevřete dopis a je tam tlačítko překladu, originál a překlad vedle sebe. I samotná aplikace mluví více než 70 jazyky.'],
    ['Známky namalované jen pro vás', 'Každá známka, kterou si vylosujete, se namaluje nově, takže nikdo jiný nebude mít stejnou. V obchodě se známkami najdete známky ze 103 zemí, které můžete nalepit na své dopisy.'],
    ['Postava místo fotky', 'Profil začíná jako pixelová postava. Šestnáct je zdarma a ze selfie nebo pár slov o vašem vzhledu nakreslíme vaši ve stejném stylu. První je zdarma a fotka se neukládá.'],
    ['Dnešní seznámení — bez swipování', 'Několik karet se seznámením denně. Žádné body, žádné nekonečné swipování. Pokud vás někdo zaujme, začnete jedním dopisem.'],
  ],
  cmpTitle: 'Čím se to liší od Slowly?',
  cmpSub: 'Obě jsou aplikace pro dopisovatele, kde dopis trvá tak dlouho, jak velká je vzdálenost. Rozdíl je v tom, jak začíná první dopis a jak ho čtete.',
  cmpHead: ['', 'Lettie', 'Slowly'],
  cmpRows: [
    ['První dopis', 'Zvedáte dopisy vypuštěné jinými (Objevit)', 'Párování podle zájmů · otevřené dopisy'],
    ['Překlad', 'V aplikaci, jedním dotykem, více než 70 jazyků, zdarma', 'Externí nástroje nebo placená funkce'],
    ['Profil', 'Pixelová postava; vaše ze selfie nebo popisu', 'Tvorba avatara'],
    ['Seznámení', 'Několik karet denně', 'Žádné (hledání dopisovatelů)'],
    ['Známky', 'Nově namalovaná známka pro každé vylosování + 103 známek zemí, nalepíte na dopisy', 'Sbírka známek podle zemí'],
  ],
  cmpLink: 'Přečíst celé srovnání',
  cmpNote: 'Podle veřejných informací k září 2026. Slowly je skvělá aplikace — vyzkoušejte obě a zůstaňte u té, která vám sedne.',
  faqTitle: 'Časté otázky',
  faqs: [
    { q: 'Je Lettie zdarma?', a: 'Ano. Psaní, zvedání dopisů, překlad, šestnáct základních postav a vaše první vlastní postava jsou zdarma. Drahokamy jsou jen na nadstandardní věci jako neomezené konverzace, losování známek nebo druhou postavu.' },
    { q: 'Jak dlouho dopis putuje?', a: 'Počítá se to ze skutečné vzdálenosti mezi dvěma zeměmi. Jednu až dvě hodiny v rámci země, několik hodin do sousední, téměř den na druhý konec světa. Zatímco čekáte, vidíte obálku na glóbu.' },
    { q: 'Mohu mít dopisovatele, aniž bych uměl jeho jazyk?', a: 'Ano. Každý dopis má tlačítko překladu a originál zůstává vedle překladu. Díky více než 70 jazykům píšete ve své řeči a druhá strana čte ve své.' },
    { q: 'Jak poznám někoho bez fotek?', a: 'Profil tvoří pixelová postava, pár zájmů a samotné dopisy. Ze selfie nebo pár slov o vzhledu může vzniknout postava ve stejném stylu (fotka se neukládá). Poznáte, jak člověk myslí, dřív než jak vypadá.' },
  ],
  blogTitle: 'Ke čtení',
  blog: [
    ['lettie-vs-slowly', 'Lettie vs Slowly — dvě aplikace pomalých dopisů, jeden skutečný rozdíl', 'Proč stejná myšlenka „pomalého dopisu“ vede k jinému zážitku'],
    ['how-to-start-penpal', 'Jak napsat první dopis, na který přijde odpověď', 'Struktura, která funguje'],
    ['language-exchange-tips', 'Jazyková výměna přes dopisy', 'Jak se zlepšovat i se zapnutým tlačítkem překladu'],
  ],
  guideTitle: 'Rádce',
  guides: [
    ['getting-started', 'První kroky'], ['writing-tips', 'Jak psát lepší dopisy'], ['cultural-exchange', 'Kulturní výměna'],
    ['language-learning', 'Učení jazyků'], ['building-friendship', 'Budování přátelství'], ['safety-privacy', 'Bezpečnost a soukromí'],
  ],
  inEnglish: 'anglicky',
  ctaTitle: 'Jeden dopis dnes večer',
  ctaSub: 'Zítra ráno si ho přečte někdo na druhém konci světa.',
  footer: { tag: 'Pomalé dopisy, vzdálení přátelé', privacy: 'Zásady ochrany osobních údajů', terms: 'Podmínky používání', dev: 'Vývojář: junhyeong kim', languages: 'Jazyky', letterMap: 'Mapa dopisů', penpalApp: 'Aplikace pro dopisování' },
};
