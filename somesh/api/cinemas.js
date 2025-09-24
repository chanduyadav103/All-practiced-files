const express = require('express');
const app = express();
const port = 3000;
const version = 'v1';
const cinemas = [];

app.use(express.json())
//adding movies 
app.post(`/${version}/api/cinemas-add`, (req, res) => {
    const cinema = req.body;
    cinema.id = cinemas.length;
    cinemas.push(cinema)
    res.status(201).json({
        message: "cinemas are added",
        cinema: cinema

    })
}
)
//adding more than one cinema at a time
app.post(`/${version}/api/cinemas-badd`, (req, res) => {
    const newcinemas = req.body;
    const addedcinemas = [];
    for (const cinema of newcinemas) {
        cinema.id = cinemas.length;
        cinemas.push(cinema);
        addedcinemas.push(cinema);
    }
    res.status(201).json({
        message: "cinemas are  bulkly added",
        cinemas: addedcinemas

    })


})

//retriving cinemas
app.get(`/${version}/api/cinemas-get`, (req, res) => {
    res.status(200).json({
        message: "cinemas retrived successfully",
        cinemas: cinemas,
        count: cinemas.length
    })
})

//get by id
app.get(`/${version}/api/id-get/:id`, (req, res) => {
    const id = parseInt(req.params.id);
    const cinema = cinemas.filter(c => c.id === id);
    res.status(200).json({
        message: "cinema by id retrived successfully",
        cinema: cinema,
    })
})
//search
app.post(`/${version}/api/search`, (req, res) => {
    const { name, genre, language, cast, release_year } = req.body;

    let filteredcinemas = cinemas;

    if (name) {
        filteredcinemas = filteredcinemas.filter(c =>
            c.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    if (genre) {
        filteredcinemas = filteredcinemas.filter(c =>
            c.genre.toLowerCase().includes(genre.toLowerCase())
        );
    }


    if (language) {
        filteredcinemas = filteredcinemas.filter(c =>
            c.language.toLowerCase().includes(language.toLowerCase())
        );
    }

    if (cast) {
        filteredbycast = cinemas.filter(c =>
            c.cast.filter(member =>
                member.name.toLowerCase().includes(cast.toLowerCase())
            ).length > 0
        );
        filteredbycast = filteredcinemas;
    }


    if (release_year) {
        filteredcinemas = filteredcinemas.filter(c =>
            c.release_year >= release_year
        );
    }


    res.status(200).json({
        message: "search results retrieved successfully",
        cinema: filteredcinemas,
        count: filteredcinemas.length,

    });
});

//update
app.put(`/${version}/api/update/:id`, (req, res) => {
    const movietoupdate = parseInt(req.params.id);
    const moviedata = req.body;
    let cinema = cinemas.filter(c => c.id === movietoupdate)[0];

    if (cinema) {
        for (let key in moviedata) {
            cinema[key] = moviedata[key];
        }
        return res.status(200).json({
            message: "Movie updated successfully",
            cinema: cinema
        });
    }

    res.status(404).json({
        message: "No movie found"
    });
});

//deleting a cinema
app.delete(`/${version}/api/delete/:id`, (req, res) => {
    const id = parseInt(req.params.id);
    const remainingcinemas = cinemas.filter(c => c.id !== id);
    res.status(201).json({
        message: "Cinema deleted successfully",
        cinemas: remainingcinemas,
        count: cinemas.length
    })
})


//deleting multiple ids
app.delete(`/${version}/api/deletes/:ids`, (req, res) => {
    const ids = req.params.ids.split(",").map(id => parseInt(id));
    const remainingcinemas = cinemas.filter(c => !ids.includes(c.id));

    res.status(200).json({
        message: "Cinemas deleted successfully",
        cinemas: remainingcinemas,
        count: remainingcinemas.length
    });
});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});



