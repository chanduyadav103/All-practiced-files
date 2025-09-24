const express = require('express');
const app = express();

app.use(express.json());

const PORT = 3000;
const version = "v1";

const movies = [];

app.get(`/${version}/api/movies`, (req, res) => {
    res.status(200).json({
        message: "Movies fetched successfully",
        movies: movies,
        count: movies.length
    })
})

app.post(`/${version}/api/create-movie`, (req, res) => {
    const movie = req.body;

    movie.id = movies.length + 1;

    movies.push(movie)

    res.status(201).json({
        message: "Movie created successfully",
        movie: movie
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});