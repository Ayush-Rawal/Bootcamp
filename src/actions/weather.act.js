export const REFRESH = 'REFRESH';
export const CHANGEWEATHER = 'CHANGECITY';
export const UPDATED = 'UPDATED';
export const CHANGETEMPFORMAT = 'CHANGETEMPFORMAT';
export const CHANGECITY = 'CHANGECITY';

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

export const updated = () => ({
    type: UPDATED
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

export const getWeather = () => (dispatch) => {
    let cityID = findID(city.toLowerCase);
    return axios.get(`api.openweathermap.org/data/2.5/weather?id=${cityID}`)
        .then(function(response) {
            dispatch(updated());
        })
        // .catch(function(error) {
        //     throw new Error('Error getting data');
        // });
}