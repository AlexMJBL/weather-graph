
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
        <div className="grid grid-cols-5 items-center p-3 border-b">

            <div className="flex items-center gap-2">
                <p>{formatTimeToHour(props.time)}</p>
                <Icon size={30} />
            </div>

            <div>
                <p>{props.temperature}°</p>
            </div>

            <div>
                <p>{label}</p>
                <p className="text-sm opacity-70">
                    feels {props.apparent_temperature}°
                </p>
            </div>

            <div>
                <p>{props.precipitation_probability}%</p>
                {props.rain !== 0 && <p>{props.rain} mm</p>}
                {props.snowfall !== 0 && <p>{props.snowfall} cm</p>}
            </div>

            <div>
                <p>{props.wind_speed} km/h</p>
                <p>{props.relative_humidity}%</p>
            </div>

        </div>
    )
}