function add(a, b) {
    return a + b;
}

console.log(add(9, 10));
//palin
function palin(a) {
    for (let i = 0; i < a.length / 2; i++) {
        if (a[i] !== a[a.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(palin("racecar"));
console.log(palin("mom"))


//proposal
function proposal(name, message) {

    let keyword = "i love you luffy,🍖"

    if (message == keyword) {
        console.log("i love you too,😍")
    }
    else {
        console.log("🤬")
    }
}
proposal("boahancock", "i love you luffy,🍖")

//without params and return
function array() {
    let anime = ['naruto', 'one piece', 'bleach']

    if (anime.includes('AOT')) {
        console.log("goated")
    }
    else {
        console.log('top 3')
    }
}
array()

//div
function div(z, y) {
    return z / y;

}
console.log(div(100, 340))

//append
let val = "- by eren yeager"
function append() {
    return ("tatakae" + val)
}
console.log(append())