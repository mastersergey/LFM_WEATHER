export const UI_ELEMENTS = {
        SEARCH_FORM: document.querySelector('.box__search'),
        TAB_NOW: {
            TEMPERATURE: document.querySelector('.box__right-temperature'),
            CITY_NAME: document.querySelectorAll('.box__block-title'),
            ICON: document.querySelector('.now__weather-icon'),
            LIKE_BTN: document.querySelector('.box__bottom-btn'),
        },
        TAB_DETAILS: {
            TEMPERATURE: document.querySelector('.temp'),
            FEELS_LIKE: document.querySelector('.feels__like'),
            WEATHER: document.querySelector('.weather'),
            SUNRISE: document.querySelector('.sunrise'),
            SUNSET: document.querySelector('.sunset'),
        },
        TAB_FORECAST: {
            DATE: document.querySelectorAll('.forecast-date'),
            TIME: document.querySelectorAll('.forecast-time'),
            TEMPERATURE: document.querySelectorAll('.forecast-temperature'),
            WEATHER: document.querySelectorAll('.forecast-weather'),
            FEELS_LIKE: document.querySelectorAll('.forecast-feels'),
            ICON: document.querySelectorAll('.forecast-weather-icon'),
        },

        ADDED_LOCATIONS: {
            ITEM: document.getElementById('add__location-item').content,
            LIST:document.querySelector('.box__right-list'),
        },
    }
