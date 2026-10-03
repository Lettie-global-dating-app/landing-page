#!/usr/bin/env node
// src/data/articles/<lang>.ts 를 모아 all.ts 를 만든다. 언어 파일을 추가·삭제한 뒤 돌린다 (prebuild 에서도 돈다).
import { readdirSync, writeFileSync } from 'node:fs';
const dir = new URL('../src/data/articles/', import.meta.url);
const langs = readdirSync(dir).filter((f) => /^[a-z]{2,3}\.ts$/.test(f) && f !== 'all.ts').map((f) => f.slice(0, -3)).sort();
const id = (l) => `a_${l}`;
const src = `// 자동 생성 — scripts/gen-articles-index.mjs. 손으로 고치지 않는다.
import type { ArticleSet } from './types';
${langs.map((l) => `import { articles as ${id(l)} } from './${l}';`).join('\n')}

export const ARTICLES: Record<string, ArticleSet> = {${langs.length ? `\n  ${langs.map((l) => `${l}: ${id(l)}`).join(',\n  ')},\n` : ''}};
`;
writeFileSync(new URL('all.ts', dir), src);
console.log(`articles: ${langs.length} languages (${langs.join(' ')})`);
