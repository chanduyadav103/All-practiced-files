let container = document.getElementById('container');
function createCardTag() {
    const cardtag = document.createElement('div');
    cardtag.setAttribute('class', 'card');
    cardtag.setAttribute('id', 'card')
    container.appendChild(cardtag);
}
createCardTag();
function insertText() {
    const paratag = document.createElement('p');
    paratag.setAttribute('class', 'title');
    paratag.innerText = "Login page";
    cardtag = document.getElementById('card');
    cardtag.appendChild(paratag);

}
insertText();
function createEmailTag() {
    const emailtag = document.createElement('input');
    emailtag.setAttribute('type', 'email')
    emailtag.setAttribute('placeholder', 'Email')
    emailtag.setAttribute('class', 'input-feild')
    cardtag = document.getElementById('card');
    cardtag.appendChild(emailtag)
}
createEmailTag();
function createPasswordTag() {
    const passwordtag = document.createElement('input');
    passwordtag.setAttribute('type', 'password')
    passwordtag.setAttribute('placeholder', 'password')
    passwordtag.setAttribute('class', 'input-feild')
    cardtag = document.getElementById('card');
    cardtag.appendChild(passwordtag)
}
createPasswordTag();
function createButtonTag() {
    const buttontag = document.createElement('button');
    buttontag.setAttribute('class', 'btn')
    buttontag.innerText = "Login";
    buttontag.style.fontSize = "15px";
    cardtag = document.getElementById('card');
    cardtag.appendChild(buttontag);
}
createButtonTag();
function createForgotPasswordTag() {
    forgotpasswordtag = document.createElement('p')
    forgotpasswordtag.setAttribute('class', 'forgtpswd')
    forgotpasswordtag.innerText = "ForgotPassword?"
    cardtag = document.getElementById('card');
    cardtag.appendChild(forgotpasswordtag)
}
createForgotPasswordTag();
