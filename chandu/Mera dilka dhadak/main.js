const heartTag = document.getElementById('heart');
const titleTag = document.getElementById('title');
// let heartTag;
let WH = 50;
let FS = 4;

function adjustHeartTagWH() {
    heartTag.setAttribute('style', `width: ${WH}px; height: ${WH}px;`);
    titleTag.setAttribute('style', `font-size: ${FS}px`);
}

// animateMyHeart();

function animateMyHeart() {
    const interval = setInterval(() => {
        switch (WH) {
            case 50:
                WH = 100;
                FS = 8;
                break;
            case 100:
                WH = 150;
                FS = 12;
                break;
            case 150:
                WH = 200;
                FS = 16;
                break;
            case 200:
                WH = 250;
                FS = 20;
                break;
            case 250:
                WH = 300;
                FS = 24;
                break;

            default:
                WH = 50;
                FS = 4;
                break;
        }
        adjustHeartTagWH();
        // heartTag.setAttribute('width', WH);
        // heartTag.setAttribute('heigth', WH);
    }, 150);
}


function createImageTag() {
    const imgTag = document.createElement('img');
    imgTag.setAttribute('src', './heart.png');
    imgTag.setAttribute('id', 'heart');
    imgTag.setAttribute('width', WH);
    imgTag.setAttribute('heigth', WH);
    containerTag.appendChild(imgTag);
    heartTag = document.getElementById('heart');
    createTitleTag();
}

function createTitleTag() {
    const pTag = document.createElement('p');
    pTag.setAttribute('class', 'title');
    pTag.innerHTML = `Meri Janu`;
    containerTag.appendChild(pTag);
    // animateMyHeart();
}

// createImageTag();