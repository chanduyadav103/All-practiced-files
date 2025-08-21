let n = 5
let pattern = ""
for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
        if (j === 1 || j === i || j === n) {
            pattern += "*"
        } else {
            pattern += " "
        }

    }
    pattern += "\n"
}
console.log(pattern)