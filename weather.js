const APIKEY = '2f93cf2121be130f065ac078017c2a52';
const weatherURL = `http:api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${APIKEY}`

function findID(name) {
    return fs.readFile('./weather.city.filtered.json', 'utf-8', (err, data) => {
        if (err) throw new Error('Could not read weather file');
        data = JSON.parse(data)
        return data.filter(city => city.name === name).id;
    });
}

function getWeather(city) {
    // city = city.toLowerCase();
    let cityID = findID(city.toLowerCase);
    return axios.get(`api.openweathermap.org/data/2.5/weather?id=${cityID}`)
        .then(function(response) {
            return response
        })
        .catch(function(error) {
            throw new Error('Error getting data');
        });
}