// practice immutabiity on arrays
const number = [1, 2, 3];

//adding element on a specific position 

const index = number.indexOf(2);
const added = [
    ...number.slice(0, index),
    4,
    ...number.slice(index)
];
console.log(number);
console.log(added);

added.push(6);
console.log(added);

//removing
const removed = number.filter(n => n !== 2);
console.log(number);
console.log(removed);

//updating

const update = number.map(n => n === 2 ? 20 : n);

console.log(number);
console.log(update);