let fruits = ["Mango", "Banana", "Grapes", "Cherry"];

// Remove 2 items starting from index 1
fruits.splice(1, 2);

console.log(fruits); // Output: ["Mango", "Cherry"]


let fruits2 = ["Mango", "Banana", "Cherry"];

fruits2.splice(2, 0, "Grapes");

console.log(fruits2); // Output: ["Mango", "Banana", "Grapes", "Cherry"]
