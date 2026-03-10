type Props = {
    time : string
    temperature : number
    precipitation_probability: number
    apparent_temperature : number
    rain : number 
    weathercode : number
    wind_speed:number
    relative_humidity:number
}

export default function HourlyWeatherCard(props: Props) {
    return (
        <>
        <p>{props.time}</p>
            <p>{props.temperature}</p>
        </>
    );
}