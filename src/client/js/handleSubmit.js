const handleSubmit = event => {
	event.preventDefault();

	// POST data to server
	const postData = async ( url = '', data = {} ) => {
		const response = await fetch(url, {
			method: 'POST',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		try {
			const newData = await response.json();
			return newData;
		} catch(error) {
			console.log('error', error);
		}
	};

	// User's desired location for a trip
	const location = document.querySelector('#location').value;
	// User's desired start date of the trip
	const arrivalDate = document.querySelector('#arrivalDate').value;
	// User's desired end date of the trip
	const departureDate = document.querySelector('#departureDate').value;
	// Full Start Date String
	const fullDateStart = new Date(arrivalDate).toDateString();
	// Full End Date String
	const fullDateEnd = new Date(departureDate).toDateString();
	// How soon that desired date is in the number of days
	const checkDates = Client.checkDates(arrivalDate, departureDate);
	// Search result section
	const searchResults = document.querySelector('.trip__view__new').getBoundingClientRect();
	// Primary object
	const trip = {
		Geo: {},
		Weather: {},
		Pixabay: {},
		RESTCountry: {}
	};

	// Display search results in index.html
	const showResults = () => {
		Client.makeVisible();

		const img1 = document.querySelector('#trip__photo1');
		const img2 = document.querySelector('#trip__photo2');
		img1.src = trip.Pixabay.ImageURL1;
		img2.src = trip.Pixabay.ImageURL2;

		const trip_main_content = document.querySelector('.trip__main__content');
		const trip_extra_content = document.querySelector('.trip__extra__content');

		if (trip_main_content.children.length > 0)
		{
			trip_main_content.removeChild(trip_main_content.firstElementChild);
		}
		if (trip_extra_content.children.length > 0)
		{
			trip_extra_content.removeChild(trip_extra_content.firstElementChild);
		}

		// get ul element and assign to trip_main_content_elements variable
		const trip_main_content_elements = Client.addElements([
			{li:'Destination', span:`${location}, ${trip.Geo.Country}`},
			{li:'Start Date', span:fullDateStart},
			{li:'End Date', span:fullDateEnd},
			{li: 'Weather', span:trip.Weather.Des},
			{li: 'Temperature', span:`${trip.Weather.LowTemp} - ${trip.Weather.HighTemp} °C`},
			{li: 'Length of Trip', span:`${checkDates.tripLength} days`}
		]);
		// get ul element and assign to trip_extra_content_elements variable
		const trip_extra_content_elements = Client.addElements([
			{li:'Name', span:trip.RESTCountry.Name},
			{li:'Capital', span:trip.RESTCountry.Capital},
			{li:'Language', span:trip.RESTCountry.Language},
			{li:'Location', span:trip.RESTCountry.Location},
			{li:'Population', span:trip.RESTCountry.Population}
		]);

		// append ul into div
		trip_main_content.appendChild(trip_main_content_elements);
		// append ul into div
		trip_extra_content.appendChild(trip_extra_content_elements);

		window.scrollTo({
			top:searchResults.top,
			left:searchResults.left,
			behavior: 'smooth'
		});
	};

	// Update UI with info
	const updateUI = async () => {
		alert("Please wait for data to be fetched from server!");
		const request = await fetch('http://localhost:3000/getData');
		try{
			const allData = await request.json();
			console.log('Client:: All Data received from server', allData);

			trip.Geo.Country = allData.geoNames.country;
			trip.RESTCountry.Name = allData.restCountries.countryName;
			trip.RESTCountry.Capital = allData.restCountries.countryCapital;
			trip.RESTCountry.Location = allData.restCountries.countryLocation;
			trip.RESTCountry.Population = allData.restCountries.countryPopulation;
			trip.RESTCountry.Language = allData.restCountries.countryLanguage;
			trip.Weather.Des = allData.weatherBit.weatherInfo.description;
			trip.Weather.HighTemp = allData.weatherBit.highTemp;
			trip.Weather.LowTemp = allData.weatherBit.lowTemp;
			trip.Pixabay.ImageURL1 = allData.pixabay.url1;
			trip.Pixabay.ImageURL2 = allData.pixabay.url2;

			showResults();

		}catch(error){
			console.log("error", error);
		}
	};

	console.log('Client:: Form Submitted ::', location, fullDateStart, fullDateEnd);

	// POST-ing data to server
	postData('http://localhost:3000/addData', {city:location, start:arrivalDate, end:departureDate}).then(updateUI());
}

export { handleSubmit }