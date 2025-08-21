let n = 5
let pattern = ""
for (i = 1; i <= n; i++) {
    for (j = 1; j <= n - i; j++) {
        pattern += " "
    }
    for (k = 1; k <= 2 * i - 1; k++) {
        pattern += k
    }
    pattern += "\n"
}
console.log(pattern)