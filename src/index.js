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
