import SearchBar from "../components/index/searchBar"
import CurrentWeatherUI from "../components/index/currentWeatherUI"
import DailyWeatherUI from "../components/index/dailyWeatherUI"
import HourlyWeatherUI from "../components/index/hourlyWeatherUI"
import type { City } from "../types/city"
import type { WeatherType } from "../types/weatherType"

type Props = {
    city: City | null
    forecastTime: WeatherType
    weather: any
    handleSelectCity: (city: City) => void
    handleSelectForecastTime: (weatherType: WeatherType) => void

}
export default function WeatherPage({ city, forecastTime, weather, handleSelectCity, handleSelectForecastTime }: Props) {

    return (
        <div className="flex min-h-screen flex-col items-center gap-6 p-10">

            <h1 className="text-3xl font-bold">
                Weather Graph
            </h1>

            <SearchBar onSelectCity={handleSelectCity} />

            {city &&
                <>
                    <div>
                        <h2>{city?.name} , {city?.country}</h2>
                    </div>

                    <div className="w-full max-w-xl">

                        {/* Tabs */}
                        <div className="flex">
                            <button
                                onClick={() => handleSelectForecastTime("current")}
                                className={`px-4 py-2 border border-b-0 rounded-t-lg
                                    ${forecastTime === "current"
                                        ? "bg-white text-black -mb-px"
                                        : "bg-gray-200 text-gray-600 hover:bg-gray-300"}`}
                            >
                                Current
                            </button>

                            <button
                                onClick={() => handleSelectForecastTime("hourly")}
                                className={`px-4 py-2 border border-b-0 rounded-t-lg
                                    ${forecastTime === "hourly"
                                        ? "bg-white text-black -mb-px"
                                        : "bg-gray-200 text-gray-600 hover:bg-gray-300"}`}
                            >
                                Hourly
                            </button>

                            <button
                                onClick={() => handleSelectForecastTime("daily")}
                                className={`px-4 py-2 border border-b-0 rounded-t-lg
                                    ${forecastTime === "daily"
                                        ? "bg-white text-black -mb-px"
                                        : "bg-gray-200 text-gray-600 hover:bg-gray-300"}`}
                            >
                                Daily
                            </button>
                        </div>

                        {/* Panel */}
                        <div className="border rounded-b-lg p-6 bg-white shadow ">

                            {forecastTime == "current" && weather && (
                                <CurrentWeatherUI data={weather.current_weather} />
                            )}

                            {forecastTime == "hourly" && weather && (
                                <HourlyWeatherUI data={weather.hourly} />
                            )}

                            {forecastTime == "daily" && weather && (
                                <DailyWeatherUI data={weather.daily} />
                            )}

                        </div>

                    </div>
                </>
            }
        </div>
    )
}