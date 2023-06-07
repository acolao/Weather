let searchForm = document.getElementById('search-form');
let citySearch = document.getElementById('search-input');
let weatherContainer = document.getElementById('weather');

// when the search button is clicked we need to capture the value of the input. that value is what is sent to the url as the city

function working(event) {
    event.preventDefault()
    const city = citySearch.value

    getApi(city);
    getApiTwo(city)
}

function getApi(city) {
    const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=61b0d86da3e886c7184d7e739f2781d9';

    fetch(weatherApiUrl)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data)
            // create
            let h1El = document.createElement('h1')

            // add
            h1El.textContent = data.name


            // append
            weatherContainer.append(h1El)
        });
};
function getApiTwo(city) {
    const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=61b0d86da3e886c7184d7e739f2781d9';

    fetch(weatherApiUrl)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data)
   //cardONE
   const cardOneMaxTemp = document.getElementById('card-max-temp-one');
   const cardOneMinTemp = document.getElementById('card-min-temp-one');
   const cardOneDate = document.getElementById('card-date-one');
   //need to add titles
   cardOneMinTemp.textContent = data.list[0].main.temp_min + '°'
   cardOneMaxTemp.textContent = data.list[3].main.temp_max + '°'
   cardOneDate.textContent = data.list[0].dt_txt//format time

   //cardTwo
   const cardTwoMaxTemp = document.getElementById('card-max-temp-two');
   const cardTwoMinTemp = document.getElementById('card-min-temp-two');
   const cardTwoDate = document.getElementById('card-date-two');
   //need to add titles
   cardTwoMinTemp.textContent = data.list[6].main.temp_min + '°'
   cardTwoMaxTemp.textContent = data.list[11].main.temp_max + '°'
   cardTwoDate.textContent = data.list[6].dt_txt//format time
   //cardThree
   const cardThreeMaxTemp = document.getElementById('card-max-temp-three');
   const cardThreeMinTemp = document.getElementById('card-min-temp-three');
   const cardThreeDate = document.getElementById('card-date-three');
   //need to add titles
   cardThreeMinTemp.textContent = data.list[14].main.temp_min + '°'
   cardThreeMaxTemp.textContent = data.list[19].main.temp_max + '°'
   cardThreeDate.textContent = data.list[14].dt_txt//format time
   //cardFour
   const cardFourMaxTemp = document.getElementById('card-max-temp-four');
   const cardFourMinTemp = document.getElementById('card-min-temp-four');
   const cardFourDate = document.getElementById('card-date-four');
   //need to add titles
   cardFourMinTemp.textContent = data.list[22].main.temp_min + '°'
   cardFourMaxTemp.textContent = data.list[27].main.temp_max + '°'
   cardFourDate.textContent = data.list[22].dt_txt//format time
   //cardFive
   const cardFiveMaxTemp = document.getElementById('card-max-temp-five');
   const cardFiveMinTemp = document.getElementById('card-min-temp-five');
   const cardFiveDate = document.getElementById('card-date-five');
   //need to add titles
   cardFiveMinTemp.textContent = data.list[30].main.temp_min + '°'
   cardFiveMaxTemp.textContent = data.list[35].main.temp_max + '°'
   cardFiveDate.textContent = data.list[30].dt_txt//format time
 
        });
};

searchForm.addEventListener('submit' , working)





