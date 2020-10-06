const dotenv = require('dotenv');
const GeoNameUserName = dotenv.config().parsed.GEONAMES_KEY;
const WeatherBitKey = dotenv.config().parsed.WEATHER_API_KEY;
const PixabayKey = dotenv.config().parsed.PIXABAY_API_KEY;
const fetch = require("node-fetch");

/* Setup empty JS object to act as endpoint for all routes */
const Data = {
	client: {},
	geoNames: {},
	weatherBit: {},
	pixabay: {},
	restCountries: {}
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

/* Initialize the main project folder. Starts looking up the entered directory from root */
app.use(express.static('dist'));

/* Function to GET Web API Data*/
const getDataAPI = async function (URL) {
	const apiData = await fetch(URL);
	try {
		const response = await apiData.json();
		return response;
	}
	catch(error) {
		console.log('Error has occurred:', error);
	}
};

/* Setup Server */
const port = 3000;
const server = app.listen(port, listening);

function listening(){
	console.log(`Server is running on port ${port}`);
}

/* GET Route */
app.get('/', (request, response) => {
	response.sendFile('dist/index.html');
});

/* POST Route Declaration */
const addData = (req, res) => {
	const client = {
		location: req.body.city,
		startDate: req.body.start,
		endDate: req.body.end
	};
	Data.client = client;
	console.log(Data);
	console.log('Server: Data is received from client');
};

/* POST Route */
app.post('/addData', addData);

/* GET Route Declaration */
const getData = (request, response) => {

	// link to Pixabay API
	const tripLocation = encodeURIComponent(Data.client.location);
	const pixabayLink = `https://pixabay.com/api/?key=${PixabayKey}&q=${tripLocation}&image_type=photo&orientation=horizontal`;

	getDataAPI(pixabayLink).then(DataNew => {
		const photo = {
			url1: DataNew.hits[0].previewURL,
			url2: DataNew.hits[1].previewURL
		};
		Data.pixabay = photo;
		console.log('Server:: Data from Pixabay API RECEIVED ::');
	}).then(() => {
		// link to GeoNames API
		const geoNamesLink = `http://api.geonames.org/searchJSON?q=${Data.client.location}&maxRows=1&username=${GeoNameUserName}`;
		getDataAPI(geoNamesLink).then(data => {
			const geo = {
				longitude: data.geonames[0].lng,
				latitude: data.geonames[0].lat,
				country: data.geonames[0].countryName
			};
			Data.geoNames = geo;
			console.log('Server:: Data from GeoNames API RECEIVED ::');

			// link to REST Countries API
			const RestCountryLink = `https://restcountries.eu/rest/v2/name/${Data.geoNames.country}?fullText=true`;
			getDataAPI(RestCountryLink).then(LastData => {
				const countryInfo = {
					countryName: LastData[0].altSpellings[1],
					countryCapital: LastData[0].capital,
					countryLocation: LastData[0].subregion,
					countryPopulation: LastData[0].population,
					countryLanguage: LastData[0].languages[0].nativeName
				};
				Data.restCountries = countryInfo;
				console.log('Server:: Data from REST Countries API RECEIVED ::');

				// link to WeatherBit API
				const weatherLink = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${Data.geoNames.latitude}&lon=${Data.geoNames.longitude}&days=1&key=${WeatherBitKey}`;
				getDataAPI(weatherLink).then(newData => {
					const weather = {
						lowTemp: newData.data[0].low_temp,
						highTemp: newData.data[0].high_temp,
						weatherInfo: newData.data[0].weather
					};
					Data.weatherBit = weather;
					console.log('Server:: Data from WeatherBit API RECEIVED ::');

					// Sending data (country, low_temp, high_temp, weather info, image_url) to the client
					response.send(Data);
					console.log('Server:: Data is sending to the client ::', Data);
				});
			});
		});
	});
};

/* GET Route */
app.get('/getData', getData);