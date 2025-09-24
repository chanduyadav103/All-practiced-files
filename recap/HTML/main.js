function changeEvent(eventValue) {
    console.log("change event::::::::::::::\n", eventValue.target.value)
}

function inputEvent(eventValue) {
    console.log("input event::::::::::::::\n", eventValue.target.value)
}

function blurEvent(eventValue) {
    console.log("blur event::::::::::::::\n", eventValue.target.value)
}

function focusEvent(eventValue) {
    console.log("focus event::::::::::::::\n", eventValue.target.value)
}

function onBoxEnter(eventValue) {
    console.log("onBoxEnter event::::::::::::::\n", eventValue.target.value)
    const boxEle = document.getElementById('box');
    boxEle.style.width = "50px";
    boxEle.style.height = "50px";
}

function onBoxLeave(eventValue) {
    console.log("onBoxLeave event::::::::::::::\n", eventValue.target.value)
    const boxEle = document.getElementById('box');
    boxEle.style.width = "100px";
    boxEle.style.height = "100px";
}