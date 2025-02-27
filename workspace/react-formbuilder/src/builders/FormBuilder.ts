import { CheckboxComponentProps } from "../components/checkbox/checkboxComponent";
import { InputComponentProps } from "../components/input/inputComponent";
import CheckboxBuilder from "./CheckboxBuilder";
import FormElement from "./FormElement";
import InputBuilder from "./InputBuilder";

export default class FormBuilder {
    elements: FormElement[];
    constructor() {
        this.elements = [];
    }
    build() {
        return this.elements.map(element => element.component);
    }

    input(props: InputComponentProps) {
        this.elements.push(new InputBuilder(props));
        return this;
    }
    checkbox(props: CheckboxComponentProps) {
        this.elements.push(new CheckboxBuilder(props));
        return this;
    }
}