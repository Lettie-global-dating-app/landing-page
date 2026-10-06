import { FACTS } from '@/data/facts';
import { COMMUNITY } from '@/data/letterMap';

import type { HomeCopy } from '../home';

export const id: HomeCopy = {
  nav: { how: 'Cara kerja', features: 'Baru di 2.0', compare: 'vs Slowly', blog: 'Blog', guide: 'Panduan', faq: 'FAQ', download: 'Unduh' },
  eyebrow: 'LETTIE 2.0  ·  SURAT YANG PELAN',
  h1a: 'Surat yang kamu tulis hari ini',
  h1b: 'tiba besok',
  sub: 'Suratmu benar-benar terbang melintasi bola dunia. Lamanya sesuai jarak, dan sahabat penamu membacanya dalam bahasanya sendiri. Karakter sebagai ganti foto, surat sebagai ganti chat: sahabat pena dari seluruh dunia.',
  free: 'Gratis · iOS · Android',
  videoLabel: 'Video perkenalan Lettie 2.0',
  stats: [
    [FACTS.languagesRounded, 'bahasa, diterjemahkan sekali ketuk'],
    [String(COMMUNITY.countries), 'negara sahabat pena'],
    ['1–24 jam', 'pengiriman sesuai jarak'],
  ],
  howTitle: 'Begini caranya',
  howSub: 'Empat layar sudah cukup. Semuanya tampilan aplikasi asli.',
  how: [
    { t: 'Lepaskan surat ke langit', d: 'Sebuah amplop terangkat dari bola dunia dan terbang selama waktu yang dihitung dari jarak sebenarnya ke kota tujuan. Sambil menunggu, kamu bisa melihat posisinya di bola dunia.', alt: 'Surat terbang di atas bola dunia' },
    { t: 'Pungut surat orang asing', d: 'Surat yang dilepaskan tanpa alamat mengambang sebagai amplop. Buka yang menarik, baca, balas, dan korespondensi berdua pun dimulai.', alt: 'Layar Temukan dengan amplop mengambang' },
    { t: 'Terjemahkan sekali ketuk', d: 'Mereka menulis dalam bahasanya, kamu membaca dalam bahasamu. Lebih dari 70 bahasa, dengan teks asli tepat di samping terjemahannya.', alt: 'Membaca surat dengan tombol terjemahkan' },
    { t: 'Kumpulkan prangko dari setiap negara', d: 'Negara yang dicapai suratmu akan diwarnai di bola dunia, dan prangkonya masuk ke albummu. Tarik prangko dan prangko itu akan dilukis khusus untukmu, atau pilih dari 103 prangko negara di toko prangko.', alt: 'Kantor pos: album prangko dan bola dunia' },
  ],
  newTitle: 'Yang baru di 2.0',
  newSub: 'Kami membangun ulang seluruh aplikasi dan hanya menyisakan satu aturan: surat harus butuh waktu.',
  news: [
    ['Waktu kirim sesuai jarak', 'Waktu tiba dihitung dari jarak sebenarnya antara dua kota. Satu dua jam di dalam negeri, sekitar sehari ke belahan dunia lain. Pantau suratmu di bola dunia sambil menunggu.'],
    ['Temukan: memungut surat yang dilepas', 'Setiap hari, tiga amplop baru mendekat. Gratis sudah lebih dari cukup; tonton satu iklan sehari untuk dapat lebih.'],
    ['Terjemahan AI, lebih dari 70 bahasa', 'Saat membuka surat ada tombol terjemahkan, teks asli dan terjemahan berdampingan. Aplikasinya sendiri juga tersedia dalam lebih dari 70 bahasa.'],
    ['Prangko yang dilukis khusus untukmu', 'Setiap prangko yang kamu tarik dilukis baru, jadi tidak ada orang lain yang punya prangko yang sama. Toko prangko menyediakan prangko dari 103 negara untuk ditempel di suratmu.'],
    ['Karakter sebagai ganti foto', 'Profil dimulai sebagai karakter piksel. Enam belas gratis, dan dari satu foto atau beberapa kata tentang penampilanmu kami menggambar karaktermu dengan gaya yang sama. Yang pertama gratis dan fotonya tidak disimpan.'],
    ['Perkenalan hari ini, tanpa geser', 'Hanya beberapa kartu perkenalan sehari. Tanpa skor, tanpa geser tanpa akhir. Kalau ada yang menarik, mulai dengan satu surat.'],
  ],
  cmpTitle: 'Apa bedanya dengan Slowly?',
  cmpSub: 'Keduanya aplikasi sahabat pena yang suratnya butuh waktu sesuai jarak. Perbedaannya ada pada cara surat pertama dimulai dan cara kamu membacanya.',
  cmpHead: ['', 'Lettie', 'Slowly'],
  cmpRows: [
    ['Surat pertama', 'Memungut surat yang dilepas orang lain (Temukan)', 'Pencocokan minat · surat terbuka'],
    ['Terjemahan', 'Di dalam aplikasi, sekali ketuk, lebih dari 70 bahasa, gratis', 'Alat eksternal atau fitur berbayar'],
    ['Profil', 'Karakter piksel; milikmu dari foto atau kata-kata', 'Penyusun avatar'],
    ['Perkenalan', 'Beberapa kartu sehari', 'Tidak ada (pencarian sahabat pena)'],
    ['Prangko', 'Prangko dilukis baru setiap kali ditarik + 103 prangko negara, bisa ditempel di surat', 'Koleksi prangko per negara'],
  ],
  cmpLink: 'Baca perbandingan lengkap',
  cmpNote: 'Berdasarkan informasi publik per September 2026. Slowly aplikasi yang bagus; coba keduanya dan pilih yang cocok.',
  faqTitle: 'Pertanyaan yang sering diajukan',
  faqs: [
    { q: 'Apakah Lettie gratis?', a: 'Ya. Menulis, memungut surat, terjemahan, enam belas karakter dasar, dan karakter khusus pertamamu semuanya gratis. Permata hanya untuk tambahan seperti percakapan tanpa batas, undian prangko, atau karakter kedua.' },
    { q: 'Berapa lama surat sampai?', a: 'Dihitung dari jarak sebenarnya antara dua kota. Satu sampai dua jam di dalam negeri, beberapa jam ke negara tetangga, hampir sehari ke belahan dunia lain. Sambil menunggu, kamu bisa melihat amplopnya di bola dunia.' },
    { q: 'Bisa punya sahabat pena tanpa bisa bahasanya?', a: 'Bisa. Setiap surat punya tombol terjemahkan, dan teks aslinya tetap di samping terjemahan. Dengan lebih dari 70 bahasa, kamu menulis dalam bahasamu dan dia membaca dalam bahasanya.' },
    { q: 'Bagaimana mengenal orang tanpa foto?', a: 'Profil terdiri dari karakter piksel, beberapa minat, dan surat-suratnya sendiri. Dari satu foto atau beberapa kata tentang penampilanmu, kami menggambar karakter dengan gaya yang sama (fotonya tidak disimpan). Kamu tahu cara seseorang berpikir sebelum tahu rupanya.' },
  ],
  blogTitle: 'Bacaan',
  blog: [
    ['lettie-vs-slowly', 'Lettie vs Slowly: dua aplikasi surat pelan, satu perbedaan nyata', 'Mengapa ide “surat pelan” yang sama menghasilkan pengalaman berbeda'],
    ['how-to-start-penpal', 'Cara menulis surat pertama yang dibalas', 'Struktur yang berhasil'],
    ['language-exchange-tips', 'Pertukaran bahasa lewat surat', 'Tetap berkembang meski tombol terjemahkan menyala'],
  ],
  guideTitle: 'Panduan',
  guides: [
    ['getting-started', 'Memulai'], ['writing-tips', 'Menulis surat lebih baik'], ['cultural-exchange', 'Pertukaran budaya'],
    ['language-learning', 'Belajar bahasa'], ['building-friendship', 'Membangun persahabatan'], ['safety-privacy', 'Keamanan dan privasi'],
  ],
  inEnglish: 'dalam bahasa Inggris',
  ctaTitle: 'Satu surat malam ini',
  ctaSub: 'Besok pagi seseorang membacanya di belahan dunia lain.',
  footer: { tag: 'Surat pelan, teman jauh', privacy: 'Kebijakan privasi', terms: 'Ketentuan layanan', dev: 'Pengembang: junhyeong kim', languages: 'Bahasa', letterMap: 'Peta surat', penpalApp: 'Aplikasi sahabat pena' },
};
