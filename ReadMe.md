# Travel Planner App


## Project Overview
Simple travel app that enables a user to plan a trip. The app prompts to enter desired location for the trip, and dates which specify start&end time of the trip. Then, 'Add Trip' button is pressed.

According to the user's entries, appropriate travel information is displayed on the screen related to the location and dates provided by the user.

If user wants to take the trip on the screen, user can press 'Save' button to save it. If not, user enters new entries into the form. The current travel information on the screen will automatically be replaced by new ones.

This way, user can add trips and save them. Moreover, user can add any number of trips, and saved trips are displayed accurately.

After some time, if user wants to cancel saved trip, user can press 'Remove' button for that. User can delete trips individually.


## App dependencies

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


## How to use the app

1. Create node_modules folder by running the following command:
- npm install

2. To start the project, run the following command:
- npm start

3. To test the project, run the following command:
- npm test

4. To build the project, there are 2 modes or environments.

For production environment, run the following command:
- npm run build

For development environment, run the following command:
- npm run dev


### NOTE: Options I chose to implement from Extend Options / Ways to Stand Out section:

1. Add end date and display length of trip
2. Integrate the REST Countries API to pull in data for the country being visited
3. Allow the user to remove the trip

P.S. Soon, more will be added...
Thank you!





