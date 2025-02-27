import { ReactNode } from "react";
import CheckboxComponent, { CheckboxComponentProps } from "../components/checkbox/checkboxComponent";
import FormElement from "./FormElement";

export default class CheckboxBuilder implements FormElement {
    component: ReactNode;
    constructor(props: CheckboxComponentProps) {
        this.component = CheckboxComponent(props);
    };
}