let n = 5
let pattern = ""
for (i = 0; i <= n; i++) {
    for (j = 1; j <= n - i; j++) {
        pattern += " "
    }
    for (k = 1; k <= i; k++) {
        pattern += "*"
    }
    pattern += "\n"
}
console.log(pattern)