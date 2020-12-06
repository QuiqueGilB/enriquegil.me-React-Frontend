import I18nTranslator from "../../Infrastructure/Translator/I18nTranslator";

export default interface TranslatorInterface {

    trans(key: string): string

}

export const DefaultInjection: TranslatorInterface = new I18nTranslator();