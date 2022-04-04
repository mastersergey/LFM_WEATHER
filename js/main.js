import {UI_ELEMENTS} from "./view.js";
import {RESPONSE} from './response.js';
import {storage} from './localStorage.js';


storage.renderCities()

function showCityWeather(event) {
    event.preventDefault()
    let inputValue = document.querySelector('.box__search-input').value;
    RESPONSE.MAIN(inputValue);
    RESPONSE.FORECAST(inputValue);
    storage.saveCurrentCity(inputValue);
}


function addLocationToList() {
    const cityName = this.previousElementSibling.textContent
    let addToListItem = UI_ELEMENTS.ADDED_LOCATIONS.ITEM.cloneNode(true).querySelector('li');
    addToListItem.querySelector('.city__name').textContent = cityName;
    try {
        document.querySelectorAll('.city__name').forEach(item => {
            if (cityName === item.textContent) {
                throw new Error(' this city is already added');
            }
        })
        UI_ELEMENTS.ADDED_LOCATIONS.LIST.append(addToListItem);
        storage.addFavoriteCity(cityName);
    } catch(e) {
            alert(e.name + e.message);
    }
}

function favoriteCityActions(event) {
    if (event.target.classList.contains('close__btn')) {
        let cityToRemove = event.target.previousElementSibling.textContent;
        storage.removeCity(cityToRemove);
        event.target.parentElement.remove()
    } else if (event.target.classList.contains('city__name')) {
        RESPONSE.MAIN(event.target.textContent);
        RESPONSE.FORECAST(event.target.textContent);
        storage.saveCurrentCity(event.target.textContent);
    }
}

export function createStorageItem (value) {
    let addToListItem = UI_ELEMENTS.ADDED_LOCATIONS.ITEM.cloneNode(true).querySelector('li');
    addToListItem.querySelector('.city__name').textContent = value;
    return addToListItem;
}



UI_ELEMENTS.ADDED_LOCATIONS.LIST.addEventListener('click', favoriteCityActions)
UI_ELEMENTS.TAB_NOW.LIKE_BTN.addEventListener('click', addLocationToList);
UI_ELEMENTS.SEARCH_FORM.addEventListener('submit', showCityWeather);