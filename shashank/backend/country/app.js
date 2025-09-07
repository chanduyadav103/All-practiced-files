
const express = require("express")
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


app.delete(`/${version}/api/delete/:id`, (req, res) => {
    deleteId = parseInt(req.params.id);
    index = countries.filter(c => c.id === deleteId)[0]

    if (index) {
        remainingcountries = countries.filter(c => c.id !== deleteId)

        countries.forEach((c, i) => {
            c.id = i + 1
        })
        res.status(200).json({
            deletedcontry: index,
            remainingcountries: remainingcountries
        })
    } else {
        res.status(404).json({
            message: "Country not found"
        });
    }
})



app.get(`/${version}/api/search`, (req, res) => {
    const { country_name, language, stocks, president, states_in_country } = req.query
    searchCounrty = countries.filter(c =>
        country_name && c.country_name.toLowerCase() === country_name.toLowerCase() ||
        language && c.language.toLowerCase() === language.toLowerCase() ||
        stocks && c.stocks.map(s => s.toLowerCase() === stocks.toLowerCase()) ||
        president && c.president.toLowerCase() === president.toLowerCase() ||
        states_in_country && c.states_in_country.map(sc => sc.toLowerCase() === states_in_country.toLowerCase())


    )

    if (searchCounrty.length > 0) {
        res.json(searchCounrty)
    } else {
        res.status(404).json({
            message: 'the feild is not found'
        })
    }
})


app.post(`/${version}/api/update/:id`, (req, res) => {
    const updateId = parseInt(req.params.id);
    const newData = req.body;

    let country = countries.filter(c => c.id === updateId)[0];

    if (country) {
        for (let key in newData) {

            country[key] = newData[key];

        }

        res.status(200).json({

            message: "Country updated successfully",
            country: country,
            countries: countries
        });
    } else {
        res.status(404).json({
            message: "Country not found"
        });
    }
});

app.post(`/${version}/api/add-countries`, (req, res) => {
    const getCountries = req.body;
    newid = countries.length + 1


    getCountries.forEach(country => {
        countries.push({ country, id: newid });
        newid++;

    });
    count = countries.length

    res.json({
        message: "Countries added successfully",
        countries: countries,
        count: count

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