// array.reduceRight((accumulator, currentValue) => {
//     // return updated accumulator
// }, initialValue);

let words = ["HTML", "CSS", "JavaScript"];

let result = words.reduceRight((text, word) => text + " " + word);

console.log(result); // JavaScript CSS HTML

let arr = [1, 2, 3, 4];

let left = arr.reduce((a, b) => a - b);
let right = arr.reduceRight((a, b) => a - b);

console.log(left); // -8
console.log(right); // -2
