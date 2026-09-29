#!/usr/bin/env node
/**
 * 옛 제품 사실이 문구에 다시 들어오지 않게 막는다 (npm run check:facts, 빌드 전 prebuild 로도 돈다).
 * 2026-09-30: 앱은 73개 언어인데 랜딩 38개 파일 200여 곳이 "28개 언어", 발견 "8시간마다", 배달 "최소 30분",
 * 홈 통계 "150+개국"(실제 78)을 말하고 있었다. 정본은 src/data/facts.ts · src/data/letterMap.ts.
 * 규칙을 바꾸려면 facts.ts 주석과 이 목록을 함께 고친다.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const STALE = [
  ['번역 언어 수 28 (지금 70개 넘음)', /(?<![\d.,:/-])28 ?(개 ?언어|languages|idiomas|langues|Sprachen|lingue|bahasa|языков|языках|भाषाओं|भाषाएँ|か国語|言語|种语言|種語言)/],
  ['발견 8시간마다 (2026-09-21 부터 하루 한 번)', /(8 ?시간마다|every (8|eight) hours|cada ocho horas|a cada oito horas|toutes les huit heures|alle acht Stunden|ogni otto ore|setiap delapan jam|каждые восемь часов|हर आठ घंटे|8時間ごと|每 ?8 ?小时)/i],
  ['배달 최소 30분 (최소 1시간)', /(최소 30분|30분~24시간|at least 30 minutes|30 minutes to 24 hours|Minimum 30 minutes)/],
  ['가입 나라 150+ (COMMUNITY.countries 를 쓸 것)', /'150\+'/],
  ['무료 편지 하루 3통 (하루 1통)', /(하루 편지 3통|three letters a day)/],
];
// 과거 시점을 설명하는 문장은 허용 (예: llms.txt 의 "every eight hours until 2026-09-21")
const ALLOW = [/until 2026-09-21/];

const files = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(ts|tsx)$/.test(name)) files.push(p);
  }
})('src');

let bad = 0;
for (const f of files) {
  readFileSync(f, 'utf8').split('\n').forEach((line, i) => {
    for (const [why, re] of STALE) {
      if (re.test(line) && !ALLOW.some((a) => a.test(line))) {
        bad++;
        console.error(`${f}:${i + 1}  ${why}\n    ${line.trim().slice(0, 160)}`);
      }
    }
  });
}
if (bad) {
  console.error(`\n옛 제품 사실 ${bad}곳 — 정본(src/data/facts.ts)에 맞춰 고치세요.`);
  process.exit(1);
}
console.log(`check:facts ok (${files.length} files)`);
