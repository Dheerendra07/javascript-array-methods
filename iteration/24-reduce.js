// array.reduce((accumulator, currentValue) => { }, initialValue);

// accumulator → Result ko store karta rehta hai.
// currentValue → Current element.
let numbers = [10, 20, 30, 40];

let total = numbers.reduce((sum, num) => {
  return sum + num;
}, 0);

console.log(total); // 100
// Initial value: sum = 0

let marks = [80, 75, 90];

let totalMarks = marks.reduce((total, mark) => total + mark, 0);

console.log(totalMarks); // 245


let prices = [500, 1000, 250];

let totalPrice = prices.reduce((total, price) => total + price, 0);

console.log(totalPrice); // 1750
