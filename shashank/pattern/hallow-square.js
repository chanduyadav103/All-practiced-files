let n = 5
let pattern = ""
for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
        if (i === 1 || i === n) {
            pattern += "*"
        }
        else {
            if (j === 1 || j === n) {
                pattern += "*"
            } else {
                pattern += " "
            }
        }
    }
    pattern += "\n"
}
console.log(pattern)