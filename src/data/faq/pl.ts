import type { FaqContent } from '@/data/localizedFaq';

export const faq: FaqContent = {
  title: 'Najczęstsze pytania o Lettie',
  description:
    'Co to jest Lettie, czy jest bezpłatne, jak działa tłumaczenie listów i kiedy można wymienić dane kontaktowe z przyjacielem korespondencyjnym.',
  subtitle: 'To, o co ludzie pytają przed napisaniem pierwszego listu',
  keywords: ['Lettie', 'przyjaciel korespondencyjny', 'aplikacja do listów', 'penpal', 'wymiana językowa', 'korespondencja zagraniczna'],
  items: [
    {
      q: 'Co to jest Lettie?',
      a: 'Lettie to aplikacja do pisania listów do osób z innych krajów. Każdy list ma przycisk, który tłumaczy go na język osoby czytającej (ponad 70 języków), dzięki czemu dwie osoby bez wspólnego języka mogą naprawdę korespondować. Aplikacja jest dostępna na iOS i Android.',
    },
    {
      q: 'Czy Lettie jest bezpłatne?',
      a: 'Pobranie i podstawowe korzystanie są bezpłatne: pisanie, odbieranie i odpowiadanie na listy nic nie kosztuje. Dodatkowe funkcje są dostępne w ramach opcjonalnej subskrypcji.',
    },
    {
      q: 'Czy muszę pisać po angielsku?',
      a: 'Nie. Piszesz w swoim języku, a druga osoba czyta w swoim, ponieważ każdy list można przetłumaczyć jednym dotknięciem po otwarciu. Oryginał zawsze widać przy tłumaczeniu.',
    },
    {
      q: 'Kiedy mogę wymienić dane kontaktowe z kimś?',
      a: 'Kiedy oboje zechcecie; nie ma ustalonej reguły. Ponieważ listy zajmują tyle czasu, ile wynosi odległość, macie czas, by się najpierw poznać. Trzymaj swoje dane w aplikacji, aż będziesz mieć pewność, i pamiętaj, że w każdej chwili możesz kogoś zgłosić lub zablokować.',
    },
    {
      q: 'Czemu na początku nie widać zdjęć?',
      a: 'Lettie zaczyna się bez zdjęcia profilowego, by pierwsze wrażenie opierało się na tym, co ktoś napisze. Zamiast zdjęcia każda osoba zaczyna z pikselową postacią: szesnaście jest bezpłatnych, a z selfie lub kilku słów o swoim wyglądzie można stworzyć własną (pierwsza postać jest darmowa, a zdjęcie nie jest zachowywane).',
    },
    {
      q: 'Czy bezpiecznie jest pisać do nieznajomych?',
      a: 'Pisanie do nieznajomego jest bezpieczne, dopóki kontrolujesz, co cię identyfikuje. Nie umieszczaj w listach swojego adresu, miejsca pracy, danych bankowych i dokumentów, i nigdy nikomu nie wysyłaj pieniędzy.',
    },
  ],
};

export const homeKeywords: string[] = [
  'przyjaciel korespondencyjny',
  'aplikacja do listów',
  'penpal online',
  'korespondencja zagraniczna',
  'wymiana językowa',
  'znajomi z całego świata',
  'list do nieznajomego',
  'aplikacja pen pal',
];
