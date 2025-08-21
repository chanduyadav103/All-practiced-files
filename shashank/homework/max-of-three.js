function maxOfThree(a, b, c) {
    if (a > b && a > c) {
        return "A is the largest number"
    }
    else if (b > a && b > c) {
        return "B is the largest number"
    }
    else {
        return "c is the largest number"
    }
}
console.log(maxOfThree(30, 50, 80))
console.log(maxOfThree(90, 50, 80))
console.log(maxOfThree(30, 500, 80))