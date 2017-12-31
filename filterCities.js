const fs = require('fs');

fs.readFile('./weather.city.list.json', 'utf-8', (err, data) => {
    if (err) return console.error('Error in reading file');
    data = JSON.parse(data);
    data = data.filter(city => city['country'] === 'IN');
    console.log('Filtered data')
    data = data.map(city => Object.assign({}, Object.assign({}, city), { name: city.name.toLowerCase() }));

    fs.writeFile('./weather.city.filtered.json', JSON.stringify(data), err => {
        if (err) return console.log('error in writing');
        console.log('Writing successfull');
    });

});