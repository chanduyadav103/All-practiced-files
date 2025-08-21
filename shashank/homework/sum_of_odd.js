function sumOfOdd(number) {
    sum = 0
    for (i = 0; i <= number; i++) {
        if (i % 2 != 0) {
            sum += i
        }

    }
    return sum
}
console.log(sumOfOdd(10))
