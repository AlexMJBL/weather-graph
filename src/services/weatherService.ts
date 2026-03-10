import type { CurrentWeather } from "../types/currentWeather";
import type { DailyWeather } from "../types/dailyWeather";
import type { HourlyWeather } from "../types/hourlyWeather";
import type { WeatherData } from "../types/weatherData";

const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

export async function getWeather(lat: number, lon: number) : Promise<WeatherData> {

  
  const res = await fetch(
    `${WEATHER_URL}?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,weathercode&hourly=temperature_2m,precipitation_probability,apparent_temperature,rain,weathercode&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weathercode`
  );

  if (!res.ok) {
    throw new Error("Weather error");
  }

  const data = await res.json()

  return { 
    current_weather : mapCurrentWeather(data),
    hourly : mapHourlyWeather(data),
    daily : mapDailyWeather(data)
  }
}

function mapCurrentWeather(data:any) : CurrentWeather {
  return {
    temperature_2m: data.current.temperature_2m,
    temperature_2m_max: data.daily.temperature_2m_max[0],
    temperature_2m_min: data.daily.temperature_2m_min[0],
    weathercode : data.current.weathercode,
    feels: data.current.apparent_temperature
  }
}

function mapHourlyWeather(data :any)  : HourlyWeather {
  return {
    time : data.hourly.time.slice(0,24),
    temperature_2m : data.hourly.temperature_2m.slice(0,24),
    precipitation_probability: data.hourly.precipitation_probability.slice(0,24),
    apparent_temperature : data.hourly.apparent_temperature.slice(0,24),
    rain : data.hourly.rain.slice(0,24),
    weathercode : data.hourly.weathercode.slice(0,24)
  }
}

function mapDailyWeather(data:any)  : DailyWeather {
  return data.daily
}