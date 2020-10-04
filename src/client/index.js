import { makeVisible } from './js/makeVisible'
import { handleSubmit } from './js/app'
import { checkDates } from './js/checkDates'

import './styles/colors.scss'
import './styles/layout.scss'
import './styles/main.scss'

const inputSubmit = document.querySelector('#submit');
inputSubmit.addEventListener('click', handleSubmit);

export {
	makeVisible,
	handleSubmit,
	checkDates,
}