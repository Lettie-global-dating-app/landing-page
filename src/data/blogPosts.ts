export type BlogPost = {
    id: string;
    title: string;
    titleEn: string;
    description: string;
    descriptionEn: string;
    content: string;
    contentEn: string;
    date: string;
    readTime: string;
    readTimeEn: string;
    category: string;
    categoryEn: string;
    image: string;
    author: string;
    keywords: string[];
    /** 영어 페이지 전용 키워드. 없으면 한국어 keywords 가 그대로 나가 영어권 검색에 무의미하다. */
    keywordsEn?: string[];
    /** 글 하단에 보이는 FAQ. 같은 내용이 FAQPage JSON-LD 로도 나간다 (보이는 글과 구조화 데이터를 다르게 두지 않는다). */
    faq?: { q: string; a: string }[];
    faqEn?: { q: string; a: string }[];
    /** 내용을 실제로 고친 날 (YYYY-MM-DD). dateModified 로 나간다. 내용 변경 없이 올리지 않는다. */
    updated?: string;
};

export const blogPosts: Record<string, BlogPost> = {
    'slow-letter-beauty': {
        id: 'slow-letter-beauty',
        title: '느린 편지의 아름다움: 빠름이 지배하는 세상에서',
        titleEn: 'The Beauty of Slow Letters: In a World Dominated by Speed',
        description: '모든 것이 빠르게 흘러가는 세상에서, 느리게 주고받는 편지의 가치. 기다림과 설렘, 깊이 있는 소통이 주는 특별한 경험.',
        descriptionEn: 'In a world where everything moves fast, discover the value of slow letters. Experience the special joy of waiting, anticipation, and deep communication.',
        date: '2025-11-18',
        readTime: '6분',
        readTimeEn: '6 min',
        category: '감성',
        categoryEn: 'Emotional',
        image: '/letter-writing.png',
        author: 'Lettie',
        keywords: ['느린 편지', '슬로우 커뮤니케이션', '펜팔', '기다림의 미학', '깊은 소통', '아날로그 감성', '의미있는 연결', '디지털 디톡스'],
        keywordsEn: ['slow letters', 'slow communication', 'pen pal', 'meaningful connection', 'digital detox', 'analog writing', 'deep conversation'],
        content: `
# 느린 편지의 아름다움: 빠름이 지배하는 세상에서

## 빠름에 지친 우리

모든 것이 빠릅니다. 메시지는 즉시 전달되고, 답장은 곧바로 옵니다.
1초도 기다리지 않는 세상. 그런데 왜 우리는 점점 더 외로워질까요?

**속도가 빠르다고 해서 깊이도 깊은 건 아닙니다.**

### 빠른 소통의 역설

- 메시지는 많지만 대화는 적습니다
- 연결은 많지만 관계는 얕습니다
- 답장은 빠르지만 진심은 부족합니다
- 정보는 많지만 이해는 적습니다

## 편지가 느린 이유

편지는 느립니다. 의도적으로 느립니다.

**쓰는 시간**: 생각을 정리하고, 단어를 고르고, 마음을 담는 시간
**보내는 시간**: 우편함에 넣고, 배달되기를 기다리는 시간
**읽는 시간**: 천천히 한 줄 한 줄 읽으며 상대를 이해하는 시간
**답장하는 시간**: 다시 생각하고, 다시 쓰는 시간

### 이 느림이 주는 것

느림은 단점이 아닙니다. 오히려 느림이기에 가능한 것들이 있습니다.

**깊이**: 빠르게 쓸 때는 놓치는 깊은 생각들
**진심**: 서두르지 않을 때 드러나는 진실한 마음
**설렘**: 답장을 기다리는 동안의 설렘
**존중**: 상대를 위해 시간을 쓴다는 것의 의미

## 기다림의 미학

Lettie에서 편지를 보내고 답장을 기다립니다.
하루가 될 수도, 며칠이 될 수도 있습니다.

**이 기다림이 나쁜가요?**
아닙니다. 이 기다림이야말로 가장 아름다운 순간입니다.

### 기다리는 동안

기다리는 동안 우리는:
- 상대가 무슨 생각을 할지 상상합니다
- 내가 쓴 편지를 다시 떠올립니다
- 다음 편지에 쓸 이야기를 준비합니다
- 상대에 대해 더 궁금해집니다

**기다림은 관계를 깊게 만듭니다.**

## 생각하며 쓰는 편지

즉시 답장하지 않아도 됩니다.
천천히, 생각하며 쓸 수 있습니다.

### 편지 쓰기의 과정

1. **생각하기**: 무엇을 말하고 싶은지
2. **정리하기**: 어떻게 표현할지
3. **쓰기**: 한 문장 한 문장 정성스럽게
4. **다듬기**: 더 나은 표현은 없을지
5. **보내기**: 마음을 담아서

이 과정 자체가 상대를 존중하는 방식입니다.

## 디지털 시대의 아날로그 감성

Lettie는 디지털 플랫폼입니다.
하지만 아날로그 편지의 감성을 담았습니다.

### 디지털의 장점 + 아날로그의 감성

**편리함**: 언제 어디서나 편지 쓰기
**느림**: 즉시 답장하지 않는 여유
**깊이**: 긴 편지를 쓸 수 있는 공간
**진심**: 생각을 담을 수 있는 시간

## 빠르지 않아도 괜찮습니다

세상은 빠르게 돌아갑니다.
하지만 모든 것이 빨라야 하는 건 아닙니다.

**어떤 것들은 느려야 더 아름답습니다.**

### 느린 것들의 가치

- 천천히 읽는 좋은 책
- 오래 우려낸 차 한 잔
- 시간을 들여 만든 요리
- 정성스럽게 쓴 편지

## 당신에게 묻고 싶습니다

**마지막으로 누군가에게 긴 편지를 쓴 게 언제인가요?**

**메시지가 아닌 편지를.**
**빠르게가 아닌 천천히.**
**간단하게가 아닌 정성스럽게.**

Lettie에서 그 편지를 다시 시작해보세요.

## 느린 소통의 시작

오늘부터 시작해보세요.
- 즉시 답장하지 않아도 됩니다
- 긴 편지를 써도 됩니다
- 생각을 정리할 시간을 가져도 됩니다
- 기다림을 즐겨도 됩니다

**느린 편지는 당신을 더 깊은 관계로 이끌 것입니다.**

---

*Lettie에서 느린 편지의 아름다움을 경험해보세요.*
    `,
        contentEn: `
# The Beauty of Slow Letters: In a World Dominated by Speed

## Exhausted by Speed

Everything is fast. Messages are delivered instantly, replies come immediately.
A world where we don't wait even a second. Yet why do we feel increasingly lonely?

**Just because something is fast doesn't mean it's deep.**

### The Paradox of Fast Communication

- Many messages but few conversations
- Many connections but shallow relationships
- Quick replies but lacking sincerity
- Lots of information but little understanding

## Why Letters Are Slow

Letters are slow. Intentionally slow.

**Time to write**: Time to organize thoughts, choose words, and pour in feelings
**Time to send**: Time to put in the mailbox and wait for delivery
**Time to read**: Time to slowly read line by line and understand the other person
**Time to reply**: Time to think again and write again

### What This Slowness Gives Us

Slowness is not a disadvantage. Rather, there are things possible only because of slowness.

**Depth**: Deep thoughts we miss when writing quickly
**Sincerity**: The genuine heart revealed when not hurrying
**Excitement**: The thrill while waiting for a reply
**Respect**: The meaning of spending time for someone

## The Aesthetics of Waiting

On Lettie, you send a letter and wait for a reply.
It could be a day, it could be several days.

**Is this waiting bad?**
No. This waiting is the most beautiful moment.

### While Waiting

While waiting, we:
- Imagine what the other person will think
- Recall the letter we wrote
- Prepare stories for the next letter
- Become more curious about the other person

**Waiting deepens relationships.**

## Writing Letters with Thought

You don't have to reply immediately.
You can write slowly, with thought.

### The Process of Letter Writing

1. **Thinking**: What do I want to say
2. **Organizing**: How to express it
3. **Writing**: Carefully, sentence by sentence
4. **Refining**: Is there a better expression
5. **Sending**: With heart

This process itself is a way of respecting the other person.

## Analog Sensibility in the Digital Age

Lettie is a digital platform.
But it contains the sensibility of analog letters.

### Digital Advantages + Analog Sensibility

**Convenience**: Write letters anytime, anywhere
**Slowness**: The leisure of not replying immediately
**Depth**: Space to write long letters
**Sincerity**: Time to contain thoughts

## It's Okay Not to Be Fast

The world spins quickly.
But not everything needs to be fast.

**Some things are more beautiful when slow.**

### The Value of Slow Things

- A good book read slowly
- A cup of tea steeped for a long time
- Food made with time
- A letter written with care

## I Want to Ask You

**When was the last time you wrote a long letter to someone?**

**A letter, not a message.**
**Slowly, not quickly.**
**Carefully, not simply.**

Start that letter again on Lettie.

## The Beginning of Slow Communication

Start today.
- You don't have to reply immediately
- You can write long letters
- You can take time to organize your thoughts
- You can enjoy the waiting

**Slow letters will lead you to deeper relationships.**

---

*Experience the beauty of slow letters on Lettie.*
    `
    },
    'first-penpal-letter': {
        id: 'first-penpal-letter',
        title: '첫 펜팔 편지: 낯선 이에게 마음을 열다',
        titleEn: 'Your First Penpal Letter: Opening Your Heart to a Stranger',
        description: '한 번도 만난 적 없는 낯선 이에게 첫 편지를 쓴다는 것. 설렘과 두려움, 기대와 호기심이 공존하는 특별한 순간.',
        descriptionEn: 'Writing your first letter to a complete stranger. A special moment where excitement and fear, anticipation and curiosity coexist.',
        date: '2025-11-18',
        readTime: '5분',
        readTimeEn: '5 min',
        category: '가이드',
        categoryEn: 'Guide',
        image: '/letter-writing.png',
        author: 'Lettie',
        keywords: ['첫 펜팔', '펜팔 시작', '낯선 이에게 편지', '첫 만남', '펜팔 설렘', '글로벌 친구', '편지 쓰기', '새로운 만남'],
        keywordsEn: ['first pen pal letter', 'what to write to a pen pal', 'pen pal letter examples', 'how to start a letter', 'pen pal introduction'],
        content: `
# 첫 펜팔 편지: 낯선 이에게 마음을 열다

## 낯선 이에게 보내는 첫 편지

화면을 켜고 빈 편지지를 봅니다.
**"안녕하세요"**라고 쓰려다가 지웁니다.
**"Hi"**라고 써봤다가 또 지웁니다.

**낯선 이에게 첫 편지를 쓴다는 건 쉽지 않습니다.**

### 왜 어려울까요?

- 상대가 어떤 사람인지 모릅니다
- 무엇을 좋아하는지 모릅니다
- 어떤 이야기를 하면 좋을지 모릅니다
- 내 편지를 읽고 답장해줄지도 모릅니다

## 하지만 그래서 더 특별합니다

모르기 때문에 오히려 자유롭습니다.
**아무것도 정해진 게 없기에 모든 게 가능합니다.**

### 첫 편지의 마법

- 선입견 없이 시작할 수 있습니다
- 진짜 나를 보여줄 수 있습니다
- 새로운 세계를 만날 수 있습니다
- 예상치 못한 인연이 시작됩니다

## 첫 편지에 담을 것들

무엇을 써야 할까요?
정답은 없습니다. 하지만 도움이 될 만한 것들이 있습니다.

### 1. 진솔한 소개

거창할 필요 없습니다. 있는 그대로의 당신을 소개하세요.

**예시**:
"안녕하세요, 저는 서울에 사는 25살 직장인입니다.
주말이면 북한산에 올라가 도시를 내려다보는 걸 좋아합니다.
당신은 어디에 살고 있나요?"

### 2. 당신의 일상

특별하지 않아도 괜찮습니다. 평범한 일상이 때로는 가장 흥미롭습니다.

**예시**:
"오늘 아침, 창밖을 보니 첫눈이 내리고 있었어요.
급하게 준비하느라 커피를 쏟았지만,
눈 내리는 풍경이 너무 예뻐서 늦어도 괜찮다는 생각이 들었습니다."

### 3. 궁금한 것들

상대에게 질문하세요. 질문은 대화의 시작입니다.

**좋은 질문들**:
- 당신의 나라는 지금 어떤 계절인가요?
- 평범한 하루는 어떻게 흘러가나요?
- 요즘 무엇에 관심이 있나요?
- 당신을 행복하게 하는 작은 것들은 무엇인가요?

### 4. 당신의 관심사

좋아하는 것들을 공유하세요. 공통점을 찾을 수도, 새로운 걸 배울 수도 있습니다.

**예시**:
"저는 재즈를 좋아합니다.
특히 비 오는 날 Miles Davis를 들으면 마음이 평온해집니다.
당신은 어떤 음악을 좋아하나요?"

## 첫 편지를 쓸 때의 팁

### 1. 완벽하려 하지 마세요

문법이 틀려도, 표현이 서툴러도 괜찮습니다.
**진심이 담긴 편지가 완벽한 편지보다 낫습니다.**

### 2. 너무 길지 않게

첫 편지는 적당한 길이가 좋습니다.
상대가 부담 없이 읽고 답장할 수 있도록.

### 3. 열린 질문을 하세요

"네/아니오"로 답할 수 있는 질문보다
이야기를 나눌 수 있는 질문이 좋습니다.

❌ "영화 좋아하세요?"
✅ "어떤 영화를 좋아하시나요? 최근에 본 영화 중 기억에 남는 게 있나요?"

### 4. 긍정적인 톤으로

첫 만남은 밝고 긍정적으로.
부정적이거나 무거운 이야기는 나중에.

## 답장을 기다리며

편지를 보냈습니다.
이제 기다립니다.

### 기다리는 동안의 마음

**설렘**: 어떤 답장이 올까?
**걱정**: 답장이 올까?
**기대**: 어떤 사람일까?
**호기심**: 우리의 대화는 어떻게 흘러갈까?

**이 모든 감정이 펜팔의 시작입니다.**

## 답장이 왔을 때

첫 답장을 받는 순간,
당신은 알게 될 것입니다.

**이 설렘이 바로 펜팔의 매력이라는 것을.**

### 답장을 읽으며

- 천천히 읽으세요
- 상대의 마음을 느껴보세요
- 공통점을 찾아보세요
- 다음 편지를 생각해보세요

## 두 번째 편지로

첫 편지보다 두 번째 편지가 더 쉬울 것입니다.
이제 조금은 알기 때문입니다.

**그렇게 편지는 계속되고,**
**낯선 이는 친구가 되고,**
**친구는 소중한 인연이 됩니다.**

## 지금 시작하세요

Lettie를 열고,
첫 편지를 써보세요.

**완벽하지 않아도 됩니다.**
**길지 않아도 됩니다.**
**그저 진심을 담으면 됩니다.**

낯선 이에게 보내는 첫 편지,
그것이 특별한 인연의 시작입니다.

---

*Lettie에서 첫 펜팔을 시작해보세요.*
    `,
        contentEn: `
# Your First Penpal Letter: Opening Your Heart to a Stranger

## The First Letter to a Stranger

You turn on your screen and look at a blank letter page.
You try to write **"안녕하세요"** and then delete it.
You try **"Hi"** and delete it again.

**Writing your first letter to a stranger isn't easy.**

### Why is it difficult?

- You don't know who they are
- You don't know what they like
- You don't know what to talk about
- You don't know if they'll read your letter and reply

## But That's What Makes It Special

Because you don't know, you're actually free.
**Since nothing is predetermined, everything is possible.**

### The Magic of the First Letter

- You can start without preconceptions
- You can show your true self
- You can discover a new world
- An unexpected connection begins

## What to Include in Your First Letter

What should you write?
There's no right answer. But here are some helpful ideas.

### 1. An Honest Introduction

It doesn't need to be grand. Just introduce yourself as you are.

**Example**:
"Hello, I'm a 25-year-old office worker living in Seoul.
On weekends, I like to climb Bukhansan and look down at the city.
Where do you live?"

### 2. Your Daily Life

It doesn't have to be extraordinary. Sometimes the most ordinary days are the most interesting.

**Example**:
"This morning, I looked out the window and saw the first snow falling.
I was rushing to get ready and spilled my coffee,
but the snowy scenery was so beautiful that I thought being late was okay."

### 3. Your Curiosities

Ask them questions. Questions are the beginning of conversation.

**Good Questions**:
- What season is it in your country right now?
- How does a typical day unfold for you?
- What are you interested in these days?
- What are the small things that make you happy?

### 4. Your Interests

Share what you love. You might find common ground or learn something new.

**Example**:
"I love jazz music.
Especially on rainy days, listening to Miles Davis brings me peace.
What kind of music do you enjoy?"

## Tips for Writing Your First Letter

### 1. Don't Aim for Perfection

It's okay if your grammar isn't perfect or your expressions are clumsy.
**A sincere letter is better than a perfect one.**

### 2. Keep It Moderate in Length

Your first letter should be a reasonable length.
Make it easy for them to read and reply without feeling overwhelmed.

### 3. Ask Open-Ended Questions

Rather than questions that can be answered with "yes/no,"
ask questions that invite conversation.

❌ "Do you like movies?"
✅ "What kind of movies do you like? Is there a recent film that stood out to you?"

### 4. Keep a Positive Tone

First meetings should be bright and positive.
Save negative or heavy topics for later.

## While Waiting for a Reply

You've sent your letter.
Now you wait.

### Feelings While Waiting

**Excitement**: What kind of reply will come?
**Worry**: Will they reply?
**Anticipation**: What kind of person are they?
**Curiosity**: How will our conversation unfold?

**All these emotions are the beginning of penpalling.**

## When the Reply Arrives

The moment you receive that first reply,
you'll understand.

**This excitement is exactly what makes penpalling so magical.**

### Reading the Reply

- Read it slowly
- Feel their heart
- Look for common ground
- Think about your next letter

## Moving to the Second Letter

The second letter will be easier than the first.
Because now you know a little more.

**And so the letters continue,**
**A stranger becomes a friend,**
**A friend becomes a cherished connection.**

## Start Now

Open Lettie,
and write your first letter.

**It doesn't have to be perfect.**
**It doesn't have to be long.**
**Just let your sincerity shine through.**

Your first letter to a stranger—
that's the beginning of a special connection.

---

*Start your first penpal journey on Lettie.*
    `
    },
    'winter-letter-warmth': {
        id: 'winter-letter-warmth',
        title: '겨울 편지: 차가운 계절에 전하는 따뜻한 마음',
        titleEn: 'Winter Letters: Sharing Warm Hearts in a Cold Season',
        description: '첫눈이 내리는 겨울, 당신에게 보내는 편지 한 통. 추운 계절이지만 따뜻한 마음으로 서로를 응원하며, Lettie에서 시작하는 겨울 펜팔 이야기.',
        descriptionEn: 'A letter to you on the first snow of winter. Though it\'s a cold season, we encourage each other with warm hearts—a winter penpal story that begins on Lettie.',
        date: '2025-11-16',
        readTime: '5분',
        readTimeEn: '5 min',
        category: '감성',
        categoryEn: 'Emotional',
        image: '/letter-writing.png',
        author: 'Lettie',
        keywords: ['겨울 편지', '펜팔 겨울', '따뜻한 편지', '겨울 감성', '크리스마스 펜팔', '연말 편지', '위로의 편지', '겨울 소통', '따뜻한 마음'],
        keywordsEn: ['winter letters', 'seasonal pen pal letters', 'holiday letter ideas', 'warm letter writing'],
        content: `
# 겨울 편지: 차가운 계절에 전하는 따뜻한 마음

## 첫눈이 내리는 날

창밖을 보니 첫눈이 내리고 있습니다.
하얀 눈송이들이 하늘에서 천천히 내려와 세상을 하얗게 물들입니다.

이런 날이면 문득 누군가에게 편지를 쓰고 싶어집니다. 멀리 있는 당신에게, 아직 만나지 못한 당신에게, 따뜻한 안부를 전하고 싶어집니다.

**당신의 겨울은 어떤가요?**

## 추운 계절, 따뜻한 마음

겨울은 차갑습니다. 날씨도, 바람도, 밤도 길고 춥습니다. 하지만 겨울이기에 더욱 빛나는 것들이 있습니다.

### 겨울에만 느낄 수 있는 따뜻함

**따뜻한 차 한 잔**: 찬 공기 속에서 마시는 뜨거운 차는 온몸을 녹여줍니다
**포근한 담요**: 추운 밤, 담요 속에 웅크리는 작은 행복
**창가의 눈송이**: 창문에 앉아 내리는 눈을 바라보는 고요한 순간
**따뜻한 편지**: 차가운 계절에 받는 따뜻한 마음의 편지

### 편지가 주는 온기

Lettie에서 주고받는 편지는 겨울의 찬 공기를 뚫고 따뜻함을 전합니다.

당신이 어디에 있든, 얼마나 추운 겨울을 보내고 있든, 편지 한 통은 당신의 마음을 따뜻하게 만들어줄 수 있습니다.

## 겨울 밤의 편지

긴 겨울 밤, 혼자 있는 시간이 많아집니다. 해가 일찍 지고, 밤은 깁니다.

하지만 이 긴 밤이 나쁜 것만은 아닙니다. 천천히 생각을 정리하고, 한 해를 돌아보고, 마음을 담은 편지를 쓸 수 있는 시간이기도 합니다.

### 겨울 밤에 쓰는 편지의 특별함

**진솔함**: 어둠 속에서는 더 솔직해집니다
**깊이**: 긴 밤은 깊은 생각을 가능하게 합니다
**위로**: 외로운 밤, 누군가와 연결된다는 느낌
**희망**: 긴 밤이 지나면 아침이 온다는 것을 압니다

## 크리스마스가 다가오는 계절

크리스마스가 다가오는 계절입니다. 거리는 조명으로 화려해지고, 캐럴이 들려옵니다.

하지만 모두가 행복한 것은 아닙니다. 어떤 이에게 연말은 외로움이 더 크게 느껴지는 시간이기도 합니다.

### Lettie에서의 연말

Lettie에서는 혼자가 아닙니다. 전 세계 어딘가에서 당신을 기다리는 펜팔이 있습니다.

**함께 보내는 연말**: 멀리 있어도 마음은 가까이
**서로를 응원하는 시간**: 힘든 시기를 함께 이겨냅니다
**새해를 향한 희망**: 함께 새로운 해를 맞이합니다
**진정한 연결**: 선물보다 마음을 나눕니다

## 당신에게 묻고 싶은 것들

이 겨울, 당신에게 묻고 싶습니다.

**당신의 겨울은 어떤 색인가요?**
누군가에게는 하얀색, 누군가에게는 따뜻한 주황색, 또 누군가에게는 차가운 파란색.

**추운 날 당신을 따뜻하게 해주는 것은 무엇인가요?**
따뜻한 음료? 좋아하는 음악? 아늑한 공간? 아니면 누군가의 따뜻한 말 한마디?

**겨울 밤, 당신은 무슨 생각을 하나요?**
한 해를 돌아보나요? 새해를 계획하나요? 아니면 그저 고요함을 즐기나요?

**올 겨울, 누구에게 편지를 쓰고 싶나요?**
오래된 친구? 새로운 펜팔? 아니면 아직 만나지 못한 누군가?

## Lettie에서의 겨울 여정

Lettie에서 보내는 겨울은 특별합니다.

### 첫 번째 겨울 편지: 얼음을 녹이는 인사

처음 만나는 낯선 사람에게 보내는 편지. 어색하지만 설레는 순간입니다.

**자기소개**: 짧지만 진솔하게, 당신이 누구인지
**겨울 이야기**: 당신의 겨울은 어떤지, 무엇을 좋아하는지
**호기심**: 상대방에 대한 진심 어린 질문들
**따뜻함**: 차가운 계절이지만 따뜻한 마음으로

### 두 번째 겨울 편지: 조금씩 녹아가는 얼음

서로에 대해 조금 알게 되었습니다. 대화가 자연스러워집니다.

**공감**: 서로의 경험에 공감하기
**나눔**: 좋아하는 겨울 음악, 영화, 책 공유하기
**위로**: 힘든 점이 있다면 서로 위로하기
**응원**: 서로의 꿈과 목표를 응원하기

### 세 번째 겨울 편지: 완전히 녹은 얼음

이제는 친구가 되어갑니다. 편지가 기다려집니다.

**일상**: 소소한 일상을 나누는 편안함
**진솔함**: 진짜 마음을 보여줄 수 있음
**유머**: 함께 웃을 수 있는 관계
**신뢰**: 서로를 믿고 의지할 수 있음

### 네 번째 겨울 편지: 따뜻한 우정

편지를 주고받을수록 우정은 깊어집니다.

**깊은 대화**: 표면적인 이야기를 넘어서
**서로의 성장**: 함께 배우고 성장하기
**특별한 순간**: 크리스마스, 새해를 함께 맞이하기
**감사**: 서로의 존재에 감사하기

### 다섯 번째 겨울 편지: 봄을 기다리며

긴 겨울이 지나가고 봄이 다가옵니다. 하지만 우정은 계절과 상관없이 계속됩니다.

**추억**: 함께한 겨울을 돌아보기
**기대**: 다가올 봄에 대한 설렘
**약속**: 계속 연락하자는 약속
**영원**: 거리와 시간을 넘어선 우정

## 겨울이 주는 선물

겨울은 춥고 어둡습니다. 하지만 겨울이기에 더 소중한 것들이 있습니다.

### 느림의 가치

겨울은 모든 것을 느리게 만듭니다. 자연도, 사람도 느려집니다.

**하지만 그것이 좋습니다.**

Lettie에서 주고받는 편지도 느립니다. 즉각적이지 않습니다. 기다림이 필요합니다.

**하지만 그 기다림 속에서 우정이 익어갑니다.**

### 고요함의 아름다움

눈 내리는 날의 고요함처럼, 편지에도 고요함이 있습니다.

**시끄러운 세상에서 벗어나**: 조용히 마음을 전합니다
**깊은 생각**: 신중하게 단어를 고릅니다
**진정한 소통**: 표면이 아닌 마음을 나눕니다
**평화**: 편지를 쓰고 읽는 순간의 평온함

### 따뜻함의 소중함

추운 겨울에 따뜻함은 더욱 소중합니다.

**작은 따뜻함도 크게 느껴집니다**: 따뜻한 말 한마디의 힘
**나눔의 기쁨**: 따뜻함을 나누면 배가 됩니다
**상호작용**: 주고받는 따뜻함
**지속성**: 계절이 바뀌어도 계속되는 따뜻한 마음

## 첫 편지를 시작하세요

밖은 춥습니다. 눈이 내립니다. 바람이 붑니다.

**하지만 당신의 마음은 따뜻할 수 있습니다.**

Lettie를 열고 첫 편지를 써보세요.

**누구에게 쓸까요?**

- 세상 어딘가에서 당신을 기다리는 누군가
- 당신처럼 따뜻한 연결을 찾는 사람
- 겨울의 외로움을 이해하는 친구
- 함께 봄을 기다릴 펜팔

### 첫 편지에 담을 것들

**솔직한 인사**: 안녕하세요, 저는...
**겨울 이야기**: 지금 제 창밖에는...
**당신의 관심사**: 저는 ... 를 좋아합니다
**진심 어린 질문**: 당신의 겨울은 어떤가요?
**따뜻한 마무리**: 당신의 답장을 기다립니다

## 겨울의 약속

겨울은 약속합니다.

**추운 날이 지나면 따뜻한 봄이 온다고.**

긴 밤이 지나면 밝은 아침이 온다고.

**나도 당신에게 약속합니다.**

Lettie에서 당신을 기다리고 있다고.

당신의 편지를 읽고 싶다고.

함께 이 겨울을 따뜻하게 보내고 싶다고.

## 눈 내리는 밤에

눈이 내립니다. 조용히, 천천히, 아름답게.

**각각의 눈송이가 다르듯, 우리 모두 다릅니다.**

하지만 함께 모이면 아름다운 겨울 풍경을 만듭니다.

Lettie에서 당신과 나, 그리고 전 세계의 펜팔들이 함께 모여 아름다운 이야기를 만듭니다.

## 따뜻한 초대

이 겨울, 혼자 보내지 마세요.

**Lettie에서 새로운 친구를 만나보세요.**

- 첫눈을 함께 기뻐할 친구
- 크리스마스 이야기를 나눌 펜팔
- 새해 계획을 공유할 동반자
- 긴 겨울 밤을 함께할 친구

### 지금 시작하세요

**Lettie를 다운로드하고**

첫 편지를 쓰세요.

당신의 겨울 이야기를 나누세요.

누군가의 겨울을 따뜻하게 만들어주세요.

**그리고 당신의 겨울도 따뜻해질 것입니다.**

## 겨울 편지의 끝

이 편지를 마치며, 당신에게 따뜻한 안부를 전합니다.

**추운 날씨에 건강하시길 바랍니다.**

외로운 밤에 따뜻한 편지가 있기를.

힘든 시간에 응원해줄 친구가 있기를.

**이 겨울, Lettie에서 만나요.**

눈 내리는 창가에서, 따뜻한 차를 마시며, 당신의 편지를 기다립니다.

— 따뜻한 마음을 담아

*P.S. 당신의 겨울은 어떤가요? 무엇이 당신을 따뜻하게 해주나요? 편지로 들려주세요. 함께 이 겨울을 나누고 싶습니다.*

**❄️ 첫눈이 내리는 날, 첫 편지를 시작하세요 ❄️**
    `,
        contentEn: `
# Winter Letters: Sharing Warm Hearts in a Cold Season

## On the Day of First Snow

Looking out the window, I see the first snow falling.
White snowflakes slowly descend from the sky, painting the world white.

On days like this, I suddenly want to write a letter to someone. To you far away, to you I haven't met yet, I want to send warm greetings.

**How is your winter?**

## Cold Season, Warm Hearts

Winter is cold. The weather, the wind, the nights are long and cold. But there are things that shine even brighter because it's winter.

### Warmth You Can Only Feel in Winter

**A warm cup of tea**: Hot tea in cold air warms your entire body
**A cozy blanket**: The small happiness of curling up under a blanket on a cold night
**Snowflakes by the window**: The quiet moment of sitting by the window watching snow fall
**A warm letter**: A heartfelt letter received in the cold season

### The Warmth Letters Bring

Letters exchanged on Lettie pierce through winter's cold air to deliver warmth.

Wherever you are, however cold your winter may be, a single letter can warm your heart.

## Letters on Winter Nights

On long winter nights, we spend more time alone. The sun sets early, and the nights are long.

But these long nights aren't all bad. They're also time to slowly organize your thoughts, reflect on the year, and write heartfelt letters.

### What Makes Winter Night Letters Special

**Honesty**: In darkness, we become more truthful
**Depth**: Long nights enable deep thoughts
**Comfort**: On lonely nights, the feeling of being connected to someone
**Hope**: Knowing that morning comes after the long night

## The Season When Christmas Approaches

Christmas is approaching. Streets become decorated with lights, and carols play.

But not everyone is happy. For some, year-end is a time when loneliness feels even greater.

### Year-End on Lettie

On Lettie, you're not alone. Somewhere in the world, there's a penpal waiting for you.

**Year-end spent together**: Far in distance, but close at heart
**Time to support each other**: Together we overcome difficult times
**Hope for the new year**: Together we welcome the new year
**True connection**: Sharing hearts rather than gifts

## Things I Want to Ask You

This winter, I want to ask you.

**What color is your winter?**
For some it's white, for some it's warm orange, for others it's cold blue.

**What warms you up on cold days?**
A warm drink? Your favorite music? A cozy space? Or someone's warm words?

**What do you think about on winter nights?**
Do you reflect on the year? Plan for the new year? Or simply enjoy the quiet?

**This winter, who do you want to write a letter to?**
An old friend? A new penpal? Or someone you haven't met yet?

## Your Winter Journey on Lettie

Winter spent on Lettie is special.

### First Winter Letter: A Greeting That Melts the Ice

A letter sent to a stranger you're meeting for the first time. An awkward but exciting moment.

**Self-introduction**: Brief but honest, who you are
**Winter story**: What your winter is like, what you enjoy
**Curiosity**: Sincere questions about the other person
**Warmth**: A cold season, but with a warm heart

### Second Winter Letter: Ice Slowly Melting

You've gotten to know each other a little. Conversation becomes natural.

**Empathy**: Empathizing with each other's experiences
**Sharing**: Sharing favorite winter music, movies, books
**Comfort**: Comforting each other if there are difficulties
**Support**: Encouraging each other's dreams and goals

### Third Winter Letter: Completely Melted Ice

Now you're becoming friends. You look forward to the letters.

**Daily life**: The comfort of sharing small everyday moments
**Honesty**: Being able to show your true heart
**Humor**: A relationship where you can laugh together
**Trust**: Being able to rely on each other

### Fourth Winter Letter: Warm Friendship

As you exchange letters, friendship deepens.

**Deep conversations**: Going beyond superficial talk
**Growing together**: Learning and growing together
**Special moments**: Welcoming Christmas and New Year together
**Gratitude**: Being grateful for each other's presence

### Fifth Winter Letter: Waiting for Spring

The long winter passes and spring approaches. But friendship continues regardless of season.

**Memories**: Reflecting on the winter spent together
**Anticipation**: Excitement for the coming spring
**Promise**: A promise to keep in touch
**Forever**: Friendship beyond distance and time

## Gifts Winter Gives

Winter is cold and dark. But there are things more precious because of winter.

### The Value of Slowness

Winter makes everything slow. Nature and people slow down.

**But that's good.**

Letters exchanged on Lettie are also slow. Not instant. Requiring patience.

**But within that waiting, friendship ripens.**

### The Beauty of Silence

Like the quietness of a snowy day, letters also have silence.

**Escaping a noisy world**: Quietly conveying hearts
**Deep thoughts**: Carefully choosing words
**True communication**: Sharing hearts, not surfaces
**Peace**: The tranquility of the moment writing and reading letters

### The Preciousness of Warmth

In cold winter, warmth is even more precious.

**Even small warmth feels great**: The power of one warm word
**Joy of sharing**: Warmth shared is warmth doubled
**Interaction**: Warmth given and received
**Continuity**: Warm hearts that continue even as seasons change

## Start Your First Letter

Outside it's cold. Snow is falling. Wind is blowing.

**But your heart can be warm.**

Open Lettie and write your first letter.

**To whom will you write?**

- Someone somewhere in the world waiting for you
- Someone seeking warm connection like you
- A friend who understands winter loneliness
- A penpal to wait for spring together with

### What to Include in Your First Letter

**Honest greeting**: Hello, I am...
**Winter story**: Outside my window right now...
**Your interests**: I enjoy...
**Sincere question**: How is your winter?
**Warm closing**: I look forward to your reply

## Winter's Promise

Winter promises.

**That warm spring comes after cold days.**

That bright morning comes after long nights.

**I also promise you.**

That I'm waiting for you on Lettie.

That I want to read your letter.

That I want to spend this winter warmly together.

## On a Snowy Night

Snow is falling. Quietly, slowly, beautifully.

**Just as each snowflake is different, we are all different.**

But together, we create a beautiful winter landscape.

On Lettie, you and I, and penpals from around the world come together to create beautiful stories.

## A Warm Invitation

This winter, don't spend it alone.

**Meet new friends on Lettie.**

- A friend to rejoice in the first snow with
- A penpal to share Christmas stories with
- A companion to share new year plans with
- A friend to spend long winter nights with

### Start Now

**Download Lettie**

Write your first letter.

Share your winter story.

Warm someone's winter.

**And your winter will become warm too.**

## The End of This Winter Letter

As I finish this letter, I send you warm greetings.

**I hope you stay healthy in the cold weather.**

May you have warm letters on lonely nights.

May you have friends to cheer you on during hard times.

**This winter, let's meet on Lettie.**

By a snowy window, drinking warm tea, I await your letter.

— With a warm heart

*P.S. How is your winter? What warms you up? Please tell me in a letter. I want to share this winter together.*

**❄️ On the day of first snow, start your first letter ❄️**
    `
    },
    'halloween-connections': {
        id: 'halloween-connections',
        title: '할로윈 고백: 어둠 속에서 찾는 연결',
        titleEn: 'Halloween Confessions: Finding Connections in the Dark',
        description: '이번 할로윈, Vampiro가 전하는 특별한 유령 이야기 — 진심 어린 편지를 통해 예상치 못한 곳에서 진정한 우정을 찾는 이야기.',
        descriptionEn: 'This Halloween, Vampiro shares a special ghost story—finding true friendship in unexpected places through heartfelt letters.',
        date: '2025-10-29',
        readTime: '5분',
        readTimeEn: '5 min',
        category: '커뮤니티',
        categoryEn: 'Community',
        image: '/letter-writing.png',
        author: 'Vampiro (Sebastian)',
        keywords: ['할로윈 펜팔', '대안 우정', '고딕 펜팔', '할로윈 연결', '스푸키 시즌 친구', '뱀파이어 미학', '다크 아카데미아 펜팔', '10월 편지'],
        keywordsEn: ['halloween letters', 'seasonal pen pal', 'autumn letter writing', 'honest conversation'],
        content: `
# 할로윈 고백: 어둠 속에서 찾는 연결

## 조금 다른 유령 이야기

안녕하세요, 저는 Vampiro입니다 — 기억하기 편하시다면 Sebastian이라고 불러주셔도 좋아요.

10월의 늦은 밤, 별 기대 없이 Lettie를 다운로드했어요. 저는 항상 나뭇잎이 주황색으로 물들고 공기가 차가워질 때 더 살아있는 것 같은 기분이 들거든요. 할로윈 시즌에는 모든 것이 조금 더 마법 같고, 조금 더 진실하게 느껴져요.

## 이 편지에 숨어 있는 사람은?

**기본 정보**: 24살, 얼터너티브 패션 미학과 아늑한 차 의식 사이 어딘가에 살고 있어요. 사람들은 종종 제가 고딕 소설에서 걸어나온 것 같다고 말하는데, 솔직히? 그 말을 칭찬으로 받아들여요.

**제 밤을 채우는 것들**:
- **음악**: 색소폰과 기타를 연주해요, 주로 자정 이후에 더 좋게 들리는 우울한 곡들이죠
- **시각적 이야기**: 웹툰과 만화에 집착해요 — 어둡고 분위기 있을수록 좋아요
- **창작 활동**: 먹기 아까울 정도로 예쁜 페이스트리를 굽거나 촛불 아래에서 타로 카드를 읽는 일
- **차 의식**: 완벽한 차 한 잔을 우려내는 데는 예술이 필요해요, 아직 배우는 중이에요

## 할로윈 호박의 은유

할로윈에 사람들이 호박을 어떻게 조각하는지 아시나요? 안쪽의 지저분한 부분을 다 파내고, 안에서 빛나는 무언가를 만들어, 모두가 볼 수 있게 밖에 내놓죠.

진정한 우정을 찾는 것도 그런 것 같아요.

우리는 조각된 겉모습 — 빛나고, 사진 찍기 좋은 부분을 보여주는 데 너무 많은 시간을 써요. 하지만 지저분하게 파낸 안쪽 부분은 어떤가요? "너무 틈새 시장"으로 보이는 관심사, "너무 이상한" 음악, 사람들이 눈썹을 치켜올리게 만드는 취미들?

**바로 여기가 Lettie가 등장하는 곳이에요.**

## 좋아요 대신 편지를 선택한 이유

저도 흔한 앱들을 써봤어요. 아시죠 — 왼쪽으로 스와이프, 오른쪽으로 스와이프, 사진과 "여행과 좋은 분위기를 좋아해요"라고 쓴 소개글로 3초 만에 판단하는 그런 앱들요.

하지만 문제는 제 분위기가 항상 일반적으로 "좋은" 건 아니라는 거예요. 제 분위기는:
- 영감이 떠오를 때가 새벽 2시라서 색소폰을 연주하는 것
- 새로운 타로 스프레드에 진심으로 흥분하는 것
- 특정 웹툰 장면이 왜 다르게 와닿는지 몇 시간 동안 토론하는 것
- 비 오는 가을 저녁에 완벽한 차 페어링을 공유하는 것

이런 것들은 신중하게 큐레이션된 인스타그램 사진으로 담아낼 수 없어요. 대화를 통해 발견되는 것들이에요. 편지를 통해. 시간을 통해.

## 이번 할로윈에 찾고 있는 것

**진실한 영혼들** — 얼터너티브가 접근하기 어렵다는 뜻이 아니라는 걸 이해하는 사람들. 고딕 미학과 따뜻한 마음이 서로 배타적이지 않다는 걸 아는 사람들.

**창의적인 영혼들** — 이런 것에 흥분하는 사람들:
- 무언가를 느끼게 만드는 음악 (우울해도 괜찮아요)
- 컷과 프레임으로 전해지는 이야기
- 베이킹과 양조의 연금술
- 타로와 찻잎의 신비

**인내심 있는 친구들** — 진정한 연결이 5분보다 더 걸린다는 걸 이해하는 사람들. 5개의 메시지보다 더 걸린다는 걸. 어쩌면 5통의 편지, 천천히 주고받으며, 점차 우리가 누구인지 드러나는 것.

## 천천히 드러나는 아름다움

Lettie에서는 편지가 거리만큼 시간이 걸려 도착하고, 상대의 답장이 와야 다음 편지를 쓸 수 있어요. 처음에는 답답하다고 생각했어요.

이제는 그게 자유롭다는 걸 깨달았어요.

**즉각 응답해야 한다는 압박감이 없어요.** "읽씹"에 대한 불안도 없어요. 그냥 두 사람이, 시간을 갖고, 신중하게 단어를 선택하는 거예요.

**사진이 대화를 지배하지 않아요.** 생각, 관심사, 꿈, 두려움만 있어요 — 당신을 이해하는 사람을 찾으려 할 때 실제로 중요한 모든 것들.

**서두를 필요가 없어요.** 자신 외에 다른 무언가가 되어야 한다는 압박도 없어요. 지저분하게 파낸 호박 안쪽 부분, 그 모든 것을 포함해서요.

## 이번 할로윈의 초대

자, 여기 제 할로윈 고백이 있어요: 저는 복잡한 방에서 더 심해지는 방식으로 외로워요. 사람들에 둘러싸여 있지만, 진정한 연결을 찾는 것은 유령을 찾는 것처럼 느껴져요.

혹시 당신도 같은 기분인가요?

그렇다면, 서로의 받은편지함을 (좋은 의미로) 맴돌아볼까요?

### 저에게 말해주세요:
- 당신에게 진짜 무언가를 느끼게 한 마지막 노래
- 당신이 좋아하는 웹툰이나 만화, 그리고 그것이 중요한 이유
- 당신이 창작하고 있는 것 (또는 창작하고 싶은 것)
- 당신의 안락 음료와 그것에 얽힌 이야기
- 당신을 가장 자신답게 느끼게 하는 미학

### 제가 공유할게요:
- 밤에 더 좋게 들리는 제 현재 음악 집착
- 제가 작업 중인 타로 스프레드
- 제 최근 베이킹 실험 (성공과 아름다운 실패)
- 당신의 성격과 어울리는 차 블렌드
- 얼터너티브 패션 씬의 이야기들

## 코스튬 너머

할로윈은 우리가 다른 사람이 되도록 권장받는 유일한 밤이에요. 하지만 이 편지들을 통해, 우리가 더 우리 자신이 되는 연습을 할 수 있다면 어떨까요?

연기를 멈추고 연결을 시작한다면?

가장 무서운 것이 유령이나 도깨비가 아니라, 누군가에게 우리가 정말 누구인지 보여주는 취약함 — 그리고 그들이 그것을 받아들이는 것이라면?

## 그림자 속에서 기다리며

이번 할로윈, 저는 다른 누군가로 변장하지 않을 거예요.

저는 Vampiro로, Sebastian으로, 그 사이 누구로든 나타날 거예요 — 색소폰 연주자, 차 양조가, 타로 리더, 만화 애호가, 해가 지는 시기에 가장 살아있는 것 같은 기분이 드는 사람.

그리고 당신도 나타나기를 바라요.

다듬어지고 필터링된 버전이 아니라. 진짜 당신. 틈새 관심사와 자정의 생각들, 그리고 잡담보다 깊은 연결에 대한 갈망을 가진 당신.

**이번 할로윈을 팔로워를 모으는 게 아니라 진짜 우정을 찾는 것에 대해 만들어봐요.**

사라지는 메시지가 아니라 중요한 편지를 교환해요.

가끔 최고의 대화가 이렇게 일어난다는 걸 이해하는 그런 친구가 되어봐요:
- 자정 이후
- 술 대신 차를 마시며
- 날씨 대신 예술에 대해
- 마침내 보인다고 느끼는 사람들 사이에서

## 첫 번째 편지가 기다립니다

그러니 만약 당신이 선선한 10월 저녁에 이것을 읽고 있다면, 어딘가에 당신의 이상한 관심사와 자정의 생각들을 감사히 여길 누군가가 있을지도 모른다는 느낌이 든다면...

**저 여기 있어요.**

아마 차를 마시고 있을 거예요. 색소폰을 연습하고 있을 수도 있어요. 확실히 그것을 이해하는 누군가와 편지를 교환할 준비가 되어 있어요.

이번 할로윈, 다른 종류의 유령 이야기를 만들어봐요 — 두 영혼이 어둠 속에서 글을 통해 서로를 찾고, 그들이 줄곧 같은 것을 찾고 있었다는 걸 발견하는 이야기:

**진정한 연결. 진짜 우정. 이해하는 누군가.**

호박은 조각되었어요. 촛불은 켜졌어요. 첫 페이지는 비어 있어요.

*우리 함께 어떤 이야기를 쓸까요?*

— Vampiro (Sebastian)

🎃 아름다운 어둠을 감사히 여기는 친구들을 찾으며

🕯️ 한 번에 한 통의 편지로

🌙 이번 할로윈과 그 이후에도

**P.S.** — 제게 편지를 쓴다면, "너무 과하다"고 걱정하지 마세요. 제가 좋아하는 사람들은 항상 그래요. 저도 그렇고요.
    `,
        contentEn: `
# Halloween Confessions: Finding Connections in the Dark

## A Different Kind of Ghost Story

Hello, I'm Vampiro — or Sebastian if that's easier to remember.

Late one October night, I downloaded Lettie without much expectation. I've always felt more alive when the leaves turn orange and the air gets crisp. During Halloween season, everything feels a bit more magical, a bit more true.

## Who's Hiding Behind This Letter?

**The basics**: 24, living somewhere between alternative fashion aesthetics and cozy tea rituals. People often say I look like I walked out of a gothic novel and honestly? I take that as a compliment.

**What fills my nights**:
- **Music**: I play saxophone and guitar, mostly melancholic pieces that sound better after midnight
- **Visual stories**: Obsessed with webtoons and manga — the darker and more atmospheric, the better
- **Creative pursuits**: Baking pastries too pretty to eat or reading tarot cards by candlelight
- **Tea rituals**: There's an art to brewing the perfect cup of tea, and I'm still learning

## The Pumpkin Carving Metaphor

You know how people carve pumpkins on Halloween? They scoop out all the messy stuff inside, create something that glows from within, and put it out for everyone to see.

Finding real friendship is kind of like that.

We spend so much time showing our carved exterior — the glowing, Instagram-worthy parts. But what about the messy scooped-out insides? The interests that seem "too niche," the music that's "too weird," the hobbies that make people raise eyebrows?

**That's where Lettie comes in.**

## Why I Chose Letters Over Likes

I've tried the usual apps. You know the ones — swipe left, swipe right, judge someone in 3 seconds based on photos and a bio that says "I love travel and good vibes."

The problem is, my vibes aren't always conventionally "good." My vibes are:
- Playing saxophone at 2 AM when inspiration strikes
- Getting genuinely excited about a new tarot spread
- Discussing for hours why a certain webtoon scene hit different
- Sharing the perfect tea pairing for a rainy autumn evening

These things can't be captured in carefully curated Instagram photos. They're discovered through conversation. Through letters. Through time.

## What I'm Looking for This Halloween

**Genuine souls** — people who understand that alternative doesn't mean unapproachable. That gothic aesthetics and warm hearts aren't mutually exclusive.

**Creative spirits** — people who get excited about:
- Music that makes you feel something (even if it's melancholy)
- Stories told through panels and frames
- The alchemy of baking and brewing
- The mystery of tarot and tea leaves

**Patient friends** — people who understand that real connection takes longer than 5 minutes. Longer than 5 messages. Maybe 5 letters, exchanged slowly, revealing gradually who we are.

## The Beauty of Slow Reveal

On Lettie a letter takes as long as the distance to arrive, and you can only write again once their reply lands. At first, I thought it was limiting.

Now I realize it's liberating.

**No pressure to respond instantly.** No anxiety about being "left on read." Just two people, taking their time, choosing their words carefully.

**No photos dominating the conversation.** Just thoughts, interests, dreams, fears — all the things that actually matter when you're trying to find someone who gets you.

**No rush.** No pressure to be something other than yourself. Messy scooped-out pumpkin insides and all.

## This Halloween's Invitation

So here's my Halloween confession: I'm lonely in the way that gets worse in crowded rooms. Surrounded by people, yet finding real connection feels like searching for ghosts.

Do you ever feel that way too?

If so, want to haunt each other's inboxes (in the good way)?

### Tell me about:
- The last song that made you actually feel something
- Your favorite webtoon or manga and why it matters
- Something you're creating (or want to create)
- Your comfort beverage and the story behind it
- The aesthetic that makes you feel most like yourself

### I'll share:
- My current musical obsession that sounds better at night
- The tarot spread I'm working on
- My recent baking experiments (successes and beautiful failures)
- A tea blend that matches your personality
- Stories from the alternative fashion scene

## Beyond the Costume

Halloween is the one night we're encouraged to be someone else. But what if through these letters, we practice being more ourselves?

Stop performing and start connecting?

What if the scariest thing isn't ghosts or goblins, but the vulnerability of showing someone who we really are — and them accepting it?

## Waiting in the Shadows

This Halloween, I'm not dressing up as someone else.

I'm showing up as Vampiro, as Sebastian, as whoever I am in between — the saxophone player, tea brewer, tarot reader, manga lover, person who feels most alive when the sun goes down.

And I hope you show up too.

Not the polished, filtered version. The real you. With the niche interests and midnight thoughts and the yearning for connection deeper than small talk.

**Let's make this Halloween about finding real friendships, not collecting followers.**

Exchanging letters that matter, not messages that disappear.

Being the kind of friends who understand that sometimes the best conversations happen:
- After midnight
- Over tea instead of drinks
- About art instead of weather
- Between people who finally feel seen

## Your First Letter Awaits

So if you're reading this on a crisp October evening, feeling like maybe somewhere out there is someone who'd appreciate your weird interests and midnight thoughts...

**I'm here.**

Probably drinking tea. Maybe practicing saxophone. Definitely ready to exchange letters with someone who gets it.

This Halloween, let's create a different kind of ghost story — one where two souls find each other through words in the dark, and discover they've been looking for the same thing all along:

**Real connection. Genuine friendship. Someone who understands.**

The pumpkin's carved. The candle's lit. The first page is blank.

*What story shall we write together?*

— Vampiro (Sebastian)

🎃 Seeking friends who appreciate the beauty in darkness

🕯️ One letter at a time

🌙 This Halloween and beyond

**P.S.** — If you write to me, don't worry about being "too much." The people I like best always are. So am I.
    `
    },
    'dear-stranger': {
        id: 'dear-stranger',
        title: '낯선 당신에게: 천천히 깊어지는 연결을 믿는 사람의 편지',
        titleEn: 'Dear Stranger: A Letter from Someone Who Believes in Deep Connections',
        description: '목소리도, 얼굴도 모르는 당신에게. 느리지만 진실한 연결을 여전히 믿는 사람이 보내는 편지입니다. Lettie에서 진심 어린 펜팔 관계를 시작해보세요.',
        descriptionEn: 'To you whose voice and face I don\'t know. A letter from someone who still believes in slow but genuine connections. Start a heartfelt penpal relationship on Lettie.',
        date: '2025-01-22',
        readTime: '4분',
        readTimeEn: '4 min',
        category: '감성',
        categoryEn: 'Emotional',
        image: '/letter-writing.png',
        author: 'Lettie',
        keywords: ['펜팔 편지', '진실한 연결', '감성 편지', '낯선 사람에게', '펜팔 시작', '느린 관계', '의미있는 소통'],
        keywordsEn: ['letter to a stranger', 'writing to strangers', 'anonymous letters', 'deep connection'],
        content: `
# 낯선 당신에게

조금 이상하지 않나요? 목소리를 한 번도 들어본 적 없고, 눈을 한 번도 마주친 적 없는 누군가에게 편지를 쓴다는 것. 그런데도 내 마음 한구석에서는 믿고 있어요. 글을 통해서도 영혼은 서로를 알아볼 수 있다고.

## 이 편지를 읽는 당신

누가 이 편지를 읽을지 모르겠지만, 여전히 **느린 연결**을 믿는 사람에게 닿기를 바랍니다. 깊은 인상을 주려고 서두르지 않고, 그저 천천히 펼쳐지는 관계 말이에요. 마치 커튼 사이로 스며드는 이른 아침의 첫 햇살처럼요.

어쩌면 당신은 긴 하루를 보내고 나서 이 글을 읽고 있을지도 모르겠어요. 아니면 잠들기 전, 세상이 조용해지고 생각이 떠돌기 시작하는 시간일 수도 있겠죠.

## 당신에게 묻고 싶은 것

만약 그렇다면, 당신에게 한 가지 묻고 싶어요. 어디에 사는지, 무슨 일을 하는지가 아니라 — **무엇이 당신의 마음을 살아있게 만드나요?**

작고 조용하지만, 당신에게 평화를 가져다주는 것들은 무엇인가요? 짧은 순간일지라도요.

### 모두의 미소 뒤에 숨겨진 이야기

저는 믿게 되었어요. 모든 잔잔한 미소 뒤에는 아직 아무도 완전히 듣지 못한 이야기가 있다는 것을요. 그리고 어쩌면 이 편지를 통해, 당신의 이야기 일부를 듣고 싶어요.

## 진실한 대화를 위해

필터도 없고, 가식도 없이 — 그저 두 사람이 잠시 동안 솔직해지는 것.

만약 답장하기로 결정한다면, 당신에게 중요한 무언가를 말해주세요. 대부분의 사람들이 보통 묻지 않는 것에 대해서요. 저도 그렇게 할게요.

### 우리가 나눌 수 있는 것들

**삶의 작은 기쁨들**
- 오늘 마신 따뜻한 차 한 잔
- 창밖에서 본 석양의 색깔
- 문득 떠오른 어린 시절의 기억
- 마음을 편안하게 만드는 음악

**아무에게도 하지 못한 이야기**
- 꿈꾸고 있는 것들
- 두려워하는 것들
- 행복했던 순간들
- 그리워하는 것들

## Lettie에서의 만남

이것이 바로 Lettie가 특별한 이유예요. 우리는 서두르지 않습니다.

**번갈아 주고받는 편지로**: 천천히, 진실되게 서로를 알아갑니다.

**사진 없이 시작하는 관계**: 외모가 아닌 마음과 생각으로 만납니다.

**필터 없는 진심**: 꾸미지 않은 진짜 나를 보여줄 수 있는 공간입니다.

## 당신의 이야기를 기다리며

그때까지, 천천히 그리고 의미 있는 연결을 여전히 믿는 사람으로부터.

언젠가 당신의 편지를 받게 되기를 바라며 🌙

**당신의 이야기가 궁금합니다.**

Lettie에서 만나요. 우리의 대화가 시작되기를 기대하며.

— 느리지만 깊은 연결을 믿는 사람
    `,
        contentEn: `
# Dear Stranger

Isn't it a bit strange? Writing a letter to someone whose voice I've never heard, whose eyes I've never met. Yet somewhere in my heart, I believe. That souls can recognize each other even through words.

## To You Reading This

I don't know who will read this letter, but I hope it reaches someone who still believes in **slow connections**. Not rushing to make an impression, but relationships that unfold slowly. Like the first rays of morning sun streaming through curtains.

Perhaps you're reading this after a long day. Or maybe it's before bed, when the world gets quiet and thoughts begin to wander.

## What I Want to Ask You

If so, I want to ask you one thing. Not where you live or what you do — **what makes your heart feel alive?**

What are the small, quiet things that bring you peace? Even if just for a brief moment.

### The Story Behind Every Smile

I've come to believe that behind every gentle smile is a story no one has fully heard yet. And perhaps through this letter, I'd like to hear part of yours.

## For Genuine Conversation

No filters, no pretense — just two people being honest for a while.

If you decide to reply, tell me something that matters to you. About things most people don't usually ask about. I'll do the same.

### Things We Can Share

**Life's Small Joys**
- The warm cup of tea you drank today
- The color of the sunset you saw outside
- A childhood memory that suddenly surfaced
- Music that puts your mind at ease

**Stories You Haven't Told Anyone**
- Things you're dreaming about
- Things you're afraid of
- Moments when you were happy
- Things you miss

## Meeting on Lettie

This is what makes Lettie special. We don't rush.

**Through letters that take turns**: Slowly, genuinely getting to know each other.

**Relationships that start without photos**: Meeting through hearts and thoughts, not appearances.

**Unfiltered sincerity**: A space where you can show your true self, unadorned.

## Waiting for Your Story

Until then, from someone who still believes in slow and meaningful connections.

Hoping to receive your letter someday 🌙

**I'm curious about your story.**

Let's meet on Lettie. Looking forward to the start of our conversation.

— Someone who believes in slow but deep connections
    `
    },
    'how-to-start-penpal': {
        id: 'how-to-start-penpal',
        title: '편지 첫 문장 쓰는 법: 상황별 예시 12개',
        titleEn: 'How to Start Penpalling: The Perfect First Letter Guide',
        description: '편지를 어떻게 시작할지 막힐 때 쓰는 첫 문장 예시 12개. 처음 쓰는 상대, 친구, 부모님, 오랜만의 안부, 외국인 펜팔까지 상황별로 정리했습니다.',
        descriptionEn: 'Learn how to start meaningful relationships with friends around the world. Everything about successful penpalling, from your first letter to lasting friendships.',
        date: '2025-01-18',
        readTime: '5분',
        readTimeEn: '5 min',
        category: '가이드',
        categoryEn: 'Guide',
        image: '/letter-writing.png',
        author: 'Lettie',
        keywords: ['편지 첫 문장', '편지 시작', '편지 시작하는 법', '편지 첫 문장 예시', '첫 편지', '펜팔 첫 편지'],
        updated: '2026-09-24',
        keywordsEn: ['how to start penpalling', 'pen pal guide for beginners', 'first letter tips', 'how to find a pen pal'],
        faq: [
            { q: '편지 첫 문장은 어떻게 시작하나요?', a: '인사말보다 지금 이 편지를 쓰게 된 장면이나 이유 하나로 시작하세요. "오늘 퇴근길에 네가 좋아하던 빵집이 문을 닫은 걸 봤어."처럼 구체적인 한 장면이 첫 줄로 가장 잘 읽힙니다.' },
            { q: '처음 편지를 쓰는 상대에게는 첫 문장을 어떻게 쓰나요?', a: '상대가 쓴 글이나 프로필에서 본 한 가지를 짚으며 시작하세요. 자기소개는 둘째 문장으로 미루고, 첫 문장은 왜 이 사람에게 쓰는지를 보여 주는 데 씁니다.' },
            { q: '오랜만에 쓰는 편지는 어떻게 시작하나요?', a: '연락이 뜸했던 사과는 한 줄로 끝내고 바로 요즘 이야기로 넘어가세요. 펜을 들게 된 계기(생일, 이사, 우연히 본 물건)를 첫 문장에 두면 어색함이 줄어듭니다.' },
            { q: '외국인 펜팔에게 보내는 첫 편지는 무엇으로 시작하나요?', a: '내가 사는 도시의 지금 장면 하나와 질문 하나로 시작하세요. Lettie에서는 편지가 28개 언어로 번역되므로 한국어로 써도 상대는 자기 언어로 읽습니다.' },
        ],
        content: `
# 편지 첫 문장 쓰는 법

**결론부터: 편지의 첫 문장은 인사말보다 '지금 이 편지를 쓰게 된 장면' 하나로 시작하면 됩니다.** "잘 지내?" 대신 "오늘 퇴근길에 네가 좋아하던 빵집이 문을 닫은 걸 봤어."처럼 쓰면, 읽는 사람은 첫 줄부터 당신의 하루 안으로 들어옵니다.

## 상황별 첫 문장 예시

| 상황 | 첫 문장 예시 |
|---|---|
| 처음 쓰는 상대 | 당신이 쓴 "비 오는 날엔 일부러 버스를 탄다"는 문장을 읽고 답장을 쓰기 시작했어요. |
| 처음 쓰는 상대 | 저는 서울에서 매일 아침 한강 다리를 건너 출근하는 사람이에요. 오늘은 안개가 짙었어요. |
| 친구 | 방금 우리가 자주 가던 떡볶이집 앞을 지나다가 이 편지를 쓰기로 했어. |
| 친구 | 네가 추천해 준 책을 드디어 다 읽었어. 마지막 장에서 네 생각이 났어. |
| 부모님 | 엄마, 오늘 처음으로 김치찌개를 제대로 끓였어요. 맛이 엄마 것과 반쯤 비슷해요. |
| 부모님 | 아빠, 요즘 제 책상 위에 아빠가 주신 만년필이 놓여 있어요. 그걸로 이 편지를 씁니다. |
| 오랜만의 안부 | 연락이 뜸했지? 그 사이에 이사를 했고, 새 창문으로 보이는 첫 풍경을 너한테 제일 먼저 말해 주고 싶었어. |
| 오랜만의 안부 | 달력을 넘기다 네 생일이 다음 주라는 걸 보고 펜을 들었어. |
| 감사 편지 | 지난주 제가 발표를 망친 날, 복도에서 건네주신 커피 한 잔이 아직도 생각나요. |
| 감사 편지 | 선생님 덕분에 시작한 기타를 오늘 처음 사람들 앞에서 쳤어요. |
| 외국인 펜팔 | 여기는 서울, 밤 11시예요. 창밖으로 편의점 불빛만 켜져 있어요. 당신이 사는 도시는 지금 몇 시인가요? |
| 외국인 펜팔 | 당신 나라에서는 비 오는 날 무엇을 먹나요? 한국에서는 파전을 먹는 사람이 많아요. |

## 첫 문장에서 피할 것

- **자기소개만으로 시작하기**: "안녕하세요, 저는 ○○입니다."는 둘째 문장으로 미루세요. 첫 문장은 장면이나 이유가 맡습니다.
- **긴 사과로 시작하기**: 답장이 늦었다면 한 줄로 사과하고 바로 요즘 이야기로 넘어가세요.
- **질문만 나열하기**: 질문은 하나면 충분합니다. 내 이야기를 먼저 조금 보여 준 뒤에 묻는 질문이 답을 받습니다.
- **날씨만 말하기**: 날씨를 쓰려면 그 날씨 속에서 내가 한 일을 함께 쓰세요.

## 펜팔 첫 편지를 쓸 때

편지는 단순한 글이 아닙니다. 마음을 담아 보내는 선물과도 같죠. 전 세계 다양한 문화와 배경을 가진 사람들과 편지를 주고받으며 진실한 관계를 만들어가는 특별한 경험. Lettie와 함께 편지 쓰기의 즐거움을 시작해보세요.

## 1. 첫 편지의 중요성

첫인상은 두 번째 기회가 없다고 합니다. 편지에서도 마찬가지입니다. 첫 편지는 상대방에게 당신의 마음을 보여주는 첫 번째 창구입니다.

### 좋은 첫 편지의 구성 요소

**자기소개**: 간단하면서도 흥미로운 자기소개로 시작하세요. 이름, 나이, 거주 지역과 함께 당신을 특별하게 만드는 한두 가지 특징을 언급하면 좋습니다.

**관심사 공유**: 취미, 좋아하는 음악, 영화, 책 등을 공유하세요. 공통 관심사는 대화를 이어가는 좋은 시작점이 됩니다.

**질문하기**: 상대방에 대한 진심 어린 호기심을 표현하세요. "당신의 나라에서 가장 좋아하는 계절은 무엇인가요?" 같은 질문은 대화를 자연스럽게 이어갑니다.

## 2. 문화적 감수성 기르기

### 다양성 존중하기

편지의 가장 큰 매력은 다양한 문화를 깊이 있게 경험할 수 있다는 점입니다. 상대방의 문화, 종교, 생활 방식에 대해 열린 마음으로 편지를 써보세요.

### 언어의 장벽 극복하기

- 간단하고 명확한 문장을 사용하세요
- 속어나 관용구는 피하거나 설명을 덧붙이세요
- 상대방의 언어로 인사말을 배워보세요

## 3. 지속 가능한 펜팔 관계 만들기

### 규칙적인 소통

일정한 주기로 편지를 주고받는 것이 중요합니다. 너무 자주 보내기보다는, 충분한 시간을 들여 정성스럽게 쓴 편지 한 통이 더 큰 감동을 줍니다.

### 진정성 있는 대화

표면적인 대화를 넘어 깊이 있는 이야기를 나누세요. 일상의 소소한 이야기부터 인생의 목표까지, 진솔한 대화가 관계를 깊게 만듭니다.

## 4. Lettie만의 특별한 기능 활용하기

### 번갈아 쓰는 규칙

Lettie에서는 내 편지가 도착하고 상대의 답장이 올 때까지 다음 편지를 쓸 수 없습니다. 이 기다림이 서로를 충분히 알아가는 시간을 보장합니다.

### 프라이버시 보호

사진 없이 시작하는 편지 교환으로 외모가 아닌 내면에 집중할 수 있습니다. 진정한 마음의 연결을 만들어가세요.

## 5. 펜팔 에티켓

### 해야 할 것들
- 정중하고 존중하는 태도 유지
- 상대방의 편지에 성실히 답변
- 문화적 차이에 대한 이해와 수용
- 긍정적이고 건설적인 대화

### 하지 말아야 할 것들
- 개인정보 성급하게 요구하지 않기
- 정치적, 종교적 견해 강요하지 않기
- 부정적이거나 비판적인 태도 피하기
- 상대방을 무시하거나 갑자기 연락 끊지 않기

## 마무리

편지는 세상을 더 넓게 보는 창입니다. Lettie와 함께라면 안전하고 의미 있는 글로벌 편지 친구를 만들어갈 수 있습니다. 지금 바로 첫 편지를 작성해보세요!

**Lettie에서 당신을 기다리는 전 세계 친구들을 만나보세요.**
    `,
        contentEn: `
# Guide to Starting Special Connections Through Letters

Letters are not just writing. They're like gifts sent with your heart. A special experience of building genuine relationships by exchanging letters with people from diverse cultures and backgrounds around the world. Start the joy of letter writing with Lettie.

## 1. The Importance of Your First Letter

They say you don't get a second chance at a first impression. The same applies to letters. Your first letter is the first window through which you show your heart to the other person.

### Components of a Good First Letter

**Self-introduction**: Start with a brief yet interesting introduction. It's good to mention your name, age, location along with one or two traits that make you special.

**Sharing interests**: Share your hobbies, favorite music, movies, books, etc. Common interests are a great starting point for continuing the conversation.

**Asking questions**: Express genuine curiosity about the other person. Questions like "What's your favorite season in your country?" naturally continue the conversation.

## 2. Developing Cultural Sensitivity

### Respecting Diversity

The greatest charm of letters is experiencing diverse cultures in depth. Write letters with an open mind about the other person's culture, religion, and lifestyle.

### Overcoming Language Barriers

- Use simple and clear sentences
- Avoid slang or idioms, or add explanations
- Learn greetings in the other person's language

## 3. Building Sustainable Penpal Relationships

### Regular Communication

It's important to exchange letters at regular intervals. Rather than sending too frequently, one carefully written letter with sufficient time invested makes a bigger impression.

### Genuine Conversation

Go beyond superficial conversation to share deep stories. From small daily tales to life goals, honest dialogue deepens relationships.

## 4. Using Lettie's Special Features

### The 5-Letter Rule

On Lettie you can't write again until your letter has landed and their reply has come back. That wait guarantees time to get to know each other.

### Privacy Protection

Letter exchange starting without photos allows you to focus on inner qualities, not appearance. Create true connections of the heart.

## 5. Penpal Etiquette

### Things to Do
- Maintain a polite and respectful attitude
- Respond faithfully to your penpal's letters
- Understand and accept cultural differences
- Have positive and constructive conversations

### Things Not to Do
- Don't rush to request personal information
- Don't impose political or religious views
- Avoid negative or critical attitudes
- Don't ignore your penpal or suddenly cut off contact

## Conclusion

Letters are a window to seeing the world more broadly. With Lettie, you can create safe and meaningful global letter friendships. Write your first letter right now!

**Meet friends from around the world waiting for you on Lettie.**
    `
    },
    'penpal-culture-guide': {
        id: 'penpal-culture-guide',
        title: '세계 각국의 편지 문화: 펜팔로 배우는 글로벌 에티켓',
        titleEn: 'Letter Cultures Around the World: Learning Global Etiquette Through Penpalling',
        description: '나라마다 다른 편지 문화와 인사법을 알아보고, 글로벌 펜팔과 더 깊은 관계를 만들어보세요.',
        descriptionEn: 'Discover different letter cultures and greetings from each country, and build deeper relationships with global penpals.',
        date: '2025-01-15',
        readTime: '7분',
        readTimeEn: '7 min',
        category: '문화',
        categoryEn: 'Culture',
        image: '/brand-screen.png',
        author: 'Lettie',
        keywords: ['편지 문화', '글로벌 에티켓', '펜팔 문화', '국제 교류', '문화 차이'],
        keywordsEn: ['letter writing customs', 'global etiquette', 'cultural differences in letters', 'international pen pal etiquette'],
        content: `
# 세계 각국의 편지 문화 이해하기

펜팔을 통해 다양한 문화를 경험하는 것은 특별한 즐거움입니다. 각 나라마다 고유한 편지 문화와 에티켓이 있으며, 이를 이해하면 더 풍부한 교류가 가능합니다.

## 아시아 지역의 편지 문화

### 일본
일본에서는 계절 인사를 중요하게 생각합니다. 여름에는 '서중견문(暑中見舞い)', 겨울에는 '연하장(年賀状)'을 보내는 전통이 있습니다.

### 한국
한국은 정중한 인사와 안부를 묻는 것으로 편지를 시작합니다. 상대방의 건강과 안녕을 기원하는 마음을 표현하는 것이 중요합니다.

### 중국
중국에서는 붉은색이 행운을 의미하므로, 특별한 날에는 붉은 봉투나 종이를 사용하기도 합니다.

## 유럽의 편지 전통

### 영국
영국은 격식 있는 편지 문화를 가지고 있습니다. 'Dear'로 시작하고 'Yours sincerely' 또는 'Best regards'로 마무리합니다.

### 프랑스
프랑스인들은 편지에 감성적이고 시적인 표현을 즐겨 사용합니다. 예술과 문학에 대한 이야기를 나누면 좋은 반응을 얻을 수 있습니다.

### 독일
독일은 정확하고 체계적인 편지 작성을 선호합니다. 명확한 구조와 논리적인 전개를 중요시합니다.

## 미주 지역의 소통 방식

### 미국
미국은 친근하고 캐주얼한 톤을 선호합니다. 개인적인 경험과 이야기를 공유하는 것을 좋아합니다.

### 브라질
브라질인들은 따뜻하고 열정적인 인사를 좋아합니다. 가족과 친구에 대한 이야기를 자주 나눕니다.

## 편지 작성 시 유의사항

1. **시차 고려하기**: 상대방의 시간대를 고려해 답장 기대 시간을 조절하세요
2. **날짜 표기법**: 나라마다 날짜 표기법이 다릅니다 (미국: MM/DD/YYYY, 유럽: DD/MM/YYYY)
3. **호칭 사용**: 문화에 따라 이름 부르는 방식이 다를 수 있습니다
4. **금기 주제**: 정치, 종교, 역사적 갈등 등 민감한 주제는 조심스럽게 접근하세요

## Lettie로 문화 교류 시작하기

Lettie는 다양한 문화권의 사람들을 연결해줍니다. 서로의 차이를 존중하고 이해하며, 진정한 글로벌 친구를 만들어보세요.
    `,
        contentEn: `
# Understanding Letter Cultures Around the World

Experiencing diverse cultures through penpalling is a special joy. Each country has its unique letter culture and etiquette, and understanding them enables richer exchanges.

## Letter Culture in Asia

### Japan
Japan places great importance on seasonal greetings. There's a tradition of sending 'Shochu-mimai' in summer and 'Nengajo' (New Year's cards) in winter.

### Korea
Korea starts letters with polite greetings and asking about well-being. It's important to express wishes for the other person's health and welfare.

### China
In China, red signifies good fortune, so red envelopes or paper are sometimes used for special occasions.

## European Letter Traditions

### United Kingdom
Britain has a formal letter culture. Letters typically start with 'Dear' and end with 'Yours sincerely' or 'Best regards'.

### France
The French enjoy using emotional and poetic expressions in letters. Discussing art and literature can elicit positive responses.

### Germany
Germany prefers precise and systematic letter writing. Clear structure and logical flow are highly valued.

## Communication Styles in the Americas

### United States
America prefers a friendly and casual tone. They enjoy sharing personal experiences and stories.

### Brazil
Brazilians enjoy warm and passionate greetings. They frequently share stories about family and friends.

## Considerations When Writing Letters

1. **Consider time zones**: Adjust your expectations for reply times considering the other person's time zone
2. **Date formats**: Date notation varies by country (USA: MM/DD/YYYY, Europe: DD/MM/YYYY)
3. **Forms of address**: The way names are used can differ across cultures
4. **Sensitive topics**: Approach political, religious, and historical conflict topics with caution

## Starting Cultural Exchange with Lettie

Lettie connects people from diverse cultural backgrounds. Respect and understand each other's differences, and create genuine global friendships.
    `
    },
    'language-exchange-tips': {
        id: 'language-exchange-tips',
        title: '펜팔을 통한 언어 학습: 효과적인 언어 교환 방법',
        titleEn: 'Language Learning Through Penpalling: Effective Language Exchange Methods',
        description: '펜팔과 함께 새로운 언어를 배우는 가장 효과적인 방법들을 소개합니다.',
        descriptionEn: 'Introducing the most effective ways to learn a new language with your penpal.',
        date: '2025-01-12',
        readTime: '6분',
        readTimeEn: '6 min',
        category: '학습',
        categoryEn: 'Learning',
        image: '/conversation-detail.png',
        author: 'Lettie',
        keywords: ['언어 교환', '언어 학습', '펜팔 학습', '외국어', '언어 공부'],
        keywordsEn: ['language exchange', 'learn a language with a pen pal', 'language exchange partner', 'practice writing in a foreign language'],
        content: `
# 펜팔로 언어 실력 향상시키기

펜팔은 살아있는 언어를 배우는 가장 효과적인 방법 중 하나입니다. 교과서가 아닌 실제 원어민과의 대화를 통해 자연스러운 표현을 익힐 수 있습니다.

## 언어 교환의 장점

### 1. 실용적인 표현 학습
교과서에 없는 일상 표현과 최신 트렌드를 배울 수 있습니다.

### 2. 문화적 맥락 이해
언어는 문화와 분리될 수 없습니다. 펜팔을 통해 언어 뒤에 숨은 문화를 이해할 수 있습니다.

### 3. 동기부여 유지
실제 사람과의 교류는 언어 학습에 대한 동기를 지속시켜줍니다.

## 효과적인 언어 교환 방법

### 50/50 규칙
편지의 절반은 배우고 있는 언어로, 나머지 절반은 모국어로 작성하세요. 서로에게 도움이 됩니다.

### 수정 요청하기
"제 문법이나 표현을 자유롭게 고쳐주세요"라고 요청하세요. 피드백은 성장의 핵심입니다.

### 일기 형식 활용
일상을 일기처럼 써서 보내면 자연스러운 표현을 연습할 수 있습니다.

## 레벨별 학습 전략

### 초급자
- 간단한 인사와 자기소개부터 시작
- 그림이나 이모티콘을 활용해 의미 전달
- 번역기 사용을 점진적으로 줄이기

### 중급자
- 주제를 정해 깊이 있는 대화 나누기
- 관용구와 속담 배우고 사용하기
- 상대방의 나라의 뉴스나 문화 이야기하기

### 고급자
- 복잡한 주제에 대한 의견 교환
- 유머와 말장난 이해하고 사용하기
- 상대방의 글쓰기 스타일 분석하고 따라하기

## 유용한 표현 모음

### 언어 교환 시작하기
- "I'm learning [language] and would love to practice with you"
- "Feel free to correct my mistakes"
- "How do you say [word] in your language?"

### 이해를 돕는 표현
- "Could you explain that in simpler terms?"
- "What does [expression] mean in this context?"
- "Is this the natural way to say it?"

## Lettie에서 언어 교환 파트너 찾기

Lettie는 언어 학습을 원하는 사용자들을 연결해줍니다. 프로필에 학습 중인 언어를 표시하고, 같은 목표를 가진 펜팔을 만나보세요.

언어는 소통의 도구입니다. Lettie와 함께 전 세계 친구들과 소통하며 언어 실력을 키워보세요!
    `,
        contentEn: `
# Improving Language Skills Through Penpalling

Penpalling is one of the most effective ways to learn a living language. Through actual conversations with native speakers, not textbooks, you can learn natural expressions.

## Benefits of Language Exchange

### 1. Learning Practical Expressions
You can learn everyday expressions and latest trends not found in textbooks.

### 2. Understanding Cultural Context
Language cannot be separated from culture. Through penpalling, you can understand the culture behind the language.

### 3. Maintaining Motivation
Interacting with real people sustains your motivation for language learning.

## Effective Language Exchange Methods

### The 50/50 Rule
Write half your letter in the language you're learning, and the other half in your native language. This helps both parties.

### Requesting Corrections
Ask "Please feel free to correct my grammar or expressions." Feedback is key to growth.

### Using Diary Format
Writing and sending your daily life in diary form helps practice natural expressions.

## Learning Strategies by Level

### Beginners
- Start with simple greetings and self-introduction
- Use pictures or emoticons to convey meaning
- Gradually reduce use of translation tools

### Intermediate
- Have in-depth conversations on specific topics
- Learn and use idioms and proverbs
- Discuss news or culture from your penpal's country

### Advanced
- Exchange opinions on complex topics
- Understand and use humor and wordplay
- Analyze and imitate your penpal's writing style

## Useful Expression Collection

### Starting Language Exchange
- "I'm learning [language] and would love to practice with you"
- "Feel free to correct my mistakes"
- "How do you say [word] in your language?"

### Expressions for Better Understanding
- "Could you explain that in simpler terms?"
- "What does [expression] mean in this context?"
- "Is this the natural way to say it?"

## Finding Language Exchange Partners on Lettie

Lettie connects users who want to learn languages. Display the language you're learning in your profile and meet penpals with the same goal.

Language is a tool for communication. Communicate with friends around the world and improve your language skills with Lettie!
    `
    },
    'marcus-introduction': {
        id: 'marcus-introduction',
        title: 'Marcus와 함께하는 펜팔: 진실한 우정을 찾아서',
        titleEn: 'Penpalling with Marcus: Finding Genuine Friendship',
        description: 'Marcus와 함께 전 세계 친구들과 진심 어린 대화를 나누세요. 일상의 이야기부터 취미, 음악, 여행까지 의미 있는 소통을 통해 진정한 우정을 만들어가는 펜팔 여정을 시작해보세요.',
        descriptionEn: 'Have heartfelt conversations with friends around the world with Marcus. Start a penpal journey to build genuine friendship through meaningful communication, from daily stories to hobbies, music, and travel.',
        date: '2025-01-20',
        readTime: '4분',
        readTimeEn: '4 min',
        category: '커뮤니티',
        categoryEn: 'Community',
        image: '/letter-writing.png',
        author: 'Marcus',
        keywords: ['펜팔 친구', '글로벌 소통', '문화 교류', '진실한 우정', '펜팔 커뮤니티', '국제 친구 만들기', 'Lettie 펜팔', '편지 친구'],
        keywordsEn: ['pen pal story', 'genuine friendship', 'long distance friendship', 'pen pal experience'],
        content: `
# 안녕하세요, Marcus입니다

반갑습니다! 저는 Marcus라고 합니다. Lettie에서 여러분을 만나게 되어 정말 기쁩니다.

## 왜 Lettie를 선택했을까요?

저는 새로운 사람들을 만나고, 다양한 장소와 문화, 그리고 삶의 방식에 대해 배우는 것을 정말 좋아합니다. 모든 좋은 대화는 우리에게 새로운 무언가를 가르쳐준다고 믿습니다.

Lettie는 단순한 메시징 앱이 아닙니다. 진심 어린 편지를 통해 천천히, 깊이 있게 서로를 알아가는 특별한 공간입니다. 빠르게 스쳐 지나가는 대화가 아닌, 마음을 담은 편지를 주고받으며 진정한 연결을 만들어갑니다.

## 저는 이런 사람입니다

**친근하고 편안한 사람**: 저는 격식을 차리기보다는 편안하고 자연스러운 대화를 좋아합니다. 함께 이야기를 나누다 보면 마치 오랜 친구처럼 느껴질 거예요.

**의미 있는 대화를 추구**: 표면적인 안부 인사를 넘어서, 일상생활의 소소한 이야기부터 취미, 음악, 여행, 또는 문득 떠오른 생각들까지 진솔하게 나누고 싶습니다.

**경청하는 사람**: 저는 듣는 것을 좋아합니다. 당신의 이야기, 고민, 기쁨, 꿈에 대해 들려주세요. 함께 이야기를 나누며 서로의 시각을 공유하고 싶습니다.

## 함께 나누고 싶은 이야기

### 일상의 작은 순간들
커피 한 잔을 마시며 본 풍경, 오늘 들은 음악, 읽은 책 한 구절... 일상의 소소한 순간들이야말로 우리를 가장 잘 보여주는 이야기들이죠.

### 문화와 여행
당신이 살고 있는 곳의 문화는 어떤가요? 좋아하는 음식, 명절, 전통이 있나요? 여행을 좋아하신다면 가고 싶은 곳이나 다녀온 곳의 이야기를 들려주세요.

### 음악과 예술
음악은 언어의 장벽을 넘어 마음을 이어주죠. 좋아하는 노래를 공유하고, 그 노래가 당신에게 어떤 의미인지 이야기해주세요.

### 인생의 생각들
때로는 깊이 있는 대화도 좋습니다. 인생의 목표, 가치관, 행복에 대한 생각... 서로의 철학을 나누다 보면 새로운 관점을 배울 수 있습니다.

## 어떤 펜팔을 찾고 있나요?

**진실한 우정을 원하는 분**: 진심으로 친구를 만들고 싶은 마음으로 Lettie를 사용하시는 분이라면 환영합니다.

**긍정적인 에너지를 가진 분**: 부정적인 것보다는 긍정적인 대화, 서로를 격려하고 응원하는 관계를 만들고 싶습니다.

**꾸준한 소통을 즐기는 분**: 편지는 급하지 않아도 됩니다. 하지만 천천히라도 꾸준히 이어지는 대화를 좋아하시는 분이면 좋겠습니다.

## Lettie로 함께 만들어가는 우정

Lettie의 가장 큰 장점은 서두르지 않는다는 것입니다. 편지는 거리만큼 시간이 걸려 도착하고 상대의 답장이 와야 다음 편지를 쓸 수 있어, 천천히 서로를 알아가며 진정한 신뢰를 쌓을 수 있습니다.

사진 없이 시작하는 펜팔이기에, 외모가 아닌 마음과 생각으로 서로를 만납니다. 진짜 당신을 보여주고, 진짜 나를 알아가는 특별한 경험이 될 거예요.

## 한 번에 한 편지씩, 함께 걸어가요

우리의 인연은 한 통의 편지에서 시작됩니다. 완벽한 문장이 아니어도 괜찮습니다. 유창한 언어가 아니어도 좋습니다. 진심이 담긴 당신의 이야기면 충분합니다.

어쩌면 우리는 다른 대륙에 살고 있을지도 모릅니다. 시간대가 달라 답장이 늦을 수도 있습니다. 하지만 그게 바로 펜팔의 매력이죠. 기다림 속에서 설렘을 느끼고, 편지를 받았을 때의 기쁨을 함께 나눌 수 있으니까요.

**당신의 이야기가 궁금합니다.**

지금, 이 순간에도 어딘가에서 당신은 이 글을 읽고 계시겠죠. 우리의 길이 Lettie에서 만나길 바랍니다.

한 통의 편지로, 진실한 우정을 시작해보세요.

## Lettie에서 Marcus를 찾아주세요

Lettie 앱을 다운로드하고, 펜팔 매칭을 시작하세요. 우연히 제 편지를 받게 될지도 모릅니다. 아니면 당신이 먼저 편지를 보내주세요.

**함께 이야기를 나누며, 한 편지씩 우정을 쌓아가요.**

Looking forward to hearing from you soon!
— Marcus
    `,
        contentEn: `
# Hello, I'm Marcus

Nice to meet you! My name is Marcus. I'm truly happy to meet you on Lettie.

## Why Did I Choose Lettie?

I really love meeting new people and learning about different places, cultures, and ways of life. I believe every good conversation teaches us something new.

Lettie isn't just a messaging app. It's a special space where we get to know each other slowly and deeply through heartfelt letters. Instead of conversations that quickly pass by, we exchange letters filled with heart and create genuine connections.

## This Is Who I Am

**Friendly and comfortable**: I prefer comfortable and natural conversation rather than formality. As we talk, you'll feel like we're old friends.

**Seeking meaningful conversation**: Beyond superficial greetings, I want to genuinely share everything from small daily stories to hobbies, music, travel, or thoughts that suddenly come to mind.

**A good listener**: I love listening. Tell me about your stories, worries, joys, and dreams. I want to share perspectives as we converse together.

## Stories I Want to Share

### Small Moments of Daily Life
The scenery seen while drinking coffee, music heard today, a passage from a book read... These small daily moments are the stories that show us best.

### Culture and Travel
What's the culture like where you live? Do you have favorite foods, holidays, traditions? If you love travel, tell me about places you want to go or have been to.

### Music and Art
Music connects hearts beyond language barriers. Share your favorite songs and tell me what they mean to you.

### Thoughts on Life
Sometimes deep conversations are good too. Life goals, values, thoughts on happiness... By sharing our philosophies, we can learn new perspectives.

## What Kind of Penpal Am I Looking For?

**Someone who wants genuine friendship**: If you're using Lettie with the sincere desire to make friends, you're welcome.

**Someone with positive energy**: Rather than negative talk, I want to create relationships where we have positive conversations and encourage and support each other.

**Someone who enjoys steady communication**: Letters don't have to be rushed. But I hope you're someone who enjoys conversations that continue steadily, even if slowly.

## Friendship We Build Together on Lettie

Lettie's biggest advantage is that we don't rush. Until we exchange 5 letters, we can't exchange contact information, so we can slowly get to know each other and build true trust.

Since penpalling starts without photos, we meet through hearts and thoughts, not appearances. It will be a special experience of showing the real you and getting to know the real me.

## One Letter at a Time, Let's Walk Together

Our connection begins with one letter. It's okay if it's not perfect sentences. It's fine if it's not fluent language. Your story filled with sincerity is enough.

Perhaps we live on different continents. Time zones may be different and replies may be late. But that's exactly the charm of penpalling. We can feel excitement in the waiting and share the joy when we receive a letter.

**I'm curious about your story.**

Right now, at this moment, somewhere you're reading this. I hope our paths meet on Lettie.

Start a genuine friendship with one letter.

## Find Marcus on Lettie

Download the Lettie app and start penpal matching. You might receive my letter by chance. Or you can send me a letter first.

**Let's build friendship, one letter at a time, while sharing stories.**

Looking forward to hearing from you soon!
— Marcus
    `
    },
    'autumn-morning-mist': {
        id: 'autumn-morning-mist',
        title: '안개 속 아침: 가을이 전하는 따스한 약속',
        titleEn: 'Morning in the Mist: Autumn\'s Warm Promise',
        description: '안개 자욱한 아침, 숲과 들판이 꿈꾸는 시간. 베일이 걷히면 펼쳐질 푸른 하늘과 따뜻한 황금빛 가을. 변화의 순간을 기다리며 당신에게 보내는 편지입니다.',
        descriptionEn: 'A misty morning, a time when forests and fields dream. Blue skies and warm golden autumn that will unfold when the veil lifts. A letter to you while waiting for the moment of transformation.',
        date: '2025-11-09',
        readTime: '4분',
        readTimeEn: '4 min',
        category: '감성',
        categoryEn: 'Emotional',
        image: '/letter-writing.png',
        author: 'Lettie',
        keywords: ['가을 편지', '아침 안개', '시적 편지', '계절의 변화', '희망의 메시지', '자연과 펜팔', '감성 소통', '가을 감성', '따뜻한 위로'],
        keywordsEn: ['autumn letters', 'slow living', 'reflective writing', 'seasonal letters'],
        content: `
# 안개 속 아침: 가을이 전하는 따스한 약속

## 아직 세상이 잠든 시간

세상은 아직 안개 속에 쉬고 있습니다.
숲과 들판이 꿈을 꾸고 있습니다.

이른 아침, 모든 것이 흐릿한 베일에 감싸여 있을 때가 있습니다. 어디서 시작하고 어디서 끝나는지 알 수 없는 그 경계의 순간들. 마치 세상 전체가 숨을 멈추고 무언가를 기다리는 것 같은 고요함.

당신도 그런 아침을 경험한 적이 있나요?

## 베일이 걷힐 때

곧, 베일이 걷히면 당신은 보게 될 것입니다.
하늘의 열린 푸른빛을.

안개는 영원히 머물지 않습니다. 시간이 지나면, 태양이 조금씩 그 안개를 걷어냅니다. 그리고 우리가 보지 못했던 것들이 천천히 모습을 드러냅니다.

**푸른 하늘**: 우리가 잊고 있었던 무한한 가능성
**넓은 지평선**: 우리 앞에 펼쳐진 새로운 시작들
**선명한 윤곽**: 흐릿했던 꿈들이 구체적인 형태를 갖추는 순간

## 가을의 힘, 고요한 세상

가을처럼 강하고, 고요함 속에서
세상은 따뜻한 황금빛으로 흘러갈 것입니다.

가을은 특별한 계절입니다. 화려한 여름의 뒤를 이어, 조용히 그러나 강하게 자신의 색을 드러냅니다.

### 가을이 주는 교훈

**인내의 아름다움**: 서두르지 않고 천천히 무르익는 것의 가치
**변화의 우아함**: 떠나보내는 것도 아름다울 수 있다는 것
**고요 속의 힘**: 가장 조용한 순간에 가장 큰 변화가 일어난다는 것

## 안개 속에서 펜팔을 시작하며

우리의 삶도 때로는 안개 속 같습니다. 앞이 보이지 않고, 어디로 가야 할지 불확실할 때가 있습니다.

하지만 Lettie에서의 만남은 그 안개 속에서 발견하는 작은 빛과 같습니다.

### 안개를 뚫고 닿는 편지

**처음에는 낯설지만**: 모르는 누군가에게 편지를 쓴다는 것
**점차 선명해지는**: 글을 주고받으며 서로를 알아가는 과정
**마침내 드러나는**: 진정한 우정과 연결의 순간

마치 안개가 걷히듯, 편지를 주고받을수록 우리는 서로를 더 선명하게 봅니다.

## 당신에게 묻고 싶은 것들

이른 아침 안개 속을 걸어본 적이 있나요?
그때 어떤 생각이 들었나요?

**당신의 가을은 어떤 색인가요?**
누군가에게는 황금빛, 누군가에게는 주황빛, 또 다른 이에게는 깊은 적갈색.

**당신이 기다리고 있는 '베일이 걷히는 순간'은 무엇인가요?**
우리 모두에게는 안개가 걷히기를 기다리는 무언가가 있습니다.

**당신의 고요한 아침은 어떤 모습인가요?**
세상이 아직 깨어나기 전, 당신만의 시간을 어떻게 보내나요?

## Lettie에서의 여정

Lettie에서의 펜팔 여정은 안개 속 아침 산책과 같습니다.

### 편지 한 통, 일출 한 번

**첫 번째 편지**: 안개 속에서 주고받는 첫 인사
**두 번째 편지**: 조금씩 모습이 드러나기 시작하는 순간
**세 번째 편지**: 서로의 윤곽이 선명해지는 시간
**네 번째 편지**: 따뜻한 황금빛이 펼쳐지는 순간
**다섯 번째 편지**: 완전히 베일이 걷히고 진정한 연결이 시작되는 때

### 천천히, 그러나 확실하게

급하지 않아도 됩니다. 안개가 천천히 걷히듯, 우리의 우정도 천천히 깊어집니다.

**사진 없이 시작하는 이유**: 외모라는 베일 너머의 진짜 당신을 보기 위해
**즉각적인 응답을 요구하지 않는 이유**: 생각을 가다듬고 진심을 담을 시간을 주기 위해
**편지가 하루 걸려 도착하는 이유**: 진정한 연결은 시간이 필요하기 때문에

## 황금빛으로 흐르는 세상

베일이 걷힌 후의 세상은 아름답습니다.

가을의 햇살 아래, 모든 것이 따뜻한 황금빛으로 물듭니다. 나뭇잎 하나하나가, 풀잎 하나하나가 자신만의 빛깔로 빛납니다.

**당신도 그렇습니다.**

지금은 안개 속에 가려져 있을지 모르지만, 당신 안에도 황금빛이 있습니다. 누군가와 진심으로 연결될 때, 그 빛은 더욱 환하게 빛납니다.

## 함께 기다리는 아침

세상이 안개 속에 있을 때, 혼자 기다리는 것은 외로운 일입니다.

하지만 누군가와 함께 기다린다면?
편지로 서로의 마음을 나누며 기다린다면?

**그 기다림조차 아름다운 추억이 됩니다.**

### 당신과 나누고 싶은 아침들

- 안개가 걷힌 후 가장 먼저 보고 싶은 것
- 조용한 아침에 마시는 따뜻한 음료
- 새벽에 들리는 작은 소리들 - 새소리, 바람 소리, 빗소리
- 아침 햇살이 방 안으로 들어오는 순간의 평화로움
- 하루를 시작하기 전 당신만의 의식

## 첫 편지를 보내세요

밖을 보세요. 지금 안개가 껴 있나요? 아니면 이미 푸른 하늘이 보이나요?

어느 쪽이든 괜찮습니다.

**안개 속이라면**: 함께 베일이 걷히기를 기다릴 누군가가 필요합니다
**맑은 하늘이라면**: 그 아름다움을 나눌 누군가가 필요합니다

Lettie는 두 가지 모두를 위한 공간입니다.

## 가을의 약속

가을은 약속합니다.

안개는 걷힐 것이고,
하늘은 다시 푸를 것이며,
세상은 따뜻한 황금빛으로 흐를 것이라고.

**나도 당신에게 약속합니다.**

당신의 편지를 기다리고 있다고.
당신의 이야기를 듣고 싶다고.
함께 안개를 걷어내고, 함께 황금빛 가을을 맞이하고 싶다고.

## 안개 너머에서 당신을 기다리며

세상은 아직 안개 속에 쉬고 있지만,
곧 베일이 걷힐 것입니다.

그때 당신이 보게 될 것은:

- 열린 푸른 하늘
- 가을처럼 강한, 고요한 세상
- 따뜻한 황금빛으로 흐르는 모든 것
- 그리고 당신의 편지를 기다리는, 나

**첫 편지를 시작해보세요.**

안개는 언제나 걷힙니다.
하늘은 언제나 푸릅니다.
가을은 언제나 황금빛으로 옵니다.

**그리고 진정한 연결은, 언제나 가능합니다.**

Lettie에서 당신을 기다립니다.
안개 너머, 황금빛 가을 속에서.

— 아침 안개를 함께 바라보며

*P.S. 당신의 아침은 어떤가요? 안개가 껴 있나요, 아니면 이미 햇살이 비추고 있나요? 어느 쪽이든, 그 이야기를 듣고 싶습니다.*
    `,
        contentEn: `
# Morning in the Mist: Autumn's Warm Promise

## When the World Still Sleeps

The world still rests in the mist.
The forests and fields are dreaming.

Early morning, when everything is wrapped in a hazy veil. Those moments at the boundary where you can't tell where things begin or end. A quietness as if the whole world has held its breath, waiting for something.

Have you ever experienced such a morning?

## When the Veil Lifts

Soon, when the veil lifts, you will see.
The open blue of the sky.

The mist doesn't stay forever. As time passes, the sun gradually clears away the fog. And things we couldn't see slowly reveal themselves.

**Blue sky**: The infinite possibilities we had forgotten
**Wide horizon**: New beginnings unfolding before us
**Clear outlines**: The moment when hazy dreams take concrete form

## Autumn's Strength, the Silent World

Strong like autumn, and in the silence
The world will flow in warm golden light.

Autumn is a special season. Following vibrant summer, it quietly yet powerfully reveals its own colors.

### Lessons Autumn Teaches

**The beauty of patience**: The value of ripening slowly without rushing
**The grace of change**: That letting go can also be beautiful
**Strength in silence**: That the greatest changes happen in the quietest moments

## Starting Penpalling in the Mist

Our lives are sometimes like being in the mist. When we can't see ahead and are uncertain where to go.

But meetings on Lettie are like small lights discovered in that mist.

### Letters That Pierce Through the Mist

**Strange at first**: Writing letters to someone you don't know
**Gradually becoming clear**: The process of getting to know each other through exchanging words
**Finally revealing**: The moment of true friendship and connection

Like mist lifting, the more letters we exchange, the more clearly we see each other.

## Things I Want to Ask You

Have you walked through early morning mist?
What thoughts did you have then?

**What color is your autumn?**
For some it's golden, for others orange, for others deep crimson.

**What is your "moment when the veil lifts" that you're waiting for?**
We all have something we're waiting for the mist to clear from.

**What does your quiet morning look like?**
Before the world wakes, how do you spend your own time?

## The Journey on Lettie

The penpal journey on Lettie is like a morning walk in the mist.

### 5 Letters, 5 Sunrises

**First letter**: First greetings exchanged in the mist
**Second letter**: The moment when shapes begin to reveal themselves
**Third letter**: Time when each other's outlines become clear
**Fourth letter**: The moment when warm golden light unfolds
**Fifth letter**: When the veil fully lifts and true connection begins

### Slowly, But Surely

There's no need to rush. Like mist slowly lifting, our friendship deepens slowly too.

**Why we start without photos**: To see the real you beyond the veil of appearance
**Why we don't demand instant responses**: To give time to gather thoughts and include sincerity
**Why a letter takes a day to arrive**: Because true connection needs time

## The World Flowing in Golden Light

The world after the veil lifts is beautiful.

Under autumn's sunlight, everything is painted in warm golden light. Each leaf, each blade of grass shines in its own color.

**You are the same.**

Though you may be hidden in mist now, there's golden light within you too. When you truly connect with someone, that light shines even brighter.

## Morning We Wait for Together

When the world is in mist, waiting alone is lonely.

But what if you wait with someone?
If you share your hearts through letters while waiting?

**Even that waiting becomes a beautiful memory.**

### Mornings I Want to Share with You

- What you want to see first after the mist lifts
- A warm beverage to drink on a quiet morning
- Small sounds heard at dawn - birdsong, wind, rain
- The peace of the moment when morning sun enters the room
- Your own ritual before starting the day

## The Promise of Autumn

The mist always lifts.
The sky is always blue.
Autumn always comes in golden light.

**And true connection is always possible.**

Waiting for you on Lettie.
Beyond the mist, in golden autumn.

— While watching the morning mist together

*P.S. How is your morning? Is it misty, or is the sunlight already shining? Either way, I want to hear your story.*
    `
    },
    'dearest-friend': {
        id: 'dearest-friend',
        title: '가을밤의 편지: 외로움을 나누는 카페에서',
        titleEn: 'Letter on an Autumn Night: From a Cafe Where We Share Loneliness',
        description: '가을이 다가오면 길어지는 밤, 외로움이 찾아올 때가 있습니다. 우리의 길은 만나지 않을지 모르지만, 바닷가 카페에서 당신을 기다리며 쓰는 편지. Lettie에서 외로움을 함께 나눌 친구를 만나보세요.',
        descriptionEn: 'When autumn approaches and nights grow longer, loneliness sometimes visits. Our paths may never cross, but this is a letter written while waiting for you at a seaside cafe. Find a friend to share your loneliness with on Lettie.',
        date: '2025-01-20',
        readTime: '3분',
        readTimeEn: '3 min',
        category: '감성',
        categoryEn: 'Emotional',
        image: '/brand-screen.png',
        author: 'Lettie',
        keywords: ['감성 편지', '펜팔 우정', '외로움 극복', '마음 치유', '펜팔 위로', '진심 어린 편지', '감성 소통', '바닷가 카페'],
        keywordsEn: ['letter to a friend', 'heartfelt letter', 'emotional writing', 'pen pal letter', 'writing from the heart'],
        content: `
# Dearest friend,

가을이 빠르게 다가오고 있습니다. 그리고 저는 밤이 얼마나 길고 무거워지는지 알고 있습니다. 외로움이 당신의 마음을 잡아당길 때, 그 느낌을 압니다.

## 만나지 못할지도 모르는 당신에게

우리는 아마도 한 번도 생각을 나누지 못할지도 모릅니다. 한마디 말도, 우리의 길이 이 생에서 교차하지 않을지도 모릅니다. 비록 저는 그러길 바라지만요.

만약 우리가 만난다면...

**당신은 분명 제게 보여줄 것입니다**: 제가 살고 있는 삶 너머에 더 많은 것이 있다는 것을. 당신이 경험한 세상, 당신이 본 풍경, 당신이 느낀 감정들이 제 삶을 더 풍성하게 만들어줄 것입니다.

**저는 분명 당신에게 보여줄 것입니다**: 당신 안에 아직 당신이 보지 못한 빛이 있다는 것을. 때로 우리는 스스로를 가장 잘 보지 못합니다. 하지만 누군가의 편지 속에서, 우리는 새로운 우리 자신을 발견합니다.

## 바닷가 카페에서

그저 알아주세요. 당신이 어디에 있든, 무엇을 하고 있든...

**저는 언제나 바닷가 카페에 있을 것입니다.**

파도 소리가 들리는 곳, 커피 향기가 가득한 그곳에서 저는 당신을 기다립니다. 그저 앉아서 당신의 짐을 나눌 준비가 되어 있습니다.

## 우리가 나눌 수 있는 것들

### 외로움도 나누면 반이 됩니다
혼자 감당하기 힘든 무게가 있죠. 말하지 않으면 아무도 모를 그런 외로움 말이에요. Lettie에서는 그런 이야기도 나눌 수 있습니다. 판단 없이, 진심으로 들어줄 누군가가 있습니다.

### 작은 기쁨도 나누면 배가 됩니다
오늘 마신 맛있는 커피 한 잔, 길에서 본 예쁜 꽃 한 송이. 누군가와 나누지 않으면 그냥 지나쳐버릴 순간들이 편지 속에서 특별한 추억이 됩니다.

### 당신의 짐을 내려놓으세요
때로는 말하는 것만으로도 충분합니다. 해결책이 없어도, 답이 없어도 괜찮습니다. 그저 들어줄 누군가가 있다는 것, 당신 혼자가 아니라는 것을 아는 것만으로도 힘이 됩니다.

## 편지가 주는 위로

편지는 특별합니다. 실시간 채팅처럼 급하지 않아도 됩니다. 천천히, 당신의 속도로 마음을 담아 쓸 수 있습니다.

**쓰는 동안 치유됩니다**: 마음속 생각들을 글로 옮기다 보면, 복잡했던 감정들이 정리됩니다.

**읽는 동안 위로받습니다**: 누군가 시간을 들여 쓴 편지를 받았을 때, 당신은 중요한 사람이라는 것을 느낍니다.

**기다리는 동안 설렙니다**: 답장을 기다리는 시간조차 외롭지 않습니다. 곧 올 편지를 상상하며 하루를 보냅니다.

## 길어지는 가을밤에

가을이 오면 밤이 길어집니다. 하루의 끝자락, 혼자 남겨진 시간들이 많아지죠. 그런 밤에 따뜻한 편지 한 통이 있다면 어떨까요?

**당신은 혼자가 아닙니다.**

세상 어딘가에, 바닷가 카페에, 아니면 다른 어떤 곳에서 누군가 당신의 편지를 기다리고 있습니다. 당신의 이야기를 듣고 싶어 하는 사람이 있습니다.

## Lettie에서 만나요

우리의 길이 직접 만나지 않을지라도, 편지로는 만날 수 있습니다.

**번갈아 오가는 편지로**: 천천히 서로를 알아가세요. 급하지 않아도 됩니다.

**사진 없이 시작하는 만남**: 외모가 아닌, 마음과 생각으로 서로를 이해합니다.

**진심만이 오가는 공간**: Lettie는 진짜 우정을 만들어가는 곳입니다.

## 첫 편지를 기다립니다

바닷가 카페의 창가 자리에 앉아, 파도 소리를 들으며 당신의 편지를 기다립니다.

당신의 하루는 어땠나요?
오늘 무슨 생각을 하셨나요?
마음속에 담아두었던 이야기가 있나요?

**들려주세요. 당신의 이야기를.**

우리의 길은 만나지 않을지 모르지만, 우리의 마음은 편지로 연결될 수 있습니다.

가을밤이 길어지기 전에, 첫 편지를 시작해보세요.

**바닷가 카페에서, 당신을 기다리며...**

— Always here for you
    `,
        contentEn: `
# Dearest friend,

Autumn is approaching quickly. And I know how long and heavy the nights become. When loneliness tugs at your heart, I know that feeling.

## To You Whom I May Never Meet

We may never share thoughts. Not a word, our paths may never cross in this life. Though I hope they do.

If we meet...

**You will surely show me**: That there's more beyond the life I'm living. The world you've experienced, the landscapes you've seen, the emotions you've felt will enrich my life.

**I will surely show you**: That there's light within you that you haven't seen yet. Sometimes we can't see ourselves clearly. But in someone's letter, we discover a new version of ourselves.

## Waiting at a Seaside Cafe

I'm sitting by the window of a seaside cafe, listening to the waves, waiting for your letter.

How was your day?
What were you thinking about today?
Is there a story you've been keeping in your heart?

**Tell me. Your story.**

Our paths may never cross, but our hearts can connect through letters.

Before autumn nights grow longer, start your first letter.

**At the seaside cafe, waiting for you...**

— Always here for you
    `
    },
    'digital-detox-2025': {
        id: 'digital-detox-2025',
        title: '디지털 디톡스: 2025년, 왜 느린 소통이 필요한가',
        titleEn: 'Digital Detox: Why We Need Slow Communication in 2025',
        description: '끊임없는 알림과 즉각적인 반응의 시대. 정신 건강을 지키고 진정한 관계를 회복하기 위한 디지털 디톡스와 느린 소통의 중요성을 이야기합니다.',
        descriptionEn: 'An age of constant notifications and instant responses. Discussing the importance of digital detox and slow communication to protect mental health and restore genuine relationships.',
        date: '2025-01-25',
        readTime: '6분',
        readTimeEn: '6 min',
        category: '감성',
        categoryEn: 'Emotional',
        image: '/letter-writing.png',
        author: 'Lettie',
        keywords: ['디지털 디톡스', '느린 소통', '정신 건강', '소셜 미디어 피로', '슬로우 라이프', '펜팔 효과', '마음 챙김'],
        keywordsEn: ['digital detox', 'slow communication', 'social media fatigue', 'mindful technology', 'screen time reduction'],
        content: `
# 디지털 디톡스: 2025년, 왜 느린 소통이 필요한가

## 알림의 홍수 속에서

스마트폰을 켜면 수십 개의 알림이 우리를 반깁니다.
"좋아요를 눌렀습니다."
"새로운 메시지가 도착했습니다."
"지금 특가 할인 중!"

우리는 연결되어 있지만, 역설적으로 그 어느 때보다 단절되어 있습니다. 2025년, 디지털 피로감은 이제 일상이 되었습니다.

### 도파민 중독의 시대

즉각적인 보상과 반응은 뇌의 도파민 시스템을 자극합니다. 우리는 무의식적으로 스마트폰을 확인하고, 새로운 자극을 찾습니다. 하지만 이 짧은 쾌락 뒤에는 더 큰 공허함이 찾아옵니다.

**우리가 잃어버린 것들:**
- 깊이 있는 사고의 시간
- 온전한 휴식
- 타인에 대한 진정한 관심
- 나 자신과 마주하는 순간

## 느린 소통의 치유력

디지털 디톡스는 단순히 스마트폰을 끄는 것이 아닙니다. **속도를 늦추고, 관계의 본질을 회복하는 과정**입니다.

펜팔은 가장 강력한 디지털 디톡스 도구 중 하나입니다.

### 1. 기다림의 미학 회복
즉시 답장하지 않아도 된다는 안도감. 편지를 보내고 답장을 기다리는 며칠간의 시간은 우리에게 '여유'라는 선물을 줍니다.

### 2. 깊이 있는 연결
짧은 톡으로는 나눌 수 없는 긴 호흡의 이야기들. 펜팔은 표면적인 일상이 아닌, 내면의 생각과 감정을 나누게 합니다.

### 3. 정서적 안정
손으로 쓰듯 한 자 한 자 정성스럽게 타이핑하는 과정은 명상과도 같습니다. 생각을 정리하고 마음을 차분하게 만듭니다.

## Lettie가 제안하는 슬로우 라이프

Lettie는 이러한 '느림'의 가치를 지향합니다.

**의도적인 불편함**:
- 젬으로 여는 무제한 대화 (그 전까지는 번갈아 쓰기)
- 사진 없는 프로필
- 즉각적이지 않은 소통

이 모든 것은 당신의 정신 건강과 진정한 관계 형성을 위한 장치입니다.

## 지금, 잠시 멈춰보세요

오늘 하루, 스마트폰의 알림을 끄고 Lettie를 켜보세요.
그리고 누군가에게 긴 편지를 써보세요.

빠르게 흘러가는 세상 속에서,
나만의 속도를 찾는 것.
그것이 진정한 디지털 디톡스의 시작입니다.

---
*Lettie와 함께 느린 소통의 즐거움을 경험해보세요.*
    `,
        contentEn: `
# Digital Detox: Why We Need Slow Communication in 2025

## In a Flood of Notifications

When we turn on our smartphones, dozens of notifications greet us.
"Someone liked your post."
"New message arrived."
"On sale now!"

We're connected, yet paradoxically more disconnected than ever. In 2025, digital fatigue has become part of daily life.

### The Age of Dopamine Addiction

Instant rewards and responses stimulate the brain's dopamine system. We unconsciously check our smartphones, seeking new stimulation. But after these brief pleasures comes greater emptiness.

**What we've lost:**
- Time for deep thought
- Complete rest
- Genuine interest in others
- Moments to face ourselves

## The Healing Power of Slow Communication

Digital detox isn't simply turning off your smartphone. **It's the process of slowing down and restoring the essence of relationships.**

Penpalling is one of the most powerful digital detox tools.

### 1. Restoring the Aesthetics of Waiting
The relief of not having to reply immediately. The days spent sending a letter and waiting for a reply give us the gift of 'leisure.'

### 2. Deep Connection
Long-form stories that can't be shared in short messages. Penpalling allows sharing inner thoughts and feelings, not superficial daily updates.

### 3. Emotional Stability
The process of carefully typing each character as if handwriting is like meditation. It organizes thoughts and calms the mind.

## Lettie's Proposal for Slow Living

Lettie pursues the value of this 'slowness.'

**Intentional inconvenience**:
- Unlimited conversation unlocked with gems (turn-taking before that)
- Profiles without photos
- Non-instant communication

All of this is designed for your mental health and genuine relationship building.

## Now, Pause for a Moment

Today, turn off your smartphone notifications and open Lettie.
And write a long letter to someone.

In a fast-moving world,
Finding your own pace.
That's the true beginning of digital detox.

---
*Experience the joy of slow communication with Lettie.*
    `
    },
    'safe-penpaling-guide': {
        id: 'safe-penpaling-guide',
        title: '안전한 펜팔 가이드: 글로벌 친구를 안전하게 사귀는 법',
        titleEn: 'Safe Penpalling Guide: How to Make Global Friends Safely',
        description: '온라인에서 새로운 친구를 만나는 것은 설레는 일이지만, 안전이 최우선입니다. Lettie가 제안하는 안전한 펜팔 수칙과 프라이버시 보호 방법.',
        descriptionEn: 'Meeting new friends online is exciting, but safety comes first. Lettie\'s safe penpalling guidelines and privacy protection methods.',
        date: '2025-01-24',
        readTime: '5분',
        readTimeEn: '5 min',
        category: '가이드',
        categoryEn: 'Guide',
        image: '/letter-writing.png', // TODO: Replace with shield icon if available
        author: 'Lettie Team',
        keywords: ['안전한 펜팔', '온라인 안전', '프라이버시 보호', '사기 예방', '글로벌 친구', 'Lettie 보안'],
        keywordsEn: ['pen pal safety', 'safe penpalling', 'online safety tips', 'how to stay safe with pen pals', 'protect personal information'],
        faq: [
            { q: '펜팔을 처음 시작할 때 첫 편지에 무엇을 써야 하나요?', a: '자기소개, 취미, 사는 곳의 문화, 그리고 상대방에 대한 진심 어린 질문을 포함하는 것이 좋습니다. 너무 길지 않게 작성하고, 공통 관심사를 찾는 것이 중요합니다.' },
            { q: '펜팔 친구와 연락처는 언제 교환하는 것이 안전한가요?', a: '정해진 규칙은 없지만, 편지를 여러 통 주고받으며 신뢰가 쌓인 뒤에 교환하기를 권장합니다. 확신이 들기 전에는 개인 메신저나 연락처를 앱 밖으로 내보내지 마세요.' },
            { q: '해외 펜팔 친구에게 선물을 보내도 되나요?', a: '신뢰가 충분히 쌓인 후라면 가능하지만, 초기에는 주소 공유를 자제하는 것이 좋습니다. 또한 고가의 선물 요구는 사기일 수 있으니 주의해야 합니다.' },
        ],
        content: `
# 안전한 펜팔 가이드: 글로벌 친구를 안전하게 사귀는 법

새로운 문화를 배우고 전 세계 친구를 사귀는 것은 멋진 경험입니다. 하지만 온라인 공간인 만큼 안전에 대한 주의도 필요합니다. Lettie는 여러분의 안전을 최우선으로 생각합니다.

## 1. 개인정보 보호는 철저하게

가장 기본적이지만 중요한 원칙입니다.

### 절대 공유하지 말아야 할 정보
- **집 주소**: 상세 주소는 절대 알려주지 마세요. 도시나 국가 정도만 공유하세요.
- **금융 정보**: 계좌번호, 카드번호, 비밀번호 등은 어떤 경우에도 공유하면 안 됩니다.
- **주민등록번호/여권번호**: 신분증 관련 정보는 타인에게 노출되어서는 안 됩니다.
- **실시간 위치**: 지금 어디에 있는지 구체적인 위치를 알리지 마세요.

## 2. 로맨스 스캠 주의

펜팔을 가장하여 친밀감을 쌓은 뒤 금전을 요구하는 사기 수법(로맨스 스캠)을 주의해야 합니다.

**의심해야 할 신호들:**
- 만난 지 얼마 안 되어 **과도한 애정 표현**을 한다.
- **금전적인 어려움**을 호소하며 돈을 빌려달라고 한다.
- **선물**을 보내겠다며 배송비나 관세를 요구한다.
- 영상 통화나 오프라인 만남을 핑계로 **돈을 요구**한다.

**Lettie의 조언**: 금전 요구는 100% 사기입니다. 즉시 대화를 중단하고 신고해주세요.

## 3. 외부 메신저 이동은 신중하게

Lettie는 편지가 **거리만큼 시간이 걸려 도착**하고, 답장이 와야 다음 편지를 쓸 수 있게 설계되었습니다. 이는 서로를 알아볼 최소한의 시간을 확보하기 위함입니다.

- 너무 빨리 카카오톡, 라인, 왓츠앱 등으로 이동하자고 제안하는 경우 주의하세요.
- Lettie 앱 내에서 충분히 대화를 나누고 신뢰가 쌓였을 때 연락처를 교환하세요.

## 4. 사진 교환의 주의점

Lettie는 초기에는 사진 없이 대화가 진행됩니다. 이후 사진을 교환하게 되더라도 주의가 필요합니다.

- **민감한 사진 절대 금지**: 나중에 협박의 도구가 될 수 있는 사진은 절대 보내지 마세요.
- **배경 정보 주의**: 사진 배경에 집 위치나 개인정보가 노출되지 않도록 확인하세요.

## 5. 이상한 사용자는 바로 신고하기

대화 중 불쾌감을 주거나 의심스러운 행동을 하는 사용자가 있다면 주저하지 말고 신고해주세요.

**신고 대상:**
- 성적인 괴롭힘이나 부적절한 언어 사용
- 금전 요구 또는 사기 시도
- 스팸 메시지 발송
- 타인 사칭

## Lettie의 안전 장치

Lettie는 여러분의 안전한 펜팔 활동을 위해 다양한 노력을 하고 있습니다.
- **24시간 모니터링**: 신고된 사용자를 신속하게 검토하고 조치합니다.
- **키워드 필터링**: 부적절한 단어나 표현을 자동으로 감지합니다.
- **점진적 프로필 공개**: 신뢰가 쌓일수록 정보가 공개되는 시스템으로 무분별한 정보 노출을 막습니다.

안전은 즐거운 펜팔의 시작입니다. 위의 수칙들을 잘 지키며 Lettie에서 소중한 인연을 만들어가세요!

---
*안전하고 건전한 펜팔 문화를 함께 만들어가요.*
    `,
        contentEn: `
# Safe Penpalling Guide: How to Make Global Friends Safely

Learning new cultures and making friends worldwide is a wonderful experience. But as an online space, safety precautions are necessary. Lettie prioritizes your safety above all.

## 1. Protect Personal Information Thoroughly

The most basic yet important principle.

### Information You Should Never Share
- **Home address**: Never share your detailed address. Only share city or country.
- **Financial information**: Never share account numbers, card numbers, passwords under any circumstances.
- **ID/Passport numbers**: Identity-related information should never be exposed to others.
- **Real-time location**: Don't share specific details about where you are now.

## 2. Beware of Romance Scams

Be cautious of romance scams where scammers build intimacy through penpalling then request money.

**Warning signs:**
- **Excessive affection** shortly after meeting
- Complaining about **financial difficulties** and asking to borrow money
- Requesting shipping fees or customs charges claiming to send **gifts**
- **Requesting money** using video calls or offline meetings as excuses

**Lettie's advice**: Money requests are 100% scams. Stop the conversation immediately and report.

## 3. Be Careful About Moving to External Messengers

Lettie is designed so a letter **takes as long as the distance** to arrive, and you write again only after a reply. That guarantees a minimum of time to get a sense of each other.

- Be cautious if someone suggests moving to KakaoTalk, Line, WhatsApp too quickly
- Exchange contact information only after sufficient conversation and trust building within Lettie

## 4. Precautions for Photo Exchange

Lettie starts conversations without photos initially. Even when exchanging photos later, caution is needed.

- **Never send sensitive photos**: Never send photos that could later be used for blackmail
- **Background information caution**: Check that home location or personal information isn't exposed in photo backgrounds

## 5. Report Suspicious Users Immediately

If you encounter users who make you uncomfortable or act suspiciously during conversation, don't hesitate to report them.

**Report for:**
- Sexual harassment or inappropriate language
- Money requests or scam attempts
- Spam messages
- Impersonation

## Lettie's Safety Measures

Lettie makes various efforts for your safe penpalling activities.
- **24-hour monitoring**: Quickly review and act on reported users
- **Keyword filtering**: Automatically detect inappropriate words or expressions
- **Gradual profile disclosure**: System where information is revealed as trust builds, preventing indiscriminate information exposure

Safety is the beginning of enjoyable penpalling. Follow these guidelines and build precious connections on Lettie!

---
*Let's build a safe and healthy penpal culture together.*
    `
    },
    'making-global-friends': {
        id: 'making-global-friends',
        title: '해외 친구 만들기: 언어와 국경을 넘어선 우정',
        titleEn: 'Making Global Friends: Friendship Beyond Language and Borders',
        description: '언어 장벽을 넘어 전 세계 친구들과 진정한 우정을 쌓는 방법. Lettie와 함께라면 국경 없는 소통이 가능합니다.',
        descriptionEn: 'How to build genuine friendships with friends worldwide beyond language barriers. With Lettie, borderless communication is possible.',
        date: '2025-02-10',
        readTime: '5분',
        readTimeEn: '5 min',
        category: '가이드',
        categoryEn: 'Guide',
        image: '/letter-writing.png',
        author: 'Lettie',
        keywords: ['해외 친구', '글로벌 우정', '언어 교환', '문화 교류', '외국인 친구', '글로벌 소통'],
        keywordsEn: ['make friends worldwide', 'international friendship', 'global friends online', 'friends from other countries'],
        content: `
# 해외 친구 만들기: 언어와 국경을 넘어선 우정

## 국경 없는 우정의 시작

우리는 인터넷으로 전 세계가 연결된 시대에 살고 있습니다. 하지만 진정한 의미의 '연결'은 얼마나 이루어지고 있을까요? 단순히 '좋아요'를 누르는 것을 넘어, 서로의 삶을 나누고 이해하는 깊은 우정을 만드는 것은 여전히 특별한 경험입니다.

해외 친구를 사귀는 것은 단순히 외국어를 연습하는 수단이 아닙니다. 그것은 새로운 세상을 만나는 문을 여는 것입니다.

## 언어 장벽, 두려워하지 마세요

많은 분들이 외국어 실력 때문에 해외 친구 사귀기를 주저합니다. 하지만 완벽한 언어 실력보다 중요한 것은 **소통하려는 의지**입니다.

### 마음으로 통하는 대화
- **번역기의 도움**: 요즘 번역 기술은 훌륭합니다. 완벽하지 않아도 의미는 통합니다.
- **쉬운 표현 사용**: 복잡한 문장보다 진심이 담긴 쉬운 문장이 더 잘 전달됩니다.
- **공통의 관심사**: 음악, 영화, 음식 등 공통 관심사는 언어 장벽을 쉽게 허물어줍니다.

## 문화 차이는 즐거움입니다

서로 다른 문화적 배경은 오해의 원인이 되기도 하지만, 대화의 가장 흥미로운 주제가 되기도 합니다.

**"너희 나라에서는 이럴 때 어떻게 해?"**
이 질문 하나로 밤새 이야기를 나눌 수 있습니다. 서로의 명절, 식사 예절, 학교 생활 등을 비교하며 다름을 인정하고 배우는 과정은 펜팔의 가장 큰 매력입니다.

## Lettie에서 시작하는 글로벌 우정

Lettie는 언어와 국경을 넘어 진정한 친구를 만날 수 있는 최적의 공간입니다.

### 1. 느린 소통의 미학
실시간 채팅의 압박 없이, 충분히 생각하고 번역하며 편지를 쓸 수 있습니다. 이는 언어에 대한 부담을 줄여줍니다.

### 2. 관심사 기반 매칭
비슷한 취미와 관심사를 가진 친구를 추천받아 자연스럽게 대화를 시작할 수 있습니다.

### 3. 안전한 환경
사진 없이 캐릭터로 시작하고, 편지가 시간을 두고 오가는 구조는 낯선 외국인과의 대화에 대한 막연한 두려움을 덜어줍니다.

## 지금, 세계 지도를 펼쳐보세요

당신이 만나게 될 친구는 지구 반대편 브라질에 살고 있을 수도, 가까운 일본에 살고 있을 수도 있습니다.

어디에 살든, 어떤 언어를 쓰든, 우리 모두는 누군가와 연결되고 싶어 하는 마음을 가지고 있습니다.

**용기를 내어 첫 편지를 보내보세요.**
그 편지가 당신의 세상을 넓혀줄 것입니다.

---
*Lettie와 함께 전 세계 친구들을 만나보세요.*
    `,
        contentEn: `
# Making Global Friends: Friendship Beyond Language and Borders

Making friends overseas opens doors to new worlds. With Lettie, borderless communication is possible. Don't fear language barriers - the will to communicate matters more than perfect language skills. Cultural differences make friendships richer, offering new perspectives and expanded worldviews. Start genuine global friendships today on Lettie, where someone somewhere is waiting to meet you.
    `
    },
    '2025-best-penpal-app': {
        id: '2025-best-penpal-app',
        title: '2025년 펜팔 앱 추천: 안전한 글로벌 소통의 시작',
        description: '수많은 펜팔 앱 중 어떤 것을 선택해야 할까요? 안전하고 진정성 있는 소통을 위한 2025년 최고의 펜팔 앱, Lettie를 소개합니다.',
        date: '2025-02-15',
        readTime: '6분',
        category: '가이드',
        image: '/brand-screen.png',
        author: 'Lettie Team',
        keywords: ['펜팔 앱 추천', '안전한 펜팔', '2025 펜팔', '글로벌 메신저', '펜팔 어플', 'Lettie'],
        keywordsEn: ['best pen pal app', 'pen pal apps compared', 'penpal app review', 'top penpal apps', 'safe pen pal app'],
        content: `
# 2025년 펜팔 앱 추천: 안전한 글로벌 소통의 시작

디지털 시대, 펜팔의 형태도 진화하고 있습니다. 종이 편지의 감성을 디지털로 옮겨온 다양한 앱들이 출시되고 있죠. 2025년, 당신에게 꼭 맞는 펜팔 앱은 무엇일까요?

## 펜팔 앱 선택의 기준

수많은 앱 중에서 좋은 펜팔 앱을 고르는 기준은 명확합니다.

1. **진정성**: 가벼운 만남이 아닌 깊이 있는 대화가 가능한가?
2. **안전성**: 로맨스 스캠이나 악성 유저로부터 안전한가?
3. **사용성**: 편지 쓰기에 최적화된 UI/UX를 제공하는가?

## 왜 Lettie인가?

Lettie는 이 모든 기준을 충족하며, 2025년 가장 주목받는 펜팔 앱으로 떠오르고 있습니다.

### 1. 외모보다 내면에 집중하는 '블라인드 펜팔'
Lettie의 가장 큰 특징은 **초기에 사진을 공개하지 않는 것**입니다. 프로필 사진 대신 아바타나 감성적인 이미지를 사용합니다. 이는 외모로 사람을 판단하는 '스와이프' 문화에 지친 사용자들에게 큰 호응을 얻고 있습니다. 편지의 내용, 상대방의 생각과 가치관에 온전히 집중할 수 있기 때문입니다.

### 2. 시간이 걸리는 편지로 검증된 관계
편지는 **거리만큼 시간이 걸려 도착**하고, 상대의 답장이 와야 다음 편지를 쓸 수 있습니다. 이 구조는 두 가지 장점이 있습니다.
- **안전 확보**: 충분한 대화를 통해 상대를 검증할 수 있어 스캠 피해를 예방합니다.
- **관계의 깊이**: 연락처를 얻기 위한 목적이 아닌, 대화 자체를 즐기는 진성 유저들이 모입니다.

### 3. 아날로그 감성을 담은 디자인
우표를 붙이고, 편지지가 전송되는 애니메이션 등 Lettie는 디지털 환경에서도 아날로그 편지의 따뜻함을 느낄 수 있도록 세심하게 디자인되었습니다.

## 다른 앱과의 비교

| 특징 | 일반 데이팅/채팅 앱 | 기존 펜팔 앱 | **Lettie** |
| :--- | :--- | :--- | :--- |
| **매칭 방식** | 외모 중심 (스와이프) | 랜덤 발송 | 관심사 & 가치관 기반 |
| **소통 속도** | 실시간 (즉답 압박) | 느림 (배송 시간) | **적당한 느림 (여유)** |
| **안전 장치** | 미흡 | 보통 | **시간이 걸리는 편지·캐릭터 프로필** |
| **주요 목적** | 가벼운 만남/연애 | 언어 교환 | **진정한 우정/소통** |

## 사용자들의 리얼 후기

> "사진 없이 대화하니까 편견 없이 사람을 대하게 되더라고요. 진짜 마음이 통하는 친구를 만났습니다." - User A

> "5통을 주고받아야 한다는 게 처음엔 답답했는데, 오히려 그 시간 덕분에 더 애틋해지고 신뢰가 생겼어요." - User B

## 결론: 진심을 전하고 싶다면

빠르고 가벼운 만남이 넘쳐나는 세상에서, 조금은 느리더라도 진심을 전하고 싶다면 Lettie가 정답입니다.

2025년, Lettie에서 당신만의 특별한 인연을 만들어보세요.

---
*지금 앱스토어와 구글 플레이에서 Lettie를 만나보세요.*
    `,
        titleEn: '2025 Best Penpal App: Start Safe Global Communication',
        descriptionEn: 'Which penpal app should you choose among so many options? Introducing Lettie, the best penpal app of 2025 for safe and authentic communication.',
        readTimeEn: '6 min',
        categoryEn: 'Guide',
        contentEn: `
# 2025 Best Penpal App: Start Safe Global Communication

In the digital age, the form of penpalling is also evolving. Various apps have been released that bring the sentiment of paper letters into digital format. In 2025, what is the perfect penpal app for you?

## Criteria for Choosing a Penpal App

The criteria for choosing a good penpal app among many are clear.

1. **Authenticity**: Is deep conversation possible, not just casual encounters?
2. **Safety**: Is it safe from romance scams or malicious users?
3. **Usability**: Does it provide UI/UX optimized for letter writing?

## Why Lettie?

Lettie meets all these criteria and is emerging as the most notable penpal app of 2025.

### 1. 'Blind Penpal' Focusing on Inner Self Over Appearance
Lettie's biggest feature is **not revealing photos initially**. Instead of profile pictures, avatars or emotional images are used. This has received great response from users tired of the 'swipe' culture that judges people by appearance. You can fully focus on the content of letters, the other person's thoughts and values.

### 2. Verified Relationships Through '5 Letters' Rule
A letter **takes as long as the distance** to arrive, and you write again only after a reply. This structure has two advantages:
- **Safety Assurance**: You can verify the other person through sufficient conversation, preventing scam damage.
- **Depth of Relationship**: Genuine users who enjoy conversation itself gather, not for the purpose of getting contact information.

### 3. Design Containing Analog Sensibility
Lettie is carefully designed to feel the warmth of analog letters even in a digital environment, with animations of affixing stamps and delivering letter paper.

## Comparison with Other Apps

| Feature | General Dating/Chat Apps | Existing Penpal Apps | **Lettie** |
| :--- | :--- | :--- | :--- |
| **Matching Method** | Appearance-focused (swipe) | Random sending | Interest & values-based |
| **Communication Speed** | Real-time (immediate response pressure) | Slow (delivery time) | **Moderate slowness (leisure)** |
| **Safety Features** | Insufficient | Average | **Slow letters · character profiles** |
| **Main Purpose** | Casual encounters/dating | Language exchange | **True friendship/communication** |

## Real User Reviews

> "Talking without photos made me approach people without prejudice. I met a friend I truly connect with." - User A

> "At first it was frustrating to exchange 5 letters, but thanks to that time, we became more attached and trusting." - User B

## Conclusion: If You Want to Convey Sincerity

In a world overflowing with fast and casual encounters, if you want to convey sincerity even if it's a bit slower, Lettie is the answer.

In 2025, create your special connection on Lettie.

---
*Meet Lettie now on the App Store and Google Play.*
    `
    },
    'armchair-world-travel': {
        id: 'armchair-world-travel',
        title: '방구석 세계여행: 펜팔로 떠나는 문화 여행',
        description: '비행기 표 없이 떠나는 세계 여행. 펜팔 친구가 보내주는 현지 이야기와 사진으로 생생한 문화를 경험해보세요.',
        date: '2025-02-20',
        readTime: '4분',
        category: '문화',
        image: '/conversation-detail.png',
        author: 'Lettie',
        keywords: ['방구석 여행', '랜선 여행', '문화 체험', '세계 여행', '현지 문화', '펜팔 여행'],
        keywordsEn: ['travel through letters', 'cultural exchange', 'virtual travel', 'learn about other countries'],
        content: `
# 방구석 세계여행: 펜팔로 떠나는 문화 여행

여행을 떠나고 싶지만 시간과 비용 때문에 망설여지시나요? 혹은 가보지 못한 낯선 나라의 진짜 모습이 궁금한가요?

비행기 표 없이도, 짐을 싸지 않아도 떠날 수 있는 여행이 있습니다. 바로 **펜팔과 함께하는 방구석 세계여행**입니다.

## 가이드북에는 없는 '진짜' 이야기

여행 가이드북이나 블로그에는 유명한 관광지 정보만 가득합니다. 하지만 현지인 친구가 들려주는 이야기는 다릅니다.

- **현지인만 아는 맛집**: 관광객은 모르는 골목 식당의 메뉴
- **숨겨진 명소**: 동네 뒷산에서 보는 최고의 노을 스팟
- **소소한 일상**: 그 나라 사람들의 퇴근길 풍경, 주말 장보기

이런 생생한 정보들은 당신을 그곳에 있는 것처럼 느끼게 해줍니다.

## 사진 한 장에 담긴 이야기

Lettie에서 친구가 보내주는 사진 한 장은 그 어떤 엽서보다 특별합니다.

"오늘 아침 우리 동네 공원이야."
"내가 제일 좋아하는 카페의 창가 자리야."

화려하게 보정된 사진이 아닌, 친구의 시선이 담긴 투박한 사진 속에서 우리는 그 나라의 공기를 느낍니다.

## 문화를 배우는 가장 즐거운 방법

책으로 배우는 문화는 지루할 수 있지만, 친구에게 듣는 문화는 흥미진진합니다.

### 축제와 기념일
할로윈, 크리스마스, 라마단 등 각국의 특별한 날들을 친구와 함께 실시간으로 즐겨보세요. 친구가 보내주는 축제 현장의 생생한 묘사는 당신을 그 축제의 한가운데로 초대합니다.

### 언어 속의 문화
단어 하나, 표현 하나에도 문화가 담겨 있습니다. 친구에게 그 나라의 속담이나 유행어를 배워보세요. 언어를 통해 그들의 사고방식을 이해하게 됩니다.

## Lettie 여권으로 떠나는 여행

Lettie는 당신의 여권입니다.

- **프랑스** 친구와 낭만적인 예술 이야기를 나누고,
- **브라질** 친구와 열정적인 삼바 축제 이야기를 듣고,
- **일본** 친구와 고즈넉한 교토의 가을을 공유하세요.

전 세계 200여 개국 친구들이 당신을 기다리고 있습니다.

## 여행을 시작할 준비가 되셨나요?

지금 편안한 의자에 앉아 Lettie를 켜세요.
그리고 설레는 마음으로 첫 편지를 써보세요.

**"안녕, 너의 나라 이야기가 궁금해."**

이 한 마디가 당신을 멋진 세계 여행으로 안내할 것입니다.

---
*Lettie와 함께 매일 새로운 나라로 여행을 떠나보세요.*
    `,
        titleEn: 'Armchair World Travel: Cultural Journey Through Penpal',
        descriptionEn: 'World travel without plane tickets. Experience vivid culture through local stories and photos sent by your penpal friends.',
        readTimeEn: '4 min',
        categoryEn: 'Culture',
        contentEn: `
# Armchair World Travel: Cultural Journey Through Penpal

Do you hesitate to travel due to time and cost? Or are you curious about the real side of unfamiliar countries you haven't visited?

There's a journey you can take without plane tickets or packing luggage. It's **armchair world travel with penpals**.

## 'Real' Stories Not in Guidebooks

Travel guidebooks and blogs are full of information about famous tourist spots. But stories told by local friends are different.

- **Local-only restaurants**: Alley restaurant menus that tourists don't know about
- **Hidden spots**: The best sunset spot seen from the neighborhood hill
- **Small daily life**: Commute scenes of people in that country, weekend grocery shopping

These vivid pieces of information make you feel as if you're there.

## Stories in a Single Photo

A single photo sent by a friend on Lettie is more special than any postcard.

"This is my neighborhood park this morning."
"This is my favorite window seat at the cafe."

In rough photos containing a friend's perspective, not glamorously edited photos, we feel the air of that country.

## The Most Enjoyable Way to Learn Culture

Culture learned from books can be boring, but culture heard from friends is fascinating.

### Festivals and Holidays
Enjoy special days of each country like Halloween, Christmas, Ramadan in real-time with your friends. Vivid descriptions of festival scenes sent by friends invite you to the middle of that festival.

### Culture Within Language
Culture is contained in each word and expression. Learn proverbs or slang from your friend's country. You come to understand their way of thinking through language.

## Travel with Lettie Passport

Lettie is your passport.

- Share romantic art stories with **French** friends,
- Hear passionate samba festival stories with **Brazilian** friends,
- Share the serene autumn of Kyoto with **Japanese** friends.

Friends from over 200 countries around the world are waiting for you.

## Ready to Start Your Journey?

Sit comfortably in your chair and open Lettie now.
Then write your first letter with excitement.

**"Hello, I'm curious about your country."**

This one sentence will guide you to a wonderful world trip.

---
*Travel to a new country every day with Lettie.*
    `
    },
    'language-exchange-friendship': {
        id: 'language-exchange-friendship',
        title: '언어 교환을 넘어 진정한 우정으로: 펜팔이 주는 선물',
        description: '단순히 언어를 배우는 것을 넘어, 세계 각국의 친구들과 깊은 우정을 나누는 방법. 언어 교환 파트너에서 평생 친구가 되는 과정을 소개합니다.',
        date: '2025-02-10',
        readTime: '5분',
        category: '학습',
        image: '/conversation-detail.png',
        author: 'Lettie',
        keywords: ['언어 교환', '외국인 친구', '글로벌 우정', '영어 회화', '한국어 학습', '문화 교류', '펜팔 친구', '언어 학습'],
        keywordsEn: ['language exchange friendship', 'beyond language practice', 'pen pal language learning', 'real friendship'],
        content: `
# 언어 교환을 넘어 진정한 우정으로: 펜팔이 주는 선물

## 언어는 도구일 뿐, 목적은 사람입니다

많은 분들이 외국어를 배우기 위해 펜팔을 시작합니다. 영어를 더 잘하고 싶어서, 한국어를 연습하고 싶어서, 혹은 제3외국어를 익히고 싶어서죠. 물론 펜팔은 훌륭한 언어 학습 방법입니다. 교과서에서는 배울 수 없는 생생한 표현과 문화를 접할 수 있으니까요.

하지만 **언어 실력 향상**만을 목적으로 한다면, 펜팔은 금방 지루해질 수 있습니다. 문법 교정을 해주는 선생님이 아니라, 나와 대화를 나누는 **친구**가 필요하기 때문입니다.

### 언어 교환 파트너 vs 펜팔 친구

| 언어 교환 파트너 | 펜팔 친구 |
| :--- | :--- |
| 언어 학습이 주 목적 | 소통과 교감이 주 목적 |
| 틀린 표현을 고쳐주는 데 집중 | 내용과 감정에 집중 |
| 학습 진도에 따라 관계가 유지됨 | 서로의 삶을 나누며 관계가 깊어짐 |
| 기능적인 관계 | 정서적인 관계 |

## 진정한 우정으로 나아가는 3가지 단계

Lettie에서 만난 수많은 사용자들이 언어 교환을 넘어 소중한 인연을 만들어가고 있습니다. 그들은 어떻게 '파트너'에서 '친구'가 되었을까요?

### 1. 완벽함보다 진심을 전하세요

문법이 틀릴까 봐 걱정하지 마세요. 번역기를 사용해도 괜찮습니다. 중요한 것은 **당신의 생각과 마음**을 전하려는 노력입니다.

> "제 영어가 서툴러서 미안해요."
> "아니에요! 당신의 편지를 이해하는 데 전혀 문제없어요. 오히려 당신이 노력해서 쓴 한국어 편지가 정말 감동적이었어요."

서툰 언어 속에 담긴 진심은 상대방에게 더 큰 울림을 줍니다.

### 2. 언어 너머의 이야기를 나누세요

"오늘 날씨 어때요?", "점심 뭐 먹었어요?" 같은 일상적인 질문도 좋지만, 조금 더 깊은 이야기를 나눠보세요.

- **가치관**: 당신에게 가장 중요한 가치는 무엇인가요?
- **꿈**: 어릴 적 꿈은 무엇이었나요? 지금은 어떤 꿈을 꾸고 있나요?
- **고민**: 요즘 당신을 힘들게 하는 것은 무엇인가요?

언어는 서로의 생각을 나누기 위한 수단일 뿐입니다. 그 수단을 통해 **서로의 세계**를 공유하세요.

### 3. 서로의 문화를 존중하고 배우세요

언어는 그 나라의 문화를 담고 있습니다. 단순히 단어를 외우는 것이 아니라, 그 단어가 쓰이는 맥락과 문화를 이해하려고 노력해보세요.

- 한국의 '정(情)' 문화에 대해 이야기해주기
- 상대방 국가의 명절이나 기념일에 축하 메시지 보내기
- 서로의 음식이나 음악 추천하기

문화를 이해하면 상대방을 더 깊이 이해할 수 있고, 대화의 소재도 훨씬 풍성해집니다.

## Lettie가 돕는 언어 교환과 우정

Lettie는 여러분이 언어 장벽을 넘어 진정한 우정을 쌓을 수 있도록 돕습니다.

- **번역 기능**: 언어에 대한 두려움 없이 모국어로 편하게 편지를 쓸 수 있습니다.
- **느린 소통**: 즉각적인 대답에 대한 부담 없이, 충분히 생각하고 사전을 찾아보며 편지를 쓸 수 있습니다.
- **관심사 매칭**: 언어 학습 외에도 공통된 관심사를 가진 친구를 추천해 드립니다.

## 지금, 세계로 통하는 문을 열어보세요

언어 실력은 덤입니다. 진짜 선물은 **세계 각국에 생기는 소중한 친구들**입니다.

지금 Lettie에서 펜팔을 시작해보세요. 낯선 언어로 쓰인 편지 한 통이 당신의 세상을 얼마나 넓혀줄지 상상해보세요.

---

*Lettie와 함께 언어의 장벽을 넘어 마음을 나누는 친구를 만나보세요.*
        `,
        titleEn: 'Beyond Language Exchange to True Friendship: Gifts from Penpal',
        descriptionEn: 'Beyond simply learning languages, how to share deep friendships with friends from around the world. Introducing the process from language exchange partner to lifelong friend.',
        readTimeEn: '5 min',
        categoryEn: 'Learning',
        contentEn: `
# Beyond Language Exchange to True Friendship: Gifts from Penpal

## Language is Just a Tool, People are the Purpose

Many people start penpalling to learn foreign languages. To improve English, practice Korean, or learn a third language. Of course, penpalling is an excellent language learning method. You can encounter vivid expressions and culture that you can't learn from textbooks.

However, if you aim only for **language skill improvement**, penpalling can quickly become boring. Because you need a **friend** to have conversations with, not a teacher who corrects grammar.

### Language Exchange Partner vs Penpal Friend

| Language Exchange Partner | Penpal Friend |
| :--- | :--- |
| Language learning is the main purpose | Communication and connection are the main purpose |
| Focus on correcting wrong expressions | Focus on content and emotions |
| Relationship maintained according to learning progress | Relationship deepens by sharing each other's lives |
| Functional relationship | Emotional relationship |

## 3 Steps Toward True Friendship

Many users met on Lettie are creating precious connections beyond language exchange. How did they become 'friends' from 'partners'?

### 1. Convey Sincerity Over Perfection

Don't worry about grammar mistakes. It's okay to use translators. What's important is your effort to convey **your thoughts and heart**.

> "Sorry my English is poor."
> "Not at all! I had no problem understanding your letter. Your Korean letter written with effort was really touching."

Sincerity contained in clumsy language resonates more with the other person.

### 2. Share Stories Beyond Language

Questions like "How's the weather today?" or "What did you have for lunch?" are good, but try sharing deeper stories.

- **Values**: What is the most important value to you?
- **Dreams**: What was your childhood dream? What dream are you dreaming now?
- **Concerns**: What is troubling you these days?

Language is just a means to share each other's thoughts. Through that means, share **each other's worlds**.

### 3. Respect and Learn Each Other's Culture

Language contains the culture of that country. Try to understand not just memorizing words, but the context and culture in which those words are used.

- Talking about Korean 'jeong(情)' culture
- Sending congratulatory messages on holidays or anniversaries of the other country
- Recommending each other's food or music

Understanding culture allows you to understand the other person more deeply, and conversation topics become much richer.

## Lettie Helps Language Exchange and Friendship

Lettie helps you build true friendship beyond language barriers.

- **Translation Function**: You can comfortably write letters in your native language without fear of language.
- **Slow Communication**: You can write letters by thinking enough and looking up dictionaries without pressure for immediate answers.
- **Interest Matching**: We recommend friends with common interests beyond language learning.

## Now, Open the Door to the World

Language skills are a bonus. The real gift is **precious friends made in countries around the world**.

Start penpalling on Lettie now. Imagine how much a letter written in an unfamiliar language will broaden your world.

---

*Meet friends who share hearts beyond language barriers with Lettie.*
        `
    },
    'digital-detox-slow-living': {
        id: 'digital-detox-slow-living',
        title: '디지털 디톡스와 느린 삶: 2025년의 웰니스 트렌드',
        description: '끊임없는 알림과 정보의 홍수 속에서 나를 지키는 방법. 디지털 디톡스의 중요성과 느린 소통이 가져다주는 정신적 휴식에 대해 이야기합니다.',
        date: '2025-02-15',
        readTime: '6분',
        category: '감성',
        image: '/letter-writing.png',
        author: 'Lettie',
        keywords: ['디지털 디톡스', '느린 삶', '슬로우 라이프', '정신 건강', '도파민 디톡스', '아날로그 감성', '휴식', '마음 챙김'],
        keywordsEn: ['slow living', 'digital wellness', 'mindful living', 'wellness trend 2026'],
        content: `
# 디지털 디톡스와 느린 삶: 2025년의 웰니스 트렌드

## 우리는 너무 연결되어 있습니다

스마트폰을 손에서 놓지 못하는 일상. 아침에 눈을 뜨자마자 SNS를 확인하고, 잠들기 직전까지 유튜브를 봅니다. 끊임없이 울리는 알림, 쏟아지는 뉴스, 타인의 화려한 일상들...

우리는 역사상 그 어느 때보다 **과잉 연결(Hyper-connected)**된 시대를 살고 있습니다. 하지만 역설적이게도, 우리는 점점 더 **피로**하고 **고립**감을 느낍니다.

### 디지털 피로 증후군

- **집중력 저하**: 숏폼 콘텐츠에 익숙해져 긴 글을 읽거나 깊이 생각하기 어려워짐 (팝콘 브레인)
- **수면 장애**: 블루라이트와 도파민 과다 분비로 인한 불면증
- **비교 우울**: 타인의 편집된 일상과 나의 현실을 비교하며 느끼는 박탈감
- **포모(FOMO) 증후군**: 나만 흐름을 놓치고 있는 것 같은 불안감

## 디지털 디톡스, 선택이 아닌 필수

2025년, **디지털 디톡스(Digital Detox)**는 단순한 유행을 넘어 생존을 위한 필수적인 라이프스타일로 자리 잡고 있습니다. 잠시 로그아웃하는 것만으로도 우리 뇌와 마음은 큰 휴식을 얻습니다.

### 일상 속 디지털 디톡스 실천법

1.  **알림 끄기**: 꼭 필요한 연락을 제외한 모든 앱 알림을 꺼두세요.
2.  **침실에 폰 두지 않기**: 잠들기 1시간 전부터는 스마트폰을 멀리하고 독서나 명상을 하세요.
3.  **스크린 프리 존(Screen-free Zone)**: 식탁이나 화장실 등 특정 공간에서는 스마트폰 사용을 금지하세요.
4.  **아날로그 취미 갖기**: 필사, 그림 그리기, 산책, 요리 등 손을 움직이는 활동을 하세요.

## 느린 소통이 주는 치유

디지털 디톡스의 핵심은 **속도를 늦추는 것**입니다. 그리고 인간관계에서도 속도를 늦출 필요가 있습니다.

'읽씹'에 상처받고, 즉각적인 답장을 강요받는 메신저 대화에서 벗어나 보세요. **느린 소통(Slow Communication)**은 관계의 질을 바꿉니다.

### Lettie가 제안하는 느린 소통의 가치

Lettie는 의도적으로 **불편함**과 **기다림**을 설계했습니다.

- **즉시 전송되지 않음**: 편지가 가는 데 시간이 걸립니다.
- **긴 호흡의 글**: 짧은 단답형 메시지가 아닌, 긴 호흡의 편지를 주고받습니다.
- **기다림의 설렘**: 답장이 언제 올지 모르는 기다림은 불안이 아닌 설렘이 됩니다.

이 느린 과정 속에서 우리는 상대방을 온전히 생각하고, 나 자신의 내면을 들여다보게 됩니다.

> "Lettie를 하면서 스마트폰을 보는 시간이 줄었어요. 대신 어떤 이야기를 쓸까 고민하며 산책하는 시간이 늘었죠. 답장을 기다리는 며칠 동안 마음이 훨씬 편안해졌어요." - 사용자 후기

## 로그아웃, 그리고 진짜 세상으로 로그인

잠시 화면을 끄고 고개를 들어보세요. 창밖의 풍경, 사랑하는 사람의 눈빛, 따뜻한 커피의 향기... 진짜 세상은 스크린 밖에 있습니다.

디지털 세상의 소음을 잠시 끄고, **Lettie**와 함께 느린 소통의 평온함을 느껴보세요. 당신의 마음에도 쉼표가 필요합니다.

---

*지금 스마트폰을 잠시 내려놓고, 마음을 담은 편지 한 통을 써보는 건 어떨까요?*
        `,
        titleEn: 'Digital Detox and Slow Living: 2025 Wellness Trend',
        descriptionEn: 'How to protect yourself amidst endless notifications and floods of information. Discussing the importance of digital detox and the mental rest that slow communication brings.',
        readTimeEn: '6 min',
        categoryEn: 'Emotional',
        contentEn: `
# Digital Detox and Slow Living: 2025 Wellness Trend

## We Are Too Connected

Daily life where we can't put down smartphones. Checking SNS as soon as we wake up in the morning, watching YouTube until just before falling asleep. Constantly ringing notifications, pouring news, others' glamorous daily lives...

We are living in a **hyper-connected** era more than ever in history. But paradoxically, we feel increasingly **tired** and **isolated**.

### Digital Fatigue Syndrome

- **Decreased Concentration**: Getting used to short-form content makes it difficult to read long texts or think deeply (Popcorn Brain)
- **Sleep Disorders**: Insomnia due to blue light and excessive dopamine secretion
- **Comparison Depression**: Feeling of deprivation from comparing others' edited daily lives with my reality
- **FOMO Syndrome**: Anxiety that I'm the only one missing the flow

## Digital Detox, Not a Choice but a Necessity

In 2025, **Digital Detox** is establishing itself as an essential lifestyle for survival beyond a simple trend. Just logging out for a moment gives our brain and mind great rest.

### Daily Digital Detox Practices

1. **Turn Off Notifications**: Turn off all app notifications except for absolutely necessary contacts.
2. **No Phone in Bedroom**: Stay away from smartphones 1 hour before sleep and read or meditate.
3. **Screen-free Zone**: Prohibit smartphone use in certain spaces like dining tables or bathrooms.
4. **Have Analog Hobbies**: Do activities that move your hands like calligraphy, drawing, walking, cooking.

## Healing Through Slow Communication

The core of digital detox is **slowing down**. And we need to slow down in human relationships too.

Get away from messenger conversations where you're hurt by being 'read but ignored' and forced to reply immediately. **Slow Communication** changes the quality of relationships.

### Value of Slow Communication Proposed by Lettie

Lettie intentionally designed **inconvenience** and **waiting**.

- **Not Sent Immediately**: Letters take time to arrive.
- **Long-breath Writing**: Exchange long-breath letters, not short one-word messages.
- **Excitement of Waiting**: Waiting without knowing when a reply will come becomes excitement, not anxiety.

In this slow process, we fully think about the other person and look into our own inner self.

> "Since using Lettie, I spend less time looking at my smartphone. Instead, I spend more time walking thinking about what story to write. My mind became much more comfortable during the days waiting for a reply." - User Review

## Log Out, and Log In to the Real World

Turn off the screen for a moment and lift your head. The scenery outside the window, the eyes of loved ones, the scent of warm coffee... The real world is outside the screen.

Turn off the noise of the digital world for a moment and feel the peace of slow communication with **Lettie**. Your mind also needs a comma.

---

*How about putting down your smartphone for a moment and writing a letter with your heart?*
        `
    },
    'cultural-understanding-global-etiquette': {
        id: 'cultural-understanding-global-etiquette',
        title: '다름을 이해하는 즐거움: 글로벌 펜팔 에티켓과 문화 차이',
        description: '세계 각국의 친구들과 소통하며 겪게 되는 문화적 차이와 에티켓. 서로 다름을 인정하고 존중하며 더 넓은 세상을 만나는 방법.',
        date: '2025-02-20',
        readTime: '7분',
        category: '문화',
        image: '/brand-screen.png',
        author: 'Lettie',
        keywords: ['문화 차이', '글로벌 에티켓', '다문화 이해', '세계 문화', '펜팔 매너', '해외 친구', '문화 교류', '글로벌 마인드'],
        keywordsEn: ['cultural understanding', 'global etiquette', 'cross cultural communication', 'cultural differences'],
        content: `
# 다름을 이해하는 즐거움: 글로벌 펜팔 에티켓과 문화 차이

## 세계는 넓고 문화는 다양합니다

Lettie를 통해 지구 반대편에 사는 친구와 편지를 주고받다 보면, 깜짝 놀라는 순간들이 있습니다.

"왜 답장이 이렇게 늦지?"
"이런 질문은 실례가 아닌가?"
"표현이 너무 직설적인 거 아니야?"

이 모든 것은 **문화적 차이**에서 비롯됩니다. '틀린' 것이 아니라 '다른' 것이죠. 이 다름을 이해하는 과정이야말로 글로벌 펜팔의 진짜 묘미입니다.

## 흥미로운 문화 차이 사례들

### 1. 시간 관념 (Time Perception)

- **라틴 아메리카, 남유럽**: '마냐나(Mañana, 내일)' 정신이 있습니다. 약속 시간에 조금 늦거나 답장이 늦는 것에 대해 관대합니다. 여유를 즐기는 문화죠.
- **북유럽, 독일, 일본**: 시간 약속을 매우 중요하게 생각합니다. 늦는 것을 무례하다고 여길 수 있습니다.

### 2. 소통 방식 (Communication Style)

- **미국, 서구권**: 직설적이고 솔직하게 표현하는 것을 선호합니다. 자신의 의견을 명확히 말하는 것이 미덕입니다.
- **아시아, 중동**: 간접적이고 우회적인 표현을 많이 사용합니다. 상대방의 체면을 고려하고 조화를 중요시합니다.

### 3. 프라이버시와 주제 (Privacy & Topics)

- **유럽**: 처음부터 나이, 결혼 여부, 직업 등 개인적인 신상 정보를 묻는 것을 실례라고 생각할 수 있습니다. 날씨, 취미, 여행 등 가벼운 주제로 시작하는 것이 좋습니다.
- **한국, 아시아**: 나이를 묻는 것이 호칭 정리를 위해 자연스러운 과정일 수 있지만, 서구권 친구들에게는 당황스러울 수 있습니다.

## 글로벌 펜팔을 위한 필수 에티켓

서로 다른 문화를 가진 친구와 오해 없이 소통하기 위해 지켜야 할 에티켓들을 소개합니다.

### 1. 열린 마음 갖기 (Open Mind)

나의 기준이 정답이 아님을 기억하세요. "우리나라에서는 안 그러는데?"라는 생각보다 "아, 너희 나라에서는 그렇구나!"라고 받아들이는 자세가 필요합니다.

### 2. 종교와 정치 주제 주의하기

친해지기 전까지는 종교나 정치처럼 민감할 수 있는 주제는 피하는 것이 좋습니다. 서로의 다름이 갈등으로 번질 수 있기 때문입니다.

### 3. 시차 배려하기

상대방의 나라와 시차가 있다는 것을 기억하세요. 내가 편지를 보낸 시간이 상대방에게는 한밤중일 수 있습니다. 답장이 바로 오지 않더라도 느긋하게 기다려주세요.

### 4. 질문하고 경청하기

상대방의 문화에 대해 모르는 것이 있다면 솔직하게 물어보세요.

> "너희 나라에서는 새해를 어떻게 보내?"
> "이런 상황에서는 어떻게 말하는 게 예의야?"

자신의 문화를 존중하고 궁금해하는 친구를 싫어할 사람은 없습니다.

## 다름이 우리를 성장시킵니다

문화적 차이를 경험하면서 우리는 **세상을 바라보는 시야**를 넓히게 됩니다. 나와 다른 생각, 다른 삶의 방식이 존재한다는 것을 깨닫고, 다양성을 포용하는 **글로벌 시민**으로 성장하게 되죠.

Lettie는 단순한 펜팔 앱이 아닙니다. **다양한 문화가 만나고 섞이는 거대한 용광로**입니다.

지금 Lettie에서 전 세계의 다양한 문화를 만나보세요. 다름을 이해하는 순간, 세상은 더 흥미롭고 아름다워집니다.

---

*Lettie와 함께 편견 없는 세상, 경계 없는 우정을 만들어가세요.*
        `,
        titleEn: 'The Joy of Understanding Differences: Global Penpal Etiquette and Cultural Differences',
        descriptionEn: 'Cultural differences and etiquette encountered while communicating with friends from around the world. How to meet a broader world by acknowledging and respecting differences.',
        readTimeEn: '7 min',
        categoryEn: 'Culture',
        contentEn: `
# The Joy of Understanding Differences: Global Penpal Etiquette and Cultural Differences

## The World is Wide and Cultures are Diverse

When exchanging letters with friends living on the other side of the earth through Lettie, there are moments of surprise.

"Why is the reply so late?"
"Isn't this question rude?"
"Isn't the expression too direct?"

All of this comes from **cultural differences**. It's not 'wrong' but 'different'. The process of understanding these differences is the real charm of global penpalling.

## Interesting Cultural Difference Cases

### 1. Time Perception

- **Latin America, Southern Europe**: There's a 'Mañana (tomorrow)' spirit. They are tolerant of being a little late for appointments or delayed replies. It's a culture that enjoys leisure.
- **Northern Europe, Germany, Japan**: Time commitments are taken very seriously. Being late can be considered rude.

### 2. Communication Style

- **USA, Western countries**: They prefer to express directly and honestly. Clearly stating one's opinion is a virtue.
- **Asia, Middle East**: They use many indirect and roundabout expressions. They consider the other person's face and value harmony.

### 3. Privacy & Topics

- **Europe**: Asking personal information like age, marital status, occupation from the beginning can be considered rude. It's better to start with light topics like weather, hobbies, travel.
- **Korea, Asia**: Asking age may be a natural process for organizing how to address someone, but it can be confusing for Western friends.

## Essential Etiquette for Global Penpalling

Here are etiquettes to follow to communicate without misunderstanding with friends from different cultures.

### 1. Have an Open Mind

Remember that your standards are not the answer. Rather than thinking "We don't do that in our country?", you need an attitude of accepting "Oh, that's how it is in your country!"

### 2. Be Careful with Religion and Politics Topics

Until you become close, it's better to avoid sensitive topics like religion or politics. Differences between each other can turn into conflicts.

### 3. Be Considerate of Time Differences

Remember that there's a time difference with the other person's country. The time I sent the letter might be the middle of the night for the other person. Even if a reply doesn't come right away, wait patiently.

### 4. Ask Questions and Listen

If there's something you don't know about the other person's culture, ask honestly.

> "How do you celebrate New Year in your country?"
> "What's the polite way to say this in such situations?"

No one dislikes a friend who respects and is curious about their culture.

## Differences Make Us Grow

By experiencing cultural differences, we broaden **our perspective of the world**. We realize that different thoughts and different ways of life exist, and we grow into **global citizens** who embrace diversity.

Lettie is not just a penpal app. It's **a huge melting pot where diverse cultures meet and mix**.

Meet diverse cultures from around the world on Lettie now. The moment you understand differences, the world becomes more interesting and beautiful.

---

*Create a world without prejudice, friendship without boundaries with Lettie.*
        `
    },
    'digital-detox-penpal': {
        id: 'digital-detox-penpal',
        title: '디지털 디톡스와 펜팔: SNS 피로를 치유하는 느린 소통',
        titleEn: 'Digital Detox and Pen Pals: Healing Social Media Fatigue Through Slow Communication',
        description: 'SNS의 끊임없는 알림과 비교에서 벗어나 진정한 연결을 찾는 방법. 펜팔이 디지털 피로를 치유하고 정신 건강을 회복하는 데 도움이 되는 이유.',
        descriptionEn: 'Escape the endless notifications and comparisons of social media to find genuine connection. Why pen pals help heal digital fatigue and restore mental well-being.',
        date: '2025-11-30',
        readTime: '7분',
        readTimeEn: '7 min',
        category: '감성',
        categoryEn: 'Emotional',
        image: '/letter-writing.png',
        author: 'Lettie',
        keywords: ['디지털 디톡스', 'SNS 피로', '펜팔', '정신 건강', '느린 소통', '소셜미디어 휴식', '의미있는 연결', '마음 챙김', 'digital detox', 'social media fatigue', 'mental health'],
        keywordsEn: ['digital detox', 'social media fatigue', 'slow communication', 'pen pal healing'],
        content: `
# 디지털 디톡스와 펜팔: SNS 피로를 치유하는 느린 소통

## SNS 피로증후군, 당신도 겪고 있나요?

하루에 몇 번이나 스마트폰을 확인하시나요? 연구에 따르면 평균적으로 우리는 **하루 150번 이상** 스마트폰을 확인합니다.

### SNS 피로의 증상들

- 인스타그램을 보면 다른 사람 삶이 더 행복해 보입니다
- 좋아요 수에 일희일비합니다
- 알림이 없으면 불안합니다
- 의미 없이 피드를 스크롤하고 있습니다
- 온라인 친구는 많지만 외롭습니다

**이것이 바로 '디지털 피로증후군'입니다.**

## 왜 SNS가 우리를 지치게 할까요?

### 1. 끊임없는 비교

SNS는 남의 **하이라이트 릴**입니다. 하지만 우리는 그것을 현실로 착각하고 자신과 비교합니다.

### 2. 즉각적인 반응 압박

메시지에 빠르게 답장해야 한다는 압박, 읽씹에 대한 두려움, 24시간 연결되어 있어야 한다는 부담.

### 3. 얕은 연결의 홍수

수백 명의 온라인 친구, 하지만 진정한 대화는 몇 번인가요?

### 4. 정보 과부하

끊임없이 쏟아지는 정보, 뉴스, 콘텐츠... 뇌가 지쳐갑니다.

## 펜팔: 디지털 시대의 해독제

펜팔은 SNS와 정반대의 경험을 제공합니다.

### 비교 대신 이해

펜팔에서는 **겉모습이 아닌 내면**을 나눕니다. 사진이나 좋아요 대신 생각과 감정, 이야기를 공유합니다.

### 압박 대신 여유

**답장에 시간을 가져도 됩니다.** 하루, 이틀, 심지어 일주일이 지나도 괜찮습니다. 이 여유가 진정한 소통을 가능하게 합니다.

### 양보다 질

한 명의 펜팔과의 깊은 대화가 수백 개의 얕은 댓글보다 더 의미 있습니다.

### 정보 대신 연결

뉴스와 밈 대신 **한 사람의 진솔한 이야기**를 듣습니다.

## 디지털 디톡스로서의 펜팔

Lettie에서 펜팔을 시작하면 자연스럽게 디지털 디톡스가 됩니다.

### 1. 알림 없는 평화

새 편지가 오면 알림이 옵니다. 하지만 **하루에 수십 번이 아닙니다.** 편지는 천천히 오고, 천천히 읽고, 천천히 답장합니다.

### 2. 비교 없는 순수한 연결

프로필 사진도, 팔로워 수도, 좋아요도 없습니다. 오직 **글로 나누는 진심**만 있습니다.

### 3. 의미 있는 시간 사용

피드를 무한 스크롤하는 대신, 한 통의 편지를 정성스럽게 씁니다. 이 시간이 **마음을 채워줍니다.**

## 펜팔이 정신 건강에 좋은 이유

### 글쓰기 치료 효과

편지를 쓰는 행위 자체가 **일기 쓰기**와 비슷한 효과를 줍니다. 생각을 정리하고, 감정을 표현하면서 마음이 가벼워집니다.

### 기다림의 명상

답장을 기다리는 시간은 **마음챙김**의 기회입니다. 조급해하지 않고, 현재에 머무르는 연습을 하게 됩니다.

### 진정한 연결의 충족감

진심이 담긴 편지를 받았을 때의 기쁨은 100개의 좋아요와 비교할 수 없습니다.

## 지금 시작하는 디지털 디톡스

완전히 SNS를 끊을 필요는 없습니다. 대신, **느린 소통의 공간**을 만들어보세요.

### 실천 방법

1. **하루 30분** SNS 대신 편지 쓰기
2. 아침에 스마트폰 대신 **받은 편지 읽기**
3. 잠자기 전 **내일 보낼 편지** 생각하기
4. 주말에는 **SNS 대신 펜팔**에 집중하기

## 느린 소통이 주는 선물

빠른 세상에서 느리게 소통하는 것은 **자신에게 주는 선물**입니다.

- 불안이 줄어듭니다
- 비교가 사라집니다
- 진짜 연결을 느낍니다
- 마음이 평화로워집니다

**Lettie에서 디지털 피로를 치유하는 느린 소통을 시작해보세요.**

---

*진정한 연결은 느림에서 시작됩니다. Lettie와 함께 디지털 디톡스를 경험하세요.*
        `,
        contentEn: `
# Digital Detox and Pen Pals: Healing Social Media Fatigue Through Slow Communication

## Are You Experiencing Social Media Fatigue?

How many times a day do you check your smartphone? Studies show that on average, we check our phones **more than 150 times a day**.

### Symptoms of Social Media Fatigue

- Other people's lives look happier on Instagram
- You feel anxious about the number of likes
- You feel uneasy without notifications
- You scroll through feeds aimlessly
- You have many online friends but feel lonely

**This is 'digital fatigue syndrome'.**

## Why Does Social Media Exhaust Us?

### 1. Constant Comparison

Social media is everyone's **highlight reel**. But we mistake it for reality and compare ourselves to it.

### 2. Pressure for Immediate Response

The pressure to reply quickly to messages, fear of being left on read, the burden of being connected 24/7.

### 3. Flood of Shallow Connections

Hundreds of online friends, but how many genuine conversations?

### 4. Information Overload

Endless streams of information, news, content... Our brains are getting exhausted.

## Pen Pals: The Antidote to the Digital Age

Pen pals offer the opposite experience of social media.

### Understanding Instead of Comparison

In pen pal relationships, you share **your inner self, not your appearance**. Instead of photos and likes, you share thoughts, feelings, and stories.

### Leisure Instead of Pressure

**You can take your time to reply.** A day, two days, even a week is fine. This leisure enables genuine communication.

### Quality Over Quantity

A deep conversation with one pen pal is more meaningful than hundreds of shallow comments.

### Connection Instead of Information

Instead of news and memes, you hear **one person's sincere story**.

## Pen Pals as Digital Detox

Starting a pen pal on Lettie naturally becomes a digital detox.

### 1. Peace Without Notifications

You get notified when a new letter arrives. But **not dozens of times a day.** Letters come slowly, are read slowly, and are answered slowly.

### 2. Pure Connection Without Comparison

No profile pictures, no follower counts, no likes. Only **sincere words shared through letters**.

### 3. Meaningful Use of Time

Instead of infinite scrolling through feeds, you carefully write one letter. This time **fills your heart**.

## Why Pen Pals Are Good for Mental Health

### Writing Therapy Effect

The act of writing letters has effects similar to **journaling**. Organizing thoughts and expressing emotions lightens the mind.

### Meditation of Waiting

The time waiting for a reply is an opportunity for **mindfulness**. You practice staying present without being impatient.

### Fulfillment of Genuine Connection

The joy of receiving a heartfelt letter cannot be compared to 100 likes.

## Start Your Digital Detox Now

You don't need to quit social media completely. Instead, create a **space for slow communication**.

### How to Practice

1. **30 minutes a day** writing letters instead of scrolling social media
2. Read received letters in the morning **instead of checking your phone**
3. Think about **the letter you'll send tomorrow** before bed
4. Focus on **pen pals instead of social media** on weekends

## The Gift of Slow Communication

Communicating slowly in a fast world is **a gift to yourself**.

- Anxiety decreases
- Comparison disappears
- You feel genuine connection
- Your mind becomes peaceful

**Start healing your digital fatigue with slow communication on Lettie.**

---

*Genuine connection starts with slowness. Experience digital detox with Lettie.*
        `
    },
    'international-friendship-guide': {
        id: 'international-friendship-guide',
        title: '외국인 친구 사귀기 완벽 가이드: 글로벌 펜팔로 세계와 연결되기',
        titleEn: 'The Complete Guide to Making International Friends: Connecting with the World Through Global Pen Pals',
        description: '외국인 친구를 사귀고 싶지만 어떻게 시작해야 할지 모르시나요? 펜팔 앱으로 전 세계 친구를 만나고 진정한 글로벌 우정을 쌓는 방법을 알려드립니다.',
        descriptionEn: 'Want to make foreign friends but don\'t know where to start? Learn how to meet friends from around the world and build genuine global friendships through a pen pal app.',
        date: '2025-11-30',
        readTime: '8분',
        readTimeEn: '8 min',
        category: '가이드',
        categoryEn: 'Guide',
        image: '/world-connection.png',
        author: 'Lettie',
        keywords: ['외국인 친구', '국제 펜팔', '글로벌 친구 사귀기', '외국 친구 만들기', '펜팔 앱', '문화 교류', 'international friends', 'global pen pals', 'cultural exchange', 'make foreign friends'],
        keywordsEn: ['international friends guide', 'how to make foreign friends', 'global pen pal', 'friendship across borders'],
        content: `
# 외국인 친구 사귀기 완벽 가이드: 글로벌 펜팔로 세계와 연결되기

## 왜 외국인 친구가 필요할까요?

세계화 시대, 외국인 친구를 사귀는 것은 더 이상 특별한 일이 아닙니다. 하지만 그 가치는 여전히 특별합니다.

### 외국인 친구가 주는 것들

- **넓어지는 시야**: 다른 관점에서 세상을 볼 수 있습니다
- **언어 실력 향상**: 진짜 원어민과 대화하며 배웁니다
- **문화 이해**: 책이 아닌 실제 경험으로 문화를 배웁니다
- **글로벌 네트워크**: 해외여행이나 유학 시 든든한 친구가 생깁니다
- **새로운 기회**: 예상치 못한 곳에서 기회가 열립니다

## 외국인 친구 사귀기가 어려운 이유

많은 사람들이 외국인 친구를 원하지만 실패합니다. 왜일까요?

### 흔한 실패 원인

1. **어디서 만나야 할지 모른다**: 일상에서 외국인을 만나기 어렵습니다
2. **언어 장벽**: "영어가 부족해서..."라는 두려움
3. **문화적 차이**: 무엇을 말해야 할지, 실례가 되지 않을지 걱정
4. **지속성 부족**: 처음엔 좋았다가 금세 연락이 끊깁니다
5. **잘못된 플랫폼**: 목적이 다른 사람들과 만남

## 펜팔이 정답인 이유

펜팔은 이 모든 문제를 해결합니다.

### 1. 전 세계 어디서나 연결

집에서도 전 세계 친구를 만날 수 있습니다. **지리적 한계가 없습니다.**

### 2. 언어 압박 없는 소통

편지는 **천천히 쓸 수 있습니다.** 사전을 찾아보고, 문장을 다듬고, 번역기의 도움을 받을 시간이 있습니다.

### 3. 깊은 관계 형성

매일 스쳐가는 대화가 아닌, **정성 들인 편지**는 깊은 유대를 만듭니다.

### 4. 목적이 같은 사람들

Lettie의 모든 사용자는 **진정한 우정**을 원합니다.

## 완벽한 첫 편지 쓰기

첫인상은 중요합니다. 펜팔에서 첫인상은 **첫 편지**입니다.

### 첫 편지에 포함할 것들

**1. 따뜻한 인사**
> "안녕하세요! 프로필을 보고 편지를 쓰게 되었어요."

**2. 자기소개**
- 이름, 나이, 사는 곳
- 직업 또는 학교
- 취미와 관심사
- 펜팔을 시작한 이유

**3. 상대방에 대한 관심**
> "음악을 좋아한다고 했는데, 어떤 장르를 가장 좋아하세요?"

**4. 열린 질문**
> "요즘 어떤 일에 관심을 갖고 계세요?"

### 피해야 할 것들

- 너무 짧은 편지 ("안녕하세요" 한 줄)
- 너무 개인적인 질문 (첫 편지부터 나이, 연애 상태 등)
- 복사-붙여넣기 느낌의 편지
- 답장하기 어려운 예/아니오 질문만

## 대화를 이어가는 방법

첫 편지 후, 어떻게 관계를 발전시킬까요?

### 대화 주제 아이디어

**일상 공유**
- 오늘 있었던 일
- 먹은 음식, 본 영화
- 계절과 날씨 이야기

**문화 교류**
- 각 나라의 명절과 기념일
- 음식 문화와 레시피
- 학교나 직장 문화 차이

**관심사 공유**
- 좋아하는 음악, 영화, 책
- 취미 활동
- 꿈과 목표

**깊은 대화**
- 인생관과 가치관
- 고민과 걱정
- 미래 계획

### 관계를 깊게 만드는 팁

1. **정기적으로 답장하기**: 일주일에 한 번이라도 꾸준히
2. **기억하기**: 상대가 말한 것을 기억하고 다음 편지에서 물어보기
3. **진솔하게 나누기**: 완벽한 모습만 보여주려 하지 말기
4. **관심 표현하기**: 상대의 이야기에 진심으로 반응하기
5. **소소한 것 공유하기**: 큰 이야기만이 아닌 일상의 작은 순간들

## 문화적 차이 극복하기

다른 문화권의 친구와 소통할 때 주의할 점들이 있습니다.

### 열린 마음 갖기

- 다르다고 해서 틀린 것이 아닙니다
- 궁금한 것은 존중하며 물어보세요
- 자신의 문화도 설명할 준비를 하세요

### 흔한 문화적 차이

- **시간 개념**: 어떤 문화는 더 느긋합니다
- **직접적 vs 간접적 표현**: 나라마다 다릅니다
- **개인적인 질문**: 어떤 문화에서는 친근함의 표시입니다
- **유머**: 문화마다 웃음 포인트가 다릅니다

## 언어 장벽 극복하기

영어가 완벽하지 않아도 괜찮습니다!

### 실용적인 팁

1. **번역기 활용**: 부끄러워하지 마세요
2. **간단하게 쓰기**: 복잡한 문장보다 명확한 문장
3. **실수 두려워하지 않기**: 대부분의 펜팔은 이해해줍니다
4. **언어 교환 제안하기**: 서로의 언어를 가르쳐주세요

## 오래 지속되는 우정 만들기

많은 펜팔이 몇 번의 편지 후 끊어집니다. 오래 가는 우정을 만들려면?

### 지속 가능한 관계의 비결

- **부담 주지 않기**: 바쁘면 짧은 편지도 괜찮아요
- **솔직하게 소통하기**: 바쁠 때 미리 말하기
- **특별한 날 챙기기**: 생일, 명절에 편지 보내기
- **실제 선물 교환**: 가끔 소소한 선물 보내기
- **장기적 관점**: 매주 연락하지 않아도 괜찮아요

## 지금 시작하세요

전 세계 친구가 당신을 기다리고 있습니다.

Lettie에서 관심사가 맞는 펜팔을 찾고, 진정한 글로벌 우정을 시작하세요.

**한 통의 편지가 인생을 바꿀 수 있습니다.**

---

*Lettie와 함께 세계로 나가세요. 당신의 글로벌 친구가 기다리고 있습니다.*
        `,
        contentEn: `
# The Complete Guide to Making International Friends: Connecting with the World Through Global Pen Pals

## Why Do You Need International Friends?

In the age of globalization, making foreign friends is no longer special. But its value remains extraordinary.

### What International Friends Give You

- **Broader perspective**: You can see the world from different viewpoints
- **Language improvement**: Learn by conversing with real native speakers
- **Cultural understanding**: Learn culture through real experience, not books
- **Global network**: Gain reliable friends for overseas travel or study
- **New opportunities**: Doors open in unexpected places

## Why Making International Friends Is Difficult

Many people want international friends but fail. Why?

### Common Reasons for Failure

1. **Don't know where to meet**: It's hard to meet foreigners in daily life
2. **Language barrier**: Fear of "My English isn't good enough..."
3. **Cultural differences**: Worry about what to say or being rude
4. **Lack of consistency**: Starts well but contact fades quickly
5. **Wrong platform**: Meeting people with different purposes

## Why Pen Pals Are the Answer

Pen pals solve all these problems.

### 1. Connect from Anywhere in the World

You can meet friends from around the world from home. **No geographical limits.**

### 2. Communication Without Language Pressure

Letters can be **written slowly.** You have time to look up words, polish sentences, and get help from translators.

### 3. Deep Relationship Formation

Rather than passing conversations every day, **carefully written letters** create deep bonds.

### 4. People with the Same Purpose

All Lettie users want **genuine friendship.**

## Writing the Perfect First Letter

First impressions matter. In pen pals, the first impression is your **first letter**.

### What to Include in Your First Letter

**1. Warm Greeting**
> "Hi! I saw your profile and decided to write to you."

**2. Self-Introduction**
- Name, age, where you live
- Job or school
- Hobbies and interests
- Why you started pen pals

**3. Interest in the Other Person**
> "You mentioned you like music - what genre do you like most?"

**4. Open Questions**
> "What are you interested in these days?"

### What to Avoid

- Too short letters (just "Hello")
- Too personal questions from the first letter
- Copy-paste feeling letters
- Only yes/no questions that are hard to answer

## How to Keep the Conversation Going

After the first letter, how do you develop the relationship?

### Conversation Topic Ideas

**Daily Sharing**
- What happened today
- Food you ate, movies you watched
- Seasons and weather

**Cultural Exchange**
- Holidays and celebrations in each country
- Food culture and recipes
- School or work culture differences

**Sharing Interests**
- Favorite music, movies, books
- Hobbies
- Dreams and goals

**Deep Conversations**
- Life philosophy and values
- Worries and concerns
- Future plans

### Tips for Deepening Relationships

1. **Reply regularly**: Consistently, even once a week
2. **Remember**: Remember what they said and ask about it in the next letter
3. **Share genuinely**: Don't try to show only your perfect side
4. **Express interest**: Respond sincerely to their stories
5. **Share small things**: Not just big stories, but small daily moments

## Overcoming Cultural Differences

There are things to be careful about when communicating with friends from different cultures.

### Keep an Open Mind

- Different doesn't mean wrong
- Ask with respect when curious
- Be ready to explain your own culture too

### Common Cultural Differences

- **Time concepts**: Some cultures are more relaxed
- **Direct vs. indirect expression**: Varies by country
- **Personal questions**: In some cultures, it's a sign of friendliness
- **Humor**: Different cultures have different funny points

## Overcoming Language Barriers

It's okay if your English isn't perfect!

### Practical Tips

1. **Use translators**: Don't be embarrassed
2. **Write simply**: Clear sentences over complex ones
3. **Don't fear mistakes**: Most pen pals understand
4. **Propose language exchange**: Teach each other your languages

## Creating Lasting Friendships

Many pen pals break off after a few letters. How to create lasting friendship?

### Secrets of Sustainable Relationships

- **Don't pressure**: Short letters are fine when busy
- **Communicate honestly**: Tell them in advance when you're busy
- **Remember special days**: Send letters on birthdays and holidays
- **Exchange real gifts**: Send small gifts occasionally
- **Long-term perspective**: It's okay not to contact every week

## Start Now

Friends from around the world are waiting for you.

Find a pen pal with matching interests on Lettie and start a genuine global friendship.

**One letter can change your life.**

---

*Go global with Lettie. Your global friends are waiting.*
        `
    },
    'self-growth-through-penpal': {
        id: 'self-growth-through-penpal',
        title: '펜팔로 발견하는 나: 글쓰기를 통한 자기 성찰과 성장',
        titleEn: 'Discovering Yourself Through Pen Pals: Self-Reflection and Growth Through Writing',
        description: '펜팔은 단순한 친구 사귀기가 아닙니다. 편지를 쓰면서 자신을 되돌아보고, 생각을 정리하며, 내면의 성장을 경험하는 여정입니다.',
        descriptionEn: 'Pen pals are more than just making friends. It\'s a journey of looking back at yourself, organizing thoughts, and experiencing inner growth through writing letters.',
        date: '2025-11-30',
        readTime: '7분',
        readTimeEn: '7 min',
        category: '감성',
        categoryEn: 'Emotional',
        image: '/letter-writing.png',
        author: 'Lettie',
        keywords: ['자기 성찰', '펜팔', '글쓰기 치료', '자기 발견', '내면 성장', '저널링', '마음 치유', 'self-reflection', 'journaling', 'personal growth', 'writing therapy'],
        keywordsEn: ['self reflection through writing', 'personal growth', 'journaling and letters', 'writing for self discovery'],
        content: `
# 펜팔로 발견하는 나: 글쓰기를 통한 자기 성찰과 성장

## 편지 쓰기는 나를 만나는 시간

마지막으로 자신에 대해 깊이 생각해본 것이 언제인가요?

바쁜 일상 속에서 우리는 **자신을 잊고 삽니다.** 해야 할 일에 쫓기고, 남의 기대에 맞추고, 정작 '나'는 어디에 있는지 모릅니다.

**펜팔은 나를 다시 만나게 해줍니다.**

## 왜 글쓰기가 자기 성찰에 효과적인가

### 심리학적 효과

연구에 따르면 **표현적 글쓰기**는:
- 스트레스를 줄여줍니다
- 감정을 정리하게 해줍니다
- 자기 이해를 높입니다
- 트라우마 회복에 도움이 됩니다
- 전반적인 웰빙을 향상시킵니다

### 편지 쓰기의 특별함

일반적인 일기와 다르게, 펜팔은 **누군가에게 쓰는 글**입니다.

- 자신을 **객관적으로 설명**해야 합니다
- 생각을 **명확하게 정리**해야 합니다
- 상대가 이해할 수 있게 **표현을 가다듬어야** 합니다

이 과정에서 자연스럽게 **자기 성찰**이 일어납니다.

## 펜팔을 통한 자기 발견

### 1. "나는 누구인가" 질문하기

펜팔 친구에게 자신을 소개할 때, 진지하게 생각하게 됩니다.

> 나를 정의하는 것은 무엇일까?
> 내가 중요하게 생각하는 가치는?
> 나의 꿈과 목표는?
> 나를 행복하게 하는 것은?

**남에게 설명하기 위해 나를 이해해야 합니다.**

### 2. 생각 정리하기

머릿속에 떠도는 생각들이 글로 옮겨지면 **명확해집니다.**

- 막연한 불안이 → 구체적인 걱정이 됩니다
- 뒤섞인 감정이 → 하나씩 분리됩니다
- 복잡한 상황이 → 정리되어 보입니다

### 3. 다른 관점 얻기

펜팔 친구의 답장은 **새로운 시각**을 줍니다.

> "그렇게 생각해본 적이 없었어요!"

내가 당연하게 여긴 것들이 다른 사람 눈에는 다르게 보입니다. 이 과정에서 **고정관념이 깨지고** 생각이 확장됩니다.

### 4. 성장 기록하기

편지들은 **성장의 기록**이 됩니다.

1년 전 편지를 읽어보면:
- 그때의 고민이 보입니다
- 지금 얼마나 달라졌는지 알게 됩니다
- 앞으로의 방향이 보입니다

## 자기 성찰을 위한 편지 쓰기 팁

### 솔직하게 쓰기

완벽한 모습만 보여주려 하지 마세요.

- 실패한 이야기도 나누세요
- 고민과 두려움도 표현하세요
- 모르겠다는 것도 인정하세요

**진솔함이 깊은 연결과 성찰을 만듭니다.**

### 질문하기

편지에 질문을 포함하세요.

- "당신은 어떻게 생각하세요?"
- "비슷한 경험이 있으신가요?"
- "이런 상황에서 어떻게 하실 건가요?"

상대의 답변이 **새로운 생각의 재료**가 됩니다.

### 감사 표현하기

일상의 작은 것들에 감사를 표현해보세요.

- 오늘 맛있었던 점심
- 도움을 준 동료
- 좋은 날씨

**감사를 글로 쓰면 행복감이 높아집니다.**

### 미래에 대해 쓰기

꿈과 목표에 대해 써보세요.

- 1년 후의 나
- 이루고 싶은 것들
- 가보고 싶은 곳

**글로 쓰면 더 구체화되고 실현 가능해집니다.**

## 펜팔이 가르쳐주는 것들

### 인내와 기다림

답장을 기다리며 배우는 **인내심.** 즉각적인 만족을 추구하는 세상에서 귀한 덕목입니다.

### 경청의 자세

상대의 편지를 읽으며 배우는 **경청.** 상대를 진정으로 이해하려는 노력이 관계를 깊게 합니다.

### 표현의 중요성

내 마음을 전하려 노력하며 배우는 **표현력.** 말하지 않으면 모른다는 것, 표현해야 전해진다는 것.

### 차이에 대한 존중

다른 배경의 친구와 소통하며 배우는 **다양성 존중.** 다름은 틀림이 아니라 풍요로움입니다.

## 펜팔, 나를 위한 선물

펜팔은 친구를 사귀는 것 이상입니다.

**나를 이해하고,**
**나를 표현하고,**
**나를 성장시키는 여정입니다.**

오늘 첫 편지를 써보세요. 그 편지는 누군가에게 가는 동시에, **나에게 돌아옵니다.**

## 시작하는 방법

1. Lettie에서 관심사가 비슷한 펜팔을 찾으세요
2. 첫 편지에서 자신을 소개하세요
3. 편지를 쓸 때마다 자신에게 물어보세요: "나는 정말 이렇게 생각하나?"
4. 받은 편지에서 새로운 관점을 찾아보세요
5. 시간이 지난 후 예전 편지를 다시 읽어보세요

**한 통의 편지가 인생을 바꿀 수 있습니다.**

---

*Lettie에서 나를 만나는 여정을 시작하세요. 편지는 세상으로 가는 창이자, 나를 비추는 거울입니다.*
        `,
        contentEn: `
# Discovering Yourself Through Pen Pals: Self-Reflection and Growth Through Writing

## Writing Letters Is Time to Meet Yourself

When was the last time you thought deeply about yourself?

In our busy daily lives, we **live forgetting ourselves.** Chased by things to do, meeting others' expectations, not knowing where 'I' really am.

**Pen pals help us meet ourselves again.**

## Why Writing Is Effective for Self-Reflection

### Psychological Effects

Research shows that **expressive writing**:
- Reduces stress
- Helps organize emotions
- Increases self-understanding
- Aids trauma recovery
- Improves overall well-being

### The Uniqueness of Letter Writing

Unlike regular journaling, pen pal letters are **written to someone.**

- You must **objectively explain** yourself
- You must **clearly organize** your thoughts
- You must **refine expressions** so others can understand

In this process, **self-reflection** naturally occurs.

## Self-Discovery Through Pen Pals

### 1. Asking "Who Am I"

When introducing yourself to a pen pal friend, you think seriously.

> What defines me?
> What values do I consider important?
> What are my dreams and goals?
> What makes me happy?

**To explain to others, you must understand yourself.**

### 2. Organizing Thoughts

Thoughts floating in your head become **clear** when written down.

- Vague anxiety → becomes specific worries
- Mixed emotions → get separated one by one
- Complex situations → become organized

### 3. Gaining Different Perspectives

Your pen pal friend's reply gives you a **new perspective.**

> "I never thought of it that way!"

Things you took for granted look different through others' eyes. In this process, **stereotypes break** and thinking expands.

### 4. Recording Growth

Letters become **records of growth.**

Reading letters from a year ago:
- You see your concerns from that time
- You realize how much you've changed
- You see the direction ahead

## Letter Writing Tips for Self-Reflection

### Write Honestly

Don't try to show only your perfect side.

- Share stories of failure too
- Express worries and fears
- Admit when you don't know

**Sincerity creates deep connection and reflection.**

### Ask Questions

Include questions in your letters.

- "What do you think?"
- "Have you had similar experiences?"
- "What would you do in this situation?"

Their answers become **new thinking material.**

### Express Gratitude

Express gratitude for small things in daily life.

- A delicious lunch today
- A helpful colleague
- Nice weather

**Writing gratitude increases happiness.**

### Write About the Future

Write about dreams and goals.

- Yourself one year from now
- Things you want to achieve
- Places you want to visit

**Writing makes things more concrete and achievable.**

## What Pen Pals Teach Us

### Patience and Waiting

**Patience** learned while waiting for replies. A precious virtue in a world pursuing instant gratification.

### The Art of Listening

**Listening** learned while reading others' letters. Effort to truly understand others deepens relationships.

### The Importance of Expression

**Expression skills** learned while trying to convey your heart. That people don't know unless you speak, that feelings must be expressed to be conveyed.

### Respect for Differences

**Respecting diversity** learned while communicating with friends from different backgrounds. Difference is not wrong but richness.

## Pen Pals, A Gift to Yourself

Pen pals are more than making friends.

**It's a journey of understanding yourself,**
**expressing yourself,**
**and growing yourself.**

Write your first letter today. That letter goes to someone while **returning to yourself.**

## How to Start

1. Find a pen pal with similar interests on Lettie
2. Introduce yourself in your first letter
3. Ask yourself each time you write: "Do I really think this way?"
4. Find new perspectives in received letters
5. Reread old letters after time passes

**One letter can change your life.**

---

*Start your journey of meeting yourself on Lettie. Letters are windows to the world and mirrors reflecting yourself.*
        `
    },
    'slowly-app-alternatives': {
        id: 'slowly-app-alternatives',
        title: 'Slowly 앱 대안 찾기: 2026년 펜팔 앱 6가지 비교',
        titleEn: 'Slowly App Alternatives: 6 Pen Pal Apps Compared (2026)',
        description: 'Slowly를 쓰다가 다른 앱을 찾고 있다면. 2026년 기준 주요 펜팔 앱 6가지의 강점과 약점을 정직하게 비교합니다.',
        descriptionEn: 'Looking for something different from Slowly? An honest comparison of six pen pal apps in 2026 — what each one does well, and where each falls short.',
        date: '2026-07-31',
        readTime: '9분',
        readTimeEn: '9 min',
        category: '가이드',
        categoryEn: 'Guide',
        image: '/letter-feed.png',
        author: 'Lettie',
        keywords: ['Slowly 대안', '펜팔 앱 비교', '펜팔 앱 추천', 'InterPals', 'HelloTalk'],
        keywordsEn: ['slowly app alternatives', 'alternative to slowly', 'pen pal apps compared', 'interpals alternative', 'hellotalk alternative', 'best pen pal app 2026', 'pen pal app with translation'],
        content: `
# Slowly 앱 대안 찾기: 2026년 펜팔 앱 6가지 비교

이 글은 영어권 검색 유입을 위해 영어로 작성되었습니다.
전문은 [English version](/en/blog/slowly-app-alternatives)에서 읽을 수 있습니다.

Slowly를 쓰다가 다른 앱을 찾고 있다면. 2026년 기준 주요 펜팔 앱 6가지의 강점과 약점을 정직하게 비교합니다.
`,
        contentEn: `
# Slowly App Alternatives: 6 Pen Pal Apps Compared (2026)

Slowly did something clever. It made letters slow again — your message takes hours or days to arrive, depending on the real distance between you and the person you're writing to. That single constraint changed how people wrote. Less chatter, more thought.

But it isn't the right fit for everyone. Maybe you've hit the paywall on translations. Maybe the stamp-collecting loop stopped landing for you. Maybe you want something closer to a real relationship than a hobby.

Here's an honest look at where each option actually stands.

## 1. Slowly — the benchmark

**Best for:** people who want the delay itself to be the point.

The delivery delay is genuinely well designed. Writing to someone 9,000 km away and waiting a day for the reply changes your tone — you stop firing off one-liners.

**Where it falls short:** translation is a paid feature, and it's consumed per use. If your pen pal doesn't share a language with you, the thing you need most is the thing you keep paying for. Several users end up drafting in a separate translation app and pasting the result back in, which defeats the point.

## 2. InterPals — the largest pool

**Best for:** finding someone specific — a country, a language, an age range.

It's been running since 1998 and the user base is enormous. If you want a pen pal in Argentina who's learning Korean, someone there fits that description.

**Where it falls short:** it's a website first, and it feels like it. Moderation is thin, and the volume of low-effort first messages is high. You'll do some filtering.

## 3. HelloTalk — language practice first

**Best for:** people whose main goal is learning a language.

Native speakers correct your writing directly in the message. For deliberate practice, nothing else comes close.

**Where it falls short:** it's structured around language exchange, not friendship. Conversations often stay transactional — you correct mine, I correct yours. If you want the relationship to be the point rather than the exercise, it can feel thin.

## 4. Global Penfriends — all ages, snail mail

**Best for:** people who genuinely want physical mail.

It's one of the few places that still takes postal correspondence seriously, and it's family-friendly.

**Where it falls short:** the digital experience is dated, and physical mail means sharing your address. That's a real consideration.

## 5. Bottled — messages at random

**Best for:** low-stakes serendipity.

You throw a message into the sea and someone finds it. There's no matching, no profile browsing.

**Where it falls short:** almost nothing sticks. It's a fun idea rather than a way to build a correspondence.

## 6. Lettie — translation built in

**Best for:** writing to someone who doesn't share your language, without paying for each message.

Full disclosure: we make this one. Here's the specific thing it does differently.

Every letter and every reply translates across 28 languages, and it isn't metered. You write in Korean, they read it in Portuguese. You can view the original and the translation **side by side**, which is why a lot of people end up picking up some of their pen pal's language without setting out to.

Two other things shape how it feels:

- **No profile photos to start** — everyone shows up as a pixel character, so you form an impression of the person before you form one of their face.
- **Letters take real time to arrive** (by distance) and you write again only after a reply. No phone numbers up front.

**Where it falls short:** the user base is smaller than InterPals or Slowly. If you want a pen pal in a very specific country tonight, the larger platforms have better odds. And if you already share a language with the people you write to, the translation layer isn't doing much for you — Slowly's delay mechanic might suit you better.

## How to actually choose

Ask what's blocking you right now.

| If your problem is… | Try |
|---|---|
| Messages arrive too fast to feel like letters | Slowly |
| You can't find anyone in the country you want | InterPals |
| You want your writing corrected | HelloTalk |
| You want physical mail | Global Penfriends |
| **Language is the thing stopping you** | **Lettie** |

Most people who bounce between pen pal apps aren't looking for more features. They're looking for one correspondence that lasts longer than three messages. Pick the app that removes your specific obstacle, then write a real first letter — one that says something about you rather than "hi, how are you."

That part matters more than the app.
`
    },
    'how-to-find-a-pen-pal': {
        id: 'how-to-find-a-pen-pal',
        title: '펜팔 찾는 법: 2026년 완전 입문 가이드',
        titleEn: 'How to Find a Pen Pal in 2026: A Complete Beginner\'s Guide',
        description: '펜팔을 처음 시작하는 사람을 위한 안내. 어디서 찾고, 첫 편지에 무엇을 쓰고, 어떻게 오래 이어가는지.',
        descriptionEn: 'New to pen pals? Where to find one, what to write in your first letter, and how to keep a correspondence going past the third message.',
        date: '2026-07-31',
        readTime: '8분',
        readTimeEn: '8 min',
        category: '가이드',
        categoryEn: 'Guide',
        image: '/letter-writing.png',
        author: 'Lettie',
        keywords: ['펜팔 찾기', '펜팔 시작하기', '펜팔 입문', '외국인 친구 사귀기'],
        keywordsEn: ['how to find a pen pal', 'find a pen pal online', 'pen pal for beginners', 'how to get a pen pal', 'international pen pal', 'first pen pal letter', 'how to make foreign friends'],
        content: `
# 펜팔 찾는 법: 2026년 완전 입문 가이드

이 글은 영어권 검색 유입을 위해 영어로 작성되었습니다.
전문은 [English version](/en/blog/how-to-find-a-pen-pal)에서 읽을 수 있습니다.

펜팔을 처음 시작하는 사람을 위한 안내. 어디서 찾고, 첫 편지에 무엇을 쓰고, 어떻게 오래 이어가는지.
`,
        contentEn: `
# How to Find a Pen Pal in 2026: A Complete Beginner's Guide

Most people who try pen pals quit within two weeks. Not because they can't find anyone — finding someone is easy now — but because the first three exchanges go nowhere and it starts to feel like homework.

This guide is about getting past that.

## Where to look

**Apps built for correspondence.** Slowly, InterPals, Lettie, HelloTalk. These are where most people start, and they're the fastest route to an actual reply. Each has a different bias: Slowly toward slow delivery, InterPals toward raw numbers, HelloTalk toward language practice, Lettie toward writing across languages.

**Postal organizations.** Global Penfriends and similar groups still coordinate physical mail. Slower, more committed, and you'll be sharing a mailing address — so read the safety section below before you do.

**Interest communities.** Subreddits, hobby forums, book clubs. The correspondence starts with something concrete in common, which solves the "what do we talk about" problem before it appears.

Don't sign up for all of them. One platform, one real attempt, is worth more than five profiles you never return to.

## What to put in your profile

Be specific enough to be answerable.

"I like music, movies, and travel" gives someone nothing to respond to. "I'm relearning piano at 29 and currently failing at a Chopin nocturne" gives them a door.

Three concrete details beat a paragraph of adjectives. Mention something you're currently doing, not just something you like.

## The first letter

This is where most correspondences die. A first letter that says "Hi! How are you? What are your hobbies?" gets a matching non-answer, and then neither of you has anything to build on.

A first letter that works usually does three things:

1. **Says where you are and what it's like right now.** Not a weather report — the specific texture of your day. The bus you take. What's outside the window.
2. **Offers one real thing about you.** Something you're working through, curious about, or bad at. Vulnerability in small doses invites the same in return.
3. **Asks one question you actually want answered.** One. Not a questionnaire.

Length: 200–400 words is plenty. A wall of text on day one puts pressure on the reply.

## Keeping it alive past week two

**Answer what they wrote.** Sounds obvious. Most people write their own update and ignore the letter they just received. Quote something they said. React to it.

**Don't match energy exactly.** If their letter is short because they're busy, a warm short reply keeps it going. Punishing them with silence ends it.

**Let gaps be normal.** A reply two weeks later isn't rejection. Say "no rush" and mean it — that single line saves more correspondences than any other.

**Go one layer deeper each time.** Weather → work → what you actually think about your work → what you want instead. If you're on the same layer at letter ten as letter two, it'll fade.

## Safety, briefly

This part is not optional.

- Don't share your full name, address, workplace, or school in early letters.
- Keep it on the platform until you have a reason to move off it. Platforms have reporting tools; your personal inbox doesn't.
- Be wary of anyone who moves fast — declarations of deep feeling within a few messages, or any request involving money. This is the single most common scam pattern in pen pal communities, and it looks like romance before it looks like fraud.
- Video call before you meet, if it ever gets that far.

Some apps build the delay in for you. Lettie, for instance, makes each letter take hours to arrive and only lets you write again after a reply, which removes the awkwardness of saying no to an early request.

## What about the language barrier

You don't need fluent English to have a pen pal, and your pen pal doesn't need it either.

Some apps translate for you. On Lettie every letter translates across 28 languages, and you can read the original alongside the translation — which is how a fair number of people end up learning some of their pen pal's language by accident. HelloTalk takes the opposite approach: native speakers correct your writing directly, which is better if practice is the actual goal.

If you're using a platform without translation, writing in short plain sentences does most of the work. Your pen pal is not grading you.

## Realistic expectations

You'll write to several people before one sticks. That's normal and not a reflection on you — timing, life circumstances, and plain chemistry decide most of it.

One correspondence that lasts a year is the goal. Not twenty that last a week.

Start with one letter today.
`
    },
    'writing-across-languages': {
        id: 'writing-across-languages',
        title: '언어가 다른 사람에게 편지 쓰는 법',
        titleEn: 'How to Write to Someone Who Doesn\'t Speak Your Language',
        description: '영어가 유창하지 않아도 펜팔은 가능합니다. 번역을 활용하는 법과 오해를 줄이는 글쓰기 요령.',
        descriptionEn: 'You don\'t need fluent English to have a pen pal abroad. How to use translation well, and how to write so meaning survives the trip.',
        date: '2026-07-31',
        readTime: '7분',
        readTimeEn: '7 min',
        category: '가이드',
        categoryEn: 'Guide',
        image: '/conversation-detail.png',
        author: 'Lettie',
        keywords: ['언어 장벽', '번역 펜팔', '영어 못해도 펜팔', '외국인과 소통'],
        keywordsEn: ['pen pal app with translation', 'write to someone who speaks another language', 'language barrier pen pal', 'penpal without speaking english', 'translated letters', 'learn a language through letters'],
        content: `
# 언어가 다른 사람에게 편지 쓰는 법

이 글은 영어권 검색 유입을 위해 영어로 작성되었습니다.
전문은 [English version](/en/blog/writing-across-languages)에서 읽을 수 있습니다.

영어가 유창하지 않아도 펜팔은 가능합니다. 번역을 활용하는 법과 오해를 줄이는 글쓰기 요령.
`,
        contentEn: `
# How to Write to Someone Who Doesn't Speak Your Language

The most common reason people give up on international pen pals isn't distance or time zones. It's the quiet assumption that they need good English first.

They don't. But writing across languages does take a slightly different approach than writing in your own.

## Write shorter sentences than feels natural

Machine translation handles simple structure well and complex structure badly. One idea per sentence survives the trip. Three clauses stacked with commas usually don't.

Compare:

> Although I had been planning to visit my grandmother in the countryside, which I do every summer since I was young, the trains were fully booked and I ended up staying home, which turned out fine.

versus:

> I usually visit my grandmother every summer. This year the trains were fully booked. I stayed home instead. It turned out fine.

The second one carries the same meaning and arrives intact in any language.

## Avoid what doesn't travel

**Idioms.** "It's raining cats and dogs" becomes nonsense or, worse, literal. Say it's raining hard.

**Sarcasm.** Tone is the first thing lost. If you write "great, another Monday," there's a real chance it lands as enthusiasm.

**Puns and wordplay.** They're built on one language's sounds. They can't cross.

**Heavy slang.** It ages fast and translates badly. Some slang is fine and even fun to explain — just don't build a whole paragraph on it.

## Keep culture-specific things, but explain them

This is the opposite of the advice above, and it matters more.

Don't flatten your letters into generic English. The specific things — a dish your mother makes, a holiday nobody outside your country celebrates, a word that has no equivalent — are the most interesting part of an international correspondence.

Just add one line of context:

> Yesterday was Chuseok, our harvest holiday. Families travel to their hometowns and the highways are jammed for ten hours. My grandmother made songpyeon — small rice cakes shaped like half-moons.

Now it's translatable *and* worth reading.

## Use translation as a tool, not a wall

Most people who write across languages do one of three things:

**Draft in your own language and translate.** Fastest, most natural. Your voice survives because you weren't fighting vocabulary while thinking. The risk is you never see what actually got sent.

**Write directly in their language.** Slower, more errors, and genuinely good practice. Your pen pal will almost certainly find the effort endearing rather than annoying.

**Send both.** Your original and the translation together. This is the most robust option — if the translation garbles something, the original is right there, and over months the person starts recognizing patterns in your language.

That last approach is why some apps show original and translation side by side by default. On Lettie, every letter and reply translates across 28 languages and both versions sit next to each other, so nothing gets hidden behind the machine. A lot of people report picking up their pen pal's language gradually without ever deciding to study it.

## When something lands wrong

It will happen. A sentence arrives colder than you meant, or a joke reads as an insult.

Say so plainly:

> I think my last letter came out wrong. What I meant was…

Almost everyone in an international correspondence has been on both sides of this. Naming it directly resolves it faster than anything else, and it usually deepens the friendship rather than damaging it.

## What you gain

Writing across languages forces a kind of clarity you don't practice otherwise. You say what you mean, once, plainly, because you can't rely on tone to carry it.

People often notice their writing in their own language gets better too.

And the friendship itself tends to be sturdier than you'd expect. When two people keep writing despite the extra effort, both of them are choosing it deliberately every time.

Start with four short sentences. That's enough.
`
    },
    'korean-pen-pals': {
        id: 'korean-pen-pals',
        title: '한국인 펜팔 만드는 법: 외국인을 위한 안내',
        titleEn: 'How to Find a Korean Pen Pal (and Actually Keep the Conversation Going)',
        description: '한국 친구를 사귀고 싶은 외국인을 위한 안내. 어디서 만나고, 무엇을 이야기하고, 무엇을 조심해야 하는지.',
        descriptionEn: 'Want a pen pal in Korea? Where to find one, what actually makes a good first letter, and the cultural notes worth knowing.',
        date: '2026-07-31',
        readTime: '8분',
        readTimeEn: '8 min',
        category: '문화',
        categoryEn: 'Culture',
        image: '/brand-screen.png',
        author: 'Lettie',
        keywords: ['한국인 펜팔', '외국인 친구', '한국 문화 교류', '한국어 교환'],
        keywordsEn: ['korean pen pal', 'find korean friends online', 'korean language exchange', 'make friends in korea', 'korean pen pal app', 'learn korean with a pen pal', 'talk to koreans online'],
        content: `
# 한국인 펜팔 만드는 법: 외국인을 위한 안내

이 글은 영어권 검색 유입을 위해 영어로 작성되었습니다.
전문은 [English version](/en/blog/korean-pen-pals)에서 읽을 수 있습니다.

한국 친구를 사귀고 싶은 외국인을 위한 안내. 어디서 만나고, 무엇을 이야기하고, 무엇을 조심해야 하는지.
`,
        contentEn: `
# How to Find a Korean Pen Pal (and Actually Keep the Conversation Going)

Interest in Korea has outrun the number of people who know how to actually talk to Koreans. Plenty of guides tell you to "find a language partner." Fewer tell you why those conversations stall out after a week.

## Where Koreans actually are

**Pen pal apps with Korean user bases.** Lettie was built in Korea and a large share of its users are Korean, which changes the odds considerably compared to a global platform where Koreans are a small slice. Letters translate across 28 languages, so you can write in English and they read Korean — useful, since many Korean users are more comfortable reading their own language even when their English is decent.

**HelloTalk.** Very popular in Korea for language exchange specifically. Expect corrections and study-shaped conversations.

**Language exchange communities.** Discord servers and university exchange programs. Higher effort to get into, but the people there have already committed.

What generally doesn't work: cold-messaging Korean users on Instagram or TikTok. It reads as a pickup attempt regardless of intent.

## What makes a good first letter to a Korean pen pal

**Don't open with K-pop or K-drama alone.** Not because it's a bad interest — it's often a genuine shared one — but because it's the opening every Korean user receives twenty times a week. It signals you're interested in Korea as a product, not in them as a person.

If you do love a group or a show, mention it as one detail among several, not the whole letter.

**Do ask about ordinary life.** What their commute is like. What they eat when they can't be bothered to cook. What they think about the thing everyone in Korea is currently arguing about. Ordinary questions get real answers.

**Be specific about yourself.** Koreans in pen pal apps are often there partly to practice English or learn about life elsewhere. Describing your actual daily routine — the boring parts included — is more useful and more interesting than a list of hobbies.

## Cultural notes that actually matter

**Age comes up early, and it isn't rude.** Korean has different speech levels depending on relative age, so asking someone's age is a practical question about how to address them, not a personal probe. If you're asked, it's not an insult.

**Names.** Family name comes first — in "Kim Minjun," Kim is the family name. Many Korean users will offer an English name to make things easier; using their Korean name if they've given it is usually appreciated.

**Modesty is default.** Compliments are often deflected rather than accepted. "No, no, I'm not good at it" isn't fishing — it's the standard response. Don't read it as low self-esteem.

**Indirect refusals.** "That might be a little difficult" often means no. Pressing after that reads as pushy.

**Reply speed varies wildly.** Korean work and study schedules are demanding. A slow reply is usually a calendar problem, not disinterest.

## The language question

You don't need Korean. Most Korean pen pal users have studied English for years and read it better than they speak it.

But learning even a little changes the tone of the correspondence. Not because they need it — because it signals the exchange goes both ways. Three phrases worth knowing:

- **안녕하세요** (annyeonghaseyo) — hello
- **감사합니다** (gamsahamnida) — thank you
- **잘 지내세요?** (jal jinaeseyo?) — how have you been?

If you're using an app that shows the original alongside the translation, you'll start absorbing patterns without studying. Seeing 감사합니다 next to "thank you" fifty times does more than a flashcard deck.

## Keeping it going

The correspondences that last usually find one specific shared thread — cooking, a game, running, a book both of you are working through — rather than staying on "tell me about your country."

Country-level questions run out. A shared interest doesn't.

## One honest caution

Interest in Korea attracts a certain kind of message, and Korean users on these platforms get a lot of it. Approaching someone as a representative of their country — or as an opportunity to practice — tends to end quickly.

Approach them as a person who happens to live somewhere you're curious about. That's the whole difference.

Write four honest paragraphs about your actual life and ask one real question. That works far more often than anything clever.
`
    },
    'interpals-alternatives': {
        id: 'interpals-alternatives',
        title: 'InterPals 대안: 2026년 펜팔 사이트·앱 비교',
        titleEn: 'InterPals Alternatives: Where Else to Find Pen Pals in 2026',
        description: 'InterPals를 쓰다 지쳤다면. 대안이 될 만한 펜팔 서비스들을 실제 사용 관점에서 비교합니다.',
        descriptionEn: 'Tired of sifting through low-effort messages on InterPals? Here\'s where else people are finding pen pals in 2026, and what each place is actually good at.',
        date: '2026-08-01',
        readTime: '8분',
        readTimeEn: '8 min',
        category: '가이드',
        categoryEn: 'Guide',
        image: '/letter-feed.png',
        author: 'Lettie',
        keywords: ['InterPals 대안', '펜팔 사이트', '펜팔 앱 비교'],
        keywordsEn: ['interpals alternatives', 'alternative to interpals', 'interpals replacement', 'pen pal sites like interpals', 'best pen pal websites', 'pen pal app 2026', 'safe pen pal site'],
        content: `
# InterPals 대안: 2026년 펜팔 사이트·앱 비교

이 글은 영어권 검색 유입을 위해 영어로 작성되었습니다.
전문은 [English version](/en/blog/interpals-alternatives)에서 읽을 수 있습니다.

InterPals를 쓰다 지쳤다면. 대안이 될 만한 펜팔 서비스들을 실제 사용 관점에서 비교합니다.
`,
        contentEn: `
# InterPals Alternatives: Where Else to Find Pen Pals in 2026

InterPals has been running since 1998, and that longevity is genuinely its biggest asset. Millions of profiles, every country you can name, filters for language and age. If you want a pen pal in Uruguay who's learning Japanese, InterPals probably has one.

The complaints are also consistent, and if you're reading this you've likely hit one of them:

- The inbox fills with two-word messages from people who didn't read your profile
- Moderation is thin, and a share of accounts are obvious scams
- The interface hasn't meaningfully changed in years

So where else can you go? Here's what each alternative is actually good at.

## If you want fewer, better messages

**Slowly.** Messages take real time to arrive based on physical distance. That delay filters out people who wanted a chat app, which is most of the problem on InterPals. What arrives tends to be considered.

The tradeoff: translation is a paid feature, consumed per use. If your correspondence crosses languages, that cost recurs.

**Lettie.** Full disclosure, this is ours. The relevant difference for someone leaving InterPals: letters and replies translate across 28 languages without metering, and you can see the original next to the translation. Profiles are pixel characters instead of photos, so looks come last as you exchange letters, and contact details don't unlock until five letters in.

That last part removes the InterPals pattern where someone asks for your WhatsApp in the first message.

The tradeoff: a smaller pool. InterPals will beat us on finding someone in a specific small country tonight.

## If your goal is language practice

**HelloTalk.** Native speakers correct your writing inline. It's the most efficient tool here for deliberate practice, and the Korean, Japanese, and Chinese communities are large.

The tradeoff: conversations often stay in exchange mode — I fix yours, you fix mine — and thin out once the practice ends.

**Tandem.** Similar idea with more structure and stricter onboarding, which cuts down on low-effort accounts.

## If you want physical mail

**Global Penfriends** and **Postcrossing.** Postcrossing in particular is worth knowing: you send a postcard to a random member and receive one from someone else entirely. It isn't correspondence, but it's a low-commitment way to feel connected to strangers.

The tradeoff: you're sharing a mailing address. Decide how you feel about that first.

## If you want serendipity

**Bottled** throws your message into a virtual sea for someone to find. Charming, rarely leads to a sustained exchange.

## Honest summary

| What pushed you off InterPals | Where to look |
|---|---|
| Too many low-effort messages | Slowly, Tandem |
| Scam accounts and pressure to move to WhatsApp | Lettie (slow letters, character profiles, no photos up front) |
| Language barrier made it exhausting | Lettie, HelloTalk |
| Just want structured language practice | HelloTalk, Tandem |
| Want something tangible | Postcrossing, Global Penfriends |
| Dated interface | Any of the app-first options |

## One thing that isn't the platform's fault

Most pen pal correspondences die at message three regardless of where they started. The usual cause is that both people wrote a version of "hi, what are your hobbies?" and neither had anything to answer.

Whichever platform you move to, the first letter does most of the work. Write four honest paragraphs about your actual week, ask one question you genuinely want the answer to, and you'll outperform 90% of what lands in anyone's inbox.
`
    },
    'pen-pal-for-language-learning': {
        id: 'pen-pal-for-language-learning',
        title: '펜팔로 언어 배우기: 실제로 효과 있는 방법',
        titleEn: 'Using a Pen Pal to Learn a Language (What Actually Works)',
        description: '언어 교환 앱과 펜팔의 차이, 그리고 쓰기 연습이 회화보다 먼저인 이유.',
        descriptionEn: 'Language exchange apps, pen pals, and why writing is often the faster route to fluency than conversation practice.',
        date: '2026-08-01',
        readTime: '7분',
        readTimeEn: '7 min',
        category: '가이드',
        categoryEn: 'Guide',
        image: '/conversation-detail.png',
        author: 'Lettie',
        keywords: ['언어 교환', '펜팔 언어 학습', '외국어 쓰기 연습'],
        keywordsEn: ['pen pal for language learning', 'language exchange partner', 'learn a language by writing', 'hellotalk vs pen pal', 'language exchange app', 'practice writing in a foreign language', 'how to learn a language with a native speaker'],
        content: `
# 펜팔로 언어 배우기: 실제로 효과 있는 방법

이 글은 영어권 검색 유입을 위해 영어로 작성되었습니다.
전문은 [English version](/en/blog/pen-pal-for-language-learning)에서 읽을 수 있습니다.

언어 교환 앱과 펜팔의 차이, 그리고 쓰기 연습이 회화보다 먼저인 이유.
`,
        contentEn: `
# Using a Pen Pal to Learn a Language (What Actually Works)

Most language exchange advice points you toward conversation practice — find a native speaker, get on a call, talk. That works, but it skips something.

Writing is slower, and the slowness is the point. You have time to reach for the word you actually mean instead of the one you can retrieve in half a second. That reaching is where vocabulary moves from recognition into use.

## Why writing beats speaking early on

**You can look things up mid-sentence.** In conversation you route around what you don't know. In writing you can stop, find the right structure, and use it. Do that fifty times and it stops needing a lookup.

**You produce more language per session.** A 20-minute call in a language you're weak in might yield 200 words from you, most of them recycled. A 300-word letter is 300 words you constructed.

**You have a record.** Rereading your letters from three months ago is the clearest progress measure you'll get. Nobody records their calls.

**The anxiety is lower.** Silence in a call is uncomfortable. Silence while drafting is just thinking.

None of this argues against speaking. It argues for writing first, when speaking is still too expensive.

## Language exchange app or pen pal app?

They're different tools and the distinction matters.

**Language exchange apps (HelloTalk, Tandem)** exist for correction. Your partner marks your errors directly. Efficiency is high, and if your goal is measurable improvement in three months, start here.

The limitation is structural: the relationship is an exercise. Many exchanges fade once the study session ends, because there was never anything else holding it together.

**Pen pal apps (Slowly, InterPals, Lettie)** exist for the relationship. Language improvement is a side effect, and it happens more slowly — but it keeps happening, because you keep writing to someone you actually want to write to.

The strongest setup for most people is a pen pal correspondence for consistency, plus occasional deliberate practice elsewhere.

## Making a pen pal correspondence useful for learning

**Write in the target language even when it's bad.** Your errors are the syllabus. A letter full of them teaches you more than a perfect letter in your own language.

**Ask for correction explicitly, once.** Most pen pals won't correct you unless invited — they don't want to seem rude. One line settles it: "Please correct my mistakes, I'd rather learn than sound polished."

**Steal their phrasing.** When they say something in a way you wouldn't have, use it in your next letter. This is how you get idiomatic rather than merely correct.

**Keep a small list.** Not a full study system — just five expressions per letter that you want to reuse.

**Read the original next to the translation.** If your app shows both, this is the highest-value habit available. Seeing the source sentence beside its meaning, repeatedly, in a context you care about, builds pattern recognition that flashcards don't.

On Lettie both versions sit side by side by default across 28 languages, which is why a number of users report picking up their pen pal's language without having set out to study it. That's a real effect but a slow one — this isn't a substitute for a course if you need results by a deadline.

## A realistic timeline

- **Month 1:** Your letters are short and effortful. Normal.
- **Month 3:** You stop translating whole sentences in your head. Some phrases arrive directly.
- **Month 6:** You write a paragraph without a dictionary and it comes out mostly right.
- **Month 12:** You notice you've been reading their letters without consciously decoding.

That's slower than an intensive course and far more likely to still be happening at month twelve, because the motivation isn't discipline. It's that someone is waiting for your reply.

## Choosing a partner

Pick someone whose target language is yours and whose native language is what you're learning. The symmetry keeps it fair — otherwise one of you is doing a favor, and favors expire.

Then write about your actual life. "What did you eat today" produces more usable language than any textbook dialogue about booking a hotel.
`
    },
    'pen-pal-safety-guide': {
        id: 'pen-pal-safety-guide',
        title: '안전한 펜팔 가이드: 무엇을 조심해야 하나',
        titleEn: 'Pen Pal Safety: What to Watch For and What to Ignore',
        description: '온라인 펜팔에서 실제로 위험한 신호와, 과하게 걱정할 필요 없는 것들.',
        descriptionEn: 'The scam patterns that actually appear in pen pal communities, what to share and when, and which worries are overblown.',
        date: '2026-08-01',
        readTime: '7분',
        readTimeEn: '7 min',
        category: '가이드',
        categoryEn: 'Guide',
        image: '/contact-exchange.png',
        author: 'Lettie',
        keywords: ['펜팔 안전', '온라인 사기', '개인정보 보호'],
        keywordsEn: ['pen pal safety', 'is penpalling safe', 'pen pal scams', 'online friendship safety', 'romance scam warning signs', 'safe pen pal app', 'protect personal information online'],
        content: `
# 안전한 펜팔 가이드: 무엇을 조심해야 하나

이 글은 영어권 검색 유입을 위해 영어로 작성되었습니다.
전문은 [English version](/en/blog/pen-pal-safety-guide)에서 읽을 수 있습니다.

온라인 펜팔에서 실제로 위험한 신호와, 과하게 걱정할 필요 없는 것들.
`,
        contentEn: `
# Pen Pal Safety: What to Watch For and What to Ignore

Writing to strangers is safer than most people assume and riskier in one specific way than they expect. Worth separating the two.

## The pattern that actually causes harm

Nearly every serious problem in pen pal communities follows the same shape, and it is not "stranger turns out to be dangerous in person." It's financial.

It looks like this:

1. **Unusually warm, unusually fast.** Deep affection within days. Long messages that feel intensely personal.
2. **A story that explains distance.** Working offshore, deployed, a doctor abroad. Something that makes meeting impossible and calls difficult.
3. **A crisis.** Medical emergency, customs fee, blocked bank account, a shipment held up.
4. **The ask.** Usually gift cards or crypto — payment methods that can't be reversed.

The tell isn't any single step. It's the **speed of intimacy relative to actual knowledge.** Someone who tells you they love you before knowing what you do for a living is running a script.

**Rule that covers almost all of it:** never send money, gift cards, or crypto to someone you've only known online. Not once, not a small amount, not as a loan. There is no version of this that ends well.

## What to share, and when

**First few letters:** first name, general region ("northern England," not your town), interests, work in broad terms. That's plenty for a real correspondence.

**Later:** city, more about your work, photos if you want.

**Only if it becomes a genuine friendship:** full name, contact details, social media.

**Not until you've met, if ever:** home address, workplace address, financial details, ID documents.

The mistake isn't sharing — it's sharing on someone else's timeline because saying no felt awkward.

Some apps handle this structurally. Lettie makes each letter take hours to arrive and lets you write again only after a reply, which removes the social pressure entirely — there's nothing to refuse because the option isn't there yet.

## Warning signs worth acting on

- **Pressure to leave the platform immediately.** Platforms have reporting and moderation. Personal messengers don't. Someone who insists on WhatsApp in message two is usually avoiding oversight.
- **Refusal to video call, ever, with escalating excuses.** One or two declines is normal — some people are private or self-conscious. A pattern of reasons is different.
- **Photos that look like stock or model shots.** Reverse image search takes ten seconds.
- **Inconsistencies in their story.** Ages, locations, and jobs that shift between letters.
- **Any mention of money.** Investment opportunities included — "crypto mentor" pitches are extremely common in these communities.

## Things people worry about more than they need to

**Being "catfished" about appearance.** Common, usually harmless, and less relevant in letter-based correspondence where you formed the impression on writing rather than photos.

**Someone finding you from your first name and country.** Extremely difficult without more specifics.

**Awkwardness of ending it.** You can simply stop replying. You owe a stranger nothing beyond basic courtesy, and "I don't think we're clicking, take care" is a complete sentence.

**Language mistakes offending someone.** Almost nobody in an international correspondence is graded on grammar. Errors read as effort.

## Practical habits

- Use a nickname or first name only, early on.
- Keep it on the platform until you have a reason not to.
- Reverse image search a profile photo if something feels off. Ten seconds.
- Video call before meeting in person, always.
- If you do meet: public place, someone knows where you are, your own transport.
- Report rather than just blocking. Blocking protects you; reporting protects the next person.

## For parents

If a teenager wants a pen pal, the useful conversation isn't "don't talk to strangers online." It's the money rule and the address rule, plus an agreement that they can show you anything that feels strange without getting in trouble for it. Fear of losing access is what keeps young people quiet about grooming.

Choose a platform with real moderation and reporting tools, and check the minimum age — most pen pal apps, including Lettie, are 18+.

## The realistic picture

Most pen pal correspondences are exactly what they appear to be: someone in another country who also wanted to write letters. The precautions above cost you almost nothing and remove nearly all of the real risk.

Don't send money. Don't share your address early. Everything else is manageable.
`
    },
    'what-to-write-to-a-pen-pal': {
        id: 'what-to-write-to-a-pen-pal',
        title: '펜팔에게 무엇을 쓸까: 소재 40가지',
        titleEn: 'What to Write to a Pen Pal: 40 Things That Actually Get a Reply',
        description: '첫 편지부터 열 번째 편지까지, 실제로 답장을 부르는 소재들.',
        descriptionEn: 'Stuck on what to say? Concrete prompts for the first letter, the fifth, and the one where you\'ve run out of things to talk about.',
        date: '2026-08-01',
        readTime: '9분',
        readTimeEn: '9 min',
        category: '가이드',
        categoryEn: 'Guide',
        image: '/letter-writing.png',
        author: 'Lettie',
        keywords: ['펜팔 소재', '편지 쓸 내용', '펜팔 질문'],
        keywordsEn: ['what to write to a pen pal', 'pen pal letter ideas', 'pen pal topics', 'questions to ask a pen pal', 'first pen pal letter', 'what to say to a pen pal', 'pen pal conversation starters'],
        content: `
# 펜팔에게 무엇을 쓸까: 소재 40가지

이 글은 영어권 검색 유입을 위해 영어로 작성되었습니다.
전문은 [English version](/en/blog/what-to-write-to-a-pen-pal)에서 읽을 수 있습니다.

첫 편지부터 열 번째 편지까지, 실제로 답장을 부르는 소재들.
`,
        contentEn: `
# What to Write to a Pen Pal: 40 Things That Actually Get a Reply

The blank page problem is real, and it kills more correspondences than anything else. Here's the thing nobody says: **the topic matters less than the specificity.**

"What's your favorite food?" gets you "pizza." Dead end.

"What did you eat for lunch today, and was it any good?" gets you a story about the place around the corner from their office where the owner always adds too much chili.

Same subject. Completely different letter.

## For the first letter

You need enough to answer, not a questionnaire. Pick two or three.

1. What your street looks like right now, out the window
2. How you got to work or class today — the actual route
3. Something you're bad at and keep doing anyway
4. The last thing that made you laugh out loud
5. What you were like at fifteen, versus now
6. A small thing in your home that has a story behind it
7. What you thought you'd be doing at this age
8. The most ordinary part of your week, described honestly

That last one is underrated. Ordinary life in another country is genuinely interesting to someone who doesn't live it.

## When you want to go deeper (letters 3–8)

9. Something you changed your mind about recently
10. A decision you're currently avoiding
11. What your family is like, and what you inherited from them
12. Something people misread about you
13. The thing you'd do if money weren't part of the equation
14. A friendship that ended and why
15. What you're afraid people will find out
16. A place you go when you need to think
17. Something you did that you're quietly proud of
18. What you believed strongly at twenty that you don't now

Don't fire these off in sequence. One per letter, woven into ordinary news, is the right dose.

## About their country and yours

19. What's the most misunderstood thing about where you live?
20. What's a normal weekday like there — actually, hour by hour?
21. What do people your age argue about right now?
22. What holiday means the most to you, and what do you actually do?
23. Is there a word in your language with no good translation?
24. What food do foreigners get wrong about your country?
25. What's taught in school there about my country?

That last one produces surprising conversations, in both directions.

## When you've run out of things to say

This happens around letter eight or nine and it's normal, not a sign the friendship is over.

26. Send a photo of something mundane and describe it
27. Ask them to recommend one song, and actually listen, then react in detail
28. Describe your day in strict chronological order, nothing skipped
29. Ask what they'd show you if you visited for 24 hours
30. Tell them about a dream you had
31. Ask what they were doing exactly one year ago
32. Pick a news story from their country and ask what people there actually think
33. Ask them to teach you five words worth knowing

## Prompts that reliably produce good letters

34. "What's something you've never told a friend in person but would write down?"
35. "What did you want to be when you were eight?"
36. "What's the last thing you bought that turned out to be worth it?"
37. "What do you do when you can't sleep?"
38. "What's a habit you picked up from someone else?"
39. "Which version of yourself would surprise the current one most?"
40. "What are you looking forward to that's small?"

## What not to do

**Don't send a list of questions.** Ten questions in one letter reads as an interview and produces one-line answers to each. One good question, answered thoroughly, is worth more.

**Don't only ask.** Answer your own question first. It shows what depth you're inviting, and it gives them something to react to.

**Don't apologize for length or delay.** "Sorry this is so long" makes them feel obliged to read carefully. "Sorry for the slow reply" makes slowness feel like a problem when it usually isn't.

**Don't skip what they wrote.** The single most common failure: writing your own update and not responding to theirs. Quote a line. React to it. That alone puts you ahead of most correspondents.

## If you're writing across languages

Keep sentences short and one idea each — machine translation preserves that structure and mangles long clause-stacks. Keep the culturally specific details, but add a line of context so they land.

If your app shows the original beside the translation — Lettie does this across 28 languages — you can be a bit more natural, since anything the machine garbles is still visible in your own words.

## The actual rule

Write the letter you'd want to receive. Specific, a little unguarded, and clearly addressed to *them* rather than to anyone who might be reading.

That's the whole method. The forty prompts are just scaffolding until it's a habit.
`
    },
    'japanese-pen-pals': {
        id: 'japanese-pen-pals',
        title: '일본인 펜팔 만드는 법',
        titleEn: 'How to Find a Japanese Pen Pal (Without Being the Person They Ignore)',
        description: '일본 친구를 사귀고 싶다면. 어디서 만나고, 무엇을 조심해야 하는지.',
        descriptionEn: 'Where Japanese users actually are, what makes a first letter get answered, and the cultural notes that matter in practice.',
        date: '2026-08-01',
        readTime: '8분',
        readTimeEn: '8 min',
        category: '문화',
        categoryEn: 'Culture',
        image: '/brand-screen.png',
        author: 'Lettie',
        keywords: ['일본인 펜팔', '일본 친구', '일본어 교환'],
        keywordsEn: ['japanese pen pal', 'find japanese friends online', 'japanese language exchange', 'make friends in japan', 'japanese pen pal app', 'learn japanese with a pen pal', 'talk to japanese people online'],
        content: `
# 일본인 펜팔 만드는 법

이 글은 영어권 검색 유입을 위해 영어로 작성되었습니다.
전문은 [English version](/en/blog/japanese-pen-pals)에서 읽을 수 있습니다.

일본 친구를 사귀고 싶다면. 어디서 만나고, 무엇을 조심해야 하는지.
`,
        contentEn: `
# How to Find a Japanese Pen Pal (Without Being the Person They Ignore)

Japan has one of the strongest letter-writing cultures still alive — 文通 (buntsū) has a long history, and seasonal greeting cards are a genuine institution. That's good news if you want a Japanese pen pal.

The bad news is that Japanese users on language and pen pal platforms receive a very high volume of near-identical first messages, and most go unanswered.

Here's how not to be one of them.

## Where Japanese users actually are

**HelloTalk and Tandem.** The largest Japanese presence for language exchange specifically. Expect corrections and study-shaped conversation.

**Pen pal apps.** Slowly and Lettie both have Japanese users. If you don't speak Japanese and they don't speak much English, the translation matters — on Lettie every letter translates across 28 languages with the original shown alongside, which removes the usual bottleneck where both people give up after two stilted exchanges.

**Interest communities.** Hobby forums, game communities, Discord servers around specific interests. Slower to break into, but the people there already share something with you.

What doesn't work: cold-messaging on Instagram or X. It reads as a pickup attempt no matter how it's phrased.

## What makes a first letter get answered

**Don't lead with anime, manga, or "I love Japan."** These aren't bad interests — they're just the opening in the overwhelming majority of messages Japanese users receive. It signals interest in Japan as a concept rather than in them as a person.

If anime is genuinely your thing, mention one specific work and something specific you thought about it, as one detail among several.

**Do write about your ordinary life.** What your commute is like. What you cooked badly this week. What's annoying about your job. Japanese users on these platforms are often curious about daily life elsewhere, and ordinary detail is more interesting than enthusiasm about their country.

**Do ask something answerable.** "What's Japan like?" is unanswerable. "What's the food at your office cafeteria like?" gets a real answer.

## Cultural notes that matter in practice

**Indirect refusal is standard.** ちょっと難しいです ("that's a little difficult") usually means no. Pressing after it reads as not listening.

**Modesty is the default register.** Compliments get deflected — いえいえ, そんなことないです. It isn't low confidence, it's the expected response. Don't push back hard.

**Names.** Family name comes first. Adding さん to someone's name is the safe default; dropping it too early can feel abrupt.

**Reply speed varies a lot.** Japanese work hours are long. A three-week gap is usually a schedule, not a verdict.

**Directness lands differently.** Blunt questions about salary, relationships, or politics early on tend to close things down rather than open them.

## The language question

You don't need Japanese. Many Japanese users are on these platforms partly to practice English and read it better than they speak it.

But even a little goes a long way, because it signals the exchange runs both directions:

- **はじめまして** (hajimemashite) — nice to meet you, for a first letter
- **ありがとうございます** (arigatō gozaimasu) — thank you
- **よろしくお願いします** (yoroshiku onegaishimasu) — hard to translate; roughly "I look forward to this." Ends a first letter well.

Writing your letter in English and letting it translate is completely normal. If your app shows the original alongside the translation, you'll also start absorbing patterns — seeing よろしくお願いします in context fifty times teaches you more than a definition does.

## Seasonal letters are a real thing

If the correspondence lasts, this is worth knowing. Japanese letter culture has strong seasonal conventions — 年賀状 (New Year cards) and 暑中見舞い (midsummer greetings) especially.

You don't have to follow the formal templates. But sending a short New Year note, or simply mentioning the season in your opening line, reads as genuine attentiveness rather than performance.

## One honest caution

Interest in Japan attracts a certain kind of approach, and Japanese users on these platforms have seen all of it. The people who get long-term correspondences are the ones who write like they're talking to a person who happens to live in Japan — not to Japan itself.

Write four honest paragraphs about your actual week. Ask one real question. That's more effective than anything clever.
`
    },
    'apps-to-make-friends-online': {
        id: 'apps-to-make-friends-online',
        title: '온라인에서 친구 사귀는 앱 (2026)',
        titleEn: 'Apps to Make Friends Online in 2026 (Not Dating Apps)',
        description: '연애 목적이 아닌, 진짜 친구를 찾는 앱들을 비교합니다.',
        descriptionEn: 'You want friends, not dates. Here\'s what each of the main options is actually built for, and which one fits how you want to talk.',
        date: '2026-08-01',
        readTime: '8분',
        readTimeEn: '8 min',
        category: '가이드',
        categoryEn: 'Guide',
        image: '/letter-feed.png',
        author: 'Lettie',
        keywords: ['온라인 친구', '친구 사귀는 앱', '외국인 친구 앱'],
        keywordsEn: ['apps to make friends online', 'best apps to make friends', 'make friends online 2026', 'friendship app not dating', 'apps to meet people worldwide', 'online friends app', 'how to make friends as an adult'],
        content: `
# 온라인에서 친구 사귀는 앱 (2026)

이 글은 영어권 검색 유입을 위해 영어로 작성되었습니다.
전문은 [English version](/en/blog/apps-to-make-friends-online)에서 읽을 수 있습니다.

연애 목적이 아닌, 진짜 친구를 찾는 앱들을 비교합니다.
`,
        contentEn: `
# Apps to Make Friends Online in 2026 (Not Dating Apps)

Making friends as an adult is structurally hard. School and university handed you repeated unplanned contact with the same people, which is the actual mechanism friendships form through. Work sometimes replicates it. Once neither applies, you have to manufacture it.

Apps can help, but most "friendship" apps are dating apps with the romance filed off. Here's what each option is genuinely built for.

## If you want to talk in depth, slowly

**Pen pal apps** — Slowly, Lettie, InterPals.

These optimize for length and thought rather than immediacy. You write something substantial, they reply when they can. It suits people who express themselves better in writing than in conversation, and people whose schedules make live chat impractical.

Slowly adds delivery delay based on real distance. Lettie translates across 28 languages with the original shown beside the translation, which matters if you want friends outside your language. InterPals has the largest pool but the least moderation.

**Not for you if** you want someone to talk to tonight.

## If you want live conversation

**Discord.** Still the most reliable place to find people through a shared interest. The key is joining a server about something specific you actually do, not a generic "make friends" server — those are mostly people waiting to be approached.

**Bumble BFF.** Local, profile-based, works in cities. Success rate depends heavily on population density.

**Not for you if** you find the pace of live chat draining.

## If your goal is language practice

**HelloTalk, Tandem.** Structured around correction and exchange. Friendship happens sometimes, but the scaffolding is study.

## If you want something physical

**Postcrossing.** You send a postcard to a randomly assigned member and receive one from someone else. Not correspondence — but a surprisingly warm low-commitment ritual.

## What actually determines whether it works

The app matters less than three habits.

**Be specific about yourself.** Every generic profile competes with every other generic profile. "I like music and travel" is invisible. "I'm relearning piano at 29 and losing to a Chopin nocturne" is a conversation.

**Answer what they said.** The most common failure across every platform is people writing their own update and ignoring what they just received. Quote a line. React to it.

**Let it be slow.** Adult friendships form over months of low-intensity contact, not in one great conversation. Expecting instant closeness is how people conclude the apps don't work.

## A realistic comparison

| What you want | Where to look |
|---|---|
| Long, thoughtful exchanges | Slowly, Lettie |
| Friends outside your language | Lettie, HelloTalk |
| Live conversation about a shared hobby | Discord |
| Someone to meet in person locally | Bumble BFF |
| Deliberate language practice | HelloTalk, Tandem |
| Low commitment, something in the mail | Postcrossing |

## The uncomfortable part

Most people download three apps, send a handful of low-effort messages, get low-effort replies, and conclude that online friendship doesn't work.

What actually works is picking one, writing one genuinely thoughtful first message, and then — the hard part — replying consistently for two months to someone you don't yet feel close to. Closeness is the output of that process, not the entry requirement.

That's not an app feature. But choosing an app whose format matches how you naturally communicate makes the two months much more likely to happen.
`
    },
    'keep-a-pen-pal-conversation-going': {
        id: 'keep-a-pen-pal-conversation-going',
        title: '펜팔 대화가 끊기지 않게 하는 법',
        titleEn: 'How to Keep a Pen Pal Conversation Going Past the Third Letter',
        description: '대부분의 펜팔은 세 번째 편지에서 끝납니다. 왜 그런지, 어떻게 넘기는지.',
        descriptionEn: 'Most pen pal exchanges die around letter three. Here\'s the specific reason, and what to do differently.',
        date: '2026-08-01',
        readTime: '7분',
        readTimeEn: '7 min',
        category: '가이드',
        categoryEn: 'Guide',
        image: '/conversation-detail.png',
        author: 'Lettie',
        keywords: ['펜팔 대화', '편지 이어가기', '펜팔 유지'],
        keywordsEn: ['keep a pen pal conversation going', 'pen pal stopped replying', 'how to reply to a pen pal', 'pen pal running out of things to say', 'long term pen pal', 'maintain online friendship'],
        content: `
# 펜팔 대화가 끊기지 않게 하는 법

이 글은 영어권 검색 유입을 위해 영어로 작성되었습니다.
전문은 [English version](/en/blog/keep-a-pen-pal-conversation-going)에서 읽을 수 있습니다.

대부분의 펜팔은 세 번째 편지에서 끝납니다. 왜 그런지, 어떻게 넘기는지.
`,
        contentEn: `
# How to Keep a Pen Pal Conversation Going Past the Third Letter

There's a specific place where pen pal correspondences die, and it's remarkably consistent: **letter three**.

Letter one is introductions. Letter two is the reciprocal introduction. Letter three is where you have to find an actual reason to keep writing — and if both people are still exchanging biographical facts, there isn't one.

## Why letter three is the wall

The first two letters run on novelty. Where you live, what you do, what you like. That material is finite.

By letter three you've covered the basics and neither person has established what the correspondence is *about*. So it becomes an obligation with no subject, and one of you quietly stops.

The fix isn't more interesting facts. It's changing what kind of thing you're exchanging.

## Move from facts to thinking

Facts: "I work as a nurse. I've been doing it six years."

Thinking: "I've been a nurse six years and I still can't tell whether I'm good at it or just used to it. Last week something happened that made me wonder if I should have stopped at three."

The second one invites a real response. It also gives them permission to be less polished, which is what most people are waiting for.

You don't need to be dramatic. Uncertainty about ordinary things works fine — a decision you're avoiding, an opinion you've changed, something you're bad at.

## Actually respond to their letter

This is the single most common failure, and it's invisible to the person doing it.

Most people write their own update and treat the received letter as a prompt rather than something to answer. The other person notices. It feels like talking into a room where nobody looks up.

Concretely:
- Quote a line from their letter and react to it
- Ask a follow-up about something they mentioned in passing
- Reference something from two letters ago — this signals you're keeping track of them as a person

That last one carries disproportionate weight.

## Find the thread

Correspondences that last usually settle on something specific that belongs to the two of you. Cooking. A game. Running. A book you're both slowly working through. The city one of you is thinking of moving to.

"Tell me about your country" runs out. A shared thread doesn't, because it generates new material by itself.

You don't have to plan this. Just notice when something gets an unusually alive response from both sides, and go back to it.

## Handle the gaps correctly

Someone takes three weeks to reply. Two things people do wrong here:

**Punishing them with silence.** Waiting three weeks back to make a point ends the correspondence quietly.

**Apologizing excessively.** "I'm so sorry for the delay, I've been terrible" makes slowness a moral failure and raises the stakes for both of you.

The line that saves more correspondences than any other is some version of: *"No rush — reply whenever it suits you."* And then meaning it.

Letters aren't messages. A two-week gap is normal and should feel normal.

## Match depth, roughly

If they wrote three paragraphs and you send three lines, they'll calibrate down next time. If they wrote three lines because they're overwhelmed and you send two pages, that's pressure.

Roughly matching what they gave you keeps it comfortable. Slightly exceeding it, occasionally, is how depth increases without either person deciding to.

## When it's genuinely fading

Sometimes it's just over, and that's not a failure. Timing, life, chemistry.

One honest line is better than trailing off: *"I've loved these letters — life's swallowed me lately, but I'll write properly when it settles."* Many correspondences restart from exactly that message months later.

And if someone stops replying to you, don't over-read it. People get busy, apps get deleted, life happens. It's rarely about the last letter you sent.

## If language is part of the friction

Writing across languages adds effort to every exchange, which makes the letter-three wall arrive faster.

Short sentences, one idea each, survive translation intact. Long clause-stacked ones don't. And if your app shows the original next to the translation — Lettie does this across 28 languages — misfires stay visible instead of silently changing your meaning, which prevents the slow accumulation of small misunderstandings that ends a lot of cross-language friendships.

## The short version

Say something uncertain. Answer what they wrote. Find the thread. Let gaps be normal.

Get past letter three and the correspondence usually finds its own momentum.
`
    },
    'lettie-vs-slowly': {
        id: 'lettie-vs-slowly',
        title: 'Lettie vs Slowly — 느린 편지 앱 두 개, 무엇이 다른가',
        titleEn: 'Lettie vs Slowly: two slow-letter apps, one real difference',
        description: 'Slowly와 Lettie는 둘 다 편지가 거리만큼 걸려 도착하는 앱입니다. 목적, 첫 편지를 만나는 방식, 번역, 프로필, 매칭 — 다섯 가지 축으로 솔직하게 비교했습니다.',
        descriptionEn: 'Slowly and Lettie both deliver letters by distance. An honest comparison across purpose, how you meet your first letter, translation, profiles and matching — and who each app is right for.',
        date: '2026-09-20',
        readTime: '8분',
        readTimeEn: '8 min',
        category: '비교',
        categoryEn: 'Comparison',
        image: '/v2/key-ko-s1.png',
        author: 'Lettie',
        keywords: ['Slowly', '슬로울리', 'Slowly 대안', 'Slowly 비슷한 앱', '느린 편지 앱', '펜팔 앱 비교', '편지 펜팔 앱', 'Lettie', '레티', '편지 번역 앱', '지구본 편지'],
        keywordsEn: ['Slowly app', 'Slowly alternative', 'apps like Slowly', 'Slowly vs Lettie', 'slow letter app', 'pen pal app comparison', 'letter pen pal app', 'pen pal app with translation'],
        faq: [
            { q: 'Lettie와 Slowly의 가장 큰 차이는 무엇인가요?', a: '첫 편지를 시작하는 방식입니다. Slowly는 관심사 매칭과 공개 편지로 상대를 찾고, Lettie는 남이 하늘에 띄운 편지를 발견에서 주워 답장하는 데서 시작합니다. 여기에 앱 안 무료 번역(28개 언어), 글로 적으면 그려 주는 픽셀 캐릭터, 하루 몇 장의 소개 카드가 더해집니다.' },
            { q: 'Lettie에도 Slowly처럼 편지가 거리만큼 걸려 도착하나요?', a: '네. 두 도시의 실제 거리로 계산해 최소 30분, 최대 24시간이 걸립니다. 서울에서 도쿄는 2~3시간, 뉴욕은 17~18시간 정도입니다.' },
            { q: 'Lettie의 번역은 유료인가요?', a: '아니요. 편지 안의 번역 버튼으로 28개 언어를 무료로 번역하며, 원문과 번역문을 나란히 보여 줍니다.' },
            { q: 'Slowly에서 Lettie로 옮기면 무엇이 달라지나요?', a: '첫 편지를 매칭 카드로 받는 대신, 발견 탭에서 남이 하늘에 띄운 편지를 주워 읽고 답장할 수 있습니다. 프로필은 사진 대신 16종의 픽셀 캐릭터로 시작합니다.' },
        ],
        faqEn: [
            { q: 'What is the biggest difference between Lettie and Slowly?', a: 'How the first letter starts. Slowly finds you a pen pal through interest matching and open letters; Lettie starts with picking up a letter a stranger released into the sky (Discover) and replying. On top of that: free in-app translation in 28 languages, a pixel character drawn from your description, and a few introduction cards a day. Photo-free character profiles and turn-taking letters.' },
            { q: 'Do letters in Lettie take time to arrive like in Slowly?', a: 'Yes. Delivery time is computed from the real distance between the two cities: at least 30 minutes, at most 24 hours. Seoul to Tokyo is about 2–3 hours; Seoul to New York about 17–18 hours.' },
            { q: 'Is translation in Lettie paid?', a: 'No. A translate button inside each letter covers 28 languages for free and shows the original and the translation side by side.' },
            { q: 'What changes if I move from Slowly to Lettie?', a: 'Instead of only receiving match cards, you can pick up letters strangers released into the sky in the Discover tab and reply. Profiles start as one of sixteen pixel characters instead of a photo.' },
        ],
        content: `
# Lettie vs Slowly — 느린 편지 앱 두 개, 무엇이 다른가

먼저 밝혀 둡니다. **Lettie는 저희가 만든 앱입니다.** 그래서 이 글은 "우리가 더 낫다"가 아니라 "어디가 갈라지느냐"를 씁니다. Slowly는 2017년부터 느린 편지라는 장르를 사실상 만들어 온 앱이고, 저희도 그 앱을 좋아합니다. 편지 펜팔만 원한다면 Slowly는 여전히 좋은 선택입니다.

## 같은 점부터

- **편지는 거리만큼 시간이 걸려 도착합니다.** 서울에서 리스본까지 하루쯤, 도쿄까지는 몇 시간. 두 앱 다 이 지연을 "기능"으로 씁니다. 즉시 답이 오지 않으니 사람들이 다르게 씁니다 — 더 길게, 더 천천히.
- **우표를 모읍니다.** 나라별·기념 우표를 편지에 붙이고 수집하는 재미가 둘 다 있습니다.
- **얼굴 사진으로 시작하지 않습니다.** Slowly는 아바타, Lettie는 픽셀 캐릭터.

여기까지 보면 비슷해 보입니다. 실제로 갈라지는 건 아래 다섯 가지입니다.

## 1. 목적 — 펜팔 우정 vs 편지로 시작하는 만남

Slowly는 처음부터 끝까지 **펜팔** 앱입니다. 취미가 맞는 사람과 오래 편지를 주고받는 것이 목적이고, 그래서 연애나 만남을 전제로 한 장치가 없습니다.

Lettie도 **펜팔 앱**입니다. 다른 점은 첫 편지를 남이 띄운 편지를 주워서 시작한다는 것, 번역이 앱 안에서 무료라는 것, 그리고 하루 몇 장의 소개 카드가 온다는 것입니다. 스와이프와 점수는 없습니다. 검색해서 상대를 고르기보다 편지 한 통을 읽고 마음이 움직이면 답장하는 쪽을 원하는 사람을 위한 자리입니다.

## 2. 첫 편지를 어떻게 만나나 — 매칭 vs 발견

Slowly에서는 관심사·언어·지역으로 상대를 찾거나 자동 매칭으로 소개받고, 공개 편지(Open Letters)를 쓸 수도 있습니다.

Lettie의 첫 편지는 대부분 **발견**에서 시작합니다. 누구에게랄 것 없이 띄운 편지들이 봉투로 떠 있고, 8시간마다 새 봉투 세 장이 다가옵니다. 마음에 드는 봉투를 열어 읽고 답장하면 그때부터 둘만의 대화가 됩니다. 프로필을 보고 고르는 게 아니라 **글을 읽고 고른다**는 점이 다릅니다.

## 3. 번역 — 언어의 벽을 어디서 넘느냐

이 차이가 가장 큽니다. Lettie는 편지를 열면 **번역 버튼이 앱 안에 있고, 28개 언어**를 한 번에 번역해 원문과 나란히 보여 줍니다. 무료 사용자도 씁니다. 상대는 자기 말로 쓰고 나는 내 말로 읽는 것이 기본 경험입니다.

Slowly는 편지 번역이 기본 경험에 들어 있지 않습니다. 외부 번역기를 오가거나 유료 기능을 쓰게 됩니다. 같은 언어권 펜팔이라면 전혀 문제가 아니지만, "언어가 달라도 상관없이" 사람을 만나고 싶다면 체감 차이가 큽니다.

## 4. 프로필 — 아바타 조합 vs 글로 그리는 캐릭터

Slowly의 아바타는 부품을 조합해 만듭니다. Lettie는 기본 픽셀 캐릭터 16종을 무료로 쓰고, **생김새를 글로 적으면 같은 그림체로 나만의 캐릭터를 그려 줍니다.** 사진은 시작 단계에 아예 없습니다.

## 5. 매칭 — 없음 vs 하루 몇 장

Slowly는 펜팔 검색으로 상대를 찾습니다. Lettie는 하루 몇 장의 소개 카드가 오고, 마음에 들면 편지를 씁니다. 무한 스와이프가 아니라 **하루치**라서, 고르는 데 쓰는 시간보다 쓰는 데 쓰는 시간이 깁니다.

## 표로 정리하면

| | Lettie | Slowly |
|---|---|---|
| 목적 | 편지로 시작하는 만남 | 펜팔 우정 |
| 첫 편지 | 남이 띄운 편지를 골라 줍는다 | 관심사 매칭·공개 편지 |
| 배달 | 실제 거리 기준 1~24시간 | 실제 거리 기준 |
| 번역 | 앱 안에서 한 번에, 28개 언어, 무료 | 외부 도구 또는 유료 |
| 프로필 | 픽셀 캐릭터, 글로 적으면 그려 줌 | 아바타 조합 |
| 매칭 | 하루 몇 장, 상대 성별 선택 | 없음 |
| 우표 | 나라별 우표 + 픽셀 우표 뽑기 | 나라별·기념 우표 |
| 가격 | 무료, Plus 구독·젬 | 무료, 코인 |

## 그래서 누구에게 무엇이 맞나

- **취미가 맞는 펜팔과 오래 편지를 주고받고 싶다** → Slowly. 사용자 층이 두텁고, 8년 된 커뮤니티가 있습니다.
- **언어가 달라도 상관없이, 글로 사람을 고르고 싶다** → Lettie. 번역이 기본이고, 발견에서 편지를 읽고 고릅니다.
- **얼굴보다 글로 사람을 알고 싶다** → Lettie. 캐릭터로 시작하고 편지가 먼저입니다.
- **아무 기대 없이 세상 사람 이야기를 읽고 싶다** → 둘 다 좋습니다. Lettie의 발견은 무료로도 하루 여러 통을 엽니다.

## 한 가지 솔직한 단점

Lettie는 Slowly보다 작습니다. 특정 나라의 특정 취미를 가진 사람을 오늘 밤 당장 찾는 일은 Slowly가 낫습니다. 저희가 가진 건 번역과 발견, 그리고 편지가 지구본 위를 실제로 날아가는 그림입니다. 그게 필요하다면 한 통 띄워 보세요. 내일 아침 누군가 읽습니다.

*비교는 2026년 9월 기준 공개된 정보를 바탕으로 했습니다. Slowly의 기능이 바뀌었다면 알려 주세요 — 고치겠습니다.*
`,
        contentEn: `
# Lettie vs Slowly: two slow-letter apps, one real difference

Full disclosure first: **Lettie is ours.** So this isn't "we're better" — it's "where do they split." Slowly has more or less defined the slow-letter genre since 2017, and we like it. If all you want is a pen pal, Slowly is still a fine choice.

## What's the same

- **Letters take as long as the distance.** Seoul to Lisbon is about a day; to Tokyo, a few hours. Both apps treat that delay as the feature. Nobody replies instantly, so people write differently — longer, slower.
- **You collect stamps.** Country and seasonal stamps, stuck to letters and kept in an album, in both.
- **You don't start with a face.** Slowly uses avatars; Lettie uses pixel characters.

From here they diverge on five things.

## 1. Purpose — pen-pal friendship vs meeting someone through letters

Slowly is a **pen-pal** app end to end. The goal is a long correspondence with someone who shares your interests, found through interest matching and open letters.

Lettie is a pen-pal app too. What differs is how it starts: you pick up a letter a stranger released into the sky and reply, translation is free inside the app, and a few introduction cards arrive each day. No swiping, no scores. It's for people who would rather read one letter and answer it than search a directory and found "friends only" pen-pal apps not quite enough.

## 2. How you meet your first letter — matching vs Discover

In Slowly you search by interests, languages and region, get auto-matched, or write Open Letters.

Most first letters on Lettie start in **Discover.** Letters released to no one in particular float by as envelopes; three new ones drift close every eight hours. Open one you like, read it, reply — and it becomes a conversation for two. You pick by **what someone wrote**, not by their profile.

## 3. Translation — where you cross the language line

This is the biggest gap. On Lettie the **translate button is inside the letter, covers 28 languages,** and shows the original next to the translation. Free users get it. The default experience is: they write in their language, you read in yours.

Slowly doesn't put letter translation in the base experience; you go out to another tool or use a paid feature. That's a non-issue if your pen pal shares your language, and a big deal if you want to meet people regardless of language.

## 4. Profiles — avatar builder vs a character drawn from words

Slowly's avatars are assembled from parts. Lettie gives you sixteen pixel characters for free and, if you **describe how you look in words, draws your own in the same style.** There are no photos at the start at all.

## 5. Matching — none vs a few a day

Slowly finds pen pals through search and matching. Lettie sends a few introduction cards a day; if you like one, you write. It's a daily handful rather than an endless swipe, so you spend more time writing than choosing.

## Side by side

| | Lettie | Slowly |
|---|---|---|
| Purpose | Meeting someone through letters | Pen-pal friendship |
| First letter | Pick up letters strangers released | Interest matching · open letters |
| Delivery | 1–24 h by real distance | By real distance |
| Translation | In-app, one tap, 28 languages, free | External tools or paid |
| Profile | Pixel character; describe it and we draw it | Avatar builder |
| Matching | A few cards a day, choose who you meet | None |
| Stamps | Country stamps + random pixel stamps | Country & seasonal stamps |
| Price | Free; Plus subscription & gems | Free; coins |

## So who should use what

- **You want a long correspondence with someone who shares your hobbies** → Slowly. Bigger user base, an eight-year-old community.
- **You want to meet people regardless of language, chosen by what they wrote** → Lettie. Translation is the default; Discover lets you read before you choose.
- **You'd rather know someone by their words than their face** → Lettie. Characters first, letters first.
- **You just want to read what people around the world are thinking** → Either. Lettie's Discover opens several letters a day for free.

## One honest downside

Lettie is smaller than Slowly. If you need to find someone in a specific small country with a specific hobby tonight, Slowly wins. What we have is translation, Discover, and a letter that really flies across a globe. If that's what you're after, release one tonight. Someone reads it tomorrow morning.

*Based on public information as of September 2026. If Slowly has changed, tell us and we'll fix it.*
`,
    },
    'slowly-alternatives-2026': {
        id: 'slowly-alternatives-2026',
        title: 'Slowly 대안 앱 6가지 비교 (2026) — 느린 편지, 펜팔, 언어 교환',
        titleEn: '6 Slowly alternatives compared (2026): slow letters, pen pals, language exchange',
        description: 'Slowly가 아쉬웠던 이유별로 고른 대안 6가지. Lettie, InterPals, HelloTalk, Tandem, Penpal World, Ablo를 목적·번역·안전·비용 축으로 비교합니다.',
        descriptionEn: 'Six alternatives to Slowly, picked by the reason Slowly fell short: Lettie, InterPals, HelloTalk, Tandem, Penpal World and Ablo, compared on purpose, translation, safety and cost.',
        date: '2026-09-21',
        readTime: '9분',
        readTimeEn: '9 min',
        category: '비교',
        categoryEn: 'Comparison',
        image: '/v2/key-ko-s2.png',
        author: 'Lettie',
        keywords: ['Slowly 대안', 'Slowly 비슷한 앱', '슬로울리 대안', '펜팔 앱 추천', '느린 편지 앱', '언어 교환 앱', 'InterPals', 'HelloTalk', 'Tandem', 'Lettie'],
        keywordsEn: ['Slowly alternatives', 'apps like Slowly', 'Slowly app alternative 2026', 'best pen pal apps', 'slow letter apps', 'language exchange apps', 'InterPals alternative', 'HelloTalk vs Tandem'],
        faq: [
            { q: 'Slowly와 가장 비슷한 앱은 무엇인가요?', a: '편지가 거리만큼 걸려 도착한다는 핵심이 같은 앱은 Lettie입니다. 언어 교환이 목적이면 HelloTalk·Tandem, 이메일 펜팔이면 InterPals가 가깝습니다.' },
            { q: 'Slowly 대안 앱들은 무료인가요?', a: '이 글의 여섯 앱 모두 무료로 시작할 수 있습니다. 차이는 유료 항목입니다. Lettie는 번역이 무료이고 우표·캐릭터·무제한 대화가 유료 항목입니다.' },
            { q: '사진 없이 시작할 수 있는 펜팔 앱이 있나요?', a: 'Lettie는 사진 대신 픽셀 캐릭터로 시작하며, 처음 만나는 사람에게 사진이 보이지 않습니다.' },
        ],
        faqEn: [
            { q: 'Which app is most similar to Slowly?', a: 'Lettie keeps the same core: letters take time to arrive based on distance. For language exchange HelloTalk and Tandem are closer; for email-style pen pals, InterPals.' },
            { q: 'Are the Slowly alternatives free?', a: 'All six apps in this article are free to start. The difference is what is paid: in Lettie translation is free, while stamps, custom characters and unlimited conversation are paid extras.' },
            { q: 'Is there a pen-pal app that works without photos?', a: 'Lettie starts every profile as a pixel character, and no photograph is shown to someone you meet for the first time.' },
        ],
        content: `
# Slowly 대안 앱 6가지 비교 (2026)

Slowly를 쓰다가 다른 앱을 찾는 이유는 대개 셋 중 하나입니다. **언어가 안 맞아서**, **친구 이상을 기대해서**, 아니면 **답장이 끊겨서**. 이유가 다르면 답도 다릅니다. 아래는 이유별로 고른 여섯 앱입니다. Lettie는 저희 앱이라 그 부분은 그렇게 읽어 주세요.

## 한눈에

| 앱 | 한 줄 요약 | 번역 | 편지 지연 | 목적 |
|---|---|---|---|---|
| **Lettie** | 지구본 위를 날아가는 편지, 발견에서 줍기 | 앱 안, 28개 언어, 무료 | 거리 기준 1~24h | 펜팔 (편지 줍기·소개 카드) |
| **Slowly** | 느린 편지의 원조 | 외부·유료 | 거리 기준 | 펜팔 |
| **InterPals** | 가장 큰 펜팔 커뮤니티(웹 중심) | 없음 | 즉시 | 펜팔·언어 |
| **HelloTalk** | 원어민 교정 채팅 | 내장 | 즉시 | 언어 교환 |
| **Tandem** | 화상·음성 언어 교환 | 내장 | 즉시 | 언어 교환 |
| **Penpal World** | 오래된 펜팔 매칭 | 없음 | 즉시 | 펜팔 |
| **Ablo** | 자동 번역 채팅 | 내장 | 즉시 | 가벼운 대화 |

## 1. 언어가 벽이었다면 → Lettie, HelloTalk, Ablo

Slowly에서 가장 자주 나오는 아쉬움이 번역입니다. 편지를 복사해 번역기에 붙였다가 다시 돌아오는 왕복이 편지 한 통마다 반복됩니다.

- **Lettie**는 편지를 열면 번역 버튼이 그 자리에 있습니다. 28개 언어, 원문과 번역을 나란히. 무료 사용자도 씁니다. 편지가 거리만큼 시간이 걸려 도착하는 느린 구조는 Slowly와 같습니다.
- **HelloTalk**는 채팅이지만 문장 단위 교정과 번역이 붙어 있어 언어 학습 목적이면 가장 효율이 좋습니다. 대신 "편지"의 호흡은 없습니다.
- **Ablo**는 모든 메시지가 자동 번역되는 채팅입니다. 가볍게 여러 나라 사람과 이야기해 보고 싶을 때. 깊이는 기대하지 않는 게 좋습니다.

## 2. 친구 이상을 기대한다면 → Lettie

Slowly는 펜팔 검색과 관심사 매칭으로 상대를 찾습니다. Lettie는 **남이 띄운 편지를 주워 답장하는 것**으로 시작하고, 하루 몇 장의 소개 카드가 옵니다. 사진과 스와이프는 없습니다. 상대를 검색해 고르기보다 편지 한 통에서 시작하고 싶은 사람을 위한 자리입니다.

## 3. 사람이 많은 곳을 원한다면 → InterPals, Penpal World

- **InterPals**는 2000년대부터 이어진 가장 큰 펜팔 커뮤니티입니다. 특정 나라·도시의 사람을 오늘 찾는다면 여기가 가장 빠릅니다. 대신 웹 중심 UI, 첫 메시지부터 연락처를 묻는 사람, 스팸 계정이 단점으로 자주 언급됩니다.
- **Penpal World**는 프로필 기반 매칭이 단순하고 오래됐습니다. 광고와 오래된 디자인을 감수할 수 있다면.

## 4. 말하기 연습이 목적이라면 → Tandem

**Tandem**은 텍스트보다 음성·화상 통화에 강합니다. 편지와는 반대편에 있는 앱이지만, "언어 교환"이라는 이유로 Slowly를 썼다면 이쪽이 더 맞을 수 있습니다.

## 5. 답장이 끊겨서 떠난다면

이건 앱을 바꿔도 반복되기 쉬운 문제라 한마디만. 답장이 끊기는 가장 큰 이유는 첫 편지가 **질문 없이 자기소개만** 하기 때문입니다. 어느 앱에서든 첫 편지 끝에 상대가 답하기 쉬운 질문 하나를 두세요. Lettie의 발견은 상대가 쓴 글을 먼저 읽고 답장하는 구조라 이 문제가 조금 덜합니다 — 답장할 거리가 이미 있으니까요.

## 정리

- 번역이 핵심이면 **Lettie**(편지) 또는 **HelloTalk**(채팅)
- 만남까지 열어 두고 싶으면 **Lettie**
- 사람 수가 핵심이면 **InterPals**
- 말하기 연습이면 **Tandem**
- 느린 편지 자체가 좋고 언어가 같다면 **Slowly**를 계속 쓰는 게 맞습니다

*2026년 9월 기준 공개 정보로 썼습니다. 틀린 부분이 있으면 알려 주세요.*
`,
        contentEn: `
# 6 Slowly alternatives compared (2026)

People leave Slowly for one of three reasons: **the language gap**, **wanting more than friendship**, or **replies drying up**. Different reasons, different answers. Here are six apps sorted by reason. Lettie is ours — read that part accordingly.

## At a glance

| App | One line | Translation | Letter delay | Purpose |
|---|---|---|---|---|
| **Lettie** | Letters fly across a globe; pick up strangers' letters | In-app, 28 languages, free | 1–24 h by distance | Pen pals (pick up letters · introduction cards) |
| **Slowly** | The original slow-letter app | External / paid | By distance | Pen pals |
| **InterPals** | The biggest pen-pal community (web-first) | None | Instant | Pen pals · languages |
| **HelloTalk** | Chat with native-speaker corrections | Built in | Instant | Language exchange |
| **Tandem** | Voice & video language exchange | Built in | Instant | Language exchange |
| **Penpal World** | Old-school pen-pal matching | None | Instant | Pen pals |
| **Ablo** | Auto-translated chat | Built in | Instant | Light conversation |

## 1. If language was the wall → Lettie, HelloTalk, Ablo

The most common complaint about Slowly is translation: copy the letter out to a translator, paste it back, repeat for every letter.

- **Lettie** puts the translate button inside the letter — 28 languages, original next to the translation, free. The slow, distance-based delivery is the same idea as Slowly.
- **HelloTalk** is chat, but sentence-level corrections and translation make it the most efficient tool if learning is the goal. No letter rhythm, though.
- **Ablo** auto-translates every message. Good for casually talking to people in many countries; don't expect depth.

## 2. If you want more than friendship → Lettie

Slowly finds pen pals through search and interest matching. Lettie starts with **picking up a letter a stranger released** and replying, plus a few introduction cards a day. No photos, no swiping. It's for people who found "photo first" dating apps uncomfortable.

## 3. If you want the biggest crowd → InterPals, Penpal World

- **InterPals** has been the largest pen-pal community since the 2000s. If you need someone in a specific country or city tonight, it's the fastest. The usual downsides: web-first UI, people asking for WhatsApp in the first message, spam accounts.
- **Penpal World** is simple profile-based matching that's been around forever. Fine if you can live with ads and a dated design.

## 4. If speaking practice is the point → Tandem

**Tandem** is strongest at voice and video calls. It's the opposite end from letters, but if "language exchange" was why you used Slowly, this may fit better.

## 5. If you're leaving because replies died

One note, because this follows you to the next app: replies die mostly because the first letter is **all introduction and no question.** Whatever app you use, end the first letter with one question that's easy to answer. Lettie's Discover softens this a little — you read what someone wrote before you reply, so there's already something to answer.

## Summary

- Translation is the point → **Lettie** (letters) or **HelloTalk** (chat)
- You want the door open to meeting someone → **Lettie**
- Numbers matter most → **InterPals**
- Speaking practice → **Tandem**
- You like slow letters and share a language → keep **Slowly**

*Based on public information as of September 2026. Corrections welcome.*
`,
    },
    'letter-delivery-time-by-distance': {
        id: 'letter-delivery-time-by-distance',
        title: '편지가 도착하는 데 얼마나 걸리나 — 도시별 배달 시간표 (Lettie)',
        titleEn: 'How long does a letter take to arrive? Delivery times by city (Lettie)',
        description: 'Lettie의 편지는 두 도시 사이 실제 거리로 도착 시간을 계산합니다. 서울에서 도쿄·하노이·리스본·뉴욕까지 각각 몇 시간 걸리는지, 왜 일부러 느리게 만들었는지 설명합니다.',
        descriptionEn: 'Lettie computes delivery time from the real distance between two cities. How long from Seoul to Tokyo, Hanoi, Lisbon and New York — and why we made letters slow on purpose.',
        date: '2026-09-21',
        readTime: '5분',
        readTimeEn: '5 min',
        category: '가이드',
        categoryEn: 'Guide',
        image: '/v2/key-ko-s1.png',
        author: 'Lettie',
        keywords: ['편지 도착 시간', 'Lettie 배달 시간', '느린 편지 앱', '편지 지연', '거리 기준 배달', '펜팔 앱 도착', '지구본 편지'],
        keywordsEn: ['Lettie delivery time', 'how long letter arrive Lettie', 'slow letter app delivery', 'distance based delivery', 'letter delay app', 'Slowly delivery time comparison'],
        content: `
# 편지가 도착하는 데 얼마나 걸리나

Lettie에서 편지를 보내면 바로 도착하지 않습니다. 봉투가 지구본 위로 떠올라 상대가 있는 도시까지 날아가고, **두 도시 사이의 실제 거리**로 계산된 시간이 지나야 우체통에 닿습니다. 자주 받는 질문이라 표로 정리했습니다.

## 서울에서 보내면

| 받는 도시 | 대략 거리 | 도착까지 |
|---|---|---|
| 같은 나라(부산 등) | ~300 km | 1~2시간 |
| 도쿄 | 1,150 km | 약 2~3시간 |
| 타이베이 | 1,480 km | 약 3시간 |
| 하노이 | 2,740 km | 약 5시간 |
| 방콕 | 3,720 km | 약 6~7시간 |
| 델리 | 4,690 km | 약 8시간 |
| 시드니 | 8,300 km | 약 13~14시간 |
| 이스탄불 | 7,960 km | 약 13시간 |
| 리스본 | 10,300 km | 약 16시간 |
| 런던 | 8,880 km | 약 14시간 |
| 뉴욕 | 11,050 km | 약 17~18시간 |
| 상파울루 | 18,300 km | 약 24시간 (상한) |

배달 시간은 **최소 30분, 최대 24시간**입니다. 같은 나라 안에서는 1~2시간 사이에서 조금 무작위로 정해집니다. 정확한 값은 보내는 순간 봉투 밑에 "N시간 뒤 도착"으로 표시되고, 지구본에서 봉투가 어디쯤 가는지 볼 수 있습니다.

## 왜 일부러 느리게 만들었나

즉시 도착하는 메시지는 즉시 답을 요구합니다. 그래서 짧아지고, 가벼워지고, 결국 "ㅇㅇ"이 됩니다. 도착까지 14시간이 걸린다는 걸 알면 사람들은 다르게 씁니다. 더 길게, 오늘 있었던 일을 담아서, 상대가 읽을 시간을 상상하며.

이건 저희가 지어낸 이야기가 아니라 실제 편지들에서 본 것입니다. 하노이에서 온 편지는 비가 짧고 굵어서 다들 안장 밑에 우비를 넣어 둔다는 이야기로 시작했습니다. 그런 문장은 채팅에서는 안 나옵니다.

## 기다리는 동안 할 수 있는 것

- **지구본**에서 내 편지가 어디쯤 가는지 봅니다. 도착하면 알림이 옵니다. 2.0.6부터는 도착 1시간 전에 "곧 도착해요" 알림도 옵니다.
- **발견**에서 남이 띄운 편지를 읽습니다. 8시간마다 새 봉투 세 장이 다가옵니다.
- 답장이 오기 전까지 같은 사람에게 다음 편지는 쓸 수 없습니다(번갈아 쓰기). 기다리지 않고 쓰고 싶으면 젬으로 **무제한 대화**를 열 수 있습니다.

## Slowly와 같은가요?

원리는 같습니다 — Slowly도 거리로 지연을 계산합니다. 다른 점은 도착 시간을 지구본 위 봉투의 위치로 보여 주는 것, 그리고 도착한 편지를 28개 언어로 바로 번역해 읽을 수 있다는 것입니다. 자세한 비교는 [Lettie vs Slowly](/blog/lettie-vs-slowly)에 있습니다.
`,
        contentEn: `
# How long does a letter take to arrive?

A letter on Lettie doesn't land right away. The envelope lifts off the globe, flies to the other person's city, and reaches their mailbox after a delay computed from the **real distance between the two cities.** We get asked about this a lot, so here's the table.

## Sent from Seoul

| To | Distance | Arrives in |
|---|---|---|
| Same country (Busan etc.) | ~300 km | 1–2 hours |
| Tokyo | 1,150 km | about 2–3 hours |
| Taipei | 1,480 km | about 3 hours |
| Hanoi | 2,740 km | about 5 hours |
| Bangkok | 3,720 km | about 6–7 hours |
| Delhi | 4,690 km | about 8 hours |
| Sydney | 8,300 km | about 13–14 hours |
| Istanbul | 7,960 km | about 13 hours |
| Lisbon | 10,300 km | about 16 hours |
| London | 8,880 km | about 14 hours |
| New York | 11,050 km | about 17–18 hours |
| São Paulo | 18,300 km | about 24 hours (cap) |

Delivery is **at least 30 minutes and at most 24 hours.** Within one country it lands somewhere between one and two hours, slightly randomized. The exact time shows under the envelope the moment you send ("lands in N hours"), and you can watch the envelope cross the globe.

## Why we made it slow on purpose

An instant message asks for an instant answer. So messages get shorter, lighter, and eventually become "ok". When you know it takes 14 hours to arrive, you write differently — longer, with the day you actually had, imagining the moment they'll read it.

This isn't a story we made up; it's what the letters look like. One from Hanoi opened with how the rain there is short and heavy, so everyone keeps a poncho under the motorbike seat. Sentences like that don't happen in chat.

## While you wait

- Watch the envelope on the **globe**. You get a notification when it lands, and from 2.0.6 a "landing soon" notification an hour before.
- Read letters strangers released in **Discover** — three new envelopes drift close every eight hours.
- You can't write the same person again until their reply lands (turn-taking). If you'd rather not wait, gems unlock an **unlimited conversation.**

## Is this the same as Slowly?

Same principle — Slowly also computes delay from distance. What's different is that you see the delay as an envelope moving across a globe, and that a letter that lands can be translated into any of 28 languages right there. The full comparison is in [Lettie vs Slowly](/en/blog/lettie-vs-slowly).
`,
    },
    'first-letter-examples-discover': {
        id: 'first-letter-examples-discover',
        title: '답장이 오는 첫 편지 예문 7가지 — 발견에서 주운 편지에 이렇게 답하세요',
        titleEn: '7 first-letter examples that get replies — how to answer a letter you picked up',
        description: '펜팔 첫 편지는 자기소개가 아니라 답장입니다. Lettie 발견에서 주운 편지에 답할 때 실제로 답장이 잘 오는 구조와 상황별 예문 7가지, 피해야 할 문장.',
        descriptionEn: 'A first pen-pal letter is a reply, not a bio. Seven example openers for answering a letter you picked up in Lettie Discover, the structure that gets replies, and lines to avoid.',
        date: '2026-09-21',
        readTime: '7분',
        readTimeEn: '7 min',
        category: '가이드',
        categoryEn: 'Guide',
        image: '/v2/key-ko-s3.png',
        author: 'Lettie',
        keywords: ['펜팔 첫 편지', '펜팔 첫 편지 예문', '외국인 펜팔 첫 메시지', '편지 답장 잘 받는 법', 'Lettie 발견', '펜팔 인사말', '영어 펜팔 편지 예문'],
        keywordsEn: ['first pen pal letter example', 'how to write a first letter to a pen pal', 'pen pal opening lines', 'letter that gets a reply', 'Lettie Discover', 'pen pal introduction examples'],
        content: `
# 답장이 오는 첫 편지 예문 7가지

Lettie의 첫 편지는 대부분 **발견**에서 시작합니다. 남이 띄운 편지를 읽고 답장하는 것. 그래서 "안녕하세요, 저는 28살이고 서울에 살고…"로 시작하면 이미 어긋납니다. 상대는 자기가 쓴 글에 대한 반응을 기다리고 있으니까요.

## 답장이 오는 구조 (세 문단이면 충분)

1. **상대 글에서 한 문장을 집어 반응한다.** 읽었다는 증거이자, 왜 하필 그 편지를 주웠는지의 이유.
2. **내 쪽의 비슷한 장면 하나.** 자기소개 대신 장면. 나이·직업은 나중에 저절로 나옵니다.
3. **답하기 쉬운 질문 하나.** "왜"보다 "무엇"이 답하기 쉽습니다.

## 예문 7가지

### 1. 날씨·계절 이야기에
> 하노이 비가 짧고 굵다는 문장에서 멈췄어요. 여기 서울은 지금 장마 끝물이라 하루 종일 미지근한 비가 옵니다. 우비 대신 다들 편의점 우산을 삽니다. 그쪽 우비는 무슨 색이 제일 많아요?

### 2. 음식 이야기에
> 아침에 국수를 먹는다는 게 부러웠어요. 저는 아침을 거의 안 먹는데, 먹는 날은 편의점 삼각김밥입니다. 그 국수는 집에서 만드나요, 아니면 골목 가게에서 사 먹나요?

### 3. 일·공부 힘들다는 편지에
> 시험 끝나고 아무것도 하기 싫다는 문장, 저도 지난달에 똑같이 썼을 거예요. 저는 그럴 때 지하철 한 바퀴를 그냥 탑니다. 당신은 시험 끝나면 제일 먼저 뭘 해요?

### 4. 음악·영화 이야기에
> 그 앨범을 버스에서 듣는다고 하셨죠. 저는 같은 앨범을 설거지할 때 틀어요. 이상하게 3번 트랙에서 항상 손이 느려집니다. 당신은 몇 번 트랙이에요?

### 5. 외로움·심심함 이야기에
> 주말에 아무하고도 말을 안 했다는 문장이 제일 오래 남았어요. 저도 그런 주말이 있어서 이 앱을 깔았습니다. 그 주말에 그래도 제일 좋았던 순간이 하나 있다면요?

### 6. 여행 이야기에
> 리스본 언덕이 생각보다 가파르다는 말에 웃었어요. 저는 부산 감천마을에서 똑같은 생각을 했거든요. 그 도시에서 사진 말고 냄새로 기억나는 게 있나요?

### 7. 별말 없이 짧게 띄운 편지에
> 짧게 쓰신 편지가 오히려 눈에 들어왔어요. 저도 긴 글이 부담스러운 날이 있어서요. 오늘은 어떤 날이었는지 한 줄만 더 들려주세요.

## 피해야 할 문장

- **"안녕하세요! 저는 ___입니다. 친구 하고 싶어요."** — 상대 글을 안 읽은 티가 납니다.
- **질문 세 개 이상** — 하나만 남기세요. 여러 개면 아무것도 답하지 않습니다.
- **"왜 그렇게 생각하세요?"** — 설명을 요구하는 질문은 무겁습니다. "무엇을/언제/어디서"로.
- **첫 편지에 연락처·SNS** — 2.0에서는 애초에 물을 필요가 없습니다. 대화는 앱 안에서 이어지고, 편지가 시간을 두고 오갑니다.

## 번역을 켜 두고 써도 될까요

됩니다. 상대는 자기 언어로 읽습니다. 다만 번역이 잘 되게 **한 문장에 하나의 뜻**, 관용구와 줄임말은 피하세요. "ㅋㅋ" 대신 "웃었어요"라고 쓰면 28개 언어 어디서든 웃음이 전달됩니다.

보내고 나면 봉투가 지구본 위로 떠오릅니다. 도착까지 몇 시간이 걸리고, 답장은 그 사람의 아침에 옵니다. 그 사이엔 아무것도 안 해도 됩니다.
`,
        contentEn: `
# 7 first-letter examples that get replies

On Lettie the first letter usually starts in **Discover** — you read a letter someone released and reply to it. So opening with "Hi, I'm 28 and I live in Seoul…" is already off: the other person is waiting for a reaction to what they wrote.

## The structure that gets replies (three paragraphs is enough)

1. **Pick one sentence from their letter and react to it.** Proof you read it, and the reason you picked this envelope.
2. **One matching scene from your side.** A scene instead of a bio — age and job come out on their own later.
3. **One question that's easy to answer.** "What" is easier than "why".

## Seven examples

### 1. To a letter about weather or seasons
> I stopped at the line about Hanoi rain being short and heavy. Here in Seoul it's the tail end of monsoon, so it's lukewarm rain all day and everyone buys convenience-store umbrellas instead of ponchos. What colour are most of the ponchos there?

### 2. To a letter about food
> I was jealous of noodles for breakfast. I mostly skip breakfast, and on the days I don't it's a convenience-store rice triangle. Do you make the noodles at home or buy them from a place in the alley?

### 3. To a letter about being tired of work or study
> "After the exam I didn't want to do anything" — I could have written that line last month. My version is riding the subway loop for no reason. What's the first thing you do when an exam ends?

### 4. To a letter about music or films
> You said you listen to that album on the bus. I play the same album while doing dishes, and for some reason my hands always slow down on track three. Which track is yours?

### 5. To a letter about loneliness or boredom
> The line about not talking to anyone all weekend stayed with me the longest. I've had weekends like that — it's why I installed this app. Was there one moment that weekend that was still good?

### 6. To a letter about travel
> I laughed at "the Lisbon hills are steeper than they look". I thought exactly that in Gamcheon village in Busan. Is there something about that city you remember by smell rather than by photo?

### 7. To a very short letter
> Your short letter is actually what caught my eye — I have days when long writing feels heavy too. Tell me one more line about what today was like.

## Lines to avoid

- **"Hi! I'm ___. I want to be friends."** — it shows you didn't read their letter.
- **Three or more questions** — leave one. With several, people answer none.
- **"Why do you think that?"** — questions that demand an explanation feel heavy. Use what / when / where.
- **Contact details or social handles in the first letter** — in 2.0 there's no need: the conversation continues in the app, and letters take their time.

## Can I write with translation on?

Yes. They read in their language. To translate well, keep **one idea per sentence** and skip idioms and slang. "That made me laugh" travels across 28 languages; "lol" doesn't always.

After you send, the envelope lifts off the globe. It takes hours to land, and the reply arrives on their morning. In between, you don't have to do anything at all.
`,
    },
    'penpal-app-with-translation': {
        id: 'penpal-app-with-translation',
        title: '번역되는 펜팔 앱 고르는 법 — "28개 언어"가 실제로 뜻하는 것',
        titleEn: 'How to choose a pen-pal app with translation — what "28 languages" actually means',
        description: '언어가 다른 사람과 편지를 주고받으려면 번역이 어디에 붙어 있느냐가 전부입니다. 앱 안 번역·외부 번역기·유료 번역의 차이, 번역이 잘 되게 쓰는 법, Lettie가 28개 언어를 처리하는 방식.',
        descriptionEn: 'If your pen pal speaks another language, where translation lives is everything. In-app vs external vs paid translation, how to write so it translates well, and how Lettie handles 28 languages.',
        date: '2026-09-21',
        readTime: '6분',
        readTimeEn: '6 min',
        category: '가이드',
        categoryEn: 'Guide',
        image: '/v2/key-ko-s2.png',
        author: 'Lettie',
        keywords: ['번역 펜팔 앱', '자동 번역 펜팔', '외국인 친구 앱 번역', '편지 번역 앱', '28개 언어 번역', '언어 달라도 펜팔', 'Lettie 번역'],
        keywordsEn: ['pen pal app with translation', 'auto translate pen pal app', 'letter translation app', 'talk to foreigners without knowing language', 'pen pal app 28 languages', 'Lettie translation'],
        content: `
# 번역되는 펜팔 앱 고르는 법

"영어 못해도 외국인 펜팔 할 수 있나요?" 답은 앱마다 다릅니다. 번역이 **어디에** 붙어 있는지가 경험을 갈라놓습니다.

## 세 가지 방식

**① 앱 안, 편지 안에 번역 버튼이 있다.** 편지를 열고 한 번 누르면 원문 옆에 번역이 뜹니다. 왕복이 없습니다. Lettie가 이 방식이고, 28개 언어를 무료로 처리합니다.

**② 외부 번역기로 왕복한다.** 편지를 복사 → 번역기 → 답장을 쓰고 → 다시 번역 → 붙여넣기. 편지 한 통에 네 번 앱을 오갑니다. 처음엔 괜찮다가 세 통째부터 귀찮아지고, 귀찮음은 답장 지연으로, 지연은 관계 종료로 이어집니다.

**③ 유료 번역.** 번역이 코인이나 구독에 묶여 있습니다. 언어가 다른 상대와 계속 쓰면 비용이 편지마다 붙습니다.

## "28개 언어"는 무엇을 뜻하나

Lettie 기준으로 두 가지를 뜻합니다.

- **편지 번역**: 상대가 어느 언어로 썼든 내 언어로 번역합니다. 원문과 번역을 나란히 보여 주기 때문에 상대의 표현을 그대로 배울 수도 있습니다.
- **앱 화면**: 메뉴·버튼·알림이 28개 언어로 나옵니다. 한국어, 영어, 일본어, 중국어, 스페인어, 포르투갈어, 프랑스어, 독일어, 이탈리아어, 러시아어, 터키어, 베트남어, 태국어, 인도네시아어, 힌디어, 아랍어, 벵골어, 체코어, 그리스어, 페르시아어, 필리핀어, 말레이어, 네덜란드어, 폴란드어, 루마니아어, 스와힐리어, 우크라이나어, 우르두어.

## 번역이 잘 되게 쓰는 다섯 가지

1. **한 문장에 하나의 뜻.** 긴 복문은 어느 번역기든 흔들립니다.
2. **줄임말·유행어를 풀어 쓴다.** "ㅋㅋ" → "웃었어요", "존맛" → "정말 맛있었어요".
3. **주어를 생략하지 않는다.** 한국어는 주어를 자주 빼는데, 번역에서 "나/너/그 사람"이 뒤바뀝니다.
4. **고유명사는 그대로 두고 한 줄 설명.** "감천마을(부산의 언덕 동네)".
5. **농담은 상황을 함께 적는다.** 말장난은 번역을 넘지 못하지만 상황 유머는 넘습니다.

## 그래도 언어를 배우고 싶다면

번역을 켜 두고도 실력은 늡니다. 원문과 번역을 나란히 보는 습관 때문입니다. 상대가 쓴 문장 중 마음에 드는 표현 하나를 다음 편지에 그대로 써 보세요. 그게 가장 오래 남는 학습입니다. 더 구체적인 방법은 [펜팔로 외국어 늘리기](/blog/language-exchange-tips)에 있습니다.
`,
        contentEn: `
# How to choose a pen-pal app with translation

"Can I have a pen pal abroad without speaking their language?" It depends on the app — specifically on **where** translation lives.

## Three ways apps do it

**① A translate button inside the letter.** Open the letter, tap once, the translation appears next to the original. No round trip. Lettie works this way, with 28 languages, free.

**② Round-tripping through an external translator.** Copy the letter → translator → write a reply → translate again → paste. Four app switches per letter. Fine at first, tedious by the third letter, and tedium becomes late replies, and late replies become the end.

**③ Paid translation.** Translation tied to coins or a subscription. If your pen pal speaks another language, the cost recurs with every letter.

## What "28 languages" means

On Lettie it means two things.

- **Letter translation**: whatever language they wrote in, you read it in yours. Original and translation sit side by side, so you can also pick up their phrasing.
- **The app itself**: menus, buttons and notifications in 28 languages — Korean, English, Japanese, Chinese, Spanish, Portuguese, French, German, Italian, Russian, Turkish, Vietnamese, Thai, Indonesian, Hindi, Arabic, Bengali, Czech, Greek, Persian, Filipino, Malay, Dutch, Polish, Romanian, Swahili, Ukrainian, Urdu.

## Five habits that make translation work

1. **One idea per sentence.** Long compound sentences wobble in any translator.
2. **Spell out slang.** "lol" → "that made me laugh".
3. **Keep the subject in.** Dropped subjects flip "I / you / they" in translation.
4. **Leave proper nouns alone, add a short gloss.** "Gamcheon (a hillside neighbourhood in Busan)".
5. **Explain the situation behind a joke.** Puns don't cross; situational humour does.

## If you still want to learn the language

You'll still improve with translation on, because you keep seeing the original next to it. Take one phrase you liked from their letter and use it in your next one. That's the learning that sticks. More in [language exchange through letters](/en/blog/language-exchange-tips).
`,
    },
    'no-photo-dating-pixel-character': {
        id: 'no-photo-dating-pixel-character',
        title: '사진 없는 펜팔 앱은 어떻게 다른가 — 픽셀 캐릭터로 시작하면 생기는 일',
        titleEn: 'What changes when a pen pal app has no photos — starting as a pixel character',
        description: '프로필 사진을 빼면 대화가 어떻게 달라지는지. Lettie가 사진 대신 픽셀 캐릭터로 시작하는 이유, 나만의 캐릭터를 글로 그리는 법, 그리고 솔직한 단점.',
        descriptionEn: 'How conversations change when profile photos are gone. Why Lettie starts with a pixel character instead of a face, how to draw your own from a description, and the honest downside.',
        date: '2026-09-21',
        readTime: '6분',
        readTimeEn: '6 min',
        category: '감성',
        categoryEn: 'Emotional',
        image: '/v2/key-ko-s4.png',
        author: 'Lettie',
        keywords: ['사진 없는 펜팔 앱', '외모 안 보는 친구 사귀기', '픽셀 캐릭터 프로필', '얼굴 없는 프로필', '편지 펜팔', 'Lettie 캐릭터', '아바타 프로필 앱'],
        keywordsEn: ['pen pal app without photos', 'no photo pen pal app', 'personality first friendship app', 'pixel avatar profile', 'faceless profile app', 'Lettie character', 'pen pal app no swiping'],
        content: `
# 사진 없는 펜팔 앱은 어떻게 다른가

사람을 만나는 앱 대부분은 첫 화면이 얼굴입니다. 그래서 0.5초 안에 결정이 나고, 그 뒤의 대화는 그 결정을 확인하는 절차가 됩니다. Lettie는 순서를 뒤집었습니다. 처음엔 **픽셀 캐릭터**와 **편지**만 있습니다.

## 사진을 빼면 실제로 생기는 일

- **첫 편지가 길어집니다.** 보여 줄 게 글밖에 없으니까요. 평균적으로 채팅 첫 메시지의 대여섯 배 길이입니다.
- **선택 기준이 바뀝니다.** 발견에서 봉투를 고를 때 보이는 건 첫 문장과 상대의 캐릭터, 우표뿐입니다. "이 문장을 쓴 사람이 궁금하다"가 유일한 이유가 됩니다.
- **거절이 덜 아픕니다.** 답장이 안 와도 그건 편지 한 통에 대한 것이지 얼굴에 대한 것이 아닙니다.
- **쓸데없는 대화가 줄어듭니다.** "뭐 해?"로 시작하는 대화가 없습니다. 편지는 시간이 걸려 도착하니까 "뭐 해?"를 물을 수 없습니다.

## 캐릭터는 어떻게 생겼나

작은 전신 픽셀 캐릭터 16종이 기본으로 있고 언제든 무료로 바꿉니다. 그리고 **"짧은 곱슬머리, 노란 우비, 안경"** 처럼 생김새를 글로 적으면 같은 그림체로 나만의 캐릭터를 그려 줍니다. 얼굴을 닮게 그리는 게 아니라 **분위기**를 그립니다. 그게 이 앱에서 "나"를 보여 주는 방식입니다.

## 그럼 얼굴은 영영 안 보나요

편지를 주고받다 보면 자연스럽게 사진을 나눕니다. 편지에 사진을 동봉할 수 있고, 그건 두 사람이 정합니다. 앱이 정하는 건 **순서**뿐입니다 — 글이 먼저, 얼굴은 나중에.

## 솔직한 단점

- 외모가 중요한 사람에게는 비효율적입니다. 이 앱은 그런 분께 맞지 않습니다.
- 편지 한 통이 도착하는 데 몇 시간이 걸립니다. 오늘 밤 당장 누군가와 이야기하고 싶다면 채팅 앱이 낫습니다.
- 사용자 수가 큰 소셜 앱보다 적습니다. 대신 여기 있는 사람들은 편지를 쓰러 온 사람들입니다.

## 이 방식이 맞는 사람

- 사진으로 평가받는 게 지쳤다
- 대화가 길어지면 오히려 편하다
- 외국 사람과의 만남에 열려 있다 (번역은 앱이 합니다)

맞다면 오늘 밤 발견에서 봉투 하나를 열어 보세요. 그 편지를 쓴 사람의 얼굴은 모르지만, 무슨 생각을 하는 사람인지는 압니다. 얼굴부터 보는 앱에서는 보통 그 반대죠.
`,
        contentEn: `
# What changes when a pen pal app has no photos

On most apps for meeting people, the first screen is a face. The decision happens in half a second, and the conversation after that is a procedure to confirm it. Lettie flips the order. At the start there is only a **pixel character** and a **letter.**

## What actually happens when the photos are gone

- **First letters get longer.** Words are all you have to show. They run several times the length of a first chat message.
- **The selection criterion changes.** In Discover you see an envelope's first line, the sender's character and a stamp. "I'm curious about whoever wrote this sentence" becomes the only reason to open it.
- **Rejection stings less.** No reply is about one letter, not about your face.
- **Empty conversation disappears.** Nothing starts with "what's up?" — a letter takes hours to arrive, so you can't ask.

## What the character looks like

Sixteen small full-body pixel characters come free and you can switch any time. And if you describe yourself in words — **"short curly hair, yellow raincoat, glasses"** — we draw your own in the same style. It doesn't try to look like your face; it draws your **mood.** That's how you show up here.

## So do you never see a face?

You do, naturally, once letters are flowing. You can attach photos to a letter, and the two of you decide when. The app only decides the **order** — words first, faces later.

## The honest downsides

- If looks are what matter to you, this is inefficient. The app isn't for you.
- A letter takes hours to arrive. If you want to talk to someone tonight, use a chat app.
- Fewer people than the big social apps. The ones here came to write letters.

## Who this is for

- You're tired of being judged by a photo
- Longer conversations feel easier to you, not harder
- You're open to meeting someone abroad (the app does the translating)

If that's you, open one envelope in Discover tonight. You won't know the writer's face, but you'll know how they think. On face-first apps it's usually the other way round.
`,
    },
    'best-penpal-apps-2026': {
        id: 'best-penpal-apps-2026',
        title: '2026 펜팔 앱 추천 7가지 — 목적별로 고르는 법 (무료 기준)',
        titleEn: 'Best pen-pal apps in 2026 — 7 picks by what you want (free tiers compared)',
        description: '느린 편지, 언어 교환, 실제 만남, 익명 대화 — 목적이 다르면 맞는 펜팔 앱도 다릅니다. Lettie, Slowly, InterPals, HelloTalk, Tandem, Ablo, Penpal World를 무료 범위 기준으로 정리했습니다.',
        descriptionEn: 'Slow letters, language exchange, actually meeting someone, anonymous conversation — different goals, different apps. Lettie, Slowly, InterPals, HelloTalk, Tandem, Ablo and Penpal World compared on what the free tier gives you.',
        date: '2026-09-21',
        readTime: '8분',
        readTimeEn: '8 min',
        category: '비교',
        categoryEn: 'Comparison',
        image: '/v2/key-ko-s1.png',
        author: 'Lettie',
        keywords: ['펜팔 앱 추천', '펜팔 어플 추천 2026', '외국인 친구 사귀는 앱', '무료 펜팔 앱', '해외 펜팔 앱', '언어 교환 앱 추천', '편지 앱 추천'],
        keywordsEn: ['best pen pal apps 2026', 'pen pal apps free', 'apps to make friends abroad', 'international pen pal app', 'letter writing app', 'language exchange app recommendation'],
        faq: [
            { q: '2026년 무료로 쓸 수 있는 펜팔 앱은 무엇인가요?', a: '이 글의 일곱 앱 모두 무료로 시작할 수 있습니다. Slowly·Lettie는 느린 편지, HelloTalk·Tandem은 언어 교환, InterPals·Penpal World는 이메일식 펜팔에 가깝습니다.' },
            { q: '외국어를 못해도 펜팔 앱을 쓸 수 있나요?', a: '네. Lettie는 편지 안의 번역 버튼으로 28개 언어를 무료로 번역하고, HelloTalk·Tandem에도 번역 도구가 있습니다.' },
            { q: '펜팔 앱에서 첫 편지는 어떻게 시작하나요?', a: '상대 프로필이나 상대가 띄운 편지에서 구체적인 한 문장을 골라 그 얘기부터 시작하세요. 예시 일곱 개를 「발견에서 주운 편지에 답하는 첫 편지 예시」 글에 정리했습니다.' },
        ],
        faqEn: [
            { q: 'Which pen-pal apps are free in 2026?', a: 'All seven apps in this article are free to start. Slowly and Lettie are slow-letter apps, HelloTalk and Tandem are for language exchange, and InterPals and Penpal World are closer to email pen pals.' },
            { q: 'Can I use a pen-pal app without speaking a foreign language?', a: 'Yes. Lettie translates 28 languages for free with a button inside each letter, and HelloTalk and Tandem also have translation tools.' },
            { q: 'How do I start a first letter on a pen-pal app?', a: 'Pick one concrete sentence from the other person\'s profile or letter and begin there. Seven worked examples are in our article on answering a letter you picked up in Discover.' },
        ],
        content: `
# 2026 펜팔 앱 추천 7가지 — 목적별로

"펜팔 앱 뭐가 좋아요?"에 하나로 답하면 틀립니다. 편지를 쓰고 싶은 사람과 말하기 연습을 하고 싶은 사람에게 같은 앱을 권할 수는 없으니까요. 목적별로 나눴고, **무료로 어디까지 되는지**를 기준으로 봤습니다. Lettie는 저희 앱입니다.

## 요약표

| 목적 | 1순위 | 2순위 |
|---|---|---|
| 느린 편지, 시간이 걸리는 관계 | Lettie | Slowly |
| 편지로 시작하는 만남 | Lettie | — |
| 언어가 달라도 상관없이 | Lettie | Ablo |
| 글쓰기 교정·언어 학습 | HelloTalk | Tandem |
| 말하기·화상 | Tandem | HelloTalk |
| 사람 수·특정 나라 찾기 | InterPals | Penpal World |
| 가볍고 익명에 가까운 대화 | Ablo | — |

## 1. Lettie — 편지가 지구본 위를 날아간다

편지는 두 도시 거리만큼 시간이 걸려 도착합니다(1~24시간). 남이 띄운 편지를 **발견**에서 주워 읽고 답장하며 대화가 시작되고, 편지 안 번역 버튼이 28개 언어를 처리합니다. 사진 대신 픽셀 캐릭터, 스와이프 없는 하루 몇 장의 매칭. **무료 범위**: 발견 봉투 8시간마다 3장, 하루 편지 3통, 번역 무제한, 캐릭터 16종. 광고를 보면 봉투와 편지를 더 받습니다.

맞는 사람: 편지의 호흡이 좋고, 언어가 다른 사람도 만나고 싶고, 우정이든 만남이든 열어 두고 싶은 사람.

## 2. Slowly — 느린 편지의 원조

2017년부터 이 장르를 만든 앱. 거리 기준 배달, 우표 수집, 아바타. 데이팅 요소는 의도적으로 없습니다. **무료 범위**: 편지·우표 대부분 무료, 번역은 별도.

맞는 사람: 취미가 맞는 펜팔과 오래 편지를 주고받고 싶고, 언어가 같거나 번역기 왕복이 괜찮은 사람.

## 3. InterPals — 가장 큰 펜팔 커뮤니티

2000년대부터 이어진 웹 중심 커뮤니티. 특정 나라·도시 사람을 찾는 데 가장 빠릅니다. 단점은 첫 메시지부터 연락처를 묻는 사람과 스팸. **무료 범위**: 사실상 전부.

## 4. HelloTalk — 원어민 교정 채팅

문장 단위 교정·번역·음성 메시지. 학습 도구로는 가장 효율적입니다. 편지의 호흡은 없고, 무료는 학습 언어 1개 제한.

## 5. Tandem — 화상·음성 언어 교환

말하기 연습이 목적이면 여기. 매칭 심사가 있어 진지한 학습자 비율이 높습니다. 무료는 기능 일부 제한.

## 6. Ablo — 자동 번역 채팅

모든 메시지가 자동 번역되는 채팅. 가볍게 여러 나라 사람과 이야기하기에 좋고, 깊이는 기대하지 않는 편이 낫습니다.

## 7. Penpal World — 단순한 펜팔 매칭

오래된 프로필 기반 매칭. 광고와 오래된 UI를 감수하면 무료로 충분합니다.

## 고르는 법 세 줄

1. **편지 vs 채팅**부터 정하세요. 호흡이 다릅니다.
2. **언어가 다르면** 번역이 어디에 있는지 보세요 — 앱 안(Lettie·HelloTalk·Ablo)인지, 왕복인지.
3. **만남까지 열어 둘지** 정하세요. 열어 두면 Lettie, 우정만이면 Slowly·InterPals.

어느 앱이든 첫 편지는 자기소개가 아니라 상대 글에 대한 반응이어야 답장이 옵니다. [첫 편지 예문 7가지](/blog/first-letter-examples-discover)를 보고 시작하세요.

*2026년 9월 기준 공개 정보. 각 앱의 무료 범위는 바뀔 수 있습니다.*
`,
        contentEn: `
# Best pen-pal apps in 2026 — by what you actually want

There's no single answer to "which pen-pal app is best" — the person who wants to write letters and the person who wants speaking practice shouldn't get the same recommendation. Sorted by goal, judged on **what the free tier gives you.** Lettie is ours.

## Summary

| Goal | First pick | Second |
|---|---|---|
| Slow letters, relationships that take time | Lettie | Slowly |
| Meeting someone through letters | Lettie | — |
| Regardless of language | Lettie | Ablo |
| Writing corrections, language learning | HelloTalk | Tandem |
| Speaking, video | Tandem | HelloTalk |
| Numbers, finding a specific country | InterPals | Penpal World |
| Light, near-anonymous conversation | Ablo | — |

## 1. Lettie — letters fly across a globe

Letters take as long as the distance between two cities (1–24 hours). You pick up letters strangers released in **Discover**, reply, and a conversation begins; a translate button inside the letter covers 28 languages. Pixel characters instead of photos, a few matching cards a day instead of swiping. **Free tier**: three Discover envelopes every eight hours, three letters a day, unlimited translation, sixteen characters. Watch an ad for more envelopes and letters.

For: people who like the rhythm of letters, want to meet people regardless of language, and want the door open to friendship or more.

## 2. Slowly — the original slow-letter app

Defined the genre since 2017. Distance-based delivery, stamp collecting, avatars. Deliberately no dating layer. **Free tier**: most letters and stamps; translation is separate.

For: a long correspondence with someone who shares your hobbies, when you share a language or don't mind round-tripping a translator.

## 3. InterPals — the biggest pen-pal community

Web-first, around since the 2000s. Fastest way to find someone in a specific country or city. Downsides: WhatsApp requests in the first message, spam. **Free tier**: essentially everything.

## 4. HelloTalk — chat with native-speaker corrections

Sentence-level corrections, translation, voice messages. The most efficient learning tool here. No letter rhythm; free is limited to one target language.

## 5. Tandem — voice and video exchange

If speaking is the goal. Applications are reviewed, so the share of serious learners is high. Some features paid.

## 6. Ablo — auto-translated chat

Every message auto-translated. Good for light conversation across many countries; don't expect depth.

## 7. Penpal World — simple pen-pal matching

Profile-based matching that's been around forever. Free is plenty if you can live with ads and a dated UI.

## How to choose, in three lines

1. Decide **letters vs chat** first. The rhythm is different.
2. If languages differ, check **where translation lives** — in the app (Lettie · HelloTalk · Ablo) or a round trip.
3. Decide whether you want **the door open to meeting someone.** Open → Lettie; friendship only → Slowly · InterPals.

Whichever app, a first letter that gets a reply is a reaction to what they wrote, not a bio. Start with [7 first-letter examples](/en/blog/first-letter-examples-discover).

*Public information as of September 2026. Free tiers change.*
`,
    },
};
