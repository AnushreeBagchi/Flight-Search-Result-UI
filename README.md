# Skyscanner full-stack recruitment test

This [task](#task) to create a basic flight results front-end site to show flight prices

## Task

- This is to Fetch flight results from the provided `flights.json` and format them into client readable results.

- Used the returned data to display a page of results that matches the given design.
  - Times should be displayed in 24 hour format.


## Implementation

I have used [React](https://facebook.github.io/react/).

I have also used a [custom component library](https://backpack.github.io/using/backpack-react-scripts) and Facebook's [create-react-app](https://github.com/facebookincubator/create-react-app).

## Flight results

The provided `flights` `json` will return two collections of different items:

* **Itineraries** - These are the containers for your trips, tying together **Legs**, and **prices**. Prices are offered by an **agent** - an airline or travel agent.

* **Legs** - These are journeys (outbound, return) with **duration**, **stops** and **airlines**.

```
Itineraries
  Legs
```

## Running the project

To startup the frontend client run the following command.

* `npm start` - This will start the application for development
* `npm run build` - Will create a production optimised build
* `npm test` - Will run the front end tests
* `npm run lint` - Will run the code through our linting rules

