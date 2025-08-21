function removeSpaces(string) {
    result = ""
    for (i = 0; i <= string.length - 1; i++) {
        if (string[i] === "") {
            console.log(string[i] + 1)
        }
        result += string[i]
    }

    return result
}
console.log(removeSpaces("hello world"))