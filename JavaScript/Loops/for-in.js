// let student = {
//     name: 'chandhu',
//     rollno: 123,
//     grp: 'CSE',
// }

let key = 'name';

let students = [
    {
        name: 'Chandu',
        rollno: 123,
        grp: 'CSE',
        blood_grp: 'B+ve',
        father_name: 'Prakash'
    },
    {
        name: 'Somesh',
        rollno: 456,
        grp: 'IT',
        blood_grp: 'B+ve',
        father_name: 'Narayana'
    },
    {
        name: 'Shashank',
        rollno: 789,
        grp: 'AI',
        blood_grp: 'B+ve',
        father_name: 'Bhaskar'
    }
]


for (let student of students) {
    for (let key in student) {
        console.log(`${key}: ${student[key]}`)
    }
    console.log('---------------------------------------')
}

// for (let student of students) {
//     console.log(`Name: ${student.name}`)
//     console.log(`Roll No.: ${student.rollno}`)
//     console.log(`Group: ${student.grp}`)
//     console.log(`Roll No.: ${student.blood_grp}`)
//     console.log(`Group: ${student.father_name}`)
//     console.log('---------------------------------------')
// }