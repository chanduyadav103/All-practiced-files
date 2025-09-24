const express = require('express');
const app = express();
const port = 3000;
const version = 'v1';
const bikes = [];

app.use(express.json())
app.post(`/${version}/api/bike-add`, (req, res) => {
    const bike = req.body;
    bike.id = bikes.length;
    bikes.push(bike)
    res.status(201).json({
        message: "bike data successfully added",
        bike: bike,


    })

}
)
app.get(`/${version}/api/bike-get`, (req, res) => {
    res.status(200).json({
        message: "bike data successfully retrived",
        bikes: bikes,
        count: bikes.length


    })
})






app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
