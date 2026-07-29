let numbers = [5, 8, 12, 15, 20];

let lastEven = numbers.findLast((num) => num % 2 === 0);

console.log(lastEven); // 20

let marks = [25, 40, 32, 70, 65];

let pass = marks.findLast((mark) => mark >= 33);

console.log(pass); // 65
