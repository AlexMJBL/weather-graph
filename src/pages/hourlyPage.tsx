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

        <div className="max-w-5xl mx-auto p-6 space-y-6">

            {/* City */}
            <h2 className="text-3xl font-semibold text-center text-gray-800">
                {city?.name} {city?.country && `, ${city.country}`}
            </h2>

            {/* Graph */}
            <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-md">
                <h3 className="text-lg font-semibold mb-4 text-gray-700">
                    Hourly Temperature
                </h3>

                <HourlyTempGraph
                    temperature={hourlyWeather.temperature}
                    time={hourlyWeather.time}
                />
            </div>

            {/* List */}
            <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-md">
                <HourlyList hourlyWeather={hourlyWeather} />
            </div>

        </div>

    )
}