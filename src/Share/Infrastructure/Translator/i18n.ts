import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
    .use(Backend)
    .use(LanguageDetector)
    .init({
        whitelist: ['en', 'es'],
        fallbackLng: 'es',
        preload: ['en', 'es'],

        interpolation: {
            escapeValue: false
        },

        ns: ['translation'],
        defaultNS: 'translation',

        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        },

        react: {
            wait: true,
            bindI18n: 'languageChanged loaded',
            // bindStore: 'added removed',
            nsMode: 'default'
        }
    });

export default i18n;