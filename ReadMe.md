# Travel Planner App

## Project Overview
This is a travel that requires to pull in multiple types of data from different sources, and occasionally one API will be required to get data from another API. The project will include a simple form where you enter the location you are traveling to and the date you are leaving. If the trip is within a week, you will get the current weather forecast. If the trip is in the future, you will get a predicted forecast. The OpenWeather API is acceptable but it doesn’t let you get future data for free, so the Weatherbit API is used to get weather info in the project. Weatherbit API only takes in coordinates for weather data, hence those coordinates are taken from the Geonames API. Once the project has all of this data, it displays all related information along with an image of the location entered gotten from Pixabay API.

## Specifications

### Development Environment and Architecture
- The project has a proper directory structure.
- The app successfully renders a home page with clear design and functionality added when index.html is loaded in the browser.
- No errors display in console.
- Webpack config contains 4 scripts: express server, production build, development build, and test.
- The project has service workers installed successfully.

### HTML & CSS
- All features are usable across modern desktop, tablet, and phone browsers.
- The UI is beautifully designed. It is mobile friendly.
- Styling is set up in a logical way. All interactive elements have hover states.
- Buttons have hover states and are getting highlighted when the mouse hovers over them.
- HTML structure is indented properly with classes and ID’s that make sense.

### API and JS Integration
- The express server is set up correctly.
- The server handles all the requests made by the app without any issue. No error was produced during testing.
- API keys for Geonames, Weatherbit, and Pixabay are created, used, and stored in the git ignore file for safety purposes.
- REST Countries API is integrated to pull in data for the country being visited.

### App dependencies
The project is developed using:

	- Node/Express server
	- Webpack
	- Service Workers
	- Jest/Supertest
	- Environment Variables
	- Sass
	- CSS Flexbox Layout
	- CSS Grid Layout
	- others

### Instructions

1. Create node_modules folder by running the following command: `npm install`

2. To start the project, run the following command: `npm start`

3. To test the project, run the following command: `npm test`

4. To build the project, there are 2 modes or environments:

- For production environment, run the following command: `npm run build`
- For development environment, run the following command: `npm run dev`

## Contact Details
- Email: ulugbekurunov1997@gmail.com 
- LinkedIn: https://linkedin.com/in/uurunov



