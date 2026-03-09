import { useState } from "react";
import { searchCity } from "../services/locationService";
import type { City } from "../types/city";

export function useLocation(city:string){
    const [location, setLocation] = useState<City | null>(null)
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    async function getLocation(city:string){
        try{
            setLoading(true)
            setError(null)

            const data = await searchCity(city) 

            setLocation(data)
        } catch {
            setError(`failed to fetch location using city : ${city}`)
        } finally {
            setLoading(false)
        }
    }

    return{
        location,
        loading,
        error,
        getLocation
    }
}