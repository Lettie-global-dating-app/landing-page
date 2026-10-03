import type { FaqContent } from '@/data/localizedFaq';

export const faq: FaqContent = {
  title: 'Nejčastější otázky o Lettie',
  description:
    'Co je Lettie, zda je zdarma, jak funguje překlad dopisů a kdy si lze s dopisovatelem vyměnit kontaktní údaje.',
  subtitle: 'To, co lidi zajímá před napsáním prvního dopisu',
  keywords: ['Lettie', 'dopisovatel', 'aplikace na dopisy', 'penpal', 'jazyková výměna', 'dopisování se zahraničím'],
  items: [
    {
      q: 'Co je Lettie?',
      a: 'Lettie je aplikace na psaní dopisů lidem z jiných zemí. Každý dopis má tlačítko, které ho přeloží do jazyka čtenáře (více než 70 jazyků), takže si i dva lidé bez společného jazyka mohou skutečně dopisovat. Dostupná je na iOS i Android.',
    },
    {
      q: 'Je Lettie zdarma?',
      a: 'Stažení a základní používání jsou zdarma: psaní, přijímání i odpovídání na dopisy nic nestojí. Doplňkové funkce jsou dostupné přes volitelné předplatné.',
    },
    {
      q: 'Musím psát anglicky?',
      a: 'Ne. Píšete ve své řeči a druhá osoba čte ve své, protože každý dopis lze po otevření přeložit jedním dotykem. Originál vždy zůstává vedle překladu.',
    },
    {
      q: 'Kdy si můžu s někým vyměnit kontakt?',
      a: 'Kdykoliv to budete chtít oba; žádné pevné pravidlo neexistuje. Protože dopisy trvají tak dlouho, jak velká je vzdálenost, máte čas se nejdřív poznat. Kontakt si nechte v aplikaci, dokud nebudete mít jistotu, a pamatujte, že kohokoli můžete kdykoli nahlásit nebo blokovat.',
    },
    {
      q: 'Proč na začátku nejsou vidět fotky?',
      a: 'Lettie začíná bez profilové fotky, aby první dojem vycházel z toho, co člověk napíše. Místo fotky každý začíná s pixelovou postavou: šestnáct je zdarma a ze selfie nebo pár slov o svém vzhledu si můžete vytvořit vlastní (první postava je zdarma, fotka se neukládá).',
    },
    {
      q: 'Je bezpečné psát cizím lidem?',
      a: 'Psát cizímu člověku je bezpečné, pokud máte pod kontrolou, co vás identifikuje. Do dopisů nepište svou adresu, pracoviště, bankovní údaje a dokumenty a nikdy nikomu nezasílejte peníze.',
    },
  ],
};

export const homeKeywords: string[] = [
  'dopisovatel',
  'aplikace na dopisy',
  'penpal online',
  'dopisování se zahraničím',
  'jazyková výměna',
  'přátelé z celého světa',
  'dopis cizímu člověku',
  'aplikace pen pal',
];
