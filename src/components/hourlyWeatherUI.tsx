import type { HourlyWeather } from "../types/hourlyWeather"

type Props = { 
    data : HourlyWeather
}

export default function HourlyWeatherUI( {data} : Props ) {
    return ( 
        <div>
            <h2>{}</h2>
        </div>
    )
}