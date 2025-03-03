import { CSSProperties, Dispatch } from "react";

export interface CommandUtils {
    styles: CSSProperties;
    setStyles: Dispatch<React.SetStateAction<CSSProperties>>;
}

export abstract class Command<T> {
    utils: T;
    constructor(utils:T) {
        this.utils = utils;
    }

    abstract execute(): void;
    abstract undo(): void;
}

export class ItalicCommand<T extends CommandUtils> extends Command<T> {
    prevFontStyle?: CSSProperties["fontStyle"];
    constructor(utils:T) {
        super(utils);
        this.prevFontStyle = utils.styles.fontStyle;
    }
    getNextStyle() {
        if(this.prevFontStyle === 'italic') {
            return 'normal'
        }
        return 'italic'
    }
    execute() {
        const nextFontStyle = this.getNextStyle();
        this.utils.setStyles(prevStyles => ({
            ...prevStyles, 
            fontStyle: nextFontStyle
        }));
    }
    undo() {
        this.utils.setStyles(prevStyles => ({
            ...prevStyles, 
            fontStyle: this.prevFontStyle
        }));
    }
}


export class BoldCommand<T extends CommandUtils> extends Command<T> {
    prevFontWeight?: CSSProperties["fontWeight"];
    constructor(utils:T) {
        super(utils);
        this.prevFontWeight = utils.styles.fontWeight;
    }
    getNextStyle() {
        if(this.prevFontWeight === 'bold' ||
            (typeof this.prevFontWeight === 'number' && this.prevFontWeight >= 700)
        ) {
            return 'normal'
        }
        return 'bold'
    }
    execute() {
        const nextFontStyle = this.getNextStyle();
        this.utils.setStyles(prevStyles => ({
            ...prevStyles, 
            fontWeight: nextFontStyle
        }));
    }
    undo() {
        this.utils.setStyles(prevStyles => ({
            ...prevStyles, 
            fontWeight: this.prevFontWeight
        }));
    }
}