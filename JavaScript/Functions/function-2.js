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

function consoleMobiles() {
    for (let mobile of mobiles) {
        console.log('________________________________')
        for (let key in mobile) {
            if (typeof mobile[key] === 'object' && mobile[key].length === undefined) {
                console.log(`${key}:`);
                const subObj = mobile[key];
                for (let subKey in subObj) {
                    if (typeof subObj[subKey] === 'object' && subObj[subKey].length === undefined) {
                        console.log(`\t${subKey}:`);
                        const innerObj = subObj[subKey]
                        for (let innerKey in innerObj) {
                            console.log(`\t\t${innerKey}: ${innerObj[innerKey]}`);
                        }
                    } else {
                        console.log(`\t${subKey}: ${subObj[subKey]}`);
                    }
                }
            } else {
                console.log(`${key}: ${mobile[key]}`);
            }
        }
    }
}

consoleMobiles()