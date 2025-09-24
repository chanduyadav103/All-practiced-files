const moviesElement = document.getElementById("movies");
const modalElement = document.getElementById("modals");

let movies = [];
function getMovies() {
  fetch("https://fooapi.com/api/movies")
    .then((res) => res.json())
    .then((data) => {

      if (Array.isArray(data)) {
        movies = data;
      } else if (data && Array.isArray(data.movies)) {
        movies = data.movies;
      } else if (data && Array.isArray(data.data)) {
        movies = data.data;
      }

      console.log(movies);

      let movieTemplate = '';
      movies.forEach((movie, index) => {
        const template = `
          <div class="col-md-4 col-sm-6 col-xl-3">
            <div class="card  h-100 shadow-lg">
              <img src="${movie.poster}" class="card-img-top" alt="${movie.title}" style="height: 350px; object-fit: fill;">
              <div class="card-body bg-secondary text-white">
                <h5 class="card-title">${movie.title}</h5>
                <button class="btn btn-danger view-btn" data-bs-toggle="modal" data-bs-target="#movieModal" onclick="createModal(${index})">View</button>
              </div>
            </div>
          </div>`;
        movieTemplate += template;
      });

      moviesElement.innerHTML = movieTemplate;
    });
}



function createModal(movieIndex) {
  const movie = movies.filter((movie, index) => index === movieIndex)[0]
  const modalHTML = `
        <div class="modal-content">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="movieModalLabel">${movie.title}</h5>
            <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-4">
                <img src="${movie.poster}" class="img-fluid h-100 w-100 rounded " alt="${movie.title}">
              </div>
              <div class="col-md-8">
                <p><strong>Year:</strong> ${movie.year}</p>
                <p><strong>Rated:</strong> ${movie.rated}</p>
                <p><strong>Released:</strong> ${movie.released}</p>
                <p><strong>Runtime:</strong> ${movie.runtime}</p>
                <p><strong>Genre:</strong> ${movie.genre}</p>
                <p><strong>Director:</strong> ${movie.director}</p>
                <p><strong>Writer:</strong> ${movie.writer}</p>
                <p><strong>Actors:</strong> ${movie.actors}</p>
                <p><strong>Language:</strong> ${movie.language}</p>
                <p><strong>Country:</strong> ${movie.country}</p>
                <p><strong>Awards:</strong> ${movie.awards}</p>
                <p><strong>IMDB Rating:</strong> ${movie.imdbRating}</p>
                <p><strong>Box Office:</strong> ${movie.boxOffice}</p>
              </div>
            </div>
            <p><strong>Plot:</strong> ${movie.plot}</p>
              <button class="btn btn-danger w-100 " type="button">Buy or Rent</button>
          </div>
        </div>
  `;


  const modalElement = document.getElementById("movieModalDialog");
  modalElement.innerHTML = modalHTML;
}

getMovies();

