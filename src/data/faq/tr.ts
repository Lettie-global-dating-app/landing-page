import type { FaqContent } from '@/data/localizedFaq';

export const faq: FaqContent = {
  title: 'Lettie hakkında sık sorulan sorular',
  description:
    "Lettie nedir, ücretsiz mi, mektup çevirisi nasıl çalışır ve bir mektup arkadaşıyla iletişim bilgisi ne zaman paylaşılır — hepsi burada.",
  subtitle: 'İlk mektubu yazmadan önce sorulan sorular',
  keywords: ['Lettie', 'mektup arkadaşı', 'mektup uygulaması', 'penpal', 'dil değişimi'],
  items: [
    {
      q: 'Lettie nedir?',
      a: 'Lettie, başka ülkelerden insanlara mektup yazmak için bir uygulama. Her mektupta, okuyan kişinin diline çeviren bir düğme var (70’ten fazla dil), böylece ortak dili olmayan iki kişi gerçek bir yazışma sürdürebilir. iOS ve Android’de kullanılabilir.',
    },
    {
      q: 'Lettie ücretsiz mi?',
      a: 'İndirme ve temel kullanım ücretsizdir: mektup yazabilir, alabilir ve cevaplayabilirsin, ödeme gerekmez. Sınırsız sohbet, pul çekilişi veya ikinci bir karakter gibi isteğe bağlı ekstralar için elmaslar kullanılır.',
    },
    {
      q: 'İngilizce yazmak zorunda mıyım?',
      a: 'Hayır. Kendi dilinde yazarsın ve karşı taraf kendi dilinde okur, çünkü her mektup bir dokunuşla çevrilebilir. Orijinal metni çevirinin yanında da görebilirsin.',
    },
    {
      q: 'Biriyle iletişim bilgimi ne zaman paylaşabilirim?',
      a: 'İkiniz de istediğinizde; sabit bir kural yok. Mektuplar mesafeye göre zaman aldığı için, önce birbirinizi tanımak için zamanınız olur. Emin olana kadar bilgilerini uygulama içinde tut ve istediğin an herkesi şikayet edebileceğini veya engelleyebileceğini unutma.',
    },
    {
      q: 'Neden başta fotoğraf görünmüyor?',
      a: 'Lettie, ilk izlenimin birinin yazdıkları olması için profil fotoğrafı olmadan başlar. Fotoğraf yerine herkes bir piksel karakterle başlar: on altısı ücretsizdir ve bir selfie veya görünümünle ilgili birkaç kelimeyle kendi karakterin çizilir (ilki ücretsizdir, fotoğraf saklanmaz).',
    },
    {
      q: 'Yabancılara mektup yazmak güvenli mi?',
      a: 'Seni tanımlayan bilgileri kontrol ettiğin sürece bir yabancıya mektup yazmak güvenlidir. Adresini, işyerini, banka bilgilerini ve belgelerini mektupların dışında tut ve hiçbir koşulda kimseye para gönderme.',
    },
  ],
};

export const homeKeywords: string[] = [
  'mektup arkadaşı uygulaması',
  'penpal uygulaması',
  'yabancı arkadaş edin',
  'dil değişimi uygulaması',
  'mektup yazma uygulaması',
  'yurt dışından arkadaş',
  'Slowly alternatifi',
  'yavaş mektup uygulaması',
];
