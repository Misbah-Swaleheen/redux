// immutability once created, it cannot be changed
// benefits predictability,faster change detection, concurrency
// performance cost, memory overhead 
// javascript is not a pure functional language because it allows arrays and object to mutated data 


// Structural sharing 
// if some values are common in two objects they are shared not copiec axross

// updating objects
//practice immutability whilw working with objects

const person = { 
    name: "John",
    address: {
        country:  "USA",
        city: "San Francisco"
    } 
};

// now we are not direct target the object property to change the name but doing this by coping the object
// to the other object updated that object values not the original one
// const updated = Object.assign({}, person, {name: "Bob", age: 30 });

// ... spread operator creates a shallow copy 
// when you updated any nested object item to the copy object it automatically updated to the original 
//object  also 
//to solve this problem we have to deep copy the opbject
const updated = { ...person,
    address:{
        ...person.address,
        city:"New York"
    },
    name: "Bob", age: 30  }; 
console.log(person);
console.log(updated);

updated.address.city = "New York";
updated.name = "Maria";

console.log(person);
console.log(updated);

