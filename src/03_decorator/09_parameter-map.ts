import "path";

const requiredMetadataMap = new Map();

class ParameterGreeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    @validate
    greet(@required name: string, desc: string) {
        return `Hello ${name}, ${this.greeting}, desc: ${desc}`;
    }
}


function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    let requiredMetadata = requiredMetadataMap.get(target);
    if (!requiredMetadata) {
        requiredMetadata = {};
    }
    requiredMetadata[propertyKey] = requiredMetadata[propertyKey] || [];
    requiredMetadata[propertyKey].push({
        parameterIndex: parameterIndex,
        propertyKey: propertyKey
    });
    requiredMetadataMap.set(target, requiredMetadata);

}

function validate(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<Function>) {
    const method = descriptor.value;
    descriptor.value = function () {
        const requiredMetadataList = requiredMetadataMap.get(target)[propertyKey];
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
console.log(greeter.greet("xxx", "desc"));