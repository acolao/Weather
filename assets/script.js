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
    const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=61b0d86da3e886c7184d7e739f2781d9';

    fetch(weatherApiUrl)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data)
            // create
            let h1El = document.createElement('h1');
            let currentTemp = document.createElement('current-temp');
            let currentWind = document.createElement('wind-speed');
            let currentHumid = document.createElement('humid');
            // add
            h1El.textContent = data.name
            currentTemp.textContent = data.main.temp + '°'
            //sunrise.textContent = data.feels_like


            // append
            weatherContainer.append(h1El)
            weatherContainer.append(currentTemp)
            //weatherContainer.append(sunrise)
        });
};
function getApiTwo(city) {
    const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=61b0d86da3e886c7184d7e739f2781d9';

    fetch(weatherApiUrl)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data)
   //currentWeather
   //const currentTemp = document.getElementById('current-temp')
   //const sunrise = document.getElementById('sunrise')
   //const sunset = document.getElementById('sunset')
   //need to add titles
   //currentTemp.textContent = data.city.temp + '°'
   //cardONE
   const cardOneTemp = document.getElementById('card-temp-one');
   const cardOneWind = document.getElementById('card-wind-one');
   const cardOneDate = document.getElementById('card-date-one');
   const cardOneHumid = document.getElementById('card-humidity-one');
   //need to add titles
   cardOneTemp.textContent = data.list[3].main.temp + '°'
   cardOneWind.textContent = data.list[3].wind.speed
   cardOneDate.textContent = data.list[3].dt_txt
   cardOneHumid.textContent = data.list[3].main.humidity

   //cardTwo
   const cardTwoTemp = document.getElementById('card-temp-two');
   const cardTwoWind = document.getElementById('card-wind-two');
   const cardTwoDate = document.getElementById('card-date-two');
   const cardTwoHumid = document.getElementById('card-humidity-two')
   
   cardTwoTemp.textContent = data.list[6].main.temp + '°'
   cardTwoWind.textContent = data.list[6].wind.speed
   cardTwoDate.textContent = data.list[6].dt_txt//format time
   cardTwoHumid.textContent = data.list[6].main.humidity
   //cardThree
   const cardThreeTemp = document.getElementById('card-temp-three');
   const cardThreeWind = document.getElementById('card-wind-three');
   const cardThreeDate = document.getElementById('card-date-three');
   const cardThreeHumid = document.getElementById('card-humidity-three');
   //need to add titles
   cardThreeTemp.textContent = data.list[14].main.temp + '°'
   cardThreeWind.textContent = data.list[19].wind.speed
   cardThreeDate.textContent = data.list[14].dt_txt//format time
   cardThreeHumid.textContent = data.list[14].main.humidity
   //cardFour
   const cardFourTemp = document.getElementById('card-temp-four');
   const cardFourWind = document.getElementById('card-wind-four');
   const cardFourDate = document.getElementById('card-date-four');
   const cardFourHumid = document.getElementById('card-humidity-four');
   //need to add titles
   cardFourTemp.textContent = data.list[22].main.temp + '°'
   cardFourWind.textContent = data.list[27].wind.speed
   cardFourDate.textContent = data.list[22].dt_txt//format time
   cardFourHumid.textContent = data.list[27].main.humidity
   //cardFive
   const cardFiveTemp = document.getElementById('card-temp-five');
   const cardFiveWind = document.getElementById('card-wind-five');
   const cardFiveDate = document.getElementById('card-date-five');
   const cardFiveHumid = document.getElementById('card-humidity-five');
   //need to add titles
   cardFiveTemp.textContent = data.list[30].main.temp + '°'
   cardFiveWind.textContent = data.list[35].wind.speed
   cardFiveDate.textContent = data.list[30].dt_txt//format time
   cardFiveHumid.textContent = data.list[35].main.humidity
 
        });
};

searchForm.addEventListener('submit' , working)





