import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { LanguagesEnum } from "../constants/languages.keys";
// Resources
import { en } from "../lang/en";
import { fr } from "../lang/fr";

const INITIAL_LANG = LanguagesEnum.ENGLISH;
const DEFAULT_NS = "translation";

i18n.use(initReactI18next).init({
  fallbackLng: INITIAL_LANG,
  lng: INITIAL_LANG,
  interpolation: {
    escapeValue: false,
  },
  defaultNS: DEFAULT_NS,
  resources: { en, fr },
});

export default i18n;