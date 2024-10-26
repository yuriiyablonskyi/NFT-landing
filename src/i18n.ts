import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import pl from './locales/pl.json'
import uk from './locales/uk.json'

export const resources = {
  en: {
    translation: en,
  },
  pl: {
    translation: pl,
  },
  uk: {
    translation: uk,
  },
} as const

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
