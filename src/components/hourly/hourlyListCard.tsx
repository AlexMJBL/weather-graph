
import { formatTimeToHour } from "../../utils/FormatTimeToHour"
import { getWeatherInfo } from "../../utils/weatherCode"

type Props = {
    time: string
    temperature: number
    precipitation_probability: number
    apparent_temperature: number
    rain: number
    snowfall: number
    weathercode: number
    wind_speed: number
    relative_humidity: number
}
export default function HourlyListCard(props: Props) {
    const weather = getWeatherInfo(props.weathercode)
    const Icon = weather.icon
    const label = weather.label


    return (
        <div>
            <div>
                <p>{formatTimeToHour(props.time)}</p>
                <Icon size={30} />
            </div>
            <div>
                <p>{props.temperature}</p>
            </div>
            <div>
                <p>{label}</p>
                <p>{props.apparent_temperature}</p>
            </div>
            <div>
                <p>{props.precipitation_probability}</p>
                {props.rain != 0 && <p>{props.rain}</p>}
                {props.snowfall != 0 && <p>{props.snowfall}</p>}
            </div>
            <div>
                <p>{props.wind_speed}</p>
                <p>{props.relative_humidity}</p>
            </div>
        </div>
    )
}