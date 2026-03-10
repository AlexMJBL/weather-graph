import type { DailyWeather } from "../types/dailyWeather"
import DailyWeatherCard from "./dailyWeatherCard"

type Props = { 
    data : DailyWeather
}

export default function DailyWeatherUI( {data} : Props ) {
    return ( 
        <>
            <h2>Daily</h2>

            {data.time.map((time,i) =>  (
                <DailyWeatherCard 
                key={i}
                time = {time}
                temperature_max={data.temperature_max[i]}
                temperature_min={data.temperature_min[i]}
                precipitation_probability_max={data.precipitation_probability_max[i]}
                weathercode={data.weathercode[i]}
                wind_speed_max={data.wind_speed_max[i]}
                />  
            ))}
        </>
    )
}