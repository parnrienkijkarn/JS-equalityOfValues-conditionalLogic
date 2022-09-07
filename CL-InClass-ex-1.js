// Exercise1: Temperature Status
let currentTemperature = 40;

// function checkWeather(currentTemperature) {
//   if (currentTemperature >= 40) {
//     return currentTemperature = "It's very hot";
//   } else if (currentTemperature > 30 && currentTemperature <= 40) {
//     return currentTemperature = "It's hot";
//    } else if (currentTemperature > 20 && currentTemperature <= 30) {
//     return currentTemperature = "Normal in Temperature";
//   } else if (currentTemperature > 10 && currentTemperature <= 20) {
//     return currentTemperature = "Cold weather";
//   } else if (currentTemperature >= 0 && currentTemperature <= 10) {
//     return currentTemperature = "Very cold weather";
//   } else if (currentTemperature < 0) {
//     return currentTemperature = "Freezing weather";
//   }
// }

// console.log(checkWeather(currentTemperature));

if (currentTemperature >= 40) {
      currentTemperature = "It's very hot";
    } else if (currentTemperature > 30 && currentTemperature <= 40) {
      currentTemperature = "It's hot";
     } else if (currentTemperature > 20 && currentTemperature <= 30) {
      currentTemperature = "Normal in Temperature";
    } else if (currentTemperature > 10 && currentTemperature <= 20) {
      currentTemperature = "Cold weather";
    } else if (currentTemperature >= 0 && currentTemperature <= 10) {
      currentTemperature = "Very cold weather";
    } else if (currentTemperature < 0) {
      currentTemperature = "Freezing weather";
    }
    
  console.log(currentTemperature);