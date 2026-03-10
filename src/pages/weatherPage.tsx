import { useEffect, useState } from "react"
import { useWeather } from "../hooks/useWeather"
import SearchBar from "../components/searchBar"
import CurrentWeatherUI from "../components/currentWeatherUI"
import DailyWeatherUI  from "../components/dailyWeatherUI"
import HourlyWeatherUI from "../components/hourlyWeatherUI"

import type { City } from "../types/city"
import type { WeatherType } from "../types/weatherType"
import type { CurrentWeather } from "../types/currentWeather"
import type { DailyWeather } from "../types/dailyWeather"
import type { HourlyWeather } from "../types/hourlyWeather"


export default function WeatherPage() {

    const [city, setCity] = useState<City | null>(null)
    const [forecastTime , setForecastTime] = useState<WeatherType>("current")
    const { weather, fetchWeather } = useWeather()

    useEffect(() => {
        if (city) {
            fetchWeather(city.latitude, city.longitude, forecastTime)
        }
    }, [city, forecastTime])


    return (
        <div className="flex min-h-screen flex-col items-center gap-6 p-10">

            <h1 className="text-3xl font-bold">
                Weather Graph
            </h1>

            <SearchBar onSelectCity={setCity} />

            <div>
                <button onClick={() => setForecastTime("current")}>Current weather</button>
                <button onClick={() => setForecastTime("hourly")}>Hourly weather</button>
                <button onClick={() => setForecastTime("daily")}>Daily weather</button>
            </div>

            {forecastTime == "current" && weather && <CurrentWeatherUI data={weather as CurrentWeather} />}
            {forecastTime == "hourly" && weather && <HourlyWeatherUI data={weather as HourlyWeather} />}
            {forecastTime == "daily" && weather && <DailyWeatherUI data={weather as DailyWeather} />}

         
        </div>
    )
}