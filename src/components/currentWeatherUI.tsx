import type { CurrentWeather } from "../types/currentWeather"

type Props = { 
    data : CurrentWeather
}

export default function CurrentWeatherUI({data} : Props ) {
    return ( 
        <div>
            <h2>{}</h2>
        </div>
    )
}