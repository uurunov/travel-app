import { toggleInvisibility } from './js/makeHidden'
import { handleSubmit } from './js/formHandler'
import { checkDates } from './js/howSoon'

import './styles/colors.scss'
import './styles/layout.scss'
import './styles/main.scss'

document.addEventListener('DOMContentLoaded', toggleInvisibility);
const inputSubmit = document.querySelector('#submit');
inputSubmit.addEventListener('click', handleSubmit);

export {
	toggleInvisibility,
	handleSubmit,
	checkDates,
}