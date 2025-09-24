const express = require('express');
const app = express()
const PORT = 4000;
const movies = [
    {
        id: 1,
        name: "RRR",
        year: 2022,
        genre: "Action-Drama",
        cast: ["N.T. Rama Rao Jr.", "Ram Charan", "Alia Bhatt", "Ajay Devgn"],
        language: "Telugu",
        hit: true,
        budget: "₹550 crore",
        director: "S. S. Rajamouli",
        collections: "₹1,200 crore"
    },
    {
        id: 2,
        name: "Pushpa: The Rise",
        year: 2021,
        genre: "Action",
        cast: ["Allu Arjun", "Rashmika Mandanna", "Fahadh Faasil"],
        language: "Telugu",
        hit: true,
        budget: "₹200 crore",
        director: "Sukumar",
        collections: "₹373 crore"
    },
    {
        id: 3,
        name: "Pushpa 2: The Rule",
        year: 2024,
        genre: "Action",
        cast: ["Allu Arjun", "Rashmika Mandanna", "Fahadh Faasil"],
        language: "Telugu",
        hit: "hit",
        budget: "₹300 crore",
        director: "Sukumar",
        collections: "₹1740 crore"
    },
    {
        id: 4,
        name: "Sita Ramam",
        year: 2022,
        genre: "Romantic Drama",
        cast: ["Dulquer Salmaan", "Mrunal Thakur", "Rashmika Mandanna"],
        language: "Telugu",
        hit: true,
        budget: "₹30 crore",
        director: "Hanu Raghavapudi",
        collections: "₹91 crore"
    },
    {
        id: 5,
        name: "Kushi",
        year: 2023,
        genre: "Romantic Comedy",
        cast: ["Vijay Deverakonda", "Samantha Ruth Prabhu"],
        language: "Telugu",
        hit: false,
        budget: "₹50 crore",
        director: "Shiva Nirvana",
        collections: "₹60 crore"
    },
    {
        id: 6,
        name: "Salaar: Part 1 - Ceasefire",
        year: 2023,
        genre: "Action-Thriller",
        cast: ["Prabhas", "Prithviraj Sukumaran", "Shruti Haasan"],
        language: "Telugu",
        hit: true,
        budget: "₹400 crore",
        director: "Prashanth Neel",
        collections: "₹720 crore"
    },
    {
        id: 7,
        name: "Dasara",
        year: 2023,
        genre: "Action-Drama",
        cast: ["Nani", "Keerthy Suresh", "Dheekshith Shetty"],
        language: "Telugu",
        hit: true,
        budget: "₹65 crore",
        director: "Srikanth Odela",
        collections: "₹135 crore"
    },
    {
        id: 8,
        name: "Veera Simha Reddy",
        year: 2023,
        genre: "Action",
        cast: ["Nandamuri Balakrishna", "Shruti Haasan", "Varalaxmi Sarathkumar"],
        language: "Telugu",
        hit: true,
        budget: "₹70 crore",
        director: "Gopichand Malineni",
        collections: "₹134 crore"
    },
    {
        id: 9,
        name: "Waltair Veerayya",
        year: 2023,
        genre: "Action-Comedy",
        cast: ["Chiranjeevi", "Ravi Teja", "Shruti Haasan"],
        language: "Telugu",
        hit: true,
        budget: "₹140 crore",
        director: "Bobby Kolli",
        collections: "₹230 crore"
    },
    {
        id: 10,
        name: "Bro",
        year: 2023,
        genre: "Fantasy-Drama",
        cast: ["Pawan Kalyan", "Sai Dharam Tej", "Ketika Sharma"],
        language: "Telugu",
        hit: false,
        budget: "₹100 crore",
        director: "Samuthirakani",
        collections: "₹115 crore"
    },
    {
        id: 11,
        name: "Hi Nanna",
        year: 2023,
        genre: "Romantic Drama",
        cast: ["Nani", "Mrunal Thakur", "Shruti Haasan"],
        language: "Telugu",
        hit: true,
        budget: "₹50 crore",
        director: "Shouryuv",
        collections: "₹110 crore"
    },
    {
        id: 12,
        name: "Baahubali: The Beginning",
        year: 2015,
        genre: "Action-Drama",
        cast: ["Prabhas", "Rana Daggubati", "Anushka Shetty", "Tamannaah"],
        language: "Telugu",
        hit: true,
        budget: "₹180 crore",
        director: "S. S. Rajamouli",
        collections: "₹650 crore"
    },
    {
        id: 13,
        name: "Baahubali 2: The Conclusion",
        year: 2017,
        genre: "Action-Drama",
        cast: ["Prabhas", "Rana Daggubati", "Anushka Shetty", "Tamannaah"],
        language: "Telugu",
        hit: true,
        budget: "₹250 crore",
        director: "S. S. Rajamouli",
        collections: "₹1810 crore"
    }
];

const bikes = [
    {
        id: 1,
        name: "KTM RC 250",
        brand: "KTM",
        mileage: 27,
        rank: 1,
        fuel: true,
        engine: "248.8 cc",
        cost: 320000,
        ratings: 4.6
    },
    {
        id: 2,
        name: "Honda CB350RS",
        brand: "Honda",
        mileage: 35,
        rank: 2,
        fuel: true,
        engine: "348.36 cc",
        cost: 230000,
        ratings: 4.7
    },
    {
        id: 3,
        name: "Royal Enfield Meteor 350",
        brand: "Royal Enfield",
        mileage: 37,
        rank: 3,
        fuel: true,
        engine: "349 cc",
        cost: 190000,
        ratings: 4.5
    },
    {
        id: 4,
        name: "TVS Apache RR 310",
        brand: "TVS",
        mileage: 25,
        rank: 4,
        fuel: true,
        engine: "312.2 cc",
        cost: 280000,
        ratings: 4.6
    },
    {
        id: 5,
        name: "Bajaj Dominar 400",
        brand: "Bajaj",
        mileage: 32,
        rank: 5,
        fuel: true,
        engine: "373.3 cc",
        cost: 240000,
        ratings: 4.4
    },
    {
        id: 6,
        name: "Hero Xpulse 200",
        brand: "Hero",
        mileage: 40,
        rank: 6,
        fuel: true,
        engine: "199.6 cc",
        cost: 120000,
        ratings: 4.2
    },
    {
        id: 7,
        name: "Yamaha MT-15",
        brand: "Yamaha",
        mileage: 40,
        rank: 7,
        fuel: true,
        engine: "155 cc",
        cost: 165000,
        ratings: 4.3
    },
    {
        id: 8,
        name: "Revolt RV400",
        brand: "Revolt",
        mileage: 150,
        rank: 8,
        fuel: false,
        engine: "Electric Motor",
        cost: 115000,
        ratings: 4.0
    },
    {
        id: 9,
        name: "KTM Duke 125",
        brand: "KTM",
        mileage: 36,
        rank: 9,
        fuel: true,
        engine: "124.7 cc",
        cost: 165000,
        ratings: 4.4
    },
    {
        id: 10,
        name: "Honda Shine",
        brand: "Honda",
        mileage: 50,
        rank: 10,
        fuel: true,
        engine: "124.7 cc",
        cost: 90000,
        ratings: 4.1
    }
];

const mobiles = [
    {
        "id": 1,
        "name": "iPhone 15 Pro",
        "brand": "Apple",
        "chip": "A17 Bionic",
        "processor": "Hexa-core",
        "cost": "₹1,29,900",
        "ratings": 4.8,
        "camera": "48MP + 12MP + 12MP",
        "battery": "3200 mAh"
    },
    {
        "id": 2,
        "name": "iPhone 15",
        "brand": "Apple",
        "chip": "A16 Bionic",
        "processor": "Hexa-core",
        "cost": "₹79,900",
        "ratings": 4.7,
        "camera": "48MP + 12MP",
        "battery": "3320 mAh"
    },
    {
        "id": 3,
        "name": "iPhone 14 Pro Max",
        "brand": "Apple",
        "chip": "A16 Bionic",
        "processor": "Hexa-core",
        "cost": "₹1,19,900",
        "ratings": 4.7,
        "camera": "48MP + 12MP + 12MP",
        "battery": "4323 mAh"
    },
    {
        "id": 4,
        "name": "Samsung Galaxy S23 Ultra",
        "brand": "Samsung",
        "chip": "Snapdragon 8 Gen 2",
        "processor": "Octa-core",
        "cost": "₹1,05,999",
        "ratings": 4.7,
        "camera": "200MP + 12MP + 10MP + 10MP",
        "battery": "5000 mAh"
    },
    {
        "id": 5,
        "name": "OnePlus 11",
        "brand": "OnePlus",
        "chip": "Snapdragon 8 Gen 2",
        "processor": "Octa-core",
        "cost": "₹56,999",
        "ratings": 4.6,
        "camera": "50MP + 48MP + 32MP",
        "battery": "5000 mAh"
    },
    {
        "id": 6,
        "name": "Google Pixel 8 Pro",
        "brand": "Google",
        "chip": "Google Tensor G3",
        "processor": "Octa-core",
        "cost": "₹89,999",
        "ratings": 4.5,
        "camera": "50MP + 48MP + 12MP",
        "battery": "5000 mAh"
    },
    {
        "id": 7,
        "name": "Xiaomi 13 Pro",
        "brand": "Xiaomi",
        "chip": "Snapdragon 8 Gen 2",
        "processor": "Octa-core",
        "cost": "₹74,999",
        "ratings": 4.4,
        "camera": "50MP + 50MP + 50MP",
        "battery": "4820 mAh"
    },
    {
        "id": 8,
        "name": "Samsung Galaxy Z Fold 5",
        "brand": "Samsung",
        "chip": "Snapdragon 8 Gen 2",
        "processor": "Octa-core",
        "cost": "₹1,49,999",
        "ratings": 4.3,
        "camera": "50MP + 12MP + 10MP",
        "battery": "4400 mAh"
    },
    {
        "id": 9,
        "name": "Realme GT 3",
        "brand": "Realme",
        "chip": "Snapdragon 8+ Gen 1",
        "processor": "Octa-core",
        "cost": "₹42,999",
        "ratings": 4.2,
        "camera": "200MP + 8MP + 2MP",
        "battery": "5000 mAh"
    },
    {
        "id": 10,
        "name": "iQOO 11",
        "brand": "iQOO",
        "chip": "Snapdragon 8 Gen 2",
        "processor": "Octa-core",
        "cost": "₹49,999",
        "ratings": 4.3,
        "camera": "50MP + 13MP + 2MP",
        "battery": "4600 mAh"
    },
    {
        "id": 11,
        "name": "Motorola Edge 40 Pro",
        "brand": "Motorola",
        "chip": "Snapdragon 8+ Gen 1",
        "processor": "Octa-core",
        "cost": "₹59,999",
        "ratings": 4.1,
        "camera": "200MP + 50MP + 12MP",
        "battery": "4800 mAh"
    },
    {
        "id": 12,
        "name": "Oppo Find X6 Pro",
        "brand": "Oppo",
        "chip": "Snapdragon 8 Gen 2",
        "processor": "Octa-core",
        "cost": "₹79,999",
        "ratings": 4.4,
        "camera": "50MP + 50MP + 50MP",
        "battery": "5000 mAh"
    }
];


const games = [
    {
        "id": 1,
        "name": "Spider-Man: Miles Morales",
        "release_date": "2020-11-12",
        "cost": "$49.99",
        "version": "Standard Edition",
        "ratings": 8.8,
        "mb": 52000,
        "no_of_players": "1"
    },
    {
        "id": 2,
        "name": "Horizon Forbidden West",
        "release_date": "2022-02-18",
        "cost": "$69.99",
        "version": "Deluxe Edition",
        "ratings": 9.2,
        "mb": 97000,
        "no_of_players": "1"
    },
    {
        "id": 3,
        "name": "Ratchet & Clank: Rift Apart",
        "release_date": "2021-06-11",
        "cost": "$69.99",
        "version": "Standard Edition",
        "ratings": 9.0,
        "mb": 43000,
        "no_of_players": "1"
    },
    {
        "id": 4,
        "name": "Returnal",
        "release_date": "2021-04-30",
        "cost": "$69.99",
        "version": "Standard Edition",
        "ratings": 8.5,
        "mb": 56000,
        "no_of_players": "1"
    },
    {
        "id": 5,
        "name": "Demon's Souls",
        "release_date": "2020-11-12",
        "cost": "$69.99",
        "version": "Remake",
        "ratings": 9.1,
        "mb": 66000,
        "no_of_players": "1"
    },
    {
        "id": 6,
        "name": "Gran Turismo 7",
        "release_date": "2022-03-04",
        "cost": "$69.99",
        "version": "Standard Edition",
        "ratings": 8.9,
        "mb": 89000,
        "no_of_players": "1-20"
    },
    {
        "id": 7,
        "name": "Resident Evil Village",
        "release_date": "2021-05-07",
        "cost": "$59.99",
        "version": "Standard Edition",
        "ratings": 8.7,
        "mb": 35000,
        "no_of_players": "1"
    },
    {
        "id": 8,
        "name": "Elden Ring",
        "release_date": "2022-02-25",
        "cost": "$59.99",
        "version": "Standard Edition",
        "ratings": 9.7,
        "mb": 45000,
        "no_of_players": "1-4"
    },
    {
        "id": 9,
        "name": "Call of Duty: Modern Warfare II",
        "release_date": "2022-10-28",
        "cost": "$69.99",
        "version": "Cross-Gen Bundle",
        "ratings": 8.4,
        "mb": 150000,
        "no_of_players": "1-64"
    },
    {
        "id": 10,
        "name": "FIFA 23",
        "release_date": "2022-09-27",
        "cost": "$69.99",
        "version": "Ultimate Edition",
        "ratings": 8.0,
        "mb": 55000,
        "no_of_players": "1-22"
    },
    {
        "id": 11,
        "name": "Marvel's Spider-Man Remastered",
        "release_date": "2020-11-12",
        "cost": "$49.99",
        "version": "Remastered Edition",
        "ratings": 9.0,
        "mb": 67000,
        "no_of_players": "1"
    },
    {
        "id": 12,
        "name": "Marvel's Spider-Man 2",
        "release_date": "2023-10-20",
        "cost": "$69.99",
        "version": "Standard Edition",
        "ratings": 9.3,
        "mb": 98000,
        "no_of_players": "1"
    },
    {
        "id": 13,
        "name": "Call of Duty: Modern Warfare III",
        "release_date": "2023-11-10",
        "cost": "$69.99",
        "version": "Cross-Gen Bundle",
        "ratings": 7.9,
        "mb": 175000,
        "no_of_players": "1-64"
    },
    {
        "id": 14,
        "name": "Call of Duty: Black Ops Cold War",
        "release_date": "2020-11-13",
        "cost": "$69.99",
        "version": "Standard Edition",
        "ratings": 8.2,
        "mb": 133000,
        "no_of_players": "1-40"
    },
    {
        "id": 15,
        "name": "Call of Duty: Warzone 2.0",
        "release_date": "2022-11-16",
        "cost": "Free",
        "version": "Battle Royale",
        "ratings": 8.1,
        "mb": 115000,
        "no_of_players": "1-150"
    }
]


// movies
app.get('/v1/api/get-movies', (req, res) => {

    res.status(200).json(movies)
});

app.get('/v1/api/get-movie/:id', (req, res) => {
    movieId = parseInt(req.params.id)
    movie = movies.filter(m => m.id === movieId)[0]

    if (movie) {
        res.json(movie)
    } else {
        res.status(404).send('This id is not present in movies')
    }
});


app.get('/v1/api/get-movie-name/:name', (req, res) => {
    movieName = req.params.name;
    searchMovie = movies.filter(m => m.name.toLowerCase().includes(movieName.toLowerCase()));
    if (searchMovie) {
        res.json(searchMovie)
    } else {
        res.status(404).send('this movie name is not present')
    }
});


// bikes



app.get('/v1/api/get-bikes', (req, res) => {
    res.status(200).json(bikes)
})


app.get('/v1/api/get-bike/:id', (req, res) => {
    const bikeId = parseInt(req.params.id);
    const bike = bikes.filter(b => b.id === bikeId)[0]
    if (bike) {
        res.json(bike)
    } else {
        res.status(404).send('This id is not found in bikes')
    }
});

app.get('/v1/api/get-bike-name/:name', (req, res) => {
    const bikeName = req.params.name;
    const searchBike = bikes.filter(b => b.name.toLowerCase().includes(bikeName.toLowerCase()))
    if (searchBike) {
        res.json(searchBike)
    } else {
        res.status(404).send('The bike name is not present ')
    }
})

// mobile

app.get('/v1/api/get-mobiles', (req, res) => {
    res.status(200).json(mobiles)
});



app.get('/v1/api/get-mobile/:id', (req, res) => {
    mobileId = parseInt(req.params.id)
    mobile = mobiles.filter(m => m.id === mobileId)[0]

    if (mobile) {
        res.json(mobile)
    } else {
        res.status(404).send('This id is not present in mobile')
    }

});

app.get('/v1/api/get-mobile-name/:name', (req, res) => {
    mobileName = req.params.name;
    searchMobile = mobiles.filter(m => m.name.toLowerCase().includes(mobileName.toLowerCase()))

    if (searchMobile) {
        res.json(searchMobile)
    } else {
        res.status(404).send('This mobile name in not present ')
    }
})



// games


app.get('/v1/api/get-games', (req, res) => {
    res.json(games)
});


app.get('/v1/api/get-game/:id', (req, res) => {
    gamesId = parseInt(req.params.id)
    game = games.filter(g => g.id === gamesId)[0]
    if (game) {
        res.json(game)
    } else {
        res.status(404).send('This id is not present in games')
    }
})


app.get('/v1/api/get-game-name/:name', (req, res) => {
    gameName = req.params.name;
    game = games.filter(g => g.name.toLowerCase().includes(gameName.toLowerCase()))
    if (game) {
        res.json(game)
    } else {
        res.status(404).send('This name is not present in game')
    }
})


// run port

app.listen(PORT, () => {
    console.log(`serving is running in this localhost:${PORT}`)
});