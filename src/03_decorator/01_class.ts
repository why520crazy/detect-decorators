@classDecorator
class TestClassForClassDecorator {
}

function classDecorator(constructor: Function) {
    // do something with 'constructor' and 'value'...
    console.log(`class-decorator, constructor is TestClassForClassDecorator: ${constructor === TestClassForClassDecorator}`);
    console.log(constructor); 
}

// const myClass = new TestClassForClassDecorator();
// console.log(myClass);

