// array.forEach((value, index, array) => { });

let fruits = ["Mango", "Banana", "Grapes"];

fruits.forEach((fruit) => {
  console.log(fruit);
});

// Mango
// Banana
// Grapes

let fruits = ["Mango", "Banana", "Grapes"];

fruits.forEach((fruit, index) => {
  console.log(index, fruit);
});

// 0 Mango
// 1 Banana
// 2 Grapes

let scores = [85, 90, 75];

scores.forEach((score) => {
  console.log(`Score: ${score}`);
});

// Score: 85
// Score: 90
// Score: 75

// wrong method
let numbers = [1, 2, 3];

let result = numbers.forEach((num) => num * 2);

console.log(result); // undefined
