import { getWeatherInfo } from "../../utils/weatherCode"
import { formatDay } from "../../utils/FormatDay"

type Props = {
    time: string
    temperature_max: number
    temperature_min: number
    precipitation_probability_max: number
    weathercode: number
    wind_speed_max: number
}

export default function DailyWeatherCard(props : Props) {
      const weather = getWeatherInfo(props.weathercode)
        const Icon = weather.icon
        
    
    return (

            <div className="bg-white rounded-xl shadow-sm p-6 border w-full">

            {/* time */}
            <div className="text-center text-xl md:text-lg font-semibold text-gray-600 mb-3">
                {formatDay(props.time)}
            </div>

            <div className="flex justify-between items-center md:flex-col md:gap-3">

                {/* left */}
                <div className="flex items-center gap-3 md:flex-col">

                    <Icon size={40} className="text-blue-500 md:size-32" />

                    <span className="text-3xl md:text-2xl font-bold">
                        {Math.round(props.temperature_min)}°-{Math.round(props.temperature_max)}°
                    </span>

                </div>

                {/* right */}
                <div className="flex flex-col items-end md:items-center text-base md:text-sm text-gray-600 gap-1">
                    <span className="font-semibold">
                        💧 {props.precipitation_probability_max}%
                    </span>
                </div>

            </div>

        </div>
    )
}