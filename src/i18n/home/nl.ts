import { FACTS } from '@/data/facts';
import { COMMUNITY } from '@/data/letterMap';

import type { HomeCopy } from '../home';

export const nl: HomeCopy = {
  nav: { how: 'Hoe het werkt', features: 'Nieuw in 2.0', compare: 'vs Slowly', blog: 'Blog', guide: 'Gidsen', faq: 'FAQ', download: 'Downloaden' },
  eyebrow: 'LETTIE 2.0  ·  LANGZAME BRIEVEN',
  h1a: 'De brief die je vandaag schrijft,',
  h1b: 'komt morgen aan',
  sub: 'Je brief vliegt echt over een wereldbol. Hij doet er net zo lang over als de afstand, en je penvriend leest hem in zijn eigen taal. Een personage in plaats van een selfie, een brief in plaats van een chat — penvrienden van over de hele wereld.',
  free: 'Gratis · iOS · Android',
  videoLabel: 'Introductievideo van Lettie 2.0',
  stats: [
    [FACTS.languagesRounded, 'talen, vertaald met één tik'],
    [String(COMMUNITY.countries), 'landen met penvrienden'],
    ['1–24u', 'bezorgtijd, naar afstand'],
  ],
  howTitle: 'Hoe het werkt',
  howSub: 'Vier schermen zijn genoeg. Allemaal uit de echte app.',
  how: [
    { t: 'Laat een brief de lucht in gaan', d: 'Een envelop stijgt op van de wereldbol en vliegt net zo lang als de echte afstand tot de andere stad. Je kunt onderweg zien waar hij is op de bol.', alt: 'Een brief die over de wereldbol vliegt' },
    { t: 'Raap de brief van een onbekende op', d: 'Brieven die zomaar de wereld in zijn gestuurd, drijven voorbij als enveloppen. Open er een die je aanspreekt, lees hem, antwoord — en er begint een correspondentie tussen jullie twee.', alt: 'Ontdek-scherm met drijvende enveloppen' },
    { t: 'Vertaal met één tik', d: 'Zij schrijven in hun taal, jij leest in de jouwe. Meer dan 70 talen, met het origineel direct naast de vertaling.', alt: 'Een brief lezen met de vertaalknop' },
    { t: 'Verzamel een postzegel uit elk land', d: 'Landen die je brieven bereiken, kleuren op de wereldbol en hun postzegel komt in je album. Trek een postzegel en hij wordt speciaal voor jou geschilderd, of kies uit 103 landenpostzegels in de postzegelwinkel.', alt: 'Postkantoor — postzegelalbum en wereldbol' },
  ],
  newTitle: 'Nieuw in 2.0',
  newSub: 'We hebben de hele app opnieuw gebouwd en één regel behouden: een brief moet tijd kosten.',
  news: [
    ['Bezorgtijd naar afstand', 'De aankomsttijd komt uit de afstand tussen de twee landen. Een uur of twee binnen hetzelfde land, bijna een dag voor de andere kant van de wereld. Volg je brief op de wereldbol terwijl je wacht.'],
    ['Ontdekken — raap verzonden brieven op', 'Eén keer per dag drijven er drie nieuwe enveloppen dichterbij. Gratis is ruim voldoende; bekijk één advertentie per dag voor meer.'],
    ['AI-vertaling, meer dan 70 talen', 'Open een brief en er staat een vertaalknop, origineel en vertaling naast elkaar. Ook de app zelf spreekt meer dan 70 talen.'],
    ['Postzegels speciaal voor jou geschilderd', 'Elke postzegel die je trekt wordt vers geschilderd, dus niemand anders heeft dezelfde. De postzegelwinkel heeft postzegels uit 103 landen om op je brieven te plakken.'],
    ['Een personage in plaats van een foto', 'Profielen beginnen als pixelpersonage. Zestien zijn gratis, en een selfie of een paar woorden over je uiterlijk wordt je eigen personage in dezelfde stijl. Je eerste is gratis en de foto wordt niet bewaard.'],
    ['De introducties van vandaag — zonder swipen', 'Een paar introductiekaarten per dag. Geen scores, geen eindeloos swipen. Klinkt iemand interessant, dan begin je met één brief.'],
  ],
  cmpTitle: 'Wat is het verschil met Slowly?',
  cmpSub: 'Allebei zijn penvriend-apps waarin een brief net zo lang doet over de afstand. Het verschil zit in hoe de eerste brief begint en hoe je hem leest.',
  cmpHead: ['', 'Lettie', 'Slowly'],
  cmpRows: [
    ['Eerste brief', 'Raap brieven op die onbekenden verzonden hebben (Ontdekken)', 'Matching op interesses · open brieven'],
    ['Vertaling', 'In de app, één tik, meer dan 70 talen, gratis', 'Externe tools of een betaalde functie'],
    ['Profiel', 'Pixelpersonage; jouw eigen, getekend uit een foto of woorden', 'Avatar-bouwer'],
    ['Introducties', 'Een paar introductiekaarten per dag', 'Geen (zoeken naar penvrienden)'],
    ['Postzegels', 'Postzegels vers geschilderd bij elke trekking + 103 landenpostzegels, plak ze op je brieven', 'Postzegels verzamelen per land'],
  ],
  cmpLink: 'Lees de volledige vergelijking',
  cmpNote: 'Gebaseerd op openbare informatie van september 2026. Slowly is een fijne app — probeer beide en houd degene die bij je past.',
  faqTitle: 'Vragen die mensen stellen',
  faqs: [
    { q: 'Is Lettie gratis?', a: 'Ja. Schrijven, brieven oprapen, vertalen, de zestien basispersonages en je eerste eigen personage zijn allemaal gratis. Gems zijn alleen voor extra’s zoals onbeperkte gesprekken, postzegels trekken of een tweede personage.' },
    { q: 'Hoelang doet een brief erover?', a: 'Dat komt uit de afstand tussen de twee landen. Een tot twee uur binnen hetzelfde land, een paar uur naar een buurland, bijna een dag voor de andere kant van de wereld. Je kunt de envelop op de wereldbol volgen terwijl je wacht.' },
    { q: 'Kan ik een penvriend hebben zonder zijn taal te spreken?', a: 'Ja. Elke brief heeft een vertaalknop, en het origineel staat naast de vertaling. Met meer dan 70 talen schrijf je in jouw taal en leest de ander in zijn eigen taal.' },
    { q: 'Hoe leer ik iemand kennen zonder foto’s?', a: 'Een profiel is een pixelpersonage, een paar interesses en de brieven zelf. Een selfie of een paar woorden over je uiterlijk kunnen een personage in dezelfde stijl worden (de foto wordt niet bewaard). Zo leer je hoe iemand denkt voordat je weet hoe iemand eruitziet.' },
  ],
  blogTitle: 'Leesvoer',
  blog: [
    ['lettie-vs-slowly', 'Lettie vs Slowly — twee apps voor trage brieven, één echt verschil', 'Waarom hetzelfde idee van een "trage brief" tot een andere ervaring leidt'],
    ['how-to-start-penpal', 'Hoe schrijf je een eerste brief die antwoord krijgt', 'De structuur die werkt'],
    ['language-exchange-tips', 'Taaluitwisseling via brieven', 'Vooruitgang boeken, ook met de vertaalknop aan'],
  ],
  guideTitle: 'Gidsen',
  guides: [
    ['getting-started', 'Aan de slag'], ['writing-tips', 'Betere brieven schrijven'], ['cultural-exchange', 'Cultuuruitwisseling'],
    ['language-learning', 'Taal leren'], ['building-friendship', 'Vriendschappen opbouwen'], ['safety-privacy', 'Veiligheid en privacy'],
  ],
  inEnglish: 'Engels',
  ctaTitle: 'Eén brief vanavond',
  ctaSub: 'Morgenochtend leest iemand aan de andere kant van de wereld hem.',
  footer: { tag: 'Trage brieven, verre vrienden', privacy: 'Privacybeleid', terms: 'Gebruiksvoorwaarden', dev: 'Ontwikkelaar: junhyeong kim', languages: 'Talen', letterMap: 'Brievenkaart', penpalApp: 'Penvriend-app' },
};
