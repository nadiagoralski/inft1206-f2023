/**
* oo.js
* Author: Nadia Goralski
* Date: November 13 2023
* Description: JavaScript objects - Object Oriented
*/

// Person class
class Person {
    name;

    constructor(nameVal) {
        this.name = nameVal;
    }

    introduceSelf() {
        console.log(`Hi I'm ${this.name}`);
    }
}

// Professor class
class Professor extends Person {
    teaches;

    constructor(name, teaches) {
        // super references Person constructor 
        // since we are extending
        super(name);
        this.teaches = teaches;
    }

    introduceSelf() {
        console.log(`My name is Professor ${this.name} and I will be your ${this.teaches} teacher`)
    }

    grade(assignmnet) {
        const grade = Math.floor(Math.random() * (5 - 1) + 1);
        console.log(grade);
    }
}

// Student class
class Student extends Person {
    #year;

    constructor(name, year) {
        // super references Person constructor 
        // since we are extending
        super(name);
        this.#year = year;
    }

    introduceSelf() {
        console.log(`My name is ${this.name} and I'm in the year ${this.#year}`)
    }

    canStudyArchery() {
        return this.#year > 1;
    }
}


/*
class Professor :
    properties
        name
        teaches
    constructor
        Professor(name, teaches)
    methods
        grade(paper)
        introduceSelf()
*/        
walsh = new Professor("Walsh", "Psychology");
nadia = new Professor("Nadia", "Web Dev");

walsh.teaches; // "Psychology"
walsh.introduceSelf(); // "My name is Professor Walsh and I will be your Psychology teacher"

nadia.teaches; // "Web Dev"
nadia.introduceSelf(); // "My name is Professor Nadia and I will be your Web Dev teacher"

summers = new Student("Summers", 1);
summers.introduceSelf(); // 'My name is Summers and I'm in year 1.'
console.log(summers.canStudyArchery()); // false

george = new Student("George", 3);
george.introduceSelf(); // 'My name is George and I'm in year 1.'
console.log(george.canStudyArchery()); // true

bob = new Person("Bob", 1);
bob.introduceSelf(); // 'Hi I'm Bob!'


class Example {
    somePublicMethod() {
        this.#myPrivateMethod()
    }

    #myPrivateMethod() {
        console.log('c')
    }
}

class Example {
    somePublicMethod() {
        this.#myPrivateMethod()
    }

    #myPrivateMethod() {
        console.log('you called me?')
    }
}

const myExampleObj = new Example();
myExampleObj.somePublicMethod(); 
console.log(myExampleObj.somePublicMethod()) // 'you called me?'
// console.log(myExampleObj.#myPrivateMethod()) // SyntaxError Property
// '#myPrivateMethod' is not accessible outside class 'Example' because it has a private identifier.
