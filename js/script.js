
fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(res => getCountryDispaly(res))


const getCountryDispaly = data => {
    const countryDispaly = document.getElementById('country-display');
    for (let country of data) {
        //console.log(country.flag);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('card'); 
        countryDiv.innerHTML = `
            <img src="${country.flag}" class="card-img-top img" alt="${country.name}">
            <div class="card-body">
                <h5 class="card-title">${country.name}</h5>
                <a href="#" class="btn btn-primary" id="details" onclick="getDetailsCountry('${country.name}')">Details</a>
            </div>
        `;

        countryDispaly.appendChild(countryDiv);
    }
}


const getDetailsCountry = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`

    fetch(url)
        .then(response => response.json())
        .then(res => getDetails(res[0]))

}

const getDetails = dad => {
    const display1 = document.getElementById('display');
    display1.textContent = '';
    const dispalyDiv = document.createElement('div');

    dispalyDiv.classList.add('card');
    dispalyDiv.innerHTML = `
 
    <img src="${dad.flag}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${dad.name}</h5>
      <p class="card-text">population : ${dad.population}</p>
    </div>

    `;
    display1.appendChild(dispalyDiv);

}



