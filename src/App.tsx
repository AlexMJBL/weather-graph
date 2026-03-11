import WeatherPage from "./pages/weatherPage";
import { Routes, Route } from "react-router-dom"
import DailyPage from "./pages/dailyPage";
import HourlyPage from "./pages/hourlyPage";

export default function App(){ 
  return (
    <Routes>
      <Route path="/" element={<WeatherPage />} />
      <Route path="/hourly" element={<HourlyPage />} />
      <Route path="/daily" element={<DailyPage />} />
    </Routes>
    
  )
}