import type { Locale } from '@/i18n/config';

/**
 * 신규 언어용 콘텐츠.
 *
 * 기존 `blogPosts` 는 한국어/영어 두 벌 구조라 언어를 늘리면 필드가 폭발한다.
 * 새로 쓰는 다국어 글은 여기에 `{ [locale]: 내용 }` 으로 담는다.
 *
 * 영어 원문을 그대로 옮긴 번역본이 아니라, 각 언어 검색자가 실제로 던지는
 * 질문에 답하는 독립 글로 쓴다. 얄팍한 번역 페이지는 검색에서도 잘 안 먹고
 * 읽는 사람에게도 티가 난다.
 */
export type LocalizedPost = {
  title: string;
  description: string;
  keywords: string[];
  readTime: string;
  content: string;
};

export type LocalizedEntry = {
  id: string;
  date: string;
  image: string;
  translations: Partial<Record<Locale, LocalizedPost>>;
};

export const localizedPosts: Record<string, LocalizedEntry> = {
  'find-a-pen-pal': {
    id: 'find-a-pen-pal',
    date: '2026-08-01',
    image: '/letter-writing.png',
    translations: {
      es: {
        title: 'Cómo encontrar un amigo por correspondencia en 2026',
        description:
          'Dónde buscar, qué escribir en la primera carta y cómo evitar que la conversación muera al tercer mensaje.',
        keywords: [
          'amigos por correspondencia',
          'cómo encontrar un penpal',
          'app amigos por correspondencia',
          'hacer amigos en el extranjero',
          'intercambio de idiomas',
        ],
        readTime: '6 min',
        content: `
# Cómo encontrar un amigo por correspondencia en 2026

Encontrar a alguien es fácil. Lo difícil es que la conversación pase del tercer mensaje.

## Dónde buscar

**Aplicaciones de correspondencia.** Slowly, InterPals, Lettie, HelloTalk. Cada una tiene un sesgo distinto: Slowly hacia la entrega lenta, InterPals hacia el volumen, HelloTalk hacia la práctica de idiomas, Lettie hacia escribir entre idiomas distintos.

**Comunidades de intereses.** Foros, subreddits, clubes de lectura. La correspondencia empieza con algo concreto en común, que es justo lo que suele faltar.

No te registres en cinco sitios. Un intento real en uno vale más.

## Qué poner en tu perfil

Sé específico. "Me gusta la música y viajar" no le da nada a nadie para responder. "Estoy retomando el piano a los 29 y llevo dos meses peleándome con un nocturno de Chopin" abre una puerta.

## La primera carta

Aquí es donde mueren casi todas las correspondencias. Una carta que dice "Hola, ¿cómo estás? ¿Qué hobbies tienes?" recibe una respuesta igual de vacía.

Una primera carta que funciona hace tres cosas:

1. **Cuenta dónde estás y cómo es tu día.** No el clima: la textura concreta. El autobús que tomas, lo que se ve por la ventana.
2. **Ofrece algo real sobre ti.** Algo que te preocupa, te da curiosidad o se te da mal.
3. **Hace una pregunta que de verdad quieres que te respondan.** Una, no un cuestionario.

Entre 200 y 400 palabras basta.

## Si no compartes idioma

No necesitas inglés fluido. Escribe frases cortas y simples: la traducción automática las conserva bien y las oraciones largas con muchas comas no.

Algunas apps traducen por ti. En Lettie cada carta y respuesta se traduce a 16 idiomas y puedes leer el original junto a la traducción, que es como mucha gente termina aprendiendo algo del idioma de su corresponsal sin proponérselo.

## Seguridad, en breve

- No compartas dirección, lugar de trabajo ni nombre completo en las primeras cartas.
- Desconfía de quien va muy rápido con los sentimientos o menciona dinero. Es el patrón de estafa más común.
- Quédate en la plataforma hasta que tengas motivos para salir de ella.

## Expectativas realistas

Escribirás a varias personas antes de que una funcione. Una correspondencia que dure un año es el objetivo, no veinte que duren una semana.
`,
      },
      pt: {
        title: 'Como encontrar um amigo por correspondência em 2026',
        description:
          'Onde procurar, o que escrever na primeira carta e como evitar que a conversa morra na terceira mensagem.',
        keywords: [
          'amigo por correspondência',
          'como encontrar um penpal',
          'app de correspondência',
          'fazer amigos no exterior',
          'intercâmbio de idiomas',
        ],
        readTime: '6 min',
        content: `
# Como encontrar um amigo por correspondência em 2026

Encontrar alguém é fácil. O difícil é a conversa passar da terceira mensagem.

## Onde procurar

**Aplicativos de correspondência.** Slowly, InterPals, Lettie, HelloTalk. Cada um tem um viés: Slowly na entrega lenta, InterPals no volume de pessoas, HelloTalk na prática de idiomas, Lettie em escrever entre idiomas diferentes.

**Comunidades de interesse.** Fóruns, subreddits, clubes de leitura. A conversa já começa com algo concreto em comum.

Não se cadastre em cinco lugares. Uma tentativa de verdade em um vale mais.

## O que colocar no perfil

Seja específico. "Gosto de música e viagens" não dá a ninguém o que responder. "Voltei a tocar piano aos 29 e faz dois meses que apanho de um noturno de Chopin" abre uma porta.

## A primeira carta

É aqui que quase toda correspondência morre. Uma carta que diz "Oi, tudo bem? Quais são seus hobbies?" recebe uma resposta igualmente vazia.

Uma primeira carta que funciona faz três coisas:

1. **Conta onde você está e como é o seu dia.** Não o clima: a textura concreta. O ônibus que você pega, o que se vê da janela.
2. **Oferece algo real sobre você.** Algo que te preocupa, te dá curiosidade ou que você faz mal.
3. **Faz uma pergunta que você realmente quer que seja respondida.** Uma só.

De 200 a 400 palavras é suficiente.

## Se vocês não falam o mesmo idioma

Você não precisa de inglês fluente. Escreva frases curtas e simples: a tradução automática preserva bem esse tipo de frase e se perde nas longas, cheias de vírgulas.

Alguns apps traduzem para você. No Lettie cada carta e resposta é traduzida em 16 idiomas, e dá para ler o original ao lado da tradução — é assim que muita gente acaba aprendendo um pouco do idioma do outro sem ter planejado.

## Segurança, resumindo

- Não compartilhe endereço, trabalho ou nome completo nas primeiras cartas.
- Desconfie de quem acelera os sentimentos ou menciona dinheiro. É o golpe mais comum.
- Fique na plataforma até ter motivo para sair dela.

## Expectativas realistas

Você vai escrever para várias pessoas antes de uma dar certo. Uma correspondência que dure um ano é o objetivo — não vinte que durem uma semana.
`,
      },
      ja: {
        title: '文通相手の見つけ方（2026年版）',
        description:
          'どこで探すか、最初の手紙に何を書くか、そして三通目でやり取りが途切れないようにするには。',
        keywords: [
          '文通 相手 探す',
          '文通アプリ',
          '海外 文通',
          '外国人 友達 作る',
          'ペンパル 始め方',
        ],
        readTime: '6 分',
        content: `
# 文通相手の見つけ方（2026年版）

相手を見つけること自体は簡単です。難しいのは、三通目から先に進むことです。

## どこで探すか

**文通アプリ。** Slowly、InterPals、Lettie、HelloTalk。それぞれ重心が違います。Slowly は配達の遅さ、InterPals は人数の多さ、HelloTalk は語学練習、Lettie は言語をまたいで書くことに向いています。

**趣味のコミュニティ。** フォーラムや読書会など。共通の話題が最初からあるので「何を話せばいいか」で詰まりません。

五つも登録しないでください。一つで本気の一通を書くほうが実りがあります。

## プロフィールに書くこと

具体的に書きます。「音楽と旅行が好き」では相手が返しようがありません。「29歳でピアノを再開して、ショパンのノクターンに二か月も苦戦中」なら入り口になります。

## 最初の手紙

ほとんどの文通はここで終わります。「はじめまして。趣味は何ですか？」と書けば、同じくらい中身のない返事が返ってきます。

うまくいく最初の手紙は三つのことをします。

1. **今どこにいて、どんな一日かを書く。** 天気ではなく具体的な質感を。通勤で乗るバス、窓の外の景色。
2. **自分について本当のことを一つ差し出す。** 悩んでいること、気になっていること、苦手なこと。
3. **本当に答えを知りたい質問を一つする。** 一つだけ。質問攻めにしない。

400〜800字もあれば十分です。

## 共通の言語がない場合

流暢な英語は要りません。短く単純な文を書いてください。機械翻訳はその形をよく保ちますが、読点でつないだ長い文は崩れます。

翻訳してくれるアプリもあります。Lettie ではすべての手紙と返信が16言語に翻訳され、原文と訳文を並べて読めます。そのおかげで、勉強するつもりがなかったのに相手の言葉を少し覚えていた、という人が少なくありません。

## 安全について、手短に

- 住所・勤務先・フルネームは最初の数通では書かない。
- 感情の進み方が異常に速い相手、お金の話を出す相手には注意。これが最も多い詐欺の形です。
- 理由ができるまではアプリの中でやり取りする。

## 現実的な期待値

何人かに書いて、そのうち一人が続けば上出来です。一年続く文通が一つあれば、一週間で終わる二十より価値があります。
`,
      },
      fr: {
        title: 'Comment trouver un correspondant en 2026',
        description:
          'Où chercher, quoi écrire dans la première lettre, et comment éviter que la conversation meure au troisième message.',
        keywords: [
          'trouver un correspondant',
          'correspondant étranger',
          'application correspondant',
          "se faire des amis à l'étranger",
          'échange linguistique',
        ],
        readTime: '6 min',
        content: `
# Comment trouver un correspondant en 2026

Trouver quelqu'un est facile. Le difficile, c'est que l'échange dépasse le troisième message.

## Où chercher

**Les applications de correspondance.** Slowly, InterPals, Lettie, HelloTalk. Chacune a son biais : Slowly mise sur la lenteur de livraison, InterPals sur le nombre, HelloTalk sur la pratique linguistique, Lettie sur l'écriture entre langues différentes.

**Les communautés d'intérêt.** Forums, clubs de lecture. L'échange démarre avec quelque chose de concret en commun.

Ne vous inscrivez pas sur cinq plateformes. Une vraie tentative sur une seule vaut davantage.

## Quoi mettre dans votre profil

Soyez précis. « J'aime la musique et les voyages » ne donne rien à quoi répondre. « Je m'y suis remis au piano à 29 ans et je bute depuis deux mois sur un nocturne de Chopin » ouvre une porte.

## La première lettre

C'est là que meurent presque toutes les correspondances. Une lettre qui dit « Salut, comment vas-tu ? Quels sont tes loisirs ? » reçoit une réponse tout aussi vide.

Une première lettre qui fonctionne fait trois choses :

1. **Dire où vous êtes et à quoi ressemble votre journée.** Pas la météo : la texture concrète. Le bus que vous prenez, ce qu'on voit par la fenêtre.
2. **Offrir quelque chose de vrai sur vous.** Ce qui vous préoccupe, vous intrigue, ou ce que vous faites mal.
3. **Poser une question dont vous voulez vraiment la réponse.** Une seule.

200 à 400 mots suffisent largement.

## Si vous ne partagez pas de langue

Vous n'avez pas besoin d'un anglais courant. Écrivez des phrases courtes et simples : la traduction automatique les préserve bien, alors qu'elle se perd dans les phrases longues à virgules.

Certaines applications traduisent pour vous. Sur Lettie, chaque lettre et chaque réponse est traduite en 16 langues, et vous pouvez lire l'original à côté de la traduction — c'est ainsi que beaucoup finissent par apprendre un peu la langue de leur correspondant sans l'avoir décidé.

## Sécurité, en bref

- Ne partagez ni adresse, ni lieu de travail, ni nom complet dans les premières lettres.
- Méfiez-vous de quelqu'un qui accélère les sentiments ou évoque de l'argent. C'est le schéma d'arnaque le plus courant.
- Restez sur la plateforme tant que vous n'avez pas de raison d'en sortir.

## Attentes réalistes

Vous écrirez à plusieurs personnes avant qu'une seule prenne. Une correspondance qui dure un an vaut mieux que vingt qui durent une semaine.
`,
      },
      de: {
        title: 'Wie du 2026 einen Brieffreund findest',
        description:
          'Wo du suchst, was in den ersten Brief gehört und wie der Austausch nicht schon bei Nachricht drei einschläft.',
        keywords: [
          'brieffreund finden',
          'brieffreunde app',
          'internationale brieffreunde',
          'freunde im ausland finden',
          'sprachaustausch',
        ],
        readTime: '6 Min.',
        content: `
# Wie du 2026 einen Brieffreund findest

Jemanden zu finden ist einfach. Schwierig ist, dass der Austausch über die dritte Nachricht hinauskommt.

## Wo suchen

**Apps für Korrespondenz.** Slowly, InterPals, Lettie, HelloTalk. Jede hat einen anderen Schwerpunkt: Slowly die verzögerte Zustellung, InterPals die schiere Zahl, HelloTalk das Sprachtraining, Lettie das Schreiben über Sprachgrenzen hinweg.

**Interessengemeinschaften.** Foren, Lesekreise. Der Austausch beginnt mit etwas Konkretem.

Melde dich nicht bei fünf Diensten an. Ein ernst gemeinter Versuch bei einem bringt mehr.

## Was ins Profil gehört

Werde konkret. „Ich mag Musik und Reisen" gibt niemandem etwas zum Antworten. „Ich habe mit 29 wieder mit Klavier angefangen und scheitere seit zwei Monaten an einem Nocturne von Chopin" öffnet eine Tür.

## Der erste Brief

Hier sterben fast alle Brieffreundschaften. Ein Brief mit „Hallo, wie geht's? Was sind deine Hobbys?" bekommt eine genauso leere Antwort.

Ein erster Brief, der funktioniert, macht drei Dinge:

1. **Er sagt, wo du bist und wie dein Tag aussieht.** Nicht das Wetter, sondern die konkrete Textur. Der Bus, den du nimmst. Was aus dem Fenster zu sehen ist.
2. **Er gibt etwas Echtes von dir preis.** Etwas, das dich beschäftigt, neugierig macht oder das du schlecht kannst.
3. **Er stellt eine Frage, deren Antwort dich wirklich interessiert.** Eine, kein Fragebogen.

200 bis 400 Wörter reichen völlig.

## Wenn ihr keine gemeinsame Sprache habt

Du brauchst kein fließendes Englisch. Schreib kurze, einfache Sätze — maschinelle Übersetzung hält die gut, verliert sich aber in langen Kommakonstruktionen.

Manche Apps übersetzen für dich. Bei Lettie wird jeder Brief und jede Antwort in 16 Sprachen übersetzt, und du kannst das Original neben der Übersetzung lesen. So lernen viele nebenbei etwas von der Sprache ihres Brieffreunds, ohne es sich vorgenommen zu haben.

## Sicherheit, kurz gefasst

- Teile in den ersten Briefen weder Adresse noch Arbeitsplatz noch vollen Namen.
- Sei misstrauisch, wenn jemand die Gefühle beschleunigt oder Geld erwähnt. Das ist das häufigste Betrugsmuster.
- Bleib auf der Plattform, solange du keinen Grund hast, sie zu verlassen.

## Realistische Erwartungen

Du wirst mehreren Menschen schreiben, bevor eine Korrespondenz trägt. Eine, die ein Jahr hält, ist mehr wert als zwanzig, die eine Woche dauern.
`,
      },
      zh: {
        title: '2026年怎么找到笔友',
        description: '去哪里找、第一封信写什么，以及怎样让对话撑过第三条消息。',
        keywords: ['找笔友', '笔友应用', '国际笔友', '交外国朋友', '语言交换'],
        readTime: '6 分钟',
        content: `
# 2026年怎么找到笔友

找到人并不难。难的是让来往撑过第三封信。

## 去哪里找

**书信类应用。** Slowly、InterPals、Lettie、HelloTalk。各有侧重：Slowly 强调延迟送达，InterPals 胜在人多，HelloTalk 偏语言练习，Lettie 适合跨语言书写。

**兴趣社区。** 论坛、读书会。一开始就有具体的共同话题，不会卡在"聊什么"。

别一口气注册五个。在一个平台上认真写一封，收获更大。

## 个人简介写什么

要具体。"喜欢音乐和旅行"让人无从回应。"29岁重新开始弹钢琴，跟一首肖邦夜曲较劲两个月了"就是一扇门。

## 第一封信

绝大多数书信往来死在这里。写"你好，最近怎么样？有什么爱好？"，收到的回复也同样空洞。

有效的第一封信做三件事：

1. **写清你在哪里、今天是什么样子。** 不是天气预报，而是具体的质感。你坐的那班公交，窗外的景象。
2. **交出一点真实的自己。** 正在纠结的事、好奇的事、做不好的事。
3. **问一个你真心想知道答案的问题。** 一个就够，别变成问卷。

两三百字足矣。

## 如果没有共同语言

不需要流利的英语。写短句、简单句——机器翻译能很好地保留这种结构，长句和层层逗号则容易失真。

有些应用会帮你翻译。在 Lettie 上，每封信和回信都会翻译成 16 种语言，还能把原文和译文对照着读。很多人因此在没打算学习的情况下，慢慢记住了对方语言的一些说法。

## 关于安全，简短说

- 前几封信里不要透露住址、工作单位和全名。
- 对感情推进异常快、或提到钱的人保持警惕。这是最常见的骗局套路。
- 在有理由离开之前，都留在平台内联系。

## 现实的预期

你会写给好几个人，其中一个能持续下去就很好了。一段维持一年的通信，胜过二十段只活一周的。
`,
      },
    },
  },
};

export function getLocalizedPost(slug: string, locale: Locale): LocalizedPost | null {
  return localizedPosts[slug]?.translations[locale] ?? null;
}

export function listLocalizedPosts(locale: Locale): Array<LocalizedEntry & { post: LocalizedPost }> {
  return Object.values(localizedPosts)
    .filter((entry) => entry.translations[locale])
    .map((entry) => ({ ...entry, post: entry.translations[locale]! }));
}
