function addition(a, b) {
    return sum = a + b;
} console.log(addition(20, 30))
console.log("the sum of two numbers is :" + sum)
console.log("----------------------------------------------")


function checkNumber(n) {
    if (n % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

checkNumber(10);
console.log("----------------------------------------------")


function bignumber(somesh, shashank, chandu) {
    if (somesh >= shashank && somesh >= chandu) {
        return somesh;
    } else if (shashank >= somesh && shashank >= chandu) {
        return shashank;
    } else {
        return chandu;
    }
}
console.log(bignumber(22, 33, 55))
console.log(bignumber(-1, -33, -8))
console.log("----------------------------------------------")

function reverse(h) {

    let result = "";
    let i = h.length - 1;
    while (i >= 0) {
        result = result + h[i];
        i--
    }

    return result;
}
console.log(reverse("chandu yadav"))
console.log("----------------------------------------------")


function factorial(n) {
    let a = 1;

    for (let i = 1; i <= n; i++) {
        a = a * i;
    }
    return a;
}
console.log(factorial(6));

console.log("----------------------------------------------")



function Palindrome(palin) {
    let left = 0;
    let right = palin.length - 1;
    while (left < right) {   //here we take the 2pointers that is left and right
        if (palin[left] !== palin[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};

console.log(Palindrome("chandu"));

console.log("----------------------------------------------")


function vowels(words) {
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        let result = words[i];
        if (result === 'a' || result === 'A' || result === 'e' || result === 'E' || result === 'i' || result === 'I' || result === 'o' || result === 'O' || result === 'u' || result === 'U') {
            count++;
        }
    }
    return count;
}
console.log(vowels("chandu"))
console.log("----------------------------------------------")



function emptySpace(str) {

    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            result = result + str[i];
        }
    }

    return result;
}

console.log(emptySpace("c h a n d u"));
console.log("----------------------------------------------")

function check(number) {
    if (number > 0) {
        console.log("Positive");

    } else if (number < 0) {
        console.log("Negative");

    } else {
        console.log("null");

    }
}
check(22)

function EvenNumbers(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

EvenNumbers(10);

function Table(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num * i);
    }
}

Table(3);

function number(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

number(3);



function printDay(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("give correct input");
    }
}

printDay(5);


function oddnumbers(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            sum = sum + i;
        }
    }

    console.log("odd numbers is:", sum);
}
oddnumbers(10);



function labelArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 100) {
            console.log("High");

        } else if (arr[i] >= 50 && arr[i] <= 100) {
            console.log("Medium");

        } else {
            console.log("Low");
        }
    }
}

labelArray([22, 54, 76, 45, 89]);


function numbers(num) {
}

numbers()