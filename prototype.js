// 1. 数据属性
const person = {};
Object.defineProperty(person, 'name', {
  writable: false,
  configurable: false,
  value: 'Mars',
});

person.name = 'Qin';
delete person.name;

console.log(person.name);

// 2.访问器属性
const book = {
  year: 2004,
  edition: 1,
};
book.year = 2005;
console.log(book.edition); // 2
console.log(Object.getOwnPropertyDescriptor(person, 'name'))
