import { useState } from "react";
import { getWeather } from "../services/weatherService";
import type { Weather } from "../types/weather";

export function useWeather(){
    const [weather,setWeather] = useState<Weather | null>(null)
    const [loading, setLoading] = useState(false)
    const [error,setError] = useState<string | null>(null)

    async function fetchWeather(lat:number, lon:number){
        try{
            setLoading(true)
            setError(null)

            const data = await getWeather(lat,lon)

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