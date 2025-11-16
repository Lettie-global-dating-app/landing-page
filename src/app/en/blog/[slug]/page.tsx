import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowLeft, Share2, Mail, Feather, ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';

type BlogPost = {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: string;
  keywords: string[];
};

const blogPosts: Record<string, BlogPost> = {
  'slow-letter-beauty': {
    id: 'slow-letter-beauty',
    title: 'The Beauty of Slow Letters: In a World Ruled by Speed',
    description: 'In a world where everything moves fast, discover the value of slow correspondence. The anticipation, the depth, and the special experience that thoughtful communication brings.',
    date: '2025-11-18',
    readTime: '6 min',
    category: 'Heartfelt',
    image: '/letter-writing.png',
    author: 'Lettie',
    keywords: ['slow letters', 'slow communication', 'penpal', 'mindful connection', 'deep communication', 'analog feelings', 'meaningful connection', 'digital detox', 'waiting'],
    content: `
# The Beauty of Slow Letters: In a World Ruled by Speed

## Exhausted by Speed

Everything is fast. Messages are delivered instantly, replies come immediately.
A world that doesn't wait even one second. So why do we feel lonelier than ever?

**Speed doesn't equal depth.**

### The Paradox of Fast Communication

- Many messages, but little conversation
- Many connections, but shallow relationships
- Quick replies, but lacking sincerity
- Abundant information, but little understanding

## Why Letters Are Slow

Letters are slow. Intentionally slow.

**Writing time**: Time to organize thoughts, choose words, and pour in your heart
**Sending time**: Time to drop it in the mailbox and wait for delivery
**Reading time**: Time to slowly read line by line, understanding the other person
**Replying time**: Time to think again and write again

### What This Slowness Gives

Slowness isn't a disadvantage. Rather, there are things only possible because of slowness.

**Depth**: Deep thoughts missed when writing quickly
**Sincerity**: Genuine feelings revealed when not hurrying
**Anticipation**: The excitement of waiting for a reply
**Respect**: The meaning of spending time for someone

## The Aesthetics of Waiting

On Lettie, you send a letter and wait for a reply.
It might be a day, it might be several days.

**Is this waiting bad?**
Not at all. This waiting is the most beautiful moment.

### While Waiting

While waiting, we:
- Imagine what they might think
- Recall the letter we wrote
- Prepare stories for the next letter
- Become more curious about them

**Waiting deepens relationships.**

## Letters Written with Thought

You don't have to reply immediately.
You can write slowly, thoughtfully.

### The Process of Letter Writing

1. **Thinking**: What do I want to say?
2. **Organizing**: How should I express it?
3. **Writing**: Each sentence with care
4. **Refining**: Could there be a better expression?
5. **Sending**: With heart

This process itself is a way of respecting the other person.

## Analog Sensibility in the Digital Age

Lettie is a digital platform.
But it carries the sensibility of analog letters.

### Digital Advantages + Analog Sensibility

**Convenience**: Write letters anytime, anywhere
**Slowness**: The luxury of not replying immediately
**Depth**: Space to write long letters
**Sincerity**: Time to include thoughts

## It's Okay Not to Be Fast

The world moves quickly.
But not everything has to be fast.

**Some things are more beautiful when slow.**

### The Value of Slow Things

- Slowly reading a good book
- A cup of tea steeped for a long time
- Food made with time
- Letters written with care

## I Want to Ask You

**When was the last time you wrote someone a long letter?**

**A letter, not a message.**
**Slowly, not quickly.**
**With care, not briefly.**

Start that letter again on Lettie.

## Beginning Slow Communication

Start today.
- You don't have to reply immediately
- You can write long letters
- Take time to organize your thoughts
- Enjoy the waiting

**Slow letters will lead you to deeper relationships.**

---

*Experience the beauty of slow letters on Lettie.*
    `
  },
  'first-penpal-letter': {
    id: 'first-penpal-letter',
    title: 'Your First Penpal Letter: Opening Your Heart to a Stranger',
    description: 'Writing your first letter to someone you\'ve never met. A special moment where excitement and fear, expectation and curiosity coexist.',
    date: '2025-11-18',
    readTime: '5 min',
    category: 'Guide',
    image: '/letter-writing.png',
    author: 'Lettie',
    keywords: ['first penpal', 'starting penpal', 'letter to stranger', 'first meeting', 'penpal excitement', 'global friends', 'letter writing', 'new connections'],
    content: `
# Your First Penpal Letter: Opening Your Heart to a Stranger

## First Letter to a Stranger

You open your screen and see a blank letter.
You start to write **"Hello"** and delete it.
You try **"Hi"** and delete it again.

**Writing your first letter to a stranger isn't easy.**

### Why Is It Difficult?

- You don't know who they are
- You don't know what they like
- You don't know what to talk about
- You don't know if they'll read and reply

## But That Makes It More Special

Because you don't know, you're actually more free.
**Because nothing is decided, everything is possible.**

### The Magic of First Letters

- You can start without prejudice
- You can show your true self
- You can meet a new world
- Unexpected connections begin

## What to Include in Your First Letter

What should you write?
There's no right answer. But there are things that might help.

### 1. Honest Introduction

It doesn't have to be grand. Introduce yourself as you are.

**Example**:
"Hello, I'm a 25-year-old office worker living in Seoul.
On weekends, I love climbing Bukhansan mountain and looking down at the city.
Where do you live?"

### 2. Your Daily Life

It doesn't have to be special. Sometimes ordinary life is most interesting.

**Example**:
"This morning, I looked out the window and saw the first snow falling.
I was in such a rush that I spilled my coffee,
but the snowy scenery was so beautiful that I thought it was okay to be late."

### 3. Your Questions

Ask them questions. Questions are the start of conversation.

**Good Questions**:
- What season is it in your country right now?
- How does an ordinary day flow for you?
- What are you interested in these days?
- What small things make you happy?

### 4. Your Interests

Share what you love. You might find common ground or learn something new.

**Example**:
"I love jazz music.
Especially on rainy days, listening to Miles Davis brings peace to my mind.
What kind of music do you enjoy?"

## Tips for Writing Your First Letter

### 1. Don't Try to Be Perfect

Wrong grammar, awkward expressions are fine.
**A sincere letter is better than a perfect one.**

### 2. Keep It Reasonably Short

Your first letter should be a comfortable length.
So they can read and reply without pressure.

### 3. Ask Open Questions

Rather than questions answered with "yes/no,"
ask questions that invite stories.

❌ "Do you like movies?"
✅ "What kind of movies do you enjoy? Is there a recent film that left an impression?"

### 4. Keep a Positive Tone

First meetings should be bright and positive.
Save negative or heavy topics for later.

## While Waiting for a Reply

You've sent the letter.
Now you wait.

### Feelings While Waiting

**Excitement**: What kind of reply will come?
**Worry**: Will they reply?
**Expectation**: What kind of person are they?
**Curiosity**: How will our conversation flow?

**All these feelings are the beginning of penpalling.**

## When the Reply Comes

The moment you receive that first reply,
you'll know.

**This excitement is what penpalling is all about.**

### While Reading the Reply

- Read slowly
- Feel their heart
- Look for common ground
- Think about your next letter

## To the Second Letter

The second letter will be easier than the first.
Because now you know a little more.

**And so the letters continue,**
**the stranger becomes a friend,**
**and the friend becomes a precious connection.**

## Start Now

Open Lettie,
and write your first letter.

**It doesn't have to be perfect.**
**It doesn't have to be long.**
**Just include your sincerity.**

Your first letter to a stranger,
that's the beginning of a special connection.

---

*Start your first penpal on Lettie.*
    `
  },
  'halloween-connections': {
    id: 'halloween-connections',
    title: 'Halloween Confessions: Finding Connection in the Shadows',
    description: 'This Halloween, Vampiro shares a different kind of ghost story — one about finding genuine friendship in unexpected places through heartfelt letters.',
    date: '2025-10-29',
    readTime: '5 min',
    category: 'Community',
    image: '/letter-writing.png',
    author: 'Vampiro (Sebastian)',
    keywords: ['Halloween penpal', 'alternative friendship', 'gothic penpal', 'Halloween connections', 'spooky season friends', 'vampire aesthetic', 'dark academia penpal', 'October letters'],
    content: `
# Halloween Confessions: Finding Connection in the Shadows

## A Different Kind of Ghost Story

Hello, I&apos;m Vampiro — though you can call me Sebastian if that&apos;s easier to remember.

I downloaded Lettie on a whim during a late October night, not expecting much. I&apos;ve always been that person who feels more alive when the leaves turn orange and the air gets crisp. There&apos;s something about Halloween season that makes everything feel a bit more magical, a bit more real.

## Who Haunts These Letters?

**The basics**: I&apos;m 24, caught somewhere between alternative fashion aesthetics and cozy tea ceremonies. People often tell me I look like I walked out of a gothic novel, and honestly? I&apos;ll take that as a compliment.

**What fills my nights**:
- **Music**: I play saxophone and guitar, usually melancholic tunes that sound better after midnight
- **Visual stories**: Obsessed with webtoons and comics — the darker and more atmospheric, the better
- **Creating**: Whether it&apos;s baking pastries that look too pretty to eat or reading tarot cards by candlelight
- **Tea rituals**: There&apos;s an art to brewing the perfect cup, and I&apos;m still learning

## The Halloween Pumpkin Metaphor

You know how people carve pumpkins for Halloween? They scoop out all the messy insides, create something that glows from within, and put it out for everyone to see.

That&apos;s kind of what finding genuine friendship feels like.

We spend so much time presenting our carved exteriors — the glowing, photogenic parts. But what about the messy, scooped-out parts? The interests that seem &quot;too niche,&quot; the music that&apos;s &quot;too weird,&quot; the hobbies that make people raise their eyebrows?

**That&apos;s where Lettie comes in.**

## Why Letters Instead of Likes

I&apos;ve tried the usual apps. You know the ones — swipe left, swipe right, judge in three seconds based on a photo and a bio that says &quot;I like traveling and good vibes.&quot;

But here&apos;s the thing: my vibes aren&apos;t always conventionally &quot;good.&quot; They&apos;re:
- Playing saxophone at 2 AM because that&apos;s when inspiration strikes
- Getting genuinely excited about a new tarot spread
- Spending hours discussing why a particular webtoon panel hits differently
- Sharing the perfect tea pairing for a rainy autumn evening

These aren&apos;t things you capture in a carefully curated Instagram photo. They&apos;re things you discover through conversation. Through letters. Through time.

## What I&apos;m Looking For This Halloween

**Honest souls** who understand that alternative doesn&apos;t mean unapproachable. That gothic aesthetics and warm hearts aren&apos;t mutually exclusive.

**Creative spirits** who get excited about:
- Music that makes you feel something (even if it&apos;s melancholy)
- Stories told through panels and frames
- The alchemy of baking and brewing
- The mystery in tarot and tea leaves

**Patient friends** who understand that real connection takes more than five minutes. More than five messages. Maybe five letters, slowly exchanged, gradually revealing who we really are.

## The Beauty of Slow Reveals

Lettie doesn&apos;t let you exchange contact info until after 5 letters. At first, I thought that was restrictive.

Now I realize it&apos;s liberating.

**No pressure** to respond instantly. No anxiety about being &quot;left on read.&quot; Just two people, taking their time, choosing their words carefully.

**No photos** dominating the conversation. Just thoughts, interests, dreams, fears — all the things that actually matter when you&apos;re trying to find someone who gets you.

**No rush** to be anything other than yourself. The messy, scooped-out pumpkin parts and all.

## This Halloween&apos;s Invitation

So here&apos;s my Halloween confession: I&apos;m lonely in the way that crowded rooms make worse. I&apos;m surrounded by people, but finding genuine connection feels like searching for ghosts.

Maybe you feel the same way?

If you do, let&apos;s haunt each other&apos;s inboxes (in the best way possible).

### Tell me about:
- The last song that made you feel something real
- Your favorite webtoon or comic and why it matters
- What you&apos;re creating (or want to create)
- Your comfort beverage and the story behind it
- The aesthetic that makes you feel most yourself

### I&apos;ll share:
- My current music obsessions and why they sound better at night
- The tarot spread I&apos;m working on
- My latest baking experiment (successes and beautiful failures)
- The tea blend that matches your personality
- Stories from the alternative fashion scene

## Beyond the Costume

Halloween is the one night we&apos;re encouraged to be someone else. But what if, through these letters, we could practice being more ourselves?

What if we stopped performing and started connecting?

What if the scariest thing wasn&apos;t ghosts or goblins, but the vulnerability of showing someone who we really are — and having them accept it?

## Waiting in the Shadows

This Halloween, I&apos;m not dressing up as someone else.

I&apos;m showing up as Vampiro, as Sebastian, as whoever I am in between — saxophone player, tea brewer, tarot reader, comic enthusiast, person who feels most alive when the year is dying.

And I&apos;m hoping you&apos;ll show up too.

Not the polished, filtered version. The real one. The one with niche interests and midnight thoughts and a longing for connection that goes deeper than small talk.

**Let&apos;s make this Halloween about finding real friendships, not just collecting followers.**

Let&apos;s exchange letters that matter, not just messages that fade.

Let&apos;s be the kind of friends who understand that sometimes the best conversations happen:
- After midnight
- Over tea instead of alcohol
- About art instead of weather
- Between people who finally feel seen

## The First Letter Awaits

So if you&apos;re reading this on a crisp October evening, feeling like maybe there&apos;s someone out there who&apos;d appreciate your weird interests and midnight thoughts...

**I&apos;m here.**

Probably drinking tea. Possibly practicing saxophone. Definitely ready to exchange letters with someone who gets it.

This Halloween, let&apos;s create a different kind of ghost story — one where two souls find each other through words in the darkness and discover they&apos;ve been looking for the same thing all along:

**Genuine connection. Real friendship. Someone who understands.**

The pumpkins are carved. The candles are lit. The first page is blank.

*What story shall we write together?*

— Vampiro (Sebastian)

🎃 Finding friends who appreciate the beautiful darkness

🕯️ One letter at a time

🌙 This Halloween and beyond

**P.S.** — If you write to me, don&apos;t worry about being &quot;too much.&quot; My favorite people always are. And so am I.
    `
  },
  'dear-stranger': {
    id: 'dear-stranger',
    title: 'Dear Stranger: A Letter from Someone Who Believes in Slow, Meaningful Connections',
    description: 'To you, whose voice I\'ve never heard, whose eyes I\'ve never seen. A letter from someone who still believes in slow, genuine connections. Start your heartfelt pen pal journey on Lettie.',
    date: '2025-01-22',
    readTime: '4 min',
    category: 'Heartfelt',
    image: '/letter-writing.png',
    author: 'Lettie',
    keywords: ['pen pal letter', 'genuine connection', 'heartfelt letter', 'dear stranger', 'starting pen pal', 'slow relationship', 'meaningful communication'],
    content: `
# Dear Stranger,

It&apos;s a little strange, isn&apos;t it? Writing to someone whose voice I&apos;ve never heard, whose eyes I&apos;ve never seen — and yet, something in me believes that even through words, souls can recognize each other.

## To You, Reading This

I don&apos;t know who will read this, but I hope it finds someone who still believes in **slow connections** — the kind that don&apos;t rush to impress but simply unfold, like the first morning light slipping through the curtains.

Maybe you&apos;re reading this after a long day, or maybe before bed when the world quiets down and your thoughts start to wander.

## What I Want to Ask You

If so, I want to ask you something — not about where you live or what you do, but **what makes your heart feel alive?**

What are those small, quiet things that bring you peace — even if just for a moment?

### Stories Behind Every Smile

I&apos;ve come to believe that behind every calm smile there&apos;s a story no one has fully heard yet. And maybe, through this letter, I&apos;d like to hear a glimpse of yours.

## For Honest Conversations

No filters, no pretence — just two people being honest for a while.

If you decide to reply, tell me something that matters to you — something most people don&apos;t usually ask about. I&apos;ll do the same.

### Things We Can Share

**Small Joys in Life**
- A warm cup of tea you had today
- The color of the sunset through your window
- A childhood memory that suddenly came to mind
- Music that makes your heart peaceful

**Stories You Haven&apos;t Told Anyone**
- Things you&apos;re dreaming about
- Things you&apos;re afraid of
- Moments when you were happy
- Things you miss

## Meeting on Lettie

This is what makes Lettie special. We don&apos;t rush.

**Through exchanging 5 letters**: We get to know each other slowly and genuinely.

**Starting without photos**: We meet through hearts and thoughts, not appearances.

**Unfiltered sincerity**: A space where you can show your true self without pretense.

## Waiting for Your Story

Until then, from someone who still believes in slow, meaningful connections.

Hoping to receive your letter someday 🌙

**I&apos;m curious about your story.**

Let&apos;s meet on Lettie. Looking forward to the beginning of our conversation.

— A man who still believes in slow, meaningful connections
    `
  },
  'marcus-introduction': {
    id: 'marcus-introduction',
    title: 'Penpalling with Marcus: Finding Genuine Friendship',
    description: 'Join Marcus in meaningful conversations with friends around the world. From daily life to hobbies, music, and travel, start your journey towards true friendship through genuine communication.',
    date: '2025-01-20',
    readTime: '4 min',
    category: 'Community',
    image: '/letter-writing.png',
    author: 'Marcus',
    keywords: ['penpal friends', 'global communication', 'cultural exchange', 'genuine friendship', 'penpal community', 'make international friends', 'Lettie penpal', 'letter friends'],
    content: `
# Hi there, I'm Marcus

Nice to meet you! My name is Marcus, and I'm really happy to be here on Lettie.

## Why I Chose Lettie

I enjoy meeting new people and learning about different places, cultures, and ways of life. I believe every good conversation can teach us something new.

Lettie isn't just another messaging app. It's a special space where we get to know each other slowly and deeply through heartfelt letters. Instead of conversations that quickly pass by, we exchange letters filled with meaning and create genuine connections.

## Who I Am

**Friendly and down-to-earth**: I prefer comfortable and natural conversations over formal ones. As we share stories, you'll feel like we're old friends.

**Seeking meaningful conversations**: Beyond surface-level greetings, I want to genuinely share everything from daily life stories to hobbies, music, travel, or just random thoughts.

**A good listener**: I love to listen. Please tell me your stories, worries, joys, and dreams. I want to share perspectives and grow together through our conversations.

## Stories I'd Love to Share

### Small Moments of Daily Life
The scenery you saw while drinking coffee, the music you heard today, a passage from a book you read... These small daily moments are the stories that show who we really are.

### Culture and Travel
What's the culture like where you live? Do you have favorite foods, holidays, or traditions? If you love traveling, please share stories about places you want to visit or have been to.

### Music and Art
Music connects hearts beyond language barriers. Share your favorite songs and tell me what they mean to you.

### Thoughts on Life
Sometimes deep conversations are wonderful too. Goals in life, values, thoughts on happiness... Sharing our philosophies can teach us new perspectives.

## What Kind of Penpal Am I Looking For?

**Someone who values honest friendship**: If you're using Lettie with a genuine desire to make friends, you're welcome here.

**Positive energy**: I want to build a relationship where we have positive conversations and encourage each other rather than focusing on negativity.

**Enjoys consistent communication**: Letters don't have to be rushed. But I hope you enjoy conversations that continue steadily, even if slowly.

## Building Friendship Together with Lettie

The greatest advantage of Lettie is that there's no rush. You can't exchange contact information until after exchanging 5 letters, allowing time to truly get to know each other and build genuine trust.

Starting as penpals without photos means we meet through hearts and thoughts, not appearances. It's a special experience where you show the real you and discover the real me.

## One Letter at a Time, Walking Together

Our connection begins with one letter. Perfect sentences aren't necessary. Fluent language isn't required. Your sincere story is all that matters.

Perhaps we live on different continents. Time differences might delay replies. But that's exactly the charm of penpalling, isn't it? We can feel excitement in the waiting and share the joy when we receive a letter.

**I'm curious about your story.**

Right now, at this very moment, somewhere you're reading these words. I hope our paths meet on Lettie.

Start genuine friendship with one letter.

## Find Marcus on Lettie

Download the Lettie app and start penpal matching. You might randomly receive my letter. Or you could send me one first.

**Let's share stories and build friendship one letter at a time.**

Looking forward to hearing from you soon!
— Marcus
    `
  },
  'autumn-morning-mist': {
    id: 'autumn-morning-mist',
    title: 'Morning Mist: Autumn\'s Warm Promise',
    description: 'In the misty morning, while woods and meadows dream. When the veil falls, you\'ll see the open blue of heaven and autumn\'s warm golden flow. A letter of hope waiting for moments of change.',
    date: '2025-11-09',
    readTime: '4 min',
    category: 'Heartfelt',
    image: '/letter-writing.png',
    author: 'Lettie',
    keywords: ['autumn letter', 'morning mist', 'poetic letter', 'seasons change', 'hopeful message', 'nature and penpal', 'heartfelt communication', 'autumn feelings', 'warm comfort'],
    content: `
# Morning Mist: Autumn's Warm Promise

## While the World Still Sleeps

The world still rests in mist;
wood and meadow are dreaming.

There are those early mornings when everything is wrapped in a hazy veil. Those boundary moments where you can't tell where things begin or end. A stillness so complete, it's as if the entire world has paused, holding its breath, waiting for something.

Have you ever experienced such a morning?

## When the Veil Falls

Soon, when the veil falls, you'll see
the open blue of heaven.

Mist never stays forever. With time, the sun slowly lifts it away. And things we couldn't see begin to reveal themselves, piece by piece.

**The blue sky**: The infinite possibilities we had forgotten
**The wide horizon**: New beginnings stretching before us
**Clear outlines**: Dreams once blurry now taking concrete form

## Autumn's Strength, The Hushed World

And autumn-strong, the hushed world
will flow in warm gold.

Autumn is a special season. Following summer's brilliance, it quietly yet powerfully displays its own colors.

### Lessons From Autumn

**The beauty of patience**: The value of ripening slowly, without rush
**The grace of change**: That letting go can be beautiful too
**The power in stillness**: That the greatest changes happen in the quietest moments

## Starting Penpal Letters Through the Mist

Our lives are sometimes like being in mist. When we can't see ahead, when we're uncertain where to go.

But meeting someone on Lettie is like discovering a small light in that mist.

### Letters That Pierce Through Fog

**Strange at first**: Writing to someone you don't know
**Gradually becoming clear**: The process of getting to know each other through exchanged words
**Finally revealed**: The moment of genuine friendship and connection

Like mist lifting, the more we exchange letters, the more clearly we see each other.

## Questions I Want to Ask You

Have you ever walked through morning mist?
What thoughts came to you then?

**What color is your autumn?**
For some it's golden, for others orange, for still others a deep crimson.

**What is your 'moment when the veil lifts'?**
We all have something we're waiting to become clear, like fog lifting.

**What does your quiet morning look like?**
Before the world awakens, how do you spend your own time?

## The Journey on Lettie

The penpal journey on Lettie is like a morning walk through mist.

### 5 Letters, 5 Sunrises

**First letter**: Greetings exchanged in the fog
**Second letter**: When shapes begin to emerge
**Third letter**: When outlines become distinct
**Fourth letter**: When warm golden light unfolds
**Fifth letter**: When the veil completely lifts and true connection begins

### Slowly, But Surely

There's no need to rush. Like mist slowly clearing, our friendship deepens slowly too.

**Why we start without photos**: To see the real you beyond the veil of appearance
**Why we don't demand instant responses**: To give time to gather thoughts and pour in sincerity
**Why we wait for 5 letters**: Because genuine connection needs time

## A World Flowing in Warm Gold

The world after the veil lifts is beautiful.

Under autumn's sunlight, everything is tinged with warm gold. Each leaf, each blade of grass shines with its own hue.

**You are like that too.**

Though you may be hidden in mist now, there's a golden light within you. When you genuinely connect with someone, that light shines even brighter.

## Waiting Together for Morning

When the world is shrouded in mist, waiting alone is lonely.

But what if we wait together?
If we share our hearts through letters while we wait?

**Even the waiting becomes a beautiful memory.**

### Mornings I Want to Share With You

- What you want to see first after the mist clears
- The warm drink you enjoy on quiet mornings
- Small sounds heard at dawn - birdsong, wind, rain
- The peace of morning sunlight entering your room
- Your personal ritual before starting the day

## Send Your First Letter

Look outside. Is there mist now? Or can you already see blue sky?

Either way is fine.

**If it's misty**: You need someone to wait with for the veil to lift
**If it's clear sky**: You need someone to share that beauty with

Lettie is a space for both.

## Autumn's Promise

Autumn promises:

The mist will lift,
the sky will turn blue again,
and the world will flow in warm gold.

**I promise you too:**

That I'm waiting for your letter.
That I want to hear your story.
That I want to lift the mist together and greet the golden autumn together.

## Waiting for You Beyond the Mist

Though the world still rests in mist,
soon the veil will fall.

Then you will see:

- The open blue of heaven
- The autumn-strong, hushed world
- Everything flowing in warm gold
- And me, waiting for your letter

**Start your first letter.**

Mist always lifts.
Sky always turns blue.
Autumn always comes in gold.

**And genuine connection is always possible.**

Waiting for you on Lettie.
Beyond the mist, in the golden autumn.

— Gazing at morning mist together

*P.S. How is your morning? Is there mist, or is sunlight already shining through? Either way, I want to hear that story.*
    `
  },
  'dearest-friend': {
    id: 'dearest-friend',
    title: 'Autumn Night Letter: From the Café by the Ocean',
    description: 'As fall approaches and nights grow longer, loneliness sometimes visits. Though our paths may never cross, this is a letter written while waiting for you at the café by the ocean. Find friends to share your loneliness with on Lettie.',
    date: '2025-01-20',
    readTime: '3 min',
    category: 'Inspiration',
    image: '/brand-screen.png',
    author: 'Lettie',
    keywords: ['heartfelt letter', 'penpal friendship', 'overcoming loneliness', 'healing hearts', 'penpal comfort', 'sincere letters', 'emotional connection', 'oceanside café'],
    content: `
# Dearest friend,

Fall is fast approaching, and I know how long and heavy the nights become when loneliness tugs at your heart.

## To You, Whom I May Never Meet

We might never share a thought, a word, and our paths may never cross in this life, although I wish they did.

If we were to meet...

**You would certainly show me**: There's more to the life I'm living. The world you've experienced, the landscapes you've seen, the emotions you've felt would enrich my life.

**I would certainly show you**: The light you do not see in yourself yet. Sometimes we can't see ourselves clearly. But in someone's letters, we discover new parts of ourselves.

## At the Café by the Ocean

Just know that, wherever you are, whatever you're doing...

**I'll always be at the café by the ocean.**

Where the sound of waves can be heard, where coffee aroma fills the air, I'll be waiting for you there. Ready to just sit and share your burdens.

## Things We Can Share

### Loneliness Halves When Shared
There's a weight too heavy to carry alone. The kind of loneliness no one knows unless you speak of it. On Lettie, you can share these stories too. Someone is here to truly listen without judgment.

### Joy Doubles When Shared
That delicious cup of coffee you had today, the pretty flower you saw on the street. Moments that would just pass by if not shared with someone become special memories in letters.

### Put Down Your Burdens
Sometimes just talking is enough. Even without solutions, even without answers, it's okay. Just knowing someone will listen, knowing you're not alone, gives strength.

## The Comfort Letters Bring

Letters are special. They don't need to be rushed like real-time chat. You can take your time and write at your own pace, filling them with your heart.

**Healing while writing**: As you transfer thoughts in your mind to words, complicated emotions become organized.

**Comforted while reading**: When you receive a letter someone took time to write, you feel that you matter.

**Excitement while waiting**: Even the time waiting for a reply isn't lonely. You spend your day imagining the letter that will come.

## On Lengthening Autumn Nights

When fall arrives, nights grow longer. At the end of the day, there are more times when you're left alone. What if you had a warm letter on such nights?

**You are not alone.**

Somewhere in the world, at the café by the ocean, or perhaps somewhere else, someone is waiting for your letter. Someone wants to hear your story.

## Let's Meet on Lettie

Even if our paths never directly cross, we can meet through letters.

**Through exchanging 5 letters**: Get to know each other slowly. There's no rush.

**Starting without photos**: We understand each other through hearts and thoughts, not appearances.

**A space where only sincerity flows**: Lettie is where we build real friendship.

## Waiting for Your First Letter

Sitting by the window at the café by the ocean, listening to the waves, I'm waiting for your letter.

How was your day?
What thoughts crossed your mind today?
Is there a story you've been keeping in your heart?

**Please tell me. Your story.**

Our paths may never cross, but our hearts can connect through letters.

Before autumn nights grow longer, start your first letter.

**From the café by the ocean, waiting for you...**

— Always here for you
    `
  },
  'how-to-start-penpal': {
    id: 'how-to-start-penpal',
    title: 'Starting Your Penpal Journey: The Complete First Letter Guide',
    description: 'Learn how to start meaningful relationships with friends around the world. From your first letter to lasting friendship, discover everything you need for successful penpalling.',
    date: '2025-01-18',
    readTime: '5 min',
    category: 'Guide',
    image: '/letter-writing.png',
    author: 'Lettie',
    keywords: ['starting penpal', 'first letter', 'penpal guide', 'letter writing tips', 'international friends'],
    content: `
# The Complete Guide to Starting Your Penpal Journey

Penpalling is more than just exchanging letters. It's a special experience of building genuine relationships with people from diverse cultures and backgrounds around the world. Let's explore how to start penpalling with Lettie.

## 1. The Importance of Your First Letter

They say you never get a second chance at a first impression. The same is true for penpalling. Your first letter is the first window that shows your penpal who you are.

### Components of a Great First Letter

**Self-introduction**: Start with a simple yet interesting introduction. Mention your name, age, location, along with one or two characteristics that make you special.

**Share your interests**: Share your hobbies, favorite music, movies, books, etc. Common interests make great starting points for conversation.

**Ask questions**: Express genuine curiosity about your penpal. Questions like "What's your favorite season in your country?" naturally continue the conversation.

## 2. Developing Cultural Sensitivity

### Respecting Diversity

The greatest charm of penpalling is experiencing diverse cultures. Keep an open mind about your penpal's culture, religion, and lifestyle.

### Overcoming Language Barriers

- Use simple and clear sentences
- Avoid slang or idioms, or add explanations
- Try learning greetings in your penpal's language

## 3. Building Sustainable Penpal Relationships

### Regular Communication

It's important to exchange letters at regular intervals. Too frequent can be overwhelming, too infrequent can make the relationship distant.

### Authentic Conversations

Go beyond surface-level conversations and share deeper stories. From small daily moments to life goals, sincere dialogue deepens relationships.

## 4. Leveraging Lettie's Special Features

### The 5-Letter Rule

Lettie allows contact exchange after 5 letters. This ensures enough time to truly get to know each other.

### Privacy Protection

Starting as penpals without photos lets you focus on inner qualities, not appearance. Build genuine connections.

## 5. Penpal Etiquette

### Do's
- Maintain a polite and respectful attitude
- Reply sincerely to your penpal's letters
- Understand and accept cultural differences
- Keep conversations positive and constructive

### Don'ts
- Don't rush to ask for personal information
- Don't impose political or religious views
- Avoid negative or critical attitudes
- Don't ignore your penpal or suddenly stop contact

## Conclusion

Penpalling is a window to see the world more broadly. With Lettie, you can build safe and meaningful global friendships. Start writing your first letter today!

**Meet friends from around the world waiting for you on Lettie.**
    `
  },
  'penpal-culture-guide': {
    id: 'penpal-culture-guide',
    title: 'Letter Cultures Around the World: Global Etiquette Through Penpalling',
    description: 'Explore different letter cultures and greetings from around the world, and build deeper relationships with your global penpals.',
    date: '2025-01-15',
    readTime: '7 min',
    category: 'Culture',
    image: '/brand-screen.png',
    author: 'Lettie',
    keywords: ['letter culture', 'global etiquette', 'penpal culture', 'international exchange', 'cultural differences'],
    content: `
# Understanding Letter Cultures Around the World

Experiencing diverse cultures through penpalling is a special joy. Each country has unique letter cultures and etiquette, and understanding them enables richer exchanges.

## Asian Letter Cultures

### Japan
In Japan, seasonal greetings are highly valued. There are traditions of sending summer greetings (暑中見舞い) and New Year's cards (年賀状).

### Korea
Korea starts letters with polite greetings and well-wishes. Expressing wishes for health and well-being is important.

### China
In China, red symbolizes good fortune, so red envelopes or paper are sometimes used for special occasions.

## European Letter Traditions

### United Kingdom
The UK has a formal letter culture. Letters start with 'Dear' and end with 'Yours sincerely' or 'Best regards'.

### France
French people enjoy using emotional and poetic expressions in letters. Discussing art and literature gets good responses.

### Germany
Germany prefers precise and systematic letter writing. Clear structure and logical development are valued.

## Communication Styles in the Americas

### United States
America prefers friendly and casual tones. They enjoy sharing personal experiences and stories.

### Brazil
Brazilians like warm and passionate greetings. They frequently share stories about family and friends.

## Letter Writing Considerations

1. **Consider time zones**: Adjust reply expectations considering your penpal's time zone
2. **Date formats**: Date notation differs by country (US: MM/DD/YYYY, Europe: DD/MM/YYYY)
3. **Using names**: Ways of addressing people vary by culture
4. **Sensitive topics**: Approach politics, religion, historical conflicts carefully

## Starting Cultural Exchange with Lettie

Lettie connects people from diverse cultures. Respect and understand each other's differences, and make genuine global friends.
    `
  },
  'language-exchange-tips': {
    id: 'language-exchange-tips',
    title: 'Language Learning Through Penpals: Effective Language Exchange Methods',
    description: 'Discover the most effective ways to learn a new language together with your penpal friends.',
    date: '2025-01-12',
    readTime: '6 min',
    category: 'Learning',
    image: '/conversation-detail.png',
    author: 'Lettie',
    keywords: ['language exchange', 'language learning', 'penpal learning', 'foreign language', 'language study'],
    content: `
# Improving Language Skills Through Penpalling

Penpalling is one of the most effective ways to learn a living language. You can learn natural expressions through real conversations with native speakers, not from textbooks.

## Benefits of Language Exchange

### 1. Learning Practical Expressions
Learn everyday expressions and latest trends not found in textbooks.

### 2. Understanding Cultural Context
Language cannot be separated from culture. Through penpalling, understand the culture behind the language.

### 3. Maintaining Motivation
Interaction with real people sustains motivation for language learning.

## Effective Language Exchange Methods

### The 50/50 Rule
Write half your letter in the language you're learning, the other half in your native language. It helps both parties.

### Requesting Corrections
Ask "Please feel free to correct my grammar or expressions." Feedback is key to growth.

### Using Diary Format
Writing and sharing daily life like a diary helps practice natural expressions.

## Level-Based Learning Strategies

### Beginners
- Start with simple greetings and introductions
- Use pictures or emoticons to convey meaning
- Gradually reduce translator usage

### Intermediate
- Have in-depth conversations on specific topics
- Learn and use idioms and proverbs
- Discuss news or culture from your penpal's country

### Advanced
- Exchange opinions on complex topics
- Understand and use humor and wordplay
- Analyze and emulate your penpal's writing style

## Useful Expressions

### Starting Language Exchange
- "I'm learning [language] and would love to practice with you"
- "Feel free to correct my mistakes"
- "How do you say [word] in your language?"

### Expressions for Better Understanding
- "Could you explain that in simpler terms?"
- "What does [expression] mean in this context?"
- "Is this the natural way to say it?"

## Finding Language Exchange Partners on Lettie

Lettie connects users who want to learn languages. Display languages you're learning on your profile and meet penpals with the same goals.

Language is a tool for communication. Improve your language skills while communicating with friends worldwide with Lettie!
    `
  }
};

type Props = {
  params: Promise<{ slug: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    alternates: {
      canonical: `https://lettie-dating.com/en/blog/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  // JSON-LD structured data - BlogPosting
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: `https://lettie-dating.com${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Lettie',
      logo: {
        '@type': 'ImageObject',
        url: 'https://lettie-dating.com/lettie-icon.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://lettie-dating.com/en/blog/${slug}`,
    },
  };

  // BreadcrumbList structured data
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://lettie-dating.com/en',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://lettie-dating.com/en/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://lettie-dating.com/en/blog/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/en" className="flex items-center space-x-3">
            <div className="w-10 h-10">
              <Image
                src="/lettie-icon.png"
                alt="Lettie App Icon"
                className="w-10 h-10 rounded-2xl"
                width={40}
                height={40}
                priority
              />
            </div>
            <span className="text-2xl font-bold text-gray-800">Lettie</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/en" className="text-gray-600 hover:text-blue-500 transition-colors">Home</Link>
            <Link href="/en/blog" className="text-blue-500 font-semibold">Blog</Link>
            <Link href="/faq" className="text-gray-600 hover:text-blue-500 transition-colors">FAQ</Link>
            <Link href="/guide" className="text-gray-600 hover:text-blue-500 transition-colors">Guide</Link>
          </div>
        </nav>
      </header>

      {/* Article */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2 text-gray-600">
            <li><Link href="/en" className="hover:text-blue-500">Home</Link></li>
            <li>/</li>
            <li><Link href="/en/blog" className="hover:text-blue-500">Blog</Link></li>
            <li>/</li>
            <li className="text-gray-800 font-semibold">{post.title}</li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime} read
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-gray-600">
            {post.description}
          </p>
        </header>

        {/* Featured Icon Section */}
        <div className="relative mb-12">
          <div className="relative h-64 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEyYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMmMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>

            {/* Animated blobs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>

            {/* Category Icon */}
            <div className="absolute inset-0 flex items-center justify-center text-white">
              {post.category === 'Heartfelt' && <Feather className="w-24 h-24" strokeWidth={1.5} />}
              {post.category === 'Community' && <Mail className="w-24 h-24" strokeWidth={1.5} />}
              {post.category === 'Guide' && <ArrowRight className="w-24 h-24" strokeWidth={1.5} />}
              {post.category === 'Culture' && <Calendar className="w-24 h-24" strokeWidth={1.5} />}
              {post.category === 'Learning' && <Clock className="w-24 h-24" strokeWidth={1.5} />}
              {post.category === 'Inspiration' && <Feather className="w-24 h-24" strokeWidth={1.5} />}
              {!['Heartfelt', 'Community', 'Guide', 'Culture', 'Learning', 'Inspiration'].includes(post.category) && <Mail className="w-24 h-24" strokeWidth={1.5} />}
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{
            __html: post.content.replace(/\n/g, '<br />').replace(/#{1,6} (.+)/g, (match, text) => {
              const level = match.indexOf(' ');
              return `<h${level} class="text-${7-level}xl font-bold mt-8 mb-4 text-gray-800">${text}</h${level}>`;
            }).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
          }} />
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <Link
              href="/en/blog"
              className="flex items-center gap-2 text-blue-500 hover:text-blue-600 font-semibold"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Blog
            </Link>
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500">
              <Share2 className="w-5 h-5" />
              Share
            </button>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3">
              More Stories to Explore
            </h2>
            <p className="text-gray-600">Related heartfelt letters and guides</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {Object.values(blogPosts)
              .filter(p => p.id !== post.id)
              .slice(0, 3)
              .map((relatedPost) => {
                const categoryIcons: Record<string, React.ReactNode> = {
                  'Heartfelt': <Feather className="w-6 h-6" />,
                  'Community': <Mail className="w-6 h-6" />,
                  'Guide': <ArrowRight className="w-6 h-6" />,
                  'Culture': <Calendar className="w-6 h-6" />,
                  'Learning': <Clock className="w-6 h-6" />,
                  'Inspiration': <Feather className="w-6 h-6" />
                };

                const categoryColors: Record<string, string> = {
                  'Heartfelt': 'from-rose-400 to-pink-500',
                  'Community': 'from-blue-400 to-indigo-500',
                  'Guide': 'from-emerald-400 to-teal-500',
                  'Culture': 'from-amber-400 to-orange-500',
                  'Learning': 'from-violet-400 to-purple-500',
                  'Inspiration': 'from-rose-400 to-pink-500'
                };

                return (
                  <Link
                    key={relatedPost.id}
                    href={`/en/blog/${relatedPost.id}`}
                    className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                  >
                    <div className={`h-24 bg-gradient-to-br ${categoryColors[relatedPost.category] || 'from-blue-400 to-purple-500'} flex items-center justify-center text-white`}>
                      {categoryIcons[relatedPost.category] || <Mail className="w-6 h-6" />}
                    </div>
                    <div className="p-6">
                      <span className="inline-block text-xs font-semibold text-gray-500 mb-2">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {relatedPost.description}
                      </p>
                      <span className="text-blue-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-12 text-center text-white shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">Start your penpal journey today</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Your first letter awaits
            </h2>

            <p className="text-lg mb-10 opacity-95 max-w-2xl mx-auto leading-relaxed">
              Connect with friends worldwide through letters<br className="hidden md:block" />
              and build genuine relationships
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/kr/app/%EB%A0%88%ED%8B%B0/id6746454876"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Google Play
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
