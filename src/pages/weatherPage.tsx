import { useEffect, useState } from "react"
import { useWeather } from "../hooks/useWeather"
import type { City } from "../types/city"
import SearchBar from "../components/searchBar"
import type { WeatherType } from "../types/weatherType"

export default function WeatherPage() {

    const [city, setCity] = useState<City | null>(null)
    const [forecastTime , setForecastTime] = useState<WeatherType>("current")
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

         
        </div>
    )
}