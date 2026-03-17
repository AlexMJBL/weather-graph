import { formatTimeToHour } from "../../utils/FormatTimeToHour"
import { getWeatherInfo } from "../../utils/weatherCode"

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

export default function HourlyListCard(props: Props) {

    const weather = getWeatherInfo(props.weathercode)
    const Icon = weather.icon
    const label = weather.label

    return (

        <div className="grid grid-cols-5 items-center p-4 border-b border-gray-200 hover:bg-gray-50 transition">

            {/* Time + Icon */}
            <div className="flex items-center gap-3 font-medium text-gray-700">
                <p>{formatTimeToHour(props.time)}</p>
                <Icon size={26} className="text-blue-500" />
            </div>

            {/* Temp */}
            <div className="text-lg font-semibold text-gray-800">
                {props.temperature}°
            </div>

            {/* Weather */}
            <div className="text-sm text-gray-700">
                <p className="font-medium">{label}</p>
                <p className="text-gray-500">
                    feels {props.apparent_temperature}°
                </p>
            </div>

            {/* Precipitation */}
            <div className="text-sm text-gray-600">

                <p>💧 {props.precipitation_probability}%</p>

                {props.rain !== 0 && (
                    <p>🌧 {props.rain} mm</p>
                )}

                {props.snowfall !== 0 && (
                    <p>❄️ {props.snowfall} cm</p>
                )}

            </div>

            {/* Wind + Humidity */}
            <div className="text-sm text-gray-600">

                <p>💨 {props.wind_speed} km/h</p>
                <p>💧 {props.relative_humidity}%</p>

            </div>

        </div>

    )
}