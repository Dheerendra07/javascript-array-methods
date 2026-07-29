// array.flatMap(callback(currentValue, index, array))
let numbers = [1, 2, 3];

let result = numbers.flatMap((num) => [num, num * 2]);

console.log(result);
// [1, 2, 2, 4, 3, 6]

let words = ["Hello World", "JavaScript"];

let result = words.flatMap((word) => word.split(" "));

console.log(result);
// ["Hello", "World", "JavaScript"]
