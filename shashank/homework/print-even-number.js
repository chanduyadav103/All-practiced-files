function printEvenNumbers(number) {
    for (i = 0; i <= number; i++) {
        if (i % 2 === 0) {
            console.log("It is a even number", i)
        }
    }
}
return (printEvenNumbers(10))