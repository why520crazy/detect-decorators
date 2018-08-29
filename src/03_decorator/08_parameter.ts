import "path";

const requiredMetadataKey = Symbol("required");


class ParameterGreeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    @validate
    greet(@required name: string, desc: string) {
        return `Hello ${name}, ${this.greeting}, desc:${desc}`;
    }
}


function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    target[requiredMetadataKey] = target[requiredMetadataKey] || [];
    target[requiredMetadataKey].push({
        propertyKey: propertyKey,
        parameterIndex: parameterIndex
    });
}

function validate(target: Object, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    const method = descriptor.value;
    descriptor.value = function () {
        const requiredMetadataList = target[requiredMetadataKey];
        if (requiredMetadataList) {
            for (const requiredMetadata of requiredMetadataList) {
                if (requiredMetadata.parameterIndex >= arguments.length || arguments[requiredMetadata.parameterIndex] === undefined || arguments[requiredMetadata.parameterIndex] === null || arguments[requiredMetadata.parameterIndex] === "") {
                    throw new Error(`Missing required argument [${requiredMetadata.propertyKey}]`);
                }
            }
        }
        return method.apply(this, arguments);
    };
}

const greeter = new ParameterGreeter("Worktile");
console.log(greeter[requiredMetadataKey]);
// greeter.greet("", "desc");