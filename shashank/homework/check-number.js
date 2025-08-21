function postiveNegativeZero(number) {
    if (number > 0) {
        return "The given number is positive"
    }
    else if (number === 0) {
        return "The given number is zero"
    }
    else {
        return "The given number is negative"
    }
}
console.log(postiveNegativeZero(-19))
console.log(postiveNegativeZero(0))
console.log(postiveNegativeZero(4))