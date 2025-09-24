let Firstname = document.getElementById("fn");
let Lastname = document.getElementById("ln");
let Address = document.getElementById("add");
let City = document.getElementById("city");
let Country = document.getElementById("con");
let Phonenumber = document.getElementById("pnum");
let Email = document.getElementById("eml");
let Company = document.getElementById("cmpny");
let Jobtitle = document.getElementById("jtitle");
let Experience = document.getElementById("Pexp");
function toStoreData() {
    localStorage.setItem("Firstname", Firstname.value);
    localStorage.setItem("Lastname", Lastname.value);
    localStorage.setItem("Address", Address.value);
    localStorage.setItem("City", City.value);
    localStorage.setItem("Country", Country.value);
    localStorage.setItem("Phonenumber", Phonenumber.value);
    localStorage.setItem("Email", Email.value);
    localStorage.setItem("Company", Company.value);
    localStorage.setItem("Jobtitle", Jobtitle.value);
    localStorage.setItem("Experience", Experience.value);

}
function toGetCredentials() {
    console.log("Firstname:", localStorage.getItem("Firstname"));
    console.log("Lastname:", localStorage.getItem("Lastname"));
    console.log("Address:", localStorage.getItem("Address"));
    console.log("City:", localStorage.getItem("City"));
    console.log("Country:", localStorage.getItem("Country"));
    console.log("Phonenumber:", localStorage.getItem("Phonenumber"));
    console.log("Email:", localStorage.getItem("Email"));
    console.log("Company:", localStorage.getItem("Company"));
    console.log("Jobtitle:", localStorage.getItem("Jobtitle"));
    console.log("Experience:", localStorage.getItem("Experience"));
}
function ToRemoveCredentials() {
    localStorage.removeItem("Firstname");
    localStorage.removeItem("Lastname");
    localStorage.removeItem("Address");
    localStorage.removeItem("City");
    localStorage.removeItem("Country");
    localStorage.removeItem("Phonenumber");
    localStorage.removeItem("Email");
    localStorage.removeItem("Company");
    localStorage.removeItem("Jobtitle");
    localStorage.removeItem("Experience");
}
