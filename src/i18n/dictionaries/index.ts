import type { Locale } from '../config';
import { en, type Dictionary } from './en';
import { es } from './es';
import { pt } from './pt';
import { ja } from './ja';
import { fr } from './fr';

const DICTIONARIES: Record<Locale, Dictionary> = { en, es, pt, ja, fr };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale] ?? en;
}

export type { Dictionary };
