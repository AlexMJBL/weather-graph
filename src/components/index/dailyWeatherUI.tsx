import type { DailyWeather } from "../../types/dailyWeather"
import DailyWeatherCard from "./dailyWeatherCard"
import { Link } from "react-router-dom"

type Props = {
    data: DailyWeather
}

export default function DailyWeatherUI({ data }: Props) {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">

                {data.time.slice(0,4).map((time, i) => (
                    <DailyWeatherCard
                        key={i}
                        time={time}
                        temperature_max={data.temperature_max[i]}
                        temperature_min={data.temperature_min[i]}
                        precipitation_probability_max={data.precipitation_probability_max[i]}
                        weathercode={data.weathercode[i]}
                        wind_speed_max={data.wind_speed_max[i]}
                    />
                ))}
            </div >
            <Link to="/daily">Full 7 day</Link>
        </div >
    )
}