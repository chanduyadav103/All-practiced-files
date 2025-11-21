
let bikes = [
    { name: "Royal Bike", price: "3,22,500", image: "download (1).jpeg" },
    { name: "Duke Bike", price: "3,22,500", image: "download (7).jpeg" },
    { name: "Royal Enfield", price: "3,22,500", image: "download.jpeg" },
    { name: "GT 650 Bike", price: "3,22,500", image: "download (8).jpeg" },
    { name: "Royal Enfield Bike", price: "3,66,500", image: "download (3).jpeg" },
];

function displayBikes(list) {
    let container = document.getElementById("bikeList");
    container.innerHTML = "";

    list.forEach(bike => {
        container.innerHTML += `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card h-100 shadow-sm">
          <img src="${bike.image}" class="card-img-top" height="180">
          <div class="card-body text-center">
            <h5 class="card-title">${bike.name}</h5>
            <p class="card-text">Price: ${bike.price}</p>
            <a href="#" class="btn btn-buy">Buy Now</a>
          </div>
        </div>
      </div>
    `;
    });
}

displayBikes(bikes);

// Search Bikes
document.getElementById("searchBtn").onclick = () => {
    let text = document.getElementById("searchInput").value.toLowerCase();
    let filtered = bikes.filter(b => b.name.toLowerCase().includes(text));
    displayBikes(filtered);
};

// Reset Search
document.getElementById("resetBtn").onclick = () => {
    document.getElementById("searchInput").value = "";
    displayBikes(bikes);
};

document.getElementById("addBikeBtn").onclick = () => {
    let name = document.getElementById("bikeName").value;
    let price = document.getElementById("bikePrice").value;
    let image = document.getElementById("bikeImage").value;

    if (name === "" || price === "" || image === "") {
        alert("Please fill all fields!");
        return;
    }

    bikes.push({ name, price, image });

    displayBikes(bikes);

    document.getElementById("bikeName").value = "";
    document.getElementById("bikePrice").value = "";
    document.getElementById("bikeImage").value = "";

    alert("Bike Added Successfully!");
};
