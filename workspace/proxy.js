// ES 6 Proxy

let user = {
    "firstname": "John",
    "lastname": "Doe",
    "age": 30
};

let proxyUser = new Proxy(user, {
    get(target, prop) {
        if (prop in target) {
            return target[prop];
        } else {
            return "Property not found";
        }
    },
    set(target, prop, value) {
        if (prop in target) {
            if(prop == "age") {
                if(typeof value != "number") {
                    throw new Error("Age must be a number");
                }
                if(value < 18) {
                    throw new Error("Age must be greater than 18");
                }
            }
            target[prop] = value;
        } else {
            throw new Error("Property not found");
        }
    },
    apply(target, thisArg, args) {
        return target.apply(thisArg, args);
    }
});

console.log(proxyUser.firstname);
proxyUser.firstname = "Jane";
console.log(proxyUser.firstname);
proxyUser.age = 5;
console.log(proxyUser.age);
proxyUser.age = "5";
console.log(proxyUser.age);
procyUser.age = 80;
console.log(proxyUser.age);