function handleSubmit(event) {
	event.preventDefault();

	// User's desired location for a trip
	const location = document.querySelector('#location').value;
	// User's desired date for a trip
	const date = document.querySelector('#date').value;
	// How soon that desired date is in the number of days
	const numDays = Client.checkDates(date);

	console.log('Client:: Form Submitted ::', location, new Date(date).toDateString());

	// POST data to server
	const postData = async ( url = '', data = {} ) => {
		const response = await fetch(url, {
			method: 'POST',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
			},
			// Body data type must match "Content-Type" header
			body: JSON.stringify(data),
		});

		try {
			const newData = await response.json();
			console.log(newData);
			return newData;
		} catch(error) {
			console.log('error', error);
		}
	};

	// POST-ing GeoNames Data to server
	postData('http://localhost:3000/app/addDataToServer', {city:location, time:date});
	// GET-ting data from GeoNames API
	fetch('http://localhost:3000/app/getDataFromServer')
    .then(res => res.text())
    .then(function(resp) {
		console.log('Client:: All Data received from server', resp);
		// UI update: make data visible in html
		// document.getElementById('results').innerHTML = JSON.stringify(resp);
	});
}

export { handleSubmit }