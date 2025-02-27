// Abstract Factory
class GUIFactory {
    createButton() {
        throw new Error("abstract createButton!!!")
    }
    createCheckbox() {
        throw new Error("abstract createCheckbox!!!")
    }
}

class Checkbox {
    paint() {
        throw new Error("Abstract checkbox paint");
    }
}

class Button {
    paint() {
        throw new Error("Abstract button paint");
    }
}

class WinButton extends Button {
    paint() {
        console.log("Paint Button in Windows Style")
    }
}

class MacButton extends Button {
    paint() {
        console.log("Paint Button in Mac Style")
    }
}


class WinCheckbox extends Checkbox {
    paint() {
        console.log("Paint Checkbox in Windows Style")
    }
}

class MacCheckbox extends Checkbox {
    paint() {
        console.log("Paint Checkbox in Mac Style")
    }
}

class WinFactory extends GUIFactory {
    createButton() {
        return new WinButton();
    }
    createCheckbox() {
        return new WinCheckbox();
    }
}


class MacFactory extends GUIFactory {
    createButton() {
        return new MacButton();
    }
    createCheckbox() {
        return new MacCheckbox();
    }
}

class Application {
    constructor(factory) {
        this.factory = factory;
    }

    createUI() {
        this.button = this.factory.createButton();
        this.checkbox = this.factory.createCheckbox();
    }

    paint() {
        this.button.paint();
        this.checkbox.paint();
    }
}

class ApplicationConfigurator {
    constructor(os) {
        if (os == 'WIN') {
            this.factory = new WinFactory();
        } else if (os == "MAC") {
            this.factory = new MacFactory();
        }
    }
}

let appConfig = new ApplicationConfigurator("MAC");
let app = new Application(appConfig.factory);
app.createUI();
app.paint();
