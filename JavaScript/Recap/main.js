const studentsElement = document.getElementById('students');
const searchedStudentsElement = document.getElementById('searchedStudents');
const searchTermElement = document.getElementById('searchTerm');

const students = [
    "Chandu Yadav",
    "Shashank",
    "Teja",
    "John Doe",
    "Jane Smith",
    "Alice Johnson",
    "Somesh",
    "Chandra Sekhar",
    "Chandana",
    "Chandini",
    "Somu",
    "Somnath",
    "Suresh",
    "Ramesh",
    "Mahesh",
];

let searchTerm = "";

let searchedStudents = [];

function renderStudents() {
    let template = "";
    for (let student of students) {
        template = template + `<li class="list-group-item">${student}</li>`
    }
    studentsElement.innerHTML = template;
}

function renderSearchedStudents() {
    let template = "";
    for (let student of searchedStudents) {
        template = template + `<li class="list-group-item">${student}</li>`
    }
    searchedStudentsElement.innerHTML = template;
}

function usingForLoop() {
    for (let i = 0; i < students.length; i++) {
        if (students[i].toLowerCase().includes(searchTerm.toLowerCase())) {
            searchedStudents.push(students[i])
        }
    }
}

function usingForLoopOpt() {
    // Optimized Code:
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        if (student.toLowerCase().includes(searchTerm.toLowerCase())) {
            searchedStudents.push(student)
        }
    }
}

function usingForOf() {
    // Using ForOf
    for (let student of students) {
        if (student.toLowerCase().includes(searchTerm.toLowerCase())) {
            searchedStudents.push(student)
        }
    }
}

function usingFilter() {
    searchedStudents = students.filter(student => {
        return student.toLowerCase().includes(searchTerm.toLowerCase());
    })
}

function usingFilterOpt() {
    // Using Filter Optimized
    searchedStudents = students.filter(student => student.toLowerCase().includes(searchTerm.toLowerCase()))
}

const usingArrowForLoop = () => {
    for (let i = 0; i < students.length; i++) {
        if (students[i].toLowerCase().includes(searchTerm.toLowerCase())) {
            searchedStudents.push(students[i])
        }
    }
}

const usingArrowForLoopOpt = () => {
    // Optimized Code:
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        if (student.toLowerCase().includes(searchTerm.toLowerCase())) {
            searchedStudents.push(student)
        }
    }
}

const usingArrowForOf = () => {
    // Using ForOf
    for (let student of students) {
        if (student.toLowerCase().includes(searchTerm.toLowerCase())) {
            searchedStudents.push(student)
        }
    }
}

const usingArrowFilter = () => {
    searchedStudents = students.filter(student => {
        return student.toLowerCase().includes(searchTerm.toLowerCase());
    })
}

const usingArrowFilterOpt = () => {
    // Using Filter Optimized
    searchedStudents = students.filter(student => student.toLowerCase().includes(searchTerm.toLowerCase()))
}


function searchStudent() {
    searchedStudents = [];
    searchTerm = searchTermElement.value;
    if (searchTerm.trim().length > 0) {
        usingArrowForOf();
        renderSearchedStudents();
    }
}

renderStudents();