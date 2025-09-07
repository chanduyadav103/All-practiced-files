countryNameTag = document.getElementById('countryname')
languageTag = document.getElementById('language')
stockTag = document.getElementById('stocks')
presidentNameTag = document.getElementById('president')
stateInCountryTag = document.getElementById('statesincountry')
countriesListTag = document.getElementById('countrieslists')


function toGetCountry() {

    return JSON.parse(localStorage.getItem('countrieslists')) || [];
}

function toLoadCountry(event) {
    if (event) event.preventDefault();

    const countryname = countryNameTag.value.trim();
    const language = languageTag.value.trim();
    const stocks = stockTag.value.trim();
    const president = presidentNameTag.value.trim();
    const statesincountry = stateInCountryTag.value.trim();

    if (!countryname || !language || !stocks || !president || !statesincountry) {
        alert(' All fields are required!');
        return;
    }
    const countrieslists = toGetCountry()


    const newCountry = {
        id: Date.now(),
        countryname,
        language,
        stocks,
        president,
        statesincountry
    };
    countrieslists.push(newCountry)
    localStorage.setItem('countrieslists', JSON.stringify(countrieslists))
    toDisplayCountries();
    reset();
}





function toDisplayCountries() {
    let countriesTemplate = '';
    const countrieslists = toGetCountry();
    countrieslists.forEach(country => {
        const template = ` <div class="card m-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${country.countryname}</h5>
                <p class="card-text">
                    <strong>Language:</strong> ${country.language}<br>
                    <strong>Stocks:</strong> ${country.stocks}<br>
                    <strong>President:</strong> ${country.president}<br>
                    <strong>States:</strong> ${country.statesincountry}
                </p>
<button class="bg-danger btn rounded-3 border-danger p-2 text-white"
        onclick="deleteCountry(${country.id})">
    Delete
</button>
    <button class=" bg-success btn bg-success border-success rounded-3 p-2 text-white">Update</button>


            </div>
        </div>`;

        countriesTemplate = countriesTemplate + template;

    });
    countriesListTag.innerHTML = countriesTemplate;
}
function deleteCountry(id) {
    let countrieslists = toGetCountry();

    countrieslists = countrieslists.filter(c => c.id !== id);

    localStorage.setItem('countrieslists', JSON.stringify(countrieslists));
    toDisplayCountries();
}



function reset() {
    countryNameTag.value = "";
    languageTag.value = "";
    stockTag.value = "";
    presidentNameTag.value = "";
    stateInCountryTag.value = "";
}
function toReset() {
    localStorage.removeItem('countrieslists');
    toDisplayCountries();

}
function toSearchCountry(event) {
    if (event) event.preventDefault();
    const countrieslists = toGetCountry();

    searchValue = document.getElementById('search').value.trim().toLowerCase();
    filterCountry = countrieslists.filter(c => c.countryname.toLowerCase().includes(searchValue))

    toGetFilteredCountry(filterCountry)

}


function toGetFilteredCountry(filterCountry) {
    let countriesTemplate = '';
    const countrieslists = toGetCountry();
    filterCountry.forEach(country => {
        const template = ` <div class="card m-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${country.countryname}</h5>
                <p class="card-text">
                    <strong>Language:</strong> ${country.language}<br>
                    <strong>Stocks:</strong> ${country.stocks}<br>
                    <strong>President:</strong> ${country.president}<br>
                    <strong>States:</strong> ${country.statesincountry}
                </p>
<button class="bg-danger btn rounded-3 border-danger p-2 border-0 text-white"
        onclick="deleteCountry(${country.id})">
    Delete
</button>
    <button class=" bg-success btn bg-success rounded-2 p-2">Update</button>

            </div>
        </div>`;

        countriesTemplate = countriesTemplate + template;

    });
    countriesListTag.innerHTML = countriesTemplate;
}



toDisplayCountries()