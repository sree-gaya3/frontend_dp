class Percentage {
    constructor(value) {
        this.value = value;
    }
    toString() {
        return `${this.value}%`;
    }
    valueOf() { // value proxy
        return this.value / 100;
    }
}

let percentage = new Percentage(50);
console.log("Percentage: " + percentage);
console.log(`50 Percentage of ${percentage} is ${5 * percentage}`);