import type { ReactNode } from 'react';

/**
 * 다국어 글(src/data/articles)용 작은 마크다운 렌더러.
 * 쓰는 문법만 다룬다: ## · ### · - 목록 · **굵게** · | 표 |. 링크·이미지·HTML 은 없다(글 데이터에서 금지).
 * 서버에서 그리므로 크롤러가 본문을 그대로 본다.
 */
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
/** 한 줄 안의 **굵게** 만 HTML 로 (직답 문단처럼 마크다운 블록이 아닌 칸에 쓴다) */
export const inline = (s: string) =>
  esc(s).replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>');

const cells = (row: string) =>
  row
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((c) => c.trim());

export function renderMiniMarkdown(md: string): ReactNode[] {
  const out: ReactNode[] = [];
  const lines = md.replace(/\r/g, '').trim().split('\n');
  let i = 0;
  let key = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) {
      i++;
      continue;
    }
    if (line.startsWith('|')) {
      const rows: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) rows.push(lines[i++].trim());
      // |---|:---:| 같은 구분 줄은 뺀다
      const body = rows.filter((r) => !/^[\s|:-]+$/.test(r));
      const [head, ...rest] = body;
      out.push(
        <div key={key++} className="my-6 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-start text-[15px] min-w-[480px]">
            <thead>
              <tr>
                {cells(head).map((c, j) => (
                  <th key={j} className="px-4 py-3 font-semibold text-foreground bg-muted/40 text-start" dangerouslySetInnerHTML={{ __html: inline(c) }} />
                ))}
              </tr>
            </thead>
            <tbody>
              {rest.map((r, ri) => (
                <tr key={ri} className="border-t border-border">
                  {cells(r).map((c, j) => (
                    <td key={j} className="px-4 py-3 text-muted-foreground align-top" dangerouslySetInnerHTML={{ __html: inline(c) }} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }
    if (line.startsWith('- ') || line.startsWith('* ')) {
      const items: string[] = [];
      while (i < lines.length && /^\s*[-*] /.test(lines[i])) items.push(lines[i++].trim().slice(2));
      out.push(
        <ul key={key++} className="list-disc ps-6 space-y-2 my-5 text-muted-foreground leading-relaxed">
          {items.map((li, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: inline(li) }} />
          ))}
        </ul>,
      );
      continue;
    }
    if (line.startsWith('### ')) {
      out.push(<h3 key={key++} className="text-xl font-bold text-foreground mt-8 mb-3" dangerouslySetInnerHTML={{ __html: inline(line.slice(4)) }} />);
    } else if (line.startsWith('## ') || line.startsWith('# ')) {
      // 본문에 h1 은 두지 않는다 — 한 페이지 h1 하나
      out.push(<h2 key={key++} className="text-2xl font-bold text-foreground mt-10 mb-4" dangerouslySetInnerHTML={{ __html: inline(line.replace(/^#+\s+/, '')) }} />);
    } else {
      out.push(<p key={key++} className="my-4 text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: inline(line) }} />);
    }
    i++;
  }
  return out;
}
