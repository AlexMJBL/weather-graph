import type { City } from "../types/city";
import type { DailyWeather } from "../types/dailyWeather";
import DailyList from "../components/daily/dailyList";
import DailyTempGraph from "../components/daily/dailyTempGraph";
import { Navigate } from "react-router-dom";

type Props = {
    dailyWeather?: DailyWeather
    city?: City | null
}

export default function DailyPage({ dailyWeather, city }: Props) {

    if (!dailyWeather) return <Navigate to="/" replace />

    return (
        <div className="max-w-5xl mx-auto p-6 space-y-6">

            {/* City */}
            <h2 className="text-3xl font-semibold text-center text-gray-800">
                {city?.name} {city?.country && `, ${city.country}`}
            </h2>

            {/* Graph */}
            <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-md">
                <h3 className="text-lg font-semibold mb-4 text-gray-700">
                    Temperature Trend
                </h3>

                <DailyTempGraph
                    temperature_max={dailyWeather.temperature_max}
                    temperature_min={dailyWeather.temperature_min}
                    time={dailyWeather.time}
                />
            </div>

            {/* List */}
            <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-md">
                <DailyList dailyWeather={dailyWeather} />
            </div>

        </div>
    )
}