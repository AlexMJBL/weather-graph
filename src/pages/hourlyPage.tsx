import HourlyList from "../components/hourly/hourlyList";
import HourlyTempGraph from "../components/hourly/hourlyTempGraph";
import type { City } from "../types/city";
import type { HourlyWeather } from "../types/hourlyWeather";

type Props = { 
    hourlyWeather? : HourlyWeather
    city?: City
}
export default function HourlyPage({hourlyWeather, city}:Props) {
    return (
        <div>
            <h2>{city?.name} , {city?.country}</h2>
            <HourlyTempGraph/>

            <HourlyList hourlyWeather={hourlyWeather}/>
        </div>
    )
}