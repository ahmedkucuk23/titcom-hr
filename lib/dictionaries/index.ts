import { hr, type Dictionary } from './hr';
import { en } from './en';

export type Language = 'hr' | 'en';

export const dictionaries: Record<Language, Dictionary> = {
  hr,
  en,
};

export const getDictionary = (lang: Language): Dictionary => {
  return dictionaries[lang] || dictionaries.hr;
};

export type { Dictionary };

