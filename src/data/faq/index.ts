import type { FaqContent } from '@/data/localizedFaq';
import { faq as bnFaq, homeKeywords as bnKw } from './bn';
import { faq as filFaq, homeKeywords as filKw } from './fil';
import { faq as trFaq, homeKeywords as trKw } from './tr';
import { faq as viFaq, homeKeywords as viKw } from './vi';
import { faq as thFaq, homeKeywords as thKw } from './th';
import { faq as msFaq, homeKeywords as msKw } from './ms';
import { faq as swFaq, homeKeywords as swKw } from './sw';
import { faq as plFaq, homeKeywords as plKw } from './pl';
import { faq as nlFaq, homeKeywords as nlKw } from './nl';
import { faq as ukFaq, homeKeywords as ukKw } from './uk';
import { faq as roFaq, homeKeywords as roKw } from './ro';
import { faq as elFaq, homeKeywords as elKw } from './el';
import { faq as csFaq, homeKeywords as csKw } from './cs';
import { faq as arFaq, homeKeywords as arKw } from './ar';
import { faq as faFaq, homeKeywords as faKw } from './fa';
import { faq as urFaq, homeKeywords as urKw } from './ur';

/**
 * 2026-10-04 에 추가한 16개 언어의 FAQ·홈 메타 키워드. 언어마다 파일 하나(src/data/faq/<lang>.ts)다.
 * localizedFaq 가 이 FAQ 를 합치므로 라우트·hreflang·사이트맵은 자동으로 따라온다.
 */
export const extraFaq: Record<string, FaqContent> = {
  bn: bnFaq, fil: filFaq, tr: trFaq, vi: viFaq, th: thFaq, ms: msFaq, sw: swFaq, pl: plFaq, nl: nlFaq, uk: ukFaq, ro: roFaq, el: elFaq, cs: csFaq, ar: arFaq, fa: faFaq, ur: urFaq,
};

export const extraHomeKeywords: Record<string, string[]> = {
  bn: bnKw, fil: filKw, tr: trKw, vi: viKw, th: thKw, ms: msKw, sw: swKw, pl: plKw, nl: nlKw, uk: ukKw, ro: roKw, el: elKw, cs: csKw, ar: arKw, fa: faKw, ur: urKw,
};
