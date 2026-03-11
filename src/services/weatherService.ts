import { formatTime } from "../utils/FormatTime"

import type { CurrentWeather } from "../types/currentWeather";
import type { HourlyWeather } from "../types/hourlyWeather";
import type { DailyWeather } from "../types/dailyWeather";
import type { WeatherData } from "../types/weatherData";

const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

export async function getWeather(lat: number, lon: number): Promise<WeatherData> {
  const res = await fetch(
    `${WEATHER_URL}?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,weathercode&hourly=temperature_2m,precipitation_probability,apparent_temperature,rain,,snowfall,weathercode,wind_speed_10m,relative_humidity_2m&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weathercode,wind_speed_10m_max`
  );

  if (!res.ok) {
    throw new Error("Weather error");
  }

  const data = await res.json()

  return {
    current_weather: mapCurrentWeather(data),
    hourly: mapHourlyWeather(data),
    daily: mapDailyWeather(data)
  }
}

function mapCurrentWeather(data: any): CurrentWeather {

  return {
    temperature_2m: data.current.temperature_2m,
    temperature_2m_max: data.daily.temperature_2m_max[0],
    temperature_2m_min: data.daily.temperature_2m_min[0],
    weathercode: data.current.weathercode,
    feels: data.current.apparent_temperature
  }
}

function mapHourlyWeather(data: any): HourlyWeather {

  const now = new Date()
  const currentHour = now.toISOString().slice(0, 13)

  const index = data.hourly.time.findIndex((t: string) =>
    t.startsWith(currentHour)
  )
  const start = index >= 0 ? index + 1 : 0
  return {
    time: data.hourly.time.slice(start, start + 24).map((t: string) => formatTime(t)),
    temperature: data.hourly.temperature_2m.slice(start, start + 24),
    precipitation_probability: data.hourly.precipitation_probability.slice(start, start + 24),
    apparent_temperature: data.hourly.apparent_temperature.slice(start, start + 24),
    rain: data.hourly.rain.slice(start, start + 24),
    snowfall: data.hourly.snowfall.slice(start, start + 24),
    weathercode: data.hourly.weathercode.slice(start, start + 24),
    wind_speed: data.hourly.wind_speed_10m.slice(start, start + 24),
    relative_humidity: data.hourly.relative_humidity_2m.slice(start, start + 24)
  }
}

function mapDailyWeather(data: any): DailyWeather {
  return {
    time: data.daily.time,
    temperature_max: data.daily.temperature_2m_max,
    temperature_min: data.daily.temperature_2m_min,
    precipitation_probability_max: data.daily.precipitation_probability_max,
    weathercode: data.daily.weathercode,
    wind_speed_max: data.daily.wind_speed_10m_max
  }
}