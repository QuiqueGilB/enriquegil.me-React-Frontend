import TranslatorInterface from "./Share/Domain/Translator/TranslatorInterface";
import I18nTranslator from "./Share/Infrastructure/Translator/I18nTranslator";

export const TranslatorInjection: { default: TranslatorInterface } = {default: new I18nTranslator()};