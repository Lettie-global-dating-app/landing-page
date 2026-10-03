import type { FaqContent } from '@/data/localizedFaq';

export const faq: FaqContent = {
  title: 'Întrebări frecvente despre Lettie',
  description:
    'Ce este Lettie, dacă este gratuit, cum funcționează traducerea scrisorilor și când poți face schimb de date de contact cu un prieten de corespondență.',
  subtitle: 'Ce întreabă oamenii înainte să scrie prima scrisoare',
  keywords: ['Lettie', 'prieten de corespondență', 'aplicație de scrisori', 'penpal', 'schimb lingvistic'],
  items: [
    {
      q: 'Ce este Lettie?',
      a: 'Lettie este o aplicație pentru a scrie scrisori unor oameni din alte țări. Fiecare scrisoare are un buton care o traduce în limba celui care o citește (peste 70 de limbi), astfel încât doi oameni fără o limbă comună pot corespondează cu adevărat. Disponibilă pe iOS și Android.',
    },
    {
      q: 'Lettie este gratuit?',
      a: 'Descărcarea și utilizarea de bază sunt gratuite: poți scrie, primi și răspunde la scrisori fără să plătești. Există funcții suplimentare printr-un abonament opțional.',
    },
    {
      q: 'Trebuie să scriu în engleză?',
      a: 'Nu. Scrii în limba ta, iar celălalt citește în limba lui, pentru că fiecare scrisoare poate fi tradusă dintr-o atingere. Poți vedea și textul original lângă traducere.',
    },
    {
      q: 'Când pot face schimb de date de contact cu cineva?',
      a: 'Când amândoi vreți; nu există o regulă fixă. Pentru că scrisorile durează cât ține distanța, aveți timp să vă cunoașteți mai întâi. Ține-ți datele în interiorul aplicației până ești sigur și reține că poți raporta sau bloca pe cineva în orice moment.',
    },
    {
      q: 'De ce nu văd fotografii la început?',
      a: 'Lettie începe fără fotografie de profil, ca prima impresie să vină din ce scrie cineva. În locul unei fotografii, fiecare persoană începe cu un personaj pixelat: șaisprezece sunt gratuite, iar dintr-un selfie sau câteva cuvinte despre cum arăți se desenează propriul tău personaj (primul este gratuit și fotografia nu este păstrată).',
    },
    {
      q: 'Este sigur să scriu unor necunoscuți?',
      a: 'A scrie unui necunoscut este sigur cât timp controlezi ce te identifică. Ține adresa, locul de muncă, datele bancare și documentele de identitate în afara scrisorilor și nu trimite niciodată bani nimănui.',
    },
  ],
};

export const homeKeywords: string[] = [
  'aplicație prieteni de corespondență',
  'aplicație de scrisori',
  'prieten de corespondență din străinătate',
  'aplicație schimb lingvistic',
  'fă prieteni în altă țară',
  'aplicație pentru a trimite scrisori',
];
