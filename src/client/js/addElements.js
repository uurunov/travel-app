// Creates ul element with search info in it
const addElements = (elements = []) => {
	// Document Fragment
	const myFragment = document.createDocumentFragment();
	const ul = document.createElement('ul');
	for (let element of elements)
	{
		const li = document.createElement('li');
		const span = document.createElement('span');
		span.innerHTML = element.span;
		span.classList.add('results');
		li.innerHTML = `${element.li}: `;
		li.classList.add('bold');
		li.appendChild(span);
		myFragment.appendChild(li);
	}
	ul.appendChild(myFragment);
	ul.classList.add('flex-dir-col');
	return ul;
};

export { addElements }