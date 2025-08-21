function reverseString(string) {
    reversed = ""
    for (i = string.length - 1; i >= 0; i--) {
        reversed += string[i]
    }
    return (reversed)
}
console.log(reverseString("shashank"))