const containerTag = document.getElementById('container');

let cardTag, pTag, emailTag, passwdTag, btnTag;

function createCardTag() {
    cardTag = document.createElement('div');
    cardTag.setAttribute('class', 'card');
    cardTag.setAttribute('id', 'login-card');
    containerTag.appendChild(cardTag);
}

function createTitleTag() {
    pTag = document.createElement('p');
    pTag.setAttribute('class', 'title');
    pTag.innerHTML = `Welcome back, <br> login to your account`;
    const loginCardTag = document.getElementById('login-card');
    loginCardTag.appendChild(pTag);
}

function createEmailTag() {
    emailTag = document.createElement('input');
    emailTag.setAttribute('class', 'form-field');
    emailTag.setAttribute('type', 'email');
    emailTag.setAttribute('placeholder', 'Enter email');
    const loginCardTag = document.getElementById('login-card');
    loginCardTag.appendChild(emailTag);
}

function createPasswdTag() {
    passwdTag = document.createElement('input');
    passwdTag.setAttribute('class', 'form-field');
    passwdTag.setAttribute('type', 'password');
    passwdTag.setAttribute('placeholder', 'Enter password');
    const loginCardTag = document.getElementById('login-card');
    loginCardTag.appendChild(passwdTag);
}

function createButtonTag() {
    btnTag = document.createElement('button');
    btnTag.setAttribute('class', 'login-btn');
    btnTag.innerText = 'Login';
    const loginCardTag = document.getElementById('login-card');
    loginCardTag.appendChild(btnTag);
}

createCardTag();
createTitleTag();
createEmailTag();
createPasswdTag();
createButtonTag();