// Use supertest to test HTTP requests/responses
const request = require('supertest');

// Need our app in server.js for correct routes
const app = require('../src/server/server');

/**
 * 	describe --> a Jest method for containing one or more related tests with 2 arguments:
 *		- a string to describe the test suite
 *		- a callback function for test suite
 *	test --> a function which is the actual test block with 2 arguments:
 *		- a string to describe the actual test
 *		- a callback function for actual test
 **/

describe("API Request", () => {
	test("It should return API Data", async () => {
		const response = await request(app).get('/getAPI');
    	expect(response.body.geonames[0].countryName).toEqual("Uzbekistan");
	});
});