function sumArray(Array) {
    sum = 0
    for (i = 0; i <= Array.length - 1; i++) {
        sum += Array[i]
    }
    return sum
}
console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9]))