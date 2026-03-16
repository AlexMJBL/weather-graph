import SearchBar from "../components/index/searchBar"
import CurrentWeatherUI from "../components/index/currentWeatherUI"
import DailyWeatherUI from "../components/index/dailyWeatherUI"
import HourlyWeatherUI from "../components/index/hourlyWeatherUI"
import type { City } from "../types/city"
import type { WeatherType } from "../types/weatherType"
import LocationMap from "../components/index/locationMap"

type Props = {
    city: City | null
    forecastTime: WeatherType
    weather: any
    handleSelectCity: (city: City) => void
    handleSelectForecastTime: (weatherType: WeatherType) => void

}
export default function WeatherPage({ city, forecastTime, weather, handleSelectCity, handleSelectForecastTime }: Props) {

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-200 via-sky-300 to-blue-500 flex flex-col items-center gap-8 p-10">

            {/* Header */}
            <h1 className="text-4xl font-bold text-white drop-shadow">
                Weather Graph
            </h1>

            {/* Search */}
            <div className="w-full max-w-xl flex justify-center">
                <SearchBar onSelectCity={handleSelectCity} />
            </div>

            {weather &&
                <>
                    {/* City */}
                    <div className="text-white text-2xl font-semibold drop-shadow">
                        {city?.name} {city?.country && `, ${city.country}`}
                    </div>

                    <div className="w-full max-w-xl">

                        {/* Tabs */}
                        <div className="flex gap-2 ml-2">

                            <button
                                onClick={() => handleSelectForecastTime("current")}
                                className={`px-4 py-2 rounded-t-lg font-medium transition
                                ${forecastTime === "current"
                                        ? "bg-white text-blue-600 shadow"
                                        : "bg-white/40 text-white hover:bg-white/60"}`}
                            >
                                Current
                            </button>

                            <button
                                onClick={() => handleSelectForecastTime("hourly")}
                                className={`px-4 py-2 rounded-t-lg font-medium transition
                                ${forecastTime === "hourly"
                                        ? "bg-white text-blue-600 shadow"
                                        : "bg-white/40 text-white hover:bg-white/60"}`}
                            >
                                Hourly
                            </button>

                            <button
                                onClick={() => handleSelectForecastTime("daily")}
                                className={`px-4 py-2 rounded-t-lg font-medium transition
                                ${forecastTime === "daily"
                                        ? "bg-white text-blue-600 shadow"
                                        : "bg-white/40 text-white hover:bg-white/60"}`}
                            >
                                Daily
                            </button>

                        </div>

                        {/* Panel */}
                        <div className="bg-white rounded-2xl p-6 shadow-xl">

                            {forecastTime == "current" && (
                                <CurrentWeatherUI data={weather.current_weather} />
                            )}

                            {forecastTime == "hourly" && (
                                <HourlyWeatherUI data={weather.hourly} />
                            )}

                            {forecastTime == "daily" && (
                                <DailyWeatherUI data={weather.daily} />
                            )}

                        </div>

                        {/* Map */}
                        {city && (
                            <div className="mt-6 rounded-2xl overflow-hidden shadow-xl">
                                <LocationMap
                                    lat={city.latitude}
                                    lon={city.longitude}
                                />
                            </div>
                        )}

                    </div>
                </>
            }
        </div>
    )
}