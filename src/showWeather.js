import { getCord } from "./getCord.js";
import { getWeatherInplace } from "./getWeatherInPlace.js";
import { refs } from "./refs.js";

export async function showWeather(city) {
  const coords = await getCord(city);
  if (!coords) return;

  refs.weatherInfo.classList.remove("visible");

  const weatherData = await getWeatherInplace(coords.lat, coords.lon);
  const { temperature, windspeed, winddirection, weathercode, time } =
    weatherData.current_weather;

  refs.weatherInfo.innerHTML = `
    <p>Температура: <span>${temperature}</span> °C</p>
    <p>Швидкість вітру: <span>${windspeed}</span> км/год</p>
    <p>Напрям вітру: <span>${winddirection}</span>°</p>
    <p>Код погоди: <span>${weathercode}</span></p>
    <p>Час оновлення: <span>${time}</span></p>
  `;

  refs.weatherInfo.classList.add("visible");
}
