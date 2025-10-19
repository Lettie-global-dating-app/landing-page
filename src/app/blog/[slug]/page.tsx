import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
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
  'how-to-start-penpal': {
    id: 'how-to-start-penpal',
    title: '펜팔 시작하기: 완벽한 첫 편지 작성 가이드',
    description: '전 세계 친구들과 의미 있는 관계를 시작하는 방법을 알아보세요. 첫 편지부터 지속적인 우정까지, 성공적인 펜팔의 모든 것을 담았습니다.',
    date: '2025-01-18',
    readTime: '5분',
    category: '가이드',
    image: '/letter-writing.png',
    author: 'Lettie',
    keywords: ['펜팔 시작', '첫 편지', '펜팔 가이드', '편지 작성법', '국제 친구'],
    content: `
# 펜팔을 시작하는 완벽한 가이드

펜팔은 단순한 편지 교환 이상의 의미를 가집니다. 전 세계 다양한 문화와 배경을 가진 사람들과 진실한 관계를 만들어가는 특별한 경험이죠. Lettie와 함께 펜팔을 시작하는 방법을 자세히 알아보겠습니다.

## 1. 첫 편지의 중요성

첫인상은 두 번째 기회가 없다고 합니다. 펜팔에서도 마찬가지입니다. 첫 편지는 상대방에게 당신이 어떤 사람인지 보여주는 첫 번째 창구입니다.

### 좋은 첫 편지의 구성 요소

**자기소개**: 간단하면서도 흥미로운 자기소개로 시작하세요. 이름, 나이, 거주 지역과 함께 당신을 특별하게 만드는 한두 가지 특징을 언급하면 좋습니다.

**관심사 공유**: 취미, 좋아하는 음악, 영화, 책 등을 공유하세요. 공통 관심사는 대화를 이어가는 좋은 시작점이 됩니다.

**질문하기**: 상대방에 대한 진심 어린 호기심을 표현하세요. "당신의 나라에서 가장 좋아하는 계절은 무엇인가요?" 같은 질문은 대화를 자연스럽게 이어갑니다.

## 2. 문화적 감수성 기르기

### 다양성 존중하기

펜팔의 가장 큰 매력은 다양한 문화를 경험할 수 있다는 점입니다. 상대방의 문화, 종교, 생활 방식에 대해 열린 마음을 가지세요.

### 언어의 장벽 극복하기

- 간단하고 명확한 문장을 사용하세요
- 속어나 관용구는 피하거나 설명을 덧붙이세요
- 상대방의 언어로 인사말을 배워보세요

## 3. 지속 가능한 펜팔 관계 만들기

### 규칙적인 소통

일정한 주기로 편지를 주고받는 것이 중요합니다. 너무 자주 보내면 부담스러울 수 있고, 너무 뜸하면 관계가 소원해질 수 있습니다.

### 진정성 있는 대화

표면적인 대화를 넘어 깊이 있는 이야기를 나누세요. 일상의 소소한 이야기부터 인생의 목표까지, 진솔한 대화가 관계를 깊게 만듭니다.

## 4. Lettie만의 특별한 기능 활용하기

### 5통의 편지 규칙

Lettie는 5통의 편지를 주고받은 후 연락처를 교환할 수 있습니다. 이는 서로를 충분히 알아가는 시간을 보장합니다.

### 프라이버시 보호

사진 없이 시작하는 펜팔로 외모가 아닌 내면에 집중할 수 있습니다. 진정한 연결을 만들어가세요.

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

펜팔은 세상을 더 넓게 보는 창입니다. Lettie와 함께라면 안전하고 의미 있는 글로벌 친구 관계를 만들어갈 수 있습니다. 지금 바로 첫 편지를 작성해보세요!

**Lettie에서 당신을 기다리는 전 세계 친구들을 만나보세요.**
    `
  },
  'penpal-culture-guide': {
    id: 'penpal-culture-guide',
    title: '세계 각국의 편지 문화: 펜팔로 배우는 글로벌 에티켓',
    description: '나라마다 다른 편지 문화와 인사법을 알아보고, 글로벌 펜팔과 더 깊은 관계를 만들어보세요.',
    date: '2025-01-15',
    readTime: '7분',
    category: '문화',
    image: '/brand-screen.png',
    author: 'Lettie',
    keywords: ['편지 문화', '글로벌 에티켓', '펜팔 문화', '국제 교류', '문화 차이'],
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
    `
  },
  'language-exchange-tips': {
    id: 'language-exchange-tips',
    title: '펜팔을 통한 언어 학습: 효과적인 언어 교환 방법',
    description: '펜팔과 함께 새로운 언어를 배우는 가장 효과적인 방법들을 소개합니다.',
    date: '2025-01-12',
    readTime: '6분',
    category: '학습',
    image: '/conversation-detail.png',
    author: 'Lettie',
    keywords: ['언어 교환', '언어 학습', '펜팔 학습', '외국어', '언어 공부'],
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
- 상대방 나라의 뉴스나 문화 이야기하기

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
    `
  },
  'marcus-introduction': {
    id: 'marcus-introduction',
    title: 'Marcus와 함께하는 펜팔: 진실한 우정을 찾아서',
    description: 'Marcus와 함께 전 세계 친구들과 진심 어린 대화를 나누세요. 일상의 이야기부터 취미, 음악, 여행까지 의미 있는 소통을 통해 진정한 우정을 만들어가는 펜팔 여정을 시작해보세요.',
    date: '2025-01-20',
    readTime: '4분',
    category: '커뮤니티',
    image: '/letter-writing.png',
    author: 'Marcus',
    keywords: ['펜팔 친구', '글로벌 소통', '문화 교류', '진실한 우정', '펜팔 커뮤니티', '국제 친구 만들기', 'Lettie 펜팔', '편지 친구'],
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

Lettie의 가장 큰 장점은 서두르지 않는다는 것입니다. 5통의 편지를 주고받기 전까지는 연락처를 교환할 수 없어, 천천히 서로를 알아가며 진정한 신뢰를 쌓을 수 있습니다.

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
    `
  },
  'dearest-friend': {
    id: 'dearest-friend',
    title: '가을밤의 편지: 외로움을 나누는 카페에서',
    description: '가을이 다가오면 길어지는 밤, 외로움이 찾아올 때가 있습니다. 우리의 길은 만나지 않을지 모르지만, 바닷가 카페에서 당신을 기다리며 쓰는 편지. Lettie에서 외로움을 함께 나눌 친구를 만나보세요.',
    date: '2025-01-20',
    readTime: '3분',
    category: '감성',
    image: '/brand-screen.png',
    author: 'Lettie',
    keywords: ['감성 편지', '펜팔 우정', '외로움 극복', '마음 치유', '펜팔 위로', '진심 어린 편지', '감성 소통', '바닷가 카페'],
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

**5통의 편지를 주고받으며**: 천천히 서로를 알아가세요. 급하지 않아도 됩니다.

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
      canonical: `https://lettie-dating.com/blog/${slug}`,
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

  // JSON-LD 구조화 데이터 - BlogPosting
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
      '@id': `https://lettie-dating.com/blog/${slug}`,
    },
  };

  // BreadcrumbList 구조화 데이터
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '홈',
        item: 'https://lettie-dating.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '블로그',
        item: 'https://lettie-dating.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://lettie-dating.com/blog/${slug}`,
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
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10">
              <Image
                src="/lettie-icon.png"
                alt="Lettie 앱 아이콘"
                className="w-10 h-10 rounded-2xl"
                width={40}
                height={40}
                priority
              />
            </div>
            <span className="text-2xl font-bold text-gray-800">Lettie</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-500 transition-colors">홈</Link>
            <Link href="/blog" className="text-blue-500 font-semibold">블로그</Link>
            <Link href="/faq" className="text-gray-600 hover:text-blue-500 transition-colors">FAQ</Link>
            <Link href="/guide" className="text-gray-600 hover:text-blue-500 transition-colors">가이드</Link>
          </div>
        </nav>
      </header>

      {/* Article */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2 text-gray-600">
            <li><Link href="/" className="hover:text-blue-500">홈</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-blue-500">블로그</Link></li>
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
              {post.readTime} 읽기
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-gray-600">
            {post.description}
          </p>
        </header>

        {/* Featured Image */}
        <div className="relative h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl mb-12">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-contain p-8"
          />
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
              href="/blog"
              className="flex items-center gap-2 text-blue-500 hover:text-blue-600 font-semibold"
            >
              <ArrowLeft className="w-5 h-5" />
              블로그 목록으로
            </Link>
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500">
              <Share2 className="w-5 h-5" />
              공유하기
            </button>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          관련 글 더 읽기
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {Object.values(blogPosts)
            .filter(p => p.id !== post.id)
            .slice(0, 3)
            .map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.id}`}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-500 transition-colors">
                  {relatedPost.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {relatedPost.description}
                </p>
                <span className="text-blue-500 font-semibold text-sm">
                  자세히 읽기 →
                </span>
              </Link>
            ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Lettie와 함께 펜팔 시작하기
          </h2>
          <p className="text-lg mb-8 opacity-95">
            전 세계 친구들과 편지로 소통하며 특별한 인연을 만들어보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com/kr/app/%EB%A0%88%ED%8B%B0/id6746454876"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-500 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
            >
              App Store에서 다운로드
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-500 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
            >
              Google Play에서 다운로드
            </a>
          </div>
        </div>
      </section>
    </>
  );
}