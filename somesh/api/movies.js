const express = require('express');
const app = express();
const port = 6000;
const movies = ([
    {
        "id": 1,
        "movieName": "The Avengers",
        "boxOffice": "$1.52B",
        "actors": ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson", "Mark Ruffalo"],
        "releaseDate": "2012-05-04",
        "imdbRating": 8.0
    },
    {
        "id": 2,
        "movieName": "Avengers: Endgame",
        "boxOffice": "$2.79B",
        "actors": ["Robert Downey Jr.", "Chris Evans", "Chris Hemsworth", "Mark Ruffalo", "Scarlett Johansson"],
        "releaseDate": "2019-04-26",
        "imdbRating": 8.4
    },
    {
        "id": 3,
        "movieName": "RRR",
        "boxOffice": "$160M",
        "actors": ["N. T. Rama Rao Jr.", "Ram Charan", "Alia Bhatt", "Ajay Devgn"],
        "releaseDate": "2022-03-25",
        "imdbRating": 8.0
    },
    {
        "id": 4,
        "movieName": "Petta",
        "boxOffice": "$40M",
        "actors": ["Rajinikanth", "Vijay Sethupathi", "Nawazuddin Siddiqui", "Simran", "Trisha Krishnan"],
        "releaseDate": "2019-01-10",
        "imdbRating": 7.2
    },
    {
        "id": 5,
        "movieName": "The Batman",
        "boxOffice": "$772M",
        "actors": ["Robert Pattinson", "Zoë Kravitz", "Paul Dano", "Jeffrey Wright"],
        "releaseDate": "2022-03-04",
        "imdbRating": 7.8
    },
    {
        "id": 6,
        "movieName": "Guntur Kaaram",
        "boxOffice": "$35M",
        "actors": ["Mahesh Babu", "Sreeleela", "Meenakshi Chaudhary", "Ramya Krishnan"],
        "releaseDate": "2024-01-12",
        "imdbRating": 5.4
    },
    {
        "id": 7,
        "movieName": "Saaho",
        "boxOffice": "$67M",
        "actors": ["Prabhas", "Shraddha Kapoor", "Neil Nitin Mukesh", "Jackie Shroff"],
        "releaseDate": "2019-08-30",
        "imdbRating": 5.0
    }
]);

app.get('/movies', (req, res) => {
    res.send(movies);
});



app.get('/movies/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const movie = movies.find(m => m.id === id);
    res.json(movie);
});

app.get('/search/:moviename', (req, res) => {
    const searchName = req.params.movieName.toLowerCase();
    const result = movies.filter(m => m.movieName.toLowerCase().includes(searchName));
    res.json(result);
});


app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
