import "./style.scss";
import { refs } from "./refs.js";
import { showWeather } from "./showWeather.js";

console.log("Weather Project запущено");
// https://nominatim.openstreetmap.org/ui/search.html
// https://open-meteo.com/en/docs?hourly=temperature_2m,relative_humidity_2m
refs.weatherInput.addEventListener("input", (e) => {
  if(refs.weatherInput.value.trim() !== '') {
    refs.searchWrapper.style.height = "100%";
  } else {
    refs.searchWrapper.style.height = "calc(63px - 14px)"; 
  }
});

window.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && refs.weatherInput.value.trim() !== "") {
    refs.weatherInfo.classList.remove("visible");
    showWeather(refs.weatherInput.value.trim());

  }
});
