import { useTranslation } from 'react-i18next';
import { Languages } from '../models';

export function useTranslations() {
  const { t, i18n } = useTranslation();
  const translate = (key: string, props?: any) => t(key, props, {});
  const changeLanguages = (language: Languages | string) => {
    i18n.changeLanguage(language);
  };

  return { translate, changeLanguages, i18n };
}
