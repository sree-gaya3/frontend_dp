const fs = require('fs');
// fails SRP
class Journal {
    constructor() {
        this.entries = {};
    }

    addEntry(text) {
        let c = ++Journal.count;
        let entry = `${c}: ${text}`;
        this.entries[c] = entry;
        return c;
    }

    removeEntry(index) {
        delete this.entries[index];
    }

    toString() {
        return Object.values(this.entries).join('\n');
    }

    save(filename) {
        fs.writeFileSync(filename, this.toString());
    }

    load(filename) {
        //
    }

    loadFromUrl(url) {
        //
    }
}

Journal.count = 0;

let j = new Journal();
j.addEntry('I did Yoga today.');
j.addEntry('I went for a walk!!!.');
console.log(j.toString());

j.save("./a.txt")