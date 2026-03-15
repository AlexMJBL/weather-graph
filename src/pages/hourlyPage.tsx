import HourlyList from "../components/hourly/hourlyList";
import HourlyTempGraph from "../components/hourly/hourlyTempGraph";
import type { City } from "../types/city";
import type { HourlyWeather } from "../types/hourlyWeather";

type Props = { 
    hourlyWeather?: HourlyWeather
    city?: City
}

export default function HourlyPage({ hourlyWeather, city }: Props) {
    return (
        <div className="max-w-5xl mx-auto p-4 space-y-6">

            <h2 className="text-2xl font-semibold text-center">
                {city?.name}, {city?.country}
            </h2>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-4 shadow">
                <HourlyTempGraph />
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-4 shadow">
                <HourlyList hourlyWeather={hourlyWeather} />
            </div>

        </div>
    )
}