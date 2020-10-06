const handleRemoveButton = () => {
	const trip_content_saved = document.querySelector('.trip__saved');
	trip_content_saved.innerHTML = "<p>You have not saved any trips so far...</p>";
};

export { handleRemoveButton }