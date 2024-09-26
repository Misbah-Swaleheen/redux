import { Map } from "immutable"

//Enforcing  immutability

let book = Map({title: "Harry Potter"});

function publish(book) {
    return book.set("isPublished" , true);
}

book = publish(book);

// using this library we cannot access title property with dot but by function get  
// console.log(book.get('title'));
console.log(book.toJS());