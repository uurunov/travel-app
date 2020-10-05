import { makeVisible } from './js/makeVisible'
import { handleSubmit } from './js/app'
import { checkDates } from './js/checkDates'
import { handleSaveButton } from './js/saveButton'
import { handleClearButton } from './js/clearButton'

import './styles/colors.scss'
import './styles/layout.scss'
import './styles/main.scss'

const inputSubmit = document.querySelector('#submit');
inputSubmit.addEventListener('click', handleSubmit);
const saveButton = document.querySelector('#saveB');
saveButton.addEventListener('click', handleSaveButton);
const cancelButton = document.querySelector('#clearB');
cancelButton.addEventListener('click', handleClearButton);

export {
	makeVisible,
	handleSubmit,
	checkDates,
	handleSaveButton,
	handleClearButton
}