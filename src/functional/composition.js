import { compose, pipe } from "lodash/fp";


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
