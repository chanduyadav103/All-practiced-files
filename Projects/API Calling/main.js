const productsElement = document.getElementById('products');
const modalElement = document.getElementById('productModalContent');
let products = [];

function getProductById(id) {
    fetch('https://fakestoreapi.com/products/' + id).then((resp) => {
        return resp.json();
    }).then(resp => {
        renderModalContent(resp)
    }).catch((err) => {
        console.error("Error:::::::::::::\n", err)
    })
}

function getProducts() {
    fetch('https://fakestoreapi.com/products').then((resp) => {
        return resp.json();
    }).then(resp => {
        products = resp;
        renderProducts()
    }).catch((err) => {
        console.error("Error:::::::::::::\n", err)
    })
}

function renderProducts() {
    let productsTemplate = ``;

    for (let product of products) {
        const tempTemplate = `
            <div class="col-6 col-md-4 col-lg-3 pb-3">
                <div class="card rounded-0 h-100">
                    <div class="position-relative">
                        <img src="${product.image}" class="card-img-top rounded-0 border-bottom p-3 product-img" />
                        <span class="ratings badge rounded-pill text-bg-primary position-absolute"> ${product.rating.rate} </span>
                    </div>
                    <div class="card-body d-flex justify-content-between flex-column">
                        <div>
                            <div class="card-title">${product.title}</div>
                            <div class="card-text mb-2 text-truncate">${product.description}</div>
                            <p class="category mb-3">${product.category}</p>
                        </div>
                        <button 
                            class="btn btn-full w-100 btn-dark"
                            data-bs-toggle="modal"
                            data-bs-target="#productModal"
                            onclick="getProductById(${product.id})"
                            >
                            Buy
                        </button>
                    </div>
                </div>
            </div>
        `;
        productsTemplate = productsTemplate + tempTemplate;
    }

    productsElement.innerHTML = productsTemplate;
}

function renderModalContent(product) {
    let template = `
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="productModalLabel">${product.title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="position-relative">
                        <img src="${product.image}" class="card-img-top rounded-0 border-bottom p-3 product-img" />
                        <span class="ratings badge rounded-pill text-bg-primary position-absolute">
                            ${product.rating.rate}
                        </span>
                    </div>
                    <p class="card-title fw-bold mb-2">Price:</p>
                    <p class="card-text">$${product.price}</p>
                    <p class="card-title fw-bold mb-2">Description:</p>
                    <p class="card-text">${product.description}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-dark">Buy</button>
                </div>
            </div>
    `;
    modalElement.innerHTML = template;
}



getProducts();