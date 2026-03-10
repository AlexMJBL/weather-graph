import type { CurrentWeather } from "./currentWeather"
import type { DailyWeather } from "./dailyWeather"
import type { HourlyWeather } from "./hourlyWeather"

export type WeatherData = { 
    current_weather : CurrentWeather
    hourly: HourlyWeather
    daily: DailyWeather
}