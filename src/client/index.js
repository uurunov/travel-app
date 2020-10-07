import { makeVisible } from './js/makeVisible'
import { handleSubmit } from './js/app'
import { checkDates } from './js/checkDates'
import { handleSaveButton } from './js/saveButton'
import { handleRemoveButton } from './js/removeButton'

import './styles/colors.scss'
import './styles/layout.scss'
import './styles/main.scss'
import './styles/fonts.scss'

const inputSubmit = document.querySelector('#submit');
inputSubmit.addEventListener('click', handleSubmit);
const saveButton = document.querySelector('#saveB');
saveButton.addEventListener('click', handleSaveButton);
const removeButton = document.querySelector('.trip__saved');
removeButton.addEventListener('click', handleRemoveButton);

export {
	makeVisible,
	handleSubmit,
	checkDates,
	handleSaveButton,
	handleRemoveButton,
}