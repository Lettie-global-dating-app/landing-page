import { FACTS } from '@/data/facts';
import { COMMUNITY } from '@/data/letterMap';

import type { HomeCopy } from '../home';

export const fil: HomeCopy = {
  nav: { how: 'Paano ito gumagana', features: 'Bago sa 2.0', compare: 'vs Slowly', blog: 'Blog', guide: 'Mga Gabay', faq: 'FAQ', download: 'I-download' },
  eyebrow: 'LETTIE 2.0  ·  MABAGAL NA SULAT',
  h1a: 'Ang sulat na isinulat mo ngayon',
  h1b: 'darating bukas',
  sub: 'Talagang lumilipad ang sulat mo sa buong globo. Kasing-tagal ng distansya ang hintayin, at babasahin ito ng penpal mo sa kanyang sariling wika. Character sa halip na selfie, sulat sa halip na chat — mga penpal mula sa iba’t ibang bansa.',
  free: 'Libre · iOS · Android',
  videoLabel: 'Video ng intro ng Lettie 2.0',
  stats: [
    [FACTS.languagesRounded, 'wika, isang tap lang para i-translate'],
    [String(COMMUNITY.countries), 'bansang may penpal'],
    ['1–24 oras', 'oras ng pagdating, depende sa distansya'],
  ],
  howTitle: 'Paano ito gumagana',
  howSub: 'Sapat na ang apat na screen. Lahat real app na ito.',
  how: [
    { t: 'Ipalipad ang sulat mo sa himpapawid', d: 'Lilipad ang isang envelope mula sa globo, kasing-tagal ng totoong distansya papunta sa ibang siyudad. Habang naghihintay, makikita mo sa globo kung saan na ito.', alt: 'Sulat na lumilipad sa ibabaw ng globo' },
    { t: 'Pulutin ang sulat ng estranghero', d: 'Nag-float na envelope ang mga sulat na pinakawalan nang walang tatanggap. Buksan mo ang gusto mo, basahin, sagutin — at magsisimula na ang sariling correspondence ninyong dalawa.', alt: 'Discover screen na may mga nag-float na envelope' },
    { t: 'I-translate sa isang tap lang', d: 'Sumusulat sila sa kanilang wika, binabasa mo sa iyong wika. Mahigit 70 wika, kasama ang orihinal sa tabi ng translation.', alt: 'Pagbasa ng sulat gamit ang translate button' },
    { t: 'Kolektahin ang stamp mula sa bawat bansa', d: 'Napipintahan ang bansa sa globo kapag naabot ng sulat mo, at napupunta ang stamp nito sa album mo. Pwede ka ring kumuha ng pixel stamp at idikit sa sulat mo.', alt: 'Post office — stamp album at globo' },
  ],
  newTitle: 'Bago sa 2.0',
  newSub: 'Binuo naming muli ang buong app, pero isa lang ang panuntunang pinanatili — dapat may tagal ang isang sulat.',
  news: [
    ['Oras ng pagdating base sa distansya', 'Ang oras ng pagdating ay base sa distansya ng dalawang bansa. Isa o dalawang oras kung sa loob ng bansa, mga isang araw kung sa kabilang panig ng mundo. Panoorin ang sulat mo sa globo habang naghihintay.'],
    ['Discover — pagpulot ng mga pinakawalang sulat', 'Tatlong bagong envelope ang lumalapit kada araw. Sapat na ang libre; manood ng isang ad kada araw para sa mas marami.'],
    ['AI translation, mahigit 70 wika', 'Kapag binuksan mo ang isang sulat, may translate button, magkatabi ang orihinal at translation. Mahigit 70 wika rin ang suportado ng app mismo.'],
    ['Stamp mula sa bawat bansa', 'Napipintahan sa globo ang mga bansang pinagpapalitan mo ng sulat, at napupunta ang stamp sa album. May random pixel stamp draws pa.'],
    ['Character sa halip na litrato', 'Pixel character ang simula ng profile. Labing-anim na libre, at mula sa isang selfie o ilang salita tungkol sa hitsura mo, iguguhit ang sarili mong character sa parehong style. Libre ang una, at hindi itinatago ang litrato.'],
    ['Mga intro ngayon — walang swiping', 'Ilang intro card lang kada araw. Walang score, walang walang-katapusang swiping. Kung may nakaka-interes, magsisimula kayo sa isang sulat.'],
  ],
  cmpTitle: 'Ano ang pagkakaiba nito sa Slowly?',
  cmpSub: 'Pareho silang penpal app kung saan kasing-tagal ng distansya ang hintayin ng sulat. Ang pagkakaiba ay paano nagsisimula ang unang sulat at paano mo ito babasahin.',
  cmpHead: ['', 'Lettie', 'Slowly'],
  cmpRows: [
    ['Unang sulat', 'Pulutin ang mga sulat na pinakawalan ng iba (Discover)', 'Interest matching · open letters'],
    ['Translation', 'Sa loob ng app, isang tap, mahigit 70 wika, libre', 'External tools o paid feature'],
    ['Profile', 'Pixel character; ang sa iyo mula sa litrato o salita', 'Avatar builder'],
    ['Mga intro', 'Ilang intro card kada araw', 'Wala (pag-search ng penpal)'],
    ['Stamps', 'Per-bansa + pixel stamp draws, idikit sa sulat', 'Pangkolekta ng stamp per bansa'],
  ],
  cmpLink: 'Basahin ang buong comparison',
  cmpNote: 'Base sa pampublikong impormasyon noong Setyembre 2026. Magandang app ang Slowly — subukan mong dalawa at panatilihin kung alin ang bagay sa iyo.',
  faqTitle: 'Mga tanong ng mga tao',
  faqs: [
    { q: 'Libre ba ang Lettie?', a: 'Oo. Libre ang pagsulat, pagpulot ng sulat, translation, ang labing-anim na base character, at ang unang custom character mo. Para sa extra lang ang gems, gaya ng unlimited na conversation, stamp draws, o pangalawang character.' },
    { q: 'Gaano katagal bago dumating ang isang sulat?', a: 'Base ito sa distansya ng dalawang bansa. Isa hanggang dalawang oras kung sa loob ng bansa, ilang oras kung sa karatig-bansa, malapit sa isang araw kung sa kabilang panig ng mundo. Habang naghihintay, makikita mo ang envelope sa globo.' },
    { q: 'Pwede ba akong magkaroon ng penpal kahit hindi ko kabisado ang wika niya?', a: 'Oo. Bawat sulat ay may translate button, at nakatabi ang orihinal sa translation. Dahil mahigit 70 wika ang suportado, sumusulat ka sa wika mo at binabasa niya ito sa kanya.' },
    { q: 'Paano ko makikilala ang isang tao kung walang litrato?', a: 'Ang profile ay pixel character, ilang interes, at ang mga sulat mismo. Mula sa isang selfie o ilang salita tungkol sa hitsura mo, maiiguhit ang isang character sa parehong style (hindi itinatago ang litrato). Nakikilala mo muna kung paano mag-isip ang tao bago kung ano ang hitsura niya.' },
  ],
  blogTitle: 'Babasahin',
  blog: [
    ['lettie-vs-slowly', 'Lettie vs Slowly — dalawang slow-letter app, isang totoong pagkaiba', 'Bakit iba ang karanasan kahit pareho ang ideya ng "mabagal na sulat"'],
    ['how-to-start-penpal', 'Paano sumulat ng unang sulat na sinasagot', 'Ang structure na gumagana'],
    ['language-exchange-tips', 'Pag-aaral ng wika gamit ang pagsusulatan', 'Paano pa rin umuunlad kahit naka-on ang translate button'],
  ],
  guideTitle: 'Mga Gabay',
  guides: [
    ['getting-started', 'Pagsisimula'], ['writing-tips', 'Mas magandang pagsusulat ng sulat'], ['cultural-exchange', 'Pagpapalitan ng kultura'],
    ['language-learning', 'Pag-aaral ng wika'], ['building-friendship', 'Pagbuo ng pagkakaibigan'], ['safety-privacy', 'Kaligtasan at privacy'],
  ],
  inEnglish: 'Ingles',
  ctaTitle: 'Isang sulat ngayong gabi',
  ctaSub: 'Babasahin ito ng isang tao sa kabilang panig ng mundo kinabukasan ng umaga.',
  footer: { tag: 'Mabagal na sulat, malayong kaibigan', privacy: 'Patakaran sa Privacy', terms: 'Mga Tuntunin ng Serbisyo', dev: 'Developer: junhyeong kim', languages: 'Mga Wika', letterMap: 'Mapa ng Sulat', penpalApp: 'Penpal App' },
};
