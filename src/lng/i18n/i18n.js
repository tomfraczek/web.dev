import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          links: {
            contact: "Contact Us",
            check_offer: "Check the Offer",
          },
          hero: {
            header: {
              part1: "We can help\n <highlight>you</highlight>\n",
              part2: "\nyour website",
            },
            description:
              "Unlock the full potential of your online presence with expert website development. Our team of skilled developers will work with you to create a custom website tailored to your business' unique needs. From design to launch, we'll guide you every step of the way to ensure that your website not only looks great but also functions perfectly. Take the first step towards a successful online presence today and contact us to start building your dream website!",
          },
          word_carousel: {
            grow: "grow",
            build: "build",
            host: "host",
            maintain: "maintain",
          },
        },
      },
      pl: {
        translation: {
          links: {
            contact: "Kontakt",
            check_offer: "Sprawdź ofertę",
          },
        },
      },
    },
  });

export default i18n;
