let n = 4
result = ""
output = 1

for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
        result += output + "  "
        output++
    }
    result += "\n"
}
console.log(result)