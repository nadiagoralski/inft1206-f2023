/** Variables */

// Constants are defined using const keyword
const MY_CONST = 1;

let randomNumber = Math.floor(Math.random() * 100) + 1;
// wait for DOM (i.e. HTML) content to finish loading before running any scripts
document.addEventListener("DOMContentLoaded", function () {
    // there are no type definitions when declaring variables
    let num1 = "76"; // string
    let num2 = 76;  // int or num
    let myString = "Hello";
    let myString2 = "Word";
    // Example of comparing different types
    console.log(num1 == num2); // true
    console.log(num1 === num2); // false
    // adding a number to a string results in concatenation 
    console.log(num1 + num2); // 7676
    // we can add/subtract/multiply/divide numbers with numbers
    console.log(76 + 1); // 77
    console.log(typeof(myString)); // string
    console.log(typeof(num2)); // number

    // String formatting
    console.log(myString + myString2);
    console.log(`${myString} ${myString2}`);

    // Lists/Arrays
    let myArray = [9, 1, 3, 6, 0, 5];
    console.log(typeof(myArray)); // object
    console.log(myArray);
    
    // sort array
    myArray.sort();
    console.log(myArray);

    // add Hello 
    // 1 reprents index start
    // 0 is delete count (I do not want to remove existing array elements)
    // 'Hello' is the value being added to the array
    myArray.splice(1, 0, 'Hello!');
    console.log(myArray);

    
    // console.log(myArray.pop()); // "pops" the last element and returns it
    myArray.push('World'); // push adds to the end of the array
    console.log(myArray);

    // slice returns a section
    // DOES NOT UPDATE THE ARRAY
    console.log(myArray.slice(-2));
    
    // remove element from array
    myArray.splice(2, 1);
    console.log(myArray)

    // join
    console.log(myArray);
    // by default join is comma separated
    console.log(myArray.join()); // 0,Hello!,3,5,6,9,World
    // you can define your own separator by passing an argument to .join()
    // for example adding spaces 
    console.log(myArray.join(' ')); // 0 Hello! 3 5 6 9 World

    // use Array.isArray to check if an object is an array
    console.log(Array.isArray(myArray)); // true
    console.log(Array.isArray([1, 2, 3])); // true
    console.log(Array.isArray('[1, 2, 3]')); // false
    console.log(new Array(5)); // creates and empty array with a defined length
    console.log(Array.isArray(new Array(5))); // true


    



    //console.log(randomNumber);
    // Other variable use let keywords
    // Math library allows for different math functions
    // Math.floor() will round down to nearest whole
    // Math.random returns a random number
    // if this is outside the document.addEventListener("DOMContentLoaded", ...) 
    // these elements will be NULL
    const guessField = document.querySelector('#guessField');
    const guessSubmit = document.querySelector('#submitGuess');

    guessSubmit.value
    guessSubmit.addEventListener("click", checkGuess);

});

function checkGuess() {
    // guessField variables stores the ELEMENT
    // to access the value (i.e. number inside the input) 
    // we use .value
    let userGuess = guessField.value;
    if (userGuess > randomNumber) {
        alert("Your guess was greater");
    } else if (userGuess < randomNumber) {
        alert("Your guess was lower");
    } else {
        alert("Your guess was correct");
    }
}

