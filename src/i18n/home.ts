/**
 * 홈(랜딩) 문구 — 12개 언어가 같은 구조를 공유한다.
 * 한국어 사전이 형태의 기준이다. 키를 빠뜨리면 컴파일러가 잡는다.
 *
 * 원칙: Lettie 는 **펜팔 앱**이다. "데이팅"이라는 말은 쓰지 않는다 (2026-09-21 대표 지시).
 * 사실은 2.0 기준만 쓴다 — 거리 기준 1~24h 배달(국내 1~2h), 발견 8시간마다 3장, 번역 28개 언어 무료,
 * 기본 캐릭터 16종, 하루 몇 장의 소개 카드, 젬은 선택.
 */
import { ko } from './home/ko';
import { en } from './home/en';
import { es } from './home/es';
import { pt } from './home/pt';
import { ja } from './home/ja';
import { fr } from './home/fr';
import { zh } from './home/zh';
import { de } from './home/de';
import { hi } from './home/hi';
import { id } from './home/id';
import { ru } from './home/ru';
import { it } from './home/it';

export type HomeCopy = typeof ko;

const COPY: Record<string, HomeCopy> = { ko, en, es, pt, ja, fr, zh, de, hi, id, ru, it };

export function getHomeCopy(lang: string): HomeCopy {
  return COPY[lang] ?? en;
}

export const HOME_LANGS = Object.keys(COPY);
