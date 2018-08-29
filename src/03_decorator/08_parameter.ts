import "path";

const requiredMetadataKey = "____WTrr_";// Symbol("required");


class ParameterGreeter {

    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    @validate
    greet(@required("name is not empty") name: string, desc: string) {
        return `Hello ${name}, ${this.greeting}, desc:${desc}`;
    }
}

function required(message: string) {
    return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
        target[requiredMetadataKey] = target[requiredMetadataKey] || [];
        target[requiredMetadataKey].push({
            propertyKey: propertyKey,
            parameterIndex: parameterIndex,
            message: message
        });
    };
}

function validate(target: Object, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    const method = descriptor.value;
    descriptor.value = function (...args: any[]) {
        const requiredMetadataList = target[requiredMetadataKey];
        if (requiredMetadataList) {
            for (const requiredMetadata of requiredMetadataList) {
                if (requiredMetadata.parameterIndex >= arguments.length || arguments[requiredMetadata.parameterIndex] === undefined || arguments[requiredMetadata.parameterIndex] === null || arguments[requiredMetadata.parameterIndex] === "") {
                    throw new Error(`${requiredMetadata.message} - Missing required argument [${requiredMetadata.parameterIndex}]`);
                }
            }
        }
        return method.apply(this, arguments);
    };
}

const greeter = new ParameterGreeter("Worktile");
console.log(greeter[requiredMetadataKey]);
// greeter.greet("", "desc");