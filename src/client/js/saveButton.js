const handleSaveButton = () => {
	alert("Saved Successfully!");
	const trip_content_saved = document.querySelector('.trip__saved');
	const trip_saved = trip_content_saved.getBoundingClientRect();

	const addSavedTrip = (pict, mText, exText) => {
		const newTrip = document.createElement('div');
		newTrip.innerHTML =
		`<div class="trip__saved__main">${mText}</div>
		<div class="trip__saved__extra">${exText}</div>
		<figure class="trip__saved__figure">
			<img id="trip__saved__pic" src="${pict}" alt="Destination picture">
		</figure>
		<div class="trip__saved__func">
			<button id="removeB" type="reset">Remove</button>
		</div>`;
		newTrip.classList.add('trip__saved_flex');
		return newTrip;
	};

	const pic = document.querySelector('#trip__photo1').src;
	const main = document.querySelector('.trip__main__content').innerHTML;
	const extra = document.querySelector('.trip__extra__content').innerHTML;
	const trip_new = addSavedTrip(pic, main, extra);

	if (trip_content_saved.firstElementChild.nodeName === "P")
	{
		trip_content_saved.firstElementChild.remove();
	}

	trip_content_saved.appendChild(trip_new);
	window.scrollTo({
		top:trip_saved.top,
		left:trip_saved.left,
		behavior: 'smooth'
	});
};

export { handleSaveButton }