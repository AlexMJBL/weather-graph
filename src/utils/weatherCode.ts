import { WiDaySunny, WiCloud, WiRain, WiSnow, WiFog, WiThunderstorm } from "react-icons/wi"

export function getWeatherInfo(code: number) {

  if (code === 0) return { label: "Clear sky", icon: WiDaySunny }

  if (code <= 3) return { label: "Cloudy", icon: WiCloud }

  if (code <= 48) return { label: "Fog", icon: WiFog }

  if (code <= 65) return { label: "Rain", icon: WiRain }

  if (code <= 75) return { label: "Snow", icon: WiSnow }

  if (code <= 82) return { label: "Rain showers", icon: WiRain }

  if (code === 95) return { label: "Thunderstorm", icon: WiThunderstorm }

  return { label: "Cloudy", icon: WiCloud }
}