function palindrome(string) {
    reversed = ""
    for (i = string.length - 1; i >= 0; i--) {
        reversed += string[i]
    }
    console.log(reversed)
    if (string === reversed) {
        console.log("the given string is A palindrome")
    } else {
        console.log("the given string is a not a palindrome")
    }
}
return palindrome("shashank")
