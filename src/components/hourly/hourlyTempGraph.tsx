import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { formatTimeToHour } from "../../utils/FormatTimeToHour"


type Props = {
    time: string[]
    temperature: number[]
}

export default function HourlyTempGraph({ time, temperature }: Props) {
    const data = time.map((t, i) => ({
        time: formatTimeToHour(t),
        temp: temperature[i],

    }))
    return (
        <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
                <XAxis
                    dataKey="time"
                    tickFormatter={(time) => {
                        const hour = parseInt(time)
                        return hour % 2 === 0 ? `${hour}h` : ""
                    }}
                />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="temp" stroke="#3b82f6" strokeWidth={3} dot={false} />
            </LineChart>
        </ResponsiveContainer>
    )
}