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
	// User's desired date for a trip
	const date = document.querySelector('#date').value;
	// Full Data String
	const fullDate = new Date(date).toDateString();
	// How soon that desired date is in the number of days
	const numDays = Client.checkDates(date);
	// Document Fragment
	const myFragment = document.createDocumentFragment();
	// Primary object
	const trip = {
		Geo: {},
		Weather: {},
		Pixabay: {},
		RESTCountry: {}
	};

	// Creates ul element with search info in it
	const addElements = (elements = []) => {
		const ul = document.createElement('ul');
		for (let element of elements)
		{
			const li = document.createElement('li');
			const span = document.createElement('span');
			span.innerHTML = element.span;
			span.classList.add('results');
			li.innerHTML = `${element.li}: `;
			li.appendChild(span);
			myFragment.appendChild(li);
		}
		ul.appendChild(myFragment);
		ul.classList.add('flex-dir-col');
		return ul;
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
		const trip_main_content_elements = addElements([
			{li:'Destination', span:`${location}, ${trip.Geo.Country}`},
			{li:'Date', span:fullDate},
			{li: 'Weather', span:trip.Weather.Des},
			{li: 'High', span:trip.Weather.HighTemp},
			{li: 'Low', span:trip.Weather.LowTemp}
		]);
		// get ul element and assign to trip_extra_content_elements variable
		const trip_extra_content_elements = addElements([
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
	};

	// Update UI with info
	const updateUI = async () => {
		alert("Fetching Data From Server... Please wait!");
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

			setTimeout(() => showResults(), 3000);

		}catch(error){
			console.log("error", error);
		}
	};

	console.log('Client:: Form Submitted ::', location, fullDate);

	// POST-ing data to server
	postData('http://localhost:3000/addData', {city:location, time:date}).then(updateUI());
}

export { handleSubmit }