/*
declare variables const, let
array methods -  findindx, splice....
Javascript objects - {
 title:""
}
dom manipulation - querySelector, getElementbyiD
control strucutes
this
*/

// variables declarations
/**
 * const, let, var
 */

// printName("James");

// function declaration
// function printName(name) {
//   console.log(name);
// }

// arrow function
// const printName = () => {
//   return name;
// };
// res1 = printName("James");
// res2 = printName("gloriah");
// console.log(res1);
// console.log(res2);

// You can re-assign the value of a variable
// let name = "James";
// name = "Gloriah";
// console.log(name);

// You can't re-assign the value of a variable, this with raise an error
// let name = "James";
// name = "Gloriah";
// console.log(name);

// functions

// using the native function keyword

// function add(a, b) {
//   console.log("add");
//   return a + b;
// }

// function sub(a, b) {
//   console.log("sub");
//   return a - b;
// }

// function div(a, b) {
//   console.log("div");
//   return a / b;
// }

// function mult(a, b) {
//   console.log("mult");
//   return a * b;
// }

// // declaration
// function calculator(a, b) {
//   // body
//   // add
//   res1 = add(a, b);
//   // sub
//   res2 = sub(a, b);
//   // div
//   res3 = div(a, b);
//   // mut
//   res4 = mult(a, b);

//   return [res1, res2, res3, res4];
// }
// // invocation
// res = calculator(2, 3);
// console.log(res);

// function third() {
//   console.log("third");
// }

// function second() {
//   console.log("second");
//   third();
// }
// function first() {
//   console.log("first");
//   second();
// }

// function main() {
//   console.log("main");
//   first();
// }
// main();

// arrays
//arr = [1, 23, 2, 100, -5, 6];
// push - puts a new item at the end of an array
// arr.push(7);
// pop - removes the last element in an array
// arr.pop();
// unshift - add an elemnet at the begginging of an array
// arr.unshift(100);
// shift - removes an elemnet at the begginging of an array
// arr.shift();
// length - returns the length of an array
// arr.length
// find - finds an element

function elementGreaterThan5(arg) {
  return arg > 5;
}

// function run() {
//   for (let i = 0; i < arr.length; i++) {
//     const res = elementGreaterThan5(arr[i]);
//     if (res) {
//       return arr[i];
//     }
//   }
// }
// console.log(run());
// const element = arr.find(function elementGreaterThan5(arg) {
//   return arg > 5;
// });
// findIndex - returns the index of an element
// const element = arr.findIndex(function elementGreaterThan5(arg) {
//   return arg == 2;
// });
// console.log(element);
// find, findIndex, map, filter, reduce
// const newArr = [10, 12, 90, 6];
// const doubleElement = newArr.map(function multiplyBy2(arg) {
//   console.log(arg);
//   return arg > 12;
// });
// console.log(doubleElement);
// const newArr = [10, 12, 90, 6];
// const doubleElement = newArr.filter(function multiplyBy2(arg) {
//   console.log(arg);
//   return arg > 12;
// });
// console.log(doubleElement);
const newArr = [10, 12, 90, 6];
const result = newArr.reduce(function reduce(accum, curr) {
  console.log(accum, curr);
  return accum + curr;
}, 0);
console.log(result);
