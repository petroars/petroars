import 'server-only'

export type Locales = 'cz' | 'en';
 
const dictionaries = {
  cz: () => import('./cz.js').then((module) => module.default),
  en: () => import('./en.js').then((module) => module.default),
}
 
export const getDictionary = async (locale: Locales) => dictionaries[locale]()