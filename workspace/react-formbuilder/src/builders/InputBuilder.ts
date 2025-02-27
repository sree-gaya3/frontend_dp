import { ReactNode } from "react";
import FormElement from "./FormElement";
import InputComponent, { InputComponentProps } from "../components/input/inputComponent";

export default class InputBuilder implements FormElement {
    component: ReactNode;
    constructor(props: InputComponentProps) {
        this.component = InputComponent(props);
    };
}