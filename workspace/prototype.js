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

class Serializer {
    constructor(...types) {
        this.types = types;
    }
    addTypeIndex(object) {
        const idx = this.types.findIndex(t => t.name === object.constructor.name);
        if (idx != -1) {
            object['typeIndex'] = idx;
            for (let key in object) {
                this.addTypeIndex(object[key]);
            }
        }
    }
    reconstruct(object) {
        if(object.hasOwnProperty('typeIndex')) {
            const type = this.types[object.typeIndex];
            let obj = new type(); // new person or new address based on index
            for(let key in object) {
                if(key !== 'typeIndex') {
                    obj[key] = this.reconstruct(object[key]);
                }
            }
            // delete obj.typeIndex;
            return obj;
        }
        return object;
    }
    clone(object) {
        this.addTypeIndex(object);
        let cpy = JSON.parse(JSON.stringify(object)); //dictionary
        return this.reconstruct(cpy);
    }
}

let serializer = new Serializer(Person, Address);

let karthik = new Person('Karthik',
    new Address('123 MG Road', 'Bengaluru', 'India'));

// copy only fields/state and not behaviour and type [Person , Address]
// let rahul = JSON.parse(JSON.stringify(karthik));

let rahul = serializer.clone(karthik);

// doing this only copies the key-value pairs.. and not the type information.. it is lost.. 
// so behaviour is also lost

rahul.name = 'Rahul';
rahul.address.streetAddress = '321 Bose St';

console.log(karthik.toString());
console.log(rahul.toString()); // cloned 

karthik.greet();
rahul.greet(); //cloned.. so working as expected
