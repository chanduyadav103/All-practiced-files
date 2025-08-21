let n = 5
pattern = ""
for (i = 1; i <= n; i++) {
    for (j = 1; j <= 6 - i; j++) {
        pattern += j
    }
    pattern += "\n"
}
console.log(pattern)