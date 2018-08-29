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

    @staticMethodDecorator
    static getUsers(uid: string): UserInfo {
        return {
            id: uid,
            name: "why520crazy"
        };
    }
}

function methodDecorator(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    logDecoratorParams(`method`, target, propertyKey, descriptor);
    // target.__meta__ = "__metadata__ method-decorator"
}

function staticMethodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    logDecoratorParams(`static-method`, target, propertyKey, descriptor);
    // target.__meta__ = "__metadata__ static-method-decorator"
}

// const testMethodDecoratorClass = new TestMethodDecoratorClass();
// console.log(testMethodDecoratorClass.getUsers("xxxxxxx"));

// console.log(testMethodDecoratorClass["__meta__"]);
// console.log(TestMethodDecoratorClass.prototype["__meta__"]);