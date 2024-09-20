import { compose, pipe } from "lodash/fp";

/* Functions as First Class Citizen:

Means treat function as a variable 

- Assign to a variable
- pass as an argument 
- return from other function

*/

function sayHello() {
    return "Hello Misbah";
}

// Assign function to a variable
let fn = sayHello; // pass a reference to a function 
fn();


//pass function as an argument 
function greet(fnMessage) {
    return console.log(fnMessage());
}

greet(sayHello);


//return function from other function
function sayHi() {
    return function () {
        return "Hello Misbah"
    };
}

let fnt = sayHi();
let message = fnt();


/* Higher order function:
    is a function that takes a function as an argument or 
    returns it or both
*/
// function sayHi() {
//     return function () {
//         return "Hello Misbah"
//     };
// }

// function greet(fnMessage) {
//     return console.log(fnMessage());
// }

// greet(sayHi);

/* map is an example of higher order function 
it takes funcion as an argument */

let numbers = [1, 2, 3];
numbers.map(number => number * 2);

// another example is setTimeout it also takes a function as an argument
setTimeout(() => console.log("Hello World"), 1000);


// Function Composition

let input = "    Javascript   ";
let output = "<div>" + input.trim() + "</div>";

const trim  = str => str.trim();
const wrap = type => str  => `<${type}>${str}</${type}>`; // currying 2 functions with each other
const toLowerCase = str => str.toLowerCase();

// this is called function composition
// const result =  wrapInDiv(toLowerCase(trim(input)));


// composing and piping
//to remove the paraenthesis use compose
let transform = compose(wrap, toLowerCase, trim);
transform(input);

// to change te right to left order to left to right use pipe

transform = pipe(trim, toLowerCase, wrap("div"));
console.log(transform(input));

/* pure function :
is a function that if you give repeatedly same arguments give the same results
*/

function myFunction(number) {   
    return number * Math.random(); // not a pure function 
    // return number * 2  pure function every time gives expected result
}

// immutability once created, it cannot be changed
// benefits predictability,faster change detection, concurrency
// performance cost, memory overhead 
// javascript is not a pure functional language because it allows arrays and object to mutated data 


// Structural sharing 
// if some values are common in two objects they are shared not copiec axross

// updating objects
//practice immutability whilw working with objects

const person = { name: "John" };

// now we are not direct target the object property to change the name but doing this by coping the object
// to the other object updated that object values not the original one
// const updated = Object.assign({}, person, {name: "Bob", age: 30 });
const updated = { ...person,name: "Bob", age: 30 };
console.log(person);
console.log(updated);




