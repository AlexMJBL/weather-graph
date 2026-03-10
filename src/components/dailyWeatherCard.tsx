type Props = {
    time: string
    temperature_max: number
    temperature_min: number
    precipitation_probability_max: number
    weathercode: number
    wind_speed_max: number
}

export default function DailyWeatherCard(props : Props) {
        return (
        <div>
            <p>{props.time}</p>
            <p>Max: {props.temperature_max}°</p>
            <p>Min: {props.temperature_min}°</p>
            <p>Rain: {props.precipitation_probability_max}%</p>
            <p>Wind: {props.wind_speed_max} km/h</p>
        </div>
    )
}