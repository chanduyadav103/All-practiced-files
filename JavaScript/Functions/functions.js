/*

Syntax:
// function declaration
function functionName(function parameters) {
 // function statements
}

functionName(someParameter); // Function calling
*/

// Example:

function division(dividend, divisor) {
    return dividend / divisor
}

const result = division(10, 5);
// console.log('Result = ', result)


const movieName = "Madam";


function reverse(string) {
    let reversedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString = reversedString + string[i]
    }
    return reversedString;
}

function palindrom(string) {
    const reversedString = reverse(string);

    if (reversedString === string) {
        console.log('its a panlidrom')
    } else {
        console.log('its not a panlidrom')
    }
}

// const response = reverse(movieName);

// console.log(response)

palindrom('madm')