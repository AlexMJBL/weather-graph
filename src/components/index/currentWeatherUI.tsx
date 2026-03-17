import type { CurrentWeather } from "../../types/currentWeather"
import { getWeatherInfo } from "../../utils/weatherCode"

type Props = {
  data: CurrentWeather
}

export default function CurrentWeatherUI({ data }: Props) {

  const weather = getWeatherInfo(data.weathercode)
  const Icon = weather.icon
  const Weather_Description = weather.label

  return (
    <div className="flex items-center justify-between p-8 bg-gray-100 rounded-2xl shadow-md w-full">

      {/* Icon + Temp */}
      <div className="flex items-center gap-6">
        <Icon size={80} className="text-gray-700" />
        <span className="text-6xl font-bold text-gray-900">
          {data.temperature_2m}°
        </span>
      </div>

      {/* Infos */}
      <div className="flex flex-col text-right">
        <p className="text-xl font-semibold text-gray-800">
          {Weather_Description}
        </p>

        <p className="text-gray-500">
          Feels like {data.feels}°
        </p>

        <p className="text-gray-500">
          H: {data.temperature_2m_max}°  L: {data.temperature_2m_min}°
        </p>
      </div>

    </div>
  )
}