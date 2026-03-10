import type { CurrentWeather } from "../types/currentWeather";
import type { HourlyWeather } from "../types/hourlyWeather";
import type { DailyWeather } from "../types/dailyWeather";

import type { WeatherData } from "../types/weatherData";

const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

export async function getWeather(lat: number, lon: number) : Promise<WeatherData> {
  const res = await fetch(
    `${WEATHER_URL}?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,weathercode&hourly=temperature_2m,precipitation_probability,apparent_temperature,rain,weathercode,wind_speed_10m,relative_humidity_2m&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weathercode,wind_speed_10m_max`
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
  
  const currentTime = data.current.time
  const index = data.hourly.time.indexOf(currentTime)

  return {
    time : data.hourly.time.slice(index, index + 24).map((t:string) => `${Number(t.slice(11,13))}h`),
    temperature : data.hourly.temperature_2m.slice(index, index + 24),
    precipitation_probability: data.hourly.precipitation_probability.slice(index, index + 24),
    apparent_temperature : data.hourly.apparent_temperature.slice(index, index + 24),
    rain : data.hourly.rain.slice(index, index + 24),
    weathercode : data.hourly.weathercode.slice(index, index + 24),
    wind_speed : data.hourly.wind_speed_10m.slice(index, index + 24),
    relative_humidity : data.hourly.relative_humidity_2m.slice(index, index + 24)
  }
}

function mapDailyWeather(data:any)  : DailyWeather {
   return {
    time: data.daily.time,
    temperature_max: data.daily.temperature_2m_max,
    temperature_min: data.daily.temperature_2m_min,
    precipitation_probability_max: data.daily.precipitation_probability_max,
    weathercode : data.daily.weathercode,
    wind_speed_max : data.daily.win_speed_10m_max
  }
}