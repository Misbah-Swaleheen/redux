
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


