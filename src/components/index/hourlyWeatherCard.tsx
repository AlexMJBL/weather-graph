import { getWeatherInfo } from "../../utils/weatherCode"
import { formatTimeToHour } from "../../utils/FormatTimeToHour"

type Props = {
    time: string
    temperature: number
    precipitation_probability: number
    apparent_temperature: number
    rain: number
    snowfall: number
    weathercode: number
    wind_speed: number
    relative_humidity: number
}

export default function HourlyWeatherCard(props: Props) {

    const weather = getWeatherInfo(props.weathercode)
    const Icon = weather.icon

    return (
        <div className="bg-white rounded-xl shadow-sm p-6 border w-full">

            {/* time */}
            <div className="text-center text-xl md:text-lg font-semibold text-gray-600 mb-3">
                {formatTimeToHour(props.time)}
            </div>

            <div className="flex justify-between items-center md:flex-col md:gap-3">

                {/* left */}
                <div className="flex items-center gap-3 md:flex-col">

                    <Icon size={40} className="text-blue-500 md:size-32" />

                    <span className="text-3xl md:text-2xl font-bold">
                        {props.temperature}°
                    </span>

                </div>

                {/* right */}
                <div className="flex flex-col items-end md:items-center text-base md:text-sm text-gray-600 gap-1">

                    <span className="font-semibold">
                        💧 {props.precipitation_probability}%
                    </span>

                    <span className="text-center w-full">
                        Feels {props.apparent_temperature}°
                    </span>

                    {props.rain > 0 && (
                        <span>🌧 {props.rain} mm</span>
                    )}

                    {props.snowfall > 0 && (
                        <span>❄ {props.snowfall} mm</span>
                    )}

                </div>

            </div>

        </div>
    )
}