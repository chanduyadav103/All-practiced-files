function printHighMedLow(Array) {
    for (i = 0; i < Array.length; i++) {
        value = Array[i]
        if (value >= 100) {
            console.log("High")
        }
        else if (value >= 50 && value < 100) {
            console.log("Medium")

        }
        else {
            console.log("Low")
        }


    }
}

return printHighMedLow([45, 78, 120, 30, 99])