
const person = {};

















// Object.defineProperty(target, name, descriptor);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

Object.defineProperty(person, 'name', {
    value: 'why520crazy',
    // 当且仅当该属性的 enumerable 为 true 时，该属性才能够出现在对象的枚举属性中。
    // 默认为 false。
    enumerable: true, 
    // 当且仅当该属性的 configurable 为 true 时，
    // 该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为 false。
    configurable: false, 
    // 当且仅当该属性的 writable 为 true 时，value 才能被赋值运算符改变。默认为 false。
    writable: false
});

// Object.defineProperty(person, 'name', {
//     get() {
//         return 'why520crazy-get'
//     },
//     set(value) {
//         this.value = value;
//     },
//     enumerable: false, // 当且仅当该属性的 enumerable 为 true 时，该属性才能够出现在对象的枚举属性中。默认为 false。
//     configurable: false, // 当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为 false。
// });

// for...in 或 Object.keys 方法
person.name = "new name";
console.log(`person.name: ${person.name}`);
console.log(`Object.keys(person): ${Object.keys(person)}`);
