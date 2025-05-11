import { getLocales } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './languages';
import { Languages } from './models';

const locales = getLocales();
const language = locales?.[0]?.languageCode ?? Languages.ES;

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next).init({
  resources,
  lng: language,
  fallbackLng: Languages.ES,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
