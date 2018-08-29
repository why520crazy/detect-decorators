@classDecoratorFactory("Worktile")
class TestClassForClassFactory {
    name: string;
}

function classDecoratorFactory(value: string) {
    return function (constructor) {
        // do something with 'target' and 'value'...
        console.log(`class-decorator-factory, value: ${value}`);
    };
}

// const myClass = new MyClass();
// console.log(myClass);

