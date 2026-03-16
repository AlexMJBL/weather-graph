import type { HourlyWeather } from "../../types/hourlyWeather"
import HourlyListCard from "./hourlyListCard"
import { formatDateLong } from "../../utils/FormatDate"

type Props = {
    hourlyWeather?: HourlyWeather
}

export default function HourlyList({ hourlyWeather }: Props) {
    if (!hourlyWeather) return null

    return (
        <div className="space-y-4">

            {hourlyWeather?.time.map((time, i) => {

                const date = new Date(time).toLocaleDateString()
                const prevDate =
                    i > 0
                        ? new Date(hourlyWeather.time[i - 1]).toLocaleDateString()
                        : null

                const showDate = date !== prevDate

                return (
                    <div key={time}>

                        {showDate && (
                            <h3 className="text-lg font-semibold mt-4">
                                {formatDateLong(date)}
                            </h3>
                        )}

                        <HourlyListCard
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

                    </div>
                )
            })}
        </div>
    )
}