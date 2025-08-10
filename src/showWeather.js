import { getCord } from "./getCord.js";
import { getWeatherInplace } from "./getWeatherInPlace.js";
import { refs } from "./refs.js";
import { weatherCode } from "./weatherCode.js";

export async function showWeather(city) {
  const coords = await getCord(city);
  if (!coords) return;

  refs.weatherInfo.classList.remove("visible");

  const weatherData = await getWeatherInplace(coords.lat, coords.lon);
  const { temperature, windspeed, winddirection, weathercode, time } =
    weatherData.current_weather;
  refs.temperature.innerHTML = `Температура ${temperature} °C`;
  refs.weathercode.innerHTML = `${weatherCode(weathercode)}`;

  refs.weatherInfo.insertAdjacentHTML("beforeend", `
    <p>Швидкість вітру: ${windspeed} км/год</p>
    <p>Напрям вітру: ${winddirection} °</p>
    <p>Час оновлення: ${time} </p>
    `);

  refs.weatherInfo.classList.add("visible");
}
