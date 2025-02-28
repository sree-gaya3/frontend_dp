export default class Visitor {
    visitNumeric(numeric) {
        return numeric.value;
    }
    visitBinaryExp(binaryExp) {
        const left = binaryExp.left.accept(this);
        const right = binaryExp.right.accept(this);
        switch (binaryExp.operator) {
            case '+':
                return left + right;
            case '-':
                return left - right;
            case '*':
                return left * right;
            case '/':
                return left / right;
            default:
                throw new Error('Unknown operator');
        }
    }
}