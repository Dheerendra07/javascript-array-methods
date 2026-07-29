// array.copyWithin(target, start, end);
let arr = [10, 20, 30, 40, 50];

arr.copyWithin(1, 3);

console.log(arr); // [10, 40, 50, 40, 50]



let letters = ["A", "B", "C", "D", "E"];

letters.copyWithin(2, 0, 2);

console.log(letters); // ['A', 'B', 'A', 'B', 'E']