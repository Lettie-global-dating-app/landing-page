# Lettie — Product Hunt 출시 키트

## 제출 폼에 그대로 넣을 값

**Name**
```
Lettie
```

**Tagline** (60자 제한) — 3안 중 택1

| # | 카피 | 길이 | 노림수 |
|---|------|------|--------|
| A | `Penpal dating where letters come before looks` | 45 | 안티-틴더 포지션. PH에서 가장 반응이 좋은 각도 |
| B | `Slow dating by letter, in 16 languages` | 38 | 번역=차별점을 전면에. 글로벌 유저에게 직접적 |
| C | `Meet someone abroad — you write, we translate` | 45 | 언어 장벽 해소를 약속으로 |

→ **A 추천.** PH 오디언스는 "또 하나의 데이팅 앱"에 피로하다. 'looks 이전에 letters'가
   스크롤을 멈추게 한다. 번역은 description에서 바로 받아친다.

**Description** (260자 제한)
```
Lettie is a global penpal app where connection starts with a letter, not a photo.
Write in your own language — letters and chats translate across 16 languages.
Profiles blur into focus as you exchange letters, and contacts unlock only after five.
```
(약 250자)

**Topics** (최대 3개)
```
Dating · Social Networking · Language Learning
```
Language Learning을 넣는 이유: 데이팅 카테고리는 경쟁이 극심한데, 번역/언어 각도로 들어오면
전혀 다른 유저 풀에 노출된다. 실제로 "펜팔로 언어 배우기"는 오래된 니즈다.

**Links**
```
Website:    https://lettie-dating.com/en
App Store:  https://apps.apple.com/app/id6746454876
Google Play: https://play.google.com/store/apps/details?id=com.dearglobe.dearglobe
```
※ 웹사이트는 반드시 `/en`. 루트는 한국어라 PH 방문자가 튕긴다.

---

## Maker's first comment (댓글 원문)

> 제출 직후 본인이 첫 댓글로 답니다. PH에서 이 댓글이 실제 전환을 만듭니다.

```
Hey Product Hunt 👋

I built Lettie because dating apps had turned into a photo-sorting game.
Swipe, judge, repeat — and somehow you still know nothing about the person.

So I went back to something slower: letters.

On Lettie you write a letter and it travels to someone on the other side of
the world. There's no swiping. Their profile photo starts out blurred and
comes into focus only as you keep writing to each other. You can exchange
contacts after five letters — not before.

The part I care about most: language shouldn't decide who you get to meet.
Write in Korean, they read it in Portuguese. Every letter and every reply
translates across 16 languages, and you can see the original side by side
with the translation — a lot of our users tell us they're picking up a
language while they're at it.

It's live on iOS and Android, free to use.

I'd genuinely love to hear what you think — especially if you've ever had
a penpal. What made it stick, or what made it fade?

— Junhyeong
```

---

## 출시일 체크리스트

**D-1 (전날)**
- [ ] PH 계정 프로필 채우기 (빈 프로필 메이커는 신뢰도가 낮다)
- [ ] 갤러리 이미지 업로드 (아래 이슈 참고)
- [ ] 예약 발행 설정 — **화·수·목 00:01 PST** (한국시간 오후 5시 1분)
      금·토·일은 트래픽이 급감한다. 월요일은 대형 런치가 몰린다.
- [ ] 앱 스토어 링크 국가 무관하게 열리는지 확인 (`/kr/` 경로 제거)

**D-Day**
- [ ] 00:01 PST 발행 직후 메이커 댓글 게시
- [ ] 첫 3시간이 랭킹을 결정 — 이 시간대에 지인 트래픽 집중
- [ ] 모든 댓글에 답글 (응답률이 랭킹 신호에 들어간다)
- [ ] "upvote 해달라"는 직접 요청 금지 — PH 규정 위반, 계정 제재 사유

**D+1 이후**
- [ ] 배지 이미지를 랜딩 페이지에 삽입
- [ ] 유입 데이터 확인 후 스토어 등록정보에 반영

---

## 업로드할 파일

| 용도 | 파일 | 규격 |
|------|------|------|
| Thumbnail | `ph-thumbnail-240.png` | 240×240 |
| Gallery 1 | `gallery/ph-1.png` | 1270×760 |
| Gallery 2 | `gallery/ph-2.png` | 1270×760 |
| Gallery 3 | `gallery/ph-3.png` | 1270×760 |
| Gallery 4 | `gallery/ph-4.png` | 1270×760 |

`make_gallery.py` 로 재생성한다. `public/*-en.png` 의 App Store 스크린샷에서
폰 목업만 떼어내 가로 캔버스로 재구성하는 스크립트다. 카피를 바꾸려면
스크립트 상단의 `SLIDES` 만 고치면 된다.

### 갤러리 카피 원칙

**화면에 보이지 않는 기능은 카피로 약속하지 않는다.** 초안에서 2·3번 슬라이드에
"번역 미리보기", "원문과 번역을 나란히"를 넣었다가 되돌렸다 — 정작 그 UI 가
스크린샷에 없어서, PH 에서 "실제로 되냐"는 지적을 받으면 신뢰를 잃는다.
번역 기능은 description 과 메이커 댓글에서 다룬다.

## 개선 여지 — 번역 화면 스크린샷

현재 갤러리의 약점은 두 가지다.

1. 폰 화면 속 **앱 UI 가 한국어**라 영어권 방문자가 읽지 못한다
2. **번역 기능이 갤러리에 없다.** 지금 레티의 가장 강한 차별점이자
   `Language Learning` 토픽과 직결되는데 빠져 있다

아래 두 화면을 **영어 locale** 로 촬영해 추가하면 갤러리가 크게 강해진다.
(1번은 첫 장으로 올릴 만하다.)

1. 편지 상세 — 원문과 번역이 나란히 보이는 화면
2. 편지 작성 중 번역 미리보기 시트

촬영은 시뮬레이터로 가능하지만 로그인이 필요하다.
