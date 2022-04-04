import { UI_ELEMENTS } from "./view.js";
import { createStorageItem } from "./main.js";
import { RESPONSE } from "./response.js";


export const storage = {
    initializeDate: () => {
        if (localStorage.getItem('list') === null) {
            const favoriteCities = new Set();
            localStorage.setItem('list', JSON.stringify(Array.from(favoriteCities)));
        }
    },
    getFavotiteCities: () => {
        const favoriteCities = localStorage.getItem('list');
        return new Set(JSON.parse(favoriteCities));
    },
    addFavoriteCity: (city) => {
        const favoriteCities = storage.getFavotiteCities();
        favoriteCities.add(city);
        localStorage.setItem('list', JSON.stringify(Array.from(favoriteCities)));
    },
    renderCities: () => {
        const favoriteCities = storage.getFavotiteCities();
        const currentCity = storage.getCurrentCity()
        RESPONSE.MAIN(currentCity);
        RESPONSE.FORECAST(currentCity);
        for (let item of favoriteCities) {
            UI_ELEMENTS.ADDED_LOCATIONS.LIST.append(createStorageItem(item));
        }
        localStorage.setItem('list', JSON.stringify(Array.from(favoriteCities)));
    },
    saveCurrentCity: (city) => {
        localStorage.setItem('current', city);
    },
    getCurrentCity: () => {
        return localStorage.getItem('current');
    }, 
    removeCity: (city) => {
        const favoriteCities = storage.getFavotiteCities();
        favoriteCities.delete(city);
        localStorage.setItem('list', JSON.stringify(Array.from(favoriteCities)));
    }
}




