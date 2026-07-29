// array.map((value, index, array) => { });

// it return new array,  while - forEach() not return new array

let numbers = [10, 20, 30];

let result = numbers.map((num) => num * 2);

console.log(result); // [20, 40, 60]

let students = ["Rahul", "Aman", "Priya"];

let upperCaseNames = students.map((student) => student.toUpperCase());

console.log(upperCaseNames); //  ['RAHUL', 'AMAN', 'PRIYA']
