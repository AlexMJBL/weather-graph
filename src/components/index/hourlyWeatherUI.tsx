import type { HourlyWeather } from "../../types/hourlyWeather"
import HourlyWeatherCard from "./hourlyWeatherCard"
import { Link } from "react-router-dom"


type Props = { 
    data: HourlyWeather
}

export default function HourlyWeatherUI({ data }: Props) {

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
                {data.time.slice(0,4).map((time,i) => (
                    <HourlyWeatherCard
                        key={time}
                        time={time}
                        temperature={data.temperature[i]}
                        precipitation_probability={data.precipitation_probability[i]}
                        apparent_temperature={data.apparent_temperature[i]}
                        rain={data.rain[i]}
                        snowfall={data.snowfall[i]}
                        weathercode={data.weathercode[i]}
                        wind_speed={data.wind_speed[i]}
                        relative_humidity={data.relative_humidity[i]}
                    />
                ))}
            </div>
            <Link to="/hourly">Full 24 hours</Link>
        </div>
    )
}