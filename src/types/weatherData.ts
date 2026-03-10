import type { CurrentWeather } from "./currentWeather"

import type { HourlyWeather } from "./hourlyWeather"
import type { DailyWeather } from "./dailyWeather"

export type WeatherData = { 
    current_weather : CurrentWeather
    hourly: HourlyWeather
    daily: DailyWeather
}