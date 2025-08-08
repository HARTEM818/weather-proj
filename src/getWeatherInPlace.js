import axios from 'axios';


export async function getWeatherInplace(lat, lon) {
  const url = 'https://api.open-meteo.com/v1/forecast';

  const params = {
    latitude: lat,
    longitude: lon,
    hourly: 'temperature_2m,relative_humidity_2m',
    current_weather: true,
    timezone: 'auto'
  };

  try {
    const response = await axios.get(url, { params });

    const data = response.data;
    return data;
  } catch (error) {
    console.error('Помилка при запиті погоди:', error);
    return null;
  }
}