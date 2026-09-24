/**
 * 검색 결과 제목·설명 규칙 (2026-09-24 SEO 라운드).
 * 구글은 픽셀 폭으로 자른다 — 한글·한자·가나는 라틴 글자의 약 두 배 폭이라 2칸으로 센다.
 * 제목 60칸, 설명 160칸. 접미사 " | Lettie" 는 자리가 있을 때만 붙인다(없으면 브랜드가 잘린 제목보다 핵심어가 사는 쪽).
 */
export function visualWidth(s: string): number {
  let w = 0;
  for (const ch of s) w += /[ᄀ-ᇿ⺀-鿿가-힯豈-﫿＀-￯]/.test(ch) ? 2 : 1;
  return w;
}

export function seoTitle(title: string, max = 60): string {
  const t = title.trim();
  if (/lettie/i.test(t)) return t;
  const withBrand = `${t} | Lettie`;
  return visualWidth(withBrand) <= max ? withBrand : t;
}

/** 문장 단위로 max 칸 안에 담는다. 첫 문장부터 넘치면 단어 경계에서 자르고 … */
export function seoDesc(text: string, max = 160): string {
  const t = text.replace(/\s+/g, ' ').trim();
  if (visualWidth(t) <= max) return t;
  const sentences = t.match(/[^.!?。！？]+[.!?。！？]+["')\]]*\s*/g) ?? [t];
  let out = '';
  for (const s of sentences) {
    if (visualWidth(out + s) > max) break;
    out += s;
  }
  if (out.trim()) return out.trim();
  let cut = '';
  for (const ch of t) {
    if (visualWidth(cut + ch) > max - 1) break;
    cut += ch;
  }
  const sp = cut.lastIndexOf(' ');
  return (sp > max / 2 ? cut.slice(0, sp) : cut).replace(/[,;:\s]+$/, '') + '…';
}
