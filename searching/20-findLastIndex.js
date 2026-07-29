let numbers = [5, 8, 12, 15, 20];

let index = numbers.findLastIndex((num) => num % 2 === 0);

console.log(index); // 4

let marks = [40, 25, 60, 28, 80];

let failedIndex = marks.findLastIndex((mark) => mark < 33);

console.log(failedIndex); // 3
