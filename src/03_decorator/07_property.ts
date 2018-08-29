import { logDecoratorParams } from "./logger";

interface UserInfo {
    id: string;
    name: string;
}

class TestPropertyDecoratorClass {

    @propertyDecorator
    public user: UserInfo;

}

function propertyDecorator(target: any, propertyKey: string) {
    logDecoratorParams(`property`, target, propertyKey, null);
    // target.__meta__ = "__metadata__ accessor-decorator"
}