const express = require('express');
const app = express();
const port = 16000;

const mobiles = [
    {
        id: 1,
        brand: "Apple",
        model: "iPhone 15 Pro Max",
        price: "₹1,59,900",
        features: {
            storage: "256GB",
            ram: "8GB",
            battery: "4422 mAh",
            camera: "48MP + 12MP + 12MP",
            processor: "Apple A17 Pro"
        }
    },
    {
        id: 2,
        brand: "Samsung",
        model: "Galaxy S25 Ultra",
        price: "₹1,29,999",
        features: {
            storage: "512GB",
            ram: "12GB",
            battery: "5000 mAh",
            camera: "200MP + 12MP + 10MP + 10MP",
            processor: "Snapdragon 8 Gen 3"
        }
    },
    {
        id: 3,
        brand: "OnePlus",
        model: "OnePlus 13s",
        price: "₹64,999",
        features: {
            storage: "256GB",
            ram: "12GB",
            battery: "5400 mAh",
            camera: "50MP + 48MP + 64MP",
            processor: "Snapdragon 8 Gen 3"
        }
    },
    {
        id: 4,
        brand: "Xiaomi",
        model: "Xiaomi 14 Ultra",
        price: "₹74,999",
        features: {
            storage: "512GB",
            ram: "16GB",
            battery: "5300 mAh",
            camera: "50MP + 50MP + 50MP + 50MP",
            processor: "Snapdragon 8 Gen 3"
        }
    },
    {
        id: 5,
        brand: "Google",
        model: "Pixel 9 Pro",
        price: "₹1,06,999",
        features: {
            storage: "256GB",
            ram: "12GB",
            battery: "5050 mAh",
            camera: "50MP + 48MP + 48MP",
            processor: "Google Tensor G3"
        }
    },
    {
        id: 6,
        brand: "Realme",
        model: "Realme GT 5 Pro",
        price: "₹39,999",
        features: {
            storage: "256GB",
            ram: "12GB",
            battery: "5400 mAh",
            camera: "50MP + 50MP + 8MP",
            processor: "Snapdragon 8 Gen 3"
        }
    },
    {
        id: 7,
        brand: "Vivo",
        model: "Vivo X100 Pro",
        price: "₹89,999",
        features: {
            storage: "512GB",
            ram: "16GB",
            battery: "5400 mAh",
            camera: "50MP + 50MP + 50MP",
            processor: "MediaTek Dimensity 9300"
        }
    },
    {
        id: 8,
        brand: "Nothing",
        model: "Nothing Phone (2a)",
        price: "₹27,999",
        features: {
            storage: "256GB",
            ram: "12GB",
            battery: "5000 mAh",
            camera: "50MP + 50MP",
            processor: "MediaTek Dimensity 7200 Pro"
        }
    }
];

app.get('/mobiles', (req, res) => {
    res.json(mobiles);
});

app.get('/mobiles/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const mobile = mobiles.find(m => m.id === id);
    res.json(mobile);
});

app.get('/search/:brand', (req, res) => {
    const brandName = req.params.brand.toLowerCase();
    const result = mobiles.filter(m => m.brand.toLowerCase().includes(brandName));
    res.json(result);
});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
