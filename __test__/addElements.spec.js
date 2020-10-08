// Import the js file to test
import { addElements } from "../src/client/js/addElements"

/**
 * 	describe --> a Jest method for containing one or more related tests with 2 arguments:
 *		- a string to describe the test suite
 *		- a callback function for test suite
 *	test --> a function which is the actual test block with 2 arguments:
 *		- a string to describe the actual test
 *		- a callback function for actual test
 **/

describe("Function for creating ul element", () => {
	test("Checking if function sends newly created element correctly", () => {
		// Input
		const input = [[{li:"Start Date", span:"10-10-2020"}]];

		// Expected Output
		const output = '<ul class="flex-dir-col"><li class="bold">Start Date: <span class="results">10-10-2020</span></li></ul>';

		// expect --> a function to check if the function being imported produces expected output with given input
		expect(addElements(input[0]).outerHTML).toBe(output);
	});
});

/**
 * Testing is a matter of input, functions, and expected output
 */