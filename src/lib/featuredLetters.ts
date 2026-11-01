import { API_BASE } from './letterShare';

/**
 * 랜딩에 싣는 편지 (2026-11-01 대표 「허용한 사람들의 글은 우리 랜딩페이지에도 올리기」).
 * 앱에서 「레티 인스타그램·홈페이지에 실려도 좋아요」에 동의한 공개 편지 — 서버가 이름을 빼고 준다(backend FeaturedLetterService).
 * 카드를 누르면 그 편지의 웹 페이지(/open/letter/[token], 이름을 숨긴 공유)로 간다.
 */
export type FeaturedLetter = {
  token: string;
  url: string;
  countryCode: string;
  characterKey: string | null;
  characterImageUrl: string | null;
  stamp: string | null;
  prompt: string;
  body: string;
  imageUrl: string | null;
  publishedAt: string;
};

/** 홈은 정적으로 그리고 10분마다 다시 받는다. 서버가 안 되면 빈 목록 — 칸이 통째로 숨는다. */
export async function fetchFeaturedLetters(limit = 9): Promise<FeaturedLetter[]> {
  try {
    const res = await fetch(`${API_BASE}/api/v2/public/featured-letters?limit=${limit}`, { next: { revalidate: 600 } });
    if (!res.ok) return [];
    const data = (await res.json()) as FeaturedLetter[];
    return Array.isArray(data) ? data.filter((l) => /^[A-Za-z0-9]{8,16}$/.test(l.token)) : [];
  } catch {
    return [];
  }
}

/** 칸 문구 — 홈 문구가 있는 언어(src/i18n/home)마다. 없는 말은 영어. */
export const FEATURED_COPY: Record<string, { eyebrow: string; title: string; sub: string; read: string }> = {
  ko: {"eyebrow": "하늘 우편 · 진짜 편지", "title": "레티 하늘에 떠 있는 편지", "sub": "누군가 모르는 사람에게 띄운 진짜 편지예요. 쓴 사람이 실어도 좋다고 한 것만 보여 드려요.", "read": "읽고 답장하기"},
  en: {"eyebrow": "AIR MAIL · REAL LETTERS", "title": "Letters floating in Lettie's sky", "sub": "Real letters people sent to whoever finds them. We only show ones the writer said we could share.", "read": "Read & write back"},
  es: {"eyebrow": "AIR MAIL · CARTAS REALES", "title": "Cartas flotando en el cielo de Lettie", "sub": "Cartas reales enviadas a quien las encuentre. Solo mostramos las que su autor autorizó a compartir.", "read": "Leer y responder"},
  pt: {"eyebrow": "AIR MAIL · CARTAS REAIS", "title": "Cartas flutuando no céu da Lettie", "sub": "Cartas reais enviadas para quem as encontrar. Só mostramos aquelas que o autor permitiu compartilhar.", "read": "Ler e responder"},
  ja: {"eyebrow": "AIR MAIL · 本物の手紙", "title": "Lettieの空に浮かぶ手紙", "sub": "誰かに届くよう送られた本物の手紙です。差出人が公開を許可したものだけを表示しています。", "read": "読んで返信する"},
  fr: {"eyebrow": "AIR MAIL · VRAIES LETTRES", "title": "Des lettres flottant dans le ciel de Lettie", "sub": "De vraies lettres envoyées à quiconque les trouvera. Nous ne montrons que celles autorisées par leur auteur.", "read": "Lire et répondre"},
  zh: {"eyebrow": "AIR MAIL · 真实信件", "title": "飘浮在 Lettie 天空中的信件", "sub": "寄给有缘人的真实信件。我们仅展示作者同意分享的内容。", "read": "阅读并回信"},
  de: {"eyebrow": "AIR MAIL · ECHTE BRIEFE", "title": "Briefe im Himmel von Lettie", "sub": "Echte Briefe, geschrieben für jeden, der sie findet. Wir zeigen nur Briefe, die vom Verfasser freigegeben wurden.", "read": "Lesen & antworten"},
  hi: {"eyebrow": "AIR MAIL · असली ख़त", "title": "Lettie के आसमान में तैरते ख़त", "sub": "किसी भी पाने वाले के लिए भेजे गए असली ख़त। हम सिर्फ़ वही दिखाते हैं जिन्हें साझा करने की अनुमति मिली है।", "read": "पढ़ें और जवाब दें"},
  id: {"eyebrow": "AIR MAIL · SURAT ASLI", "title": "Surat-surat yang melayang di langit Lettie", "sub": "Surat asli yang dikirim untuk siapa saja yang menemukannya. Kami hanya menampilkan yang diizinkan oleh penulisnya.", "read": "Baca & balas"},
  ru: {"eyebrow": "AIR MAIL · НАСТОЯЩИЕ ПИСЬМА", "title": "Письма, парящие в небе Lettie", "sub": "Настоящие письма для тех, кто их найдет. Мы показываем только те, которыми авторы разрешили поделиться.", "read": "Читать и ответить"},
  it: {"eyebrow": "AIR MAIL · LETTERE VERE", "title": "Lettere che fluttuano nel cielo di Lettie", "sub": "Lettere vere inviate a chiunque le trovi. Mostriamo solo quelle che l'autore ha acconsentito di condividere.", "read": "Leggi e rispondi"},
  bn: {"eyebrow": "AIR MAIL · সত্যি চিঠি", "title": "Lettie-র আকাশে ভাসমান চিঠি", "sub": "যে কারো পাওয়ার উদ্দেশ্যে পাঠানো সত্যি চিঠি। লেখক যাদের শেয়ার করার অনুমতি দিয়েছেন, আমরা শুধু সেগুলোই দেখাই।", "read": "পড়ুন এবং উত্তর দিন"},
  fil: {"eyebrow": "AIR MAIL · MGA TUNAY NA LIHAM", "title": "Mga liham na lumulutang sa kalangitan ng Lettie", "sub": "Mga tunay na liham na ipinadala para sa sinumang makakakita. Ipinapakita lang namin ang mga pinayagang ibahagi ng sumulat.", "read": "Basahin at sumagot"},
  tr: {"eyebrow": "AIR MAIL · GERÇEK MEKTUPLAR", "title": "Lettie gökyüzünde süzülen mektuplar", "sub": "Bulan herhangi biri için yazılmış gerçek mektuplar. Yalnızca yazarın paylaşılmasına izin verdiği mektupları gösteriyoruz.", "read": "Oku ve yanıtla"},
  vi: {"eyebrow": "AIR MAIL · THƯ THẬT", "title": "Những lá thư lơ lửng trên bầu trời Lettie", "sub": "Những lá thư thật gửi đến bất kỳ ai tìm thấy. Chúng tôi chỉ hiển thị những lá thư tác giả cho phép chia sẻ.", "read": "Đọc & hồi âm"},
  th: {"eyebrow": "AIR MAIL · จดหมายจริง", "title": "จดหมายที่ล่องลอยบนท้องฟ้าของ Lettie", "sub": "จดหมายจริงที่ส่งถึงใครก็ตามที่พบเจอ เราแสดงเฉพาะฉบับที่ผู้เขียนอนุญาตให้แชร์เท่านั้น", "read": "อ่านและตอบกลับ"},
  ms: {"eyebrow": "AIR MAIL · SURAT SEBENAR", "title": "Surat-surat yang terapung di langit Lettie", "sub": "Surat sebenar yang dihantar kepada sesiapa sahaja yang menemuinya. Kami hanya memaparkan surat yang dibenarkan oleh penulis.", "read": "Baca & balas"},
  sw: {"eyebrow": "AIR MAIL · BARUA HALISI", "title": "Barua zinazoelea katika anga ya Lettie", "sub": "Barua halisi zilizotumwa kwa yeyote atakayezipata. Tunaonyesha tu zile ambazo mwandishi aliruhusu kushiriki.", "read": "Soma na ujibu"},
  pl: {"eyebrow": "AIR MAIL · PRAWDZIWE LISTY", "title": "Listy unoszące się na niebie Lettie", "sub": "Prawdziwe listy wysłane do każdego, kto je znajdzie. Pokazujemy tylko te, na których udostępnienie zgodził się autor.", "read": "Przeczytaj i odpisz"},
  nl: {"eyebrow": "AIR MAIL · ECHTE BRIEVEN", "title": "Brieven die zweven in de lucht van Lettie", "sub": "Echte brieven, gestuurd naar wie ze ook vindt. We tonen alleen brieven die we mogen delen van de schrijver.", "read": "Lezen & beantwoorden"},
  uk: {"eyebrow": "AIR MAIL · СПРАВЖНІ ЛИСТИ", "title": "Листи, що ширяють у небі Lettie", "sub": "Справжні листи для кожного, хто їх знайде. Ми показуємо лише ті, якими автори дозволили поділитися.", "read": "Читати та відповісти"},
  ro: {"eyebrow": "AIR MAIL · SCRISORI REALE", "title": "Scrisori care plutesc pe cerul Lettie", "sub": "Scrisori reale trimise oricui le găsește. Arătăm doar scrisorile pe care autorul ne-a permis să le distribuim.", "read": "Citește și răspunde"},
  el: {"eyebrow": "AIR MAIL · ΑΛΗΘΙΝΑ ΓΡΑΜΜΑΤΑ", "title": "Γράμματα που αιωρούνται στον ουρανό της Lettie", "sub": "Αληθινά γράμματα που στάλθηκαν σε όποιον τα βρει. Εμφανίζουμε μόνο όσα επέτρεψε ο συντάκτης να μοιραστούμε.", "read": "Διαβάστε & απαντήστε"},
  cs: {"eyebrow": "AIR MAIL · SKUTEČNÉ DOPISY", "title": "Dopisy vznášející se na obloze Lettie", "sub": "Skutečné dopisy poslané komukoli, kdo je najde. Ukazujeme jen ty, které autor dovolil sdílet.", "read": "Číst a odpovědět"},
  ar: {"eyebrow": "AIR MAIL · رسائل حقيقية", "title": "رسائل تطوف في سماء Lettie", "sub": "رسائل حقيقية أُرسلت لمن يجدها. نعرض فقط الرسائل التي سمح لنا كاتبها بمشاركتها.", "read": "اقرأ وردّ"},
  fa: {"eyebrow": "AIR MAIL · نامه‌های واقعی", "title": "نامه‌های شناور در آسمان Lettie", "sub": "نامه‌های واقعی که برای هر کسی که آن‌ها را پیدا کند فرستاده شده‌اند. ما فقط نامه‌هایی را نشان می‌دهیم که نویسنده اجازه اشتراک‌گذاری داده است.", "read": "بخوانید و پاسخ دهید"},
  ur: {"eyebrow": "AIR MAIL · سچے خطوط", "title": "Lettie کے آسمان میں تیرتے خطوط", "sub": "کسی بھی ملنے والے کے لیے بھیجے گئے سچے خطوط۔ ہم صرف وہی دکھاتے ہیں جنہیں شیئر کرنے کی اجازت مصنف نے دی ہے۔", "read": "پڑھیں اور جواب دیں"},
};
