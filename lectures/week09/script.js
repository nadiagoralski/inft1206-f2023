console.log('myPageVar', myPageVar);

/** IF, ELSE  */

// let shoppingDone = false;
// let childsAllowance;

// // if (shoppingDone === true) {
// if (shoppingDone) {
//      childsAllowance = 10;
// }  
// else {
//     childsAllowance = 5;
// }
// console.log('child\'s allowance', childsAllowance);

// select element, query by element name
const select = document.querySelector("select");
// paragraph element, query by id 
const paragraph = document.querySelector("#selectedOption");

// select.addEventListener("change", setWeather);

function setWeather() {
    const choice = select.value;
    if (choice === "sunny") {
        // if the user selects "sunny"
        paragraph.textContent = "It is nice and sunny today!"
    }
    else if (choice === "rainy") {
        // else if the user selects "rainy"
        paragraph.textContent = "Raining today, grab your umbrella!"
    }
    else if (choice === "snowing") {
        // else if the user selects "snowy"
        paragraph.textContent = "It's snowing today, let's go build a snowman!"
    }
    else if (choice === "overcast") {
        // else if the user selects "overcast"
        paragraph.textContent = "It is overcast today, no sun but nice out."
    }
    else {
        // else nothing selected, clear paragraph content
        paragraph.textContent = "";
    }
}

/** SWITCH */


// switch (expression) {
//     case choice1:
//         // run this for choice1
//         break;
//     case choice2:
//         // run this for choice2
//         break;
//     case choice3:
//         // run this for choice3
//         break;
//     default:
//         // actually just going to run this code
//         break;
// }

// select.addEventListener("change", setWeatherWithSwitch);

function setWeatherWithSwitch() {
    const choice = select.value;

    switch (choice) {
        case "sunny":
            // run this for "sunny"
            paragraph.textContent = "It is nice and sunny today!"
            break;
        case "rainy":
            // run this for choice2
            paragraph.textContent = "Raining today, grab your umbrella!"
            break;
        case "snowing":
            // run this for choice3
            paragraph.textContent = "It's snowing today, let's go build a snowman!"
            break;
        case "overcast":
            // run this for choice4
            paragraph.textContent = "It is overcast today, no sun but nice out."
            break;
        default:
            // actually just going to run this code
            paragraph.textContent = ""
            break;
    }
}




/** LOOPS  */
/* console.log 100 lines of code individually */

// OR use a loop, saves time, and is less lines of code
for (let i = 0; i < 100; i++) {
    // uncomment to show logs
    // console.log(`line${i}`)
}


/* FUNCTIONS */
// // function without arguments
// function functionNameNoArgs() {

// }
// // function with arguments
// function functionName(arg1, arg2) {

// }

// select.addEventListener("change", setWeatherParagraph);
function setWeatherParagraph() {
    // set the paragraph content to the message returned from getWeatherMessage()
    paragraph.textContent = getWeatherMessage();
}


// select.addEventListener("change", (function (event) {
//     console.log(event);
//     // function body
//     // set the paragraph content to the message returned from getWeatherMessage()
//     paragraph.textContent = getWeatherMessage();
// }));

// ARROW functions
// same as above without "function" keyword
// select.addEventListener("change", (event) => {
select.addEventListener("change", eventSomething => {
    // function body
    console.log(eventSomething);
    // set the paragraph content to the message returned from getWeatherMessage()
    paragraph.textContent = getWeatherMessage();
    // paragraphResponse is not defined in this function
    // so we cannot access it's value by referencing the variable name
    // we have to return the value, which is done in the line above
    //  console.log(paragraphResponse); // undefined
}
    
);

function getWeatherMessage() {
    // determine the paragraph based on user selection
    const choice = select.value;
    let paragraphResponse = "";
    switch (choice) {
        case "sunny":
            // run this for "sunny"
            paragraphResponse = "It is nice and sunny today!"
            break;
        case "rainy":
            // run this for choice2
            paragraphResponse = "Raining today, grab your umbrella!"
            break;
        case "snowing":
            // run this for choice3
            paragraphResponse = "It's snowing today, let's go build a snowman!"
            break;
        case "overcast":
            // run this for choice4
            paragraphResponse = "It is overcast today, no sun but nice out."
            break;
        default:
            // actually just going to run this code
            paragraphResponse = ""
            break;
    }

    // return the paragraph response
    return paragraphResponse;
}



/* MAPPING */

const originals = [1, 2, 3];
const doubled = originals.map(item => item * 2);

// item => item * 2
// equivalent function
function doubleItem(item) {
    return item * 2;
}

console.log(doubled); // [2, 4, 6]