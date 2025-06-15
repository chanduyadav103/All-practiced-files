const age = 10.1;

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