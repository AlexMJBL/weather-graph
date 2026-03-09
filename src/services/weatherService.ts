import type { Weather } from "../types/weather";

const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

export async function getWeather(lat : number, lon : number) : Promise<Weather> {

  const res = await fetch(
    `${WEATHER_URL}?latitude=${lat}&longitude=${lon}&hourly=time,temperature_2m,precipitation_probability,relative_humidity_2m,windspeed_10m,cloudcover,apparent_temperature,rain`
  );

  if (!res.ok) {
    throw new Error("Weather error");
  }

  const data = await res.json();
  return data.hourly;
}