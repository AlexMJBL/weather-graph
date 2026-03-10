import { useState } from "react";
import { getWeather } from "../services/weatherService";
import type { WeatherType } from "../types/weatherType"
import type { CurrentWeather } from "../types/currentWeather"
import type { HourlyWeather } from "../types/hourlyWeather"
import type { DailyWeather } from "../types/dailyWeather"

type WeatherData = CurrentWeather | HourlyWeather | DailyWeather

export function useWeather(){
    const [weather,setWeather] = useState<WeatherData | null>(null)
    const [loading, setLoading] = useState(false)
    const [error,setError] = useState<string | null>(null)

    async function fetchWeather(lat:number, lon:number, type: WeatherType = "current"){
        try{
            setLoading(true)
            setError(null)

            const data = await getWeather(lat,lon,type)

            setWeather(data)
        } catch {
            setError("failed to fetch weather")
        } finally {
            setLoading(false)
        }
    }

    return {
            weather,
            loading,
            error,
            fetchWeather
        }
}