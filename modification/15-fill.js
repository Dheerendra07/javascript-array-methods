// array.fill(value, start, end);

let numbers = [1, 2, 3, 4];

numbers.fill(0);

console.log(numbers);

//
numbers = [1, 2, 3, 4];

numbers.fill(9, 2);

console.log(numbers);

//
numbers = [1, 2, 3, 4, 5];

numbers.fill(0, 1, 4);

console.log(numbers);
