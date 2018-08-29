export function logDecoratorParams(
    name: string, target: any, propertyKey: string,
    descriptor: PropertyDescriptor
) {
    console.log(`===============${name}-decorator=============== \n propertyKey: ${propertyKey}, descriptor: ${JSON.stringify(descriptor, null, 2)}`);
    console.log(target);
}