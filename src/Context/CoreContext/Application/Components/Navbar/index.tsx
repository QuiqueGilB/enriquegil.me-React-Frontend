import {Component} from "react";
import TranslatorInterface from "../../../../../Share/Domain/Translator/TranslatorInterface";
import {TranslatorInjection} from "../../../../../DependencyInjection";
import template from './index.html';

export default class Navbar extends Component<any, any> {

    private translator: TranslatorInterface;

    constructor(
        props: any,
        context: any,
        translator: TranslatorInterface = TranslatorInjection.default
    ) {
        super(props, context);
        console.log(translator);
        this.translator = translator;
    }

    render() {
        return (template);
    }

}