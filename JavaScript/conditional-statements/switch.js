const age = 10;

if (age < 10) {
    console.log('Child');
} else if (age >= 10 && age < 17) {
    console.log('Teenage')
} else if (age >= 17 && age < 35) {
    console.log('Adult')
} else if (age >= 35 && age < 60) {
    console.log('Middle Age')
} else {
    console.log('Old Age')
}
/*
switch (case) {
    case value1:

        break;
    case value2:

        break;
    case valuen:

        break;
    default:
        break;
}
*/

// Example:
const user = "shashank";
switch (user) {
    case "shashank": console.log('Feb'); break;
    case 'somesh': console.log('July'); break;
    case 'chandu': console.log('May'); break;
    case 'Teja': console.log('Dec'); break;
    default: console.log('user not found'); break;
}
