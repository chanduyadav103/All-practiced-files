const express = require('express');
const app = express();
const version = "v1";
const bikes = [];
app.use(express.json());



app.get(`/${version}/api/get-bikes`, (req, res) => {
    res.status(200).json({
        message: "fetched all bikes ",
        bikes: bikes
    });
});

app.get(`/${version}/api/get-bikes/id/:id`, (req, res) => {
    const bikeId = parseInt(req.params.id);
    const bike = bikes.filter(b => b.id === bikeId);
    res.status(200).json({
        message: " bike id fetched ",
        bike: bike
    });
});

app.get(`/${version}/api/get-bikes/name/:name`, (req, res) => {
    const bikename = req.params.name.toLowerCase();
    const bike = bikes.filter(b => b.name?.toLowerCase().includes(bikename));
    res.status(200).json({
        message: " bike name fetched ",
        bike: bike
    });
});



app.get(`/${version}/api/get-bikes/brand/:brand`, (req, res) => {
    const bikebrand = req.params.brand.toLowerCase();
    const bike = bikes.filter(b => b.brand.toLowerCase().includes(bikebrand));
    res.status(200).json({
        message: " bike brand fetched ",
        bike: bike
    });
});

app.get(`/${version}/api/get-bikes/model/:model`, (req, res) => {
    const bikemodel = req.params.model.toLowerCase();
    const bike = bikes.filter(b => b.model?.toLowerCase().includes(bikemodel));
    res.status(200).json({
        message: " bike model fetched",
        bike: bike
    });
});

app.get(`/${version}/api/get-bikes/engine/:engine`, (req, res) => {
    const bikeengine = req.params.engine.toLowerCase();
    const bike = bikes.filter(b => b.engine?.toLowerCase().includes(bikeengine));
    res.status(200).json({
        message: " bike engine fetched", bike: bike
    });
});

app.post(`/${version}/api/search-bikes`, (req, res) => {
    const { brand, model, year, color } = req.body;
    let superbikes = bikes;
    if (brand) {
        superbikes = superbikes.filter(b => b.brand.toLowerCase().includes(brand.toLowerCase()));
    }
    if (model) {
        superbikes = superbikes.filter(bike => b.model.toLowerCase().includes(model.toLowerCase()));
    }
    if (year) {
        superbikes = superbikes.filter(b => b.year == year);
    }
    if (color) {
        superbikes = superbikes.filter(b => b.color.toLowerCase().includes(color.toLowerCase())
        );
    }
    res.status(200).json({
        message: "Bike search results retrieved successfully",
        bikes: superbikes,
        count: superbikes.length
    });
});






















const express = require('express');
const app = express();
const version = "v1";

app.use(express.json());

// Sample bikes data
let bikes = [
    { id: 1, brand: "Yamaha", model: "R15", year: 2021, type: "Sport", color: "Blue" },
    { id: 2, brand: "Honda", model: "CBR500R", year: 2020, type: "Sport", color: "Red" },
    { id: 3, brand: "Royal Enfield", model: "Classic 350", year: 2019, type: "Cruiser", color: "Black" }
];

// ✅ Update bike by ID
app.put(`/${version}/api/update-bikes/:id`, (req, res) => {
    const bikeId = parseInt(req.params.id);
    const updatedData = req.body;

    let bike = bikes.filter(b => b.id === bikeId);


    // 🔑 Update only keys that already exist in bike
    for (let key in updatedData) {
        if (key in bike) {
            bike[key] = updatedData[key];
        }
    }

    res.status(200).json({
        message: "Bike updated successfully",
        bike: bike
    });
});



















app.post(`/${version}/api/add-bikes`, (req, res) => {
    const Bikes = req.body;
    for (let bike of Bikes) {
        bike.id = bikes.length + 1;
        bikes.push(bike);
    }

    res.status(201).json({
        message: "many bikes uploaded ",
        bike: Bikes
    });
});

app.listen(3000, () => console.log(" http://localhost:3000"));
