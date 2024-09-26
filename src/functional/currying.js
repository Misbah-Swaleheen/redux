//currying: to remove the duplication
/*

const wrapInDiv = str => `<div>${str}</div>`;
const wrapInSpan = str => `<span>${str}</span>`;

make a function that handle this kind of duplication

const wrap(type, str) = str => `<${type}>${str}</${type}>`;


*/

function add(a) {
    return function (b){
        return a+b;
    }
}

const add2 = a => b => a+b;

// in curring we seperate arguments using paraenthsis not with comma like
console.log(add(1)(5)); //not like add(1,5);

