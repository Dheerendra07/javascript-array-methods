// array.filter((value, index, array) => { });

let numbers = [10, 15, 20, 25, 30];

let evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // [10, 20, 30]

let users = [
  { name: "Rahul", active: true },
  { name: "Aman", active: false },
  { name: "Priya", active: true },
];

let activeUsers = users.filter((user) => user.active); 

console.log(activeUsers);

// [
//   { name: "Rahul", active: true },
//   { name: "Priya", active: true }
// ]
