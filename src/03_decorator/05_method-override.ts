import { logDecoratorParams } from "./logger";

interface UserInfo {
    id: string;
    name: string;
}

class TestMethodDecoratorClass {

    @methodDecorator
    getUsers(uid: string): UserInfo {
        return {
            id: uid,
            name: "why520crazy"
        };
    }

}

function methodDecorator(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    logDecoratorParams(`method`, target, propertyKey, descriptor);
    return {
        writable: false,
        value: function (...args: any[]) {
            const argsFormat = args.map(a => JSON.stringify(a)).join();
            const result = descriptor.value.apply(this, args);
            const resultJSON = JSON.stringify(result);
            console.log(`Call: ${propertyKey}(${argsFormat}) => ${resultJSON}`);
            return result;
        }
    };
}

const testMethodDecoratorClass = new TestMethodDecoratorClass();
console.log(testMethodDecoratorClass.getUsers("xxxxxxx"));

// console.log(testMethodDecoratorClass["__meta__"]);
// console.log(TestMethodDecoratorClass.prototype["__meta__"]);