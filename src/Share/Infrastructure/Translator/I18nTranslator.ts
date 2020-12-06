import i18n from './i18n';
import TranslatorInterface from "../../Domain/Translator/TranslatorInterface";
import {injectable} from "inversify";

@injectable()
class I18nTranslator implements TranslatorInterface {

    trans(key: string): string {
        return i18n.t(key);
    }

}

export default I18nTranslator