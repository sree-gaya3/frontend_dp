export default class Numeric {
    constructor(value) {
        this.value = value;
    }
    accept(visitor) {
        return visitor.visitNumeric(this);
    }
}