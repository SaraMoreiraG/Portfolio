import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translations
import enTranslations from './locales/en.json';
import esTranslations from './locales/es.json';

const resources = {
  en: {
    translation: enTranslations,
  },
  es: {
    translation: esTranslations,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // Default language
    fallbackLng: 'en', // Fallback language
    keySeparator: '.', // Separator for translation keys
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
