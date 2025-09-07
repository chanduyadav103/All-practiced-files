const modalContainerEle = document.getElementById('modalContainer');

function launchModal() {
    modalContainerEle.setAttribute('style', 'display: flex !important;')
}

function closeModal() {
    modalContainerEle.setAttribute('style', 'display: none !important;')
}