import React from 'react'
import PropTypes from 'prop-types'
import {OpenWeatherMap} from 'react-weather'

// const fs = require('fs');

const APIKEY = '2f93cf2121be130f065ac078017c2a52';
const weatherURL = `http:api.openweathermap.org/data/2.5/weather?id=${cityID}`

function findID(name) {
     return fs.readFile('./weather.city.filtered.json', 'utf-8', (err, data) => {
        if (err) throw new Error('Could not read weather file');
        data = JSON.parse(data)
        return data.filter(city => city.name === name).id;
	});
}

const getWeather = city {
    city = city.toLowerCase();
    const cityID = findID(city);
    axios.get(weatherURL)
        .then(function(response) {
			<
        })
        .catch(function(error) {
            console.log(error);
        });
}

Weather.propTypes = {
	city:PropTypes.string.isRequired
}

export default Weather