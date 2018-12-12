# detect-decorators

## 装饰器定义

装饰器是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上。 
装饰器使用 @expression这种形式，expression求值后必须为一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入。

## 注解和装饰器的区别
注解（Annotation）：仅提供附加元数据支持，并不能实现任何操作。需要另外的 Scanner 根据元数据执行相应操作。
装饰器（Decorator）：仅提供定义劫持，能够对类及其方法的定义并没有提供任何附加元数据的功能。

使用注解（Annotation）的语言：AtScript、Java、C#（叫 Attribute）
使用装饰器（Decorator）的语言：Python、JavaScript/ECMAScript

## TypeScript 中的装饰器

#### TS 引入装饰器的历史

TS 只会对 `Stage-3` 以上的语言提案提供支持
2015-03-18 引入装饰器，ES 的装饰器提案在 2015-03-24 才被引入 `Stage-1`

#### 装饰器种类

1. Class Decorators
1. Method Decorators( property descriptor 属性描述符)
1. Accessor Decorators (不能同时装饰同一个成员的 getter setter 访问器 )
1. Property Decorators
1. Parameter Decorators

#### reflect-metadata

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect

https://rbuckton.github.io/reflect-metadata

#### 装饰器的顺序：
1. 参数装饰器，然后依次是方法装饰器，访问符装饰器，或属性装饰器应用到每个实例成员；
1. 参数装饰器，然后依次是方法装饰器，访问符装饰器，或属性装饰器应用到每个静态成员；
1. 参数装饰器应用到构造函数；
1. 类装饰器应用到类。

#### 组合装饰器
```
@f
@g
class A  { }
```

## 装饰器的应用场景
1. 验证，参数验证或者权限验证；
1. 记录日志，活动记录；
1. 容器的定义和使用入口；
1. 路由的设置，API Metadata 定义，路由参数获取，中间件设置；
1. Angular 定义组件，服务，模块的元数据；
1. 状态管理框架，连接组件和状态之间的关系，比如：react-redux，mobx

```
//定义一个组件
class Home extends React.Component {
    //....
}
export default connect(state => ({todos: state.todos}))(Home);

//使用装饰器的话就变成这样，好像没那么复杂
@connect(state => ({ todos: state.todos }))
class Home extends React.Component {
    //....
}
```

## 探索下 Angular 转义之后的装饰器

## ECMAScript 中的 Decorator
https://github.com/tc39/proposals
https://tc39.github.io/proposal-decorators/#sec-private-name.prototype.constructor
https://github.com/tc39/proposal-decorators

目前处于  `Stage 2` ，如果不是特别感兴趣，别看它

## 反射，代理，装饰器之间的关系

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy

经常会配合在一起使用
