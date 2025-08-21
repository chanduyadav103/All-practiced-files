const express = require("express");
const app = express();
app.use(express.json());

const PORT = 3000;
const version = "v1";
const bikes = [];

app.get(`/${version}/api/get-bike`, (req, res) => {
    res.status(200).json({
        message: "bikes are fetched succesfully",
        bike: bikes,
    });
});

app.post(`/${version}/api/add-bike`, (req, res) => {
    bike = req.body;
    bike.id = bikes.length + 1;
    count = bikes.length + 1;
    bikes.push(bike);
    res.status(200).json({
        message: "The bike are added",
        bike: bike,
    });
});

app.listen(PORT, () => {
    console.log(`My api is working in the localhost:${PORT}`);
});
