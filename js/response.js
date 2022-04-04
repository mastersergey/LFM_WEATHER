import {UI_ELEMENTS} from './view.js'

function getTime(value) {
    const date = new Date(value * 1000);
    let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return `${hours}:${minutes}`;
}

function getDate() {
    return new Date().toLocaleString('en', { month: 'long', day: 'numeric' });;
}

export const URL = {
    MAIN: function(value) {
        const serverUrl = 'https://api.openweathermap.org/data/2.5/weather';
        const cityName = value;
        const apiKey = '5defb8581efa3988a86dfe88e4c85e8e';
        const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
        return url;
    },
    FORECAST: function(value) {
        const serverUrl = 'https://api.openweathermap.org/data/2.5/forecast';
        const cityName = value;
        const timestampsNum = 4;
        const apiKey = '5defb8581efa3988a86dfe88e4c85e8e';
        const url = `${serverUrl}?q=${cityName}&cnt=${timestampsNum}&appid=${apiKey}&units=metric`
        return url;
    },
}

export const RESPONSE = {
    MAIN: async (value) => {
        try {
        let response = await fetch(URL.MAIN(value))
        let city = await response.json()    
        const iconUrl = `https://openweathermap.org/img/wn/${city.weather[0].icon}@4x.png`;
        let data = {
             temperature: city.main.temp,
            name: city.name,
            weather: city.weather[0].main,
            feels_like: city.main.feels_like,
            sunrise: city.sys.sunrise,
            sunset: city.sys.sunset,
        };
        let { temperature, name, weather, feels_like, sunrise, sunset } = data;
        UI_ELEMENTS.TAB_NOW.CITY_NAME.forEach(item => item.textContent = name);
        UI_ELEMENTS.TAB_NOW.TEMPERATURE.textContent = temperature;
        UI_ELEMENTS.TAB_NOW.ICON.src = iconUrl;
        UI_ELEMENTS.TAB_DETAILS.TEMPERATURE.textContent = temperature;
        UI_ELEMENTS.TAB_DETAILS.FEELS_LIKE.textContent = feels_like;
        UI_ELEMENTS.TAB_DETAILS.WEATHER.textContent = weather;
        UI_ELEMENTS.TAB_DETAILS.SUNRISE.textContent = getTime(sunrise);
        UI_ELEMENTS.TAB_DETAILS.SUNSET.textContent = getTime(sunset);   
        } catch (error) {
            alert (error);
        }
    },
    FORECAST: async (value) => {
        try {
                let response = await fetch(URL.FORECAST(value));
            let forecast = await response.json();
            for (let pos = 0; pos <= 3; pos++) {
                const temperature = `Temperature: ${forecast.list[pos].main.temp}`;
                const feelsLike = `Feels like: ${forecast.list[pos].main.feels_like}`;
                const iconUrl = `http://openweathermap.org/img/wn/${forecast.list[pos].weather[0].icon}.png`;
                UI_ELEMENTS.TAB_FORECAST.DATE[pos].textContent = getDate();
                UI_ELEMENTS.TAB_FORECAST.TIME[pos].textContent = getTime(forecast.list[pos].dt);
                UI_ELEMENTS.TAB_FORECAST.TEMPERATURE[pos].textContent = temperature;
                UI_ELEMENTS.TAB_FORECAST.WEATHER[pos].textContent = forecast.list[pos].weather[0].main;
                UI_ELEMENTS.TAB_FORECAST.FEELS_LIKE[pos].textContent = feelsLike;
                UI_ELEMENTS.TAB_FORECAST.ICON[pos].src = iconUrl;
            }
        } catch(error) {
            alert(error);
        }   
    },    
}
