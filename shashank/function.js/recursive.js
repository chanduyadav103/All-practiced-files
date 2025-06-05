function recursive(a, b, c, d) {
    if (arguments.length === 4) {
        console.log("the length of arguments is same")
    } else {
        console.log("the length of the arguments is not same ")
    }
}
return recursive("a", " b", "c")