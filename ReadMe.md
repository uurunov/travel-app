# Project Summary
Custom Travel App

- Very JavaScript heavy
- Clean and appealing HTML/CSS.

You will be:
	- targeting the DOM
	- working with objects
	- retrieving data from 3 APIs in which one of those is reliant on another to work.

Finally, this is all going to be done in a Webpack environment, using an express server, and wrapped up with service workers.


Refactor and test as much as possible while you are building. Figure for every piece of functionality you add:

You will spend just as much time testing and refactoring your code. If it takes you 5 hours to figure out the logic, it should likely take you another 5 hours determining that you wrote the best code possible. As your skills improve, this process will feel more natural.
Make sure to remove any debugging code from your final submission!


The minimum requirements ask a fair amount from you, but the final app is quite simple.


# What You Will Build:
You will be building a travel application.

- Pull basic data from an API, not just the weather, but multiple types of data, from different sources. Occasionally, one API will be required to get data from another API.

- The project will include a simple form where you enter:
	- the location you are traveling to
	- the date you are leaving

- If the trip is within a week, you will get the current weather forecast.
- If the trip is in the future, you will get a predicted forecast.

The OpenWeather API is fantastic but it doesn’t let you get future data for free and it’s not that flexible with what information you enter.

We are going to use the WeatherBit API for you.

WeatherBit API has one problem ---> it only takes in coordinates for weather data -- it’s that specific.

	- So, we’ll need to get those coordinates from the GeoNames API.
	- Once we have all of this data, we’ll want to display an image of the location entered.
	- For that image, we will be using the PiXaBay API.

This may not sound like a lot, but there is a fair amount of moving pieces that rely on each other to work.

You’ll need to plan out the logic of what you are trying to accomplish before you begin developing.
There are a lot of paths you can take, and what you choose to display and how you display it is somewhat flexible.

It is highly recommended that after you meet the minimum requirements in the rubric, you continue debugging the UX (User Experience) and improve the project.


# What You Will Learn:
At this point, you have learned all of the technical skills necessary to complete this project.
You will likely stumble along the way and find that there are some pieces you didn’t encounter in the past projects.
Remember, if you get stuck, you should always look things up. Sometimes just articulating the problem renders a solution.

The following are just some of the questions that you’ll experience along the way:

	- What’s the ideal workflow?
	- How many files do I need?
	- How do I convert one project into another?
	- Should I redo the HTML/CSS first or go straight to the javascript?
	- How many JavaScript functions do I need?
	- Should my function be this many lines of code?
	- Is readability or performance more important?

There’s no single correct answer to each question.
While building this project, working with peers, and getting feedback from the project reviewer -- you will naturally develop your own answers to these questions!


# OBJECTIVE: FEND Capstone Project - Travel App
This project requires you to build out a travel app that, at a minimum:

	- obtains a desired trip location & date from the user
	- displays weather and an image of the location using information obtained from external APIs

Given that this is the Capstone project, it's highly encouraged for you to go above and beyond, adding additional functionality and customization to truly stand out with a project you are proud to have at the top of your portfolio!