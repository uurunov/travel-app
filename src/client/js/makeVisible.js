const makeVisible = () => {
	const trip__content = document.querySelector('.trip__content');
	if (trip__content.classList.contains('hidden')) {
		trip__content.classList.remove('hidden');
	}
}

export { makeVisible }