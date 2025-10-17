// "use client";

// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import HttpBackend from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";

// i18n
//   .use(HttpBackend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: "en",
//     debug: false,
//     interpolation: { escapeValue: false },
//     backend: {
//       loadPath: "/locales/{{lng}}/translation.json",
//     },
//   });

// export default i18n;






//// src/i18n.js
// "use client";

// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import HttpBackend from "i18next-http-backend";

// if (!i18n.isInitialized) {
//   i18n
//     .use(HttpBackend)
//     .use(initReactI18next)
//     .init({
//       fallbackLng: "en",
//       lng: "en",
//       backend: {
//         loadPath: "/locales/{{lng}}/translation.json",
//       },
//       interpolation: { escapeValue: false },
//       debug: false,
//     });
// }

// export default i18n;


"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector"; // <-- Add this line

if (!i18n.isInitialized) {
  i18n
    .use(HttpBackend)
    .use(LanguageDetector)  // <-- Add this line
    .use(initReactI18next)
    .init({
      fallbackLng: "en",
      debug: false,
      interpolation: { escapeValue: false },
      backend: {
        loadPath: "/locales/{{lng}}/translation.json",
      },
      detection: {
        order: ["localStorage", "navigator", "htmlTag"],
        lookupLocalStorage: "i18nextLng",
        caches: ["localStorage"],
      },
    });
}

export default i18n;
