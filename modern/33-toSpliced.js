// array.toSpliced(start, deleteCount, item1, item2, ...)
let fruits = ["Mango", "Banana", "Apple", "Cherry"];

let newFruits = fruits.toSpliced(1, 2);

console.log(newFruits); // ["Mango", "Cherry"]
console.log(fruits); // ["Mango", "Banana", "Apple", "Cherry"]

//remove
fruits = ["Mango", "Banana", "Cherry"];

newFruits = fruits.toSpliced(2, 0, "Apple");

console.log(newFruits); // ["Mango", "Banana", "Apple", "Cherry"]
console.log(fruits); // ["Mango", "Banana", "Cherry"]
