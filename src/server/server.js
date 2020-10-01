const dotenv = require('dotenv');
const GeoNameUserName = dotenv.config().parsed.GEONAMES_KEY;
const WeatherBitKey = dotenv.config().parsed.WEATHER_API_KEY;
const PixabayKey = dotenv.config().parsed.PIXABAY_API_KEY;
const fetch = require("node-fetch");

/* Setup empty JS object to act as endpoint for all routes */
const Data = {
	// Client data
	client: {},
	// API data
	api: {}
};

const path = require('path');

/* Require Express to run server and routes */
const express = require('express');

/* Middleware*/
const body_parser = require('body-parser');
const cors = require('cors');

/* Start up an instance of app */
const app = express();

/* Here we are configuring express to use body-parser as middle-ware */
app.use(body_parser.urlencoded({extended:false}));
app.use(body_parser.json());

/* Cors for cross origin allowance */
app.use(cors());

/* Setup Server */
const port = 3000;
const server = app.listen(port, listening);

function listening(){
	console.log(`Server is running on port ${port}`);
}

/* Initialize the main project folder. Starts looking up the entered directory from root */
app.use(express.static('dist'));

/* GET Route */
app.get('/', (request, response) => {
	response.sendFile('dist/index.html');
});

/* POST Route */
app.post('/app/addDataToServer', (request, response) => {
	console.log('Server: Data is received from client');
	Data.client['location'] = request.body.city;
	Data.client['date'] = request.body.time;
});

/* Function to GET Web API Data*/
const getDataAPI = async function (URL) {
	const apiData = await fetch(URL);
	try {
		const response = await apiData.json();
		return response;
	}
	catch(error) {
		console.log('Error has occurred:');
		console.log(error);
	}
}

/* GET Route */
app.get('/app/getDataFromServer', (request, response) => {

	// link to GeoNames API
	const geoNamesLink = `http://api.geonames.org/searchJSON?q=${Data.client.location}&maxRows=1&username=${GeoNameUserName}`;

	getDataAPI(geoNamesLink).then(function(resp){
		console.log('Server:: Data from GeoNames API RECEIVED ::');
		Data.api['lon'] = resp.geonames[0].lng;
		Data.api['lat'] = resp.geonames[0].lat;
		Data.api['country'] = resp.geonames[0].countryName;
	});

	// link to WeatherBit API
	const weatherLink = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${Data.api.lat}&lon=${Data.api.lon}&days=1&key=${WeatherBitKey}`;

	getDataAPI(weatherLink).then(function(res){
		console.log('Server:: Data from WeatherBit API RECEIVED ::');
		Data.api['low_temp'] = res.data[0].low_temp;	// Low Temperature
		Data.api['high_temp'] = res.data[0].high_temp;	// High Temperature
		Data.api['weather'] = res.data[0].weather;	// {"icon":"some-value","code":some-value,"description":"some-value"}
	});

	// link to Pixabay API
	const tripLocation = encodeURIComponent(Data.client.location);
	const pixabayLink = `https://pixabay.com/api/?key=${PixabayKey}&q=${tripLocation}&image_type=photo&orientation=horizontal`;

	getDataAPI(pixabayLink).then(function(res){
		console.log('Server:: Data from Pixabay API RECEIVED ::');
		Data.api['destination_image'] = res.hits[0].webformatURL;	// webformatURL of an image. Below is an example of it:
		// https://pixabay.com/get/57e7d7464b55af14f1dc846096293f7b173fd6e7554c704f752e7ed1954ecc5b_640.jpg
	});

	// Sending data (country, low_temp, high_temp, weather, destination_image) to the client
	console.log('Server:: Data is sending to the client ::', Data);
	response.send(Data);
});

