# Product Hunt 갤러리 이미지(1270x760) 생성.
#
# 기존 App Store 스크린샷(1290x2796)에서 폰 목업 부분만 떼어내
# 가로 캔버스 오른쪽에 놓고, 왼쪽에는 영어 카피를 새로 얹는다.
# (원본 헤드라인은 세로 레이아웃 기준이라 가로에서는 다시 쓰는 편이 낫다.)

from PIL import Image, ImageDraw, ImageFont
import os

SRC = "/Users/gimjunhyeong/Develop/dearglobe-landing-page/public"
OUT = "/private/tmp/claude-501/-Users-gimjunhyeong-AndroidStudioProjects-dearglobe/2643d558-58b8-4871-93a1-2e1e2be69d14/scratchpad/ph-gallery"
os.makedirs(OUT, exist_ok=True)

W, H = 1270, 760
BG = (0, 103, 235)          # 원본 스크린샷에서 샘플링한 브랜드 블루
INK = (255, 255, 255)
SUB = (208, 224, 255)

F_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
F_REG = "/System/Library/Fonts/Supplemental/Arial.ttf"

# 각 슬라이드: (원본 파일, 헤드라인, 서브카피)
SLIDES = [
    ("letter-feed-en.png",
     "Letters, not swipes",
     "Open a letter from someone across the world\nand answer it in your own words."),
    ("letter-writing-en.png",
     "Write the way\nyou actually think",
     "Korean, Portuguese, Thai — write in your own\nlanguage. Lettie carries it to theirs."),
    ("conversation-detail-en.png",
     "One thread,\nletter by letter",
     "Your whole exchange stays in one place.\nNo feeds, no noise, no disappearing chats."),
    ("contact-exchange-en.png",
     "Contacts after\nfive letters",
     "No numbers up front. You share them only\nonce the letters have earned it."),
]


def crop_phone(path):
    """세로 스크린샷에서 폰 목업 영역만 잘라낸다.

    원본은 위쪽이 헤드라인 텍스트, 아래쪽이 폰이다.
    폰 프레임(검은 베젤)이 시작하는 y 를 실제로 찾아 그 위를 전부 버린다.
    고정 비율로 자르면 원본마다 헤드라인 줄 수가 달라 잔재가 남는다.
    """
    img = Image.open(path).convert("RGB")
    w, h = img.size
    cx = w // 2
    top = int(h * 0.26)
    for y in range(0, h):
        r, g, b = img.getpixel((cx, y))
        if r < 60 and g < 60 and b < 60:
            top = max(0, y - 12)   # 베젤이 잘리지 않게 여유
            break
    return img.crop((0, top, w, h))


def wrap(draw, text, font, max_w):
    lines = []
    for para in text.split("\n"):
        cur = ""
        for word in para.split():
            trial = f"{cur} {word}".strip()
            if draw.textlength(trial, font=font) <= max_w:
                cur = trial
            else:
                if cur:
                    lines.append(cur)
                cur = word
        lines.append(cur)
    return lines


def build(src_name, headline, sub, idx):
    canvas = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(canvas)

    # ── 오른쪽: 폰 목업 ─────────────────────────────
    phone = crop_phone(os.path.join(SRC, src_name))
    # 캔버스 높이의 96%까지 차오르게 축소하고, 아래로 살짝 잘리게 배치해
    # "화면이 이어진다"는 인상을 준다.
    target_h = int(H * 0.96)
    ratio = target_h / phone.height
    phone = phone.resize((int(phone.width * ratio), target_h), Image.LANCZOS)

    px = W - phone.width - 40
    py = int(H * 0.10)
    canvas.paste(phone, (px, py))

    # ── 왼쪽: 카피 ──────────────────────────────────
    pad = 64
    text_w = px - pad * 2

    f_head = ImageFont.truetype(F_BOLD, 62)
    f_sub = ImageFont.truetype(F_REG, 27)

    head_lines = wrap(draw, headline, f_head, text_w)
    sub_lines = wrap(draw, sub, f_sub, text_w)

    head_h = len(head_lines) * 74
    sub_h = len(sub_lines) * 40
    block_h = head_h + 28 + sub_h
    y = (H - block_h) // 2

    for line in head_lines:
        draw.text((pad, y), line, font=f_head, fill=INK)
        y += 74

    y += 28
    for line in sub_lines:
        draw.text((pad, y), line, font=f_sub, fill=SUB)
        y += 40

    out = os.path.join(OUT, f"ph-{idx}.png")
    canvas.save(out, "PNG", optimize=True)
    return out


for i, (src, head, sub) in enumerate(SLIDES, start=1):
    print(build(src, head, sub, i))
