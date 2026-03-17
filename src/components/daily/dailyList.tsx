import type { DailyWeather } from "../../types/dailyWeather"
import { formatDateLong } from "../../utils/FormatDate"
import DailyListCard from "./dailyListCard"

type Props = {
    dailyWeather: DailyWeather
}

export default function DailyList({ dailyWeather }: Props) {

    return (

        <div className="space-y-4">

            {dailyWeather.time.map((time, i) => {

                const date = new Date(time).toLocaleDateString()
                const prevDate =
                    i > 0
                        ? new Date(dailyWeather.time[i - 1]).toLocaleDateString()
                        : null

                const showDate = date !== prevDate

                return (
                    <div key={time}>

                        {showDate && (
                            <h3 className="text-lg font-semibold mt-4 text-gray-700">
                                {formatDateLong(date)}
                            </h3>
                        )}

                        <DailyListCard
                            time={dailyWeather.time[i]}
                            temperature_max={dailyWeather.temperature_max[i]}
                            temperature_min={dailyWeather.temperature_min[i]}
                            precipitation_probability_max={dailyWeather.precipitation_probability_max[i]}
                            weathercode={dailyWeather.weathercode[i]}
                            wind_speed_max={dailyWeather.wind_speed_max[i]}
                        />

                    </div>
                )
            })}
        </div>
    )
}