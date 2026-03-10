import type { CurrentWeather } from "../types/currentWeather"
import { getWeatherInfo } from "../utils/weatherCode"

type Props = {
  data: CurrentWeather
}

export default function CurrentWeatherUI({ data }: Props) {

  const weather = getWeatherInfo(data.weathercode)
  const Icon = weather.icon
  const Weather_Description = weather.label

  return (
   <div className="flex items-center justify-between p-8 bg-gray-200 rounded-xl shadow w-full">

      {/* Icon + Temp */}
      <div className="flex items-center gap-4">
        <Icon size={70} />
        <span className="text-6xl font-bold">
          {Math.round(data.temperature_2m)}°
        </span>
      </div>

      {/* Infos */}
      <div className="flex flex-col text-right text-gray-600">
        <p className="text-lg font-semibold text-gray-800">
          {Weather_Description}
        </p>
        <p>Feels {Math.round(data.feels)}°</p>
        <p>
          H: {Math.round(data.temperature_2m_max)}°  
          L: {Math.round(data.temperature_2m_min)}°
        </p>
      </div>

    </div>
  )
}