import type { DailyWeather } from "../types/dailyWeather"

type Props = { 
    data : DailyWeather
}

export default function DailyWeatherUI( {data} : Props ) {
    return ( 
        <div>
            <h2></h2>
        </div>
    )
}