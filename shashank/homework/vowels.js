function vowels(string) {
    for (i = 0; i <= string.length - 1; i++) {
        if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
            console.log("It is a vowels")
        } else {
            console.log("It is a consonants")
        }
    }
}

return vowels("shashank")