let numbers = [11, 15, 18, 20];

let even = numbers.find((num) => num % 2 === 0);

console.log(even); // 18

let students = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Aman" },
  { id: 3, name: "Priya" },
];

let student = students.find((student) => student.id === 2);

console.log(student); // id: 2, name: "Aman"
