import { getWeatherInfo } from "../../utils/weatherCode"

type Props = {
    time: string
    temperature_max: number
    temperature_min: number
    precipitation_probability_max: number
    weathercode: number
    wind_speed_max: number
}

export default function DailyListCard(props: Props) {

    const weather = getWeatherInfo(props.weathercode)
    const Icon = weather.icon

    const date = new Date(props.time)
    const day = date.toLocaleDateString("en-US", { weekday: "short" })

    return (
        <div className="grid grid-cols-5 items-center p-4 border-b border-gray-200 hover:bg-gray-50 transition">

            {/* Day */}
            <div className="font-semibold text-lg text-gray-700">
                {day}
            </div>

            {/* Icon */}
            <div className="flex justify-center">
                <Icon size={32} className="text-blue-500"/>
            </div>

            {/* Temp */}
            <div className="text-center">
                <span className="font-bold text-lg text-gray-800">
                    {props.temperature_max}°
                </span>

                <span className="text-gray-500 ml-4">
                    {props.temperature_min}°
                </span>
            </div>

            {/* Precipitation */}
            <div className="text-center text-sm text-gray-600">
                💧 {props.precipitation_probability_max}%
            </div>

            {/* Wind */}
            <div className="text-center text-sm text-gray-600">
                💨 {props.wind_speed_max} km/h
            </div>

        </div>
    )
}