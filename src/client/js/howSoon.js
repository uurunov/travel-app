function checkDates(desiredDate) {
	const presentDate = new Date().getTime();
	const selectedDate = new Date(desiredDate).getTime();
	const numberOfDays = Math.round((selectedDate - presentDate) / (24 * 3600 * 1000));

	return numberOfDays;
}

export { checkDates }