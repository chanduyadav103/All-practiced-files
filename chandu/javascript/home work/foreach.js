const bike = [
    {
        name: "Royal Enfield",
        model: "Classic 350",
        color: "Black",
        price: 190000,
        mileage: "35 kmpl",
        engine: "346cc",
        fuelType: "Petrol",
        year: 2023,
        rating: 4.5
    },
    {
        name: "Bajaj",
        model: "Pulsar 220F",
        color: "Red",
        price: 140000,
        mileage: "40 kmpl",
        engine: "220cc",
        fuelType: "Petrol",
        year: 2022,
        rating: 4.2
    },
    {
        name: "TVS",
        model: "Apache RTR 160",
        color: "Blue",
        price: 120000,
        mileage: "45 kmpl",
        engine: "160cc",
        fuelType: "Petrol",
        year: 2023,
        rating: 4.0
    },
    {
        name: "Hero",
        model: "Splendor Plus",
        color: "Black",
        price: 75000,
        mileage: "60 kmpl",
        engine: "97.2cc",
        fuelType: "Petrol",
        year: 2022,
        rating: 4.3
    },
    {
        name: "Honda",
        model: "Shine",
        color: "Silver",
        price: 80000,
        mileage: "65 kmpl",
        engine: "125cc",
        fuelType: "Petrol",
        year: 2023,
        rating: 4.4
    },
    {
        name: "Yamaha",
        model: "MT-15",
        color: "Blue",
        price: 165000,
        mileage: "45 kmpl",
        engine: "155cc",
        fuelType: "Petrol",
        year: 2023,
        rating: 4.6
    },
    {
        name: "KTM",
        model: "Duke 200",
        color: "Orange",
        price: 210000,
        mileage: "35 kmpl",
        engine: "199.5cc",
        fuelType: "Petrol",
        year: 2022,
        rating: 4.7
    },
    {
        name: "Suzuki",
        model: "Gixxer SF",
        color: "Black",
        price: 145000,
        mileage: "45 kmpl",
        engine: "155cc",
        fuelType: "Petrol",
        year: 2023,
        rating: 4.1
    },
    {
        name: "Royal Enfield",
        model: "Himalayan",
        color: "Green",
        price: 220000,
        mileage: "30 kmpl",
        engine: "411cc",
        fuelType: "Petrol",
        year: 2022,
        rating: 4.4
    },
    {
        name: "Bajaj",
        model: "Dominar 400",
        color: "Black",
        price: 240000,
        mileage: "27 kmpl",
        engine: "373.3cc",
        fuelType: "Petrol",
        year: 2023,
        rating: 4.3
    }
];


bike.forEach(function (value, index, array) {
    if (value.model === "Dominar 400") {
        value.model = "Dominar 450"
    }
    console.log(bike[9])
    console.log(index, value, array);
    console.log("model is :" + bike[9].model)
});





