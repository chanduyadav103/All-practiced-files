let n = 5
let pattern = ""
for (i = 1; i <= n; i++) {
    for (j = 1; j <= n + 1 - i; j++) {
        pattern += j
    }
    pattern += "\n"
}
console.log(pattern)