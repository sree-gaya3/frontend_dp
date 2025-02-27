const words = ['hello', 'world'];

class Tag {
    constructor(name = '', text = '') {
        this.name = name;
        this.text = text;
        this.children = [];
    }

    toString() {
        let html = [];
        html.push(`<${this.name}>\n`);
        if(this.text.length > 0) {
            html.push(this.text);
            html.push("\n");
        }
        for(let child of this.children) {
            html.push(child.toString());
        }

        html.push(`</${this.name}>\n`);

        return html.join('');
    }
}
class HtmlBuilder {
    constructor(rootName) {
        this.root = new Tag(rootName);
        // this.rootName = rootName;
    }

    // fluent
    addChild(childName, childText) {
        let child = new Tag(childName, childText);
        this.root.children.push(child);
        return this;
    }

    toString() {
        return this.root.toString();
    }

    build() {
        return this.root;
    }
}

let builder = new HtmlBuilder('ul');
// for(let word of words) {
//     builder.addChild("li", word);
// }

builder
    .addChild("li", "a")
    .addChild("li", "b")
    .addChild("li", "c")
    // .build();
    
console.log(builder.toString());

