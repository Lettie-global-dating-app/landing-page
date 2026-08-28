/**
 * 언어별 FAQ.
 *
 * 사전(`i18n/dictionaries`)에 넣지 않고 분리한 이유: 사전의 타입은 영어 사전에서
 * 추론되므로 키를 하나 추가하면 11개 언어가 동시에 컴파일 에러가 난다. FAQ 는
 * 언어를 하나씩 늘려 가는 콘텐츠라 그 결합이 방해가 된다.
 *
 * 답변은 **화면에서 확인 가능한 제품 사실만** 담는다. 여기 적힌 문장이 그대로
 * FAQPage JSON-LD 로 나가고, 답변엔진은 이 문단째로 잘라 인용한다. 사실이 아닌
 * 문장을 넣으면 인용 신뢰를 잃는다.
 *
 * 각 답변은 독립적으로 읽히도록 쓴다 — "위에서 말한 그것" 같은 맥락 의존 문장은
 * 추출되는 순간 무의미해진다.
 */

export type FaqItem = { q: string; a: string };

export type FaqContent = {
  /** <title> 및 h1 */
  title: string;
  /** meta description (150~160자 목표) */
  description: string;
  /** h1 아래 한 줄 */
  subtitle: string;
  keywords: string[];
  items: FaqItem[];
};

/**
 * 제품 사실(모든 언어 공통, 2026-08-28 기준)
 * - 편지는 16개 언어로 번역된다
 * - 연락처 교환은 편지 5통 이후
 * - 시작 시 프로필 사진이 보이지 않고, 편지를 주고받으며 점차 드러난다
 * - iOS · Android, 다운로드 무료
 */
export const localizedFaq: Record<string, FaqContent> = {
  es: {
    title: 'Preguntas frecuentes sobre Lettie',
    description:
      'Qué es Lettie, si es gratis, cómo funciona la traducción de las cartas y cuándo se pueden intercambiar datos de contacto con un amigo por correspondencia.',
    subtitle: 'Lo que la gente pregunta antes de escribir su primera carta',
    keywords: ['Lettie', 'amigos por correspondencia', 'app de cartas', 'penpal', 'intercambio de idiomas'],
    items: [
      {
        q: '¿Qué es Lettie?',
        a: 'Lettie es una aplicación para escribir cartas a personas de otros países. Cada carta se traduce a 16 idiomas al enviarse, así que dos personas sin idioma común pueden mantener una correspondencia real. Está disponible en iOS y Android.',
      },
      {
        q: '¿Lettie es gratis?',
        a: 'La descarga y el uso básico son gratuitos: puedes escribir cartas, recibirlas y responder sin pagar. Existen funciones adicionales de suscripción opcional.',
      },
      {
        q: '¿Tengo que escribir en inglés?',
        a: 'No. Escribes en tu idioma y la otra persona lo lee en el suyo, porque cada carta se traduce al enviarse. También puedes ver el texto original junto a la traducción.',
      },
      {
        q: '¿Cuándo puedo intercambiar mi contacto con alguien?',
        a: 'Después de cinco cartas intercambiadas. El límite no es romántico sino de seguridad: una historia inventada resiste una conversación corta, pero rara vez resiste cinco cartas.',
      },
      {
        q: '¿Por qué no se ven fotos al principio?',
        a: 'Lettie empieza sin fotografía de perfil para que la primera impresión sea lo que alguien escribe. La foto se revela de forma gradual a medida que la correspondencia avanza.',
      },
      {
        q: '¿Es seguro escribir a desconocidos?',
        a: 'Escribir a un desconocido es seguro mientras controles lo que te identifica. Mantén fuera de las cartas tu dirección, tu lugar de trabajo, tus datos bancarios y tus documentos, y no envíes dinero a nadie bajo ninguna circunstancia.',
      },
    ],
  },

  pt: {
    title: 'Perguntas frequentes sobre o Lettie',
    description:
      'O que é o Lettie, se é gratuito, como funciona a tradução das cartas e quando é possível trocar contactos com um amigo por correspondência.',
    subtitle: 'O que as pessoas perguntam antes da primeira carta',
    keywords: ['Lettie', 'amigo por correspondência', 'app de cartas', 'penpal', 'intercâmbio de idiomas'],
    items: [
      {
        q: 'O que é o Lettie?',
        a: 'O Lettie é um aplicativo para escrever cartas a pessoas de outros países. Cada carta é traduzida para 16 idiomas no momento do envio, então duas pessoas sem idioma em comum conseguem manter uma correspondência real. Está disponível para iOS e Android.',
      },
      {
        q: 'O Lettie é gratuito?',
        a: 'O download e o uso básico são gratuitos: escrever, receber e responder cartas não custa nada. Há recursos adicionais por assinatura opcional.',
      },
      {
        q: 'Preciso escrever em inglês?',
        a: 'Não. Você escreve no seu idioma e a outra pessoa lê no idioma dela, porque cada carta é traduzida ao ser enviada. Também é possível ver o texto original ao lado da tradução.',
      },
      {
        q: 'Quando posso trocar contatos com alguém?',
        a: 'Depois de cinco cartas trocadas. O limite não é romântico e sim de segurança: uma história inventada sobrevive a uma conversa curta, mas raramente sobrevive a cinco cartas.',
      },
      {
        q: 'Por que não aparecem fotos no início?',
        a: 'O Lettie começa sem foto de perfil para que a primeira impressão seja o que a pessoa escreve. A foto é revelada aos poucos, conforme a correspondência avança.',
      },
      {
        q: 'É seguro escrever para desconhecidos?',
        a: 'Escrever para um desconhecido é seguro desde que você controle o que identifica você. Mantenha endereço, local de trabalho, dados bancários e documentos fora das cartas, e nunca envie dinheiro a ninguém.',
      },
    ],
  },

  ja: {
    title: 'Lettie（レティ）のよくある質問',
    description:
      'Lettieとは何か、無料で使えるのか、手紙の翻訳はどう動くのか、連絡先はいつ交換できるのか。文通を始める前に多い質問をまとめました。',
    subtitle: '最初の手紙を書く前に、よく聞かれること',
    keywords: ['Lettie', 'ペンパル', '文通アプリ', '海外の友達', '語学交換'],
    items: [
      {
        q: 'Lettieとはどんなアプリですか。',
        a: 'Lettieは、外国に住む人と手紙をやりとりするアプリです。手紙は送信時に16言語へ翻訳されるため、共通の言語がない二人でも文通が成立します。iOSとAndroidで利用できます。',
      },
      {
        q: 'Lettieは無料ですか。',
        a: 'ダウンロードと基本機能は無料です。手紙を書く、受け取る、返信するまでは料金がかかりません。追加機能は任意のサブスクリプションで提供されます。',
      },
      {
        q: '英語で書かなければいけませんか。',
        a: 'いいえ。自分の言語で書けば、相手は相手の言語で読みます。手紙は送信時に翻訳され、原文と訳文を並べて確認することもできます。',
      },
      {
        q: '連絡先はいつ交換できますか。',
        a: '手紙を5通やりとりした後です。これは恋愛的な演出ではなく安全のための仕組みで、作り話は短い会話には耐えても、5通の手紙にはほとんど耐えられないためです。',
      },
      {
        q: 'なぜ最初は写真が見えないのですか。',
        a: 'Lettieはプロフィール写真を表示しない状態から始まります。最初の印象を「その人が書いた文章」にするためです。写真は手紙のやりとりが進むにつれて少しずつ見えるようになります。',
      },
      {
        q: '知らない人と手紙を交換しても安全ですか。',
        a: '自分を特定できる情報を管理していれば安全です。住所、勤務先、口座情報、身分証は手紙に書かないでください。また、どんな理由であってもお金を送らないでください。',
      },
    ],
  },

  fr: {
    title: 'Questions fréquentes sur Lettie',
    description:
      'Ce qu’est Lettie, si l’application est gratuite, comment fonctionne la traduction des lettres et quand échanger ses coordonnées avec un correspondant.',
    subtitle: 'Ce que l’on demande avant d’écrire sa première lettre',
    keywords: ['Lettie', 'correspondant étranger', 'application de lettres', 'penpal', 'échange linguistique'],
    items: [
      {
        q: 'Qu’est-ce que Lettie ?',
        a: 'Lettie est une application pour écrire des lettres à des personnes vivant dans d’autres pays. Chaque lettre est traduite en 16 langues au moment de l’envoi, ce qui permet à deux personnes sans langue commune de correspondre réellement. L’application existe sur iOS et Android.',
      },
      {
        q: 'Lettie est-elle gratuite ?',
        a: 'Le téléchargement et l’usage de base sont gratuits : écrire, recevoir et répondre à des lettres ne coûte rien. Des fonctions supplémentaires sont proposées par abonnement facultatif.',
      },
      {
        q: 'Dois-je écrire en anglais ?',
        a: 'Non. Vous écrivez dans votre langue et votre correspondant lit dans la sienne, car chaque lettre est traduite à l’envoi. Le texte original reste consultable à côté de la traduction.',
      },
      {
        q: 'Quand puis-je échanger mes coordonnées ?',
        a: 'Après cinq lettres échangées. Ce seuil n’est pas une mise en scène romantique mais une mesure de sécurité : une histoire inventée résiste à une conversation courte, rarement à cinq lettres.',
      },
      {
        q: 'Pourquoi ne voit-on pas de photo au début ?',
        a: 'Lettie commence sans photo de profil afin que la première impression repose sur ce que la personne écrit. La photo se dévoile progressivement à mesure que la correspondance avance.',
      },
      {
        q: 'Est-ce risqué d’écrire à des inconnus ?',
        a: 'Écrire à un inconnu est sans danger tant que vous maîtrisez ce qui vous identifie. Gardez votre adresse, votre employeur, vos informations bancaires et vos documents hors des lettres, et n’envoyez jamais d’argent à qui que ce soit.',
      },
    ],
  },

  de: {
    title: 'Häufige Fragen zu Lettie',
    description:
      'Was Lettie ist, ob die App kostenlos ist, wie die Übersetzung der Briefe funktioniert und wann man Kontaktdaten mit einem Brieffreund austauschen kann.',
    subtitle: 'Was Leute fragen, bevor sie den ersten Brief schreiben',
    keywords: ['Lettie', 'Brieffreund', 'Brief-App', 'Penpal', 'Sprachaustausch'],
    items: [
      {
        q: 'Was ist Lettie?',
        a: 'Lettie ist eine App, mit der man Briefe an Menschen in anderen Ländern schreibt. Jeder Brief wird beim Versenden in 16 Sprachen übersetzt, sodass zwei Menschen ohne gemeinsame Sprache tatsächlich korrespondieren können. Die App gibt es für iOS und Android.',
      },
      {
        q: 'Ist Lettie kostenlos?',
        a: 'Der Download und die Grundfunktionen sind kostenlos: Briefe schreiben, empfangen und beantworten kostet nichts. Zusätzliche Funktionen sind über ein optionales Abonnement verfügbar.',
      },
      {
        q: 'Muss ich auf Englisch schreiben?',
        a: 'Nein. Sie schreiben in Ihrer Sprache, und Ihr Gegenüber liest in seiner, weil jeder Brief beim Senden übersetzt wird. Den Originaltext können Sie neben der Übersetzung weiterhin einsehen.',
      },
      {
        q: 'Wann kann ich Kontaktdaten austauschen?',
        a: 'Nach fünf ausgetauschten Briefen. Diese Schwelle ist keine romantische Inszenierung, sondern ein Sicherheitsmechanismus: Eine erfundene Geschichte übersteht ein kurzes Gespräch, aber selten fünf Briefe.',
      },
      {
        q: 'Warum sieht man am Anfang keine Fotos?',
        a: 'Lettie beginnt ohne Profilfoto, damit der erste Eindruck davon abhängt, was jemand schreibt. Das Foto wird nach und nach sichtbar, während die Korrespondenz fortschreitet.',
      },
      {
        q: 'Ist es sicher, Fremden zu schreiben?',
        a: 'Fremden zu schreiben ist sicher, solange Sie kontrollieren, was Sie identifiziert. Halten Sie Adresse, Arbeitgeber, Bankdaten und Ausweisdokumente aus den Briefen heraus, und senden Sie niemandem Geld.',
      },
    ],
  },

  zh: {
    title: 'Lettie 常见问题',
    description:
      'Lettie 是什么、是否免费、信件如何自动翻译，以及与笔友交换联系方式的时机。写第一封信之前最常被问到的问题。',
    subtitle: '写第一封信之前，大家最常问的事',
    keywords: ['Lettie', '笔友', '写信应用', '国际笔友', '语言交换'],
    items: [
      {
        q: 'Lettie 是什么？',
        a: 'Lettie 是一款用来给其他国家的人写信的应用。每封信在发送时会被翻译成 16 种语言，因此没有共同语言的两个人也能真正通信。iOS 和 Android 都可以使用。',
      },
      {
        q: 'Lettie 免费吗？',
        a: '下载和基本功能免费：写信、收信和回信都不收费。另有可选订阅提供额外功能。',
      },
      {
        q: '必须用英语写信吗？',
        a: '不需要。你用自己的语言写，对方用自己的语言读，因为每封信在发送时都会被翻译。你也可以在译文旁边查看原文。',
      },
      {
        q: '什么时候可以交换联系方式？',
        a: '在互相寄出五封信之后。这个门槛不是浪漫设定，而是安全机制：编造的身份能撑过一次简短对话，却很难撑过五封信。',
      },
      {
        q: '为什么一开始看不到照片？',
        a: 'Lettie 一开始不显示头像，让第一印象来自对方写下的文字。随着通信继续，照片会逐渐显现。',
      },
      {
        q: '和陌生人通信安全吗？',
        a: '只要你掌控哪些信息会暴露身份，通信就是安全的。不要在信中写住址、工作单位、银行信息和证件，也不要在任何情况下向对方汇款。',
      },
    ],
  },

  it: {
    title: 'Domande frequenti su Lettie',
    description:
      'Che cos’è Lettie, se è gratuita, come funziona la traduzione delle lettere e quando si possono scambiare i contatti con un amico di penna.',
    subtitle: 'Quello che si chiede prima di scrivere la prima lettera',
    keywords: ['Lettie', 'amico di penna', 'app per lettere', 'penpal', 'scambio linguistico'],
    items: [
      {
        q: 'Che cos’è Lettie?',
        a: 'Lettie è un’applicazione per scrivere lettere a persone che vivono in altri paesi. Ogni lettera viene tradotta in 16 lingue al momento dell’invio, così due persone senza una lingua in comune possono davvero corrispondere. È disponibile su iOS e Android.',
      },
      {
        q: 'Lettie è gratuita?',
        a: 'Il download e le funzioni di base sono gratuiti: scrivere, ricevere e rispondere alle lettere non costa nulla. Sono disponibili funzioni aggiuntive con abbonamento facoltativo.',
      },
      {
        q: 'Devo scrivere in inglese?',
        a: 'No. Tu scrivi nella tua lingua e l’altra persona legge nella sua, perché ogni lettera viene tradotta all’invio. Il testo originale resta consultabile accanto alla traduzione.',
      },
      {
        q: 'Quando posso scambiare i contatti?',
        a: 'Dopo cinque lettere scambiate. Non è una scelta romantica ma di sicurezza: una storia inventata regge una conversazione breve, raramente cinque lettere.',
      },
      {
        q: 'Perché all’inizio non si vedono le foto?',
        a: 'Lettie parte senza foto del profilo, così la prima impressione dipende da ciò che una persona scrive. La foto si rivela gradualmente man mano che la corrispondenza prosegue.',
      },
      {
        q: 'È sicuro scrivere a sconosciuti?',
        a: 'Scrivere a uno sconosciuto è sicuro finché controlli ciò che ti identifica. Tieni fuori dalle lettere indirizzo, luogo di lavoro, dati bancari e documenti, e non inviare mai denaro a nessuno.',
      },
    ],
  },

  ru: {
    title: 'Частые вопросы о Lettie',
    description:
      'Что такое Lettie, бесплатно ли приложение, как работает перевод писем и когда можно обменяться контактами с другом по переписке.',
    subtitle: 'О чём спрашивают до того, как написать первое письмо',
    keywords: ['Lettie', 'друг по переписке', 'приложение для писем', 'penpal', 'языковой обмен'],
    items: [
      {
        q: 'Что такое Lettie?',
        a: 'Lettie — это приложение для переписки с людьми из других стран. Каждое письмо переводится на 16 языков в момент отправки, поэтому переписываться могут даже двое, у кого нет общего языка. Приложение доступно на iOS и Android.',
      },
      {
        q: 'Lettie бесплатное?',
        a: 'Загрузка и основные функции бесплатны: писать, получать и отвечать на письма можно без оплаты. Дополнительные возможности доступны по желанию через подписку.',
      },
      {
        q: 'Нужно ли писать по-английски?',
        a: 'Нет. Вы пишете на своём языке, а собеседник читает на своём, потому что письмо переводится при отправке. Оригинал можно посмотреть рядом с переводом.',
      },
      {
        q: 'Когда можно обменяться контактами?',
        a: 'После пяти отправленных писем. Это не романтическая условность, а мера безопасности: выдуманная история выдерживает короткий разговор, но редко выдерживает пять писем.',
      },
      {
        q: 'Почему в начале не видно фотографий?',
        a: 'Lettie начинается без фотографии профиля, чтобы первое впечатление складывалось из написанного. Фотография открывается постепенно, по мере переписки.',
      },
      {
        q: 'Безопасно ли писать незнакомым людям?',
        a: 'Переписка с незнакомцем безопасна, пока вы контролируете то, что вас идентифицирует. Не указывайте в письмах адрес, место работы, банковские данные и документы и никогда никому не отправляйте деньги.',
      },
    ],
  },

  hi: {
    title: 'Lettie के बारे में अक्सर पूछे जाने वाले सवाल',
    description:
      'Lettie क्या है, क्या यह मुफ़्त है, चिट्ठियों का अनुवाद कैसे होता है, और पेन पाल से संपर्क विवरण कब साझा किए जा सकते हैं।',
    subtitle: 'पहली चिट्ठी लिखने से पहले लोग यही पूछते हैं',
    keywords: ['Lettie', 'पेन पाल', 'चिट्ठी ऐप', 'विदेशी दोस्त', 'भाषा विनिमय'],
    items: [
      {
        q: 'Lettie क्या है?',
        a: 'Lettie एक ऐप है जिससे आप दूसरे देशों में रहने वाले लोगों को चिट्ठियाँ लिखते हैं। हर चिट्ठी भेजते समय 16 भाषाओं में अनुवादित होती है, इसलिए जिनकी कोई साझा भाषा नहीं है वे भी सचमुच पत्र-व्यवहार कर सकते हैं। यह iOS और Android दोनों पर उपलब्ध है।',
      },
      {
        q: 'क्या Lettie मुफ़्त है?',
        a: 'डाउनलोड और बुनियादी उपयोग मुफ़्त है: चिट्ठी लिखना, पाना और जवाब देना निःशुल्क है। अतिरिक्त सुविधाएँ वैकल्पिक सदस्यता के साथ उपलब्ध हैं।',
      },
      {
        q: 'क्या अंग्रेज़ी में लिखना ज़रूरी है?',
        a: 'नहीं। आप अपनी भाषा में लिखते हैं और सामने वाला अपनी भाषा में पढ़ता है, क्योंकि हर चिट्ठी भेजते समय अनुवादित हो जाती है। मूल पाठ को अनुवाद के साथ देखा भी जा सकता है।',
      },
      {
        q: 'संपर्क विवरण कब साझा किए जा सकते हैं?',
        a: 'पाँच चिट्ठियों के आदान-प्रदान के बाद। यह रोमानी नियम नहीं बल्कि सुरक्षा उपाय है: गढ़ी हुई कहानी छोटी बातचीत झेल लेती है, पाँच चिट्ठियाँ शायद ही झेलती है।',
      },
      {
        q: 'शुरू में तस्वीरें क्यों नहीं दिखतीं?',
        a: 'Lettie बिना प्रोफ़ाइल तस्वीर के शुरू होता है ताकि पहला प्रभाव इस बात से बने कि व्यक्ति क्या लिखता है। पत्र-व्यवहार आगे बढ़ने के साथ तस्वीर धीरे-धीरे दिखने लगती है।',
      },
      {
        q: 'क्या अजनबियों को लिखना सुरक्षित है?',
        a: 'जब तक आप यह नियंत्रित करते हैं कि आपकी पहचान क्या उजागर करती है, अजनबी को लिखना सुरक्षित है। अपना पता, कार्यस्थल, बैंक विवरण और पहचान दस्तावेज़ चिट्ठियों से बाहर रखें, और किसी को भी पैसे न भेजें।',
      },
    ],
  },

  id: {
    title: 'Pertanyaan umum tentang Lettie',
    description:
      'Apa itu Lettie, apakah gratis, bagaimana surat diterjemahkan otomatis, dan kapan kontak boleh ditukar dengan sahabat pena.',
    subtitle: 'Yang paling sering ditanyakan sebelum menulis surat pertama',
    keywords: ['Lettie', 'sahabat pena', 'aplikasi surat', 'penpal', 'pertukaran bahasa'],
    items: [
      {
        q: 'Apa itu Lettie?',
        a: 'Lettie adalah aplikasi untuk menulis surat kepada orang di negara lain. Setiap surat diterjemahkan ke 16 bahasa saat dikirim, sehingga dua orang tanpa bahasa yang sama tetap bisa berkirim surat. Tersedia untuk iOS dan Android.',
      },
      {
        q: 'Apakah Lettie gratis?',
        a: 'Unduhan dan fitur dasarnya gratis: menulis, menerima, dan membalas surat tidak dipungut biaya. Fitur tambahan tersedia melalui langganan opsional.',
      },
      {
        q: 'Apakah saya harus menulis dalam bahasa Inggris?',
        a: 'Tidak. Anda menulis dalam bahasa Anda dan lawan bicara membacanya dalam bahasanya, karena setiap surat diterjemahkan saat dikirim. Teks aslinya tetap bisa dilihat di samping terjemahan.',
      },
      {
        q: 'Kapan saya boleh bertukar kontak?',
        a: 'Setelah lima surat saling dikirim. Ambang ini bukan gaya romantis melainkan pengaman: cerita palsu bertahan dalam percakapan singkat, tetapi jarang bertahan sampai lima surat.',
      },
      {
        q: 'Mengapa foto tidak terlihat di awal?',
        a: 'Lettie dimulai tanpa foto profil agar kesan pertama datang dari apa yang seseorang tulis. Foto terbuka sedikit demi sedikit seiring surat-menyurat berlanjut.',
      },
      {
        q: 'Apakah aman menulis kepada orang asing?',
        a: 'Menulis kepada orang asing aman selama Anda mengendalikan hal-hal yang mengidentifikasi Anda. Jangan tulis alamat, tempat kerja, data bank, dan dokumen identitas dalam surat, dan jangan pernah mengirim uang kepada siapa pun.',
      },
    ],
  },
};

/**
 * FAQ 의 hreflang. **FAQ 가 실제로 있는 언어끼리만** 잇는다.
 * 한국어는 `/faq`, 영어는 `/en/faq` 로 기존 라우트가 담당하고
 * 나머지는 `/[locale]/faq` 다. 없는 언어를 가리키면 404 를 제출하는 셈이다.
 */
export function faqAlternates(): Record<string, string> {
  const SITE = 'https://lettie-dating.com';
  const map: Record<string, string> = {
    ko: `${SITE}/faq`,
    en: `${SITE}/en/faq`,
  };
  for (const l of Object.keys(localizedFaq)) map[l] = `${SITE}/${l}/faq`;
  map['x-default'] = `${SITE}/en/faq`;
  return map;
}

export function getFaq(locale: string): FaqContent | undefined {
  return localizedFaq[locale];
}

/** FAQ 페이지가 실제로 존재하는 언어. hreflang 과 사이트맵이 이 목록을 읽는다. */
export const FAQ_LOCALES = Object.keys(localizedFaq);
