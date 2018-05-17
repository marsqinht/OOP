// 1。工厂模式
function person(name, sex, age) {
  var o = {}
  o.name = name
  o.sex = sex
  o.age = age
  return o
}

var person1 = person('Mars', 'male', 26)
console.log(person1)


// 2.构造函数模式

function Person(name, sex, age) {
  this.name = name
  this.sex = sex
  this.age = age
  this.sayName  = function() {
    console.log(this.name)
  }
}
var person2 = new Person('Bob', 'femal', 19)
console.log(person2)

// new操作符的过程
function Foo(name) {
  this.name = name
}

function newFunc(name) {
  var o = {}
  o.__proto__ = Foo.prototype
  o.__proto__.constructor = Foo
  Foo.call(o, name)
  return o
}

const luffy = newFunc('Luffy')
// console.log(luffy)

// constructor
// console.log(luffy.constructor === Foo)


// instanceof
// console.log(luffy instanceof Foo)
// console.log(luffy instanceof Object)

// 构造函数的问题
// 1.会重复创造函数


// 3. 原型模式


