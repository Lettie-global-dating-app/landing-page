import { FACTS } from '@/data/facts';
import { COMMUNITY } from '@/data/letterMap';

import type { HomeCopy } from '../home';

export const fr: HomeCopy = {
  nav: { how: 'Comment ça marche', features: 'Nouveautés 2.0', compare: 'vs Slowly', blog: 'Blog', guide: 'Guides', faq: 'FAQ', download: 'Télécharger' },
  eyebrow: 'LETTIE 2.0  ·  LETTRES LENTES',
  h1a: 'La lettre que vous écrivez aujourd’hui',
  h1b: 'arrive demain',
  sub: 'Votre lettre traverse vraiment un globe. Elle met le temps de la distance, et votre correspondant la lit dans sa langue. Un personnage plutôt qu’une photo, une lettre plutôt qu’un chat : des correspondants dans le monde entier.',
  free: 'Gratuit · iOS · Android',
  videoLabel: 'Vidéo de présentation de Lettie 2.0',
  stats: [
    [FACTS.languagesRounded, 'langues, traduites d’un geste'],
    [String(COMMUNITY.countries), 'pays de correspondants'],
    ['1–24 h', 'de livraison, selon la distance'],
  ],
  howTitle: 'Comment ça marche',
  howSub: 'Quatre écrans suffisent. Tous viennent de la vraie application.',
  how: [
    { t: 'Lancez une lettre dans le ciel', d: 'Une enveloppe décolle du globe et vole le temps de la distance réelle jusqu’à l’autre ville. En attendant, vous voyez sur le globe où elle en est.', alt: 'Une lettre qui survole le globe' },
    { t: 'Ramassez la lettre d’un inconnu', d: 'Les lettres lancées sans destinataire flottent sous forme d’enveloppes. Ouvrez celle qui vous parle, lisez, répondez : une correspondance à deux commence.', alt: 'Écran Découvrir avec des enveloppes qui flottent' },
    { t: 'Traduisez d’un geste', d: 'Ils écrivent dans leur langue, vous lisez dans la vôtre. Plus de 70 langues, l’original juste à côté de la traduction.', alt: 'Lecture d’une lettre avec le bouton de traduction' },
    { t: 'Collectionnez un timbre par pays', d: 'Les pays que vos lettres atteignent se colorent sur le globe et leurs timbres rejoignent votre album. Tirez un timbre pour qu\'il soit peint rien que pour vous, ou choisissez parmi 103 timbres de pays dans la boutique de timbres.', alt: 'Bureau de poste : album de timbres et globe' },
  ],
  newTitle: 'Nouveau dans la 2.0',
  newSub: 'Nous avons refait toute l’application en gardant une seule règle : une lettre doit prendre du temps.',
  news: [
    ['Un délai calculé sur la distance', 'L’arrivée est calculée d’après la distance réelle entre deux villes. Une heure ou deux dans le même pays, près d’une journée pour l’autre bout du monde. Suivez votre lettre sur le globe en attendant.'],
    ['Découvrir : ramasser des lettres lancées', 'Chaque jour, trois nouvelles enveloppes s’approchent. Le gratuit suffit largement ; une publicité par jour en donne davantage.'],
    ['Traduction IA, plus de 70 langues', 'À l’ouverture d’une lettre, un bouton traduit et affiche l’original à côté de la traduction. L’application elle-même parle plus de 70 langues.'],
    ['Des timbres peints rien que pour vous', 'Chaque timbre que vous tirez est fraîchement peint, pour que personne d\'autre n\'ait le même. La boutique de timbres propose des timbres de 103 pays à coller sur vos lettres.'],
    ['Un personnage plutôt qu’une photo', 'Le profil commence par un personnage pixel. Seize sont gratuits, et une photo ou quelques mots sur votre allure suffisent pour dessiner le vôtre dans le même style. Le premier est gratuit et la photo n’est pas conservée.'],
    ['Les présentations du jour, sans swiper', 'Quelques cartes de présentation par jour. Pas de notes, pas de défilement sans fin. Si quelqu’un vous intrigue, vous commencez par une lettre.'],
  ],
  cmpTitle: 'Quelle différence avec Slowly ?',
  cmpSub: 'Les deux sont des applications de correspondance où la lettre met le temps de la distance. Elles se séparent sur la façon de commencer la première lettre et de la lire.',
  cmpHead: ['', 'Lettie', 'Slowly'],
  cmpRows: [
    ['Première lettre', 'Vous ramassez des lettres lancées par d’autres (Découvrir)', 'Mise en relation par centres d’intérêt · lettres ouvertes'],
    ['Traduction', 'Dans l’application, un geste, plus de 70 langues, gratuit', 'Outils externes ou option payante'],
    ['Profil', 'Personnage pixel ; le vôtre d’après une photo ou des mots', 'Créateur d’avatar'],
    ['Présentations', 'Quelques cartes par jour', 'Aucune (recherche de correspondants)'],
    ['Timbres', 'Timbres fraîchement peints à chaque tirage + 103 timbres de pays, à coller sur les lettres', 'Collection de timbres par pays'],
  ],
  cmpLink: 'Lire la comparaison complète',
  cmpNote: 'D’après les informations publiques de septembre 2026. Slowly est une très belle application : essayez les deux et gardez celle qui vous convient.',
  faqTitle: 'Questions fréquentes',
  faqs: [
    { q: 'Lettie est-il gratuit ?', a: 'Oui. Écrire, ramasser des lettres, traduire, les seize personnages de base et votre premier personnage sur mesure sont gratuits. Les gemmes ne servent qu’aux extras : conversations illimitées, tirages de timbres ou un deuxième personnage.' },
    { q: 'Combien de temps met une lettre ?', a: 'Le délai est calculé sur la distance réelle entre deux villes. Une à deux heures dans le même pays, quelques heures vers un pays voisin, près d’une journée pour l’autre bout du monde. En attendant, vous suivez l’enveloppe sur le globe.' },
    { q: 'Peut-on correspondre sans parler la langue de l’autre ?', a: 'Oui. Chaque lettre a un bouton de traduction, et l’original reste à côté de la traduction. Avec plus de 70 langues, vous écrivez dans la vôtre et l’autre lit dans la sienne.' },
    { q: 'Comment connaître quelqu’un sans photo ?', a: 'Un profil, c’est un personnage pixel, quelques centres d’intérêt et les lettres elles-mêmes. Une photo ou quelques mots sur votre allure suffisent pour dessiner un personnage dans le même style (la photo n’est pas conservée). Vous découvrez comment quelqu’un pense avant de savoir à quoi il ressemble.' },
  ],
  blogTitle: 'À lire',
  blog: [
    ['lettie-vs-slowly', 'Lettie vs Slowly : deux applis de lettres lentes, une vraie différence', 'Pourquoi la même idée de « lettre lente » mène à une expérience différente'],
    ['how-to-start-penpal', 'Écrire une première lettre qui obtient une réponse', 'La structure qui fonctionne'],
    ['language-exchange-tips', 'Échange linguistique par lettres', 'Progresser même avec le bouton de traduction activé'],
  ],
  guideTitle: 'Guides',
  guides: [
    ['getting-started', 'Premiers pas'], ['writing-tips', 'Mieux écrire ses lettres'], ['cultural-exchange', 'Échange culturel'],
    ['language-learning', 'Apprendre une langue'], ['building-friendship', 'Construire une amitié'], ['safety-privacy', 'Sécurité et vie privée'],
  ],
  inEnglish: 'en anglais',
  ctaTitle: 'Une lettre ce soir',
  ctaSub: 'Demain matin, quelqu’un la lit à l’autre bout du monde.',
  footer: { tag: 'Lettres lentes, amis lointains', privacy: 'Politique de confidentialité', terms: 'Conditions d’utilisation', dev: 'Développeur : junhyeong kim', languages: 'Langues', letterMap: 'Carte des lettres', penpalApp: 'Appli de correspondants' },
};
