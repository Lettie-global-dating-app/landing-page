import { FACTS } from '@/data/facts';
import { COMMUNITY } from '@/data/letterMap';

import type { HomeCopy } from '../home';

export const pl: HomeCopy = {
  nav: { how: 'Jak to działa', features: 'Nowości w 2.0', compare: 'vs Slowly', blog: 'Blog', guide: 'Poradniki', faq: 'FAQ', download: 'Pobierz' },
  eyebrow: 'LETTIE 2.0  ·  POWOLNE LISTY',
  h1a: 'List, który piszesz dziś,',
  h1b: 'dotrze jutro',
  sub: 'Twój list naprawdę leci nad globusem. Trwa to tyle, ile wynosi odległość, a twój korespondent czyta go w swoim języku. Postać zamiast zdjęcia, list zamiast czatu — przyjaciele korespondencyjni z całego świata.',
  free: 'Bezpłatnie · iOS · Android',
  videoLabel: 'Film wprowadzający do Lettie 2.0',
  stats: [
    [FACTS.languagesRounded, 'języków, tłumaczenie jednym dotknięciem'],
    [String(COMMUNITY.countries), 'krajów z korespondentami'],
    ['1–24 godz.', 'dostawa zależna od odległości'],
  ],
  howTitle: 'Jak to działa',
  howSub: 'Wystarczą cztery ekrany. Wszystkie pochodzą z prawdziwej aplikacji.',
  how: [
    { t: 'Wypuść list w niebo', d: 'Koperta odrywa się od globusa i leci tyle, ile trwa rzeczywista odległość do innego miasta. Czekając, możesz obserwować na globusie, gdzie właśnie jest.', alt: 'List lecący nad globusem' },
    { t: 'Podnieś list od nieznajomego', d: 'Listy wypuszczone bez konkretnego adresata unoszą się jako koperty. Otwórz ten, który cię zainteresuje, przeczytaj, odpowiedz — i zaczyna się korespondencja dla dwojga.', alt: 'Ekran Odkryj z unoszącymi się kopertami' },
    { t: 'Tłumacz jednym dotknięciem', d: 'Druga osoba pisze w swoim języku, ty czytasz w swoim. Ponad 70 języków, oryginał zawsze przy tłumaczeniu.', alt: 'Czytanie listu z przyciskiem tłumaczenia' },
    { t: 'Zbieraj znaczek z każdego kraju', d: 'Kraje, do których docierają twoje listy, zabarwiają się na globusie, a ich znaczki trafiają do albumu. Losuj pikselowe znaczki i przyklejaj je na listy.', alt: 'Urząd pocztowy — album znaczków i globus' },
  ],
  newTitle: 'Nowości w 2.0',
  newSub: 'Przebudowaliśmy całą aplikację i zostawiliśmy jedną zasadę: list musi zająć czas.',
  news: [
    ['Czas dostawy zależny od odległości', 'Czas przybycia wynika z odległości między dwoma krajami. Godzina lub dwie w obrębie kraju, blisko doby na drugi koniec świata. Czekając, śledź swój list na globusie.'],
    ['Odkryj — podnoszenie wypuszczonych listów', 'Raz dziennie przybliżają się trzy nowe koperty. Darmowe w pełni wystarczają; obejrzyj jedną reklamę dziennie, by dostać więcej.'],
    ['Tłumaczenie AI, ponad 70 języków', 'Otwierasz list i masz przycisk tłumaczenia, oryginał i tłumaczenie obok siebie. Sama aplikacja również działa w ponad 70 językach.'],
    ['Znaczek z każdego kraju', 'Kraje, z którymi wymieniasz listy, zabarwiają się na globusie, a ich znaczki trafiają do albumu. Do tego losowe pikselowe znaczki.'],
    ['Postać zamiast zdjęcia', 'Profil zaczyna się jako pikselowa postać. Szesnaście jest bezpłatnych, a z selfie lub kilku słów o twoim wyglądzie narysujemy twoją w tym samym stylu. Pierwsza jest darmowa, a zdjęcie nie jest zachowywane.'],
    ['Dzisiejsze przedstawienia — bez przesuwania', 'Kilka kart przedstawień dziennie. Bez punktów, bez bezkońcowego przesuwania. Jeśli ktoś zainteresuje cię, zaczynasz od jednego listu.'],
  ],
  cmpTitle: 'Czym to się różni od Slowly?',
  cmpSub: 'Obie aplikacje są dla przyjaciół korespondencyjnych, w których list trwa tyle, ile odległość. Różnica jest w tym, jak zaczyna się pierwszy list i jak go czytasz.',
  cmpHead: ['', 'Lettie', 'Slowly'],
  cmpRows: [
    ['Pierwszy list', 'Podnosisz listy wypuszczone przez innych (Odkryj)', 'Dopasowanie według zainteresowań · listy otwarte'],
    ['Tłumaczenie', 'W aplikacji, jednym dotknięciem, ponad 70 języków, bezpłatnie', 'Narzędzia zewnętrzne lub funkcja płatna'],
    ['Profil', 'Pikselowa postać; twoja ze zdjęcia lub opisu', 'Kreator awatara'],
    ['Przedstawienia', 'Kilka kart przedstawień dziennie', 'Brak (szukanie korespondentów)'],
    ['Znaczki', 'Za kraj + losowanie pikselowych znaczków, do przyklejania na listy', 'Kolekcja znaczków według kraju'],
  ],
  cmpLink: 'Przeczytaj pełne porównanie',
  cmpNote: 'Na podstawie informacji publicznych z września 2026. Slowly to świetna aplikacja — wypróbuj obie i zostań przy tej, która ci pasuje.',
  faqTitle: 'Najczęstsze pytania',
  faqs: [
    { q: 'Czy Lettie jest bezpłatne?', a: 'Tak. Pisanie, podnoszenie listów, tłumaczenie, szesnaście podstawowych postaci i twoja pierwsza własna postać są bezpłatne. Klejnoty są tylko do dodatków, takich jak nielimitowane rozmowy, losowanie znaczków czy druga postać.' },
    { q: 'Jak długo list dociera?', a: 'Zależy to od odległości między dwoma krajami. Od jednej do dwóch godzin w obrębie kraju, kilka godzin do sąsiedniego, blisko doby na drugi koniec świata. Czekając, możesz śledzić kopertę na globusie.' },
    { q: 'Czy mogę mieć korespondenta, nie znając jego języka?', a: 'Tak. Każdy list ma przycisk tłumaczenia, a oryginał zostaje przy tłumaczeniu. Dzięki ponad 70 językom piszesz w swoim, a druga osoba czyta w swoim.' },
    { q: 'Jak poznać kogoś bez zdjęć?', a: 'Profil to pikselowa postać, kilka zainteresowań i same listy. Z selfie lub kilku słów o twoim wyglądzie może powstać postać w tym samym stylu (zdjęcie nie jest zachowywane). Poznajesz sposób myślenia drugiej osoby, zanim poznasz jej wygląd.' },
  ],
  blogTitle: 'Do czytania',
  blog: [
    ['lettie-vs-slowly', 'Lettie vs Slowly — dwie aplikacje wolnych listów, jedna prawdziwa różnica', 'Dlaczego ten sam pomysł „wolnego listu” daje inne doświadczenie'],
    ['how-to-start-penpal', 'Jak napisać pierwszy list, na który przyjdzie odpowiedź', 'Struktura, która działa'],
    ['language-exchange-tips', 'Wymiana językowa przez listy', 'Jak się rozwijać nawet z włączonym przyciskiem tłumaczenia'],
  ],
  guideTitle: 'Poradniki',
  guides: [
    ['getting-started', 'Pierwsze kroki'], ['writing-tips', 'Pisanie lepszych listów'], ['cultural-exchange', 'Wymiana kulturowa'],
    ['language-learning', 'Nauka języków'], ['building-friendship', 'Budowanie przyjaźni'], ['safety-privacy', 'Bezpieczeństwo i prywatność'],
  ],
  inEnglish: 'po angielsku',
  ctaTitle: 'Jeden list dziś wieczorem',
  ctaSub: 'Jutro rano przeczyta go ktoś na drugim końcu świata.',
  footer: { tag: 'Wolne listy, odlegli przyjaciele', privacy: 'Polityka prywatności', terms: 'Warunki korzystania', dev: 'Twórca: junhyeong kim', languages: 'Języki', letterMap: 'Mapa listów', penpalApp: 'Aplikacja dla korespondentów' },
};
