import {Component} from "react";
import TranslatorInterface, {DefaultInjection as TranslatorInjection} from "../../../../../Share/Domain/Translator/TranslatorInterface";
import {inject} from "inversify";
import TYPES from "../../../../../TYPES";


export default class Navbar extends Component<any, any> {

    private translator: TranslatorInterface;

    constructor(
        props: any,
        context: any,
        @inject(TYPES.Translator) translator: TranslatorInterface
    ) {
        super(props, context);
        console.log(translator);
        this.translator = translator;
    }

    render() {
        return (
            <div>
                <p>Helloooooo</p>
                <p>{this.translator?.trans('hello') || "aaa"}</p>
            </div>
        );
    }

}