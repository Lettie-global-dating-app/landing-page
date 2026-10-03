import { FACTS } from '@/data/facts';
import { COMMUNITY } from '@/data/letterMap';

import type { HomeCopy } from '../home';

export const tr: HomeCopy = {
  nav: { how: 'Nasıl çalışır', features: "2.0'daki yenilikler", compare: "Slowly'yle kıyasla", blog: 'Blog', guide: 'Rehberler', faq: 'SSS', download: 'İndir' },
  eyebrow: 'LETTIE 2.0  ·  YAVAŞ MEKTUPLAR',
  h1a: 'Bugün yazdığın mektup',
  h1b: 'yarın ulaşır',
  sub: 'Mektubun gerçekten bir küre üzerinde uçuyor. Mesafe kadar zaman alıyor ve mektup arkadaşın onu kendi dilinde okuyor. Selfie yerine bir karakter, sohbet yerine bir mektup — dünyanın dört bir yanından mektup arkadaşları.',
  free: 'Ücretsiz · iOS · Android',
  videoLabel: 'Lettie 2.0 tanıtım videosu',
  stats: [
    [FACTS.languagesRounded, 'dil, bir dokunuşla çeviri'],
    [String(COMMUNITY.countries), 'ülkeden mektup arkadaşı'],
    ['1–24 saat', 'mesafeye göre teslimat'],
  ],
  howTitle: 'Nasıl çalışır',
  howSub: 'Dört ekran yeter. Hepsi gerçek uygulamadan.',
  how: [
    { t: 'Bir mektubu gökyüzüne bırak', d: 'Bir zarf küreden havalanır ve diğer şehre olan gerçek mesafe kadar sürede uçar. Beklerken nerede olduğunu kürede izleyebilirsin.', alt: 'Küre üzerinde uçan bir mektup' },
    { t: 'Birinin bıraktığı mektubu al', d: 'Belirli birine değil, rastgele bırakılan mektuplar zarf olarak süzülür. Beğendiğin birini aç, oku, cevapla — ikiniz arasında bir yazışma başlar.', alt: 'Süzülen zarflarla Keşfet ekranı' },
    { t: 'Bir dokunuşla çevir', d: 'Karşı taraf kendi dilinde yazar, sen kendi dilinde okursun. 70’ten fazla dil, orijinal metin çevirinin hemen yanında.', alt: 'Çeviri düğmesiyle mektup okuma ekranı' },
    { t: 'Her ülkeden bir pul topla', d: 'Mektuplarının ulaştığı ülkeler kürede renklenir, pulları albümüne eklenir. Piksel pullar çek ve mektuplarına yapıştır.', alt: 'Postane — pul albümü ve küre' },
  ],
  newTitle: "2.0'daki yenilikler",
  newSub: 'Uygulamayı baştan yaptık ve tek bir kuralı korudik: bir mektup zaman almalı.',
  news: [
    ['Mesafeye göre teslimat süresi', 'Varış süresi iki ülke arasındaki mesafeden hesaplanır. Aynı ülke içinde bir iki saat, dünyanın diğer ucuna yaklaşık bir gün. Beklerken mektubunu kürede izle.'],
    ['Keşfet — bırakılan mektupları al', 'Günde bir kez üç yeni zarf yaklaşır. Ücretsizi zaten yeterli; daha fazlası için günde bir reklam izle.'],
    ["Yapay zeka çevirisi, 70'ten fazla dil", 'Bir mektubu açtığında çeviri düğmesi var, orijinal ve çeviri yan yana. Uygulamanın kendisi de 70’ten fazla dilde.'],
    ['Her ülkeden bir pul', 'Mektuplaştığın ülkeler kürede renklenir, pulları albümüne gider. Rastgele piksel pul çekilişleri de var.'],
    ['Fotoğraf yerine bir karakter', 'Profiller piksel karakterlerle başlar. On altısı ücretsiz, bir selfie veya görünümünle ilgili birkaç kelime aynı stilde kendi karakterine dönüşür. İlki ücretsiz, fotoğraf saklanmaz.'],
    ['Günün tanışma kartları — kaydırma yok', 'Günde birkaç tanışma kartı gelir. Puan yok, sonu gelmeyen kaydırma yok. Biri ilgini çekerse bir mektupla başlarsın.'],
  ],
  cmpTitle: "Bu Slowly'den farkı ne?",
  cmpSub: 'İkisi de mektubun mesafe kadar sürdüğü mektup arkadaşlığı uygulamaları. Ayrıştıkları nokta, ilk mektubun nasıl başladığı ve nasıl okunduğu.',
  cmpHead: ['', 'Lettie', 'Slowly'],
  cmpRows: [
    ['İlk mektup', 'Yabancıların bıraktığı mektupları al (Keşfet)', 'İlgi alanına göre eşleşme · açık mektuplar'],
    ['Çeviri', 'Uygulama içinde, bir dokunuş, 70’ten fazla dil, ücretsiz', 'Dış araçlar veya ücretli özellik'],
    ['Profil', 'Piksel karakter; fotoğraf veya kelimelerden kendi karakterin', 'Avatar oluşturucu'],
    ['Tanışma', 'Günde birkaç tanışma kartı', 'Yok (mektup arkadaşı arama)'],
    ['Pullar', 'Ülke başına + piksel pul çekilişi, mektuba yapıştırılır', 'Ülke bazlı pul koleksiyonu'],
  ],
  cmpLink: 'Tam karşılaştırmayı oku',
  cmpNote: "Eylül 2026 itibarıyla kamuya açık bilgilere dayanır. Slowly da güzel bir uygulama — ikisini de dene, sana uyanı kullan.",
  faqTitle: 'Sorulan sorular',
  faqs: [
    { q: 'Lettie ücretsiz mi?', a: 'Evet. Mektup yazmak, mektup almak, çeviri, on altı temel karakter ve ilk özel karakterin hepsi ücretsiz. Elmaslar sadece sınırsız sohbet, pul çekilişi veya ikinci karakter gibi ekstralar için.' },
    { q: 'Bir mektup ulaşmak için ne kadar sürer?', a: 'İki ülke arasındaki mesafeden hesaplanır. Aynı ülke içinde bir iki saat, komşu bir ülkeye birkaç saat, dünyanın diğer ucuna yaklaşık bir gün. Beklerken zarfı kürede izleyebilirsin.' },
    { q: 'Dilini bilmediğim biriyle mektuplaşabilir miyim?', a: 'Evet. Her mektupta bir çeviri düğmesi var ve orijinal metin çevirinin yanında durur. 70’ten fazla dille, sen kendi dilinde yazarsın, karşı taraf kendi dilinde okur.' },
    { q: 'Fotoğraf olmadan birini nasıl tanırım?', a: 'Profil bir piksel karakter, birkaç ilgi alanı ve mektupların kendisidir. Bir selfie veya görünümünle ilgili birkaç kelime aynı stilde bir karaktere dönüşebilir (fotoğraf saklanmaz). Birinin neye benzediğinden önce nasıl düşündüğünü öğrenirsin.' },
  ],
  blogTitle: 'Okumalar',
  blog: [
    ['lettie-vs-slowly', "Lettie ve Slowly — iki yavaş mektup uygulaması, bir gerçek fark", 'Aynı "yavaş mektup" fikri neden farklı bir deneyime yol açıyor'],
    ['how-to-start-penpal', 'Cevap alan bir ilk mektup nasıl yazılır', 'İşe yarayan yapı'],
    ['language-exchange-tips', 'Mektuplarla dil değişimi', 'Çeviri düğmesi açıkken de ilerlemek'],
  ],
  guideTitle: 'Rehberler',
  guides: [
    ['getting-started', 'Başlarken'], ['writing-tips', 'Daha iyi mektup yazma'], ['cultural-exchange', 'Kültürel değişim'],
    ['language-learning', 'Dil öğrenme'], ['building-friendship', 'Arkadaşlık kurmak'], ['safety-privacy', 'Güvenlik ve gizlilik'],
  ],
  inEnglish: 'İngilizce',
  ctaTitle: 'Bu gece bir mektup',
  ctaSub: 'Dünyanın diğer ucunda biri yarın sabah okuyor.',
  footer: { tag: 'Yavaş mektuplar, uzak arkadaşlar', privacy: 'Gizlilik Politikası', terms: 'Kullanım Şartları', dev: 'Geliştirici: junhyeong kim', languages: 'Diller', letterMap: 'Mektup haritası', penpalApp: 'Mektup arkadaşlığı uygulaması' },
};
