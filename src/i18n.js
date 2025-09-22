import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// Ajuste dos caminhos relativos (assumindo que a pasta locales está dentro de src)
import enTranslation from './locales/en.json';
import ptTranslation from './locales/pt.json';
import frTranslation from './locales/fr.json';

// Idioma detectado pelo navegador (poderia usar i18next-browser-languagedetector futuramente)
const browserLang = navigator.language.split('-')[0];
const supported = ['en', 'pt', 'fr'];

i18n
    .use(initReactI18next)
    .init({
        lng: supported.includes(browserLang) ? browserLang : 'en',
        fallbackLng: 'en',
        resources: {
            en: { translation: enTranslation },
            pt: { translation: ptTranslation },
            fr: { translation: frTranslation }
        },
        interpolation: { escapeValue: false }
    });

export default i18n;