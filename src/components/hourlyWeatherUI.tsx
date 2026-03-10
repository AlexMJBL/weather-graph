import type { HourlyWeather } from "../types/hourlyWeather"
import HourlyWeatherCard from "./hourlyWeatherCard"

type Props = { 
    data : HourlyWeather
}

export default function HourlyWeatherUI( {data} : Props ) {
    return ( 
        <div>
            <h2>Hourly</h2>

            {data.time.map((time,i) => (
                <HourlyWeatherCard 
                key={i}
                time={time}
                temperature={data.temperature[i]}
                precipitation_probability={data.precipitation_probability[i]}
                apparent_temperature={data.apparent_temperature[i]}
                rain={data.rain[i]}
                weathercode={data.weathercode[i]}
                wind_speed={data.wind_speed[i]}
                relative_humidity={data.relative_humidity[i]}
                />
            ))}
        </div>
    )
}