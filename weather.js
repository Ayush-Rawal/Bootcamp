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
    city = city.toLowerCase();
    let cityID = findID(city);
    axios.get(`api.openweathermap.org/data/2.5/weather?id=${cityID}`)
        .then(function(response) {

        })
        .catch(function(error) {
            console.log(error);
        });
}

<div id = "openweathermap-widget-31"> </div> 
<script src = '//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js' > < /script>
	<script>window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
		  window.myWidgetParam.push({id: 31,cityid: '1269515',appid: '2f93cf2121be130f065ac078017c2a52',units: 'metric',containerid: 'openweathermap-widget-31',  });
	  (function() {var script = document.createElement('script');
	script.async = true;script.charset = "utf-8";
	script.src = "/ / openweathermap.org / themes / openweathermap / assets / vendor / owm / js / weather - widget - generator.js ";
	var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();</script>