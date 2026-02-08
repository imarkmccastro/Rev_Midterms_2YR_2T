// Destructuring and spread operators.
const nums = [10, 20, 30];
const [first, , third] = nums;

const person = { name: "Cody", age: 7 };
const { name, age } = person;

const copy = [...nums, 40];
const extended = { ...person, city: "Cebu" };

console.log(first, third);
console.log(name, age);
console.log(copy);
console.log(extended);
// Output:
// 10 30
// Cody 7
// [10, 20, 30, 40]
// { name: 'Cody', age: 7, city: 'Cebu' }
