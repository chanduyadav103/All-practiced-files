const shoes = [
    {
        id: 1,
        brand: "Nike",
        model: "Air Max",
        color: "White",
        size: 9,
        price: 12000,
        type: "Running",
        gender: "Male",
        rating: 4.5,
        year: 2023,
    },
    {
        id: 2,
        brand: "Adidas",
        model: "Ultraboost",
        color: "Black",
        size: 8,
        price: 15000,
        type: "Running",
        gender: "Male",
        rating: 4.7,
        year: 2022,
    },
    {
        id: 3,
        brand: "Puma",
        model: "RS-X",
        color: "Red",
        size: 7,
        price: 9000,
        type: "Casual",
        gender: "Female",
        rating: 4.2,
        year: 2023,
    },
    {
        id: 4,
        brand: "Reebok",
        model: "Classic",
        color: "White",
        size: 8,
        price: 8000,
        type: "Casual",
        gender: "Unisex",
        rating: 4.0,
        year: 2022,
    },
    {
        id: 5,
        brand: "Skechers",
        model: "Go Walk",
        color: "Blue",
        size: 9,
        price: 7000,
        type: "Walking",
        gender: "Male",
        rating: 4.3,
        year: 2023,
    },
    {
        id: 6,
        brand: "Vans",
        model: "Old Skool",
        color: "Black",
        size: 7,
        price: 6500,
        type: "Skateboarding",
        gender: "Unisex",
        rating: 4.4,
        year: 2022,
    },
    {
        id: 7,
        brand: "Converse",
        model: "Chuck Taylor",
        color: "Red",
        size: 8,
        price: 5500,
        type: "Casual",
        gender: "Unisex",
        rating: 4.6,
        year: 2023,
    },
    {
        id: 8,
        brand: "New Balance",
        model: "574",
        color: "Grey",
        size: 9,
        price: 8500,
        type: "Running",
        gender: "Female",
        rating: 4.1,
        year: 2022,
    },
    {
        id: 9,
        brand: "Fila",
        model: "Disruptor",
        color: "White",
        size: 8,
        price: 7500,
        type: "Casual",
        gender: "Female",
        rating: 3.9,
        year: 2023,
    },
    {
        id: 10,
        brand: "Woodland",
        model: "Trekking",
        color: "Brown",
        size: 10,
        price: 6000,
        type: "Hiking",
        gender: "Male",
        rating: 4.2,
        year: 2022,
    },
];

for (let i = 0; i < 10; i++) {
    console.log("--------------------------------------------------");
    console.log("id: " + shoes[i].id)
    console.log("brand: " + shoes[i].brand)
    console.log("model: " + shoes[i].model)
    console.log("color: " + shoes[i].color)
    console.log("size: " + shoes[i].size)
    console.log("price: " + shoes[i].price)
    console.log("type: " + shoes[i].type)
    console.log("gender: " + shoes[i].gender)
    console.log("rating: " + shoes[i].rating)
    console.log("year: " + shoes[i].year)
    console.log("--------------------------------------------------");
}
