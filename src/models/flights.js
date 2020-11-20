export const getFlights = () => {
  return fetch('flights.json')
    .then(response => response.json())
    .then(data => {
      return data;
    });
};
