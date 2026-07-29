let numbers = [5, 8, 12, 15];

let index = numbers.findIndex((num) => num > 10);

console.log(index); // 2
// Ans: index = 2 (12)

let products = [
  { id: 101, name: "Laptop" },
  { id: 102, name: "Mouse" },
  { id: 103, name: "Keyboard" },
];

let productIndex = products.findIndex((product) => product.id === 102);

console.log(productIndex); // 1
