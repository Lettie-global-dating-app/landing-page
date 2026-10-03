import { FACTS } from '@/data/facts';
import { COMMUNITY } from '@/data/letterMap';

import type { HomeCopy } from '../home';

export const ms: HomeCopy = {
  nav: { how: 'Cara ia berfungsi', features: 'Baharu dalam 2.0', compare: 'vs Slowly', blog: 'Blog', guide: 'Panduan', faq: 'Soalan Lazim', download: 'Muat turun' },
  eyebrow: 'LETTIE 2.0  ·  SURAT PERLAHAN',
  h1a: 'Surat yang kamu tulis hari ini',
  h1b: 'tiba esok',
  sub: 'Suratmu benar-benar terbang merentasi glob dunia. Masanya mengikut jarak, dan sahabat penamu membacanya dalam bahasanya sendiri. Watak sebagai ganti gambar selfie, surat sebagai ganti chat — sahabat pena dari seluruh dunia.',
  free: 'Percuma · iOS · Android',
  videoLabel: 'Video pengenalan Lettie 2.0',
  stats: [
    [FACTS.languagesRounded, 'bahasa, diterjemah dengan satu ketukan'],
    [String(COMMUNITY.countries), 'negara sahabat pena'],
    ['1–24 jam', 'penghantaran mengikut jarak'],
  ],
  howTitle: 'Begini caranya',
  howSub: 'Empat skrin sudah cukup. Semuanya skrin aplikasi sebenar.',
  how: [
    { t: 'Lepaskan surat ke udara', d: 'Sampul surat berlepas dari glob dan terbang selama tempoh yang dikira daripada jarak sebenar ke bandar itu. Sambil menunggu, kamu boleh lihat kedudukannya di atas glob.', alt: 'Surat terbang di atas glob dunia' },
    { t: 'Pungut surat orang yang tidak dikenali', d: 'Surat yang dilepaskan tanpa alamat khusus terapung sebagai sampul. Buka yang kamu minat, baca, balas — dan korespondensi antara kamu berdua pun bermula.', alt: 'Skrin Temui dengan sampul surat terapung' },
    { t: 'Terjemah dengan satu ketukan', d: 'Mereka menulis dalam bahasa mereka, kamu membaca dalam bahasa kamu. Lebih 70 bahasa, dengan teks asal di sebelah terjemahan.', alt: 'Membaca surat dengan butang terjemah' },
    { t: 'Kumpul setem dari setiap negara', d: 'Negara yang dicapai oleh suratmu diwarnakan pada glob, dan setemnya masuk ke dalam albummu. Cabut setem piksel dan tampalkan pada suratmu.', alt: 'Pejabat pos — album setem dan glob' },
  ],
  newTitle: 'Baharu dalam 2.0',
  newSub: 'Kami bina semula seluruh aplikasi dan hanya kekalkan satu peraturan — surat perlu mengambil masa.',
  news: [
    ['Masa penghantaran mengikut jarak', 'Masa tiba dikira daripada jarak sebenar antara dua negara. Sejam dua dalam negara yang sama, hampir sehari ke hujung dunia yang lain. Ikuti suratmu di atas glob sambil menunggu.'],
    ['Temui — memungut surat yang dilepaskan', 'Tiga sampul baharu datang hampir sekali sehari. Percuma pun sudah cukup; tonton satu iklan sehari untuk dapat lebih.'],
    ['Terjemahan AI, lebih 70 bahasa', 'Bila kamu buka surat, ada butang terjemah, teks asal dan terjemahan bersebelahan. Aplikasi itu sendiri juga menyokong lebih 70 bahasa.'],
    ['Setem dari setiap negara', 'Negara yang berbalas surat denganmu diwarnakan pada glob dan setemnya masuk ke album. Ada juga cabutan setem piksel secara rawak.'],
    ['Watak sebagai ganti gambar', 'Profil bermula sebagai watak piksel. Enam belas adalah percuma, dan daripada gambar selfie atau beberapa patah kata tentang rupamu, kami lukis watak sendiri dengan gaya yang sama. Yang pertama percuma, dan gambar itu tidak disimpan.'],
    ['Pengenalan hari ini — tanpa leret', 'Hanya beberapa kad pengenalan sehari. Tanpa skor, tanpa leret tanpa henti. Kalau seseorang menarik minatmu, kamu mula dengan satu surat.'],
  ],
  cmpTitle: 'Apa bezanya dengan Slowly?',
  cmpSub: 'Kedua-duanya aplikasi sahabat pena di mana surat mengambil masa mengikut jarak. Perbezaannya terletak pada cara surat pertama bermula dan cara kamu membacanya.',
  cmpHead: ['', 'Lettie', 'Slowly'],
  cmpRows: [
    ['Surat pertama', 'Pungut surat yang dilepaskan orang lain (Temui)', 'Padanan minat · surat terbuka'],
    ['Terjemahan', 'Dalam aplikasi, satu ketukan, lebih 70 bahasa, percuma', 'Alat luaran atau ciri berbayar'],
    ['Profil', 'Watak piksel; milikmu daripada gambar atau kata-kata', 'Pembina avatar'],
    ['Pengenalan', 'Beberapa kad sehari', 'Tiada (carian sahabat pena)'],
    ['Setem', 'Mengikut negara + cabutan setem piksel, boleh ditampal pada surat', 'Kutipan setem mengikut negara'],
  ],
  cmpLink: 'Baca perbandingan penuh',
  cmpNote: 'Berdasarkan maklumat awam setakat September 2026. Slowly aplikasi yang bagus — cuba kedua-duanya dan kekalkan yang paling sesuai.',
  faqTitle: 'Soalan yang sering ditanya',
  faqs: [
    { q: 'Adakah Lettie percuma?', a: 'Ya. Menulis surat, memungut surat, terjemahan, enam belas watak asas dan watak sendiri pertamamu semuanya percuma. Gem hanya untuk tambahan seperti perbualan tanpa had, cabutan setem atau watak kedua.' },
    { q: 'Berapa lama surat mengambil masa untuk tiba?', a: 'Masanya dikira daripada jarak sebenar antara dua negara. Satu hingga dua jam dalam negara yang sama, beberapa jam ke negara jiran, hampir sehari ke hujung dunia yang lain. Sambil menunggu, kamu boleh lihat sampul itu di atas glob.' },
    { q: 'Bolehkah saya ada sahabat pena tanpa tahu bahasanya?', a: 'Boleh. Setiap surat ada butang terjemah, dan teks asal kekal di sebelah terjemahan. Dengan lebih 70 bahasa, kamu menulis dalam bahasa kamu dan dia membaca dalam bahasanya.' },
    { q: 'Bagaimana saya mengenali seseorang tanpa gambar?', a: 'Profil terdiri daripada watak piksel, beberapa minat, dan surat itu sendiri. Daripada gambar selfie atau beberapa patah kata tentang rupamu, satu watak boleh dilukis dengan gaya yang sama (gambar itu tidak disimpan). Kamu kenal cara seseorang berfikir dahulu sebelum tahu rupanya.' },
  ],
  blogTitle: 'Bacaan',
  blog: [
    ['lettie-vs-slowly', 'Lettie vs Slowly — dua aplikasi surat perlahan, satu perbezaan sebenar', 'Mengapa idea "surat perlahan" yang sama membawa pengalaman berbeza'],
    ['how-to-start-penpal', 'Cara menulis surat pertama yang mendapat balasan', 'Struktur yang berkesan'],
    ['language-exchange-tips', 'Pertukaran bahasa melalui surat', 'Terus maju walaupun butang terjemah dihidupkan'],
  ],
  guideTitle: 'Panduan',
  guides: [
    ['getting-started', 'Bermula'], ['writing-tips', 'Menulis surat lebih baik'], ['cultural-exchange', 'Pertukaran budaya'],
    ['language-learning', 'Pembelajaran bahasa'], ['building-friendship', 'Membina persahabatan'], ['safety-privacy', 'Keselamatan & privasi'],
  ],
  inEnglish: 'bahasa Inggeris',
  ctaTitle: 'Satu surat malam ini',
  ctaSub: 'Seseorang di hujung dunia yang lain membacanya esok pagi.',
  footer: { tag: 'Surat perlahan, kawan jauh', privacy: 'Dasar Privasi', terms: 'Terma Perkhidmatan', dev: 'Pembangun: junhyeong kim', languages: 'Bahasa', letterMap: 'Peta surat', penpalApp: 'Aplikasi sahabat pena' },
};
