/*
Syntax:

for(declaration/initialization; condition; increment/decrement) {
    // statements
}
*/

// Example: 
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let students = [
    {
        name: 'Chandu',
        rollno: 123,
        grp: 'CSE'
    },
    {
        name: 'Somesh',
        rollno: 456,
        grp: 'IT'
    },
    {
        name: 'Shashank',
        rollno: 789,
        grp: 'AI'
    }
]
for (let i = 0; i < students.length; i++) {
    console.log('----------------');
    console.log(`Name: ${students[i].name}`)
    console.log(`Roll No.: ${students[i].rollno}`)
    console.log(`Group: ${students[i].grp}`)
    console.log('----------------');
}
