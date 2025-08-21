const { compile } = require("cordova");
const express = require("express");
const app = express();

const PORT = 3000;
const version = "v1";
const countries = [];

app.use(express.json());

app.post(`/${version}/api/add-country`, (req, res) => {
    const country = req.body;
    country.id = countries.length + 1;
    countries.push(country);

    res.status(200).json({
        message: 'This country is added successfully',
        country
    });
});



app.get(`/${version}/api/get-countries`, (req, res) => {
    res.status(200).json({
        message: 'country is fetched succesfully',
        country: countries

    })
})





app.listen(PORT, () => {
    console.log(`This is running on http://localhost:${PORT}`);
});