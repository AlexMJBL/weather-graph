import { WiDaySunny, WiCloud, WiRain, WiSnow, WiFog, WiThunderstorm } from "react-icons/wi"

export function getWeatherInfo(code: number) {

  if (code === 0) {
    return { label: "Clear sky", icon: WiDaySunny }
  }

  if (code === 1 || code === 2 || code === 3) {
    return { label: "Cloudy", icon: WiCloud }
  }

  if (code === 45 || code === 48) {
    return { label: "Fog", icon: WiFog }
  }

  if (
    code === 51 || code === 53 || code === 55 ||
    code === 56 || code === 57 ||
    code === 61 || code === 63 || code === 65 ||
    code === 80 || code === 81 || code === 82
  ) {
    return { label: "Rain", icon: WiRain }
  }

  if (
    code === 71 || code === 73 || code === 75 ||
    code === 77 || code === 85 || code === 86
  ) {
    return { label: "Snow", icon: WiSnow }
  }

  if (code === 95 || code === 96 || code === 99) {
    return { label: "Thunderstorm", icon: WiThunderstorm }
  }

  return { label: "Cloudy", icon: WiCloud }
}