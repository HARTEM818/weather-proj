import axios from 'axios';

export async function getCord(city) {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(city)}&format=json&limit=1`;

  try {
    const response = await axios.get(url); 


    const data = response.data;

    if (data.length === 0) {
      alert("Місто не знайдено.");
      return null;
    }

    const { lat, lon } = data[0];
    return { lat, lon };

  } catch (error) {
    console.error("Помилка при запиті координат:", error);
    return null;
  }
}
