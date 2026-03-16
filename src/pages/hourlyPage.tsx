import HourlyList from "../components/hourly/hourlyList";
import HourlyTempGraph from "../components/hourly/hourlyTempGraph";
import type { City } from "../types/city";
import type { HourlyWeather } from "../types/hourlyWeather";
import { Navigate } from "react-router-dom";

type Props = { 
    hourlyWeather?: HourlyWeather
    city?: City | null
}

export default function HourlyPage({ hourlyWeather, city }: Props) {
     if (!hourlyWeather) return <Navigate to="/" replace />
    
    return (
        <div className="max-w-5xl mx-auto p-4 space-y-6">

            <h2 className="text-2xl font-semibold text-center">
                {city?.name}, {city?.country}
            </h2>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-4 shadow">
                <HourlyTempGraph temperature={hourlyWeather.temperature} time={hourlyWeather.time} />
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-4 shadow">
                <HourlyList hourlyWeather={hourlyWeather} />
            </div>

        </div>
        
    )
}