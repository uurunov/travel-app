// Import the js file to test
import { checkDates } from "../src/client/js/checkDates"

/**
 * 	describe --> a Jest method for containing one or more related tests with 2 arguments:
 *		- a string to describe the test suite
 *		- a callback function for test suite
 *	test --> a function which is the actual test block with 2 arguments:
 *		- a string to describe the actual test
 *		- a callback function for actual test
 **/

describe("Function for checking dates", () => {
	test("Checking if function sends data correctly", () => {
		// Input
		const input = ["10-10-2020", "10-17-2020"];

		// Expected Output
		const output = [
			{daysLeft: 2, tripLength: 7}
		];

		// expect --> a function to check if the function being imported produces expected output with given input
		expect(checkDates(input[0], input[1]).tripLength).toEqual(output[0].tripLength);
	});
});

/**
 * Testing is a matter of input, functions, and expected output
 */