function login() {
    let emailTag = document.getElementById('email');
    let passwordTag = document.getElementById('password');

    if (emailTag.value === '' || emailTag.value === undefined || emailTag.value === null) {
        alert('Enter Email');
        return;
    }

    if (passwordTag.value === '' || passwordTag.value === undefined || passwordTag.value === null) {
        alert('Enter Password');
        return;
    }

    localStorage.setItem('email', emailTag.value);
    localStorage.setItem('password', passwordTag.value);
}

function remove() {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
}

function get() {
    console.log(localStorage.getItem('email'))
    console.log(localStorage.getItem('password'));
}