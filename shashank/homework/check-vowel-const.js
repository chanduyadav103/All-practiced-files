function checkchar(string) {
    for (i = 0; i <= string.length - 1; i++) {
        value = string[i]
        if (value === "a" || value === "e" || value === "i" || value === "o" || value === "u") {
            console.log(value + "It is a vowels")
        } else {
            console.log(value + "It is a consonants")
        }
    }
}
console.log(checkchar("thegivenstatementcontainvowelsareconsonants"))