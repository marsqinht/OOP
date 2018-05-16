// 1。工厂模式
function person(name, sex, age) {
  var o = {}
  o.name = name
  o.sex = sex
  o.age = age
  return o
}

var mars = person('Mars', 'male', 26)
console.log(mars)