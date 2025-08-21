function isPrime(n) {
    if (n % n === 0 && n % 1 === 0) {
        return "The given number is a prime number"
    } else {
        return "The given number is not a prime number"
    }
}
console.log(isPrime(3))