const checkDates = (sDate, eDate) => {
	const presentDate = new Date().getTime();
	const startDate = new Date(sDate).getTime();
	const endDate = new Date(eDate).getTime();
	const numberOfDays = Math.round((startDate - presentDate) / (24 * 3600 * 1000));
	const lengthOfTrip = Math.round((endDate - startDate) / (24 * 3600 * 1000));
	const result = {daysLeft: numberOfDays, tripLength: lengthOfTrip};

	return result;
}

export { checkDates }