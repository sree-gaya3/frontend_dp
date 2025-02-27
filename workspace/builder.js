// without builder pattern.. its hard to send all arguments at once to construct an element
class Employee {
    constructor() {
        // personal
        this.name = this.email = '';
        // address
        this.street = this.state = this.pincode = '';
        // job
        this.position = this.company = '';
    }

    toString() {
        return `Employee ${this.name} with Email <${this.email}> stays in ${this.street}, ${this.state} - ${this.pincode} and works as ${this.position} at ${this.company}`;
    }
}

class EmployeeBuilder {
    constructor(employee = new Employee()) {
        this.employee = employee;
    }

    build() {
        return this.employee;
    }

    name(name) {
        this.employee.name = name;
        return this;
    }
    email(email) {
        this.employee.email = email;
        return this;
    }
    get lives() {
        return new EmployeeAddressBuilder(this.employee);
    }
}

class EmployeeAddressBuilder extends EmployeeBuilder {
    constructor(employee) {
        super(employee);
    }

    street(street) {
        this.employee.street = street;
        return this;
    }
    state(state) {
        this.employee.state = state;
        return this;
    }
    pincode(pincode) {
        this.employee.pincode = pincode;
        return this;
    }
}


let employee = new EmployeeBuilder()
    .name('John')
    .email('john@adobe.com')
    .lives.street('123, 4th cross')
    .lives.state('CA')
    .build();

console.log(employee);