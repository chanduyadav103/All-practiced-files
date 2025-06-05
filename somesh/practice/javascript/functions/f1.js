//1
function add(a, b) {
    return a + b;
}

console.log(add(9, 10));
console.log(add(124, 899));
console.log(add(9999978, 809675));
console.log(add(9811618, 1234678));
console.log("--------------------------------------------------");
//2
function evdd(a) {
    if (a % 2 == 0) {
        console.log('even');

    }
    else {
        console.log('odd');
    }
}
evdd(3);
evdd(6);
evdd(134);
evdd(23567);
console.log("--------------------------------------------------");
//3

function largest(x, y, c) {

    if (x > y && x > c) {
        console.log('x is the largest')
    }
    else if (y > x && y > c) {
        console.log('y is the largest')
    }
    else {
        console.log('c is the largest')
    }
}
largest(40, 60, 20)
largest(2000, 500, 1700)
largest(2546, 2157, 2547)
console.log("--------------------------------------------------");
//4
let string = 'khaleja'
let index = string.length - 1

function reverse(string, index) {
    if (index < 0) {
        return '';
    }
    else {
        return string[index] + reverse(string, index - 1);
    }

}
console.log(reverse(string, index))
console.log("--------------------------------------------------");

//5
function factorial(s) {
    let result = 1
    for (i = 1; i <= s; i++) {
        result *= i
    }
    return result;
}
console.log(factorial(8))
console.log(factorial(69))
console.log(factorial(200))
console.log("--------------------------------------------------");

//6
function palin(p) {
    for (let i = 0; i < p.length / 2; i++) {
        if (p[i] !== p[p.length - 1 - i]) {
            console.log('p is not a palindrome')
            return;
        }
        else {
            console.log('p is a palindrome')
        }


    }
}
palin('yes')
palin('madam')
palin(555)
console.log("--------------------------------------------------");

//7


function vowels(str) {
    let vowels = ['a', 'e', 'o', 'i', 'u']
    let count = 0
    for (let i = 0; i < str.length; i++)
        if (vowels.includes(str[i])) {
            count++
        }
    return count;
}
console.log(vowels('palindrome'))
console.log(vowels('baahubali'))
console.log(vowels('aeoiu'))
console.log("--------------------------------------------------");

//11

function numbers(n) {
    if (n < 0) {
        console.log('negative')
    }
    else if (n > 0) {
        console.log('positive')
    }
    if (n == 0) {
        console.log('zero')
    }

}
numbers(-116)
numbers(245)
numbers(0)
console.log("--------------------------------------------------");

//18
function week(day) {
    switch (day) {
        case 1:
            console.log("sunday");
            break;
        case 2:
            console.log("monday");
            break;
        case 3:
            console.log("tuesday");
            break;
        case 4:
            console.log("wednesday");
            break;
        case 5:
            console.log("thursday");
            break;
        case 6:
            console.log("friday");
            break;
        case 7:
            console.log("saturday");
            break;
    }
}
week(6)
week(5)
week(2)
console.log("--------------------------------------------------");


//12
function range(n) {
    for (i = 1; i <= n; i++) {
        console.log(i)
    }
}
range(10)
range(200)
console.log("--------------------------------------------------");

//13
function evennumbers(e) {
    for (i = 1; i <= e; i++) {

        if (i % 2 == 0) {
            console.log(i)
            console.log('even');
        }
    }
}
evennumbers(10)
console.log("--------------------------------------------------");

//19
function odd(o) {
    let sum = 0
    for (let i = 1; i <= o; i++) {
        if (i % 2 !== 0) {
            sum = sum + i;
        }
    }
    return sum;
}
console.log(odd(10))
console.log(odd(25))
console.log(odd(116))
console.log("--------------------------------------------------");

//14
function table(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(number * i);

    }

}
table(7)
table(10)
table(18)
console.log("--------------------------------------------------");

//10
function space(str) {
    let result = ""

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            result = result + str[i];
        }
    }
    return result;
}
console.log(space("hell o wo rl d"))
console.log("--------------------------------------------------");

//8
function sumof(num) {
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    return sum;
}

let num = [12, 8, 9, 20]
console.log(sumof(num))
console.log("--------------------------------------------------");

//17
function max(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max
}
console.log(max([14, 20, 18, 200, 146]))
console.log("--------------------------------------------------");

//20
function label(arr) {
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
label([19, 43, 59, 100, 116])
console.log("--------------------------------------------------");

//16
function count(num) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] > 0) {
            positive++


        }
        else if (num[i] < 0) {
            negative++

        }
        else {
            zero++

        }

    }
    return { positive, negative, zero }
}
console.log(count([12, -8, 0, -4, 56, 87, -6, 0, -9]))
console.log("--------------------------------------------------");

//9
function prime(n) {
    if (n < 2) {
        return 'false'
    }
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false
        }
    }
    return true
}
console.log(prime(9))
console.log(prime(13))
console.log(prime(130))
console.log(prime(1))
console.log("--------------------------------------------------");

//15
function check(ch) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    if (vowels.includes(ch)) {
        return 'vowel'
    }
    else {
        return 'consonant'
    }

}
console.log(check('a'))
console.log(check('s'))


