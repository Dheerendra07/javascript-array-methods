// some() checks whether at least one element in the array satisfies the given condition.
let numbers = [10, 20, 30, 40];

let result = numbers.some((num) => num > 25);

console.log(result); // true

let numbers = [2, 4, 6, 8];

let result = numbers.some((num) => num % 2 !== 0);

console.log(result); // false  (Koi bhi odd number nahi mila.)

let fruits = ["Mango", "Banana", "Cherry"];

let result = fruits.some((fruit) => fruit === "Banana");

console.log(result); // true
