const students = [
    { id: 1, name: "Rahul Sharma", age: 20, grade: "A", city: "Mumbai", subjects: ["Math", "Science"], attendance: 95, gender: "Male", hobbies: ["Cricket", "Reading"], email: "rahul@example.com" },
    { id: 2, name: "Priya Patel", age: 19, grade: "B", city: "Delhi", subjects: ["History", "English"], attendance: 88, gender: "Female", hobbies: ["Dancing", "Painting"], email: "priya@example.com" },
    { id: 3, name: "Amit Singh", age: 21, grade: "A+", city: "Bangalore", subjects: ["Physics", "Chemistry"], attendance: 97, gender: "Male", hobbies: ["Programming", "Chess"], email: "amit@example.com" },
    { id: 4, name: "Neha Gupta", age: 20, grade: "B+", city: "Hyderabad", subjects: ["Biology", "Math"], attendance: 90, gender: "Female", hobbies: ["Singing", "Yoga"], email: "neha@example.com" },
    { id: 5, name: "Raj Verma", age: 22, grade: "A", city: "Pune", subjects: ["Economics", "Business"], attendance: 92, gender: "Male", hobbies: ["Football", "Movies"], email: "raj@example.com" },
    { id: 6, name: "Sonia Reddy", age: 19, grade: "B", city: "Chennai", subjects: ["Computer Science", "Math"], attendance: 85, gender: "Female", hobbies: ["Photography", "Travel"], email: "sonia@example.com" },
    { id: 7, name: "Vikram Joshi", age: 20, grade: "A", city: "Kolkata", subjects: ["Geography", "History"], attendance: 94, gender: "Male", hobbies: ["Cricket", "Debate"], email: "vikram@example.com" },
    { id: 8, name: "Anjali Kapoor", age: 21, grade: "A+", city: "Ahmedabad", subjects: ["Literature", "Psychology"], attendance: 96, gender: "Female", hobbies: ["Writing", "Music"], email: "anjali@example.com" },
    { id: 9, name: "Arun Malhotra", age: 20, grade: "B+", city: "Jaipur", subjects: ["Physics", "Math"], attendance: 89, gender: "Male", hobbies: ["Swimming", "Reading"], email: "arun@example.com" },
    { id: 10, name: "Pooja Mehta", age: 19, grade: "B", city: "Lucknow", subjects: ["Chemistry", "Biology"], attendance: 87, gender: "Female", hobbies: ["Dancing", "Cooking"], email: "pooja@example.com" }
];
for (i = 0; i < students.length; i++) {
    console.log(students[i].id, students[i].name, students[i].age, students[i].grade, students[i].city, students[i].subjects, students[i].attendance, students[i].gender, students[i].hobbies, students[i].email);
    console.log('-------------------------------------------------------------------------------------------------------------------------------------');
    console.log('-------------------------------------------------------------------------------------------------------------------------------------');
    console.log(`Id: ${students[i].id}`, `Name:${students[i].name}`, `Age:${students[i].age}`, `Grade:${students[i].grade}`, `City:${students[i].city}`, `Subjects:${students[i].subjects}`, `Attendance:${students[i].attendance}`, `Gender:${students[i].gender}`, `Hobbies:${students[i].hobbies}`, `Email:${students[i].email}`)
    console.log('-------------------------------------------------------------------------------------------------------------------------------------');
    console.log('-------------------------------------------------------------------------------------------------------------------------------------');
}

console.log('-------------------------------------------------------------------------------------------------------------------------------------');


for (i = 0; i < students.length; i++) {
    console.log(students[i].id)
    console.log(students[i].name)
    console.log(students[i].age)
    console.log(students[i].grade)
    console.log(students[i].city)
    console.log(students[i].subjects)
    console.log(students[i].attendance)
    console.log(students[i].gender)
    console.log(students[i].hobbies)
    console.log(students[i].email)
    console.log('-------------------------------------------------------------------------------------------------------------------------------------');
    console.log('-------------------------------------------------------------------------------------------------------------------------------------');
}