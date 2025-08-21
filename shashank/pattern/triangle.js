n = 5
output = ""
for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
        output += j
    }
    output += "\n"

}
console.log(output)