import { useEffect, useState } from "react"
import { useWeather } from "../hooks/useWeather"
import SearchBar from "../components/index/searchBar"
import CurrentWeatherUI from "../components/index/currentWeatherUI"
import DailyWeatherUI from "../components/index/dailyWeatherUI"
import HourlyWeatherUI from "../components/index/hourlyWeatherUI"


import type { City } from "../types/city"
import type { WeatherType } from "../types/weatherType"


export default function WeatherPage() {

    const [city, setCity] = useState<City | null>(null)
    const [forecastTime, setForecastTime] = useState<WeatherType>("current")
    const { weather, fetchWeather } = useWeather()

    useEffect(() => {
        if (city) {
            fetchWeather(city.latitude, city.longitude)
        }
    }, [city])


    return (
        <div className="flex min-h-screen flex-col items-center gap-6 p-10">

            <h1 className="text-3xl font-bold">
                Weather Graph
            </h1>

            <SearchBar onSelectCity={setCity} />

            {city &&
                <>
                    <div>
                        <h2>{city?.name} , {city?.country}</h2>
                    </div>


                    <div className="w-full max-w-xl">

                        {/* Tabs */}
                        <div className="flex">
                            <button
                                onClick={() => setForecastTime("current")}
                                className={`px-4 py-2 border border-b-0 rounded-t-lg
                                    ${forecastTime === "current"
                                        ? "bg-white text-black -mb-px"
                                        : "bg-gray-200 text-gray-600 hover:bg-gray-300"}`}
                            >
                                Current
                            </button>

                            <button
                                onClick={() => setForecastTime("hourly")}
                                className={`px-4 py-2 border border-b-0 rounded-t-lg
                                    ${forecastTime === "hourly"
                                        ? "bg-white text-black -mb-px"
                                        : "bg-gray-200 text-gray-600 hover:bg-gray-300"}`}
                            >
                                Hourly
                            </button>

                            <button
                                onClick={() => setForecastTime("daily")}
                                className={`px-4 py-2 border border-b-0 rounded-t-lg
                                    ${forecastTime === "daily"
                                        ? "bg-white text-black -mb-px"
                                        : "bg-gray-200 text-gray-600 hover:bg-gray-300"}`}
                            >
                                Daily
                            </button>
                        </div>

                        {/* Panel */}
                        <div className="border rounded-b-lg p-6 bg-white shadow ">

                            {forecastTime == "current" && weather && (
                                <CurrentWeatherUI data={weather.current_weather} />
                            )}

                            {forecastTime == "hourly" && weather && (
                                <HourlyWeatherUI data={weather.hourly} />
                            )}

                            {forecastTime == "daily" && weather && (
                                <DailyWeatherUI data={weather.daily} />
                            )}

                        </div>

                    </div>
                </>
            }
        </div>
    )
}