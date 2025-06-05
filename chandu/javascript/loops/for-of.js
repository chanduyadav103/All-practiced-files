
let movies = [
    {
        title: "RRR",
        director: "S.S. Rajamouli",
        year: 2022,
        genre: "Action",
        rating: 8.0,
        language: "Telugu",
        duration: "187 min",
        actors: ["N.T. Rama Rao Jr.", "Ram Charan"],
        oscar: true
    },
    {
        title: "Pathaan",
        director: "Siddharth Anand",
        year: 2023,
        genre: "Action",
        rating: 7.5,
        language: "Hindi",
        duration: "146 min",
        actors: ["Shah Rukh Khan", "Deepika Padukone"],
        oscar: false
    },
    {
        title: "Kantara",
        director: "Rishab Shetty",
        year: 2022,
        genre: "Drama",
        rating: 8.2,
        language: "Kannada",
        duration: "150 min",
        actors: ["Rishab Shetty", "Sapthami Gowda"],
        oscar: false
    },
    {
        title: "Dangal",
        director: "Nitesh Tiwari",
        year: 2016,
        genre: "Biographical",
        rating: 8.8,
        language: "Hindi",
        duration: "161 min",
        actors: ["Aamir Khan", "Sakshi Tanwar"],
        oscar: false
    },
    {
        title: "Baahubali 2",
        director: "S.S. Rajamouli",
        year: 2017,
        genre: "Action",
        rating: 8.2,
        language: "Telugu",
        duration: "167 min",
        actors: ["Prabhas", "Rana Daggubati"],
        oscar: false
    },
    {
        title: "3 Idiots",
        director: "Rajkumar Hirani",
        year: 2009,
        genre: "Comedy",
        rating: 8.4,
        language: "Hindi",
        duration: "170 min",
        actors: ["Aamir Khan", "Madhavan"],
        oscar: false
    },
    {
        title: "Lagaan",
        director: "Ashutosh Gowariker",
        year: 2001,
        genre: "Drama",
        rating: 8.1,
        language: "Hindi",
        duration: "224 min",
        actors: ["Aamir Khan", "Gracy Singh"],
        oscar: true
    },
    {
        title: "Drishyam",
        director: "Nishikant Kamat",
        year: 2015,
        genre: "Thriller",
        rating: 8.2,
        language: "Hindi",
        duration: "163 min",
        actors: ["Ajay Devgn", "Tabu"],
        oscar: false
    },
    {
        title: "Andhadhun",
        director: "Sriram Raghavan",
        year: 2018,
        genre: "Thriller",
        rating: 8.3,
        language: "Hindi",
        duration: "139 min",
        actors: ["Ayushmann Khurrana", "Tabu"],
        oscar: false
    },
    {
        title: "PK",
        director: "Rajkumar Hirani",
        year: 2014,
        genre: "Comedy",
        rating: 8.1,
        language: "Hindi",
        duration: "153 min",
        actors: ["Aamir Khan", "Anushka Sharma"],
        oscar: false
    }
];
for (let movie of movies) {
    console.log(`Title: ${movie.title}, Directed by: ${movie.director}`);
    console.log("--------------------------------------")
}



//---------------------------------------------------------------------------

for (let movie of movies) {
    if (movie.oscar === true) {
        console.log(`Oscar Winner: ${movie.title}`);
    }
}