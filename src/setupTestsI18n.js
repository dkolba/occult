// @ts-check
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  resources: {
    en: {
      translations: { changeanimation: "Click here to change animation" },
    },
    de: {
      translations: { changeanimation: "Klicken um die Animation zu ändern" },
    },
  },

  debug: false,

  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18n;
