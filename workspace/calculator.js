// command pattern - at any point of time, we need to be able to undo the operation

class Calculator {
    constructor() {
        this.value = 0;
        this.history = [];
    }
    // command can be add, substract, etc..
    execute(command) {
        this.value = command.execute(this.value);
        this.history.push(command);
    }
    undo() {
        const command = this.history.pop();
        this.value = command.undo(this.value);
    }
}

class AddCommand {
    constructor(val) {
        this.val = val;
    }
    execute(currVal) {
        return currVal + this.val;
    }
    undo(currVal) {
        return currVal - this.val;
    }
}

class SubstractCommand {
    constructor(val) {
        this.val = val;
    }
    execute(currVal) {
        return currVal - this.val;
    }
    undo(currVal) {
        return currVal + this.val;
    }
}

let calci = new Calculator();
calci.execute(new AddCommand(10));
console.log(calci.value); // 10
calci.execute(new AddCommand(100));
console.log(calci.value); // 110
calci.execute(new SubstractCommand(50));
console.log(calci.value); // 60
calci.undo();
console.log(calci.value); // 110
calci.undo();
console.log(calci.value); // 10