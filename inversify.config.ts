import {Container} from "inversify";
import TranslatorInterface from "./src/Share/Domain/Translator/TranslatorInterface";
import I18nTranslator from "./src/Share/Infrastructure/Translator/I18nTranslator";
import TYPES from "./src/TYPES";

const container = new Container();

container.bind<TranslatorInterface>(TYPES.Translator).to(I18nTranslator).inSingletonScope();


export default container;