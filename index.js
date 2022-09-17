import fetch from 'node-fetch';

fetch('https://api.darksky.net/forecast/81d38b9c958eb018e01083a72b0926b5/47,106')
  .then((response) => response.json())
  .then((data) => console.log(data.currently.temperature));

// let celciumTemperature = document.getElementById("celcium");
// let dateTime = document.getElementById("date");
let furTemp = fetch.data.currently.temperature;

let convertCelcium = () => {
    console.log(furTemp);
}

convertCelcium();





