const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: '*'
}))

app.use(express.json());

const PORT = 3000;

let movies = [];

// Get All Movies API
app.get('/v1/api/get-movies', (req, res) => {
    res.status(200).json({
        message: movies.length > 0 ? 'Movies fetched.' : 'No Movies Found.',
        movies,
        count: movies.length
    })
});

// Get Movie By ID
app.get('/v1/api/get-movie/:id', (req, res) => {
    const { id } = req.params;
    const movieToSend = movies.filter(m => m.id == id)[0];
    res.status(200).json({
        message: movieToSend === undefined || movieToSend === null ? 'No Movie Found.' : 'Movie fetched.',
        movie: movieToSend === undefined || movieToSend === null ? {} : movieToSend
    })
});

// Search Movie by name, cast, genre, language, year
app.post('/v1/api/search-movies', (req, res) => {
    const { name, cast, genre, year } = req.body;
    let filteredMovies = [...movies];

    if (name) {
        filteredMovies = filteredMovies.filter(m => m.name.toLowerCase().includes(name.toLowerCase()));
    }
    if (year) {
        filteredMovies = filteredMovies.filter(m => m.release_year >= year)
    }
    if (genre) {
        filteredMovies = filteredMovies.filter(m => m.genre.toLowerCase().includes(genre.toLowerCase()));
    }
    if (cast) {
        const moviesToFilterByCast = []

        filteredMovies.forEach(m => {
            m.cast.forEach(c => {
                if (c.name.toLowerCase().includes(cast.toLowerCase())) {
                    moviesToFilterByCast.push(m)
                }
            })
        })

        filteredMovies = moviesToFilterByCast.map(m => m)
    }
    res.status(200).json({
        message: filteredMovies.length > 0 ? 'Movies fetched.' : 'No Movies Found.',
        movies: filteredMovies,
        count: filteredMovies.length
    })
});

// Add Movie API
app.post('/v1/api/add-movie', (req, res) => {
    const movieToAdd = req.body;
    movieToAdd.id = movies.length + 1;
    movies.push(movieToAdd);
    res.status(201).json({
        message: 'Movie Added.',
        movie: movieToAdd
    });
});

// Add Movies API - Bulk Upload
app.post('/v1/api/add-movies', (req, res) => {
    const moviesToAdd = req.body;
    for (const movie of moviesToAdd) {
        movie.id = movies.length + 1;
        movies.push(movie);
    }
    res.status(201).json({
        message: 'Movies Added.',
        movies: movies
    })
});

// Update Movie API
app.put('/v1/api/update-movie/:id', (req, res) => {
    const movieToUpdate = req.params.id;
    const movieDataToUpdate = req.body;

    movies.forEach(m => {
        if (m.id == movieToUpdate) {
            for (let key in movieDataToUpdate) {
                m[key] = movieDataToUpdate[key];
            }
        }
    })

    res.status(201).json({
        message: 'Movie Updated.',
        movie: movies[Number(movieToUpdate) - 1]
    })
});

// Delete Movie By ID
app.delete('/v1/api/delete-movie/:id', (req, res) => {
    res.status(200).json({
        message: 'Movie Deleted.',
        movie: {}
    })
});

// Delete Movies By IDs
app.post('/v1/api/delete-movies', (req, res) => {
    res.status(200).json({
        message: 'Movies Deleted.',
        movies: []
    })
});

// Reset Movies API
app.post('/v1/api/reset-movies', (req, res) => {
    const moviesToAdd = req.body;
    movies = [];
    for (const movie of moviesToAdd) {
        movie.id = movies.length + 1;
        movies.push(movie);
    }
    res.status(201).json({
        message: 'Movies Resetted.',
        movies: movies,
        count: movies.length
    })
});

app.listen(PORT, () => {
    console.log('Movies backend app is running on port:' + PORT);
});