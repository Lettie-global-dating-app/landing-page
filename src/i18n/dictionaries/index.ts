import type { Locale } from '../config';
import { en, type Dictionary } from './en';
import { es } from './es';
import { pt } from './pt';
import { ja } from './ja';
import { fr } from './fr';
import { zh } from './zh';
import { de } from './de';
import { hi } from './hi';
import { id } from './id';
import { ru } from './ru';
import { it } from './it';

const DICTIONARIES: Record<Locale, Dictionary> = {
  en, es, pt, ja, fr, zh, de, hi, id, ru, it,
};

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale] ?? en;
}

export type { Dictionary };
