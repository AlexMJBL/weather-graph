import WeatherPage from "./pages/weatherPage";
import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import DailyPage from "./pages/dailyPage";
import HourlyPage from "./pages/hourlyPage";
import { useWeather } from "./hooks/useWeather";


import type { City } from "./types/city"
import type { WeatherType } from "./types/weatherType"

export default function App(){ 
   const [city, setCity] = useState<City | null>(null)
      const [forecastTime, setForecastTime] = useState<WeatherType>("current")
      const { weather, fetchWeather } = useWeather()
  
      useEffect(() => {
          if (city) {
              fetchWeather(city.latitude, city.longitude)
          }
      }, [city])

  return (
    <Routes>
      <Route path="/" element={<WeatherPage city={city} forecastTime={forecastTime} weather={weather} handleSelectCity={setCity} handleSelectForecastTime={setForecastTime}/>} />
      <Route path="/hourly" element={<HourlyPage />} />
      <Route path="/daily" element={<DailyPage />} />
    </Routes>
    
  )
}