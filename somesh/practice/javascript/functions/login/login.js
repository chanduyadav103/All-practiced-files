let containertag, cardtag, ptag, emailtag, passwordtag, Btntag;

function createContainer() {
    containertag = document.createElement('div');
    containertag.setAttribute('class', 'container');
    document.body.appendChild(containertag);
}
createContainer();

function createCard() {
    cardtag = document.createElement('div');
    cardtag.setAttribute('id', 'logincard');
    cardtag.setAttribute('class', 'card');
    containertag.appendChild(cardtag);
}
createCard();
function createtitle() {
    const ptag = document.createElement('p');
    ptag.setAttribute('class', 'p')
    ptag.innerText = 'SATORU'
    cardtag.appendChild(ptag);

}
createtitle();
function createemail() {
    emailtag = document.createElement('input');
    emailtag.setAttribute('type', 'email')
    emailtag.setAttribute('placeholder', 'enter your email')
    emailtag.setAttribute('class', 'input')
    cardtag.appendChild(emailtag)
}
createemail();


function createPassword() {
    passwordtag = document.createElement('input');
    passwordtag.setAttribute('type', 'password');
    passwordtag.setAttribute('placeholder', 'Enter your password');
    passwordtag.setAttribute('class', 'input');
    cardtag.appendChild(passwordtag);
}
createPassword();
function createbtn() {
    btntag = document.createElement('button');
    btntag.setAttribute('class', 'btn');
    btntag.innerText = 'Login'
    cardtag.appendChild(btntag);
}
createbtn();
