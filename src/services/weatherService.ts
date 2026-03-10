import type { CurrentWeather } from "../types/currentWeather";
import type { DailyWeather } from "../types/dailyWeather";
import type { HourlyWeather } from "../types/hourlyWeather";
import type { WeatherType } from "../types/weatherType";

const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

export async function getWeather(lat: number, lon: number, type: WeatherType = "current"): Promise<CurrentWeather| DailyWeather | HourlyWeather > {
  let params = "";

  if (type === "hourly") {
    params = "hourly=temperature_2m,precipitation_probability,relative_humidity_2m,apparent_temperature,rain";
  }
  else if (type === "daily") {
    params = "daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max";
  }
  else {
    params = "current_weather=true";
  }

  const res = await fetch(
    `${WEATHER_URL}?latitude=${lat}&longitude=${lon}&${params}`
  );

  if (!res.ok) {
    throw new Error("Weather error");
  }

  const data = await res.json();
  
  if (type === "hourly") {
    return data.hourly;
  }

  if (type === "daily") {
    return data.daily;
  }

  return data.current_weather;
}

