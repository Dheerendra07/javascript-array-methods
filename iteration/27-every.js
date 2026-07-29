// every() checks whether all elements in the array satisfy the given condition.
let numbers = [10, 20, 30, 40];

let result = numbers.every((num) => num > 5);

console.log(result); // true

let numbers = [10, 20, 3, 40];

let result = numbers.every((num) => num > 5);

console.log(result); // false
