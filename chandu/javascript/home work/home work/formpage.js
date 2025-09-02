function login() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const number = document.getElementById('number').value;

    if (name === "") {
        alert("Enter your name");
        return;
    }
    if (email === "") {
        alert("Enter your email");
        return;
    }

    if (password === "") {
        alert("Enter your password");
        return;
    }
    if (number === "") {
        alert("Enter your number");
        return;
    }

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('number', number);
    alert("Login details saved ");
}

function getdata() {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    const number = localStorage.getItem('number');

    if (email !== undefined && password !== undefined) {
        alert("name:" + name + "Email: " + email + "Password: " + password + "number:" + number);
    } else {
        alert("No detials found");
    }
}

function removedata() {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('number');
    alert("detials removed");
}



