function classTDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
        constructor(...args: any[]) {
            super(...args);
        }
    };
}


@classTDecorator
class Greeter {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}

const greeter = new Greeter("world");
console.log(greeter);
