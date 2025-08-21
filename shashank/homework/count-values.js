function countvalues(Array) {
    for (i = 0; i < Array.length; i++) {
        value = Array[i]
        if (value > 0) {
            console.log("Positive")
        }
        else if (value === 0) {
            console.log("Zero")
        }
        else {
            console.log("Negitive")
        }
    }

}

countvalues([1, 2, 3, -4, 0, -3])