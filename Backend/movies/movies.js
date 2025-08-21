const express = require('express');
const app = express();

app.use(express.json());

const PORT = 3000;

const movies = [];

// Get All Movies API
app.get('/v1/api/get-movies', (req, res) => {
    res.status(200).json({
        message: movies.length > 0 ? 'Movies fetched.' : 'No Movies Found.',
        movies: movies,
        count: movies.length
    })
});

// Get Movie By ID
app.get('/v1/api/get-movie/:id', (req, res) => {
    const idToFind = req.params.id;
    const movieToSend = movies.filter(m => m.id == idToFind)[0];
    res.status(200).json({
        message: movieToSend === undefined || movieToSend === null ? 'No Movie Found.' : 'Movie fetched.',
        movie: movieToSend === undefined || movieToSend === null ? {} : movieToSend
    })
});

// Search Movie by name, cast, genre, language, year
app.post('/v1/api/search-movies', (req, res) => {
    const searchFields = req.body;
    let filteredMovies = movies.map(m => m);
    if (searchFields.name) {
        filteredMovies = filteredMovies.filter(m => m.name.toLowerCase().includes(searchFields.name.toLowerCase()));
    }
    if (searchFields.year) {
        filteredMovies = filteredMovies.filter(m => m.release_year >= searchFields.year)
    }
    if (searchFields.genre) {
        filteredMovies = filteredMovies.filter(m => m.genre.toLowerCase().includes(searchFields.genre.toLowerCase()));
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
    })
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

app.listen(PORT, () => {
    console.log('Movies backend app is running on port:' + PORT);
});