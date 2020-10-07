const handleRemoveButton = (event) => {
	const trip_content_saved = document.querySelector('.trip__saved');
	if (event.target.id === "removeB") {
		event.target.closest('article > div').remove();
	}
	if (trip_content_saved.children.length === 0)
	{
		trip_content_saved.innerHTML = "<p>You have not saved any trips so far...</p>";
	}
};

export { handleRemoveButton }