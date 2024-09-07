const locationName = document.getElementById("location").value;
const coverter = document.getElementById("converter").value;
const weatherIcon = document.getElementById("weather-icon");
const temperature = document.getElementById("temparature");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const cloudsInfo = document.getElementById("clouds");
const pressure = document.getElementById("pressure");
const city = document.getElementById("city");

const API_KEY = "7233c623ea9c482305acec60f1fede2b";
const LOCATION_WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?&appid=${API_KEY}&q=`;

const getWeatherInfo = async () => {
  const data = await fetch(LOCATION_WEATHER_API + "Bangalore");
  const {
    name,
    main,
    sys,
    weather,
    clouds,
    wind: { speed },
  } = await data.json();
  feelsLike.textContent = `Feels like: ${main.feels_like}`;
  humidity.textContent = main.humidity;
  pressure.textContent = main.pressure;
  wind.textContent = speed;
  temperature.textContent = `Temperature: ${main.temp}`;
  city.textContent = `City: ${name}, ${sys.country}`;
  cloudsInfo.textContent = clouds.all;
  weatherIcon.style.background = `url(https://openweathermap.org/img/wn/${weather[0].icon}@2x.png)`;
};

getWeatherInfo();
