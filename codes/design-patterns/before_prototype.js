class Address {
    constructor(streetAddress, city, country) {
        this.streetAddress = streetAddress;
        this.city = city;
        this.country = country;
    }

    toString() {
        return `Address: ${this.streetAddress}, ` +
            `${this.city}, ${this.country}`;
    }
}

class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address; //!
    }

    toString() {
        return `${this.name} lives at ${this.address}`;
    }

    greet() {
        console.log(
            `Hi, my name is ${this.name}, ` +
            `I live at ${this.address.toString()}`
        );
    }
}

let karthik = new Person('Karthik',
    new Address('123 MG Road', 'Bengaluru', 'India'));

// copy only fields/state and not behaviour and type [Person , Address]
let rahul = JSON.parse(JSON.stringify(karthik));

rahul.name = 'Rahul';
rahul.address.streetAddress = '321 Bose St';

console.log(karthik.toString());
console.log(rahul.toString()); // inherited method

karthik.greet();
// this won't work, only dictionary [key/value] pairs are copied and not type info.
rahul.greet();
