let n = 5
let pattern = ""
for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
        pattern += "*"
    }
    pattern += "\n"
}
console.log(pattern)