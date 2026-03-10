import { useState } from "react";
import { searchCity } from "../services/locationService";
import type { City } from "../types/city";

export function useLocation(){
    const [locations, setLocations] = useState<City[]>([])
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    async function getLocation(city:string){
        try{
            setLoading(true)
            setError(null)

            const data = await searchCity(city) 

            setLocations(data)
        } catch {
            setError(`failed to fetch location using city : ${city}`)
        } finally {
            setLoading(false)
        }
    }

    function clearLocations(){
        setLocations([])
    }

    return{
        locations,
        loading,
        error,
        getLocation,
        clearLocations
    }
}