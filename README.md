# Flight Tracker

A flight tracker utilizing the [Aviationstack API](https://aviationstack.com/). It shows the flight's status and, if available, its current location.

## Motivation

I started this project to learn more about [Chakra UI](https://chakra-ui.com/) as well as to become more familiar with integrating the Google Maps API in a React application. The ability to track an airplane moving hundreds of miles an hour is amazing to me, so I used Aviationstack to fetch flight data and display it on screen.

## Features

### Search Bar

The search bar accepts a 6 character flight designator consisting of the airline's [IATA code](https://en.wikipedia.org/wiki/Airline_codes#IATA_airline_designator) and flight number. This is usually included in booking information and also found on boarding passes.

> i.e. **DL1234** _(Delta Airlines flight 1234)_
> Upon clicking search, a request is sent to Aviationstack asking for flight information related to the input value:

```
const response = await fetch(
  `https://cors-anywhere.herokuapp.com/
  http://api.aviationstack.com/v1/flights
  ? access_key=${ACCESS_KEY}
  & flight_iata=${value}`,
  {
    method: "GET",
    mode: "cors",
  }
);
```

> **Note:** _The free version of Aviationstack's API does not support https, hence the need to prepend https://cors-anywhere.herokuapp.com/ to the url in order for Github Pages to work._

### Flight Information

The Flight Information box consists of 4 components:

- StatusBar
- MainInfo
- MapComponent
- MoreInfo

#### Status Bar

The status bar shows the flight designator, departure and arrival airports, as well as the current flight status _('Landed', 'Airborne', Incident, 'Scheduled', 'Diverted', or 'Cancelled')_

#### Main Info

The main info component shows departure and arrival information _('Gate','Terminal','Scheduled','Estimated','Actual', and 'Runway')_.

#### Map

The map component renders an interactive map using the Google Maps API. A marker is placed at the location of the aircraft if available.

#### More Info

The more info component contains live information about the aircraft's location, speed, type and airline.

> The more info component is only rendered if Aviationstack's response contains live data. Unfortunately, the API has not been returning live data lately.

## Technologies Used

- HTML/CSS
- JavaScript
  - [React](https://github.com/facebook/react)
  - [Chakra UI](https://github.com/chakra-ui/chakra-ui)
- API's
  - [Google Maps](https://developers.google.com/maps/documentation/javascript/overview)
  - [Aviationstack](https://aviationstack.com/documentation)
