import translationsEn from './en.json'
import translationsFr from './fr.json'
import translationsEs from './es.json'

export const locales = ['en', 'fr', 'es']

export const language = navigator.language.split(/[-_]/)[0] || 'en'

export const translations = {
  en: translationsEn,
  fr: translationsFr,
  es: translationsEs,
}
