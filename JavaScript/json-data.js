const students = [
    { id: 1, name: "Rahul Sharma", age: 20, grade: "A", city: "Mumbai", subjects: ["Math", "Science"], attendance: 95, gender: "Male", hobbies: ["Cricket", "Reading"], email: "rahul@example.com" },
    { id: 2, name: "Priya Patel", age: 19, grade: "B", city: "Delhi", subjects: ["History", "English"], attendance: 88, gender: "Female", hobbies: ["Dancing", "Painting"], email: "priya@example.com" },
    { id: 3, name: "Amit Singh", age: 21, grade: "A+", city: "Bangalore", subjects: ["Physics", "Chemistry"], attendance: 97, gender: "Male", hobbies: ["Programming", "Chess"], email: "amit@example.com" },
    { id: 4, name: "Neha Gupta", age: 20, grade: "B+", city: "Hyderabad", subjects: ["Biology", "Math"], attendance: 90, gender: "Female", hobbies: ["Singing", "Yoga"], email: "neha@example.com" },
    { id: 5, name: "Raj Verma", age: 22, grade: "A", city: "Pune", subjects: ["Economics", "Business"], attendance: 92, gender: "Male", hobbies: ["Football", "Movies"], email: "raj@example.com" },
    { id: 6, name: "Sonia Reddy", age: 19, grade: "B", city: "Chennai", subjects: ["Computer Science", "Math"], attendance: 85, gender: "Female", hobbies: ["Photography", "Travel"], email: "sonia@example.com" },
    { id: 7, name: "Vikram Joshi", age: 20, grade: "A", city: "Kolkata", subjects: ["Geography", "History"], attendance: 94, gender: "Male", hobbies: ["Cricket", "Debate"], email: "vikram@example.com" },
    { id: 8, name: "Anjali Kapoor", age: 21, grade: "A+", city: "Ahmedabad", subjects: ["Literature", "Psychology"], attendance: 96, gender: "Female", hobbies: ["Writing", "Music"], email: "anjali@example.com" },
    { id: 9, name: "Arun Malhotra", age: 20, grade: "B+", city: "Jaipur", subjects: ["Physics", "Math"], attendance: 89, gender: "Male", hobbies: ["Swimming", "Reading"], email: "arun@example.com" },
    { id: 10, name: "Pooja Mehta", age: 19, grade: "B", city: "Lucknow", subjects: ["Chemistry", "Biology"], attendance: 87, gender: "Female", hobbies: ["Dancing", "Cooking"], email: "pooja@example.com" }
];

const bikes = [
    { id: 1, brand: "Royal Enfield", model: "Classic 350", color: "Black", price: 190000, mileage: "35 kmpl", engine: "346cc", fuelType: "Petrol", year: 2023, rating: 4.5 },
    { id: 2, brand: "Bajaj", model: "Pulsar 220F", color: "Red", price: 140000, mileage: "40 kmpl", engine: "220cc", fuelType: "Petrol", year: 2022, rating: 4.2 },
    { id: 3, brand: "TVS", model: "Apache RTR 160", color: "Blue", price: 120000, mileage: "45 kmpl", engine: "160cc", fuelType: "Petrol", year: 2023, rating: 4.0 },
    { id: 4, brand: "Hero", model: "Splendor Plus", color: "Black", price: 75000, mileage: "60 kmpl", engine: "97.2cc", fuelType: "Petrol", year: 2022, rating: 4.3 },
    { id: 5, brand: "Honda", model: "Shine", color: "Silver", price: 80000, mileage: "65 kmpl", engine: "125cc", fuelType: "Petrol", year: 2023, rating: 4.4 },
    { id: 6, brand: "Yamaha", model: "MT-15", color: "Blue", price: 165000, mileage: "45 kmpl", engine: "155cc", fuelType: "Petrol", year: 2023, rating: 4.6 },
    { id: 7, brand: "KTM", model: "Duke 200", color: "Orange", price: 210000, mileage: "35 kmpl", engine: "199.5cc", fuelType: "Petrol", year: 2022, rating: 4.7 },
    { id: 8, brand: "Suzuki", model: "Gixxer SF", color: "Black", price: 145000, mileage: "45 kmpl", engine: "155cc", fuelType: "Petrol", year: 2023, rating: 4.1 },
    { id: 9, brand: "Royal Enfield", model: "Himalayan", color: "Green", price: 220000, mileage: "30 kmpl", engine: "411cc", fuelType: "Petrol", year: 2022, rating: 4.4 },
    { id: 10, brand: "Bajaj", model: "Dominar 400", color: "Black", price: 240000, mileage: "27 kmpl", engine: "373.3cc", fuelType: "Petrol", year: 2023, rating: 4.3 }
];

const shoes = [
    { id: 1, brand: "Nike", model: "Air Max", color: "White", size: 9, price: 12000, type: "Running", gender: "Male", rating: 4.5, year: 2023 },
    { id: 2, brand: "Adidas", model: "Ultraboost", color: "Black", size: 8, price: 15000, type: "Running", gender: "Male", rating: 4.7, year: 2022 },
    { id: 3, brand: "Puma", model: "RS-X", color: "Red", size: 7, price: 9000, type: "Casual", gender: "Female", rating: 4.2, year: 2023 },
    { id: 4, brand: "Reebok", model: "Classic", color: "White", size: 8, price: 8000, type: "Casual", gender: "Unisex", rating: 4.0, year: 2022 },
    { id: 5, brand: "Skechers", model: "Go Walk", color: "Blue", size: 9, price: 7000, type: "Walking", gender: "Male", rating: 4.3, year: 2023 },
    { id: 6, brand: "Vans", model: "Old Skool", color: "Black", size: 7, price: 6500, type: "Skateboarding", gender: "Unisex", rating: 4.4, year: 2022 },
    { id: 7, brand: "Converse", model: "Chuck Taylor", color: "Red", size: 8, price: 5500, type: "Casual", gender: "Unisex", rating: 4.6, year: 2023 },
    { id: 8, brand: "New Balance", model: "574", color: "Grey", size: 9, price: 8500, type: "Running", gender: "Female", rating: 4.1, year: 2022 },
    { id: 9, brand: "Fila", model: "Disruptor", color: "White", size: 8, price: 7500, type: "Casual", gender: "Female", rating: 3.9, year: 2023 },
    { id: 10, brand: "Woodland", model: "Trekking", color: "Brown", size: 10, price: 6000, type: "Hiking", gender: "Male", rating: 4.2, year: 2022 }
];

const movies = [
    { id: 1, title: "RRR", director: "S.S. Rajamouli", year: 2022, genre: "Action", rating: 8.0, language: "Telugu", duration: "187 min", actors: ["N.T. Rama Rao Jr.", "Ram Charan"], oscar: true },
    { id: 2, title: "Pathaan", director: "Siddharth Anand", year: 2023, genre: "Action", rating: 7.5, language: "Hindi", duration: "146 min", actors: ["Shah Rukh Khan", "Deepika Padukone"], oscar: false },
    { id: 3, title: "Kantara", director: "Rishab Shetty", year: 2022, genre: "Drama", rating: 8.2, language: "Kannada", duration: "150 min", actors: ["Rishab Shetty", "Sapthami Gowda"], oscar: false },
    { id: 4, title: "Dangal", director: "Nitesh Tiwari", year: 2016, genre: "Biographical", rating: 8.8, language: "Hindi", duration: "161 min", actors: ["Aamir Khan", "Sakshi Tanwar"], oscar: false },
    { id: 5, title: "Baahubali 2", director: "S.S. Rajamouli", year: 2017, genre: "Action", rating: 8.2, language: "Telugu", duration: "167 min", actors: ["Prabhas", "Rana Daggubati"], oscar: false },
    { id: 6, title: "3 Idiots", director: "Rajkumar Hirani", year: 2009, genre: "Comedy", rating: 8.4, language: "Hindi", duration: "170 min", actors: ["Aamir Khan", "Madhavan"], oscar: false },
    { id: 7, title: "Lagaan", director: "Ashutosh Gowariker", year: 2001, genre: "Drama", rating: 8.1, language: "Hindi", duration: "224 min", actors: ["Aamir Khan", "Gracy Singh"], oscar: true },
    { id: 8, title: "Drishyam", director: "Nishikant Kamat", year: 2015, genre: "Thriller", rating: 8.2, language: "Hindi", duration: "163 min", actors: ["Ajay Devgn", "Tabu"], oscar: false },
    { id: 9, title: "Andhadhun", director: "Sriram Raghavan", year: 2018, genre: "Thriller", rating: 8.3, language: "Hindi", duration: "139 min", actors: ["Ayushmann Khurrana", "Tabu"], oscar: false },
    { id: 10, title: "PK", director: "Rajkumar Hirani", year: 2014, genre: "Comedy", rating: 8.1, language: "Hindi", duration: "153 min", actors: ["Aamir Khan", "Anushka Sharma"], oscar: false }
];

const india = {
    name: "Republic of India",
    capital: "New Delhi",
    population: 1380004385,
    area: 3287263,
    currency: "Indian Rupee (INR)",
    languages: ["Hindi", "English", "Bengali", "Telugu", "Marathi", "Tamil", "Urdu", "Gujarati", "Kannada", "Malayalam"],
    states: 28,
    unionTerritories: 8,
    independenceYear: 1947,
    nationalAnthem: "Jana Gana Mana",
    largestCity: "Mumbai",
    government: "Federal parliamentary constitutional republic",
    president: "Droupadi Murmu",
    primeMinister: "Narendra Modi",
    nationalAnimal: "Bengal Tiger",
    nationalBird: "Indian Peacock",
    nationalFlower: "Lotus",
    nationalSport: "Hockey"
};

const mobiles = [
    {
        id: "APL-001",
        brand: "Apple",
        model: "iPhone 15 Pro",
        colors: ["Space Black", "Silver", "Gold", "Deep Purple"],
        price: {
            base: 134900,
            variants: [
                { storage: "128GB", price: 134900 },
                { storage: "256GB", price: 144900 },
                { storage: "512GB", price: 164900 }
            ]
        },
        specifications: {
            display: {
                size: 6.1,
                type: "Super Retina XDR OLED",
                resolution: "2556x1179",
                refreshRate: "120Hz"
            },
            camera: {
                rear: {
                    main: "48MP f/1.8",
                    ultraWide: "12MP f/2.2",
                    telephoto: "12MP f/2.8 (3x optical zoom)"
                },
                front: "12MP f/1.9"
            },
            processor: "A17 Pro",
            battery: "3279 mAh",
            os: "iOS 17",
            connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.3", "NFC", "UWB"]
        },
        features: ["Face ID", "Dynamic Island", "Ceramic Shield", "IP68", "MagSafe"],
        ratings: {
            average: 4.8,
            reviews: [
                { user: "TechExpert22", rating: 5, comment: "Best iPhone yet!" },
                { user: "MobileGuru", rating: 4.5, comment: "Great but expensive" }
            ]
        },
        availability: {
            inStock: true,
            countries: ["India", "USA", "UK", "UAE", "Germany"],
            launchDate: new Date("2023-09-22")
        }
    },
    {
        id: "SMS-002",
        brand: "Samsung",
        model: "Galaxy S24 Ultra",
        colors: ["Phantom Black", "Cream", "Green", "Lavender"],
        price: {
            base: 129999,
            variants: [
                { storage: "256GB", price: 129999 },
                { storage: "512GB", price: 139999 },
                { storage: "1TB", price: 159999 }
            ]
        },
        specifications: {
            display: {
                size: 6.8,
                type: "Dynamic AMOLED 2X",
                resolution: "3088x1440",
                refreshRate: "120Hz"
            },
            camera: {
                rear: {
                    main: "200MP f/1.7",
                    ultraWide: "12MP f/2.2",
                    telephoto1: "10MP f/2.4 (3x optical)",
                    telephoto2: "50MP f/3.4 (10x optical)"
                },
                front: "12MP f/2.2"
            },
            processor: "Snapdragon 8 Gen 3",
            battery: "5000 mAh",
            os: "Android 14",
            connectivity: ["5G", "Wi-Fi 7", "Bluetooth 5.3", "NFC", "UWB"]
        },
        features: ["S Pen", "Under-display camera", "Titanium frame", "IP68", "Wireless PowerShare"],
        ratings: {
            average: 4.7,
            reviews: [
                { user: "AndroidFan", rating: 5, comment: "Camera is insane!" },
                { user: "TechLover", rating: 4, comment: "Battery life could be better" }
            ]
        },
        availability: {
            inStock: true,
            countries: ["India", "USA", "South Korea", "UK"],
            launchDate: new Date("2024-01-31")
        }
    },
    {
        id: "GGL-003",
        brand: "Google",
        model: "Pixel 8 Pro",
        colors: ["Obsidian", "Porcelain", "Bay"],
        price: {
            base: 106999,
            variants: [
                { storage: "128GB", price: 106999 },
                { storage: "256GB", price: 114999 },
                { storage: "512GB", price: 129999 }
            ]
        },
        specifications: {
            display: {
                size: 6.7,
                type: "LTPO OLED",
                resolution: "3120x1440",
                refreshRate: "120Hz"
            },
            camera: {
                rear: {
                    main: "50MP f/1.7",
                    ultraWide: "48MP f/1.95",
                    telephoto: "48MP f/2.8 (5x optical)"
                },
                front: "10.5MP f/2.2"
            },
            processor: "Google Tensor G3",
            battery: "5050 mAh",
            os: "Android 14",
            connectivity: ["5G", "Wi-Fi 7", "Bluetooth 5.3", "NFC"]
        },
        features: ["Face Unlock", "Titan M2 security", "IP68", "Wireless charging"],
        ratings: {
            average: 4.6,
            reviews: [
                { user: "PixelLover", rating: 5, comment: "Best Android experience" },
                { user: "CameraPro", rating: 4.5, comment: "Computational photography is unmatched" }
            ]
        },
        availability: {
            inStock: false,
            countries: ["USA", "UK", "Japan", "Germany"],
            launchDate: new Date("2023-10-12")
        }
    },
    {
        id: "1PL-004",
        brand: "OnePlus",
        model: "12 5G",
        colors: ["Silky Black", "Emerald Green"],
        price: {
            base: 69999,
            variants: [
                { storage: "256GB", price: 69999 },
                { storage: "512GB", price: 79999 }
            ]
        },
        specifications: {
            display: {
                size: 6.82,
                type: "LTPO AMOLED",
                resolution: "3168x1440",
                refreshRate: "120Hz"
            },
            camera: {
                rear: {
                    main: "50MP f/1.6",
                    ultraWide: "48MP f/2.2",
                    telephoto: "64MP f/2.6 (3x optical)"
                },
                front: "32MP f/2.4"
            },
            processor: "Snapdragon 8 Gen 3",
            battery: "5400 mAh",
            os: "Android 14",
            connectivity: ["5G", "Wi-Fi 7", "Bluetooth 5.4", "NFC"]
        },
        features: ["Alert Slider", "100W fast charging", "IP65", "Dolby Atmos"],
        ratings: {
            average: 4.5,
            reviews: [
                { user: "SpeedDemon", rating: 5, comment: "Blazing fast performance" },
                { user: "ValueHunter", rating: 4, comment: "Great flagship at this price" }
            ]
        },
        availability: {
            inStock: true,
            countries: ["India", "China", "USA"],
            launchDate: new Date("2024-01-23")
        }
    },
    {
        id: "XIA-005",
        brand: "Xiaomi",
        model: "14 Ultra",
        colors: ["Black", "White", "Green"],
        price: {
            base: 99999,
            variants: [
                { storage: "256GB", price: 99999 },
                { storage: "512GB", price: 109999 },
                { storage: "1TB", price: 129999 }
            ]
        },
        specifications: {
            display: {
                size: 6.73,
                type: "AMOLED",
                resolution: "3200x1440",
                refreshRate: "120Hz"
            },
            camera: {
                rear: {
                    main: "50MP f/1.6",
                    ultraWide: "50MP f/1.8",
                    telephoto1: "50MP f/1.8 (3.2x optical)",
                    telephoto2: "50MP f/2.5 (5x optical)"
                },
                front: "32MP f/2.0"
            },
            processor: "Snapdragon 8 Gen 3",
            battery: "5300 mAh",
            os: "Android 14",
            connectivity: ["5G", "Wi-Fi 7", "Bluetooth 5.4", "NFC", "Infrared"]
        },
        features: ["Leica optics", "IP68", "120W fast charging", "Dolby Vision"],
        ratings: {
            average: 4.4,
            reviews: [
                { user: "PhotoPro", rating: 5, comment: "Camera system rivals DSLRs" },
                { user: "TechEnthusiast", rating: 4, comment: "MIUI still needs work" }
            ]
        },
        availability: {
            inStock: true,
            countries: ["China", "India", "Europe"],
            launchDate: new Date("2024-02-25")
        }
    },
    {
        id: "SNY-006",
        brand: "Sony",
        model: "Xperia 1 V",
        colors: ["Black", "Purple"],
        price: {
            base: 109999,
            variants: [
                { storage: "256GB", price: 109999 },
                { storage: "512GB", price: 119999 }
            ]
        },
        specifications: {
            display: {
                size: 6.5,
                type: "4K HDR OLED",
                resolution: "3840x1644",
                refreshRate: "120Hz"
            },
            camera: {
                rear: {
                    main: "48MP f/1.6",
                    ultraWide: "12MP f/2.2",
                    telephoto: "12MP f/2.4 (3x optical)"
                },
                front: "12MP f/2.0"
            },
            processor: "Snapdragon 8 Gen 2",
            battery: "5000 mAh",
            os: "Android 14",
            connectivity: ["5G", "Wi-Fi 7", "Bluetooth 5.3", "NFC"]
        },
        features: ["CinemaWide display", "Front-facing stereo speakers", "IP65", "Continuous AF", "4K video recording"],
        ratings: {
            average: 4.3,
            reviews: [
                { user: "Cinephile", rating: 5, comment: "Best display in a phone" },
                { user: "AudioGeek", rating: 4, comment: "Speaker quality is good" }
            ]
        },
        availability: {
            inStock: true,
            countries: ["USA", "Japan", "UK", "India"],
            launchDate: new Date("2023-05-10")
        }
    },
    {
        id: "MOT-007",
        brand: "Motorola",
        model: "Edge 40 Pro",
        colors: ["Smoky Platinum", "Aquamarine"],
        price: {
            base: 44999,
            variants: [
                { storage: "128GB", price: 44999 },
                { storage: "256GB", price: 49999 }
            ]
        },
        specifications: {
            display: {
                size: 6.67,
                type: "pOLED",
                resolution: "2400x1080",
                refreshRate: "165Hz"
            },
            camera: {
                rear: {
                    main: "50MP f/1.8",
                    ultraWide: "13MP f/2.2",
                    telephoto: "12MP f/2.4 (2x optical)"
                },
                front: "32MP f/2.4"
            },
            processor: "Snapdragon 8 Gen 2",
            battery: "4600 mAh",
            os: "Android 14",
            connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.3", "NFC"]
        },
        features: ["TurboPower charging", "Water repellent", "Stereo speakers", "Edge LED notifications"],
        ratings: {
            average: 4.2,
            reviews: [
                { user: "BudgetPro", rating: 4, comment: "Great value" },
                { user: "SpeedTester", rating: 4.5, comment: "Smooth performance" }
            ]
        },
        availability: {
            inStock: true,
            countries: ["India", "Brazil", "USA"],
            launchDate: new Date("2024-03-15")
        }
    },
    {
        id: "OPP-008",
        brand: "Oppo",
        model: "Find X6 Pro",
        colors: ["Black", "Lilac Purple"],
        price: {
            base: 89999,
            variants: [
                { storage: "256GB", price: 89999 },
                { storage: "512GB", price: 99999 }
            ]
        },
        specifications: {
            display: {
                size: 6.82,
                type: "LTPO3 AMOLED",
                resolution: "3168x1440",
                refreshRate: "120Hz"
            },
            camera: {
                rear: {
                    main: "50MP f/1.7",
                    ultraWide: "50MP f/2.2",
                    telephoto: "32MP f/2.6 (2x optical)"
                },
                front: "32MP f/2.4"
            },
            processor: "Snapdragon 8 Gen 2",
            battery: "5000 mAh",
            os: "Android 14 (ColorOS 14)",
            connectivity: ["5G", "Wi-Fi 7", "Bluetooth 5.3", "NFC"]
        },
        features: ["120W AirVOOC charging", "IP68", "Ceramic Shield", "Dual stereo speakers"],
        ratings: {
            average: 4.5,
            reviews: [
                { user: "ChargeMaster", rating: 5, comment: "Fastest charging I've seen" },
                { user: "DesignGuru", rating: 4.5, comment: "Beautiful design" }
            ]
        },
        availability: {
            inStock: true,
            countries: ["Global"],
            launchDate: new Date("2023-12-01")
        }
    },
    {
        id: "VVO-009",
        brand: "Vivo",
        model: "X90 Pro",
        colors: ["Cosmic Black", "Chocolate Brown"],
        price: {
            base: 79999,
            variants: [
                { storage: "256GB", price: 79999 },
                { storage: "512GB", price: 89999 }
            ]
        },
        specifications: {
            display: {
                size: 6.78,
                type: "AMOLED",
                resolution: "2800x1260",
                refreshRate: "120Hz"
            },
            camera: {
                rear: {
                    main: "50MP f/1.57",
                    ultraWide: "48MP f/2.2",
                    telephoto: "64MP f/2.6 (3.5x optical)"
                },
                front: "32MP f/2.5"
            },
            processor: "MediaTek Dimensity 9200 Pro",
            battery: "4870 mAh",
            os: "Android 14 (Funtouch OS 14)",
            connectivity: ["5G", "Wi-Fi 7", "Bluetooth 5.3", "NFC"]
        },
        features: ["Gimbal stabilization", "120W fast charging", "IP54", "Dual tone spotlight"],
        ratings: {
            average: 4.4,
            reviews: [
                { user: "StabilizerPro", rating: 5, comment: "Gimbal is a game changer" },
                { user: "BatteryTester", rating: 4, comment: "Battery decently lasts" }
            ]
        },
        availability: {
            inStock: false,
            countries: ["China", "India"],
            launchDate: new Date("2024-02-27")
        }
    },
    {
        id: "RLM-010",
        brand: "Realme",
        model: "GT Neo5",
        colors: ["Racing Silver", "Velocity Orange"],
        price: {
            base: 29999,
            variants: [
                { storage: "128GB", price: 29999 },
                { storage: "256GB", price: 34999 }
            ]
        },
        specifications: {
            display: {
                size: 6.7,
                type: "AMOLED",
                resolution: "2412x1080",
                refreshRate: "120Hz"
            },
            camera: {
                rear: {
                    main: "50MP f/1.8",
                    ultraWide: "8MP f/2.2",
                    telemacro: "2MP f/2.4"
                },
                front: "16MP f/2.5"
            },
            processor: "MediaTek Dimensity 8200",
            battery: "5000 mAh",
            os: "Android 13 (Realme UI 5.0)",
            connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.3", "NFC"]
        },
        features: ["150W fast charging", "In-display fingerprint", "Dual stereo speakers", "Vibrant design"],
        ratings: {
            average: 4.1,
            reviews: [
                { user: "ChargerFan", rating: 5, comment: "Incredible charging speed" },
                { user: "ValueSeeker", rating: 4, comment: "Good for the price" }
            ]
        },
        availability: {
            inStock: true,
            countries: ["India", "Europe"],
            launchDate: new Date("2023-08-31")
        }
    }
];
