import axios from 'axios'
// import { store } from '../index'
const fs = require('fs')


export const REFRESH = 'REFRESH';
export const CHANGEWEATHER = 'CHANGECITY';
export const UPDATED = 'UPDATED';
export const CHANGETEMPFORMAT = 'CHANGETEMPFORMAT';
export const CHANGECITY = 'CHANGECITY';
export const ISCHANGINGCITY = 'ISCHANGINGCITY'
export const SETINPUTVALUE = 'SETINPUTVALUE'

function findCityID(name) {
    return fs.readFile('./weather.city.filtered.json', 'utf-8', (err, data) => {
        if (err) throw new Error('Could not read weather file');
        data = JSON.parse(data)
        return data.filter(city => city.name === name).id;
    });
}

export const refresh = () => ({
    type: REFRESH
});

export const changeCity = (city) => ({
    type: CHANGECITY,
    city
});

export const updated = (response) => ({
    type: UPDATED,
    date: Date.now(),
    response
})

export const isChangingCity = (val) => ({
    type: ISCHANGINGCITY,
    val
})

export const changeWeather = (city, temp, status) => ({
    type: CHANGEWEATHER,
    city,
    temp,
    status
});

export const changeTempFormat = (format = 'celsius') => ({
    type: CHANGETEMPFORMAT,
    format
});

export const setInpVal = (inpVal) => ({
    type: SETINPUTVALUE,
    inpVal
})

export const getWeather = () => (dispatch) => {
    // let cityID = findCityID(getState().weather.weather.city.toLowerCase());
    let cityID = findCityID('jaipur');
    return axios.get(`api.openweathermap.org/data/2.5/weather?id=${cityID}`)
        .then(function(response) {
            dispatch(updated(response));
        })
        // .catch(function(error) {
        //     throw new Error('Error getting data');
        // });
}