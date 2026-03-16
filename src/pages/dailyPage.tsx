
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
        <div className="max-w-5xl mx-auto p-4 space-y-6">

            <h2 className="text-2xl font-semibold text-center">
               
  {city?.name} {city?.country && `, ${city.country}`}

            </h2>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-4 shadow">
                <DailyTempGraph temperature_max={dailyWeather.temperature_max} temperature_min={dailyWeather.temperature_min} time={dailyWeather.time} />
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-4 shadow">
                <DailyList dailyWeather={dailyWeather} />
            </div>

        </div>
    )
}