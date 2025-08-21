let movieElement = document.getElementById('movies')
let modalElement = document.getElementById('modalDialog')
let products = [];
function fetchingById(id) {
  fetch('https://fooapi.com/api/' + id)
    .then((resp) => {
      return resp.json()
    })
    .then(response => {

      // openModal(response)

    })
    .catch(error => {
      console.error('Error fetched', error);
    });
}
function fetchingData() {
  fetch('https://fooapi.com/api/movies')
    .then((resp) => {
      return resp.json()
    })
    .then(response => {
      products = response.data || response;
      console.log(products)
      toRenderData()
    })
    .catch(error => {
      console.error('Error fetched', error);
    })
}

function toRenderData() {
  let rendertemplate = '';
  for (let movie of products) {
    let template = `
   <div class="col-sm-6 col-md-3 col-lg-2 mb-3">
            <div class="card h-100">
                <img src="${movie.poster}" 
                     class="card-img-top" alt="${movie.title}" />
                <div class="card-body">
                  <h5 class="card-title">${movie.title}</h5>
                  <p class="card-text">Genre: ${movie.genre}</p>
                  <p class="card-text">Year: ${movie.year}</p>
                  <button type="button" class="btn btn-primary" onclick="openModal(${(movie)})" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch
  </button>
                </div>
            </div>
        </div>
    `
    rendertemplate += template;
  }
  movieElement.innerHTML = rendertemplate;
}
fetchingData();

function openModal(movie) {
  // const movie = {
  //   title: 'Soime title',
  //   poster: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg',
  //   genre: '',
  //   year: 2025
  // };
  // console.log(movie)
  let template = `

    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="kbm">${movie.title}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <img src="${movie.poster}" >
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">${movie.genre}</button>
        <button type="button" class="btn btn-primary">${movie.year}</button>
      </div>
    </div>
`
  modalElement.innerHTML = template;
}