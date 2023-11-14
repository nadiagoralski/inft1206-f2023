/**
* script.js
* Author: Nadia Goralski
* Date: November 13 2023
* Description: JavaScript objects
*/


// Basic object structure

const objectName = { // can also be let instead of const if you plan to update the object
    member1Name: "member1Value", // "member" is interchangeable with "property"
    member2Name: "member2Value", // value can be any type not always a string
    member3Name: "member3Value",
}


// new empty object
let person = {};
console.log(person); // Object

// update person object
person = { 
    givenName: "Bob",
    surname: "Smith",
    name: ["Bob", "Smith"],
    age: 32,

    nameFormatted: function() {
        return `${this.givenName} ${this.surname}`;
    },

    bio: function() {
        console.log(`${this.nameFormatted()} is ${this.age} years old`)
    }, 

    
    introduceSelf: function () {
        console.log(`c ${this.nameFormatted()}!`)
    }
}

console.log(person.name) // (2) ['Bob', 'Smith']
console.log(person.name[0]) // 'Bob'
console.log(person.givenName) // 'Bob'
console.log(person.age) // 32
console.log(person.bio()) // Bob Smith is 32 years old
console.log(person.introduceSelf())  // Hi I'm Bob! 
person.introduceSelf() // Hi I'm Bob!

// Bracket notation as an alternative 
console.log(person['givenName']) // Bob

const myNewObject = {
    property1: {
        subProperty1: "hello!"
    }
}

console.log(myNewObject);
// Dot notation
console.log(myNewObject.property1.subProperty1); // hello!
// Bracket notation
console.log(myNewObject['property1']['subProperty1']); // hello!

// update property using dot notation
person.age = 47;
// update property using bracket notation
person['surname'] = "Car";
person.bio();


// Object prototypes
console.log(person.toString()) // "[object Object]"
console.log(myNewObject.toString()); // "[object Object]"
console.log(person.age, person.age.toString()) // 47 "47"

const myDate = new Date(1995, 11, 17);
myDate.getYear = function() {
    console.log("getYear works!")
}

console.log(myDate);
console.log(myDate.getFullYear());
myDate.getYear();


const personPrototype = {
    greet() {
        console.log(`hello my name is ${this.name}`);
    }
}

// const myPerson = Object.create(personPrototype);
// myPerson.greet()

function Person(name) {
    this.name = name;
}

Object.assign(Person.prototype, personPrototype);
// alternative notation
Person.prototype.greet = personPrototype.greet;


const nadia = new Person("Nadia");
nadia.greet(); // hello, my name is Nadia!

console.log(Object.hasOwn(nadia, "name")); // true
console.log(Object.hasOwn(nadia, "greet")); // false