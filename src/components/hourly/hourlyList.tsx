import type { HourlyWeather } from "../../types/hourlyWeather"
import HourlyListCard from "./hourlyListCard"
import { formatDateLong } from "../../utils/FormatDate"

type Props = {
    hourlyWeather? : HourlyWeather
}
export default function HourlyList({hourlyWeather}: Props) { 
    return( 
        <div>
            {hourlyWeather?.time.map((time, i) => {

  const date = new Date(time).toLocaleDateString()
  const prevDate =
    i > 0 ? new Date(hourlyWeather.time[i - 1]).toLocaleDateString() : null

  const showDate = date !== prevDate

  return (
    <div key={i}>
      {showDate && <h3>{formatDateLong(date)}</h3>}

          {hourlyWeather.time.map((time, i) => (
                          <HourlyListCard
                                 key={time}
                        time={time}
                        temperature={hourlyWeather.temperature[i]}
                        precipitation_probability={hourlyWeather.precipitation_probability[i]}
                        apparent_temperature={hourlyWeather.apparent_temperature[i]}
                        rain={hourlyWeather.rain[i]}
                        snowfall={hourlyWeather.snowfall[i]}
                        weathercode={hourlyWeather.weathercode[i]}
                        wind_speed={hourlyWeather.wind_speed[i]}
                        relative_humidity={hourlyWeather.relative_humidity[i]}
                          />
                      ))}
    </div>
  )
})}
        </div> 
    )
}