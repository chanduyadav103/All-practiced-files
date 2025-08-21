function printDay(number) {
    switch (number) {
        case 7:
            console.log("Sunday")
            break;
        case 1:
            console.log("Monday")
            break;
        case 2:
            console.log("Tuesday")
            break;
        case 3:
            console.log("wednesday")
            break;
        case 4:
            console.log("Thrusday")
            break;
        case 5:
            console.log("Friday")
            break;
        case 6:
            console.log("Saturday")
            break;
    }
}
return printDay(4)









switch (expression) {
    case value1:
        // Code to run if expression === value1
        break;
    case value2:
        // Code to run if expression === value2
        break;
    default:
    // Code to run if none of the cases match
}