import type { Components } from 'react-markdown';

/**
 * 글 본문은 마크다운 첫 줄이 `# 제목` 이다. 페이지가 이미 제목을 h1 으로 그리므로
 * 본문 첫 제목 줄을 떼어 h1 이 하나만 남게 한다(블로그 80페이지가 h1 두 개였다, 2026-09-24).
 */
export function stripLeadingH1(md: string): string {
  return md.replace(/^\s*#\s+[^\n]*\n+/, '');
}

/** 본문 안에 남은 h1 은 h2 로 내려 그린다 — 한 페이지에 h1 은 하나. */
export const articleMdComponents: Components = {
  h1: ({ node: _node, ...props }) => <h2 {...props} />,
};
