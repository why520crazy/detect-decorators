import { logDecoratorParams } from "./logger";

interface UserInfo {
    id: string;
    name: string;
}

class TestAccessorDecoratorClass {

    _user: UserInfo;

    @accessorDecorator
    get user() {
        return this._user;
    }

    @staticAccessorDecorator
    static get user() {
        return null;
    }

}

function accessorDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    logDecoratorParams(`accessor`, target, propertyKey, descriptor);
    // target.__meta__ = "__metadata__ accessor-decorator"
}

function staticAccessorDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    logDecoratorParams(`static-accessor`, target, propertyKey, descriptor);
    // target.__meta__ = "__metadata__ accessor-decorator"
}