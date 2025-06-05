
let shoes = [
    {
        name: "Nike",
        model: "Air Max",
        color: "White",
        size: 9,
        price: 12000,
        type: "Running",
        gender: "Male",
        rating: 4.5,
        year: 2023
    },
    {
        name: "Adidas",
        model: "Ultraboost",
        color: "Black",
        size: 8,
        price: 15000,
        type: "Running",
        gender: "Male",
        rating: 4.7,
        year: 2022
    },
    {
        name: "Puma",
        model: "RS-X",
        color: "Red",
        size: 7,
        price: 9000,
        type: "Casual",
        gender: "Female",
        rating: 4.2,
        year: 2023
    },
    {
        name: "Reebok",
        model: "Classic",
        color: "White",
        size: 8,
        price: 8000,
        type: "Casual",
        gender: "Unisex",
        rating: 4.0,
        year: 2022
    },
    {
        name: "Skechers",
        model: "Go Walk",
        color: "Blue",
        size: 9,
        price: 7000,
        type: "Walking",
        gender: "Male",
        rating: 4.3,
        year: 2023
    },
    {
        name: "Vans",
        model: "Old Skool",
        color: "Black",
        size: 7,
        price: 6500,
        type: "Skateboarding",
        gender: "Unisex",
        rating: 4.4,
        year: 2022
    },
    {
        name: "Converse",
        model: "Chuck Taylor",
        color: "Red",
        size: 8,
        price: 5500,
        type: "Casual",
        gender: "Unisex",
        rating: 4.6,
        year: 2023
    },
    {
        name: "New Balance",
        model: "574",
        color: "Grey",
        size: 9,
        price: 8500,
        type: "Running",
        gender: "Female",
        rating: 4.1,
        year: 2022
    },
    {
        name: "Fila",
        model: "Disruptor",
        color: "White",
        size: 8,
        price: 7500,
        type: "Casual",
        gender: "Female",
        rating: 3.9,
        year: 2023
    },
    {
        name: "Woodland",
        model: "Trekking",
        color: "Brown",
        size: 10,
        price: 6000,
        type: "Hiking",
        gender: "Male",
        rating: 4.2,
        year: 2022
    }
];
for (let i = 0; i < shoes.length; i++) {
    console.log(`Brand: ${shoes[i].name}, Model: ${shoes[i].model}, color: ${shoes[i].color}`);
    console.log("----------------------")
}