// let numbers = [1, 2, [3, 4], 5];

let result = numbers.flat();

console.log(result);
// [1, 2, 3, 4, 5]

console.log(numbers);
// [1, 2, [3, 4], 5]

let numbers = [1, [2, [3, 4]], 5];

let result = numbers.flat(2);

console.log(result);
// [1, 2, 3, 4, 5]

let numbers = [1, [2, [3, [4, [5]]]]];

let result = numbers.flat(Infinity);

console.log(result);
// [1, 2, 3, 4, 5]

//remove empty slots
let numbers = [1, , 2, [3, , 4]];

let result = numbers.flat();

console.log(result);
// [1, 2, 3, 4]
