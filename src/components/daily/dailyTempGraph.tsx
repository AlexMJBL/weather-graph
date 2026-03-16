import { LineChart, Line, XAxis,YAxis, Tooltip, ResponsiveContainer} from "recharts"
import { formatTimeToHour } from "../../utils/FormatTimeToHour"


type Props = { 
    time : string[] 
    temperature_max : number[]
    temperature_min : number[]
}

export default function DailyTempGraph({ time, temperature_max, temperature_min}: Props) {
    const data = time.map((t, i) => ({
        time: formatTimeToHour(t),
        temp_max: temperature_max[i],
        temp_min: temperature_min[i]
    }))
    return( 
        <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="temp_max" stroke="#ef4444" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="temp_min" stroke="#3b82f6" strokeWidth={3} dot={false} />
            </LineChart>
        </ResponsiveContainer>
    )
}