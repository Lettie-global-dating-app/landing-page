import { FACTS } from '@/data/facts';
import { COMMUNITY } from '@/data/letterMap';

import type { HomeCopy } from '../home';

export const ro: HomeCopy = {
  nav: { how: 'Cum funcționează', features: 'Noutăți 2.0', compare: 'vs Slowly', blog: 'Blog', guide: 'Ghiduri', faq: 'Întrebări', download: 'Descarcă' },
  eyebrow: 'LETTIE 2.0  ·  SCRISORI LENTE',
  h1a: 'Scrisoarea pe care o scrii azi',
  h1b: 'ajunge mâine',
  sub: 'Scrisoarea ta zboară cu adevărat peste un glob. Durează cât ține distanța, iar prietenul tău de corespondență o citește în limba lui. Un personaj în loc de selfie, o scrisoare în loc de chat — prieteni de corespondență din toată lumea.',
  free: 'Gratuit · iOS · Android',
  videoLabel: 'Videoclip de prezentare Lettie 2.0',
  stats: [
    [FACTS.languagesRounded, 'limbi, traduse dintr-o atingere'],
    [String(COMMUNITY.countries), 'țări cu prieteni de corespondență'],
    ['1–24h', 'livrare, în funcție de distanță'],
  ],
  howTitle: 'Cum funcționează',
  howSub: 'Patru ecrane sunt de-ajuns. Toate sunt din aplicația reală.',
  how: [
    { t: 'Trimite o scrisoare spre cer', d: 'Un plic se ridică de pe glob și zboară atât timp cât durează distanța reală până în celălalt oraș. Poți urmări pe glob pe unde se află cât aștepți.', alt: 'O scrisoare zburând peste glob' },
    { t: 'Ia o scrisoare de la un necunoscut', d: 'Scrisorile trimise fără destinatar anume flotează ca niște plicuri. Deschide una care te atrage, citește-o, răspunde — și așa începe o corespondență între voi doi.', alt: 'Ecranul Descoperă cu plicuri care flotează' },
    { t: 'Tradu dintr-o atingere', d: 'Celălalt scrie în limba lui, tu citești în limba ta. Peste 70 de limbi, cu originalul chiar lângă traducere.', alt: 'Citirea unei scrisori cu butonul de traducere' },
    { t: 'Colecționează un timbru din fiecare țară', d: 'Țările pe care le ating scrisorile tale se colorează pe glob, iar timbrele lor ajung în albumul tău. Extrage timbre pixelate și lipește-le pe scrisori.', alt: 'Oficiul poștal — albumul de timbre și globul' },
  ],
  newTitle: 'Noutăți în 2.0',
  newSub: 'Am refăcut toată aplicația ținând o singură regulă: o scrisoare trebuie să dureze.',
  news: [
    ['Timp de livrare după distanță', 'Ora de sosire reiese din distanța dintre cele două țări. O oră, două în aceeași țară, aproape o zi pentru cealaltă parte a lumii. Urmărește-ți scrisoarea pe glob cât aștepți.'],
    ['Descoperă — ia scrisori trimise de alții', 'O dată pe zi se apropie trei plicuri noi. Gratuitul e mai mult decât suficient; urmărește o reclamă pe zi pentru mai multe.'],
    ['Traducere AI, peste 70 de limbi', 'Deschizi o scrisoare și apare un buton de traducere, cu originalul lângă traducere. Și aplicația în sine vorbește peste 70 de limbi.'],
    ['Un timbru din fiecare țară', 'Țările cu care corespondezi se colorează pe glob, iar timbrele lor intră în albumul tău. Mai sunt și timbre pixelate aleatorii.'],
    ['Un personaj în loc de fotografie', 'Profilul începe ca personaj pixelat. Șaisprezece sunt gratuite, iar dintr-un selfie sau câteva cuvinte despre cum arăți îți creăm propriul personaj, în același stil. Primul e gratuit, iar fotografia nu este păstrată.'],
    ['Prezentările zilei — fără swipe', 'Câteva carduri de prezentare pe zi. Fără scoruri, fără derulare la nesfârșit. Dacă cineva te intrigă, începi cu o scrisoare.'],
  ],
  cmpTitle: 'Prin ce diferă de Slowly?',
  cmpSub: 'Amândouă sunt aplicații de corespondență în care scrisoarea durează cât ține distanța. Diferența e în cum începe prima scrisoare și cum o citești.',
  cmpHead: ['', 'Lettie', 'Slowly'],
  cmpRows: [
    ['Prima scrisoare', 'Iei scrisori trimise de alții (Descoperă)', 'Potrivire după interese · scrisori deschise'],
    ['Traducere', 'În aplicație, o atingere, peste 70 de limbi, gratuit', 'Unelte externe sau funcție cu plată'],
    ['Profil', 'Personaj pixelat; al tău desenat dintr-o fotografie sau cuvinte', 'Creator de avatar'],
    ['Prezentări', 'Câteva carduri pe zi', 'Niciuna (căutare de corespondenți)'],
    ['Timbre', 'Pe țară + extrageri de timbre pixelate, de lipit pe scrisori', 'Colecție de timbre pe țară'],
  ],
  cmpLink: 'Citește comparația completă',
  cmpNote: 'Pe baza informațiilor publice din septembrie 2026. Slowly este o aplicație excelentă — încearcă-le pe amândouă și păstreaz-o pe cea care ți se potrivește.',
  faqTitle: 'Întrebări frecvente',
  faqs: [
    { q: 'Lettie este gratuit?', a: 'Da. Scrisul, strângerea scrisorilor, traducerea, cele șaisprezece personaje de bază și primul tău personaj propriu sunt gratuite. Gemele sunt doar pentru extra, precum conversații nelimitate, extrageri de timbre sau un al doilea personaj.' },
    { q: 'Cât durează până ajunge o scrisoare?', a: 'Reiese din distanța dintre cele două țări. Una până la două ore în aceeași țară, câteva ore spre o țară vecină, aproape o zi pentru cealaltă parte a lumii. Poți urmări plicul pe glob cât aștepți.' },
    { q: 'Pot avea un prieten de corespondență fără să-i vorbesc limba?', a: 'Da. Fiecare scrisoare are un buton de traducere, iar originalul stă lângă traducere. Cu peste 70 de limbi, tu scrii în limba ta și celălalt citește în limba lui.' },
    { q: 'Cum cunosc pe cineva fără fotografii?', a: 'Un profil este un personaj pixelat, câteva interese și scrisorile în sine. Dintr-un selfie sau câteva cuvinte despre cum arăți poate rezulta un personaj în același stil (fotografia nu este păstrată). Afli cum gândește cineva înainte de a afla cum arată.' },
  ],
  blogTitle: 'De citit',
  blog: [
    ['lettie-vs-slowly', 'Lettie vs Slowly — două aplicații de scrisori lente, o diferență reală', 'De ce aceeași idee de „scrisoare lentă” duce la o experiență diferită'],
    ['how-to-start-penpal', 'Cum scrii o primă scrisoare care primește răspuns', 'Structura care funcționează'],
    ['language-exchange-tips', 'Schimb lingvistic prin scrisori', 'Progresezi chiar și cu butonul de traducere activat'],
  ],
  guideTitle: 'Ghiduri',
  guides: [
    ['getting-started', 'Primii pași'], ['writing-tips', 'Scrisori mai bune'], ['cultural-exchange', 'Schimb cultural'],
    ['language-learning', 'Învățarea limbilor'], ['building-friendship', 'Construirea prieteniilor'], ['safety-privacy', 'Siguranță și confidențialitate'],
  ],
  inEnglish: 'engleză',
  ctaTitle: 'O scrisoare în seara aceasta',
  ctaSub: 'Mâine dimineață cineva de pe cealaltă parte a lumii o citește.',
  footer: { tag: 'Scrisori lente, prieteni îndepărtați', privacy: 'Politica de confidențialitate', terms: 'Termeni și condiții', dev: 'Dezvoltator: junhyeong kim', languages: 'Limbi', letterMap: 'Harta scrisorilor', penpalApp: 'Aplicație de corespondență' },
};
