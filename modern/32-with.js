// array.with(index, value);
let fruits = ["Mango", "Banana", "Apple", "Cherry"];

let newFruits = fruits.with(1, "Orange");

console.log(newFruits);
// ["Mango", "Orange", "Apple", "Cherry"]

console.log(fruits);
// ["Mango", "Banana", "Apple", "Cherry"]

// replace first element
let numbers = [10, 20, 30, 40];

let newNumbers = numbers.with(0, 100);

console.log(newNumbers); // [100, 20, 30, 40]
console.log(numbers); // [10, 20, 30, 40]

// replace last element
let numbers = [10, 20, 30, 40];

let newNumbers = numbers.with(-1, 500);

console.log(newNumbers); // [10, 20, 30, 500]
console.log(numbers); // [10, 20, 30, 40]
