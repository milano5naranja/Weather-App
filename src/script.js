function formatDate(timestamp) {
  let date = new Date(timestamp);
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Helsinki&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);

//function showWeather(response) {
//let h1 = document.querySelector("h1");
//let temperature = Math.round(response.data.main.temp);
//h1.innerHTML = `It is currently ${temperature}° in ${response.data.name}`;
//}

//function retrievePosition(position) {
//let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
//let lat = position.coords.latitude;
//let lon = position.coords.longitude;
//let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
//axios.get(url).then(showWeather);

//let units = "metric";
//let city = "helsinki";
//let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
//}

//navigator.geolocation.getCurrentPosition(retrievePosition);

//let dayIndex = date.getDay();

//function displayWeatherCondition(response) {
//document.querySelector("#city").innerHTML = response.data.name;
//document.querySelector("#temperature").innerHTML = Math.round(
//response.data.main.temp
//);

//document.querySelector("#humidity").innerHTML = response.data.main.humidity;
//document.querySelector("#wind").innerHTML = Math.round(
//response.data.wind.speed
//);
//document.querySelector("#description").innerHTML =
//response.data.weather[0].main;
//}
//function searchCity(city) {

//function handleSubmit(event) {
//event.preventDefault();
//let city = document.querySelector("#city-input").value;
//searchCity(city);
//}

//function searchLocation(position) {
//axios.get(apiUrl).then(displayWeatherCondition);
//}

//function getCurrentLocation(event) {
//event.preventDefault();
//navigator.geolocation.getCurrentPosition(searchLocation);
//}

//function convertToFahrenheit(event) {
// event.preventDefault();
//let temperatureElement = document.querySelector("#temperature");
//temperatureElement.innerHTML = 66;
//}

//function convertToCelsius(event) {
//event.preventDefault();
//let temperatureElement = document.querySelector("#temperature");
//temperatureElement.innerHTML = 19;
//}

//let dateElement = document.querySelector("#date");
//let currentTime = new Date();
//dateElement.innerHTML = formatDate(currentTime);

//let searchForm = document.querySelector("#search-form");
//searchForm.addEventListener("submit", handleSubmit);

//let currenLocationButton = document.querySelector("#current-location-button");
//currenLocationButton.addEventListener("click", getCurrentLocation);

//searchCity("Helsinki");
