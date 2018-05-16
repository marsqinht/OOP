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
}
var person2 = new Person('Bob', 'femal', 19)
console.log(person2)