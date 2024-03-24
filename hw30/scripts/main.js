const MESSAGE = "Hi. Please, enter tha name of the city (ex: Lviv, Paris, others)."
const city = window.prompt(MESSAGE, "Lviv");
const appId = window.prompt("Please, add APP_ID.");

const weatherInfo = getWeatherInfoFor(city, appId);
const weatherInfoHTML = prepareWeatherInfoHTML(weatherInfo);
displayOnThePage(weatherInfoHTML);


function getWeatherInfoFor(city, appId) {
    let weatherInfo;

    const xml = new XMLHttpRequest();
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${appId}`;
    xml.open('GET', URL, false);
    xml.onload = (e) => {
        weatherInfo = e.target.response;
    }
    xml.send();

    return JSON.parse(weatherInfo);
}

function prepareWeatherInfoHTML(weatherInfo) {
    return weatherInfo.cod !== 200 ?
        prepareErrorInfoHTML(weatherInfo) :
        prepareSuccessfulInfoHTML(weatherInfo);
}

function prepareErrorInfoHTML(weatherInfo) {
    const errorInfo = JSON.stringify(weatherInfo);

    return `<div class="weather-info">
            <div class="weather-info__header">
                <h2>Weather Info</h2>
            </div>
            
            <div class="weather-info__content">
                <p><b>Error</b>: ${errorInfo}</p>
            </div>
        </div>`;
}

function prepareSuccessfulInfoHTML(weatherInfo) {
    const main = weatherInfo.main;
    const weather = weatherInfo.weather[0];
    const wind = weatherInfo.wind;

    return `<div class="weather-info">
            <div class="weather-info__header">
                <h2>Weather Info</h2>
            </div>
            
            <div class="weather-info__content">
                <p><b>City for which to show the weather</b>: ${weatherInfo.name}</p>
                <p><b>Temperature</b>: ${main.temp}</p>
                <p><b>Pressure</b>: ${main.pressure}</p>
                <p><b>Description</b>: ${weather.description}</p>
                <p><b>Humidity</b>: ${main.humidity}</p>
                <p><b>Wind speed</b>: ${weatherInfo.wind.speed}</p>
                <p><b>Wind direction (in degrees)</b>: ${wind.deg}</p>
                <p><b>Icon code</b>: ${weather.icon}</p>
            </div>
            
            <div class="weather-info__icon">
                <b>Icon:</b>
                <img src="https://openweathermap.org/img/w/${weather.icon}.png" alt="Weather info img">
            </div>
        </div>`;
}


function displayOnThePage(weatherInfoHTML) {
    const main = document.getElementsByTagName('main')[0];
    main.insertAdjacentHTML("beforeend", weatherInfoHTML);
}